/*
  THIS

  This es una palabra "comodin" en JavaScript que siempre hace referencia a un objeto. Y el objeto al que hace referencia depende de las circunstancias.

  STRICT MODE
  
  Es una característica de JavaScript habilitada desde ES5. Cuando se habilita el interprete lanza errores y ayuda en el debug.
  Se activa añadiendo el string "use strict" en la primera línea del scope (se recomienda) que sea dentro de una función
 
*/

/*CASO 1: THIS DENTRO DE UNA FUNCIÓN
  Dentro de una funcion, this devuelve undefined si se usó "use strict", y devuelve
  el objeto global (window) si no se usa "use strict".*/

(function(){
  "use strict";
  console.log(this);
})();



/*
CASO 2: THIS DENTRO DE UN MÉTODO
Si se usa this dentro de un método de un objeto, this hace referencia a este objeto.
*/

var miMascota = {
  nombre: "Pluto",
  llamar: function(){
    return this.nombre + ", ven aquí";
  }
};

var persona = {
  nombre: "Andrea",
  apellido: "Solis",
  edad: 8,
  saludar: function(){
    return "Hola me llamo " + this.nombre + " " + this.apellido + " y tengo " + this.edad;
  }
};

/*
CASO 3: THIS DENTRO DE UN EVENT HANDLER
Es una función que se ejecuta cuando se dispara un evento. Por ejemplo cuando se hace click en un elemento se ejecuta una función.
Si this está dentro de un event handler, this apunta al elemento que dispara el evento. 
En este caso, this referencia al elemento HTML que di´sparó el evento.
*/

var boton = document.getElementById("boton");
boton.addEventListener('click', function(){
  alert(this.textContent);
});


/*
CASO 4: THIS DENTRO DE UN CONSTRUCTOR
  Un constructor es una función que define la estructura de un objeto y a partir de la cual se crean otros objetos (se instancian)
  Si this está dentro de un constructor, se referirá al objeto instanciado.
*/

function Persona(parametroNombre, parametroEdad){
  this.apodo = parametroNombre;
  this.edad = parametroEdad;
}

var alumno = new Persona("Martin",20);
var amigo = new Persona("Carlos",15);
var hermano = new Persona("Pepe",30);

/*VOCABULARY
Instanciar: crear un objeto dentro de otro*/

/*ATENCION
  Los nombres de los constructores siempre empiezan con mayúscula
*/
