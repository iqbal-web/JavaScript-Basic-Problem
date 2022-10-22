// Generate Randdom number
function getRandomNumber (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 6));



// sort in student name alphabetically
const student = ["Iqbal", "Hasan", "Javed" , "Abir"];

console.log(student.sort());


// sort random number seriall 
const roll = [10, 20, 30 , 5, 8, 2];
roll.sort (function(a,b) {return a-b});

console.log(roll);


// Leaf year define
function isLeafYear(year){
	if( (year % 400 === 0) || ( (year % 4 === 0) && ( year % 100 !== 0) ) ) {
		console.log( `${year} is leaf year!`);
	}
	else{
		console.log( `${year} is not leaf year`);
	}
}

isLeafYear(2028);


// sentence vowels define
const vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVouwels(sentence){
	let count = 0;
	const letters = Array.from(sentence);

	letters.forEach(function(value) {
		if(vowels.includes(value)){
			count++;
		}
	});
	return count;
}

console.log(countVouwels('I love bangladesh'));


// find array duplicate value
const duplicateNumber = [ 10, 5, 15, 10, 8, 20, 12 ,12, 5 ];

const duplicates = duplicateNumber.filter( function ( value, index, array) {
	return array.indexOf(value) !== index
});

console.log(duplicates);


// find array unique value
const uniqueNumber = [ 10, 5, 15, 10, 8, 20, 12 ,12, 5 ];

const unique = uniqueNumber.filter( function ( value, index, array) {
	return array.indexOf(value) === index
});

console.log(unique);