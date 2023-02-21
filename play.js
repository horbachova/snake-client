const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port:  50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write('you ded cuz you idled');
  });

  conn.on("data", (data) => {
    console.log(data); //handling incoming data
  });

  return conn;
};

console.log("Connecting ...");
connect();