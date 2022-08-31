//QuerySelector
const heading = document.querySelector('.header__texto h2'); //0 o 1 elemento
heading.textContent = "Nuevo Heading";
heading.classList.add('nueva__clase')
console.log(heading);

//QuerySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //0 o todos los elementos
//enlaces[0].textContent = "A";
//enlaces[0].href = "https://www.youtube.com/watch?v=pRFgMtHtvYY&t=21s";

//getElementbyId
const heading2 = document.getElementById('heading')
console.log(heading2);

//Generar HTML .- Nuevo enlace
const nuevoEnlace = document.createElement('A');

//Agregamos href
nuevoEnlace.href = 'https://www.youtube.com/watch?v=pRFgMtHtvYY&t=21s';

//Agregamos texto
nuevoEnlace.textContent = 'Nuevo enlace';

//Agregamos clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregar enlace al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


//Eventos

console.log(1);

window.addEventListener('load', function () { //load espera a que el JS y los archivos dependientes del HTML esten listos
    console.log(2);
})

window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () { //Solamente espera a que se descargue el HTML
    console.log(4)
})

console.log(5);

window.onscroll = function () {
    console.log("Scrolling...")
} 


/*
//Seleccionar elementos y asignarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();

    //Validando formularios
    
    console.log("Enviando formulario");
});*/


//Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;

   // console.log(datos);
}

//Eventos de submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Validando formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta("Todos los campos son obligatorios" , true);
        return; //Corta ejecucion
    }

    //Enviando formulario
    mostrarAlerta("Formulario enviado");
})


//Mostrar Alerta .- Reemplazo de error y confirmacion
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    }
    else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparece despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

/*
//Muestra de error
function mostrarError(mensaje){
    const error = document.createElement('P');

    error.textContent = mensaje;

    error.classList.add('error');

    formulario.appendChild(error);

    //Desaparece despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

//Muestra confirmacion
function mostrarConfirmacion(mensaje) {
    const correcto = document.createElement('P');

    correcto.textContent = mensaje;

    correcto.classList.add('correcto');

    formulario.appendChild(correcto);

    //Desaparece confirmacion
    setTimeout(() => {
        correcto.remove();
    },5000)

}*/