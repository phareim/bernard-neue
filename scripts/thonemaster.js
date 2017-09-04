// Description:
//   status
var thronemaster = require('thronemaster-tools');
var id = 131993;
module.exports = function (robot) {
  robot.respond(/status/i, function (res) {
    thronemaster.getLog(id, function (status) {
      if (!status || status.constructor !== Array) {
        res.send('Sorry ass. Fant ikke det du lette etter.');
        return;
      }
      var t = status[status.length - 1];
      //res.send('Siste flytt i runde ' + t.turn + ' er: ' + t.player + ' ' + t.logEntry);
      res.send({
        "attachments": [
          {
            "title": "Runde " + t.turn + ", fase " + t.gamePhase + ".",
            "title_link": "http://game.thronemaster.net/?game=131993"
          },
          {
            "author_name": t.player,
            // "title": "Move"+t.turn,
            "text": t.logEntry,
            "footer": "Move" + t.turn + ": " + t.date
          }
        ]
      });
    });
  });
};
// [
//    {id:number, turn:number, gamePhase: string, player: string, logEntry:string, date:date}
// ]
