const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, 
        MOVE_RIGHT_KEY, MESSAGE_CIAO, EXIT_KEY } = require('./constants');

const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      (EXIT_KEY);
    } else if (key === 'w'){
      connection.write(MOVE_UP_KEY);
    } else if (key === 's') {
      connection.write(MOVE_DOWN_KEY);
    } else if (key === 'a') {
      connection.write(MOVE_LEFT_KEY);
    } else if (key === 'd') {
      connection.write(MOVE_RIGHT_KEY);
    } else if (key === 'q') {
      connection.write(MESSAGE_CIAO);
    }
  });
}
module.exports = setupInput;
