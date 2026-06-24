function isEven(n) {
  return n % 2 === 0;
}

module.exports = { isEven };

if (require.main === module) {
  const [n] = process.argv.slice(2);
  console.log(isEven(Number(n)));
}
