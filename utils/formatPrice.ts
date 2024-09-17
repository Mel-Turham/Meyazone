function formatPrice(price:number, currency:'USD' | 'XOF'):string{
 const formatter = new Intl.NumberFormat('en-US', {
  style:'currency',
  currency:currency
 })

 return formatter.format(price)
}

export default formatPrice