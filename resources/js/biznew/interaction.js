$(document).ready(function(){
    
    function menuOpen(){
        $('.menu_icon > button').click(function(){
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $('nav').removeClass('on');
            } else {
                $(this).addClass('on');
                $('nav').addClass('on');
            }
        });
    }

    menuOpen();

});