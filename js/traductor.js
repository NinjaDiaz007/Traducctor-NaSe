const texto = document.getElementById("texto");
const imagen = document.getElementById("imagen");
let btn_traducir = document.getElementById("button-addon2");
let img;
let galeria = [];


btn_traducir.addEventListener('click', ()=>{
	if (texto.value === "s" || "S") {
		imagen.innerHTML = `<img src="./img/s.png" class="w-25">`
	}
});

//Funcion para colocar las imagenes
function Letra(el) {
	switch(img){
		case 1:
			imagen.innerHTML = `<img src="./img/s.png">`;
		break;

		/*default:
			alert("No hay ninjuna coincidencia");
		break;*/
	}
}