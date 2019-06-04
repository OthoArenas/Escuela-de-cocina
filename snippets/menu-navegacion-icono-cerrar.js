$(function () {
    /* ---------------------------------------
    FUNCIONES PARA EL MENÚ DE NAVEGACION DESPLEGABLE ICONO-CERRAR
    -----------------------------------------*/

    /* Al hacer click en la clase .navbar-toggler, agrega o quita la clase .icono-cerrar */
    $('#menu-navegacion .navbar-toggler').click(function(){
        $('.boton-menu').toggleClass('icono-cerrar');
    });
    
    /* Al hacer click en un enlace del menú principal, se va a seleccionar el enlace */
    $('#menu-navegacion .navbar-nav a').click(function(){
        /* 1. Quita la clase .icono-cerrar. */
        $('.boton-menu').removeClass('icono-cerrar');
        /* 2. Contrae el menú */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    );
}