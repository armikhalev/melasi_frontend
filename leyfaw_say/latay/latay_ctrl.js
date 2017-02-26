/*
 * Controller for the basic words cards,
 * receives user actions and controls interpretation
 * and logic of the reaction on the user's actions transmitting them to model and view.
 */
var Latay_ctrl = function(model,view){
  "use strict";

  var $latay_page = $("#latay_page");
  var cards = view.getAllCards();

  (function init(){
    initPage();
  }());

  // Self initializing
  function initPage(){
    for (var card=0, lenCards=cards.length; card<lenCards; card++) {
        cards[card].onclick = function(){
            this.classList.toggle("flip");
            console.log(this.classList);
        }
    }
    console.log(cards);
  }

};
