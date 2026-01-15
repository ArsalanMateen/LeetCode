/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = false;
    if (x < 0){ // handling negative numbers
        x *= -1
        isNegative = true;   
    }

    let reverse = 0;
    while(x > 0){
        let remainder = x % 10;
        reverse = (reverse * 10) + remainder;
        x = Math.floor(x / 10);
    }
    
    let limit = Math.pow(2,31)
    if (reverse < -limit || reverse > (limit-1)){ // handling outside signed 32-bit range numbers
        return 0
    } 
    else if (isNegative){
        reverse *= -1
    }
    return reverse
};