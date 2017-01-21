/*
 * Controller for the basic words cards,
 * receives user actions and controls interpretation
 * and logic of the reaction on the user's actions transmitting them to model and view.
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
        var pages = model.getAllPagesUrls();
        var pagesLen = pages.length;

        for (var page = 0; page < pagesLen; page++) {
            var name = pages[page].name;
            var url = pages[page].htmlUrl;
            // Hide all views except the initialPage which is number 0
            if (page != 0){
                document.getElementById( name+"Page" ).style.display = 'none';
            }

            navPages.push({name:name,url:url});
        }
    }

    function initializeNavigation(){

        for (var nav = 0, navLen = navPages.length; nav < navLen; nav++){
            var $navBtn = $menu.find("#"+navPages[nav].name);
            $navBtn.click(setPage_onClick(nav));
        }

        $(window).on('popstate', function (){
            /// Hide all the pages
            var pagesLen = navPages.length;
            var index =  (window.location.href).split('/');
            var indexHtml = index[index.length-1];
            var indexLast;
            if (indexHtml) {indexLast=indexHtml.split(".")[0];}

            for (var page = 0; page < pagesLen; page++) {
                var name = navPages[page].name;

                document.getElementById( name+"Page" ).style.display = 'none';
            }

            if (indexLast !== "main.html"){
                document.getElementById( indexLast + "Page" ).style.display = 'block';
            }
            else {
                document.getElementById( initialPage ).style.display = 'block';
            }

        });
    }

    function setPage_onClick(nav){
        return function(){
            var index = navPages[nav].name;
            var pagesLen = navPages.length;

            window.history.pushState(null, "", index + ".html");

            for (var page = 0; page < pagesLen; page++) {
                var name = navPages[page].name;

                document.getElementById( name+"Page" ).style.display = 'none';
            }

            document.getElementById( index+"Page").style.display = 'block';
        }
    }

};
