/*
 * Translator application initilizer.
 */
var KoylaApp = (function () {
    "use strict";

    (function init(){
      initPage();
    }());

    function initPage(){
       var model = new Koyla_model(),
           view = new Koyla_view(model),
           controller = new Koyla_ctrl(model, view);
    }
 }());
