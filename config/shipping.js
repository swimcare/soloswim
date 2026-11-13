/**
 * Shipping rates (EUR). Used by cart UI + Stripe Checkout.
 * Free shipping when merchandise subtotal (after sale prices) >= threshold.
 */
const shippingConfig = {
  /** Subtotal threshold in euro for free shipping */
  freeShippingThreshold: 100,
  /** Belgium flat rate */
  belgium: 5.99,
  /** Netherlands flat rate */
  netherlands: 7.99,
};

export default shippingConfig;
