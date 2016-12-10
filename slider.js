var _algebraic = function () {

    var a = document.createElement('img');
    a.src = 'img/algebraichno.jpg';
    a.style['position'] = 'fixed';
    a.style['right'] = '10px';
    a.style['bottom'] = '-1000px';
    document.body.appendChild(a);

    var audio = document.createElement('audio');
    audio.src = 'audio/alg.mp3';


    setTimeout(function () {
        // a.style['right']=10;a.style['bottom']=-1000;
        var needSound = true;
        var pos0 = -a.offsetHeight, height = 306;
        var agentEasing = function (t) {
            return Math.min(0.7, Math.sin(t * Math.PI / 2) * 1.5);
        };
        var animate = function (el, prop, from, to, easing) {
            var t = 0;
            var iid = setInterval(function () {
                t = t + 0.01;
                el.style[prop] = from + (to - from) * easing(t) + 'px';
                if (t >= 0.5) {
                    // responsiveVoice.speak("Algebraichno");
                    clearInterval(iid);
                }
                if (t >= 0.1 && needSound) {
                    audio.play();
                    needSound = false;
                }

            }, 50);
        };

        animate(a, 'bottom', pos0, pos0 + height, agentEasing);


    }, 500);
};

if (window.addEventListener) {
    window.addEventListener('load', _algebraic, false);
} else if (window.attachEvent) {
    document.attacheEvent('onload', _algebraic, false);
} else {
    _algebraic();
}
