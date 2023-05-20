//PRIMER TAREA*/
//creacion de las 4 variables a utilizar*/
let helado = 150;
let topping;
let precio;
let precioFinal;
let toppingElegido;
let noDisponible = ("No disponemos ese topping");

//Inicio del programa*/
//Definicion de tipos de topping*/
topping = ["Oreo", "KitKat", "Kinder"];
  console.log (topping); //1ero array

//El cliente elige el topping*/  
alert("Tipo de topping : KitKat");
toppingElegido = "KitKat";
  console.log(toppingElegido);  //2do Elegido KitKat

//Bucle para definir el precio final*/
if (toppingElegido == "Oreo")
{precio = 10;  
  console.log(precio);}  //salta porque no es*/
else if (toppingElegido == "KitKat")
{precio = 15;
  console.log(precio);}  //true y precio*/
else if (toppingElegido == "Kinder")
{precio = 25;
  console.log(precio);}  //salta ya salio del bucle*/
else {
  console.log(noDisponible);
}
precioFinal = helado + precio;
  console.log("Precio Total: " + precioFinal); 
// FIN*/

//************************************** */

//SEGUNDA TAREA*/
//Creacion de las variables*/
let opcion;
let menu = ["Carne", "Pescado", "Verdura"];
  console.log(menu);  //1ero array
alert("Cual es su eleccion :");  
opcion = "Verdura";
  console.log(opcion);  //2da opcion
switch (opcion){
  case "Carne" :
    console.log("Desea vino tinto");
    break;
  case "Pescado" :
    console.log("Puedo ofrecerle vino blanco");
    break;
  case "Verdura" :
    console.log("Desea agua mineral ??");
    break
    default:
    console.log("Debe elegir algo del menu");  
  }
//FIN*/

//*************************************** */

//TERCERA TAREA*/
//Creacion de variables*/
let i; 

let lista = ["Harina", "Aceite", "Leche", "Manteca"];
  console.log(lista);  //1ero array

//Recorro el array*/
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);  
}  

//Agrego un elemento al array*/
lista.push("Dulce");
  console.log(lista);

//Recorro nuevamente el array*/
for (i = 0; i < lista.length; i++){
  console.log(lista[i]);
}
//FIN*/

//CUARTA TAREA*/
//Creacion de variables*/
let numero = 0;
let mensaje = "Numero es mas chico que 11";

//Bucle while menor a 11*/
while (numero < 11){
  console.log(mensaje);
  numero = numero + 1
}
//FIN DE LAS TAREAS*/

let a = 5;
while (a > 0){
  console.log("TAREA TERMINADA");
  a = a - 1
}