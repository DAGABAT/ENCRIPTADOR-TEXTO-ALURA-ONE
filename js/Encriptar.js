export const encriptar = (texto) => {
    //Definicion de matriz de encriptacion
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //conversion a minusculas
    texto = texto.toLowerCase();
    //Proceso de reemplazo de coincidencias
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    visualizacion();
    return texto;
}


export const desEncriptar = (texto) => {
    //Definicion de matriz de desencriptacion
    let matrizCodigoInv = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    //conversion a minusculas
    texto = texto.toLowerCase();
    //Proceso de reemplazo de coincidencias
    for (let i = 0; i < matrizCodigoInv.length; i++) {
        if (texto.includes(matrizCodigoInv[i][0])) {
            texto = texto.replaceAll(matrizCodigoInv[i][0], matrizCodigoInv[i][1]);
        }
    }
    visualizacion();
    console.log(texto);
    return texto;   
}

const visualizacion = () =>{
    const Ocultando = document.querySelector('[data-sal-a]');
    const Mostrando = document.querySelector('[data-sal-b]');

    Ocultando.classList.toggle ('oculto');
    Mostrando.classList.toggle ('oculto');
    Ocultando.classList.toggle ('Texto-salida');
    Mostrando.classList.toggle ('Texto-salida');

}