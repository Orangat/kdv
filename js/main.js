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

// $(document).ready(function() {
//   $('.number-h1').click(function() {
//     $('.number-h1').addClass('zoom-out');
//   });
//   $('.number-h1').click(function() {
//     $('.number-h1').addClass('zoom-in');
//   });
// });

// $(document).ready(function(){
// 	var zoom = $('.zoom-in')
// 	if (zoom.css('cursor')=='zoom-in'); {
// 		$('.zoom-in').click(function() {
// 			$zoom.css('cursor, zoom-out')
// 		})
// 		else {
// 			$zoom.css('cursor, zoom-in');
// 		}
// 	}
// });



  