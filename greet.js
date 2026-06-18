function greet(name) {
  return 'Hello, ' + (name && name.trim() ? name : 'World') + '!';
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet(process.argv[2]));
}
