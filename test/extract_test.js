var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var assert = require('assert');

var extractCSV = require('../src/extractCSV');

describe('#ReadCSVFiles', function () {
    it('Should read file and return string', function (done) {
        extractCSV.extractDataFromCSV('.\\data\\rotues.csv')
            .then(function (data) {
                expect(data.length).to.be.greaterThan(0);
                assert.ok(data);
                done();
            }).catch(function(err){
                console.error(err);
            });;
    });
});