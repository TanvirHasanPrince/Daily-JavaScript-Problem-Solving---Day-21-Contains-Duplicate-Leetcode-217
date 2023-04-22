/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

function containsDuplicate(nums) {
  const set = new Set(nums); // create a set from the input array
  return set.size !== nums.length; // if the set size is different from the array length, there are duplicates
}

const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1)); // false
console.log(containsDuplicate(nums2)); // true

//***********ANOTHER METHOD with Sets********////

function containsDuplicate2(nums) {
  const set = new Set(); // create an empty set
  for (const num of nums) {
    // iterate over the input array
    if (set.has(num)) {
      // if the set already has the current element, return true
      return true;
    }
    set.add(num); // otherwise, add the current element to the set
  }
  return false; // if we reach this point, there are no duplicates
}


const nums3 = [1, 2, 3, 4];
const nums4 = [1, 2, 3, 1];
console.log(containsDuplicate2(nums3)); 
console.log(containsDuplicate2(nums4)); 

