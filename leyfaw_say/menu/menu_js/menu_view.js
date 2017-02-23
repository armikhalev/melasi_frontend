/*
 * View for the Menu navigation.
 * Creates buttons and provides method 'getButtonsIds' to get those buttons ids.
 *
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
