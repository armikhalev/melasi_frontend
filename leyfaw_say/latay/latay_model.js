/*
 * Model for the basic words cards.
 */
var Latay_model = function(){
  "use strict";

  var latay = [
    ["A","Makes any word an infinitive verb"],
    ["E","Mark of a direct object, accusative case"],
    ["I","And"],
    ["O","Honorification, high style, politeness.'Omaw - please'."],
    ["U","Some"]
  ];

  function getWords()
  {
    return latay;
  }
  return ({
    getWords:getWords
  });

};
