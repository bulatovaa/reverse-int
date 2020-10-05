module.exports = function reverse (n) {
  const str = String(n);
  if (str[0] === '-') {
    return Number(str.slice(1).split('').reverse().join(''));
  }
  return Number(str.split('').reverse().join(''));
}
