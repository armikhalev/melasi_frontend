/*
 * Controller for the Menu,
 * starts the page and creates navigation.
 *
 * Dependencies:
 *      - Loader.js
 *      - jquery.js
 */
var Menu_ctrl = function(model,view){
    "use strict";

    var $main = $("#main");
    var $menu = $main.find("#menu");
    var $content = $main.find("#content");
    var navPages = [];
    var initialPage = "koylaPage";

    (function init(){
        initPage();
        initializeNavigation();
    }());

    // Self initializing
    function initPage(){
        var pages = model.getAllPagesNames();
        var pagesLen = pages.length;

        var index =  (window.location.href).split('/');
        var indexHtml = index[index.length-1];
        var indexLast;
        if (indexHtml) {indexLast=indexHtml.split(".")[0];}

        Loader.getPage(indexLast);

        for (var page = 0; page < pagesLen; page++) {
            var name = pages[page];
            navPages.push(name);
        }
    }

    function initializeNavigation(){

        var pagesLen = navPages.length;

        for (var nav = 0; nav < pagesLen; nav++){
            var $navBtn = $menu.find("#"+navPages[nav]);
            $navBtn.click(setPage_onClick(nav));
        }

        $(window).on('popstate', function (){

            var index =  (window.location.href).split('/');
            var indexHtml = index[index.length-1];
            var indexLast;
            if (indexHtml) {indexLast=indexHtml.split(".")[0];}

            Loader.getPage(indexLast);
        });
    }

    function setPage_onClick(nav){
        return function(){
            var index = navPages[nav];
            var pagesLen = navPages.length;

            window.history.pushState(null, "", index + ".html");

            Loader.getPage(index);
        }
    }

};
