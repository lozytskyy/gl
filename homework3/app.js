
let btnCalculate = document.getElementById('btnCalculate');
let notExist = document.getElementById('notExist');
let square = document.getElementById('square');
let rectangle = document.getElementById('rectangle');

let n;
let arr = [];
let notExist0 = 0;
let squareExist = 0;
let rectangleExist = 0;

btnCalculate.addEventListener('click', calculate);

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function createArr() {
	for (let j = 0; j <= 3; j++) {
		arr[j] = getRandomInt(11); // random 4 elements of 'arr' array [0 to 10]
	}
}

function getData() {

let inpt = document.getElementById('inpt').value;

if (isNaN(inpt)) {
	alert('Please input number!'); // check input value (isNAN)
} else {

	let x = new Array(n);
	n = inpt;

	for (let k = 0; k < x.length; k++) { // (k < n) --> number of items
		x[k] = new Array(4); // x = [ [.], [.], [.], [.] ]
	}

	for (let i = 0; i <= n-1; i++) {
		createArr();
		x[i] = arr;	// subArr (arr) --> mainArr (x[i])

		let sum = arr.reduce((sum, current) => sum + current); // sides sum of every rectangle
		let max = Math.max(...arr); // max side of every rectangle

		if ((x[i].includes(0)) && (max > (sum - max))) {
			notExist0++;
		} else if (x[i].includes(0)) {
			notExist0++; // not exist! --> side can not be == 0
		} else if (max > (sum - max)) {
			notExist0++; // not exist! --> side sum can not be < max side
		}

		if (arr[0] > 0) {
				if ((arr[0] === arr[1]) && (arr[1] === arr[2]) && (arr[2] === arr[3])) {
				squareExist++; // exist! --> all sides equal (square)
			}
		}

		rectangleExist = (n - (notExist0 + squareExist)); // exist! --> all another rectangles
		arr = [];
	}
	console.log (x);
}
}

function calculate() {
	getData(); // main function
	notExist.innerHTML = '< ' + notExist0 + ' >';
	square.innerHTML = '< ' + squareExist + ' >';
	rectangle.innerHTML = '< ' + rectangleExist + ' >';
	notExist0 = 0;
	squareExist = 0;
	rectangleExist = 0;
}