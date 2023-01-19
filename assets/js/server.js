const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("./"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
})

let server = http.createServer(app);

server.listen(0, () => console.log(`Server is running... on http://localhost:${server.address().port}`));