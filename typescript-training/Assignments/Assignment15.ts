//Longest Valid Parentheses
//Given a string containing just the characters '(' and ')', return the length of the longest
//valid (well-formed) parentheses

function longestValidParentheses(s: string): number {
    let left = 0, right = 0, maxLen = 0;

    // Left to Right Pass
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') left++;
        else right++;

        if (left === right) {
            maxLen = Math.max(maxLen, 2 * right);
        } else if (right > left) {
            left = right = 0;
        }
    }

    left = right = 0;

    // Right to Left Pass
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') left++;
        else right++;

        if (left === right) {
            maxLen = Math.max(maxLen, 2 * left);
        } else if (left > right) {
            left = right = 0;
        }
    }

    return maxLen;
    
}

// Test cases
console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));                     
console.log(longestValidParentheses("(()())")); 
console.log(longestValidParentheses(" ")); 

export {};