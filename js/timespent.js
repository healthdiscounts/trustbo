!function (e) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    var t = {};
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: o})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, n.p = "", n(n.s = 1)
}([function (e, n, t) {
    !function () {
        "use strict";

        function n(e, n, t, o, r) {
            var c = r, u = function () {
                e[c](n, t)
            };
            return o ? (e[o](n, t), u) : e.addEventListener ? (e.addEventListener(n, t), c = "removeEventListener", u) : e.attachEvent ? (n = "on" + n, e.attachEvent(n, t), c = "detachEvent", u) : e.on ? (e.on(n, t), c = "off", u) : void 0
        }

        function t(e, t, o) {
            return n(e, t, o)
        }

        t.define = function (e, t) {
            return function (o, r, c) {
                return n(o, r, c, e, t)
            }
        }, function (n) {
            e.exports = n
        }(t)
    }()
}, function (e, n, t) {
    "use strict";

    function o() {
        c && clearTimeout(c), c = setTimeout(r, f)
    }

    function r() {
        if (0 !== i.length) {
            var e = new Date, n = Math.round((e - l) / 1e3);
            document.createElement("img").src = "".concat(i, "click.php?").concat(a, "=").concat(n)
        }
    }

    var c, u = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(t(0)), i = "", a = "event9", f = 3e3, l = new Date,
        d = ["touchstart", "touchend", "touchcancel", "touchmove", "keydown", "mousedown", "mouseup", "mousemove", "wheel", "MozMousePixelScroll", "mousewheel", "click"];
    (0, u.default)(window, "scroll", o), d.forEach(function (e) {
        return (0, u.default)(document, e, o)
    }), (0, u.default)(window, "beforeunload", function () {
        0 !== i.length && r()
    }), (0, u.default)(window, "pagehide", function () {
        0 !== i.length && r()
    }), window.timespent = function (e) {
        if (e = Object.assign({
            debounceTime: 3e3,
            eventName: "event9",
            trackerUrl: ""
        }, e), 0 === e.trackerUrl.length) throw new Error("trackerUrl not provided");
        i = e.trackerUrl, f = e.debounceTime, a = e.eventName
    }
}]);