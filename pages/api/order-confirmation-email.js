const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
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
          email: "l.c.vanroomen@gmail.com", //todo: replace for info@soloswim.nl
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

  console.log(data.personalizations[0].dynamic_template_data.products);

  // Checking to see whether line2 value is equal to null
  if (data.personalizations[0].dynamic_template_data.line2 === "null") {
    delete data.personalizations[0].dynamic_template_data.line2;
  }

  console.log(data.personalizations[0].dynamic_template_data);

  mail
    .send(data)
    .then((response) => {
      if (response[0].statusCode == "202") {
        res.status(200).json({ status: "OK" });
      } else {
        res.status(response[0].statusCode).json({ status: "NOT OK" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(response[0].statusCode).json({ status: "NOT OK" });
      return resolve();
    });
}

export default handler;
