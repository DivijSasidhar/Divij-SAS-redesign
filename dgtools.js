function turnOn(obj) { 
	obj.className = obj.className.replace('off', 'on');
}

function turnOff(obj) { 
	obj.className = obj.className.replace('on', 'off');
}

/** :)
function excite(obj) { 
	obj.src = "/images/divij-sas-online.gif"
}

function normal(obj) { 
	obj.src = "/images/sas-online.gif"
}
**/

function condensetable() {
	var rows = document.querySelectorAll('li.table-row')
	if (rows[0].className != "table-row hidden") {
		var percentage = 95;
		for (let i = 0; i < rows.length; i++) {
			rows[i].style.transform = "translateY(-" + ((percentage)) + "%)"
			rows[i].style.zIndex = -i;
			rows[i].style.maxheight = '0';
			percentage += 110;
			rows[i].classList.add('hidden');

		}
	}
	else {
		var rows = document.querySelectorAll('li.table-row.hidden')
		for (let i = 0; i < rows.length; i++) {
			rows[i].style.transform = ""
			rows[i].style.maxheight = '30';
			rows[i].classList.remove('hidden');
		}
	}
}

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
