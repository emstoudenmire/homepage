$(document).ready(function(){
	
	//--------------------------------- Tabs section setup  --------------------------------//
	
		$('#wrapper').easytabs({
    	animate			: false,
    	updateHash		: false,
    	transitionIn	:'slideDown',
    	transitionOut	:'slideUp',
    	animationSpeed	: 800,
		tabActiveClass	:'active',
		tabs            :' #mainNav > ul > li',
		transitionInEasing: 'easeOutExpo',
	  	transitionOutEasing: 'easeInOutExpo'
    
    });
	
//--------------------------------- End tabs section setup --------------------------------//
	

//--------------------------------- Hover animation for the elements of the portfolio --------------------------------//
	
	$('.portfolio li').hover( function(){ 
		$(this).children('img').animate({ opacity: 0.55 }, 'fast');
	}, function(){ 
		$(this).children('img').animate({ opacity: 1 }, 'slow'); 
	}); 
	
//--------------------------------- End hover animation for the elements of the portfolio --------------------------------//
	
	
//--------------------------------- Initilaizing fancybox for the clicked elements of the portfolio --------------------------------//
	
	$('.portfolio a.folio').fancybox({
					'overlayShow'	: true,
					'opacity'		: true,
					'transitionIn'	: 'elastic',
					'transitionOut'	: 'none',
					'overlayOpacity'	:   0.8
				});
	
//--------------------------------- End initilaizing fancybox for the clicked elements of the portfolio  --------------------------------//
	
	
//--------------------------------- Sorting portfolio elements with quicksand plugin  --------------------------------//
	var $portfolioClone = $('.portfolio').clone();
	
	$('.filter a').click(function(e){
		$('.filter li').removeClass('current');	
		var $filterClass = $(this).parent().attr('class');
		if ( $filterClass == 'all' ) {
			var $filteredPortfolio = $portfolioClone.find('li');
		} else {
			var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
		}
		$('.portfolio').quicksand( $filteredPortfolio, { 
			duration: 800,
			easing: 'easeInOutQuad' 
		}, function(){
			$('.portfolio li').hover( function(){ 
				$(this).children('img').animate({ opacity: 0.55 }, 'fast');
			}, function(){ 
				$(this).children('img').animate({ opacity: 1 }, 'slow'); 
			});
			 
//--------------------------------- Reinitilaizing fancybox for the new cloned elements of the portfolio --------------------------------//
			
			$('.portfolio a.folio').fancybox({
							'overlayShow'	: true,
							'opacity'		: true,
							'transitionIn'	: 'elastic',
							'transitionOut'	: 'none',
							'overlayOpacity'	:   0.8
						});
			
//--------------------------------- End reinitilaizing fancybox for the new cloned elements of the portfolio ----------------------------//
			
		});


		$(this).parent().addClass('current');
		e.preventDefault();
	});
	
//--------------------------------- End sorting portfolio elements with quicksand plugin--------------------------------//

// ----------------------------- Toggle blog hidden content ---------------------------------//

$('.btnMore').click(function() {
        $(this).parent('.blogPost').find('.read-more').toggle();
		return false;
    });

// ----------------------------- End toggle blog hidden content ---------------------------------//

//--------------------------- Fancybox for reply and the comment form ----------------------------//

	$('a.replyDisplay, a.commentDisplay').fancybox({
					'overlayShow'	: true,
					'opacity'		: true,
					'transitionIn'	: 'elastic',
					'transitionOut'	: 'none',
					'overlayOpacity'	:   0.8
				});
//--------------------------- End fancybox for reply and the comment form ----------------------------//

//---------------------------------- Google map location -----------------------------------------//

//$location = "Perimeter Institute for Theoretical Physics, Waterloo, Ontario, Canada";
$location = "40.740452, -73.990655";
$contactTabClass = ('tab-contact')
$('#wrapper').bind('easytabs:after', function(evt, tab, panel, data) {
    if ( tab.hasClass($contactTabClass) ) {
        $('#map').gMap({
        address:$location,
        zoom:16,
        markers: [{ address: $location }]
 });
        }
});

//---------------------------------- End google map location -----------------------------------------//

//---------------------------------- Forms validation -----------------------------------------//
	$(".contactForm").validate();
	$(".replyForm").validate();
	$(".commentForm").validate();
//---------------------------------- End forms validation -----------------------------------------//

//-------------------------- Pattern switcher --------------------------------//

$('.switcher').click(
		function() {
			var pattNumb = $(this).attr("data-id");
			$('body').css("background-image","url(images/pattern/pattern"+pattNumb+".png)");
		});
   
       
//-------------------------- End pattern switcher --------------------------------//

//-------------------------- Top image switcher --------------------------------//

//$('.tab-contact').toggle();

//$('.tabs').click(function() {
    //$('#img').attr({src:"img.png"});
//    $(this).find("img").attr({src:"images/img.png"});
//});
//
//$('.switchimg').attr('src','images/irv_campus.jpg');

$('.tab-contact').click(function() {
    //$('.switchimg').attr('src','images/pitp.jpg');
    //$('.switchimg').attr('src','images/RH.jpg');
    $('.switchimg').attr('src','images/flatiron.jpg');
});

$('.tab-blog').click(function() {
    $('.switchimg').attr('src','images/desk.jpg');
});

$('.tab-about').click(function() {
    //$('.switchimg').attr('src','images/Miles_Boulder2.jpg');
    $('.switchimg').attr('src','images/Miles_Nov_2017.jpg');
});

    //$('.switchimg').css("z-index",2);
    //el = $('.switchimg').clone().css({position:"relative","top":"-"+$(".switchimg").eq(0).height()+"px","z-index":"1"}).attr("src","images/img.png");
    //$('.switchimg').after(el).fadeOut('slow', function() { });
    //$('#switchimg').css("z-index",2);
    //el = $('#switchimg').clone().css("z-index",1).attr("src","images/img.png");
    //$("#switchimg").fadeOut();
    //$('#switchimg').fadeOut('slow', function() { // Animation complete.});

//$('input, textarea').placeholder();

//-------------------------- End image switcher --------------------------------//

});
