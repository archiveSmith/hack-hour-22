// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if(str === ''){
    return true;
  }
  const newStr = str.replace(/[\W_]/g, "-").replace(/(^\-+|\-+$)/mg, '')
  const split = newStr.split('-');
  if (split.length === 1) {
    return false;
  }
  const finalArr = [];
  split.forEach(e => {
    if (e !== '') finalArr.push(e)
  });
  for (let i = 0; i < (finalArr.length / 2); i++) {
    if (finalArr[i].toLowerCase() === finalArr[finalArr.length - (i + 1)].split('').reverse().join('').toLowerCase()) {
      return true;
    }
    return false;
  }
}
console.log(matchWord(''));



module.exports = matchWord;