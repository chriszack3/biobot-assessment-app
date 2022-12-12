const express = require('express')
const path = require('path')
const kits = require('./kits')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api/*", (req, res) => {
  const autoComplete = kits.filter(kit => kit.label_id.includes(req.params[0]))
  res.json(autoComplete);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})