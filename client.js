const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.1.80",
    port: "50541",
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