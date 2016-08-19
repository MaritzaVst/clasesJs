/*
  FECHAS EN JAVASCRIPT

  Para manejar fecha se utiliza el objeto Date que debe instanciarse cada vez que se requiera utilizarlo.

*/
(function(){
  "use strict";
  /*
    Date es un objeto de JS que siempre
    debe ser instanciado con new.
  */

  var fecha = new Date();
  console.log(fecha);

  /*
  Para especificar fechas se pueden 
  pasar parámetros en el siguiente orden
  año / mes (0 index) / dia / hora / minuto / segundo
  */
  var miNacimiento = new Date(1980,1,4);
  console.log(miNacimiento);

  var lanzamientoED = new Date(2010,1,9);
  console.log(lanzamientoED);

  /*
    Métodos del objeto Date:

    .getfullYear()  // año
    .getDay() // dia (de 0, domingo a 6, sabado)
    .getDate()  // numero del dia en el mes
    .getMonth()  // el mes (0 index)
    .getTimezoneOffset() // obtener zona horaria

    // console.log(miNacimiento.getFullYear());
    // console.log(miNacimiento.getMonth());
    // console.log(miNacimiento.getDate());
    // console.log(miNacimiento.getDay());
  */
  var miDiaDeNacimiento = miNacimiento.getDay();

  // if(miDiaDeNacimiento === 1){
  //   miDiaDeNacimiento = "Lunes";
  // }

  // console.log(miDiaDeNacimiento);
})(); 

/*Para obtener los d{ias en nombres y no en números*/
// (function(){
//   "use strict";
//   var fecha = new Date();
//   var dia = fecha.getDay();
//   // console.log(fecha);

//   if(dia === 1){
//     dia = "lunes";
//   }

//   console.log(dia);
// })(); 