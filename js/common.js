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
        });
    /*Плавный переход*/
