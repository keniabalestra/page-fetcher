const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
let url = args[0];
let filePath = args[1];


const fetchedFile = function(url, filePath) {
  request(url, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    fs.writeFile(filePath, body, err => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
      console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
    });
  });
};
fetchedFile(url, filePath);






