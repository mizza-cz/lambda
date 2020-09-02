




$(function () {
   

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







// function scrollFunction() {
//    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//       logo.style.cssText = `width:100px;`;
//       header.style.cssText = `position: fixed; background: rgba(0, 0, 0, 0.6);
//       `;
//    } else {
//       logo.style.cssText = `width:;`;
//       header.style.cssText = `position: absolute; background:;`;
//    }
// }

