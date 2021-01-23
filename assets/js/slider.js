$(document).ready(function() {
  $('.slider__wrapper').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: 'linear',
    pauseOnHover: false,
    pauseOnFocus: true,
    speed: 1000,
    responsive : [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
	      breakpoint: 1025,
	      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
	      }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          easing: 'ease',
          speed: 500,
        }
      }
    ]
  });
  $('.dribble__slider__wrapper').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'linear',
    mobileFirst: true,
    pauseOnHover: false,
    pauseOnFocus: true,
    speed: 700,
  })
});