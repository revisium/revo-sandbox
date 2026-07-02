function range(start, end) {
  const first = Number(start);
  const last = Number(end);
  const step = first < last ? 1 : -1;
  const result = [];

  for (let value = first; value !== last; value += step) {
    result.push(value);
  }

  return result;
}

module.exports = { range };

if (require.main === module) {
  const [start, end] = process.argv.slice(2);
  console.log(range(start, end));
}
