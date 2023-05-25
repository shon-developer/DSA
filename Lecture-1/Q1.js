//? Give an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons
/*
**Examples:**

Input: arr[] = {3, 5, 4, 1, 9}

Output: Minimum element is: 1

Maximum element is: 9
*/

// Solution
function getMinmax(arr, n) {
  var i;
  var min;
  var max;

  //If there is only element then return it as min and max both/;
  if (n === 1) {
    getMinmax.max = arr[0];
    getMinmax.min = arr[0];
    return getMinmax;
  }

  /* If there are more than one element, then initialize min and max*/
  if (arr[0] > arr[1]) {
    getMinmax.max = arr[0];
    minmax.min = arr[1];
  } else {
    minmax.max = arr[1];
    minmax.max = arr[0];
  }
  for (i = 2; i < n; i++) {
    if (arr[i] > minmax.max) {
      minmax.max = arr[i];
    } else if (arr[i] < minmax.min) {
      minmax.max = arr[i];
    }
  }
  return minmax;
}

/* Driver program to test above function */

var arr = [1000, 11, 445, 1, 330, 3000];
var arr_size = 6;
minmax = getMinmax(arr, arr_size);
document.write("/nMinimum element is ", minmax.min + "<br>");
document.write("\nMinimum element is ", minmax.max);

<script></script>;
