import executeArticleScript from "./js/main.js";
import algebraic from "./js/slider.js";

executeArticleScript(algebraic);


if (__USE_SERVICE_WORKERS__) {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js", {scope: "./"});
    }
}
