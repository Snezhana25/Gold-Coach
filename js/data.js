
function a(){
	fulltime();
	month();
}

var monthNames=["января","февраля","марта","апреля","майя","июня",
 "июля","августа","сентября","октября","ноября","декабря"];
var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
function month(){
	var mydate = new Date();
	mydate.setDate(11); 
	myData = new Date(mydate.getFullYear(), mydate.getMonth(), mydate.getDate(), mydate.getDay());
	var cdate = monthNames[mydate.getMonth()];
	var data = mydate.getDate();
	var day = days[mydate.getDay()];
	document.getElementById("month2").innerHTML = cdate;
	document.getElementById("month").innerHTML = cdate;
	document.getElementById("data").innerHTML = data;
	document.getElementById("data2").innerHTML = data;
	document.getElementById("day").innerHTML = day;
	
}

function fulltime (){
	var time=new Date();
	var newYear = new Date("October,11,2017,20:00:00");   
	var totalRemains=(newYear.getTime()-time.getTime());
	 
	if (totalRemains > 1){
	 
		var RemainsSec = (parseInt(totalRemains/1000));
		var RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));
		var secInLastDay= RemainsSec-RemainsFullDays*24*3600;
		var RemainsFullHours= (parseInt(secInLastDay/3600));
		if (RemainsFullHours < 10){
			RemainsFullHours = "0" + RemainsFullHours
		};
		var secInLastHour = secInLastDay-RemainsFullHours*3600;
		var RemainsMinutes = (parseInt(secInLastHour/60));
		if (RemainsMinutes < 10){
			RemainsMinutes = "0" + RemainsMinutes
		};
		var lastSec=secInLastHour-RemainsMinutes*60;
		if (lastSec<10){
			lastSec="0"+lastSec
		};
	 
		document.getElementById("days").innerHTML=RemainsFullDays;
		document.getElementById("hour").innerHTML=RemainsFullHours;
		document.getElementById("min").innerHTML=RemainsMinutes;
		document.getElementById("sec").innerHTML=lastSec;   
		setTimeout('fulltime()',10);    
	}
	 
	else{
	document.getElementById("clock").innerHTML="СТАРТ ТРАНСЛЯЦИИ";
	}
}

