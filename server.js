const express = require("express");
const app = express();

let hangman = require('./assets/json/hangman.json');
let hug = require('./assets/gifs/hug.json');
let eightBall = require('./assets/json/8ball.json');

app.get('/', function (request, response) {
    response.send('Thanks for checking this out! The Repository is located <a href="https://github.com/ntmnathan/express-restapi/">here.</a> Also join my Discord Server <a href="https://discord.com/invite/G2rb53z">https://discord.com/invite/G2rb53z</a>');
});

//Random Hangman Response
app.get('/api/8ball', function (req, res) {
    let eball = eightBall[Math.floor(Math.random() * eightBall.length)]
    res.send(({ response: eball }));
});

//Random Hug GIF
app.get('/api/hug', function (req, res) {
    let hugs = hug[Math.floor(Math.random() * hug.length)]
    res.send(({ response: hugs }));
});

//List of Hangman Words
app.get('/api/hangman', function (req, res) {
    res.send(hangman);
});

app.listen(3000, function () {
    console.log('API is now online');
}); //You can change the port to anything if you like to. Most people preferrably use Port 3000.
