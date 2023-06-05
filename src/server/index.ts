import express, { Express } from "express";
import bodyParser from "body-parser";
import http from "http";
import route from '../core/routes'
import { port } from "../config";
const app: Express = express();
app.use(bodyParser.json({ limit: 10000 }));
route(app);
const server =http.createServer(app);
server.listen(port,()=>{
  console.log(`listening on ${port}`)
});

