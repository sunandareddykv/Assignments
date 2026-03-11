const originalName: string = "venkata sunandareddy";
// split the name.
const splittedName: string [ ] = originalName.split(/\s+/);
console.log("1. splittedname is:" +splittedName);
const firstSplittedname : string = splittedName[0];
console.log("First splittedname:" +firstSplittedname);
const firstreversename = [...firstSplittedname].reverse();
console.log ("firstreversename: " +firstreversename);
const secondSplittedname : string = splittedName[1];
console.log("second splittedname: " +secondSplittedname);
const secondreversename = [...secondSplittedname].reverse();
console.log ("secondreversename: "+secondreversename);
const reversedfullName : string = (`${firstreversename} ${secondreversename}`);
console.log("reversedfullname is:" +reversedfullName);

//const reversedWords: string = [...splittedName].reverse().join(" ");
//console.log(`2. Words in reverse order: "${reversedWords}"`);