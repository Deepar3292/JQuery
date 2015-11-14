 function load() {
 
 var stickyHead = function() {
 var stickyHeadTop = $(".head").offset().top;
	var scrollTop = $(window).scrollTop();  // scrollTop() gets the co-ordinates of the scroll bar
console.log(stickyHeadTop);
console.log(scrollTop);
	if(stickyHeadTop <= scrollTop  ) {         // if the scroll bar position is greater than header's co-ordinates meaning that the user has scrolled the page
		$(".head").addClass("sticky1");      // make the header sticky by adding the css class "sticky"
	} else  {
		$(".head").removeClass("sticky1");   // else remove the class
	}
};
 var stickyfoot = function () {
  	  
      var top = $(".body").height();
      var scrollTop = $(window).scrollTop();
		console.log(top);
		console.log(scrollTop);
      if (scrollTop <= top) {
      		
         $(".footer").addClass("sticky");
       
      } else {
      	
          $(".footer").removeClass("sticky");
          
      }
  };
$(window).scroll(function () {
	  stickyHead();
	  stickyfoot();
  });

 
}
 
 
 $(document).ready(load);