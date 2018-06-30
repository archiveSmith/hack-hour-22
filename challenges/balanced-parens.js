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
    return (input.includes('(') && input.match(/\(.*\)/gi) !== null) || (input.includes('{') && input.match(/\{.*\}/gi) !== null) || (input.includes('[') && input.match(/\[.*\]/gi) !== null); 
}

module.exports = balancedParens;

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')) ;   // true
console.log(balancedParens('[(]{)}')); // false



// function balancedParens(input){
//     var matches = {'[':']', '{':'}', '(':')'};
//     var brackets = [];
//     for (var i = 0; i < input.length; i++) {
//       let char = input[i];
//       if (char in matches) { // in operator
//         brackets.push(char);
//       } else if (char === ']' || char === ')' || char === '}'){
//         if (matches[brackets.pop()] !== char){
//           return false;
//         }
//       }
//     }
//     return !brackets.length;
//   }