//alert("Hola este es mi Javascript");


let nombre = 'Yaqueline';
let ciudad = 'Medellín';
let gusto = 'Caminar en el barrio';

let parrafo = document.querySelector('.descripcion-nosotros');
function cambiarTexto(bre, ciudad, gusto) {
let contenido = `Me llamo ${nombre}, naci en ${ciudad}, me gusta la ${gusto}`;
return contenido;

};

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto)

// FORMULARIO;

const form = document.getElementById("form");
const nombres = document.getElementById("nombres");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});