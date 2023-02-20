let slider = document.querySelector('.slider');
let sliderIndividual = document.querySelectorAll('.slide');
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener('resize', ()=>{
	width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
	slide();
}, intervalo);

function slide() {
	slider.style.transform = "translate("+(-width*contador)+"px)";
	slider.style.transition = "transform .8s";
 	contador++;

 	if(contador == sliderIndividual.length){
 		setTimeout(function(){
 			slider.style.transform = "translate(0px)";
			slider.style.transition = "transform 0s";
			contador=1;
 		}, 1500);
 	}
}