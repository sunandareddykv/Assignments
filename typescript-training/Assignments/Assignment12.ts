//1. Find total number of occurrences
//2. Print count and Indexes of the word


const paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
const searchTerm: string = "Java";

function searchWord(text: string, word: string) {
    const indexes: number[] = [];
    let currentIndex: number = text.indexOf(word);

    // Continue searching as long as indexOf finds a match (it returns -1 if not found)
    while (currentIndex !== -1) {
        indexes.push(currentIndex);
        // Start the next search immediately after the current found index
        currentIndex = text.indexOf(word, currentIndex + 1);
    }

    // 1. Find total number of occurrences
    const totalOccurrences: number = indexes.length;

    // 2. Print count and Indexes of the word
    console.log(`Word to search: "${word}"`);
    console.log(`Total number of occurrences: ${totalOccurrences}`);
    console.log(`Indexes found at: ${indexes.join(", ")}`);
}

searchWord(paragraph, searchTerm);
