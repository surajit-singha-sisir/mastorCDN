// GALLERY SCECTION START

// Active span change Event
$(document).ready(function () {
    $(".gallery-item span").on("click", function () {
      $(".gallery-item span").removeClass("active");
      $(this).addClass("active");
    });
  
    // 3 Second scroll
    function toggleActive() {
      var $active = $(".gallery-item .active");
      var $next = $active.next().length
        ? $active.next()
        : $(".gallery-item span").first();
  
      // Check if viewport width is 768px or less
      if ($(window).width() <= 768) {
        // Fade out the current active span
        $active.fadeOut("slow", function() {
          $active.removeClass("active");
          // Fade in the next span and add the active class
          $next.fadeIn("slow").addClass("active");
        });
      } 
      else {
        // No transition for larger devices, simply change the active class
        $active.removeClass("active");
        $next.addClass("active");
      }
    }
  
    // Set interval to change active span every 3 seconds
    var interval = setInterval(toggleActive, 3000);
  
    // Pause on mouse hover
    $(".gallery-item").hover(
      function () {
        clearInterval(interval);
      },
      function () {
        interval = setInterval(toggleActive, 3000);
      }
    );
  });

  // GALLERY SCECTION END