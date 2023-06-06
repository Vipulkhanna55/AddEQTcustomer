import { Request, Response } from "express";
import { channel, Logger } from "../../utils";

const mail = async (req: Request, res: Response) => {
  try {
    const dataChannel = new channel();
    await dataChannel.mailMessage(req.body.data);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error sending email" });
    Logger.error(error);
  }
};

export default mail;
