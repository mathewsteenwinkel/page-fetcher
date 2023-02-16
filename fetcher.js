const request = require('request');
const fs = require('fs')
console.log(process.argv[2])

request(process.argv[2], function (error, response, body) {
  fs.writeFile(process.argv[3], body, error => {
    if (error) {
      console.error(err);
    }
      const stats = fs.statSync(process.argv[3]).size
      console.log(`Downloaded and saved ${stats} bytes to ${process.argv[3]}`);
  });
  
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

