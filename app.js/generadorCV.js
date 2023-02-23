const botonGenerar = document.querySelector('#btn__generar')
const botonVolver = document.querySelector('#btn__home')
const nombre = document.querySelector('#nombre');
const foto = document.querySelector('#foto');
const direccion = document.querySelector('#direccion');
const ciudad = document.querySelector('#ciudad');
const pais = document.querySelector('#pais');
const fechaNacimiento = document.querySelector('#fechaNacimiento');
const codigoPostal = document.querySelector('#codigoPostal');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const edad = document.querySelector('#edad');
const apellido = document.querySelector('#apellido');

/*Funcion para dar formato a la fecha*/

function fecha(evento) {
  const fn = new Date(evento);
  return fn.toDateString();
}

/*Consultar los datos de la api randomuser y 
generar el usuario random*/

  const generarUsuario = async () => {
  const url = 'https://randomuser.me/api/';
  const respuesta = await fetch(url);
  const { results } = await respuesta.json();
  const datos = results[0];

/*Obtener y cargar los datos de usuario 
para mostrar en la pagina*/

  foto.src = datos.picture.medium;
  nombre.textContent = datos.name.first;
  apellido.textContent = datos.name.last;
  direccion.textContent = datos.location.street.name + "  " +
    datos.location.street.number;
  ciudad.textContent = datos.location.city;
  pais.textContent = datos.location.country;
  fechaNacimiento.textContent = fecha(datos.dob.date);
  edad.textContent = datos.dob.age;
  codigoPostal.textContent = datos.location.postcode;
  correo.textContent = datos.email;
  telefono.textContent = datos.cell;
}

/*Funcion para volver a la pagina anterior*/

const volver = () => {
  history.back();
}

//Recargar la pagina cada vez que se genera un nuevo user
document.addEventListener('DOMContentLoaded', generarUsuario);
botonGenerar.addEventListener('click', generarUsuario);
botonVolver.addEventListener('click', volver);
