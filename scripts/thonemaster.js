// Description:
//   status
const thronemaster = require('thronemaster-tools');
const id = 131993;
module.exports = function (robot) {
  robot.respond(/status (.*)/i, function (res) {
    thronemaster.getLog(id, function (status) {
      let t = status.pop();
      res.send('Siste flytt i runde ' + t.turn + ' er: ' + t.player + ' ' + t.logEntry);
    });
  });
};
// [
//    {id:number, turn:number, gamePhase: string, player: string, logEntry:string, date:date}
// ]
