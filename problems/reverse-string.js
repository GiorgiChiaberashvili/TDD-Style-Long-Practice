function reverseString(string) {
  // Your code here
  if (typeof string !== 'string') throw TypeError("Expected a string")
  return string.split('').reverse().join('')
};



module.exports = reverseString;
