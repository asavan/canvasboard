let clickX_simple = [];
let clickY_simple = [];
let clickDrag_simple = [];
let paint_simple;
let canvas_simple;
let context_simple;

let canvasWidth = 490;
let canvasHeight = 220;

/**
* Creates a canvas element.
*/
export default function prepareSimpleCanvas(callback) {
    const canvasDiv = document.getElementById("canvas-simple-div");
    canvas_simple = document.createElement("canvas");
    const rect = canvasDiv.getBoundingClientRect();
    canvasWidth = rect.width;
    canvasHeight = rect.height;
    canvas_simple.setAttribute("width", canvasWidth);
    canvas_simple.setAttribute("height", canvasHeight);
    canvas_simple.setAttribute("id", "canvasSimple");
    canvasDiv.appendChild(canvas_simple);
    context_simple = canvas_simple.getContext("2d");

    // Add mouse events
    // ----------------
    canvas_simple.onmousedown = (e) => {
        // Mouse down location
        const mouseX = e.pageX - canvas_simple.offsetLeft;
        const mouseY = e.pageY - canvas_simple.offsetTop;

        paint_simple = true;
        addClickSimple(mouseX, mouseY, false);
        redrawSimple();
    };

    canvas_simple.onmousemove = (e) => {
        if (paint_simple) {
            addClickSimple(e.pageX - canvas_simple.offsetLeft, e.pageY - canvas_simple.offsetTop, true);
            redrawSimple();
        }
    };

    canvas_simple.onmouseup = () => {
        paint_simple = false;
        redrawSimple();
    };

    canvas_simple.onmouseleave = () => {
        paint_simple = false;
    };

    document.querySelector("#clearCanvasSimple").onclick = (e) => {
        e.preventDefault();
        clickX_simple = new Array();
        clickY_simple = new Array();
        clickDrag_simple = new Array();
        clearCanvas_simple(context_simple);
        if (typeof callback === "function") {
            callback();
        }
    };

    // Add touch event listeners to canvas element
    canvas_simple.addEventListener("touchstart", (e) => {
        // Mouse down location
        const mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - canvas_simple.offsetLeft;
        const mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - canvas_simple.offsetTop;

        paint_simple = true;
        addClickSimple(mouseX, mouseY, false);
        redrawSimple();
    }, false);

    canvas_simple.addEventListener("touchmove", (e) => {
        e.preventDefault();

        const mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - canvas_simple.offsetLeft;
        const mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - canvas_simple.offsetTop;

        if (paint_simple) {
            addClickSimple(mouseX, mouseY, true);
            redrawSimple();
        }
    }, false);
    canvas_simple.addEventListener("touchend", () => {
        paint_simple = false;
        redrawSimple();
    }, false);
    canvas_simple.addEventListener("touchcancel", () => {
        paint_simple = false;
    }, false);
}

function addClickSimple(x, y, dragging) {
    clickX_simple.push(x);
    clickY_simple.push(y);
    clickDrag_simple.push(dragging);
}

function clearCanvas_simple(context) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
}

function redrawSimple() {
    clearCanvas_simple(context_simple);

    const radius = 5;
    context_simple.strokeStyle = "#df4b26";
    context_simple.lineJoin = "round";
    context_simple.lineWidth = radius;

    for (let i=0; i < clickX_simple.length; i++) {
        context_simple.beginPath();
        if (clickDrag_simple[i] && i) {
            context_simple.moveTo(clickX_simple[i-1], clickY_simple[i-1]);
        } else {
            context_simple.moveTo(clickX_simple[i] - 1, clickY_simple[i]);
        }
        context_simple.lineTo(clickX_simple[i], clickY_simple[i]);
        context_simple.closePath();
        context_simple.stroke();
    }
}
