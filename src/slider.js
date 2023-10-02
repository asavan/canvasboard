export default function _algebraic (baseUrl) {
	var beginUrl = '';
	if (baseUrl && typeof baseUrl === 'string' && baseUrl.indexOf('http') >= 0) {
		beginUrl = baseUrl;
	}
    var a = document.createElement('img');
    a.src = beginUrl + 'img/algebraichno.jpg';
    a.style['position'] = 'fixed';
    a.style['right'] = '10px';
    a.style['bottom'] = '-1000px';
    document.body.appendChild(a);

    var audio = document.createElement('audio');
    audio.src = beginUrl + 'audio/alg.mp3';


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
                    // audio.play();
                    needSound = false;
                }

            }, 50);
        };

        animate(a, 'bottom', pos0, pos0 + height, agentEasing);


    }, 500);
};

// _algebraic('https://asavan.github.io/canvasboard/');