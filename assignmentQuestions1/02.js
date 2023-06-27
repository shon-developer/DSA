//? Given an integer array runs an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. The return the number of elements in nums which are not equal to val. Consider the number elements in nums which are not equal to val be k, to get accepted you need to do the following things.
//* Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of the nums
//* Return k

/*
**Example:**
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,*,_*]

**Explanation:** Your function should return k = 2, with the first two elements of nums being
*/
//* It does not matter what you leave beyond the returned k(hence they are underscored)

let removedElements = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      index++;
    }
  }
};

//* Time complexity => O(n)
//* Space complexity => O(1)