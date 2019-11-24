$(document).ready(function(){
  $('.sidenav').sidenav();

   $('.dropdown-trigger').dropdown();

   $("#dark-mode").on("click", function(){
     $("body").attr("id", "dark-mode");
   })
});
