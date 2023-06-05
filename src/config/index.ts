type AmpQType = {
  url: string;
  exchangeName: string;
};
const port: number = 8000;
const amqpData:AmpQType = {
  url: "amqp://localhost",
  exchangeName: "mailExchange",
};

export { port, amqpData };
