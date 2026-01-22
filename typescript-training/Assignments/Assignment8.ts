let x : number=2, n : number = 10;
let y: number=2.1, m : number =3;
let z : number = 2, p : number = -2;

function pow(x: number, n: number): number {
    return Math.pow(x, n);
}

console.log("x power n =", Math.pow(x, n) )
console.log("y power m =", Math.pow(y, m) )
console.log("z power p =", Math.pow(z, p))

export {};