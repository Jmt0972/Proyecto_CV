
let boton = document.getElementById("btn__barra");
let barra = document.getElementById("barra__progreso")

/*Funcion para cargar la barra de progreso y
 direcciona a la pagina siguiente*/

function move() {
  let width = 1;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      barra.style.width = width + '%';
      document.getElementById("demo").innerHTML = width * 1 + '%';
    }
    if (width == 100) {
      location.href = '/screens/mostrarCV.html';
    }
  }
}

boton.addEventListener('click', move);
