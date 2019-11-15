var $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $bullet = $('.bullet');

var slidesTotal = ($slide.length - 1),
    current = 0,
    isAutoSliding = true;

$bullet.first().addClass('current');

var clickSlide = function() {
  //stop auto sliding
  window.clearInterval(autoSlide);
  isAutoSliding = false;

  var slideIndex = $bullet.index($(this));

  updateIndex(slideIndex);
};

var updateIndex = function(currentSlide) {
  if(isAutoSliding) {
    if(current === slidesTotal) {
      current = 0;
    } else {
      current++;
    }
  } else {
      current = currentSlide;
  }

  $bullet.removeClass('current');
  $bullet.eq(current).addClass('current');

  transition(current);
};

var transition = function(slidePosition) {
    $slideGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
};

//var transition = function(slidePosition) {
//    $slideGroup.animate({
//      'top': '-' + slidePosition + '00%'
//    });
//};

$bullet.on( 'click', clickSlide);

var autoSlide = window.setInterval(updateIndex, 3000);



// bio_year01 start //

$( document ).ready( function()
{
	$( '.year01' ).each( function()
	{
		$( this ).attr( 'data-year01' , $( this ).text() );
	} );
} );
// bio_year01 end//


// back to top button//
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// gallery start //

$(document).ready(function(){
    // filter
    $('nav a').on('click', function(event){
        event.preventDefault();
        // current class
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        // set new heading
        $('h1.heading').text($(this).text());
        
        // filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');
        
        // remove hidden class if "all" is selected
        if(category == 'all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function(){
               if(!$(this).hasClass(category)){
                   $(this).hide().addClass('hidden');
               } else {
                   $(this).fadeIn('slow').removeClass('hidden');
               }
            });
        }
        return false;        
    });
    // lightbox
    $('ul#gallery a').on('click', function(event){
        event.preventDefault();
        var link = $(this).find('img').attr('src');
        $('.gallery img').attr('src', '');
        $('.gallery img').attr('src', link);
        $('.gallery').fadeIn('slow');
    });
    // close lightbox
    $('.gallery').on('click', function(event){
        event.preventDefault();
        $('.gallery').fadeOut('slow');
    });
});

// gallery end //



// concert video //


function cargarVideo(idframe, idvideo) {
document.getElementById(idframe).src = 'https://www.youtube.com/embed/' + idvideo + '?rel=0';
}




