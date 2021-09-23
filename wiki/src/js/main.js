console.log('JS works!')

// reset iGEM
if (window.location.href.includes('igem.org')) {
    var ids = ['HQ_page', 'content', 'bodyContent', 'mw-content-text']
    for (var i = 0; i < ids.length; i++)
        document.querySelector('#' + ids[i]).removeAttribute('id');
    var classes = ['mw-content-ltr']
    for (var i = 0; i < classes.length; i++)
    {
        var elements = document.querySelectorAll('.' + classes[i]);
        for (var j = 0; j < elements.length; j++)
        {
            elements[j].classList.remove(classes[i]);
        }
    }
    document.querySelectorAll('.mw-body')[0].removeAttribute('id')
}

//////////// Back to top button @Namasi22

// var backtotopheight=pageheight/4.65
// ^ in case we need

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > (backtotopheight+20) || document.documentElement.scrollTop > (backtotopheight+20)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = backtotopheight;
  document.documentElement.scrollTop = 0;
}

//////////// Scroll Indicator @Namasi22

	window.addEventListener('scroll',
			moveScrollIndicator);

	const scrollIndicatorElt =
		document.getElementById('scrollIndicator');

	const maxHeight =
		window.document.body.scrollHeight
		- window.innerHeight;

	function moveScrollIndicator(e) {
		const percentage =
			((window.scrollY) / (pageheight - screenheight))* 35;

		scrollIndicatorElt.style.height
			= percentage + '%';
	}
//////////// End scrollbar

//////////// Carousel/Slideshow

var total = $('.item').length;
var actualtotal = 80;
var currentIndex = $('div.active').index() + 1;
$('#slidetext').html(currentIndex + '/'  + actualtotal);

// This triggers after each slide change
$('.carousel').on('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;

  // Now display this wherever you want
  var slideshowtext = currentIndex + '/' + actualtotal;
    $('#slidetext').html(slideshowtext);
});

//////////// Slideshow end