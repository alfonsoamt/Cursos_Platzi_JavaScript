var piedra = "PIEDRA";
var papel = "PAPEL";
var tijera = "TIJERA";

function Juego(user, cpu){
    if (user === piedra && cpu === tijera){
        console.log("El USUARIO ganó con piedra a la tijera del CPU.");
    } else if (user === tijera && cpu === piedra){
        console.log("El CPU ganó con piedra a la tijera del USUARIO."); 
    } else if (user === papel && cpu === piedra) {
        console.log("El USUARIO ganó con papel a la piedra del CPU.");
    } else if (user === piedra && cpu === papel){
        console.log("El CPU ganó con papel a la piedra del USUARIO."); 
    } else if (user === tijera && cpu === papel) {
        console.log("El USUARIO ganó con tijera al papel del CPU.");
    } else if (user === papel && cpu === tijera){
        console.log("El CPU ganó con tijera al papel del USUARIO."); 
    } else {
        console.log("EMPATE!")
    }
}