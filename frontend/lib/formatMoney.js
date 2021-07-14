export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  };

  // check if the remainder is equal to zero an set accordingly
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-GB', options);
  return formatter.format(amount / 10);
}

