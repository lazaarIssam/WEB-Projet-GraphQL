const { createConnection } = require('typeorm');

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    moduleResolution: "node",
    type: "mongodb",
    host: "localhost",
    port: 27017,
    username: "",
    password: "",
    database: "graphtest",
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + "/../../models/*.*"]
  });
};