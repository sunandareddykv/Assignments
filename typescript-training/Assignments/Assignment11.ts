//Count the total number of words in the sentence "Java programming is fun and challenging"
function countWords(sentence: string): number {
    // 1. Trim leading/trailing whitespace
    // 2. Split by any whitespace character(s)
    // 3. Filter out empty strings (to handle cases with only spaces)
    const words = sentence.trim().split(/\s+/);
    
    // If the string is empty after trimming, the count should be 0
    return words[0] === "" ? 0 : words.length;
}

const text: string = "Java programming is fun and challenging";
const totalWords: number = countWords(text);

console.log(`Total words: ${totalWords}`);