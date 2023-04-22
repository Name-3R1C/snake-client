const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: YHF");
  });

  conn.on("data", (data) => {
    console.log("Received message: " + data);
  });

  conn.setEncoding("utf-8");
  return conn;
};

module.exports = {connect};