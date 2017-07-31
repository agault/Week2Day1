var https = require('https');


var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}


function getAndPrintHTML (options) {
  https.get(options, function (response) {

    response.setEncoding('utf8');

    var buffer = ""

    response.on('data', function (chunk) {
      // console.log(`${chunk}${'\n'}`);
      buffer += chunk
    });

    response.on('end', function() {
      console.log(buffer);
    })


  });


}

getAndPrintHTML(options)