//Haz tú validación en javascript acá

function desencriptar(){
    var cadena  = document.getElementById("cajadetexto").value;

        cadena = cadena.replace(/kj/g, 'a');
        cadena = cadena.replace(/enter/g, 'e');
        cadena = cadena.replace(/ph/g, 'i');
        cadena = cadena.replace(/ober/g, 'o');
        cadena = cadena.replace(/ufat/g, 'u');
        
    var textooutput = document.getElementById("encriptado");
    textooutput.value = cadena;
    console.log(cadena);
}


function encriptar(){
    var cadena  = document.getElementById("cajadetexto").value;

        cadena = cadena.replace(/a/g, 'kj');
        cadena = cadena.replace(/e/g, 'enter');
        cadena = cadena.replace(/i/g, 'ph');
        cadena = cadena.replace(/o/g, 'ober');
        cadena = cadena.replace(/u/g, 'ufat');
        
    var textooutput = document.getElementById("encriptado");
    textooutput.value = cadena;
    console.log(cadena);
}


function clipboardCopy() {
    // Obtiene el texto del textarea
    var texto = document.getElementById("encriptado").value; 
    navigator.clipboard.writeText(texto).then(function () {
      let feedbackElement = document.getElementById("feedbackElement")
      // Muestra un mensaje de éxito al usuario en la página
      feedbackElement.textContent = '';
    }).catch(function (err) {
      // Muestra un mensaje de error al usuario en la página
      feedbackElement.textContent = 'Error al copiar texto: ' + err;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copybutton").addEventListener("click", clipboardCopy);
  });