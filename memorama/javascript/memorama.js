var contador = 0;
var galeria = document.querySelectorAll('#tarjeta');
var avisoPerdiste = document.querySelector('.aviso-perdiste');
var avisoGanaste = document.querySelector('.aviso-ganaste');
var oportunidades = document.querySelector('#numero');
var intento = 6;
pares = 0;


var ListaDeImagenes = ["imagenes/imagen1.jpg",
                       "imagenes/imagen1.jpg",
                       "imagenes/imagen2.jpg",
                       "imagenes/imagen2.jpg",
					   "imagenes/imagen3.jpg",      
					   "imagenes/imagen4.jpg",
					   "imagenes/imagen5.jpg",
					   "imagenes/imagen6.jpg",
					   "imagenes/imagen3.jpg",
					   "imagenes/imagen4.jpg",
					   "imagenes/imagen5.jpg",
					   "imagenes/imagen6.jpg"];

var ListaDeImagenesRevueltas = (ListaDeImagenes.sort((a,b) => 0.5 - Math.random()));



var imagen1 = document.querySelector('.imagen1');
var imagen2 = document.querySelector('.imagen2');
var imagen3 = document.querySelector('.imagen3');
var imagen4 = document.querySelector('.imagen4');
var imagen5 = document.querySelector('.imagen5');
var imagen6 = document.querySelector('.imagen6');
var imagen7 = document.querySelector('.imagen7');
var imagen8 = document.querySelector('.imagen8');
var imagen9 = document.querySelector('.imagen9');
var imagen10 = document.querySelector('.imagen10');
var imagen11 = document.querySelector('.imagen11');
var imagen12 = document.querySelector('.imagen12');

// VARAJEAR LAS CARTAS DEL MEMORAMA-----------------------------
function VarajearImagenes() {
	for (var i = 0; i < galeria.length; i++) {
		galeria[i].src = ListaDeImagenesRevueltas[i];		
	}
}
//--------------------------------------------------------------

//--REDUCIR OPORTUNIDAD/ mostrar aviso de que perdió------------
function reducirIntento() {
	intento--;
	oportunidades.textContent = intento;

	if (intento == 0) {
		avisoPerdiste.classList.add('active');
		deshabilitarTarjetas()
	}
}
//---------------------------------------------------------------
//--mostrar aviso de que ganó------------
function AumentarPar() {
	pares++;
	if (pares == 6) {
		avisoGanaste.classList.add('active');
	}
}
//---------------------------------------------------------------
function deshabilitarTarjetas() {
	for (let i = 0; i <= galeria.length; i++) {
		galeria[i].classList.add('deshabilitar');
	}
}

// COMPARACION DE LA PRIMERA CARTA CON LA SEGUNDA----------------
function comparacion() {
	var pImagen = document.querySelector('.primerImagen');
	var sImagen = document.querySelector('.segundaImagen');

		if (pImagen.src != sImagen.src) {
			setTimeout(() => { pImagen.classList.remove('active')}, 500);
			setTimeout(() => { sImagen.classList.remove('active')}, 500);
			setTimeout(() => { pImagen.classList.remove('primerImagen')}, 500);
			setTimeout(() => { sImagen.classList.remove('segundaImagen')}, 500);
			reducirIntento()

		}
		else {
			pImagen.classList.remove('primerImagen');
			sImagen.classList.remove('segundaImagen');
			AumentarPar();
		}

}
//----------------------------------------------------------------

VarajearImagenes();


imagen1.addEventListener('click', (imagen) => {
	contador++;
	if (contador == 1) {
		imagen1.classList.add('active');
		imagen1.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen1.classList.add('active');
		imagen1.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}

});

imagen2.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen2.classList.add('active');
		imagen2.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen2.classList.add('active');
		imagen2.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});


imagen3.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen3.classList.add('active');
		imagen3.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen3.classList.add('active');
		imagen3.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});


imagen4.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen4.classList.add('active');
		imagen4.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen4.classList.add('active');
		imagen4.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});

imagen5.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen5.classList.add('active');
		imagen5.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen5.classList.add('active');
		imagen5.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});


imagen6.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen6.classList.add('active');
		imagen6.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen6.classList.add('active');
		imagen6.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});


imagen7.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen7.classList.add('active');
		imagen7.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen7.classList.add('active');
		imagen7.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});


imagen8.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen8.classList.add('active');
		imagen8.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen8.classList.add('active');
		imagen8.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});


imagen9.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen9.classList.add('active');
		imagen9.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen9.classList.add('active');
		imagen9.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});

imagen10.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen10.classList.add('active');
		imagen10.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen10.classList.add('active');
		imagen10.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});

imagen11.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen11.classList.add('active');
		imagen11.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen11.classList.add('active');
		imagen11.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});

imagen12.addEventListener('click', () => {
	contador++;
	if (contador == 1) {
		imagen12.classList.add('active');
		imagen12.classList.add('primerImagen');
	}
	else if (contador == 2) {
		imagen12.classList.add('active');
		imagen12.classList.add('segundaImagen');
		contador = 0;
		comparacion();
	}
});