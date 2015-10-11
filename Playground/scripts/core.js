(function() {
    'use strict';

    var oldLog = console.log;
    console.log = function (message) {
        var body = document.querySelector("body");
        var p = document.createElement("pre");

        try {
            p.textContent = (message !== undefined) ? JSON.stringify(message) : "undefined"
        } catch (exception) {
            oldLog.apply(console, arguments);
        }
        if (typeof message == "function") {
            p.textContent = message;
        }
        body.appendChild(p);
        oldLog.apply(console, arguments);
    }
})();