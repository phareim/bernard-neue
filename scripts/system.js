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

  robot.respond(/sys test/i, function (res) {
    res.send('test..');
  });


  robot.respond(/sys whoami/i, function (res) {

    if (res.message.user.name === 'petter') {
      console.log(res.message.user.profile);
      res.send('Hei Petter! :spock-hand:');
    } else
      res.send('Hei ' + res.message.user.name);
  });
}
