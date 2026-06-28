function min(nums) {
  return Math.min(...(nums || []).map(Number));
}

module.exports = { min };

if (require.main === module) {
  console.log(min(process.argv.slice(2)));
}
