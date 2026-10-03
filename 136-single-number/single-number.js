/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let unique = 0;

    for(let i=0; i<nums.length; i++){
        unique ^= nums[i]; // bitwise xor operation
    }

    return unique;
};