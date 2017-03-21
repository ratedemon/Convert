$('.btnN1').on('click', function(){
	$('.flipper').addClass('rotatetion');
	// $('.flipper').animate({ borderSpacing: -180}, {step: function (now, fx){
	// 	$(this).css("transform", "rotateY("+now+"deg)");
	// }, duration: 2000}, 'ease' );
	// $('.flipper').css('transform', 'rotateY(-180deg)');
	var t = setTimeout(function(){
		$('.block__mouse').addClass('tongue');
	}, 800);
	var q = setTimeout(function(){
		$('.flipper').addClass('slope');
	}, 1900);
	var w = setTimeout(function(){
		$('.flipper').addClass('slope');
	}, 1900);
	// var e = setTimeout(function(){
	// 	$('.main__image').addClass('main__image_target');
	// }, 3000);
	var r = setTimeout(function(){
		$('.flipper').addClass('slope__finish');
	}, 5200);
})

$('.btnN2').on('click', function(){
	$('.block__mouse').addClass('tongue');
})

// $('.btnN3').on('click', function(){
// 	$('.flipper').addClass('slope');
// })
// $('.flipper').on('transitionend', function(){
// 	$(this).addClass('slope');
// })

$('.btnN4').on('click', function(){
	$('.flipper').addClass('slope__finish');
})