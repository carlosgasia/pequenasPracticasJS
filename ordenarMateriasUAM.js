console.clear();
let datos = [],
  materias = [],
  queHaceres = "",
  hoy = new Date() - 432e5,
  box = document.querySelectorAll(".table-sub-title"),
  variable = ["sop"],
  i = 0;
document.querySelectorAll("td").forEach((e) => {
  e.innerText.includes("ECS") &&
    (variable.push(`(${e.innerText.slice(13)})`), i++),
    " text-left" === e.getAttribute("class") &&
      (e.innerText = `${e.innerText} ${variable[i]}`);
}),
  document
    .querySelectorAll(".table-sub-title")
    .forEach((e) => materias.push(e.innerText.slice(13)));
let ExpReg = /(\d{1,2})-(\d{1,2})-(\d{4})/g,
  ExpReg2 = /(\d{1,2})-(\d{1,2})-(\d{4})/;
function convertirFecha(e) {
  let t = e.toString().split("-"),
    a = t[2],
    r = t[1] - 1,
    i = t[0];
  return new Date(a, r, i);
}
document.querySelectorAll("td.text-left").forEach((e) => {
  null !== e.innerText.match(ExpReg) &&
    datos.push({
      fecha: e.innerText.match(ExpReg),
      contenido: e.innerText.replace(ExpReg2, ""),
      
    });
});
let datosOrg = datos.sort(function (e, t) {
  return convertirFecha(e.fecha) - convertirFecha(t.fecha);
});
datosOrg.forEach((e) => {
  convertirFecha(e.fecha) >= hoy &&
    (queHaceres += `${e.fecha} -> ${e.contenido} <br>`);
});
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
(div.innerHTML = `<h2>Lista de actividades</h2> <p id="textoACopiar">${queHaceres}</p> <button id="btnCopiar" class="btn btn-primary">COPIAR párrafo al portapapeles</button>\n<div id="alerta" class="alert invisible"></div>`),
  div.setAttribute("id", "textoQuehaceres"),
  div.setAttribute(
    "style",
    "background-color:blue; color:white;position: absolute;left: 10; top: 0;padding: 30px 10px 0 10px; margin: 0 center"
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
