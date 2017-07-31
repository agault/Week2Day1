var https = require('https');
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    var empty = ""
    response.on('data', function (chunk) {
    console.log(`${chunk}${'\n'}`);
      //for(var i = 0; i < chunk.length; i++){
        //var buff = chunk[i]
        empty += chunk
        console.log(empty)
      //}
    });
  });



}


  /* Add your code here */
  getAndPrintHTML()