/*
 * Model for the translator,
 * gets json from rest api
 * and informs via EventHandler all the subscribers.
 */
var Koyla_model = function(){
  "use strict";
  
  var translation;
  var submitWordEvent = new EventHandler();

  function submitWord(lang,word){

     $.getJSON("http://0.0.0.0:8000/koyla/" + lang + "/" + word)
     .done(function(data) {
          translation = data;
          submitWordEvent.notify([translation,lang]);
     })
     .fail(function() {
         console.log('Oh no, something went wrong!');
     });
  };

  function getTranslation(){
    if (translation !== undefined){
          return translation;
    }
  }

  return ({
    submitWord:submitWord,
    getTranslation:getTranslation,
    submitWordEvent:submitWordEvent
  });

};
