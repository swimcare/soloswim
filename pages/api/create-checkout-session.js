const Stripe = require("stripe");

export default async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("Checkout: STRIPE_SECRET_KEY is not configured");
    return res.status(500).json({ error: "Stripe is not configured" });
  }

  if (!process.env.HOST) {
    console.error("Checkout: HOST is not configured");
    return res.status(500).json({ error: "HOST is not configured" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  //generating the order number:
  const orderid = require("order-id")("mysecret");
  const id = orderid.generate();

  //generatring the date of today:
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  const { items } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "No items provided" });
  }

  console.log("Checkout: received items:", items);

  const transformedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "eur",
      unit_amount: Math.round(item.price * 100),
      product_data: {
        description: item.description,
        name: item.title + " - " + item.type,
        images: [`${process.env.HOST}${item.images[0]}`],
      },
      tax_behavior: "inclusive",
    },
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["BE", "NL"],
      },
      success_url: `${process.env.HOST}/bestelling-voltooid`,
      cancel_url: `${process.env.HOST}/bestelling-mislukt`,
      payment_method_types: [
        "card",
        "bancontact",
        "paypal",
        "klarna",
        "link",
        "ideal",
      ],
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 799,
              currency: "eur",
            },
            display_name: "Verzending naar Nederland",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 2,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 599,
              currency: "eur",
            },
            display_name: "Verzending naar België",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 2,
              },
            },
          },
        },
      ],
      line_items: transformedItems,
      mode: "payment",
      allow_promotion_codes: true,
      metadata: {
        products: JSON.stringify(
          items.map((item) => ({
            id: item.product_id,
            name: item.title,
            price: item.price,
            type: item.type,
            editie: item.editie,
          }))
        ),
        order_number: id,
        order_date: today,
      },
    });

    console.log("Checkout: session created successfully:", {
      id: session.id,
      order_number: id,
      order_date: today,
    });

    // Prefer session.url so the browser does not need NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    return res.status(200).json({ id: session.id, url: session.url });
  } catch (err) {
    console.error("Checkout: Stripe checkout error:", err);
    return res
      .status(err.statusCode || 500)
      .json({ error: err.message, type: err.type, code: err.code });
  }
};
