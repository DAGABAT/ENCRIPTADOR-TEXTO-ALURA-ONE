import { encriptar,desEncriptar } from "./Encriptar.js"

const botonEncriptar = document.querySelector('[data-encriptar]');
const botonDesEncriptar = document.querySelector('[data-desencriptar]');


const Encriptando = () => {

    const TextoEntrada = document.querySelector('[data-form]').value;
    console.log(TextoEntrada);
    const textoEncriptado = encriptar(TextoEntrada);
    console.log(textoEncriptado);
}

const desencriptando = () => {
    const EncriptadoEntrada = document.querySelector('[data-form]').value;
    console.log(EncriptadoEntrada);
    const textoDesEncriptado = desEncriptar(EncriptadoEntrada);
    console.log(textoDesEncriptado);
}



botonEncriptar.addEventListener('click', Encriptando);
botonDesEncriptar.addEventListener('click', desencriptando);
