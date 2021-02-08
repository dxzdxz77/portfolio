$(function(){
        var sta = 1
        $('.open').click(function(){

          if (sta == 1){
          $(this).addClass('active');
          $('.btn1').animate({top:'70px'},500);
          $('.btn2').animate({top:'120px'},500);
          $('.btn3').animate({top:'170px'},500);
          $('.btn4').animate({top:'220px'},500);
          $('.btn5').animate({top:'270px'},500);
          $('.btn6').animate({top:'320px'},500);
          $('.btns a').css({opacity: 1});
          sta = 2
          }else{
            $(this).removeClass('active');
            $('.btn1, .btn2, .btn3, .btn4, .btn5, .btn6').animate({top:'0px'},500);
            $('.btns a').css({opacity: 0});
            sta =1
          }
        })//click

        /*$(window).scroll(function(){
            if($(document).scrollTop() >= 50 && $(document).scrollTop() <= $('#footer').offset().top - 1000){//푸터에서 맨 위쪽(top)까지의 거리를 크게 주면 푸터 위에서 버튼 사라짐
                $('.open').fadeIn(200)
            }else {$('.open').fadeOut(200)}
        })//scroll*/
})//js end