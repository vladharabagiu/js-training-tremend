(function() {
    'use strict';

    var oldLog = console.log;
    console.log = function (message) {
        var body = document.querySelector("body");
        var p = document.createElement("p");
        p.textContent = (message !== undefined) ? JSON.stringify(message) : "undefined"
        if (typeof message == "function") {
            p.textContent = message;
        }
        body.appendChild(p);
        oldLog.apply(console, arguments);
    }
})();