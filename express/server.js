const express = require('express');
const path = require('path');
const app = express();
const { exec } = require("child_process");

const PORT = 3000;

const http = require('http').createServer(app);
http.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

app.use('/', express.static( path.join(__dirname, 'public' )));
app.use('/react', express.static( path.join(__dirname, '..', 'client_app/build' )));

app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, 'public/main.html'));
});

app.get('/react', (req, res) => {
  res.sendFile( path.join(__dirname, '..', 'client_app/build/index.html'));
});

app.get('/command', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.query.command);
  await exec(`${req.query.command}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.send('some error happened: 😭');
    }

    return res.send(stdout);
  });
});