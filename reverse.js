function reverse(str) {
  if (!str || typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

module.exports = { reverse };

if (require.main === module) {
  console.log(reverse(process.argv[2]));
}
