$(document).ready(function() {

	//-------------------------------------

	$(".color-theme-link").click(function(e){  //смена темы
		e.preventDefault();
		$(".wrapper.color-theme").toggleClass("dark");
	});

	//-------------------------------------

	$(".article-popup-link").each(function(){ //появление тултип
		$(this).mouseover(function(){
		
			$(".popup-article").remove();
		
			var width = $(this).width();
			var scroll_top = $(window).scrollTop();
			var offset = $(this).offset();
			var relativeX = (offset.left + width/2);
			var relativeY = (offset.top - scroll_top - 10);
			

			var desc = $(this).attr("data-description");
			var title = $(this).attr("title");

			if ($(this).hasClass("type-text")) {
				$(this).closest("div").append('<div class="popup-article type-text"><div class="popup-article__content"><p class="popup-article__desc">'+ desc +'</p></div></div>');
			} else {
				if ($(this).hasClass("type-link")) {
					$(this).closest("div").append('<div class="popup-article type-link"><div class="popup-article__head"><h5 class="popup-article__title">'+title+'</h5></div><div class="popup-article__content"><p class="popup-article__desc">'+desc+'</p></div></div>')
				}
			}
			$(".popup-article").addClass("visible").css("top", relativeY).css("left", relativeX);
		});
		
		$(this).click(function(e){
			e.preventDefault(); 
		});
	});

	$(".article-popup-link").each(function(){ //появление тултип
		$(this).click(function(){
		
			$(".popup-article").remove();
		
			var width = $(this).width();
			var scroll_top = $(window).scrollTop();
			var offset = $(this).offset();
			var relativeX = (offset.left + width/2);
			var relativeY = (offset.top - scroll_top - 10);
			

			var desc = $(this).attr("data-description");
			var title = $(this).attr("title");

			if ($(this).hasClass("type-text")) {
				$(this).closest("div").append('<div class="popup-article type-text"><div class="popup-article__content"><p class="popup-article__desc">'+ desc +'</p></div></div>');
			} else {
				if ($(this).hasClass("type-link")) {
					$(this).closest("div").append('<div class="popup-article type-link"><div class="popup-article__head"><h5 class="popup-article__title">'+title+'</h5></div><div class="popup-article__content"><p class="popup-article__desc">'+desc+'</p></div></div>')
				}
			}
			$(".popup-article").addClass("visible").css("top", relativeY).css("left", relativeX);
		});
		
		$(this).click(function(e){
			e.preventDefault(); 
		});
	});


	$("body").on("mouseleave", ".popup-article", function(e){ //удаление тултип при выводе курсора из него
		$(".popup-article").remove();
	});

	$(document).scroll(function() {  //убрать тултип при скроле
		$(".popup-article").remove();
	});

	
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".article-popup-link, .popup-article"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".popup-article").remove();
		}
	});



	//-------------------------------------


	var num = 0;
	$(".article-popup-link.type-text").each(function(e){ //нумерация сносок с тултипами
		num = num + 1;
		$(this).append(num);
	});

	//-------------------------------------



	function Header_height() { //высота шапки при скроле
		if ($(window).width() < 768) {	
			if ($(window).scrollTop() > 100) {

				$(".header__container").css("height", "3.75rem");

				if ($(".mob-menu").hasClass("active")) {
					$(".mob-menu").css("top", "3.75rem");
				} else {
					$(".mob-menu").css("top", "0px");
				}

			} else {
				$(".header__container").css("height", "6.25rem");

				if ($(".mob-menu").hasClass("active")) {
					$(".mob-menu").css("top", "5rem");
				} else {
					$(".mob-menu").css("top", "0px");
				}
			} 
		} else {
			var initialHeaderHeight = $(".header__container").height();
			if ($(window).scrollTop() > 100) {
				$(".header").addClass("fixed");
				$(".header__container").css("height", "7.9375rem");
				$(".sub-nav").css("top", "7.9375rem");
				$(".head-nav__link.link-sub").addClass("bottom-of-fixed");
			} else {
				$(".header").removeClass("fixed");
				$(".header__container").before().css("height", "9.875rem");
				$(".sub-nav").css("top", "9.875rem");
				$(".head-nav__link.link-sub").removeClass("bottom-of-fixed");
			} 
		}
	}



	function Event_header() { //события для шапки
		
		if ($(window).width() < 768) {
			Header_height();
			if ($(window).scrollTop() > 100) {
				$(".medical-hero .header").addClass("fixed-menu");
			} else {
				if ($(".menu-btn").hasClass("menu-btn--close")) {
				} else {
					$(".medical-hero .header").removeClass("fixed-menu");
				}
				
			} 					
		} else {
			$(".medical-hero .header").removeClass("fixed-menu");
		}
	}

	$(document).scroll(function() {
		Header_height();
		Event_header_medical_hero();
	});

	Event_header();

	$(window).resize(function(){
		

		Event_header();
		if ($(window).width() >= 768) { 

			$(".medical-hero .header").removeClass("fixed-menu");
			$(".header__container").css("height", "9.875rem");
			$(".mob-menu").removeClass("active").removeClass("menu-btn--close");
			$(".header").removeClass("open");
			$(".medical-hero .menu-btn").removeClass("menu-btn--close");

		} else {
			$(".wrapper").removeClass("dark");
		}
	});
 


	function Event_header_medical_hero() { // работа шапки на странице medical.html
		if ($(window).width() < 768) { 
			if ($(".menu-btn").hasClass("menu-btn--close")) {

				if ($(window).scrollTop() > 100) {
					$(".medical-hero .header").addClass("fixed-menu");
				}
				
			} else {
				if ($(window).scrollTop() > 100) {
					$(".medical-hero .header").addClass("fixed-menu");

				} else {

					$(".medical-hero .header").removeClass("fixed-menu");
				}
					
			} 
		}
	}



	$(".menu-btn").click(function(e){ // работа моб меню
		e.preventDefault();
		
		$(".mob-menu").toggleClass("active");
		$(".header").toggleClass("open");

		Header_height();

		if ($(this).hasClass("menu-btn--close")) {
			if ($(window).scrollTop() <= 100) {
				$(".medical-hero .header").removeClass("fixed-menu");
			} 
			
		} else {
			$(".medical-hero .header").addClass("fixed-menu");
		}

		$(this).toggleClass("menu-btn--close");

	});

	$(".menu-btn--close").click(function(e){ //работа моб меню
		e.preventDefault();
		$(".mob-menu.active").css("top", "0px");
		$(".header").removeClass("open");
		 
	});


	//-------------------------------------

	$(".questions__li").each(function(e){ // функционал аккордеона
		$(this).find(".question").click(function(e){
			e.preventDefault();

			var height = $(this).closest(".questions__li").find(".questions__answer-text").outerHeight(); //высота текста в пункте

			
			if ($(this).closest(".questions__li").hasClass("open")) {
				$(this).closest(".questions__li").find(".questions__answer").height(0);
				$(this).closest(".questions__li").removeClass("open");
			} else {
				$(".questions__li").removeClass("open");
				$(this).closest(".questions__li").addClass("open");
				$(".questions__li").find(".questions__answer").height(0);
				$(this).closest(".questions__li").find(".questions__answer").height(height);
			}
			
		});
	});

	//---------------------------

	$(".head-nav__link.link-sub").click(function(e){ //работа меню
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).closest(".head-nav__li").find(".sub-nav").toggleClass("active");
		if ($(".sub-nav").hasClass("active")) {
			$(".header").addClass("open-sub-nav");
		} else {
			$(".header").removeClass("open-sub-nav");
		}
		 
	});


	//-----------test----------------
		quantity_question = 0; //количество вопросов

		$(this).find(".test__question").each(function(e){ //количество вопросов
			quantity_question = quantity_question + 1;
		});

		var i = 0;
		while (i < quantity_question) { // вставка маркеров вопросов в прогрессбар
			$(this).find(".test-progress__labels").append('<span class="test-progress__label"></span>');
			i++;
		}

		// установка ширины прогрессбара в зависимости от кол-ва вопросов
		$(this).find(".test-progress").width((quantity_question / ((quantity_question+2)/7) * 92 / 16) * 5/7  + "rem");
		var line_progress_step = 100 / (quantity_question - 1);

		//события при ответе
		$(".test__answer").click(function(e){
			e.preventDefault();
			$(this).addClass("active");
			$(this).closest(".test__question").addClass("answered");

			
			var test_question_height = $(this).closest(".test__question").outerHeight(); 
			var windowHeight = $(window).height();
			var scroolTop = $('html, body').scrollTop();
			var quesPos  = windowHeight - (windowHeight - ($(".test__answer").offset().top - scroolTop - $(".header").height()));

			if ($(this).closest(".test__question").next().hasClass("test__question")) {
				$('html, body').animate({ scrollTop: $(this).closest(".test__question").next().offset().top - (( $(window).height() - $(".header").height() ) / 2) }, 500);
			} else {
				if ($(this).closest(".test__question").next().hasClass("test__question-end")) {
					$('html, body').animate({ scrollTop: $(window).scrollTop() + $(".test__question-end").outerHeight()}, 500);
				}
			}

			$(this).closest(".test__question").next().addClass("active");

			var quantity_question_answered = 0;

			$(".test__question.answered").each(function(e){  //подсчет кол-ва отвеченых вопросов
				quantity_question_answered = quantity_question_answered + 1;

				if (quantity_question_answered == quantity_question ) { //сделать кнопку активной при ответе на все воппросы
					$(".test__get-res").removeClass("inactive");
				} else {
					$(".test__get-res").addClass("inactive");
				}

			});
			$(".test-progress__label:lt(" + quantity_question_answered + ")").addClass("active"); //сделать следующий маркер активным

			$(".test-progress__line-progress").width(quantity_question_answered * line_progress_step + "%"); // увеличить линию заполненнось прогрессбыра

		});

		

		$(".test__refresh, .test__result .test__get-res").click(function(e){ //обновить тест
			e.preventDefault();
			$(".test__answer, .test__result, .test__question, .test__question-end, .test__result").removeClass("active");
			$(".test__question").removeClass("answered");
			$(".test__questions").removeClass("hide");
			$(".test-progress__line-progress").width(0);
			$(".test-progress__label").removeClass("active");
			$('html, body').animate({ scrollTop: $(".test").offset().top - $(".header").height() }, 500);
			
		});

		
		
		$(".test__questions .test__get-res").click(function(e){ // показать результаты теста
			e.preventDefault();
			
			$(".test__questions").addClass("hide");
			var point_question_answered = 0;

			$(".test__answer.active[true]").each(function(e){  //подсчет кол-ва отвеченых вопросов
				point_question_answered = point_question_answered + 1;
			});


			if (point_question_answered >= 2 ) {
				$(".test__result.type-2").addClass("active");
			} else {
				$(".test__result.type-1").addClass("active");
			}


			$('html, body').animate({ scrollTop: $(".test__result.active").offset().top - ($(".test__result.active").outerHeight(true) - $(".test__result.active").outerHeight() ) - ($(".header").outerHeight() + $(".test-progress").outerHeight(true)) }, 500);
		

		});
		



		//----------------------

		$('.pass-test-scroll').click( function(e){ //скролл к тесту
			e.preventDefault();
			var scroll_el = $(".test");
				if ($(scroll_el).length != 0) { 
					$('html, body').animate({ scrollTop: $(scroll_el).offset().top - $("header").height() }, 500); 
				}
				return false; 
		});

		//------------------------
		var popup;
		$('.open-popup').each( function(e){ //открытие попапа
			$(this).click(function(e){
				e.preventDefault();
				popup = $(this).attr("open-popup");

				// попап на странице видео
				if(popup ==='video-popup') {
					$('body').css({
						overflow: 'hidden',
					})
					var iframeSrc = $(this).attr("data-src");
					$("#video-popup-iframe").attr("src", iframeSrc).addClass("visible");
					// кнопка в попапе
					// $('.video-popup__video-play').click(function(e) {
					// 	e.preventDefault();
					// 	$(this).css({
					// 		display: 'none',
					// 	});
					// 	$('.video-popup__video-preview').css({opacity: '0'});
					// 	$("#video-popup-iframe").attr("src", iframeSrc).addClass("visible");
					// })
				}

				$(".popup."+ popup).addClass("open");
			});
		});

		$(".close-popup").click(function(e){
			e.preventDefault();
			$(".popup").removeClass("open");

			// закрытие попапа на странице видео
			if(popup ==='video-popup') {
				$('.video-popup__video-preview').css({opacity: ''});
				// $('.video-popup__video-play').css({display: 'flex'});
				$("#video-popup-iframe").attr("src", '').removeClass("visible");
				$('body').css({
					overflow: '',
				})
			}
		});

	// video play

	$(".play-video").click(function() {
		var videoSrc = $(this).closest(".article-video").find(".video-iframe").attr("video-src");
		$(".video-iframe").attr("src", videoSrc).addClass("visible");
		$(this).parent().parent().find(".article-prev__img").addClass("hidden");
	});

	// end video play

});


