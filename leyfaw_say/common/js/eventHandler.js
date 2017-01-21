var EventHandler = function () {
    "use strict";

    var listeners = [];

    function attach(listener) {
        listeners.push(listener);
    }

    function notify(args) {
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](args);
        }
    }

    return({
      attach:attach,
      notify:notify
    });

};
