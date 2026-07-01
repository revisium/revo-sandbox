function max(nums) {
  return Math.max(...(nums || []).map(Number));
}

module.exports = { max };

if (require.main === module) {
  console.log(max(process.argv.slice(2)));
}
