/* The below code demonstrates a sticky bar functionality. Here the header and the footer sections are made sticky */

// Any code written within below callback function will be executed when the HTML document is fully loaded
function DocumentReady() {

var stickyHeadTop = $(".head").offset().top;                                               //offset().top gets the current element's top coordinates
//var bottom = $(window).height() - parseInt($(".head").height() + $(".body").height()); 
//var stickyFootBot = $(".footer").offset().bottom;
    
var stickyHead = function() {
	var scrollTop = $(window).scrollTop();  // scrollTop() gets the co-ordinates of the scroll bar

	if(scrollTop > stickyHeadTop) {         // if the scroll bar position is greater than header's co-ordinates meaning that the user has scrolled the page
		$(".head").addClass("sticky");      // make the header sticky by adding the css class "sticky"
	} else {
		$(".head").removeClass("sticky");   // else remove the class
	}
};
/*var stickyFoot = function() {
 var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
 if(scrollTop === 0) {
  $('#scrollTop').replaceWith('style="position: fixed; right: 25px; bottom: 25px;"');
}*/

/*if(scrollBottom > stickyFootBot) {
	$(".footer").addClass("stickyfoot").css("bottom","bottom");
} else {
	$(".footer").removeClass("stickyfoot");
}
}; */
//stickyHead();
//stickyFoot();
$(window).scroll(function() {                 // when the user starts scrolling the callback stickyHead() is called i.e the JQuery event "scroll" gets triggered
   
	stickyHead(/*function() {
				stickyFoot(); }*/);
	
});
}

$(document).ready(DocumentReady);  					// $ which is a shortcut for jQuery() class, instantiates the jQuery object and the ready() is method which will be assigned to ready event of JQuery which gets triggered when the html document is completely loaded

/* Short method to assign handler to ready event of JQuery
$(function() {
      content here;
});
*/ 

