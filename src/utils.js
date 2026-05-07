export function isPWA() {
    return window.matchMedia("(display-mode: standalone)").matches ||
        window.matchMedia("(display-mode: fullscreen)").matches ||
        window.matchMedia("(display-mode: minimal-ui)").matches ||
        (window.navigator.standalone === true); // Specific for iOS Safari
}

if (isPWA()) {
    console.log("Running as an installed PWA");
} else {
    console.log("Running in a browser tab");
}
