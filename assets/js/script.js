(function ($) {
	var allfunction = {


		aosEnimation:() =>{
			AOS.init({
				once :true,	
			});
		},
		niceSelect : () =>{		
			$('select').niceSelect();	
		},
		toggleShow : () =>{		
			$(".arrow1 i").click(function(){
				$(".arrow-open1").toggle();
			  });
			  $(".arrow2 i").click(function(){
				$(".arrow-open2").toggle();
			  });
			  $(".arrow3 i").click(function(){
				$(".arrow-open3").toggle();
			  });
			  $(".arrow4 i").click(function(){
				$(".arrow-open4").toggle();
			  });
			  $(".arrow5 i").click(function(){
				$(".arrow-open5").toggle();
			  });
			  $(".arrow6 i").click(function(){
				$(".arrow-open6").toggle();
			  });
			  $(".arrow7 i").click(function(){
				$(".arrow-open7").toggle();
			  });
			  $(".arrow8 i").click(function(){
				$(".arrow-open8").toggle();
			  });
			  $(".arrow9 i").click(function(){
				$(".arrow-open9").toggle();
			  });
			  $(".arrow10 i").click(function(){
				$(".arrow-open10").toggle();
			  });
			  $(".arrow11 i").click(function(){
				$(".arrow-open11").toggle();
			  });
			  $(".arrow12 i").click(function(){
				$(".arrow-open12").toggle();
			  });
			  $(".arrow13 i").click(function(){
				$(".arrow-open13").toggle();
			  });
			  $(".arrow14 i").click(function(){
				$(".arrow-open14").toggle();
			  });
			  $(".mobile-toggle").click(function(){
				$(".body-right").show();
				// $("body").addClass("intro");

			  });
			  $(".hide i").click(function(){
				$(".body-right").hide();
			  });
			//   $("body").click(function(){
			// 	$(".body-right").hide();
			//   });
		},
		init: function () {

			allfunction.aosEnimation();
			allfunction.niceSelect();
			allfunction.toggleShow();

		},
	}
	$(document).ready(function () {
		allfunction.init();
	});
})(jQuery);

