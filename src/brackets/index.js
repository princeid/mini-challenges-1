/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let newArray = [];
  let currentChar
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[' || str[i] === '(' || str[i] === '{') {
      newArray.push(str[i]);
    } else {
          if (newArray.length == 0) {
            return 'invalid';
          }
          currentChar = newArray.pop();
          if (currentChar == '(') {
            if (str[i] != ')') {
              return 'invalid';
            }
          }
          if (currentChar == '{') {
            if (str[i] != '}') {
              return 'invalid';
            }
          }
          if (currentChar == '[') {
            if (str[i] != ']') {
              return 'invalid';
            }
          }
      }
  }
  if (newArray.length == 0) {
    return 'valid';
  } else {
    return 'invalid';
  }
}

module.exports = isValid;