$(document).ready(function(){
  $('.coupon_carousel').owlCarousel({
      loop:false,
      margin: 5,
      nav:true,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })

    $('.coupon_category_carousel').owlCarousel({
      loop:false,
      nav:true,
      dots: false,
      responsive:{
          0:{
            items:1
          },
          500:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

    $('.hot_offer_carousel').owlCarousel({
      loop:false,
      margin: 30,
      nav:true,
      dots: false,
      responsive:{
          0:{
            items:1
          },
          400:{
              items:2
          },
          700:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })


  $("#menu-icon").click(function(){ 
        $(".collapse").toggleClass("show");
        $("body").toggleClass("hide");
        $(".page").toggleClass("scroll");
  });

  $('.language_list').select2({         
      minimumResultsForSearch: Infinity
  });
});


