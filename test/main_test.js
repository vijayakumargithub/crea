var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var assert = require('assert');

const readline = require("readline");
var utilites = require('../src/utilites');
var extractCSV = require('../src/extractCSV');
var trainFrequency = require('../src/trainFrequency');
var main = require('../main');


describe('#ReadCSVFiles', function () {
    it('Should read file and return string', function (done) {
        extractCSV.extractDataFromCSV('.\\data\\rotues.csv')
            .then(function (data) {
                expect(data.length).to.be.greaterThan(0);
                assert.ok(data);
                done();
            }).catch(err => {
                console.error(err);
            });;
    });
});