const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.1.80",
    port: "50541",
  });

  conn.on("data", (data) => {
    console.log("Received message: " + data);
  });

  conn.setEncoding("utf-8");
  return conn;
};

console.log("Connecting... ");
connect();