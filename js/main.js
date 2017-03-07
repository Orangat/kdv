$(document).ready(function(){
	$('.sl').slick({
		arrows: true,
		dots: true,
		infinite: true,
		// autoplay: true,
		autolaySpeed: 3000
	});
	
});

$(document).ready(function(){
	$('#ex1').zoom({ on:'click' });
	$('#ex2').zoom({ on:'click' });
	$('#ex3').zoom({ on:'click' });
	$('#ex4').zoom({ on:'click' });
	$('#ex5').zoom({ on:'click' });
});

$(document).ready(function() {
	var elem = $(".zoom");
	elem.on("click", function() {
		if (elem.css("cursor") == "zoom-in") {
			elem.css("cursor", "zoom-out");
		} else {
			elem.css("cursor", "zoom-in");
		}
	});
})





  