/**
 * Gumroad Webhook Server
 * Prompt Pack Sales — automation/webhook-server.js
 * Port: 3003
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3003;
const SALES_FILE = path.join(__dirname, 'sales.json');

// ─── Middleware ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS for dashboard
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Serve dashboard.html at root
app.use(express.static(__dirname));

// ─── Helpers ────────────────────────────────────────────────────────────────
function loadSales() {
  if (!fs.existsSync(SALES_FILE)) {
    return { transactions: [] };
  }
  try {
    return JSON.parse(fs.readFileSync(SALES_FILE, 'utf8'));
  } catch {
    return { transactions: [] };
  }
}

function saveSales(data) {
  fs.writeFileSync(SALES_FILE, JSON.stringify(data, null, 2));
}

function triggerThankYouEmail(sale) {
  // ── STUB: Replace with real email provider (SendGrid, Resend, etc.) ──
  console.log('\n📧 [EMAIL STUB] Thank-you email triggered:');
  console.log(`   To:      ${sale.email}`);
  console.log(`   Name:    ${sale.buyer_name}`);
  console.log(`   Product: ${sale.product_name}`);
  console.log(`   Amount:  $${sale.price}`);
  console.log('   Subject: "Thanks for your purchase! Here\'s what\'s next 🎉"');
  console.log('   → Integrate SendGrid/Resend/Mailgun here when ready.\n');
}

// ─── Routes ─────────────────────────────────────────────────────────────────

/**
 * POST /webhook/gumroad
 * Receives Gumroad sale notifications (IPN ping)
 * Docs: https://gumroad.com/api#ping
 */
app.post('/webhook/gumroad', (req, res) => {
  const payload = req.body;

  console.log('\n🛒 [GUMROAD WEBHOOK] New sale received:');
  console.log(JSON.stringify(payload, null, 2));

  const transaction = {
    id:           payload.sale_id      || `manual-${Date.now()}`,
    buyer_name:   payload.full_name    || 'Unknown',
    email:        payload.email        || '',
    product_name: payload.product_name || 'Unknown Product',
    price:        parseFloat(payload.price || 0),
    currency:     payload.currency     || 'USD',
    timestamp:    payload.sale_timestamp || new Date().toISOString(),
    received_at:  new Date().toISOString(),
    country:      payload.ip_country   || '',
    refunded:     payload.refunded     || false,
    test:         payload.test         || false,
  };

  // Persist to sales.json
  const data = loadSales();
  data.transactions.unshift(transaction); // newest first
  saveSales(data);

  console.log(`✅ Sale logged: ${transaction.buyer_name} — $${transaction.price} (${transaction.product_name})`);

  // Fire thank-you email stub
  triggerThankYouEmail(transaction);

  res.json({ success: true, message: 'Sale recorded', id: transaction.id });
});

/**
 * GET /sales
 * Returns sales summary + last 10 transactions
 */
app.get('/sales', (req, res) => {
  const data = loadSales();
  const live = data.transactions.filter(t => !t.refunded && !t.test);

  const totalSales   = live.length;
  const totalRevenue = live.reduce((sum, t) => sum + (t.price || 0), 0);
  const last10       = data.transactions.slice(0, 10);

  // Simple product breakdown
  const byProduct = {};
  live.forEach(t => {
    const name = t.product_name || 'Unknown';
    if (!byProduct[name]) byProduct[name] = { sales: 0, revenue: 0 };
    byProduct[name].sales++;
    byProduct[name].revenue += t.price || 0;
  });

  res.json({
    summary: {
      total_sales:   totalSales,
      total_revenue: parseFloat(totalRevenue.toFixed(2)),
      currency:      'USD',
      as_of:         new Date().toISOString(),
    },
    by_product: byProduct,
    recent_transactions: last10,
  });
});

/**
 * POST /sales/test
 * Fire a fake sale for testing (dev only)
 */
app.post('/sales/test', (req, res) => {
  const fake = {
    sale_id:       `test-${Date.now()}`,
    full_name:     'Test Buyer',
    email:         'test@example.com',
    product_name:  'AI Prompt Pack Pro',
    price:         '9.99',
    currency:      'USD',
    sale_timestamp: new Date().toISOString(),
    test:          true,
  };

  // Re-use webhook handler logic
  const mockReq = { body: fake };
  const mockRes = {
    json: (data) => res.json({ injected: true, ...data }),
  };

  app.handle({ ...mockReq, method: 'POST', url: '/webhook/gumroad' }, mockRes);

  // Direct call instead
  const transaction = {
    id:           fake.sale_id,
    buyer_name:   fake.full_name,
    email:        fake.email,
    product_name: fake.product_name,
    price:        parseFloat(fake.price),
    currency:     fake.currency,
    timestamp:    fake.sale_timestamp,
    received_at:  new Date().toISOString(),
    country:      'US',
    refunded:     false,
    test:         true,
  };

  const data = loadSales();
  data.transactions.unshift(transaction);
  saveSales(data);
  triggerThankYouEmail(transaction);

  console.log('🧪 [TEST] Fake sale injected.');
  res.json({ success: true, message: 'Test sale injected', transaction });
});

// ─── Health check ────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'gumroad-webhook-server', port: PORT, uptime: process.uptime() });
});

// ─── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Gumroad Webhook Server running on http://localhost:${PORT}`);
  console.log(`   POST /webhook/gumroad  → receives Gumroad sale pings`);
  console.log(`   GET  /sales            → sales summary + recent transactions`);
  console.log(`   POST /sales/test       → inject a fake sale for testing`);
  console.log(`   GET  /health           → health check`);
  console.log(`   GET  /                 → sales dashboard (dashboard.html)\n`);
});
