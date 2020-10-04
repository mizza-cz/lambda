




$(function () {
   $('.gallery__item-link').magnificPopup({

      type: 'image',
      gallery: {
         enabled: true
      }
      // other options
   });

   $('select').styler();

   $('.reviews__inner').slick({

      autoplay: true,
      fade: true,
      dots: false,
      arrows: false,

   });
   $(document).scroll(function () {
      toggleHeader();
   })

   $(document).ready(function () {
      $(function () { objectFitImages() });
      jQuery('.menu__btn').click(function (e) {
         e.preventDefault();
         jQuery('.menu__btn-icon').toggleClass('opened');
      });
      $('.menu__btn').click(function (e) {
         e.preventDefault();
         $('.gadgets-nav__wrap').slideToggle(300);
      });



      $('.menu__btn').click(function (e) {
         e.preventDefault();
         $('.menu__btn').toggleClass('opened');
      });
   });
});





