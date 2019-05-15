//import  from './helpers.js';
import fullName, {ageInSeconds} from './helpers.js';
import addNum,{upperName as toUpperCase} from './utilities.js';
const person={
	first:"Ryan",
	last:"Christiani",
	age:33
};
// console.log(fullName(person));
//console.log(ageInSeconds(person));
console.log(addNum(3,5));
//console.log(upperName(person));
//console.log(toUpperCase(fullName(person)));
console.log(toUpperCase(person.first))