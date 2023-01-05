import { Router } from "express";
import path from "path";

const __dirname = path.resolve();
const router_posts = Router();

router_posts.route("/").get((req, res) => {
  res.sendFile(path.resolve(__dirname, "resources", "index.html"));
});

export default router_posts;
