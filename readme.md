# Train Routes App

Find the shortest train routes between two stations using Nodejs.

## Usage

> ### Run App

``` bash
 Download and install https://nodejs.org/en/

 npm  install
 
 Drag and Drop CSV file in terminal or enter file name that already uploaded in data source folder
 
 condition:
    Type file name or else drag and drop in terminal window, Files name should have .csv extension

    Empty space throw error

    Uppercase and lowercase allowed for user to enter the station information.

    If user enter multiple character system throw an error.

    if user entered invalid character system throw an error message and allow user to fill again.
 
 node main.js --filename=./data/rotues.csv
```

> ### Run test

``` bash

npm install mocha

mkdir test

npm test
```