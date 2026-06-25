function factorial(n) {
  n = Number(n);
  if (!Number.isInteger(n) || n < 0) return NaN;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

module.exports = { factorial };

if (require.main === module) {
  const [n] = process.argv.slice(2);
  console.log(factorial(n));
}
