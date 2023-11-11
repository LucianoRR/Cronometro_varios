const botonInicio = document.getElementsByClassName("iniciar-pausa")[0];
const botonReinicio = document.getElementsByClassName("reiniciar")[0];
const pantalla = document.getElementsByClassName("numeros")[0];
let idContador;

let segundos = 0;
let minutos = 0;
let horas = 0;

let iniciarContador = () => {
    segundos++;

    if(segundos === 60){
        segundos = 0;
        minutos++;
    }

    if(minutos === 60){
        minutos = 0;
        horas++;
    }

    pantalla.textContent = `${(horas < 10)? "0"+horas : horas}:${(minutos < 10)? "0"+minutos : minutos}:${(segundos < 10)? "0"+segundos : segundos}`;
}

let clickBotonInicio = () => {
    //Chequeo en que estado esta el boton
    if(botonInicio.classList[1] === "inactivo"){
        //Cambio el estilo del boton a inactivo
        botonInicio.classList.replace("inactivo", "activo");
        botonInicio.textContent = "PAUSAR";

        //Incio el contador
        idContador = setInterval(iniciarContador, 1000);
    }
    else{
        botonInicio.classList.replace("activo", "inactivo");
        botonInicio.textContent = "INICIAR";

        clearInterval(idContador);
    }
}

let clickBotonRenicio = () => {
    //Cambio el estilo del boton a inactivo
    botonInicio.classList.replace("activo", "inactivo");
    botonInicio.textContent = "INICIAR";

    clearInterval(idContador);
    segundos = 0;
    minutos = 0;
    horas = 0;
    pantalla.textContent = "00:00:00";
}
botonInicio.addEventListener("click", clickBotonInicio);
botonReinicio.addEventListener("click", clickBotonRenicio);