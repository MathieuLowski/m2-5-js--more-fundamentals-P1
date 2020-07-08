// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));
//At first 3 is passed as an argument and the decrement function will return 2.
//Then, 2 is past to square it returns 4.
//4 is passed to decrement and returns 3.
// 3 is passed  to square and the function call will return 9.

// 1-2
decrement(decrement(square(square(3))));
//At first 3 is passed as an argument and the function returns 9.
//Then, 9 is passed to square it returns 81.
//81 passes throught devrement returning 80.
//80 is passed through decrement again returning 79.

// 1-3
duplicateString(reverseString('hello'));
// 'hello' is passed as an argument to reverseString and returns an array with o l l e h.
//olleh is passed in the second function that will return 'olleholleh'.

// 1-4
reverseString(duplicateString(duplicateString('foo')));
//First call 'foo' becomes 'foofoo'.
//Second call 'foofoo' becomes 'foofoofoofoo'.
//Third call returns 'oofoofoofoof'.
