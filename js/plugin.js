(function($){
    $.fn.floatAnima=function(clientProperty){
        var defProperty={
            speed:200,
            distance:150,
            trigger:"click"
        }
        var settings=$.extend(defProperty,clientProperty);

        this.on(""+settings.trigger+"",function(){
            $(this).css("position","relative")
            .animate({
                left:"+="+settings.distance
            },settings.speed,function(){
               $(this).animate({
                   left:0
               },settings.speed) 
            })
        })
    }
}(jQuery))