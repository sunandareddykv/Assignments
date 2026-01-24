// Write a program to print * in triangle pattern

function printRightAlignedTriangle(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        // Calculate the number of spaces needed
        const spaces = " ".repeat(rows - i);
        // Calculate the number of stars needed
        const stars = "*".repeat(i);
        
        console.log(spaces + stars);
    }
}

// Execute with 5 rows
const numRows: number = 5;
printRightAlignedTriangle(numRows);