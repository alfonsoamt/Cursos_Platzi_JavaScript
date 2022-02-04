var piedra = "PIEDRA";
var papel = "PAPEL";
var tijera = "TIJERA";

function game(user, cpu){
    switch (user) {
        case piedra:
            switch (cpu){
                case piedra:
                    console.log("EMPATE!");
                    break;
                case tijera:
                    console.log("El USUARIO ganó con piedra a la tijera del CPU.");
                    break;
                case papel:
                    console.log("El CPU ganó con papel a la piedra del USUARIO.");
                    break;
                default:
                    console.log("ERROR: Opción no válida para el CPU.");
            }
            break;

        case papel:
            switch (cpu){
                case piedra:
                    console.log("El USUARIO ganó con papel a la piedra del CPU.");
                    break;
                case tijera:
                    console.log("El CPU ganó con tijera al papel del USUARIO.");
                    break;
                case papel:
                    console.log("EMPATE");
                    break;
                default:
                    console.log("ERROR: Opción no válida para el CPU.");
            }
            break;

        case tijera:
            switch (cpu){
                case piedra:
                    console.log("El CPU ganó con piedra a la tijera del USUARIO.");
                    break;
                case tijera:
                    console.log("EMPATE!");
                    break;
                case papel:
                    console.log("El USUARIO ganó con tijera al papel del CPU.");
                    break;
                default:
                    console.log("ERROR: Opción no válida para el CPU.");
            }
            break;

        default:
            console.log("ERROR: Opción no válida para el USUARIO.");
    }
}