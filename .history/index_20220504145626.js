const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`).then(res =>{
        if (err) return console.log(err.message);
        console.log(res.body.message);
  
        fs.writeFile('dog-img.txt', res.body.message, err => {
            console.log('Random dog image saved to file');
        })
    }).
   });
