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

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) =>{
        fs.writeFile(file, data, err =>{
            if (err) reject('could not write a file')
            resolve('success');
        })
    })
}

readFilePro(`${__dirname}/dog.txt`).then(data => {
    console.log(`Breed: ${data}`);

    return superagent 
      .get(`https://dog.ceo/api/breed/${data}/images/random`);
})
      .then((res) => {
        console.log(res.body.message);
  
        fs.writeFile('dog-img.txt', res.body.message, (err) => {
          console.log('Random dog image saved to file');
        });
      })
      .catch((err) => {
        console.log(err.message);
      });

