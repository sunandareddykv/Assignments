import { add, substract, PI} from './1-named-export.ts';
import { add as sum, substract as sub, PI as pi} from './2-export-all.ts';

console.log("Additem: ", add(2,3));
console.log("subsract: ", sub(5,3));
console.log("PI Value: ", pi);