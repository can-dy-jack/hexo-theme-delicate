!function() {
    function get(w, v, i) {
        return w.getAttribute(v) || i
    }
    function l() {
        // 获取本文件的script标签dom
        var i = document.getElementsByTagName("script"),
        v = i[i.length - 1];
        return {
            z: get(v, "zIndex", -2),
            o: get(v, "opacity", 0.8),
            c: get(v, "color", "50,50,250"),
            n: get(v, "count", 500)
        }
    }
    function k() {
        r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    function b() {
        e.clearRect(0, 0, r, n);
        var w = [f].concat(t);
        var x, A, B, z, y;
        t.forEach(function(i) {
            i.x += i.xa,
            i.y += i.ya,
            i.xa *= i.x > r || i.x < 0 ? -1 : 1,
            i.ya *= i.y > n || i.y < 0 ? -1 : 1,
            e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
            for (let v = 0; v < w.length; v++) {
                x = w[v];
                if (i !== x && null !== x.x && null !== x.y) {
                    B = i.x - x.x,
                    z = i.y - x.y,
                    y = B * B + z * z;
                    y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
                }
            }
            w.splice(w.indexOf(i), 1)
        }),
        m(b)
    }
    var u = document.createElement("canvas"),
    s = l(),e = u.getContext("2d"),
    r,
    n,
    m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
    function(i) {
        window.setTimeout(i, 1000 / 45)
    },
    f = {
        x: null,
        y: null,
        max: 20000
    };
    u.id = 'canvas-line';
    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
    document.querySelector("body").appendChild(u);
    k();
    window.onresize = k;
    window.onmousemove = function(i) {
        i = i || window.event,
        f.x = i.clientX,
        f.y = i.clientY
    },
    window.onmouseout = function() {
        f.x = null,
        f.y = null
    };
    for (var t = [], p = 0; s.n > p; p++) {
        var h = Math.random() * r,
        g = Math.random() * n,
        q = 2 * Math.random() - 1,
        d = 2 * Math.random() - 1;
        t.push({
            x: h,
            y: g,
            xa: q,
            ya: d,
            max: 6000
        })
    }
    setTimeout(function() {
        b()
    },
    100)
} ();
