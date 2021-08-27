$(document).ready(function(){


    $(".labelBtn1").click(function(){
        $(".submenu1").show();
        $(".submenu2").hide();
        $(".submenu3").hide();
        $(".submenu4").hide();
        $(".submenu5").hide();
        $('.labelBtn1').css('backgroundColor','#9f6dea');
        $('.labelBtn2').css('backgroundColor','#EBECF0');
        $('.labelBtn3').css('backgroundColor','#EBECF0');
        $('.labelBtn4').css('backgroundColor','#EBECF0');
        $('.labelBtn5').css('backgroundColor','#EBECF0');
    });
    
    $(".labelBtn2").click(function(){
        $(".submenu2").show();
        $(".submenu1").hide();
        $(".submenu3").hide();
        $(".submenu4").hide();
        $(".submenu5").hide();
        $('.labelBtn2').css('backgroundColor','#9f6dea');
        $('.labelBtn1').css('backgroundColor','#EBECF0');
        $('.labelBtn3').css('backgroundColor','#EBECF0');
        $('.labelBtn4').css('backgroundColor','#EBECF0');
        $('.labelBtn5').css('backgroundColor','#EBECF0');
    });

    $(".labelBtn3").click(function(){
        $(".submenu3").show();
        $(".submenu2").hide();
        $(".submenu1").hide();
        $(".submenu4").hide();
        $(".submenu5").hide();
        $('.labelBtn3').css('backgroundColor','#9f6dea');
        $('.labelBtn2').css('backgroundColor','#EBECF0');
        $('.labelBtn1').css('backgroundColor','#EBECF0');
        $('.labelBtn4').css('backgroundColor','#EBECF0');
        $('.labelBtn5').css('backgroundColor','#EBECF0');
    });

    $(".labelBtn4").click(function(){
        $(".submenu4").show();
        $(".submenu2").hide();
        $(".submenu3").hide();
        $(".submenu1").hide();
        $(".submenu5").hide();
        $('.labelBtn4').css('backgroundColor','#9f6dea');
        $('.labelBtn2').css('backgroundColor','#EBECF0');
        $('.labelBtn3').css('backgroundColor','#EBECF0');
        $('.labelBtn1').css('backgroundColor','#EBECF0');
        $('.labelBtn5').css('backgroundColor','#EBECF0');
    });

    $(".labelBtn5").click(function(){
        $(".submenu5").show();
        $(".submenu2").hide();
        $(".submenu3").hide();
        $(".submenu4").hide();
        $(".submenu1").hide();
        $('.labelBtn5').css('backgroundColor','#9f6dea');
        $('.labelBtn2').css('backgroundColor','#EBECF0');
        $('.labelBtn3').css('backgroundColor','#EBECF0');
        $('.labelBtn4').css('backgroundColor','#EBECF0');
        $('.labelBtn1').css('backgroundColor','#EBECF0');
    });
}); 