const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
  res.send('<p style="color: blue;">Hello, World!!</p>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
