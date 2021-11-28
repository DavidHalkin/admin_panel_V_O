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


    // more 
var showChar = 140;
    var ellipsestext = "...";
    var moretext = "read more...";
    var lesstext = "less";
    $('.more_js').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});