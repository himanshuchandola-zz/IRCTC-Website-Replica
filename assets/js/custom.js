(function($) {
	
	"use strict";
	
	var wind = $(window);
	 
	
	// Mobile toogle menu
	$('.open_mobile_menu').on('click', function(){
		$($(this).data('target')).fadeIn().addClass('show_mobile_nav');
	});
	$('.close_mobile_menu, .cover_mobile_menu').on('click', function(){
		$($(this).data('target')).removeClass('show_mobile_nav').fadeOut();
	});
	$('.main_nav_mobile .has-child').append('<span class="sub_menu_btn"><i class="fas fa-plus"></i></span>');
	$('.sub_menu_btn').on('click', function(){
		$(this).toggleClass('close_sub_menu');
		$(this).siblings('.sub-menu').stop().slideToggle();
	});
	
	//Filter Style Nav
	$('.filter_point').attr('class',$('.filter_nav a.active').data('class'));

	$('.filter_nav a').on('click', function(){
		
		if(!$(this).hasClass('active')){
			$('.filter_nav a').removeClass('active');
			$(this).addClass('active');
			
			$('.filter_point').attr('class',$(this).data('class'));
		}
		return false;
	});
	
	
	 // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".fixed_header");
            //logo = $(".navbar .logo> img");

        if(bodyScroll > 80){
			
            navbar.addClass("fixed");
            //logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("fixed");
           // logo.attr('src', 'img/logo-light.png');
        }
    });
	
	
	//sart carousels
	if ($().owlCarousel) {
		
		//main carousel
		$('.main_b_slider').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			animateOut: 'fadeOut',
			autoplayTimeout:7000,
			smartSpeed:1100,
			nav:true,
			dots:false,
			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		//services carousel
		$('.service_carousel').owlCarousel({
			loop:false,
			margin:0,
			autoplay:false,
			autoplayTimeout:7000,
			smartSpeed:1100,
			nav:true,
			dots:false,
			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		//team carousel
		$('.team_carousel').owlCarousel({
			loop:false,
			margin:0,
			autoplay:true,
			autoplayTimeout:7000,
			smartSpeed:1100,
			nav:false,
			dots:false,
			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		//related card carousel
		$('.related_card_carousel').owlCarousel({
			loop:false,
			margin:30,
			autoplay:false,
			autoplayTimeout:7000,
			smartSpeed:1100,
			nav:false,
			dots:true,
			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});
		//review carousel
		$('.reviews_carousel').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoHeight:true,
			autoplayTimeout:8000,
			smartSpeed:1100,
			nav:false,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		//news carousel
		$('.latest_news_carousel').owlCarousel({
			loop:false,
			margin:30,
			autoplay:false,
			autoplayTimeout:8000,
			smartSpeed:1100,
			nav:false,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});
		//item page gallery
		$('.gallery_item').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed:1400,
			autoHeight:false,
			nav:true,
			dots:false,
			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		
	}//END start carousel
	
	//magnificPopup start
	if ($().magnificPopup) {
		//video popup
		$('.popup_video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
		//images popup
		$('.see_big_pic').magnificPopup({
			type: 'image',
			fixedContentPos: false,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: false,
			preloader: false,
			
			midClick: true,

			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] 
			},
			
		});
		//images popup2
		$('.popup_image').magnificPopup({
			type: 'image',
			fixedContentPos: false,
			fixedBgPos: true,
	
		});
	}
	
	//easy scroll nav
	$('.easescroll').on('click', function(){
		
      var hash = this.hash;
		$('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){})
		
		return false;
		
	});

	
	
	
	//Shuffle Filter
	if (window.Shuffle) {	
	
		var Shuffle = window.Shuffle;
		var element = document.querySelector('.grid_pics');

		var shuffleInstance = new Shuffle(element, {
		  itemSelector: '.item',
		  buffer: 1,
		  easing: 'cubic-bezier(.42,.01,.57,1)',
		  speed: 400,
		  useTransforms: true,
		});
		
		//Shuffle Filter Nav
		$('.category-control button').on('click', function(){
			
			$('.category-control button').removeClass('active');
			$(this).addClass('active');
			
			if($(this).data('group') != 'all'){
				shuffleInstance.filter([$(this).data('group')]);
			}else{
				shuffleInstance.filter(Shuffle.ALL_ITEMS);
			}
		});	
		
	}// END Shuffle Filter



})(jQuery); //jQuery

