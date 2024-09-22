function formatPrice(price: number, currency: 'USD' | 'XOF'): string {
	const formatter = new Intl.NumberFormat(
		currency === 'USD' ? 'en-US' : 'fr-FR',
		{
			currency: currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		},
	);

	const exchangeRate = 655.957; // Fixed exchange rate between USD and XOF
	const currentPrice = currency === 'USD' ? price : price * exchangeRate;

	return formatter.format(currentPrice);
}

export default formatPrice;
