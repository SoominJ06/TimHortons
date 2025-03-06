$(document).ready(function(){

    // slide event start ---->
    var i = 0;
    var img_a = $(".section1_img a").width();

    $(window).resize(function(){
        img_a = $(".section1_img a").width();
    });

    $(".section_1").click(function(){
        i++;
        if(i > 3) {
            i = 0;
        }
        $(".section1_img").animate({
            left: -img_a * i,
        })
    });

    setInterval(function(){
        $(".section_1").trigger("click");
    }, 3000);
    // slide event end

});