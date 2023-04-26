/********************************************
		con este código nuestra imágen seguirá el cursor
/********************************************/
/* copiá el código del PASO 2 acá */






/********************************************
		con este código nuestra imágen se agrandará un poco al hacer click
/********************************************/
/* copiá el código del PASO 4 acá */






/********************************************
	con este código nuestra imágen va a girar cuando hagamos doble click
/********************************************/
/* copiá el código del PASO 5 acá */







/********************************************
	con este código nuestra imágen va a agrandarse cuando mantengamos clickeada la imágen y movamos el mouse (arrastrar)
/********************************************/
/* copiá el código del PASO 6 acá */






/********************************************
	con este código cuando arrastremos sobre Lilo nuestra imágen cambiará
/********************************************/
function agregarEventoParaAgregarALilo(cursorImagen){
		
	var liloImagen = document.getElementById("liloImagen");
	
	liloImagen.addEventListener("drop", function(event) {
		event.preventDefault();
		cursorImagen.src = "recursos/lilo-stitch.gif";
		escalarImagen(cursorImagen, 2);
	});
		
	liloImagen.addEventListener("dragover", function(event) {
		event.preventDefault();
	});
}

/********************************************
	con este código cuando seleccionemos a JUMBA podremos cambiar nuestra imagen por cualquier otra
/********************************************/
function pedirImagenNueva(){
	var cursorImagen = document.getElementById("cursorImagen");
	var nuevaImagen = prompt("DIRECCION DE NUEVA IMAGEN");
	if(nuevaImagen != null){
		cursorImagen.src = nuevaImagen;
	}
}

document.addEventListener('DOMContentLoaded', function() {
var cursorImagen = document.getElementById("cursorImagen");

agregarEventoParaAgregarALilo(cursorImagen);	
agregarEventoMousemove(cursorImagen);
agregarEventoClick(cursorImagen);
agregarEventoDobleClick(cursorImagen);
agregarEventoArrastrar(cursorImagen);


})


