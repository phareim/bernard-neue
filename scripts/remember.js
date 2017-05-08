module.exports = function (robot) {
  robot.respond(/husk: (.*)/i, function (res) {
    var husk = res.match[1];
    res.send('ok. jeg skal prøve å huske: ' + husk + '.');
  });

    robot.respond(/huskeliste/i, function (res) {
        res.send('Sorry ass. Jeg har glemt det alt.');
    });

}
