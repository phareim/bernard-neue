const spawn = require('child_process').spawn;

module.exports = function (robot) {
  robot.respond(/sys: (.*)/i, function (res) {
    var husk = res.match[1];
    res.send('din kommando: ' + husk);
  });

  robot.respond(/sys pwd/i, function (res) {
    var pwd = spawn('pwd');
    pwd.stdout.on('data', data => {
      res.send('working Directory: ' + data);
    });
  });

  robot.respond(/sys whoami/i, function (res) {
    res.send(JSON.stringify(robot));
    res.send(JSON.stringify(res));
  });
}
