$(function(){
    
    
    /*var counter=0;
    var c=$('.sources').children();
    setInterval(function(){
    var l=c[counter];
    var src=$(l).html();
    
    $('.traversal>img').attr('src',src);
    counter=counter+1;
        if(counter>3)
            {
                counter=0;
            }
   },1000);*/
    
  /*  var boxes=$('.tr').children();
    
    setInterval(function(){
        var s=boxes[counter];
        $(s).css('background-color','lime');
        counter=counter+1;
        $(s).prev().css('background-color','red');
        //reset
        if(counter>3)
            {
                //bug1 the last element does not change back
                $(boxes).last().css('background-color','red');
                counter=0;
            }
    },1000);*/
    var count=0;
    var pics=$('.images').children();
    setInterval(function(){
        var img=pics[count];
        $(img).show();//show and animate 
        $(img).toggleClass('into');
        //vanish when next image is appearing.
        $(img).prev().toggleClass('animate');
        setTimeout(function(){$(img).prev().hide()},500);
        count=count+1;
        
        
       /* navigator.geolocation.getCurrentPosition(function(position){
            var lat=position.coords.latitude;
            var lon=positon.coords.longitude;
            alert(lat+"          "+lon);
        });*/
        
        window.addEventListener('deviceorientation',function(evt){
            var fb=evt.beta;
            var lr=evt.gamma;
            var dir=evt.alpha;
            
            $('.images').html(fb+"   "+lr+"   "+dir);
        });
        
    },1000);
    $('.btn').click(function(){
    navigator.vibrate(1000);
    });
    
    
});