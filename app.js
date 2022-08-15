alert("Escriba los productos que desee comprar de la siguiente lista: \n 1. Leche \n 2. Cafe \n 3. Azucar  \n 4. Gaseosa  \n 5. Soda \n 6. Manteca  ")

var entradaDeProductos = prompt("ingrese un producto"); 

const productos_ = []; /// hacemos un array vacio para los productos
// usamos un while para pushear los elementos 
while (entradaDeProductos != "ESC") {

    productos_.push(entradaDeProductos);
    entradaDeProductos = prompt("ingrese otro producto o ESC para salir");
}

const cantidad = []; // hacemos otro array vacio para la cantidad de cada uno de los productos ingresados

productos_.forEach(dato => {  
     cantidadDeCadaUno = cantidad.push(Number(prompt(`cuantos ${dato} necesita`)))  // si pongo productos_[element] me aparecen como undefinedo)
});

//lista de precios
/*
const precioLeche = 150;
const precioCafe = 600;
const precioAzucar = 200;
const precioGaseosa = 300;
const precioSoda = 150;
const precioManteca = 180;

const precios = [precioLeche,precioCafe,precioAzucar,precioGaseosa,precioSoda,precioManteca]
*/
// Aca la idea era ya tener los precios y luego asociarlos en el objeto de abajo
// pero el problema es que se me complica asociarles los precios   ya que si me los
// ingresa desordenados no se como ubicarlos por indice correctamente
// Pensaba usar algo con filter para filtrar con include lo que tenga por ejemplo Leche
// en precioLeche y de ahi asociarlo.

var objeto = [];
for (let i = 0; i < productos_.length; i++) {
     objeto[i] = {nombre :`${productos_[i]}`, cantidades : `${cantidad[i]}`,/* precio:`${precios[]}`*/   
}  

}

console.log(objeto)
/// Aca ya pude hacer un Array con los obejtos formado por nombre y cantidad.
// La idea es hace una class para construir otros objetos, preguntar si faltaba algun producto y con un prompt
// agregarlo ya como new object.

const valorInicial = 0;
const cantidadFinal = cantidad.reduce((acumulador,dato) => acumulador + dato, valorInicial) 

console.log(cantidadFinal)

confirm(`confirma la compra de ${cantidadFinal} productos en total  para proceder`) 






