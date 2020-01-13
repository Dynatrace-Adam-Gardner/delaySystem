const express = require('express');
const filesystem = require('fs');
const app = express();

const port = 80;

function renderPage(res) {
  res.sendFile(__dirname + '/index.html'); 
}
app.listen(port, function() {
  console.log('listening on port ' + port);
});
 
app.get('/', (req, res) => {
    setTimeout(renderPage, 3000, res);
});
