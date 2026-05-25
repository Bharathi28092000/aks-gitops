const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api', (req, res) => {

  res.json({
    message: "Hello from AKS API"
  });

});

app.listen(5000, () => {

  console.log("API running on port 5000");

});