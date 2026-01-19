/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let head = 0;
    let tail = s.length-1;

    let i = 0;
    while(head < tail){
        let temp = s[head]; // store value before updation
        s[head] = s[tail];
        head++; // move head to next index

        s[tail] = temp; // update tail with previous head value
        tail--; 

        i++;
    }
    return s; 
}