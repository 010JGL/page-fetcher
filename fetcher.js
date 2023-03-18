const fs = require('fs');

let input = process.argv.slice(2);



//console.log(input);
const url = input[0];
const fileLocation = input[1];


const request = require('request');
request(url, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  
  fs.writeFile(fileLocation, body, err => {
    if (err) {
      console.error(err);
    }
    let str = body.length;
    //let result = index.read(b, o, length)
    return console.log(`Downloaded and saved ${str} to ${fileLocation}`);
  });
});







// takes in a URL
// takes in a local file path

