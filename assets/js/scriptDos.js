/* /* Operador ternario y operadores AND y OR */
/* condicion? valor SiVerdadero: valorSiFalso */

/* Se solicita generar un login de acceso para validar los datos de un usuario con respecto a 
su nombre de usuario y su contraseña. Estos datos seran recibidos mediante un prompt. los 
datos del uncio usuario que tiene acceso son nombreDeUsuario: ADMIN  y contraseña: 987654321 */

var NombreDeUsuario = prompt('Ingrese su nombre de usuario: ');
var contrasena = prompt('Ingrese su contraseña');


/* if (NombreDeUsuario == 'ADMIN') {
    if (contrasena == '987654321') {
        console.log('Acceso admitido')
    } else {
        console.log('Acceso denegado. ');
    }
} else {
    console.log('Acceso Denegado.');
}

/* Operador AND . Este sería el planteamiento para la solucion de validación de ingreso*/
/*
if (NombreDeUsuario == 'ADMIN' && contrasena == '987654321') {

    console.log("Acceso permitido");
} else {
    console.log('Acceso denegado');
}

/* OPerador OR */
/* if (NombreDeUsuario == 'ADMIN' || contrasena == '987654321') {

    console.log("Acceso permitido");
} else {
    console.log('Acceso denegado');
} */

/* Operador Ternario */
/* condicion? valor SiVerdadero: valorSiFalso */
(NombreDeUsuario == 'ADMIN' && contrasena == '987654321') ? console.log('Acceso permitido') : console.log('Acceso denegado')