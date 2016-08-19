/*   En JavaScript un objeto es una coleccion de parejas de datos con el
/*   formato:

    clave: valor

  Cada pareja se separa de las demás con una coma, y el conjunto se encierra
entre llaves.    Los objetos poseen propiedades y funciones. */

var miPais = {   nombre: "Peru",   poblacion: 36,   capital: "Lima", idioma:
"Español",   america: true,   saludar: function(){     return "Bienvenido al " +
this.nombre;   } };

var miMascota = {
  nombre: "Fido",
  edad: 4,
  ladrar: function(){
    return "Guau guau";
  }
};
/*  En JavaScript todos los tipos de datos(elementos) son considerados objetos.
Porque todos parten de un objeto "maestro" llamado prototipo. */

var string = "Hola, yo soy un string"; // notación literal  
var numero = 10; // También es literal
var string2 = new String("yo soy un string"); //notacion por constructor (o por prototipo).
var numero2 = new Number(20); //notacion por constructor (o por prototipo).
String("Hola, yo soy un string"); //notacion por constructor (o por prototipo).

/*   Recuperar informacion (get) o asignar informacion (set) a un objeto.


  Los objetos tienen propiedades y métodos.

  1. Las propiedades son datos de un objeto. si la clave tiene un dato(string, number, otro objeto, array) se llama "propiedad" 
  2. Los métodos son funciones de un objeto. si la clave tiene una función se llama "método" 

  Para recuperar o asignar informacion se usa la sintaxis de punto:

  1. objeto.propiedad; 
  2. objeto.metodo();

  Dependiendo de como se use, se podra hacer get o set. */

miPais.moneda = "S/.";          //set miPais.comida = "Lomo saltado";
//set
miMascota.jugar = function(){
  return "Corre tras la pelota";  // set
};

console.log(miPais.idioma);     //get
console.log(miPais.saludar());     //get
