//alert('Digital Clock');

//new is Constructor keyword..

//The function calls itself that is called Recursive Function....


let digiclock = document.querySelector('.digiclock');
// let digiclock = document.querySelector('#digiclock');
// let digiclock = document.getElementById('digiclock');


function digitalClock(){
	let date = new Date();
	
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let session = "AM";
	
	
	if(hr > 12){
		session = "PM";
		// hr = hr - 12;			// if we comment this then watch will be of 24hrs Clock
		hr = hr - 12;				// This will give us 12 hrs clock..
	}
	
	hr = addzero(hr);
	min = addzero(min);
	sec = addzero(sec);
	
	// if(sec < 10){
		// sec = "0" + sec;
	// }
	
	// if (min < 10){
		// min = "0" + min;
	// }
	// if(hr < 10){
		// hr = "0" + hr;
	// }
	
	
	
	let result = `${hr} : ${min} : ${sec} ${session}`
	
	digiclock.innerHTML= result;
	setTimeout(digitalClock,1000);
	// console.log(hr,min,sec);
		
}
digitalClock();



function addzero(timeElement){
	
	if(timeElement<10){
		timeElement = "0" + timeElement;
	}
	return timeElement;
}



















// let digiclock = document.querySelector(.digiclock);

// function digiClock(){
	
	// let date = new Date();
	
	// let hr = date.getHours();
	// let min = date.getMinutes();
	// let sec = date.getSeconds();
	
	
	// let result = `${sec} : ${min} ; ${sec}`
	
	// digiclock.innerHTML = result;
	// setTimeout(digiclock,1000);
	
// }

// digiclock();







































































































// let currentDate = new Date();
// console.log(currentDate);



// currentDate.setFullYear(2024);
// console.log(currentDate);

// currentDate.setFullYear(2050,4);
// console.log(currentDate);

// currentDate.setMonth(5);
// console.log(currentDate);

// currentDate.setDate(18);
// console.log(currentDate);

// currentDate.setHours(16);
// console.log(currentDate);

// currentDate.setMinutes(16);
// console.log(currentDate);

// currentDate.setSeconds(16);
// console.log(currentDate);

// currentDate.setMilliseconds(16);
// console.log(currentDate);






// let subscriptionTime = new Date(2022,8,17,11);

// let expiryTime = (new Date(2022,9,17,11)).getTime();


// let currDate = (new Date().getTime());




// if(currDate > expiryTime){
	// console.log("");
// }
// else{
	// console.log("");
// };
















