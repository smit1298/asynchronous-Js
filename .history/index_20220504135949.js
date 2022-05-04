const fs = require('fs');
const superagent = require('superagetn')

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    console.log(`Breed: ${data}`);
});