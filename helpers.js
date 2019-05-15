export default  person=>{
	return `${person.first} ${person.last}`;
}

//named export
export const ageInSeconds=person=>{
	return `${person.age*31557600}`
}