import dbConnect from "../../lib/dbConnect";
import Order from "../../models/Order";

export default async function handler(req, res) {
  const { method } = req;

  console.log("connect to database");
  try {
    await dbConnect();
  } catch (error) {
    console.log("database error: " + error);
    return res.status(500).json({ success: false, error: error.message });
  }

  console.log("connected to database");

  switch (method) {
    case "GET":
      try {
        console.log("try to get data from database");
        const orders = await Order.find({});
        console.log("Found orders:", orders);
        res.status(200).json({ success: true, data: orders });
      } catch (error) {
        console.log("GET error:", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        console.log("try to post data in database");
        console.log("Request body:", req.body);
        const order = await Order.create(req.body.sessionData);
        console.log("Order created successfully:", order);
        res.status(201).json({ success: true, data: order });
      } catch (error) {
        console.log("POST database error:", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      console.log("Method not allowed:", method);
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ success: false, error: "Method not allowed" });
      break;
  }
}
