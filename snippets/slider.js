$(function () {
    /* ---------------------------------------
    FUNCIONES PARA INICIAR SWIPER
    -----------------------------------------*/
    var slider = new Swiper ('#slider-principal', {
    // Parámetro opcional
    loop: true,
    effect: 'slide', //fade, flip, coverflow, cube
    grabcursor: 'true',
    autoplay:{
        delay:5000
    },
    keyboard:{
        enabled:'true',
        onlyInViewPort:'true',
    },

    // Para la paginación
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },

    // Para flechas de navegación
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Para Scrollbar
    /* scrollbar: {
      el: '.swiper-scrollbar',
    }, */
}