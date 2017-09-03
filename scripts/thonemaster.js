// Description:
//   status
var thronemaster = require('thronemaster-tools');
var id = 131993;
module.exports = function (robot) {
  robot.respond(/status (.*)/i, function (res) {
    thronemaster.getLog(id, function (status) {
      var t = status.pop();
      res.send('Siste flytt i runde ' + t.turn + ' er: ' + t.player + ' ' + t.logEntry);
    });
  });
};
// [
//    {id:number, turn:number, gamePhase: string, player: string, logEntry:string, date:date}
// ]
