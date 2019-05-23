// third-party libraries
const express = require("express");
const dotenv = require("dotenv");

// config
dotenv.config();
const app = express();
const appPort = process.env.PORT;

// middleware(s)
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// start app
app.listen(appPort, () => {
  console.log(`App started and listening on port: ${appPort}....`);
});
