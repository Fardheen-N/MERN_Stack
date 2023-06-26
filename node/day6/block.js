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

function mapFiles(filePath, state, capital) {
  const pairs = state.map((state, index) => `${state}=>${capital[index]}`).join("\n");
  return write(filePath, pairs);
}

const state = ["TN", "JH", "MH", "KL", "AP", "MP", "UP", "HP", "JK", "KA"];
const capital = ["Chennai", "Ranchi", "Mumbai", "Thiruvananthapuram", "Amaravati", "Bhopal", "Lucknow", "Shimla", "Srinagar", "Bangalore"];

write(`${__dirname}/state.txt`, state.join("\n"))
  .then(() => {
    console.log("State written");
    return write(`${__dirname}/capital.txt`, capital.join("\n"));
  })
  .then(() => {
    console.log("Capital written");
    return read(`${__dirname}/state.txt`);
  })
  .then((data) => {
    console.log("***State read*******");
    console.log(data.toString());
    return read(`${__dirname}/capital.txt`);
  })
  .then((data) => {
    console.log("***Capital read******");
    console.log(data.toString());
    return mapFiles(`${__dirname}/state-capital.txt`, state, capital);
  })
  .then(() => {
    return read(`${__dirname}/state-capital.txt`);
  })
  .then((data) => {
    console.log("***State-capital read****");
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });