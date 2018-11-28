
$(document).ready(function () {
    svg4everybody({});
});

// Map
function initMap() {
	
	var centerLatLng = new google.maps.LatLng(61.782450, 34.383180);
	var mapOptions = {
		center: centerLatLng,
		zoom: 17.3,
		disableDefaultUI: true,
		styles: [
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#d59658"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"weight": 6.5
					}
				]
			}
		]
	
	};

	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	var myMarker = new google.maps.Marker({ 
		position: new google.maps.LatLng(61.782510, 34.384360), 
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP, 
    	icon: "static/img/content/maps-and-flags.svg" 
	}); 

}

google.maps.event.addDomListener(window, "load", initMap);

$(document).ready(function () {
	window.onscroll = (function(){
		let $sections = $('.section');
		$sections.each(function(i,el){
			let top = $(el).offset().top - 100;
			let bottom = top +$(el).height();
			let scroll = $(window).scrollTop();
			let id = $(el).attr('id');
			if( scroll > top && scroll < bottom){
				$('a.active').removeClass('active');
				$('a[href="#'+id+'"]').addClass('active');
			}
		})
	 });

	 $('.nav-list__link').on('click', function(e){
		e.preventDefault();
		let scroll_el = $(this).attr('href'),
				scroll    = $(scroll_el).offset().top;
		
		$('html, body').animate({
			scrollTop: scroll - 74
		}, 300);
	});
});


$(document).ready(function() {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
      $(".fixed").addClass("scrolled");
    } else {
      $(".fixed").removeClass("scrolled");
    }
  });
});



// Read more...
$(document).ready(function () {
	$(".content").hide();

	$(".toggle").on("click", function (e) {
			
			var $this = $(this).prev('.content');
			var $text = $(this);
			$this.slideToggle('fast', function () {
					if ($(this).is(':visible')) {
							$text.text('Скрыть');
					} else {
							$text.text('Читать далее...');
					}
			});

	});
});
// // Mobile nav
// $('#mobile-menu-button').on('click', function(event) {
//   event.preventDefault();
//   $(this).toggleClass('fast');
//   $('.header__nav').slideToggle("fast");
// });
$(document).ready(function () {
    $('.sandwich').click(function(){
		var menu = $('.mobile');
		$(this).toggleClass('active');
		if(menu.is(':visible')) {
			menu.slideUp();
		}else{
			menu.slideDown();
		}

  $(".mobile-nav__link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1000);
    return false;
	})
})
//bx-slider
$(window).load(function(){
  $('.services-slider').bxSlider({
    mode: 'horizontal',
		speed: 800,
		adaptiveWidth: true,
		responsive: true,
		keyboardEnabled: true,
		nextSelector: '#pronext',
		prevSelector: '#proprev',
		pagerCustom: '#bx-pager',
		prevText: '',   
		nextText: '',
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 600,
		slideMargin: 5,
		startSlide: 0
  });
});  
$(window).load(function() {
  $('.reviews-slider').bxSlider({
    mode: 'horizontal',
		speed: 800,
		adaptiveWidth: true,
		responsive: true,
		keyboardEnabled: true,
		nextSelector: '#next',
		prevSelector: '#prev',
		prevText: '',   
		nextText: '',
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 800,
		slideMargin: 5,
		startSlide: 0
  });
});
$(window).load(function() {
	$('.mobile-slider').bxSlider({
	  mode: 'horizontal',
	  controls: false,
	  pager: false,
	  speed: 800,
	  adaptiveWidth: true,
	  responsive: true,
	  keyboardEnabled: true,
	  minSlides: 1,
	  maxSlides: 1,
	  slideWidth: 800,
		slideMargin: 5,
		startSlide: 0
		});
	});
});