import { amqpData } from "../../config";
import amqp from "amqplib";

class channel {
  channel: any;
  async createChannel() {
    const connection = await amqp.connect(amqpData.url);
    this.channel = await connection.createChannel();
  }
  async mailMessage( message: string) {
    if (!this.channel) {
      await this.createChannel();
    }

    const exchange = amqpData.exchangeName;
    await this.channel.assertExchange(exchange, "direct");
    await this.channel.publish(
      exchange,
      '',
      Buffer.from(JSON.stringify(message))
    );
    console.log(`This method is send to exchange ${exchange}`);
  }
}
export default channel;
