var Main = (function(){
    "use strict";

    var $main = $("#main");
    var $header = $main.find("#header");
    var $koyla = $main.find("#koylaPage");
    var $latay = $main.find("#latayPage");

    (function init(){
        initPage();
    }());

    function initPage(){
        // Load in a page
        jQuery.ajaxSetup({
            cache: true
        });
        $header.load("menu/menu.html");
        $.when(
            $.getScript("menu/menu_js/menu_model.js"),
            $.getScript("menu/menu_js/menu_view.js"),
            $.getScript("menu/menu_js/menu_ctrl.js"),
            $.Deferred(function( deferred ){
                $( deferred.resolve );
            })
        ).done(function(){
            $.getScript("menu/menu_js/menuApp.js");
        });

        $.when(
            $.getScript("koyla/koyla_model.js"),
            $.getScript("koyla/koyla_view.js"),
            $.getScript("koyla/koyla_ctrl.js"),
            $.Deferred(function( deferred ){
                $( deferred.resolve );
            })
        ).done(function(){
            $koyla.load("koyla.html");
            $.getScript("koyla/koylaApp.js");
        });

        $.when(
            $.getScript("latay/latay_model.js"),
            $.getScript("latay/latay_view.js"),
            $.getScript("latay/latay_ctrl.js"),
            $.Deferred(function( deferred ){
                $( deferred.resolve );
            })
        ).done(function(){
            $latay.load("latay.html");
            $.getScript("latay/latayApp.js");
        });
    }

}());
