/*Плавный переход*/
        $(function()
        {
            $('a[href^="#to_subjects-wrapper"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
            $('a[href^="#3"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
             $('a[href^="#4"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
              $('a[href^="#5"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
               $('a[href^="#6"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
            $('a[href^="#go_go"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
            $('a[href^="#mb_go"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
            $('a[href^="#top"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
            $('a[href^="#dont_go"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
            $('a[href^="#by-by"]').click(function()
            {
                var target = $(this).attr('href'); // взяли значення
                // атрибута - href в ссилки
                $('html, body').animate({scrollTop: $(target).offset().top}, 1000);//800 - длительность скроллинга в мс
                return false;
            });
        });
    /*Плавный переход*/
$(window).scroll(function(){
    var l = $(this).scrollTop();
    var height_screen = $(window).height();
    if(l<height_screen){
        $(".up-btn").css({
            "opacity" : "0"
        });
    }
    else{
        $(".up-btn").css({
            "opacity" : "1"
        });
    }
});
