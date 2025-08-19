const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  console.log("Email API: received request");
  console.log("Email API: request method:", req.method);
  console.log("Email API: request body:", req.body);

  try {
    const shipping = req.body.sessionData.total - req.body.sessionData.subtotal;
    console.log("Email API: calculated shipping:", shipping);

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

    console.log("Email API: processed order data:", order);

    const data = {
      from: "kristof@soloswim.be",
      templateId: "d-924d5ca262a4459493df9909ebe332d9",
      personalizations: [
        {
          to: {
            name: `${order.name}`,
            email: `${order.email}`,
          },
          bcc: {
            email: "kristof@soloswim.be",
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

    console.log("Email API: prepared email data:", {
      from: data.from,
      templateId: data.templateId,
      to: data.personalizations[0].to,
      subject: data.personalizations[0].dynamic_template_data.subject,
    });

    // Checking to see whether line2 value is equal to null
    if (data.personalizations[0].dynamic_template_data.line2 === "null") {
      delete data.personalizations[0].dynamic_template_data.line2;
      console.log("Email API: removed null line2");
    }

    console.log("Email API: sending email via SendGrid...");
    const response = await mail.send(data);
    console.log("Email API: SendGrid response:", response);

    if (response[0].statusCode === 202) {
      console.log("Email API: email sent successfully");
      res.status(200).json({ message: "ok" });
    } else {
      console.log("Email API: unexpected status code:", response[0].statusCode);
      res
        .status(response[0].statusCode)
        .json({ message: "error", statusCode: response[0].statusCode });
    }
  } catch (error) {
    console.log("Email API: error occurred:", error);
    console.log("Email API: error message:", error.message);
    res.status(500).json({ message: "error", error: error.message });
  }
}

export default handler;
