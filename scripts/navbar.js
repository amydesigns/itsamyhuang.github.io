// Navbar scroll
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});



// Float In LOAD
jQuery(document).ready(function($) {

	var ns_in_viewport = function() {
		// Trigger transition on scroll for each content-row
		$('.tag').each(function(){
			$(this).isInViewport({ tolerance: -0 }).addClass('in-view');
		});
	}
	ns_in_viewport();

	$(window).scroll(ns_in_viewport);
});
