// set interval le continuos function call garxa
// to stop set interval we use clearinterval


// this is for acessing id and class
const startbutton=document.querySelector('#start');
const stopbutton=document.querySelector('#stop');
const resetbutton=document.querySelector('#reset');
const mins=document.querySelector('.mins');
const secs=document.querySelector('.secs')

// to start timer we have to create one id to stop the timer
let intervalId;

// starting time 
let timerTime=0;


// to make when user start button then it shows stop button
stopbutton.style.display='none';



// its start time with setinterval
function startTimer(){

intervalId=setInterval(increamentTimer,1000);
stopbutton.style.display='inline-block';

}

// to stop we use that global id intervalid
function stopTimer(){

clearInterval(intervalId);
	stopbutton.style.display='none';
startbutton.style.display='none';
startbutton.style.display='inline-block';

}



function resetTimer(){

	// timertime=0 is for stariting from 0
timerTime=0;
stopTimer();


secs.innerText='00';
mins.innerText='00';
	
}



function increamentTimer(){
timerTime++;

// this is for minute

const numberofmins=Math.floor(timerTime/60);
mins.innerText=zeropadding(numberofmins);

// to  start from 00 after 1min
const numberofsec=timerTime % 60;



// this is for second


secs.innerText=zeropadding(numberofsec);
	console.log('increamentTimer',timerTime);
}



// for making time start with 01 01 like this mins and secs

function zeropadding(number){


	return number<10 ?`0${number}`:`${number}`;
}


// to make when user start button then it shows stop button
