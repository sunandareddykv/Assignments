function printNumberDiamond(n: number): void {
    // 1. Increasing part (1 to n)
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row. trim());
    }
// 2. Decreasing part (n-1 down to 1)
for (let i = n - 1; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row.trim());
    }
}
printNumberDiamond(4);

    export {};