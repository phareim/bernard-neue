const spawn = require('child_process').spawn;
var doRedeploy = false;
module.exports = function (robot) {
  robot.respond(/redeploy bernard!/i, function (res) {
    var pull = spawn('git', ['pull']);
    pull.stdout.on('data', data => {});

    pull.stderr.on('data', data => {
      res.send(`Ooops: ${data}`);
    });
    pull.on('close', code => {
      if (code === 0)
        res.send(`:thumbsup:`);
      else
        res.send(':thumbsdown:');
    });
  });
}
