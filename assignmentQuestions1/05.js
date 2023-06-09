//? You are given two integer arrays nums1 and num2 sorted in non decreasing order and two integers n and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non decreasing order.
//* The final sorted array should be returned by the function but instead be sorted inside the array nums1. To accomodate this nums1 has a length of m + n where the first m elements denote the elements that should be ,erged and the last n elements are set to 0 and should be ignored. nums2 has a length of n

/*
**Example 1:**
Input: nums1 = [1,2,3,0,0,0], m = 3 nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
The result of of the merge is [1,2,2,3,5,6] with the underlined element coming from nums1.
*/

let merge = function (nums1, m, nums2, n) {
  let insertPos = m + n - 2;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertPos--] = nums1[m] ? nums1[m--] : nums2[n--];
  }
};
