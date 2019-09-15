
let btnCalculate = document.getElementById('btnCalculate');
let sum = document.getElementById('sum');
let max = document.getElementById('max');
let min = document.getElementById('min');
let avr = document.getElementById('avr');
let myArea = document.getElementById('myArea');
let count = 0;
let allWords = 0;
let arr, maximum, minimum;

btnCalculate.addEventListener('click', calculate);

function getData() {

	let textInside = myArea.value;
	arr = textInside.split(" "); // to array
	minimum = arr[0].length;
	maximum = arr[0].length;

	for (let i = 0; i < arr.length; i++) {
	 	if (arr[i] !== "") {
	 		if (arr[i] !== "-") {
	 			if (arr[i] !== ",") {
	 				count++;

	 				if (arr[i].length < minimum) {
	 					minimum = arr[i].length; //minimum length 
	 				}

	 				if (arr[i].length > maximum) {
	 					maximum = arr[i].length; //maximum length 
	 				}

	 				allWords += arr[i].length; // summ of all words
	 			}
	 		}
	 	}
	}
}

function calculate() {
	getData(); // main function
	sum.innerHTML = '< ' + count + ' >';
	max.innerHTML = '< ' + minimum + ' >';
	min.innerHTML = '< ' + maximum + ' >';
	avr.innerHTML = '< ' + allWords/count + ' >';
	allWords = 0;
	count = 0;
}

