jQuery(document).ready(function() {
  jQuery(".content").hide();
  //toggle the componenet with class msg_body
  jQuery(".news").click(function()
  {
    jQuery(this).next(".content").slideToggle(500);
  });
});
