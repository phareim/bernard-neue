// Description:
//   talks to the web.
//
var fs = require('fs');
module.exports = function (robot) {
  robot.router.get('/', function (req, res) {
    console.log('get!');
    fs.readFile('static/bernard.html', function (error, content) {
      console.log(error);
      console.log(content);      
      res.end(content, 'utf-8');
    });
  });
}
