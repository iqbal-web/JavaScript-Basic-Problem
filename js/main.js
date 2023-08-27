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





// Find specific string and 1st find idex number

const sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
const mathes = sentence.match(/lorem/gi);

const ocurances = mathes ? mathes.length : 0;

//console.log(ocurances);

let position = sentence.search(/lorem/i);

position = position >= 0 ? position : 'not found!';

//console.log(position);


function linearSearch (arr, val) {
  const length = arr.length;
  for( let i = 0; i < length; i++){
    if(arr[i] === val){
      return i;
    }
  }

  return 'not Found!';

}

// console.log(linearSearch(['a', 'b', 'c', 'd'], 'c'));



// Array long word

function longestString(names) {

  let longestWord = '';
  let name = '';

  for(name of names){
    if(name.length > longestWord.length){
      longestWord = name;
    }
  }

  return [longestWord, names.indexOf(longestWord)];

}

//console.log(longestString(['sumit', 'akash', 'batash ja how', 'hawa']));




// find 3 & 5 divided number / and 3 number divided / and 5 number divided

function fizzBuzz(number) {

  for( let i = 1; i <= number; i++) {
    if( i % 15 === 0 ) {
      //console.log(`${i} is fizzBuzz`);
    }
    else if(i % 3 === 0){
      //.log(`${i} is fizz`);
    }
    else if(i % 5 === 0){
      //.log(`${i} is buzz`);
    }
    else{
      //console.log(i);
    }
  }

}

fizzBuzz(100);


//  problem 12

/// Remove false value in array 

const mixedArr = [
  'lws',
  undefined,
  'learn more',
  false,
  'apple',
  40,
  'k',
  true,
  'thnks',
  NaN
];

const trueArr = mixedArr.filter(function(el){
  if(el) {
    return true;
  } else{
    return false;
  }

});

//console.log(trueArr);

// OR

constTrue = mixedArr.filter(Boolean);

//console.log(constTrue);


// remove false value in object

const obj = {
  a: 'hello',
  b: undefined,
  c: 'learn More',
  d: false,
  e: '',
  f: 'apple',
  g: NaN,
  h: true,
};


const trueObj = function(obj) {
  for( let i in obj){
    if(!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
}

console.log(trueObj(obj));


// Callback Pattern | Asynchronous

paymentSuccess = true;
marks = 90;

function enroll (callback){
	console.log("Course enroll is  in progress");

	setTimeout(function(){
		if ( paymentSuccess) {
			callback();
		} else {
			console.log("Payment failed");
		}
	}, 2000);
}

function progress(callback){
	console.log("Course enroll is completed");

	setTimeout(function(){
		if( marks >= 80 ){
			callback();
		} else {
			console.log("You have failed the course");
		}
	}, 2000);
}

function certificate(){
	console.log("Certificate is generated");

	setTimeout(function(){
		console.log("Certificate is sent to email");
	}, 1000);
}

enroll(function(){ 
	progress(function(){
		certificate();
	});
});