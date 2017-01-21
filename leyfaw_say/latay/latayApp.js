/*
 * Basic words cards application initilizer.
 */
var LatayApp = (function () {
    "use strict";

    (function init(){
      initPage();
    }());

    function initPage(){
       var model = new Latay_model(),
           view = new Latay_view(model),
           controller = new Latay_ctrl(model, view);
    }
 }());
