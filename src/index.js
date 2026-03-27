const express = require('express');
const { loadConfig } = require('./config');
const { setupRoutes } = require('./routes');

const app = express();
const config = loadConfig();

app.use(express.json());
app.use(express.static('public'));

setupRoutes(app);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});

module.exports = app;
