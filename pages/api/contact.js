import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Naam: ${body.name}\r\n
    Email: ${body.email}\r\n
    Tel: ${body.tel}\r\n
    Onderwerp: ${body.onderwerp}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "info@soloswim.nl",
    from: "noreply@soloswim.nl",
    subject: `${body.onderwerp}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

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
