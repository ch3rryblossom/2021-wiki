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

function moveScrollIndicator(e) {
    if($('#content-cyano').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 21.5;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else if($('#content-ecoli').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 21.5;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else if($('#content-coculture').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 12.6;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else if($('#content-overview').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 33.5;
      scrollIndicatorElt.style.height = percentage + '%';
    }



    else if($('#sponsor-page').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 32;
      scrollIndicatorElt.style.height = percentage + '%';
    }


    else if($('#overview-wet').hasClass('active')){
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 32;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else if($('#ecoli-wet').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 5.7;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else if($('#cyano-wet').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 13.3;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else if($('#coculture-wet').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 14.3;
      scrollIndicatorElt.style.height = percentage + '%';
    }



    else if($('#ecoli-wet-res').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 30.07;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else if($('#cyano-wet-res').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 69.05;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else if($('#coculture-wet-res').hasClass('active')) {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 49;
      scrollIndicatorElt.style.height = percentage + '%';
    }
    else {
      var percentage = ($(window).scrollTop()/ (pageheight - screenheight))* 35;
      scrollIndicatorElt.style.height = percentage + '%';
    }
};
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