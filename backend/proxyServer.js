const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3001;

app.use('/api', createProxyMiddleware({
  target: 'https://bucket-assignment-vercel.vercel.app',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api', // URL 재작성
  },
}));

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});