// Description:
//   we'll do it live!
//
const spawn = require('child_process').spawn;

module.exports = function (robot) {
  robot.respond(/redeploy/i, function (res) {
    if (res.message.user.name !== 'petter') {
      res.send('sorry, ' + res.message.user.name + ', det er bare petter som får lov å gjøre deploy. :8bit-heart:');
      return;
    }
    var pull = spawn('git', ['pull']);
    pull.stdout.on('data', data => {
      console.log(` ${data}`);
    });

    pull.stderr.on('data', data => {
      console.log(` ${data}`);
    });
    pull.on('close', code => {
      if (code === 0)
        res.send(`:spock-hand:`);
      else
        res.send(':thumbsdown:');
    });
  });

  robot.respond(/redeploy home/i, function (res) {
     if (res.message.user.name !== 'petter') {
      res.send('sorry, ' + res.message.user.name + ', det er bare petter som får lov å gjøre deploy. :8bit-heart:');
      return;
    }
    var pull = spawn('cd ../www_docs && git pull', []);
    pull.stdout.on('data', data => {
      console.log(` ${data}`);
    });

    pull.stderr.on('data', data => {
      res.send('hmm.. dette funksjonen fungerer ikke helt enda');
      console.log(` ${data}`);
    });
    pull.on('close', code => {
      if (code === 0)
        res.send(`:spock-hand:`);
      else
        res.send(':thumbsdown:');
    });
  });
}
