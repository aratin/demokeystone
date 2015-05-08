$(document).ready(function() {
  $(".content").hide();
  //toggle the componenet with class msg_body
  $(".heading").click(function()
  {
    $(this).next(".content").slideToggle(500);
  });
});
