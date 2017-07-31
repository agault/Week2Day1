var https = require('https');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}


function getAndPrintHTML (options) {
  https.get(options, function (response) {

    response.setEncoding('utf8');

    var empty = ""
    response.on('data', function (chunk) {
    console.log(`${chunk}${'\n'}`);

        empty += chunk
        console.log(empty)

    });
  });


}

getAndPrintHTML(options)