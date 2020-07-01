const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,
  });
  const name = 'sRg'

  conn.on("connect", () => {
    console.log(name, "Successfully connected to game server");
    
  })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = connect;