/*
 * Controller for the translator,
 * receives user actions and controls interpretation
 * and logic of the reaction on the user's actions transmitting them to model and view.
 */
var Koyla_ctrl = function(model,view){
  "use strict";

  var $koyla_page = $("#koyla_page");

  var $changeLanguageBtn = $koyla_page.find("#changeLanguageBtn");
  var $languageTranslatedFromHeader = $koyla_page.find('#languageTranslatedFromHeader');
  var $languageTranslatedToHeader = $koyla_page.find('#languageTranslatedToHeader');

  var $wordToTranslate = $koyla_page.find('#wordToTranslate');
  var $translation = $koyla_page.find('translation');
  var $submitBtn = $koyla_page.find('#submitBtn');
  var lang = "english";
  var word = "";

  (function init(){
    initPage();
  }());

  // Self initializing
  function initPage(){
    $changeLanguageBtn.on('click', changeLanguage_onClick);
    $wordToTranslate.on('keydown', translate_OnKeyDown);

    $submitBtn.on('click', translate_OnKeyDown);
  }

  function changeLanguage_onClick(e) {
      lang = lang === "english" ? "mela" : "english";
      $languageTranslatedFromHeader.html(lang === "english" ? "english" : "mela");
      $languageTranslatedToHeader.html(lang === "english" ? "mela" : "english");
  }

  function translate_OnKeyDown(e) {
      // e.which 13 is the Return button
      if (e.which === 13 || e.type === "click") {
          e.preventDefault();
          word = $wordToTranslate[0].value;
          console.log(word, lang);
          translate();
      }
  }

  function translate(){
    // model.submitWord(lang,$engWord[0].value);
    model.submitWord(lang,word);
  }

};
