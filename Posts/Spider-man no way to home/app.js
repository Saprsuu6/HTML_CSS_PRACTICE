import express from "express";
import path from "path";
import bodyParser from "body-parser";
import router_posts from "./routes.js";

class Server {
  constructor() {
    this.PORT = 8080;
    this.app = express();
    this.__dirname = path.resolve();
  }

  deconstructor() {}

  run() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static(path.resolve(this.__dirname, "resources")));
    this.app.use(router_posts);

    const server = this.app.listen(this.PORT, async () => {
      console.log(`http://localhost:${this.PORT}`);
    });
  }
}

const server = new Server();
server.run();
