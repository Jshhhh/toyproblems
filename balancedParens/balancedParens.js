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
var balancedParens = function(input) {
  const opening = ['[','{','('];
  let startsOpen = false;
  let brackets = {
    total: 0,
    '[': 0,
    ']': 0,
    '{': 0,
    '}': 0,
    '(': 0,
    ')': 0
  };
  for (let i = 0; i < input.length; i++) {
    if (brackets[input[i]]) {
      if (brackets[input[i]] === 0 && opening.includes(input[i])) {
        brackets[input[i]] += 1;
        brackets.total += 1;
        startsOpen = true;
      } else if (brackets[input[i]] === 0 && !startsOpen) {
        return false;
      } else if (startsOpen) {
        brackets[input[i]] += 1;
        brackets.total += 1;
      }
    }
  }
  if (brackets.total % 2 === 0) return true;
  else return false;
};