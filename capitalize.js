function capitalize(str) {
  if (!str || typeof str !== 'string' || !str.trim()) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { capitalize };

if (require.main === module) {
  console.log(capitalize(process.argv[2]));
}
