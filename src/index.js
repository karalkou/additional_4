module.exports = function multiply(first, second) {

    var arr_a = turnStrIntoReversedArr(first);
    var arr_b = turnStrIntoReversedArr(second);
    var c = [0];
    var size_a = arr_a.length,
        size_b = arr_b.length;
    var carry, temp;

    /* algorithm */
    var len = size_a + size_b + 1;
    for (var i = 0; i < size_a; i++){
        /*console.log('i: ', i);*/
        carry = 0;
        for (var j = 0; j < size_b; j++){
            /*console.log('--j: ', j);
             console.log('arr_a[i]: ', arr_a[i]);
             console.log('arr_b[j]: ', arr_b[j]);*/

            temp = arr_a[i] * arr_b[j] + (c[i+j]?c[i+j]:0) + carry;
            c[i+j] = temp%10;
            carry = (temp-temp%10)/10;

            /*console.log('temp  : ', temp);
             console.log('c[i+j]: ', c[i+j]);
             console.log('carry : ', carry);

             console.log('**inner cycle**');*/

        }

        c[i+j] = carry;
        /*console.log('*outer cycle*');*/

    }

    // set size by non-zero digit
    i = size_a + size_b - 1;
    if ( c[i] === 0 ) i--;
    c.length = i+1;
    /* \algorithm */

    //console.log('c: ', c);

    return c.reverse().join('');
};

/* helpers */
function turnStrIntoReversedArr(str){
    return str.split('').reverse();
}
