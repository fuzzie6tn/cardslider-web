
      var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 20,
        // slidesPerGroup: 3,
        loop: true,
        // loopFillGroupWithBlank: true,
        centerSlide:'true',
        grabCursor:true,
        fade:true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets:true,
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0:{
                slidesPerView:1
            },
            520:{
                slidesPerView:2
            },
            1000:{
                slidesPerView:3
            }
        }
      });
