jQuery(document).ready(function($){
	$('.menu a').bind("click", function(e){
		   var anchor = $(this);
		   var hh = 30; //header height
		   $('html, body').stop().animate({
			   scrollTop: $(anchor.attr('href')).offset().top - hh + 'px'
		   }, 750);
   e.preventDefault();
	});
	
	$('.menu').find('a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	$('.dark_strelka').click(function(){
		$('.all').toggleClass('close');
	});
});