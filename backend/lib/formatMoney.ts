const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

export default function formatMoney(cents: number) {
  const pounds = cents / 100;
  return formatter.format(pounds);
}
