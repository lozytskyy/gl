
let mainSection = document.getElementById("mainSection");


function addTable() {
        const yValue = 5;
        const xValue = 7;
        const xDays = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];

 	/*--------------------------*/

 	const table = document.createElement("table");



 	const trDays = document.createElement('tr');
	 	for (let j = 1; j <= xValue; j++) {
	 		const th = document.createElement('th');
	 		th.className = "dark";
	 		trDays.appendChild(th);
	 		th.innerHTML = xDays[j-1];
	 	}
 	table.appendChild(trDays);

 	/*--------------------------*/

	for (let i = 1; i <= yValue; i++) {
    	const tr = document.createElement('tr');
    	for (let j = 1; j <= xValue; j++) {
        	const td = document.createElement('td');
	       /* if (i%2 == j%2) {
	            td.className = "white";
	        } else {*/
	            td.className = "gray";
	       /* }*/
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
mainSection.innerHTML = '';
mainSection.appendChild(table);
}

addTable();

/*-------------insert DIV before Table-------------*/

 	const div = document.createElement("div");
 	div.className = "headerDiv";
 	document.body.insertBefore(div, mainSection);
 	div.style.width = mainSection.offsetWidth + "px"; // div width <-- width of main Table

 	const left = document.createElement("div"); // <-- LEFT button
 	const backArr = document.createTextNode("<"); 
 	left.className = "leftDiv";
 	div.appendChild(left);
 	left.appendChild(backArr);

 	const center = document.createElement("div"); // <-- CENTER text
 	center.className = "centerDiv";
 	div.appendChild(center);
 	
 	let objToday = new Date(), // <-- get current data & insert into center cell
 	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
 	curYear = objToday.getFullYear(),
	curMonth = months[objToday.getMonth()];
	const today = curMonth + " " + curYear;
	document.getElementsByClassName('centerDiv')[0].textContent = today;


 	const right = document.createElement("div"); // <-- RIGHT button
 	const forwardArr = document.createTextNode(">");
 	right.className = "leftDiv";
 	div.appendChild(right);
 	right.appendChild(forwardArr);

 	/*--------------------------*/
function insertDays() {
	let td = document.getElementsByTagName("td");
	for (let i = 0; i <= 29; i++) {
		td[i].innerHTML = i + 1;
		td[i].className = "white";

		if (i === 0 || i === 7 || i === 14 || i === 21 || i === 28) {
			td[i].classList.add("sunday");
		}
	}
}

insertDays();

/*-------------Today IS-------------*/

function todayIs() {

	let objToday = new Date(), // <-- get current DAY
 	curDay = objToday.getDate();
	console.log("today is: " + curDay);

	let td = document.getElementsByTagName("td");
		for (let i = 0; i <= 29; i++) {
			if ((i + 1) === curDay) {
				td[i].classList.add("today");
			}
		}
}

todayIs();
