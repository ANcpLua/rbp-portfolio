export const avocadoCheckout = {
  title: "Avocado Stillleben I",
  priceLabel: "5 EUR",
  paymentLink: import.meta.env.VITE_AVOCADO_PAYMENT_LINK ?? "",
};

export const hasAvocadoPaymentLink = avocadoCheckout.paymentLink.length > 0;
