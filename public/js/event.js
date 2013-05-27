a = 0 ;

$(document).on('mousemove',function(e){
	if (e.pageX < ( $('body').width()/2)-50  && a == 0 )

	{
			a = 1 ;
			$(".about").animate({
				width: "60%",
				opacity : 1
			},500,function(){
				a = 0 ;
			});
			$(".workwall").animate({
				width: "40%",
				opacity : 0.4
			},500);
	}
	else if (e.pageX > ( $('body').width()/2)+50 && a == 0 )
	{
			a = 1 ;
			$(".about").animate({
				width: "40%",
				opacity : 0.4
			},500,function(){
				a = 0 ;
			});
			$(".workwall").animate({
				width: "60%",
				opacity : 1
			},500);
	}
	else if (a == 0){
			a = 1 ;
			$(".about").animate({
				width: "50%",
				opacity : 0.4
			},500,function(){
				a = 0 ;
			});
			$(".workwall").animate({
				width: "50%",
				opacity : 0.4
			},500);

	}
        // console.log("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY  );
        // console.log( $('body').width() );
});

$(".about").on("click",function(){
	$("#main_page").animate({
		opacity: 0
	},300,function(){
		$("#main_page").html("");
		window.setTimeout(function(){
			$("#main_page").load("about.html .about_content");
		},100);
		window.setTimeout(function(){
			$("#main_page").animate({
			opacity: 1
			},300
			);
		},400);


	});
	
});

$(".workwall").on("click",function(){
	$("#main_page").animate({
		opacity: 0
	},300,function(){
		$("#main_page").html("");
		window.setTimeout(function(){
			$("#main_page").load("workwall.html .workwall_content");
		},100);
		window.setTimeout(function(){
			$("#main_page").animate({
			opacity: 1
			},300
			);
		},400);


	});
	
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