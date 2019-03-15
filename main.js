function loadDoc() {
	var xhttp = new XMLHttpRequest();
	document.getElementById('info').innerHTML = this.respenseText;
	xhttp.open("GET" , "api.openweathermap.org/data/2.5/weather?q=Kolkata&APPID=2a2de3dacd36a71222093dc0bf46ef2a&units=metric", true);
	xhttp.send();
}