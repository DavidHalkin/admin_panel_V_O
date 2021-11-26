$(document).ready(function(){
    $(".menu_mob_js").click(function(){
        $(this).toggleClass("opened");
        $(".menu_panel_js").toggleClass("opened");
        $("body").toggleClass("opened");
    });
    // 
    $('html').click(function(){
      $('.menu_panel_js,.menu_mob_js,body').removeClass("opened");
    });

    $('.has_drop_js,.menu_mob_js').click(function(e){
      e.stopPropagation();
    });

});