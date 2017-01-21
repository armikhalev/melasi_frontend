/*
 * View for the translator,
 * renders the data from model
 * by interpreting it as it fits the purpose of the application.
 */
var Koyla_view = function(model){
  "use strict";
  
  var $translation = $("#translation");

  function translate(wordObj){

      var translation;
      var data = wordObj[0];
      var lang = wordObj[1];

      if (data != undefined){
        if(lang === "english"){
         translation = data[0].la;
        }
        else if (lang === "mela") {
         translation = data[0].word;
        }

      }
      $translation.html(translation);
  }

  // submitWordEvent method notifies with an array where [0] is data, [1] is language.
  model.submitWordEvent.attach(translate);

  return ({
    translate:translate
  });

};
