/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let romanEquivalence = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  let decimalEquivalence = [1, 5, 10, 50, 100, 500, 1000]
  let romanArray = Array.from(roman)
  let sum = 0
  let theIndex
  console.log(romanArray);

  switch (roman) {
    case 'I':
      return 1
      break
    case 'V':
      return 5
      break
    case 'X':
      return 10
      break
    case 'L':
      return 50
      break
    case 'C':
      return 100
      break
    case 'D':
      return 500
      break
    case 'M':
      return 1000
      break
    default:
      for (let i = 0; i < roman.length; i++) {
        if (romanArray[i] == 'I' && romanArray[i + 1] == 'V') {
          romanArray.splice(i, 2, 'IV')
          romanEquivalence.push('IV')
          decimalEquivalence.push(4)
        }
        if (romanArray[i] == 'I' && romanArray[i + 1] == 'X') {
          romanArray.splice(i, 2, 'IX')
          romanEquivalence.push('IX')
          decimalEquivalence.push(9)
        }
        if (romanArray[i] == 'X' && romanArray[i + 1] == 'L') {
          romanArray.splice(i, 2, 'XL')
          romanEquivalence.push('XL')
          decimalEquivalence.push(40)
        }
        if (romanArray[i] == 'X' && romanArray[i + 1] == 'C') {
          romanArray.splice(i, 2, 'XC')
          romanEquivalence.push('XC')
          decimalEquivalence.push(90)
        }
        if (romanArray[i] == 'C' && romanArray[i + 1] == 'D') {
          romanArray.splice(i, 2, 'CD')
          romanEquivalence.push('CD')
          decimalEquivalence.push(400)
        }
        if (romanArray[i] == 'C' && romanArray[i + 1] == 'M') {
          romanArray.splice(i, 2, 'CM')
          romanEquivalence.push('CM')
          decimalEquivalence.push(900)
        }
      }
      for (let i = 0; i < romanArray.length; i++) {
        theIndex = romanEquivalence.indexOf(romanArray[i]);
        console.log(theIndex);
        sum += decimalEquivalence[theIndex]
      }
      return sum
  }

  // Note: The above code can also be refactored to lesser lines by adding 'IV', 'IX', 'XL', 'XC', 'CD', and 'CM, and their decimal equivalence to romanEquivalence and decimalEquivalence arrays on lines 8 and 9 above, then deleting their corresponding push functions in each 'if' statements above. 

}

console.log(romanToDecimal("MMMCMXCIX"));

module.exports = romanToDecimal;
