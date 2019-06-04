$(function () {
    /* ---------------------------------------
    FUNCIONES PARA INICIAR SELECTOR DE FECHA pickadate picker.date.js
    -----------------------------------------*/

    $('.datepicker').pickadate({
        monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
        weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
        weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
        today: 'Hoy',
        clear: 'Borrar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        firstDay: 1,
        format: 'dddd d !de mmmm !de yyyy',
        formatSubmit: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true,
        min: true, /* Solo puede escogerse al día de hoy */
        max: 90, /* Máximo se puede escoger una fecha 90 días posteriores al día de hoy */
        /* Función para que muestre por defecto la fecha actual sin tener que escogerla */
        /* onStart: function()
            {
                var date = new Date();
                this.set('select',[date.getFullYear(),date.getMonth(),date.getDate()])
            }, */
        disable:[7]
    })

    /* ---------------------------------------
    FUNCIONES PARA INICIAR SELECTOR DE HORA pickadate picker.time.js
    -----------------------------------------*/
    $('.timepicker').pickatime({
        clear: 'Borrar',
        format: 'h:i a',
        min: [09,0],
        max: [20,0],
        /* Cada cuantos minutos se muestra horario */
        /* interval: 60 */
        
        /* Deshabilitar de un horario a otro horario */
        /* disable: [
            { from: [2,0], to: [5,30] }
          ] */

    })

    /* ---------------------------------------
    FUNCIONES PARA INICIAR VALIACIÓN DE FORMULARIO parsley.js
    -----------------------------------------*/    
    /* Id del formulario de index.html */
    $('#form-contacto').parsley({
      /* Hace que al generar un error o acierto, cambie la clase de parsley .parsley-error y .parsley-success a .is-invalid o .is-valid */
      errorClass: 'is-invalid text-danger',
      successClass: 'is-valid',

      /* Cambia las clases del mensaje de error para que Bootstrap aplique sus clases y formatos propios */
      errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-1 small"></ul>',
      errorTemplate: '<li></li>',

      /* Hace que cada cambio en el campo lance la validación y muestre la actualización de esta validación */
      trigger:'change',
      triggerAfterFailure:'change',
    });

}