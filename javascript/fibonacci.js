function fibonacci(num) {

  // if num is 0 or 1, return itself
  if (num < 2) {
    return num;
  }

  // create a variable to store last 2 numbers
  let lastTwo = [0, 1];

  // iterate through all the numbers less than (num - 1)
  for (let i = 0; i < num - 1; ++i) {

    // calculate a sum of last 2 numbers
    const sum = lastTwo[0] + lastTwo[1];

    // reassign new values to last 2 numbers
    lastTwo = [lastTwo[1], sum];
  }

  // return last number
  return lastTwo[1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
