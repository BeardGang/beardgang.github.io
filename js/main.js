$(function(){
   
    var main=$('.t').parent();
    var cur_source=main.first().attr('src');
    var prev_source=main.last();
    var nxt=main.next();
    setInterval(function(){
         cur_source=nxt;
    cur_source.attr('src',cur_source);
    },1000);
   
    //path of the image
    var urls=["url(pics/4.jpg)","url(pics/2.jpg)","url(pics/3.jpg)"];
    var numberOfslides=3;
    
    //$('.slide_div').css('background-image',urls[2]);
    //counter
    var count=0;
    setInterval(function(){
        //control's children
    var control=$('.controls').children();
    //change image
    var cur_image=urls[count];
    var cur_circle=control[count];
    $('.slide_div').css('background-image',cur_image);
    //change its color
    $(cur_circle).css('background-color','#66ff33');
        //make it transparent again
    $(cur_circle).prev().css('background-color','transparent');
    count=count+1;
        if(count>numberOfslides)
            {
                //change the last one
                //#bug 3 after the third slide there is a lag
                //#fix increase transition duration
                count=0;
                $(control).last().css('background-color','transparent');
            }
    },3000);
     
    $(window).scroll(function(){
        $('.col-md-5').addClass('animated');
        $('.col-md-5').show();
                     
    });
});