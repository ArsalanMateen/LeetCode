/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let end = s.length - 1; // Pointer to the last element

    // Iterate through the first half of the array and swap elements
    for (let i = 0; i < s.length / 2; i++) {

        // Swap the elements at the current and corresponding end positions
        let temp = s[i];
        s[i] = s[end];
        s[end] = temp;

        end--; // Move the end pointer toward the center
    }
};