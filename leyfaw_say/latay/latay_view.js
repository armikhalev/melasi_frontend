/*
 * View for the basic words cards,
 * renders the data from model
 * by interpreting it as it fits the purpose of the application.
 */
var Latay_view = function(model){
  "use strict";

  var $latay_page = $("#content");
  var cards = [];

  (function init(){
    initPage();
  }());

  // Self initializing
  function initPage(){
    populateCards();
  }

  function populateCards(){
    var words = model.getWords();
    var wordsLen = words.length;

    for (var word = 0;word < wordsLen;word++) {

        var flipContainer = document.createElement("div");
        flipContainer.className = "flipContainer";

        var flipper= document.createElement("div");
        flipper.className = "flipper";
        flipContainer.appendChild(flipper);

        var frontCard = document.createElement("div");
        frontCard.className = "card frontCard";
        frontCard.innerHTML = words[word][0];

        var backCard = document.createElement("div");
        backCard.className = "card backCard";
        backCard.innerHTML = words[word][1];

        flipper.appendChild(frontCard);
        flipper.appendChild(backCard);

        $latay_page.append(flipContainer);

        cards.push(flipContainer);
    }
  }

  function getAllCards() {
      return cards;
  }

  return ({
      getAllCards:getAllCards
  });

};
