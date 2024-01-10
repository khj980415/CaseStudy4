$(document).ready(() => {
	let mainSwiper;
	let winw;

	$(window).resize(function(){
		winw=$(window).width();

		if(winw > 750){
			if(!mainSwiper){
				mainSwiper=new Swiper(".mainSwiper", {
					slidesPerView: 3,
					spaceBetween: 25,
					loop: true,
					autoplay: {
					delay: 3000,
				},
				on: {
					destroy: function(){
						mainSwiper.slideToLoop(0);
					}
				}
				});
			}
		}
		else{
			if(mainSwiper){
				mainSwiper.destroy(false, false);
				mainSwiper=null;
				$(".swiper-slide").removeAttr("style");
			}
		}
	});

	$(window).trigger("resize");

	$(document).scroll(() => {
		if($(document).scrollTop() >= $(".sec1").height()){
			$("header").addClass("fixed");
		}
		else{
			$("header").removeClass("fixed");
		}
	});

	$(".sec2 .control .btn_right").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
	$(".sec2 .control .btn_left").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});

	$("header > .inner > .right > #desktop > ul > li").hover(
		function(){
			if($("header").hasClass("fixed") && $(this).children().length === 2){
				$(".nav_bg").addClass("active");
			}
			$(this).addClass("active");
		},
		function(){
			$(".nav_bg").removeClass("active");
			$(this).removeClass("active");
		}
	);

	$("header > .inner > .right > #desktop > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("header nav li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().parent().removeClass("active");
	});

	$("header .tab").click(function(e){
		e.preventDefault();
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
			$("header .logo").addClass("active");
			$("header #mobile").fadeIn(200);
		}
		else{
			$(this).removeClass("active");
			$("header #mobile").fadeOut(200);
			$("header .logo").removeClass("active");
		}
	});
	$("header > .inner > .right > #mobile > ul > li").click(function(e){
		e.preventDefault();
		if(!$(this).hasClass("active")){
			$("header > .inner > .right > #mobile > ul > li").removeClass("active");
			$(this).addClass("active");
			$("header .right #mobile li ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}

	});
});