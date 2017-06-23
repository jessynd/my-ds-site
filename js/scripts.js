// console.log('We did it!');
// alert("Yes, we did");

$(document).ready(function(){
   //jQuery code here
   $(".hamburger, .close").click(function(){
     $(".main-nav").toggleClass('open-nav');
   });
   
   smoothScroll.init();
   
   $('.main-carousel').flickity({
     // options
    cellAlign: 'left',
    contain: false,
    setGallerySize: true
  });
   
   
   
   
});
