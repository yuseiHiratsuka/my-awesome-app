function loadConfig() {
  return {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    dbUrl: process.env.DATABASE_URL || 'sqlite://data/app.db',
  };
}

module.exports = { loadConfig };
