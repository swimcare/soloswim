const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  try {
    const shipping = req.body.sessionData.total - req.body.sessionData.subtotal;

    const order = {
      order_number: req.body.sessionData.order_number,
      order_date: req.body.sessionData.order_date,
      name: req.body.sessionData.name,
      email: req.body.sessionData.email,
      line1: req.body.sessionData.line1,
      line2: req.body.sessionData.line2,
      postal_code: req.body.sessionData.postal_code,
      city: req.body.sessionData.city,
      country: req.body.sessionData.country,
      products: JSON.stringify(req.body.sessionData.products),
      subtotal: req.body.sessionData.subtotal,
      total: req.body.sessionData.total,
      shipping: shipping,
    };

    const data = {
      from: "noreply@soloswim.nl",
      templateId: "d-924d5ca262a4459493df9909ebe332d9",
      personalizations: [
        {
          to: {
            name: `${order.name}`,
            email: `${order.email}`,
          },
          bcc: {
            email: "orders@soloswim.nl",
          },
          dynamic_template_data: {
            subject: `Bedankt voor je bestelling ${order.name}`,
            order_number: `${order.order_number}`,
            order_date: `${order.order_date}`,
            name: `${order.name}`,
            line1: `${order.line1}`,
            line2: `${order.line2}`,
            postal_code: `${order.postal_code}`,
            city: `${order.city}`,
            country: `${order.country}`,
            subtotal: `${order.subtotal.toFixed(2)}`,
            total: `${order.total.toFixed(2)}`,
            shipping: `${order.shipping.toFixed(2)}`,
            products: JSON.parse(order.products),
          },
        },
      ],
    };

    // Checking to see whether line2 value is equal to null
    if (data.personalizations[0].dynamic_template_data.line2 === "null") {
      delete data.personalizations[0].dynamic_template_data.line2;
    }

    const response = await mail.send(data);

    if (response[0].statusCode === 202) {
      res.status(200).json({ message: "ok" });
    } else {
      res
        .status(response[0].statusCode)
        .json({ message: "error", statusCode: response[0].statusCode });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", error: error.message });
  }
}

export default handler;
