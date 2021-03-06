// Description:
//   status
//   thronemaster spill-id [id]
var thronemaster = require('thronemaster-tools');
module.exports = function (robot) {

  robot.respond(/thronemaster spill-id (.*)/i, function (res) {
    var id = res.match[1];
    robot.brain.set('thronemaster-spill-id', id);
    res.send('spill-id satt til: ' + robot.brain.get('thronemaster-spill-id'));
  });

  robot.respond(/status/i, function (res) {
    thronemaster.getLog(robot.brain.get('thronemaster-spill-id'), function (status) {
      if (!status || status.constructor !== Array) {
        res.send('Sorry ass. Fant ikke det du lette etter.');
        return;
      }
      var t = status[status.length - 1];
      //res.send('Siste flytt i runde ' + t.turn + ' er: ' + t.player + ' ' + t.logEntry);
      var filter = status.filter(function (s) {
        return s.gamePhase === t.gamePhase && t.turn === s.turn;
      });
      var b = [];

      var attachments = [];
      attachments.push({
        "title": "Round " + t.turn + " (" + t.gamePhase + ")",
        "title_link": "http://game.thronemaster.net/?game=131993"
      });
      filter.forEach(function (a) {
        attachments.push({
          "author_name": a.player,
          // "title": "Move"+t.turn,
          "text": a.logEntry,
          "footer": "Move " + a.id + ": " + a.date
        })
      });
      res.send({
        "attachments": attachments
      });
    });
  })
};
// [
//    {id:number, turn:number, gamePhase: string, player: string, logEntry:string, date:date}
// ]
