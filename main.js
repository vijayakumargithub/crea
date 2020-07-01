const readline = require("readline");
var utilites = require('./src/utilites');
var extractCSV = require('./src/extractCSV');
var trainFrequency = require('./src/trainFrequency');
var locationCSV = extractCSV.getFileDetail();

async function extractedData() {
    return await Promise.resolve(extractCSV.extractDataFromCSV(locationCSV));
}

(async () => {
    var rotuesList = await extractedData();
    exportUserInput(rotuesList);
})()

var exportUserInput = function(obj) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function getData() {
        rl.question("What station are you getting on the train?: ", function(startStation) {
            rl.question("What station are you getting off the train?: ", function(endStation) {
                var checkSameChar = (startStation === endStation) ? true: false;
                if(utilites.isSingleChar(startStation) && utilites.isSingleChar(endStation) && !checkSameChar) {
                    let rotuesList = new trainFrequency(obj);
                    rotuesList.checkTravelRoute(startStation.toUpperCase(), endStation.toUpperCase());
                    rl.close();
                } else {
                    console.log('Please enter valid train rotues');
                    getData();
                }
            });
        });

        rl.on("close", function() {
            process.exit(0);
        });
    
    }
    getData();
};
module.exports.exportUserInput = exportUserInput;