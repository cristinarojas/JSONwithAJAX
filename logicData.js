(function(){
	'use strict';
 
	var xhr = new XMLHttpRequest(); // Creo el objeto XMLHttpRequest y lo guardo en xhr
	xhr.onload = function() {
		if(xhr.status == 200) {
			responseObject = JSON.parse(xhr.responseText);
 
			// Construimos una cadena con el nuevo contenido (También podemos hacerlo con DOM)
			var newContent = '';
			for (var i = 0; i < responseObject.events.lenght; i++) { // Recorre el objeto
				newContent += '<div class="event">';
				newContent += '<img src="' + responseObject.events[i].map + '" ';
				newContent += 'alt="' + responseObject.events[i].location + '" />';
				newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
				newContent += responseObject.events[i].date + '</p>'; 
			}
 
			//Actualizando la pagina con el nuevo contenido
			document.getElementById('content').innerHTML = newContent;
		}
	};
 
	xhr.open('GET', 'data.json', true); // Preparando la peticion al servidor
	xhr.send(null); // Enviando la peticion
 
})();
 