const spawn = require( 'child_process' ).spawn;

module.exports = function (robot) {
	robot.respond(/redeploy bernard!/i, function (res) {
		res.send('gulp. ok!');
		ls = spawn( 'git', [ 'pull' ] );
		ls.stdout.on( 'data', data => {
		    res.send( `stdout: ${data}` );
		});

		ls.stderr.on( 'data', data => {
		    res.send( `stderr: ${data}` );
		});

		ls.on( 'close', code => {
		    res.send( `child process exited with code ${code}` );
		});
	});
}
