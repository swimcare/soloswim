import dbConnect from "../../lib/dbConnect";
import Order from "../../models/Order";

export default async function handler(req, res) {
  const { method } = req;

  console.log("connect to database");
  try {
    await dbConnect();
  } catch (error) {
    console.log("database error: " + error);
  }

  console.log("connected to database");

  switch (method) {
    case "GET":
      try {
        console.log("try to get data from database");
        const orders = await CompletedOrder.find({});
        console.log(orders);
        res.status(200).json({ success: true, data: orders });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log("try to post data in database");
        console.log(req.body);
        const order = await Order.create(req.body);
        res.status(201).json({ success: true, data: order });
      } catch (error) {
        console.log("database error: " + error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      console.log("database error: " + error);
      res.status(400).json({ success: false });
      break;
  }
}
