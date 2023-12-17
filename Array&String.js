/* 1.
Dissecting how each planned step works, 
Function Signature:
** The function is named `findMax`,
and it takes an array `arr` as a parameter.
*/
function findMax(arr) {
  /* 2. Initial Check: Checks if the array is empty. 
if it is, the function returns `null` since there
is no maximum element to find.*/
  if (arr.length === 0) {
    return null; // Array is empty
  }
  /* 3. Initialization: Initializes the `max`
variable  with the first element of the array.*/
  let max = arr[0];

  /* 4. Iteration Through the Array:
   ** Iterates through the array starting from the second element (`i = 1`).
   ** Compares each element (`arr[i]`) with the current maximum (`max`).
   ** If the element is greater than the current maximum, updates the `max` variable */
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    // Return the Maximum Returns the maximum value found in the array. */
    return max;
  }

  // Test the function: ** Creates an array `myArray` and calls the `findMax` function to find the maximum element, which is `23`.
  const myArray = [12, 5, 23, 8, 9];
  console.log(findMax(mayArray)); // Outputs 23
}
