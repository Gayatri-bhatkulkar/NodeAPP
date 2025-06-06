const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js inside Docker!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://54.89.221.123:${PORT}`);
});
