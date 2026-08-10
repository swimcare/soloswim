import mail from "@sendgrid/mail";

/**
 * Send the Stripe checkout order confirmation email via SendGrid.
 * @param {object} sessionData
 * @returns {Promise<{ statusCode: number }>}
 */
export async function sendOrderConfirmationEmail(sessionData) {
  if (!sessionData || typeof sessionData !== "object") {
    throw new Error("sessionData is required");
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error("SENDGRID_API_KEY is not configured");
  }

  mail.setApiKey(apiKey);

  const shipping = sessionData.total - sessionData.subtotal;

  const order = {
    order_number: sessionData.order_number,
    order_date: sessionData.order_date,
    name: sessionData.name,
    email: sessionData.email,
    line1: sessionData.line1,
    line2: sessionData.line2,
    postal_code: sessionData.postal_code,
    city: sessionData.city,
    country: sessionData.country,
    products: JSON.stringify(sessionData.products),
    subtotal: sessionData.subtotal,
    total: sessionData.total,
    shipping,
  };

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

  if (data.personalizations[0].dynamic_template_data.line2 === "null") {
    delete data.personalizations[0].dynamic_template_data.line2;
  }

  const response = await mail.send(data);
  return { statusCode: response[0].statusCode };
}
