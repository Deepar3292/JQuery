 function load() {
 
	/* making the header bar sticky when the user starts scrolling down the page*/
	var stickyHead = function() {
		
		var stickyHeadTop = $("#head").offset().top;		// offset() method gets the co-ordinates of the current element relative to the document and "top" is the property of offset() which takes the top co-ordinates
		var scrollTop = $(window).scrollTop();  			// scrollTop() gets the top co-ordinates of the scroll bar
		console.log(stickyHeadTop);
		console.log(scrollTop);
		
		if(scrollTop >= stickyHeadTop) {         			// if the scroll bar position is greater than header's co-ordinates meaning that the user has scrolled the page
			$("#head").addClass("sticky1");      			// make the header sticky by adding the CSS class "sticky1" which is defined in CSS file
		} else {
			$("#head").removeClass("sticky1");   			// else remove the class and hence the current element gets its default CSS properties defined
			}
			
	};
	
	/* making the footer bar sticky when the user starts scrolling down and once the scrollbar reaches the end of the document make the footer movable */
	var stickyfoot = function () {
  	  
		var top = $("#body").height();						// height() gets the height of the current element
		var scrollTop = $(window).scrollTop();
		console.log(top);
		console.log(scrollTop);
		
		if (scrollTop <= top) {								// until the scroll bar has not reached the end of the document
      		
			$("#footer").addClass("sticky");				// add the class "sticky" to the footer
       
		} else {
      	
			$("#footer").removeClass("sticky");				// once the scroll bar reaches the end of the document remove calls "sticky" making the footer movable
          
		}
	};
	
	$(window).scroll(function () {							// stickyHead() and stickyfoot() functions are called when the user starts scrolling i.e registering scroll event
		stickyHead();
		stickyfoot();
	});

 
}
 
 
$(document).ready(load);									// ready() method triggers the ready event of JQuery and load function is called when the html document is loaded completely. This is useful when the JQuery code is kept in external file and is referenced from html header section

/* Short way to register scroll event instead of calling ready method. This is equivalent to ready() method
	$(function() {
		$(window).scroll(function() {
			stickyHead();
			stickyfoot();
		});
	});
*/
 
 