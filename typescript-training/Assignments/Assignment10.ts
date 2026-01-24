// Given a string s, return true if it is a palindrome, or false otherwise.
function isPalindrome(s: string): boolean {
    // 1. Clean the string: convert to lowercase and remove non-alphanumeric chars
    // Regex explanation: /[^a-z0-9]/gi matches anything NOT a letter or number
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // 2. Initialize two pointers
    let left = 0;
    let right = cleanedString.length - 1;

    // 3. Compare characters moving inward
    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car"));                     // Output: false
console.log(isPalindrome(" "));                            // Output: true

export {}