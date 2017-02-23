var Loader = (function(){
    "use strict";
    var $main = $("#main");
    var $header = $main.find("#header");
    var $content = $main.find("#content");

    (function init(){
        $.ajaxSetup({
            cache: true
        });
        initPage();
    }());

    function initPage(){
        // Load in a page
        $header.load("menu/menu.html");

        $.when(
            $.getScript("menu/menu_js/menu_model.js"),
            $.getScript("menu/menu_js/menu_view.js"),
            $.getScript("menu/menu_js/menu_ctrl.js"),
            $.getScript("common/js/eventHandler.js"),
            $.Deferred(function( deferred ){
                $( deferred.resolve );
            })
        ).done(function(){
            $.getScript("menu/menu_js/menuApp.js");
        });
    }

    function getPage(pageName) {

        $content.html("");

        $.when(
            $.getScript(pageName + "/" + pageName + "_model.js"),
            $.getScript(pageName + "/" + pageName + "_view.js"),
            $.getScript(pageName + "/" + pageName + "_ctrl.js"),
            $.Deferred(function( deferred ){
                $( deferred.resolve );
            })
        ).done(function(){
            $.getScript(pageName + "/" + pageName + "App.js");
        });
    }

    return ({
        getPage:getPage
    });

}());
