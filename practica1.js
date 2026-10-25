// Función para pedir palabras hasta que se cancele o se deje vacío
const pedirPalabras = () => {
    let palabras = [];
    let seguirPidiendo = true;

    while (seguirPidiendo) {
        let entrada = prompt("Introduce una palabra (vacío o cancelar para salir):");
        
        // Si cancelo o lo dejo vacío, salgo del bucle
        if (entrada === null || entrada === "") {
            seguirPidiendo = false;
        } else {
            palabras.push(entrada);
        }
    }
    return palabras;
};

const ejecutarPractica1 = () => {
    let palabras = pedirPalabras();
    let palabrasUnicas = [];

    // Hago un bucle para meter solo las que no estén repetidas en el nuevo array
    for (let i = 0; i < palabras.length; i++) {
        if (!palabrasUnicas.includes(palabras[i])) {
            palabrasUnicas.push(palabras[i]);
        }
    }

    // Las ordeno al revés (de la Z a la A) usando una función flecha como pedía el ejercicio
    palabrasUnicas.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    });

    // Muestro el resultado en la pantalla
    document.write("<h2>Resultado Práctica 1:</h2>");
    document.write("<p>" + palabrasUnicas.join(", ") + "</p>");
};