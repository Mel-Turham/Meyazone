function formatPrice(price: number, currency: 'USD' | 'XOF') {
  const formatter = new Intl.NumberFormat(
    currency === 'USD' ? 'en-US' : 'fr-FR',
    {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }
  );

  const exchangeRate = 655.957; // Fixed exchange rate between USD and XOF
  const currentPrice = currency === 'USD' ? price : price * exchangeRate;

  return formatter.format(currentPrice);
}

export default formatPrice;
