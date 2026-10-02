/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutive = 0; 

    let countOnes = 0;
    for (let i=0; i<nums.length; i++){
        if (nums[i] !== 0){
            countOnes++;
        }
        else{
            maxConsecutive = Math.max(countOnes, maxConsecutive);
            countOnes = 0;
        }
    }

    maxConsecutive = Math.max(countOnes, maxConsecutive);
    return maxConsecutive;  
};