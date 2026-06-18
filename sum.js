function sum(nums) {
  return (nums || []).reduce((a, b) => a + Number(b), 0);
}

module.exports = { sum };

if (require.main === module) {
  console.log(sum(process.argv.slice(2)));
}
