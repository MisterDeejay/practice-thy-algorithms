(function () {
if(typeof Algorithms === "undefined") {
  window.Algorithms = {};
}

// Write a method, digital_root(num).
// It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.
Algorithms.digitalRoot = function (number) {
  var result = (number % 10) + (number / 10);

  if(result >= 10) {
    return digitalRoot(result);
  } else {
    return result;
  }
};

// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation.
// Preserve spaces.
Algorithms.caesarCipher = function (string, shift) {
  new_str = "";
  for(var i = 0; i < string.length; i++) {
    new_str = new_str + (str[i] + shift);
  }

  return new_str;
};

// Write a function that takes two strings and returns the longest common substring.
Algorithms.commonSubstrings = function (stringOne, stringTwo) {
  if(stringOne.length > stringTwo.length) {
    return stringOne;
  } else if(stringTwo.length > stringTwo.length) {
    return stringTwo;
  } else {
    return stringOne;
  }
};

// Write a function that takes an array of integers and returns their sum.
// Use recursion.
Algorithms.sumRec = function (numbers) {
  if(numbers.length == 0){
    return numbers;
  }
  if(numbers.length == 1) {
    return numbers.pop()
  } else {
    last = numbers.pop();
    result = sumRec(numbers);
    return last + result;
  }
};

// Write a function which returns the first n elements from the fibonnacci sequence, given n.
Algorithms.fibs = function (number) {
  if(n == 0) {
    return [];
  } else if(n == 1) {
    return [0];
  } else if(n == 2) {
    return [0, 1];
  } else {
    result = fibs(n - 1);
    return result.push(result[string.length - 1] + result[string.length - 2]);
  }
};

// Write a function that takes a string and returns true if it's a palindrome, false if it's not.
// Your solution should take less time and memory than rebuilding the string backward and comparing the two.
Algorithms.isPalindrome = function (string) {
  lowercase_regex = /[a-z]/,
    i = 0, j = string.length;
  while (i < j) {
    if(!string[i].match(lowercase_regex)){
      i++;
    } else if(!string[j].match(lowercase_regex)){
      j++;
    } else if(!string[i].match(lowercase_regex) &&
                !string[j].match(lowercase_regex)){
      i++;
      j++;
    } else {
      if(string[i] != string[j]){
        return false;
      }
    }
  }
};

// Implement the Folding Cipher.
// It folds the alphabet in half and uses the adjacent letter.
// a <=> z, b <=> y, c <=> x, m <=> n.
Algorithms.foldingCipher = function (string) {

};

// Write a method that finds all the unique substrings for a word.
Algorithms.uniqSubs = function (string) {

};


// Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).
// You can solve this trivially in O(n**2) time by considering all subarrays.
// Try to solve it in O(n) time with O(1) memory.
Algorithms.lcs = function (array) {

};

// Write a function that takes a year (four digit integer) and returns an array with the 10 closest subsequent years that meet the following condition:
// the first two digits summed with the last two digits are equal to the middle two digits.
Algorithms.sillyYears = function (number) {

};

// Given an array of integers, return all pairs that sum up to a specified value k.
// List the pairs in [min, max] order.
// Time complexity: O(n).
// Return an array.
Algorithms.pairSum = function (array, k) {

};

// Given a matrix of integers and coordinates of a rectangular region within the matrix.
// Find the sum of numbers falling inside the rectangle.
// Time complexity: O(number of rows * number of columns).
Algorithms.matrixRegionSum = function (matrix, topLeftCoords, bottomRightCoords) {

};

})();
