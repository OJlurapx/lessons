$(document).ready(function () {
 var up = $('#up');
 var top = $("html, body");

 up.on('click', function () {
  top.animate({
   scrollTop: 0
  }, 1000);
 });
});