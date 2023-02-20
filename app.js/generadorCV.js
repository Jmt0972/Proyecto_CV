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

function fecha(evento){
   var fn = new Date();
    return fn.toDateString(evento);
}


const generarUsuario = async () => {
   
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];
    console.log(datos);
    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    direccion.textContent = datos.location.street.name;
    ciudad.textContent = datos.location.city;
    pais.textContent = datos.location.country;
    fechaNacimiento.textContent = fecha(datos.dob.date);
    edad.textContent = datos.dob.age;
    codigoPostal.textContent = datos.location.postcode;
    correo.textContent = datos.email;
    telefono.textContent = datos.cell;
}



document.addEventListener('DOMContentLoaded', generarUsuario);
boton.addEventListener('click', generarUsuario);