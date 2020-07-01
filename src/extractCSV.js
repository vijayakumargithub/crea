const csv = require('csvtojson');
const path = require('path');
const fs = require('fs');
var utilites = require('./utilites');
const { rejects } = require('assert');

//Interactive command line tools

  var argv = require('yargs').argv;
  var fileLocation = argv.filename;
  
  function getFileDetail(fileLocation) {
  if(utilites.isNaN(fileLocation) == false || utilites.isNull(fileLocation) !== false || path.extname(fileLocation) !== '.csv' || utilites.isEmpty(fileLocation) === true) {
    console.log('System can not be recognise your file format please upload .CSV file');
    process.exit(0);
    return;
  } else if(path.isAbsolute(fileLocation) === true && path.extname(fileLocation) === '.csv') {
    return fileLocation;
  } else { 
    fileLocation = 'data/'+fileLocation;
    return fileLocation;
  }
}

function extractDataFromCSV(obj) {
    return csv({
      noheader:true,
      output: "csv"
    })
    .fromFile(obj)
    .then((value)=>{
      return value;
    })
    .catch((error)=> {
      return console.log(reject(error));
    });

}
module.exports.getFileDetail = getFileDetail;
module.exports.extractDataFromCSV = extractDataFromCSV;