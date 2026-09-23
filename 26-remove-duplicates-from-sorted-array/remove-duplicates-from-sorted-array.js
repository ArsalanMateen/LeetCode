/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp = 0; // index of the last unique element, the first element is always unique

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[temp]) // Found a new unique element
        {
            temp++;
            nums[temp] = nums[i]; // Place the new unique element at the next position
         }
    }

    return temp+1; // return the number of unique elements
}