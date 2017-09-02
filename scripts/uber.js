// Description:
//   ny tur (tittel) (dato)

module.exports = function (robot) {
  robot.respond(/ny tur (.*)/i, function (res) {
    const husk = res.match[1];
    res.send('ok, ' + res.message.user.name + ', jeg skal prøve å huske: ' + husk + '.');
  });

  robot.respond(/uber/i, function (res) {
    res.send('Sorry ass. Jeg har glemt alt du har fortalt meg.');
  });
};
