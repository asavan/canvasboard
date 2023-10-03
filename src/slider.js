export default function _algebraic () {
    let a = document.querySelector(".mem");
    let audio = document.querySelector("audio");
    if (!a) {
        a = document.createElement("img");
        a.src = "./img/algebraichno.jpg";
        a.classList.add("mem", "down");
        document.body.appendChild(a);
        audio = document.createElement("audio");
        audio.src = "./audio/alg.mp3";
        audio.setAttribute("hidden", "hidden");
        document.body.appendChild(audio);
        requestAnimationFrame(() => {
            a.classList.remove("down");
        });
    }
    setTimeout(() => audio.play(), 1000);
}
