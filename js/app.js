/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function r(e) {
            e.preventDefault();
          }
          function o(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function a(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              i = e.ownerDocument,
              n = i.documentElement,
              r = v(i);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0),
              t ? s.top + r.y - n.clientTop : s.left + r.x - n.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, s) {
            s > 0 &&
              (f(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function h(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function y() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function b() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function w() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function S(e, t) {
            return 100 / (t - e);
          }
          function x(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function C(e, t) {
            return x(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function E(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function T(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function O(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var i = T(s, e),
              n = e[i - 1],
              r = e[i],
              o = t[i - 1],
              a = t[i];
            return o + C([n, r], s) / S(o, a);
          }
          function L(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var i = T(s, t),
              n = e[i - 1],
              r = e[i],
              o = t[i - 1];
            return E([n, r], (s - o) * S(o, t[i]));
          }
          function A(e, t, s, i) {
            if (100 === i) return i;
            var n = T(i, e),
              r = e[n - 1],
              o = e[n];
            return s
              ? i - r > (o - r) / 2
                ? o
                : r
              : t[n - 1]
              ? e[n - 1] + a(i - e[n - 1], t[n - 1])
              : i;
          }
          var P, k;
          (e.PipsMode = void 0),
            ((k = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (k.Steps = "steps"),
            (k.Positions = "positions"),
            (k.Count = "count"),
            (k.Values = "values"),
            (e.PipsType = void 0),
            ((P = e.PipsType || (e.PipsType = {}))[(P.None = -1)] = "None"),
            (P[(P.NoValue = 0)] = "NoValue"),
            (P[(P.LargeValue = 1)] = "LargeValue"),
            (P[(P.SmallValue = 2)] = "SmallValue");
          var I = (function () {
              function e(e, t, s) {
                var i;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var n = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    n.push([p(e[t]), t]);
                  }),
                    n.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this.handleEntryPoint(n[i][1], n[i][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), i = 0;
                  i < this.xNumSteps.length;
                  i++
                )
                  this.handleStepPoint(i, this.xNumSteps[i]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = x(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var i,
                    n = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[n + 1]; ) n++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (n = this.xPct.length - 2);
                  s || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                  var r = 1,
                    o = t[n],
                    a = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                  for (
                    i = s
                      ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
                      : (this.xPct[n + 1] - e) /
                        (this.xPct[n + 1] - this.xPct[n]);
                    o > 0;

                  )
                    (a = this.xPct[n + 1 + d] - this.xPct[n + d]),
                      t[n + d] * r + 100 - 100 * i > 100
                        ? ((l = a * i), (r = (o - 100 * i) / t[n + d]), (i = 1))
                        : ((l = ((t[n + d] * a) / 100) * r), (r = 0)),
                      s
                        ? ((c -= l), this.xPct.length + d >= 1 && d--)
                        : ((c += l), this.xPct.length - d >= 1 && d++),
                      (o = t[n + d] * r);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = O(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return L(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = A(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var i = T(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[i - 1])) &&
                      (i = Math.max(i - 1, 1)),
                    (this.xVal[i] - this.xVal[i - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = T(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(h);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !c(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var i = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(i) && i)
                    : isNaN(i) || (this.xSteps[0] = i),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        x([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        S(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        i = Math.ceil(Number(s.toFixed(3)) - 1),
                        n = this.xVal[e] + this.xNumSteps[e] * i;
                      this.xHighestCompleteStep[e] = n;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            M = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            _ = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            $ = { tooltips: ".__tooltips", aria: ".__aria" };
          function D(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function z(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function N(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function B(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function V(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new I(t, e.snap || !1, e.singleStep);
          }
          function H(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function j(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function q(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function G(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function F(e, t) {
            var s,
              i = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) i.push(t);
              i.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              i = t;
            }
            e.connect = i;
          }
          function R(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function U(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function W(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function Y(e, t) {
            var s;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var i = t[0] + t[1],
                n = e.spectrum.xVal[0];
              if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function X(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              i = t.indexOf("drag") >= 0,
              n = t.indexOf("fixed") >= 0,
              r = t.indexOf("snap") >= 0,
              o = t.indexOf("hover") >= 0,
              a = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0;
            if (n) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              U(e, e.start[1] - e.start[0]);
            }
            if (a && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || r,
              drag: i,
              dragAll: l,
              fixed: n,
              snap: r,
              hover: o,
              unconstrained: a,
            };
          }
          function Z(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Q(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function J(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ie(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ne(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function re(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: M,
                format: M,
              },
              s = {
                step: { r: !1, t: D },
                keyboardPageMultiplier: { r: !1, t: z },
                keyboardMultiplier: { r: !1, t: N },
                keyboardDefaultStep: { r: !1, t: B },
                start: { r: !0, t: H },
                connect: { r: !0, t: F },
                direction: { r: !0, t: X },
                snap: { r: !1, t: j },
                animate: { r: !1, t: q },
                animationDuration: { r: !1, t: G },
                range: { r: !0, t: V },
                orientation: { r: !1, t: R },
                margin: { r: !1, t: U },
                limit: { r: !1, t: W },
                padding: { r: !1, t: Y },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: J },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: Z },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ie },
                cssClasses: { r: !0, t: ne },
                handleAttributes: { r: !1, t: Q },
              },
              i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: _,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (r) {
                if (n(e[r]) || void 0 !== i[r])
                  s[r].t(t, n(e[r]) ? e[r] : i[r]);
                else if (s[r].r)
                  throw new Error("noUiSlider: '" + r + "' is required.");
              }),
              (t.pips = e.pips);
            var r = document.createElement("div"),
              o = void 0 !== r.style.msTransform,
              a = void 0 !== r.style.transform;
            t.transformRule = a
              ? "transform"
              : o
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function oe(t, s, a) {
            var c,
              h,
              S,
              x,
              C,
              E = y(),
              T = w() && b(),
              O = t,
              L = s.spectrum,
              A = [],
              P = [],
              k = [],
              I = 0,
              M = {},
              _ = t.ownerDocument,
              D = s.documentElement || _.documentElement,
              z = _.body,
              N = "rtl" === _.dir || 1 === s.ort ? 0 : 100;
            function B(e, t) {
              var s = _.createElement("div");
              return t && f(s, t), e.appendChild(s), s;
            }
            function V(e, t) {
              var i = B(e, s.cssClasses.origin),
                n = B(i, s.cssClasses.handle);
              if (
                (B(n, s.cssClasses.touchArea),
                n.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (n.setAttribute("tabindex", "0"),
                  n.addEventListener("keydown", function (e) {
                    return he(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var r = s.handleAttributes[t];
                Object.keys(r).forEach(function (e) {
                  n.setAttribute(e, r[e]);
                });
              }
              return (
                n.setAttribute("role", "slider"),
                n.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(n, s.cssClasses.handleLower)
                  : t === s.handles - 1 && f(n, s.cssClasses.handleUpper),
                i
              );
            }
            function H(e, t) {
              return !!t && B(e, s.cssClasses.connect);
            }
            function j(e, t) {
              var i = B(t, s.cssClasses.connects);
              (h = []), (S = []).push(H(i, e[0]));
              for (var n = 0; n < s.handles; n++)
                h.push(V(t, n)), (k[n] = n), S.push(H(i, e[n + 1]));
            }
            function q(e) {
              return (
                f(e, s.cssClasses.target),
                0 === s.dir ? f(e, s.cssClasses.ltr) : f(e, s.cssClasses.rtl),
                0 === s.ort
                  ? f(e, s.cssClasses.horizontal)
                  : f(e, s.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                B(e, s.cssClasses.base)
              );
            }
            function G(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                B(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function F() {
              return O.hasAttribute("disabled");
            }
            function R(e) {
              return h[e].hasAttribute("disabled");
            }
            function U() {
              C &&
                (ve("update" + $.tooltips),
                C.forEach(function (e) {
                  e && i(e);
                }),
                (C = null));
            }
            function W() {
              U(),
                (C = h.map(G)),
                me("update" + $.tooltips, function (e, t, i) {
                  if (C && s.tooltips && !1 !== C[t]) {
                    var n = e[t];
                    !0 !== s.tooltips[t] && (n = s.tooltips[t].to(i[t])),
                      (C[t].innerHTML = n);
                  }
                });
            }
            function Y() {
              ve("update" + $.aria),
                me("update" + $.aria, function (e, t, i, n, r) {
                  k.forEach(function (e) {
                    var t = h[e],
                      n = be(P, e, 0, !0, !0, !0),
                      o = be(P, e, 100, !0, !0, !0),
                      a = r[e],
                      l = String(s.ariaFormat.to(i[e]));
                    (n = L.fromStepping(n).toFixed(1)),
                      (o = L.fromStepping(o).toFixed(1)),
                      (a = L.fromStepping(a).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", n),
                      t.children[0].setAttribute("aria-valuemax", o),
                      t.children[0].setAttribute("aria-valuenow", a),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function X(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return L.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, i = 100 / s, n = []; s--; )
                  n[s] = s * i;
                return n.push(100), K(n, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return L.fromStepping(L.getStep(L.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return L.fromStepping(t ? L.getStep(e) : e);
              });
            }
            function Z(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var i = X(t),
                n = {},
                r = L.xVal[0],
                a = L.xVal[L.xVal.length - 1],
                l = !1,
                c = !1,
                d = 0;
              return (
                (i = o(
                  i.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== r && (i.unshift(r), (l = !0)),
                i[i.length - 1] !== a && (i.push(a), (c = !0)),
                i.forEach(function (r, o) {
                  var a,
                    u,
                    p,
                    h,
                    f,
                    m,
                    g,
                    v,
                    y,
                    b,
                    w = r,
                    S = i[o + 1],
                    x = t.mode === e.PipsMode.Steps;
                  for (
                    x && (a = L.xNumSteps[o]),
                      a || (a = S - w),
                      void 0 === S && (S = w),
                      a = Math.max(a, 1e-7),
                      u = w;
                    u <= S;
                    u = s(u, a)
                  ) {
                    for (
                      v = (f = (h = L.toStepping(u)) - d) / (t.density || 1),
                        b = f / (y = Math.round(v)),
                        p = 1;
                      p <= y;
                      p += 1
                    )
                      n[(m = d + p * b).toFixed(5)] = [L.fromStepping(m), 0];
                    (g =
                      i.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : x
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !o && l && u !== S && (g = 0),
                      (u === S && c) || (n[h.toFixed(5)] = [u, g]),
                      (d = h);
                  }
                }),
                n
              );
            }
            function Q(t, i, n) {
              var r,
                o,
                a = _.createElement("div"),
                l =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  r),
                c =
                  (((o = {})[e.PipsType.None] = ""),
                  (o[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (o[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (o[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  o),
                d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                u = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var i = t === s.cssClasses.value,
                  n = i ? l : c;
                return t + " " + (i ? d : u)[s.ort] + " " + n[e];
              }
              function h(t, r, o) {
                if ((o = i ? i(r, o) : o) !== e.PipsType.None) {
                  var l = B(a, !1);
                  (l.className = p(o, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    o > e.PipsType.NoValue &&
                      (((l = B(a, !1)).className = p(o, s.cssClasses.value)),
                      l.setAttribute("data-value", String(r)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(n.to(r))));
                }
              }
              return (
                f(a, s.cssClasses.pips),
                f(
                  a,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  h(e, t[e][0], t[e][1]);
                }),
                a
              );
            }
            function J() {
              x && (i(x), (x = null));
            }
            function ee(e) {
              J();
              var t = Z(e),
                s = e.filter,
                i = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (x = O.appendChild(Q(t, s, i)));
            }
            function te() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || c[t] : e.height || c[t];
            }
            function se(e, t, i, n) {
              var r = function (r) {
                  var o = ie(r, n.pageOffset, n.target || t);
                  return (
                    !!o &&
                    !(F() && !n.doNotReject) &&
                    !(g(O, s.cssClasses.tap) && !n.doNotReject) &&
                    !(e === E.start && void 0 !== o.buttons && o.buttons > 1) &&
                    (!n.hover || !o.buttons) &&
                    (T || o.preventDefault(),
                    (o.calcPoint = o.points[s.ort]),
                    void i(o, n))
                  );
                },
                o = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, r, !!T && { passive: !0 }),
                    o.push([e, r]);
                }),
                o
              );
            }
            function ie(e, t, s) {
              var i = 0 === e.type.indexOf("touch"),
                n = 0 === e.type.indexOf("mouse"),
                r = 0 === e.type.indexOf("pointer"),
                o = 0,
                a = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (r = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (i) {
                var l = function (t) {
                  var i = t.target;
                  return (
                    i === s ||
                    s.contains(i) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (o = c[0].pageX), (a = c[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (o = d.pageX), (a = d.pageY);
                }
              }
              return (
                (t = t || v(_)),
                (n || r) && ((o = e.clientX + t.x), (a = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [o, a]),
                (e.cursor = n || r),
                e
              );
            }
            function ne(e) {
              var t = (100 * (e - l(c, s.ort))) / te();
              return (t = u(t)), s.dir ? 100 - t : t;
            }
            function oe(e) {
              var t = 100,
                s = !1;
              return (
                h.forEach(function (i, n) {
                  if (!R(n)) {
                    var r = P[n],
                      o = Math.abs(r - e);
                    (o < t || (o <= t && e > r) || (100 === o && 100 === t)) &&
                      ((s = n), (t = o));
                  }
                }),
                s
              );
            }
            function ae(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ce(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ce(e, t);
              var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Se(
                i > 0,
                (100 * i) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ce(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (I -= 1)),
                t.listeners.forEach(function (e) {
                  D.removeEventListener(e[0], e[1]);
                }),
                0 === I &&
                  (m(O, s.cssClasses.drag),
                  Ee(),
                  e.cursor &&
                    ((z.style.cursor = ""),
                    z.removeEventListener("selectstart", r))),
                t.handleNumbers.forEach(function (e) {
                  ye("change", e), ye("set", e), ye("end", e);
                });
            }
            function de(e, t) {
              if (!t.handleNumbers.some(R)) {
                var i;
                1 === t.handleNumbers.length &&
                  ((i = h[t.handleNumbers[0]].children[0]),
                  (I += 1),
                  f(i, s.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  o = se(E.move, D, le, {
                    target: e.target,
                    handle: i,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: P.slice(),
                  }),
                  a = se(E.end, D, ce, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = se("mouseout", D, ae, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, o.concat(a, l)),
                  e.cursor &&
                    ((z.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && f(O, s.cssClasses.drag),
                    z.addEventListener("selectstart", r, !1)),
                  t.handleNumbers.forEach(function (e) {
                    ye("start", e);
                  });
              }
            }
            function ue(e) {
              e.stopPropagation();
              var t = ne(e.calcPoint),
                i = oe(t);
              !1 !== i &&
                (s.events.snap || d(O, s.cssClasses.tap, s.animationDuration),
                Te(i, t, !0, !0),
                Ee(),
                ye("slide", i, !0),
                ye("update", i, !0),
                s.events.snap
                  ? de(e, { handleNumbers: [i] })
                  : (ye("change", i, !0), ye("set", i, !0)));
            }
            function pe(e) {
              var t = ne(e.calcPoint),
                s = L.getStep(t),
                i = L.fromStepping(s);
              Object.keys(M).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  M[e].forEach(function (e) {
                    e.call(Ne, i);
                  });
              });
            }
            function he(e, t) {
              if (F() || R(t)) return !1;
              var i = ["Left", "Right"],
                n = ["Down", "Up"],
                r = ["PageDown", "PageUp"],
                o = ["Home", "End"];
              s.dir && !s.ort
                ? i.reverse()
                : s.ort && !s.dir && (n.reverse(), r.reverse());
              var a,
                l = e.key.replace("Arrow", ""),
                c = l === r[0],
                d = l === r[1],
                u = l === n[0] || l === i[0] || c,
                p = l === n[1] || l === i[1] || d,
                h = l === o[0],
                f = l === o[1];
              if (!(u || p || h || f)) return !0;
              if ((e.preventDefault(), p || u)) {
                var m = u ? 0 : 1,
                  g = _e(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = L.getDefaultStep(P[t], u, s.keyboardDefaultStep)),
                  (g *=
                    d || c ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (a = A[t] + g);
              } else
                a = f
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Te(t, L.toStepping(a), !0, !0),
                ye("slide", t),
                ye("update", t),
                ye("change", t),
                ye("set", t),
                !1
              );
            }
            function fe(e) {
              e.fixed ||
                h.forEach(function (e, t) {
                  se(E.start, e.children[0], de, { handleNumbers: [t] });
                }),
                e.tap && se(E.start, c, ue, {}),
                e.hover && se(E.move, c, pe, { hover: !0 }),
                e.drag &&
                  S.forEach(function (t, i) {
                    if (!1 !== t && 0 !== i && i !== S.length - 1) {
                      var n = h[i - 1],
                        r = h[i],
                        o = [t],
                        a = [n, r],
                        l = [i - 1, i];
                      f(t, s.cssClasses.draggable),
                        e.fixed &&
                          (o.push(n.children[0]), o.push(r.children[0])),
                        e.dragAll && ((a = h), (l = k)),
                        o.forEach(function (e) {
                          se(E.start, e, de, {
                            handles: a,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function me(e, t) {
              (M[e] = M[e] || []),
                M[e].push(t),
                "update" === e.split(".")[0] &&
                  h.forEach(function (e, t) {
                    ye("update", t);
                  });
            }
            function ge(e) {
              return e === $.aria || e === $.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(M).forEach(function (e) {
                var i = e.split(".")[0],
                  n = e.substring(i.length);
                (t && t !== i) ||
                  (s && s !== n) ||
                  (ge(n) && s !== n) ||
                  delete M[e];
              });
            }
            function ye(e, t, i) {
              Object.keys(M).forEach(function (n) {
                var r = n.split(".")[0];
                e === r &&
                  M[n].forEach(function (e) {
                    e.call(
                      Ne,
                      A.map(s.format.to),
                      t,
                      A.slice(),
                      i || !1,
                      P.slice(),
                      Ne
                    );
                  });
              });
            }
            function be(e, t, i, n, r, o) {
              var a;
              return (
                h.length > 1 &&
                  !s.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((a = L.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (i = Math.max(i, a))),
                  r &&
                    t < h.length - 1 &&
                    ((a = L.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (i = Math.min(i, a)))),
                h.length > 1 &&
                  s.limit &&
                  (n &&
                    t > 0 &&
                    ((a = L.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (i = Math.min(i, a))),
                  r &&
                    t < h.length - 1 &&
                    ((a = L.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (i = Math.max(i, a)))),
                s.padding &&
                  (0 === t &&
                    ((a = L.getAbsoluteDistance(0, s.padding[0], !1)),
                    (i = Math.max(i, a))),
                  t === h.length - 1 &&
                    ((a = L.getAbsoluteDistance(100, s.padding[1], !0)),
                    (i = Math.min(i, a)))),
                !((i = u((i = L.getStep(i)))) === e[t] && !o) && i
              );
            }
            function we(e, t) {
              var i = s.ort;
              return (i ? t : e) + ", " + (i ? e : t);
            }
            function Se(e, t, s, i, n) {
              var r = s.slice(),
                o = i[0],
                a = [!e, e],
                l = [e, !e];
              (i = i.slice()),
                e && i.reverse(),
                i.length > 1
                  ? i.forEach(function (e, s) {
                      var i = be(r, e, r[e] + t, a[s], l[s], !1);
                      !1 === i ? (t = 0) : ((t = i - r[e]), (r[e] = i));
                    })
                  : (a = l = [!0]);
              var c = !1;
              i.forEach(function (e, i) {
                c = Te(e, s[e] + t, a[i], l[i]) || c;
              }),
                c &&
                  (i.forEach(function (e) {
                    ye("update", e), ye("slide", e);
                  }),
                  null != n && ye("drag", o));
            }
            function xe(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function Ce(e, t) {
              (P[e] = t), (A[e] = L.fromStepping(t));
              var i = "translate(" + we(xe(t, 0) - N + "%", "0") + ")";
              (h[e].style[s.transformRule] = i), Oe(e), Oe(e + 1);
            }
            function Ee() {
              k.forEach(function (e) {
                var t = P[e] > 50 ? -1 : 1,
                  s = 3 + (h.length + t * e);
                h[e].style.zIndex = String(s);
              });
            }
            function Te(e, t, s, i, n) {
              return (
                n || (t = be(P, e, t, s, i, !1)), !1 !== t && (Ce(e, t), !0)
              );
            }
            function Oe(e) {
              if (S[e]) {
                var t = 0,
                  i = 100;
                0 !== e && (t = P[e - 1]), e !== S.length - 1 && (i = P[e]);
                var n = i - t,
                  r = "translate(" + we(xe(t, n) + "%", "0") + ")",
                  o = "scale(" + we(n / 100, "1") + ")";
                S[e].style[s.transformRule] = r + " " + o;
              }
            }
            function Le(e, t) {
              return null === e || !1 === e || void 0 === e
                ? P[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = L.toStepping(e)),
                  !1 === e || isNaN(e) ? P[t] : e);
            }
            function Ae(e, t, i) {
              var n = p(e),
                r = void 0 === P[0];
              (t = void 0 === t || t),
                s.animate && !r && d(O, s.cssClasses.tap, s.animationDuration),
                k.forEach(function (e) {
                  Te(e, Le(n[e], e), !0, !1, i);
                });
              var o = 1 === k.length ? 0 : 1;
              if (r && L.hasNoSize() && ((i = !0), (P[0] = 0), k.length > 1)) {
                var a = 100 / (k.length - 1);
                k.forEach(function (e) {
                  P[e] = e * a;
                });
              }
              for (; o < k.length; ++o)
                k.forEach(function (e) {
                  Te(e, P[e], !0, !0, i);
                });
              Ee(),
                k.forEach(function (e) {
                  ye("update", e), null !== n[e] && t && ye("set", e);
                });
            }
            function Pe(e) {
              Ae(s.start, e);
            }
            function ke(e, t, s, i) {
              if (!((e = Number(e)) >= 0 && e < k.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Te(e, Le(t, e), !0, !0, i), ye("update", e), s && ye("set", e);
            }
            function Ie(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === A.length ? A[0] : A.slice(0);
              var t = A.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Me() {
              for (
                ve($.aria),
                  ve($.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(O, s.cssClasses[e]);
                  });
                O.firstChild;

              )
                O.removeChild(O.firstChild);
              delete O.noUiSlider;
            }
            function _e(e) {
              var t = P[e],
                i = L.getNearbySteps(t),
                n = A[e],
                r = i.thisStep.step,
                o = null;
              if (s.snap)
                return [
                  n - i.stepBefore.startValue || null,
                  i.stepAfter.startValue - n || null,
                ];
              !1 !== r &&
                n + r > i.stepAfter.startValue &&
                (r = i.stepAfter.startValue - n),
                (o =
                  n > i.thisStep.startValue
                    ? i.thisStep.step
                    : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                100 === t ? (r = null) : 0 === t && (o = null);
              var a = L.countStepDecimals();
              return (
                null !== r && !1 !== r && (r = Number(r.toFixed(a))),
                null !== o && !1 !== o && (o = Number(o.toFixed(a))),
                [o, r]
              );
            }
            function $e() {
              return k.map(_e);
            }
            function De(e, t) {
              var i = Ie(),
                r = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              r.forEach(function (t) {
                void 0 !== e[t] && (a[t] = e[t]);
              });
              var o = re(a);
              r.forEach(function (t) {
                void 0 !== e[t] && (s[t] = o[t]);
              }),
                (L = o.spectrum),
                (s.margin = o.margin),
                (s.limit = o.limit),
                (s.padding = o.padding),
                s.pips ? ee(s.pips) : J(),
                s.tooltips ? W() : U(),
                (P = []),
                Ae(n(e.start) ? e.start : i, t);
            }
            function ze() {
              (c = q(O)),
                j(s.connect, c),
                fe(s.events),
                Ae(s.start),
                s.pips && ee(s.pips),
                s.tooltips && W(),
                Y();
            }
            ze();
            var Ne = {
              destroy: Me,
              steps: $e,
              on: me,
              off: ve,
              get: Ie,
              set: Ae,
              setHandle: ke,
              reset: Pe,
              __moveHandles: function (e, t, s) {
                Se(e, t, P, s);
              },
              options: a,
              updateOptions: De,
              target: O,
              removePips: J,
              removeTooltips: U,
              getPositions: function () {
                return P.slice();
              },
              getTooltips: function () {
                return C;
              },
              getOrigins: function () {
                return h;
              },
              pips: ee,
            };
            return Ne;
          }
          function ae(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = oe(e, re(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: I, cssClasses: _, create: ae };
          (e.create = ae),
            (e.cssClasses = _),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.??bjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.??bjects.push(i);
      }
      this.arraySort(this.??bjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.??bjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          n = window.matchMedia(i[0]),
          r = i[1],
          o = Array.prototype.filter.call(this.??bjects, function (e) {
            return e.breakpoint === r;
          });
        n.addListener(function () {
          e.mediaHandler(n, o);
        }),
          this.mediaHandler(n, o);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    class t {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("??????????????????"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `???? ????, ???? ???????????????? ?????????????? ?? ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this)
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : a(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("???????????? ??????????");
        } else
          this.popupLogging(
            "???? ????, ???????????? ???????????? ??????. ?????????????????? ???????????????????????? ??????????. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              a(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("???????????? ??????????"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && d(`[??????????????]: ${e}`);
      }
    }
    let i = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      n = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      r = (e, t = 500) => (e.hidden ? n(e, t) : i(e, t)),
      o = !0,
      a = (e = 500) => {
        document.documentElement.classList.contains("lock") ? l(e) : c(e);
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function d(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function u(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                r = s[2],
                o = window.matchMedia(s[0]),
                a = e.filter(function (e) {
                  if (e.value === i && e.type === r) return !0;
                });
              n.push({ itemsArray: a, matchMedia: o });
            }),
            n
          );
      }
    }
    class p {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`??????????????????, ???????????????? ????????????????: (${e.length})`))
            : this.setLogging("????????, ?????? ???? ???????????? select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selects??lose();
        } else this.selects??lose();
      }
      selects??lose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          r(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          r = !!e.dataset.href && e.dataset.href,
          o = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let a = "";
        return (
          (a += r
            ? `<a ${o} ${i} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (a += this.getSelectElementContent(e)),
          (a += r ? "</a>" : "</button>"),
          a
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && f.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && d(`[select]: ${e}`);
      }
    }
    const h = { inputMaskModule: null, selectModule: null };
    let f = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                f.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (h.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  h.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var m = s(211);
    function g(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function v(e) {
      return e instanceof g(e).Element || e instanceof Element;
    }
    function y(e) {
      return e instanceof g(e).HTMLElement || e instanceof HTMLElement;
    }
    function b(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof g(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    !(function () {
      const e = document.querySelector(".price-product__range");
      if (e) {
        m.create(e, {
          start: [0, 5e3],
          connect: !0,
          tooltips: !0,
          range: { min: [0], max: [5e3] },
        });
        const t = document.querySelector(".price-product__input_from"),
          s = document.querySelector(".price-product__input_to");
        e.noUiSlider.on("update", function (e) {
          (t.value = e[0]), (s.value = e[1]);
        }),
          t.addEventListener("change", function () {
            e.noUiSlider.set([this.value, null]);
          }),
          s.addEventListener("change", function () {
            e.noUiSlider.set([null, Number(this.value)]);
          });
      }
    })();
    var w = Math.max,
      S = Math.min,
      x = Math.round;
    function C(e, t) {
      void 0 === t && (t = !1);
      var s = e.getBoundingClientRect(),
        i = 1,
        n = 1;
      if (y(e) && t) {
        var r = e.offsetHeight,
          o = e.offsetWidth;
        o > 0 && (i = x(s.width) / o || 1), r > 0 && (n = x(s.height) / r || 1);
      }
      return {
        width: s.width / i,
        height: s.height / n,
        top: s.top / n,
        right: s.right / i,
        bottom: s.bottom / n,
        left: s.left / i,
        x: s.left / i,
        y: s.top / n,
      };
    }
    function E(e) {
      var t = g(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function T(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function O(e) {
      return ((v(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function L(e) {
      return C(O(e)).left + E(e).scrollLeft;
    }
    function A(e) {
      return g(e).getComputedStyle(e);
    }
    function P(e) {
      var t = A(e),
        s = t.overflow,
        i = t.overflowX,
        n = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(s + n + i);
    }
    function k(e, t, s) {
      void 0 === s && (s = !1);
      var i,
        n,
        r = y(t),
        o =
          y(t) &&
          (function (e) {
            var t = e.getBoundingClientRect(),
              s = x(t.width) / e.offsetWidth || 1,
              i = x(t.height) / e.offsetHeight || 1;
            return 1 !== s || 1 !== i;
          })(t),
        a = O(t),
        l = C(e, o),
        c = { scrollLeft: 0, scrollTop: 0 },
        d = { x: 0, y: 0 };
      return (
        (r || (!r && !s)) &&
          (("body" !== T(t) || P(a)) &&
            (c =
              (i = t) !== g(i) && y(i)
                ? { scrollLeft: (n = i).scrollLeft, scrollTop: n.scrollTop }
                : E(i)),
          y(t)
            ? (((d = C(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
            : a && (d.x = L(a))),
        {
          x: l.left + c.scrollLeft - d.x,
          y: l.top + c.scrollTop - d.y,
          width: l.width,
          height: l.height,
        }
      );
    }
    function I(e) {
      var t = C(e),
        s = e.offsetWidth,
        i = e.offsetHeight;
      return (
        Math.abs(t.width - s) <= 1 && (s = t.width),
        Math.abs(t.height - i) <= 1 && (i = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: s, height: i }
      );
    }
    function M(e) {
      return "html" === T(e)
        ? e
        : e.assignedSlot || e.parentNode || (b(e) ? e.host : null) || O(e);
    }
    function _(e) {
      return ["html", "body", "#document"].indexOf(T(e)) >= 0
        ? e.ownerDocument.body
        : y(e) && P(e)
        ? e
        : _(M(e));
    }
    function $(e, t) {
      var s;
      void 0 === t && (t = []);
      var i = _(e),
        n = i === (null == (s = e.ownerDocument) ? void 0 : s.body),
        r = g(i),
        o = n ? [r].concat(r.visualViewport || [], P(i) ? i : []) : i,
        a = t.concat(o);
      return n ? a : a.concat($(M(o)));
    }
    function D(e) {
      return ["table", "td", "th"].indexOf(T(e)) >= 0;
    }
    function z(e) {
      return y(e) && "fixed" !== A(e).position ? e.offsetParent : null;
    }
    function N(e) {
      for (var t = g(e), s = z(e); s && D(s) && "static" === A(s).position; )
        s = z(s);
      return s &&
        ("html" === T(s) || ("body" === T(s) && "static" === A(s).position))
        ? t
        : s ||
            (function (e) {
              var t =
                -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
              if (
                -1 !== navigator.userAgent.indexOf("Trident") &&
                y(e) &&
                "fixed" === A(e).position
              )
                return null;
              var s = M(e);
              for (
                b(s) && (s = s.host);
                y(s) && ["html", "body"].indexOf(T(s)) < 0;

              ) {
                var i = A(s);
                if (
                  "none" !== i.transform ||
                  "none" !== i.perspective ||
                  "paint" === i.contain ||
                  -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                  (t && "filter" === i.willChange) ||
                  (t && i.filter && "none" !== i.filter)
                )
                  return s;
                s = s.parentNode;
              }
              return null;
            })(e) ||
            t;
    }
    var B = "top",
      V = "bottom",
      H = "right",
      j = "left",
      q = "auto",
      G = [B, V, H, j],
      F = "start",
      R = "end",
      U = "viewport",
      W = "popper",
      Y = G.reduce(function (e, t) {
        return e.concat([t + "-" + F, t + "-" + R]);
      }, []),
      X = [].concat(G, [q]).reduce(function (e, t) {
        return e.concat([t, t + "-" + F, t + "-" + R]);
      }, []),
      K = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function Z(e) {
      var t = new Map(),
        s = new Set(),
        i = [];
      function n(e) {
        s.add(e.name),
          []
            .concat(e.requires || [], e.requiresIfExists || [])
            .forEach(function (e) {
              if (!s.has(e)) {
                var i = t.get(e);
                i && n(i);
              }
            }),
          i.push(e);
      }
      return (
        e.forEach(function (e) {
          t.set(e.name, e);
        }),
        e.forEach(function (e) {
          s.has(e.name) || n(e);
        }),
        i
      );
    }
    var Q = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function J() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function ee(e) {
      void 0 === e && (e = {});
      var t = e,
        s = t.defaultModifiers,
        i = void 0 === s ? [] : s,
        n = t.defaultOptions,
        r = void 0 === n ? Q : n;
      return function (e, t, s) {
        void 0 === s && (s = r);
        var n,
          o,
          a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Q, r),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          d = {
            state: a,
            setOptions: function (s) {
              var n = "function" == typeof s ? s(a.options) : s;
              u(),
                (a.options = Object.assign({}, r, a.options, n)),
                (a.scrollParents = {
                  reference: v(e)
                    ? $(e)
                    : e.contextElement
                    ? $(e.contextElement)
                    : [],
                  popper: $(t),
                });
              var o = (function (e) {
                var t = Z(e);
                return K.reduce(function (e, s) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === s;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var s = e[t.name];
                    return (
                      (e[t.name] = s
                        ? Object.assign({}, s, t, {
                            options: Object.assign({}, s.options, t.options),
                            data: Object.assign({}, s.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(i, a.options.modifiers))
              );
              return (
                (a.orderedModifiers = o.filter(function (e) {
                  return e.enabled;
                })),
                a.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    s = e.options,
                    i = void 0 === s ? {} : s,
                    n = e.effect;
                  if ("function" == typeof n) {
                    var r = n({ state: a, name: t, instance: d, options: i }),
                      o = function () {};
                    l.push(r || o);
                  }
                }),
                d.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var e = a.elements,
                  t = e.reference,
                  s = e.popper;
                if (J(t, s)) {
                  (a.rects = {
                    reference: k(t, N(s), "fixed" === a.options.strategy),
                    popper: I(s),
                  }),
                    (a.reset = !1),
                    (a.placement = a.options.placement),
                    a.orderedModifiers.forEach(function (e) {
                      return (a.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    });
                  for (var i = 0; i < a.orderedModifiers.length; i++)
                    if (!0 !== a.reset) {
                      var n = a.orderedModifiers[i],
                        r = n.fn,
                        o = n.options,
                        l = void 0 === o ? {} : o,
                        u = n.name;
                      "function" == typeof r &&
                        (a =
                          r({ state: a, options: l, name: u, instance: d }) ||
                          a);
                    } else (a.reset = !1), (i = -1);
                }
              }
            },
            update:
              ((n = function () {
                return new Promise(function (e) {
                  d.forceUpdate(), e(a);
                });
              }),
              function () {
                return (
                  o ||
                    (o = new Promise(function (e) {
                      Promise.resolve().then(function () {
                        (o = void 0), e(n());
                      });
                    })),
                  o
                );
              }),
            destroy: function () {
              u(), (c = !0);
            },
          };
        if (!J(e, t)) return d;
        function u() {
          l.forEach(function (e) {
            return e();
          }),
            (l = []);
        }
        return (
          d.setOptions(s).then(function (e) {
            !c && s.onFirstUpdate && s.onFirstUpdate(e);
          }),
          d
        );
      };
    }
    var te = { passive: !0 };
    const se = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          s = e.instance,
          i = e.options,
          n = i.scroll,
          r = void 0 === n || n,
          o = i.resize,
          a = void 0 === o || o,
          l = g(t.elements.popper),
          c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          r &&
            c.forEach(function (e) {
              e.addEventListener("scroll", s.update, te);
            }),
          a && l.addEventListener("resize", s.update, te),
          function () {
            r &&
              c.forEach(function (e) {
                e.removeEventListener("scroll", s.update, te);
              }),
              a && l.removeEventListener("resize", s.update, te);
          }
        );
      },
      data: {},
    };
    function ie(e) {
      return e.split("-")[0];
    }
    function ne(e) {
      return e.split("-")[1];
    }
    function re(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    function oe(e) {
      var t,
        s = e.reference,
        i = e.element,
        n = e.placement,
        r = n ? ie(n) : null,
        o = n ? ne(n) : null,
        a = s.x + s.width / 2 - i.width / 2,
        l = s.y + s.height / 2 - i.height / 2;
      switch (r) {
        case B:
          t = { x: a, y: s.y - i.height };
          break;
        case V:
          t = { x: a, y: s.y + s.height };
          break;
        case H:
          t = { x: s.x + s.width, y: l };
          break;
        case j:
          t = { x: s.x - i.width, y: l };
          break;
        default:
          t = { x: s.x, y: s.y };
      }
      var c = r ? re(r) : null;
      if (null != c) {
        var d = "y" === c ? "height" : "width";
        switch (o) {
          case F:
            t[c] = t[c] - (s[d] / 2 - i[d] / 2);
            break;
          case R:
            t[c] = t[c] + (s[d] / 2 - i[d] / 2);
        }
      }
      return t;
    }
    var ae = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function le(e) {
      var t,
        s = e.popper,
        i = e.popperRect,
        n = e.placement,
        r = e.variation,
        o = e.offsets,
        a = e.position,
        l = e.gpuAcceleration,
        c = e.adaptive,
        d = e.roundOffsets,
        u = e.isFixed,
        p = o.x,
        h = void 0 === p ? 0 : p,
        f = o.y,
        m = void 0 === f ? 0 : f,
        v = "function" == typeof d ? d({ x: h, y: m }) : { x: h, y: m };
      (h = v.x), (m = v.y);
      var y = o.hasOwnProperty("x"),
        b = o.hasOwnProperty("y"),
        w = j,
        S = B,
        C = window;
      if (c) {
        var E = N(s),
          T = "clientHeight",
          L = "clientWidth";
        if (
          (E === g(s) &&
            "static" !== A((E = O(s))).position &&
            "absolute" === a &&
            ((T = "scrollHeight"), (L = "scrollWidth")),
          (E = E),
          n === B || ((n === j || n === H) && r === R))
        )
          (S = V),
            (m -=
              (u && E === C && C.visualViewport
                ? C.visualViewport.height
                : E[T]) - i.height),
            (m *= l ? 1 : -1);
        if (n === j || ((n === B || n === V) && r === R))
          (w = H),
            (h -=
              (u && E === C && C.visualViewport
                ? C.visualViewport.width
                : E[L]) - i.width),
            (h *= l ? 1 : -1);
      }
      var P,
        k = Object.assign({ position: a }, c && ae),
        I =
          !0 === d
            ? (function (e) {
                var t = e.x,
                  s = e.y,
                  i = window.devicePixelRatio || 1;
                return { x: x(t * i) / i || 0, y: x(s * i) / i || 0 };
              })({ x: h, y: m })
            : { x: h, y: m };
      return (
        (h = I.x),
        (m = I.y),
        l
          ? Object.assign(
              {},
              k,
              (((P = {})[S] = b ? "0" : ""),
              (P[w] = y ? "0" : ""),
              (P.transform =
                (C.devicePixelRatio || 1) <= 1
                  ? "translate(" + h + "px, " + m + "px)"
                  : "translate3d(" + h + "px, " + m + "px, 0)"),
              P)
            )
          : Object.assign(
              {},
              k,
              (((t = {})[S] = b ? m + "px" : ""),
              (t[w] = y ? h + "px" : ""),
              (t.transform = ""),
              t)
            )
      );
    }
    const ce = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var s = t.styles[e] || {},
            i = t.attributes[e] || {},
            n = t.elements[e];
          y(n) &&
            T(n) &&
            (Object.assign(n.style, s),
            Object.keys(i).forEach(function (e) {
              var t = i[e];
              !1 === t
                ? n.removeAttribute(e)
                : n.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          s = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, s.popper),
          (t.styles = s),
          t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var i = t.elements[e],
                n = t.attributes[e] || {},
                r = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {});
              y(i) &&
                T(i) &&
                (Object.assign(i.style, r),
                Object.keys(n).forEach(function (e) {
                  i.removeAttribute(e);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    const de = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          s = e.options,
          i = e.name,
          n = s.offset,
          r = void 0 === n ? [0, 0] : n,
          o = X.reduce(function (e, s) {
            return (
              (e[s] = (function (e, t, s) {
                var i = ie(e),
                  n = [j, B].indexOf(i) >= 0 ? -1 : 1,
                  r =
                    "function" == typeof s
                      ? s(Object.assign({}, t, { placement: e }))
                      : s,
                  o = r[0],
                  a = r[1];
                return (
                  (o = o || 0),
                  (a = (a || 0) * n),
                  [j, H].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
                );
              })(s, t.rects, r)),
              e
            );
          }, {}),
          a = o[t.placement],
          l = a.x,
          c = a.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += l),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[i] = o);
      },
    };
    var ue = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function pe(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return ue[e];
      });
    }
    var he = { start: "end", end: "start" };
    function fe(e) {
      return e.replace(/start|end/g, function (e) {
        return he[e];
      });
    }
    function me(e, t) {
      var s = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (s && b(s)) {
        var i = t;
        do {
          if (i && e.isSameNode(i)) return !0;
          i = i.parentNode || i.host;
        } while (i);
      }
      return !1;
    }
    function ge(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function ve(e, t) {
      return t === U
        ? ge(
            (function (e) {
              var t = g(e),
                s = O(e),
                i = t.visualViewport,
                n = s.clientWidth,
                r = s.clientHeight,
                o = 0,
                a = 0;
              return (
                i &&
                  ((n = i.width),
                  (r = i.height),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                    ((o = i.offsetLeft), (a = i.offsetTop))),
                { width: n, height: r, x: o + L(e), y: a }
              );
            })(e)
          )
        : v(t)
        ? (function (e) {
            var t = C(e);
            return (
              (t.top = t.top + e.clientTop),
              (t.left = t.left + e.clientLeft),
              (t.bottom = t.top + e.clientHeight),
              (t.right = t.left + e.clientWidth),
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            );
          })(t)
        : ge(
            (function (e) {
              var t,
                s = O(e),
                i = E(e),
                n = null == (t = e.ownerDocument) ? void 0 : t.body,
                r = w(
                  s.scrollWidth,
                  s.clientWidth,
                  n ? n.scrollWidth : 0,
                  n ? n.clientWidth : 0
                ),
                o = w(
                  s.scrollHeight,
                  s.clientHeight,
                  n ? n.scrollHeight : 0,
                  n ? n.clientHeight : 0
                ),
                a = -i.scrollLeft + L(e),
                l = -i.scrollTop;
              return (
                "rtl" === A(n || s).direction &&
                  (a += w(s.clientWidth, n ? n.clientWidth : 0) - r),
                { width: r, height: o, x: a, y: l }
              );
            })(O(e))
          );
    }
    function ye(e, t, s) {
      var i =
          "clippingParents" === t
            ? (function (e) {
                var t = $(M(e)),
                  s =
                    ["absolute", "fixed"].indexOf(A(e).position) >= 0 && y(e)
                      ? N(e)
                      : e;
                return v(s)
                  ? t.filter(function (e) {
                      return v(e) && me(e, s) && "body" !== T(e);
                    })
                  : [];
              })(e)
            : [].concat(t),
        n = [].concat(i, [s]),
        r = n[0],
        o = n.reduce(function (t, s) {
          var i = ve(e, s);
          return (
            (t.top = w(i.top, t.top)),
            (t.right = S(i.right, t.right)),
            (t.bottom = S(i.bottom, t.bottom)),
            (t.left = w(i.left, t.left)),
            t
          );
        }, ve(e, r));
      return (
        (o.width = o.right - o.left),
        (o.height = o.bottom - o.top),
        (o.x = o.left),
        (o.y = o.top),
        o
      );
    }
    function be(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function we(e, t) {
      return t.reduce(function (t, s) {
        return (t[s] = e), t;
      }, {});
    }
    function Se(e, t) {
      void 0 === t && (t = {});
      var s = t,
        i = s.placement,
        n = void 0 === i ? e.placement : i,
        r = s.boundary,
        o = void 0 === r ? "clippingParents" : r,
        a = s.rootBoundary,
        l = void 0 === a ? U : a,
        c = s.elementContext,
        d = void 0 === c ? W : c,
        u = s.altBoundary,
        p = void 0 !== u && u,
        h = s.padding,
        f = void 0 === h ? 0 : h,
        m = be("number" != typeof f ? f : we(f, G)),
        g = d === W ? "reference" : W,
        y = e.rects.popper,
        b = e.elements[p ? g : d],
        w = ye(v(b) ? b : b.contextElement || O(e.elements.popper), o, l),
        S = C(e.elements.reference),
        x = oe({
          reference: S,
          element: y,
          strategy: "absolute",
          placement: n,
        }),
        E = ge(Object.assign({}, y, x)),
        T = d === W ? E : S,
        L = {
          top: w.top - T.top + m.top,
          bottom: T.bottom - w.bottom + m.bottom,
          left: w.left - T.left + m.left,
          right: T.right - w.right + m.right,
        },
        A = e.modifiersData.offset;
      if (d === W && A) {
        var P = A[n];
        Object.keys(L).forEach(function (e) {
          var t = [H, V].indexOf(e) >= 0 ? 1 : -1,
            s = [B, V].indexOf(e) >= 0 ? "y" : "x";
          L[e] += P[s] * t;
        });
      }
      return L;
    }
    function xe(e, t, s) {
      return w(e, S(t, s));
    }
    const Ce = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          s = e.options,
          i = e.name,
          n = s.mainAxis,
          r = void 0 === n || n,
          o = s.altAxis,
          a = void 0 !== o && o,
          l = s.boundary,
          c = s.rootBoundary,
          d = s.altBoundary,
          u = s.padding,
          p = s.tether,
          h = void 0 === p || p,
          f = s.tetherOffset,
          m = void 0 === f ? 0 : f,
          g = Se(t, {
            boundary: l,
            rootBoundary: c,
            padding: u,
            altBoundary: d,
          }),
          v = ie(t.placement),
          y = ne(t.placement),
          b = !y,
          x = re(v),
          C = "x" === x ? "y" : "x",
          E = t.modifiersData.popperOffsets,
          T = t.rects.reference,
          O = t.rects.popper,
          L =
            "function" == typeof m
              ? m(Object.assign({}, t.rects, { placement: t.placement }))
              : m,
          A =
            "number" == typeof L
              ? { mainAxis: L, altAxis: L }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
          P = t.modifiersData.offset
            ? t.modifiersData.offset[t.placement]
            : null,
          k = { x: 0, y: 0 };
        if (E) {
          if (r) {
            var M,
              _ = "y" === x ? B : j,
              $ = "y" === x ? V : H,
              D = "y" === x ? "height" : "width",
              z = E[x],
              q = z + g[_],
              G = z - g[$],
              R = h ? -O[D] / 2 : 0,
              U = y === F ? T[D] : O[D],
              W = y === F ? -O[D] : -T[D],
              Y = t.elements.arrow,
              X = h && Y ? I(Y) : { width: 0, height: 0 },
              K = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              Z = K[_],
              Q = K[$],
              J = xe(0, T[D], X[D]),
              ee = b
                ? T[D] / 2 - R - J - Z - A.mainAxis
                : U - J - Z - A.mainAxis,
              te = b
                ? -T[D] / 2 + R + J + Q + A.mainAxis
                : W + J + Q + A.mainAxis,
              se = t.elements.arrow && N(t.elements.arrow),
              oe = se
                ? "y" === x
                  ? se.clientTop || 0
                  : se.clientLeft || 0
                : 0,
              ae = null != (M = null == P ? void 0 : P[x]) ? M : 0,
              le = z + te - ae,
              ce = xe(h ? S(q, z + ee - ae - oe) : q, z, h ? w(G, le) : G);
            (E[x] = ce), (k[x] = ce - z);
          }
          if (a) {
            var de,
              ue = "x" === x ? B : j,
              pe = "x" === x ? V : H,
              he = E[C],
              fe = "y" === C ? "height" : "width",
              me = he + g[ue],
              ge = he - g[pe],
              ve = -1 !== [B, j].indexOf(v),
              ye = null != (de = null == P ? void 0 : P[C]) ? de : 0,
              be = ve ? me : he - T[fe] - O[fe] - ye + A.altAxis,
              we = ve ? he + T[fe] + O[fe] - ye - A.altAxis : ge,
              Ce =
                h && ve
                  ? (function (e, t, s) {
                      var i = xe(e, t, s);
                      return i > s ? s : i;
                    })(be, he, we)
                  : xe(h ? be : me, he, h ? we : ge);
            (E[C] = Ce), (k[C] = Ce - he);
          }
          t.modifiersData[i] = k;
        }
      },
      requiresIfExists: ["offset"],
    };
    const Ee = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          s = e.state,
          i = e.name,
          n = e.options,
          r = s.elements.arrow,
          o = s.modifiersData.popperOffsets,
          a = ie(s.placement),
          l = re(a),
          c = [j, H].indexOf(a) >= 0 ? "height" : "width";
        if (r && o) {
          var d = (function (e, t) {
              return be(
                "number" !=
                  typeof (e =
                    "function" == typeof e
                      ? e(
                          Object.assign({}, t.rects, { placement: t.placement })
                        )
                      : e)
                  ? e
                  : we(e, G)
              );
            })(n.padding, s),
            u = I(r),
            p = "y" === l ? B : j,
            h = "y" === l ? V : H,
            f =
              s.rects.reference[c] +
              s.rects.reference[l] -
              o[l] -
              s.rects.popper[c],
            m = o[l] - s.rects.reference[l],
            g = N(r),
            v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            y = f / 2 - m / 2,
            b = d[p],
            w = v - u[c] - d[h],
            S = v / 2 - u[c] / 2 + y,
            x = xe(b, S, w),
            C = l;
          s.modifiersData[i] = (((t = {})[C] = x), (t.centerOffset = x - S), t);
        }
      },
      effect: function (e) {
        var t = e.state,
          s = e.options.element,
          i = void 0 === s ? "[data-popper-arrow]" : s;
        null != i &&
          ("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
          me(t.elements.popper, i) &&
          (t.elements.arrow = i);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function Te(e, t, s) {
      return (
        void 0 === s && (s = { x: 0, y: 0 }),
        {
          top: e.top - t.height - s.y,
          right: e.right - t.width + s.x,
          bottom: e.bottom - t.height + s.y,
          left: e.left - t.width - s.x,
        }
      );
    }
    function Oe(e) {
      return [B, H, V, j].some(function (t) {
        return e[t] >= 0;
      });
    }
    var Le = ee({
        defaultModifiers: [
          se,
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                s = e.name;
              t.modifiersData[s] = oe({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                s = e.options,
                i = s.gpuAcceleration,
                n = void 0 === i || i,
                r = s.adaptive,
                o = void 0 === r || r,
                a = s.roundOffsets,
                l = void 0 === a || a,
                c = {
                  placement: ie(t.placement),
                  variation: ne(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: n,
                  isFixed: "fixed" === t.options.strategy,
                };
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  le(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: o,
                      roundOffsets: l,
                    })
                  )
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    le(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: l,
                      })
                    )
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                }));
            },
            data: {},
          },
          ce,
          de,
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                s = e.options,
                i = e.name;
              if (!t.modifiersData[i]._skip) {
                for (
                  var n = s.mainAxis,
                    r = void 0 === n || n,
                    o = s.altAxis,
                    a = void 0 === o || o,
                    l = s.fallbackPlacements,
                    c = s.padding,
                    d = s.boundary,
                    u = s.rootBoundary,
                    p = s.altBoundary,
                    h = s.flipVariations,
                    f = void 0 === h || h,
                    m = s.allowedAutoPlacements,
                    g = t.options.placement,
                    v = ie(g),
                    y =
                      l ||
                      (v === g || !f
                        ? [pe(g)]
                        : (function (e) {
                            if (ie(e) === q) return [];
                            var t = pe(e);
                            return [fe(e), t, fe(t)];
                          })(g)),
                    b = [g].concat(y).reduce(function (e, s) {
                      return e.concat(
                        ie(s) === q
                          ? (function (e, t) {
                              void 0 === t && (t = {});
                              var s = t,
                                i = s.placement,
                                n = s.boundary,
                                r = s.rootBoundary,
                                o = s.padding,
                                a = s.flipVariations,
                                l = s.allowedAutoPlacements,
                                c = void 0 === l ? X : l,
                                d = ne(i),
                                u = d
                                  ? a
                                    ? Y
                                    : Y.filter(function (e) {
                                        return ne(e) === d;
                                      })
                                  : G,
                                p = u.filter(function (e) {
                                  return c.indexOf(e) >= 0;
                                });
                              0 === p.length && (p = u);
                              var h = p.reduce(function (t, s) {
                                return (
                                  (t[s] = Se(e, {
                                    placement: s,
                                    boundary: n,
                                    rootBoundary: r,
                                    padding: o,
                                  })[ie(s)]),
                                  t
                                );
                              }, {});
                              return Object.keys(h).sort(function (e, t) {
                                return h[e] - h[t];
                              });
                            })(t, {
                              placement: s,
                              boundary: d,
                              rootBoundary: u,
                              padding: c,
                              flipVariations: f,
                              allowedAutoPlacements: m,
                            })
                          : s
                      );
                    }, []),
                    w = t.rects.reference,
                    S = t.rects.popper,
                    x = new Map(),
                    C = !0,
                    E = b[0],
                    T = 0;
                  T < b.length;
                  T++
                ) {
                  var O = b[T],
                    L = ie(O),
                    A = ne(O) === F,
                    P = [B, V].indexOf(L) >= 0,
                    k = P ? "width" : "height",
                    I = Se(t, {
                      placement: O,
                      boundary: d,
                      rootBoundary: u,
                      altBoundary: p,
                      padding: c,
                    }),
                    M = P ? (A ? H : j) : A ? V : B;
                  w[k] > S[k] && (M = pe(M));
                  var _ = pe(M),
                    $ = [];
                  if (
                    (r && $.push(I[L] <= 0),
                    a && $.push(I[M] <= 0, I[_] <= 0),
                    $.every(function (e) {
                      return e;
                    }))
                  ) {
                    (E = O), (C = !1);
                    break;
                  }
                  x.set(O, $);
                }
                if (C)
                  for (
                    var D = function (e) {
                        var t = b.find(function (t) {
                          var s = x.get(t);
                          if (s)
                            return s.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (E = t), "break";
                      },
                      z = f ? 3 : 1;
                    z > 0;
                    z--
                  ) {
                    if ("break" === D(z)) break;
                  }
                t.placement !== E &&
                  ((t.modifiersData[i]._skip = !0),
                  (t.placement = E),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          Ce,
          Ee,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                s = e.name,
                i = t.rects.reference,
                n = t.rects.popper,
                r = t.modifiersData.preventOverflow,
                o = Se(t, { elementContext: "reference" }),
                a = Se(t, { altBoundary: !0 }),
                l = Te(o, i),
                c = Te(a, n, r),
                d = Oe(l),
                u = Oe(c);
              (t.modifiersData[s] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: d,
                hasPopperEscaped: u,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": d,
                  "data-popper-escaped": u,
                }));
            },
          },
        ],
      }),
      Ae = "tippy-content",
      Pe = "tippy-backdrop",
      ke = "tippy-arrow",
      Ie = "tippy-svg-arrow",
      Me = { passive: !0, capture: !0 },
      _e = function () {
        return document.body;
      };
    function $e(e, t, s) {
      if (Array.isArray(e)) {
        var i = e[t];
        return null == i ? (Array.isArray(s) ? s[t] : s) : i;
      }
      return e;
    }
    function De(e, t) {
      var s = {}.toString.call(e);
      return 0 === s.indexOf("[object") && s.indexOf(t + "]") > -1;
    }
    function ze(e, t) {
      return "function" == typeof e ? e.apply(void 0, t) : e;
    }
    function Ne(e, t) {
      return 0 === t
        ? e
        : function (i) {
            clearTimeout(s),
              (s = setTimeout(function () {
                e(i);
              }, t));
          };
      var s;
    }
    function Be(e) {
      return [].concat(e);
    }
    function Ve(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function He(e) {
      return e.split("-")[0];
    }
    function je(e) {
      return [].slice.call(e);
    }
    function qe(e) {
      return Object.keys(e).reduce(function (t, s) {
        return void 0 !== e[s] && (t[s] = e[s]), t;
      }, {});
    }
    function Ge() {
      return document.createElement("div");
    }
    function Fe(e) {
      return ["Element", "Fragment"].some(function (t) {
        return De(e, t);
      });
    }
    function Re(e) {
      return De(e, "MouseEvent");
    }
    function Ue(e) {
      return !(!e || !e._tippy || e._tippy.reference !== e);
    }
    function We(e) {
      return Fe(e)
        ? [e]
        : (function (e) {
            return De(e, "NodeList");
          })(e)
        ? je(e)
        : Array.isArray(e)
        ? e
        : je(document.querySelectorAll(e));
    }
    function Ye(e, t) {
      e.forEach(function (e) {
        e && (e.style.transitionDuration = t + "ms");
      });
    }
    function Xe(e, t) {
      e.forEach(function (e) {
        e && e.setAttribute("data-state", t);
      });
    }
    function Ke(e) {
      var t,
        s = Be(e)[0];
      return null != s && null != (t = s.ownerDocument) && t.body
        ? s.ownerDocument
        : document;
    }
    function Ze(e, t, s) {
      var i = t + "EventListener";
      ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e[i](t, s);
      });
    }
    function Qe(e, t) {
      for (var s = t; s; ) {
        var i;
        if (e.contains(s)) return !0;
        s =
          null == s.getRootNode || null == (i = s.getRootNode())
            ? void 0
            : i.host;
      }
      return !1;
    }
    var Je = { isTouch: !1 },
      et = 0;
    function tt() {
      Je.isTouch ||
        ((Je.isTouch = !0),
        window.performance && document.addEventListener("mousemove", st));
    }
    function st() {
      var e = performance.now();
      e - et < 20 &&
        ((Je.isTouch = !1), document.removeEventListener("mousemove", st)),
        (et = e);
    }
    function it() {
      var e = document.activeElement;
      if (Ue(e)) {
        var t = e._tippy;
        e.blur && !t.state.isVisible && e.blur();
      }
    }
    var nt =
      !!("undefined" != typeof window && "undefined" != typeof document) &&
      !!window.msCrypto;
    var rt = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1,
      },
      ot = Object.assign(
        {
          appendTo: _e,
          aria: { content: "auto", expanded: "auto" },
          delay: 0,
          duration: [300, 250],
          getReferenceClientRect: null,
          hideOnClick: !0,
          ignoreAttributes: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [0, 10],
          onAfterUpdate: function () {},
          onBeforeUpdate: function () {},
          onCreate: function () {},
          onDestroy: function () {},
          onHidden: function () {},
          onHide: function () {},
          onMount: function () {},
          onShow: function () {},
          onShown: function () {},
          onTrigger: function () {},
          onUntrigger: function () {},
          onClickOutside: function () {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: !1,
          touch: !0,
          trigger: "mouseenter focus",
          triggerTarget: null,
        },
        rt,
        {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999,
        }
      ),
      at = Object.keys(ot);
    function lt(e) {
      var t = (e.plugins || []).reduce(function (t, s) {
        var i,
          n = s.name,
          r = s.defaultValue;
        n && (t[n] = void 0 !== e[n] ? e[n] : null != (i = ot[n]) ? i : r);
        return t;
      }, {});
      return Object.assign({}, e, t);
    }
    function ct(e, t) {
      var s = Object.assign(
        {},
        t,
        { content: ze(t.content, [e]) },
        t.ignoreAttributes
          ? {}
          : (function (e, t) {
              return (
                t ? Object.keys(lt(Object.assign({}, ot, { plugins: t }))) : at
              ).reduce(function (t, s) {
                var i = (e.getAttribute("data-tippy-" + s) || "").trim();
                if (!i) return t;
                if ("content" === s) t[s] = i;
                else
                  try {
                    t[s] = JSON.parse(i);
                  } catch (e) {
                    t[s] = i;
                  }
                return t;
              }, {});
            })(e, t.plugins)
      );
      return (
        (s.aria = Object.assign({}, ot.aria, s.aria)),
        (s.aria = {
          expanded:
            "auto" === s.aria.expanded ? t.interactive : s.aria.expanded,
          content:
            "auto" === s.aria.content
              ? t.interactive
                ? null
                : "describedby"
              : s.aria.content,
        }),
        s
      );
    }
    function dt(e, t) {
      e.innerHTML = t;
    }
    function ut(e) {
      var t = Ge();
      return (
        !0 === e
          ? (t.className = ke)
          : ((t.className = Ie), Fe(e) ? t.appendChild(e) : dt(t, e)),
        t
      );
    }
    function pt(e, t) {
      Fe(t.content)
        ? (dt(e, ""), e.appendChild(t.content))
        : "function" != typeof t.content &&
          (t.allowHTML ? dt(e, t.content) : (e.textContent = t.content));
    }
    function ht(e) {
      var t = e.firstElementChild,
        s = je(t.children);
      return {
        box: t,
        content: s.find(function (e) {
          return e.classList.contains(Ae);
        }),
        arrow: s.find(function (e) {
          return e.classList.contains(ke) || e.classList.contains(Ie);
        }),
        backdrop: s.find(function (e) {
          return e.classList.contains(Pe);
        }),
      };
    }
    function ft(e) {
      var t = Ge(),
        s = Ge();
      (s.className = "tippy-box"),
        s.setAttribute("data-state", "hidden"),
        s.setAttribute("tabindex", "-1");
      var i = Ge();
      function n(s, i) {
        var n = ht(t),
          r = n.box,
          o = n.content,
          a = n.arrow;
        i.theme
          ? r.setAttribute("data-theme", i.theme)
          : r.removeAttribute("data-theme"),
          "string" == typeof i.animation
            ? r.setAttribute("data-animation", i.animation)
            : r.removeAttribute("data-animation"),
          i.inertia
            ? r.setAttribute("data-inertia", "")
            : r.removeAttribute("data-inertia"),
          (r.style.maxWidth =
            "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
          i.role ? r.setAttribute("role", i.role) : r.removeAttribute("role"),
          (s.content === i.content && s.allowHTML === i.allowHTML) ||
            pt(o, e.props),
          i.arrow
            ? a
              ? s.arrow !== i.arrow &&
                (r.removeChild(a), r.appendChild(ut(i.arrow)))
              : r.appendChild(ut(i.arrow))
            : a && r.removeChild(a);
      }
      return (
        (i.className = Ae),
        i.setAttribute("data-state", "hidden"),
        pt(i, e.props),
        t.appendChild(s),
        s.appendChild(i),
        n(e.props, e.props),
        { popper: t, onUpdate: n }
      );
    }
    ft.$$tippy = !0;
    var mt = 1,
      gt = [],
      vt = [];
    function yt(e, t) {
      var s,
        i,
        n,
        r,
        o,
        a,
        l,
        c,
        d = ct(e, Object.assign({}, ot, lt(qe(t)))),
        u = !1,
        p = !1,
        h = !1,
        f = !1,
        m = [],
        g = Ne(W, d.interactiveDebounce),
        v = mt++,
        y = (c = d.plugins).filter(function (e, t) {
          return c.indexOf(e) === t;
        }),
        b = {
          id: v,
          reference: e,
          popper: Ge(),
          popperInstance: null,
          props: d,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
          },
          plugins: y,
          clearDelayTimeouts: function () {
            clearTimeout(s), clearTimeout(i), cancelAnimationFrame(n);
          },
          setProps: function (t) {
            0;
            if (b.state.isDestroyed) return;
            _("onBeforeUpdate", [b, t]), R();
            var s = b.props,
              i = ct(e, Object.assign({}, s, qe(t), { ignoreAttributes: !0 }));
            (b.props = i),
              F(),
              s.interactiveDebounce !== i.interactiveDebounce &&
                (z(), (g = Ne(W, i.interactiveDebounce)));
            s.triggerTarget && !i.triggerTarget
              ? Be(s.triggerTarget).forEach(function (e) {
                  e.removeAttribute("aria-expanded");
                })
              : i.triggerTarget && e.removeAttribute("aria-expanded");
            D(), M(), x && x(s, i);
            b.popperInstance &&
              (Z(),
              J().forEach(function (e) {
                requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
              }));
            _("onAfterUpdate", [b, t]);
          },
          setContent: function (e) {
            b.setProps({ content: e });
          },
          show: function () {
            0;
            var e = b.state.isVisible,
              t = b.state.isDestroyed,
              s = !b.state.isEnabled,
              i = Je.isTouch && !b.props.touch,
              n = $e(b.props.duration, 0, ot.duration);
            if (e || t || s || i) return;
            if (A().hasAttribute("disabled")) return;
            if ((_("onShow", [b], !1), !1 === b.props.onShow(b))) return;
            (b.state.isVisible = !0), L() && (S.style.visibility = "visible");
            M(), H(), b.state.isMounted || (S.style.transition = "none");
            if (L()) {
              var r = k(),
                o = r.box,
                l = r.content;
              Ye([o, l], 0);
            }
            (a = function () {
              var e;
              if (b.state.isVisible && !f) {
                if (
                  ((f = !0),
                  S.offsetHeight,
                  (S.style.transition = b.props.moveTransition),
                  L() && b.props.animation)
                ) {
                  var t = k(),
                    s = t.box,
                    i = t.content;
                  Ye([s, i], n), Xe([s, i], "visible");
                }
                $(),
                  D(),
                  Ve(vt, b),
                  null == (e = b.popperInstance) || e.forceUpdate(),
                  _("onMount", [b]),
                  b.props.animation &&
                    L() &&
                    (function (e, t) {
                      q(e, t);
                    })(n, function () {
                      (b.state.isShown = !0), _("onShown", [b]);
                    });
              }
            }),
              (function () {
                var e,
                  t = b.props.appendTo,
                  s = A();
                e =
                  (b.props.interactive && t === _e) || "parent" === t
                    ? s.parentNode
                    : ze(t, [s]);
                e.contains(S) || e.appendChild(S);
                (b.state.isMounted = !0), Z(), !1;
              })();
          },
          hide: function () {
            0;
            var e = !b.state.isVisible,
              t = b.state.isDestroyed,
              s = !b.state.isEnabled,
              i = $e(b.props.duration, 1, ot.duration);
            if (e || t || s) return;
            if ((_("onHide", [b], !1), !1 === b.props.onHide(b))) return;
            (b.state.isVisible = !1),
              (b.state.isShown = !1),
              (f = !1),
              (u = !1),
              L() && (S.style.visibility = "hidden");
            if ((z(), j(), M(!0), L())) {
              var n = k(),
                r = n.box,
                o = n.content;
              b.props.animation && (Ye([r, o], i), Xe([r, o], "hidden"));
            }
            $(),
              D(),
              b.props.animation
                ? L() &&
                  (function (e, t) {
                    q(e, function () {
                      !b.state.isVisible &&
                        S.parentNode &&
                        S.parentNode.contains(S) &&
                        t();
                    });
                  })(i, b.unmount)
                : b.unmount();
          },
          hideWithInteractivity: function (e) {
            0;
            P().addEventListener("mousemove", g), Ve(gt, g), g(e);
          },
          enable: function () {
            b.state.isEnabled = !0;
          },
          disable: function () {
            b.hide(), (b.state.isEnabled = !1);
          },
          unmount: function () {
            0;
            b.state.isVisible && b.hide();
            if (!b.state.isMounted) return;
            Q(),
              J().forEach(function (e) {
                e._tippy.unmount();
              }),
              S.parentNode && S.parentNode.removeChild(S);
            (vt = vt.filter(function (e) {
              return e !== b;
            })),
              (b.state.isMounted = !1),
              _("onHidden", [b]);
          },
          destroy: function () {
            0;
            if (b.state.isDestroyed) return;
            b.clearDelayTimeouts(),
              b.unmount(),
              R(),
              delete e._tippy,
              (b.state.isDestroyed = !0),
              _("onDestroy", [b]);
          },
        };
      if (!d.render) return b;
      var w = d.render(b),
        S = w.popper,
        x = w.onUpdate;
      S.setAttribute("data-tippy-root", ""),
        (S.id = "tippy-" + b.id),
        (b.popper = S),
        (e._tippy = b),
        (S._tippy = b);
      var C = y.map(function (e) {
          return e.fn(b);
        }),
        E = e.hasAttribute("aria-expanded");
      return (
        F(),
        D(),
        M(),
        _("onCreate", [b]),
        d.showOnCreate && ee(),
        S.addEventListener("mouseenter", function () {
          b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
        }),
        S.addEventListener("mouseleave", function () {
          b.props.interactive &&
            b.props.trigger.indexOf("mouseenter") >= 0 &&
            P().addEventListener("mousemove", g);
        }),
        b
      );
      function T() {
        var e = b.props.touch;
        return Array.isArray(e) ? e : [e, 0];
      }
      function O() {
        return "hold" === T()[0];
      }
      function L() {
        var e;
        return !(null == (e = b.props.render) || !e.$$tippy);
      }
      function A() {
        return l || e;
      }
      function P() {
        var e = A().parentNode;
        return e ? Ke(e) : document;
      }
      function k() {
        return ht(S);
      }
      function I(e) {
        return (b.state.isMounted && !b.state.isVisible) ||
          Je.isTouch ||
          (r && "focus" === r.type)
          ? 0
          : $e(b.props.delay, e ? 0 : 1, ot.delay);
      }
      function M(e) {
        void 0 === e && (e = !1),
          (S.style.pointerEvents = b.props.interactive && !e ? "" : "none"),
          (S.style.zIndex = "" + b.props.zIndex);
      }
      function _(e, t, s) {
        var i;
        (void 0 === s && (s = !0),
        C.forEach(function (s) {
          s[e] && s[e].apply(s, t);
        }),
        s) && (i = b.props)[e].apply(i, t);
      }
      function $() {
        var t = b.props.aria;
        if (t.content) {
          var s = "aria-" + t.content,
            i = S.id;
          Be(b.props.triggerTarget || e).forEach(function (e) {
            var t = e.getAttribute(s);
            if (b.state.isVisible) e.setAttribute(s, t ? t + " " + i : i);
            else {
              var n = t && t.replace(i, "").trim();
              n ? e.setAttribute(s, n) : e.removeAttribute(s);
            }
          });
        }
      }
      function D() {
        !E &&
          b.props.aria.expanded &&
          Be(b.props.triggerTarget || e).forEach(function (e) {
            b.props.interactive
              ? e.setAttribute(
                  "aria-expanded",
                  b.state.isVisible && e === A() ? "true" : "false"
                )
              : e.removeAttribute("aria-expanded");
          });
      }
      function z() {
        P().removeEventListener("mousemove", g),
          (gt = gt.filter(function (e) {
            return e !== g;
          }));
      }
      function N(t) {
        if (!Je.isTouch || (!h && "mousedown" !== t.type)) {
          var s = (t.composedPath && t.composedPath()[0]) || t.target;
          if (!b.props.interactive || !Qe(S, s)) {
            if (
              Be(b.props.triggerTarget || e).some(function (e) {
                return Qe(e, s);
              })
            ) {
              if (Je.isTouch) return;
              if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
                return;
            } else _("onClickOutside", [b, t]);
            !0 === b.props.hideOnClick &&
              (b.clearDelayTimeouts(),
              b.hide(),
              (p = !0),
              setTimeout(function () {
                p = !1;
              }),
              b.state.isMounted || j());
          }
        }
      }
      function B() {
        h = !0;
      }
      function V() {
        h = !1;
      }
      function H() {
        var e = P();
        e.addEventListener("mousedown", N, !0),
          e.addEventListener("touchend", N, Me),
          e.addEventListener("touchstart", V, Me),
          e.addEventListener("touchmove", B, Me);
      }
      function j() {
        var e = P();
        e.removeEventListener("mousedown", N, !0),
          e.removeEventListener("touchend", N, Me),
          e.removeEventListener("touchstart", V, Me),
          e.removeEventListener("touchmove", B, Me);
      }
      function q(e, t) {
        var s = k().box;
        function i(e) {
          e.target === s && (Ze(s, "remove", i), t());
        }
        if (0 === e) return t();
        Ze(s, "remove", o), Ze(s, "add", i), (o = i);
      }
      function G(t, s, i) {
        void 0 === i && (i = !1),
          Be(b.props.triggerTarget || e).forEach(function (e) {
            e.addEventListener(t, s, i),
              m.push({ node: e, eventType: t, handler: s, options: i });
          });
      }
      function F() {
        O() &&
          (G("touchstart", U, { passive: !0 }),
          G("touchend", Y, { passive: !0 })),
          (function (e) {
            return e.split(/\s+/).filter(Boolean);
          })(b.props.trigger).forEach(function (e) {
            if ("manual" !== e)
              switch ((G(e, U), e)) {
                case "mouseenter":
                  G("mouseleave", Y);
                  break;
                case "focus":
                  G(nt ? "focusout" : "blur", X);
                  break;
                case "focusin":
                  G("focusout", X);
              }
          });
      }
      function R() {
        m.forEach(function (e) {
          var t = e.node,
            s = e.eventType,
            i = e.handler,
            n = e.options;
          t.removeEventListener(s, i, n);
        }),
          (m = []);
      }
      function U(e) {
        var t,
          s = !1;
        if (b.state.isEnabled && !K(e) && !p) {
          var i = "focus" === (null == (t = r) ? void 0 : t.type);
          (r = e),
            (l = e.currentTarget),
            D(),
            !b.state.isVisible &&
              Re(e) &&
              gt.forEach(function (t) {
                return t(e);
              }),
            "click" === e.type &&
            (b.props.trigger.indexOf("mouseenter") < 0 || u) &&
            !1 !== b.props.hideOnClick &&
            b.state.isVisible
              ? (s = !0)
              : ee(e),
            "click" === e.type && (u = !s),
            s && !i && te(e);
        }
      }
      function W(e) {
        var t = e.target,
          s = A().contains(t) || S.contains(t);
        if ("mousemove" !== e.type || !s) {
          var i = J()
            .concat(S)
            .map(function (e) {
              var t,
                s = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
              return s
                ? {
                    popperRect: e.getBoundingClientRect(),
                    popperState: s,
                    props: d,
                  }
                : null;
            })
            .filter(Boolean);
          (function (e, t) {
            var s = t.clientX,
              i = t.clientY;
            return e.every(function (e) {
              var t = e.popperRect,
                n = e.popperState,
                r = e.props.interactiveBorder,
                o = He(n.placement),
                a = n.modifiersData.offset;
              if (!a) return !0;
              var l = "bottom" === o ? a.top.y : 0,
                c = "top" === o ? a.bottom.y : 0,
                d = "right" === o ? a.left.x : 0,
                u = "left" === o ? a.right.x : 0,
                p = t.top - i + l > r,
                h = i - t.bottom - c > r,
                f = t.left - s + d > r,
                m = s - t.right - u > r;
              return p || h || f || m;
            });
          })(i, e) && (z(), te(e));
        }
      }
      function Y(e) {
        K(e) ||
          (b.props.trigger.indexOf("click") >= 0 && u) ||
          (b.props.interactive ? b.hideWithInteractivity(e) : te(e));
      }
      function X(e) {
        (b.props.trigger.indexOf("focusin") < 0 && e.target !== A()) ||
          (b.props.interactive &&
            e.relatedTarget &&
            S.contains(e.relatedTarget)) ||
          te(e);
      }
      function K(e) {
        return !!Je.isTouch && O() !== e.type.indexOf("touch") >= 0;
      }
      function Z() {
        Q();
        var t = b.props,
          s = t.popperOptions,
          i = t.placement,
          n = t.offset,
          r = t.getReferenceClientRect,
          o = t.moveTransition,
          l = L() ? ht(S).arrow : null,
          c = r
            ? {
                getBoundingClientRect: r,
                contextElement: r.contextElement || A(),
              }
            : e,
          d = {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (e) {
              var t = e.state;
              if (L()) {
                var s = k().box;
                ["placement", "reference-hidden", "escaped"].forEach(function (
                  e
                ) {
                  "placement" === e
                    ? s.setAttribute("data-placement", t.placement)
                    : t.attributes.popper["data-popper-" + e]
                    ? s.setAttribute("data-" + e, "")
                    : s.removeAttribute("data-" + e);
                }),
                  (t.attributes.popper = {});
              }
            },
          },
          u = [
            { name: "offset", options: { offset: n } },
            {
              name: "preventOverflow",
              options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
            },
            { name: "flip", options: { padding: 5 } },
            { name: "computeStyles", options: { adaptive: !o } },
            d,
          ];
        L() &&
          l &&
          u.push({ name: "arrow", options: { element: l, padding: 3 } }),
          u.push.apply(u, (null == s ? void 0 : s.modifiers) || []),
          (b.popperInstance = Le(
            c,
            S,
            Object.assign({}, s, {
              placement: i,
              onFirstUpdate: a,
              modifiers: u,
            })
          ));
      }
      function Q() {
        b.popperInstance &&
          (b.popperInstance.destroy(), (b.popperInstance = null));
      }
      function J() {
        return je(S.querySelectorAll("[data-tippy-root]"));
      }
      function ee(e) {
        b.clearDelayTimeouts(), e && _("onTrigger", [b, e]), H();
        var t = I(!0),
          i = T(),
          n = i[0],
          r = i[1];
        Je.isTouch && "hold" === n && r && (t = r),
          t
            ? (s = setTimeout(function () {
                b.show();
              }, t))
            : b.show();
      }
      function te(e) {
        if (
          (b.clearDelayTimeouts(), _("onUntrigger", [b, e]), b.state.isVisible)
        ) {
          if (
            !(
              b.props.trigger.indexOf("mouseenter") >= 0 &&
              b.props.trigger.indexOf("click") >= 0 &&
              ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
              u
            )
          ) {
            var t = I(!1);
            t
              ? (i = setTimeout(function () {
                  b.state.isVisible && b.hide();
                }, t))
              : (n = requestAnimationFrame(function () {
                  b.hide();
                }));
          }
        } else j();
      }
    }
    function bt(e, t) {
      void 0 === t && (t = {});
      var s = ot.plugins.concat(t.plugins || []);
      document.addEventListener("touchstart", tt, Me),
        window.addEventListener("blur", it);
      var i = Object.assign({}, t, { plugins: s }),
        n = We(e).reduce(function (e, t) {
          var s = t && yt(t, i);
          return s && e.push(s), e;
        }, []);
      return Fe(e) ? n[0] : n;
    }
    (bt.defaultProps = ot),
      (bt.setDefaultProps = function (e) {
        Object.keys(e).forEach(function (t) {
          ot[t] = e[t];
        });
      }),
      (bt.currentInput = Je);
    Object.assign({}, ce, {
      effect: function (e) {
        var t = e.state,
          s = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(t.elements.popper.style, s.popper),
          (t.styles = s),
          t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow);
      },
    });
    bt.setDefaultProps({ render: ft });
    function wt(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function St(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : wt(t[s]) &&
            wt(e[s]) &&
            Object.keys(t[s]).length > 0 &&
            St(e[s], t[s]);
      });
    }
    bt("[data-tippy-content]", {});
    const xt = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function Ct() {
      const e = "undefined" != typeof document ? document : {};
      return St(e, xt), e;
    }
    const Et = {
      document: xt,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function Tt() {
      const e = "undefined" != typeof window ? window : {};
      return St(e, Et), e;
    }
    class Ot extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function Lt(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...Lt(e)) : t.push(e);
        }),
        t
      );
    }
    function At(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function Pt(e, t) {
      const s = Tt(),
        i = Ct();
      let n = [];
      if (!t && e instanceof Ot) return e;
      if (!e) return new Ot(n);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof Ot) return e;
        n = e;
      }
      return new Ot(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(n)
      );
    }
    Pt.fn = Ot.prototype;
    const kt = "resize scroll".split(" ");
    function It(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            kt.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : Pt(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    It("click"),
      It("blur"),
      It("focus"),
      It("focusin"),
      It("focusout"),
      It("keyup"),
      It("keydown"),
      It("keypress"),
      It("submit"),
      It("change"),
      It("mousedown"),
      It("mousemove"),
      It("mouseup"),
      It("mouseenter"),
      It("mouseleave"),
      It("mouseout"),
      It("mouseover"),
      It("touchstart"),
      It("touchend"),
      It("touchmove"),
      It("resize"),
      It("scroll");
    const Mt = {
      addClass: function (...e) {
        const t = Lt(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = Lt(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = Lt(e.map((e) => e.split(" ")));
        return (
          At(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = Lt(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, i, n] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), Pt(t).is(s))) i.apply(t, n);
          else {
            const e = Pt(t).parents();
            for (let t = 0; t < e.length; t += 1)
              Pt(e[t]).is(s) && i.apply(e[t], n);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, i, n] = e;
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!s && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const s = o[e];
                (i && s.listener === i) ||
                (i &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === i)
                  ? (r.removeEventListener(t, s.proxyListener, n),
                    o.splice(e, 1))
                  : i ||
                    (r.removeEventListener(t, s.proxyListener, n),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = Tt(),
          s = e[0].split(" "),
          i = e[1];
        for (let n = 0; n < s.length; n += 1) {
          const r = s[n];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(s),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = Tt();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = Tt(),
            t = Ct(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            r = s.clientTop || n.clientTop || 0,
            o = s.clientLeft || n.clientLeft || 0,
            a = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + a - r, left: i.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const s = Tt();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = Tt(),
          s = Ct(),
          i = this[0];
        let n, r;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (n = Pt(e), r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof Ot) {
          for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return Pt([]);
        if (e < 0) {
          const s = t + e;
          return Pt(s < 0 ? [] : [this[s]]);
        }
        return Pt([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = Ct();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = s.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof Ot)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = Ct();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof Ot)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && Pt(this[0].nextElementSibling).is(e)
              ? Pt([this[0].nextElementSibling])
              : Pt([])
            : this[0].nextElementSibling
            ? Pt([this[0].nextElementSibling])
            : Pt([])
          : Pt([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return Pt([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? Pt(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return Pt(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && Pt(t.previousElementSibling).is(e)
              ? Pt([t.previousElementSibling])
              : Pt([])
            : t.previousElementSibling
            ? Pt([t.previousElementSibling])
            : Pt([]);
        }
        return Pt([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return Pt([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? Pt(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return Pt(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? Pt(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return Pt(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? Pt(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return Pt(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? Pt([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return Pt(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].children;
          for (let s = 0; s < i.length; s += 1)
            (e && !Pt(i[s]).is(e)) || t.push(i[s]);
        }
        return Pt(t);
      },
      filter: function (e) {
        return Pt(At(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(Mt).forEach((e) => {
      Object.defineProperty(Pt.fn, e, { value: Mt[e], writable: !0 });
    });
    const _t = Pt;
    function $t(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function Dt() {
      return Date.now();
    }
    function zt(e, t) {
      void 0 === t && (t = "x");
      const s = Tt();
      let i, n, r;
      const o = (function (e) {
        const t = Tt();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = o.transform || o.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function Nt(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function Bt(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function Vt() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != i && !Bt(i)) {
          const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, n = s.length; t < n; t += 1) {
            const n = s[t],
              r = Object.getOwnPropertyDescriptor(i, n);
            void 0 !== r &&
              r.enumerable &&
              (Nt(e[n]) && Nt(i[n])
                ? i[n].__swiper__
                  ? (e[n] = i[n])
                  : Vt(e[n], i[n])
                : !Nt(e[n]) && Nt(i[n])
                ? ((e[n] = {}),
                  i[n].__swiper__ ? (e[n] = i[n]) : Vt(e[n], i[n]))
                : (e[n] = i[n]));
          }
        }
      }
      return e;
    }
    function Ht(e, t, s) {
      e.style.setProperty(t, s);
    }
    function jt(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const n = Tt(),
        r = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > r ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + c * (s - r);
          if ((d(p, s) && (p = s), t.wrapperEl.scrollTo({ [i]: p }), d(p, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    let qt, Gt, Ft;
    function Rt() {
      return (
        qt ||
          (qt = (function () {
            const e = Tt(),
              t = Ct();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        qt
      );
    }
    function Ut(e) {
      return (
        void 0 === e && (e = {}),
        Gt ||
          (Gt = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = Rt(),
              i = Tt(),
              n = i.navigator.platform,
              r = t || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = i.screen.width,
              l = i.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === n;
            let f = "MacIntel" === n;
            return (
              !d &&
                f &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((d = r.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (f = !1)),
              c && !h && ((o.os = "android"), (o.android = !0)),
              (d || p || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        Gt
      );
    }
    function Wt() {
      return (
        Ft ||
          (Ft = (function () {
            const e = Tt();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        Ft
      );
    }
    const Yt = {
      on(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        function n() {
          i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
          for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
            r[o] = arguments[o];
          t.apply(i, r);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
          : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const Xt = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && i.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = n.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const h = [],
          f = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let b = i.spaceBetween,
          w = -m,
          S = 0,
          x = 0;
        if (void 0 === r) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * r),
          (e.virtualSize = -b),
          o
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (Ht(e.wrapperEl, "--swiper-centered-offset-before", ""),
            Ht(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        C && e.grid.initSlides(u);
        const T =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < u; n += 1) {
          E = 0;
          const o = d.eq(n);
          if (
            (C && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              T && (d[n].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  i = s(r, "padding-right"),
                  n = s(r, "margin-left"),
                  a = s(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + n + a;
                else {
                  const { clientWidth: s, offsetWidth: r } = o[0];
                  E = e + t + i + n + a + (r - s);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                d[n] && (d[n].style[t("width")] = `${E}px`);
            d[n] && (d[n].swiperSlideSize = E),
              f.push(E),
              i.centeredSlides
                ? ((w = w + E / 2 + S / 2 + b),
                  0 === S && 0 !== n && (w = w - r / 2 - b),
                  0 === n && (w = w - r / 2 - b),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  x % i.slidesPerGroup == 0 && p.push(w),
                  h.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  h.push(w),
                  (w = w + E + b)),
              (e.virtualSize += E + b),
              (S = E),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          o &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(E, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let n = p[s];
            i.roundLengths && (n = Math.floor(n)),
              p[s] <= e.virtualSize - r && t.push(n);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
            [s]: `${b}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          Ht(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            Ht(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          u <= i.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(o(e));
            }
        else s.push(o(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        n && (o = e),
          i.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let l = a.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
          const c =
              (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            d =
              (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            u = -(o - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(s.slideVisibleClass)),
            (a.progress = n ? -c : c),
            (a.originalProgress = n ? -d : d);
        }
        t.visibleSlides = _t(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === i
          ? ((n = 0), (r = !0), (o = !0))
          : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (o = n >= 1)),
          Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: r,
          } = e,
          o = e.virtual && s.virtual.enabled;
        let a;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${n}"]`
              )
            : t.eq(n)),
          a.addClass(s.slideActiveClass),
          s.loop &&
            (a.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = a.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let c = a.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: n,
            params: r,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (d = e)
                : s >= i[e] && s < i[e + 1] && (d = e + 1)
              : s >= i[e] && (d = e);
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (n.indexOf(s) >= 0) c = n.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((c >= n.length && (c = n.length - 1), d === o))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: o,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = _t(e).closest(`.${s.slideClass}`)[0];
        let n,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (n = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                _t(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const Kt = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: s,
          translate: i,
          $wrapperEl: n,
        } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = zt(n[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: i,
            params: n,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = s;
        let l,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = i ? -e : e) : (d = e),
          n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          n.cssMode
            ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : n.virtualTranslate ||
              r.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const u = s.maxTranslate() - s.minTranslate();
        (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
          l !== a && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = i && e > l ? l : i && e < c ? c : e),
          r.updateProgress(d),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                jt({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function Zt(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
      const { activeIndex: r, previousIndex: o } = t;
      let a = i;
      if (
        (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit(`transition${n}`),
        s && r !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === a
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    const Qt = {
      slideTo: function (e, t, s, i, n) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!f && !i && !n)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, o);
        let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || a.initialSlide || 0) === (d || 0) &&
            s &&
            r.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((r.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (o = e)
                : t >= s && t < i && (o = e + 1)
              : t >= s && (o = e);
          }
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          ((y = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== y && (r.transitionStart(s, y), r.transitionEnd(s, y)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                jt({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, y),
          0 === t
            ? r.transitionEnd(s, y)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, y));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0);
        const n = this;
        let r = e;
        return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: n, enabled: r, params: o } = i;
        if (!r) return i;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (n && o.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return o.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: n,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = i;
        if (!c) return i;
        if (n.loop) {
          if (r && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? i.translate : -i.translate),
          p = o.map((e) => d(e));
        let h = o[p.indexOf(u) - 1];
        if (void 0 === h && n.cssMode) {
          let e;
          o.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = a.indexOf(h)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return i.slideTo(f, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const n = this;
        let r = n.activeIndex;
        const o = Math.min(n.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[a]) {
          const e = n.snapGrid[a];
          l - e > (n.snapGrid[a + 1] - e) * i && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[a - 1];
          l - e <= (n.snapGrid[a] - e) * i && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            _t(e.clickedSlide).attr("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  $t(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                $t(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const Jt = {
      loopCreate: function () {
        const e = this,
          t = Ct(),
          { params: s, $wrapperEl: i } = e,
          n = i.children().length > 0 ? _t(i.children()[0].parentNode) : i;
        n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = n.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = _t(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              n.append(e);
            }
            r = n.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((t, s) => {
          const i = _t(t);
          s < e.loopedSlides && a.push(t),
            s < r.length && s >= r.length - e.loopedSlides && o.push(t),
            i.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < a.length; e += 1)
          n.append(_t(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          n.prepend(_t(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: i,
          allowSlidePrev: n,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -o[t] - e.getTranslate();
        if (t < i) {
          (l = s.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= s.length - i) {
          (l = -s.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function es(e) {
      const t = this,
        s = Ct(),
        i = Tt(),
        n = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = _t(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === l.type),
        !n.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!n.isTouchEvent && "button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = _t(e.path[0]));
      const d = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  return s && s !== Ct() && s !== Tt()
                    ? (s.assignedSlot && (s = s.assignedSlot),
                      s.closest(e) || t(s.getRootNode().host))
                    : null;
                })(t)
              );
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = o.currentX,
        h = o.currentY,
        f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (f && (p <= m || p >= i.innerWidth - m)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = p),
        (o.startY = h),
        (n.touchStartTime = Dt()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(n.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
          s.activeElement &&
            _t(s.activeElement).is(n.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const i = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function ts(e) {
      const t = Ct(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: r, rtlTranslate: o, enabled: a } = s;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          _t(l.target).is(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (i.touchStartTime = Dt()))
          )
        );
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < r.startX && s.translate <= s.maxTranslate()) ||
          (d > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        _t(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = u);
      const p = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
        i.isMoved ||
          (n.loop && !n.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (i.isMoved = !0);
      let f = s.isHorizontal() ? p : h;
      (r.diff = f),
        (f *= n.touchRatio),
        o && (f = -f),
        (s.swipeDirection = f > 0 ? "prev" : "next"),
        (i.currentTranslate = f + i.startTranslate);
      let m = !0,
        g = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (g = 0),
        f > 0 && i.currentTranslate > s.minTranslate()
          ? ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + f) ** g))
          : f < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - f) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(f) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function ss(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: i,
          touches: n,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = Dt(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = Dt()),
        $t(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      let f = null,
        m = null;
      i.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (u - o[p]) / h,
        v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (d > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? f : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function is() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function ns(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function rs() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let os = !1;
    function as() {}
    const ls = (e, t) => {
      const s = Ct(),
        {
          params: i,
          touchEvents: n,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](n.start, e.onTouchStart, t),
          r[d](
            n.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[d](n.end, e.onTouchEnd, t),
          n.cancel && r[d](n.cancel, e.onTouchEnd, t);
      } else
        r[d](n.start, e.onTouchStart, !1),
          s[d](n.move, e.onTouchMove, c),
          s[d](n.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        i.cssMode && o[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              is,
              !0
            )
          : e[u]("observerUpdate", is, !0);
    };
    const cs = {
        attachEvents: function () {
          const e = this,
            t = Ct(),
            { params: s, support: i } = e;
          (e.onTouchStart = es.bind(e)),
            (e.onTouchMove = ts.bind(e)),
            (e.onTouchEnd = ss.bind(e)),
            s.cssMode && (e.onScroll = rs.bind(e)),
            (e.onClick = ns.bind(e)),
            i.touch && !os && (t.addEventListener("touchstart", as), (os = !0)),
            ls(e, "on");
        },
        detachEvents: function () {
          ls(this, "off");
        },
      },
      ds = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const us = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: r,
          } = e,
          o = n.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          c = ds(e, n),
          d = ds(e, l),
          u = n.enabled;
        c && !d
          ? (r.removeClass(
              `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (r.addClass(`${n.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === n.grid.fill)) &&
              r.addClass(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== n.direction,
          h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
        p && s && e.changeDirection(), Vt(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let i = !1;
        const n = Tt(),
          r = "window" === t ? n.innerHeight : s.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = r)
            : a <= s.clientWidth && (i = r);
        }
        return i || "max";
      },
    };
    const ps = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: r,
            support: o,
          } = e,
          a = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const hs = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function fs(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                Vt(t, s))
              : Vt(t, s))
          : Vt(t, s);
      };
    }
    const ms = {
        eventsEmitter: Yt,
        update: Xt,
        translate: Kt,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              Zt({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                Zt({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Qt,
        loop: Jt,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: cs,
        breakpoints: us,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ps,
        images: {
          loadImage: function (e, t, s, i, n, r) {
            const o = Tt();
            let a;
            function l() {
              r && r();
            }
            _t(e).parent("picture")[0] || (e.complete && n)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                i && (a.sizes = i),
                s && (a.srcset = s),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const i = e.imagesToLoad[s];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      gs = {};
    class vs {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
          i[n] = arguments[n];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = Vt({}, t)),
          e && !t.el && (t.el = e),
          t.el && _t(t.el).length > 1)
        ) {
          const e = [];
          return (
            _t(t.el).each((s) => {
              const i = Vt({}, t, { el: s });
              e.push(new vs(i));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = Rt()),
          (r.device = Ut({ userAgent: t.userAgent })),
          (r.browser = Wt()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const o = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: fs(t, o),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const a = Vt({}, hs, o);
        return (
          (r.params = Vt({}, a, gs, t)),
          (r.originalParams = Vt({}, r.params)),
          (r.passedParams = Vt({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = _t),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: _t(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: Dt(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let s = a + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let s = a - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            n[a] - n[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${i}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = _t(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = _t(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(i());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = Ct().createElement("div");
          (n = _t(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, $el: n, $wrapperEl: r, slides: o } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        Vt(gs, e);
      }
      static get extendedDefaults() {
        return gs;
      }
      static get defaults() {
        return hs;
      }
      static installModule(e) {
        vs.prototype.__modules__ || (vs.prototype.__modules__ = []);
        const t = vs.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => vs.installModule(e)), vs)
          : (vs.installModule(e), vs);
      }
    }
    Object.keys(ms).forEach((e) => {
      Object.keys(ms[e]).forEach((t) => {
        vs.prototype[t] = ms[e][t];
      });
    }),
      vs.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const n = Tt();
          let r = null,
            o = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  o = n.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let n = s,
                      r = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: o } = e;
                      (o && o !== t.el) ||
                        ((n = i ? i.width : (s[0] || s).inlineSize),
                        (r = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (n === s && r === i) || a();
                  });
                })),
                r.observe(t.el))
              : (n.addEventListener("resize", a),
                n.addEventListener("orientationchange", l));
          }),
            s("destroy", () => {
              o && n.cancelAnimationFrame(o),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                n.removeEventListener("resize", a),
                n.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: n } = e;
          const r = [],
            o = Tt(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const s = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(s);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.$el[0], { childList: t.params.observeSlideChildren }),
                  a(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const ys = vs;
    function bs(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function ws(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const r = "swiper-pagination";
      let o;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let a = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
      }
      function d() {
        const e = t.rtl,
          s = t.params.pagination;
        if (l()) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let d;
        const u = t.params.loop
          ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((d = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              d > i - 1 - 2 * t.loopedSlides && (d -= i - 2 * t.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let n, l, u;
          if (
            (s.dynamicBullets &&
              ((o = i
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                o * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                a > s.dynamicMainBullets - 1
                  ? (a = s.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (n = Math.max(d - a, 0)),
              (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (l + n) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            i.each((e) => {
              const t = _t(e),
                i = t.index();
              i === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (i >= n &&
                    i <= l &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  i === n && c(t, "prev"),
                  i === l && c(t, "next"));
            });
          else {
            const e = i.eq(d),
              r = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = i.eq(n),
                o = i.eq(l);
              for (let e = n; e <= l; e += 1)
                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= i.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                  i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(o, "next");
              else c(e, "prev"), c(o, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (o * n - o) / 2 - u * o,
              a = e ? "right" : "left";
            i.css(t.isHorizontal() ? a : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (r.find(bs(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            r.find(bs(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (d + 1) / u;
          let n = 1,
            o = 1;
          "horizontal" === e ? (n = i) : (o = i),
            r
              .find(bs(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${o})`)
              .transition(t.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (r.html(s.renderCustom(t, d + 1, u)), n("paginationRender", r[0]))
          : n("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          i = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let n = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            n > s &&
            (n = s);
          for (let s = 0; s < n; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          i.html(r), (t.pagination.bullets = i.find(bs(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = (function (e, t, s, i) {
          const n = Ct();
          return (
            e.params.createElements &&
              Object.keys(i).forEach((r) => {
                if (!s[r] && !0 === s.auto) {
                  let o = e.$el.children(`.${i[r]}`)[0];
                  o ||
                    ((o = n.createElement("div")),
                    (o.className = i[r]),
                    e.$el.append(o)),
                    (s[r] = o),
                    (t[r] = o);
                }
              }),
            s
          );
        })(t, t.originalParams.pagination, t.params.pagination, {
          el: "swiper-pagination",
        });
        const e = t.params.pagination;
        if (!e.el) return;
        let s = _t(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => _t(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (a = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on("click", bs(e.bulletClass), function (e) {
              e.preventDefault();
              let s = _t(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function h() {
        const e = t.params.pagination;
        if (l()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", bs(e.bulletClass));
      }
      i("init", () => {
        p(), u(), d();
      }),
        i("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && d();
        }),
        i("snapIndexChange", () => {
          t.params.loop || d();
        }),
        i("slidesLengthChange", () => {
          t.params.loop && (u(), d());
        }),
        i("snapGridLengthChange", () => {
          t.params.loop || (u(), d());
        }),
        i("destroy", () => {
          h();
        }),
        i("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        i("lock unlock", () => {
          d();
        }),
        i("click", (e, s) => {
          const i = s.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r.length > 0 &&
            !_t(i).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            n(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: u,
          update: d,
          init: p,
          destroy: h,
        });
    }
    function Ss(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ parallax: { enabled: !1 } });
      const n = (e, s) => {
          const { rtl: i } = t,
            n = _t(e),
            r = i ? -1 : 1,
            o = n.attr("data-swiper-parallax") || "0";
          let a = n.attr("data-swiper-parallax-x"),
            l = n.attr("data-swiper-parallax-y");
          const c = n.attr("data-swiper-parallax-scale"),
            d = n.attr("data-swiper-parallax-opacity");
          if (
            (a || l
              ? ((a = a || "0"), (l = l || "0"))
              : t.isHorizontal()
              ? ((a = o), (l = "0"))
              : ((l = o), (a = "0")),
            (a =
              a.indexOf("%") >= 0
                ? parseInt(a, 10) * s * r + "%"
                : a * s * r + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
          ) {
            const e = d - (d - 1) * (1 - Math.abs(s));
            n[0].style.opacity = e;
          }
          if (null == c) n.transform(`translate3d(${a}, ${l}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            n.transform(`translate3d(${a}, ${l}, 0px) scale(${e})`);
          }
        },
        r = () => {
          const { $el: e, slides: s, progress: i, snapGrid: r } = t;
          e
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((e) => {
              n(e, i);
            }),
            s.each((e, s) => {
              let o = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (o += Math.ceil(s / 2) - i * (r.length - 1)),
                (o = Math.min(Math.max(o, -1), 1)),
                _t(e)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    n(e, o);
                  });
            });
        };
      i("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        i("init", () => {
          t.params.parallax.enabled && r();
        }),
        i("setTranslate", () => {
          t.params.parallax.enabled && r();
        }),
        i("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { $el: s } = t;
              s.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((t) => {
                const s = _t(t);
                let i =
                  parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (i = 0), s.transition(i);
              });
            })(s);
        });
    }
    function xs(e) {
      let t,
        { swiper: s, extendParams: i, on: n, emit: r } = e;
      function o() {
        const e = s.slides.eq(s.activeIndex);
        let i = s.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (i = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
          clearTimeout(t),
          (t = $t(() => {
            let e;
            s.params.autoplay.reverseDirection
              ? s.params.loop
                ? (s.loopFix(),
                  (e = s.slidePrev(s.params.speed, !0, !0)),
                  r("autoplay"))
                : s.isBeginning
                ? s.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = s.slideTo(
                      s.slides.length - 1,
                      s.params.speed,
                      !0,
                      !0
                    )),
                    r("autoplay"))
                : ((e = s.slidePrev(s.params.speed, !0, !0)), r("autoplay"))
              : s.params.loop
              ? (s.loopFix(),
                (e = s.slideNext(s.params.speed, !0, !0)),
                r("autoplay"))
              : s.isEnd
              ? s.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = s.slideTo(0, s.params.speed, !0, !0)), r("autoplay"))
              : ((e = s.slideNext(s.params.speed, !0, !0)), r("autoplay")),
              ((s.params.cssMode && s.autoplay.running) || !1 === e) && o();
          }, i));
      }
      function a() {
        return (
          void 0 === t &&
          !s.autoplay.running &&
          ((s.autoplay.running = !0), r("autoplayStart"), o(), !0)
        );
      }
      function l() {
        return (
          !!s.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (s.autoplay.running = !1),
          r("autoplayStop"),
          !0)
        );
      }
      function c(e) {
        s.autoplay.running &&
          (s.autoplay.paused ||
            (t && clearTimeout(t),
            (s.autoplay.paused = !0),
            0 !== e && s.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  s.$wrapperEl[0].addEventListener(e, u);
                })
              : ((s.autoplay.paused = !1), o())));
      }
      function d() {
        const e = Ct();
        "hidden" === e.visibilityState && s.autoplay.running && c(),
          "visible" === e.visibilityState &&
            s.autoplay.paused &&
            (o(), (s.autoplay.paused = !1));
      }
      function u(e) {
        s &&
          !s.destroyed &&
          s.$wrapperEl &&
          e.target === s.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, u);
          }),
          (s.autoplay.paused = !1),
          s.autoplay.running ? o() : l());
      }
      function p() {
        s.params.autoplay.disableOnInteraction
          ? l()
          : (r("autoplayPause"), c()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function h() {
        s.params.autoplay.disableOnInteraction ||
          ((s.autoplay.paused = !1), r("autoplayResume"), o());
      }
      (s.autoplay = { running: !1, paused: !1 }),
        i({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        n("init", () => {
          if (s.params.autoplay.enabled) {
            a();
            Ct().addEventListener("visibilitychange", d),
              s.params.autoplay.pauseOnMouseEnter &&
                (s.$el.on("mouseenter", p), s.$el.on("mouseleave", h));
          }
        }),
        n("beforeTransitionStart", (e, t, i) => {
          s.autoplay.running &&
            (i || !s.params.autoplay.disableOnInteraction
              ? s.autoplay.pause(t)
              : l());
        }),
        n("sliderFirstMove", () => {
          s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction ? l() : c());
        }),
        n("touchEnd", () => {
          s.params.cssMode &&
            s.autoplay.paused &&
            !s.params.autoplay.disableOnInteraction &&
            o();
        }),
        n("destroy", () => {
          s.$el.off("mouseenter", p),
            s.$el.off("mouseleave", h),
            s.autoplay.running && l();
          Ct().removeEventListener("visibilitychange", d);
        }),
        Object.assign(s.autoplay, { pause: c, run: o, start: a, stop: l });
    }
    function Cs(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let n = !1,
        r = !1;
      function o() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          i = e.clickedSlide;
        if (i && _t(i).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let n;
        if (
          ((n = e.params.loop
            ? parseInt(_t(e.clickedSlide).attr("data-swiper-slide-index"), 10)
            : s),
          t.params.loop)
        ) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
            (t.loopFix(),
            (t._clientLeft = t.$wrapperEl[0].clientLeft),
            (e = t.activeIndex));
          const s = t.slides
              .eq(e)
              .prevAll(`[data-swiper-slide-index="${n}"]`)
              .eq(0)
              .index(),
            i = t.slides
              .eq(e)
              .nextAll(`[data-swiper-slide-index="${n}"]`)
              .eq(0)
              .index();
          n = void 0 === s ? i : void 0 === i ? s : i - e < e - s ? i : s;
        }
        t.slideTo(n);
      }
      function a() {
        const { thumbs: e } = t.params;
        if (n) return !1;
        n = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (Nt(e.swiper)) {
          const i = Object.assign({}, e.swiper);
          Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(i)),
            (r = !0);
        }
        return (
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on("tap", o),
          !0
        );
      }
      function l(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const i =
            "auto" === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView,
          n = t.params.thumbs.autoScrollOffset,
          r = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || r) {
          let o,
            a,
            l = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(l).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (l = s.activeIndex));
            const e = s.slides
                .eq(l)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              i = s.slides
                .eq(l)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            (o =
              void 0 === e
                ? i
                : void 0 === i
                ? e
                : i - l == l - e
                ? s.params.slidesPerGroup > 1
                  ? i
                  : l
                : i - l < l - e
                ? i
                : e),
              (a = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (o = t.realIndex), (a = o > t.previousIndex ? "next" : "prev");
          r && (o += "next" === a ? n : -1 * n),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(o) < 0 &&
              (s.params.centeredSlides
                ? (o =
                    o > l
                      ? o - Math.floor(i / 2) + 1
                      : o + Math.floor(i / 2) - 1)
                : o > l && s.params.slidesPerGroup,
              s.slideTo(o, e ? 0 : void 0));
        }
        let o = 1;
        const a = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (o = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (o = 1),
          (o = Math.floor(o)),
          s.slides.removeClass(a),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < o; e += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(a);
        else
          for (let e = 0; e < o; e += 1)
            s.slides.eq(t.realIndex + e).addClass(a);
      }
      (t.thumbs = { swiper: null }),
        i("beforeInit", () => {
          const { thumbs: e } = t.params;
          e && e.swiper && (a(), l(!0));
        }),
        i("slideChange update resize observerUpdate", () => {
          l();
        }),
        i("setTransition", (e, s) => {
          const i = t.thumbs.swiper;
          i && !i.destroyed && i.setTransition(s);
        }),
        i("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy();
        }),
        Object.assign(t.thumbs, { init: a, update: l });
    }
    function Es(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function Ts(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ fadeEffect: { crossFade: !1, transformEl: null } });
      !(function (e) {
        const {
          effect: t,
          swiper: s,
          on: i,
          setTranslate: n,
          setTransition: r,
          overwriteParams: o,
          perspective: a,
        } = e;
        let l;
        i("beforeInit", () => {
          if (s.params.effect !== t) return;
          s.classNames.push(`${s.params.containerModifierClass}${t}`),
            a &&
              a() &&
              s.classNames.push(`${s.params.containerModifierClass}3d`);
          const e = o ? o() : {};
          Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }),
          i("setTranslate", () => {
            s.params.effect === t && n();
          }),
          i("setTransition", (e, i) => {
            s.params.effect === t && r(i);
          }),
          i("virtualUpdate", () => {
            s.slides.length || (l = !0),
              requestAnimationFrame(() => {
                l && s.slides && s.slides.length && (n(), (l = !1));
              });
          });
      })({
        effect: "fade",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { slides: e } = t,
            s = t.params.fadeEffect;
          for (let i = 0; i < e.length; i += 1) {
            const e = t.slides.eq(i);
            let n = -e[0].swiperSlideOffset;
            t.params.virtualTranslate || (n -= t.translate);
            let r = 0;
            t.isHorizontal() || ((r = n), (n = 0));
            const o = t.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(e[0].progress), 0)
              : 1 + Math.min(Math.max(e[0].progress, -1), 0);
            Es(s, e)
              .css({ opacity: o })
              .transform(`translate3d(${n}px, ${r}px, 0px)`);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.fadeEffect;
          (s ? t.slides.find(s) : t.slides).transition(e),
            (function (e) {
              let { swiper: t, duration: s, transformEl: i, allSlides: n } = e;
              const { slides: r, activeIndex: o, $wrapperEl: a } = t;
              if (t.params.virtualTranslate && 0 !== s) {
                let e,
                  s = !1;
                (e = n ? (i ? r.find(i) : r) : i ? r.eq(o).find(i) : r.eq(o)),
                  e.transitionEnd(() => {
                    if (s) return;
                    if (!t || t.destroyed) return;
                    (s = !0), (t.animating = !1);
                    const e = ["webkitTransitionEnd", "transitionend"];
                    for (let t = 0; t < e.length; t += 1) a.trigger(e[t]);
                  });
              }
            })({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    }
    function Os() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      !(function () {
        if (
          (Os(),
          document.querySelector(".content-mainblock__slider") &&
            new ys(".content-mainblock__slider", {
              modules: [ws, xs, Ss],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 30,
              speed: 800,
              parallax: !0,
              loop: !0,
              pagination: {
                el: ".content-mainblock__pagination",
                clickable: !0,
              },
              on: {
                init: function (e) {
                  const t = document.querySelectorAll(
                    ".slide-content-mainblock:not(.swiper-slide-duplicate)"
                  );
                  document.querySelector(
                    ".fraction-content__slides-amount"
                  ).innerHTML = t.length;
                },
                activeIndexChange: function (e) {
                  document.querySelector(
                    ".fraction-content__slide-index"
                  ).innerHTML =
                    1 + e.realIndex < 10
                      ? `0${1 + e.realIndex}`
                      : 1 + e.realIndex;
                },
              },
            }),
          document.querySelector(".product-slider__slider") &&
            new ys(".product-slider__slider", {
              modules: [ws, xs],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 4,
              spaceBetween: 30,
              speed: 800,
              loop: !0,
              pagination: { el: ".product-slider__dots", clickable: !0 },
              breakpoints: {
                320: { slidesPerView: 1, autoHeight: !0 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 20 },
                1268: { slidesPerView: 4, spaceBetween: 30 },
              },
              on: {},
            }),
          document.querySelector(".slider-new-bg__slider") &&
            new ys(".slider-new-bg__slider", {
              modules: [ws, xs],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 3,
              spaceBetween: 30,
              speed: 800,
              loop: !0,
              pagination: { el: ".slider-new-bg__dotts", clickable: !0 },
              breakpoints: {
                320: { autoHeight: !0, slidesPerView: 1, autoHeight: !0 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1315: { slidesPerView: 3, spaceBetween: 30 },
              },
              on: {},
            }),
          document.querySelector(".thumbs-slider"))
        )
          var e = new ys(".thumbs-slider", {
            modules: [xs],
            slidesPerView: 4,
            observer: !0,
            observeParents: !0,
            spaceBetween: 15,
            speed: 800,
            on: {},
          });
        document.querySelector(".slider-main") &&
          new ys(".slider-main", {
            modules: [xs, Cs, Ts],
            effect: "fade",
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            thumbs: { swiper: e },
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            on: {},
          });
      })();
    });
    let Ls = !1;
    setTimeout(() => {
      if (Ls) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var As = function () {
      return (
        (As =
          Object.assign ||
          function (e) {
            for (var t, s = 1, i = arguments.length; s < i; s++)
              for (var n in (t = arguments[s]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
        As.apply(this, arguments)
      );
    };
    var Ps = "lgAfterAppendSlide",
      ks = "lgInit",
      Is = "lgHasVideo",
      Ms = "lgContainerResize",
      _s = "lgUpdateSlides",
      $s = "lgAfterAppendSubHtml",
      Ds = "lgBeforeOpen",
      zs = "lgAfterOpen",
      Ns = "lgSlideItemLoad",
      Bs = "lgBeforeSlide",
      Vs = "lgAfterSlide",
      Hs = "lgPosterClick",
      js = "lgDragStart",
      qs = "lgDragMove",
      Gs = "lgDragEnd",
      Fs = "lgBeforeNextSlide",
      Rs = "lgBeforePrevSlide",
      Us = "lgBeforeClose",
      Ws = "lgAfterClose",
      Ys = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
        },
      };
    var Xs = (function () {
      function e(e) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(e)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (e.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            }
          );
        }),
        (e.prototype._getSelector = function (e, t) {
          return (
            void 0 === t && (t = document),
            "string" != typeof e
              ? e
              : ((t = t || document),
                "#" === e.substring(0, 1)
                  ? t.querySelector(e)
                  : t.querySelectorAll(e))
          );
        }),
        (e.prototype._each = function (e) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, e)
                : e(this.selector, 0),
              this)
            : this;
        }),
        (e.prototype._setCssVendorPrefix = function (e, t, s) {
          var i = t.replace(/-([a-z])/gi, function (e, t) {
            return t.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(i)
            ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
              (e.style["webkit" + i] = s),
              (e.style["moz" + i] = s),
              (e.style["ms" + i] = s),
              (e.style["o" + i] = s))
            : (e.style[i] = s);
        }),
        (e.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (e.prototype.isEventMatched = function (e, t) {
          var s = t.split(".");
          return e
            .split(".")
            .filter(function (e) {
              return e;
            })
            .every(function (e) {
              return -1 !== s.indexOf(e);
            });
        }),
        (e.prototype.attr = function (e, t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.getAttribute(e)
              : ""
            : (this._each(function (s) {
                s.setAttribute(e, t);
              }),
              this);
        }),
        (e.prototype.find = function (e) {
          return Ks(this._getSelector(e, this.selector));
        }),
        (e.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? Ks(this.selector[0])
            : Ks(this.selector);
        }),
        (e.prototype.eq = function (e) {
          return Ks(this.selector[e]);
        }),
        (e.prototype.parent = function () {
          return Ks(this.selector.parentElement);
        }),
        (e.prototype.get = function () {
          return this._getFirstEl();
        }),
        (e.prototype.removeAttr = function (e) {
          var t = e.split(" ");
          return (
            this._each(function (e) {
              t.forEach(function (t) {
                return e.removeAttribute(t);
              });
            }),
            this
          );
        }),
        (e.prototype.wrap = function (e) {
          if (!this.firstElement) return this;
          var t = document.createElement("div");
          return (
            (t.className = e),
            this.firstElement.parentNode.insertBefore(t, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            t.appendChild(this.firstElement),
            this
          );
        }),
        (e.prototype.addClass = function (e) {
          return (
            void 0 === e && (e = ""),
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.add(e);
              });
            }),
            this
          );
        }),
        (e.prototype.removeClass = function (e) {
          return (
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.remove(e);
              });
            }),
            this
          );
        }),
        (e.prototype.hasClass = function (e) {
          return !!this.firstElement && this.firstElement.classList.contains(e);
        }),
        (e.prototype.hasAttribute = function (e) {
          return !!this.firstElement && this.firstElement.hasAttribute(e);
        }),
        (e.prototype.toggleClass = function (e) {
          return this.firstElement
            ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
            : this;
        }),
        (e.prototype.css = function (e, t) {
          var s = this;
          return (
            this._each(function (i) {
              s._setCssVendorPrefix(i, e, t);
            }),
            this
          );
        }),
        (e.prototype.on = function (t, s) {
          var i = this;
          return this.selector
            ? (t.split(" ").forEach(function (t) {
                Array.isArray(e.eventListeners[t]) ||
                  (e.eventListeners[t] = []),
                  e.eventListeners[t].push(s),
                  i.selector.addEventListener(t.split(".")[0], s);
              }),
              this)
            : this;
        }),
        (e.prototype.once = function (e, t) {
          var s = this;
          return (
            this.on(e, function () {
              s.off(e), t(e);
            }),
            this
          );
        }),
        (e.prototype.off = function (t) {
          var s = this;
          return this.selector
            ? (Object.keys(e.eventListeners).forEach(function (i) {
                s.isEventMatched(t, i) &&
                  (e.eventListeners[i].forEach(function (e) {
                    s.selector.removeEventListener(i.split(".")[0], e);
                  }),
                  (e.eventListeners[i] = []));
              }),
              this)
            : this;
        }),
        (e.prototype.trigger = function (e, t) {
          if (!this.firstElement) return this;
          var s = new CustomEvent(e.split(".")[0], { detail: t || null });
          return this.firstElement.dispatchEvent(s), this;
        }),
        (e.prototype.load = function (e) {
          var t = this;
          return (
            fetch(e)
              .then(function (e) {
                return e.text();
              })
              .then(function (e) {
                t.selector.innerHTML = e;
              }),
            this
          );
        }),
        (e.prototype.html = function (e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (t) {
                t.innerHTML = e;
              }),
              this);
        }),
        (e.prototype.append = function (e) {
          return (
            this._each(function (t) {
              "string" == typeof e
                ? t.insertAdjacentHTML("beforeend", e)
                : t.appendChild(e);
            }),
            this
          );
        }),
        (e.prototype.prepend = function (e) {
          return (
            this._each(function (t) {
              t.insertAdjacentHTML("afterbegin", e);
            }),
            this
          );
        }),
        (e.prototype.remove = function () {
          return (
            this._each(function (e) {
              e.parentNode.removeChild(e);
            }),
            this
          );
        }),
        (e.prototype.empty = function () {
          return (
            this._each(function (e) {
              e.innerHTML = "";
            }),
            this
          );
        }),
        (e.prototype.scrollTop = function (e) {
          return void 0 !== e
            ? ((document.body.scrollTop = e),
              (document.documentElement.scrollTop = e),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (e.prototype.scrollLeft = function (e) {
          return void 0 !== e
            ? ((document.body.scrollLeft = e),
              (document.documentElement.scrollLeft = e),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (e.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var e = this.firstElement.getBoundingClientRect(),
            t = Ks("body").style().marginLeft;
          return {
            left: e.left - parseFloat(t) + this.scrollLeft(),
            top: e.top + this.scrollTop(),
          };
        }),
        (e.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (e.prototype.width = function () {
          var e = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(e.paddingLeft) -
            parseFloat(e.paddingRight)
          );
        }),
        (e.prototype.height = function () {
          var e = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(e.paddingTop) -
            parseFloat(e.paddingBottom)
          );
        }),
        (e.eventListeners = {}),
        e
      );
    })();
    function Ks(e) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: null };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new Xs(e)
      );
    }
    var Zs = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function Qs(e) {
      return "href" === e
        ? "src"
        : (e = (e =
            (e = e.replace("data-", "")).charAt(0).toLowerCase() +
            e.slice(1)).replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          }));
    }
    var Js = function (e, t, s, i) {
        void 0 === s && (s = 0);
        var n = Ks(e).attr("data-lg-size") || i;
        if (n) {
          var r = n.split(",");
          if (r[1])
            for (var o = window.innerWidth, a = 0; a < r.length; a++) {
              var l = r[a];
              if (parseInt(l.split("-")[2], 10) > o) {
                n = l;
                break;
              }
              a === r.length - 1 && (n = l);
            }
          var c = n.split("-"),
            d = parseInt(c[0], 10),
            u = parseInt(c[1], 10),
            p = t.width(),
            h = t.height() - s,
            f = Math.min(p, d),
            m = Math.min(h, u),
            g = Math.min(f / d, m / u);
          return { width: d * g, height: u * g };
        }
      },
      ei = function (e, t, s, i, n) {
        if (n) {
          var r = Ks(e).find("img").first();
          if (r.get()) {
            var o = t.get().getBoundingClientRect(),
              a = o.width,
              l = t.height() - (s + i),
              c = r.width(),
              d = r.height(),
              u = r.style(),
              p =
                (a - c) / 2 -
                r.offset().left +
                (parseFloat(u.paddingLeft) || 0) +
                (parseFloat(u.borderLeft) || 0) +
                Ks(window).scrollLeft() +
                o.left,
              h =
                (l - d) / 2 -
                r.offset().top +
                (parseFloat(u.paddingTop) || 0) +
                (parseFloat(u.borderTop) || 0) +
                Ks(window).scrollTop() +
                s;
            return (
              "translate3d(" +
              (p *= -1) +
              "px, " +
              (h *= -1) +
              "px, 0) scale3d(" +
              c / n.width +
              ", " +
              d / n.height +
              ", 1)"
            );
          }
        }
      },
      ti = function (e, t, s, i, n, r) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          e +
          "; max-width:" +
          s +
          "; height: " +
          t +
          "; max-height:" +
          i +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (r ? 'title="' + r + '"' : "") +
          ' src="' +
          n +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      si = function (e, t, s, i, n, r) {
        var o =
            "<img " +
            s +
            " " +
            (i ? 'srcset="' + i + '"' : "") +
            "  " +
            (n ? 'sizes="' + n + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            e +
            '" src="' +
            t +
            '" />',
          a = "";
        r &&
          (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
            var t = "";
            return (
              Object.keys(e).forEach(function (s) {
                t += " " + s + '="' + e[s] + '"';
              }),
              "<source " + t + "></source>"
            );
          }));
        return "" + a + o;
      },
      ii = function (e) {
        for (var t = [], s = [], i = "", n = 0; n < e.length; n++) {
          var r = e[n].split(" ");
          "" === r[0] && r.splice(0, 1), s.push(r[0]), t.push(r[1]);
        }
        for (var o = window.innerWidth, a = 0; a < t.length; a++)
          if (parseInt(t[a], 10) > o) {
            i = s[a];
            break;
          }
        return i;
      },
      ni = function (e) {
        return !!e && !!e.complete && 0 !== e.naturalWidth;
      },
      ri = function (e, t, s, i, n) {
        return (
          '<div class="lg-video-cont ' +
          (n && n.youtube
            ? "lg-has-youtube"
            : n && n.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          s +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          i +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          i +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (t || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          e +
          '" />\n        </div>'
        );
      },
      oi = function (e, t, s, i) {
        var n = [],
          r = (function () {
            for (var e = 0, t = 0, s = arguments.length; t < s; t++)
              e += arguments[t].length;
            var i = Array(e),
              n = 0;
            for (t = 0; t < s; t++)
              for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++)
                i[n] = r[o];
            return i;
          })(Zs, t);
        return (
          [].forEach.call(e, function (e) {
            for (var t = {}, o = 0; o < e.attributes.length; o++) {
              var a = e.attributes[o];
              if (a.specified) {
                var l = Qs(a.name),
                  c = "";
                r.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
              }
            }
            var d = Ks(e),
              u = d.find("img").first().attr("alt"),
              p = d.attr("title"),
              h = i ? d.attr(i) : d.find("img").first().attr("src");
            (t.thumb = h),
              s && !t.subHtml && (t.subHtml = p || u || ""),
              (t.alt = u || p || ""),
              n.push(t);
          }),
          n
        );
      },
      ai = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      li = function (e, t, s) {
        if (!e)
          return t
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (s + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
              );
        var i = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
          ),
          n = e.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
          ),
          r = e.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
          );
        return i
          ? { youtube: i }
          : n
          ? { vimeo: n }
          : r
          ? { wistia: r }
          : void 0;
      },
      ci = 0,
      di = (function () {
        function e(e, t) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !e)
          )
            return this;
          if (
            (ci++,
            (this.lgId = ci),
            (this.el = e),
            (this.LGel = Ks(e)),
            this.generateSettings(t),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (e.prototype.generateSettings = function (e) {
            if (
              ((this.settings = As(As({}, Ys), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : ai())
            ) {
              var t = As(
                As({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = As(As({}, this.settings), t);
            }
          }),
          (e.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length
              ));
          }),
          (e.prototype.init = function () {
            var e = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(ks, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (e.prototype.openGalleryOnItemClick = function () {
            for (
              var e = this,
                t = function (t) {
                  var i = s.items[t],
                    n = Ks(i),
                    r = Xs.generateUUID();
                  n.attr("data-lg-id", r).on(
                    "click.lgcustom-item-" + r,
                    function (s) {
                      s.preventDefault();
                      var n = e.settings.index || t;
                      e.openGallery(n, i);
                    }
                  );
                },
                s = this,
                i = 0;
              i < this.items.length;
              i++
            )
              t(i);
          }),
          (e.prototype.buildModules = function () {
            var e = this;
            this.settings.plugins.forEach(function (t) {
              e.plugins.push(new t(e, Ks));
            });
          }),
          (e.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use"
                )
              : console.error("Please provide a valid license key");
          }),
          (e.prototype.getSlideItem = function (e) {
            return Ks(this.getSlideItemId(e));
          }),
          (e.prototype.getSlideItemId = function (e) {
            return "#lg-item-" + this.lgId + "-" + e;
          }),
          (e.prototype.getIdName = function (e) {
            return e + "-" + this.lgId;
          }),
          (e.prototype.getElementById = function (e) {
            return Ks("#" + this.getIdName(e));
          }),
          (e.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (e.prototype.buildStructure = function () {
            var e = this;
            if (!(this.$container && this.$container.get())) {
              var t = "",
                s = "";
              this.settings.controls &&
                (t =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (s =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var i = "";
              this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
              var n = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                r = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                o =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                a =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                l = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                c =
                  '\n        <div class="' +
                  o +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  n +
                  " " +
                  r +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  i +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  t +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  l +
                  "\n                    " +
                  a +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? s : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              Ks(this.settings.container).append(c),
                document.body !== this.settings.container &&
                  Ks(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms"
                );
              var d = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (d += "lg-grab "),
                this.outer.addClass(d),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms"
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>'
                  ),
                this.counter(),
                Ks(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    e.refreshOnResize();
                  }
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (e.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var e = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var t = this.mediaContainerPosition,
                s = t.top,
                i = t.bottom;
              if (
                ((this.currentImageSize = Js(
                  this.items[this.index],
                  this.outer,
                  s + i,
                  e && this.settings.videoMaxSize
                )),
                e && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var n = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", n);
              }
              this.LGel.trigger(Ms);
            }
          }),
          (e.prototype.resizeVideoSlide = function (e, t) {
            var s = this.getVideoContStyle(t);
            this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
          }),
          (e.prototype.updateSlides = function (e, t) {
            if (
              (this.index > e.length - 1 && (this.index = e.length - 1),
              1 === e.length && (this.index = 0),
              e.length)
            ) {
              var s = this.galleryItems[t].src;
              (this.galleryItems = e),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var i = 0;
              this.galleryItems.some(function (e, t) {
                return e.src === s && ((i = t), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
                this.loadContent(i, !0),
                this.getSlideItem(i).addClass("lg-current"),
                (this.index = i),
                this.updateCurrentCounter(i),
                this.LGel.trigger(_s);
            } else this.closeGallery();
          }),
          (e.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var e = Ks(this.settings.selectWithin);
                  this.items = e.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return oi(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage
            );
          }),
          (e.prototype.openGallery = function (e, t) {
            var s = this;
            if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.get().focus(),
                this.outer.removeClass("lg-hide-items"),
                this.$container.addClass("lg-show");
              var i = this.getItemsToBeInsertedToDom(e, e);
              this.currentItemsInDom = i;
              var n = "";
              i.forEach(function (e) {
                n = n + '<div id="' + e + '" class="lg-item"></div>';
              }),
                this.$inner.append(n),
                this.addHtml(e);
              var r = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var o = this.mediaContainerPosition,
                a = o.top,
                l = o.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(a, l);
              var c = this.galleryItems[e].__slideVideoInfo;
              this.zoomFromOrigin &&
                t &&
                ((this.currentImageSize = Js(
                  t,
                  this.outer,
                  a + l,
                  c && this.settings.videoMaxSize
                )),
                (r = ei(t, this.outer, a, l, this.currentImageSize))),
                (this.zoomFromOrigin && r) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(e).removeClass("lg-complete"));
              var d = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                s.outer.addClass("lg-components-open");
              }, d),
                (this.index = e),
                this.LGel.trigger(Ds),
                this.getSlideItem(e).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = Ks(window).scrollTop()),
                setTimeout(function () {
                  if (s.zoomFromOrigin && r) {
                    var t = s.getSlideItem(e);
                    t.css("transform", r),
                      setTimeout(function () {
                        t
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            s.settings.startAnimationDuration + "ms"
                          ),
                          s.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        t.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    s.$backdrop.addClass("in"),
                      s.$container.addClass("lg-show-in");
                  }, 10),
                    (s.zoomFromOrigin && r) ||
                      setTimeout(function () {
                        s.outer.addClass("lg-visible");
                      }, s.settings.backdropDuration),
                    s.slide(e, !1, !1, !1),
                    s.LGel.trigger(zs);
                }),
                document.body === this.settings.container &&
                  Ks("html").addClass("lg-on");
            }
          }),
          (e.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var e = this.$toolbar.get().clientHeight || 0,
              t = this.outer.find(".lg-components .lg-sub-html").get(),
              s =
                this.settings.defaultCaptionHeight ||
                (t && t.clientHeight) ||
                0,
              i = this.outer.find(".lg-thumb-outer").get();
            return { top: e, bottom: (i ? i.clientHeight : 0) + s };
          }),
          (e.prototype.setMediaContainerPosition = function (e, t) {
            void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              this.$content.css("top", e + "px").css("bottom", t + "px");
          }),
          (e.prototype.hideBars = function () {
            var e = this;
            setTimeout(function () {
              e.outer.removeClass("lg-hide-items"),
                e.settings.hideBarsDelay > 0 &&
                  (e.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      e.outer.removeClass("lg-hide-items"),
                        clearTimeout(e.hideBarTimeout),
                        (e.hideBarTimeout = setTimeout(function () {
                          e.outer.addClass("lg-hide-items");
                        }, e.settings.hideBarsDelay));
                    }
                  ),
                  e.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (e.prototype.initPictureFill = function (e) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [e.get()] });
              } catch (e) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                );
              }
          }),
          (e.prototype.counter = function () {
            if (this.settings.counter) {
              var e =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(e);
            }
          }),
          (e.prototype.addHtml = function (e) {
            var t, s;
            if (
              (this.galleryItems[e].subHtmlUrl
                ? (s = this.galleryItems[e].subHtmlUrl)
                : (t = this.galleryItems[e].subHtml),
              !s)
            )
              if (t) {
                var i = t.substring(0, 1);
                ("." !== i && "#" !== i) ||
                  (t =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? Ks(this.items).eq(e).find(t).first().html()
                      : Ks(t).first().html());
              } else t = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              s
                ? this.outer.find(".lg-sub-html").load(s)
                : this.outer.find(".lg-sub-html").html(t);
            else {
              var n = Ks(this.getSlideItemId(e));
              s
                ? n.load(s)
                : n.append('<div class="lg-sub-html">' + t + "</div>");
            }
            null != t &&
              ("" === t
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger($s, { index: e });
          }),
          (e.prototype.preload = function (e) {
            for (
              var t = 1;
              t <= this.settings.preload &&
              !(t >= this.galleryItems.length - e);
              t++
            )
              this.loadContent(e + t, !1);
            for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
              this.loadContent(e - s, !1);
          }),
          (e.prototype.getDummyImgStyles = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                margin-left: -" +
                  e.width / 2 +
                  "px;\n                margin-top: -" +
                  e.height / 2 +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getVideoContStyle = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getDummyImageContent = function (e, t, s) {
            var i;
            if ((this.settings.dynamic || (i = Ks(this.items).eq(t)), i)) {
              var n = void 0;
              if (
                !(n = this.settings.exThumbImage
                  ? i.attr(this.settings.exThumbImage)
                  : i.find("img").first().attr("src"))
              )
                return "";
              var r =
                "<img " +
                s +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                n +
                '" />';
              return (
                e.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                r
              );
            }
            return "";
          }),
          (e.prototype.setImgMarkup = function (e, t, s) {
            var i = this.galleryItems[s],
              n = i.alt,
              r = i.srcset,
              o = i.sizes,
              a = i.sources,
              l = n ? 'alt="' + n + '"' : "",
              c =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(t, s, l)
                  : si(s, e, l, r, o, a)) +
                "</picture>";
            t.prepend(c);
          }),
          (e.prototype.onSlideObjectLoad = function (e, t, s, i) {
            var n = e.find(".lg-object").first();
            ni(n.get()) || t
              ? s()
              : (n.on("load.lg error.lg", function () {
                  s && s();
                }),
                n.on("error.lg", function () {
                  i && i();
                }));
          }),
          (e.prototype.onLgObjectLoad = function (e, t, s, i, n, r) {
            var o = this;
            this.onSlideObjectLoad(
              e,
              r,
              function () {
                o.triggerSlideItemLoad(e, t, s, i, n);
              },
              function () {
                e.addClass("lg-complete lg-complete_"),
                  e.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                  );
              }
            );
          }),
          (e.prototype.triggerSlideItemLoad = function (e, t, s, i, n) {
            var r = this,
              o = this.galleryItems[t],
              a = n && "video" === this.getSlideType(o) && !o.poster ? i : 0;
            setTimeout(function () {
              e.addClass("lg-complete lg-complete_"),
                r.LGel.trigger(Ns, {
                  index: t,
                  delay: s || 0,
                  isFirstSlide: n,
                });
            }, a);
          }),
          (e.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (e.prototype.addSlideVideoInfo = function (e) {
            var t = this;
            e.forEach(function (e, s) {
              (e.__slideVideoInfo = li(e.src, !!e.video, s)),
                e.__slideVideoInfo &&
                  t.settings.loadYouTubePoster &&
                  !e.poster &&
                  e.__slideVideoInfo.youtube &&
                  (e.poster =
                    "//img.youtube.com/vi/" +
                    e.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (e.prototype.loadContent = function (e, t) {
            var s = this,
              i = this.galleryItems[e],
              n = Ks(this.getSlideItemId(e)),
              r = i.poster,
              o = i.srcset,
              a = i.sizes,
              l = i.sources,
              c = i.src,
              d = i.video,
              u = d && "string" == typeof d ? JSON.parse(d) : d;
            if (i.responsive) {
              var p = i.responsive.split(",");
              c = ii(p) || c;
            }
            var h = i.__slideVideoInfo,
              f = "",
              m = !!i.iframe,
              g = !this.lGalleryOn,
              v = 0;
            if (
              (g &&
                (v =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !n.hasClass("lg-loaded"))
            ) {
              if (h) {
                var y = this.mediaContainerPosition,
                  b = y.top,
                  w = y.bottom,
                  S = Js(
                    this.items[e],
                    this.outer,
                    b + w,
                    h && this.settings.videoMaxSize
                  );
                f = this.getVideoContStyle(S);
              }
              if (m) {
                var x = ti(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  c,
                  i.iframeTitle
                );
                n.prepend(x);
              } else if (r) {
                var C = "";
                g &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (C = this.getDummyImageContent(n, e, ""));
                x = ri(r, C || "", f, this.settings.strings.playVideo, h);
                n.prepend(x);
              } else if (h) {
                x = '<div class="lg-video-cont " style="' + f + '"></div>';
                n.prepend(x);
              } else if ((this.setImgMarkup(c, n, e), o || l)) {
                var E = n.find(".lg-object");
                this.initPictureFill(E);
              }
              (r || h) &&
                this.LGel.trigger(Is, {
                  index: e,
                  src: c,
                  html5Video: u,
                  hasPoster: !!r,
                }),
                this.LGel.trigger(Ps, { index: e }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(e);
            }
            var T = 0;
            v && !Ks(document.body).hasClass("lg-from-hash") && (T = v),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  n.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                n.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if (
                      "image" === s.getSlideType(i) &&
                      (n
                        .find(".lg-img-wrap")
                        .append(si(e, c, "", o, a, i.sources)),
                      o || l)
                    ) {
                      var t = n.find(".lg-object");
                      s.initPictureFill(t);
                    }
                    ("image" === s.getSlideType(i) ||
                      ("video" === s.getSlideType(i) && r)) &&
                      (s.onLgObjectLoad(n, e, v, T, !0, !1),
                      s.onSlideObjectLoad(
                        n,
                        !(!h || !h.html5 || r),
                        function () {
                          s.loadContentOnFirstSlideLoad(e, n, T);
                        },
                        function () {
                          s.loadContentOnFirstSlideLoad(e, n, T);
                        }
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              n.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(i) || r)) ||
                this.onLgObjectLoad(n, e, v, T, g, !(!h || !h.html5 || r)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !n.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  n.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === t &&
                (n.hasClass("lg-complete_")
                  ? this.preload(e)
                  : n
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        s.preload(e);
                      }));
          }),
          (e.prototype.loadContentOnFirstSlideLoad = function (e, t, s) {
            var i = this;
            setTimeout(function () {
              t.find(".lg-dummy-img").remove(),
                t.removeClass("lg-first-slide"),
                i.outer.removeClass("lg-first-slide-loading"),
                (i.isDummyImageRemoved = !0),
                i.preload(e);
            }, s + 300);
          }),
          (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
            var i = this;
            void 0 === s && (s = 0);
            var n = [],
              r = Math.max(s, 3);
            r = Math.min(r, this.galleryItems.length);
            var o = "lg-item-" + this.lgId + "-" + t;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (e, t) {
                  n.push("lg-item-" + i.lgId + "-" + t);
                }),
                n
              );
            if (e < (this.galleryItems.length - 1) / 2) {
              for (var a = e; a > e - r / 2 && a >= 0; a--)
                n.push("lg-item-" + this.lgId + "-" + a);
              var l = n.length;
              for (a = 0; a < r - l; a++)
                n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
            } else {
              for (
                a = e;
                a <= this.galleryItems.length - 1 && a < e + r / 2;
                a++
              )
                n.push("lg-item-" + this.lgId + "-" + a);
              for (l = n.length, a = 0; a < r - l; a++)
                n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
            }
            return (
              this.settings.loop &&
                (e === this.galleryItems.length - 1
                  ? n.push("lg-item-" + this.lgId + "-0")
                  : 0 === e &&
                    n.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + t),
              n
            );
          }),
          (e.prototype.organizeSlideItems = function (e, t) {
            var s = this,
              i = this.getItemsToBeInsertedToDom(
                e,
                t,
                this.settings.numberOfSlideItemsInDom
              );
            return (
              i.forEach(function (e) {
                -1 === s.currentItemsInDom.indexOf(e) &&
                  s.$inner.append('<div id="' + e + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (e) {
                -1 === i.indexOf(e) && Ks("#" + e).remove();
              }),
              i
            );
          }),
          (e.prototype.getPreviousSlideIndex = function () {
            var e = 0;
            try {
              var t = this.outer.find(".lg-current").first().attr("id");
              e = parseInt(t.split("-")[3]) || 0;
            } catch (t) {
              e = 0;
            }
            return e;
          }),
          (e.prototype.setDownloadValue = function (e) {
            if (this.settings.download) {
              var t = this.galleryItems[e];
              if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var s = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  s.attr("href", t.downloadUrl || t.src),
                  t.download && s.attr("download", t.download);
              }
            }
          }),
          (e.prototype.makeSlideAnimation = function (e, t, s) {
            var i = this;
            this.lGalleryOn && s.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  i.outer.addClass("lg-no-trans"),
                    i.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === e
                      ? (t.addClass("lg-prev-slide"),
                        s.addClass("lg-next-slide"))
                      : (t.addClass("lg-next-slide"),
                        s.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      i.outer.find(".lg-item").removeClass("lg-current"),
                        t.addClass("lg-current"),
                        i.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0
              );
          }),
          (e.prototype.slide = function (e, t, s, i) {
            var n = this,
              r = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
              !this.lGalleryOn || r !== e)
            ) {
              var o = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var a = this.getSlideItem(e),
                  l = this.getSlideItem(r),
                  c = this.galleryItems[e],
                  d = c.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                  this.setDownloadValue(e),
                  d)
                ) {
                  var u = this.mediaContainerPosition,
                    p = u.top,
                    h = u.bottom,
                    f = Js(
                      this.items[e],
                      this.outer,
                      p + h,
                      d && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(e, f);
                }
                if (
                  (this.LGel.trigger(Bs, {
                    prevIndex: r,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!s,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(e),
                  i || (e < r ? (i = "prev") : e > r && (i = "next")),
                  t)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var m = void 0,
                    g = void 0;
                  o > 2
                    ? ((m = e - 1),
                      (g = e + 1),
                      ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                        ((g = 0), (m = o - 1)))
                    : ((m = 0), (g = 1)),
                    "prev" === i
                      ? this.getSlideItem(g).addClass("lg-next-slide")
                      : this.getSlideItem(m).addClass("lg-prev-slide"),
                    a.addClass("lg-current");
                } else this.makeSlideAnimation(i, a, l);
                this.lGalleryOn
                  ? setTimeout(function () {
                      n.loadContent(e, !0),
                        ".lg-item" !== n.settings.appendSubHtmlTo &&
                          n.addHtml(e);
                    }, this.settings.speed +
                      50 +
                      (t ? 0 : this.settings.slideDelay))
                  : this.loadContent(e, !0),
                  setTimeout(function () {
                    (n.lgBusy = !1),
                      l.removeClass("lg-slide-progress"),
                      n.LGel.trigger(Vs, {
                        prevIndex: r,
                        index: e,
                        fromTouch: t,
                        fromThumb: s,
                      });
                  }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (t ? 0 : this.settings.slideDelay));
              }
              this.index = e;
            }
          }),
          (e.prototype.updateCurrentCounter = function (e) {
            this.getElementById("lg-counter-current").html(e + 1 + "");
          }),
          (e.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + ""
            );
          }),
          (e.prototype.getSlideType = function (e) {
            return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
          }),
          (e.prototype.touchMove = function (e, t, s) {
            var i = t.pageX - e.pageX,
              n = t.pageY - e.pageY,
              r = !1;
            if (
              (this.swipeDirection
                ? (r = !0)
                : Math.abs(i) > 15
                ? ((this.swipeDirection = "horizontal"), (r = !0))
                : Math.abs(n) > 15 &&
                  ((this.swipeDirection = "vertical"), (r = !0)),
              r)
            ) {
              var o = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == s || s.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(o, i, 0);
                var a = o.get().offsetWidth,
                  l = (15 * a) / 100 - Math.abs((10 * i) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -a + i - l,
                  0
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    a + i + l,
                    0
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == s || s.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var c = 1 - Math.abs(n) / window.innerHeight;
                this.$backdrop.css("opacity", c);
                var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                this.setTranslate(o, 0, n, d, d),
                  Math.abs(n) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (e.prototype.touchEnd = function (e, t, s) {
            var i,
              n = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                n.$container.removeClass("lg-dragging-vertical"),
                  n.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var r = !0;
                if ("horizontal" === n.swipeDirection) {
                  i = e.pageX - t.pageX;
                  var o = Math.abs(e.pageX - t.pageX);
                  i < 0 && o > n.settings.swipeThreshold
                    ? (n.goToNextSlide(!0), (r = !1))
                    : i > 0 &&
                      o > n.settings.swipeThreshold &&
                      (n.goToPrevSlide(!0), (r = !1));
                } else if ("vertical" === n.swipeDirection) {
                  if (
                    ((i = Math.abs(e.pageY - t.pageY)),
                    n.settings.closable && n.settings.swipeToClose && i > 100)
                  )
                    return void n.closeGallery();
                  n.$backdrop.css("opacity", 1);
                }
                if (
                  (n.outer.find(".lg-item").removeAttr("style"),
                  r && Math.abs(e.pageX - t.pageX) < 5)
                ) {
                  var a = Ks(s.target);
                  n.isPosterElement(a) && n.LGel.trigger(Hs);
                }
                n.swipeDirection = void 0;
              }),
              setTimeout(function () {
                n.outer.hasClass("lg-dragging") ||
                  "lg-slide" === n.settings.mode ||
                  n.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (e.prototype.enableSwipe = function () {
            var e = this,
              t = {},
              s = {},
              i = !1,
              n = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (s) {
                e.dragOrSwipeEnabled = !0;
                var i = e.getSlideItem(e.index);
                (!Ks(s.target).hasClass("lg-item") &&
                  !i.get().contains(s.target)) ||
                  e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  1 !== s.targetTouches.length ||
                  ((n = !0),
                  (e.touchAction = "swipe"),
                  e.manageSwipeClass(),
                  (t = {
                    pageX: s.targetTouches[0].pageX,
                    pageY: s.targetTouches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (r) {
                n &&
                  "swipe" === e.touchAction &&
                  1 === r.targetTouches.length &&
                  ((s = {
                    pageX: r.targetTouches[0].pageX,
                    pageY: r.targetTouches[0].pageY,
                  }),
                  e.touchMove(t, s, r),
                  (i = !0));
              }),
              this.$inner.on("touchend.lg", function (r) {
                if ("swipe" === e.touchAction) {
                  if (i) (i = !1), e.touchEnd(s, t, r);
                  else if (n) {
                    var o = Ks(r.target);
                    e.isPosterElement(o) && e.LGel.trigger(Hs);
                  }
                  (e.touchAction = void 0), (n = !1);
                }
              }));
          }),
          (e.prototype.enableDrag = function () {
            var e = this,
              t = {},
              s = {},
              i = !1,
              n = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (s) {
                e.dragOrSwipeEnabled = !0;
                var n = e.getSlideItem(e.index);
                (Ks(s.target).hasClass("lg-item") ||
                  n.get().contains(s.target)) &&
                  (e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    (s.preventDefault(),
                    e.lgBusy ||
                      (e.manageSwipeClass(),
                      (t = { pageX: s.pageX, pageY: s.pageY }),
                      (i = !0),
                      (e.outer.get().scrollLeft += 1),
                      (e.outer.get().scrollLeft -= 1),
                      e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      e.LGel.trigger(js))));
              }),
              Ks(window).on("mousemove.lg.global" + this.lgId, function (r) {
                i &&
                  e.lgOpened &&
                  ((n = !0),
                  (s = { pageX: r.pageX, pageY: r.pageY }),
                  e.touchMove(t, s),
                  e.LGel.trigger(qs));
              }),
              Ks(window).on("mouseup.lg.global" + this.lgId, function (r) {
                if (e.lgOpened) {
                  var o = Ks(r.target);
                  n
                    ? ((n = !1), e.touchEnd(s, t, r), e.LGel.trigger(Gs))
                    : e.isPosterElement(o) && e.LGel.trigger(Hs),
                    i &&
                      ((i = !1),
                      e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (e.prototype.triggerPosterClick = function () {
            var e = this;
            this.$inner.on("click.lg", function (t) {
              !e.dragOrSwipeEnabled &&
                e.isPosterElement(Ks(t.target)) &&
                e.LGel.trigger(Hs);
            });
          }),
          (e.prototype.manageSwipeClass = function () {
            var e = this.index + 1,
              t = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (t = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (e = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
              this.getSlideItem(e).addClass("lg-next-slide");
          }),
          (e.prototype.goToNextSlide = function (e) {
            var t = this,
              s = this.settings.loop;
            e && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(Fs, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : s
                  ? ((this.index = 0),
                    this.LGel.trigger(Fs, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (e.prototype.goToPrevSlide = function (e) {
            var t = this,
              s = this.settings.loop;
            e && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(Rs, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : s
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(Rs, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (e.prototype.keyPress = function () {
            var e = this;
            Ks(window).on("keydown.lg.global" + this.lgId, function (t) {
              e.lgOpened &&
                !0 === e.settings.escKey &&
                27 === t.keyCode &&
                (t.preventDefault(),
                e.settings.allowMediaOverlap &&
                e.outer.hasClass("lg-can-toggle") &&
                e.outer.hasClass("lg-components-open")
                  ? e.outer.removeClass("lg-components-open")
                  : e.closeGallery()),
                e.lgOpened &&
                  e.galleryItems.length > 1 &&
                  (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                  39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
            });
          }),
          (e.prototype.arrow = function () {
            var e = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              e.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                e.goToNextSlide();
              });
          }),
          (e.prototype.arrowDisable = function (e) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var t = this.getElementById("lg-prev"),
                s = this.getElementById("lg-next");
              e + 1 === this.galleryItems.length
                ? s.attr("disabled", "disabled").addClass("disabled")
                : s.removeAttr("disabled").removeClass("disabled"),
                0 === e
                  ? t.attr("disabled", "disabled").addClass("disabled")
                  : t.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (e.prototype.setTranslate = function (e, t, s, i, n) {
            void 0 === i && (i = 1),
              void 0 === n && (n = 1),
              e.css(
                "transform",
                "translate3d(" +
                  t +
                  "px, " +
                  s +
                  "px, 0px) scale3d(" +
                  i +
                  ", " +
                  n +
                  ", 1)"
              );
          }),
          (e.prototype.mousewheel = function () {
            var e = this,
              t = 0;
            this.outer.on("wheel.lg", function (s) {
              if (s.deltaY && !(e.galleryItems.length < 2)) {
                s.preventDefault();
                var i = new Date().getTime();
                i - t < 1e3 ||
                  ((t = i),
                  s.deltaY > 0
                    ? e.goToNextSlide()
                    : s.deltaY < 0 && e.goToPrevSlide());
              }
            });
          }),
          (e.prototype.isSlideElement = function (e) {
            return (
              e.hasClass("lg-outer") ||
              e.hasClass("lg-item") ||
              e.hasClass("lg-img-wrap")
            );
          }),
          (e.prototype.isPosterElement = function (e) {
            var t = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              e.hasClass("lg-video-poster") ||
              e.hasClass("lg-video-play-button") ||
              (t && t.contains(e.get()))
            );
          }),
          (e.prototype.toggleMaximize = function () {
            var e = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              e.$container.toggleClass("lg-inline"), e.refreshOnResize();
            });
          }),
          (e.prototype.invalidateItems = function () {
            for (var e = 0; e < this.items.length; e++) {
              var t = Ks(this.items[e]);
              t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
            }
          }),
          (e.prototype.manageCloseGallery = function () {
            var e = this;
            if (this.settings.closable) {
              var t = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                e.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (s) {
                    var i = Ks(s.target);
                    t = !!e.isSlideElement(i);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    t = !1;
                  }),
                  this.outer.on("mouseup.lg", function (s) {
                    var i = Ks(s.target);
                    e.isSlideElement(i) &&
                      t &&
                      (e.outer.hasClass("lg-dragging") || e.closeGallery());
                  }));
            }
          }),
          (e.prototype.closeGallery = function (e) {
            var t = this;
            if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
            this.LGel.trigger(Us), Ks(window).scrollTop(this.prevScrollTop);
            var s,
              i = this.items[this.index];
            if (this.zoomFromOrigin && i) {
              var n = this.mediaContainerPosition,
                r = n.top,
                o = n.bottom,
                a = this.galleryItems[this.index],
                l = a.__slideVideoInfo,
                c = a.poster,
                d = Js(
                  i,
                  this.outer,
                  r + o,
                  l && c && this.settings.videoMaxSize
                );
              s = ei(i, this.outer, r, o, d);
            }
            this.zoomFromOrigin && s
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms"
                  )
                  .css("transform", s))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              Ks("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var u =
              this.zoomFromOrigin && s
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                t.zoomFromOrigin &&
                  s &&
                  t.outer.removeClass("lg-zoom-from-image"),
                  t.$container.removeClass("lg-show"),
                  t.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      t.settings.backdropDuration + "ms"
                    ),
                  t.outer.removeClass("lg-closing " + t.settings.startClass),
                  t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                  t.$inner.empty(),
                  t.lgOpened && t.LGel.trigger(Ws, { instance: t }),
                  t.outer.get() && t.outer.get().blur(),
                  (t.lgOpened = !1);
              }, u + 100),
              u + 100
            );
          }),
          (e.prototype.initModules = function () {
            this.plugins.forEach(function (e) {
              try {
                e.init();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated"
                );
              }
            });
          }),
          (e.prototype.destroyModules = function (e) {
            this.plugins.forEach(function (t) {
              try {
                e ? t.destroy() : t.closeGallery && t.closeGallery();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed"
                );
              }
            });
          }),
          (e.prototype.refresh = function (e) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = e || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(_s);
          }),
          (e.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (e.prototype.destroy = function () {
            var e = this,
              t = this.closeGallery(!0);
            return (
              setTimeout(function () {
                e.destroyModules(!0),
                  e.settings.dynamic || e.invalidateItems(),
                  Ks(window).off(".lg.global" + e.lgId),
                  e.LGel.off(".lg"),
                  e.$container.remove();
              }, t),
              t
            );
          }),
          e
        );
      })();
    const ui = function (e, t) {
        return new di(e, t);
      },
      pi = document.querySelectorAll("[data-gallery]");
    pi.length &&
      pi.forEach((e) => {
        ui(e, {
          licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
          speed: 500,
        });
      }),
      (window.onload = function () {
        document.addEventListener("click", function (e) {
          const t = e.target;
          if (t.closest("[data-parent]")) {
            const s = t.dataset.parent ? t.dataset.parent : null,
              i = document.querySelector(`[data-cover="${s}"]`);
            if (i) {
              const e = document.querySelector("._sub-menu-active"),
                s = document.querySelector("._sub-menu-open"),
                n = document.querySelector("._sub-menu-item-active");
              e &&
                e !== t &&
                (e.classList.remove("_sub-menu-active"),
                s.classList.remove("_sub-menu-open"),
                n.classList.remove("_sub-menu-item-active"),
                document.documentElement.classList.remove("sub-menu-open")),
                document.documentElement.classList.toggle("sub-menu-open"),
                t.classList.toggle("_sub-menu-active"),
                t
                  .closest(".main-row-header__item")
                  .classList.toggle("_sub-menu-item-active"),
                i.classList.toggle("_sub-menu-open");
            } else console.log("???? ????, ?????? ???????????? ??????????????");
            e.preventDefault();
          }
          t.closest(".item-menu-catalog") &&
            document.documentElement.classList.add("catalog-open");
          t.closest(".submenu__back") &&
            document.documentElement.classList.remove("catalog-open");
          document.documentElement.classList.contains("menu-open") ||
            document.documentElement.classList.remove("catalog-open");
          t.closest(".link-knife-catalog") &&
            document.documentElement.classList.add("knife-catalog-open");
          t.closest(".knife-catalog__back") &&
            document.documentElement.classList.remove("knife-catalog-open");
          document.documentElement.classList.contains("menu-open") ||
            document.documentElement.classList.remove("knife-catalog-open");
          t.closest(".link-blade-catalog") &&
            document.documentElement.classList.add("blade-catalog-open");
          t.closest(".blade-catalog__back") &&
            document.documentElement.classList.remove("blade-catalog-open");
          document.documentElement.classList.contains("menu-open") ||
            document.documentElement.classList.remove("blade-catalog-open");
        });
        const e = document.querySelectorAll(".dropdown-block__content");
        e.length &&
          e.forEach((e) => {
            const t = e.querySelectorAll(".row-top__item").length;
            e.classList.add(`dropdown-block__content_${t}`);
          });
      }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            o && (a(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && n(t);
          let s = u(e, "spollers");
          function n(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function o(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function a(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                n = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (n && !s.classList.contains("_spoller-active") && l(i),
                s.classList.toggle("_spoller-active"),
                r(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              i(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                n(e.itemsArray, e.matchMedia);
              }),
                n(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const i = location.hash.replace("#", "");
          i.startsWith("tab-") && (t = i.replace("tab-", "").split("-")),
            e.forEach((e, s) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", s),
                e.addEventListener("click", r),
                (function (e) {
                  const s = e.querySelectorAll("[data-tabs-titles]>*"),
                    i = e.querySelectorAll("[data-tabs-body]>*"),
                    n = e.dataset.tabsIndex,
                    r = t[0] == n;
                  if (r) {
                    e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    ).classList.remove("_tab-active");
                  }
                  i.length > 0 &&
                    i.forEach((e, i) => {
                      s[i].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        r && i == t[1] && s[i].classList.add("_tab-active"),
                        (e.hidden = !s[i].classList.contains("_tab-active"));
                    });
                })(e);
            });
          let n = u(e, "tabs");
          n &&
            n.length &&
            n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            const s = (e = e.item).querySelector("[data-tabs-titles]"),
              i = e.querySelectorAll("[data-tabs-title]"),
              n = e.querySelector("[data-tabs-body]");
            e.querySelectorAll("[data-tabs-item]").forEach((r, o) => {
              t.matches
                ? (n.append(i[o]), n.append(r), e.classList.add("_tab-spoller"))
                : (s.append(i[o]), e.classList.remove("_tab-spoller"));
            });
          });
        }
        function r(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              r = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !r.querySelectorAll("._slide").length
            ) {
              const e = r.querySelector("[data-tabs-title]._tab-active");
              e && e.classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                (function (e) {
                  const t = e.querySelectorAll("[data-tabs-title]"),
                    s = e.querySelectorAll("[data-tabs-item]"),
                    r = e.dataset.tabsIndex,
                    o = (function (e) {
                      if (e.hasAttribute("data-tabs-animate"))
                        return e.dataset.tabsAnimate > 0
                          ? e.dataset.tabsAnimate
                          : 500;
                    })(e);
                  s.length > 0 &&
                    s.forEach((e, s) => {
                      t[s].classList.contains("_tab-active")
                        ? (o ? n(e, o) : (e.hidden = !1),
                          e.closest(".popup") ||
                            (location.hash = `tab-${r}-${s}`))
                        : o
                        ? i(e, o)
                        : (e.hidden = !0);
                    });
                })(r);
            }
            e.preventDefault();
          }
        }
      })(),
      new t({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              f.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && f.validateInput(t));
          });
      })(),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(t.closest(".quantity").querySelector("input").value);
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".quantity").querySelector("input").value = e);
        }
      }),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, s;
            for (let t = 0; t < e.length; t++) {
              i(e[t]);
            }
            function i(e) {
              n(e), r(), e.classList.contains("rating_set") && o(e);
            }
            function n(e) {
              (t = e.querySelector(".rating__active")),
                (s = e.querySelector(".rating__value"));
            }
            function r(e = s.innerHTML) {
              const i = e / 0.05;
              t.style.width = `${i}%`;
            }
            function o(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let i = 0; i < t.length; i++) {
                const o = t[i];
                o.addEventListener("mouseenter", function (t) {
                  n(e), r(o.value);
                }),
                  o.addEventListener("mouseleave", function (e) {
                    r();
                  }),
                  o.addEventListener("click", function (t) {
                    n(e),
                      e.dataset.ajax
                        ? a(o.value, e)
                        : ((s.innerHTML = i + 1), r());
                  });
              }
            }
            async function a(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const i = (await e.json()).newRating;
                  (s.innerHTML = i), r(), t.classList.remove("rating_sending");
                } else alert("????????????"), t.classList.remove("rating_sending");
              }
            }
          })();
      })(),
      (h.selectModule = new p({}));
  })();
})();
