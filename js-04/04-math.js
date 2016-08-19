(function(){
  "use strict";
  /*
    Math es un objeto del lenguaje JavaScript que permite trabajar con números.
  */

  console.log(Math.E); //epsilon
  console.log(Math.PI);

  // El método .ceil() redondea un numero hacia arriba
  var numero = 3.2;
  console.log(Math.ceil(numero));
  // .floor() redondea hacia abajo
  console.log(Math.floor(numero));
  // .round() redondea segun el valor 
  console.log(Math.round(numero));
  numero = 3.5;
  console.log(Math.round(numero));
  // .max() y .min() que devuelven el mayor y menor valor de un set(lista) de parámetros
  console.log(Math.max(2,6,8,123));
  // sqrt() devuelve la raiz cuadrada
  // abs() devuelve el valor absoluto
  console.log(Math.sqrt(49));
  // .random() genera un numero aleatorio entre 0 y 1
  console.log(Math.random());
  console.log(Math.floor(Math.random()*10));

  // Obtener un numero aleatorio dentro de un rango
  var max = 20;
  var min = 10;
  console.log(Math.floor(Math.random() * (max - min)) + min);

})();

/*
JSON JavaScript Object Notation

- Es una notación estructural de información o para estructural info. Está inspirada en JS pero no es JS. 
- Su estructura es: "Clave": Valor,
- Se usa para compartir información. No es programación!!
- Existen DB como MongoDb que usan JSON
- Aunque está basado en los objetos de Js tiene dos diferencias fundamentales con estos:
  1. Todas las claves van entrecomilladas
  2. No existen métodos, solo propiedades. Pues solo sirve para compartir info.
/*

/*
OJO:
  Los métodos llevan parentesis. Las propiedades no. 
  Los métodos son las funciones que realiza un objeto. Las propiedades son las características de ese objeto.

  Por esa razón aunque hay un cálculo de por medio, .lenght no es un método, es una propiedad. :D
/*