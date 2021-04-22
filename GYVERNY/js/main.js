$(document).ready(function() {

$('#invisible').css('position', 'absolute').css('display', 'none').css('top', '-=1000');

$('#invisible-right').css('position', 'absolute').css('top', '0').css('display', 'none').css('right', '-=600');

    $('#menu').on("click", function() {

        if ($('#invisible').css('top', '-=1000') && $('#invisible-right').css('right', '-=600')) {
            console.log("'ça marche !");

            $('#invisible').css('display', 'grid').css('position', 'fixed').css('overflow', 'auto').animate({top: '0'}, 1000);
            
            $('#invisible-right').animate({right: '0'}, 1300).css('display', 'block');
            
            setTimeout(function(){$('.nav-menu').css('opacity', '0.1');
            
            $('.left-part').css('opacity', '0.1');
            
            $('.video-image').css('opacity', '0.1');
            
            $('.right-part').css('opacity', '0.1');
        }, 2000);

        } else {
            $('#invisible').css('display', 'none');
        }
 
    });
  
 
    $('.logo-invisible').on("click", function() {

        if ($('#invisible').css('top', '0') && $('#invisible-right').css('right', '0')) {
            console.log("'ça REmarche !");

            $('#invisible').animate({top: '-=1500'}, 600);

            $('#invisible-right').animate({right: '-=600'}, 1300).css('display', 'none');
            
            $('.nav-menu').css('opacity', '1');
            
            $('.left-part').css('opacity', '1');
            
            $('.video-image').css('opacity', '1');
            
            $('.right-part').css('opacity', '1');
            
        } else {
            $('#invisible').css('display', 'none');
        }
 
   });
});

$date = new Date();
 
 let $copyright = $('#copyright').html('Copyright ' + $date.getFullYear());
