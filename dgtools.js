function turnOn(obj) { 
	obj.className = obj.className.replace('off', 'on');
}

function turnOff(obj) { 
	obj.className = obj.className.replace('on', 'off');
}

/*

function excite(obj) { 
	obj.src = "/images/divij-sas-online.gif"
}

function normal(obj) { 
	obj.src = "/images/sas-online.gif"
}

*/

function hidediv(id) {
	//safe function to hide an element with a specified id
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById(id).style.display = 'none';
	}
	else {
		if (document.layers) { // Netscape 4
			document.id.display = 'none';
		}
		else { // IE 4
			document.all.id.style.display = 'none';
		}
	}
}

function showdiv(id) {
	//safe function to show an element with a specified id
		  
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById(id).style.display = 'block';
	}
	else {
		if (document.layers) { // Netscape 4
			document.id.display = 'block';
		}
		else { // IE 4
			document.all.id.style.display = 'block';
		}
	}
}
