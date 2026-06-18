function clamp(n, min, max) {
  return Math.min(Math.max(Number(n), Number(min)), Number(max));
}

module.exports = { clamp };

if (require.main === module) {
  const [n, min, max] = process.argv.slice(2);
  console.log(clamp(n, min, max));
}
