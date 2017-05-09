var sys = require('sys')
var exec = require('child_process').exec;

module.exports = function (robot) {
  robot.respond(/sys: (.*)/i, function (res) {
    var husk = res.match[1];
    res.send('din kommando: ' + husk);
  });

  robot.respond(/pwd/i, function (res) {
        var pull = spawn('pwd', []);
    pull.stdout.on('data', data => {
          res.send('working Directory: ' + data);
    });
  });
}
