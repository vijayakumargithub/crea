# Train Routes App

Find the shortest train routes between two stations using Nodejs.

## Usage

> ### Run App

``` bash
 npm  install
 Drag and Drop CSV file in terminal or enter file name that already uploaded in data source folder
 condition:
    Typing or drag droping files should have .csv extension
    Empty space throw error
    Uppercase and lowercase allowed for user to enter the station information.
    If user enter multiple character system throw an error signle character only allowed.
    if user entered invalid character system throw an error message and allow user to type again appropriate information
 node main.js --filename=./data/rotues.csv
```

> ### Run test

``` bash
npm test
```