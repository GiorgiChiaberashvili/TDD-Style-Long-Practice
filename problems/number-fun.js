function returnsThree() {
  // Your code here
  return 3
}


function reciprocal(n) {
  // Your code here
  if (n < 1) throw TypeError(`Number must be greater than or equal to 1`)
  if (n > 1_000_000) throw TypeError(`Number must be less than or equal to 1,000,000`)
  return 1 / n;
};


module.exports = {
  returnsThree,
  reciprocal
};
