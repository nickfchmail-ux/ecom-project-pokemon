export function convertCurrency(value) {
  return new Intl.NumberFormat("en-HK", {
    style: "currency",
    currency: "HKD",
  }).format(value);
}
