const spawn = require( 'child_process' ).spawn;
var doRedeploy = false;
module.exports = function (robot) {
	robot.respond(/redeploy bernard!/i, function (res) {		
		ls = spawn( 'git', [ 'pull' ] );
		ls.stdout.on( 'data', data => {
		    res.send( `${data}` );
		});

		ls.stderr.on( 'data', data => {
		    res.send( `${data}` );
		});

		ls.on( 'close', code => {
		    if(code === 0)
				res.send(`:thumbsup:`);
			else
				res.send(':thumbsdown:');
		});
	});
}
