// spin
var opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#fff', // #rgb or #rrggbb
  speed: 1.2, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: true, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};
var target = document.getElementById('hoo');
var spinner = new Spinner(opts).spin(target);

// spin end
function firstctrl($scope){
	$scope.data = {message: "panel"}
}

$("#leftimg").on('mouseenter',function(){
	$("#leftimg").prepend("<div id='white_mask' class='mask'><div class='text_content'>About me</div></div>")
});
$("#leftimg").on('mouseleave',function(){
	$("#white_mask").remove();
});
$("#rightimg").on('mouseenter',function(){
	$("#rightimg").prepend("<div id='black_mask' class='mask'><div class='text_content'>Project</div></div>")
});
$("#rightimg").on('mouseleave',function(){
	$("#black_mask").remove();
});
$("#left_head_img").on('mouseenter',function(){
	$("#left_head_img").prepend("<div id='black_mask' class='mask'><div class='text_content'>Back</div></div>")
});
$("#left_head_img").on('mouseleave',function(){
	$("#black_mask").remove();
});
$(document).ready(function(){
	$("#left").hide();
	$("#leftimg").click(function(){
		// window.setTimeout(function(){},)
		
		$("#middle").animate({
			opacity: 0
		},500,function(){
			window.setTimeout(function(){
				$("#left").show();
				$("#middle").hide();
				$("#left").animate({
						opacity: 1
				},400);
			},200);
			
			
		});
		
	});
	$("#left_head_img").click(function(){
		// window.setTimeout(function(){},)
		
		$("#left").animate({
			opacity: 0
		},500,function(){
			window.setTimeout(function(){
				$("#middle").show();
				$("#left").hide();
				$("#middle").animate({
						opacity: 1
				},400);
			},200);
			
			
		});
		
	});
	$("#right").hide();
	$("#rightimg").click(function(){
		// window.setTimeout(function(){},)
		
		$("#middle").animate({
			opacity: 0
		},500,function(){
			window.setTimeout(function(){
				$("#right").show();
				$("#middle").hide();
			},200);
			
			
		});
		
	});
});




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