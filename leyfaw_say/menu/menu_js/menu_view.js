/*
 * View for the basic words cards,
 * renders the data from model
 * by interpreting it as it fits the purpose of the application.
 */
var Menu_view = function(model){
    "use strict";

    var $menu = $("#menu");
    var buttonsIds = [];

    (function init(){
    initPage();
    }());

    // Self initializing
    function initPage(){
        var pagesNames = model.getAllPagesNames();
        var pagesNamesLen = pagesNames.length;

        for (var name = 0; name < pagesNamesLen; name++) {
          var menuBtn = document.createElement("button");
          menuBtn.id = pagesNames[name];
          menuBtn.className = "menuBtn";
          menuBtn.innerHTML = pagesNames[name];

          $menu.append(menuBtn);
          buttonsIds.push(menuBtn.id);
        }
    }

    function getButtonsIds(){
        return buttonsIds;
    }

    return ({
        getButtonsIds:getButtonsIds
    });

};
