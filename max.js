function max(a, b) {
  return Math.max(Number(a), Number(b));
}

module.exports = { max };

if (require.main === module) {
  const [a, b] = process.argv.slice(2);
  console.log(max(a, b));
}
