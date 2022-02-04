// Ejemeplos en los que Boolean devuelve falso:
Boolean();
Boolean(0);
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");

// Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); // para cualquier número diferente de 0
Boolean("a"); // para cualquier caracter
Boolean([] ); // para un array aunque esté vacío
Boolean({}) // para un objeto aunque esté vacío
Boolean(function(){}) // para cualquier función