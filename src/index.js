"use strict";

import executeArticleScript from "./main.js";
import algebraic from "./slider.js";

algebraic();
executeArticleScript();

// eslint-disable-next-line no-undef
if (__USE_SERVICE_WORKERS__) {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js", {scope: "./"});
        install(window, document);
    }
}
