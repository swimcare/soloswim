const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
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

  const transformedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "eur",
      unit_amount: Math.round(item.price * 100),
      product_data: {
        description: item.description,
        name: item.title,
        images: [`${process.env.HOST}${item.images[0]}`], //deze komt nog niet helemaal goed door in stripe lijkt het, waarschijnlijk omdat het local is.
      },
      tax_behavior: "inclusive",
    },
  }));

  if (req.method === "POST") {
    console.log("resquest method is post.");
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ["BE", "NL"],
        },
        success_url: `${process.env.HOST}/bestelling-voltooid`,
        cancel_url: `${process.env.HOST}/bestelling-mislukt`,
        payment_method_types: ["card", "bancontact", "paypal", "klarna", "link", "ideal"],
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

      res.status(200).json({ id: session.id });
      //   res.redirect(303, session.url);
    } catch (err) {
      console.error("Stripe checkout error:", err);
      res.status(err.statusCode || 500).json({ error: err.message, type: err.type, code: err.code });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
