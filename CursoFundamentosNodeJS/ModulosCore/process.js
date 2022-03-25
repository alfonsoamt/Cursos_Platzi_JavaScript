process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabo');
});

process.on('uncaughtException', (err, origen) => {
    console.log('Se olvido capturar el error');
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

functionquenoexiste();