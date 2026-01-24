//1. Count the total number of words in the sentence.
//2. Print the sentence words in reverse order.
//3. Convert the first character of each word to uppercase and print original sentence

const originalSentence: string = "Java programming is fun and challenging";

/**
 * 1. Count the total number of words
 */
const wordsArray: string[] = originalSentence.split(/\s+/);
const wordCount: number = wordsArray.length;

console.log(`1. Total number of words: ${wordCount}`);

/**
 * 2. Print the sentence words in reverse order
 * We clone the array first using [...array] so we don't mutate the original list
 */
const reversedWords: string = [...wordsArray].reverse().join(" ");
console.log(`2. Words in reverse order: "${reversedWords}"`);

/**
 * 3. Convert the first character of each word to uppercase
 */
const capitalizedSentence: string = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

console.log(`3. Capitalized sentence: "${capitalizedSentence}"`);