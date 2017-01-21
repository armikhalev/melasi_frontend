/*
 * Menu application initilizer.
 */
var MenuApp = (function () {
    "use strict";

    (function init(){
      initPage();
    }());

    function initPage(){
       var model = new Menu_model(),
           view = new Menu_view(model),
           controller = new Menu_ctrl(model, view);
    }
 }());
