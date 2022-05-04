const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) =>{
      fs.readFile(file, (err, data) =>{
          if(err) reject('i could not find that file')
          resolve(data);
      })
  });
};

readFilePro(`${__dirname}/dog.txt`).then(data => {

})

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
 
});
