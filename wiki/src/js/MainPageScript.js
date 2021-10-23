$(document).ready(function() {
    $(window).on("load",function() {
        $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var windowTop = $(this).scrollTop() + $('.menu').height() - 150;
        
        $(".animated-fade-in-out").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var objectTop = $(this).offset().top;

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom && objectTop > windowTop) { 
                //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {
                    $(this).fadeTo(500,1);
                }
            } 
            else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {
                    $(this).fadeTo(500,0);
                }
            }
        });



        $("#slideText").each(function() {
            /*Check location of each desired element */
            var objectBottom_sp = $(this).offset().top + $(this).outerHeight();
            if (objectBottom_sp < windowBottom) { 
                //object comes into view (scrolling down)
                $(this).addClass("animated-left-to-right");
                } 
        });



        $("#conveyor").each(function() {
            var objectBottom_sp2 = $(this).offset().top + $(this).outerHeight() - 700;
            if (objectBottom_sp2 < windowBottom) { 
                //object comes into view (scrolling down)
                $(this).addClass("animated-fade-in");
                } 
        });


        $("#counter").each(function() {
            /*Check location of the element*/
            var objectBottom_sp3 = $(this).offset().top + $(this).outerHeight();
            console.log(this)
            if (objectBottom_sp3 < windowBottom) {
                $(this).addClass("counting");
            }
        });


        }).scroll(); //invoke scroll-handler on page-load



        
    })
});