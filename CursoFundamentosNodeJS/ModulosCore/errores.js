function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z
}

function serompeAsincrona(cb) {
    setTimeout(() => {
        try {

            return 3 + z
        } catch (err) {
            console.error('Error en mi funcion asincrona');
            cb(err);
        }
        
    }, 1000);
}

try {
    serompeAsincrona(function (err) {
        console.log(err.message)
    });
} catch(err) {
    console.error('Vaya, se ha roto...');
    console.error(err.message);
    console.log('pero no pasa nada, lo hemos capturado');
}

console.log('Esto de aqui esta al final');