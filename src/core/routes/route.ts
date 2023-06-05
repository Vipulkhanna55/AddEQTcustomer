import express, { Request, Response } from "express";
import channel from "../utils";
const route = express.Router();
route.post("/", async (req: Request, res: Response) => {
  const dataChannel = new channel();
  await dataChannel.mailMessage(req.body.data);
  res.send("Saved successfully");
});
export default route;
