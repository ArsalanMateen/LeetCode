/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (nums.length < 1) return 0; // If the array is empty, the only missing number is 0

    let n = nums.length;

    // Sum of the distinct positive integers: n * (n + 1) / 2
    let sumOfNdistinct = (n * (n + 1)) / 2;

    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    let missing = sumOfNdistinct - sum; // The difference between the expected sum and actual sum is the missing number
    return missing;
};