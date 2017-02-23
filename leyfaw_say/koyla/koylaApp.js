/*
 * Translator application initilizer.
 */
var KoylaApp = (function () {
    "use strict";
    var $main = $("#main");
    var $content = $main.find("#content");

    (function init(){

      $.when(
          $content.load("templates/koyla_template.html #koyla_page"),
          $.Deferred(function( deferred ){
              $( deferred.resolve );
          })
      )
      .done(function(){
           initPage();
      });

    }());

    function initPage(){
       var model = new Koyla_model(),
           view = new Koyla_view(model),
           controller = new Koyla_ctrl(model, view);
    }
 }());
