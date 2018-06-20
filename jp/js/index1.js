    var navFlex = function() {
      if($(this).width() > 768) {
	    var nav_container = $(".nav-wrap"),
	        nav = $(".nav"),
          navtrigger =  $(".nav-trigger"),
	        top_spacing = 0,
	        waypoint_offset = 50;
      
      nav.removeClass('active');
      navtrigger.removeClass('active'); 
	    $(nav_container).waypoint({ 
		    handler: function(direction) {
			
			  if (direction == 'down') {
				  nav_container.css({ 'height':nav.outerHeight() });		
				  nav.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});
			  } else {
				  nav_container.css({ 'height':'auto' });        nav.stop().removeClass("sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});			
			  }
		  },
		    offset: function() {
			    return -nav.outerHeight()-waypoint_offset;
		    }
	    });
	
      var sections = $("section"),
	        nav_links = $("nav a");
	
	    sections.waypoint({
		    handler: function(direction) {
			    var active_section = $(this);
			    if (direction === "up") active_section = active_section.prev();
			    var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			    nav_links.removeClass("selected");
			    active_link.addClass("selected");
		    },
		    offset: '25%'
	    })
	
	    nav_links.unbind('click');
	    nav_links.click( function(event) {
      
		  $.scrollTo(
			  $(this).attr("href"),
			  {
				  duration: 200,
				  offset: { 'left':0, 'top':-0.15*$(window).height() }
			  }
		  );
	  });
   //End Large Screen
   } else  {
     var navtrigger =  $(".nav-trigger"),
         nav = $(".nav"),
         nav_links = $("nav a");
     
     nav.removeClass("sticky");
     navtrigger.click(function(event){
       
       if ($(this).hasClass("active")){
         $(this).removeClass("active")&& nav.removeClass("active"); 
       } else {
         $(this).addClass("active")&& nav.addClass("active");
       }
     });
     
     nav_links.click(function(event) {
       
       $.scrollTo(
         $(this).attr("href"),
         {
           duration: 200,
           offset:{'left':0, 'top':-0.02*$(window).height()}
         }
       );
       nav.removeClass('active');
       navtrigger.removeClass('active');
     });   
   }
   //End Small Screen      
  };
  

$(document).ready(navFlex);
$(window).resize(navFlex);