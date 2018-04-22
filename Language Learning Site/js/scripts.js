jQuery('.').on('click', function( event ){
 	event.preventDefault();
 	jQuery('.').slideToggle();
});
// Can also be used with $(document).ready()
jQuery(document).ready(function() {
  jQuery('.flexslider').flexslider({
    animation: "slide"
  });
});
