const { describe, it } = require('node:test');
const assert = require('node:assert');
const { loadConfig } = require('../src/config');

describe('Config', () => {
  it('should return default port 3000', () => {
    const config = loadConfig();
    assert.strictEqual(config.port, 3000);
  });

  it('should return development as default env', () => {
    const config = loadConfig();
    assert.strictEqual(config.nodeEnv, 'development');
  });
});
