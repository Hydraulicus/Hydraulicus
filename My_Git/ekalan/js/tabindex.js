var menuItems = $('.main-navigation li');
var flag = 1;

menuItems.on("click", function(event) {
    
  menuItems.removeClass("active");
  
  $(this).addClass("active");
  flag = $(this).data("flag");
  $(".main-content").css({
    "background": $(this).data("bg-color")
  });
  
  event.preventDefault();
});