$(document).ready(function(){

	$(".menu-bar").on("click",function(){
		$(".menu").toggle(300);
	});

	$(window).resize(function(){
		if ($(window).width()>767) {
			$(".menu").show();
		} else {
			$(".menu").hide();
		}
		
	});
});