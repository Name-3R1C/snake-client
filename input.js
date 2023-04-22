const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY ,MSG_KEY} = require("./constants");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  switch (key) {
  case 'w':
    connection.write(MOVE_UP_KEY);
    break;
  case 'a':
    connection.write(MOVE_LEFT_KEY);
    break;
  case 's':
    connection.write(MOVE_DOWN_KEY);
    break;
  case 'd':
    connection.write(MOVE_RIGHT_KEY);
    break;
  case '\u0003':
    process.exit();
    break;
  case 'm':
    connection.write(MSG_KEY);
    break;
  }
};

module.exports = {setupInput};