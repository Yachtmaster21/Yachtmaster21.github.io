

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":960},"pages":[{"id":"page-about-finn","displayName":"About Finn","link":{"linkType":"LinkTypePage","href":"#!page-about-finn"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true}]}

        $(function () {
            $('.go-down').click(function () {
                $('html,body').animate({scrollTop: $('#after-hero').offset().top}, 500);
            });
        });
    