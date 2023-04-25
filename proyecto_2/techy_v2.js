/********************************************
		con este código nuestra imágen seguirá el cursor
/********************************************/
/* copiá el código del evento número 1 acá */
function agregarEventoMousemove(cursorImagen){
	document.addEventListener("mousemove", function(event) {
		var x = event.clientX;
		var y = event.clientY;
		cursorImagen.style.display = "block";
		cursorImagen.style.top = y + "px";
		cursorImagen.style.left = x + "px";
	});
} 
/* fin evento número 1 */

/********************************************
		con este código nuestra imágen se agrandará un poco al hacer click
/********************************************/
/* copiá el código del evento número 2 acá */

function escalarImagen(cursorImagen, escala){
	cursorImagen.style.transform = `scale(${escala})`;
}

function agregarEventoClick(cursorImagen){
	cursorImagen.addEventListener("click", function() {
		escalarImagen(cursorImagen, 1.2);
		cursorImagen.dataset.escala = 1;
		setTimeout(function() {
			escalarImagen(cursorImagen, 1);
		}, 200);
	});
}
/* fin evento número 2 */

/********************************************
	con este código nuestra imágen va a girar cuando hagamos doble click
/********************************************/
/* copiá el código del evento número 3 acá */
function agregarEventoDobleClick(cursorImagen){
	var clickCount = 0;
	var timer = null;
	cursorImagen.addEventListener("click", function() {
		clickCount++;
		if (clickCount === 1) {
			timer = setTimeout(function() {
				clickCount = 0;
			}, 250);
		} else if (clickCount === 2) {
			clearTimeout(timer);
			clickCount = 0;
			cursorImagen.style.transform = "rotate(45deg)";
			setTimeout(function() {
				cursorImagen.style.transform = "rotate(0deg)";
			}, 1000);
		}
	});
}
/* fin evento número 3 */

/********************************************
	con este código nuestra imágen va a agrandarse cuando mantengamos clickeada la imágen y movamos el mouse (arrastrar)
/********************************************/
/* copiá el código del evento número 5 acá */
function agregarEventoArrastrar(cursorImagen){
	cursorImagen.addEventListener("drag", function(event) {
		var escala = 0.01;
		cursorImagen.dataset.escala = parseFloat(cursorImagen.dataset.escala) + escala;
		escalarImagen(cursorImagen,cursorImagen.dataset.escala);
	});
}
/* fin evento número 5 */

/********************************************
	con este código cuando arrastremos sobre Lilo nuestra imágen cambiará
/********************************************/
/* copiá el código para activar a LILO acá */
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
/* fin código para activar a LILO */

/********************************************
	con este código cuando seleccionemos a JUMBA podremos cambiar nuestra imagen por cualquier otra
/********************************************/
/* copiá el código para activar a JUMBA acá */
function pedirImagenNueva(){
	var cursorImagen = document.getElementById("cursorImagen");
	var nuevaImagen = prompt("DIRECCION DE NUEVA IMAGEN");
	if(nuevaImagen != null){
		cursorImagen.src = nuevaImagen;
	}
}
/* fin código para activar a JUMBA */



document.addEventListener('DOMContentLoaded', function() {
	var cursorImagen = document.getElementById("cursorImagen");
	
/********************************************
		agregá las funciones acá 
/********************************************/

agregarEventoMousemove(cursorImagen);
agregarEventoClick(cursorImagen);
agregarEventoDobleClick(cursorImagen);
agregarEventoArrastrar(cursorImagen);
agregarEventoParaAgregarALilo(cursorImagen);

})


