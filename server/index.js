const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Setup Prerender.io
app.use(require('prerender-node').set('prerenderToken', 'OGj5lmcxQRskmWMcLP5Y'));

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
// TODO: Manage API requests here
// Answer API requests.
// app.get('/api', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

app.get('*', (req, res) => {
// Return the sitemap from the server, bypassing the react app  
if ('/sitemap.xml' === req.url) {
  return res.sendFile(path.resolve(__dirname, '../react-ui/build', 'sitemap.xml'))
}
// All remaining requests return the React app, so it can handle routing.
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
