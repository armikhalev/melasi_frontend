/*
 * Controller for the translator,
 * receives user actions and controls interpretation
 * and logic of the reaction on the user's actions transmitting them to model and view.
 */
var Koyla_ctrl = function(model,view){
  "use strict";

  var $koyla_page = $("#koyla_page");
  var $englishSubmitBtn = $koyla_page.find('#englishSubmitBtn');
  var $melaSubmitBtn = $koyla_page.find('#melaSubmitBtn');
  var $englishWord = $koyla_page.find('#englishWord');
  var $melaWord = $koyla_page.find('#melaWord');
  var lang = "";
  var word = "";

  (function init(){
    initPage();
  }());

  // Self initializing
  function initPage(){
    $englishWord.on('keydown', english_OnKeyDown);
    $melaWord.on('keydown', mela_OnKeyDown);

    $englishSubmitBtn.on('click', english_OnKeyDown);
    $melaSubmitBtn.on('click', mela_OnKeyDown);
  }

  function mela_OnKeyDown(e) {
      // e.which 13 is the Return button
      if (e.which === 13 || e.type === "click") {
          e.preventDefault();
          lang = "mela";
          word = $melaWord[0].value;
          translate();
      }
  }

  function english_OnKeyDown(e) {
      // e.which 13 is the Return button
      if (e.which === 13 || e.type === "click") {
          e.preventDefault();
          lang = "english";
          word = $englishWord[0].value;
          translate();
      }
  }

  function translate(){
    // model.submitWord(lang,$engWord[0].value);
    model.submitWord(lang,word);
  }

};
