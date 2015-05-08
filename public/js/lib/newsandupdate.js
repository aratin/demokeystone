$(document).ready(function() {
  $(".content").hide();
  //toggle the componenet with class msg_body
  $(".news").click(function()
  {
    $(this).next(".content").slideToggle(500);
  });
});
