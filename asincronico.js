
/* console.log("Parte 1");
console.log("Parte 2");
console.log("Parte 3"); */

function promesa () {
    return new Promise( resolve => setTimeout(() => {console.log("Paso 2")}, 2000));
}

console.log("Paso 1");
promesa();
console.log("Paso 3");
