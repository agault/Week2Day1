var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var buffer = ""

    response.on('data', function (chunk) {
      // console.log(`${chunk}${'\n'}`);
      buffer += chunk
    });

    response.on('end', function() {
      callback(buffer);
    })
  });
}


var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}

var options2 = {
  host: 'reddit.com',
  path: '/r/toronto'
}

function printHTML (html) {
  console.log(html);
}


getHTML(options, printHTML)

getHTML(options, function(buffer) {
  console.log(buffer.length)
})