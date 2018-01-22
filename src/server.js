

const
  http = require("http"),
  app = require("./app");


const server = http.createServer(app)

const
  port = app.get("port"),
  env = app.get("env");


server.listen(port, () => {
  console.log("Server up on %d in %s mode", port, env);
})


if(require.main != module) {
    module.exports = server;
}
