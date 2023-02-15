function myMap(inputArray, callback) {
  // Your code here
  const newArray = [];

  inputArray.forEach(el => newArray.push(callback(el)))
  return newArray;
}


module.exports = myMap;
