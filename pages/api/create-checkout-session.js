const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items } = req.body;

  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "eur",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [`${process.env.HOST}${item.images[0]}`], //deze komt nog niet helemaal goed door lijkt het
      },
      tax_behavior: "inclusive",
    },
  }));

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ["NL"],
        },
        success_url: `${process.env.HOST}/zwemschemas`, //add a success url
        cancel_url: `${process.env.HOST}/winkelwagen`, //add a cancel url
        payment_method_types: ["card", "ideal"],
        shipping_rates: ["shr_1JJG3SJ6akcQoDMo4YnybOyU"],
        line_items: transformedItems,
        mode: "payment",
      });

      res.status(200).json({ id: session.id });
      //   res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
