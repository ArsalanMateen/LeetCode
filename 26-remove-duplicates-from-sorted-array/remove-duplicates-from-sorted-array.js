/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp = 0;

    for (let i=0; i<nums.length; i++){
        if(nums[i] > nums[temp]){
            temp +=1;
            nums[temp] = nums[i];
        }

    }
    return temp+1;
};