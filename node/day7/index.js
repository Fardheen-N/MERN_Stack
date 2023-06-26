const fs = require('fs');

function read(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject("Failed read");
      } else {
        resolve(data);
      }
    });
  });
}

function write(filePath, inputData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, inputData, (err) => {
      if (err) {
        reject("Failed to write");
      } else {
        resolve();
      }
    });
  });
}
module.exports = {read,write};