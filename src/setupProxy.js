// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://json-server-openlake-nka0ctd3e-suprabhosahas-projects.vercel.app/',
      changeOrigin: true,
    })
  );
};
