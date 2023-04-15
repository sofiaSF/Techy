function agregarEventoMousemove(cursorImagen){
	document.addEventListener("mousemove", eventoMousemove);
}

function eventoMousemove(event){
	var x = event.clientX;
	var y = event.clientY;
	cursorImagen.style.display = "block";
	cursorImagen.style.top = y + "px";
	cursorImagen.style.left = x + "px";
}

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

function agregarEventoClickDerecho(cursorImagen){
	cursorImagen.addEventListener("contextmenu", function(event) {
		event.preventDefault();
		document.removeEventListener("mousemove", eventoMousemove);
	});
}

function agregarEventoMousedown(cursorImagen){
	cursorImagen.addEventListener("mousedown", function(event) {
		agregarEventoMousemove(cursorImagen);
	});
}

function pedirImagenNueva(){
	var cursorImagen = document.getElementById("cursorImagen");
	var nuevaImagen = prompt("DIRECCION DE NUEVA IMAGEN");
	if(nuevaImagen != null){
		cursorImagen.src = nuevaImagen;
	}
}

function agregarEventoArrastrar(cursorImagen){
	cursorImagen.addEventListener("drag", function(event) {
		var escala = 0.01;
		cursorImagen.dataset.escala = parseFloat(cursorImagen.dataset.escala) + escala;
		escalarImagen(cursorImagen,cursorImagen.dataset.escala);
	});
}

function agregarEventoParaResetearStitch(cursorImagen){
		
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

document.addEventListener("DOMContentLoaded", function() {
	
	var cursorImagen = document.getElementById("cursorImagen");
	
	agregarEventoMousemove(cursorImagen);
	agregarEventoClick(cursorImagen);
	agregarEventoDobleClick(cursorImagen);
	agregarEventoClickDerecho(cursorImagen);
	agregarEventoMousedown(cursorImagen);
	agregarEventoArrastrar(cursorImagen);
	agregarEventoParaResetearStitch(cursorImagen);
		
}); 

