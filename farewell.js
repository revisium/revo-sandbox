function farewell(name) {
  return 'Goodbye, ' + (name && name.trim() ? name : 'World') + '!';
}

module.exports = { farewell };

if (require.main === module) {
  console.log(farewell(process.argv[2]));
}
