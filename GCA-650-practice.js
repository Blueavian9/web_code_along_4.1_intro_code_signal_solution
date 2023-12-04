// similar example 2:

/* 
Plan:
1. Remove non-alphanumeric characters from the string. 

2. Convert the string to lowercase to make the comparison case-insensitive.

3. Check if the string is the same when read backward.


Step 3: Write Pseudocode
function isPalindrome(inputString);
  cleanString = remove non-alphanumeric characters from inputString 
  lowercaseString = convert cleanString to lowercase 
  reversedString = reverse lowercaseString 
  return lowercaseString equals reversedString 
*/

function isPalindrome(inputString) {
  // Step 1: Remove non-alphanumeric characters
  const cleanString = inputString.replace(/[^a-zA-Z0-9]/g, "");

  // Step 2: Convert to lowercase
  const lowercaseString = cleanString.toLowerCase();

  // Step 3: Reverse the string
  const reversedString = lowercaseString.split("").reverse().join("");

  // Step 4: Check if it's a palindrome
  return lowercaseString === reversedString;
}

// Test cases:
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Expected output: true
console.log(isPalindrome("Hello, World!")); // Expected output: false
