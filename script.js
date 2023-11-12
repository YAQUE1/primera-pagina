//alert("Hola este es mi Javascript");

let nombre = 'Yaqueline';
let ciudad = 'Medellín';
let gusto = 'Caminar en el barrio';

let parrafoDescripcion = document.querySelector('.descripcion-nosotros');
function cambiarTexto(nombre, ciudad, gusto) {
  let contenido = `Me llamo ${nombre}, nací en ${ciudad}, me gusta ${gusto}`;
  return contenido;
};

parrafoDescripcion.innerText = cambiarTexto(nombre, ciudad, gusto);

document.addEventListener("DOMContentLoaded", function () {
  const check = document.getElementById("check");
  const checkbtn = document.querySelector(".checkbtn");
  const navUl = document.querySelector("header nav ul");

  checkbtn.addEventListener("click", function () {
      if (check.checked) {
          // Si el checkbox está marcado, desmarcarlo y ocultar el menú
          check.checked = false;
          navUl.style.left = "100%";
      } else {

          check.checked = true;
          navUl.style.left = "0%";
      }
  });
});

// FORMULARIO;
const form = document.getElementById("form");
const nombreInput = document.getElementById("nombre");
const parrafoAlertas = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafoAlertas.innerHTML = "";

  if (nombreInput.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafoAlertas.innerHTML = warnings;
  } else {
    parrafoAlertas.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (!validarFormulario()) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
  // No need to submit the form manually if validation is successful
});

// Other code goes here...

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const mensajeInput = document.getElementById("mensaje");
  const parrafoAlertas = document.getElementById("alertas");

  function validarFormulario() {
      let warnings = "";
      let valido = true;
      parrafoAlertas.innerHTML = "";

      if (nombreInput.value.length < 4) {
          warnings += `El nombre debe contener más de 4 caracteres. `;
          valido = false;
      }

      // Agregar aquí más validaciones según sea necesario

      if (!valido) {
          parrafoAlertas.innerHTML = warnings;
      } else {
          parrafoAlertas.innerHTML = "Formulario enviado con éxito.";
      }
      return valido;
  }

  form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validarFormulario()) {
          // Aquí puedes realizar acciones adicionales antes de enviar el formulario
          form.submit();
      }
  });
});










