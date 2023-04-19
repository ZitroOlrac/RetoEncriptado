var mensajeOriginal = document.getElementById("textarea1");
var mensajeEncriptado = document.getElementById("textarea2");

function handleClick(Encriptar) {
    var msj='';
    mensajeEncriptado.value='';

    for(var i = 0; i < mensajeOriginal.value.length; i++){
        if(mensajeOriginal.value[i]=='e'){
            msj='enter';
        }else if(mensajeOriginal.value[i]=='i'){
            msj='imes';
        }else if(mensajeOriginal.value[i]=='a'){
            msj='ai';
        }else if(mensajeOriginal.value[i]=='o'){
            msj='ober';
        }else if(mensajeOriginal.value[i]=='u'){
            msj='ufat';
        }else{
            msj=mensajeOriginal.value[i];
        }
        mensajeEncriptado.value += msj;
    }
    mensajeOriginal.value='';
    return console.log(mensajeEncriptado.value);
  }
  

  function handleClick2(Desencriptar){
    var msj2='';
    mensajeEncriptado.value='';
        for(var i =0 ;i<mensajeOriginal.value.length;i++){
            if(mensajeOriginal.value[i]=='e'){
                msj2='e';
                i+=4;
            }else if(mensajeOriginal.value[i]=='i'){
                msj2='i';
                i+=3;
            }else if(mensajeOriginal.value[i]=='a'){
                msj2='a';
                i+=1;
            }else if(mensajeOriginal.value[i]=='o'){
                msj2='o';
                i+=3;
            }else if(mensajeOriginal.value[i]=='u'){
                msj2='u';
                i+=3;
            }else{
                msj2=mensajeOriginal.value[i];
            }
            mensajeEncriptado.value+=msj2;
        }
        mensajeOriginal.value='';
        return console.log(mensajeEncriptado.value);
}
        function validar() {
            var regex = /^[a-z0-9\s]*$/;
            var boton = document.getElementById("encryptButton");
            if (!regex.test(mensajeOriginal.value)) {
            alert("El texto no debe tener acentos, ni caracteres especiales ni espacios en blanco");
            boton.disabled = true; // desactivamos el botón
            return false;
            } else {
            boton.disabled = false; // activamos el botón
            }
            return true;
        }
    function copiar(){
        mensajeEncriptado.select();
        document.execCommand("copy");
    }
    window.onload = function() {
        verificarCampos();
      }
    var emptyWarning = document.getElementById("resultsSection");

    mensajeOriginal.addEventListener("keyup", verificarCampos);
    mensajeEncriptado.addEventListener("keyup", verificarCampos);
    
    function verificarCampos() {
        if (mensajeOriginal.value === '' && mensajeEncriptado.value === '') {
          emptyWarning.style.display = "none";
        } else if (mensajeOriginal.value === '' || mensajeEncriptado.value === '') {
          emptyWarning.style.display = "block";
        } else {
          emptyWarning.style.display = "block";
        }
    }