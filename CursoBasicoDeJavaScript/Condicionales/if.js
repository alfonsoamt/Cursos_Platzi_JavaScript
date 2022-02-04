if (true){
    console.log("Hola");
} else{
    console.log("soy falso");
}

var edad = 18;

if (edad === 18){
    console.log("Puedes votar, será tu primera votación");
} else if (edad > 18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

// Operador ternario ---> condicion ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy un uno";
console.log(resultado)