a = 0 ;

$(document).on('mousemove',function(e){
	if (e.pageX < ( $('body').width()/2)-50  && a == 0 )

	{
			a = 1 ;
			$(".about").animate({
				width: "70%"
			},700,function(){
				a = 0 ;
			});
			$(".workwall").animate({
				width: "30%"
			},700);
	}
	else if (e.pageX > ( $('body').width()/2)+50 && a == 0 )
	{
			a = 1 ;
			$(".about").animate({
				width: "30%"
			},700,function(){
				a = 0 ;
			});
			$(".workwall").animate({
				width: "70%"
			},700);
	}
	else if (a == 0){
			a = 1 ;
			$(".about").animate({
				width: "50%"
			},700,function(){
				a = 0 ;
			});
			$(".workwall").animate({
				width: "50%"
			},700);

	}
        // console.log("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY  );
        // console.log( $('body').width() );
});



// $(".about").mouseenter(function(){
// 	if (a == 0){
		
// 		$(this).animate({
// 			width: "80%"
// 		},1000,function(){
// 			a = 1;
// 		});
// 		$(".workwall").animate({
// 			width: "20%"
// 		},1000);
// 	}
// }).mouseleave(function(){
// 	if( a == 1 ){
// 		$(this).animate({
// 			width: "50%"
// 		},1000,function(){
// 			a = 0 ;
// 		});
// 		$(".workwall").animate({
// 			width: "50%"
// 		},1000);

// 	}

// });

// $(".workwall").mouseenter(function(){
// 	if (a == 0 ){
// 		$(this).animate({
// 			width: "80%"
// 		},1000,function(){
// 			a = 1;
// 		});
// 		$(".about").animate({
// 			width: "20%"
// 		},1000);
// 	}
// }).mouseleave(function(){
// 	if (a == 1){
// 		$(this).animate({
// 		width: "50%"
// 		},1000,function(){
// 				a = 0 ;
// 			});
// 		$(".about").animate({
// 			width: "50%"
// 		},1000);
// 	}

// });