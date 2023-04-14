const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn_copiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgrundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a","ai"], ["o","over"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let index = 0; index < matrizCodigo.length; index++) {
        if(stringEncriptado.includes(matrizCodigo[index][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[index][0], matrizCodigo[index][1]);
        }
        
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a","ai"], ["o","over"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let index = 0; index < matrizCodigo.length; index++) {
        if(stringDesencriptado.includes(matrizCodigo[index][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[index][1], matrizCodigo[index][0]);
        }
        
    }
    return stringDesencriptado;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    console.log(mensaje.value);
    document.execCommand('copy');
    mensaje.value = "";
    copia.style.display = "none"
    mensaje.style.display = "none";
    document.getElementById("contenido__mensaje--informacion").style.display = "flex"; 
}


