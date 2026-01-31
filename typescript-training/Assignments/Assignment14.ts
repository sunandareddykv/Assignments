const numbers: number[] = [12, 34, 11, 36, 87, 98, 93];

function findTopThree(arr: number[]): void {
    // Initialize with the lowest possible number value
    let first: number = -Infinity;
    let second: number = -Infinity;
    let third: number = -Infinity;

    for (const num of arr) {
        if (num > first) {
            // Shift values down: 1st becomes 2nd, 2nd becomes 3rd
            third = second;
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            // Shift 2nd to 3rd
            third = second;
            second = num;
        } else if (num > third && num !== second && num !== first) {
            // Just update 3rd
            third = num;
        }
    }

    console.log(`Second Largest: ${second}`);
    console.log(`Third Largest: ${third}`);
}

findTopThree(numbers);

export{};