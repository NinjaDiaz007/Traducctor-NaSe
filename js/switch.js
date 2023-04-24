let body = document.getElementById("cuerpo");
let btn_switch = document.getElementById("switch");

function Switch(){
    if(btn_switch.checked === true){
        body.classList.remove("terroso");
        body.classList.add("elegante-oscuro");
    }
    else{
        body.classList.remove("elegante-oscuro");
        body.classList.add("terroso");
    }
}

//Probando el localStorage
function localSt(){
    if (typeof(Storage) !== "undefined") {
        alert("El navegador soporta el LocalStorage");
    } else {
        alert("El navegador no soporta el LocalStorage");
    }
    
}

function LSt(){
    if(JSON.parse(localStorage.getItem("switch")) === true){
        btn_switch.checked = true;
        Switch();
    }
    else{
        btn_switch.checked = false;
        Switch();
    }
}