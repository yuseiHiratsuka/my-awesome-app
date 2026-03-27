function setupRoutes(app) {
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to My Awesome App', version: '1.0.0' });
  });

  app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
  });

  app.post('/api/data', (req, res) => {
    const { name, value } = req.body;
    if (!name || !value) {
      return res.status(400).json({ error: 'name and value are required' });
    }
    res.json({ success: true, data: { name, value } });
  });
}

module.exports = { setupRoutes };
