/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const condition1 = a > 0 && b > 0 && c > 0;
  const condition2 = a === b && a + b > c;
  const condition3 = a === c && a + c > b;
  const condition4 = b === c && b + c > a;
  return condition1 && (condition2 || condition3 || condition4);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const numbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  if (num <= 10) return numbers[num];
  const units = numbers[num % 10];
  const tensNum = Math.floor(num / 10);
  let tens = '';
  for (let i = 0; i < tensNum; i += 1) {
    tens += 'X';
  }
  return tens + units;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  const l = numberStr.length;
  for (let i = 0; i < l; i += 1) {
    const el = numberStr[i];
    switch (el) {
      case ',':
        str += 'point';
        break;
      case '.':
        str += 'point';
        break;
      case '-':
        str += 'minus';
        break;
      case '0':
        str += 'zero';
        break;
      case '1':
        str += 'one';
        break;
      case '2':
        str += 'two';
        break;
      case '3':
        str += 'three';
        break;
      case '4':
        str += 'four';
        break;
      case '5':
        str += 'five';
        break;
      case '6':
        str += 'six';
        break;
      case '7':
        str += 'seven';
        break;
      case '8':
        str += 'eight';
        break;
      case '9':
        str += 'nine';
        break;
      default:
        str += '';
        break;
    }
    if (i === numberStr.length - 1) break;
    else str += ' ';
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return str === newStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n > 0) {
    if (digit === n % 10) return true;
    n = Math.floor(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum1 += arr[i];
    sum2 = 0;
    for (let j = i + 2; j < arr.length; j += 1) {
      sum2 += arr[j];
    }
    if (sum1 === sum2) {
      return i + 1;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let i = 0;
  let j = 0;
  let dirIndex = 0;
  let top = 0;
  let right = size - 1;
  let bottom = size - 1;
  let left = 0;
  for (let k = 1; k <= size ** 2; k += 1) {
    arr[i][j] = k;
    let nextI = i + directions[dirIndex][0];
    let nextJ = j + directions[dirIndex][1];
    if (
      nextI < top ||
      nextI > bottom ||
      nextJ < left ||
      nextJ > right ||
      arr[nextI][nextJ] !== 0
    ) {
      dirIndex = (dirIndex + 1) % 4;
      if (dirIndex === 1) top += 1;
      if (dirIndex === 2) right -= 1;
      if (dirIndex === 3) bottom -= 1;
      if (dirIndex === 0) left += 1;
      nextI = i + directions[dirIndex][0];
      nextJ = j + directions[dirIndex][1];
    }
    i = nextI;
    j = nextJ;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;
  const newMatrix = matrix;
  for (let square = 0; square < Math.floor(size / 2); square += 1) {
    const first = square;
    const last = size - square - 1;
    for (let i = first; i < last; i += 1) {
      const move = i - first;
      const temp = newMatrix[first][i];
      newMatrix[first][i] = newMatrix[last - move][first];
      newMatrix[last - move][first] = newMatrix[last][last - move];
      newMatrix[last][last - move] = newMatrix[i][last];
      newMatrix[i][last] = temp;
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const n = arr.length;
  const newArr = arr;
  for (let k = 0; k < n - 1; k += 1) {
    let sorted = false;
    for (let i = 0; i < n - 1 - k; i += 1) {
      if (newArr[i] > newArr[i + 1]) {
        const temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        sorted = true;
      }
    }
    if (!sorted) break;
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr[i] = str[i];
  }
  const length = arr.length % 2 === 0 ? arr.length : arr.length - 1;
  const iter = iterations % length;
  for (let i = 0; i < iter; i += 1) {
    const evenNumbers = [];
    let evenCount = 0;
    const oddNumbers = [];
    let oddCount = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (j % 2 === 0) {
        evenNumbers[evenCount] = arr[j];
        evenCount += 1;
      } else {
        oddNumbers[oddCount] = arr[j];
        oddCount += 1;
      }
    }
    let index = 0;
    for (let k = 0; k < evenCount; k += 1) {
      arr[index] = evenNumbers[k];
      index += 1;
    }
    for (let m = 0; m < oddCount; m += 1) {
      arr[index] = oddNumbers[m];
      index += 1;
    }
  }
  let myStr = '';
  for (let i = 0; i < arr.length; i += 1) {
    myStr += arr[i];
  }
  return myStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let num = number;
  let count = 0;
  while (num > 0) {
    arr[count] = num % 10;
    count += 1;
    num = Math.floor(num / 10);
  }
  let pivot;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i + 1]) {
      pivot = i + 1;
      break;
    }
  }
  if (!pivot) return number;
  for (let k = 0; k < pivot - 1; k += 1) {
    let sorted = false;
    for (let i = 0; i < pivot - 1 - k; i += 1) {
      if (arr[i] < arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = true;
      }
    }
    if (!sorted) break;
  }
  for (let m = pivot - 1; m >= 0; m -= 1) {
    if (arr[m] > arr[pivot]) {
      const temp = arr[m];
      arr[m] = arr[pivot];
      arr[pivot] = temp;
      break;
    }
  }
  let newNumber = 0;
  for (let f = 0; f < arr.length; f += 1) {
    newNumber += arr[f] * 10 ** f;
  }
  return newNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
