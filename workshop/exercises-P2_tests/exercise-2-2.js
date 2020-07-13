// Exercise 2-2
// ------------

// Step 1
// Write a function that returns the LAST character of the string that is
// passed to it.
// - If it's an empty string, return `undefined`
// - If it's a number, return `undefined`

function lastCharacter(str) {
  console.log(str);
  // Your code here
  if (typeof str !== "string") {
    return undefined;
  } else if (str.charAt(str.length - 1) === "") {
    return undefined;
  } else return str.charAt(str.length - 1);
}

// Step 2
// You're given 1 test case. Add 4 more, making sure to cover all of the
// conditions specified above (don't forget empty string and number!!)

expect(lastCharacter("max"), "x");
expect(lastCharacter("Mortimer"), "r");
expect(lastCharacter("Falcon-9"), "9");
expect(lastCharacter(""), undefined);
expect(lastCharacter(5), undefined);

// Add 4 more test cases here!
// 🌠 NOTE 🌠
// Be creative with your tests!

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
