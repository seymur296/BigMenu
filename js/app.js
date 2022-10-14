$("#header .dropped-li > a,#header .big-dropped-li > a").click(function(e){
    e.preventDefault()
    $(".dropdown-ul,.big-dropped").stop().slideUp();
    $(this).parent().find(".dropdown-ul,.big-dropped").stop()
    .slideToggle()
})
$("#header .big-dropped-li .big-dropped h5").click(function(e){
    e.preventDefault()
    $(".big-dropped .dropped-item ul").stop().slideUp();
    $(this).parent().find("ul").stop()
    .slideToggle()
})