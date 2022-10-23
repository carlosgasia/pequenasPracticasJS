
window.addEventListener('load',(event) => {

  setTimeout( ()=>{
      console.log('page is fully loaded');
    
    
    
    let datos = [];
    let listaCursos = "";
    const cursos = Array();
    let i = 0;
    const NombreCursos = Array();
    
    document.querySelectorAll('.learningPathCard-bottom-text').forEach( e=>{
    
    
    cursos.push(parseInt(e.innerText.slice(0,3)))
    
    
    });
    document.querySelectorAll('p.learningPathCard-title').forEach( e=>{
      let cadenaTXT = document.querySelectorAll('p.learningPathCard-title');
      if(cadenaTXT[i].innerText != undefined){
          if(cadenaTXT[i].innerText != "Escuela de"){
              NombreCursos.push(cadenaTXT[i].innerText);
                
    
    
          }
      }
    i++
    })
    
    
    for (let o = 0; o < 27; o++) {
      datos.push({
          nombre: NombreCursos[o],
          numero: cursos[o]  
        });
      
    
    }
    
    let datosOrg = datos.sort(function (a, b) {
      if (a.numero > b.numero) {
        return 1;
      }
      if (a.numero < b.numero) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    
    for (let o = 0; o < 27; o++) {
      console.log(`${datos[o].numero} ${datos[o].nombre}`)
      listaCursos += `${datos[o].numero}  ${datos[o].nombre} <br>`
    
    }
    
    let $body = document.querySelector("body"),
    div = document.createElement("div");
    function copiarAlPortapapeles(e) {
    var t = document.getElementById("textoACopiar"),
      a = document.createRange();
    a.selectNodeContents(t),
      window.getSelection().removeAllRanges(),
      window.getSelection().addRange(a);
    try {
      document.execCommand("copy") ? exito() : fracaso(), mostrarAlerta();
    } catch (e) {
      excepcion();
    }
    window.getSelection().removeRange(a);
    }
    (div.innerHTML = `<h2>Cursos</h2><br> <p id="textoACopiar">${listaCursos}</p> <button id="btnCopiar" class="btn btn-primary">COPIAR párrafo al portapapeles</button>\n<div id="alerta" class="alert invisible"></div>`),
    div.setAttribute("id", "textoQuehaceres"),
    div.setAttribute(
      "style",
      "background-color:blue; z-index: 1000000; color:white;position: absolute;left: 10; top: 0;padding: 30px 10px 0 10px; margin: 0 center"
    ),
    $body.appendChild(div),
    document
      .getElementById("textoQuehaceres")
      .addEventListener("click", copiarAlPortapapeles);
    var divAlerta = document.getElementById("alerta");
    function exito() {
    (divAlerta.innerText = "¡¡Código copiado al portapapeles!!"),
      divAlerta.classList.add("alert-success"),
      div.remove();
    }
    function fracaso() {
    (divAlerta.innerText = "¡¡Ha fallado el copiado al portapapeles!!"),
      divAlerta.classList.add("alert-warning");
    }
    function excepcion() {
    (divAlerta.innerText = "Se ha producido un error al copiar al portapaples"),
      divAlerta.classList.add("alert-danger");
    }
    function mostrarAlerta() {
    divAlerta.classList.remove("invisible"),
      divAlerta.classList.add("visible"),
      setTimeout(ocultarAlerta, 1500);
    }
    function ocultarAlerta() {
    (divAlerta.innerText = ""),
      divAlerta.classList.remove(
        "alert-success",
        "alert-warning",
        "alert-danger",
        "visible"
      ),
      divAlerta.classList.add("invisible");
    }
    
    console.log("hola")
  
  },100)
    
    });