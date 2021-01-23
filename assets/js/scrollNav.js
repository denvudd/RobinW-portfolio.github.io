$(function() {
  $("[data-scroll]").on("click", function(event) {
      event.preventDefault();
      
      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;
      
      $("html, body").animate({
          scrollTop: elementOffset -70
      }, 1500); // speed of animation
  });
});