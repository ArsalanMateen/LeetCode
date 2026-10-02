/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutive = 0;

    let countOnes = 0; // track of the current streak of consecutive 1s

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) // If the current element is 1, increase the current streak
        {
            countOnes++;
        }
        else 
        {
            // We reached a 0, so the current streak has ended.
            // Compare it with the maximum streak found so far.
            maxConsecutive = Math.max(countOnes, maxConsecutive);

            // Reset the current streak because we encountered a 0
            countOnes = 0;
        }
    }

    maxConsecutive = Math.max(countOnes, maxConsecutive);
    return maxConsecutive;  
};
