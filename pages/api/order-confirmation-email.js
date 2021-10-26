const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {

  const order = {
    name: req.body.sessionData.name,
    email: req.body.sessionData.email,
    line1: req.body.sessionData.line1,
    line2: req.body.sessionData.line2,
    postal_code: req.body.sessionData.postal_code,
    city: req.body.sessionData.city,
    country: req.body.sessionData.country,
    products: req.body.sessionData.products,
  };

  const data = {
    from: "noreply@soloswim.nl",
    templateId: "d-f674e623f6ea476bbb9b460e7810f913",
    personalizations: [
      {
        to: {
          name: `${order.name}`,
          email: `${order.email}`,
        },
        dynamic_template_data: {
          subject: "Bedankt voor je bestelling",
          name: `${order.name}`,
          line1: `${order.line1}`,
          line2: `${order.line2}`,
          postal_code: `${order.postal_code}`,
          city: `${order.city}`,
          country: `${order.country}`,
        },
      },
    ],
  };

  // Checking to see whether line2 value is equal to null
  if (data.personalizations[0].dynamic_template_data.line2 === "null"){
    console.log("todo: remove null value before sending to sendgrid")
    delete data.personalizations[0].dynamic_template_data.line2;
  }

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
