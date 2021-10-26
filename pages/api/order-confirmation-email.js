const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  //   const message = `
  //     Name: ${body.name}\r\n
  //     Email: ${body.email}\r\n
  //     Tel: ${body.tel}\r\n
  //     Onderwerp: ${body.onderwerp}\r\n
  //     Message: ${body.message}
  //   `;

  const data = {
    from: "noreply@soloswim.nl",
    templateId: 'd-f674e623f6ea476bbb9b460e7810f913', //templates: dynamic tamplates sendgrid https://github.com/sendgrid/sendgrid-nodejs/blob/main/docs/use-cases/transactional-templates.md
    personalizations: [{
      to: {
        name: 'Someone',
        email: 'l.c.vanroomen@gmail.com'
      },
      dynamic_template_data: {
        subject: 'Bedankt voor je bestelling',
        name: 'Laurenzor',
      }
    }]
    // subject: `Bedankt (name) voor je bestelling!`,
    // text: "Bedankt voor je bestelling bij Soloswim",
    // html: "<strong>We gaan voor je aan de slag!</strong>", 
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
