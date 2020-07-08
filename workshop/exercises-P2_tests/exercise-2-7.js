// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  let str = arr[0];
  let rep = arr[1];
  let answer = "";
  if (typeof str !== "string" || typeof rep !== "number") return undefined;
  for (let i = 0; i < rep; i++) {
    answer = answer + str;
  }
  return answer;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["mat", 3]), "matmatmat");
expect(repeat(["<3", 5]), "<3<3<3<3<3");
expect(repeat([25, 5]), undefined);
expect(repeat(["asd", 0]), "");
expect(repeat(["asd", -5]), "");

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
