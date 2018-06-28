/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    // const arr = [];
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] == '{') arr.push(']');
    //     else if (input[i] == '[') arr.push(']');
    //     else if (input[i] == '(') arr.push(')');
    //     else if (!arr.length || arr.length % 2 !== 0) {
    //         return false;
    //     }
    //     return true;
    // }
    let newInput = input.split('')

    const arr = [];
    for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] == '{') arr.push(newInput[i]);
        else if (newInput[i] == '[') arr.push(newInput[i]);
        else if (newInput[i] == '(') arr.push(newInput[i]);
        if (!arr.length) return false;
    }
    return true;
}


module.exports = balancedParens;
