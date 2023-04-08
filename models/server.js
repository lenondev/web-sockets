const express = require("express");
const cors = require("cors");
const { socketController } = require("./sockets/controller");

// EXPRESS SERVER
class Server {
  constructor() {
    this.port   = process.env.PORT;
    this.app    = express();
    this.server = require('http').createServer(this.app);
    this.io     = require('socket.io')(this.server);

    this.paths = {}

    //Middllewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();

    // Sockets
    this.sockets();
  }


  middlewares() {
    // CORS
    this.app.use(cors());

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, require('../routes/auth.routes'));
  }

  sockets(){
    this.io.on('connection', socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`App running on port http/localhost:${this.port}/`);
    });
  }
}

module.exports = Server;
