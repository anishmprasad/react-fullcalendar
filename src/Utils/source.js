/* eslint-disable  */
!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = {
      i: n,
      l: !1,
      exports: {}
    });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
        });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 18));
})([
  ,
  function(e, t, r) {},
  function(e, t, r) {},
  function(e, t, r) {},
  function(e, t, r) {},
  function(e, t, r) {},
  function(e, t, r) {},
  ,
  ,
  function(e, t, r) {
    !(function() {
      var t = "ontouchstart" in document.documentElement,
        r = t ? "touchend" : "click",
        n = [].forEach,
        i = (function() {
          for (
            var e = "transitionend webkitTransitionEnd oTransitionEnd otransitionend".split(
                " "
              ),
              t = 0;
            t < 4;
            ++t
          )
            if ("on" + e[t].toLowerCase() in window) return e[t];
          return e[0];
        })();
      function o(e, t, r) {
        r ? e.add(t) : e.remove(t);
      }
      var s,
        a,
        l,
        c =
          ((s = {}),
          (a = {}),
          function e(t, r, n) {
            n = +(n || 6);
            var i = (t = t || "_");
            if (r) {
              var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              for (
                i += (o += o.toLowerCase())[
                  Math.round(Math.random() * (o.length - 1))
                ],
                  o += "0123456789";
                i.length < n;

              )
                i += o[Math.round(Math.random() * (o.length - 1))];
            } else a[t] || (a[t] = 0), (i += ++a[t]);
            return s[i] || document.getElementById(i)
              ? e(t, r)
              : ((s[i] = !0), i);
          }),
        d = (function(e) {
          if (
            ((r = document.documentElement.style), (t = e.toLowerCase()) in r)
          )
            return t;
          for (
            var t,
              r,
              n = ((n = "Webkit Moz Ms O Khtml").toLowerCase() + n).split(" "),
              i = 0;
            i < 10;
            ++i
          )
            if ((t = n[i] + e) in r) return t;
          return "";
        })("Transform"),
        u = (function(e) {
          var t = document.createElement("div").style,
            r = [
              ["translateY(", ")"],
              ["translate3d(0,", ",0)"]
            ];
          try {
            t[e] = r[1].join("1px");
          } catch (e) {}
          return r[+!!t[e]] === r[1];
        })(d),
        p = [],
        h = function(e, n) {
          var i,
            s,
            a,
            l,
            h,
            f,
            v,
            g,
            y,
            m = this,
            S = n.firstElementChild,
            E = n.lastElementChild,
            b = n.classList,
            w = e.openClass,
            T = e.closeClass,
            D = !e.noKeys,
            C = e.useBorders,
            R = !e.noTransforms && d,
            x = e.onToggle,
            I = !1;
          Object.defineProperties(m, {
            fit: {
              value: function() {
                var e = m.headingHeight;
                m.open && (e += E.scrollHeight);
                C && (e += m.elBorder);
                m.height = e;
              }
            },
            ariaEnabled: {
              get: function() {
                return l;
              },
              set: function(e) {
                (e = !!e) != !!l &&
                  ((l = e),
                  e
                    ? (S.setAttribute("role", "tab"),
                      E.setAttribute("role", "tabpanel"),
                      (function() {
                        var e,
                          t = n.id;
                        S.id || E.id
                          ? E.id
                            ? S.id || (S.id = (t || E.id) + "-heading")
                            : (E.id = (t || S.id) + "-content")
                          : ((e = t || c("a")),
                            (S.id = e + "-heading"),
                            (E.id = e + "-content"));
                        var r = function(e) {
                          return document.querySelectorAll("#" + e);
                        };
                        for (; r(E.id).length > 1 || r(S.id).length > 1; )
                          (e = c("a")),
                            (E.id = e + "-content"),
                            (S.id = e + "-heading");
                        S.setAttribute("aria-controls", E.id),
                          E.setAttribute("aria-labelledby", S.id);
                      })(),
                      S.setAttribute("aria-selected", !!i),
                      S.setAttribute("aria-expanded", !!i),
                      E.setAttribute("aria-hidden", !i))
                    : (S.removeAttribute("role"),
                      S.removeAttribute("aria-controls"),
                      S.removeAttribute("aria-selected"),
                      S.removeAttribute("aria-expanded"),
                      E.removeAttribute("role"),
                      E.removeAttribute("aria-labelledby"),
                      E.removeAttribute("aria-hidden")));
              }
            },
            open: {
              get: function() {
                return void 0 === i && ((i = b.contains(w)), o(b, T, !i)), i;
              },
              set: function(t) {
                if ((t = !!t) !== i) {
                  if ("function" == typeof x && !1 === x.call(null, m, t))
                    return;
                  if (
                    (o(b, w, t),
                    o(b, T, !t),
                    (i = t),
                    l &&
                      (S.setAttribute("aria-selected", t),
                      S.setAttribute("aria-expanded", t),
                      E.setAttribute("aria-hidden", !t)),
                    m.needsRefresh
                      ? (delete m.needsRefresh, e.refresh())
                      : e.update(),
                    e.modal && i)
                  )
                    for (var r, n = 0, s = e.folds.length; n < s; ++n)
                      m !== (r = e.folds[n]) && (r.open = !1);
                }
              }
            },
            disabled: {
              get: function() {
                return I;
              },
              set: function(e) {
                if ((e = !!e) !== I) {
                  var i = n.style;
                  (I = e)
                    ? ((i.height = null),
                      R ? (i[d] = null) : (i.top = null),
                      t && S.removeEventListener("touchstart", v),
                      S.removeEventListener(r, y),
                      b.remove(w, T),
                      g &&
                        (S.removeEventListener("keydown", g),
                        S.removeAttribute("tabindex")),
                      l && ((m.ariaEnabled = !1), (l = !0)))
                    : ((i.height = a + "px"),
                      R
                        ? (i[d] = u
                            ? "translate3D(0," + s + "px,0)"
                            : "translateY(" + s + "px)")
                        : (i.top = s + "px"),
                      t && S.addEventListener("touchstart", v),
                      S.addEventListener(r, y),
                      g &&
                        (S.addEventListener("keydown", g), (S.tabIndex = 0)));
                }
              }
            },
            y: {
              get: function() {
                return void 0 === s ? (s = parseInt(n.style.top) || 0) : s;
              },
              set: function(e) {
                (e = +e) !== s &&
                  ((s = e),
                  R
                    ? (n.style[d] = u
                        ? "translate3D(0," + e + "px,0)"
                        : "translateY(" + e + "px)")
                    : (n.style.top = e + "px"));
              }
            },
            height: {
              get: function() {
                return (
                  void 0 === a &&
                    ((a = m.headingHeight + E.scrollHeight),
                    (n.style.height = a + "px")),
                  a
                );
              },
              set: function(e) {
                e && (e = +e) !== a && ((n.style.height = e + "px"), (a = e));
              }
            },
            headingHeight: {
              get: function() {
                return (
                  S.scrollHeight + m.heightOffset + (C ? m.headingBorder : 0)
                );
              }
            },
            headingBorder: {
              get: function() {
                return (S.offsetHeight || 0) - (S.clientHeight || 0);
              }
            },
            elHeight: {
              get: function() {
                return n.scrollHeight + (C ? m.elBorder : 0);
              }
            },
            elBorder: {
              get: function() {
                return (n.offsetHeight || 0) - (n.clientHeight || 0);
              }
            },
            wrongSize: {
              get: function() {
                return m.headingHeight + E.scrollHeight !== n.scrollHeight;
              }
            }
          }),
            (m.index = p.push(m) - 1),
            (m.accordion = e),
            (m.el = n),
            (m.heading = S),
            (m.content = E),
            (m.ariaEnabled = !e.noAria),
            (m.heightOffset = e.heightOffset),
            (n.accordionFold = m.index),
            (C = "auto" === C ? 0 !== m.elBorder + m.headingBorder : C),
            D &&
              ((S.tabIndex = 0),
              S.addEventListener(
                "keydown",
                (g = function(t) {
                  var r;
                  switch (t.keyCode) {
                    case 32:
                      t.preventDefault();
                    case 13:
                      (m.open = !m.open),
                        "A" === t.target.tagName && t.preventDefault();
                      break;
                    case 27:
                      t.target.blur();
                      break;
                    case 38:
                      if ((r = m.previousFold)) {
                        var n = r.childAccordions;
                        if (r.open && n) {
                          for (
                            var i, o;
                            n &&
                            (o = (i = n[n.length - 1]).folds[
                              i.folds.length - 1
                            ]).open;

                          )
                            n = o.childAccordions;
                          o.heading.focus();
                        } else r.heading.focus();
                      } else {
                        if (!e.parent) return !0;
                        e.parentFold.heading.focus();
                      }
                      return t.preventDefault(), !1;
                    case 40:
                      n = m.childAccordions;
                      if (m.open && n) n[0].folds[0].heading.focus();
                      else if ((r = m.nextFold)) r.heading.focus();
                      else {
                        if (!m.accordion.parent) return !0;
                        for (var s = m; (s = s.accordion.parentFold); )
                          if ((r = s.nextFold)) {
                            r.heading.focus();
                            break;
                          }
                        if (!s) return !0;
                      }
                      return t.preventDefault(), !1;
                    case 37:
                      m.open
                        ? (m.open = !1)
                        : e.parent && e.parentFold.heading.focus();
                      break;
                    case 39:
                      n = m.childAccordions;
                      m.open
                        ? n && n[0].folds[0].heading.focus()
                        : (m.open = !0);
                  }
                })
              )),
            t &&
              S.addEventListener(
                "touchstart",
                (v = function(e) {
                  (h = window.pageXOffset), (f = window.pageYOffset);
                }),
                {
                  passive: !0
                }
              ),
            S.addEventListener(
              r,
              (y = function(e) {
                return (
                  !(
                    e.target === S ||
                    !S.contains(e.target) ||
                    "A" !== e.target.tagName ||
                    !e.target.href
                  ) ||
                  (("touchend" !== e.type ||
                    (e.cancelable &&
                      window.pageXOffset === h &&
                      window.pageYOffset === f)) &&
                    ((m.open = !m.open), e.preventDefault()),
                  !1)
                );
              })
            );
        },
        f = [],
        v = 0,
        g = function(e, t) {
          var r,
            s,
            a,
            c,
            d = this,
            u = e.classList,
            p =
              void 0 === (t = t || {}).edgeClass ? "edge-visible" : t.edgeClass,
            y = void 0 === t.snapClass ? "snap" : t.snapClass,
            m = void 0 === t.enabledClass ? "accordion" : t.enabledClass,
            S = t.disabledClass;
          Object.defineProperties(d, {
            update: {
              value: x
            },
            updateFold: {
              value: function(e, t) {
                var r = e,
                  n = d.parentFold;
                for (; (r = r.nextFold); ) r.y += t;
                n || R(t),
                  (e.height += t),
                  (d.height += t),
                  n && n.open && d.parent.updateFold(n, t);
              }
            },
            refresh: {
              value: function(e) {
                var t = !!e && y;
                t && u.add(t),
                  d.update(),
                  d.childAccordions &&
                    d.childAccordions.forEach(function(t) {
                      t.parentFold.open
                        ? t.refresh(e)
                        : (t.parentFold.needsRefresh = !0);
                    }),
                  t &&
                    setTimeout(function(e) {
                      u.remove(t);
                    }, 20);
              }
            },
            disabled: {
              get: function() {
                return s;
              },
              set: function(t) {
                if ((t = !!t) !== s) {
                  var r = e.style,
                    n = d.folds;
                  if ((m && o(u, m, !t), S && o(u, S, t), (s = t))) {
                    (r.height = null),
                      y && u.remove(y),
                      p &&
                        (e.removeEventListener(i, d.onTransitionEnd),
                        u.remove(p));
                    for (var a = 0, c = n.length; a < c; ++a)
                      n[a].disabled = !0;
                    d.noAria || e.removeAttribute("role"), --v;
                  } else {
                    for (a = 0, c = n.length; a < c; ++a) n[a].disabled = !1;
                    d.noAria || e.setAttribute("role", "tablist"), ++v, x();
                  }
                  v <= 0
                    ? ((v = 0), g.setResizeRate(!1))
                    : l && g.setResizeRate(l);
                }
              }
            },
            parent: {
              set: function(e) {
                a = e;
              },
              get: function() {
                var e = a;
                if (!e) return null;
                for (; e; ) {
                  if (!e.disabled) return e;
                  e = e.parent;
                }
                return null;
              }
            },
            parentFold: {
              set: function(e) {
                c = e;
              },
              get: function() {
                var e = c;
                if (!e) return null;
                for (var t = e.accordion; e && t; ) {
                  if (!t.disabled) return e;
                  (t = t.parent) && (e = t.parentFold);
                }
                return null;
              }
            },
            height: {
              get: function() {
                return r;
              },
              set: function(t) {
                t && (t = +t) !== r && ((e.style.height = t + "px"), (r = t));
              }
            },
            wrongSize: {
              get: function() {
                for (var e = this.folds, t = e.length, r = 0; r < t; ++r)
                  if (e[r].wrongSize) return !0;
                if ((e = this.childAccordions))
                  for (; r < t; ++r) if (e[r].wrongSize) return !0;
                return !1;
              }
            },
            root: {
              get: function() {
                for (var e = this; e; ) {
                  if (!e.parent) return e;
                  e = e.parent;
                }
              }
            }
          }),
            (d.openClass = t.openClass || "open"),
            (d.closeClass = t.closeClass || "closed"),
            (d.modal = !!t.modal),
            (d.noAria = !!t.noAria),
            (d.noKeys = !!t.noKeys),
            (d.noTransforms = !!t.noTransforms),
            (d.index = f.push(d) - 1),
            (d.heightOffset = +t.heightOffset || 0),
            (d.useBorders = void 0 === t.useBorders ? "auto" : t.useBorders),
            (d.onToggle = t.onToggle);
          var E = [];
          n.call(e.children, function(e) {
            var t = new h(d, e);
            E.push(t);
            var r = E[E.length - 2];
            r && ((r.nextFold = t), (t.previousFold = r));
          }),
            (e.accordion = d.index),
            d.noAria || e.setAttribute("role", "tablist"),
            (d.el = e),
            (d.folds = E),
            !t.disabled && m && u.add(m),
            x();
          for (var b = e; (b = b.parentNode) && 1 === b.nodeType; ) {
            var w = g.getFold(b);
            if (w) {
              var T = w.accordion;
              if (
                ((d.parent = T),
                (d.parentFold = w),
                p && u.remove(p),
                (T.childAccordions = T.childAccordions || []).push(d),
                (w.childAccordions = w.childAccordions || []).push(d),
                w.open)
              ) {
                var D = w.el.scrollHeight,
                  C =
                    w.headingHeight + w.content.scrollHeight - D ||
                    D - w.el.clientHeight;
                T.updateFold(w, C);
              }
              break;
            }
          }
          function R(t) {
            if (p) {
              var r = e.getBoundingClientRect(),
                n = window.innerHeight;
              r.bottom + (t || 0) < n ? u.add(p) : r.bottom > n && u.remove(p);
            }
          }
          function x() {
            for (
              var e, t, n = 0, i = 0, o = 0, s = E.length, a = d.parentFold;
              o < s;
              ++o
            )
              ((e = E[o]).y = n), e.fit(), (n += e.height), (i += e.height);
            (t = i - r),
              a ? a.open && d.parent.updateFold(a, t) : R(t),
              (d.height = i);
          }
          p &&
            e.addEventListener(
              i,
              (this.onTransitionEnd = function(t) {
                !d.parent &&
                  t.target === e &&
                  "height" === t.propertyName &&
                  e.getBoundingClientRect().bottom > window.innerHeight &&
                  u.remove(p);
              })
            ),
            (this.disabled = !!t.disabled);
        };
      "function" == typeof IE8PP && ((g = IE8PP(g)), (h = IE8PP(h))),
        (g.setResizeRate = function(e) {
          var t = function(e) {
              for (var t, r = 0, n = f.length; r < n; ++r)
                (t = f[r]).parent || t.disabled || t.refresh(!0);
            },
            r = g;
          r.onResize && window.removeEventListener("resize", r.onResize),
            !1 !== e &&
              (e = +e || 0) >= 0 &&
              ((r.onResize = e
                ? (function(e, t, r) {
                    t = t < 0 ? 0 : t;
                    var n,
                      i,
                      o,
                      s,
                      a = function() {
                        var l = Date.now() - n;
                        l >= t
                          ? (r || e.apply(i, o),
                            s && clearTimeout(s),
                            (s = i = o = null))
                          : (s = setTimeout(a, t - l));
                      };
                    return function() {
                      if (((i = this), (o = arguments), !t))
                        return e.apply(i, o);
                      (n = Date.now()),
                        s || (r && e.apply(i, o), (s = setTimeout(a, t)));
                    };
                  })(t, e)
                : t),
              window.addEventListener("resize", r.onResize),
              e && (l = e));
        }),
        (g.getAccordion = function(e) {
          for (; e; ) {
            if ("accordion" in e) return f[e.accordion];
            if (!(e = e.parentNode) || 1 !== e.nodeType) return null;
          }
        }),
        (g.getFold = function(e) {
          for (; e; ) {
            if ("accordionFold" in e) return p[e.accordionFold];
            if (!(e = e.parentNode) || 1 !== e.nodeType) return null;
          }
        }),
        g.setResizeRate(25),
        (window.Accordion = g),
        "object" == typeof e.exports && (e.exports.Accordion = g);
    })();
  },
  function(e, t, r) {
    e.exports = (function() {
      return [
        {
          code: "af",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Vorige",
            next: "Volgende",
            today: "Vandag",
            year: "Jaar",
            month: "Maand",
            week: "Week",
            day: "Dag",
            list: "Agenda"
          },
          allDayHtml: "Heeldag",
          eventLimitText: "Addisionele",
          noEventsMessage: "Daar is geen gebeurtenisse nie"
        },
        {
          code: "ar-dz",
          week: {
            dow: 0,
            doy: 4
          },
          dir: "rtl",
          buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
          },
          weekLabel: "أسبوع",
          allDayText: "اليوم كله",
          eventLimitText: "أخرى",
          noEventsMessage: "أي أحداث لعرض"
        },
        {
          code: "ar-kw",
          week: {
            dow: 0,
            doy: 12
          },
          dir: "rtl",
          buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
          },
          weekLabel: "أسبوع",
          allDayText: "اليوم كله",
          eventLimitText: "أخرى",
          noEventsMessage: "أي أحداث لعرض"
        },
        {
          code: "ar-ly",
          week: {
            dow: 6,
            doy: 12
          },
          dir: "rtl",
          buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
          },
          weekLabel: "أسبوع",
          allDayText: "اليوم كله",
          eventLimitText: "أخرى",
          noEventsMessage: "أي أحداث لعرض"
        },
        {
          code: "ar-ma",
          week: {
            dow: 6,
            doy: 12
          },
          dir: "rtl",
          buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
          },
          weekLabel: "أسبوع",
          allDayText: "اليوم كله",
          eventLimitText: "أخرى",
          noEventsMessage: "أي أحداث لعرض"
        },
        {
          code: "ar-sa",
          week: {
            dow: 0,
            doy: 6
          },
          dir: "rtl",
          buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
          },
          weekLabel: "أسبوع",
          allDayText: "اليوم كله",
          eventLimitText: "أخرى",
          noEventsMessage: "أي أحداث لعرض"
        },
        {
          code: "ar-tn",
          week: {
            dow: 1,
            doy: 4
          },
          dir: "rtl",
          buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
          },
          weekLabel: "أسبوع",
          allDayText: "اليوم كله",
          eventLimitText: "أخرى",
          noEventsMessage: "أي أحداث لعرض"
        },
        {
          code: "ar",
          week: {
            dow: 6,
            doy: 12
          },
          dir: "rtl",
          buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
          },
          weekLabel: "أسبوع",
          allDayText: "اليوم كله",
          eventLimitText: "أخرى",
          noEventsMessage: "أي أحداث لعرض"
        },
        {
          code: "bg",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "назад",
            next: "напред",
            today: "днес",
            month: "Месец",
            week: "Седмица",
            day: "Ден",
            list: "График"
          },
          allDayText: "Цял ден",
          eventLimitText: function(e) {
            return "+още " + e;
          },
          noEventsMessage: "Няма събития за показване"
        },
        {
          code: "bs",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Prošli",
            next: "Sljedeći",
            today: "Danas",
            month: "Mjesec",
            week: "Sedmica",
            day: "Dan",
            list: "Raspored"
          },
          weekLabel: "Sed",
          allDayText: "Cijeli dan",
          eventLimitText: function(e) {
            return "+ još " + e;
          },
          noEventsMessage: "Nema događaja za prikazivanje"
        },
        {
          code: "ca",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Anterior",
            next: "Següent",
            today: "Avui",
            month: "Mes",
            week: "Setmana",
            day: "Dia",
            list: "Agenda"
          },
          weekLabel: "Set",
          allDayText: "Tot el dia",
          eventLimitText: "més",
          noEventsMessage: "No hi ha esdeveniments per mostrar"
        },
        {
          code: "cs",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Dříve",
            next: "Později",
            today: "Nyní",
            month: "Měsíc",
            week: "Týden",
            day: "Den",
            list: "Agenda"
          },
          weekLabel: "Týd",
          allDayText: "Celý den",
          eventLimitText: function(e) {
            return "+další: " + e;
          },
          noEventsMessage: "Žádné akce k zobrazení"
        },
        {
          code: "da",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Forrige",
            next: "Næste",
            today: "I dag",
            month: "Måned",
            week: "Uge",
            day: "Dag",
            list: "Agenda"
          },
          weekLabel: "Uge",
          allDayText: "Hele dagen",
          eventLimitText: "flere",
          noEventsMessage: "Ingen arrangementer at vise"
        },
        {
          code: "de",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Zurück",
            next: "Vor",
            today: "Heute",
            year: "Jahr",
            month: "Monat",
            week: "Woche",
            day: "Tag",
            list: "Terminübersicht"
          },
          weekLabel: "KW",
          allDayText: "Ganztägig",
          eventLimitText: function(e) {
            return "+ weitere " + e;
          },
          noEventsMessage: "Keine Ereignisse anzuzeigen"
        },
        {
          code: "el",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Προηγούμενος",
            next: "Επόμενος",
            today: "Σήμερα",
            month: "Μήνας",
            week: "Εβδομάδα",
            day: "Ημέρα",
            list: "Ατζέντα"
          },
          weekLabel: "Εβδ",
          allDayText: "Ολοήμερο",
          eventLimitText: "περισσότερα",
          noEventsMessage: "Δεν υπάρχουν γεγονότα για να εμφανιστεί"
        },
        {
          code: "en-au",
          week: {
            dow: 1,
            doy: 4
          }
        },
        {
          code: "en-gb",
          week: {
            dow: 1,
            doy: 4
          }
        },
        {
          code: "en-nz",
          week: {
            dow: 1,
            doy: 4
          }
        },
        {
          code: "es",
          week: {
            dow: 0,
            doy: 6
          },
          buttonText: {
            prev: "Ant",
            next: "Sig",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Agenda"
          },
          weekLabel: "Sm",
          allDayHtml: "Todo<br/>el día",
          eventLimitText: "más",
          noEventsMessage: "No hay eventos para mostrar"
        },
        {
          code: "es",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Ant",
            next: "Sig",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Agenda"
          },
          weekLabel: "Sm",
          allDayHtml: "Todo<br/>el día",
          eventLimitText: "más",
          noEventsMessage: "No hay eventos para mostrar"
        },
        {
          code: "et",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Eelnev",
            next: "Järgnev",
            today: "Täna",
            month: "Kuu",
            week: "Nädal",
            day: "Päev",
            list: "Päevakord"
          },
          weekLabel: "näd",
          allDayText: "Kogu päev",
          eventLimitText: function(e) {
            return "+ veel " + e;
          },
          noEventsMessage: "Kuvamiseks puuduvad sündmused"
        },
        {
          code: "eu",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Aur",
            next: "Hur",
            today: "Gaur",
            month: "Hilabetea",
            week: "Astea",
            day: "Eguna",
            list: "Agenda"
          },
          weekLabel: "As",
          allDayHtml: "Egun<br/>osoa",
          eventLimitText: "gehiago",
          noEventsMessage: "Ez dago ekitaldirik erakusteko"
        },
        {
          code: "fa",
          week: {
            dow: 6,
            doy: 12
          },
          dir: "rtl",
          buttonText: {
            prev: "قبلی",
            next: "بعدی",
            today: "امروز",
            month: "ماه",
            week: "هفته",
            day: "روز",
            list: "برنامه"
          },
          weekLabel: "هف",
          allDayText: "تمام روز",
          eventLimitText: function(e) {
            return "بیش از " + e;
          },
          noEventsMessage: "هیچ رویدادی به نمایش"
        },
        {
          code: "fi",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Edellinen",
            next: "Seuraava",
            today: "Tänään",
            month: "Kuukausi",
            week: "Viikko",
            day: "Päivä",
            list: "Tapahtumat"
          },
          weekLabel: "Vk",
          allDayText: "Koko päivä",
          eventLimitText: "lisää",
          noEventsMessage: "Ei näytettäviä tapahtumia"
        },
        {
          code: "fr",
          buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
          },
          weekLabel: "Sem.",
          allDayHtml: "Toute la<br/>journée",
          eventLimitText: "en plus",
          noEventsMessage: "Aucun événement à afficher"
        },
        {
          code: "fr-ch",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Courant",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
          },
          weekLabel: "Sm",
          allDayHtml: "Toute la<br/>journée",
          eventLimitText: "en plus",
          noEventsMessage: "Aucun événement à afficher"
        },
        {
          code: "fr",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
          },
          weekLabel: "Sem.",
          allDayHtml: "Toute la<br/>journée",
          eventLimitText: "en plus",
          noEventsMessage: "Aucun événement à afficher"
        },
        {
          code: "gl",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Ant",
            next: "Seg",
            today: "Hoxe",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Axenda"
          },
          weekLabel: "Sm",
          allDayHtml: "Todo<br/>o día",
          eventLimitText: "máis",
          noEventsMessage: "Non hai eventos para amosar"
        },
        {
          code: "he",
          dir: "rtl",
          buttonText: {
            prev: "הקודם",
            next: "הבא",
            today: "היום",
            month: "חודש",
            week: "שבוע",
            day: "יום",
            list: "סדר יום"
          },
          allDayText: "כל היום",
          eventLimitText: "אחר",
          noEventsMessage: "אין אירועים להצגה",
          weekLabel: "שבוע"
        },
        {
          code: "hi",
          week: {
            dow: 0,
            doy: 6
          },
          buttonText: {
            prev: "पिछला",
            next: "अगला",
            today: "आज",
            month: "महीना",
            week: "सप्ताह",
            day: "दिन",
            list: "कार्यसूची"
          },
          weekLabel: "हफ्ता",
          allDayText: "सभी दिन",
          eventLimitText: function(e) {
            return "+अधिक " + e;
          },
          noEventsMessage: "कोई घटनाओं को प्रदर्शित करने के लिए"
        },
        {
          code: "hr",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Prijašnji",
            next: "Sljedeći",
            today: "Danas",
            month: "Mjesec",
            week: "Tjedan",
            day: "Dan",
            list: "Raspored"
          },
          weekLabel: "Tje",
          allDayText: "Cijeli dan",
          eventLimitText: function(e) {
            return "+ još " + e;
          },
          noEventsMessage: "Nema događaja za prikaz"
        },
        {
          code: "hu",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "vissza",
            next: "előre",
            today: "ma",
            month: "Hónap",
            week: "Hét",
            day: "Nap",
            list: "Napló"
          },
          weekLabel: "Hét",
          allDayText: "Egész nap",
          eventLimitText: "további",
          noEventsMessage: "Nincs megjeleníthető esemény"
        },
        {
          code: "id",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "mundur",
            next: "maju",
            today: "hari ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            list: "Agenda"
          },
          weekLabel: "Mg",
          allDayHtml: "Sehari<br/>penuh",
          eventLimitText: "lebih",
          noEventsMessage: "Tidak ada acara untuk ditampilkan"
        },
        {
          code: "is",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Fyrri",
            next: "Næsti",
            today: "Í dag",
            month: "Mánuður",
            week: "Vika",
            day: "Dagur",
            list: "Dagskrá"
          },
          weekLabel: "Vika",
          allDayHtml: "Allan<br/>daginn",
          eventLimitText: "meira",
          noEventsMessage: "Engir viðburðir til að sýna"
        },
        {
          code: "it",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Prec",
            next: "Succ",
            today: "Oggi",
            month: "Mese",
            week: "Settimana",
            day: "Giorno",
            list: "Agenda"
          },
          weekLabel: "Sm",
          allDayHtml: "Tutto il<br/>giorno",
          eventLimitText: function(e) {
            return "+altri " + e;
          },
          noEventsMessage: "Non ci sono eventi da visualizzare"
        },
        {
          code: "ja",
          buttonText: {
            prev: "前",
            next: "次",
            today: "今日",
            month: "月",
            week: "週",
            day: "日",
            list: "予定リスト"
          },
          weekLabel: "週",
          allDayText: "終日",
          eventLimitText: function(e) {
            return "他 " + e + " 件";
          },
          noEventsMessage: "表示する予定はありません"
        },
        {
          code: "ka",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "წინა",
            next: "შემდეგი",
            today: "დღეს",
            month: "თვე",
            week: "კვირა",
            day: "დღე",
            list: "დღის წესრიგი"
          },
          weekLabel: "კვ",
          allDayText: "მთელი დღე",
          eventLimitText: function(e) {
            return "+ კიდევ " + e;
          },
          noEventsMessage: "ღონისძიებები არ არის"
        },
        {
          code: "kk",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Алдыңғы",
            next: "Келесі",
            today: "Бүгін",
            month: "Ай",
            week: "Апта",
            day: "Күн",
            list: "Күн тәртібі"
          },
          weekLabel: "Не",
          allDayText: "Күні бойы",
          eventLimitText: function(e) {
            return "+ тағы " + e;
          },
          noEventsMessage: "Көрсету үшін оқиғалар жоқ"
        },
        {
          code: "ko",
          buttonText: {
            prev: "이전달",
            next: "다음달",
            today: "오늘",
            month: "월",
            week: "주",
            day: "일",
            list: "일정목록"
          },
          weekLabel: "주",
          allDayText: "종일",
          eventLimitText: "개",
          noEventsMessage: "일정이 없습니다"
        },
        {
          code: "lb",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Zréck",
            next: "Weider",
            today: "Haut",
            month: "Mount",
            week: "Woch",
            day: "Dag",
            list: "Terminiwwersiicht"
          },
          weekLabel: "W",
          allDayText: "Ganzen Dag",
          eventLimitText: "méi",
          noEventsMessage: "Nee Evenementer ze affichéieren"
        },
        {
          code: "lt",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Atgal",
            next: "Pirmyn",
            today: "Šiandien",
            month: "Mėnuo",
            week: "Savaitė",
            day: "Diena",
            list: "Darbotvarkė"
          },
          weekLabel: "SAV",
          allDayText: "Visą dieną",
          eventLimitText: "daugiau",
          noEventsMessage: "Nėra įvykių rodyti"
        },
        {
          code: "lv",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Iepr.",
            next: "Nāk.",
            today: "Šodien",
            month: "Mēnesis",
            week: "Nedēļa",
            day: "Diena",
            list: "Dienas kārtība"
          },
          weekLabel: "Ned.",
          allDayText: "Visu dienu",
          eventLimitText: function(e) {
            return "+vēl " + e;
          },
          noEventsMessage: "Nav notikumu"
        },
        {
          code: "mk",
          buttonText: {
            prev: "претходно",
            next: "следно",
            today: "Денес",
            month: "Месец",
            week: "Недела",
            day: "Ден",
            list: "График"
          },
          weekLabel: "Сед",
          allDayText: "Цел ден",
          eventLimitText: function(e) {
            return "+повеќе " + e;
          },
          noEventsMessage: "Нема настани за прикажување"
        },
        {
          code: "ms",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Sebelum",
            next: "Selepas",
            today: "hari ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            list: "Agenda"
          },
          weekLabel: "Mg",
          allDayText: "Sepanjang hari",
          eventLimitText: function(e) {
            return "masih ada " + e + " acara";
          },
          noEventsMessage: "Tiada peristiwa untuk dipaparkan"
        },
        {
          code: "nb",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Forrige",
            next: "Neste",
            today: "I dag",
            month: "Måned",
            week: "Uke",
            day: "Dag",
            list: "Agenda"
          },
          weekLabel: "Uke",
          allDayText: "Hele dagen",
          eventLimitText: "til",
          noEventsMessage: "Ingen hendelser å vise"
        },
        {
          code: "nl",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Voorgaand",
            next: "Volgende",
            today: "Vandaag",
            year: "Jaar",
            month: "Maand",
            week: "Week",
            day: "Dag",
            list: "Agenda"
          },
          allDayText: "Hele dag",
          eventLimitText: "extra",
          noEventsMessage: "Geen evenementen om te laten zien"
        },
        {
          code: "nn",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Førre",
            next: "Neste",
            today: "I dag",
            month: "Månad",
            week: "Veke",
            day: "Dag",
            list: "Agenda"
          },
          weekLabel: "Veke",
          allDayText: "Heile dagen",
          eventLimitText: "til",
          noEventsMessage: "Ingen hendelser å vise"
        },
        {
          code: "pl",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Poprzedni",
            next: "Następny",
            today: "Dziś",
            month: "Miesiąc",
            week: "Tydzień",
            day: "Dzień",
            list: "Plan dnia"
          },
          weekLabel: "Tydz",
          allDayText: "Cały dzień",
          eventLimitText: "więcej",
          noEventsMessage: "Brak wydarzeń do wyświetlenia"
        },
        {
          code: "pt-br",
          buttonText: {
            prev: "Anterior",
            next: "Próximo",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Compromissos"
          },
          weekLabel: "Sm",
          allDayText: "dia inteiro",
          eventLimitText: function(e) {
            return "mais +" + e;
          },
          noEventsMessage: "Não há eventos para mostrar"
        },
        {
          code: "pt",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Anterior",
            next: "Seguinte",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Agenda"
          },
          weekLabel: "Sem",
          allDayText: "Todo o dia",
          eventLimitText: "mais",
          noEventsMessage: "Não há eventos para mostrar"
        },
        {
          code: "ro",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "precedentă",
            next: "următoare",
            today: "Azi",
            month: "Lună",
            week: "Săptămână",
            day: "Zi",
            list: "Agendă"
          },
          weekLabel: "Săpt",
          allDayText: "Toată ziua",
          eventLimitText: function(e) {
            return "+alte " + e;
          },
          noEventsMessage: "Nu există evenimente de afișat"
        },
        {
          code: "ru",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Пред",
            next: "След",
            today: "Сегодня",
            month: "Месяц",
            week: "Неделя",
            day: "День",
            list: "Повестка дня"
          },
          weekLabel: "Нед",
          allDayText: "Весь день",
          eventLimitText: function(e) {
            return "+ ещё " + e;
          },
          noEventsMessage: "Нет событий для отображения"
        },
        {
          code: "sk",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Predchádzajúci",
            next: "Nasledujúci",
            today: "Dnes",
            month: "Mesiac",
            week: "Týždeň",
            day: "Deň",
            list: "Rozvrh"
          },
          weekLabel: "Ty",
          allDayText: "Celý deň",
          eventLimitText: function(e) {
            return "+ďalšie: " + e;
          },
          noEventsMessage: "Žiadne akcie na zobrazenie"
        },
        {
          code: "sl",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Prejšnji",
            next: "Naslednji",
            today: "Trenutni",
            month: "Mesec",
            week: "Teden",
            day: "Dan",
            list: "Dnevni red"
          },
          weekLabel: "Teden",
          allDayText: "Ves dan",
          eventLimitText: "več",
          noEventsMessage: "Ni dogodkov za prikaz"
        },
        {
          code: "sq",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "mbrapa",
            next: "Përpara",
            today: "sot",
            month: "Muaj",
            week: "Javë",
            day: "Ditë",
            list: "Listë"
          },
          weekLabel: "Ja",
          allDayHtml: "Gjithë<br/>ditën",
          eventLimitText: function(e) {
            return "+më tepër " + e;
          },
          noEventsMessage: "Nuk ka evente për të shfaqur"
        },
        {
          code: "sr-cyrl",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Претходна",
            next: "следећи",
            today: "Данас",
            month: "Месец",
            week: "Недеља",
            day: "Дан",
            list: "Планер"
          },
          weekLabel: "Сед",
          allDayText: "Цео дан",
          eventLimitText: function(e) {
            return "+ још " + e;
          },
          noEventsMessage: "Нема догађаја за приказ"
        },
        {
          code: "sr",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Prethodna",
            next: "Sledeći",
            today: "Danas",
            month: "Mеsеc",
            week: "Nеdеlja",
            day: "Dan",
            list: "Planеr"
          },
          weekLabel: "Sed",
          allDayText: "Cеo dan",
          eventLimitText: function(e) {
            return "+ još " + e;
          },
          noEventsMessage: "Nеma događaja za prikaz"
        },
        {
          code: "sv",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Förra",
            next: "Nästa",
            today: "Idag",
            month: "Månad",
            week: "Vecka",
            day: "Dag",
            list: "Program"
          },
          weekLabel: "v.",
          allDayText: "Heldag",
          eventLimitText: "till",
          noEventsMessage: "Inga händelser att visa"
        },
        {
          code: "th",
          buttonText: {
            prev: "ย้อน",
            next: "ถัดไป",
            today: "วันนี้",
            month: "เดือน",
            week: "สัปดาห์",
            day: "วัน",
            list: "แผนงาน"
          },
          allDayText: "ตลอดวัน",
          eventLimitText: "เพิ่มเติม",
          noEventsMessage: "ไม่มีกิจกรรมที่จะแสดง"
        },
        {
          code: "tr",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "geri",
            next: "ileri",
            today: "bugün",
            month: "Ay",
            week: "Hafta",
            day: "Gün",
            list: "Ajanda"
          },
          weekLabel: "Hf",
          allDayText: "Tüm gün",
          eventLimitText: "daha fazla",
          noEventsMessage: "Gösterilecek etkinlik yok"
        },
        {
          code: "uk",
          week: {
            dow: 1,
            doy: 7
          },
          buttonText: {
            prev: "Попередній",
            next: "далі",
            today: "Сьогодні",
            month: "Місяць",
            week: "Тиждень",
            day: "День",
            list: "Порядок денний"
          },
          weekLabel: "Тиж",
          allDayText: "Увесь день",
          eventLimitText: function(e) {
            return "+ще " + e + "...";
          },
          noEventsMessage: "Немає подій для відображення"
        },
        {
          code: "vi",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "Trước",
            next: "Tiếp",
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
            list: "Lịch biểu"
          },
          weekLabel: "Tu",
          allDayText: "Cả ngày",
          eventLimitText: function(e) {
            return "+ thêm " + e;
          },
          noEventsMessage: "Không có sự kiện để hiển thị"
        },
        {
          code: "zh-cn",
          week: {
            dow: 1,
            doy: 4
          },
          buttonText: {
            prev: "上月",
            next: "下月",
            today: "今天",
            month: "月",
            week: "周",
            day: "日",
            list: "日程"
          },
          weekLabel: "周",
          allDayText: "全天",
          eventLimitText: function(e) {
            return "另外 " + e + " 个";
          },
          noEventsMessage: "没有事件显示"
        },
        {
          code: "zh-tw",
          buttonText: {
            prev: "上月",
            next: "下月",
            today: "今天",
            month: "月",
            week: "週",
            day: "天",
            list: "活動列表"
          },
          weekLabel: "周",
          allDayText: "整天",
          eventLimitText: "顯示更多",
          noEventsMessage: "没有任何活動"
        }
      ];
    })();
  },
  function(e, t, r) {},
  function(e, t, r) {},
  function(e, t, r) {},
  ,
  ,
  ,
  ,
  function(e, t, r) {
    r.r(t);
    var n = r(9);
    r(11), r(12);
    function i(e, t) {
      return (
        (r = (t || document).querySelectorAll(e)), Array.prototype.slice.call(r)
      );
      var r;
    }
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var o = function(e, t) {
      return (o =
        Object.setPrototypeOf ||
        ({
          __proto__: []
        } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, t);
    };
    function s(e, t) {
      function r() {
        this.constructor = e;
      }
      o(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    /*!
FullCalendar Core Package v4.3.1
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
    var a = {
        className: !0,
        colSpan: !0,
        rowSpan: !0
      },
      l = {
        "<tr": "tbody",
        "<td": "tr"
      };
    function c(e, t, r) {
      var n = document.createElement(e);
      if (t)
        for (var i in t)
          "style" === i
            ? R(n, t[i])
            : a[i]
            ? (n[i] = t[i])
            : n.setAttribute(i, t[i]);
      return "string" == typeof r ? (n.innerHTML = r) : null != r && h(n, r), n;
    }
    function d(e) {
      e = e.trim();
      var t = document.createElement(p(e));
      return (t.innerHTML = e), t.firstChild;
    }
    function u(e) {
      return Array.prototype.slice.call(
        (function(e) {
          e = e.trim();
          var t = document.createElement(p(e));
          return (t.innerHTML = e), t.childNodes;
        })(e)
      );
    }
    function p(e) {
      return l[e.substr(0, 3)] || "div";
    }
    function h(e, t) {
      for (var r = g(t), n = 0; n < r.length; n++) e.appendChild(r[n]);
    }
    function f(e, t) {
      for (var r = g(t), n = e.firstChild || null, i = 0; i < r.length; i++)
        e.insertBefore(r[i], n);
    }
    function v(e, t) {
      for (var r = g(t), n = e.nextSibling || null, i = 0; i < r.length; i++)
        e.parentNode.insertBefore(r[i], n);
    }
    function g(e) {
      return "string" == typeof e
        ? u(e)
        : e instanceof Node
        ? [e]
        : Array.prototype.slice.call(e);
    }
    function y(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    var m =
        Element.prototype.matches ||
        Element.prototype.matchesSelector ||
        Element.prototype.msMatchesSelector,
      S =
        Element.prototype.closest ||
        function(e) {
          var t = this;
          if (!document.documentElement.contains(t)) return null;
          do {
            if (b(t, e)) return t;
            t = t.parentElement || t.parentNode;
          } while (null !== t && 1 === t.nodeType);
          return null;
        };
    function E(e, t) {
      return S.call(e, t);
    }
    function b(e, t) {
      return m.call(e, t);
    }
    function w(e, t) {
      for (
        var r = e instanceof HTMLElement ? [e] : e, n = [], i = 0;
        i < r.length;
        i++
      )
        for (var o = r[i].querySelectorAll(t), s = 0; s < o.length; s++)
          n.push(o[s]);
      return n;
    }
    function T(e, t) {
      for (
        var r = e instanceof HTMLElement ? [e] : e, n = [], i = 0;
        i < r.length;
        i++
      )
        for (var o = r[i].children, s = 0; s < o.length; s++) {
          var a = o[s];
          (t && !b(a, t)) || n.push(a);
        }
      return n;
    }
    function D(e, t, r) {
      r ? e.classList.add(t) : e.classList.remove(t);
    }
    var C = /(top|left|right|bottom|width|height)$/i;
    function R(e, t) {
      for (var r in t) x(e, r, t[r]);
    }
    function x(e, t, r) {
      null == r
        ? (e.style[t] = "")
        : "number" == typeof r && C.test(t)
        ? (e.style[t] = r + "px")
        : (e.style[t] = r);
    }
    function I(e, t) {
      return (
        e.left >= t.left &&
        e.left < t.right &&
        e.top >= t.top &&
        e.top < t.bottom
      );
    }
    function k(e, t) {
      var r = {
        left: Math.max(e.left, t.left),
        right: Math.min(e.right, t.right),
        top: Math.max(e.top, t.top),
        bottom: Math.min(e.bottom, t.bottom)
      };
      return r.left < r.right && r.top < r.bottom && r;
    }
    function M(e, t, r) {
      return {
        left: e.left + t,
        right: e.right + t,
        top: e.top + r,
        bottom: e.bottom + r
      };
    }
    var P = null;
    function H() {
      return (
        null === P &&
          (P = (function() {
            var e = c(
              "div",
              {
                style: {
                  position: "absolute",
                  top: -1e3,
                  left: 0,
                  border: 0,
                  padding: 0,
                  overflow: "scroll",
                  direction: "rtl"
                }
              },
              "<div></div>"
            );
            document.body.appendChild(e);
            var t =
              e.firstChild.getBoundingClientRect().left >
              e.getBoundingClientRect().left;
            return y(e), t;
          })()),
        P
      );
    }
    function _(e) {
      return (e = Math.max(0, e)), (e = Math.round(e));
    }
    function L(e, t) {
      void 0 === t && (t = !1);
      var r = window.getComputedStyle(e),
        n = parseInt(r.borderLeftWidth, 10) || 0,
        i = parseInt(r.borderRightWidth, 10) || 0,
        o = parseInt(r.borderTopWidth, 10) || 0,
        s = parseInt(r.borderBottomWidth, 10) || 0,
        a = _(e.offsetWidth - e.clientWidth - n - i),
        l = {
          borderLeft: n,
          borderRight: i,
          borderTop: o,
          borderBottom: s,
          scrollbarBottom: _(e.offsetHeight - e.clientHeight - o - s),
          scrollbarLeft: 0,
          scrollbarRight: 0
        };
      return (
        H() && "rtl" === r.direction
          ? (l.scrollbarLeft = a)
          : (l.scrollbarRight = a),
        t &&
          ((l.paddingLeft = parseInt(r.paddingLeft, 10) || 0),
          (l.paddingRight = parseInt(r.paddingRight, 10) || 0),
          (l.paddingTop = parseInt(r.paddingTop, 10) || 0),
          (l.paddingBottom = parseInt(r.paddingBottom, 10) || 0)),
        l
      );
    }
    function O(e, t) {
      void 0 === t && (t = !1);
      var r = A(e),
        n = L(e, t),
        i = {
          left: r.left + n.borderLeft + n.scrollbarLeft,
          right: r.right - n.borderRight - n.scrollbarRight,
          top: r.top + n.borderTop,
          bottom: r.bottom - n.borderBottom - n.scrollbarBottom
        };
      return (
        t &&
          ((i.left += n.paddingLeft),
          (i.right -= n.paddingRight),
          (i.top += n.paddingTop),
          (i.bottom -= n.paddingBottom)),
        i
      );
    }
    function A(e) {
      var t = e.getBoundingClientRect();
      return {
        left: t.left + window.pageXOffset,
        top: t.top + window.pageYOffset,
        right: t.right + window.pageXOffset,
        bottom: t.bottom + window.pageYOffset
      };
    }
    function N(e) {
      return e.getBoundingClientRect().height + z(e);
    }
    function z(e) {
      var t = window.getComputedStyle(e);
      return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10);
    }
    function B(e) {
      for (var t = []; e instanceof HTMLElement; ) {
        var r = window.getComputedStyle(e);
        if ("fixed" === r.position) break;
        /(auto|scroll)/.test(r.overflow + r.overflowY + r.overflowX) &&
          t.push(e),
          (e = e.parentNode);
      }
      return t;
    }
    function U(e) {
      return B(e)
        .map(function(e) {
          return O(e);
        })
        .concat({
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          top: window.pageYOffset,
          bottom: window.pageYOffset + document.documentElement.clientHeight
        })
        .reduce(function(e, t) {
          return k(e, t) || t;
        });
    }
    function j(e) {
      e.preventDefault();
    }
    function G(e, t, r, n) {
      function i(e) {
        var t = E(e.target, r);
        t && n.call(t, e, t);
      }
      return (
        e.addEventListener(t, i),
        function() {
          e.removeEventListener(t, i);
        }
      );
    }
    var V = [
      "webkitTransitionEnd",
      "otransitionend",
      "oTransitionEnd",
      "msTransitionEnd",
      "transitionend"
    ];
    var W = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    function F(e, t) {
      var r = te(e);
      return (r[2] += 7 * t), re(r);
    }
    function q(e, t) {
      var r = te(e);
      return (r[2] += t), re(r);
    }
    function Y(e, t) {
      var r = te(e);
      return (r[6] += t), re(r);
    }
    function Z(e, t) {
      return (t.valueOf() - e.valueOf()) / 864e5;
    }
    function X(e, t) {
      return ie(e) === ie(t) ? Math.round(Z(e, t)) : null;
    }
    function K(e) {
      return re([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
    }
    function J(e, t, r, n) {
      var i = re([t, 0, 1 + Q(t, r, n)]),
        o = K(e),
        s = Math.round(Z(i, o));
      return Math.floor(s / 7) + 1;
    }
    function Q(e, t, r) {
      var n = 7 + t - r;
      return -((7 + re([e, 0, n]).getUTCDay() - t) % 7) + n - 1;
    }
    function $(e) {
      return [
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        e.getMinutes(),
        e.getSeconds(),
        e.getMilliseconds()
      ];
    }
    function ee(e) {
      return new Date(
        e[0],
        e[1] || 0,
        null == e[2] ? 1 : e[2],
        e[3] || 0,
        e[4] || 0,
        e[5] || 0
      );
    }
    function te(e) {
      return [
        e.getUTCFullYear(),
        e.getUTCMonth(),
        e.getUTCDate(),
        e.getUTCHours(),
        e.getUTCMinutes(),
        e.getUTCSeconds(),
        e.getUTCMilliseconds()
      ];
    }
    function re(e) {
      return (
        1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
      );
    }
    function ne(e) {
      return !isNaN(e.valueOf());
    }
    function ie(e) {
      return (
        1e3 * e.getUTCHours() * 60 * 60 +
        1e3 * e.getUTCMinutes() * 60 +
        1e3 * e.getUTCSeconds() +
        e.getUTCMilliseconds()
      );
    }
    var oe = ["years", "months", "days", "milliseconds"],
      se = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function ae(e, t) {
      var r;
      return "string" == typeof e
        ? (function(e) {
            var t = se.exec(e);
            if (t) {
              var r = t[1] ? -1 : 1;
              return {
                years: 0,
                months: 0,
                days: r * (t[2] ? parseInt(t[2], 10) : 0),
                milliseconds:
                  r *
                  (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                    60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                    1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                    (t[6] ? parseInt(t[6], 10) : 0))
              };
            }
            return null;
          })(e)
        : "object" == typeof e && e
        ? le(e)
        : "number" == typeof e
        ? le((((r = {})[t || "milliseconds"] = e), r))
        : null;
    }
    function le(e) {
      return {
        years: e.years || e.year || 0,
        months: e.months || e.month || 0,
        days: (e.days || e.day || 0) + 7 * ce(e),
        milliseconds:
          60 * (e.hours || e.hour || 0) * 60 * 1e3 +
          60 * (e.minutes || e.minute || 0) * 1e3 +
          1e3 * (e.seconds || e.second || 0) +
          (e.milliseconds || e.millisecond || e.ms || 0)
      };
    }
    function ce(e) {
      return e.weeks || e.week || 0;
    }
    function de(e, t) {
      return (
        e.years === t.years &&
        e.months === t.months &&
        e.days === t.days &&
        e.milliseconds === t.milliseconds
      );
    }
    function ue(e) {
      return (
        0 === e.years && 0 === e.months && 1 === e.days && 0 === e.milliseconds
      );
    }
    function pe(e, t) {
      return {
        years: e.years + t.years,
        months: e.months + t.months,
        days: e.days + t.days,
        milliseconds: e.milliseconds + t.milliseconds
      };
    }
    function he(e, t) {
      return {
        years: e.years * t,
        months: e.months * t,
        days: e.days * t,
        milliseconds: e.milliseconds * t
      };
    }
    function fe(e) {
      return ve(e) / 864e5;
    }
    function ve(e) {
      return (
        31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
      );
    }
    function ge(e, t) {
      for (var r = null, n = 0; n < oe.length; n++) {
        var i = oe[n];
        if (t[i]) {
          var o = e[i] / t[i];
          if (!_e(o) || (null !== r && r !== o)) return null;
          r = o;
        } else if (e[i]) return null;
      }
      return r;
    }
    function ye(e, t) {
      var r = e.milliseconds;
      if (r) {
        if (r % 1e3 != 0)
          return {
            unit: "millisecond",
            value: r
          };
        if (r % 6e4 != 0)
          return {
            unit: "second",
            value: r / 1e3
          };
        if (r % 36e5 != 0)
          return {
            unit: "minute",
            value: r / 6e4
          };
        if (r)
          return {
            unit: "hour",
            value: r / 36e5
          };
      }
      return e.days
        ? t || e.days % 7 != 0
          ? {
              unit: "day",
              value: e.days
            }
          : {
              unit: "week",
              value: e.days / 7
            }
        : e.months
        ? {
            unit: "month",
            value: e.months
          }
        : e.years
        ? {
            unit: "year",
            value: e.years
          }
        : {
            unit: "millisecond",
            value: 0
          };
    }
    function me(e, t) {
      t.left &&
        R(e, {
          borderLeftWidth: 1,
          marginLeft: t.left - 1
        }),
        t.right &&
          R(e, {
            borderRightWidth: 1,
            marginRight: t.right - 1
          });
    }
    function Se(e) {
      R(e, {
        marginLeft: "",
        marginRight: "",
        borderLeftWidth: "",
        borderRightWidth: ""
      });
    }
    function Ee() {
      document.body.classList.add("fc-not-allowed");
    }
    function be() {
      document.body.classList.remove("fc-not-allowed");
    }
    function we(e, t, r) {
      var n = Math.floor(t / e.length),
        i = Math.floor(t - n * (e.length - 1)),
        o = [],
        s = [],
        a = [],
        l = 0;
      Te(e),
        e.forEach(function(t, r) {
          var c = r === e.length - 1 ? i : n,
            d = t.getBoundingClientRect().height,
            u = d + z(t);
          u < c ? (o.push(t), s.push(u), a.push(d)) : (l += u);
        }),
        r &&
          ((t -= l),
          (n = Math.floor(t / o.length)),
          (i = Math.floor(t - n * (o.length - 1)))),
        o.forEach(function(e, t) {
          var r = t === o.length - 1 ? i : n,
            l = s[t],
            c = r - (l - a[t]);
          l < r && (e.style.height = c + "px");
        });
    }
    function Te(e) {
      e.forEach(function(e) {
        e.style.height = "";
      });
    }
    function De(e) {
      var t = 0;
      return (
        e.forEach(function(e) {
          var r = e.firstChild;
          if (r instanceof HTMLElement) {
            var n = r.getBoundingClientRect().width;
            n > t && (t = n);
          }
        }),
        t++,
        e.forEach(function(e) {
          e.style.width = t + "px";
        }),
        t
      );
    }
    function Ce(e, t) {
      var r = {
        position: "relative",
        left: -1
      };
      R(e, r), R(t, r);
      var n =
          e.getBoundingClientRect().height - t.getBoundingClientRect().height,
        i = {
          position: "",
          left: ""
        };
      return R(e, i), R(t, i), n;
    }
    function Re(e) {
      var t,
        r,
        n = [],
        i = [];
      for (
        "string" == typeof e
          ? (i = e.split(/\s*,\s*/))
          : "function" == typeof e
          ? (i = [e])
          : Array.isArray(e) && (i = e),
          t = 0;
        t < i.length;
        t++
      )
        "string" == typeof (r = i[t])
          ? n.push(
              "-" === r.charAt(0)
                ? {
                    field: r.substring(1),
                    order: -1
                  }
                : {
                    field: r,
                    order: 1
                  }
            )
          : "function" == typeof r &&
            n.push({
              func: r
            });
      return n;
    }
    function xe(e, t, r) {
      var n, i;
      for (n = 0; n < r.length; n++) if ((i = Ie(e, t, r[n]))) return i;
      return 0;
    }
    function Ie(e, t, r) {
      return r.func
        ? r.func(e, t)
        : ke(e[r.field], t[r.field]) * (r.order || 1);
    }
    function ke(e, t) {
      return e || t
        ? null == t
          ? -1
          : null == e
          ? 1
          : "string" == typeof e || "string" == typeof t
          ? String(e).localeCompare(String(t))
          : e - t
        : 0;
    }
    function Me(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    function Pe(e, t) {
      var r = String(e);
      return "000".substr(0, t - r.length) + r;
    }
    function He(e, t) {
      return e - t;
    }
    function _e(e) {
      return e % 1 == 0;
    }
    function Le(e, t, r) {
      if (("function" == typeof e && (e = [e]), e)) {
        var n = void 0,
          i = void 0;
        for (n = 0; n < e.length; n++) i = e[n].apply(t, r) || i;
        return i;
      }
    }
    function Oe() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var r = 0; r < e.length; r++) if (void 0 !== e[r]) return e[r];
    }
    function Ae(e, t) {
      var r,
        n,
        i,
        o,
        s,
        a = function() {
          var l = new Date().valueOf() - o;
          l < t
            ? (r = setTimeout(a, t - l))
            : ((r = null), (s = e.apply(i, n)), (i = n = null));
        };
      return function() {
        return (
          (i = this),
          (n = arguments),
          (o = new Date().valueOf()),
          r || (r = setTimeout(a, t)),
          s
        );
      };
    }
    function Ne(e, t, r, n) {
      void 0 === r && (r = {});
      var i = {};
      for (var o in t) {
        var s = t[o];
        void 0 !== e[o]
          ? s === Function
            ? (i[o] = "function" == typeof e[o] ? e[o] : null)
            : (i[o] = s ? s(e[o]) : e[o])
          : void 0 !== r[o]
          ? (i[o] = r[o])
          : s === String
          ? (i[o] = "")
          : s && s !== Number && s !== Boolean && s !== Function
          ? (i[o] = s(null))
          : (i[o] = null);
      }
      if (n) for (var o in e) void 0 === t[o] && (n[o] = e[o]);
      return i;
    }
    function ze(e) {
      var t = Math.floor(Z(e.start, e.end)) || 1,
        r = K(e.start);
      return {
        start: r,
        end: q(r, t)
      };
    }
    function Be(e, t) {
      void 0 === t && (t = ae(0));
      var r = null,
        n = null;
      if (e.end) {
        n = K(e.end);
        var i = e.end.valueOf() - n.valueOf();
        i && i >= ve(t) && (n = q(n, 1));
      }
      return (
        e.start && ((r = K(e.start)), n && n <= r && (n = q(r, 1))),
        {
          start: r,
          end: n
        }
      );
    }
    function Ue(e) {
      var t = Be(e);
      return Z(t.start, t.end) > 1;
    }
    function je(e, t, r, n) {
      return "year" === n
        ? ae(r.diffWholeYears(e, t), "year")
        : "month" === n
        ? ae(r.diffWholeMonths(e, t), "month")
        : ((o = t),
          (s = K((i = e))),
          (a = K(o)),
          {
            years: 0,
            months: 0,
            days: Math.round(Z(s, a)),
            milliseconds:
              o.valueOf() - a.valueOf() - (i.valueOf() - s.valueOf())
          });
      var i, o, s, a;
    }
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var Ge = function(e, t) {
      return (Ge =
        Object.setPrototypeOf ||
        ({
          __proto__: []
        } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, t);
    };
    function Ve(e, t) {
      function r() {
        this.constructor = e;
      }
      Ge(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var We = function() {
      return (We =
        Object.assign ||
        function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
    function Fe(e, t, r, n, i) {
      var o = i[e.recurringDef.typeId].expand(
        e.recurringDef.typeData,
        {
          start: n.subtract(r.start, t),
          end: r.end
        },
        n
      );
      return e.allDay && (o = o.map(K)), o;
    }
    var qe = Object.prototype.hasOwnProperty;
    function Ye(e, t) {
      var r,
        n,
        i,
        o,
        s,
        a,
        l = {};
      if (t)
        for (r = 0; r < t.length; r++) {
          for (n = t[r], i = [], o = e.length - 1; o >= 0; o--)
            if ("object" == typeof (s = e[o][n]) && s) i.unshift(s);
            else if (void 0 !== s) {
              l[n] = s;
              break;
            }
          i.length && (l[n] = Ye(i));
        }
      for (r = e.length - 1; r >= 0; r--)
        for (n in (a = e[r])) n in l || (l[n] = a[n]);
      return l;
    }
    function Ze(e, t) {
      var r = {};
      for (var n in e) t(e[n], n) && (r[n] = e[n]);
      return r;
    }
    function Xe(e, t) {
      var r = {};
      for (var n in e) r[n] = t(e[n], n);
      return r;
    }
    function Ke(e) {
      for (var t = {}, r = 0, n = e; r < n.length; r++) {
        t[n[r]] = !0;
      }
      return t;
    }
    function Je(e) {
      var t = [];
      for (var r in e) t.push(e[r]);
      return t;
    }
    function Qe(e, t) {
      for (var r in e) if (qe.call(e, r) && !(r in t)) return !1;
      for (var r in t) if (qe.call(t, r) && e[r] !== t[r]) return !1;
      return !0;
    }
    function $e(e, t, r, n) {
      for (
        var i = {
            defs: {},
            instances: {}
          },
          o = 0,
          s = e;
        o < s.length;
        o++
      ) {
        var a = ur(s[o], t, r, n);
        a && et(a, i);
      }
      return i;
    }
    function et(e, t) {
      return (
        void 0 === t &&
          (t = {
            defs: {},
            instances: {}
          }),
        (t.defs[e.def.defId] = e.def),
        e.instance && (t.instances[e.instance.instanceId] = e.instance),
        t
      );
    }
    function tt(e, t, r) {
      var n = r.dateEnv,
        i = e.defs,
        o = e.instances;
      for (var s in ((o = Ze(o, function(e) {
        return !i[e.defId].recurringDef;
      })),
      i)) {
        var a = i[s];
        if (a.recurringDef) {
          var l = a.recurringDef.duration;
          l ||
            (l = a.allDay
              ? r.defaultAllDayEventDuration
              : r.defaultTimedEventDuration);
          for (
            var c = 0,
              d = Fe(a, l, t, r.dateEnv, r.pluginSystem.hooks.recurringTypes);
            c < d.length;
            c++
          ) {
            var u = d[c],
              p = hr(s, {
                start: u,
                end: n.add(u, l)
              });
            o[p.instanceId] = p;
          }
        }
      }
      return {
        defs: i,
        instances: o
      };
    }
    function rt(e, t) {
      var r = e.instances[t];
      if (r) {
        var n = e.defs[r.defId],
          i = ot(e, function(e) {
            return (
              (t = n), (r = e), Boolean(t.groupId && t.groupId === r.groupId)
            );
            var t, r;
          });
        return (i.defs[n.defId] = n), (i.instances[r.instanceId] = r), i;
      }
      return {
        defs: {},
        instances: {}
      };
    }
    function nt(e, t) {
      var r;
      if (t) {
        r = [];
        for (var n = 0, i = e; n < i.length; n++) {
          var o = i[n],
            s = t(o);
          s ? r.push(s) : null == s && r.push(o);
        }
      } else r = e;
      return r;
    }
    function it(e, t) {
      return {
        defs: We({}, e.defs, t.defs),
        instances: We({}, e.instances, t.instances)
      };
    }
    function ot(e, t) {
      var r = Ze(e.defs, t),
        n = Ze(e.instances, function(e) {
          return r[e.defId];
        });
      return {
        defs: r,
        instances: n
      };
    }
    function st(e, t) {
      var r = null,
        n = null;
      return (
        e.start && (r = t.createMarker(e.start)),
        e.end && (n = t.createMarker(e.end)),
        r || n
          ? r && n && n < r
            ? null
            : {
                start: r,
                end: n
              }
          : null
      );
    }
    function at(e, t) {
      var r,
        n,
        i = [],
        o = t.start;
      for (e.sort(lt), r = 0; r < e.length; r++)
        (n = e[r]).start > o &&
          i.push({
            start: o,
            end: n.start
          }),
          n.end > o && (o = n.end);
      return (
        o < t.end &&
          i.push({
            start: o,
            end: t.end
          }),
        i
      );
    }
    function lt(e, t) {
      return e.start.valueOf() - t.start.valueOf();
    }
    function ct(e, t) {
      var r = e.start,
        n = e.end,
        i = null;
      return (
        null !== t.start &&
          (r =
            null === r
              ? t.start
              : new Date(Math.max(r.valueOf(), t.start.valueOf()))),
        null != t.end &&
          (n =
            null === n
              ? t.end
              : new Date(Math.min(n.valueOf(), t.end.valueOf()))),
        (null === r || null === n || r < n) &&
          (i = {
            start: r,
            end: n
          }),
        i
      );
    }
    function dt(e, t) {
      return (
        (null === e.start ? null : e.start.valueOf()) ===
          (null === t.start ? null : t.start.valueOf()) &&
        (null === e.end ? null : e.end.valueOf()) ===
          (null === t.end ? null : t.end.valueOf())
      );
    }
    function ut(e, t) {
      return (
        (null === e.end || null === t.start || e.end > t.start) &&
        (null === e.start || null === t.end || e.start < t.end)
      );
    }
    function pt(e, t) {
      return (
        (null === e.start || (null !== t.start && t.start >= e.start)) &&
        (null === e.end || (null !== t.end && t.end <= e.end))
      );
    }
    function ht(e, t) {
      return (
        (null === e.start || t >= e.start) && (null === e.end || t < e.end)
      );
    }
    function ft(e, t) {
      var r,
        n = e.length;
      if (n !== t.length) return !1;
      for (r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
      return !0;
    }
    function vt(e) {
      var t, r;
      return function() {
        return (
          (t && ft(t, arguments)) ||
            ((t = arguments), (r = e.apply(this, arguments))),
          r
        );
      };
    }
    function gt(e, t) {
      var r = null;
      return function() {
        var n = e.apply(this, arguments);
        return (null === r || (r !== n && !t(r, n))) && (r = n), r;
      };
    }
    var yt = {
        week: 3,
        separator: 0,
        omitZeroMinute: 0,
        meridiem: 0,
        omitCommas: 0
      },
      mt = {
        timeZoneName: 7,
        era: 6,
        year: 5,
        month: 4,
        day: 2,
        weekday: 2,
        hour: 1,
        minute: 1,
        second: 1
      },
      St = /\s*([ap])\.?m\.?/i,
      Et = /,/g,
      bt = /\s+/g,
      wt = /\u200e/g,
      Tt = /UTC|GMT/,
      Dt = (function() {
        function e(e) {
          var t = {},
            r = {},
            n = 0;
          for (var i in e)
            i in yt
              ? ((r[i] = e[i]), (n = Math.max(yt[i], n)))
              : ((t[i] = e[i]), i in mt && (n = Math.max(mt[i], n)));
          (this.standardDateProps = t),
            (this.extendedSettings = r),
            (this.severity = n),
            (this.buildFormattingFunc = vt(Ct));
        }
        return (
          (e.prototype.format = function(e, t) {
            return this.buildFormattingFunc(
              this.standardDateProps,
              this.extendedSettings,
              t
            )(e);
          }),
          (e.prototype.formatRange = function(e, t, r) {
            var n = this.standardDateProps,
              i = this.extendedSettings,
              o = (function(e, t, r) {
                if (r.getMarkerYear(e) !== r.getMarkerYear(t)) return 5;
                if (r.getMarkerMonth(e) !== r.getMarkerMonth(t)) return 4;
                if (r.getMarkerDay(e) !== r.getMarkerDay(t)) return 2;
                if (ie(e) !== ie(t)) return 1;
                return 0;
              })(e.marker, t.marker, r.calendarSystem);
            if (!o) return this.format(e, r);
            var s = o;
            !(s > 1) ||
              ("numeric" !== n.year && "2-digit" !== n.year) ||
              ("numeric" !== n.month && "2-digit" !== n.month) ||
              ("numeric" !== n.day && "2-digit" !== n.day) ||
              (s = 1);
            var a = this.format(e, r),
              l = this.format(t, r);
            if (a === l) return a;
            var c = Ct(
                (function(e, t) {
                  var r = {};
                  for (var n in e) (n in mt && !(mt[n] <= t)) || (r[n] = e[n]);
                  return r;
                })(n, s),
                i,
                r
              ),
              d = c(e),
              u = c(t),
              p = (function(e, t, r, n) {
                var i = 0;
                for (; i < e.length; ) {
                  var o = e.indexOf(t, i);
                  if (-1 === o) break;
                  var s = e.substr(0, o);
                  i = o + t.length;
                  for (var a = e.substr(i), l = 0; l < r.length; ) {
                    var c = r.indexOf(n, l);
                    if (-1 === c) break;
                    var d = r.substr(0, c);
                    l = c + n.length;
                    var u = r.substr(l);
                    if (s === d && a === u)
                      return {
                        before: s,
                        after: a
                      };
                  }
                }
                return null;
              })(a, d, l, u),
              h = i.separator || "";
            return p ? p.before + d + h + u + p.after : a + h + l;
          }),
          (e.prototype.getLargestUnit = function() {
            switch (this.severity) {
              case 7:
              case 6:
              case 5:
                return "year";
              case 4:
                return "month";
              case 3:
                return "week";
              default:
                return "day";
            }
          }),
          e
        );
      })();
    function Ct(e, t, r) {
      var n = Object.keys(e).length;
      return 1 === n && "short" === e.timeZoneName
        ? function(e) {
            return kt(e.timeZoneOffset);
          }
        : 0 === n && t.week
        ? function(e) {
            return (function(e, t, r, n) {
              var i = [];
              "narrow" === n ? i.push(t) : "short" === n && i.push(t, " ");
              i.push(r.simpleNumberFormat.format(e)),
                r.options.isRtl && i.reverse();
              return i.join("");
            })(r.computeWeekNumber(e.marker), r.weekLabel, r.locale, t.week);
          }
        : (function(e, t, r) {
            (e = We({}, e)),
              (t = We({}, t)),
              (function(e, t) {
                e.timeZoneName &&
                  (e.hour || (e.hour = "2-digit"),
                  e.minute || (e.minute = "2-digit"));
                "long" === e.timeZoneName && (e.timeZoneName = "short");
                t.omitZeroMinute &&
                  (e.second || e.millisecond) &&
                  delete t.omitZeroMinute;
              })(e, t),
              (e.timeZone = "UTC");
            var n,
              i = new Intl.DateTimeFormat(r.locale.codes, e);
            if (t.omitZeroMinute) {
              var o = We({}, e);
              delete o.minute, (n = new Intl.DateTimeFormat(r.locale.codes, o));
            }
            return function(o) {
              var s = o.marker;
              return (function(e, t, r, n, i) {
                (e = e.replace(wt, "")),
                  "short" === r.timeZoneName &&
                    (e = (function(e, t) {
                      var r = !1;
                      (e = e.replace(Tt, function() {
                        return (r = !0), t;
                      })),
                        r || (e += " " + t);
                      return e;
                    })(
                      e,
                      "UTC" === i.timeZone || null == t.timeZoneOffset
                        ? "UTC"
                        : kt(t.timeZoneOffset)
                    ));
                n.omitCommas && (e = e.replace(Et, "").trim());
                n.omitZeroMinute && (e = e.replace(":00", ""));
                !1 === n.meridiem
                  ? (e = e.replace(St, "").trim())
                  : "narrow" === n.meridiem
                  ? (e = e.replace(St, function(e, t) {
                      return t.toLocaleLowerCase();
                    }))
                  : "short" === n.meridiem
                  ? (e = e.replace(St, function(e, t) {
                      return t.toLocaleLowerCase() + "m";
                    }))
                  : "lowercase" === n.meridiem &&
                    (e = e.replace(St, function(e) {
                      return e.toLocaleLowerCase();
                    }));
                return (e = (e = e.replace(bt, " ")).trim());
              })((n && !s.getUTCMinutes() ? n : i).format(s), o, e, t, r);
            };
          })(e, t, r);
    }
    var Rt = (function() {
        function e(e, t) {
          (this.cmdStr = e), (this.separator = t);
        }
        return (
          (e.prototype.format = function(e, t) {
            return t.cmdFormatter(this.cmdStr, Mt(e, null, t, this.separator));
          }),
          (e.prototype.formatRange = function(e, t, r) {
            return r.cmdFormatter(this.cmdStr, Mt(e, t, r, this.separator));
          }),
          e
        );
      })(),
      xt = (function() {
        function e(e) {
          this.func = e;
        }
        return (
          (e.prototype.format = function(e, t) {
            return this.func(Mt(e, null, t));
          }),
          (e.prototype.formatRange = function(e, t, r) {
            return this.func(Mt(e, t, r));
          }),
          e
        );
      })();
    function It(e, t) {
      return "object" == typeof e && e
        ? ("string" == typeof t &&
            (e = We(
              {
                separator: t
              },
              e
            )),
          new Dt(e))
        : "string" == typeof e
        ? new Rt(e, t)
        : "function" == typeof e
        ? new xt(e)
        : void 0;
    }
    function kt(e, t) {
      void 0 === t && (t = !1);
      var r = e < 0 ? "-" : "+",
        n = Math.abs(e),
        i = Math.floor(n / 60),
        o = Math.round(n % 60);
      return t
        ? r + Pe(i, 2) + ":" + Pe(o, 2)
        : "GMT" + r + i + (o ? ":" + Pe(o, 2) : "");
    }
    function Mt(e, t, r, n) {
      var i = Pt(e, r.calendarSystem);
      return {
        date: i,
        start: i,
        end: t ? Pt(t, r.calendarSystem) : null,
        timeZone: r.timeZone,
        localeCodes: r.locale.codes,
        separator: n
      };
    }
    function Pt(e, t) {
      var r = t.markerToArray(e.marker);
      return {
        marker: e.marker,
        timeZoneOffset: e.timeZoneOffset,
        array: r,
        year: r[0],
        month: r[1],
        day: r[2],
        hour: r[3],
        minute: r[4],
        second: r[5],
        millisecond: r[6]
      };
    }
    var Ht = (function() {
        function e(e, t) {
          (this.calendar = e), (this.internalEventSource = t);
        }
        return (
          (e.prototype.remove = function() {
            this.calendar.dispatch({
              type: "REMOVE_EVENT_SOURCE",
              sourceId: this.internalEventSource.sourceId
            });
          }),
          (e.prototype.refetch = function() {
            this.calendar.dispatch({
              type: "FETCH_EVENT_SOURCES",
              sourceIds: [this.internalEventSource.sourceId]
            });
          }),
          Object.defineProperty(e.prototype, "id", {
            get: function() {
              return this.internalEventSource.publicId;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "url", {
            get: function() {
              return this.internalEventSource.meta.url;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      _t = (function() {
        function e(e, t, r) {
          (this._calendar = e), (this._def = t), (this._instance = r || null);
        }
        return (
          (e.prototype.setProp = function(e, t) {
            var r, n;
            if (e in cr);
            else if (e in lr)
              "function" == typeof lr[e] && (t = lr[e](t)),
                this.mutate({
                  standardProps: ((r = {}), (r[e] = t), r)
                });
            else if (e in rr) {
              var i = void 0;
              "function" == typeof rr[e] && (t = rr[e](t)),
                "color" === e
                  ? (i = {
                      backgroundColor: t,
                      borderColor: t
                    })
                  : "editable" === e
                  ? (i = {
                      startEditable: t,
                      durationEditable: t
                    })
                  : (((n = {})[e] = t), (i = n)),
                this.mutate({
                  standardProps: {
                    ui: i
                  }
                });
            }
          }),
          (e.prototype.setExtendedProp = function(e, t) {
            var r;
            this.mutate({
              extendedProps: ((r = {}), (r[e] = t), r)
            });
          }),
          (e.prototype.setStart = function(e, t) {
            void 0 === t && (t = {});
            var r = this._calendar.dateEnv,
              n = r.createMarker(e);
            if (n && this._instance) {
              var i = je(this._instance.range.start, n, r, t.granularity);
              t.maintainDuration
                ? this.mutate({
                    datesDelta: i
                  })
                : this.mutate({
                    startDelta: i
                  });
            }
          }),
          (e.prototype.setEnd = function(e, t) {
            void 0 === t && (t = {});
            var r,
              n = this._calendar.dateEnv;
            if ((null == e || (r = n.createMarker(e))) && this._instance)
              if (r) {
                var i = je(this._instance.range.end, r, n, t.granularity);
                this.mutate({
                  endDelta: i
                });
              } else
                this.mutate({
                  standardProps: {
                    hasEnd: !1
                  }
                });
          }),
          (e.prototype.setDates = function(e, t, r) {
            void 0 === r && (r = {});
            var n,
              i = this._calendar.dateEnv,
              o = {
                allDay: r.allDay
              },
              s = i.createMarker(e);
            if (s && (null == t || (n = i.createMarker(t))) && this._instance) {
              var a = this._instance.range;
              !0 === r.allDay && (a = ze(a));
              var l = je(a.start, s, i, r.granularity);
              if (n) {
                var c = je(a.end, n, i, r.granularity);
                de(l, c)
                  ? this.mutate({
                      datesDelta: l,
                      standardProps: o
                    })
                  : this.mutate({
                      startDelta: l,
                      endDelta: c,
                      standardProps: o
                    });
              } else
                (o.hasEnd = !1),
                  this.mutate({
                    datesDelta: l,
                    standardProps: o
                  });
            }
          }),
          (e.prototype.moveStart = function(e) {
            var t = ae(e);
            t &&
              this.mutate({
                startDelta: t
              });
          }),
          (e.prototype.moveEnd = function(e) {
            var t = ae(e);
            t &&
              this.mutate({
                endDelta: t
              });
          }),
          (e.prototype.moveDates = function(e) {
            var t = ae(e);
            t &&
              this.mutate({
                datesDelta: t
              });
          }),
          (e.prototype.setAllDay = function(e, t) {
            void 0 === t && (t = {});
            var r = {
                allDay: e
              },
              n = t.maintainDuration;
            null == n && (n = this._calendar.opt("allDayMaintainDuration")),
              this._def.allDay !== e && (r.hasEnd = n),
              this.mutate({
                standardProps: r
              });
          }),
          (e.prototype.formatRange = function(e) {
            var t = this._calendar.dateEnv,
              r = this._instance,
              n = It(e, this._calendar.opt("defaultRangeSeparator"));
            return this._def.hasEnd
              ? t.formatRange(r.range.start, r.range.end, n, {
                  forcedStartTzo: r.forcedStartTzo,
                  forcedEndTzo: r.forcedEndTzo
                })
              : t.format(r.range.start, n, {
                  forcedTzo: r.forcedStartTzo
                });
          }),
          (e.prototype.mutate = function(e) {
            var t = this._def,
              r = this._instance;
            if (r) {
              this._calendar.dispatch({
                type: "MUTATE_EVENTS",
                instanceId: r.instanceId,
                mutation: e,
                fromApi: !0
              });
              var n = this._calendar.state.eventStore;
              (this._def = n.defs[t.defId]),
                (this._instance = n.instances[r.instanceId]);
            }
          }),
          (e.prototype.remove = function() {
            this._calendar.dispatch({
              type: "REMOVE_EVENT_DEF",
              defId: this._def.defId
            });
          }),
          Object.defineProperty(e.prototype, "source", {
            get: function() {
              var e = this._def.sourceId;
              return e
                ? new Ht(this._calendar, this._calendar.state.eventSources[e])
                : null;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "start", {
            get: function() {
              return this._instance
                ? this._calendar.dateEnv.toDate(this._instance.range.start)
                : null;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "end", {
            get: function() {
              return this._instance && this._def.hasEnd
                ? this._calendar.dateEnv.toDate(this._instance.range.end)
                : null;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "id", {
            get: function() {
              return this._def.publicId;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "groupId", {
            get: function() {
              return this._def.groupId;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "allDay", {
            get: function() {
              return this._def.allDay;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "title", {
            get: function() {
              return this._def.title;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "url", {
            get: function() {
              return this._def.url;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "rendering", {
            get: function() {
              return this._def.rendering;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "startEditable", {
            get: function() {
              return this._def.ui.startEditable;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "durationEditable", {
            get: function() {
              return this._def.ui.durationEditable;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "constraint", {
            get: function() {
              return this._def.ui.constraints[0] || null;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "overlap", {
            get: function() {
              return this._def.ui.overlap;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "allow", {
            get: function() {
              return this._def.ui.allows[0] || null;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "backgroundColor", {
            get: function() {
              return this._def.ui.backgroundColor;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "borderColor", {
            get: function() {
              return this._def.ui.borderColor;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "textColor", {
            get: function() {
              return this._def.ui.textColor;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "classNames", {
            get: function() {
              return this._def.ui.classNames;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "extendedProps", {
            get: function() {
              return this._def.extendedProps;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })();
    function Lt(e, t, r, n) {
      var i = {},
        o = {},
        s = {},
        a = [],
        l = [],
        c = zt(e.defs, t);
      for (var d in e.defs) {
        "inverse-background" === (E = e.defs[d]).rendering &&
          (E.groupId
            ? ((i[E.groupId] = []), s[E.groupId] || (s[E.groupId] = E))
            : (o[d] = []));
      }
      for (var u in e.instances) {
        var p = e.instances[u],
          h = c[(E = e.defs[p.defId]).defId],
          f = p.range,
          v = !E.allDay && n ? Be(f, n) : f,
          g = ct(v, r);
        g &&
          ("inverse-background" === E.rendering
            ? E.groupId
              ? i[E.groupId].push(g)
              : o[p.defId].push(g)
            : ("background" === E.rendering ? a : l).push({
                def: E,
                ui: h,
                instance: p,
                range: g,
                isStart: v.start && v.start.valueOf() === g.start.valueOf(),
                isEnd: v.end && v.end.valueOf() === g.end.valueOf()
              }));
      }
      for (var y in i)
        for (var m = 0, S = at(i[y], r); m < S.length; m++) {
          var E,
            b = S[m];
          h = c[(E = s[y]).defId];
          a.push({
            def: E,
            ui: h,
            instance: null,
            range: b,
            isStart: !1,
            isEnd: !1
          });
        }
      for (var d in o)
        for (var w = 0, T = at(o[d], r); w < T.length; w++) {
          b = T[w];
          a.push({
            def: e.defs[d],
            ui: c[d],
            instance: null,
            range: b,
            isStart: !1,
            isEnd: !1
          });
        }
      return {
        bg: a,
        fg: l
      };
    }
    function Ot(e, t, r) {
      e.hasPublicHandlers("eventRender") &&
        (t = t.filter(function(t) {
          var n = e.publiclyTrigger("eventRender", [
            {
              event: new _t(
                e.calendar,
                t.eventRange.def,
                t.eventRange.instance
              ),
              isMirror: r,
              isStart: t.isStart,
              isEnd: t.isEnd,
              el: t.el,
              view: e
            }
          ]);
          return !1 !== n && (n && !0 !== n && (t.el = n), !0);
        }));
      for (var n = 0, i = t; n < i.length; n++) {
        var o = i[n];
        At(o.el, o);
      }
      return t;
    }
    function At(e, t) {
      e.fcSeg = t;
    }
    function Nt(e) {
      return e.fcSeg || null;
    }
    function zt(e, t) {
      return Xe(e, function(e) {
        return Bt(e, t);
      });
    }
    function Bt(e, t) {
      var r = [];
      return (
        t[""] && r.push(t[""]),
        t[e.defId] && r.push(t[e.defId]),
        r.push(e.ui),
        sr(r)
      );
    }
    function Ut(e, t, r, n) {
      var i = zt(e.defs, t),
        o = {
          defs: {},
          instances: {}
        };
      for (var s in e.defs) {
        var a = e.defs[s];
        o.defs[s] = jt(
          a,
          i[s],
          r,
          n.pluginSystem.hooks.eventDefMutationAppliers,
          n
        );
      }
      for (var l in e.instances) {
        var c = e.instances[l];
        a = o.defs[c.defId];
        o.instances[l] = Gt(c, a, i[c.defId], r, n);
      }
      return o;
    }
    function jt(e, t, r, n, i) {
      var o = r.standardProps || {};
      null == o.hasEnd &&
        t.durationEditable &&
        (r.startDelta || r.endDelta) &&
        (o.hasEnd = !0);
      var s = We({}, e, o, {
        ui: We({}, e.ui, o.ui)
      });
      r.extendedProps &&
        (s.extendedProps = We({}, s.extendedProps, r.extendedProps));
      for (var a = 0, l = n; a < l.length; a++) {
        (0, l[a])(s, r, i);
      }
      return !s.hasEnd && i.opt("forceEventDuration") && (s.hasEnd = !0), s;
    }
    function Gt(e, t, r, n, i) {
      var o = i.dateEnv,
        s = n.standardProps && !0 === n.standardProps.allDay,
        a = n.standardProps && !1 === n.standardProps.hasEnd,
        l = We({}, e);
      return (
        s && (l.range = ze(l.range)),
        n.datesDelta &&
          r.startEditable &&
          (l.range = {
            start: o.add(l.range.start, n.datesDelta),
            end: o.add(l.range.end, n.datesDelta)
          }),
        n.startDelta &&
          r.durationEditable &&
          (l.range = {
            start: o.add(l.range.start, n.startDelta),
            end: l.range.end
          }),
        n.endDelta &&
          r.durationEditable &&
          (l.range = {
            start: l.range.start,
            end: o.add(l.range.end, n.endDelta)
          }),
        a &&
          (l.range = {
            start: l.range.start,
            end: i.getDefaultEventEnd(t.allDay, l.range.start)
          }),
        t.allDay &&
          (l.range = {
            start: K(l.range.start),
            end: K(l.range.end)
          }),
        l.range.end < l.range.start &&
          (l.range.end = i.getDefaultEventEnd(t.allDay, l.range.start)),
        l
      );
    }
    function Vt(e, t, r, n, i) {
      switch (t.type) {
        case "RECEIVE_EVENTS":
          return (function(e, t, r, n, i, o) {
            if (t && r === t.latestFetchId) {
              var s = $e(
                (function(e, t, r) {
                  var n = r.opt("eventDataTransform"),
                    i = t ? t.eventDataTransform : null;
                  return i && (e = nt(e, i)), n && (e = nt(e, n)), e;
                })(i, t, o),
                t.sourceId,
                o
              );
              return n && (s = tt(s, n, o)), it(Wt(e, t.sourceId), s);
            }
            return e;
          })(e, r[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
        case "ADD_EVENTS":
          return (function(e, t, r, n) {
            r && (t = tt(t, r, n));
            return it(e, t);
          })(e, t.eventStore, n ? n.activeRange : null, i);
        case "MERGE_EVENTS":
          return it(e, t.eventStore);
        case "PREV":
        case "NEXT":
        case "SET_DATE":
        case "SET_VIEW_TYPE":
          return n ? tt(e, n.activeRange, i) : e;
        case "CHANGE_TIMEZONE":
          return (function(e, t, r) {
            var n = e.defs,
              i = Xe(e.instances, function(e) {
                var i = n[e.defId];
                return i.allDay || i.recurringDef
                  ? e
                  : We({}, e, {
                      range: {
                        start: r.createMarker(
                          t.toDate(e.range.start, e.forcedStartTzo)
                        ),
                        end: r.createMarker(
                          t.toDate(e.range.end, e.forcedEndTzo)
                        )
                      },
                      forcedStartTzo: r.canComputeOffset
                        ? null
                        : e.forcedStartTzo,
                      forcedEndTzo: r.canComputeOffset ? null : e.forcedEndTzo
                    });
              });
            return {
              defs: n,
              instances: i
            };
          })(e, t.oldDateEnv, i.dateEnv);
        case "MUTATE_EVENTS":
          return (function(e, t, r, n, i) {
            var o = rt(e, t),
              s = n
                ? {
                    "": {
                      startEditable: !0,
                      durationEditable: !0,
                      constraints: [],
                      overlap: null,
                      allows: [],
                      backgroundColor: "",
                      borderColor: "",
                      textColor: "",
                      classNames: []
                    }
                  }
                : i.eventUiBases;
            return (o = Ut(o, s, r, i)), it(e, o);
          })(e, t.instanceId, t.mutation, t.fromApi, i);
        case "REMOVE_EVENT_INSTANCES":
          return Ft(e, t.instances);
        case "REMOVE_EVENT_DEF":
          return ot(e, function(e) {
            return e.defId !== t.defId;
          });
        case "REMOVE_EVENT_SOURCE":
          return Wt(e, t.sourceId);
        case "REMOVE_ALL_EVENT_SOURCES":
          return ot(e, function(e) {
            return !e.sourceId;
          });
        case "REMOVE_ALL_EVENTS":
          return {
            defs: {},
            instances: {}
          };
        case "RESET_EVENTS":
          return {
            defs: e.defs,
            instances: e.instances
          };
        default:
          return e;
      }
    }
    function Wt(e, t) {
      return ot(e, function(e) {
        return e.sourceId !== t;
      });
    }
    function Ft(e, t) {
      return {
        defs: e.defs,
        instances: Ze(e.instances, function(e) {
          return !t[e.instanceId];
        })
      };
    }
    function qt(e, t) {
      return Yt(
        {
          eventDrag: e
        },
        t
      );
    }
    function Yt(e, t) {
      var r = t.view,
        n = We(
          {
            businessHours: r
              ? r.props.businessHours
              : {
                  defs: {},
                  instances: {}
                },
            dateSelection: "",
            eventStore: t.state.eventStore,
            eventUiBases: t.eventUiBases,
            eventSelection: "",
            eventDrag: null,
            eventResize: null
          },
          e
        );
      return (t.pluginSystem.hooks.isPropsValid || Zt)(n, t);
    }
    function Zt(e, t, r, n) {
      return (
        void 0 === r && (r = {}),
        !(
          e.eventDrag &&
          !(function(e, t, r, n) {
            var i = e.eventDrag,
              o = i.mutatedEvents,
              s = o.defs,
              a = o.instances,
              l = zt(
                s,
                i.isEvent
                  ? e.eventUiBases
                  : {
                      "": t.selectionConfig
                    }
              );
            n && (l = Xe(l, n));
            var c = Ft(e.eventStore, i.affectedEvents.instances),
              d = c.defs,
              u = c.instances,
              p = zt(d, e.eventUiBases);
            for (var h in a) {
              var f = a[h],
                v = f.range,
                g = l[f.defId],
                y = s[f.defId];
              if (!Xt(g.constraints, v, c, e.businessHours, t)) return !1;
              var m = t.opt("eventOverlap");
              for (var S in ("function" != typeof m && (m = null), u)) {
                var E = u[S];
                if (ut(v, E.range)) {
                  if (!1 === p[E.defId].overlap && i.isEvent) return !1;
                  if (!1 === g.overlap) return !1;
                  if (m && !m(new _t(t, d[E.defId], E), new _t(t, y, f)))
                    return !1;
                }
              }
              for (
                var b = t.state.eventStore, w = 0, T = g.allows;
                w < T.length;
                w++
              ) {
                var D = T[w],
                  C = We({}, r, {
                    range: f.range,
                    allDay: y.allDay
                  }),
                  R = b.defs[y.defId],
                  x = b.instances[h],
                  I = void 0;
                if (
                  ((I = R ? new _t(t, R, x) : new _t(t, y)),
                  !D(t.buildDateSpanApi(C), I))
                )
                  return !1;
              }
            }
            return !0;
          })(e, t, r, n)
        ) &&
          !(
            e.dateSelection &&
            !(function(e, t, r, n) {
              var i = e.eventStore,
                o = i.defs,
                s = i.instances,
                a = e.dateSelection,
                l = a.range,
                c = t.selectionConfig;
              n && (c = n(c));
              if (!Xt(c.constraints, l, i, e.businessHours, t)) return !1;
              var d = t.opt("selectOverlap");
              "function" != typeof d && (d = null);
              for (var u in s) {
                var p = s[u];
                if (ut(l, p.range)) {
                  if (!1 === c.overlap) return !1;
                  if (d && !d(new _t(t, o[p.defId], p))) return !1;
                }
              }
              for (var h = 0, f = c.allows; h < f.length; h++) {
                var v = f[h],
                  g = We({}, r, a);
                if (!v(t.buildDateSpanApi(g), null)) return !1;
              }
              return !0;
            })(e, t, r, n)
          )
      );
    }
    function Xt(e, t, r, n, i) {
      for (var o = 0, s = e; o < s.length; o++) {
        if (!Qt(Kt(s[o], t, r, n, i), t)) return !1;
      }
      return !0;
    }
    function Kt(e, t, r, n, i) {
      return "businessHours" === e
        ? Jt(tt(n, t, i))
        : "string" == typeof e
        ? Jt(
            ot(r, function(t) {
              return t.groupId === e;
            })
          )
        : "object" == typeof e && e
        ? Jt(tt(e, t, i))
        : [];
    }
    function Jt(e) {
      var t = e.instances,
        r = [];
      for (var n in t) r.push(t[n].range);
      return r;
    }
    function Qt(e, t) {
      for (var r = 0, n = e; r < n.length; r++) {
        if (pt(n[r], t)) return !0;
      }
      return !1;
    }
    function $t(e) {
      return (e + "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&#039;")
        .replace(/"/g, "&quot;")
        .replace(/\n/g, "<br />");
    }
    function er(e) {
      var t = [];
      for (var r in e) {
        var n = e[r];
        null != n && "" !== n && t.push(r + ":" + n);
      }
      return t.join(";");
    }
    function tr(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [];
    }
    var rr = {
      editable: Boolean,
      startEditable: Boolean,
      durationEditable: Boolean,
      constraint: null,
      overlap: null,
      allow: null,
      className: tr,
      classNames: tr,
      color: String,
      backgroundColor: String,
      borderColor: String,
      textColor: String
    };
    function nr(e, t, r) {
      var n = Ne(e, rr, {}, r),
        i = (function(e, t) {
          return Array.isArray(e)
            ? $e(e, "", t, !0)
            : "object" == typeof e && e
            ? $e([e], "", t, !0)
            : null != e
            ? String(e)
            : null;
        })(n.constraint, t);
      return {
        startEditable: null != n.startEditable ? n.startEditable : n.editable,
        durationEditable:
          null != n.durationEditable ? n.durationEditable : n.editable,
        constraints: null != i ? [i] : [],
        overlap: n.overlap,
        allows: null != n.allow ? [n.allow] : [],
        backgroundColor: n.backgroundColor || n.color,
        borderColor: n.borderColor || n.color,
        textColor: n.textColor,
        classNames: n.classNames.concat(n.className)
      };
    }
    function ir(e, t, r, n) {
      var i = {},
        o = {};
      for (var s in rr) {
        var a = e + Me(s);
        (i[s] = t[a]), (o[a] = !0);
      }
      if (("event" === e && (i.editable = t.editable), n))
        for (var s in t) o[s] || (n[s] = t[s]);
      return nr(i, r);
    }
    var or = {
      startEditable: null,
      durationEditable: null,
      constraints: [],
      overlap: null,
      allows: [],
      backgroundColor: "",
      borderColor: "",
      textColor: "",
      classNames: []
    };
    function sr(e) {
      return e.reduce(ar, or);
    }
    function ar(e, t) {
      return {
        startEditable:
          null != t.startEditable ? t.startEditable : e.startEditable,
        durationEditable:
          null != t.durationEditable ? t.durationEditable : e.durationEditable,
        constraints: e.constraints.concat(t.constraints),
        overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
        allows: e.allows.concat(t.allows),
        backgroundColor: t.backgroundColor || e.backgroundColor,
        borderColor: t.borderColor || e.borderColor,
        textColor: t.textColor || e.textColor,
        classNames: e.classNames.concat(t.classNames)
      };
    }
    var lr = {
        id: String,
        groupId: String,
        title: String,
        url: String,
        rendering: String,
        extendedProps: null
      },
      cr = {
        start: null,
        date: null,
        end: null,
        allDay: null
      },
      dr = 0;
    function ur(e, t, r, n) {
      var i = (function(e, t) {
          var r = null;
          if (e) {
            var n = t.state.eventSources[e];
            r = n.allDayDefault;
          }
          null == r && (r = t.opt("allDayDefault"));
          return r;
        })(t, r),
        o = {},
        s = (function(e, t, r, n, i) {
          for (var o = 0; o < n.length; o++) {
            var s = {},
              a = n[o].parse(e, s, r);
            if (a) {
              var l = s.allDay;
              return (
                delete s.allDay,
                null == l &&
                  null == (l = t) &&
                  null == (l = a.allDayGuess) &&
                  (l = !1),
                We(i, s),
                {
                  allDay: l,
                  duration: a.duration,
                  typeData: a.typeData,
                  typeId: o
                }
              );
            }
          }
          return null;
        })(e, i, r.dateEnv, r.pluginSystem.hooks.recurringTypes, o);
      if (s)
        return (
          ((a = pr(o, t, s.allDay, Boolean(s.duration), r)).recurringDef = {
            typeId: s.typeId,
            typeData: s.typeData,
            duration: s.duration
          }),
          {
            def: a,
            instance: null
          }
        );
      var a,
        l = {},
        c = (function(e, t, r, n, i) {
          var o,
            s,
            a = (function(e, t) {
              var r = Ne(e, cr, {}, t);
              return (
                (r.start = null !== r.start ? r.start : r.date),
                delete r.date,
                r
              );
            })(e, n),
            l = a.allDay,
            c = null,
            d = !1,
            u = null;
          if ((o = r.dateEnv.createMarkerMeta(a.start))) c = o.marker;
          else if (!i) return null;
          null != a.end && (s = r.dateEnv.createMarkerMeta(a.end));
          null == l &&
            (l =
              null != t
                ? t
                : (!o || o.isTimeUnspecified) && (!s || s.isTimeUnspecified));
          l && c && (c = K(c));
          s && ((u = s.marker), l && (u = K(u)), c && u <= c && (u = null));
          u
            ? (d = !0)
            : i ||
              ((d = r.opt("forceEventDuration") || !1),
              (u = r.dateEnv.add(
                c,
                l ? r.defaultAllDayEventDuration : r.defaultTimedEventDuration
              )));
          return {
            allDay: l,
            hasEnd: d,
            range: {
              start: c,
              end: u
            },
            forcedStartTzo: o ? o.forcedTzo : null,
            forcedEndTzo: s ? s.forcedTzo : null
          };
        })(e, i, r, l, n);
      return c
        ? {
            def: (a = pr(l, t, c.allDay, c.hasEnd, r)),
            instance: hr(a.defId, c.range, c.forcedStartTzo, c.forcedEndTzo)
          }
        : null;
    }
    function pr(e, t, r, n, i) {
      var o = {},
        s = (function(e, t, r) {
          var n = {},
            i = Ne(e, lr, {}, n),
            o = nr(n, t, r);
          return (i.publicId = i.id), delete i.id, (i.ui = o), i;
        })(e, i, o);
      (s.defId = String(dr++)),
        (s.sourceId = t),
        (s.allDay = r),
        (s.hasEnd = n);
      for (
        var a = 0, l = i.pluginSystem.hooks.eventDefParsers;
        a < l.length;
        a++
      ) {
        var c = {};
        (0, l[a])(s, o, c), (o = c);
      }
      return (
        (s.extendedProps = We(o, s.extendedProps || {})),
        Object.freeze(s.ui.classNames),
        Object.freeze(s.extendedProps),
        s
      );
    }
    function hr(e, t, r, n) {
      return {
        instanceId: String(dr++),
        defId: e,
        range: t,
        forcedStartTzo: null == r ? null : r,
        forcedEndTzo: null == n ? null : n
      };
    }
    var fr = {
      startTime: "09:00",
      endTime: "17:00",
      daysOfWeek: [1, 2, 3, 4, 5],
      rendering: "inverse-background",
      classNames: "fc-nonbusiness",
      groupId: "_businessHours"
    };
    function vr(e, t) {
      return $e(
        (function(e) {
          var t;
          t =
            !0 === e
              ? [{}]
              : Array.isArray(e)
              ? e.filter(function(e) {
                  return e.daysOfWeek;
                })
              : "object" == typeof e && e
              ? [e]
              : [];
          return (t = t.map(function(e) {
            return We({}, fr, e);
          }));
        })(e),
        "",
        t
      );
    }
    function gr(e, t, r) {
      void 0 === r && (r = []);
      var n,
        i,
        o = [];
      function s() {
        if (i) {
          for (var e = 0, r = o; e < r.length; e++) {
            r[e].unrender();
          }
          t && t.apply(n, i), (i = null);
        }
      }
      function a() {
        (i && ft(i, arguments)) ||
          (s(), (n = this), (i = arguments), e.apply(this, arguments));
      }
      (a.dependents = o), (a.unrender = s);
      for (var l = 0, c = r; l < c.length; l++) {
        c[l].dependents.push(a);
      }
      return a;
    }
    var yr = {
        defs: {},
        instances: {}
      },
      mr = (function() {
        function e() {
          (this.getKeysForEventDefs = vt(this._getKeysForEventDefs)),
            (this.splitDateSelection = vt(this._splitDateSpan)),
            (this.splitEventStore = vt(this._splitEventStore)),
            (this.splitIndividualUi = vt(this._splitIndividualUi)),
            (this.splitEventDrag = vt(this._splitInteraction)),
            (this.splitEventResize = vt(this._splitInteraction)),
            (this.eventUiBuilders = {});
        }
        return (
          (e.prototype.splitProps = function(e) {
            var t = this,
              r = this.getKeyInfo(e),
              n = this.getKeysForEventDefs(e.eventStore),
              i = this.splitDateSelection(e.dateSelection),
              o = this.splitIndividualUi(e.eventUiBases, n),
              s = this.splitEventStore(e.eventStore, n),
              a = this.splitEventDrag(e.eventDrag),
              l = this.splitEventResize(e.eventResize),
              c = {};
            for (var d in ((this.eventUiBuilders = Xe(r, function(e, r) {
              return t.eventUiBuilders[r] || vt(Sr);
            })),
            r)) {
              var u = r[d],
                p = s[d] || yr,
                h = this.eventUiBuilders[d];
              c[d] = {
                businessHours: u.businessHours || e.businessHours,
                dateSelection: i[d] || null,
                eventStore: p,
                eventUiBases: h(e.eventUiBases[""], u.ui, o[d]),
                eventSelection: p.instances[e.eventSelection]
                  ? e.eventSelection
                  : "",
                eventDrag: a[d] || null,
                eventResize: l[d] || null
              };
            }
            return c;
          }),
          (e.prototype._splitDateSpan = function(e) {
            var t = {};
            if (e)
              for (
                var r = 0, n = this.getKeysForDateSpan(e);
                r < n.length;
                r++
              ) {
                t[n[r]] = e;
              }
            return t;
          }),
          (e.prototype._getKeysForEventDefs = function(e) {
            var t = this;
            return Xe(e.defs, function(e) {
              return t.getKeysForEventDef(e);
            });
          }),
          (e.prototype._splitEventStore = function(e, t) {
            var r = e.defs,
              n = e.instances,
              i = {};
            for (var o in r)
              for (var s = 0, a = t[o]; s < a.length; s++) {
                i[(p = a[s])] ||
                  (i[p] = {
                    defs: {},
                    instances: {}
                  }),
                  (i[p].defs[o] = r[o]);
              }
            for (var l in n)
              for (var c = n[l], d = 0, u = t[c.defId]; d < u.length; d++) {
                var p;
                i[(p = u[d])] && (i[p].instances[l] = c);
              }
            return i;
          }),
          (e.prototype._splitIndividualUi = function(e, t) {
            var r = {};
            for (var n in e)
              if (n)
                for (var i = 0, o = t[n]; i < o.length; i++) {
                  var s = o[i];
                  r[s] || (r[s] = {}), (r[s][n] = e[n]);
                }
            return r;
          }),
          (e.prototype._splitInteraction = function(e) {
            var t = {};
            if (e) {
              var r = this._splitEventStore(
                  e.affectedEvents,
                  this._getKeysForEventDefs(e.affectedEvents)
                ),
                n = this._getKeysForEventDefs(e.mutatedEvents),
                i = this._splitEventStore(e.mutatedEvents, n),
                o = function(n) {
                  t[n] ||
                    (t[n] = {
                      affectedEvents: r[n] || yr,
                      mutatedEvents: i[n] || yr,
                      isEvent: e.isEvent,
                      origSeg: e.origSeg
                    });
                };
              for (var s in r) o(s);
              for (var s in i) o(s);
            }
            return t;
          }),
          e
        );
      })();
    function Sr(e, t, r) {
      var n = [];
      e && n.push(e), t && n.push(t);
      var i = {
        "": sr(n)
      };
      return r && We(i, r), i;
    }
    function Er(e, t, r, n) {
      var i,
        o,
        s,
        a,
        l = e.dateEnv;
      return (
        t instanceof Date
          ? (i = t)
          : ((i = t.date), (o = t.type), (s = t.forceOff)),
        (a = {
          date: l.formatIso(i, {
            omitTime: !0
          }),
          type: o || "day"
        }),
        "string" == typeof r && ((n = r), (r = null)),
        (r = r
          ? " " +
            (function(e) {
              var t = [];
              for (var r in e) {
                var n = e[r];
                null != n && t.push(r + '="' + $t(n) + '"');
              }
              return t.join(" ");
            })(r)
          : ""),
        (n = n || ""),
        !s && e.opt("navLinks")
          ? "<a" +
            r +
            ' data-goto="' +
            $t(JSON.stringify(a)) +
            '">' +
            n +
            "</a>"
          : "<span" + r + ">" + n + "</span>"
      );
    }
    function br(e) {
      return e.opt("allDayHtml") || $t(e.opt("allDayText"));
    }
    function wr(e, t, r, n) {
      var i,
        o,
        s = r.calendar,
        a = r.view,
        l = r.theme,
        c = r.dateEnv,
        d = [];
      return (
        ht(t.activeRange, e)
          ? (d.push("fc-" + W[e.getUTCDay()]),
            a.opt("monthMode") &&
              c.getMonth(e) !== c.getMonth(t.currentRange.start) &&
              d.push("fc-other-month"),
            (o = q((i = K(s.getNow())), 1)),
            e < i
              ? d.push("fc-past")
              : e >= o
              ? d.push("fc-future")
              : (d.push("fc-today"), !0 !== n && d.push(l.getClass("today"))))
          : d.push("fc-disabled-day"),
        d
      );
    }
    function Tr(e, t, r) {
      var n = !1,
        i = function() {
          n || ((n = !0), t.apply(this, arguments));
        },
        o = function() {
          n || ((n = !0), r && r.apply(this, arguments));
        },
        s = e(i, o);
      s && "function" == typeof s.then && s.then(i, o);
    }
    var Dr = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Ve(t, e),
        (t.prototype.on = function(e, t) {
          return Cr(this._handlers || (this._handlers = {}), e, t), this;
        }),
        (t.prototype.one = function(e, t) {
          return Cr(this._oneHandlers || (this._oneHandlers = {}), e, t), this;
        }),
        (t.prototype.off = function(e, t) {
          return (
            this._handlers && Rr(this._handlers, e, t),
            this._oneHandlers && Rr(this._oneHandlers, e, t),
            this
          );
        }),
        (t.prototype.trigger = function(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          return this.triggerWith(e, this, t), this;
        }),
        (t.prototype.triggerWith = function(e, t, r) {
          return (
            this._handlers && Le(this._handlers[e], t, r),
            this._oneHandlers &&
              (Le(this._oneHandlers[e], t, r), delete this._oneHandlers[e]),
            this
          );
        }),
        (t.prototype.hasHandlers = function(e) {
          return (
            (this._handlers && this._handlers[e] && this._handlers[e].length) ||
            (this._oneHandlers &&
              this._oneHandlers[e] &&
              this._oneHandlers[e].length)
          );
        }),
        t
      );
    })(
      (function() {
        function e() {}
        return (
          (e.mixInto = function(e) {
            this.mixIntoObj(e.prototype);
          }),
          (e.mixIntoObj = function(e) {
            var t = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function(r) {
              e[r] || (e[r] = t.prototype[r]);
            });
          }),
          (e.mixOver = function(e) {
            var t = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function(r) {
              e.prototype[r] = t.prototype[r];
            });
          }),
          e
        );
      })()
    );
    function Cr(e, t, r) {
      (e[t] || (e[t] = [])).push(r);
    }
    function Rr(e, t, r) {
      r
        ? e[t] &&
          (e[t] = e[t].filter(function(e) {
            return e !== r;
          }))
        : delete e[t];
    }
    var xr = (function() {
        function e(e, t, r, n) {
          (this.originEl = e),
            (this.els = t),
            (this.isHorizontal = r),
            (this.isVertical = n);
        }
        return (
          (e.prototype.build = function() {
            var e = this.originEl,
              t = (this.originClientRect = e.getBoundingClientRect());
            this.isHorizontal && this.buildElHorizontals(t.left),
              this.isVertical && this.buildElVerticals(t.top);
          }),
          (e.prototype.buildElHorizontals = function(e) {
            for (var t = [], r = [], n = 0, i = this.els; n < i.length; n++) {
              var o = i[n].getBoundingClientRect();
              t.push(o.left - e), r.push(o.right - e);
            }
            (this.lefts = t), (this.rights = r);
          }),
          (e.prototype.buildElVerticals = function(e) {
            for (var t = [], r = [], n = 0, i = this.els; n < i.length; n++) {
              var o = i[n].getBoundingClientRect();
              t.push(o.top - e), r.push(o.bottom - e);
            }
            (this.tops = t), (this.bottoms = r);
          }),
          (e.prototype.leftToIndex = function(e) {
            var t,
              r = this.lefts,
              n = this.rights,
              i = r.length;
            for (t = 0; t < i; t++) if (e >= r[t] && e < n[t]) return t;
          }),
          (e.prototype.topToIndex = function(e) {
            var t,
              r = this.tops,
              n = this.bottoms,
              i = r.length;
            for (t = 0; t < i; t++) if (e >= r[t] && e < n[t]) return t;
          }),
          (e.prototype.getWidth = function(e) {
            return this.rights[e] - this.lefts[e];
          }),
          (e.prototype.getHeight = function(e) {
            return this.bottoms[e] - this.tops[e];
          }),
          e
        );
      })(),
      Ir = (function() {
        function e() {}
        return (
          (e.prototype.getMaxScrollTop = function() {
            return this.getScrollHeight() - this.getClientHeight();
          }),
          (e.prototype.getMaxScrollLeft = function() {
            return this.getScrollWidth() - this.getClientWidth();
          }),
          (e.prototype.canScrollVertically = function() {
            return this.getMaxScrollTop() > 0;
          }),
          (e.prototype.canScrollHorizontally = function() {
            return this.getMaxScrollLeft() > 0;
          }),
          (e.prototype.canScrollUp = function() {
            return this.getScrollTop() > 0;
          }),
          (e.prototype.canScrollDown = function() {
            return this.getScrollTop() < this.getMaxScrollTop();
          }),
          (e.prototype.canScrollLeft = function() {
            return this.getScrollLeft() > 0;
          }),
          (e.prototype.canScrollRight = function() {
            return this.getScrollLeft() < this.getMaxScrollLeft();
          }),
          e
        );
      })(),
      kr = (function(e) {
        function t(t) {
          var r = e.call(this) || this;
          return (r.el = t), r;
        }
        return (
          Ve(t, e),
          (t.prototype.getScrollTop = function() {
            return this.el.scrollTop;
          }),
          (t.prototype.getScrollLeft = function() {
            return this.el.scrollLeft;
          }),
          (t.prototype.setScrollTop = function(e) {
            this.el.scrollTop = e;
          }),
          (t.prototype.setScrollLeft = function(e) {
            this.el.scrollLeft = e;
          }),
          (t.prototype.getScrollWidth = function() {
            return this.el.scrollWidth;
          }),
          (t.prototype.getScrollHeight = function() {
            return this.el.scrollHeight;
          }),
          (t.prototype.getClientHeight = function() {
            return this.el.clientHeight;
          }),
          (t.prototype.getClientWidth = function() {
            return this.el.clientWidth;
          }),
          t
        );
      })(Ir),
      Mr = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Ve(t, e),
          (t.prototype.getScrollTop = function() {
            return window.pageYOffset;
          }),
          (t.prototype.getScrollLeft = function() {
            return window.pageXOffset;
          }),
          (t.prototype.setScrollTop = function(e) {
            window.scroll(window.pageXOffset, e);
          }),
          (t.prototype.setScrollLeft = function(e) {
            window.scroll(e, window.pageYOffset);
          }),
          (t.prototype.getScrollWidth = function() {
            return document.documentElement.scrollWidth;
          }),
          (t.prototype.getScrollHeight = function() {
            return document.documentElement.scrollHeight;
          }),
          (t.prototype.getClientHeight = function() {
            return document.documentElement.clientHeight;
          }),
          (t.prototype.getClientWidth = function() {
            return document.documentElement.clientWidth;
          }),
          t
        );
      })(Ir),
      Pr = (function(e) {
        function t(t, r) {
          var n =
            e.call(
              this,
              c("div", {
                className: "fc-scroller"
              })
            ) || this;
          return (n.overflowX = t), (n.overflowY = r), n.applyOverflow(), n;
        }
        return (
          Ve(t, e),
          (t.prototype.clear = function() {
            this.setHeight("auto"), this.applyOverflow();
          }),
          (t.prototype.destroy = function() {
            y(this.el);
          }),
          (t.prototype.applyOverflow = function() {
            R(this.el, {
              overflowX: this.overflowX,
              overflowY: this.overflowY
            });
          }),
          (t.prototype.lockOverflow = function(e) {
            var t = this.overflowX,
              r = this.overflowY;
            (e = e || this.getScrollbarWidths()),
              "auto" === t &&
                (t =
                  e.bottom || this.canScrollHorizontally()
                    ? "scroll"
                    : "hidden"),
              "auto" === r &&
                (r =
                  e.left || e.right || this.canScrollVertically()
                    ? "scroll"
                    : "hidden"),
              R(this.el, {
                overflowX: t,
                overflowY: r
              });
          }),
          (t.prototype.setHeight = function(e) {
            x(this.el, "height", e);
          }),
          (t.prototype.getScrollbarWidths = function() {
            var e = L(this.el);
            return {
              left: e.scrollbarLeft,
              right: e.scrollbarRight,
              bottom: e.scrollbarBottom
            };
          }),
          t
        );
      })(kr),
      Hr = (function() {
        function e(e) {
          (this.calendarOptions = e), this.processIconOverride();
        }
        return (
          (e.prototype.processIconOverride = function() {
            this.iconOverrideOption &&
              this.setIconOverride(
                this.calendarOptions[this.iconOverrideOption]
              );
          }),
          (e.prototype.setIconOverride = function(e) {
            var t, r;
            if ("object" == typeof e && e) {
              for (r in ((t = We({}, this.iconClasses)), e))
                t[r] = this.applyIconOverridePrefix(e[r]);
              this.iconClasses = t;
            } else !1 === e && (this.iconClasses = {});
          }),
          (e.prototype.applyIconOverridePrefix = function(e) {
            var t = this.iconOverridePrefix;
            return t && 0 !== e.indexOf(t) && (e = t + e), e;
          }),
          (e.prototype.getClass = function(e) {
            return this.classes[e] || "";
          }),
          (e.prototype.getIconClass = function(e) {
            var t = this.iconClasses[e];
            return t ? this.baseIconClass + " " + t : "";
          }),
          (e.prototype.getCustomButtonIconClass = function(e) {
            var t;
            return this.iconOverrideCustomButtonOption &&
              (t = e[this.iconOverrideCustomButtonOption])
              ? this.baseIconClass + " " + this.applyIconOverridePrefix(t)
              : "";
          }),
          e
        );
      })();
    (Hr.prototype.classes = {}),
      (Hr.prototype.iconClasses = {}),
      (Hr.prototype.baseIconClass = ""),
      (Hr.prototype.iconOverridePrefix = "");
    var _r = 0,
      Lr = (function() {
        function e(e, t) {
          t && (e.view = this),
            (this.uid = String(_r++)),
            (this.context = e),
            (this.dateEnv = e.dateEnv),
            (this.theme = e.theme),
            (this.view = e.view),
            (this.calendar = e.calendar),
            (this.isRtl = "rtl" === this.opt("dir"));
        }
        return (
          (e.addEqualityFuncs = function(e) {
            this.prototype.equalityFuncs = We(
              {},
              this.prototype.equalityFuncs,
              e
            );
          }),
          (e.prototype.opt = function(e) {
            return this.context.options[e];
          }),
          (e.prototype.receiveProps = function(e) {
            var t = (function(e, t, r) {
                var n = {},
                  i = !1;
                for (var o in t)
                  o in e && (e[o] === t[o] || (r[o] && r[o](e[o], t[o])))
                    ? (n[o] = e[o])
                    : ((n[o] = t[o]), (i = !0));
                for (var o in e)
                  if (!(o in t)) {
                    i = !0;
                    break;
                  }
                return {
                  anyChanges: i,
                  comboProps: n
                };
              })(this.props || {}, e, this.equalityFuncs),
              r = t.anyChanges,
              n = t.comboProps;
            (this.props = n), r && this.render(n);
          }),
          (e.prototype.render = function(e) {}),
          (e.prototype.destroy = function() {}),
          e
        );
      })();
    Lr.prototype.equalityFuncs = {};
    var Or = (function(e) {
      function t(t, r, n) {
        var i = e.call(this, t, n) || this;
        return (i.el = r), i;
      }
      return (
        Ve(t, e),
        (t.prototype.destroy = function() {
          e.prototype.destroy.call(this), y(this.el);
        }),
        (t.prototype.buildPositionCaches = function() {}),
        (t.prototype.queryHit = function(e, t, r, n) {
          return null;
        }),
        (t.prototype.isInteractionValid = function(e) {
          var t = this.calendar,
            r = this.props.dateProfile,
            n = e.mutatedEvents.instances;
          if (r) for (var i in n) if (!pt(r.validRange, n[i].range)) return !1;
          return qt(e, t);
        }),
        (t.prototype.isDateSelectionValid = function(e) {
          var t,
            r,
            n = this.props.dateProfile;
          return (
            !(n && !pt(n.validRange, e.range)) &&
            ((t = e),
            (r = this.calendar),
            Yt(
              {
                dateSelection: t
              },
              r
            ))
          );
        }),
        (t.prototype.publiclyTrigger = function(e, t) {
          return this.calendar.publiclyTrigger(e, t);
        }),
        (t.prototype.publiclyTriggerAfterSizing = function(e, t) {
          return this.calendar.publiclyTriggerAfterSizing(e, t);
        }),
        (t.prototype.hasPublicHandlers = function(e) {
          return this.calendar.hasPublicHandlers(e);
        }),
        (t.prototype.triggerRenderedSegs = function(e, t) {
          var r = this.calendar;
          if (this.hasPublicHandlers("eventPositioned"))
            for (var n = 0, i = e; n < i.length; n++) {
              var o = i[n];
              this.publiclyTriggerAfterSizing("eventPositioned", [
                {
                  event: new _t(r, o.eventRange.def, o.eventRange.instance),
                  isMirror: t,
                  isStart: o.isStart,
                  isEnd: o.isEnd,
                  el: o.el,
                  view: this
                }
              ]);
            }
          r.state.loadingLevel ||
            (r.afterSizingTriggers._eventsPositioned = [null]);
        }),
        (t.prototype.triggerWillRemoveSegs = function(e, t) {
          for (var r = this.calendar, n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            r.trigger("eventElRemove", o.el);
          }
          if (this.hasPublicHandlers("eventDestroy"))
            for (var s = 0, a = e; s < a.length; s++) {
              o = a[s];
              this.publiclyTrigger("eventDestroy", [
                {
                  event: new _t(r, o.eventRange.def, o.eventRange.instance),
                  isMirror: t,
                  el: o.el,
                  view: this
                }
              ]);
            }
        }),
        (t.prototype.isValidSegDownEl = function(e) {
          return (
            !this.props.eventDrag &&
            !this.props.eventResize &&
            !E(e, ".fc-mirror") &&
            (this.isPopover() || !this.isInPopover(e))
          );
        }),
        (t.prototype.isValidDateDownEl = function(e) {
          var t = E(e, this.fgSegSelector);
          return (
            (!t || t.classList.contains("fc-mirror")) &&
            !E(e, ".fc-more") &&
            !E(e, "a[data-goto]") &&
            !this.isInPopover(e)
          );
        }),
        (t.prototype.isPopover = function() {
          return this.el.classList.contains("fc-popover");
        }),
        (t.prototype.isInPopover = function(e) {
          return Boolean(E(e, ".fc-popover"));
        }),
        t
      );
    })(Lr);
    (Or.prototype.fgSegSelector = ".fc-event-container > *"),
      (Or.prototype.bgSegSelector = ".fc-bgevent:not(.fc-nonbusiness)");
    var Ar = 0;
    function Nr(e) {
      return {
        id: String(Ar++),
        deps: e.deps || [],
        reducers: e.reducers || [],
        eventDefParsers: e.eventDefParsers || [],
        isDraggableTransformers: e.isDraggableTransformers || [],
        eventDragMutationMassagers: e.eventDragMutationMassagers || [],
        eventDefMutationAppliers: e.eventDefMutationAppliers || [],
        dateSelectionTransformers: e.dateSelectionTransformers || [],
        datePointTransforms: e.datePointTransforms || [],
        dateSpanTransforms: e.dateSpanTransforms || [],
        views: e.views || {},
        viewPropsTransformers: e.viewPropsTransformers || [],
        isPropsValid: e.isPropsValid || null,
        externalDefTransforms: e.externalDefTransforms || [],
        eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
        viewContainerModifiers: e.viewContainerModifiers || [],
        eventDropTransformers: e.eventDropTransformers || [],
        componentInteractions: e.componentInteractions || [],
        calendarInteractions: e.calendarInteractions || [],
        themeClasses: e.themeClasses || {},
        eventSourceDefs: e.eventSourceDefs || [],
        cmdFormatter: e.cmdFormatter,
        recurringTypes: e.recurringTypes || [],
        namedTimeZonedImpl: e.namedTimeZonedImpl,
        defaultView: e.defaultView || "",
        elementDraggingImpl: e.elementDraggingImpl,
        optionChangeHandlers: e.optionChangeHandlers || {}
      };
    }
    var zr = (function() {
      function e() {
        (this.hooks = {
          reducers: [],
          eventDefParsers: [],
          isDraggableTransformers: [],
          eventDragMutationMassagers: [],
          eventDefMutationAppliers: [],
          dateSelectionTransformers: [],
          datePointTransforms: [],
          dateSpanTransforms: [],
          views: {},
          viewPropsTransformers: [],
          isPropsValid: null,
          externalDefTransforms: [],
          eventResizeJoinTransforms: [],
          viewContainerModifiers: [],
          eventDropTransformers: [],
          componentInteractions: [],
          calendarInteractions: [],
          themeClasses: {},
          eventSourceDefs: [],
          cmdFormatter: null,
          recurringTypes: [],
          namedTimeZonedImpl: null,
          defaultView: "",
          elementDraggingImpl: null,
          optionChangeHandlers: {}
        }),
          (this.addedHash = {});
      }
      return (
        (e.prototype.add = function(e) {
          if (!this.addedHash[e.id]) {
            this.addedHash[e.id] = !0;
            for (var t = 0, r = e.deps; t < r.length; t++) {
              var n = r[t];
              this.add(n);
            }
            this.hooks =
              ((i = this.hooks),
              (o = e),
              {
                reducers: i.reducers.concat(o.reducers),
                eventDefParsers: i.eventDefParsers.concat(o.eventDefParsers),
                isDraggableTransformers: i.isDraggableTransformers.concat(
                  o.isDraggableTransformers
                ),
                eventDragMutationMassagers: i.eventDragMutationMassagers.concat(
                  o.eventDragMutationMassagers
                ),
                eventDefMutationAppliers: i.eventDefMutationAppliers.concat(
                  o.eventDefMutationAppliers
                ),
                dateSelectionTransformers: i.dateSelectionTransformers.concat(
                  o.dateSelectionTransformers
                ),
                datePointTransforms: i.datePointTransforms.concat(
                  o.datePointTransforms
                ),
                dateSpanTransforms: i.dateSpanTransforms.concat(
                  o.dateSpanTransforms
                ),
                views: We({}, i.views, o.views),
                viewPropsTransformers: i.viewPropsTransformers.concat(
                  o.viewPropsTransformers
                ),
                isPropsValid: o.isPropsValid || i.isPropsValid,
                externalDefTransforms: i.externalDefTransforms.concat(
                  o.externalDefTransforms
                ),
                eventResizeJoinTransforms: i.eventResizeJoinTransforms.concat(
                  o.eventResizeJoinTransforms
                ),
                viewContainerModifiers: i.viewContainerModifiers.concat(
                  o.viewContainerModifiers
                ),
                eventDropTransformers: i.eventDropTransformers.concat(
                  o.eventDropTransformers
                ),
                calendarInteractions: i.calendarInteractions.concat(
                  o.calendarInteractions
                ),
                componentInteractions: i.componentInteractions.concat(
                  o.componentInteractions
                ),
                themeClasses: We({}, i.themeClasses, o.themeClasses),
                eventSourceDefs: i.eventSourceDefs.concat(o.eventSourceDefs),
                cmdFormatter: o.cmdFormatter || i.cmdFormatter,
                recurringTypes: i.recurringTypes.concat(o.recurringTypes),
                namedTimeZonedImpl:
                  o.namedTimeZonedImpl || i.namedTimeZonedImpl,
                defaultView: i.defaultView || o.defaultView,
                elementDraggingImpl:
                  i.elementDraggingImpl || o.elementDraggingImpl,
                optionChangeHandlers: We(
                  {},
                  i.optionChangeHandlers,
                  o.optionChangeHandlers
                )
              });
          }
          var i, o;
        }),
        e
      );
    })();
    var Br = Nr({
        eventSourceDefs: [
          {
            ignoreRange: !0,
            parseMeta: function(e) {
              return Array.isArray(e)
                ? e
                : Array.isArray(e.events)
                ? e.events
                : null;
            },
            fetch: function(e, t) {
              t({
                rawEvents: e.eventSource.meta
              });
            }
          }
        ]
      }),
      Ur = Nr({
        eventSourceDefs: [
          {
            parseMeta: function(e) {
              return "function" == typeof e
                ? e
                : "function" == typeof e.events
                ? e.events
                : null;
            },
            fetch: function(e, t, r) {
              var n = e.calendar.dateEnv;
              Tr(
                e.eventSource.meta.bind(null, {
                  start: n.toDate(e.range.start),
                  end: n.toDate(e.range.end),
                  startStr: n.formatIso(e.range.start),
                  endStr: n.formatIso(e.range.end),
                  timeZone: n.timeZone
                }),
                function(e) {
                  t({
                    rawEvents: e
                  });
                },
                r
              );
            }
          }
        ]
      });
    function jr(e, t, r, n, i) {
      var o = null;
      "GET" === (e = e.toUpperCase())
        ? (t = (function(e, t) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + Gr(t);
          })(t, r))
        : (o = Gr(r));
      var s = new XMLHttpRequest();
      s.open(e, t, !0),
        "GET" !== e &&
          s.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
        (s.onload = function() {
          if (s.status >= 200 && s.status < 400)
            try {
              var e = JSON.parse(s.responseText);
              n(e, s);
            } catch (e) {
              i("Failure parsing JSON", s);
            }
          else i("Request failed", s);
        }),
        (s.onerror = function() {
          i("Request failed", s);
        }),
        s.send(o);
    }
    function Gr(e) {
      var t = [];
      for (var r in e)
        t.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
      return t.join("&");
    }
    var Vr = Nr({
      eventSourceDefs: [
        {
          parseMeta: function(e) {
            if ("string" == typeof e)
              e = {
                url: e
              };
            else if (!e || "object" != typeof e || !e.url) return null;
            return {
              url: e.url,
              method: (e.method || "GET").toUpperCase(),
              extraParams: e.extraParams,
              startParam: e.startParam,
              endParam: e.endParam,
              timeZoneParam: e.timeZoneParam
            };
          },
          fetch: function(e, t, r) {
            var n = e.eventSource.meta,
              i = (function(e, t, r) {
                var n,
                  i,
                  o,
                  s,
                  a = r.dateEnv,
                  l = {};
                null == (n = e.startParam) && (n = r.opt("startParam"));
                null == (i = e.endParam) && (i = r.opt("endParam"));
                null == (o = e.timeZoneParam) && (o = r.opt("timeZoneParam"));
                s =
                  "function" == typeof e.extraParams
                    ? e.extraParams()
                    : e.extraParams || {};
                We(l, s),
                  (l[n] = a.formatIso(t.start)),
                  (l[i] = a.formatIso(t.end)),
                  "local" !== a.timeZone && (l[o] = a.timeZone);
                return l;
              })(n, e.range, e.calendar);
            jr(
              n.method,
              n.url,
              i,
              function(e, r) {
                t({
                  rawEvents: e,
                  xhr: r
                });
              },
              function(e, t) {
                r({
                  message: e,
                  xhr: t
                });
              }
            );
          }
        }
      ]
    });
    var Wr = Nr({
      recurringTypes: [
        {
          parse: function(e, t, r) {
            var n,
              i,
              o = r.createMarker.bind(r),
              s = Ne(
                e,
                {
                  daysOfWeek: null,
                  startTime: ae,
                  endTime: ae,
                  startRecur: o,
                  endRecur: o
                },
                {},
                t
              ),
              a = !1;
            for (var l in s)
              if (null != s[l]) {
                a = !0;
                break;
              }
            if (a) {
              var c = null;
              return (
                "duration" in t && ((c = ae(t.duration)), delete t.duration),
                !c &&
                  s.startTime &&
                  s.endTime &&
                  ((n = s.endTime),
                  (i = s.startTime),
                  (c = {
                    years: n.years - i.years,
                    months: n.months - i.months,
                    days: n.days - i.days,
                    milliseconds: n.milliseconds - i.milliseconds
                  })),
                {
                  allDayGuess: Boolean(!s.startTime && !s.endTime),
                  duration: c,
                  typeData: s
                }
              );
            }
            return null;
          },
          expand: function(e, t, r) {
            var n = ct(t, {
              start: e.startRecur,
              end: e.endRecur
            });
            return n
              ? (function(e, t, r, n) {
                  var i = e ? Ke(e) : null,
                    o = K(r.start),
                    s = r.end,
                    a = [];
                  for (; o < s; ) {
                    var l = void 0;
                    (i && !i[o.getUTCDay()]) ||
                      ((l = t ? n.add(o, t) : o), a.push(l)),
                      (o = q(o, 1));
                  }
                  return a;
                })(e.daysOfWeek, e.startTime, n, r)
              : [];
          }
        }
      ]
    });
    var Fr = Nr({
      optionChangeHandlers: {
        events: function(e, t, r) {
          qr([e], t, r);
        },
        eventSources: qr,
        plugins: function(e, t) {
          t.addPluginInputs(e);
        }
      }
    });
    function qr(e, t, r) {
      for (
        var n = Je(t.state.eventSources), i = [], o = 0, s = e;
        o < s.length;
        o++
      ) {
        for (var a = s[o], l = !1, c = 0; c < n.length; c++)
          if (r(n[c]._raw, a)) {
            n.splice(c, 1), (l = !0);
            break;
          }
        l || i.push(a);
      }
      for (var d = 0, u = n; d < u.length; d++) {
        var p = u[d];
        t.dispatch({
          type: "REMOVE_EVENT_SOURCE",
          sourceId: p.sourceId
        });
      }
      for (var h = 0, f = i; h < f.length; h++) {
        var v = f[h];
        t.addEventSource(v);
      }
    }
    var Yr = {},
      Zr = {
        defaultRangeSeparator: " - ",
        titleRangeSeparator: " – ",
        defaultTimedEventDuration: "01:00:00",
        defaultAllDayEventDuration: {
          day: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "00:00:00",
        columnHeader: !0,
        defaultView: "",
        aspectRatio: 1.35,
        header: {
          left: "title",
          center: "",
          right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberCalculation: "local",
        editable: !1,
        scrollTime: "06:00:00",
        minTime: "00:00:00",
        maxTime: "24:00:00",
        showNonCurrentDates: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timeZoneParam: "timeZone",
        timeZone: "local",
        locales: [],
        locale: "",
        timeGridEventMinHeight: 0,
        themeSystem: "standard",
        dragRevertDuration: 500,
        dragScroll: !0,
        allDayMaintainDuration: !1,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "start,-duration,allDay,title",
        eventLimit: !1,
        eventLimitClick: "popover",
        dayPopoverFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3,
        eventDragMinDistance: 5
      },
      Xr = {
        header: {
          left: "next,prev today",
          center: "",
          right: "title"
        },
        buttonIcons: {
          prev: "fc-icon-chevron-right",
          next: "fc-icon-chevron-left",
          prevYear: "fc-icon-chevrons-right",
          nextYear: "fc-icon-chevrons-left"
        }
      },
      Kr = ["header", "footer", "buttonText", "buttonIcons"];
    var Jr = [Br, Ur, Vr, Wr, Fr];
    var Qr = {
      code: "en",
      week: {
        dow: 0,
        doy: 4
      },
      dir: "ltr",
      buttonText: {
        prev: "prev",
        next: "next",
        prevYear: "prev year",
        nextYear: "next year",
        year: "year",
        today: "today",
        month: "month",
        week: "week",
        day: "day",
        list: "list"
      },
      weekLabel: "W",
      allDayText: "all-day",
      eventLimitText: "more",
      noEventsMessage: "No events to display"
    };
    function $r(e) {
      for (
        var t = e.length > 0 ? e[0].code : "en",
          r = window.FullCalendarLocalesAll || [],
          n = window.FullCalendarLocales || {},
          i = r.concat(Je(n), e),
          o = {
            en: Qr
          },
          s = 0,
          a = i;
        s < a.length;
        s++
      ) {
        var l = a[s];
        o[l.code] = l;
      }
      return {
        map: o,
        defaultCode: t
      };
    }
    function en(e, t) {
      return "object" != typeof e || Array.isArray(e)
        ? (function(e, t) {
            var r = [].concat(e || []),
              n =
                (function(e, t) {
                  for (var r = 0; r < e.length; r++)
                    for (
                      var n = e[r].toLocaleLowerCase().split("-"), i = n.length;
                      i > 0;
                      i--
                    ) {
                      var o = n.slice(0, i).join("-");
                      if (t[o]) return t[o];
                    }
                  return null;
                })(r, t) || Qr;
            return tn(e, r, n);
          })(e, t)
        : tn(e.code, [e.code], e);
    }
    function tn(e, t, r) {
      var n = Ye([Qr, r], ["buttonText"]);
      delete n.code;
      var i = n.week;
      return (
        delete n.week,
        {
          codeArg: e,
          codes: t,
          week: i,
          simpleNumberFormat: new Intl.NumberFormat(e),
          options: n
        }
      );
    }
    var rn = (function() {
        function e(e) {
          (this.overrides = We({}, e)),
            (this.dynamicOverrides = {}),
            this.compute();
        }
        return (
          (e.prototype.mutate = function(e, t, r) {
            var n = r ? this.dynamicOverrides : this.overrides;
            We(n, e);
            for (var i = 0, o = t; i < o.length; i++) {
              delete n[o[i]];
            }
            this.compute();
          }),
          (e.prototype.compute = function() {
            var e = Oe(
                this.dynamicOverrides.locales,
                this.overrides.locales,
                Zr.locales
              ),
              t = Oe(
                this.dynamicOverrides.locale,
                this.overrides.locale,
                Zr.locale
              ),
              r = $r(e),
              n = en(t || r.defaultCode, r.map).options,
              i =
                "rtl" ===
                Oe(this.dynamicOverrides.dir, this.overrides.dir, n.dir)
                  ? Xr
                  : {};
            (this.dirDefaults = i),
              (this.localeDefaults = n),
              (this.computed = Ye(
                [Zr, i, n, this.overrides, this.dynamicOverrides],
                Kr
              ));
          }),
          e
        );
      })(),
      nn = {};
    var on,
      sn = (function() {
        function e() {}
        return (
          (e.prototype.getMarkerYear = function(e) {
            return e.getUTCFullYear();
          }),
          (e.prototype.getMarkerMonth = function(e) {
            return e.getUTCMonth();
          }),
          (e.prototype.getMarkerDay = function(e) {
            return e.getUTCDate();
          }),
          (e.prototype.arrayToMarker = function(e) {
            return re(e);
          }),
          (e.prototype.markerToArray = function(e) {
            return te(e);
          }),
          e
        );
      })();
    (on = sn), (nn["gregory"] = on);
    var an = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    var ln = (function() {
        function e(e) {
          var t = (this.timeZone = e.timeZone),
            r = "local" !== t && "UTC" !== t;
          e.namedTimeZoneImpl &&
            r &&
            (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
            (this.canComputeOffset = Boolean(!r || this.namedTimeZoneImpl)),
            (this.calendarSystem = (function(e) {
              return new nn[e]();
            })(e.calendarSystem)),
            (this.locale = e.locale),
            (this.weekDow = e.locale.week.dow),
            (this.weekDoy = e.locale.week.doy),
            "ISO" === e.weekNumberCalculation &&
              ((this.weekDow = 1), (this.weekDoy = 4)),
            "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
            "function" == typeof e.weekNumberCalculation &&
              (this.weekNumberFunc = e.weekNumberCalculation),
            (this.weekLabel =
              null != e.weekLabel ? e.weekLabel : e.locale.options.weekLabel),
            (this.cmdFormatter = e.cmdFormatter);
        }
        return (
          (e.prototype.createMarker = function(e) {
            var t = this.createMarkerMeta(e);
            return null === t ? null : t.marker;
          }),
          (e.prototype.createNowMarker = function() {
            return this.canComputeOffset
              ? this.timestampToMarker(new Date().valueOf())
              : re($(new Date()));
          }),
          (e.prototype.createMarkerMeta = function(e) {
            if ("string" == typeof e) return this.parse(e);
            var t = null;
            return (
              "number" == typeof e
                ? (t = this.timestampToMarker(e))
                : e instanceof Date
                ? ((e = e.valueOf()),
                  isNaN(e) || (t = this.timestampToMarker(e)))
                : Array.isArray(e) && (t = re(e)),
              null !== t && ne(t)
                ? {
                    marker: t,
                    isTimeUnspecified: !1,
                    forcedTzo: null
                  }
                : null
            );
          }),
          (e.prototype.parse = function(e) {
            var t = (function(e) {
              var t = an.exec(e);
              if (t) {
                var r = new Date(
                  Date.UTC(
                    Number(t[1]),
                    t[3] ? Number(t[3]) - 1 : 0,
                    Number(t[5] || 1),
                    Number(t[7] || 0),
                    Number(t[8] || 0),
                    Number(t[10] || 0),
                    t[12] ? 1e3 * Number("0." + t[12]) : 0
                  )
                );
                if (ne(r)) {
                  var n = null;
                  return (
                    t[13] &&
                      (n =
                        ("-" === t[15] ? -1 : 1) *
                        (60 * Number(t[16] || 0) + Number(t[18] || 0))),
                    {
                      marker: r,
                      isTimeUnspecified: !t[6],
                      timeZoneOffset: n
                    }
                  );
                }
              }
              return null;
            })(e);
            if (null === t) return null;
            var r = t.marker,
              n = null;
            return (
              null !== t.timeZoneOffset &&
                (this.canComputeOffset
                  ? (r = this.timestampToMarker(
                      r.valueOf() - 60 * t.timeZoneOffset * 1e3
                    ))
                  : (n = t.timeZoneOffset)),
              {
                marker: r,
                isTimeUnspecified: t.isTimeUnspecified,
                forcedTzo: n
              }
            );
          }),
          (e.prototype.getYear = function(e) {
            return this.calendarSystem.getMarkerYear(e);
          }),
          (e.prototype.getMonth = function(e) {
            return this.calendarSystem.getMarkerMonth(e);
          }),
          (e.prototype.add = function(e, t) {
            var r = this.calendarSystem.markerToArray(e);
            return (
              (r[0] += t.years),
              (r[1] += t.months),
              (r[2] += t.days),
              (r[6] += t.milliseconds),
              this.calendarSystem.arrayToMarker(r)
            );
          }),
          (e.prototype.subtract = function(e, t) {
            var r = this.calendarSystem.markerToArray(e);
            return (
              (r[0] -= t.years),
              (r[1] -= t.months),
              (r[2] -= t.days),
              (r[6] -= t.milliseconds),
              this.calendarSystem.arrayToMarker(r)
            );
          }),
          (e.prototype.addYears = function(e, t) {
            var r = this.calendarSystem.markerToArray(e);
            return (r[0] += t), this.calendarSystem.arrayToMarker(r);
          }),
          (e.prototype.addMonths = function(e, t) {
            var r = this.calendarSystem.markerToArray(e);
            return (r[1] += t), this.calendarSystem.arrayToMarker(r);
          }),
          (e.prototype.diffWholeYears = function(e, t) {
            var r = this.calendarSystem;
            return ie(e) === ie(t) &&
              r.getMarkerDay(e) === r.getMarkerDay(t) &&
              r.getMarkerMonth(e) === r.getMarkerMonth(t)
              ? r.getMarkerYear(t) - r.getMarkerYear(e)
              : null;
          }),
          (e.prototype.diffWholeMonths = function(e, t) {
            var r = this.calendarSystem;
            return ie(e) === ie(t) && r.getMarkerDay(e) === r.getMarkerDay(t)
              ? r.getMarkerMonth(t) -
                  r.getMarkerMonth(e) +
                  12 * (r.getMarkerYear(t) - r.getMarkerYear(e))
              : null;
          }),
          (e.prototype.greatestWholeUnit = function(e, t) {
            var r = this.diffWholeYears(e, t);
            return null !== r
              ? {
                  unit: "year",
                  value: r
                }
              : null !== (r = this.diffWholeMonths(e, t))
              ? {
                  unit: "month",
                  value: r
                }
              : null !==
                (r = (function(e, t) {
                  var r = X(e, t);
                  return null !== r && r % 7 == 0 ? r / 7 : null;
                })(e, t))
              ? {
                  unit: "week",
                  value: r
                }
              : null !== (r = X(e, t))
              ? {
                  unit: "day",
                  value: r
                }
              : _e(
                  (r = (function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 36e5;
                  })(e, t))
                )
              ? {
                  unit: "hour",
                  value: r
                }
              : _e(
                  (r = (function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 6e4;
                  })(e, t))
                )
              ? {
                  unit: "minute",
                  value: r
                }
              : _e(
                  (r = (function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 1e3;
                  })(e, t))
                )
              ? {
                  unit: "second",
                  value: r
                }
              : {
                  unit: "millisecond",
                  value: t.valueOf() - e.valueOf()
                };
          }),
          (e.prototype.countDurationsBetween = function(e, t, r) {
            var n;
            return r.years && null !== (n = this.diffWholeYears(e, t))
              ? n / (fe(r) / 365)
              : r.months && null !== (n = this.diffWholeMonths(e, t))
              ? n /
                (function(e) {
                  return fe(e) / 30;
                })(r)
              : r.days && null !== (n = X(e, t))
              ? n / fe(r)
              : (t.valueOf() - e.valueOf()) / ve(r);
          }),
          (e.prototype.startOf = function(e, t) {
            return "year" === t
              ? this.startOfYear(e)
              : "month" === t
              ? this.startOfMonth(e)
              : "week" === t
              ? this.startOfWeek(e)
              : "day" === t
              ? K(e)
              : "hour" === t
              ? (function(e) {
                  return re([
                    e.getUTCFullYear(),
                    e.getUTCMonth(),
                    e.getUTCDate(),
                    e.getUTCHours()
                  ]);
                })(e)
              : "minute" === t
              ? (function(e) {
                  return re([
                    e.getUTCFullYear(),
                    e.getUTCMonth(),
                    e.getUTCDate(),
                    e.getUTCHours(),
                    e.getUTCMinutes()
                  ]);
                })(e)
              : "second" === t
              ? (function(e) {
                  return re([
                    e.getUTCFullYear(),
                    e.getUTCMonth(),
                    e.getUTCDate(),
                    e.getUTCHours(),
                    e.getUTCMinutes(),
                    e.getUTCSeconds()
                  ]);
                })(e)
              : void 0;
          }),
          (e.prototype.startOfYear = function(e) {
            return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(e)
            ]);
          }),
          (e.prototype.startOfMonth = function(e) {
            return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(e),
              this.calendarSystem.getMarkerMonth(e)
            ]);
          }),
          (e.prototype.startOfWeek = function(e) {
            return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(e),
              this.calendarSystem.getMarkerMonth(e),
              e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7)
            ]);
          }),
          (e.prototype.computeWeekNumber = function(e) {
            return this.weekNumberFunc
              ? this.weekNumberFunc(this.toDate(e))
              : (function(e, t, r) {
                  var n = e.getUTCFullYear(),
                    i = J(e, n, t, r);
                  if (i < 1) return J(e, n - 1, t, r);
                  var o = J(e, n + 1, t, r);
                  return o >= 1 ? Math.min(i, o) : i;
                })(e, this.weekDow, this.weekDoy);
          }),
          (e.prototype.format = function(e, t, r) {
            return (
              void 0 === r && (r = {}),
              t.format(
                {
                  marker: e,
                  timeZoneOffset:
                    null != r.forcedTzo ? r.forcedTzo : this.offsetForMarker(e)
                },
                this
              )
            );
          }),
          (e.prototype.formatRange = function(e, t, r, n) {
            return (
              void 0 === n && (n = {}),
              n.isEndExclusive && (t = Y(t, -1)),
              r.formatRange(
                {
                  marker: e,
                  timeZoneOffset:
                    null != n.forcedStartTzo
                      ? n.forcedStartTzo
                      : this.offsetForMarker(e)
                },
                {
                  marker: t,
                  timeZoneOffset:
                    null != n.forcedEndTzo
                      ? n.forcedEndTzo
                      : this.offsetForMarker(t)
                },
                this
              )
            );
          }),
          (e.prototype.formatIso = function(e, t) {
            void 0 === t && (t = {});
            var r = null;
            return (
              t.omitTimeZoneOffset ||
                (r =
                  null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)),
              (function(e, t, r) {
                void 0 === r && (r = !1);
                var n = e.toISOString();
                return (
                  (n = n.replace(".000", "")),
                  r && (n = n.replace("T00:00:00Z", "")),
                  n.length > 10 &&
                    (null == t
                      ? (n = n.replace("Z", ""))
                      : 0 !== t && (n = n.replace("Z", kt(t, !0)))),
                  n
                );
              })(e, r, t.omitTime)
            );
          }),
          (e.prototype.timestampToMarker = function(e) {
            return "local" === this.timeZone
              ? re($(new Date(e)))
              : "UTC" !== this.timeZone && this.namedTimeZoneImpl
              ? re(this.namedTimeZoneImpl.timestampToArray(e))
              : new Date(e);
          }),
          (e.prototype.offsetForMarker = function(e) {
            return "local" === this.timeZone
              ? -ee(te(e)).getTimezoneOffset()
              : "UTC" === this.timeZone
              ? 0
              : this.namedTimeZoneImpl
              ? this.namedTimeZoneImpl.offsetForArray(te(e))
              : null;
          }),
          (e.prototype.toDate = function(e, t) {
            return "local" === this.timeZone
              ? ee(te(e))
              : "UTC" === this.timeZone
              ? new Date(e.valueOf())
              : this.namedTimeZoneImpl
              ? new Date(
                  e.valueOf() -
                    1e3 * this.namedTimeZoneImpl.offsetForArray(te(e)) * 60
                )
              : new Date(e.valueOf() - (t || 0));
          }),
          e
        );
      })(),
      cn = {
        id: String,
        allDayDefault: Boolean,
        eventDataTransform: Function,
        success: Function,
        failure: Function
      },
      dn = 0;
    function un(e, t) {
      return !t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange;
    }
    function pn(e, t) {
      for (
        var r = t.pluginSystem.hooks.eventSourceDefs, n = r.length - 1;
        n >= 0;
        n--
      ) {
        var i = r[n].parseMeta(e);
        if (i) {
          var o = hn("object" == typeof e ? e : {}, i, n, t);
          return (o._raw = e), o;
        }
      }
      return null;
    }
    function hn(e, t, r, n) {
      var i = {},
        o = Ne(e, cn, {}, i),
        s = {},
        a = nr(i, n, s);
      return (
        (o.isFetching = !1),
        (o.latestFetchId = ""),
        (o.fetchRange = null),
        (o.publicId = String(e.id || "")),
        (o.sourceId = String(dn++)),
        (o.sourceDefId = r),
        (o.meta = t),
        (o.ui = a),
        (o.extendedProps = s),
        o
      );
    }
    function fn(e, t, r, n) {
      switch (t.type) {
        case "ADD_EVENT_SOURCES":
          return (function(e, t, r, n) {
            for (var i = {}, o = 0, s = t; o < s.length; o++) {
              var a = s[o];
              i[a.sourceId] = a;
            }
            r && (i = gn(i, r, n));
            return We({}, e, i);
          })(e, t.sources, r ? r.activeRange : null, n);
        case "REMOVE_EVENT_SOURCE":
          return (
            (i = e),
            (o = t.sourceId),
            Ze(i, function(e) {
              return e.sourceId !== o;
            })
          );
        case "PREV":
        case "NEXT":
        case "SET_DATE":
        case "SET_VIEW_TYPE":
          return r ? gn(e, r.activeRange, n) : e;
        case "FETCH_EVENT_SOURCES":
        case "CHANGE_TIMEZONE":
          return yn(
            e,
            t.sourceIds
              ? Ke(t.sourceIds)
              : (function(e, t) {
                  return Ze(e, function(e) {
                    return un(e, t);
                  });
                })(e, n),
            r ? r.activeRange : null,
            n
          );
        case "RECEIVE_EVENTS":
        case "RECEIVE_EVENT_ERROR":
          return (function(e, t, r, n) {
            var i,
              o = e[t];
            if (o && r === o.latestFetchId)
              return We(
                {},
                e,
                (((i = {})[t] = We({}, o, {
                  isFetching: !1,
                  fetchRange: n
                })),
                i)
              );
            return e;
          })(e, t.sourceId, t.fetchId, t.fetchRange);
        case "REMOVE_ALL_EVENT_SOURCES":
          return {};
        default:
          return e;
      }
      var i, o;
    }
    var vn = 0;
    function gn(e, t, r) {
      return yn(
        e,
        Ze(e, function(e) {
          return (function(e, t, r) {
            return un(e, r)
              ? !r.opt("lazyFetching") ||
                  !e.fetchRange ||
                  t.start < e.fetchRange.start ||
                  t.end > e.fetchRange.end
              : !e.latestFetchId;
          })(e, t, r);
        }),
        t,
        r
      );
    }
    function yn(e, t, r, n) {
      var i = {};
      for (var o in e) {
        var s = e[o];
        t[o] ? (i[o] = mn(s, r, n)) : (i[o] = s);
      }
      return i;
    }
    function mn(e, t, r) {
      var n = r.pluginSystem.hooks.eventSourceDefs[e.sourceDefId],
        i = String(vn++);
      return (
        n.fetch(
          {
            eventSource: e,
            calendar: r,
            range: t
          },
          function(n) {
            var o,
              s,
              a = n.rawEvents,
              l = r.opt("eventSourceSuccess");
            e.success && (s = e.success(a, n.xhr)),
              l && (o = l(a, n.xhr)),
              (a = s || o || a),
              r.dispatch({
                type: "RECEIVE_EVENTS",
                sourceId: e.sourceId,
                fetchId: i,
                fetchRange: t,
                rawEvents: a
              });
          },
          function(n) {
            var o = r.opt("eventSourceFailure");
            console.warn(n.message, n),
              e.failure && e.failure(n),
              o && o(n),
              r.dispatch({
                type: "RECEIVE_EVENT_ERROR",
                sourceId: e.sourceId,
                fetchId: i,
                fetchRange: t,
                error: n
              });
          }
        ),
        We({}, e, {
          isFetching: !0,
          latestFetchId: i
        })
      );
    }
    var Sn = (function() {
      function e(e, t) {
        (this.viewSpec = e),
          (this.options = e.options),
          (this.dateEnv = t.dateEnv),
          (this.calendar = t),
          this.initHiddenDays();
      }
      return (
        (e.prototype.buildPrev = function(e, t) {
          var r = this.dateEnv,
            n = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
          return this.build(n, -1);
        }),
        (e.prototype.buildNext = function(e, t) {
          var r = this.dateEnv,
            n = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
          return this.build(n, 1);
        }),
        (e.prototype.build = function(e, t, r) {
          var n;
          void 0 === r && (r = !1);
          var i, o, s, a, l, c, d, u, p;
          return (
            (n = this.buildValidRange()),
            (n = this.trimHiddenDays(n)),
            r &&
              ((u = e),
              (e =
                null != (p = n).start && u < p.start
                  ? p.start
                  : null != p.end && u >= p.end
                  ? new Date(p.end.valueOf() - 1)
                  : u)),
            (s = this.buildCurrentRangeInfo(e, t)),
            (a = /^(year|month|week|day)$/.test(s.unit)),
            (l = this.buildRenderRange(
              this.trimHiddenDays(s.range),
              s.unit,
              a
            )),
            (c = l = this.trimHiddenDays(l)),
            this.options.showNonCurrentDates || (c = ct(c, s.range)),
            (i = ae(this.options.minTime)),
            (o = ae(this.options.maxTime)),
            (c = ct((c = this.adjustActiveRange(c, i, o)), n)),
            (d = ut(s.range, n)),
            {
              validRange: n,
              currentRange: s.range,
              currentRangeUnit: s.unit,
              isRangeAllDay: a,
              activeRange: c,
              renderRange: l,
              minTime: i,
              maxTime: o,
              isValid: d,
              dateIncrement: this.buildDateIncrement(s.duration)
            }
          );
        }),
        (e.prototype.buildValidRange = function() {
          return (
            this.getRangeOption("validRange", this.calendar.getNow()) || {
              start: null,
              end: null
            }
          );
        }),
        (e.prototype.buildCurrentRangeInfo = function(e, t) {
          var r,
            n = this.viewSpec,
            i = this.dateEnv,
            o = null,
            s = null,
            a = null;
          return (
            n.duration
              ? ((o = n.duration),
                (s = n.durationUnit),
                (a = this.buildRangeFromDuration(e, t, o, s)))
              : (r = this.options.dayCount)
              ? ((s = "day"), (a = this.buildRangeFromDayCount(e, t, r)))
              : (a = this.buildCustomVisibleRange(e))
              ? (s = i.greatestWholeUnit(a.start, a.end).unit)
              : ((s = ye((o = this.getFallbackDuration())).unit),
                (a = this.buildRangeFromDuration(e, t, o, s))),
            {
              duration: o,
              unit: s,
              range: a
            }
          );
        }),
        (e.prototype.getFallbackDuration = function() {
          return ae({
            day: 1
          });
        }),
        (e.prototype.adjustActiveRange = function(e, t, r) {
          var n = this.dateEnv,
            i = e.start,
            o = e.end;
          return (
            this.viewSpec.class.prototype.usesMinMaxTime &&
              (fe(t) < 0 && ((i = K(i)), (i = n.add(i, t))),
              fe(r) > 1 && ((o = q((o = K(o)), -1)), (o = n.add(o, r)))),
            {
              start: i,
              end: o
            }
          );
        }),
        (e.prototype.buildRangeFromDuration = function(e, t, r, n) {
          var i,
            o,
            s,
            a,
            l,
            c = this.dateEnv,
            d = this.options.dateAlignment;
          function u() {
            (s = c.startOf(e, d)),
              (a = c.add(s, r)),
              (l = {
                start: s,
                end: a
              });
          }
          return (
            d ||
              ((i = this.options.dateIncrement)
                ? ((o = ae(i)), (d = ve(o) < ve(r) ? ye(o, !ce(i)).unit : n))
                : (d = n)),
            fe(r) <= 1 &&
              this.isHiddenDay(s) &&
              (s = K((s = this.skipHiddenDays(s, t)))),
            u(),
            this.trimHiddenDays(l) || ((e = this.skipHiddenDays(e, t)), u()),
            l
          );
        }),
        (e.prototype.buildRangeFromDayCount = function(e, t, r) {
          var n,
            i = this.dateEnv,
            o = this.options.dateAlignment,
            s = 0,
            a = e;
          o && (a = i.startOf(a, o)),
            (a = K(a)),
            (n = a = this.skipHiddenDays(a, t));
          do {
            (n = q(n, 1)), this.isHiddenDay(n) || s++;
          } while (s < r);
          return {
            start: a,
            end: n
          };
        }),
        (e.prototype.buildCustomVisibleRange = function(e) {
          var t = this.dateEnv,
            r = this.getRangeOption("visibleRange", t.toDate(e));
          return !r || (null != r.start && null != r.end) ? r : null;
        }),
        (e.prototype.buildRenderRange = function(e, t, r) {
          return e;
        }),
        (e.prototype.buildDateIncrement = function(e) {
          var t,
            r = this.options.dateIncrement;
          return r
            ? ae(r)
            : (t = this.options.dateAlignment)
            ? ae(1, t)
            : e ||
              ae({
                days: 1
              });
        }),
        (e.prototype.getRangeOption = function(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          var n = this.options[e];
          return (
            "function" == typeof n && (n = n.apply(null, t)),
            n && (n = st(n, this.dateEnv)),
            n && (n = Be(n)),
            n
          );
        }),
        (e.prototype.initHiddenDays = function() {
          var e,
            t = this.options.hiddenDays || [],
            r = [],
            n = 0;
          for (!1 === this.options.weekends && t.push(0, 6), e = 0; e < 7; e++)
            (r[e] = -1 !== t.indexOf(e)) || n++;
          if (!n) throw new Error("invalid hiddenDays");
          this.isHiddenDayHash = r;
        }),
        (e.prototype.trimHiddenDays = function(e) {
          var t = e.start,
            r = e.end;
          return (
            t && (t = this.skipHiddenDays(t)),
            r && (r = this.skipHiddenDays(r, -1, !0)),
            null == t || null == r || t < r
              ? {
                  start: t,
                  end: r
                }
              : null
          );
        }),
        (e.prototype.isHiddenDay = function(e) {
          return (
            e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
          );
        }),
        (e.prototype.skipHiddenDays = function(e, t, r) {
          for (
            void 0 === t && (t = 1), void 0 === r && (r = !1);
            this.isHiddenDayHash[(e.getUTCDay() + (r ? t : 0) + 7) % 7];

          )
            e = q(e, t);
          return e;
        }),
        e
      );
    })();
    function En(e, t, r) {
      for (
        var n = (function(e, t) {
            switch (t.type) {
              case "SET_VIEW_TYPE":
                return t.viewType;
              default:
                return e;
            }
          })(e.viewType, t),
          i = (function(e, t, r, n, i) {
            var o;
            switch (t.type) {
              case "PREV":
                o = i.dateProfileGenerators[n].buildPrev(e, r);
                break;
              case "NEXT":
                o = i.dateProfileGenerators[n].buildNext(e, r);
                break;
              case "SET_DATE":
                (e.activeRange && ht(e.currentRange, t.dateMarker)) ||
                  (o = i.dateProfileGenerators[n].build(
                    t.dateMarker,
                    void 0,
                    !0
                  ));
                break;
              case "SET_VIEW_TYPE":
                var s = i.dateProfileGenerators[n];
                if (!s)
                  throw new Error(
                    n
                      ? 'The FullCalendar view "' +
                        n +
                        '" does not exist. Make sure your plugins are loaded correctly.'
                      : "No available FullCalendar view plugins."
                  );
                o = s.build(t.dateMarker || r, void 0, !0);
            }
            return !o ||
              !o.isValid ||
              (e &&
                ((a = e),
                (l = o),
                dt(a.validRange, l.validRange) &&
                  dt(a.activeRange, l.activeRange) &&
                  dt(a.renderRange, l.renderRange) &&
                  de(a.minTime, l.minTime) &&
                  de(a.maxTime, l.maxTime)))
              ? e
              : o;
            var a, l;
          })(e.dateProfile, t, e.currentDate, n, r),
          o = fn(e.eventSources, t, i, r),
          s = We({}, e, {
            viewType: n,
            dateProfile: i,
            currentDate: bn(e.currentDate, t, i),
            eventSources: o,
            eventStore: Vt(e.eventStore, t, o, i, r),
            dateSelection: wn(e.dateSelection, t, r),
            eventSelection: Tn(e.eventSelection, t),
            eventDrag: Dn(e.eventDrag, t, o, r),
            eventResize: Cn(e.eventResize, t, o, r),
            eventSourceLoadingLevel: Rn(o),
            loadingLevel: Rn(o)
          }),
          a = 0,
          l = r.pluginSystem.hooks.reducers;
        a < l.length;
        a++
      ) {
        s = (0, l[a])(s, t, r);
      }
      return s;
    }
    function bn(e, t, r) {
      switch (t.type) {
        case "PREV":
        case "NEXT":
          return ht(r.currentRange, e) ? e : r.currentRange.start;
        case "SET_DATE":
        case "SET_VIEW_TYPE":
          var n = t.dateMarker || e;
          return r.activeRange && !ht(r.activeRange, n)
            ? r.currentRange.start
            : n;
        default:
          return e;
      }
    }
    function wn(e, t, r) {
      switch (t.type) {
        case "SELECT_DATES":
          return t.selection;
        case "UNSELECT_DATES":
          return null;
        default:
          return e;
      }
    }
    function Tn(e, t) {
      switch (t.type) {
        case "SELECT_EVENT":
          return t.eventInstanceId;
        case "UNSELECT_EVENT":
          return "";
        default:
          return e;
      }
    }
    function Dn(e, t, r, n) {
      switch (t.type) {
        case "SET_EVENT_DRAG":
          var i = t.state;
          return {
            affectedEvents: i.affectedEvents,
            mutatedEvents: i.mutatedEvents,
            isEvent: i.isEvent,
            origSeg: i.origSeg
          };
        case "UNSET_EVENT_DRAG":
          return null;
        default:
          return e;
      }
    }
    function Cn(e, t, r, n) {
      switch (t.type) {
        case "SET_EVENT_RESIZE":
          var i = t.state;
          return {
            affectedEvents: i.affectedEvents,
            mutatedEvents: i.mutatedEvents,
            isEvent: i.isEvent,
            origSeg: i.origSeg
          };
        case "UNSET_EVENT_RESIZE":
          return null;
        default:
          return e;
      }
    }
    function Rn(e) {
      var t = 0;
      for (var r in e) e[r].isFetching && t++;
      return t;
    }
    var xn = {
      start: null,
      end: null,
      allDay: Boolean
    };
    function In(e, t, r) {
      var n = (function(e, t) {
          var r = {},
            n = Ne(e, xn, {}, r),
            i = n.start ? t.createMarkerMeta(n.start) : null,
            o = n.end ? t.createMarkerMeta(n.end) : null,
            s = n.allDay;
          null == s &&
            (s = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified));
          return (
            (r.range = {
              start: i ? i.marker : null,
              end: o ? o.marker : null
            }),
            (r.allDay = s),
            r
          );
        })(e, t),
        i = n.range;
      if (!i.start) return null;
      if (!i.end) {
        if (null == r) return null;
        i.end = t.add(i.start, r);
      }
      return n;
    }
    function kn(e, t, r) {
      var n = pr(
        {
          editable: !1
        },
        "",
        e.allDay,
        !0,
        r
      );
      return {
        def: n,
        ui: Bt(n, t),
        instance: hr(n.defId, e.range),
        range: e.range,
        isStart: !0,
        isEnd: !0
      };
    }
    function Mn(e, t, r, n) {
      if (t[e]) return t[e];
      var i = (function(e, t, r, n) {
        var i = r[e],
          o = n[e],
          s = function(e) {
            return i && null !== i[e] ? i[e] : o && null !== o[e] ? o[e] : null;
          },
          a = s("class"),
          l = s("superType");
        !l && a && (l = Pn(a, n) || Pn(a, r));
        var c = null;
        if (l) {
          if (l === e)
            throw new Error(
              "Can't have a custom view type that references itself"
            );
          c = Mn(l, t, r, n);
        }
        !a && c && (a = c.class);
        if (!a) return null;
        return {
          type: e,
          class: a,
          defaults: We({}, c ? c.defaults : {}, i ? i.options : {}),
          overrides: We({}, c ? c.overrides : {}, o ? o.options : {})
        };
      })(e, t, r, n);
      return i && (t[e] = i), i;
    }
    function Pn(e, t) {
      var r = Object.getPrototypeOf(e.prototype);
      for (var n in t) {
        var i = t[n];
        if (i.class && i.class.prototype === r) return n;
      }
      return "";
    }
    function Hn(e) {
      return Xe(e, Ln);
    }
    var _n = {
      type: String,
      class: null
    };
    function Ln(e) {
      "function" == typeof e &&
        (e = {
          class: e
        });
      var t = {},
        r = Ne(e, _n, {}, t);
      return {
        superType: r.type,
        class: r.class,
        options: t
      };
    }
    function On(e, t) {
      var r = Hn(e),
        n = Hn(t.overrides.views);
      return Xe(
        (function(e, t) {
          var r,
            n = {};
          for (r in e) Mn(r, n, e, t);
          for (r in t) Mn(r, n, e, t);
          return n;
        })(r, n),
        function(e) {
          return (function(e, t, r) {
            var n =
                e.overrides.duration ||
                e.defaults.duration ||
                r.dynamicOverrides.duration ||
                r.overrides.duration,
              i = null,
              o = "",
              s = "",
              a = {};
            if (n && (i = ae(n))) {
              var l = ye(i, !ce(n));
              (o = l.unit),
                1 === l.value && ((s = o), (a = t[o] ? t[o].options : {}));
            }
            var c = function(t) {
              var r = t.buttonText || {},
                n = e.defaults.buttonTextKey;
              return null != n && null != r[n]
                ? r[n]
                : null != r[e.type]
                ? r[e.type]
                : null != r[s]
                ? r[s]
                : void 0;
            };
            return {
              type: e.type,
              class: e.class,
              duration: i,
              durationUnit: o,
              singleUnit: s,
              options: We(
                {},
                Zr,
                e.defaults,
                r.dirDefaults,
                r.localeDefaults,
                r.overrides,
                a,
                e.overrides,
                r.dynamicOverrides
              ),
              buttonTextOverride:
                c(r.dynamicOverrides) ||
                c(r.overrides) ||
                e.overrides.buttonText,
              buttonTextDefault:
                c(r.localeDefaults) ||
                c(r.dirDefaults) ||
                e.defaults.buttonText ||
                c(Zr) ||
                e.type
            };
          })(e, n, t);
        }
      );
    }
    var An = (function(e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          return (
            (n._renderLayout = gr(n.renderLayout, n.unrenderLayout)),
            (n._updateTitle = gr(n.updateTitle, null, [n._renderLayout])),
            (n._updateActiveButton = gr(n.updateActiveButton, null, [
              n._renderLayout
            ])),
            (n._updateToday = gr(n.updateToday, null, [n._renderLayout])),
            (n._updatePrev = gr(n.updatePrev, null, [n._renderLayout])),
            (n._updateNext = gr(n.updateNext, null, [n._renderLayout])),
            (n.el = c("div", {
              className: "fc-toolbar " + r
            })),
            n
          );
        }
        return (
          Ve(t, e),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this._renderLayout.unrender(),
              y(this.el);
          }),
          (t.prototype.render = function(e) {
            this._renderLayout(e.layout),
              this._updateTitle(e.title),
              this._updateActiveButton(e.activeButton),
              this._updateToday(e.isTodayEnabled),
              this._updatePrev(e.isPrevEnabled),
              this._updateNext(e.isNextEnabled);
          }),
          (t.prototype.renderLayout = function(e) {
            var t = this.el;
            (this.viewsWithButtons = []),
              h(t, this.renderSection("left", e.left)),
              h(t, this.renderSection("center", e.center)),
              h(t, this.renderSection("right", e.right));
          }),
          (t.prototype.unrenderLayout = function() {
            this.el.innerHTML = "";
          }),
          (t.prototype.renderSection = function(e, t) {
            var r = this,
              n = this.theme,
              i = this.calendar,
              o = i.optionsManager,
              s = i.viewSpecs,
              a = c("div", {
                className: "fc-" + e
              }),
              l = o.computed.customButtons || {},
              u = o.overrides.buttonText || {},
              p = o.computed.buttonText || {};
            return (
              t &&
                t.split(" ").forEach(function(e, t) {
                  var o,
                    c = [],
                    f = !0;
                  if (
                    (e.split(",").forEach(function(e, t) {
                      var o, a, h, v, g, y, m, S, E;
                      "title" === e
                        ? (c.push(d("<h2>&nbsp;</h2>")), (f = !1))
                        : ((o = l[e])
                            ? ((h = function(e) {
                                o.click && o.click.call(S, e);
                              }),
                              (v = n.getCustomButtonIconClass(o)) ||
                                (v = n.getIconClass(e)) ||
                                (g = o.text))
                            : (a = s[e])
                            ? (r.viewsWithButtons.push(e),
                              (h = function() {
                                i.changeView(e);
                              }),
                              (g = a.buttonTextOverride) ||
                                (v = n.getIconClass(e)) ||
                                (g = a.buttonTextDefault))
                            : i[e] &&
                              ((h = function() {
                                i[e]();
                              }),
                              (g = u[e]) ||
                                (v = n.getIconClass(e)) ||
                                (g = p[e])),
                          h &&
                            ((m = [
                              "fc-" + e + "-button",
                              n.getClass("button")
                            ]),
                            g
                              ? ((y = $t(g)), (E = ""))
                              : v &&
                                ((y = "<span class='" + v + "'></span>"),
                                (E = ' aria-label="' + e + '"')),
                            (S = d(
                              '<button type="button" class="' +
                                m.join(" ") +
                                '"' +
                                E +
                                ">" +
                                y +
                                "</button>"
                            )).addEventListener("click", h),
                            c.push(S)));
                    }),
                    c.length > 1)
                  ) {
                    o = document.createElement("div");
                    var v = n.getClass("buttonGroup");
                    f && v && o.classList.add(v), h(o, c), a.appendChild(o);
                  } else h(a, c);
                }),
              a
            );
          }),
          (t.prototype.updateToday = function(e) {
            this.toggleButtonEnabled("today", e);
          }),
          (t.prototype.updatePrev = function(e) {
            this.toggleButtonEnabled("prev", e);
          }),
          (t.prototype.updateNext = function(e) {
            this.toggleButtonEnabled("next", e);
          }),
          (t.prototype.updateTitle = function(e) {
            w(this.el, "h2").forEach(function(t) {
              t.innerText = e;
            });
          }),
          (t.prototype.updateActiveButton = function(e) {
            var t = this.theme.getClass("buttonActive");
            w(this.el, "button").forEach(function(r) {
              e && r.classList.contains("fc-" + e + "-button")
                ? r.classList.add(t)
                : r.classList.remove(t);
            });
          }),
          (t.prototype.toggleButtonEnabled = function(e, t) {
            w(this.el, ".fc-" + e + "-button").forEach(function(e) {
              e.disabled = !t;
            });
          }),
          t
        );
      })(Lr),
      Nn = (function(e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          (n._renderToolbars = gr(n.renderToolbars)),
            (n.buildViewPropTransformers = vt(Bn)),
            (n.el = r),
            f(
              r,
              (n.contentEl = c("div", {
                className: "fc-view-container"
              }))
            );
          for (
            var i = n.calendar,
              o = 0,
              s = i.pluginSystem.hooks.viewContainerModifiers;
            o < s.length;
            o++
          ) {
            (0, s[o])(n.contentEl, i);
          }
          return (
            n.toggleElClassNames(!0),
            (n.computeTitle = vt(zn)),
            (n.parseBusinessHours = vt(function(e) {
              return vr(e, n.calendar);
            })),
            n
          );
        }
        return (
          Ve(t, e),
          (t.prototype.destroy = function() {
            this.header && this.header.destroy(),
              this.footer && this.footer.destroy(),
              this.view && this.view.destroy(),
              y(this.contentEl),
              this.toggleElClassNames(!1),
              e.prototype.destroy.call(this);
          }),
          (t.prototype.toggleElClassNames = function(e) {
            var t = this.el.classList,
              r = "fc-" + this.opt("dir"),
              n = this.theme.getClass("widget");
            e
              ? (t.add("fc"), t.add(r), t.add(n))
              : (t.remove("fc"), t.remove(r), t.remove(n));
          }),
          (t.prototype.render = function(e) {
            this.freezeHeight();
            var t = this.computeTitle(e.dateProfile, e.viewSpec.options);
            this._renderToolbars(
              e.viewSpec,
              e.dateProfile,
              e.currentDate,
              e.dateProfileGenerator,
              t
            ),
              this.renderView(e, t),
              this.updateSize(),
              this.thawHeight();
          }),
          (t.prototype.renderToolbars = function(e, t, r, n, i) {
            var o = this.opt("header"),
              s = this.opt("footer"),
              a = this.calendar.getNow(),
              l = n.build(a),
              c = n.buildPrev(t, r),
              d = n.buildNext(t, r),
              u = {
                title: i,
                activeButton: e.type,
                isTodayEnabled: l.isValid && !ht(t.currentRange, a),
                isPrevEnabled: c.isValid,
                isNextEnabled: d.isValid
              };
            o
              ? (this.header ||
                  ((this.header = new An(this.context, "fc-header-toolbar")),
                  f(this.el, this.header.el)),
                this.header.receiveProps(
                  We(
                    {
                      layout: o
                    },
                    u
                  )
                ))
              : this.header && (this.header.destroy(), (this.header = null)),
              s
                ? (this.footer ||
                    ((this.footer = new An(this.context, "fc-footer-toolbar")),
                    h(this.el, this.footer.el)),
                  this.footer.receiveProps(
                    We(
                      {
                        layout: s
                      },
                      u
                    )
                  ))
                : this.footer && (this.footer.destroy(), (this.footer = null));
          }),
          (t.prototype.renderView = function(e, t) {
            var r = this.view,
              n = e.viewSpec,
              i = e.dateProfileGenerator;
            r && r.viewSpec === n
              ? r.addScroll(r.queryScroll())
              : (r && r.destroy(),
                (r = this.view = new n.class(
                  {
                    calendar: this.calendar,
                    view: null,
                    dateEnv: this.dateEnv,
                    theme: this.theme,
                    options: n.options
                  },
                  n,
                  i,
                  this.contentEl
                ))),
              (r.title = t);
            for (
              var o = {
                  dateProfile: e.dateProfile,
                  businessHours: this.parseBusinessHours(
                    n.options.businessHours
                  ),
                  eventStore: e.eventStore,
                  eventUiBases: e.eventUiBases,
                  dateSelection: e.dateSelection,
                  eventSelection: e.eventSelection,
                  eventDrag: e.eventDrag,
                  eventResize: e.eventResize
                },
                s = 0,
                a = this.buildViewPropTransformers(
                  this.calendar.pluginSystem.hooks.viewPropsTransformers
                );
              s < a.length;
              s++
            ) {
              var l = a[s];
              We(o, l.transform(o, n, e, r));
            }
            r.receiveProps(o);
          }),
          (t.prototype.updateSize = function(e) {
            void 0 === e && (e = !1);
            var t = this.view;
            e && t.addScroll(t.queryScroll()),
              (e || null == this.isHeightAuto) && this.computeHeightVars(),
              t.updateSize(e, this.viewHeight, this.isHeightAuto),
              t.updateNowIndicator(),
              t.popScroll(e);
          }),
          (t.prototype.computeHeightVars = function() {
            var e = this.calendar,
              t = e.opt("height"),
              r = e.opt("contentHeight");
            if (
              ((this.isHeightAuto = "auto" === t || "auto" === r),
              "number" == typeof r)
            )
              this.viewHeight = r;
            else if ("function" == typeof r) this.viewHeight = r();
            else if ("number" == typeof t)
              this.viewHeight = t - this.queryToolbarsHeight();
            else if ("function" == typeof t)
              this.viewHeight = t() - this.queryToolbarsHeight();
            else if ("parent" === t) {
              var n = this.el.parentNode;
              this.viewHeight =
                n.getBoundingClientRect().height - this.queryToolbarsHeight();
            } else
              this.viewHeight = Math.round(
                this.contentEl.getBoundingClientRect().width /
                  Math.max(e.opt("aspectRatio"), 0.5)
              );
          }),
          (t.prototype.queryToolbarsHeight = function() {
            var e = 0;
            return (
              this.header && (e += N(this.header.el)),
              this.footer && (e += N(this.footer.el)),
              e
            );
          }),
          (t.prototype.freezeHeight = function() {
            R(this.el, {
              height: this.el.getBoundingClientRect().height,
              overflow: "hidden"
            });
          }),
          (t.prototype.thawHeight = function() {
            R(this.el, {
              height: "",
              overflow: ""
            });
          }),
          t
        );
      })(Lr);
    function zn(e, t) {
      var r;
      return (
        (r = /^(year|month)$/.test(e.currentRangeUnit)
          ? e.currentRange
          : e.activeRange),
        this.dateEnv.formatRange(
          r.start,
          r.end,
          It(
            t.titleFormat ||
              (function(e) {
                var t = e.currentRangeUnit;
                if ("year" === t)
                  return {
                    year: "numeric"
                  };
                if ("month" === t)
                  return {
                    year: "numeric",
                    month: "long"
                  };
                var r = X(e.currentRange.start, e.currentRange.end);
                return null !== r && r > 1
                  ? {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    }
                  : {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    };
              })(e),
            t.titleRangeSeparator
          ),
          {
            isEndExclusive: e.isRangeAllDay
          }
        )
      );
    }
    function Bn(e) {
      return e.map(function(e) {
        return new e();
      });
    }
    var Un = (function() {
      function e(e) {
        this.component = e.component;
      }
      return (e.prototype.destroy = function() {}), e;
    })();
    function jn(e) {
      var t;
      return ((t = {})[e.component.uid] = e), t;
    }
    var Gn = {},
      Vn = (function(e) {
        function t(t) {
          var r = e.call(this, t) || this;
          r.handleSegClick = function(e, t) {
            var n = r.component,
              i = Nt(t);
            if (i && n.isValidSegDownEl(e.target)) {
              var o = E(e.target, ".fc-has-url"),
                s = o ? o.querySelector("a[href]").href : "";
              n.publiclyTrigger("eventClick", [
                {
                  el: t,
                  event: new _t(
                    n.calendar,
                    i.eventRange.def,
                    i.eventRange.instance
                  ),
                  jsEvent: e,
                  view: n.view
                }
              ]),
                s && !e.defaultPrevented && (window.location.href = s);
            }
          };
          var n = t.component;
          return (
            (r.destroy = G(
              n.el,
              "click",
              n.fgSegSelector + "," + n.bgSegSelector,
              r.handleSegClick
            )),
            r
          );
        }
        return Ve(t, e), t;
      })(Un),
      Wn = (function(e) {
        function t(t) {
          var r = e.call(this, t) || this;
          (r.handleEventElRemove = function(e) {
            e === r.currentSegEl && r.handleSegLeave(null, r.currentSegEl);
          }),
            (r.handleSegEnter = function(e, t) {
              Nt(t) &&
                (t.classList.add("fc-allow-mouse-resize"),
                (r.currentSegEl = t),
                r.triggerEvent("eventMouseEnter", e, t));
            }),
            (r.handleSegLeave = function(e, t) {
              r.currentSegEl &&
                (t.classList.remove("fc-allow-mouse-resize"),
                (r.currentSegEl = null),
                r.triggerEvent("eventMouseLeave", e, t));
            });
          var n,
            i,
            o,
            s,
            a,
            l = t.component;
          return (
            (r.removeHoverListeners =
              ((n = l.el),
              (i = l.fgSegSelector + "," + l.bgSegSelector),
              (o = r.handleSegEnter),
              (s = r.handleSegLeave),
              G(n, "mouseover", i, function(e, t) {
                if (t !== a) {
                  (a = t), o(e, t);
                  var r = function(e) {
                    (a = null), s(e, t), t.removeEventListener("mouseleave", r);
                  };
                  t.addEventListener("mouseleave", r);
                }
              }))),
            l.calendar.on("eventElRemove", r.handleEventElRemove),
            r
          );
        }
        return (
          Ve(t, e),
          (t.prototype.destroy = function() {
            this.removeHoverListeners(),
              this.component.calendar.off(
                "eventElRemove",
                this.handleEventElRemove
              );
          }),
          (t.prototype.triggerEvent = function(e, t, r) {
            var n = this.component,
              i = Nt(r);
            (t && !n.isValidSegDownEl(t.target)) ||
              n.publiclyTrigger(e, [
                {
                  el: r,
                  event: new _t(
                    this.component.calendar,
                    i.eventRange.def,
                    i.eventRange.instance
                  ),
                  jsEvent: t,
                  view: n.view
                }
              ]);
          }),
          t
        );
      })(Un),
      Fn = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return Ve(t, e), t;
      })(Hr);
    (Fn.prototype.classes = {
      widget: "fc-unthemed",
      widgetHeader: "fc-widget-header",
      widgetContent: "fc-widget-content",
      buttonGroup: "fc-button-group",
      button: "fc-button fc-button-primary",
      buttonActive: "fc-button-active",
      popoverHeader: "fc-widget-header",
      popoverContent: "fc-widget-content",
      headerRow: "fc-widget-header",
      dayRow: "fc-widget-content",
      listView: "fc-widget-content"
    }),
      (Fn.prototype.baseIconClass = "fc-icon"),
      (Fn.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right"
      }),
      (Fn.prototype.iconOverrideOption = "buttonIcons"),
      (Fn.prototype.iconOverrideCustomButtonOption = "icon"),
      (Fn.prototype.iconOverridePrefix = "fc-icon-");
    var qn = (function() {
      function e(e, t) {
        var r = this;
        (this.parseRawLocales = vt($r)),
          (this.buildLocale = vt(en)),
          (this.buildDateEnv = vt(Yn)),
          (this.buildTheme = vt(Zn)),
          (this.buildEventUiSingleBase = vt(this._buildEventUiSingleBase)),
          (this.buildSelectionConfig = vt(this._buildSelectionConfig)),
          (this.buildEventUiBySource = gt(Kn, Qe)),
          (this.buildEventUiBases = vt(Jn)),
          (this.interactionsStore = {}),
          (this.actionQueue = []),
          (this.isReducing = !1),
          (this.needsRerender = !1),
          (this.needsFullRerender = !1),
          (this.isRendering = !1),
          (this.renderingPauseDepth = 0),
          (this.buildDelayedRerender = vt(Xn)),
          (this.afterSizingTriggers = {}),
          (this.isViewUpdated = !1),
          (this.isDatesUpdated = !1),
          (this.isEventsUpdated = !1),
          (this.el = e),
          (this.optionsManager = new rn(t || {})),
          (this.pluginSystem = new zr()),
          this.addPluginInputs(this.optionsManager.computed.plugins || []),
          this.handleOptions(this.optionsManager.computed),
          this.publiclyTrigger("_init"),
          this.hydrate(),
          (this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions.map(
            function(e) {
              return new e(r);
            }
          ));
      }
      return (
        (e.prototype.addPluginInputs = function(e) {
          for (
            var t = (function(e) {
                for (var t = [], r = 0, n = e; r < n.length; r++) {
                  var i = n[r];
                  if ("string" == typeof i) {
                    var o = "FullCalendar" + Me(i);
                    window[o]
                      ? t.push(window[o].default)
                      : console.warn("Plugin file not loaded for " + i);
                  } else t.push(i);
                }
                return Jr.concat(t);
              })(e),
              r = 0,
              n = t;
            r < n.length;
            r++
          ) {
            var i = n[r];
            this.pluginSystem.add(i);
          }
        }),
        Object.defineProperty(e.prototype, "view", {
          get: function() {
            return this.component ? this.component.view : null;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.render = function() {
          this.component
            ? this.requestRerender(!0)
            : ((this.renderableEventStore = {
                defs: {},
                instances: {}
              }),
              this.bindHandlers(),
              this.executeRender());
        }),
        (e.prototype.destroy = function() {
          if (this.component) {
            this.unbindHandlers(),
              this.component.destroy(),
              (this.component = null);
            for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
              t[e].destroy();
            }
            this.publiclyTrigger("_destroyed");
          }
        }),
        (e.prototype.bindHandlers = function() {
          var e = this;
          (this.removeNavLinkListener = G(
            this.el,
            "click",
            "a[data-goto]",
            function(t, r) {
              var n = r.getAttribute("data-goto");
              n = n ? JSON.parse(n) : {};
              var i = e.dateEnv,
                o = i.createMarker(n.date),
                s = n.type,
                a = e.viewOpt("navLink" + Me(s) + "Click");
              "function" == typeof a
                ? a(i.toDate(o), t)
                : ("string" == typeof a && (s = a), e.zoomTo(o, s));
            }
          )),
            this.opt("handleWindowResize") &&
              window.addEventListener(
                "resize",
                (this.windowResizeProxy = Ae(
                  this.windowResize.bind(this),
                  this.opt("windowResizeDelay")
                ))
              );
        }),
        (e.prototype.unbindHandlers = function() {
          this.removeNavLinkListener(),
            this.windowResizeProxy &&
              (window.removeEventListener("resize", this.windowResizeProxy),
              (this.windowResizeProxy = null));
        }),
        (e.prototype.hydrate = function() {
          var e = this;
          this.state = this.buildInitialState();
          var t = this.opt("eventSources") || [],
            r = this.opt("events"),
            n = [];
          r && t.unshift(r);
          for (var i = 0, o = t; i < o.length; i++) {
            var s = pn(o[i], this);
            s && n.push(s);
          }
          this.batchRendering(function() {
            e.dispatch({
              type: "INIT"
            }),
              e.dispatch({
                type: "ADD_EVENT_SOURCES",
                sources: n
              }),
              e.dispatch({
                type: "SET_VIEW_TYPE",
                viewType:
                  e.opt("defaultView") || e.pluginSystem.hooks.defaultView
              });
          });
        }),
        (e.prototype.buildInitialState = function() {
          return {
            viewType: null,
            loadingLevel: 0,
            eventSourceLoadingLevel: 0,
            currentDate: this.getInitialDate(),
            dateProfile: null,
            eventSources: {},
            eventStore: {
              defs: {},
              instances: {}
            },
            dateSelection: null,
            eventSelection: "",
            eventDrag: null,
            eventResize: null
          };
        }),
        (e.prototype.dispatch = function(e) {
          if ((this.actionQueue.push(e), !this.isReducing)) {
            this.isReducing = !0;
            for (var t = this.state; this.actionQueue.length; )
              this.state = this.reduce(
                this.state,
                this.actionQueue.shift(),
                this
              );
            var r = this.state;
            (this.isReducing = !1),
              !t.loadingLevel && r.loadingLevel
                ? this.publiclyTrigger("loading", [!0])
                : t.loadingLevel &&
                  !r.loadingLevel &&
                  this.publiclyTrigger("loading", [!1]);
            var n = this.component && this.component.view;
            (t.eventStore !== r.eventStore || this.needsFullRerender) &&
              t.eventStore &&
              (this.isEventsUpdated = !0),
              (t.dateProfile !== r.dateProfile || this.needsFullRerender) &&
                (t.dateProfile &&
                  n &&
                  this.publiclyTrigger("datesDestroy", [
                    {
                      view: n,
                      el: n.el
                    }
                  ]),
                (this.isDatesUpdated = !0)),
              (t.viewType !== r.viewType || this.needsFullRerender) &&
                (t.viewType &&
                  n &&
                  this.publiclyTrigger("viewSkeletonDestroy", [
                    {
                      view: n,
                      el: n.el
                    }
                  ]),
                (this.isViewUpdated = !0)),
              this.requestRerender();
          }
        }),
        (e.prototype.reduce = function(e, t, r) {
          return En(e, t, r);
        }),
        (e.prototype.requestRerender = function(e) {
          void 0 === e && (e = !1),
            (this.needsRerender = !0),
            (this.needsFullRerender = this.needsFullRerender || e),
            this.delayedRerender();
        }),
        (e.prototype.tryRerender = function() {
          this.component &&
            this.needsRerender &&
            !this.renderingPauseDepth &&
            !this.isRendering &&
            this.executeRender();
        }),
        (e.prototype.batchRendering = function(e) {
          this.renderingPauseDepth++,
            e(),
            this.renderingPauseDepth--,
            this.needsRerender && this.requestRerender();
        }),
        (e.prototype.executeRender = function() {
          var e = this.needsFullRerender;
          (this.needsRerender = !1),
            (this.needsFullRerender = !1),
            (this.isRendering = !0),
            this.renderComponent(e),
            (this.isRendering = !1),
            this.needsRerender && this.delayedRerender();
        }),
        (e.prototype.renderComponent = function(e) {
          var t = this.state,
            r = this.component,
            n = t.viewType,
            i = this.viewSpecs[n],
            o = e && r ? r.view.queryScroll() : null;
          if (!i) throw new Error('View type "' + n + '" is not valid');
          var s = (this.renderableEventStore =
              t.eventSourceLoadingLevel &&
              !this.opt("progressiveEventRendering")
                ? this.renderableEventStore
                : t.eventStore),
            a = this.buildEventUiSingleBase(i.options),
            l = this.buildEventUiBySource(t.eventSources),
            c = (this.eventUiBases = this.buildEventUiBases(s.defs, a, l));
          (!e && r) ||
            (r && (r.freezeHeight(), r.destroy()),
            (r = this.component = new Nn(
              {
                calendar: this,
                view: null,
                dateEnv: this.dateEnv,
                theme: this.theme,
                options: this.optionsManager.computed
              },
              this.el
            )),
            (this.isViewUpdated = !0),
            (this.isDatesUpdated = !0),
            (this.isEventsUpdated = !0)),
            r.receiveProps(
              We({}, t, {
                viewSpec: i,
                dateProfile: t.dateProfile,
                dateProfileGenerator: this.dateProfileGenerators[n],
                eventStore: s,
                eventUiBases: c,
                dateSelection: t.dateSelection,
                eventSelection: t.eventSelection,
                eventDrag: t.eventDrag,
                eventResize: t.eventResize
              })
            ),
            o && r.view.applyScroll(o, !1),
            this.isViewUpdated &&
              ((this.isViewUpdated = !1),
              this.publiclyTrigger("viewSkeletonRender", [
                {
                  view: r.view,
                  el: r.view.el
                }
              ])),
            this.isDatesUpdated &&
              ((this.isDatesUpdated = !1),
              this.publiclyTrigger("datesRender", [
                {
                  view: r.view,
                  el: r.view.el
                }
              ])),
            this.isEventsUpdated && (this.isEventsUpdated = !1),
            this.releaseAfterSizingTriggers();
        }),
        (e.prototype.setOption = function(e, t) {
          var r;
          this.mutateOptions((((r = {})[e] = t), r), [], !0);
        }),
        (e.prototype.getOption = function(e) {
          return this.optionsManager.computed[e];
        }),
        (e.prototype.opt = function(e) {
          return this.optionsManager.computed[e];
        }),
        (e.prototype.viewOpt = function(e) {
          return this.viewOpts()[e];
        }),
        (e.prototype.viewOpts = function() {
          return this.viewSpecs[this.state.viewType].options;
        }),
        (e.prototype.mutateOptions = function(e, t, r, n) {
          var i = this,
            o = this.pluginSystem.hooks.optionChangeHandlers,
            s = {},
            a = {},
            l = this.dateEnv,
            c = !1,
            d = !1,
            u = Boolean(t.length);
          for (var p in e) o[p] ? (a[p] = e[p]) : (s[p] = e[p]);
          for (var h in s)
            /^(height|contentHeight|aspectRatio)$/.test(h)
              ? (d = !0)
              : /^(defaultDate|defaultView)$/.test(h) ||
                ((u = !0), "timeZone" === h && (c = !0));
          this.optionsManager.mutate(s, t, r),
            u &&
              (this.handleOptions(this.optionsManager.computed),
              (this.needsFullRerender = !0)),
            this.batchRendering(function() {
              if (
                (u
                  ? (c &&
                      i.dispatch({
                        type: "CHANGE_TIMEZONE",
                        oldDateEnv: l
                      }),
                    i.dispatch({
                      type: "SET_VIEW_TYPE",
                      viewType: i.state.viewType
                    }))
                  : d && i.updateSize(),
                n)
              )
                for (var e in a) o[e](a[e], i, n);
            });
        }),
        (e.prototype.handleOptions = function(e) {
          var t = this,
            r = this.pluginSystem.hooks;
          (this.defaultAllDayEventDuration = ae(e.defaultAllDayEventDuration)),
            (this.defaultTimedEventDuration = ae(e.defaultTimedEventDuration)),
            (this.delayedRerender = this.buildDelayedRerender(e.rerenderDelay)),
            (this.theme = this.buildTheme(e));
          var n = this.parseRawLocales(e.locales);
          this.availableRawLocales = n.map;
          var i = this.buildLocale(e.locale || n.defaultCode, n.map);
          (this.dateEnv = this.buildDateEnv(
            i,
            e.timeZone,
            r.namedTimeZonedImpl,
            e.firstDay,
            e.weekNumberCalculation,
            e.weekLabel,
            r.cmdFormatter
          )),
            (this.selectionConfig = this.buildSelectionConfig(e)),
            (this.viewSpecs = On(r.views, this.optionsManager)),
            (this.dateProfileGenerators = Xe(this.viewSpecs, function(e) {
              return new e.class.prototype.dateProfileGeneratorClass(e, t);
            }));
        }),
        (e.prototype.getAvailableLocaleCodes = function() {
          return Object.keys(this.availableRawLocales);
        }),
        (e.prototype._buildSelectionConfig = function(e) {
          return ir("select", e, this);
        }),
        (e.prototype._buildEventUiSingleBase = function(e) {
          return (
            e.editable &&
              (e = We({}, e, {
                eventEditable: !0
              })),
            ir("event", e, this)
          );
        }),
        (e.prototype.hasPublicHandlers = function(e) {
          return this.hasHandlers(e) || this.opt(e);
        }),
        (e.prototype.publiclyTrigger = function(e, t) {
          var r = this.opt(e);
          if ((this.triggerWith(e, this, t), r)) return r.apply(this, t);
        }),
        (e.prototype.publiclyTriggerAfterSizing = function(e, t) {
          var r = this.afterSizingTriggers;
          (r[e] || (r[e] = [])).push(t);
        }),
        (e.prototype.releaseAfterSizingTriggers = function() {
          var e = this.afterSizingTriggers;
          for (var t in e)
            for (var r = 0, n = e[t]; r < n.length; r++) {
              var i = n[r];
              this.publiclyTrigger(t, i);
            }
          this.afterSizingTriggers = {};
        }),
        (e.prototype.isValidViewType = function(e) {
          return Boolean(this.viewSpecs[e]);
        }),
        (e.prototype.changeView = function(e, t) {
          var r = null;
          t &&
            (t.start && t.end
              ? (this.optionsManager.mutate(
                  {
                    visibleRange: t
                  },
                  []
                ),
                this.handleOptions(this.optionsManager.computed))
              : (r = this.dateEnv.createMarker(t))),
            this.unselect(),
            this.dispatch({
              type: "SET_VIEW_TYPE",
              viewType: e,
              dateMarker: r
            });
        }),
        (e.prototype.zoomTo = function(e, t) {
          var r;
          (t = t || "day"),
            (r = this.viewSpecs[t] || this.getUnitViewSpec(t)),
            this.unselect(),
            r
              ? this.dispatch({
                  type: "SET_VIEW_TYPE",
                  viewType: r.type,
                  dateMarker: e
                })
              : this.dispatch({
                  type: "SET_DATE",
                  dateMarker: e
                });
        }),
        (e.prototype.getUnitViewSpec = function(e) {
          var t,
            r,
            n = this.component,
            i = [];
          for (var o in (n.header && i.push.apply(i, n.header.viewsWithButtons),
          n.footer && i.push.apply(i, n.footer.viewsWithButtons),
          this.viewSpecs))
            i.push(o);
          for (t = 0; t < i.length; t++)
            if ((r = this.viewSpecs[i[t]]) && r.singleUnit === e) return r;
        }),
        (e.prototype.getInitialDate = function() {
          var e = this.opt("defaultDate");
          return null != e ? this.dateEnv.createMarker(e) : this.getNow();
        }),
        (e.prototype.prev = function() {
          this.unselect(),
            this.dispatch({
              type: "PREV"
            });
        }),
        (e.prototype.next = function() {
          this.unselect(),
            this.dispatch({
              type: "NEXT"
            });
        }),
        (e.prototype.prevYear = function() {
          this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.addYears(this.state.currentDate, -1)
            });
        }),
        (e.prototype.nextYear = function() {
          this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.addYears(this.state.currentDate, 1)
            });
        }),
        (e.prototype.today = function() {
          this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.getNow()
            });
        }),
        (e.prototype.gotoDate = function(e) {
          this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.createMarker(e)
            });
        }),
        (e.prototype.incrementDate = function(e) {
          var t = ae(e);
          t &&
            (this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.add(this.state.currentDate, t)
            }));
        }),
        (e.prototype.getDate = function() {
          return this.dateEnv.toDate(this.state.currentDate);
        }),
        (e.prototype.formatDate = function(e, t) {
          var r = this.dateEnv;
          return r.format(r.createMarker(e), It(t));
        }),
        (e.prototype.formatRange = function(e, t, r) {
          var n = this.dateEnv;
          return n.formatRange(
            n.createMarker(e),
            n.createMarker(t),
            It(r, this.opt("defaultRangeSeparator")),
            r
          );
        }),
        (e.prototype.formatIso = function(e, t) {
          var r = this.dateEnv;
          return r.formatIso(r.createMarker(e), {
            omitTime: t
          });
        }),
        (e.prototype.windowResize = function(e) {
          !this.isHandlingWindowResize &&
            this.component &&
            e.target === window &&
            ((this.isHandlingWindowResize = !0),
            this.updateSize(),
            this.publiclyTrigger("windowResize", [this.view]),
            (this.isHandlingWindowResize = !1));
        }),
        (e.prototype.updateSize = function() {
          this.component && this.component.updateSize(!0);
        }),
        (e.prototype.registerInteractiveComponent = function(e, t) {
          var r = (function(e, t) {
              return {
                component: e,
                el: t.el,
                useEventCenter: null == t.useEventCenter || t.useEventCenter
              };
            })(e, t),
            n = [Vn, Wn]
              .concat(this.pluginSystem.hooks.componentInteractions)
              .map(function(e) {
                return new e(r);
              });
          (this.interactionsStore[e.uid] = n), (Gn[e.uid] = r);
        }),
        (e.prototype.unregisterInteractiveComponent = function(e) {
          for (
            var t = 0, r = this.interactionsStore[e.uid];
            t < r.length;
            t++
          ) {
            r[t].destroy();
          }
          delete this.interactionsStore[e.uid], delete Gn[e.uid];
        }),
        (e.prototype.select = function(e, t) {
          var r = In(
            null == t
              ? null != e.start
                ? e
                : {
                    start: e,
                    end: null
                  }
              : {
                  start: e,
                  end: t
                },
            this.dateEnv,
            ae({
              days: 1
            })
          );
          r &&
            (this.dispatch({
              type: "SELECT_DATES",
              selection: r
            }),
            this.triggerDateSelect(r));
        }),
        (e.prototype.unselect = function(e) {
          this.state.dateSelection &&
            (this.dispatch({
              type: "UNSELECT_DATES"
            }),
            this.triggerDateUnselect(e));
        }),
        (e.prototype.triggerDateSelect = function(e, t) {
          var r = We({}, this.buildDateSpanApi(e), {
            jsEvent: t ? t.origEvent : null,
            view: this.view
          });
          this.publiclyTrigger("select", [r]);
        }),
        (e.prototype.triggerDateUnselect = function(e) {
          this.publiclyTrigger("unselect", [
            {
              jsEvent: e ? e.origEvent : null,
              view: this.view
            }
          ]);
        }),
        (e.prototype.triggerDateClick = function(e, t, r, n) {
          var i = We({}, this.buildDatePointApi(e), {
            dayEl: t,
            jsEvent: n,
            view: r
          });
          this.publiclyTrigger("dateClick", [i]);
        }),
        (e.prototype.buildDatePointApi = function(e) {
          for (
            var t,
              r,
              n = {},
              i = 0,
              o = this.pluginSystem.hooks.datePointTransforms;
            i < o.length;
            i++
          ) {
            var s = o[i];
            We(n, s(e, this));
          }
          return (
            We(
              n,
              ((t = e),
              {
                date: (r = this.dateEnv).toDate(t.range.start),
                dateStr: r.formatIso(t.range.start, {
                  omitTime: t.allDay
                }),
                allDay: t.allDay
              })
            ),
            n
          );
        }),
        (e.prototype.buildDateSpanApi = function(e) {
          for (
            var t,
              r,
              n = {},
              i = 0,
              o = this.pluginSystem.hooks.dateSpanTransforms;
            i < o.length;
            i++
          ) {
            var s = o[i];
            We(n, s(e, this));
          }
          return (
            We(
              n,
              ((t = e),
              {
                start: (r = this.dateEnv).toDate(t.range.start),
                end: r.toDate(t.range.end),
                startStr: r.formatIso(t.range.start, {
                  omitTime: t.allDay
                }),
                endStr: r.formatIso(t.range.end, {
                  omitTime: t.allDay
                }),
                allDay: t.allDay
              })
            ),
            n
          );
        }),
        (e.prototype.getNow = function() {
          var e = this.opt("now");
          return (
            "function" == typeof e && (e = e()),
            null == e
              ? this.dateEnv.createNowMarker()
              : this.dateEnv.createMarker(e)
          );
        }),
        (e.prototype.getDefaultEventEnd = function(e, t) {
          var r = t;
          return (
            e
              ? ((r = K(r)),
                (r = this.dateEnv.add(r, this.defaultAllDayEventDuration)))
              : (r = this.dateEnv.add(r, this.defaultTimedEventDuration)),
            r
          );
        }),
        (e.prototype.addEvent = function(e, t) {
          if (e instanceof _t) {
            var r = e._def,
              n = e._instance;
            return (
              this.state.eventStore.defs[r.defId] ||
                this.dispatch({
                  type: "ADD_EVENTS",
                  eventStore: et({
                    def: r,
                    instance: n
                  })
                }),
              e
            );
          }
          var i;
          if (t instanceof Ht) i = t.internalEventSource.sourceId;
          else if (null != t) {
            var o = this.getEventSourceById(t);
            if (!o)
              return (
                console.warn(
                  'Could not find an event source with ID "' + t + '"'
                ),
                null
              );
            i = o.internalEventSource.sourceId;
          }
          var s = ur(e, i, this);
          return s
            ? (this.dispatch({
                type: "ADD_EVENTS",
                eventStore: et(s)
              }),
              new _t(this, s.def, s.def.recurringDef ? null : s.instance))
            : null;
        }),
        (e.prototype.getEventById = function(e) {
          var t = this.state.eventStore,
            r = t.defs,
            n = t.instances;
          for (var i in ((e = String(e)), r)) {
            var o = r[i];
            if (o.publicId === e) {
              if (o.recurringDef) return new _t(this, o, null);
              for (var s in n) {
                var a = n[s];
                if (a.defId === o.defId) return new _t(this, o, a);
              }
            }
          }
          return null;
        }),
        (e.prototype.getEvents = function() {
          var e = this.state.eventStore,
            t = e.defs,
            r = e.instances,
            n = [];
          for (var i in r) {
            var o = r[i],
              s = t[o.defId];
            n.push(new _t(this, s, o));
          }
          return n;
        }),
        (e.prototype.removeAllEvents = function() {
          this.dispatch({
            type: "REMOVE_ALL_EVENTS"
          });
        }),
        (e.prototype.rerenderEvents = function() {
          this.dispatch({
            type: "RESET_EVENTS"
          });
        }),
        (e.prototype.getEventSources = function() {
          var e = this.state.eventSources,
            t = [];
          for (var r in e) t.push(new Ht(this, e[r]));
          return t;
        }),
        (e.prototype.getEventSourceById = function(e) {
          var t = this.state.eventSources;
          for (var r in ((e = String(e)), t))
            if (t[r].publicId === e) return new Ht(this, t[r]);
          return null;
        }),
        (e.prototype.addEventSource = function(e) {
          if (e instanceof Ht)
            return (
              this.state.eventSources[e.internalEventSource.sourceId] ||
                this.dispatch({
                  type: "ADD_EVENT_SOURCES",
                  sources: [e.internalEventSource]
                }),
              e
            );
          var t = pn(e, this);
          return t
            ? (this.dispatch({
                type: "ADD_EVENT_SOURCES",
                sources: [t]
              }),
              new Ht(this, t))
            : null;
        }),
        (e.prototype.removeAllEventSources = function() {
          this.dispatch({
            type: "REMOVE_ALL_EVENT_SOURCES"
          });
        }),
        (e.prototype.refetchEvents = function() {
          this.dispatch({
            type: "FETCH_EVENT_SOURCES"
          });
        }),
        (e.prototype.scrollToTime = function(e) {
          var t = ae(e);
          t && this.component.view.scrollToDuration(t);
        }),
        e
      );
    })();
    function Yn(e, t, r, n, i, o, s) {
      return new ln({
        calendarSystem: "gregory",
        timeZone: t,
        namedTimeZoneImpl: r,
        locale: e,
        weekNumberCalculation: i,
        firstDay: n,
        weekLabel: o,
        cmdFormatter: s
      });
    }
    function Zn(e) {
      return new (this.pluginSystem.hooks.themeClasses[e.themeSystem] || Fn)(e);
    }
    function Xn(e) {
      var t = this.tryRerender.bind(this);
      return null != e && (t = Ae(t, e)), t;
    }
    function Kn(e) {
      return Xe(e, function(e) {
        return e.ui;
      });
    }
    function Jn(e, t, r) {
      var n = {
        "": t
      };
      for (var i in e) {
        var o = e[i];
        o.sourceId && r[o.sourceId] && (n[i] = r[o.sourceId]);
      }
      return n;
    }
    Dr.mixInto(qn);
    var Qn = (function(e) {
      function t(t, r, n, i) {
        var o =
          e.call(
            this,
            t,
            c("div", {
              className: "fc-view fc-" + r.type + "-view"
            }),
            !0
          ) || this;
        return (
          (o.renderDatesMem = gr(o.renderDatesWrap, o.unrenderDatesWrap)),
          (o.renderBusinessHoursMem = gr(
            o.renderBusinessHours,
            o.unrenderBusinessHours,
            [o.renderDatesMem]
          )),
          (o.renderDateSelectionMem = gr(
            o.renderDateSelectionWrap,
            o.unrenderDateSelectionWrap,
            [o.renderDatesMem]
          )),
          (o.renderEventsMem = gr(o.renderEvents, o.unrenderEvents, [
            o.renderDatesMem
          ])),
          (o.renderEventSelectionMem = gr(
            o.renderEventSelectionWrap,
            o.unrenderEventSelectionWrap,
            [o.renderEventsMem]
          )),
          (o.renderEventDragMem = gr(
            o.renderEventDragWrap,
            o.unrenderEventDragWrap,
            [o.renderDatesMem]
          )),
          (o.renderEventResizeMem = gr(
            o.renderEventResizeWrap,
            o.unrenderEventResizeWrap,
            [o.renderDatesMem]
          )),
          (o.viewSpec = r),
          (o.dateProfileGenerator = n),
          (o.type = r.type),
          (o.eventOrderSpecs = Re(o.opt("eventOrder"))),
          (o.nextDayThreshold = ae(o.opt("nextDayThreshold"))),
          i.appendChild(o.el),
          o.initialize(),
          o
        );
      }
      return (
        Ve(t, e),
        (t.prototype.initialize = function() {}),
        Object.defineProperty(t.prototype, "activeStart", {
          get: function() {
            return this.dateEnv.toDate(
              this.props.dateProfile.activeRange.start
            );
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "activeEnd", {
          get: function() {
            return this.dateEnv.toDate(this.props.dateProfile.activeRange.end);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "currentStart", {
          get: function() {
            return this.dateEnv.toDate(
              this.props.dateProfile.currentRange.start
            );
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "currentEnd", {
          get: function() {
            return this.dateEnv.toDate(this.props.dateProfile.currentRange.end);
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.render = function(e) {
          this.renderDatesMem(e.dateProfile),
            this.renderBusinessHoursMem(e.businessHours),
            this.renderDateSelectionMem(e.dateSelection),
            this.renderEventsMem(e.eventStore),
            this.renderEventSelectionMem(e.eventSelection),
            this.renderEventDragMem(e.eventDrag),
            this.renderEventResizeMem(e.eventResize);
        }),
        (t.prototype.destroy = function() {
          e.prototype.destroy.call(this), this.renderDatesMem.unrender();
        }),
        (t.prototype.updateSize = function(e, t, r) {
          var n = this.calendar;
          (e || n.isViewUpdated || n.isDatesUpdated || n.isEventsUpdated) &&
            this.updateBaseSize(e, t, r);
        }),
        (t.prototype.updateBaseSize = function(e, t, r) {}),
        (t.prototype.renderDatesWrap = function(e) {
          this.renderDates(e),
            this.addScroll({
              duration: ae(this.opt("scrollTime"))
            }),
            this.startNowIndicator(e);
        }),
        (t.prototype.unrenderDatesWrap = function() {
          this.stopNowIndicator(), this.unrenderDates();
        }),
        (t.prototype.renderDates = function(e) {}),
        (t.prototype.unrenderDates = function() {}),
        (t.prototype.renderBusinessHours = function(e) {}),
        (t.prototype.unrenderBusinessHours = function() {}),
        (t.prototype.renderDateSelectionWrap = function(e) {
          e && this.renderDateSelection(e);
        }),
        (t.prototype.unrenderDateSelectionWrap = function(e) {
          e && this.unrenderDateSelection(e);
        }),
        (t.prototype.renderDateSelection = function(e) {}),
        (t.prototype.unrenderDateSelection = function(e) {}),
        (t.prototype.renderEvents = function(e) {}),
        (t.prototype.unrenderEvents = function() {}),
        (t.prototype.sliceEvents = function(e, t) {
          var r = this.props;
          return Lt(
            e,
            r.eventUiBases,
            r.dateProfile.activeRange,
            t ? this.nextDayThreshold : null
          ).fg;
        }),
        (t.prototype.computeEventDraggable = function(e, t) {
          for (
            var r = this.calendar.pluginSystem.hooks.isDraggableTransformers,
              n = t.startEditable,
              i = 0,
              o = r;
            i < o.length;
            i++
          ) {
            n = (0, o[i])(n, e, t, this);
          }
          return n;
        }),
        (t.prototype.computeEventStartResizable = function(e, t) {
          return t.durationEditable && this.opt("eventResizableFromStart");
        }),
        (t.prototype.computeEventEndResizable = function(e, t) {
          return t.durationEditable;
        }),
        (t.prototype.renderEventSelectionWrap = function(e) {
          e && this.renderEventSelection(e);
        }),
        (t.prototype.unrenderEventSelectionWrap = function(e) {
          e && this.unrenderEventSelection(e);
        }),
        (t.prototype.renderEventSelection = function(e) {}),
        (t.prototype.unrenderEventSelection = function(e) {}),
        (t.prototype.renderEventDragWrap = function(e) {
          e && this.renderEventDrag(e);
        }),
        (t.prototype.unrenderEventDragWrap = function(e) {
          e && this.unrenderEventDrag(e);
        }),
        (t.prototype.renderEventDrag = function(e) {}),
        (t.prototype.unrenderEventDrag = function(e) {}),
        (t.prototype.renderEventResizeWrap = function(e) {
          e && this.renderEventResize(e);
        }),
        (t.prototype.unrenderEventResizeWrap = function(e) {
          e && this.unrenderEventResize(e);
        }),
        (t.prototype.renderEventResize = function(e) {}),
        (t.prototype.unrenderEventResize = function(e) {}),
        (t.prototype.startNowIndicator = function(e) {
          var t,
            r,
            n,
            i = this,
            o = this.dateEnv;
          this.opt("nowIndicator") &&
            (t = this.getNowIndicatorUnit(e)) &&
            ((r = this.updateNowIndicator.bind(this)),
            (this.initialNowDate = this.calendar.getNow()),
            (this.initialNowQueriedMs = new Date().valueOf()),
            (n =
              o.add(o.startOf(this.initialNowDate, t), ae(1, t)).valueOf() -
              this.initialNowDate.valueOf()),
            (this.nowIndicatorTimeoutID = setTimeout(function() {
              (i.nowIndicatorTimeoutID = null),
                r(),
                (n = "second" === t ? 1e3 : 6e4),
                (i.nowIndicatorIntervalID = setInterval(r, n));
            }, n)));
        }),
        (t.prototype.updateNowIndicator = function() {
          this.props.dateProfile &&
            this.initialNowDate &&
            (this.unrenderNowIndicator(),
            this.renderNowIndicator(
              Y(
                this.initialNowDate,
                new Date().valueOf() - this.initialNowQueriedMs
              )
            ),
            (this.isNowIndicatorRendered = !0));
        }),
        (t.prototype.stopNowIndicator = function() {
          this.isNowIndicatorRendered &&
            (this.nowIndicatorTimeoutID &&
              (clearTimeout(this.nowIndicatorTimeoutID),
              (this.nowIndicatorTimeoutID = null)),
            this.nowIndicatorIntervalID &&
              (clearInterval(this.nowIndicatorIntervalID),
              (this.nowIndicatorIntervalID = null)),
            this.unrenderNowIndicator(),
            (this.isNowIndicatorRendered = !1));
        }),
        (t.prototype.getNowIndicatorUnit = function(e) {}),
        (t.prototype.renderNowIndicator = function(e) {}),
        (t.prototype.unrenderNowIndicator = function() {}),
        (t.prototype.addScroll = function(e) {
          var t = this.queuedScroll || (this.queuedScroll = {});
          We(t, e);
        }),
        (t.prototype.popScroll = function(e) {
          this.applyQueuedScroll(e), (this.queuedScroll = null);
        }),
        (t.prototype.applyQueuedScroll = function(e) {
          this.applyScroll(this.queuedScroll || {}, e);
        }),
        (t.prototype.queryScroll = function() {
          var e = {};
          return this.props.dateProfile && We(e, this.queryDateScroll()), e;
        }),
        (t.prototype.applyScroll = function(e, t) {
          var r = e.duration;
          null != r &&
            (delete e.duration,
            this.props.dateProfile && We(e, this.computeDateScroll(r))),
            this.props.dateProfile && this.applyDateScroll(e);
        }),
        (t.prototype.computeDateScroll = function(e) {
          return {};
        }),
        (t.prototype.queryDateScroll = function() {
          return {};
        }),
        (t.prototype.applyDateScroll = function(e) {}),
        (t.prototype.scrollToDuration = function(e) {
          this.applyScroll(
            {
              duration: e
            },
            !1
          );
        }),
        t
      );
    })(Or);
    Dr.mixInto(Qn),
      (Qn.prototype.usesMinMaxTime = !1),
      (Qn.prototype.dateProfileGeneratorClass = Sn);
    var $n = (function() {
      function e(e) {
        (this.segs = []), (this.isSizeDirty = !1), (this.context = e);
      }
      return (
        (e.prototype.renderSegs = function(e, t) {
          this.rangeUpdated(),
            (e = this.renderSegEls(e, t)),
            (this.segs = e),
            this.attachSegs(e, t),
            (this.isSizeDirty = !0),
            this.context.view.triggerRenderedSegs(this.segs, Boolean(t));
        }),
        (e.prototype.unrender = function(e, t) {
          this.context.view.triggerWillRemoveSegs(this.segs, Boolean(t)),
            this.detachSegs(this.segs),
            (this.segs = []);
        }),
        (e.prototype.rangeUpdated = function() {
          var e,
            t,
            r = this.context.options;
          (this.eventTimeFormat = It(
            r.eventTimeFormat || this.computeEventTimeFormat(),
            r.defaultRangeSeparator
          )),
            null == (e = r.displayEventTime) &&
              (e = this.computeDisplayEventTime()),
            null == (t = r.displayEventEnd) &&
              (t = this.computeDisplayEventEnd()),
            (this.displayEventTime = e),
            (this.displayEventEnd = t);
        }),
        (e.prototype.renderSegEls = function(e, t) {
          var r,
            n = "";
          if (e.length) {
            for (r = 0; r < e.length; r++) n += this.renderSegHtml(e[r], t);
            u(n).forEach(function(t, r) {
              var n = e[r];
              t && (n.el = t);
            }),
              (e = Ot(this.context.view, e, Boolean(t)));
          }
          return e;
        }),
        (e.prototype.getSegClasses = function(e, t, r, n) {
          var i = [
            "fc-event",
            e.isStart ? "fc-start" : "fc-not-start",
            e.isEnd ? "fc-end" : "fc-not-end"
          ].concat(e.eventRange.ui.classNames);
          return (
            t && i.push("fc-draggable"),
            r && i.push("fc-resizable"),
            n &&
              (i.push("fc-mirror"),
              n.isDragging && i.push("fc-dragging"),
              n.isResizing && i.push("fc-resizing")),
            i
          );
        }),
        (e.prototype.getTimeText = function(e, t, r) {
          var n = e.def,
            i = e.instance;
          return this._getTimeText(
            i.range.start,
            n.hasEnd ? i.range.end : null,
            n.allDay,
            t,
            r,
            i.forcedStartTzo,
            i.forcedEndTzo
          );
        }),
        (e.prototype._getTimeText = function(e, t, r, n, i, o, s) {
          var a = this.context.dateEnv;
          return (
            null == n && (n = this.eventTimeFormat),
            null == i && (i = this.displayEventEnd),
            this.displayEventTime && !r
              ? i && t
                ? a.formatRange(e, t, n, {
                    forcedStartTzo: o,
                    forcedEndTzo: s
                  })
                : a.format(e, n, {
                    forcedTzo: o
                  })
              : ""
          );
        }),
        (e.prototype.computeEventTimeFormat = function() {
          return {
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0
          };
        }),
        (e.prototype.computeDisplayEventTime = function() {
          return !0;
        }),
        (e.prototype.computeDisplayEventEnd = function() {
          return !0;
        }),
        (e.prototype.getSkinCss = function(e) {
          return {
            "background-color": e.backgroundColor,
            "border-color": e.borderColor,
            color: e.textColor
          };
        }),
        (e.prototype.sortEventSegs = function(e) {
          var t = this.context.view.eventOrderSpecs,
            r = e.map(ei);
          return (
            r.sort(function(e, r) {
              return xe(e, r, t);
            }),
            r.map(function(e) {
              return e._seg;
            })
          );
        }),
        (e.prototype.computeSizes = function(e) {
          (e || this.isSizeDirty) && this.computeSegSizes(this.segs);
        }),
        (e.prototype.assignSizes = function(e) {
          (e || this.isSizeDirty) &&
            (this.assignSegSizes(this.segs), (this.isSizeDirty = !1));
        }),
        (e.prototype.computeSegSizes = function(e) {}),
        (e.prototype.assignSegSizes = function(e) {}),
        (e.prototype.hideByHash = function(e) {
          if (e)
            for (var t = 0, r = this.segs; t < r.length; t++) {
              var n = r[t];
              e[n.eventRange.instance.instanceId] &&
                (n.el.style.visibility = "hidden");
            }
        }),
        (e.prototype.showByHash = function(e) {
          if (e)
            for (var t = 0, r = this.segs; t < r.length; t++) {
              var n = r[t];
              e[n.eventRange.instance.instanceId] &&
                (n.el.style.visibility = "");
            }
        }),
        (e.prototype.selectByInstanceId = function(e) {
          if (e)
            for (var t = 0, r = this.segs; t < r.length; t++) {
              var n = r[t],
                i = n.eventRange.instance;
              i &&
                i.instanceId === e &&
                n.el &&
                n.el.classList.add("fc-selected");
            }
        }),
        (e.prototype.unselectByInstanceId = function(e) {
          if (e)
            for (var t = 0, r = this.segs; t < r.length; t++) {
              var n = r[t];
              n.el && n.el.classList.remove("fc-selected");
            }
        }),
        e
      );
    })();
    function ei(e) {
      var t = e.eventRange.def,
        r = e.eventRange.instance.range,
        n = r.start ? r.start.valueOf() : 0,
        i = r.end ? r.end.valueOf() : 0;
      return We({}, t.extendedProps, t, {
        id: t.publicId,
        start: n,
        end: i,
        duration: i - n,
        allDay: Number(t.allDay),
        _seg: e
      });
    }
    var ti = (function() {
        function e(e) {
          (this.fillSegTag = "div"),
            (this.dirtySizeFlags = {}),
            (this.context = e),
            (this.containerElsByType = {}),
            (this.segsByType = {});
        }
        return (
          (e.prototype.getSegsByType = function(e) {
            return this.segsByType[e] || [];
          }),
          (e.prototype.renderSegs = function(e, t) {
            var r,
              n = this.renderSegEls(e, t),
              i = this.attachSegs(e, n);
            i &&
              (r =
                this.containerElsByType[e] ||
                (this.containerElsByType[e] = [])).push.apply(r, i),
              (this.segsByType[e] = n),
              "bgEvent" === e && this.context.view.triggerRenderedSegs(n, !1),
              (this.dirtySizeFlags[e] = !0);
          }),
          (e.prototype.unrender = function(e) {
            var t = this.segsByType[e];
            t &&
              ("bgEvent" === e &&
                this.context.view.triggerWillRemoveSegs(t, !1),
              this.detachSegs(e, t));
          }),
          (e.prototype.renderSegEls = function(e, t) {
            var r,
              n = this,
              i = "";
            if (t.length) {
              for (r = 0; r < t.length; r++) i += this.renderSegHtml(e, t[r]);
              u(i).forEach(function(e, r) {
                var n = t[r];
                e && (n.el = e);
              }),
                "bgEvent" === e && (t = Ot(this.context.view, t, !1)),
                (t = t.filter(function(e) {
                  return b(e.el, n.fillSegTag);
                }));
            }
            return t;
          }),
          (e.prototype.renderSegHtml = function(e, t) {
            var r = null,
              n = [];
            return (
              "highlight" !== e &&
                "businessHours" !== e &&
                (r = {
                  "background-color": t.eventRange.ui.backgroundColor
                }),
              "highlight" !== e && (n = n.concat(t.eventRange.ui.classNames)),
              "businessHours" === e
                ? n.push("fc-bgevent")
                : n.push("fc-" + e.toLowerCase()),
              "<" +
                this.fillSegTag +
                (n.length ? ' class="' + n.join(" ") + '"' : "") +
                (r ? ' style="' + er(r) + '"' : "") +
                "></" +
                this.fillSegTag +
                ">"
            );
          }),
          (e.prototype.detachSegs = function(e, t) {
            var r = this.containerElsByType[e];
            r && (r.forEach(y), delete this.containerElsByType[e]);
          }),
          (e.prototype.computeSizes = function(e) {
            for (var t in this.segsByType)
              (e || this.dirtySizeFlags[t]) &&
                this.computeSegSizes(this.segsByType[t]);
          }),
          (e.prototype.assignSizes = function(e) {
            for (var t in this.segsByType)
              (e || this.dirtySizeFlags[t]) &&
                this.assignSegSizes(this.segsByType[t]);
            this.dirtySizeFlags = {};
          }),
          (e.prototype.computeSegSizes = function(e) {}),
          (e.prototype.assignSegSizes = function(e) {}),
          e
        );
      })(),
      ri = (function() {
        function e(e) {
          this.emitter = new Dr();
        }
        return (
          (e.prototype.destroy = function() {}),
          (e.prototype.setMirrorIsVisible = function(e) {}),
          (e.prototype.setMirrorNeedsRevert = function(e) {}),
          (e.prototype.setAutoScrollEnabled = function(e) {}),
          e
        );
      })();
    var ni = {
        startTime: ae,
        duration: ae,
        create: Boolean,
        sourceId: String
      },
      ii = {
        create: !0
      };
    function oi(e) {
      var t = {},
        r = Ne(e, ni, ii, t);
      return (r.leftoverProps = t), r;
    }
    function si(e, t) {
      return !e || t > 10
        ? {
            weekday: "short"
          }
        : t > 1
        ? {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            omitCommas: !0
          }
        : {
            weekday: "long"
          };
    }
    function ai(e, t, r, n, i, o, s, a) {
      var l,
        c = o.view,
        d = o.dateEnv,
        u = o.theme,
        p = o.options,
        h = ht(t.activeRange, e),
        f = ["fc-day-header", u.getClass("widgetHeader")];
      return (
        (l =
          "function" == typeof p.columnHeaderHtml
            ? p.columnHeaderHtml(d.toDate(e))
            : "function" == typeof p.columnHeaderText
            ? $t(p.columnHeaderText(d.toDate(e)))
            : $t(d.format(e, i))),
        r ? (f = f.concat(wr(e, t, o, !0))) : f.push("fc-" + W[e.getUTCDay()]),
        '<th class="' +
          f.join(" ") +
          '"' +
          (h && r
            ? ' data-date="' +
              d.formatIso(e, {
                omitTime: !0
              }) +
              '"'
            : "") +
          (s > 1 ? ' colspan="' + s + '"' : "") +
          (a ? " " + a : "") +
          ">" +
          (h
            ? Er(
                c,
                {
                  date: e,
                  forceOff: !r || 1 === n
                },
                l
              )
            : l) +
          "</th>"
      );
    }
    var li = (function(e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          return (
            (r.innerHTML = ""),
            r.appendChild(
              (n.el = d(
                '<div class="fc-row ' +
                  n.theme.getClass("headerRow") +
                  '"><table class="' +
                  n.theme.getClass("tableGrid") +
                  '"><thead></thead></table></div>'
              ))
            ),
            (n.thead = n.el.querySelector("thead")),
            n
          );
        }
        return (
          Ve(t, e),
          (t.prototype.destroy = function() {
            y(this.el);
          }),
          (t.prototype.render = function(e) {
            var t = e.dates,
              r = e.datesRepDistinctDays,
              n = [];
            e.renderIntroHtml && n.push(e.renderIntroHtml());
            for (
              var i = It(this.opt("columnHeaderFormat") || si(r, t.length)),
                o = 0,
                s = t;
              o < s.length;
              o++
            ) {
              var a = s[o];
              n.push(ai(a, e.dateProfile, r, t.length, i, this.context));
            }
            this.isRtl && n.reverse(),
              (this.thead.innerHTML = "<tr>" + n.join("") + "</tr>");
          }),
          t
        );
      })(Lr),
      ci = (function() {
        function e(e, t) {
          for (var r = e.start, n = e.end, i = [], o = [], s = -1; r < n; )
            t.isHiddenDay(r) ? i.push(s + 0.5) : (s++, i.push(s), o.push(r)),
              (r = q(r, 1));
          (this.dates = o), (this.indices = i), (this.cnt = o.length);
        }
        return (
          (e.prototype.sliceRange = function(e) {
            var t = this.getDateDayIndex(e.start),
              r = this.getDateDayIndex(q(e.end, -1)),
              n = Math.max(0, t),
              i = Math.min(this.cnt - 1, r);
            return (n = Math.ceil(n)) <= (i = Math.floor(i))
              ? {
                  firstIndex: n,
                  lastIndex: i,
                  isStart: t === n,
                  isEnd: r === i
                }
              : null;
          }),
          (e.prototype.getDateDayIndex = function(e) {
            var t = this.indices,
              r = Math.floor(Z(this.dates[0], e));
            return r < 0
              ? t[0] - 1
              : r >= t.length
              ? t[t.length - 1] + 1
              : t[r];
          }),
          e
        );
      })(),
      di = (function() {
        function e(e, t) {
          var r,
            n,
            i,
            o = e.dates;
          if (t) {
            for (
              n = o[0].getUTCDay(), r = 1;
              r < o.length && o[r].getUTCDay() !== n;
              r++
            );
            i = Math.ceil(o.length / r);
          } else (i = 1), (r = o.length);
          (this.rowCnt = i),
            (this.colCnt = r),
            (this.daySeries = e),
            (this.cells = this.buildCells()),
            (this.headerDates = this.buildHeaderDates());
        }
        return (
          (e.prototype.buildCells = function() {
            for (var e = [], t = 0; t < this.rowCnt; t++) {
              for (var r = [], n = 0; n < this.colCnt; n++)
                r.push(this.buildCell(t, n));
              e.push(r);
            }
            return e;
          }),
          (e.prototype.buildCell = function(e, t) {
            return {
              date: this.daySeries.dates[e * this.colCnt + t]
            };
          }),
          (e.prototype.buildHeaderDates = function() {
            for (var e = [], t = 0; t < this.colCnt; t++)
              e.push(this.cells[0][t].date);
            return e;
          }),
          (e.prototype.sliceRange = function(e) {
            var t = this.colCnt,
              r = this.daySeries.sliceRange(e),
              n = [];
            if (r)
              for (var i = r.firstIndex, o = r.lastIndex, s = i; s <= o; ) {
                var a = Math.floor(s / t),
                  l = Math.min((a + 1) * t, o + 1);
                n.push({
                  row: a,
                  firstCol: s % t,
                  lastCol: (l - 1) % t,
                  isStart: r.isStart && s === i,
                  isEnd: r.isEnd && l - 1 === o
                }),
                  (s = l);
              }
            return n;
          }),
          e
        );
      })(),
      ui = (function() {
        function e() {
          (this.sliceBusinessHours = vt(this._sliceBusinessHours)),
            (this.sliceDateSelection = vt(this._sliceDateSpan)),
            (this.sliceEventStore = vt(this._sliceEventStore)),
            (this.sliceEventDrag = vt(this._sliceInteraction)),
            (this.sliceEventResize = vt(this._sliceInteraction));
        }
        return (
          (e.prototype.sliceProps = function(e, t, r, n) {
            for (var i = [], o = 4; o < arguments.length; o++)
              i[o - 4] = arguments[o];
            var s = e.eventUiBases,
              a = this.sliceEventStore.apply(
                this,
                [e.eventStore, s, t, r, n].concat(i)
              );
            return {
              dateSelectionSegs: this.sliceDateSelection.apply(
                this,
                [e.dateSelection, s, n].concat(i)
              ),
              businessHourSegs: this.sliceBusinessHours.apply(
                this,
                [e.businessHours, t, r, n].concat(i)
              ),
              fgEventSegs: a.fg,
              bgEventSegs: a.bg,
              eventDrag: this.sliceEventDrag.apply(
                this,
                [e.eventDrag, s, t, r, n].concat(i)
              ),
              eventResize: this.sliceEventResize.apply(
                this,
                [e.eventResize, s, t, r, n].concat(i)
              ),
              eventSelection: e.eventSelection
            };
          }),
          (e.prototype.sliceNowDate = function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n];
            return this._sliceDateSpan.apply(
              this,
              [
                {
                  range: {
                    start: e,
                    end: Y(e, 1)
                  },
                  allDay: !1
                },
                {},
                t
              ].concat(r)
            );
          }),
          (e.prototype._sliceBusinessHours = function(e, t, r, n) {
            for (var i = [], o = 4; o < arguments.length; o++)
              i[o - 4] = arguments[o];
            return e
              ? this._sliceEventStore.apply(
                  this,
                  [tt(e, pi(t, Boolean(r)), n.calendar), {}, t, r, n].concat(i)
                ).bg
              : [];
          }),
          (e.prototype._sliceEventStore = function(e, t, r, n, i) {
            for (var o = [], s = 5; s < arguments.length; s++)
              o[s - 5] = arguments[s];
            if (e) {
              var a = Lt(e, t, pi(r, Boolean(n)), n);
              return {
                bg: this.sliceEventRanges(a.bg, i, o),
                fg: this.sliceEventRanges(a.fg, i, o)
              };
            }
            return {
              bg: [],
              fg: []
            };
          }),
          (e.prototype._sliceInteraction = function(e, t, r, n, i) {
            for (var o = [], s = 5; s < arguments.length; s++)
              o[s - 5] = arguments[s];
            if (!e) return null;
            var a = Lt(e.mutatedEvents, t, pi(r, Boolean(n)), n);
            return {
              segs: this.sliceEventRanges(a.fg, i, o),
              affectedInstances: e.affectedEvents.instances,
              isEvent: e.isEvent,
              sourceSeg: e.origSeg
            };
          }),
          (e.prototype._sliceDateSpan = function(e, t, r) {
            for (var n = [], i = 3; i < arguments.length; i++)
              n[i - 3] = arguments[i];
            if (!e) return [];
            for (
              var o = kn(e, t, r.calendar),
                s = this.sliceRange.apply(this, [e.range].concat(n)),
                a = 0,
                l = s;
              a < l.length;
              a++
            ) {
              var c = l[a];
              (c.component = r), (c.eventRange = o);
            }
            return s;
          }),
          (e.prototype.sliceEventRanges = function(e, t, r) {
            for (var n = [], i = 0, o = e; i < o.length; i++) {
              var s = o[i];
              n.push.apply(n, this.sliceEventRange(s, t, r));
            }
            return n;
          }),
          (e.prototype.sliceEventRange = function(e, t, r) {
            for (
              var n = this.sliceRange.apply(this, [e.range].concat(r)),
                i = 0,
                o = n;
              i < o.length;
              i++
            ) {
              var s = o[i];
              (s.component = t),
                (s.eventRange = e),
                (s.isStart = e.isStart && s.isStart),
                (s.isEnd = e.isEnd && s.isEnd);
            }
            return n;
          }),
          e
        );
      })();
    function pi(e, t) {
      var r = e.activeRange;
      return t
        ? r
        : {
            start: Y(r.start, e.minTime.milliseconds),
            end: Y(r.end, e.maxTime.milliseconds - 864e5)
          };
    }
    var hi = function(e, t) {
      return (hi =
        Object.setPrototypeOf ||
        ({
          __proto__: []
        } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, t);
    };
    /*!
FullCalendar Day Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    function fi(e, t) {
      function r() {
        this.constructor = e;
      }
      hi(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var vi = function() {
        return (vi =
          Object.assign ||
          function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      gi = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          fi(t, e),
          (t.prototype.buildRenderRange = function(t, r, n) {
            var i,
              o = this.dateEnv,
              s = e.prototype.buildRenderRange.call(this, t, r, n),
              a = s.start,
              l = s.end;
            (/^(year|month)$/.test(r) &&
              ((a = o.startOfWeek(a)),
              (i = o.startOfWeek(l)).valueOf() !== l.valueOf() &&
                (l = F(i, 1))),
            this.options.monthMode && this.options.fixedWeekCount) &&
              (l = F(l, 6 - Math.ceil(Z(a, l) / 7)));
            return {
              start: a,
              end: l
            };
          }),
          t
        );
      })(Sn),
      yi = (function() {
        function e(e) {
          var t = this;
          (this.isHidden = !0),
            (this.margin = 10),
            (this.documentMousedown = function(e) {
              t.el && !t.el.contains(e.target) && t.hide();
            }),
            (this.options = e);
        }
        return (
          (e.prototype.show = function() {
            this.isHidden &&
              (this.el || this.render(),
              (this.el.style.display = ""),
              this.position(),
              (this.isHidden = !1),
              this.trigger("show"));
          }),
          (e.prototype.hide = function() {
            this.isHidden ||
              ((this.el.style.display = "none"),
              (this.isHidden = !0),
              this.trigger("hide"));
          }),
          (e.prototype.render = function() {
            var e = this,
              t = this.options,
              r = (this.el = c("div", {
                className: "fc-popover " + (t.className || ""),
                style: {
                  top: "0",
                  left: "0"
                }
              }));
            "function" == typeof t.content && t.content(r),
              t.parentEl.appendChild(r),
              G(r, "click", ".fc-close", function(t) {
                e.hide();
              }),
              t.autoHide &&
                document.addEventListener("mousedown", this.documentMousedown);
          }),
          (e.prototype.destroy = function() {
            this.hide(),
              this.el && (y(this.el), (this.el = null)),
              document.removeEventListener("mousedown", this.documentMousedown);
          }),
          (e.prototype.position = function() {
            var e,
              t,
              r = this.options,
              n = this.el,
              i = n.getBoundingClientRect(),
              o = A(n.offsetParent),
              s = U(r.parentEl);
            (e = r.top || 0),
              (t =
                void 0 !== r.left
                  ? r.left
                  : void 0 !== r.right
                  ? r.right - i.width
                  : 0),
              (e = Math.min(e, s.bottom - i.height - this.margin)),
              (e = Math.max(e, s.top + this.margin)),
              (t = Math.min(t, s.right - i.width - this.margin)),
              (t = Math.max(t, s.left + this.margin)),
              R(n, {
                top: e - o.top,
                left: t - o.left
              });
          }),
          (e.prototype.trigger = function(e) {
            this.options[e] &&
              this.options[e].apply(
                this,
                Array.prototype.slice.call(arguments, 1)
              );
          }),
          e
        );
      })(),
      mi = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          fi(t, e),
          (t.prototype.renderSegHtml = function(e, t) {
            var r,
              n,
              i = this.context,
              o = i.view,
              s = i.options,
              a = e.eventRange,
              l = a.def,
              c = a.ui,
              d = l.allDay,
              u = o.computeEventDraggable(l, c),
              p = d && e.isStart && o.computeEventStartResizable(l, c),
              h = d && e.isEnd && o.computeEventEndResizable(l, c),
              f = this.getSegClasses(e, u, p || h, t),
              v = er(this.getSkinCss(c)),
              g = "";
            return (
              f.unshift("fc-day-grid-event", "fc-h-event"),
              e.isStart &&
                (r = this.getTimeText(a)) &&
                (g = '<span class="fc-time">' + $t(r) + "</span>"),
              (n =
                '<span class="fc-title">' +
                ($t(l.title || "") || "&nbsp;") +
                "</span>"),
              '<a class="' +
                f.join(" ") +
                '"' +
                (l.url ? ' href="' + $t(l.url) + '"' : "") +
                (v ? ' style="' + v + '"' : "") +
                '><div class="fc-content">' +
                ("rtl" === s.dir ? n + " " + g : g + " " + n) +
                "</div>" +
                (p ? '<div class="fc-resizer fc-start-resizer"></div>' : "") +
                (h ? '<div class="fc-resizer fc-end-resizer"></div>' : "") +
                "</a>"
            );
          }),
          (t.prototype.computeEventTimeFormat = function() {
            return {
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0,
              meridiem: "narrow"
            };
          }),
          (t.prototype.computeDisplayEventEnd = function() {
            return !1;
          }),
          t
        );
      })($n),
      Si = (function(e) {
        function t(t) {
          var r = e.call(this, t.context) || this;
          return (r.dayGrid = t), r;
        }
        return (
          fi(t, e),
          (t.prototype.attachSegs = function(e, t) {
            var r = (this.rowStructs = this.renderSegRows(e));
            this.dayGrid.rowEls.forEach(function(e, t) {
              e.querySelector(".fc-content-skeleton > table").appendChild(
                r[t].tbodyEl
              );
            }),
              t || this.dayGrid.removeSegPopover();
          }),
          (t.prototype.detachSegs = function() {
            for (var e, t = this.rowStructs || []; (e = t.pop()); )
              y(e.tbodyEl);
            this.rowStructs = null;
          }),
          (t.prototype.renderSegRows = function(e) {
            var t,
              r,
              n = [];
            for (t = this.groupSegRows(e), r = 0; r < t.length; r++)
              n.push(this.renderSegRow(r, t[r]));
            return n;
          }),
          (t.prototype.renderSegRow = function(e, t) {
            var r,
              n,
              i,
              o,
              s,
              a,
              l,
              d = this.dayGrid,
              u = d.colCnt,
              p = d.isRtl,
              v = this.buildSegLevels(t),
              g = Math.max(1, v.length),
              y = document.createElement("tbody"),
              m = [],
              S = [],
              E = [];
            function b(e) {
              for (; i < e; )
                (l = (E[r - 1] || [])[i])
                  ? (l.rowSpan = (l.rowSpan || 1) + 1)
                  : ((l = document.createElement("td")), o.appendChild(l)),
                  (S[r][i] = l),
                  (E[r][i] = l),
                  i++;
            }
            for (r = 0; r < g; r++) {
              if (
                ((n = v[r]),
                (i = 0),
                (o = document.createElement("tr")),
                m.push([]),
                S.push([]),
                E.push([]),
                n)
              )
                for (s = 0; s < n.length; s++) {
                  a = n[s];
                  var w = p ? u - 1 - a.lastCol : a.firstCol,
                    T = p ? u - 1 - a.firstCol : a.lastCol;
                  for (
                    b(w),
                      l = c(
                        "td",
                        {
                          className: "fc-event-container"
                        },
                        a.el
                      ),
                      w !== T ? (l.colSpan = T - w + 1) : (E[r][i] = l);
                    i <= T;

                  )
                    (S[r][i] = l), (m[r][i] = a), i++;
                  o.appendChild(l);
                }
              b(u);
              var D = d.renderProps.renderIntroHtml();
              D && (d.isRtl ? h(o, D) : f(o, D)), y.appendChild(o);
            }
            return {
              row: e,
              tbodyEl: y,
              cellMatrix: S,
              segMatrix: m,
              segLevels: v,
              segs: t
            };
          }),
          (t.prototype.buildSegLevels = function(e) {
            var t,
              r,
              n,
              i = this.dayGrid,
              o = i.isRtl,
              s = i.colCnt,
              a = [];
            for (e = this.sortEventSegs(e), t = 0; t < e.length; t++) {
              for (r = e[t], n = 0; n < a.length && Ei(r, a[n]); n++);
              (r.level = n),
                (r.leftCol = o ? s - 1 - r.lastCol : r.firstCol),
                (r.rightCol = o ? s - 1 - r.firstCol : r.lastCol),
                (a[n] || (a[n] = [])).push(r);
            }
            for (n = 0; n < a.length; n++) a[n].sort(bi);
            return a;
          }),
          (t.prototype.groupSegRows = function(e) {
            var t,
              r = [];
            for (t = 0; t < this.dayGrid.rowCnt; t++) r.push([]);
            for (t = 0; t < e.length; t++) r[e[t].row].push(e[t]);
            return r;
          }),
          (t.prototype.computeDisplayEventEnd = function() {
            return 1 === this.dayGrid.colCnt;
          }),
          t
        );
      })(mi);
    function Ei(e, t) {
      var r, n;
      for (r = 0; r < t.length; r++)
        if ((n = t[r]).firstCol <= e.lastCol && n.lastCol >= e.firstCol)
          return !0;
      return !1;
    }
    function bi(e, t) {
      return e.leftCol - t.leftCol;
    }
    var wi = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          fi(t, e),
          (t.prototype.attachSegs = function(e, t) {
            var r = t.sourceSeg,
              n = (this.rowStructs = this.renderSegRows(e));
            this.dayGrid.rowEls.forEach(function(e, t) {
              var i,
                o,
                s = d('<div class="fc-mirror-skeleton"><table></table></div>');
              r && r.row === t
                ? (i = r.el)
                : (i = e.querySelector(".fc-content-skeleton tbody")) ||
                  (i = e.querySelector(".fc-content-skeleton table")),
                (o =
                  i.getBoundingClientRect().top -
                  e.getBoundingClientRect().top),
                (s.style.top = o + "px"),
                s.querySelector("table").appendChild(n[t].tbodyEl),
                e.appendChild(s);
            });
          }),
          t
        );
      })(Si),
      Ti = (function(e) {
        function t(t) {
          var r = e.call(this, t.context) || this;
          return (r.fillSegTag = "td"), (r.dayGrid = t), r;
        }
        return (
          fi(t, e),
          (t.prototype.renderSegs = function(t, r) {
            "bgEvent" === t &&
              (r = r.filter(function(e) {
                return e.eventRange.def.allDay;
              })),
              e.prototype.renderSegs.call(this, t, r);
          }),
          (t.prototype.attachSegs = function(e, t) {
            var r,
              n,
              i,
              o = [];
            for (r = 0; r < t.length; r++)
              (n = t[r]),
                (i = this.renderFillRow(e, n)),
                this.dayGrid.rowEls[n.row].appendChild(i),
                o.push(i);
            return o;
          }),
          (t.prototype.renderFillRow = function(e, t) {
            var r,
              n,
              i = this.dayGrid,
              o = i.colCnt,
              s = i.isRtl,
              a = s ? o - 1 - t.lastCol : t.firstCol,
              l = (s ? o - 1 - t.firstCol : t.lastCol) + 1;
            (n = (r = d(
              '<div class="fc-' +
                ("businessHours" === e ? "bgevent" : e.toLowerCase()) +
                '-skeleton"><table><tr></tr></table></div>'
            )).getElementsByTagName("tr")[0]),
              a > 0 &&
                h(
                  n,
                  new Array(a + 1).join('<td style="pointer-events:none"></td>')
                ),
              (t.el.colSpan = l - a),
              n.appendChild(t.el),
              l < o &&
                h(
                  n,
                  new Array(o - l + 1).join(
                    '<td style="pointer-events:none"></td>'
                  )
                );
            var c = i.renderProps.renderIntroHtml();
            return c && (i.isRtl ? h(n, c) : f(n, c)), r;
          }),
          t
        );
      })(ti),
      Di = (function(e) {
        function t(t, r) {
          var n = e.call(this, t, r) || this,
            i = (n.eventRenderer = new Ci(n)),
            o = (n.renderFrame = gr(n._renderFrame));
          return (
            (n.renderFgEvents = gr(i.renderSegs.bind(i), i.unrender.bind(i), [
              o
            ])),
            (n.renderEventSelection = gr(
              i.selectByInstanceId.bind(i),
              i.unselectByInstanceId.bind(i),
              [n.renderFgEvents]
            )),
            (n.renderEventDrag = gr(
              i.hideByHash.bind(i),
              i.showByHash.bind(i),
              [o]
            )),
            (n.renderEventResize = gr(
              i.hideByHash.bind(i),
              i.showByHash.bind(i),
              [o]
            )),
            t.calendar.registerInteractiveComponent(n, {
              el: n.el,
              useEventCenter: !1
            }),
            n
          );
        }
        return (
          fi(t, e),
          (t.prototype.render = function(e) {
            this.renderFrame(e.date),
              this.renderFgEvents(e.fgSegs),
              this.renderEventSelection(e.eventSelection),
              this.renderEventDrag(e.eventDragInstances),
              this.renderEventResize(e.eventResizeInstances);
          }),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.renderFrame.unrender(),
              this.calendar.unregisterInteractiveComponent(this);
          }),
          (t.prototype._renderFrame = function(e) {
            var t = this.theme,
              r = this.dateEnv.format(e, It(this.opt("dayPopoverFormat")));
            (this.el.innerHTML =
              '<div class="fc-header ' +
              t.getClass("popoverHeader") +
              '"><span class="fc-title">' +
              $t(r) +
              '</span><span class="fc-close ' +
              t.getIconClass("close") +
              '"></span></div><div class="fc-body ' +
              t.getClass("popoverContent") +
              '"><div class="fc-event-container"></div></div>'),
              (this.segContainerEl = this.el.querySelector(
                ".fc-event-container"
              ));
          }),
          (t.prototype.queryHit = function(e, t, r, n) {
            var i = this.props.date;
            if (e < r && t < n)
              return {
                component: this,
                dateSpan: {
                  allDay: !0,
                  range: {
                    start: i,
                    end: q(i, 1)
                  }
                },
                dayEl: this.el,
                rect: {
                  left: 0,
                  top: 0,
                  right: r,
                  bottom: n
                },
                layer: 1
              };
          }),
          t
        );
      })(Or),
      Ci = (function(e) {
        function t(t) {
          var r = e.call(this, t.context) || this;
          return (r.dayTile = t), r;
        }
        return (
          fi(t, e),
          (t.prototype.attachSegs = function(e) {
            for (var t = 0, r = e; t < r.length; t++) {
              var n = r[t];
              this.dayTile.segContainerEl.appendChild(n.el);
            }
          }),
          (t.prototype.detachSegs = function(e) {
            for (var t = 0, r = e; t < r.length; t++) {
              y(r[t].el);
            }
          }),
          t
        );
      })(mi),
      Ri = (function() {
        function e(e) {
          this.context = e;
        }
        return (
          (e.prototype.renderHtml = function(e) {
            var t = [];
            e.renderIntroHtml && t.push(e.renderIntroHtml());
            for (var r = 0, n = e.cells; r < n.length; r++) {
              var i = n[r];
              t.push(xi(i.date, e.dateProfile, this.context, i.htmlAttrs));
            }
            return (
              e.cells.length ||
                t.push(
                  '<td class="fc-day ' +
                    this.context.theme.getClass("widgetContent") +
                    '"></td>'
                ),
              "rtl" === this.context.options.dir && t.reverse(),
              "<tr>" + t.join("") + "</tr>"
            );
          }),
          e
        );
      })();
    function xi(e, t, r, n) {
      var i = r.dateEnv,
        o = r.theme,
        s = ht(t.activeRange, e),
        a = wr(e, t, r);
      return (
        a.unshift("fc-day", o.getClass("widgetContent")),
        '<td class="' +
          a.join(" ") +
          '"' +
          (s
            ? ' data-date="' +
              i.formatIso(e, {
                omitTime: !0
              }) +
              '"'
            : "") +
          (n ? " " + n : "") +
          "></td>"
      );
    }
    var Ii = It({
        day: "numeric"
      }),
      ki = It({
        week: "numeric"
      }),
      Mi = (function(e) {
        function t(t, r, n) {
          var i = e.call(this, t, r) || this;
          (i.bottomCoordPadding = 0), (i.isCellSizesDirty = !1);
          var o = (i.eventRenderer = new Si(i)),
            s = (i.fillRenderer = new Ti(i));
          i.mirrorRenderer = new wi(i);
          var a = (i.renderCells = gr(i._renderCells, i._unrenderCells));
          return (
            (i.renderBusinessHours = gr(
              s.renderSegs.bind(s, "businessHours"),
              s.unrender.bind(s, "businessHours"),
              [a]
            )),
            (i.renderDateSelection = gr(
              s.renderSegs.bind(s, "highlight"),
              s.unrender.bind(s, "highlight"),
              [a]
            )),
            (i.renderBgEvents = gr(
              s.renderSegs.bind(s, "bgEvent"),
              s.unrender.bind(s, "bgEvent"),
              [a]
            )),
            (i.renderFgEvents = gr(o.renderSegs.bind(o), o.unrender.bind(o), [
              a
            ])),
            (i.renderEventSelection = gr(
              o.selectByInstanceId.bind(o),
              o.unselectByInstanceId.bind(o),
              [i.renderFgEvents]
            )),
            (i.renderEventDrag = gr(i._renderEventDrag, i._unrenderEventDrag, [
              a
            ])),
            (i.renderEventResize = gr(
              i._renderEventResize,
              i._unrenderEventResize,
              [a]
            )),
            (i.renderProps = n),
            i
          );
        }
        return (
          fi(t, e),
          (t.prototype.render = function(e) {
            var t = e.cells;
            (this.rowCnt = t.length),
              (this.colCnt = t[0].length),
              this.renderCells(t, e.isRigid),
              this.renderBusinessHours(e.businessHourSegs),
              this.renderDateSelection(e.dateSelectionSegs),
              this.renderBgEvents(e.bgEventSegs),
              this.renderFgEvents(e.fgEventSegs),
              this.renderEventSelection(e.eventSelection),
              this.renderEventDrag(e.eventDrag),
              this.renderEventResize(e.eventResize),
              this.segPopoverTile && this.updateSegPopoverTile();
          }),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this), this.renderCells.unrender();
          }),
          (t.prototype.getCellRange = function(e, t) {
            var r = this.props.cells[e][t].date;
            return {
              start: r,
              end: q(r, 1)
            };
          }),
          (t.prototype.updateSegPopoverTile = function(e, t) {
            var r = this.props;
            this.segPopoverTile.receiveProps({
              date: e || this.segPopoverTile.props.date,
              fgSegs: t || this.segPopoverTile.props.fgSegs,
              eventSelection: r.eventSelection,
              eventDragInstances: r.eventDrag
                ? r.eventDrag.affectedInstances
                : null,
              eventResizeInstances: r.eventResize
                ? r.eventResize.affectedInstances
                : null
            });
          }),
          (t.prototype._renderCells = function(e, t) {
            var r,
              n,
              i = this.view,
              o = this.dateEnv,
              s = this.rowCnt,
              a = this.colCnt,
              l = "";
            for (r = 0; r < s; r++) l += this.renderDayRowHtml(r, t);
            for (
              this.el.innerHTML = l,
                this.rowEls = w(this.el, ".fc-row"),
                this.cellEls = w(this.el, ".fc-day, .fc-disabled-day"),
                this.isRtl && this.cellEls.reverse(),
                this.rowPositions = new xr(this.el, this.rowEls, !1, !0),
                this.colPositions = new xr(
                  this.el,
                  this.cellEls.slice(0, a),
                  !0,
                  !1
                ),
                r = 0;
              r < s;
              r++
            )
              for (n = 0; n < a; n++)
                this.publiclyTrigger("dayRender", [
                  {
                    date: o.toDate(e[r][n].date),
                    el: this.getCellEl(r, n),
                    view: i
                  }
                ]);
            this.isCellSizesDirty = !0;
          }),
          (t.prototype._unrenderCells = function() {
            this.removeSegPopover();
          }),
          (t.prototype.renderDayRowHtml = function(e, t) {
            var r = this.theme,
              n = ["fc-row", "fc-week", r.getClass("dayRow")];
            t && n.push("fc-rigid");
            var i = new Ri(this.context);
            return (
              '<div class="' +
              n.join(" ") +
              '"><div class="fc-bg"><table class="' +
              r.getClass("tableGrid") +
              '">' +
              i.renderHtml({
                cells: this.props.cells[e],
                dateProfile: this.props.dateProfile,
                renderIntroHtml: this.renderProps.renderBgIntroHtml
              }) +
              '</table></div><div class="fc-content-skeleton"><table>' +
              (this.getIsNumbersVisible()
                ? "<thead>" + this.renderNumberTrHtml(e) + "</thead>"
                : "") +
              "</table></div></div>"
            );
          }),
          (t.prototype.getIsNumbersVisible = function() {
            return (
              this.getIsDayNumbersVisible() ||
              this.renderProps.cellWeekNumbersVisible ||
              this.renderProps.colWeekNumbersVisible
            );
          }),
          (t.prototype.getIsDayNumbersVisible = function() {
            return this.rowCnt > 1;
          }),
          (t.prototype.renderNumberTrHtml = function(e) {
            var t = this.renderProps.renderNumberIntroHtml(e, this);
            return (
              "<tr>" +
              (this.isRtl ? "" : t) +
              this.renderNumberCellsHtml(e) +
              (this.isRtl ? t : "") +
              "</tr>"
            );
          }),
          (t.prototype.renderNumberCellsHtml = function(e) {
            var t,
              r,
              n = [];
            for (t = 0; t < this.colCnt; t++)
              (r = this.props.cells[e][t].date),
                n.push(this.renderNumberCellHtml(r));
            return this.isRtl && n.reverse(), n.join("");
          }),
          (t.prototype.renderNumberCellHtml = function(e) {
            var t,
              r,
              n = this.view,
              i = this.dateEnv,
              o = "",
              s = ht(this.props.dateProfile.activeRange, e),
              a = this.getIsDayNumbersVisible() && s;
            return a || this.renderProps.cellWeekNumbersVisible
              ? ((t = wr(e, this.props.dateProfile, this.context)).unshift(
                  "fc-day-top"
                ),
                this.renderProps.cellWeekNumbersVisible && (r = i.weekDow),
                (o +=
                  '<td class="' +
                  t.join(" ") +
                  '"' +
                  (s
                    ? ' data-date="' +
                      i.formatIso(e, {
                        omitTime: !0
                      }) +
                      '"'
                    : "") +
                  ">"),
                this.renderProps.cellWeekNumbersVisible &&
                  e.getUTCDay() === r &&
                  (o += Er(
                    n,
                    {
                      date: e,
                      type: "week"
                    },
                    {
                      class: "fc-week-number"
                    },
                    i.format(e, ki)
                  )),
                a &&
                  (o += Er(
                    n,
                    e,
                    {
                      class: "fc-day-number"
                    },
                    i.format(e, Ii)
                  )),
                (o += "</td>"))
              : "<td></td>";
          }),
          (t.prototype.updateSize = function(e) {
            var t = this.fillRenderer,
              r = this.eventRenderer,
              n = this.mirrorRenderer;
            (e ||
              this.isCellSizesDirty ||
              this.view.calendar.isEventsUpdated) &&
              (this.buildPositionCaches(), (this.isCellSizesDirty = !1)),
              t.computeSizes(e),
              r.computeSizes(e),
              n.computeSizes(e),
              t.assignSizes(e),
              r.assignSizes(e),
              n.assignSizes(e);
          }),
          (t.prototype.buildPositionCaches = function() {
            this.buildColPositions(), this.buildRowPositions();
          }),
          (t.prototype.buildColPositions = function() {
            this.colPositions.build();
          }),
          (t.prototype.buildRowPositions = function() {
            this.rowPositions.build(),
              (this.rowPositions.bottoms[
                this.rowCnt - 1
              ] += this.bottomCoordPadding);
          }),
          (t.prototype.positionToHit = function(e, t) {
            var r = this.colPositions,
              n = this.rowPositions,
              i = r.leftToIndex(e),
              o = n.topToIndex(t);
            if (null != o && null != i)
              return {
                row: o,
                col: i,
                dateSpan: {
                  range: this.getCellRange(o, i),
                  allDay: !0
                },
                dayEl: this.getCellEl(o, i),
                relativeRect: {
                  left: r.lefts[i],
                  right: r.rights[i],
                  top: n.tops[o],
                  bottom: n.bottoms[o]
                }
              };
          }),
          (t.prototype.getCellEl = function(e, t) {
            return this.cellEls[e * this.colCnt + t];
          }),
          (t.prototype._renderEventDrag = function(e) {
            e &&
              (this.eventRenderer.hideByHash(e.affectedInstances),
              this.fillRenderer.renderSegs("highlight", e.segs));
          }),
          (t.prototype._unrenderEventDrag = function(e) {
            e &&
              (this.eventRenderer.showByHash(e.affectedInstances),
              this.fillRenderer.unrender("highlight"));
          }),
          (t.prototype._renderEventResize = function(e) {
            e &&
              (this.eventRenderer.hideByHash(e.affectedInstances),
              this.fillRenderer.renderSegs("highlight", e.segs),
              this.mirrorRenderer.renderSegs(e.segs, {
                isResizing: !0,
                sourceSeg: e.sourceSeg
              }));
          }),
          (t.prototype._unrenderEventResize = function(e) {
            e &&
              (this.eventRenderer.showByHash(e.affectedInstances),
              this.fillRenderer.unrender("highlight"),
              this.mirrorRenderer.unrender(e.segs, {
                isResizing: !0,
                sourceSeg: e.sourceSeg
              }));
          }),
          (t.prototype.removeSegPopover = function() {
            this.segPopover && this.segPopover.hide();
          }),
          (t.prototype.limitRows = function(e) {
            var t,
              r,
              n = this.eventRenderer.rowStructs || [];
            for (t = 0; t < n.length; t++)
              this.unlimitRow(t),
                !1 !==
                  (r =
                    !!e &&
                    ("number" == typeof e
                      ? e
                      : this.computeRowLevelLimit(t))) && this.limitRow(t, r);
          }),
          (t.prototype.computeRowLevelLimit = function(e) {
            var t,
              r,
              n = this.rowEls[e].getBoundingClientRect().bottom,
              i = T(this.eventRenderer.rowStructs[e].tbodyEl);
            for (t = 0; t < i.length; t++)
              if (
                ((r = i[t]).classList.remove("fc-limited"),
                r.getBoundingClientRect().bottom > n)
              )
                return t;
            return !1;
          }),
          (t.prototype.limitRow = function(e, t) {
            var r,
              n,
              i,
              o,
              s,
              a,
              l,
              d,
              u,
              p,
              h,
              f,
              g,
              y,
              m,
              S = this,
              E = this.colCnt,
              b = this.isRtl,
              w = this.eventRenderer.rowStructs[e],
              D = [],
              C = 0,
              R = function(r) {
                for (; C < r; )
                  (a = S.getCellSegs(e, C, t)).length &&
                    ((u = n[t - 1][C]),
                    (m = S.renderMoreLink(e, C, a)),
                    (y = c("div", null, m)),
                    u.appendChild(y),
                    D.push(y)),
                    C++;
              };
            if (t && t < w.segLevels.length) {
              for (
                r = w.segLevels[t - 1],
                  n = w.cellMatrix,
                  (i = T(w.tbodyEl).slice(t)).forEach(function(e) {
                    e.classList.add("fc-limited");
                  }),
                  o = 0;
                o < r.length;
                o++
              ) {
                s = r[o];
                var x = b ? E - 1 - s.lastCol : s.firstCol,
                  I = b ? E - 1 - s.firstCol : s.lastCol;
                for (R(x), d = [], l = 0; C <= I; )
                  (a = this.getCellSegs(e, C, t)),
                    d.push(a),
                    (l += a.length),
                    C++;
                if (l) {
                  for (
                    p = (u = n[t - 1][x]).rowSpan || 1, h = [], f = 0;
                    f < d.length;
                    f++
                  )
                    (g = c("td", {
                      className: "fc-more-cell",
                      rowSpan: p
                    })),
                      (a = d[f]),
                      (m = this.renderMoreLink(e, x + f, [s].concat(a))),
                      (y = c("div", null, m)),
                      g.appendChild(y),
                      h.push(g),
                      D.push(g);
                  u.classList.add("fc-limited"), v(u, h), i.push(u);
                }
              }
              R(this.colCnt), (w.moreEls = D), (w.limitedEls = i);
            }
          }),
          (t.prototype.unlimitRow = function(e) {
            var t = this.eventRenderer.rowStructs[e];
            t.moreEls && (t.moreEls.forEach(y), (t.moreEls = null)),
              t.limitedEls &&
                (t.limitedEls.forEach(function(e) {
                  e.classList.remove("fc-limited");
                }),
                (t.limitedEls = null));
          }),
          (t.prototype.renderMoreLink = function(e, t, r) {
            var n = this,
              i = this.view,
              o = this.dateEnv,
              s = c("a", {
                className: "fc-more"
              });
            return (
              (s.innerText = this.getMoreLinkText(r.length)),
              s.addEventListener("click", function(s) {
                var a = n.opt("eventLimitClick"),
                  l = n.isRtl ? n.colCnt - t - 1 : t,
                  c = n.props.cells[e][l].date,
                  d = s.currentTarget,
                  u = n.getCellEl(e, t),
                  p = n.getCellSegs(e, t),
                  h = n.resliceDaySegs(p, c),
                  f = n.resliceDaySegs(r, c);
                "function" == typeof a &&
                  (a = n.publiclyTrigger("eventLimitClick", [
                    {
                      date: o.toDate(c),
                      allDay: !0,
                      dayEl: u,
                      moreEl: d,
                      segs: h,
                      hiddenSegs: f,
                      jsEvent: s,
                      view: i
                    }
                  ])),
                  "popover" === a
                    ? n.showSegPopover(e, t, d, h)
                    : "string" == typeof a && i.calendar.zoomTo(c, a);
              }),
              s
            );
          }),
          (t.prototype.showSegPopover = function(e, t, r, n) {
            var i,
              o,
              s = this,
              a = this.calendar,
              l = this.view,
              c = this.theme,
              d = this.isRtl ? this.colCnt - t - 1 : t,
              u = r.parentNode;
            (i = 1 === this.rowCnt ? l.el : this.rowEls[e]),
              (o = {
                className: "fc-more-popover " + c.getClass("popover"),
                parentEl: l.el,
                top: A(i).top,
                autoHide: !0,
                content: function(t) {
                  (s.segPopoverTile = new Di(s.context, t)),
                    s.updateSegPopoverTile(s.props.cells[e][d].date, n);
                },
                hide: function() {
                  s.segPopoverTile.destroy(),
                    (s.segPopoverTile = null),
                    s.segPopover.destroy(),
                    (s.segPopover = null);
                }
              }),
              this.isRtl
                ? (o.right = A(u).right + 1)
                : (o.left = A(u).left - 1),
              (this.segPopover = new yi(o)),
              this.segPopover.show(),
              a.releaseAfterSizingTriggers();
          }),
          (t.prototype.resliceDaySegs = function(e, t) {
            for (
              var r = {
                  start: t,
                  end: q(t, 1)
                },
                n = [],
                i = 0,
                o = e;
              i < o.length;
              i++
            ) {
              var s = o[i],
                a = s.eventRange,
                l = a.range,
                c = ct(l, r);
              c &&
                n.push(
                  vi({}, s, {
                    eventRange: {
                      def: a.def,
                      ui: vi({}, a.ui, {
                        durationEditable: !1
                      }),
                      instance: a.instance,
                      range: c
                    },
                    isStart:
                      s.isStart && c.start.valueOf() === l.start.valueOf(),
                    isEnd: s.isEnd && c.end.valueOf() === l.end.valueOf()
                  })
                );
            }
            return n;
          }),
          (t.prototype.getMoreLinkText = function(e) {
            var t = this.opt("eventLimitText");
            return "function" == typeof t ? t(e) : "+" + e + " " + t;
          }),
          (t.prototype.getCellSegs = function(e, t, r) {
            for (
              var n,
                i = this.eventRenderer.rowStructs[e].segMatrix,
                o = r || 0,
                s = [];
              o < i.length;

            )
              (n = i[o][t]) && s.push(n), o++;
            return s;
          }),
          t
        );
      })(Or),
      Pi = It({
        week: "numeric"
      }),
      Hi = (function(e) {
        function t(t, r, n, i) {
          var o = e.call(this, t, r, n, i) || this;
          (o.renderHeadIntroHtml = function() {
            var e = o.theme;
            return o.colWeekNumbersVisible
              ? '<th class="fc-week-number ' +
                  e.getClass("widgetHeader") +
                  '" ' +
                  o.weekNumberStyleAttr() +
                  "><span>" +
                  $t(o.opt("weekLabel")) +
                  "</span></th>"
              : "";
          }),
            (o.renderDayGridNumberIntroHtml = function(e, t) {
              var r = o.dateEnv,
                n = t.props.cells[e][0].date;
              return o.colWeekNumbersVisible
                ? '<td class="fc-week-number" ' +
                    o.weekNumberStyleAttr() +
                    ">" +
                    Er(
                      o,
                      {
                        date: n,
                        type: "week",
                        forceOff: 1 === t.colCnt
                      },
                      r.format(n, Pi)
                    ) +
                    "</td>"
                : "";
            }),
            (o.renderDayGridBgIntroHtml = function() {
              var e = o.theme;
              return o.colWeekNumbersVisible
                ? '<td class="fc-week-number ' +
                    e.getClass("widgetContent") +
                    '" ' +
                    o.weekNumberStyleAttr() +
                    "></td>"
                : "";
            }),
            (o.renderDayGridIntroHtml = function() {
              return o.colWeekNumbersVisible
                ? '<td class="fc-week-number" ' +
                    o.weekNumberStyleAttr() +
                    "></td>"
                : "";
            }),
            o.el.classList.add("fc-dayGrid-view"),
            (o.el.innerHTML = o.renderSkeletonHtml()),
            (o.scroller = new Pr("hidden", "auto"));
          var s = o.scroller.el;
          o.el.querySelector(".fc-body > tr > td").appendChild(s),
            s.classList.add("fc-day-grid-container");
          var a,
            l = c("div", {
              className: "fc-day-grid"
            });
          return (
            s.appendChild(l),
            o.opt("weekNumbers")
              ? o.opt("weekNumbersWithinDays")
                ? ((a = !0), (o.colWeekNumbersVisible = !1))
                : ((a = !1), (o.colWeekNumbersVisible = !0))
              : ((o.colWeekNumbersVisible = !1), (a = !1)),
            (o.dayGrid = new Mi(o.context, l, {
              renderNumberIntroHtml: o.renderDayGridNumberIntroHtml,
              renderBgIntroHtml: o.renderDayGridBgIntroHtml,
              renderIntroHtml: o.renderDayGridIntroHtml,
              colWeekNumbersVisible: o.colWeekNumbersVisible,
              cellWeekNumbersVisible: a
            })),
            o
          );
        }
        return (
          fi(t, e),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.dayGrid.destroy(),
              this.scroller.destroy();
          }),
          (t.prototype.renderSkeletonHtml = function() {
            var e = this.theme;
            return (
              '<table class="' +
              e.getClass("tableGrid") +
              '">' +
              (this.opt("columnHeader")
                ? '<thead class="fc-head"><tr><td class="fc-head-container ' +
                  e.getClass("widgetHeader") +
                  '">&nbsp;</td></tr></thead>'
                : "") +
              '<tbody class="fc-body"><tr><td class="' +
              e.getClass("widgetContent") +
              '"></td></tr></tbody></table>'
            );
          }),
          (t.prototype.weekNumberStyleAttr = function() {
            return null != this.weekNumberWidth
              ? 'style="width:' + this.weekNumberWidth + 'px"'
              : "";
          }),
          (t.prototype.hasRigidRows = function() {
            var e = this.opt("eventLimit");
            return e && "number" != typeof e;
          }),
          (t.prototype.updateSize = function(t, r, n) {
            e.prototype.updateSize.call(this, t, r, n),
              this.dayGrid.updateSize(t);
          }),
          (t.prototype.updateBaseSize = function(e, t, r) {
            var n,
              i,
              o = this.dayGrid,
              s = this.opt("eventLimit"),
              a = this.header ? this.header.el : null;
            o.rowEls
              ? (this.colWeekNumbersVisible &&
                  (this.weekNumberWidth = De(w(this.el, ".fc-week-number"))),
                this.scroller.clear(),
                a && Se(a),
                o.removeSegPopover(),
                s && "number" == typeof s && o.limitRows(s),
                (n = this.computeScrollerHeight(t)),
                this.setGridHeight(n, r),
                s && "number" != typeof s && o.limitRows(s),
                r ||
                  (this.scroller.setHeight(n),
                  ((i = this.scroller.getScrollbarWidths()).left || i.right) &&
                    (a && me(a, i),
                    (n = this.computeScrollerHeight(t)),
                    this.scroller.setHeight(n)),
                  this.scroller.lockOverflow(i)))
              : r ||
                ((n = this.computeScrollerHeight(t)),
                this.scroller.setHeight(n));
          }),
          (t.prototype.computeScrollerHeight = function(e) {
            return e - Ce(this.el, this.scroller.el);
          }),
          (t.prototype.setGridHeight = function(e, t) {
            this.opt("monthMode")
              ? (t && (e *= this.dayGrid.rowCnt / 6),
                we(this.dayGrid.rowEls, e, !t))
              : t
              ? Te(this.dayGrid.rowEls)
              : we(this.dayGrid.rowEls, e, !0);
          }),
          (t.prototype.computeDateScroll = function(e) {
            return {
              top: 0
            };
          }),
          (t.prototype.queryDateScroll = function() {
            return {
              top: this.scroller.getScrollTop()
            };
          }),
          (t.prototype.applyDateScroll = function(e) {
            void 0 !== e.top && this.scroller.setScrollTop(e.top);
          }),
          t
        );
      })(Qn);
    Hi.prototype.dateProfileGeneratorClass = gi;
    var _i = (function(e) {
        function t(t, r) {
          var n = e.call(this, t, r.el) || this;
          return (
            (n.slicer = new Li()),
            (n.dayGrid = r),
            t.calendar.registerInteractiveComponent(n, {
              el: n.dayGrid.el
            }),
            n
          );
        }
        return (
          fi(t, e),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.calendar.unregisterInteractiveComponent(this);
          }),
          (t.prototype.render = function(e) {
            var t = this.dayGrid,
              r = e.dateProfile,
              n = e.dayTable;
            t.receiveProps(
              vi({}, this.slicer.sliceProps(e, r, e.nextDayThreshold, t, n), {
                dateProfile: r,
                cells: n.cells,
                isRigid: e.isRigid
              })
            );
          }),
          (t.prototype.buildPositionCaches = function() {
            this.dayGrid.buildPositionCaches();
          }),
          (t.prototype.queryHit = function(e, t) {
            var r = this.dayGrid.positionToHit(e, t);
            if (r)
              return {
                component: this.dayGrid,
                dateSpan: r.dateSpan,
                dayEl: r.dayEl,
                rect: {
                  left: r.relativeRect.left,
                  right: r.relativeRect.right,
                  top: r.relativeRect.top,
                  bottom: r.relativeRect.bottom
                },
                layer: 0
              };
          }),
          t
        );
      })(Or),
      Li = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          fi(t, e),
          (t.prototype.sliceRange = function(e, t) {
            return t.sliceRange(e);
          }),
          t
        );
      })(ui);
    function Oi(e, t) {
      var r = new ci(e.renderRange, t);
      return new di(r, /year|month|week/.test(e.currentRangeUnit));
    }
    var Ai = Nr({
        defaultView: "dayGridMonth",
        views: {
          dayGrid: (function(e) {
            function t(t, r, n, i) {
              var o = e.call(this, t, r, n, i) || this;
              return (
                (o.buildDayTable = vt(Oi)),
                o.opt("columnHeader") &&
                  (o.header = new li(
                    o.context,
                    o.el.querySelector(".fc-head-container")
                  )),
                (o.simpleDayGrid = new _i(o.context, o.dayGrid)),
                o
              );
            }
            return (
              fi(t, e),
              (t.prototype.destroy = function() {
                e.prototype.destroy.call(this),
                  this.header && this.header.destroy(),
                  this.simpleDayGrid.destroy();
              }),
              (t.prototype.render = function(t) {
                e.prototype.render.call(this, t);
                var r = this.props.dateProfile,
                  n = (this.dayTable = this.buildDayTable(
                    r,
                    this.dateProfileGenerator
                  ));
                this.header &&
                  this.header.receiveProps({
                    dateProfile: r,
                    dates: n.headerDates,
                    datesRepDistinctDays: 1 === n.rowCnt,
                    renderIntroHtml: this.renderHeadIntroHtml
                  }),
                  this.simpleDayGrid.receiveProps({
                    dateProfile: r,
                    dayTable: n,
                    businessHours: t.businessHours,
                    dateSelection: t.dateSelection,
                    eventStore: t.eventStore,
                    eventUiBases: t.eventUiBases,
                    eventSelection: t.eventSelection,
                    eventDrag: t.eventDrag,
                    eventResize: t.eventResize,
                    isRigid: this.hasRigidRows(),
                    nextDayThreshold: this.nextDayThreshold
                  });
              }),
              t
            );
          })(Hi),
          dayGridDay: {
            type: "dayGrid",
            duration: {
              days: 1
            }
          },
          dayGridWeek: {
            type: "dayGrid",
            duration: {
              weeks: 1
            }
          },
          dayGridMonth: {
            type: "dayGrid",
            duration: {
              months: 1
            },
            monthMode: !0,
            fixedWeekCount: !0
          }
        }
      }),
      Ni = function(e, t) {
        return (Ni =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
    function zi(e, t) {
      function r() {
        this.constructor = e;
      }
      Ni(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var Bi = function() {
        return (Bi =
          Object.assign ||
          function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      Ui = (function(e) {
        function t(t) {
          var r = e.call(this, t.context) || this;
          return (
            (r.timeGrid = t),
            (r.fullTimeFormat = It({
              hour: "numeric",
              minute: "2-digit",
              separator: r.context.options.defaultRangeSeparator
            })),
            r
          );
        }
        return (
          zi(t, e),
          (t.prototype.attachSegs = function(e, t) {
            for (
              var r = this.timeGrid.groupSegsByCol(e), n = 0;
              n < r.length;
              n++
            )
              r[n] = this.sortEventSegs(r[n]);
            (this.segsByCol = r),
              this.timeGrid.attachSegsByCol(r, this.timeGrid.fgContainerEls);
          }),
          (t.prototype.detachSegs = function(e) {
            e.forEach(function(e) {
              y(e.el);
            }),
              (this.segsByCol = null);
          }),
          (t.prototype.computeSegSizes = function(e) {
            var t = this.timeGrid,
              r = this.segsByCol,
              n = t.colCnt;
            if ((t.computeSegVerticals(e), r))
              for (var i = 0; i < n; i++) this.computeSegHorizontals(r[i]);
          }),
          (t.prototype.assignSegSizes = function(e) {
            var t = this.timeGrid,
              r = this.segsByCol,
              n = t.colCnt;
            if ((t.assignSegVerticals(e), r))
              for (var i = 0; i < n; i++) this.assignSegCss(r[i]);
          }),
          (t.prototype.computeEventTimeFormat = function() {
            return {
              hour: "numeric",
              minute: "2-digit",
              meridiem: !1
            };
          }),
          (t.prototype.computeDisplayEventEnd = function() {
            return !0;
          }),
          (t.prototype.renderSegHtml = function(e, t) {
            var r,
              n,
              i,
              o = this.context.view,
              s = e.eventRange,
              a = s.def,
              l = s.ui,
              c = a.allDay,
              d = o.computeEventDraggable(a, l),
              u = e.isStart && o.computeEventStartResizable(a, l),
              p = e.isEnd && o.computeEventEndResizable(a, l),
              h = this.getSegClasses(e, d, u || p, t),
              f = er(this.getSkinCss(l));
            if ((h.unshift("fc-time-grid-event"), Ue(s.range))) {
              if (e.isStart || e.isEnd) {
                var v = e.start,
                  g = e.end;
                (r = this._getTimeText(v, g, c)),
                  (n = this._getTimeText(v, g, c, this.fullTimeFormat)),
                  (i = this._getTimeText(v, g, c, null, !1));
              }
            } else
              (r = this.getTimeText(s)),
                (n = this.getTimeText(s, this.fullTimeFormat)),
                (i = this.getTimeText(s, null, !1));
            return (
              '<a class="' +
              h.join(" ") +
              '"' +
              (a.url ? ' href="' + $t(a.url) + '"' : "") +
              (f ? ' style="' + f + '"' : "") +
              '><div class="fc-content">' +
              (r
                ? '<div class="fc-time" data-start="' +
                  $t(i) +
                  '" data-full="' +
                  $t(n) +
                  '"><span>' +
                  $t(r) +
                  "</span></div>"
                : "") +
              (a.title
                ? '<div class="fc-title">' + $t(a.title) + "</div>"
                : "") +
              "</div>" +
              (p ? '<div class="fc-resizer fc-end-resizer"></div>' : "") +
              "</a>"
            );
          }),
          (t.prototype.computeSegHorizontals = function(e) {
            var t, r, n;
            if (
              ((function(e) {
                var t, r, n, i, o;
                for (t = 0; t < e.length; t++)
                  for (r = e[t], n = 0; n < r.length; n++)
                    for (
                      (i = r[n]).forwardSegs = [], o = t + 1;
                      o < e.length;
                      o++
                    )
                      Gi(i, e[o], i.forwardSegs);
              })(
                (t = (function(e) {
                  var t,
                    r,
                    n,
                    i = [];
                  for (t = 0; t < e.length; t++) {
                    for (
                      r = e[t], n = 0;
                      n < i.length && Gi(r, i[n]).length;
                      n++
                    );
                    (r.level = n), (i[n] || (i[n] = [])).push(r);
                  }
                  return i;
                })(e))
              ),
              (r = t[0]))
            ) {
              for (n = 0; n < r.length; n++) ji(r[n]);
              for (n = 0; n < r.length; n++)
                this.computeSegForwardBack(r[n], 0, 0);
            }
          }),
          (t.prototype.computeSegForwardBack = function(e, t, r) {
            var n,
              i = e.forwardSegs;
            if (void 0 === e.forwardCoord)
              for (
                i.length
                  ? (this.sortForwardSegs(i),
                    this.computeSegForwardBack(i[0], t + 1, r),
                    (e.forwardCoord = i[0].backwardCoord))
                  : (e.forwardCoord = 1),
                  e.backwardCoord =
                    e.forwardCoord - (e.forwardCoord - r) / (t + 1),
                  n = 0;
                n < i.length;
                n++
              )
                this.computeSegForwardBack(i[n], 0, e.forwardCoord);
          }),
          (t.prototype.sortForwardSegs = function(e) {
            var t = e.map(Vi),
              r = [
                {
                  field: "forwardPressure",
                  order: -1
                },
                {
                  field: "backwardCoord",
                  order: 1
                }
              ].concat(this.context.view.eventOrderSpecs);
            return (
              t.sort(function(e, t) {
                return xe(e, t, r);
              }),
              t.map(function(e) {
                return e._seg;
              })
            );
          }),
          (t.prototype.assignSegCss = function(e) {
            for (var t = 0, r = e; t < r.length; t++) {
              var n = r[t];
              R(n.el, this.generateSegCss(n)),
                n.level > 0 && n.el.classList.add("fc-time-grid-event-inset"),
                n.eventRange.def.title &&
                  n.bottom - n.top < 30 &&
                  n.el.classList.add("fc-short");
            }
          }),
          (t.prototype.generateSegCss = function(e) {
            var t,
              r,
              n = this.context.options.slotEventOverlap,
              i = e.backwardCoord,
              o = e.forwardCoord,
              s = this.timeGrid.generateSegVerticalCss(e),
              a = this.timeGrid.isRtl;
            return (
              n && (o = Math.min(1, i + 2 * (o - i))),
              a ? ((t = 1 - o), (r = i)) : ((t = i), (r = 1 - o)),
              (s.zIndex = e.level + 1),
              (s.left = 100 * t + "%"),
              (s.right = 100 * r + "%"),
              n &&
                e.forwardPressure &&
                (s[a ? "marginLeft" : "marginRight"] = 20),
              s
            );
          }),
          t
        );
      })($n);
    function ji(e) {
      var t,
        r,
        n = e.forwardSegs,
        i = 0;
      if (void 0 === e.forwardPressure) {
        for (t = 0; t < n.length; t++)
          ji((r = n[t])), (i = Math.max(i, 1 + r.forwardPressure));
        e.forwardPressure = i;
      }
    }
    function Gi(e, t, r) {
      void 0 === r && (r = []);
      for (var n = 0; n < t.length; n++)
        (i = e),
          (o = t[n]),
          i.bottom > o.top && i.top < o.bottom && r.push(t[n]);
      var i, o;
      return r;
    }
    function Vi(e) {
      var t = ei(e);
      return (
        (t.forwardPressure = e.forwardPressure),
        (t.backwardCoord = e.backwardCoord),
        t
      );
    }
    var Wi = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          zi(t, e),
          (t.prototype.attachSegs = function(e, t) {
            (this.segsByCol = this.timeGrid.groupSegsByCol(e)),
              this.timeGrid.attachSegsByCol(
                this.segsByCol,
                this.timeGrid.mirrorContainerEls
              ),
              (this.sourceSeg = t.sourceSeg);
          }),
          (t.prototype.generateSegCss = function(t) {
            var r = e.prototype.generateSegCss.call(this, t),
              n = this.sourceSeg;
            if (n && n.col === t.col) {
              var i = e.prototype.generateSegCss.call(this, n);
              (r.left = i.left),
                (r.right = i.right),
                (r.marginLeft = i.marginLeft),
                (r.marginRight = i.marginRight);
            }
            return r;
          }),
          t
        );
      })(Ui),
      Fi = (function(e) {
        function t(t) {
          var r = e.call(this, t.context) || this;
          return (r.timeGrid = t), r;
        }
        return (
          zi(t, e),
          (t.prototype.attachSegs = function(e, t) {
            var r,
              n = this.timeGrid;
            return (
              "bgEvent" === e
                ? (r = n.bgContainerEls)
                : "businessHours" === e
                ? (r = n.businessContainerEls)
                : "highlight" === e && (r = n.highlightContainerEls),
              n.attachSegsByCol(n.groupSegsByCol(t), r),
              t.map(function(e) {
                return e.el;
              })
            );
          }),
          (t.prototype.computeSegSizes = function(e) {
            this.timeGrid.computeSegVerticals(e);
          }),
          (t.prototype.assignSegSizes = function(e) {
            this.timeGrid.assignSegVerticals(e);
          }),
          t
        );
      })(ti),
      qi = [
        {
          hours: 1
        },
        {
          minutes: 30
        },
        {
          minutes: 15
        },
        {
          seconds: 30
        },
        {
          seconds: 15
        }
      ],
      Yi = (function(e) {
        function t(t, r, n) {
          var i = e.call(this, t, r) || this;
          (i.isSlatSizesDirty = !1),
            (i.isColSizesDirty = !1),
            (i.renderSlats = gr(i._renderSlats));
          var o = (i.eventRenderer = new Ui(i)),
            s = (i.fillRenderer = new Fi(i));
          i.mirrorRenderer = new Wi(i);
          var a = (i.renderColumns = gr(i._renderColumns, i._unrenderColumns));
          return (
            (i.renderBusinessHours = gr(
              s.renderSegs.bind(s, "businessHours"),
              s.unrender.bind(s, "businessHours"),
              [a]
            )),
            (i.renderDateSelection = gr(
              i._renderDateSelection,
              i._unrenderDateSelection,
              [a]
            )),
            (i.renderFgEvents = gr(o.renderSegs.bind(o), o.unrender.bind(o), [
              a
            ])),
            (i.renderBgEvents = gr(
              s.renderSegs.bind(s, "bgEvent"),
              s.unrender.bind(s, "bgEvent"),
              [a]
            )),
            (i.renderEventSelection = gr(
              o.selectByInstanceId.bind(o),
              o.unselectByInstanceId.bind(o),
              [i.renderFgEvents]
            )),
            (i.renderEventDrag = gr(i._renderEventDrag, i._unrenderEventDrag, [
              a
            ])),
            (i.renderEventResize = gr(
              i._renderEventResize,
              i._unrenderEventResize,
              [a]
            )),
            i.processOptions(),
            (r.innerHTML =
              '<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' +
              i.theme.getClass("widgetHeader") +
              '" style="display:none" />'),
            (i.rootBgContainerEl = r.querySelector(".fc-bg")),
            (i.slatContainerEl = r.querySelector(".fc-slats")),
            (i.bottomRuleEl = r.querySelector(".fc-divider")),
            (i.renderProps = n),
            i
          );
        }
        return (
          zi(t, e),
          (t.prototype.processOptions = function() {
            var e,
              t,
              r = this.opt("slotDuration"),
              n = this.opt("snapDuration");
            null === (e = ge((r = ae(r)), (n = n ? ae(n) : r))) &&
              ((n = r), (e = 1)),
              (this.slotDuration = r),
              (this.snapDuration = n),
              (this.snapsPerSlot = e),
              (t = this.opt("slotLabelFormat")),
              Array.isArray(t) && (t = t[t.length - 1]),
              (this.labelFormat = It(
                t || {
                  hour: "numeric",
                  minute: "2-digit",
                  omitZeroMinute: !0,
                  meridiem: "short"
                }
              )),
              (t = this.opt("slotLabelInterval")),
              (this.labelInterval = t ? ae(t) : this.computeLabelInterval(r));
          }),
          (t.prototype.computeLabelInterval = function(e) {
            var t, r, n;
            for (t = qi.length - 1; t >= 0; t--)
              if (null !== (n = ge((r = ae(qi[t])), e)) && n > 1) return r;
            return e;
          }),
          (t.prototype.render = function(e) {
            var t = e.cells;
            (this.colCnt = t.length),
              this.renderSlats(e.dateProfile),
              this.renderColumns(e.cells, e.dateProfile),
              this.renderBusinessHours(e.businessHourSegs),
              this.renderDateSelection(e.dateSelectionSegs),
              this.renderFgEvents(e.fgEventSegs),
              this.renderBgEvents(e.bgEventSegs),
              this.renderEventSelection(e.eventSelection),
              this.renderEventDrag(e.eventDrag),
              this.renderEventResize(e.eventResize);
          }),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.renderSlats.unrender(),
              this.renderColumns.unrender();
          }),
          (t.prototype.updateSize = function(e) {
            var t = this.fillRenderer,
              r = this.eventRenderer,
              n = this.mirrorRenderer;
            (e || this.isSlatSizesDirty) &&
              (this.buildSlatPositions(), (this.isSlatSizesDirty = !1)),
              (e || this.isColSizesDirty) &&
                (this.buildColPositions(), (this.isColSizesDirty = !1)),
              t.computeSizes(e),
              r.computeSizes(e),
              n.computeSizes(e),
              t.assignSizes(e),
              r.assignSizes(e),
              n.assignSizes(e);
          }),
          (t.prototype._renderSlats = function(e) {
            var t = this.theme;
            (this.slatContainerEl.innerHTML =
              '<table class="' +
              t.getClass("tableGrid") +
              '">' +
              this.renderSlatRowHtml(e) +
              "</table>"),
              (this.slatEls = w(this.slatContainerEl, "tr")),
              (this.slatPositions = new xr(this.el, this.slatEls, !1, !0)),
              (this.isSlatSizesDirty = !0);
          }),
          (t.prototype.renderSlatRowHtml = function(e) {
            for (
              var t,
                r,
                n,
                i,
                o = this.dateEnv,
                s = this.theme,
                a = this.isRtl,
                l = "",
                c = K(e.renderRange.start),
                d = e.minTime,
                u = ae(0);
              ve(d) < ve(e.maxTime);

            )
              (t = o.add(c, d)),
                (r = null !== ge(u, this.labelInterval)),
                (n =
                  '<td class="fc-axis fc-time ' +
                  s.getClass("widgetContent") +
                  '">' +
                  (r
                    ? "<span>" + $t(o.format(t, this.labelFormat)) + "</span>"
                    : "") +
                  "</td>"),
                (l +=
                  '<tr data-time="' +
                  (Pe((i = t).getUTCHours(), 2) +
                    ":" +
                    Pe(i.getUTCMinutes(), 2) +
                    ":" +
                    Pe(i.getUTCSeconds(), 2)) +
                  '"' +
                  (r ? "" : ' class="fc-minor"') +
                  ">" +
                  (a ? "" : n) +
                  '<td class="' +
                  s.getClass("widgetContent") +
                  '"></td>' +
                  (a ? n : "") +
                  "</tr>"),
                (d = pe(d, this.slotDuration)),
                (u = pe(u, this.slotDuration));
            return l;
          }),
          (t.prototype._renderColumns = function(e, t) {
            var r = this.theme,
              n = this.dateEnv,
              i = this.view,
              o = new Ri(this.context);
            (this.rootBgContainerEl.innerHTML =
              '<table class="' +
              r.getClass("tableGrid") +
              '">' +
              o.renderHtml({
                cells: e,
                dateProfile: t,
                renderIntroHtml: this.renderProps.renderBgIntroHtml
              }) +
              "</table>"),
              (this.colEls = w(this.el, ".fc-day, .fc-disabled-day"));
            for (var s = 0; s < this.colCnt; s++)
              this.publiclyTrigger("dayRender", [
                {
                  date: n.toDate(e[s].date),
                  el: this.colEls[s],
                  view: i
                }
              ]);
            this.isRtl && this.colEls.reverse(),
              (this.colPositions = new xr(this.el, this.colEls, !0, !1)),
              this.renderContentSkeleton(),
              (this.isColSizesDirty = !0);
          }),
          (t.prototype._unrenderColumns = function() {
            this.unrenderContentSkeleton();
          }),
          (t.prototype.renderContentSkeleton = function() {
            var e,
              t = [];
            t.push(this.renderProps.renderIntroHtml());
            for (var r = 0; r < this.colCnt; r++)
              t.push(
                '<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>'
              );
            this.isRtl && t.reverse(),
              (e = this.contentSkeletonEl = d(
                '<div class="fc-content-skeleton"><table><tr>' +
                  t.join("") +
                  "</tr></table></div>"
              )),
              (this.colContainerEls = w(e, ".fc-content-col")),
              (this.mirrorContainerEls = w(e, ".fc-mirror-container")),
              (this.fgContainerEls = w(
                e,
                ".fc-event-container:not(.fc-mirror-container)"
              )),
              (this.bgContainerEls = w(e, ".fc-bgevent-container")),
              (this.highlightContainerEls = w(e, ".fc-highlight-container")),
              (this.businessContainerEls = w(e, ".fc-business-container")),
              this.isRtl &&
                (this.colContainerEls.reverse(),
                this.mirrorContainerEls.reverse(),
                this.fgContainerEls.reverse(),
                this.bgContainerEls.reverse(),
                this.highlightContainerEls.reverse(),
                this.businessContainerEls.reverse()),
              this.el.appendChild(e);
          }),
          (t.prototype.unrenderContentSkeleton = function() {
            y(this.contentSkeletonEl);
          }),
          (t.prototype.groupSegsByCol = function(e) {
            var t,
              r = [];
            for (t = 0; t < this.colCnt; t++) r.push([]);
            for (t = 0; t < e.length; t++) r[e[t].col].push(e[t]);
            return r;
          }),
          (t.prototype.attachSegsByCol = function(e, t) {
            var r, n, i;
            for (r = 0; r < this.colCnt; r++)
              for (n = e[r], i = 0; i < n.length; i++)
                t[r].appendChild(n[i].el);
          }),
          (t.prototype.getNowIndicatorUnit = function() {
            return "minute";
          }),
          (t.prototype.renderNowIndicator = function(e, t) {
            if (this.colContainerEls) {
              var r,
                n = this.computeDateTop(t),
                i = [];
              for (r = 0; r < e.length; r++) {
                var o = c("div", {
                  className: "fc-now-indicator fc-now-indicator-line"
                });
                (o.style.top = n + "px"),
                  this.colContainerEls[e[r].col].appendChild(o),
                  i.push(o);
              }
              if (e.length > 0) {
                var s = c("div", {
                  className: "fc-now-indicator fc-now-indicator-arrow"
                });
                (s.style.top = n + "px"),
                  this.contentSkeletonEl.appendChild(s),
                  i.push(s);
              }
              this.nowIndicatorEls = i;
            }
          }),
          (t.prototype.unrenderNowIndicator = function() {
            this.nowIndicatorEls &&
              (this.nowIndicatorEls.forEach(y), (this.nowIndicatorEls = null));
          }),
          (t.prototype.getTotalSlatHeight = function() {
            return this.slatContainerEl.getBoundingClientRect().height;
          }),
          (t.prototype.computeDateTop = function(e, t) {
            return (
              t || (t = K(e)),
              this.computeTimeTop(ae(e.valueOf() - t.valueOf()))
            );
          }),
          (t.prototype.computeTimeTop = function(e) {
            var t,
              r,
              n = this.slatEls.length,
              i = this.props.dateProfile,
              o = (e.milliseconds - ve(i.minTime)) / ve(this.slotDuration);
            return (
              (o = Math.max(0, o)),
              (o = Math.min(n, o)),
              (t = Math.floor(o)),
              (r = o - (t = Math.min(t, n - 1))),
              this.slatPositions.tops[t] + this.slatPositions.getHeight(t) * r
            );
          }),
          (t.prototype.computeSegVerticals = function(e) {
            var t,
              r,
              n,
              i = this.opt("timeGridEventMinHeight");
            for (t = 0; t < e.length; t++)
              (r = e[t]),
                (n = this.props.cells[r.col].date),
                (r.top = this.computeDateTop(r.start, n)),
                (r.bottom = Math.max(r.top + i, this.computeDateTop(r.end, n)));
          }),
          (t.prototype.assignSegVerticals = function(e) {
            var t, r;
            for (t = 0; t < e.length; t++)
              R((r = e[t]).el, this.generateSegVerticalCss(r));
          }),
          (t.prototype.generateSegVerticalCss = function(e) {
            return {
              top: e.top,
              bottom: -e.bottom
            };
          }),
          (t.prototype.buildPositionCaches = function() {
            this.buildColPositions(), this.buildSlatPositions();
          }),
          (t.prototype.buildColPositions = function() {
            this.colPositions.build();
          }),
          (t.prototype.buildSlatPositions = function() {
            this.slatPositions.build();
          }),
          (t.prototype.positionToHit = function(e, t) {
            var r = this.dateEnv,
              n = this.snapsPerSlot,
              i = this.slatPositions,
              o = this.colPositions,
              s = o.leftToIndex(e),
              a = i.topToIndex(t);
            if (null != s && null != a) {
              var l = i.tops[a],
                c = i.getHeight(a),
                d = (t - l) / c,
                u = a * n + Math.floor(d * n),
                p = this.props.cells[s].date,
                h = pe(
                  this.props.dateProfile.minTime,
                  he(this.snapDuration, u)
                ),
                f = r.add(p, h);
              return {
                col: s,
                dateSpan: {
                  range: {
                    start: f,
                    end: r.add(f, this.snapDuration)
                  },
                  allDay: !1
                },
                dayEl: this.colEls[s],
                relativeRect: {
                  left: o.lefts[s],
                  right: o.rights[s],
                  top: l,
                  bottom: l + c
                }
              };
            }
          }),
          (t.prototype._renderEventDrag = function(e) {
            e &&
              (this.eventRenderer.hideByHash(e.affectedInstances),
              e.isEvent
                ? this.mirrorRenderer.renderSegs(e.segs, {
                    isDragging: !0,
                    sourceSeg: e.sourceSeg
                  })
                : this.fillRenderer.renderSegs("highlight", e.segs));
          }),
          (t.prototype._unrenderEventDrag = function(e) {
            e &&
              (this.eventRenderer.showByHash(e.affectedInstances),
              this.mirrorRenderer.unrender(e.segs, {
                isDragging: !0,
                sourceSeg: e.sourceSeg
              }),
              this.fillRenderer.unrender("highlight"));
          }),
          (t.prototype._renderEventResize = function(e) {
            e &&
              (this.eventRenderer.hideByHash(e.affectedInstances),
              this.mirrorRenderer.renderSegs(e.segs, {
                isResizing: !0,
                sourceSeg: e.sourceSeg
              }));
          }),
          (t.prototype._unrenderEventResize = function(e) {
            e &&
              (this.eventRenderer.showByHash(e.affectedInstances),
              this.mirrorRenderer.unrender(e.segs, {
                isResizing: !0,
                sourceSeg: e.sourceSeg
              }));
          }),
          (t.prototype._renderDateSelection = function(e) {
            e &&
              (this.opt("selectMirror")
                ? this.mirrorRenderer.renderSegs(e, {
                    isSelecting: !0
                  })
                : this.fillRenderer.renderSegs("highlight", e));
          }),
          (t.prototype._unrenderDateSelection = function(e) {
            this.mirrorRenderer.unrender(e, {
              isSelecting: !0
            }),
              this.fillRenderer.unrender("highlight");
          }),
          t
        );
      })(Or),
      Zi = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          zi(t, e),
          (t.prototype.getKeyInfo = function() {
            return {
              allDay: {},
              timed: {}
            };
          }),
          (t.prototype.getKeysForDateSpan = function(e) {
            return e.allDay ? ["allDay"] : ["timed"];
          }),
          (t.prototype.getKeysForEventDef = function(e) {
            return e.allDay
              ? "background" === (t = e).rendering ||
                "inverse-background" === t.rendering
                ? ["timed", "allDay"]
                : ["allDay"]
              : ["timed"];
            var t;
          }),
          t
        );
      })(mr),
      Xi = It({
        week: "short"
      }),
      Ki = (function(e) {
        function t(t, r, n, i) {
          var o = e.call(this, t, r, n, i) || this;
          (o.splitter = new Zi()),
            (o.renderHeadIntroHtml = function() {
              var e,
                t = o,
                r = t.theme,
                n = t.dateEnv,
                i = o.props.dateProfile.renderRange,
                s = Z(i.start, i.end);
              return o.opt("weekNumbers")
                ? ((e = n.format(i.start, Xi)),
                  '<th class="fc-axis fc-week-number ' +
                    r.getClass("widgetHeader") +
                    '" ' +
                    o.axisStyleAttr() +
                    ">" +
                    Er(
                      o,
                      {
                        date: i.start,
                        type: "week",
                        forceOff: s > 1
                      },
                      $t(e)
                    ) +
                    "</th>")
                : '<th class="fc-axis ' +
                    r.getClass("widgetHeader") +
                    '" ' +
                    o.axisStyleAttr() +
                    "></th>";
            }),
            (o.renderTimeGridBgIntroHtml = function() {
              return (
                '<td class="fc-axis ' +
                o.theme.getClass("widgetContent") +
                '" ' +
                o.axisStyleAttr() +
                "></td>"
              );
            }),
            (o.renderTimeGridIntroHtml = function() {
              return '<td class="fc-axis" ' + o.axisStyleAttr() + "></td>";
            }),
            (o.renderDayGridBgIntroHtml = function() {
              return (
                '<td class="fc-axis ' +
                o.theme.getClass("widgetContent") +
                '" ' +
                o.axisStyleAttr() +
                "><span>" +
                br(o) +
                "</span></td>"
              );
            }),
            (o.renderDayGridIntroHtml = function() {
              return '<td class="fc-axis" ' + o.axisStyleAttr() + "></td>";
            }),
            o.el.classList.add("fc-timeGrid-view"),
            (o.el.innerHTML = o.renderSkeletonHtml()),
            (o.scroller = new Pr("hidden", "auto"));
          var s = o.scroller.el;
          o.el.querySelector(".fc-body > tr > td").appendChild(s),
            s.classList.add("fc-time-grid-container");
          var a = c("div", {
            className: "fc-time-grid"
          });
          if (
            (s.appendChild(a),
            (o.timeGrid = new Yi(o.context, a, {
              renderBgIntroHtml: o.renderTimeGridBgIntroHtml,
              renderIntroHtml: o.renderTimeGridIntroHtml
            })),
            o.opt("allDaySlot"))
          ) {
            o.dayGrid = new Mi(o.context, o.el.querySelector(".fc-day-grid"), {
              renderNumberIntroHtml: o.renderDayGridIntroHtml,
              renderBgIntroHtml: o.renderDayGridBgIntroHtml,
              renderIntroHtml: o.renderDayGridIntroHtml,
              colWeekNumbersVisible: !1,
              cellWeekNumbersVisible: !1
            });
            var l = o.el.querySelector(".fc-divider");
            o.dayGrid.bottomCoordPadding = l.getBoundingClientRect().height;
          }
          return o;
        }
        return (
          zi(t, e),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.timeGrid.destroy(),
              this.dayGrid && this.dayGrid.destroy(),
              this.scroller.destroy();
          }),
          (t.prototype.renderSkeletonHtml = function() {
            var e = this.theme;
            return (
              '<table class="' +
              e.getClass("tableGrid") +
              '">' +
              (this.opt("columnHeader")
                ? '<thead class="fc-head"><tr><td class="fc-head-container ' +
                  e.getClass("widgetHeader") +
                  '">&nbsp;</td></tr></thead>'
                : "") +
              '<tbody class="fc-body"><tr><td class="' +
              e.getClass("widgetContent") +
              '">' +
              (this.opt("allDaySlot")
                ? '<div class="fc-day-grid"></div><hr class="fc-divider ' +
                  e.getClass("widgetHeader") +
                  '" />'
                : "") +
              "</td></tr></tbody></table>"
            );
          }),
          (t.prototype.getNowIndicatorUnit = function() {
            return this.timeGrid.getNowIndicatorUnit();
          }),
          (t.prototype.unrenderNowIndicator = function() {
            this.timeGrid.unrenderNowIndicator();
          }),
          (t.prototype.updateSize = function(t, r, n) {
            e.prototype.updateSize.call(this, t, r, n),
              this.timeGrid.updateSize(t),
              this.dayGrid && this.dayGrid.updateSize(t);
          }),
          (t.prototype.updateBaseSize = function(e, t, r) {
            var n,
              i,
              o,
              s = this;
            if (
              ((this.axisWidth = De(w(this.el, ".fc-axis"))),
              this.timeGrid.colEls)
            ) {
              var a = w(this.el, ".fc-row").filter(function(e) {
                return !s.scroller.el.contains(e);
              });
              (this.timeGrid.bottomRuleEl.style.display = "none"),
                this.scroller.clear(),
                a.forEach(Se),
                this.dayGrid &&
                  (this.dayGrid.removeSegPopover(),
                  (n = this.opt("eventLimit")) &&
                    "number" != typeof n &&
                    (n = 5),
                  n && this.dayGrid.limitRows(n)),
                r ||
                  ((i = this.computeScrollerHeight(t)),
                  this.scroller.setHeight(i),
                  ((o = this.scroller.getScrollbarWidths()).left || o.right) &&
                    (a.forEach(function(e) {
                      me(e, o);
                    }),
                    (i = this.computeScrollerHeight(t)),
                    this.scroller.setHeight(i)),
                  this.scroller.lockOverflow(o),
                  this.timeGrid.getTotalSlatHeight() < i &&
                    (this.timeGrid.bottomRuleEl.style.display = ""));
            } else
              r ||
                ((i = this.computeScrollerHeight(t)),
                this.scroller.setHeight(i));
          }),
          (t.prototype.computeScrollerHeight = function(e) {
            return e - Ce(this.el, this.scroller.el);
          }),
          (t.prototype.computeDateScroll = function(e) {
            var t = this.timeGrid.computeTimeTop(e);
            return (
              (t = Math.ceil(t)) && t++,
              {
                top: t
              }
            );
          }),
          (t.prototype.queryDateScroll = function() {
            return {
              top: this.scroller.getScrollTop()
            };
          }),
          (t.prototype.applyDateScroll = function(e) {
            void 0 !== e.top && this.scroller.setScrollTop(e.top);
          }),
          (t.prototype.axisStyleAttr = function() {
            return null != this.axisWidth
              ? 'style="width:' + this.axisWidth + 'px"'
              : "";
          }),
          t
        );
      })(Qn);
    Ki.prototype.usesMinMaxTime = !0;
    var Ji = (function(e) {
      function t(t, r) {
        var n = e.call(this, t, r.el) || this;
        return (
          (n.buildDayRanges = vt(Qi)),
          (n.slicer = new $i()),
          (n.timeGrid = r),
          t.calendar.registerInteractiveComponent(n, {
            el: n.timeGrid.el
          }),
          n
        );
      }
      return (
        zi(t, e),
        (t.prototype.destroy = function() {
          e.prototype.destroy.call(this),
            this.calendar.unregisterInteractiveComponent(this);
        }),
        (t.prototype.render = function(e) {
          var t = e.dateProfile,
            r = e.dayTable,
            n = (this.dayRanges = this.buildDayRanges(r, t, this.dateEnv));
          this.timeGrid.receiveProps(
            Bi({}, this.slicer.sliceProps(e, t, null, this.timeGrid, n), {
              dateProfile: t,
              cells: r.cells[0]
            })
          );
        }),
        (t.prototype.renderNowIndicator = function(e) {
          this.timeGrid.renderNowIndicator(
            this.slicer.sliceNowDate(e, this.timeGrid, this.dayRanges),
            e
          );
        }),
        (t.prototype.buildPositionCaches = function() {
          this.timeGrid.buildPositionCaches();
        }),
        (t.prototype.queryHit = function(e, t) {
          var r = this.timeGrid.positionToHit(e, t);
          if (r)
            return {
              component: this.timeGrid,
              dateSpan: r.dateSpan,
              dayEl: r.dayEl,
              rect: {
                left: r.relativeRect.left,
                right: r.relativeRect.right,
                top: r.relativeRect.top,
                bottom: r.relativeRect.bottom
              },
              layer: 0
            };
        }),
        t
      );
    })(Or);
    function Qi(e, t, r) {
      for (var n = [], i = 0, o = e.headerDates; i < o.length; i++) {
        var s = o[i];
        n.push({
          start: r.add(s, t.minTime),
          end: r.add(s, t.maxTime)
        });
      }
      return n;
    }
    var $i = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        zi(t, e),
        (t.prototype.sliceRange = function(e, t) {
          for (var r = [], n = 0; n < t.length; n++) {
            var i = ct(e, t[n]);
            i &&
              r.push({
                start: i.start,
                end: i.end,
                isStart: i.start.valueOf() === e.start.valueOf(),
                isEnd: i.end.valueOf() === e.end.valueOf(),
                col: n
              });
          }
          return r;
        }),
        t
      );
    })(ui);
    function eo(e, t) {
      var r = new ci(e.renderRange, t);
      return new di(r, !1);
    }
    var to = Nr({
        defaultView: "timeGridWeek",
        views: {
          timeGrid: {
            class: (function(e) {
              function t(t, r, n, i) {
                var o = e.call(this, t, r, n, i) || this;
                return (
                  (o.buildDayTable = vt(eo)),
                  o.opt("columnHeader") &&
                    (o.header = new li(
                      o.context,
                      o.el.querySelector(".fc-head-container")
                    )),
                  (o.simpleTimeGrid = new Ji(o.context, o.timeGrid)),
                  o.dayGrid && (o.simpleDayGrid = new _i(o.context, o.dayGrid)),
                  o
                );
              }
              return (
                zi(t, e),
                (t.prototype.destroy = function() {
                  e.prototype.destroy.call(this),
                    this.header && this.header.destroy(),
                    this.simpleTimeGrid.destroy(),
                    this.simpleDayGrid && this.simpleDayGrid.destroy();
                }),
                (t.prototype.render = function(t) {
                  e.prototype.render.call(this, t);
                  var r = this.props.dateProfile,
                    n = this.buildDayTable(r, this.dateProfileGenerator),
                    i = this.splitter.splitProps(t);
                  this.header &&
                    this.header.receiveProps({
                      dateProfile: r,
                      dates: n.headerDates,
                      datesRepDistinctDays: !0,
                      renderIntroHtml: this.renderHeadIntroHtml
                    }),
                    this.simpleTimeGrid.receiveProps(
                      Bi({}, i.timed, {
                        dateProfile: r,
                        dayTable: n
                      })
                    ),
                    this.simpleDayGrid &&
                      this.simpleDayGrid.receiveProps(
                        Bi({}, i.allDay, {
                          dateProfile: r,
                          dayTable: n,
                          nextDayThreshold: this.nextDayThreshold,
                          isRigid: !1
                        })
                      );
                }),
                (t.prototype.renderNowIndicator = function(e) {
                  this.simpleTimeGrid.renderNowIndicator(e);
                }),
                t
              );
            })(Ki),
            allDaySlot: !0,
            slotDuration: "00:30:00",
            slotEventOverlap: !0
          },
          timeGridDay: {
            type: "timeGrid",
            duration: {
              days: 1
            }
          },
          timeGridWeek: {
            type: "timeGrid",
            duration: {
              weeks: 1
            }
          }
        }
      }),
      ro = function(e, t) {
        return (ro =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
    function no(e, t) {
      function r() {
        this.constructor = e;
      }
      ro(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var io = (function(e) {
        function t(t) {
          var r = e.call(this, t.context) || this;
          return (r.listView = t), r;
        }
        return (
          no(t, e),
          (t.prototype.attachSegs = function(e) {
            e.length
              ? this.listView.renderSegList(e)
              : this.listView.renderEmptyMessage();
          }),
          (t.prototype.detachSegs = function() {}),
          (t.prototype.renderSegHtml = function(e) {
            var t,
              r = this.context,
              n = r.view,
              i = r.theme,
              o = e.eventRange,
              s = o.def,
              a = o.instance,
              l = o.ui,
              c = s.url,
              d = ["fc-list-item"].concat(l.classNames),
              u = l.backgroundColor;
            return (
              (t = s.allDay
                ? br(n)
                : Ue(o.range)
                ? e.isStart
                  ? $t(this._getTimeText(a.range.start, e.end, !1))
                  : e.isEnd
                  ? $t(this._getTimeText(e.start, a.range.end, !1))
                  : br(n)
                : $t(this.getTimeText(o))),
              c && d.push("fc-has-url"),
              '<tr class="' +
                d.join(" ") +
                '">' +
                (this.displayEventTime
                  ? '<td class="fc-list-item-time ' +
                    i.getClass("widgetContent") +
                    '">' +
                    (t || "") +
                    "</td>"
                  : "") +
                '<td class="fc-list-item-marker ' +
                i.getClass("widgetContent") +
                '"><span class="fc-event-dot"' +
                (u ? ' style="background-color:' + u + '"' : "") +
                '></span></td><td class="fc-list-item-title ' +
                i.getClass("widgetContent") +
                '"><a' +
                (c ? ' href="' + $t(c) + '"' : "") +
                ">" +
                $t(s.title || "") +
                "</a></td></tr>"
            );
          }),
          (t.prototype.computeEventTimeFormat = function() {
            return {
              hour: "numeric",
              minute: "2-digit",
              meridiem: "short"
            };
          }),
          t
        );
      })($n),
      oo = (function(e) {
        function t(t, r, n, i) {
          var o = e.call(this, t, r, n, i) || this;
          (o.computeDateVars = vt(so)),
            (o.eventStoreToSegs = vt(o._eventStoreToSegs));
          var s = (o.eventRenderer = new io(o));
          (o.renderContent = gr(s.renderSegs.bind(s), s.unrender.bind(s))),
            o.el.classList.add("fc-list-view");
          for (
            var a = 0, l = (o.theme.getClass("listView") || "").split(" ");
            a < l.length;
            a++
          ) {
            var c = l[a];
            c && o.el.classList.add(c);
          }
          return (
            (o.scroller = new Pr("hidden", "auto")),
            o.el.appendChild(o.scroller.el),
            (o.contentEl = o.scroller.el),
            t.calendar.registerInteractiveComponent(o, {
              el: o.el
            }),
            o
          );
        }
        return (
          no(t, e),
          (t.prototype.render = function(e) {
            var t = this.computeDateVars(e.dateProfile),
              r = t.dayDates,
              n = t.dayRanges;
            (this.dayDates = r),
              this.renderContent(
                this.eventStoreToSegs(e.eventStore, e.eventUiBases, n)
              );
          }),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.renderContent.unrender(),
              this.scroller.destroy(),
              this.calendar.unregisterInteractiveComponent(this);
          }),
          (t.prototype.updateSize = function(t, r, n) {
            e.prototype.updateSize.call(this, t, r, n),
              this.eventRenderer.computeSizes(t),
              this.eventRenderer.assignSizes(t),
              this.scroller.clear(),
              n || this.scroller.setHeight(this.computeScrollerHeight(r));
          }),
          (t.prototype.computeScrollerHeight = function(e) {
            return e - Ce(this.el, this.scroller.el);
          }),
          (t.prototype._eventStoreToSegs = function(e, t, r) {
            return this.eventRangesToSegs(
              Lt(
                e,
                t,
                this.props.dateProfile.activeRange,
                this.nextDayThreshold
              ).fg,
              r
            );
          }),
          (t.prototype.eventRangesToSegs = function(e, t) {
            for (var r = [], n = 0, i = e; n < i.length; n++) {
              var o = i[n];
              r.push.apply(r, this.eventRangeToSegs(o, t));
            }
            return r;
          }),
          (t.prototype.eventRangeToSegs = function(e, t) {
            var r,
              n,
              i,
              o = this.dateEnv,
              s = this.nextDayThreshold,
              a = e.range,
              l = e.def.allDay,
              c = [];
            for (r = 0; r < t.length; r++)
              if (
                (n = ct(a, t[r])) &&
                ((i = {
                  component: this,
                  eventRange: e,
                  start: n.start,
                  end: n.end,
                  isStart: e.isStart && n.start.valueOf() === a.start.valueOf(),
                  isEnd: e.isEnd && n.end.valueOf() === a.end.valueOf(),
                  dayIndex: r
                }),
                c.push(i),
                !i.isEnd &&
                  !l &&
                  r + 1 < t.length &&
                  a.end < o.add(t[r + 1].start, s))
              ) {
                (i.end = a.end), (i.isEnd = !0);
                break;
              }
            return c;
          }),
          (t.prototype.renderEmptyMessage = function() {
            this.contentEl.innerHTML =
              '<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' +
              $t(this.opt("noEventsMessage")) +
              "</div></div></div>";
          }),
          (t.prototype.renderSegList = function(e) {
            var t,
              r,
              n,
              i = this.groupSegsByDay(e),
              o = d(
                '<table class="fc-list-table ' +
                  this.calendar.theme.getClass("tableList") +
                  '"><tbody></tbody></table>'
              ),
              s = o.querySelector("tbody");
            for (t = 0; t < i.length; t++)
              if ((r = i[t]))
                for (
                  s.appendChild(this.buildDayHeaderRow(this.dayDates[t])),
                    r = this.eventRenderer.sortEventSegs(r),
                    n = 0;
                  n < r.length;
                  n++
                )
                  s.appendChild(r[n].el);
            (this.contentEl.innerHTML = ""), this.contentEl.appendChild(o);
          }),
          (t.prototype.groupSegsByDay = function(e) {
            var t,
              r,
              n = [];
            for (t = 0; t < e.length; t++)
              (n[(r = e[t]).dayIndex] || (n[r.dayIndex] = [])).push(r);
            return n;
          }),
          (t.prototype.buildDayHeaderRow = function(e) {
            var t = this.dateEnv,
              r = It(this.opt("listDayFormat")),
              n = It(this.opt("listDayAltFormat"));
            return c(
              "tr",
              {
                className: "fc-list-heading",
                "data-date": t.formatIso(e, {
                  omitTime: !0
                })
              },
              '<td class="' +
                (this.calendar.theme.getClass("tableListHeading") ||
                  this.calendar.theme.getClass("widgetHeader")) +
                '" colspan="3">' +
                (r
                  ? Er(
                      this,
                      e,
                      {
                        class: "fc-list-heading-main"
                      },
                      $t(t.format(e, r))
                    )
                  : "") +
                (n
                  ? Er(
                      this,
                      e,
                      {
                        class: "fc-list-heading-alt"
                      },
                      $t(t.format(e, n))
                    )
                  : "") +
                "</td>"
            );
          }),
          t
        );
      })(Qn);
    function so(e) {
      for (
        var t = K(e.renderRange.start), r = e.renderRange.end, n = [], i = [];
        t < r;

      )
        n.push(t),
          i.push({
            start: t,
            end: q(t, 1)
          }),
          (t = q(t, 1));
      return {
        dayDates: n,
        dayRanges: i
      };
    }
    oo.prototype.fgSegSelector = ".fc-list-item";
    var ao = Nr({
        views: {
          list: {
            class: oo,
            buttonTextKey: "list",
            listDayFormat: {
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          listDay: {
            type: "list",
            duration: {
              days: 1
            },
            listDayFormat: {
              weekday: "long"
            }
          },
          listWeek: {
            type: "list",
            duration: {
              weeks: 1
            },
            listDayFormat: {
              weekday: "long"
            },
            listDayAltFormat: {
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          listMonth: {
            type: "list",
            duration: {
              month: 1
            },
            listDayAltFormat: {
              weekday: "long"
            }
          },
          listYear: {
            type: "list",
            duration: {
              year: 1
            },
            listDayAltFormat: {
              weekday: "long"
            }
          }
        }
      }),
      lo = function(e, t) {
        return (lo =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
    function co(e, t) {
      function r() {
        this.constructor = e;
      }
      lo(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var uo = function() {
      return (uo =
        Object.assign ||
        function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
    Yr.touchMouseIgnoreWait = 500;
    var po = 0,
      ho = 0,
      fo = !1,
      vo = (function() {
        function e(e) {
          var t = this;
          (this.subjectEl = null),
            (this.downEl = null),
            (this.selector = ""),
            (this.handleSelector = ""),
            (this.shouldIgnoreMove = !1),
            (this.shouldWatchScroll = !0),
            (this.isDragging = !1),
            (this.isTouchDragging = !1),
            (this.wasTouchScroll = !1),
            (this.handleMouseDown = function(e) {
              if (
                !t.shouldIgnoreMouse() &&
                (function(e) {
                  return 0 === e.button && !e.ctrlKey;
                })(e) &&
                t.tryStart(e)
              ) {
                var r = t.createEventFromMouse(e, !0);
                t.emitter.trigger("pointerdown", r),
                  t.initScrollWatch(r),
                  t.shouldIgnoreMove ||
                    document.addEventListener("mousemove", t.handleMouseMove),
                  document.addEventListener("mouseup", t.handleMouseUp);
              }
            }),
            (this.handleMouseMove = function(e) {
              var r = t.createEventFromMouse(e);
              t.recordCoords(r), t.emitter.trigger("pointermove", r);
            }),
            (this.handleMouseUp = function(e) {
              document.removeEventListener("mousemove", t.handleMouseMove),
                document.removeEventListener("mouseup", t.handleMouseUp),
                t.emitter.trigger("pointerup", t.createEventFromMouse(e)),
                t.cleanup();
            }),
            (this.handleTouchStart = function(e) {
              if (t.tryStart(e)) {
                t.isTouchDragging = !0;
                var r = t.createEventFromTouch(e, !0);
                t.emitter.trigger("pointerdown", r), t.initScrollWatch(r);
                var n = e.target;
                t.shouldIgnoreMove ||
                  n.addEventListener("touchmove", t.handleTouchMove),
                  n.addEventListener("touchend", t.handleTouchEnd),
                  n.addEventListener("touchcancel", t.handleTouchEnd),
                  window.addEventListener("scroll", t.handleTouchScroll, !0);
              }
            }),
            (this.handleTouchMove = function(e) {
              var r = t.createEventFromTouch(e);
              t.recordCoords(r), t.emitter.trigger("pointermove", r);
            }),
            (this.handleTouchEnd = function(e) {
              if (t.isDragging) {
                var r = e.target;
                r.removeEventListener("touchmove", t.handleTouchMove),
                  r.removeEventListener("touchend", t.handleTouchEnd),
                  r.removeEventListener("touchcancel", t.handleTouchEnd),
                  window.removeEventListener("scroll", t.handleTouchScroll, !0),
                  t.emitter.trigger("pointerup", t.createEventFromTouch(e)),
                  t.cleanup(),
                  (t.isTouchDragging = !1),
                  po++,
                  setTimeout(function() {
                    po--;
                  }, Yr.touchMouseIgnoreWait);
              }
            }),
            (this.handleTouchScroll = function() {
              t.wasTouchScroll = !0;
            }),
            (this.handleScroll = function(e) {
              if (!t.shouldIgnoreMove) {
                var r = window.pageXOffset - t.prevScrollX + t.prevPageX,
                  n = window.pageYOffset - t.prevScrollY + t.prevPageY;
                t.emitter.trigger("pointermove", {
                  origEvent: e,
                  isTouch: t.isTouchDragging,
                  subjectEl: t.subjectEl,
                  pageX: r,
                  pageY: n,
                  deltaX: r - t.origPageX,
                  deltaY: n - t.origPageY
                });
              }
            }),
            (this.containerEl = e),
            (this.emitter = new Dr()),
            e.addEventListener("mousedown", this.handleMouseDown),
            e.addEventListener("touchstart", this.handleTouchStart, {
              passive: !0
            }),
            ho++ ||
              window.addEventListener("touchmove", go, {
                passive: !1
              });
        }
        return (
          (e.prototype.destroy = function() {
            this.containerEl.removeEventListener(
              "mousedown",
              this.handleMouseDown
            ),
              this.containerEl.removeEventListener(
                "touchstart",
                this.handleTouchStart,
                {
                  passive: !0
                }
              ),
              --ho ||
                window.removeEventListener("touchmove", go, {
                  passive: !1
                });
          }),
          (e.prototype.tryStart = function(e) {
            var t = this.querySubjectEl(e),
              r = e.target;
            return (
              !(!t || (this.handleSelector && !E(r, this.handleSelector))) &&
              ((this.subjectEl = t),
              (this.downEl = r),
              (this.isDragging = !0),
              (this.wasTouchScroll = !1),
              !0)
            );
          }),
          (e.prototype.cleanup = function() {
            (fo = !1),
              (this.isDragging = !1),
              (this.subjectEl = null),
              (this.downEl = null),
              this.destroyScrollWatch();
          }),
          (e.prototype.querySubjectEl = function(e) {
            return this.selector
              ? E(e.target, this.selector)
              : this.containerEl;
          }),
          (e.prototype.shouldIgnoreMouse = function() {
            return po || this.isTouchDragging;
          }),
          (e.prototype.cancelTouchScroll = function() {
            this.isDragging && (fo = !0);
          }),
          (e.prototype.initScrollWatch = function(e) {
            this.shouldWatchScroll &&
              (this.recordCoords(e),
              window.addEventListener("scroll", this.handleScroll, !0));
          }),
          (e.prototype.recordCoords = function(e) {
            this.shouldWatchScroll &&
              ((this.prevPageX = e.pageX),
              (this.prevPageY = e.pageY),
              (this.prevScrollX = window.pageXOffset),
              (this.prevScrollY = window.pageYOffset));
          }),
          (e.prototype.destroyScrollWatch = function() {
            this.shouldWatchScroll &&
              window.removeEventListener("scroll", this.handleScroll, !0);
          }),
          (e.prototype.createEventFromMouse = function(e, t) {
            var r = 0,
              n = 0;
            return (
              t
                ? ((this.origPageX = e.pageX), (this.origPageY = e.pageY))
                : ((r = e.pageX - this.origPageX),
                  (n = e.pageY - this.origPageY)),
              {
                origEvent: e,
                isTouch: !1,
                subjectEl: this.subjectEl,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: r,
                deltaY: n
              }
            );
          }),
          (e.prototype.createEventFromTouch = function(e, t) {
            var r,
              n,
              i = e.touches,
              o = 0,
              s = 0;
            return (
              i && i.length
                ? ((r = i[0].pageX), (n = i[0].pageY))
                : ((r = e.pageX), (n = e.pageY)),
              t
                ? ((this.origPageX = r), (this.origPageY = n))
                : ((o = r - this.origPageX), (s = n - this.origPageY)),
              {
                origEvent: e,
                isTouch: !0,
                subjectEl: this.subjectEl,
                pageX: r,
                pageY: n,
                deltaX: o,
                deltaY: s
              }
            );
          }),
          e
        );
      })();
    function go(e) {
      fo && e.preventDefault();
    }
    var yo = (function() {
        function e() {
          (this.isVisible = !1),
            (this.sourceEl = null),
            (this.mirrorEl = null),
            (this.sourceElRect = null),
            (this.parentNode = document.body),
            (this.zIndex = 9999),
            (this.revertDuration = 0);
        }
        return (
          (e.prototype.start = function(e, t, r) {
            (this.sourceEl = e),
              (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
              (this.origScreenX = t - window.pageXOffset),
              (this.origScreenY = r - window.pageYOffset),
              (this.deltaX = 0),
              (this.deltaY = 0),
              this.updateElPosition();
          }),
          (e.prototype.handleMove = function(e, t) {
            (this.deltaX = e - window.pageXOffset - this.origScreenX),
              (this.deltaY = t - window.pageYOffset - this.origScreenY),
              this.updateElPosition();
          }),
          (e.prototype.setIsVisible = function(e) {
            e
              ? this.isVisible ||
                (this.mirrorEl && (this.mirrorEl.style.display = ""),
                (this.isVisible = e),
                this.updateElPosition())
              : this.isVisible &&
                (this.mirrorEl && (this.mirrorEl.style.display = "none"),
                (this.isVisible = e));
          }),
          (e.prototype.stop = function(e, t) {
            var r = this,
              n = function() {
                r.cleanup(), t();
              };
            e &&
            this.mirrorEl &&
            this.isVisible &&
            this.revertDuration &&
            (this.deltaX || this.deltaY)
              ? this.doRevertAnimation(n, this.revertDuration)
              : setTimeout(n, 0);
          }),
          (e.prototype.doRevertAnimation = function(e, t) {
            var r = this.mirrorEl,
              n = this.sourceEl.getBoundingClientRect();
            (r.style.transition = "top " + t + "ms,left " + t + "ms"),
              R(r, {
                left: n.left,
                top: n.top
              }),
              (function(e, t) {
                var r = function(n) {
                  t(n),
                    V.forEach(function(t) {
                      e.removeEventListener(t, r);
                    });
                };
                V.forEach(function(t) {
                  e.addEventListener(t, r);
                });
              })(r, function() {
                (r.style.transition = ""), e();
              });
          }),
          (e.prototype.cleanup = function() {
            this.mirrorEl && (y(this.mirrorEl), (this.mirrorEl = null)),
              (this.sourceEl = null);
          }),
          (e.prototype.updateElPosition = function() {
            this.sourceEl &&
              this.isVisible &&
              R(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY
              });
          }),
          (e.prototype.getMirrorEl = function() {
            var e = this.sourceElRect,
              t = this.mirrorEl;
            return (
              t ||
                ((t = this.mirrorEl = this.sourceEl.cloneNode(
                  !0
                )).classList.add("fc-unselectable"),
                t.classList.add("fc-dragging"),
                R(t, {
                  position: "fixed",
                  zIndex: this.zIndex,
                  visibility: "",
                  boxSizing: "border-box",
                  width: e.right - e.left,
                  height: e.bottom - e.top,
                  right: "auto",
                  bottom: "auto",
                  margin: 0
                }),
                this.parentNode.appendChild(t)),
              t
            );
          }),
          e
        );
      })(),
      mo = (function(e) {
        function t(t, r) {
          var n = e.call(this) || this;
          return (
            (n.handleScroll = function() {
              (n.scrollTop = n.scrollController.getScrollTop()),
                (n.scrollLeft = n.scrollController.getScrollLeft()),
                n.handleScrollChange();
            }),
            (n.scrollController = t),
            (n.doesListening = r),
            (n.scrollTop = n.origScrollTop = t.getScrollTop()),
            (n.scrollLeft = n.origScrollLeft = t.getScrollLeft()),
            (n.scrollWidth = t.getScrollWidth()),
            (n.scrollHeight = t.getScrollHeight()),
            (n.clientWidth = t.getClientWidth()),
            (n.clientHeight = t.getClientHeight()),
            (n.clientRect = n.computeClientRect()),
            n.doesListening &&
              n.getEventTarget().addEventListener("scroll", n.handleScroll),
            n
          );
        }
        return (
          co(t, e),
          (t.prototype.destroy = function() {
            this.doesListening &&
              this.getEventTarget().removeEventListener(
                "scroll",
                this.handleScroll
              );
          }),
          (t.prototype.getScrollTop = function() {
            return this.scrollTop;
          }),
          (t.prototype.getScrollLeft = function() {
            return this.scrollLeft;
          }),
          (t.prototype.setScrollTop = function(e) {
            this.scrollController.setScrollTop(e),
              this.doesListening ||
                ((this.scrollTop = Math.max(
                  Math.min(e, this.getMaxScrollTop()),
                  0
                )),
                this.handleScrollChange());
          }),
          (t.prototype.setScrollLeft = function(e) {
            this.scrollController.setScrollLeft(e),
              this.doesListening ||
                ((this.scrollLeft = Math.max(
                  Math.min(e, this.getMaxScrollLeft()),
                  0
                )),
                this.handleScrollChange());
          }),
          (t.prototype.getClientWidth = function() {
            return this.clientWidth;
          }),
          (t.prototype.getClientHeight = function() {
            return this.clientHeight;
          }),
          (t.prototype.getScrollWidth = function() {
            return this.scrollWidth;
          }),
          (t.prototype.getScrollHeight = function() {
            return this.scrollHeight;
          }),
          (t.prototype.handleScrollChange = function() {}),
          t
        );
      })(Ir),
      So = (function(e) {
        function t(t, r) {
          return e.call(this, new kr(t), r) || this;
        }
        return (
          co(t, e),
          (t.prototype.getEventTarget = function() {
            return this.scrollController.el;
          }),
          (t.prototype.computeClientRect = function() {
            return O(this.scrollController.el);
          }),
          t
        );
      })(mo),
      Eo = (function(e) {
        function t(t) {
          return e.call(this, new Mr(), t) || this;
        }
        return (
          co(t, e),
          (t.prototype.getEventTarget = function() {
            return window;
          }),
          (t.prototype.computeClientRect = function() {
            return {
              left: this.scrollLeft,
              right: this.scrollLeft + this.clientWidth,
              top: this.scrollTop,
              bottom: this.scrollTop + this.clientHeight
            };
          }),
          (t.prototype.handleScrollChange = function() {
            this.clientRect = this.computeClientRect();
          }),
          t
        );
      })(mo),
      bo = "function" == typeof performance ? performance.now : Date.now,
      wo = (function() {
        function e() {
          var e = this;
          (this.isEnabled = !0),
            (this.scrollQuery = [window, ".fc-scroller"]),
            (this.edgeThreshold = 50),
            (this.maxVelocity = 300),
            (this.pointerScreenX = null),
            (this.pointerScreenY = null),
            (this.isAnimating = !1),
            (this.scrollCaches = null),
            (this.everMovedUp = !1),
            (this.everMovedDown = !1),
            (this.everMovedLeft = !1),
            (this.everMovedRight = !1),
            (this.animate = function() {
              if (e.isAnimating) {
                var t = e.computeBestEdge(
                  e.pointerScreenX + window.pageXOffset,
                  e.pointerScreenY + window.pageYOffset
                );
                if (t) {
                  var r = bo();
                  e.handleSide(t, (r - e.msSinceRequest) / 1e3),
                    e.requestAnimation(r);
                } else e.isAnimating = !1;
              }
            });
        }
        return (
          (e.prototype.start = function(e, t) {
            this.isEnabled &&
              ((this.scrollCaches = this.buildCaches()),
              (this.pointerScreenX = null),
              (this.pointerScreenY = null),
              (this.everMovedUp = !1),
              (this.everMovedDown = !1),
              (this.everMovedLeft = !1),
              (this.everMovedRight = !1),
              this.handleMove(e, t));
          }),
          (e.prototype.handleMove = function(e, t) {
            if (this.isEnabled) {
              var r = e - window.pageXOffset,
                n = t - window.pageYOffset,
                i = null === this.pointerScreenY ? 0 : n - this.pointerScreenY,
                o = null === this.pointerScreenX ? 0 : r - this.pointerScreenX;
              i < 0
                ? (this.everMovedUp = !0)
                : i > 0 && (this.everMovedDown = !0),
                o < 0
                  ? (this.everMovedLeft = !0)
                  : o > 0 && (this.everMovedRight = !0),
                (this.pointerScreenX = r),
                (this.pointerScreenY = n),
                this.isAnimating ||
                  ((this.isAnimating = !0), this.requestAnimation(bo()));
            }
          }),
          (e.prototype.stop = function() {
            if (this.isEnabled) {
              this.isAnimating = !1;
              for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                t[e].destroy();
              }
              this.scrollCaches = null;
            }
          }),
          (e.prototype.requestAnimation = function(e) {
            (this.msSinceRequest = e), requestAnimationFrame(this.animate);
          }),
          (e.prototype.handleSide = function(e, t) {
            var r = e.scrollCache,
              n = this.edgeThreshold,
              i = n - e.distance,
              o = ((i * i) / (n * n)) * this.maxVelocity * t,
              s = 1;
            switch (e.name) {
              case "left":
                s = -1;
              case "right":
                r.setScrollLeft(r.getScrollLeft() + o * s);
                break;
              case "top":
                s = -1;
              case "bottom":
                r.setScrollTop(r.getScrollTop() + o * s);
            }
          }),
          (e.prototype.computeBestEdge = function(e, t) {
            for (
              var r = this.edgeThreshold,
                n = null,
                i = 0,
                o = this.scrollCaches;
              i < o.length;
              i++
            ) {
              var s = o[i],
                a = s.clientRect,
                l = e - a.left,
                c = a.right - e,
                d = t - a.top,
                u = a.bottom - t;
              l >= 0 &&
                c >= 0 &&
                d >= 0 &&
                u >= 0 &&
                (d <= r &&
                  this.everMovedUp &&
                  s.canScrollUp() &&
                  (!n || n.distance > d) &&
                  (n = {
                    scrollCache: s,
                    name: "top",
                    distance: d
                  }),
                u <= r &&
                  this.everMovedDown &&
                  s.canScrollDown() &&
                  (!n || n.distance > u) &&
                  (n = {
                    scrollCache: s,
                    name: "bottom",
                    distance: u
                  }),
                l <= r &&
                  this.everMovedLeft &&
                  s.canScrollLeft() &&
                  (!n || n.distance > l) &&
                  (n = {
                    scrollCache: s,
                    name: "left",
                    distance: l
                  }),
                c <= r &&
                  this.everMovedRight &&
                  s.canScrollRight() &&
                  (!n || n.distance > c) &&
                  (n = {
                    scrollCache: s,
                    name: "right",
                    distance: c
                  }));
            }
            return n;
          }),
          (e.prototype.buildCaches = function() {
            return this.queryScrollEls().map(function(e) {
              return e === window ? new Eo(!1) : new So(e, !1);
            });
          }),
          (e.prototype.queryScrollEls = function() {
            for (var e = [], t = 0, r = this.scrollQuery; t < r.length; t++) {
              var n = r[t];
              "object" == typeof n
                ? e.push(n)
                : e.push.apply(
                    e,
                    Array.prototype.slice.call(document.querySelectorAll(n))
                  );
            }
            return e;
          }),
          e
        );
      })(),
      To = (function(e) {
        function t(t) {
          var r = e.call(this, t) || this;
          (r.delay = null),
            (r.minDistance = 0),
            (r.touchScrollAllowed = !0),
            (r.mirrorNeedsRevert = !1),
            (r.isInteracting = !1),
            (r.isDragging = !1),
            (r.isDelayEnded = !1),
            (r.isDistanceSurpassed = !1),
            (r.delayTimeoutId = null),
            (r.onPointerDown = function(e) {
              var t;
              r.isDragging ||
                ((r.isInteracting = !0),
                (r.isDelayEnded = !1),
                (r.isDistanceSurpassed = !1),
                (t = document.body).classList.add("fc-unselectable"),
                t.addEventListener("selectstart", j),
                (function(e) {
                  e.addEventListener("contextmenu", j);
                })(document.body),
                e.isTouch || e.origEvent.preventDefault(),
                r.emitter.trigger("pointerdown", e),
                r.pointer.shouldIgnoreMove ||
                  (r.mirror.setIsVisible(!1),
                  r.mirror.start(e.subjectEl, e.pageX, e.pageY),
                  r.startDelay(e),
                  r.minDistance || r.handleDistanceSurpassed(e)));
            }),
            (r.onPointerMove = function(e) {
              if (r.isInteracting) {
                if (
                  (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed)
                ) {
                  var t = r.minDistance,
                    n = e.deltaX,
                    i = e.deltaY;
                  n * n + i * i >= t * t && r.handleDistanceSurpassed(e);
                }
                r.isDragging &&
                  ("scroll" !== e.origEvent.type &&
                    (r.mirror.handleMove(e.pageX, e.pageY),
                    r.autoScroller.handleMove(e.pageX, e.pageY)),
                  r.emitter.trigger("dragmove", e));
              }
            }),
            (r.onPointerUp = function(e) {
              var t;
              r.isInteracting &&
                ((r.isInteracting = !1),
                (t = document.body).classList.remove("fc-unselectable"),
                t.removeEventListener("selectstart", j),
                (function(e) {
                  e.removeEventListener("contextmenu", j);
                })(document.body),
                r.emitter.trigger("pointerup", e),
                r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)),
                r.delayTimeoutId &&
                  (clearTimeout(r.delayTimeoutId), (r.delayTimeoutId = null)));
            });
          var n = (r.pointer = new vo(t));
          return (
            n.emitter.on("pointerdown", r.onPointerDown),
            n.emitter.on("pointermove", r.onPointerMove),
            n.emitter.on("pointerup", r.onPointerUp),
            (r.mirror = new yo()),
            (r.autoScroller = new wo()),
            r
          );
        }
        return (
          co(t, e),
          (t.prototype.destroy = function() {
            this.pointer.destroy();
          }),
          (t.prototype.startDelay = function(e) {
            var t = this;
            "number" == typeof this.delay
              ? (this.delayTimeoutId = setTimeout(function() {
                  (t.delayTimeoutId = null), t.handleDelayEnd(e);
                }, this.delay))
              : this.handleDelayEnd(e);
          }),
          (t.prototype.handleDelayEnd = function(e) {
            (this.isDelayEnded = !0), this.tryStartDrag(e);
          }),
          (t.prototype.handleDistanceSurpassed = function(e) {
            (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
          }),
          (t.prototype.tryStartDrag = function(e) {
            this.isDelayEnded &&
              this.isDistanceSurpassed &&
              ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
                ((this.isDragging = !0),
                (this.mirrorNeedsRevert = !1),
                this.autoScroller.start(e.pageX, e.pageY),
                this.emitter.trigger("dragstart", e),
                !1 === this.touchScrollAllowed &&
                  this.pointer.cancelTouchScroll()));
          }),
          (t.prototype.tryStopDrag = function(e) {
            this.mirror.stop(
              this.mirrorNeedsRevert,
              this.stopDrag.bind(this, e)
            );
          }),
          (t.prototype.stopDrag = function(e) {
            (this.isDragging = !1), this.emitter.trigger("dragend", e);
          }),
          (t.prototype.setIgnoreMove = function(e) {
            this.pointer.shouldIgnoreMove = e;
          }),
          (t.prototype.setMirrorIsVisible = function(e) {
            this.mirror.setIsVisible(e);
          }),
          (t.prototype.setMirrorNeedsRevert = function(e) {
            this.mirrorNeedsRevert = e;
          }),
          (t.prototype.setAutoScrollEnabled = function(e) {
            this.autoScroller.isEnabled = e;
          }),
          t
        );
      })(ri),
      Do = (function() {
        function e(e) {
          (this.origRect = A(e)),
            (this.scrollCaches = B(e).map(function(e) {
              return new So(e, !0);
            }));
        }
        return (
          (e.prototype.destroy = function() {
            for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
              t[e].destroy();
            }
          }),
          (e.prototype.computeLeft = function() {
            for (
              var e = this.origRect.left, t = 0, r = this.scrollCaches;
              t < r.length;
              t++
            ) {
              var n = r[t];
              e += n.origScrollLeft - n.getScrollLeft();
            }
            return e;
          }),
          (e.prototype.computeTop = function() {
            for (
              var e = this.origRect.top, t = 0, r = this.scrollCaches;
              t < r.length;
              t++
            ) {
              var n = r[t];
              e += n.origScrollTop - n.getScrollTop();
            }
            return e;
          }),
          (e.prototype.isWithinClipping = function(e, t) {
            for (
              var r,
                n,
                i = {
                  left: e,
                  top: t
                },
                o = 0,
                s = this.scrollCaches;
              o < s.length;
              o++
            ) {
              var a = s[o];
              if (
                ((r = a.getEventTarget()),
                (n = void 0),
                "HTML" !== (n = r.tagName) &&
                  "BODY" !== n &&
                  !I(i, a.clientRect))
              )
                return !1;
            }
            return !0;
          }),
          e
        );
      })();
    var Co = (function() {
      function e(e, t) {
        var r = this;
        (this.useSubjectCenter = !1),
          (this.requireInitial = !0),
          (this.initialHit = null),
          (this.movingHit = null),
          (this.finalHit = null),
          (this.handlePointerDown = function(e) {
            var t = r.dragging;
            (r.initialHit = null),
              (r.movingHit = null),
              (r.finalHit = null),
              r.prepareHits(),
              r.processFirstCoord(e),
              r.initialHit || !r.requireInitial
                ? (t.setIgnoreMove(!1), r.emitter.trigger("pointerdown", e))
                : t.setIgnoreMove(!0);
          }),
          (this.handleDragStart = function(e) {
            r.emitter.trigger("dragstart", e), r.handleMove(e, !0);
          }),
          (this.handleDragMove = function(e) {
            r.emitter.trigger("dragmove", e), r.handleMove(e);
          }),
          (this.handlePointerUp = function(e) {
            r.releaseHits(), r.emitter.trigger("pointerup", e);
          }),
          (this.handleDragEnd = function(e) {
            r.movingHit && r.emitter.trigger("hitupdate", null, !0, e),
              (r.finalHit = r.movingHit),
              (r.movingHit = null),
              r.emitter.trigger("dragend", e);
          }),
          (this.droppableStore = t),
          e.emitter.on("pointerdown", this.handlePointerDown),
          e.emitter.on("dragstart", this.handleDragStart),
          e.emitter.on("dragmove", this.handleDragMove),
          e.emitter.on("pointerup", this.handlePointerUp),
          e.emitter.on("dragend", this.handleDragEnd),
          (this.dragging = e),
          (this.emitter = new Dr());
      }
      return (
        (e.prototype.processFirstCoord = function(e) {
          var t,
            r,
            n,
            i = {
              left: e.pageX,
              top: e.pageY
            },
            o = i,
            s = e.subjectEl;
          s !== document &&
            ((t = A(s)),
            (r = o),
            (n = t),
            (o = {
              left: Math.min(Math.max(r.left, n.left), n.right),
              top: Math.min(Math.max(r.top, n.top), n.bottom)
            }));
          var a,
            l,
            c = (this.initialHit = this.queryHitForOffset(o.left, o.top));
          if (c) {
            if (this.useSubjectCenter && t) {
              var d = k(t, c.rect);
              d &&
                (o = (function(e) {
                  return {
                    left: (e.left + e.right) / 2,
                    top: (e.top + e.bottom) / 2
                  };
                })(d));
            }
            this.coordAdjust =
              ((l = i),
              {
                left: (a = o).left - l.left,
                top: a.top - l.top
              });
          } else
            this.coordAdjust = {
              left: 0,
              top: 0
            };
        }),
        (e.prototype.handleMove = function(e, t) {
          var r = this.queryHitForOffset(
            e.pageX + this.coordAdjust.left,
            e.pageY + this.coordAdjust.top
          );
          (!t && Ro(this.movingHit, r)) ||
            ((this.movingHit = r), this.emitter.trigger("hitupdate", r, !1, e));
        }),
        (e.prototype.prepareHits = function() {
          this.offsetTrackers = Xe(this.droppableStore, function(e) {
            return e.component.buildPositionCaches(), new Do(e.el);
          });
        }),
        (e.prototype.releaseHits = function() {
          var e = this.offsetTrackers;
          for (var t in e) e[t].destroy();
          this.offsetTrackers = {};
        }),
        (e.prototype.queryHitForOffset = function(e, t) {
          var r = this.droppableStore,
            n = this.offsetTrackers,
            i = null;
          for (var o in r) {
            var s = r[o].component,
              a = n[o];
            if (a.isWithinClipping(e, t)) {
              var l = a.computeLeft(),
                c = a.computeTop(),
                d = e - l,
                u = t - c,
                p = a.origRect,
                h = p.right - p.left,
                f = p.bottom - p.top;
              if (d >= 0 && d < h && u >= 0 && u < f) {
                var v = s.queryHit(d, u, h, f);
                !v ||
                  (s.props.dateProfile &&
                    !pt(s.props.dateProfile.activeRange, v.dateSpan.range)) ||
                  (i && !(v.layer > i.layer)) ||
                  ((v.rect.left += l),
                  (v.rect.right += l),
                  (v.rect.top += c),
                  (v.rect.bottom += c),
                  (i = v));
              }
            }
          }
          return i;
        }),
        e
      );
    })();
    function Ro(e, t) {
      return (
        (!e && !t) ||
        (Boolean(e) === Boolean(t) &&
          ((r = e.dateSpan),
          (n = t.dateSpan),
          dt(r.range, n.range) &&
            r.allDay === n.allDay &&
            (function(e, t) {
              for (var r in t)
                if ("range" !== r && "allDay" !== r && e[r] !== t[r]) return !1;
              for (var r in e) if (!(r in t)) return !1;
              return !0;
            })(r, n)))
      );
      var r, n;
    }
    var xo = (function(e) {
        function t(t) {
          var r = e.call(this, t) || this;
          (r.handlePointerDown = function(e) {
            var t = r.dragging;
            t.setIgnoreMove(!r.component.isValidDateDownEl(t.pointer.downEl));
          }),
            (r.handleDragEnd = function(e) {
              var t = r.component;
              if (!r.dragging.pointer.wasTouchScroll) {
                var n = r.hitDragging,
                  i = n.initialHit,
                  o = n.finalHit;
                i &&
                  o &&
                  Ro(i, o) &&
                  t.calendar.triggerDateClick(
                    i.dateSpan,
                    i.dayEl,
                    t.view,
                    e.origEvent
                  );
              }
            });
          var n = t.component;
          (r.dragging = new To(n.el)), (r.dragging.autoScroller.isEnabled = !1);
          var i = (r.hitDragging = new Co(r.dragging, jn(t)));
          return (
            i.emitter.on("pointerdown", r.handlePointerDown),
            i.emitter.on("dragend", r.handleDragEnd),
            r
          );
        }
        return (
          co(t, e),
          (t.prototype.destroy = function() {
            this.dragging.destroy();
          }),
          t
        );
      })(Un),
      Io = (function(e) {
        function t(t) {
          var r = e.call(this, t) || this;
          (r.dragSelection = null),
            (r.handlePointerDown = function(e) {
              var t = r,
                n = t.component,
                i = t.dragging,
                o =
                  n.opt("selectable") &&
                  n.isValidDateDownEl(e.origEvent.target);
              i.setIgnoreMove(!o),
                (i.delay = e.isTouch
                  ? (function(e) {
                      var t = e.opt("selectLongPressDelay");
                      null == t && (t = e.opt("longPressDelay"));
                      return t;
                    })(n)
                  : null);
            }),
            (r.handleDragStart = function(e) {
              r.component.calendar.unselect(e);
            }),
            (r.handleHitUpdate = function(e, t) {
              var n = r.component.calendar,
                i = null,
                o = !1;
              e &&
                (((i = (function(e, t, r) {
                  var n = e.dateSpan,
                    i = t.dateSpan,
                    o = [
                      n.range.start,
                      n.range.end,
                      i.range.start,
                      i.range.end
                    ];
                  o.sort(He);
                  for (var s = {}, a = 0, l = r; a < l.length; a++) {
                    var c = (0, l[a])(e, t);
                    if (!1 === c) return null;
                    c && uo(s, c);
                  }
                  return (
                    (s.range = {
                      start: o[0],
                      end: o[3]
                    }),
                    (s.allDay = n.allDay),
                    s
                  );
                })(
                  r.hitDragging.initialHit,
                  e,
                  n.pluginSystem.hooks.dateSelectionTransformers
                )) &&
                  r.component.isDateSelectionValid(i)) ||
                  ((o = !0), (i = null))),
                i
                  ? n.dispatch({
                      type: "SELECT_DATES",
                      selection: i
                    })
                  : t ||
                    n.dispatch({
                      type: "UNSELECT_DATES"
                    }),
                o ? Ee() : be(),
                t || (r.dragSelection = i);
            }),
            (r.handlePointerUp = function(e) {
              r.dragSelection &&
                (r.component.calendar.triggerDateSelect(r.dragSelection, e),
                (r.dragSelection = null));
            });
          var n = t.component,
            i = (r.dragging = new To(n.el));
          (i.touchScrollAllowed = !1),
            (i.minDistance = n.opt("selectMinDistance") || 0),
            (i.autoScroller.isEnabled = n.opt("dragScroll"));
          var o = (r.hitDragging = new Co(r.dragging, jn(t)));
          return (
            o.emitter.on("pointerdown", r.handlePointerDown),
            o.emitter.on("dragstart", r.handleDragStart),
            o.emitter.on("hitupdate", r.handleHitUpdate),
            o.emitter.on("pointerup", r.handlePointerUp),
            r
          );
        }
        return (
          co(t, e),
          (t.prototype.destroy = function() {
            this.dragging.destroy();
          }),
          t
        );
      })(Un);
    var ko = (function(e) {
      function t(r) {
        var n = e.call(this, r) || this;
        (n.subjectSeg = null),
          (n.isDragging = !1),
          (n.eventRange = null),
          (n.relevantEvents = null),
          (n.receivingCalendar = null),
          (n.validMutation = null),
          (n.mutatedRelevantEvents = null),
          (n.handlePointerDown = function(e) {
            var t = e.origEvent.target,
              r = n,
              i = r.component,
              o = r.dragging,
              s = o.mirror,
              a = i.calendar,
              l = (n.subjectSeg = Nt(e.subjectEl)),
              c = (n.eventRange = l.eventRange).instance.instanceId;
            (n.relevantEvents = rt(a.state.eventStore, c)),
              (o.minDistance = e.isTouch ? 0 : i.opt("eventDragMinDistance")),
              (o.delay =
                e.isTouch && c !== i.props.eventSelection
                  ? (function(e) {
                      var t = e.opt("eventLongPressDelay");
                      null == t && (t = e.opt("longPressDelay"));
                      return t;
                    })(i)
                  : null),
              (s.parentNode = a.el),
              (s.revertDuration = i.opt("dragRevertDuration"));
            var d = i.isValidSegDownEl(t) && !E(t, ".fc-resizer");
            o.setIgnoreMove(!d),
              (n.isDragging =
                d && e.subjectEl.classList.contains("fc-draggable"));
          }),
          (n.handleDragStart = function(e) {
            var t = n.component.calendar,
              r = n.eventRange,
              i = r.instance.instanceId;
            e.isTouch
              ? i !== n.component.props.eventSelection &&
                t.dispatch({
                  type: "SELECT_EVENT",
                  eventInstanceId: i
                })
              : t.dispatch({
                  type: "UNSELECT_EVENT"
                }),
              n.isDragging &&
                (t.unselect(e),
                t.publiclyTrigger("eventDragStart", [
                  {
                    el: n.subjectSeg.el,
                    event: new _t(t, r.def, r.instance),
                    jsEvent: e.origEvent,
                    view: n.component.view
                  }
                ]));
          }),
          (n.handleHitUpdate = function(e, t) {
            if (n.isDragging) {
              var r = n.relevantEvents,
                i = n.hitDragging.initialHit,
                o = n.component.calendar,
                s = null,
                a = null,
                l = null,
                c = !1,
                d = {
                  affectedEvents: r,
                  mutatedEvents: {
                    defs: {},
                    instances: {}
                  },
                  isEvent: !0,
                  origSeg: n.subjectSeg
                };
              if (e) {
                var u = e.component;
                o === (s = u.calendar) ||
                (u.opt("editable") && u.opt("droppable"))
                  ? (a = (function(e, t, r) {
                      var n = e.dateSpan,
                        i = t.dateSpan,
                        o = n.range.start,
                        s = i.range.start,
                        a = {};
                      n.allDay !== i.allDay &&
                        ((a.allDay = i.allDay),
                        (a.hasEnd = t.component.opt("allDayMaintainDuration")),
                        i.allDay && (o = K(o)));
                      var l = je(
                        o,
                        s,
                        e.component.dateEnv,
                        e.component === t.component
                          ? e.component.largeUnit
                          : null
                      );
                      l.milliseconds && (a.allDay = !1);
                      for (
                        var c = {
                            datesDelta: l,
                            standardProps: a
                          },
                          d = 0,
                          u = r;
                        d < u.length;
                        d++
                      ) {
                        (0, u[d])(c, e, t);
                      }
                      return c;
                    })(
                      i,
                      e,
                      s.pluginSystem.hooks.eventDragMutationMassagers
                    )) &&
                    ((l = Ut(r, s.eventUiBases, a, s)),
                    (d.mutatedEvents = l),
                    u.isInteractionValid(d) ||
                      ((c = !0),
                      (a = null),
                      (l = null),
                      (d.mutatedEvents = {
                        defs: {},
                        instances: {}
                      })))
                  : (s = null);
              }
              n.displayDrag(s, d),
                c ? Ee() : be(),
                t ||
                  (o === s && Ro(i, e) && (a = null),
                  n.dragging.setMirrorNeedsRevert(!a),
                  n.dragging.setMirrorIsVisible(
                    !e || !document.querySelector(".fc-mirror")
                  ),
                  (n.receivingCalendar = s),
                  (n.validMutation = a),
                  (n.mutatedRelevantEvents = l));
            }
          }),
          (n.handlePointerUp = function() {
            n.isDragging || n.cleanup();
          }),
          (n.handleDragEnd = function(e) {
            if (n.isDragging) {
              var t = n.component.calendar,
                r = n.component.view,
                i = n,
                o = i.receivingCalendar,
                s = i.validMutation,
                a = n.eventRange.def,
                l = n.eventRange.instance,
                c = new _t(t, a, l),
                d = n.relevantEvents,
                u = n.mutatedRelevantEvents,
                p = n.hitDragging.finalHit;
              if (
                (n.clearDrag(),
                t.publiclyTrigger("eventDragStop", [
                  {
                    el: n.subjectSeg.el,
                    event: c,
                    jsEvent: e.origEvent,
                    view: r
                  }
                ]),
                s)
              ) {
                if (o === t) {
                  t.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: u
                  });
                  for (
                    var h = {},
                      f = 0,
                      v = t.pluginSystem.hooks.eventDropTransformers;
                    f < v.length;
                    f++
                  ) {
                    var g = v[f];
                    uo(h, g(s, t));
                  }
                  var y = uo({}, h, {
                    el: e.subjectEl,
                    delta: s.datesDelta,
                    oldEvent: c,
                    event: new _t(
                      t,
                      u.defs[a.defId],
                      l ? u.instances[l.instanceId] : null
                    ),
                    revert: function() {
                      t.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: d
                      });
                    },
                    jsEvent: e.origEvent,
                    view: r
                  });
                  t.publiclyTrigger("eventDrop", [y]);
                } else if (o) {
                  t.publiclyTrigger("eventLeave", [
                    {
                      draggedEl: e.subjectEl,
                      event: c,
                      view: r
                    }
                  ]),
                    t.dispatch({
                      type: "REMOVE_EVENT_INSTANCES",
                      instances: n.mutatedRelevantEvents.instances
                    }),
                    o.dispatch({
                      type: "MERGE_EVENTS",
                      eventStore: n.mutatedRelevantEvents
                    }),
                    e.isTouch &&
                      o.dispatch({
                        type: "SELECT_EVENT",
                        eventInstanceId: l.instanceId
                      });
                  var m = uo({}, o.buildDatePointApi(p.dateSpan), {
                    draggedEl: e.subjectEl,
                    jsEvent: e.origEvent,
                    view: p.component
                  });
                  o.publiclyTrigger("drop", [m]),
                    o.publiclyTrigger("eventReceive", [
                      {
                        draggedEl: e.subjectEl,
                        event: new _t(
                          o,
                          u.defs[a.defId],
                          u.instances[l.instanceId]
                        ),
                        view: p.component
                      }
                    ]);
                }
              } else t.publiclyTrigger("_noEventDrop");
            }
            n.cleanup();
          });
        var i = n.component,
          o = (n.dragging = new To(i.el));
        (o.pointer.selector = t.SELECTOR),
          (o.touchScrollAllowed = !1),
          (o.autoScroller.isEnabled = i.opt("dragScroll"));
        var s = (n.hitDragging = new Co(n.dragging, Gn));
        return (
          (s.useSubjectCenter = r.useEventCenter),
          s.emitter.on("pointerdown", n.handlePointerDown),
          s.emitter.on("dragstart", n.handleDragStart),
          s.emitter.on("hitupdate", n.handleHitUpdate),
          s.emitter.on("pointerup", n.handlePointerUp),
          s.emitter.on("dragend", n.handleDragEnd),
          n
        );
      }
      return (
        co(t, e),
        (t.prototype.destroy = function() {
          this.dragging.destroy();
        }),
        (t.prototype.displayDrag = function(e, t) {
          var r = this.component.calendar,
            n = this.receivingCalendar;
          n &&
            n !== e &&
            (n === r
              ? n.dispatch({
                  type: "SET_EVENT_DRAG",
                  state: {
                    affectedEvents: t.affectedEvents,
                    mutatedEvents: {
                      defs: {},
                      instances: {}
                    },
                    isEvent: !0,
                    origSeg: t.origSeg
                  }
                })
              : n.dispatch({
                  type: "UNSET_EVENT_DRAG"
                })),
            e &&
              e.dispatch({
                type: "SET_EVENT_DRAG",
                state: t
              });
        }),
        (t.prototype.clearDrag = function() {
          var e = this.component.calendar,
            t = this.receivingCalendar;
          t &&
            t.dispatch({
              type: "UNSET_EVENT_DRAG"
            }),
            e !== t &&
              e.dispatch({
                type: "UNSET_EVENT_DRAG"
              });
        }),
        (t.prototype.cleanup = function() {
          (this.subjectSeg = null),
            (this.isDragging = !1),
            (this.eventRange = null),
            (this.relevantEvents = null),
            (this.receivingCalendar = null),
            (this.validMutation = null),
            (this.mutatedRelevantEvents = null);
        }),
        (t.SELECTOR = ".fc-draggable, .fc-resizable"),
        t
      );
    })(Un);
    var Mo = (function(e) {
      function t(t) {
        var r = e.call(this, t) || this;
        (r.draggingSeg = null),
          (r.eventRange = null),
          (r.relevantEvents = null),
          (r.validMutation = null),
          (r.mutatedRelevantEvents = null),
          (r.handlePointerDown = function(e) {
            var t = r.component,
              n = r.querySeg(e),
              i = (r.eventRange = n.eventRange);
            (r.dragging.minDistance = t.opt("eventDragMinDistance")),
              r.dragging.setIgnoreMove(
                !r.component.isValidSegDownEl(e.origEvent.target) ||
                  (e.isTouch &&
                    r.component.props.eventSelection !== i.instance.instanceId)
              );
          }),
          (r.handleDragStart = function(e) {
            var t = r.component.calendar,
              n = r.eventRange;
            (r.relevantEvents = rt(
              t.state.eventStore,
              r.eventRange.instance.instanceId
            )),
              (r.draggingSeg = r.querySeg(e)),
              t.unselect(),
              t.publiclyTrigger("eventResizeStart", [
                {
                  el: r.draggingSeg.el,
                  event: new _t(t, n.def, n.instance),
                  jsEvent: e.origEvent,
                  view: r.component.view
                }
              ]);
          }),
          (r.handleHitUpdate = function(e, t, n) {
            var i = r.component.calendar,
              o = r.relevantEvents,
              s = r.hitDragging.initialHit,
              a = r.eventRange.instance,
              l = null,
              c = null,
              d = !1,
              u = {
                affectedEvents: o,
                mutatedEvents: {
                  defs: {},
                  instances: {}
                },
                isEvent: !0,
                origSeg: r.draggingSeg
              };
            e &&
              (l = (function(e, t, r, n, i) {
                for (
                  var o = e.component.dateEnv,
                    s = e.dateSpan.range.start,
                    a = t.dateSpan.range.start,
                    l = je(s, a, o, e.component.largeUnit),
                    c = {},
                    d = 0,
                    u = i;
                  d < u.length;
                  d++
                ) {
                  var p = (0, u[d])(e, t);
                  if (!1 === p) return null;
                  p && uo(c, p);
                }
                if (r) {
                  if (o.add(n.start, l) < n.end) return (c.startDelta = l), c;
                } else if (o.add(n.end, l) > n.start)
                  return (c.endDelta = l), c;
                return null;
              })(
                s,
                e,
                n.subjectEl.classList.contains("fc-start-resizer"),
                a.range,
                i.pluginSystem.hooks.eventResizeJoinTransforms
              )),
              l &&
                ((c = Ut(o, i.eventUiBases, l, i)),
                (u.mutatedEvents = c),
                r.component.isInteractionValid(u) ||
                  ((d = !0), (l = null), (c = null), (u.mutatedEvents = null))),
              c
                ? i.dispatch({
                    type: "SET_EVENT_RESIZE",
                    state: u
                  })
                : i.dispatch({
                    type: "UNSET_EVENT_RESIZE"
                  }),
              d ? Ee() : be(),
              t ||
                (l && Ro(s, e) && (l = null),
                (r.validMutation = l),
                (r.mutatedRelevantEvents = c));
          }),
          (r.handleDragEnd = function(e) {
            var t = r.component.calendar,
              n = r.component.view,
              i = r.eventRange.def,
              o = r.eventRange.instance,
              s = new _t(t, i, o),
              a = r.relevantEvents,
              l = r.mutatedRelevantEvents;
            t.publiclyTrigger("eventResizeStop", [
              {
                el: r.draggingSeg.el,
                event: s,
                jsEvent: e.origEvent,
                view: n
              }
            ]),
              r.validMutation
                ? (t.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: l
                  }),
                  t.publiclyTrigger("eventResize", [
                    {
                      el: r.draggingSeg.el,
                      startDelta: r.validMutation.startDelta || ae(0),
                      endDelta: r.validMutation.endDelta || ae(0),
                      prevEvent: s,
                      event: new _t(
                        t,
                        l.defs[i.defId],
                        o ? l.instances[o.instanceId] : null
                      ),
                      revert: function() {
                        t.dispatch({
                          type: "MERGE_EVENTS",
                          eventStore: a
                        });
                      },
                      jsEvent: e.origEvent,
                      view: n
                    }
                  ]))
                : t.publiclyTrigger("_noEventResize"),
              (r.draggingSeg = null),
              (r.relevantEvents = null),
              (r.validMutation = null);
          });
        var n = t.component,
          i = (r.dragging = new To(n.el));
        (i.pointer.selector = ".fc-resizer"),
          (i.touchScrollAllowed = !1),
          (i.autoScroller.isEnabled = n.opt("dragScroll"));
        var o = (r.hitDragging = new Co(r.dragging, jn(t)));
        return (
          o.emitter.on("pointerdown", r.handlePointerDown),
          o.emitter.on("dragstart", r.handleDragStart),
          o.emitter.on("hitupdate", r.handleHitUpdate),
          o.emitter.on("dragend", r.handleDragEnd),
          r
        );
      }
      return (
        co(t, e),
        (t.prototype.destroy = function() {
          this.dragging.destroy();
        }),
        (t.prototype.querySeg = function(e) {
          return Nt(E(e.subjectEl, this.component.fgSegSelector));
        }),
        t
      );
    })(Un);
    var Po = (function() {
        function e(e) {
          var t = this;
          (this.isRecentPointerDateSelect = !1),
            (this.onSelect = function(e) {
              e.jsEvent && (t.isRecentPointerDateSelect = !0);
            }),
            (this.onDocumentPointerUp = function(e) {
              var r = t,
                n = r.calendar,
                i = r.documentPointer,
                o = n.state;
              if (!i.wasTouchScroll) {
                if (o.dateSelection && !t.isRecentPointerDateSelect) {
                  var s = n.viewOpt("unselectAuto"),
                    a = n.viewOpt("unselectCancel");
                  !s || (s && E(i.downEl, a)) || n.unselect(e);
                }
                o.eventSelection &&
                  !E(i.downEl, ko.SELECTOR) &&
                  n.dispatch({
                    type: "UNSELECT_EVENT"
                  });
              }
              t.isRecentPointerDateSelect = !1;
            }),
            (this.calendar = e);
          var r = (this.documentPointer = new vo(document));
          (r.shouldIgnoreMove = !0),
            (r.shouldWatchScroll = !1),
            r.emitter.on("pointerup", this.onDocumentPointerUp),
            e.on("select", this.onSelect);
        }
        return (
          (e.prototype.destroy = function() {
            this.calendar.off("select", this.onSelect),
              this.documentPointer.destroy();
          }),
          e
        );
      })(),
      Ho = (function() {
        function e(e, t) {
          var r = this;
          (this.receivingCalendar = null),
            (this.droppableEvent = null),
            (this.suppliedDragMeta = null),
            (this.dragMeta = null),
            (this.handleDragStart = function(e) {
              r.dragMeta = r.buildDragMeta(e.subjectEl);
            }),
            (this.handleHitUpdate = function(e, t, n) {
              var i = r.hitDragging.dragging,
                o = null,
                s = null,
                a = !1,
                l = {
                  affectedEvents: {
                    defs: {},
                    instances: {}
                  },
                  mutatedEvents: {
                    defs: {},
                    instances: {}
                  },
                  isEvent: r.dragMeta.create,
                  origSeg: null
                };
              e &&
                ((o = e.component.calendar),
                r.canDropElOnCalendar(n.subjectEl, o) &&
                  ((s = (function(e, t, r) {
                    for (
                      var n = uo({}, t.leftoverProps),
                        i = 0,
                        o = r.pluginSystem.hooks.externalDefTransforms;
                      i < o.length;
                      i++
                    ) {
                      var s = o[i];
                      uo(n, s(e, t));
                    }
                    var a = pr(
                        n,
                        t.sourceId,
                        e.allDay,
                        r.opt("forceEventDuration") || Boolean(t.duration),
                        r
                      ),
                      l = e.range.start;
                    e.allDay &&
                      t.startTime &&
                      (l = r.dateEnv.add(l, t.startTime));
                    var c = t.duration
                        ? r.dateEnv.add(l, t.duration)
                        : r.getDefaultEventEnd(e.allDay, l),
                      d = hr(a.defId, {
                        start: l,
                        end: c
                      });
                    return {
                      def: a,
                      instance: d
                    };
                  })(e.dateSpan, r.dragMeta, o)),
                  (l.mutatedEvents = et(s)),
                  (a = !qt(l, o)) &&
                    ((l.mutatedEvents = {
                      defs: {},
                      instances: {}
                    }),
                    (s = null)))),
                r.displayDrag(o, l),
                i.setMirrorIsVisible(
                  t || !s || !document.querySelector(".fc-mirror")
                ),
                a ? Ee() : be(),
                t ||
                  (i.setMirrorNeedsRevert(!s),
                  (r.receivingCalendar = o),
                  (r.droppableEvent = s));
            }),
            (this.handleDragEnd = function(e) {
              var t = r,
                n = t.receivingCalendar,
                i = t.droppableEvent;
              if ((r.clearDrag(), n && i)) {
                var o = r.hitDragging.finalHit,
                  s = o.component.view,
                  a = r.dragMeta,
                  l = uo({}, n.buildDatePointApi(o.dateSpan), {
                    draggedEl: e.subjectEl,
                    jsEvent: e.origEvent,
                    view: s
                  });
                n.publiclyTrigger("drop", [l]),
                  a.create &&
                    (n.dispatch({
                      type: "MERGE_EVENTS",
                      eventStore: et(i)
                    }),
                    e.isTouch &&
                      n.dispatch({
                        type: "SELECT_EVENT",
                        eventInstanceId: i.instance.instanceId
                      }),
                    n.publiclyTrigger("eventReceive", [
                      {
                        draggedEl: e.subjectEl,
                        event: new _t(n, i.def, i.instance),
                        view: s
                      }
                    ]));
              }
              (r.receivingCalendar = null), (r.droppableEvent = null);
            });
          var n = (this.hitDragging = new Co(e, Gn));
          (n.requireInitial = !1),
            n.emitter.on("dragstart", this.handleDragStart),
            n.emitter.on("hitupdate", this.handleHitUpdate),
            n.emitter.on("dragend", this.handleDragEnd),
            (this.suppliedDragMeta = t);
        }
        return (
          (e.prototype.buildDragMeta = function(e) {
            return "object" == typeof this.suppliedDragMeta
              ? oi(this.suppliedDragMeta)
              : "function" == typeof this.suppliedDragMeta
              ? oi(this.suppliedDragMeta(e))
              : oi(
                  (t = (function(e, t) {
                    var r = Yr.dataAttrPrefix,
                      n = (r ? r + "-" : "") + t;
                    return e.getAttribute("data-" + n) || "";
                  })(e, "event"))
                    ? JSON.parse(t)
                    : {
                        create: !1
                      }
                );
            var t;
          }),
          (e.prototype.displayDrag = function(e, t) {
            var r = this.receivingCalendar;
            r &&
              r !== e &&
              r.dispatch({
                type: "UNSET_EVENT_DRAG"
              }),
              e &&
                e.dispatch({
                  type: "SET_EVENT_DRAG",
                  state: t
                });
          }),
          (e.prototype.clearDrag = function() {
            this.receivingCalendar &&
              this.receivingCalendar.dispatch({
                type: "UNSET_EVENT_DRAG"
              });
          }),
          (e.prototype.canDropElOnCalendar = function(e, t) {
            var r = t.opt("dropAccept");
            return "function" == typeof r
              ? r(e)
              : "string" != typeof r || !r || Boolean(b(e, r));
          }),
          e
        );
      })();
    Yr.dataAttrPrefix = "";
    var _o = (function() {
        function e(e, t) {
          var r = this;
          void 0 === t && (t = {}),
            (this.handlePointerDown = function(e) {
              var t = r.dragging,
                n = r.settings,
                i = n.minDistance,
                o = n.longPressDelay;
              (t.minDistance =
                null != i ? i : e.isTouch ? 0 : Zr.eventDragMinDistance),
                (t.delay = e.isTouch ? (null != o ? o : Zr.longPressDelay) : 0);
            }),
            (this.handleDragStart = function(e) {
              e.isTouch &&
                r.dragging.delay &&
                e.subjectEl.classList.contains("fc-event") &&
                r.dragging.mirror.getMirrorEl().classList.add("fc-selected");
            }),
            (this.settings = t);
          var n = (this.dragging = new To(e));
          (n.touchScrollAllowed = !1),
            null != t.itemSelector && (n.pointer.selector = t.itemSelector),
            null != t.appendTo && (n.mirror.parentNode = t.appendTo),
            n.emitter.on("pointerdown", this.handlePointerDown),
            n.emitter.on("dragstart", this.handleDragStart),
            new Ho(n, t.eventData);
        }
        return (
          (e.prototype.destroy = function() {
            this.dragging.destroy();
          }),
          e
        );
      })(),
      Lo = (function(e) {
        function t(t) {
          var r = e.call(this, t) || this;
          (r.shouldIgnoreMove = !1),
            (r.mirrorSelector = ""),
            (r.currentMirrorEl = null),
            (r.handlePointerDown = function(e) {
              r.emitter.trigger("pointerdown", e),
                r.shouldIgnoreMove || r.emitter.trigger("dragstart", e);
            }),
            (r.handlePointerMove = function(e) {
              r.shouldIgnoreMove || r.emitter.trigger("dragmove", e);
            }),
            (r.handlePointerUp = function(e) {
              r.emitter.trigger("pointerup", e),
                r.shouldIgnoreMove || r.emitter.trigger("dragend", e);
            });
          var n = (r.pointer = new vo(t));
          return (
            n.emitter.on("pointerdown", r.handlePointerDown),
            n.emitter.on("pointermove", r.handlePointerMove),
            n.emitter.on("pointerup", r.handlePointerUp),
            r
          );
        }
        return (
          co(t, e),
          (t.prototype.destroy = function() {
            this.pointer.destroy();
          }),
          (t.prototype.setIgnoreMove = function(e) {
            this.shouldIgnoreMove = e;
          }),
          (t.prototype.setMirrorIsVisible = function(e) {
            if (e)
              this.currentMirrorEl &&
                ((this.currentMirrorEl.style.visibility = ""),
                (this.currentMirrorEl = null));
            else {
              var t = this.mirrorSelector
                ? document.querySelector(this.mirrorSelector)
                : null;
              t &&
                ((this.currentMirrorEl = t), (t.style.visibility = "hidden"));
            }
          }),
          t
        );
      })(ri),
      Oo =
        ((function() {
          function e(e, t) {
            var r = document;
            e === document || e instanceof Element
              ? ((r = e), (t = t || {}))
              : (t = e || {});
            var n = (this.dragging = new Lo(r));
            "string" == typeof t.itemSelector
              ? (n.pointer.selector = t.itemSelector)
              : r === document && (n.pointer.selector = "[data-event]"),
              "string" == typeof t.mirrorSelector &&
                (n.mirrorSelector = t.mirrorSelector),
              new Ho(n, t.eventData);
          }
          e.prototype.destroy = function() {
            this.dragging.destroy();
          };
        })(),
        Nr({
          componentInteractions: [xo, Io, ko, Mo],
          calendarInteractions: [Po],
          elementDraggingImpl: To
        })),
      Ao = (function() {
        function e() {
          (this.title = ""),
            (this.controlHtml = ""),
            (this.contentHtml = '<div class="demo-calendar"></div>');
        }
        return (
          (e.prototype.initSafely = function(e, t, r) {
            var n = this.init(e, t, r);
            n instanceof qn && (n.render(), (this.calendar = n));
          }),
          (e.prototype.init = function(e, t, r) {}),
          (e.prototype.destroy = function() {
            this.calendar && (this.calendar.destroy(), (this.calendar = null));
          }),
          e
        );
      })(),
      No =
        (r(1),
        r(2),
        r(3),
        r(4),
        (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.title = "Drag-n-Drop Events"),
              (t.controlHtml =
                "\n    <p>Drag these onto the calendar:</p>\n    <div class='fc-event fc-draggable'>Event 1</div>\n    <div class='fc-event fc-draggable'>Event 2</div>\n    <p><a href='/docs/external-dragging' class='more-link'>More info</a></p>\n  "),
              t
            );
          }
          return (
            s(t, e),
            (t.prototype.init = function(e, t, r) {
              var n = new _o(e, {
                  itemSelector: ".fc-event",
                  eventData: function(e) {
                    return {
                      title: e.innerText.trim()
                    };
                  }
                }),
                i = new qn(r, {
                  timeZone: "UTC",
                  plugins: [Oo, Ai, to, ao],
                  header: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                  },
                  navLinks: !0,
                  editable: !0,
                  eventLimit: !0,
                  events: "/demo-events.json?overload-day"
                });
              i.render(), (this.draggable = n), (this.calendar = i);
            }),
            (t.prototype.destroy = function() {
              this.draggable.destroy(), this.calendar.destroy();
            }),
            t
          );
        })(Ao)),
      zo = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.title = "Selectable Dates"),
            (t.controlHtml =
              "\n    <p>\n      Click and drag your pointer over some dates.\n      You will be asked to create an event via the API.\n      <a href='/docs/date-clicking-selecting' class='more-link'>Learn more</a>\n    </p>\n  "),
            t
          );
        }
        return (
          s(t, e),
          (t.prototype.init = function(e, t, r) {
            var n = new qn(r, {
              timeZone: "UTC",
              plugins: [Oo, Ai, to],
              header: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              },
              navLinks: !0,
              eventLimit: !0,
              editable: !0,
              selectable: !0,
              selectMirror: !0,
              select: function(e) {
                var t = prompt(
                  "Create an event from " +
                    e.startStr +
                    " to " +
                    e.endStr +
                    " (excl).\nEnter a title:"
                );
                (t || e.view.type.match(/^timeGrid/)) && n.unselect(),
                  t &&
                    n.addEvent({
                      title: t,
                      start: e.start,
                      end: e.end
                    });
              }
            });
            return n;
          }),
          t
        );
      })(Ao),
      Bo = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.title = "Background Events"),
            (t.controlHtml =
              "\n    <p>\n      Display <a href='/docs/background-events'>background events</a>.\n    </p>\n    <p>\n      Also, control where events are\n      <a href='/docs/eventOverlap'>allowed to go</a>\n      (the <span style='color:#83ef70'>green areas</span> are prohibited).\n    </p>\n  "),
            t
          );
        }
        return (
          s(t, e),
          (t.prototype.init = function(e, t, r) {
            var n = new Date().toISOString().match(/^\d\d\d\d-\d\d/)[0];
            return new qn(r, {
              plugins: [Oo, to, Ai],
              header: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek"
              },
              defaultView: "dayGridMonth",
              defaultDate: n + "-12",
              businessHours: !0,
              editable: !0,
              events: [
                {
                  title: "Meeting",
                  start: n + "-03T16:00:00",
                  constraint: "businessHours"
                },
                {
                  title: "Meeting",
                  start: n + "-16T09:00:00"
                },
                {
                  title: "Conference Call",
                  start: n + "-20T08:00:00"
                },
                {
                  title: "Party",
                  start: n + "-29T20:00:00"
                },
                {
                  start: n + "-24",
                  end: n + "-28",
                  overlap: !1,
                  rendering: "background"
                },
                {
                  start: n + "-06",
                  end: n + "-08",
                  overlap: !1,
                  rendering: "background"
                },
                {
                  daysOfWeek: [3, 4],
                  startTime: "10:00",
                  endTime: "16:00",
                  overlap: !1,
                  rendering: "background"
                }
              ]
            });
          }),
          t
        );
      })(Ao),
      Uo = /^\w+:\/\//,
      jo = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.title = "Theming"),
            (t.controlHtml =
              "\n    <p><label for='theme-select'>Change the theme:</label></p>\n    <p>\n    <select id='theme-select' name='theme'>\n      <option value='fullcalendar'>Default FullCalendar Theme</option>\n      <option value='bootstrap' selected>Default Bootstrap Theme</option>\n      <option value='cerulean'>Cerulean</option>\n      <option value='cosmo'>Cosmo</option>\n      <option value='cyborg'>Cyborg</option>\n      <option value='darkly'>Darkly</option>\n      <option value='flatly'>Flatly</option>\n      <option value='journal'>Journal</option>\n      <option value='litera'>Litera</option>\n      <option value='lumen'>Lumen</option>\n      <option value='lux'>Lux</option>\n      <option value='materia'>Materia</option>\n      <option value='minty'>Minty</option>\n      <option value='pulse'>Pulse</option>\n      <option value='sandstone'>Sandstone</option>\n      <option value='simplex'>Simplex</option>\n      <option value='sketchy'>Sketchy</option>\n      <option value='slate'>Slate</option>\n      <option value='solar'>Solar</option>\n      <option value='spacelab'>Spacelab</option>\n      <option value='superhero'>Superhero</option>\n      <option value='united'>United</option>\n      <option value='yeti'>Yeti</option>\n    </select>\n    </p>\n    <p><a href='/docs/theming' class='more-link'>More info</a></p>\n  "),
            (t.contentHtml =
              "\n    <iframe src='about:blank' class='demos__main-iframe'></iframe>\n  "),
            t
          );
        }
        return (
          s(t, e),
          (t.prototype.init = function(e, t) {
            var r = t.querySelector("iframe"),
              n = r.contentWindow.document;
            n.open(),
              n.write(
                "\n<!DOCTYPE html>\n<head>\n<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />\n<script>isCalendarThemeRender = true</script>\n" +
                  i('link[rel="stylesheet"]')
                    .map(function(e) {
                      return e.getAttribute("href");
                    })
                    .map(function(e) {
                      return '<link rel="stylesheet" href="' + e + '" />';
                    })
                    .join("\n") +
                  "\n" +
                  i("script[src]")
                    .map(function(e) {
                      return e.getAttribute("src");
                    })
                    .filter(Go)
                    .map(function(e) {
                      return '<script src="' + e + '"></script>';
                    })
                    .join("\n") +
                  "\n<style>\nbody, html { margin: 0; padding: 0; overflow: hidden }\n</style>\n</head>\n<body>\n<div id='calendar' class='demo-calendar'></div>\n</body>\n</html>\n"
              ),
              n.close(),
              n.addEventListener("DOMContentLoaded", s);
            var o = e.querySelector('select[name="theme"]');
            function s() {
              var e,
                t,
                n = o.value;
              "fullcalendar" === n
                ? ((e = "standard"), (t = ""))
                : ((e = "bootstrap"), (t = "bootstrap" === n ? "" : n)),
                r.contentWindow.renderCalendarTheme(e, t);
            }
            o.addEventListener("change", s);
          }),
          t
        );
      })(Ao);
    function Go(e) {
      return !Uo.test(e);
    }
    var Vo = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.title = "Time Zones"),
            (t.controlHtml =
              "\n    <p>\n      <label for='time-zone-select'>\n        Select a different time zone:\n      </label>\n    </p>\n    <p>\n      <select>\n        <option value='UTC'>UTC</option>\n      </select>\n    </p>\n    <p><a href='/docs/timeZone' class='more-link'>More info</a></p>\n  "),
            t
          );
        }
        return (
          s(t, e),
          (t.prototype.init = function(e, t, r) {
            var n = e.querySelector("select"),
              i = new qn(r, {
                plugins: [Oo, Ai, to, ao],
                defaultView: "timeGridWeek",
                timeZone: "Europe/Luxembourg",
                header: {
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                },
                navLinks: !0,
                editable: !0,
                selectable: !0,
                eventLimit: !0,
                events: "/demo-events.json",
                loading: function(e) {},
                eventTimeFormat: {
                  hour: "numeric",
                  minute: "2-digit",
                  timeZoneName: "short"
                }
              });
            return (
              jr(
                "GET",
                "/demo-timezones.json",
                {},
                function(e) {
                  e.forEach(function(e) {
                    if ("UTC" !== e) {
                      var t = document.createElement("option");
                      (t.value = e),
                        (t.innerText = e),
                        n.appendChild(t),
                        (n.value = "Europe/Luxembourg");
                    }
                  });
                },
                function() {}
              ),
              n.addEventListener("change", function() {
                i.setOption("timeZone", this.value);
              }),
              i
            );
          }),
          t
        );
      })(Ao),
      Wo = r(10),
      Fo = r.n(Wo),
      qo = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.title = "Locales"),
            (t.controlHtml =
              "\n    <p>\n      <label for='locale-select'>\n        Select a new locale:\n      </lable>\n    </p>\n    <p><select id='locale-select'></select></p>\n    <p><a href='/docs/localization' class='more-link'>More info</a></p>\n  "),
            t
          );
        }
        return (
          s(t, e),
          (t.prototype.init = function(e, t, r) {
            var n = e.querySelector("select"),
              i = new qn(r, {
                plugins: [Oo, Ai, to, ao],
                header: {
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                },
                locales: Fo.a,
                locale: "bg",
                buttonIcons: !1,
                weekNumbers: !0,
                navLinks: !0,
                editable: !0,
                eventLimit: !0,
                events: "/demo-events.json?overload-day"
              });
            return (
              i.getAvailableLocaleCodes().forEach(function(e) {
                var t = document.createElement("option");
                (t.value = e),
                  (t.selected = "bg" == e),
                  (t.innerText = e),
                  n.appendChild(t);
              }),
              n.addEventListener("change", function() {
                this.value && i.setOption("locale", this.value);
              }),
              i
            );
          }),
          t
        );
      })(Ao),
      Yo = function(e, t) {
        return (Yo =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
    function Zo(e, t) {
      function r() {
        this.constructor = e;
      }
      Yo(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var Xo,
      Ko = function() {
        return (Ko =
          Object.assign ||
          function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      Jo = (function() {
        function e() {
          (this.gutters = {}),
            (this.el = d(
              '<div class="fc-scroller-canvas"> <div class="fc-content"></div> <div class="fc-bg"></div> </div>'
            )),
            (this.contentEl = this.el.querySelector(".fc-content")),
            (this.bgEl = this.el.querySelector(".fc-bg"));
        }
        return (
          (e.prototype.setGutters = function(e) {
            e ? Ko(this.gutters, e) : (this.gutters = {}), this.updateSize();
          }),
          (e.prototype.setWidth = function(e) {
            (this.width = e), this.updateSize();
          }),
          (e.prototype.setMinWidth = function(e) {
            (this.minWidth = e), this.updateSize();
          }),
          (e.prototype.clearWidth = function() {
            (this.width = null), (this.minWidth = null), this.updateSize();
          }),
          (e.prototype.updateSize = function() {
            var e = this.gutters,
              t = this.el;
            D(t, "fc-gutter-left", e.left),
              D(t, "fc-gutter-right", e.right),
              D(t, "fc-gutter-top", e.top),
              D(t, "fc-gutter-bottom", e.bottom),
              R(t, {
                paddingLeft: e.left || "",
                paddingRight: e.right || "",
                paddingTop: e.top || "",
                paddingBottom: e.bottom || "",
                width:
                  null != this.width
                    ? this.width + (e.left || 0) + (e.right || 0)
                    : "",
                minWidth:
                  null != this.minWidth
                    ? this.minWidth + (e.left || 0) + (e.right || 0)
                    : ""
              }),
              R(this.bgEl, {
                left: e.left || "",
                right: e.right || "",
                top: e.top || "",
                bottom: e.bottom || ""
              });
          }),
          e
        );
      })(),
      Qo = (function(e) {
        function t(t, r) {
          var n = e.call(this, t, r) || this;
          return (
            (n.reportScroll = function() {
              n.isScrolling || n.reportScrollStart(),
                n.trigger("scroll"),
                (n.isMoving = !0),
                n.requestMovingEnd();
            }),
            (n.reportScrollStart = function() {
              n.isScrolling ||
                ((n.isScrolling = !0), n.trigger("scrollStart", n.isTouching));
            }),
            (n.reportTouchStart = function() {
              n.isTouching = !0;
            }),
            (n.reportTouchEnd = function() {
              n.isTouching &&
                ((n.isTouching = !1),
                n.isTouchScrollEnabled && n.unbindPreventTouchScroll(),
                n.isMoving || n.reportScrollEnd());
            }),
            (n.isScrolling = !1),
            (n.isTouching = !1),
            (n.isMoving = !1),
            (n.isTouchScrollEnabled = !0),
            (n.requestMovingEnd = Ae(n.reportMovingEnd, 500)),
            (n.canvas = new Jo()),
            n.el.appendChild(n.canvas.el),
            n.applyOverflow(),
            n.bindHandlers(),
            n
          );
        }
        return (
          Zo(t, e),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this), this.unbindHandlers();
          }),
          (t.prototype.disableTouchScroll = function() {
            (this.isTouchScrollEnabled = !1), this.bindPreventTouchScroll();
          }),
          (t.prototype.enableTouchScroll = function() {
            (this.isTouchScrollEnabled = !0),
              this.isTouching || this.unbindPreventTouchScroll();
          }),
          (t.prototype.bindPreventTouchScroll = function() {
            this.preventTouchScrollHandler ||
              this.el.addEventListener(
                "touchmove",
                (this.preventTouchScrollHandler = j)
              );
          }),
          (t.prototype.unbindPreventTouchScroll = function() {
            this.preventTouchScrollHandler &&
              (this.el.removeEventListener(
                "touchmove",
                this.preventTouchScrollHandler
              ),
              (this.preventTouchScrollHandler = null));
          }),
          (t.prototype.bindHandlers = function() {
            this.el.addEventListener("scroll", this.reportScroll),
              this.el.addEventListener("touchstart", this.reportTouchStart, {
                passive: !0
              }),
              this.el.addEventListener("touchend", this.reportTouchEnd);
          }),
          (t.prototype.unbindHandlers = function() {
            this.el.removeEventListener("scroll", this.reportScroll),
              this.el.removeEventListener("touchstart", this.reportTouchStart, {
                passive: !0
              }),
              this.el.removeEventListener("touchend", this.reportTouchEnd);
          }),
          (t.prototype.reportMovingEnd = function() {
            (this.isMoving = !1), this.isTouching || this.reportScrollEnd();
          }),
          (t.prototype.reportScrollEnd = function() {
            this.isScrolling &&
              (this.trigger("scrollEnd"), (this.isScrolling = !1));
          }),
          (t.prototype.getScrollLeft = function() {
            var e = this.el,
              t = window.getComputedStyle(e).direction,
              r = e.scrollLeft;
            if ("rtl" === t)
              switch ($o()) {
                case "positive":
                  r = r + e.clientWidth - e.scrollWidth;
                  break;
                case "reverse":
                  r = -r;
              }
            return r;
          }),
          (t.prototype.setScrollLeft = function(e) {
            var t = this.el;
            if ("rtl" === window.getComputedStyle(t).direction)
              switch ($o()) {
                case "positive":
                  e = e - t.clientWidth + t.scrollWidth;
                  break;
                case "reverse":
                  e = -e;
              }
            t.scrollLeft = e;
          }),
          (t.prototype.getScrollFromLeft = function() {
            var e = this.el,
              t = window.getComputedStyle(e).direction,
              r = e.scrollLeft;
            if ("rtl" === t)
              switch ($o()) {
                case "negative":
                  r = r - e.clientWidth + e.scrollWidth;
                  break;
                case "reverse":
                  r = -r - e.clientWidth + e.scrollWidth;
              }
            return r;
          }),
          t
        );
      })(Pr);
    function $o() {
      return (
        Xo ||
        (Xo = (function() {
          var e,
            t = d(
              '<div style=" position: absolute; top: -1000px; width: 1px; height: 1px; overflow: scroll; direction: rtl; font-size: 100px; ">A</div>'
            );
          document.body.appendChild(t),
            t.scrollLeft > 0
              ? (e = "positive")
              : ((t.scrollLeft = 1),
                (e = t.scrollLeft > 0 ? "reverse" : "negative"));
          return y(t), e;
        })())
      );
    }
    Dr.mixInto(Qo);
    var es = (function() {
        function e(e, t, r) {
          (this.isHScrollbarsClipped = !1),
            (this.isVScrollbarsClipped = !1),
            "clipped-scroll" === e &&
              ((e = "scroll"), (this.isHScrollbarsClipped = !0)),
            "clipped-scroll" === t &&
              ((t = "scroll"), (this.isVScrollbarsClipped = !0)),
            (this.enhancedScroll = new Qo(e, t)),
            r.appendChild(
              (this.el = c("div", {
                className: "fc-scroller-clip"
              }))
            ),
            this.el.appendChild(this.enhancedScroll.el);
        }
        return (
          (e.prototype.destroy = function() {
            y(this.el);
          }),
          (e.prototype.updateSize = function() {
            var e = this.enhancedScroll,
              t = e.el,
              r = L(t),
              n = {
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0
              };
            this.isVScrollbarsClipped &&
              ((n.marginLeft = -r.scrollbarLeft),
              (n.marginRight = -r.scrollbarRight)),
              this.isHScrollbarsClipped &&
                (n.marginBottom = -r.scrollbarBottom),
              R(t, n),
              (!this.isHScrollbarsClipped && "hidden" !== e.overflowX) ||
              (!this.isVScrollbarsClipped && "hidden" !== e.overflowY) ||
              r.scrollbarLeft ||
              r.scrollbarRight ||
              r.scrollbarBottom
                ? t.classList.remove("fc-no-scrollbars")
                : t.classList.add("fc-no-scrollbars");
          }),
          (e.prototype.setHeight = function(e) {
            this.enhancedScroll.setHeight(e);
          }),
          (e.prototype.getScrollbarWidths = function() {
            var e = this.enhancedScroll.getScrollbarWidths();
            return (
              this.isVScrollbarsClipped && ((e.left = 0), (e.right = 0)),
              this.isHScrollbarsClipped && (e.bottom = 0),
              e
            );
          }),
          e
        );
      })(),
      ts = (function() {
        function e(e, t) {
          (this.axis = e), (this.scrollers = t);
          for (var r = 0, n = this.scrollers; r < n.length; r++) {
            var i = n[r];
            this.initScroller(i);
          }
        }
        return (
          (e.prototype.initScroller = function(e) {
            var t = this,
              r = e.enhancedScroll,
              n = function() {
                t.assignMasterScroller(e);
              };
            "wheel mousewheel DomMouseScroll MozMousePixelScroll"
              .split(" ")
              .forEach(function(e) {
                r.el.addEventListener(e, n);
              }),
              r
                .on("scrollStart", function() {
                  t.masterScroller || t.assignMasterScroller(e);
                })
                .on("scroll", function() {
                  if (e === t.masterScroller)
                    for (var n = 0, i = t.scrollers; n < i.length; n++) {
                      var o = i[n];
                      if (o !== e)
                        switch (t.axis) {
                          case "horizontal":
                            o.enhancedScroll.el.scrollLeft = r.el.scrollLeft;
                            break;
                          case "vertical":
                            o.enhancedScroll.setScrollTop(r.getScrollTop());
                        }
                    }
                })
                .on("scrollEnd", function() {
                  e === t.masterScroller && t.unassignMasterScroller();
                });
          }),
          (e.prototype.assignMasterScroller = function(e) {
            this.unassignMasterScroller(), (this.masterScroller = e);
            for (var t = 0, r = this.scrollers; t < r.length; t++) {
              var n = r[t];
              n !== e && n.enhancedScroll.disableTouchScroll();
            }
          }),
          (e.prototype.unassignMasterScroller = function() {
            if (this.masterScroller) {
              for (var e = 0, t = this.scrollers; e < t.length; e++) {
                t[e].enhancedScroll.enableTouchScroll();
              }
              this.masterScroller = null;
            }
          }),
          (e.prototype.update = function() {
            for (
              var e,
                t,
                r = this.scrollers.map(function(e) {
                  return e.getScrollbarWidths();
                }),
                n = 0,
                i = 0,
                o = 0,
                s = 0,
                a = 0,
                l = r;
              a < l.length;
              a++
            )
              (e = l[a]),
                (n = Math.max(n, e.left)),
                (i = Math.max(i, e.right)),
                (o = Math.max(o, e.top)),
                (s = Math.max(s, e.bottom));
            for (t = 0; t < this.scrollers.length; t++) {
              var c = this.scrollers[t];
              (e = r[t]),
                c.enhancedScroll.canvas.setGutters(
                  "horizontal" === this.axis
                    ? {
                        left: n - e.left,
                        right: i - e.right
                      }
                    : {
                        top: o - e.top,
                        bottom: s - e.bottom
                      }
                );
            }
          }),
          e
        );
      })(),
      rs = (function() {
        function e(e, t, r) {
          (this.headerScroller = new es("clipped-scroll", "hidden", e)),
            (this.bodyScroller = new es("auto", r, t)),
            (this.scrollJoiner = new ts("horizontal", [
              this.headerScroller,
              this.bodyScroller
            ]));
        }
        return (
          (e.prototype.destroy = function() {
            this.headerScroller.destroy(), this.bodyScroller.destroy();
          }),
          (e.prototype.setHeight = function(e, t) {
            var r;
            (r = t ? "auto" : e - this.queryHeadHeight()),
              this.bodyScroller.setHeight(r),
              this.headerScroller.updateSize(),
              this.bodyScroller.updateSize(),
              this.scrollJoiner.update();
          }),
          (e.prototype.queryHeadHeight = function() {
            return this.headerScroller.enhancedScroll.canvas.contentEl.getBoundingClientRect()
              .height;
          }),
          e
        );
      })(),
      ns = (function(e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          return (
            r.appendChild(
              (n.tableEl = c("table", {
                className: n.theme.getClass("tableGrid")
              }))
            ),
            n
          );
        }
        return (
          Zo(t, e),
          (t.prototype.destroy = function() {
            y(this.tableEl), e.prototype.destroy.call(this);
          }),
          (t.prototype.render = function(e) {
            this.renderDates(e.tDateProfile);
          }),
          (t.prototype.renderDates = function(e) {
            for (
              var t = this.dateEnv,
                r = this.theme,
                n = e.cellRows,
                i = n[n.length - 1],
                o = ve(e.labelInterval) > ve(e.slotDuration),
                s = ue(e.slotDuration),
                a = "<colgroup>",
                l = e.slotCnt - 1;
              l >= 0;
              l--
            )
              a += "<col/>";
            (a += "</colgroup>"), (a += "<tbody>");
            for (var c = 0, d = n; c < d.length; c++) {
              var u = d[c];
              a += "<tr" + (o && u === i ? ' class="fc-chrono"' : "") + ">";
              for (var p = 0, h = u; p < h.length; p++) {
                var f = h[p],
                  v = [r.getClass("widgetHeader")];
                f.isWeekStart && v.push("fc-em-cell"),
                  s &&
                    (v = v.concat(
                      wr(f.date, this.props.dateProfile, this.context, !0)
                    )),
                  (a +=
                    '<th class="' +
                    v.join(" ") +
                    '" data-date="' +
                    t.formatIso(f.date, {
                      omitTime: !e.isTimeScale,
                      omitTimeZoneOffset: !0
                    }) +
                    '"' +
                    (f.colspan > 1 ? ' colspan="' + f.colspan + '"' : "") +
                    '><div class="fc-cell-content">' +
                    f.spanHtml +
                    "</div></th>");
              }
              a += "</tr>";
            }
            (a += "</tbody>"),
              (this.tableEl.innerHTML = a),
              (this.slatColEls = w(this.tableEl, "col")),
              (this.innerEls = w(
                this.tableEl.querySelector("tr:last-child"),
                "th .fc-cell-text"
              )),
              w(
                this.tableEl.querySelectorAll("tr:not(:last-child)"),
                "th .fc-cell-text"
              ).forEach(function(e) {
                e.classList.add("fc-sticky");
              });
          }),
          t
        );
      })(Lr),
      is = (function(e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          return (
            r.appendChild(
              (n.el = c("div", {
                className: "fc-slats"
              }))
            ),
            n
          );
        }
        return (
          Zo(t, e),
          (t.prototype.destroy = function() {
            y(this.el), e.prototype.destroy.call(this);
          }),
          (t.prototype.render = function(e) {
            this.renderDates(e.tDateProfile);
          }),
          (t.prototype.renderDates = function(e) {
            for (
              var t = this.theme,
                r = this.view,
                n = this.dateEnv,
                i = e.slotDates,
                o = e.isWeekStarts,
                s = '<table class="' + t.getClass("tableGrid") + '"><colgroup>',
                a = 0;
              a < i.length;
              a++
            )
              s += "<col/>";
            (s += "</colgroup>"), (s += "<tbody><tr>");
            for (a = 0; a < i.length; a++)
              s += this.slatCellHtml(i[a], o[a], e);
            (s += "</tr></tbody></table>"),
              (this.el.innerHTML = s),
              (this.slatColEls = w(this.el, "col")),
              (this.slatEls = w(this.el, "td"));
            for (a = 0; a < i.length; a++)
              r.publiclyTrigger("dayRender", [
                {
                  date: n.toDate(i[a]),
                  el: this.slatEls[a],
                  view: r
                }
              ]);
            (this.outerCoordCache = new xr(this.el, this.slatEls, !0, !1)),
              (this.innerCoordCache = new xr(
                this.el,
                T(this.slatEls, "div"),
                !0,
                !1
              ));
          }),
          (t.prototype.slatCellHtml = function(e, t, r) {
            var n,
              i = this.theme,
              o = this.dateEnv;
            return (
              r.isTimeScale
                ? (n = []).push(
                    _e(
                      o.countDurationsBetween(
                        r.normalizedRange.start,
                        e,
                        r.labelInterval
                      )
                    )
                      ? "fc-major"
                      : "fc-minor"
                  )
                : (n = wr(e, this.props.dateProfile, this.context)).push(
                    "fc-day"
                  ),
              n.unshift(i.getClass("widgetContent")),
              t && n.push("fc-em-cell"),
              '<td class="' +
                n.join(" ") +
                '" data-date="' +
                o.formatIso(e, {
                  omitTime: !r.isTimeScale,
                  omitTimeZoneOffset: !0
                }) +
                '"><div></div></td>'
            );
          }),
          (t.prototype.updateSize = function() {
            this.outerCoordCache.build(), this.innerCoordCache.build();
          }),
          (t.prototype.positionToHit = function(e) {
            var t = this.outerCoordCache,
              r = this.props.tDateProfile,
              n = t.leftToIndex(e);
            if (null != n) {
              var i = t.getWidth(n),
                o = this.isRtl ? (t.rights[n] - e) / i : (e - t.lefts[n]) / i,
                s = Math.floor(o * r.snapsPerSlot),
                a = this.dateEnv.add(r.slotDates[n], he(r.snapDuration, s));
              return {
                dateSpan: {
                  range: {
                    start: a,
                    end: this.dateEnv.add(a, r.snapDuration)
                  },
                  allDay: !this.props.tDateProfile.isTimeScale
                },
                dayEl: this.slatColEls[n],
                left: t.lefts[n],
                right: t.rights[n]
              };
            }
            return null;
          }),
          t
        );
      })(Lr),
      os = 18,
      ss = 6,
      as = 200;
    Yr.MAX_TIMELINE_SLOTS = 1e3;
    var ls = [
      {
        years: 1
      },
      {
        months: 1
      },
      {
        days: 1
      },
      {
        hours: 1
      },
      {
        minutes: 30
      },
      {
        minutes: 15
      },
      {
        minutes: 10
      },
      {
        minutes: 5
      },
      {
        minutes: 1
      },
      {
        seconds: 30
      },
      {
        seconds: 15
      },
      {
        seconds: 10
      },
      {
        seconds: 5
      },
      {
        seconds: 1
      },
      {
        milliseconds: 500
      },
      {
        milliseconds: 100
      },
      {
        milliseconds: 10
      },
      {
        milliseconds: 1
      }
    ];
    function cs(e, t) {
      var r = t.dateEnv,
        n = {
          labelInterval: ps(t, "slotLabelInterval"),
          slotDuration: ps(t, "slotDuration")
        };
      !(function(e, t, r) {
        var n = t.currentRange;
        if (e.labelInterval) {
          r.countDurationsBetween(n.start, n.end, e.labelInterval) >
            Yr.MAX_TIMELINE_SLOTS &&
            (console.warn("slotLabelInterval results in too many cells"),
            (e.labelInterval = null));
        }
        if (e.slotDuration) {
          r.countDurationsBetween(n.start, n.end, e.slotDuration) >
            Yr.MAX_TIMELINE_SLOTS &&
            (console.warn("slotDuration results in too many cells"),
            (e.slotDuration = null));
        }
        if (e.labelInterval && e.slotDuration) {
          var i = ge(e.labelInterval, e.slotDuration);
          (null === i || i < 1) &&
            (console.warn(
              "slotLabelInterval must be a multiple of slotDuration"
            ),
            (e.slotDuration = null));
        }
      })(n, e, r),
        hs(n, e, r),
        (function(e, t, r) {
          var n = t.currentRange,
            i = e.slotDuration;
          if (!i) {
            for (var o = hs(e, t, r), s = 0, a = ls; s < a.length; s++) {
              var l = ae(a[s]),
                c = ge(o, l);
              if (null !== c && c > 1 && c <= ss) {
                i = l;
                break;
              }
            }
            if (i)
              r.countDurationsBetween(n.start, n.end, i) > as && (i = null);
            i || (i = o), (e.slotDuration = i);
          }
        })(n, e, r);
      var i = t.opt("slotLabelFormat"),
        o = Array.isArray(i)
          ? i
          : null != i
          ? [i]
          : (function(e, t, r, n) {
              var i,
                o,
                s = e.labelInterval,
                a = ye(s).unit,
                l = n.opt("weekNumbers"),
                c = (i = o = null);
              "week" !== a || l || (a = "day");
              switch (a) {
                case "year":
                  c = {
                    year: "numeric"
                  };
                  break;
                case "month":
                  fs("years", t, r) > 1 &&
                    (c = {
                      year: "numeric"
                    }),
                    (i = {
                      month: "short"
                    });
                  break;
                case "week":
                  fs("years", t, r) > 1 &&
                    (c = {
                      year: "numeric"
                    }),
                    (i = {
                      week: "narrow"
                    });
                  break;
                case "day":
                  fs("years", t, r) > 1
                    ? (c = {
                        year: "numeric",
                        month: "long"
                      })
                    : fs("months", t, r) > 1 &&
                      (c = {
                        month: "long"
                      }),
                    l &&
                      (i = {
                        week: "short"
                      }),
                    (o = {
                      weekday: "narrow",
                      day: "numeric"
                    });
                  break;
                case "hour":
                  l &&
                    (c = {
                      week: "short"
                    }),
                    fs("days", t, r) > 1 &&
                      (i = {
                        weekday: "short",
                        day: "numeric",
                        month: "numeric",
                        omitCommas: !0
                      }),
                    (o = {
                      hour: "numeric",
                      minute: "2-digit",
                      omitZeroMinute: !0,
                      meridiem: "short"
                    });
                  break;
                case "minute":
                  ve(s) / 6e4 / 60 >= ss
                    ? ((c = {
                        hour: "numeric",
                        meridiem: "short"
                      }),
                      (i = function(e) {
                        return ":" + Pe(e.date.minute, 2);
                      }))
                    : (c = {
                        hour: "numeric",
                        minute: "numeric",
                        meridiem: "short"
                      });
                  break;
                case "second":
                  (function(e) {
                    return ve(e) / 1e3;
                  })(s) /
                    60 >=
                  ss
                    ? ((c = {
                        hour: "numeric",
                        minute: "2-digit",
                        meridiem: "lowercase"
                      }),
                      (i = function(e) {
                        return ":" + Pe(e.date.second, 2);
                      }))
                    : (c = {
                        hour: "numeric",
                        minute: "2-digit",
                        second: "2-digit",
                        meridiem: "lowercase"
                      });
                  break;
                case "millisecond":
                  (c = {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    meridiem: "lowercase"
                  }),
                    (i = function(e) {
                      return "." + Pe(e.millisecond, 3);
                    });
              }
              return [].concat(c || [], i || [], o || []);
            })(n, e, r, t);
      (n.headerFormats = o.map(function(e) {
        return It(e);
      })),
        (n.isTimeScale = Boolean(n.slotDuration.milliseconds));
      var s = null;
      if (!n.isTimeScale) {
        var a = ye(n.slotDuration).unit;
        /year|month|week/.test(a) && (s = a);
      }
      (n.largeUnit = s),
        (n.emphasizeWeeks =
          ue(n.slotDuration) &&
          fs("weeks", e, r) >= 2 &&
          !t.opt("businessHours"));
      var l,
        c,
        d = t.opt("snapDuration");
      d && ((l = ae(d)), (c = ge(n.slotDuration, l))),
        null == c && ((l = n.slotDuration), (c = 1)),
        (n.snapDuration = l),
        (n.snapsPerSlot = c);
      var u = ve(e.maxTime) - ve(e.minTime),
        p = ds(e.renderRange.start, n, r),
        h = ds(e.renderRange.end, n, r);
      n.isTimeScale &&
        ((p = r.add(p, e.minTime)), (h = r.add(q(h, -1), e.maxTime))),
        (n.timeWindowMs = u),
        (n.normalizedRange = {
          start: p,
          end: h
        });
      for (var f = [], v = p; v < h; )
        us(v, n, e, t) && f.push(v), (v = r.add(v, n.slotDuration));
      n.slotDates = f;
      var g = -1,
        y = 0,
        m = [],
        S = [];
      for (v = p; v < h; )
        us(v, n, e, t) ? (g++, m.push(g), S.push(y)) : m.push(g + 0.5),
          (v = r.add(v, n.snapDuration)),
          y++;
      return (
        (n.snapDiffToIndex = m),
        (n.snapIndexToDiff = S),
        (n.snapCnt = g + 1),
        (n.slotCnt = n.snapCnt / n.snapsPerSlot),
        (n.isWeekStarts = (function(e, t) {
          for (
            var r = e.slotDates,
              n = e.emphasizeWeeks,
              i = null,
              o = [],
              s = 0,
              a = r;
            s < a.length;
            s++
          ) {
            var l = a[s],
              c = t.computeWeekNumber(l),
              d = n && null !== i && i !== c;
            (i = c), o.push(d);
          }
          return o;
        })(n, r)),
        (n.cellRows = (function(e, t, r) {
          for (
            var n = e.slotDates,
              i = e.headerFormats,
              o = i.map(function(e) {
                return [];
              }),
              s = i.map(function(e) {
                return e.getLargestUnit ? e.getLargestUnit() : null;
              }),
              a = 0;
            a < n.length;
            a++
          )
            for (
              var l = n[a], c = e.isWeekStarts[a], d = 0;
              d < i.length;
              d++
            ) {
              var u = i[d],
                p = o[d],
                h = p[p.length - 1],
                f = i.length > 1 && d < i.length - 1,
                v = null;
              if (f) {
                var g = t.format(l, u);
                h && h.text === g ? (h.colspan += 1) : (v = vs(l, g, s[d], r));
              } else if (
                !h ||
                _e(
                  t.countDurationsBetween(
                    e.normalizedRange.start,
                    l,
                    e.labelInterval
                  )
                )
              ) {
                g = t.format(l, u);
                v = vs(l, g, s[d], r);
              } else h.colspan += 1;
              v && ((v.weekStart = c), p.push(v));
            }
          return o;
        })(n, r, t)),
        n
      );
    }
    function ds(e, t, r) {
      var n = e;
      return (
        t.isTimeScale ||
          ((n = K(n)), t.largeUnit && (n = r.startOf(n, t.largeUnit))),
        n
      );
    }
    function us(e, t, r, n) {
      if (n.dateProfileGenerator.isHiddenDay(e)) return !1;
      if (t.isTimeScale) {
        var i = K(e),
          o = e.valueOf() - i.valueOf() - ve(r.minTime);
        return (o = ((o % 864e5) + 864e5) % 864e5) < t.timeWindowMs;
      }
      return !0;
    }
    function ps(e, t) {
      var r = e.opt(t);
      if (null != r) return ae(r);
    }
    function hs(e, t, r) {
      var n = t.currentRange,
        i = e.labelInterval;
      if (!i) {
        if (e.slotDuration) {
          for (var o = 0, s = ls; o < s.length; o++) {
            var a = ae(s[o]),
              l = ge(a, e.slotDuration);
            if (null !== l && l <= ss) {
              i = a;
              break;
            }
          }
          i || (i = e.slotDuration);
        } else
          for (var c = 0, d = ls; c < d.length; c++) {
            if (
              ((i = ae(d[c])), r.countDurationsBetween(n.start, n.end, i) >= os)
            )
              break;
          }
        e.labelInterval = i;
      }
      return i;
    }
    function fs(e, t, r) {
      var n = t.currentRange,
        i = null;
      return (
        "years" === e
          ? (i = r.diffWholeYears(n.start, n.end))
          : "months" === e
          ? (i = r.diffWholeMonths(n.start, n.end))
          : "weeks" === e
          ? (i = r.diffWholeMonths(n.start, n.end))
          : "days" === e && (i = X(n.start, n.end)),
        i || 0
      );
    }
    function vs(e, t, r, n) {
      return {
        text: t,
        spanHtml: Er(
          n,
          {
            date: e,
            type: r,
            forceOff: !r
          },
          {
            class: "fc-cell-text"
          },
          $t(t)
        ),
        date: e,
        colspan: 1,
        isWeekStart: !1
      };
    }
    var gs,
      ys = (function() {
        function e(e, t) {
          (this.headParent = e), (this.bodyParent = t);
        }
        return (
          (e.prototype.render = function(e, t) {
            var r = t
              ? {
                  right: -e
                }
              : {
                  left: e
                };
            this.headParent.appendChild(
              (this.arrowEl = c("div", {
                className: "fc-now-indicator fc-now-indicator-arrow",
                style: r
              }))
            ),
              this.bodyParent.appendChild(
                (this.lineEl = c("div", {
                  className: "fc-now-indicator fc-now-indicator-line",
                  style: r
                }))
              );
          }),
          (e.prototype.unrender = function() {
            this.arrowEl && y(this.arrowEl), this.lineEl && y(this.lineEl);
          }),
          e
        );
      })(),
      ms =
        -1 !==
        (gs = d('<div style="position:-webkit-sticky;position:sticky"></div>')
          .style.position).indexOf("sticky")
          ? gs
          : null,
      Ss = /Edge/.test(navigator.userAgent),
      Es = "-webkit-sticky" === ms,
      bs = "fc-sticky",
      ws = (function() {
        function e(e, t, r) {
          var n = this;
          (this.usingRelative = null),
            (this.updateSize = function() {
              var e = Array.prototype.slice.call(
                  n.scroller.canvas.el.querySelectorAll("." + bs)
                ),
                t = n.queryElGeoms(e),
                r = n.scroller.el.clientWidth;
              n.usingRelative
                ? (function(e, t, r) {
                    e.forEach(function(e, n) {
                      var i = t[n].naturalBound;
                      R(e, {
                        position: "relative",
                        left: r[n].left - i.left,
                        top: r[n].top - i.top
                      });
                    });
                  })(e, t, n.computeElDestinations(t, r))
                : (function(e, t, r) {
                    e.forEach(function(e, n) {
                      var i = 0;
                      "center" === t[n].intendedTextAlign &&
                        ((i = (r - t[n].elWidth) / 2),
                        "center" === t[n].computedTextAlign &&
                          (e.setAttribute("data-sticky-center", ""),
                          (e.parentNode.style.textAlign = "left"))),
                        R(e, {
                          position: ms,
                          left: i,
                          right: 0,
                          top: 0
                        });
                    });
                  })(e, t, r);
            }),
            (this.scroller = e),
            (this.usingRelative = !ms || (Ss && t) || ((Ss || Es) && r)),
            this.usingRelative && e.on("scrollEnd", this.updateSize);
        }
        return (
          (e.prototype.destroy = function() {
            this.scroller.off("scrollEnd", this.updateSize);
          }),
          (e.prototype.queryElGeoms = function(e) {
            for (
              var t = this.scroller.canvas.el.getBoundingClientRect(),
                r = [],
                n = 0,
                i = e;
              n < i.length;
              n++
            ) {
              var o = i[n],
                s = M(o.parentNode.getBoundingClientRect(), -t.left, -t.top),
                a = o.getBoundingClientRect(),
                l = window.getComputedStyle(o),
                c = window.getComputedStyle(o.parentNode).textAlign,
                d = c,
                u = null;
              "sticky" !== l.position &&
                (u = M(
                  a,
                  -t.left - (parseFloat(l.left) || 0),
                  -t.top - (parseFloat(l.top) || 0)
                )),
                o.hasAttribute("data-sticky-center") && (d = "center"),
                r.push({
                  parentBound: s,
                  naturalBound: u,
                  elWidth: a.width,
                  elHeight: a.height,
                  computedTextAlign: c,
                  intendedTextAlign: d
                });
            }
            return r;
          }),
          (e.prototype.computeElDestinations = function(e, t) {
            var r = this.scroller.getScrollFromLeft(),
              n = this.scroller.getScrollTop(),
              i = r + t;
            return e.map(function(e) {
              var t,
                o,
                s = e.elWidth,
                a = e.elHeight,
                l = e.parentBound,
                c = e.naturalBound;
              switch (e.intendedTextAlign) {
                case "left":
                  t = r;
                  break;
                case "right":
                  t = i - s;
                  break;
                case "center":
                  t = (r + i) / 2 - s / 2;
              }
              return (
                (t = Math.min(t, l.right - s)),
                (t = Math.max(t, l.left)),
                (o = n),
                (o = Math.min(o, l.bottom - a)),
                {
                  left: t,
                  top: (o = Math.max(o, c.top))
                }
              );
            });
          }),
          e
        );
      })();
    var Ts = (function(e) {
        function t(t, r, n) {
          var i = e.call(this, t) || this,
            o = (i.layout = new rs(r, n, "auto")),
            s = o.headerScroller.enhancedScroll,
            a = o.bodyScroller.enhancedScroll;
          return (
            (i.headStickyScroller = new ws(s, i.isRtl, !1)),
            (i.bodyStickyScroller = new ws(a, i.isRtl, !1)),
            (i.header = new ns(t, s.canvas.contentEl)),
            (i.slats = new is(t, a.canvas.bgEl)),
            (i.nowIndicator = new ys(s.canvas.el, a.canvas.el)),
            i
          );
        }
        return (
          Zo(t, e),
          (t.prototype.destroy = function() {
            this.layout.destroy(),
              this.header.destroy(),
              this.slats.destroy(),
              this.nowIndicator.unrender(),
              this.headStickyScroller.destroy(),
              this.bodyStickyScroller.destroy(),
              e.prototype.destroy.call(this);
          }),
          (t.prototype.render = function(e) {
            var t = (this.tDateProfile = cs(e.dateProfile, this.view));
            this.header.receiveProps({
              dateProfile: e.dateProfile,
              tDateProfile: t
            }),
              this.slats.receiveProps({
                dateProfile: e.dateProfile,
                tDateProfile: t
              });
          }),
          (t.prototype.getNowIndicatorUnit = function(e) {
            var t = (this.tDateProfile = cs(e, this.view));
            if (t.isTimeScale) return ye(t.slotDuration).unit;
          }),
          (t.prototype.renderNowIndicator = function(e) {
            ht(this.tDateProfile.normalizedRange, e) &&
              this.nowIndicator.render(this.dateToCoord(e), this.isRtl);
          }),
          (t.prototype.unrenderNowIndicator = function() {
            this.nowIndicator.unrender();
          }),
          (t.prototype.updateSize = function(e, t, r) {
            this.applySlotWidth(this.computeSlotWidth()),
              this.layout.setHeight(t, r),
              this.slats.updateSize();
          }),
          (t.prototype.updateStickyScrollers = function() {
            this.headStickyScroller.updateSize(),
              this.bodyStickyScroller.updateSize();
          }),
          (t.prototype.computeSlotWidth = function() {
            var e = this.opt("slotWidth") || "";
            return (
              "" === e && (e = this.computeDefaultSlotWidth(this.tDateProfile)),
              e
            );
          }),
          (t.prototype.computeDefaultSlotWidth = function(e) {
            var t = 0;
            this.header.innerEls.forEach(function(e, r) {
              t = Math.max(t, e.getBoundingClientRect().width);
            });
            var r = Math.ceil(t) + 1,
              n = ge(e.labelInterval, e.slotDuration),
              i = Math.ceil(r / n),
              o = window.getComputedStyle(this.header.slatColEls[0]).minWidth;
            return o && (o = parseInt(o, 10)) && (i = Math.max(i, o)), i;
          }),
          (t.prototype.applySlotWidth = function(e) {
            var t = this.layout,
              r = this.tDateProfile,
              n = "",
              i = "",
              o = "";
            if ("" !== e) {
              (n = (e = Math.round(e)) * r.slotDates.length), (i = ""), (o = e);
              var s = t.bodyScroller.enhancedScroll.getClientWidth();
              s > n &&
                ((i = s), (n = ""), (o = Math.floor(s / r.slotDates.length)));
            }
            t.headerScroller.enhancedScroll.canvas.setWidth(n),
              t.headerScroller.enhancedScroll.canvas.setMinWidth(i),
              t.bodyScroller.enhancedScroll.canvas.setWidth(n),
              t.bodyScroller.enhancedScroll.canvas.setMinWidth(i),
              "" !== o &&
                this.header.slatColEls
                  .slice(0, -1)
                  .concat(this.slats.slatColEls.slice(0, -1))
                  .forEach(function(e) {
                    e.style.width = o + "px";
                  });
          }),
          (t.prototype.computeDateSnapCoverage = function(e) {
            var t = this.dateEnv,
              r = this.tDateProfile,
              n = t.countDurationsBetween(
                r.normalizedRange.start,
                e,
                r.snapDuration
              );
            if (n < 0) return 0;
            if (n >= r.snapDiffToIndex.length) return r.snapCnt;
            var i = Math.floor(n),
              o = r.snapDiffToIndex[i];
            return _e(o) ? (o += n - i) : (o = Math.ceil(o)), o;
          }),
          (t.prototype.dateToCoord = function(e) {
            var t = this.tDateProfile,
              r = this.computeDateSnapCoverage(e) / t.snapsPerSlot,
              n = Math.floor(r),
              i = r - (n = Math.min(n, t.slotCnt - 1)),
              o = this.slats,
              s = o.innerCoordCache,
              a = o.outerCoordCache;
            return this.isRtl
              ? a.rights[n] - s.getWidth(n) * i - a.originClientRect.width
              : a.lefts[n] + s.getWidth(n) * i;
          }),
          (t.prototype.rangeToCoords = function(e) {
            return this.isRtl
              ? {
                  right: this.dateToCoord(e.start),
                  left: this.dateToCoord(e.end)
                }
              : {
                  left: this.dateToCoord(e.start),
                  right: this.dateToCoord(e.end)
                };
          }),
          (t.prototype.computeDateScroll = function(e) {
            var t = this.dateEnv,
              r = this.props.dateProfile,
              n = 0;
            return (
              r &&
                ((n = this.dateToCoord(t.add(K(r.activeRange.start), e))),
                !this.isRtl && n && (n += 1)),
              {
                left: n
              }
            );
          }),
          (t.prototype.queryDateScroll = function() {
            return {
              left: this.layout.bodyScroller.enhancedScroll.getScrollLeft()
            };
          }),
          (t.prototype.applyDateScroll = function(e) {
            this.layout.bodyScroller.enhancedScroll.setScrollLeft(e.left || 0),
              this.layout.headerScroller.enhancedScroll.setScrollLeft(
                e.left || 0
              );
          }),
          t
        );
      })(Lr),
      Ds = (function(e) {
        function t(t, r, n) {
          var i = e.call(this, t) || this;
          return (i.masterContainerEl = r), (i.timeAxis = n), i;
        }
        return (
          Zo(t, e),
          (t.prototype.renderSegHtml = function(e, t) {
            var r = this.context.view,
              n = e.eventRange,
              i = n.def,
              o = n.ui,
              s = r.computeEventDraggable(i, o),
              a = e.isStart && r.computeEventStartResizable(i, o),
              l = e.isEnd && r.computeEventEndResizable(i, o),
              c = this.getSegClasses(e, s, a || l, t);
            c.unshift("fc-timeline-event", "fc-h-event");
            var d = this.getTimeText(n);
            return (
              '<a class="' +
              c.join(" ") +
              '" style="' +
              er(this.getSkinCss(o)) +
              '"' +
              (i.url ? ' href="' + $t(i.url) + '"' : "") +
              ">" +
              (d
                ? '<span class="fc-time-wrap"><span class="fc-time">' +
                  $t(d) +
                  "</span></span>"
                : "") +
              '<span class="fc-title-wrap"><span class="fc-title fc-sticky">' +
              (i.title ? $t(i.title) : "&nbsp;") +
              "</span></span>" +
              (a ? '<div class="fc-resizer fc-start-resizer"></div>' : "") +
              (l ? '<div class="fc-resizer fc-end-resizer"></div>' : "") +
              "</a>"
            );
          }),
          (t.prototype.computeDisplayEventTime = function() {
            return !this.timeAxis.tDateProfile.isTimeScale;
          }),
          (t.prototype.computeDisplayEventEnd = function() {
            return !1;
          }),
          (t.prototype.computeEventTimeFormat = function() {
            return {
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0,
              meridiem: "narrow"
            };
          }),
          (t.prototype.attachSegs = function(e, t) {
            if (
              (!this.el &&
                this.masterContainerEl &&
                ((this.el = c("div", {
                  className: "fc-event-container"
                })),
                t && this.el.classList.add("fc-mirror-container"),
                this.masterContainerEl.appendChild(this.el)),
              this.el)
            )
              for (var r = 0, n = e; r < n.length; r++) {
                var i = n[r];
                this.el.appendChild(i.el);
              }
          }),
          (t.prototype.detachSegs = function(e) {
            for (var t = 0, r = e; t < r.length; t++) {
              y(r[t].el);
            }
          }),
          (t.prototype.computeSegSizes = function(e) {
            for (var t = this.timeAxis, r = 0, n = e; r < n.length; r++) {
              var i = n[r],
                o = t.rangeToCoords(i);
              R(i.el, {
                left: (i.left = o.left),
                right: -(i.right = o.right)
              });
            }
          }),
          (t.prototype.assignSegSizes = function(e) {
            if (this.el) {
              for (var t = 0, r = e; t < r.length; t++) {
                (s = r[t]).height = N(s.el);
              }
              this.buildSegLevels(e);
              var n = Cs(e);
              x(this.el, "height", n);
              for (var i = 0, o = e; i < o.length; i++) {
                var s;
                x((s = o[i]).el, "top", s.top);
              }
            }
          }),
          (t.prototype.buildSegLevels = function(e) {
            for (
              var t = [], r = 0, n = (e = this.sortEventSegs(e));
              r < n.length;
              r++
            ) {
              var i = n[r];
              i.above = [];
              for (var o = 0; o < t.length; ) {
                for (var s = !1, a = 0, l = t[o]; a < l.length; a++) {
                  var c = l[a];
                  xs(i, c) && (i.above.push(c), (s = !0));
                }
                if (!s) break;
                o += 1;
              }
              for ((t[o] || (t[o] = [])).push(i), o += 1; o < t.length; ) {
                for (var d = 0, u = t[o]; d < u.length; d++) {
                  var p = u[d];
                  xs(i, p) && p.above.push(i);
                }
                o += 1;
              }
            }
            return t;
          }),
          t
        );
      })($n);
    function Cs(e) {
      for (var t = 0, r = 0, n = e; r < n.length; r++) {
        var i = n[r];
        t = Math.max(t, Rs(i));
      }
      return t;
    }
    function Rs(e) {
      return null == e.top && (e.top = Cs(e.above)), e.top + e.height;
    }
    function xs(e, t) {
      return e.left < t.right && e.right > t.left;
    }
    var Is = (function(e) {
        function t(t, r, n) {
          var i = e.call(this, t) || this;
          return (i.masterContainerEl = r), (i.timeAxis = n), i;
        }
        return (
          Zo(t, e),
          (t.prototype.attachSegs = function(e, t) {
            if (t.length) {
              var r = c("div", {
                className:
                  "fc-" +
                  ("businessHours" === e ? "bgevent" : e.toLowerCase()) +
                  "-container"
              });
              this.masterContainerEl.appendChild(r);
              for (var n = 0, i = t; n < i.length; n++) {
                var o = i[n];
                r.appendChild(o.el);
              }
              return [r];
            }
          }),
          (t.prototype.computeSegSizes = function(e) {
            for (var t = this.timeAxis, r = 0, n = e; r < n.length; r++) {
              var i = n[r],
                o = t.rangeToCoords(i);
              (i.left = o.left), (i.right = o.right);
            }
          }),
          (t.prototype.assignSegSizes = function(e) {
            for (var t = 0, r = e; t < r.length; t++) {
              var n = r[t];
              R(n.el, {
                left: n.left,
                right: -n.right
              });
            }
          }),
          t
        );
      })(ti),
      ks = (function(e) {
        function t(t, r, n, i) {
          var o = e.call(this, t, n) || this;
          (o.slicer = new Ms()),
            (o.renderEventDrag = gr(o._renderEventDrag, o._unrenderEventDrag)),
            (o.renderEventResize = gr(
              o._renderEventResize,
              o._unrenderEventResize
            ));
          var s = (o.fillRenderer = new Is(t, n, i)),
            a = (o.eventRenderer = new Ds(t, r, i));
          return (
            (o.mirrorRenderer = new Ds(t, r, i)),
            (o.renderBusinessHours = gr(
              s.renderSegs.bind(s, "businessHours"),
              s.unrender.bind(s, "businessHours")
            )),
            (o.renderDateSelection = gr(
              s.renderSegs.bind(s, "highlight"),
              s.unrender.bind(s, "highlight")
            )),
            (o.renderBgEvents = gr(
              s.renderSegs.bind(s, "bgEvent"),
              s.unrender.bind(s, "bgEvent")
            )),
            (o.renderFgEvents = gr(a.renderSegs.bind(a), a.unrender.bind(a))),
            (o.renderEventSelection = gr(
              a.selectByInstanceId.bind(a),
              a.unselectByInstanceId.bind(a),
              [o.renderFgEvents]
            )),
            (o.timeAxis = i),
            o
          );
        }
        return (
          Zo(t, e),
          (t.prototype.render = function(e) {
            var t = this.slicer.sliceProps(
              e,
              e.dateProfile,
              this.timeAxis.tDateProfile.isTimeScale
                ? null
                : e.nextDayThreshold,
              this,
              this.timeAxis
            );
            this.renderBusinessHours(t.businessHourSegs),
              this.renderDateSelection(t.dateSelectionSegs),
              this.renderBgEvents(t.bgEventSegs),
              this.renderFgEvents(t.fgEventSegs),
              this.renderEventSelection(t.eventSelection),
              this.renderEventDrag(t.eventDrag),
              this.renderEventResize(t.eventResize);
          }),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.renderBusinessHours.unrender(),
              this.renderDateSelection.unrender(),
              this.renderBgEvents.unrender(),
              this.renderFgEvents.unrender(),
              this.renderEventSelection.unrender(),
              this.renderEventDrag.unrender(),
              this.renderEventResize.unrender();
          }),
          (t.prototype._renderEventDrag = function(e) {
            e &&
              (this.eventRenderer.hideByHash(e.affectedInstances),
              this.mirrorRenderer.renderSegs(e.segs, {
                isDragging: !0,
                sourceSeg: e.sourceSeg
              }));
          }),
          (t.prototype._unrenderEventDrag = function(e) {
            e &&
              (this.eventRenderer.showByHash(e.affectedInstances),
              this.mirrorRenderer.unrender(e.segs, {
                isDragging: !0,
                sourceSeg: e.sourceSeg
              }));
          }),
          (t.prototype._renderEventResize = function(e) {
            if (e) {
              var t = e.segs.map(function(e) {
                return Ko({}, e);
              });
              this.eventRenderer.hideByHash(e.affectedInstances),
                this.fillRenderer.renderSegs("highlight", t),
                this.mirrorRenderer.renderSegs(e.segs, {
                  isDragging: !0,
                  sourceSeg: e.sourceSeg
                });
            }
          }),
          (t.prototype._unrenderEventResize = function(e) {
            e &&
              (this.eventRenderer.showByHash(e.affectedInstances),
              this.fillRenderer.unrender("highlight"),
              this.mirrorRenderer.unrender(e.segs, {
                isDragging: !0,
                sourceSeg: e.sourceSeg
              }));
          }),
          (t.prototype.updateSize = function(e) {
            var t = this.fillRenderer,
              r = this.eventRenderer,
              n = this.mirrorRenderer;
            t.computeSizes(e),
              r.computeSizes(e),
              n.computeSizes(e),
              t.assignSizes(e),
              r.assignSizes(e),
              n.assignSizes(e);
          }),
          t
        );
      })(Or),
      Ms = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Zo(t, e),
          (t.prototype.sliceRange = function(e, t) {
            var r = t.tDateProfile,
              n = t.props.dateProfile,
              i = (function(e, t, r) {
                if (!t.isTimeScale && ((e = Be(e)), t.largeUnit)) {
                  var n = e;
                  ((e = {
                    start: r.startOf(e.start, t.largeUnit),
                    end: r.startOf(e.end, t.largeUnit)
                  }).end.valueOf() !== n.end.valueOf() ||
                    e.end <= e.start) &&
                    (e = {
                      start: e.start,
                      end: r.add(e.end, t.slotDuration)
                    });
                }
                return e;
              })(e, r, t.dateEnv),
              o = [];
            if (
              t.computeDateSnapCoverage(i.start) <
              t.computeDateSnapCoverage(i.end)
            ) {
              var s = ct(i, r.normalizedRange);
              s &&
                o.push({
                  start: s.start,
                  end: s.end,
                  isStart:
                    s.start.valueOf() === i.start.valueOf() &&
                    us(s.start, r, n, t.view),
                  isEnd:
                    s.end.valueOf() === i.end.valueOf() &&
                    us(Y(s.end, -1), r, n, t.view)
                });
            }
            return o;
          }),
          t
        );
      })(ui),
      Ps = Nr({
        defaultView: "timelineDay",
        views: {
          timeline: {
            class: (function(e) {
              function t(t, r, n, i) {
                var o = e.call(this, t, r, n, i) || this;
                return (
                  o.el.classList.add("fc-timeline"),
                  !1 === o.opt("eventOverlap") &&
                    o.el.classList.add("fc-no-overlap"),
                  (o.el.innerHTML = o.renderSkeletonHtml()),
                  (o.timeAxis = new Ts(
                    o.context,
                    o.el.querySelector("thead .fc-time-area"),
                    o.el.querySelector("tbody .fc-time-area")
                  )),
                  (o.lane = new ks(
                    o.context,
                    o.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl,
                    o.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl,
                    o.timeAxis
                  )),
                  t.calendar.registerInteractiveComponent(o, {
                    el: o.timeAxis.slats.el
                  }),
                  o
                );
              }
              return (
                Zo(t, e),
                (t.prototype.destroy = function() {
                  this.timeAxis.destroy(),
                    this.lane.destroy(),
                    e.prototype.destroy.call(this),
                    this.calendar.unregisterInteractiveComponent(this);
                }),
                (t.prototype.renderSkeletonHtml = function() {
                  var e = this.theme;
                  return (
                    '<table class="' +
                    e.getClass("tableGrid") +
                    '"> <thead class="fc-head"> <tr> <td class="fc-time-area ' +
                    e.getClass("widgetHeader") +
                    '"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-time-area ' +
                    e.getClass("widgetContent") +
                    '"></td> </tr> </tbody> </table>'
                  );
                }),
                (t.prototype.render = function(t) {
                  e.prototype.render.call(this, t),
                    this.timeAxis.receiveProps({
                      dateProfile: t.dateProfile
                    }),
                    this.lane.receiveProps(
                      Ko({}, t, {
                        nextDayThreshold: this.nextDayThreshold
                      })
                    );
                }),
                (t.prototype.updateSize = function(e, t, r) {
                  this.timeAxis.updateSize(e, t, r), this.lane.updateSize(e);
                }),
                (t.prototype.getNowIndicatorUnit = function(e) {
                  return this.timeAxis.getNowIndicatorUnit(e);
                }),
                (t.prototype.renderNowIndicator = function(e) {
                  this.timeAxis.renderNowIndicator(e);
                }),
                (t.prototype.unrenderNowIndicator = function() {
                  this.timeAxis.unrenderNowIndicator();
                }),
                (t.prototype.computeDateScroll = function(e) {
                  return this.timeAxis.computeDateScroll(e);
                }),
                (t.prototype.applyScroll = function(t, r) {
                  e.prototype.applyScroll.call(this, t, r);
                  var n = this.calendar;
                  (r ||
                    n.isViewUpdated ||
                    n.isDatesUpdated ||
                    n.isEventsUpdated) &&
                    this.timeAxis.updateStickyScrollers();
                }),
                (t.prototype.applyDateScroll = function(e) {
                  this.timeAxis.applyDateScroll(e);
                }),
                (t.prototype.queryScroll = function() {
                  var e = this.timeAxis.layout.bodyScroller.enhancedScroll;
                  return {
                    top: e.getScrollTop(),
                    left: e.getScrollLeft()
                  };
                }),
                (t.prototype.buildPositionCaches = function() {
                  this.timeAxis.slats.updateSize();
                }),
                (t.prototype.queryHit = function(e, t, r, n) {
                  var i = this.timeAxis.slats.positionToHit(e);
                  if (i)
                    return {
                      component: this,
                      dateSpan: i.dateSpan,
                      rect: {
                        left: i.left,
                        right: i.right,
                        top: 0,
                        bottom: n
                      },
                      dayEl: i.dayEl,
                      layer: 0
                    };
                }),
                t
              );
            })(Qn),
            eventResizableFromStart: !0
          },
          timelineDay: {
            type: "timeline",
            duration: {
              days: 1
            }
          },
          timelineWeek: {
            type: "timeline",
            duration: {
              weeks: 1
            }
          },
          timelineMonth: {
            type: "timeline",
            duration: {
              months: 1
            }
          },
          timelineYear: {
            type: "timeline",
            duration: {
              years: 1
            }
          }
        }
      }),
      Hs = function(e, t) {
        return (Hs =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
    function _s(e, t) {
      function r() {
        this.constructor = e;
      }
      Hs(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var Ls = function() {
      return (Ls =
        Object.assign ||
        function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
    function Os(e, t) {
      var r = e.resourceEditable;
      if (null == r) {
        var n = e.sourceId && t.state.eventSources[e.sourceId];
        n && (r = n.extendedProps.resourceEditable),
          null == r &&
            null == (r = t.opt("eventResourceEditable")) &&
            (r = t.opt("editable"));
      }
      return r;
    }
    var As = (function() {
      function e() {
        this.filterResources = vt(Ns);
      }
      return (
        (e.prototype.transform = function(e, t, r, n) {
          if (t.class.needsResourceData)
            return {
              resourceStore: this.filterResources(
                r.resourceStore,
                n.opt("filterResourcesWithEvents"),
                r.eventStore,
                r.dateProfile.activeRange
              ),
              resourceEntityExpansions: r.resourceEntityExpansions
            };
        }),
        e
      );
    })();
    function Ns(e, t, r, n) {
      if (t) {
        var i = (function(e, t) {
          var r = {};
          for (var n in e)
            for (
              var i = e[n], o = 0, s = t[i.defId].resourceIds;
              o < s.length;
              o++
            ) {
              var a = s[o];
              r[a] = !0;
            }
          return r;
        })(
          (function(e, t) {
            return Ze(e, function(e) {
              return ut(e.range, t);
            });
          })(r.instances, n),
          r.defs
        );
        return (
          Ls(
            i,
            (function(e, t) {
              var r = {};
              for (var n in e)
                for (var i = void 0; (i = t[n]) && (n = i.parentId); )
                  r[n] = !0;
              return r;
            })(i, e)
          ),
          Ze(e, function(e, t) {
            return i[t];
          })
        );
      }
      return e;
    }
    var zs = (function() {
      function e() {
        (this.buildResourceEventUis = gt(Bs, Qe)),
          (this.injectResourceEventUis = vt(Us));
      }
      return (
        (e.prototype.transform = function(e, t, r) {
          if (!t.class.needsResourceData)
            return {
              eventUiBases: this.injectResourceEventUis(
                e.eventUiBases,
                e.eventStore.defs,
                this.buildResourceEventUis(r.resourceStore)
              )
            };
        }),
        e
      );
    })();
    function Bs(e) {
      return Xe(e, function(e) {
        return e.ui;
      });
    }
    function Us(e, t, r) {
      return Xe(e, function(e, n) {
        return n
          ? (function(e, t, r) {
              for (var n = [], i = 0, o = t.resourceIds; i < o.length; i++) {
                var s = o[i];
                r[s] && n.unshift(r[s]);
              }
              return n.unshift(e), sr(n);
            })(e, t[n], r)
          : e;
      });
    }
    var js = {
        id: String
      },
      Gs = [],
      Vs = 0;
    function Ws(e) {
      Gs.push(e);
    }
    function Fs(e, t, r) {
      var n = Ne(e, js);
      return (
        (n.sourceId = String(Vs++)),
        (n.sourceDefId = r),
        (n.meta = t),
        (n.publicId = n.id),
        (n.isFetching = !1),
        (n.latestFetchId = ""),
        (n.fetchRange = null),
        delete n.id,
        n
      );
    }
    function qs(e, t, r, n) {
      switch (t.type) {
        case "INIT":
          return Zs(n.opt("resources"), n);
        case "RESET_RESOURCE_SOURCE":
          return Zs(t.resourceSourceInput, n, !0);
        case "PREV":
        case "NEXT":
        case "SET_DATE":
        case "SET_VIEW_TYPE":
          return (function(e, t, r) {
            return !r.opt("refetchResourcesOnNavigate") ||
              (function(e) {
                return Boolean(Gs[e.sourceDefId].ignoreRange);
              })(e) ||
              (e.fetchRange && dt(e.fetchRange, t))
              ? e
              : Xs(e, t, r);
          })(e, r.activeRange, n);
        case "RECEIVE_RESOURCES":
        case "RECEIVE_RESOURCE_ERROR":
          return (function(e, t, r) {
            if (t === e.latestFetchId)
              return Ls({}, e, {
                isFetching: !1,
                fetchRange: r
              });
            return e;
          })(e, t.fetchId, t.fetchRange);
        case "REFETCH_RESOURCES":
          return Xs(e, r.activeRange, n);
        default:
          return e;
      }
    }
    var Ys = 0;
    function Zs(e, t, r) {
      if (e) {
        var n = (function(e) {
          for (var t = Gs.length - 1; t >= 0; t--) {
            var r = Gs[t].parseMeta(e);
            if (r) {
              var n = Fs("object" == typeof e && e ? e : {}, r, t);
              return (n._raw = e), n;
            }
          }
          return null;
        })(e);
        return (
          (!r && t.opt("refetchResourcesOnNavigate")) || (n = Xs(n, null, t)), n
        );
      }
      return null;
    }
    function Xs(e, t, r) {
      var n,
        i = ((n = e.sourceDefId), Gs[n]),
        o = String(Ys++);
      return (
        i.fetch(
          {
            resourceSource: e,
            calendar: r,
            range: t
          },
          function(e) {
            (r.afterSizingTriggers._resourcesRendered = [null]),
              r.dispatch({
                type: "RECEIVE_RESOURCES",
                fetchId: o,
                fetchRange: t,
                rawResources: e.rawResources
              });
          },
          function(e) {
            r.dispatch({
              type: "RECEIVE_RESOURCE_ERROR",
              fetchId: o,
              fetchRange: t,
              error: e
            });
          }
        ),
        Ls({}, e, {
          isFetching: !0,
          latestFetchId: o
        })
      );
    }
    var Ks = {
        id: String,
        title: String,
        parentId: String,
        businessHours: null,
        children: null,
        extendedProps: null
      },
      Js = "_fc:",
      Qs = 0;
    function $s(e, t, r, n) {
      void 0 === t && (t = "");
      var i = {},
        o = Ne(e, Ks, {}, i),
        s = {},
        a = ir("event", i, n, s);
      if (
        (o.id || (o.id = Js + Qs++),
        o.parentId || (o.parentId = t),
        (o.businessHours = o.businessHours ? vr(o.businessHours, n) : null),
        (o.ui = a),
        (o.extendedProps = Ls({}, s, o.extendedProps)),
        Object.freeze(a.classNames),
        Object.freeze(o.extendedProps),
        r[o.id])
      );
      else if (((r[o.id] = o), o.children)) {
        for (var l = 0, c = o.children; l < c.length; l++) {
          $s(c[l], o.id, r, n);
        }
        delete o.children;
      }
      return o;
    }
    function ea(e, t, r, n) {
      switch (t.type) {
        case "INIT":
          return {};
        case "RECEIVE_RESOURCES":
          return (function(e, t, r, n, i) {
            if (n.latestFetchId === r) {
              for (var o = {}, s = 0, a = t; s < a.length; s++) {
                $s(a[s], "", o, i);
              }
              return o;
            }
            return e;
          })(e, t.rawResources, t.fetchId, r, n);
        case "ADD_RESOURCE":
          return (i = e), (o = t.resourceHash), Ls({}, i, o);
        case "REMOVE_RESOURCE":
          return (function(e, t) {
            var r = Ls({}, e);
            for (var n in (delete r[t], r))
              r[n].parentId === t &&
                (r[n] = Ls({}, r[n], {
                  parentId: ""
                }));
            return r;
          })(e, t.resourceId);
        case "SET_RESOURCE_PROP":
          return (function(e, t, r, n) {
            var i,
              o,
              s = e[t];
            return s
              ? Ls(
                  {},
                  e,
                  (((i = {})[t] = Ls({}, s, (((o = {})[r] = n), o))), i)
                )
              : e;
          })(e, t.resourceId, t.propName, t.propValue);
        case "RESET_RESOURCES":
          return Xe(e, function(e) {
            return Ls({}, e);
          });
        default:
          return e;
      }
      var i, o;
    }
    var ta = {
      resourceId: String,
      resourceIds: function(e) {
        return (e || []).map(function(e) {
          return String(e);
        });
      },
      resourceEditable: Boolean
    };
    var ra = (function() {
      function e(e, t) {
        (this._calendar = e), (this._resource = t);
      }
      return (
        (e.prototype.setProp = function(e, t) {
          this._calendar.dispatch({
            type: "SET_RESOURCE_PROP",
            resourceId: this._resource.id,
            propName: e,
            propValue: t
          });
        }),
        (e.prototype.remove = function() {
          this._calendar.dispatch({
            type: "REMOVE_RESOURCE",
            resourceId: this._resource.id
          });
        }),
        (e.prototype.getParent = function() {
          var t = this._calendar,
            r = this._resource.parentId;
          return r ? new e(t, t.state.resourceSource[r]) : null;
        }),
        (e.prototype.getChildren = function() {
          var t = this._resource.id,
            r = this._calendar,
            n = r.state.resourceStore,
            i = [];
          for (var o in n) n[o].parentId === t && i.push(new e(r, n[o]));
          return i;
        }),
        (e.prototype.getEvents = function() {
          var e = this._resource.id,
            t = this._calendar,
            r = t.state.eventStore,
            n = r.defs,
            i = r.instances,
            o = [];
          for (var s in i) {
            var a = i[s],
              l = n[a.defId];
            -1 !== l.resourceIds.indexOf(e) && o.push(new _t(t, l, a));
          }
          return o;
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function() {
            return this._resource.id;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "title", {
          get: function() {
            return this._resource.title;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventConstraint", {
          get: function() {
            return this._resource.ui.constraints[0] || null;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventOverlap", {
          get: function() {
            return this._resource.ui.overlap;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventAllow", {
          get: function() {
            return this._resource.ui.allows[0] || null;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventBackgroundColor", {
          get: function() {
            return this._resource.ui.backgroundColor;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventBorderColor", {
          get: function() {
            return this._resource.ui.borderColor;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventTextColor", {
          get: function() {
            return this._resource.ui.textColor;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventClassNames", {
          get: function() {
            return this._resource.ui.classNames;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "extendedProps", {
          get: function() {
            return this._resource.extendedProps;
          },
          enumerable: !0,
          configurable: !0
        }),
        e
      );
    })();
    (qn.prototype.addResource = function(e, t) {
      var r, n, i;
      return (
        void 0 === t && (t = !0),
        e instanceof ra
          ? (((r = {})[(i = e._resource).id] = i), (n = r))
          : (i = $s(e, "", (n = {}), this)),
        t &&
          this.component.view.addScroll({
            forcedRowId: i.id
          }),
        this.dispatch({
          type: "ADD_RESOURCE",
          resourceHash: n
        }),
        new ra(this, i)
      );
    }),
      (qn.prototype.getResourceById = function(e) {
        if (((e = String(e)), this.state.resourceStore)) {
          var t = this.state.resourceStore[e];
          if (t) return new ra(this, t);
        }
        return null;
      }),
      (qn.prototype.getResources = function() {
        var e = this.state.resourceStore,
          t = [];
        if (e) for (var r in e) t.push(new ra(this, e[r]));
        return t;
      }),
      (qn.prototype.getTopLevelResources = function() {
        var e = this.state.resourceStore,
          t = [];
        if (e) for (var r in e) e[r].parentId || t.push(new ra(this, e[r]));
        return t;
      }),
      (qn.prototype.rerenderResources = function() {
        this.dispatch({
          type: "RESET_RESOURCES"
        });
      }),
      (qn.prototype.refetchResources = function() {
        this.dispatch({
          type: "REFETCH_RESOURCES"
        });
      });
    var na = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        _s(t, e),
        (t.prototype.getKeyInfo = function(e) {
          return Ls(
            {
              "": {}
            },
            e.resourceStore
          );
        }),
        (t.prototype.getKeysForDateSpan = function(e) {
          return [e.resourceId || ""];
        }),
        (t.prototype.getKeysForEventDef = function(e) {
          var t = e.resourceIds;
          return t.length ? t : [""];
        }),
        t
      );
    })(mr);
    function ia(e, t) {
      return Ls({}, t, {
        constraints: oa(e, t.constraints)
      });
    }
    function oa(e, t) {
      return t.map(function(t) {
        var r = t.defs;
        if (r)
          for (var n in r) {
            var i = r[n].resourceIds;
            if (i.length && -1 === i.indexOf(e)) return !1;
          }
        return t;
      });
    }
    (_t.prototype.getResources = function() {
      var e = this._calendar;
      return this._def.resourceIds.map(function(t) {
        return e.getResourceById(t);
      });
    }),
      (_t.prototype.setResources = function(e) {
        for (var t = [], r = 0, n = e; r < n.length; r++) {
          var i = n[r],
            o = null;
          "string" == typeof i
            ? (o = i)
            : "number" == typeof i
            ? (o = String(i))
            : i instanceof ra
            ? (o = i.id)
            : console.warn("unknown resource type: " + i),
            o && t.push(o);
        }
        this.mutate({
          standardProps: {
            resourceIds: t
          }
        });
      });
    var sa = "2019-08-10",
      aa = 372,
      la = "http://fullcalendar.io/scheduler/license/",
      ca = [
        "GPL-My-Project-Is-Open-Source",
        "CC-Attribution-NonCommercial-NoDerivatives"
      ],
      da = {
        position: "absolute",
        "z-index": 99999,
        bottom: "1px",
        left: "1px",
        background: "#eee",
        "border-color": "#ddd",
        "border-style": "solid",
        "border-width": "1px 1px 0 0",
        padding: "2px 4px",
        "font-size": "12px",
        "border-top-right-radius": "3px"
      };
    var ua = {
      resources: function(e, t, r) {
        var n = t.state.resourceSource._raw;
        r(n, e) ||
          t.dispatch({
            type: "RESET_RESOURCE_SOURCE",
            resourceSourceInput: e
          });
      }
    };
    function pa(e, t) {
      return "function" == typeof e
        ? function(r) {
            return e(new ra(t, r));
          }
        : function(e) {
            return e.title || (0 === (t = e.id).indexOf(Js) ? "" : t);
            var t;
          };
    }
    Ws({
      ignoreRange: !0,
      parseMeta: function(e) {
        return Array.isArray(e)
          ? e
          : Array.isArray(e.resources)
          ? e.resources
          : null;
      },
      fetch: function(e, t) {
        t({
          rawResources: e.resourceSource.meta
        });
      }
    }),
      Ws({
        parseMeta: function(e) {
          return "function" == typeof e
            ? e
            : "function" == typeof e.resources
            ? e.resources
            : null;
        },
        fetch: function(e, t, r) {
          var n = e.calendar.dateEnv,
            i = e.resourceSource.meta,
            o = {};
          e.range &&
            (o = {
              start: n.toDate(e.range.start),
              end: n.toDate(e.range.end),
              startStr: n.formatIso(e.range.start),
              endStr: n.formatIso(e.range.end),
              timeZone: n.timeZone
            }),
            Tr(
              i.bind(null, o),
              function(e) {
                t({
                  rawResources: e
                });
              },
              r
            );
        }
      }),
      Ws({
        parseMeta: function(e) {
          if ("string" == typeof e)
            e = {
              url: e
            };
          else if (!e || "object" != typeof e || !e.url) return null;
          return {
            url: e.url,
            method: (e.method || "GET").toUpperCase(),
            extraParams: e.extraParams
          };
        },
        fetch: function(e, t, r) {
          var n = e.resourceSource.meta,
            i = (function(e, t, r) {
              var n,
                i,
                o,
                s,
                a = r.dateEnv,
                l = {};
              t &&
                ((n = r.opt("startParam")),
                (i = r.opt("endParam")),
                (o = r.opt("timeZoneParam")),
                (l[n] = a.formatIso(t.start)),
                (l[i] = a.formatIso(t.end)),
                "local" !== a.timeZone && (l[o] = a.timeZone));
              s =
                "function" == typeof e.extraParams
                  ? e.extraParams()
                  : e.extraParams || {};
              return Ls(l, s), l;
            })(n, e.range, e.calendar);
          jr(
            n.method,
            n.url,
            i,
            function(e, r) {
              t({
                rawResources: e,
                xhr: r
              });
            },
            function(e, t) {
              r({
                message: e,
                xhr: t
              });
            }
          );
        }
      });
    var ha = (function(e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          return (
            (n.datesAboveResources = n.opt("datesAboveResources")),
            (n.resourceTextFunc = pa(n.opt("resourceText"), n.calendar)),
            (r.innerHTML = ""),
            r.appendChild(
              (n.el = d(
                '<div class="fc-row ' +
                  n.theme.getClass("headerRow") +
                  '"><table class="' +
                  n.theme.getClass("tableGrid") +
                  '"><thead></thead></table></div>'
              ))
            ),
            (n.thead = n.el.querySelector("thead")),
            n
          );
        }
        return (
          _s(t, e),
          (t.prototype.destroy = function() {
            y(this.el);
          }),
          (t.prototype.render = function(e) {
            var t;
            (this.dateFormat = It(
              this.opt("columnHeaderFormat") ||
                si(e.datesRepDistinctDays, e.dates.length)
            )),
              (t =
                1 === e.dates.length
                  ? this.renderResourceRow(e.resources)
                  : this.datesAboveResources
                  ? this.renderDayAndResourceRows(e.dates, e.resources)
                  : this.renderResourceAndDayRows(e.resources, e.dates)),
              (this.thead.innerHTML = t),
              this.processResourceEls(e.resources);
          }),
          (t.prototype.renderResourceRow = function(e) {
            var t = this,
              r = e.map(function(e) {
                return t.renderResourceCell(e, 1);
              });
            return this.buildTr(r);
          }),
          (t.prototype.renderDayAndResourceRows = function(e, t) {
            for (var r = [], n = [], i = 0, o = e; i < o.length; i++) {
              var s = o[i];
              r.push(this.renderDateCell(s, t.length));
              for (var a = 0, l = t; a < l.length; a++) {
                var c = l[a];
                n.push(this.renderResourceCell(c, 1, s));
              }
            }
            return this.buildTr(r) + this.buildTr(n);
          }),
          (t.prototype.renderResourceAndDayRows = function(e, t) {
            for (var r = [], n = [], i = 0, o = e; i < o.length; i++) {
              var s = o[i];
              r.push(this.renderResourceCell(s, t.length));
              for (var a = 0, l = t; a < l.length; a++) {
                var c = l[a];
                n.push(this.renderDateCell(c, 1, s));
              }
            }
            return this.buildTr(r) + this.buildTr(n);
          }),
          (t.prototype.renderResourceCell = function(e, t, r) {
            var n = this.dateEnv;
            return (
              '<th class="fc-resource-cell" data-resource-id="' +
              e.id +
              '"' +
              (r
                ? ' data-date="' +
                  n.formatIso(r, {
                    omitTime: !0
                  }) +
                  '"'
                : "") +
              (t > 1 ? ' colspan="' + t + '"' : "") +
              ">" +
              $t(this.resourceTextFunc(e)) +
              "</th>"
            );
          }),
          (t.prototype.renderDateCell = function(e, t, r) {
            var n = this.props;
            return ai(
              e,
              n.dateProfile,
              n.datesRepDistinctDays,
              n.dates.length * n.resources.length,
              this.dateFormat,
              this.context,
              t,
              r ? 'data-resource-id="' + r.id + '"' : ""
            );
          }),
          (t.prototype.buildTr = function(e) {
            return (
              e.length || (e = ["<td>&nbsp;</td>"]),
              this.props.renderIntroHtml &&
                (e = [this.props.renderIntroHtml()].concat(e)),
              this.isRtl && e.reverse(),
              "<tr>" + e.join("") + "</tr>"
            );
          }),
          (t.prototype.processResourceEls = function(e) {
            var t = this,
              r = this.view;
            w(this.thead, ".fc-resource-cell").forEach(function(n, i) {
              (i %= e.length), t.isRtl && (i = e.length - 1 - i);
              var o = e[i];
              r.publiclyTrigger("resourceRender", [
                {
                  resource: new ra(t.calendar, o),
                  el: n,
                  view: r
                }
              ]);
            });
          }),
          t
        );
      })(Lr),
      fa = (function() {
        function e(e, t) {
          (this.dayTable = e),
            (this.resources = t),
            (this.resourceIndex = new ya(t)),
            (this.rowCnt = e.rowCnt),
            (this.colCnt = e.colCnt * t.length),
            (this.cells = this.buildCells());
        }
        return (
          (e.prototype.buildCells = function() {
            for (
              var e = this.rowCnt,
                t = this.dayTable,
                r = this.resources,
                n = [],
                i = 0;
              i < e;
              i++
            ) {
              for (var o = [], s = 0; s < t.colCnt; s++)
                for (var a = 0; a < r.length; a++) {
                  var l = r[a],
                    c = 'data-resource-id="' + l.id + '"';
                  o[this.computeCol(s, a)] = {
                    date: t.cells[i][s].date,
                    resource: l,
                    htmlAttrs: c
                  };
                }
              n.push(o);
            }
            return n;
          }),
          e
        );
      })(),
      va = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          _s(t, e),
          (t.prototype.computeCol = function(e, t) {
            return t * this.dayTable.colCnt + e;
          }),
          (t.prototype.computeColRanges = function(e, t, r) {
            return [
              {
                firstCol: this.computeCol(e, r),
                lastCol: this.computeCol(t, r),
                isStart: !0,
                isEnd: !0
              }
            ];
          }),
          t
        );
      })(fa),
      ga = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          _s(t, e),
          (t.prototype.computeCol = function(e, t) {
            return e * this.resources.length + t;
          }),
          (t.prototype.computeColRanges = function(e, t, r) {
            for (var n = [], i = e; i <= t; i++) {
              var o = this.computeCol(i, r);
              n.push({
                firstCol: o,
                lastCol: o,
                isStart: i === e,
                isEnd: i === t
              });
            }
            return n;
          }),
          t
        );
      })(fa),
      ya = function(e) {
        for (var t = {}, r = [], n = 0; n < e.length; n++) {
          var i = e[n].id;
          r.push(i), (t[i] = n);
        }
        (this.ids = r), (this.indicesById = t), (this.length = e.length);
      },
      ma = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          _s(t, e),
          (t.prototype.getKeyInfo = function(e) {
            var t = e.resourceDayTable,
              r = Xe(t.resourceIndex.indicesById, function(e) {
                return t.resources[e];
              });
            return (r[""] = {}), r;
          }),
          (t.prototype.getKeysForDateSpan = function(e) {
            return [e.resourceId || ""];
          }),
          (t.prototype.getKeysForEventDef = function(e) {
            var t = e.resourceIds;
            return t.length ? t : [""];
          }),
          t
        );
      })(mr),
      Sa = [],
      Ea = (function() {
        function e() {
          (this.joinDateSelection = vt(this.joinSegs)),
            (this.joinBusinessHours = vt(this.joinSegs)),
            (this.joinFgEvents = vt(this.joinSegs)),
            (this.joinBgEvents = vt(this.joinSegs)),
            (this.joinEventDrags = vt(this.joinInteractions)),
            (this.joinEventResizes = vt(this.joinInteractions));
        }
        return (
          (e.prototype.joinProps = function(e, t) {
            for (
              var r = [],
                n = [],
                i = [],
                o = [],
                s = [],
                a = [],
                l = "",
                c = 0,
                d = t.resourceIndex.ids.concat([""]);
              c < d.length;
              c++
            ) {
              var u = d[c],
                p = e[u];
              r.push(p.dateSelectionSegs),
                n.push(u ? p.businessHourSegs : Sa),
                i.push(u ? p.fgEventSegs : Sa),
                o.push(p.bgEventSegs),
                s.push(p.eventDrag),
                a.push(p.eventResize),
                (l = l || p.eventSelection);
            }
            return {
              dateSelectionSegs: this.joinDateSelection.apply(
                this,
                [t].concat(r)
              ),
              businessHourSegs: this.joinBusinessHours.apply(
                this,
                [t].concat(n)
              ),
              fgEventSegs: this.joinFgEvents.apply(this, [t].concat(i)),
              bgEventSegs: this.joinBgEvents.apply(this, [t].concat(o)),
              eventDrag: this.joinEventDrags.apply(this, [t].concat(s)),
              eventResize: this.joinEventResizes.apply(this, [t].concat(a)),
              eventSelection: l
            };
          }),
          (e.prototype.joinSegs = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t[r - 1] = arguments[r];
            for (var n = e.resources.length, i = [], o = 0; o < n; o++) {
              for (var s = 0, a = t[o]; s < a.length; s++) {
                var l = a[s];
                i.push.apply(i, this.transformSeg(l, e, o));
              }
              for (var c = 0, d = t[n]; c < d.length; c++) {
                l = d[c];
                i.push.apply(i, this.transformSeg(l, e, o));
              }
            }
            return i;
          }),
          (e.prototype.expandSegs = function(e, t) {
            for (var r = e.resources.length, n = [], i = 0; i < r; i++)
              for (var o = 0, s = t; o < s.length; o++) {
                var a = s[o];
                n.push.apply(n, this.transformSeg(a, e, i));
              }
            return n;
          }),
          (e.prototype.joinInteractions = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t[r - 1] = arguments[r];
            for (
              var n = e.resources.length,
                i = {},
                o = [],
                s = !1,
                a = null,
                l = 0;
              l < n;
              l++
            ) {
              var c = t[l];
              if (c) {
                for (var d = 0, u = c.segs; d < u.length; d++) {
                  var p = u[d];
                  o.push.apply(o, this.transformSeg(p, e, l));
                }
                Ls(i, c.affectedInstances),
                  (s = s || c.isEvent),
                  (a = a || c.sourceSeg);
              }
              if (t[n])
                for (var h = 0, f = t[n].segs; h < f.length; h++) {
                  p = f[h];
                  o.push.apply(o, this.transformSeg(p, e, l));
                }
            }
            return {
              affectedInstances: i,
              segs: o,
              isEvent: s,
              sourceSeg: a
            };
          }),
          e
        );
      })();
    function ba(e, t) {
      return wa(e, [], t, !1, {}, !0).map(function(e) {
        return e.resource;
      });
    }
    function wa(e, t, r, n, i, o) {
      var s = [];
      return (
        (function e(t, r, n, i, o, s, a) {
          for (var l = 0; l < t.length; l++) {
            var c = t[l],
              d = c.group;
            if (d)
              if (n) {
                var u = r.length,
                  p = i.length;
                if ((e(c.children, r, n, i.concat(0), o, s, a), u < r.length)) {
                  var h = r[u],
                    f = (h.rowSpans = h.rowSpans.slice());
                  f[p] = r.length - u;
                }
              } else {
                var v = d.spec.field + ":" + d.value,
                  g = null != s[v] ? s[v] : a;
                r.push({
                  id: v,
                  group: d,
                  isExpanded: g
                }),
                  g && e(c.children, r, n, i, o + 1, s, a);
              }
            else if (c.resource) {
              var v = c.resource.id,
                g = null != s[v] ? s[v] : a;
              r.push({
                id: v,
                rowSpans: i,
                depth: o,
                isExpanded: g,
                hasChildren: Boolean(c.children.length),
                resource: c.resource,
                resourceFields: c.resourceFields
              }),
                g && e(c.children, r, n, i, o + 1, s, a);
            }
          }
        })(
          (function(e, t, r, n) {
            var i = (function(e, t) {
                var r = {};
                for (var n in e) {
                  var i = e[n];
                  r[n] = {
                    resource: i,
                    resourceFields: Ca(i),
                    children: []
                  };
                }
                for (var n in e) {
                  if ((i = e[n]).parentId) {
                    var o = r[i.parentId];
                    o && Da(r[n], o.children, t);
                  }
                }
                return r;
              })(e, n),
              o = [];
            for (var s in i) {
              var a = i[s];
              a.resource.parentId || Ta(a, o, r, 0, t, n);
            }
            return o;
          })(e, n ? -1 : 1, t, r),
          s,
          n,
          [],
          0,
          i,
          o
        ),
        s
      );
    }
    function Ta(e, t, r, n, i, o) {
      r.length && (-1 === i || n <= i)
        ? Ta(
            e,
            (function(e, t, r) {
              var n,
                i,
                o = e.resourceFields[r.field];
              if (r.order)
                for (i = 0; i < t.length; i++) {
                  if ((a = t[i]).group) {
                    var s = ke(o, a.group.value) * r.order;
                    if (0 === s) {
                      n = a;
                      break;
                    }
                    if (s < 0) break;
                  }
                }
              else
                for (i = 0; i < t.length; i++) {
                  var a;
                  if ((a = t[i]).group && o === a.group.value) {
                    n = a;
                    break;
                  }
                }
              n ||
                ((n = {
                  group: {
                    value: o,
                    spec: r
                  },
                  children: []
                }),
                t.splice(i, 0, n));
              return n;
            })(e, t, r[0]).children,
            r.slice(1),
            n + 1,
            i,
            o
          )
        : Da(e, t, o);
    }
    function Da(e, t, r) {
      var n;
      for (n = 0; n < t.length; n++) {
        if (xe(t[n].resourceFields, e.resourceFields, r) > 0) break;
      }
      t.splice(n, 0, e);
    }
    function Ca(e) {
      var t = Ls({}, e.extendedProps, e.ui, e);
      return delete t.ui, delete t.extendedProps, t;
    }
    var Ra = Nr({
        reducers: [
          function(e, t, r) {
            var n = qs(e.resourceSource, t, e.dateProfile, r),
              i = ea(e.resourceStore, t, n, r),
              o = (function(e, t) {
                var r;
                switch (t.type) {
                  case "INIT":
                    return {};
                  case "SET_RESOURCE_ENTITY_EXPANDED":
                    return Ls({}, e, (((r = {})[t.id] = t.isExpanded), r));
                  default:
                    return e;
                }
              })(e.resourceEntityExpansions, t);
            return Ls({}, e, {
              resourceSource: n,
              resourceStore: i,
              resourceEntityExpansions: o
            });
          }
        ],
        eventDefParsers: [
          function(e, t, r) {
            var n = Ne(t, ta, {}, r),
              i = n.resourceIds;
            n.resourceId && i.push(n.resourceId),
              (e.resourceIds = i),
              (e.resourceEditable = n.resourceEditable);
          }
        ],
        isDraggableTransformers: [
          function(e, t, r, n) {
            return (
              !(
                e ||
                !n.viewSpec.class.needsResourceData ||
                !Os(t, n.calendar)
              ) || e
            );
          }
        ],
        eventDragMutationMassagers: [
          function(e, t, r) {
            var n = t.dateSpan.resourceId,
              i = r.dateSpan.resourceId;
            n &&
              i &&
              n !== i &&
              (e.resourceMutation = {
                matchResourceId: n,
                setResourceId: i
              });
          }
        ],
        eventDefMutationAppliers: [
          function(e, t, r) {
            var n = t.resourceMutation;
            if (n && Os(e, r)) {
              var i = e.resourceIds.indexOf(n.matchResourceId);
              if (-1 !== i) {
                var o = e.resourceIds.slice();
                o.splice(i, 1),
                  -1 === o.indexOf(n.setResourceId) && o.push(n.setResourceId),
                  (e.resourceIds = o);
              }
            }
          }
        ],
        dateSelectionTransformers: [
          function(e, t) {
            var r = e.dateSpan.resourceId,
              n = t.dateSpan.resourceId;
            if (r && n)
              return (
                (!1 !== e.component.allowAcrossResources || r === n) && {
                  resourceId: r
                }
              );
          }
        ],
        datePointTransforms: [
          function(e, t) {
            return e.resourceId
              ? {
                  resource: t.getResourceById(e.resourceId)
                }
              : {};
          }
        ],
        dateSpanTransforms: [
          function(e, t) {
            return e.resourceId
              ? {
                  resource: t.getResourceById(e.resourceId)
                }
              : {};
          }
        ],
        viewPropsTransformers: [As, zs],
        isPropsValid: function(e, t) {
          var r = new na().splitProps(
            Ls({}, e, {
              resourceStore: t.state.resourceStore
            })
          );
          for (var n in r) {
            var i = r[n];
            if (
              (n &&
                r[""] &&
                (i = Ls({}, i, {
                  eventStore: it(r[""].eventStore, i.eventStore),
                  eventUiBases: Ls({}, r[""].eventUiBases, i.eventUiBases)
                })),
              !Zt(
                i,
                t,
                {
                  resourceId: n
                },
                ia.bind(null, n)
              ))
            )
              return !1;
          }
          return !0;
        },
        externalDefTransforms: [
          function(e) {
            return e.resourceId
              ? {
                  resourceId: e.resourceId
                }
              : {};
          }
        ],
        eventResizeJoinTransforms: [
          function(e, t) {
            if (
              !1 === e.component.allowAcrossResources &&
              e.dateSpan.resourceId !== t.dateSpan.resourceId
            )
              return !1;
          }
        ],
        viewContainerModifiers: [
          function(e, t) {
            var r,
              n = t.opt("schedulerLicenseKey");
            (r = window.location.href),
              /\w+\:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(r) ||
                (function(e) {
                  if (-1 !== ca.indexOf(e)) return !0;
                  var t = (e || "").match(/^(\d+)\-fcs\-(\d+)$/);
                  if (t && 10 === t[1].length) {
                    var r = new Date(1e3 * parseInt(t[2], 10)),
                      n = new Date(Yr.mockSchedulerReleaseDate || sa);
                    if (ne(n)) if (q(n, -aa) < r) return !0;
                  }
                  return !1;
                })(n) ||
                h(
                  e,
                  '<div class="fc-license-message" style="' +
                    $t(er(da)) +
                    '">Please use a valid license key. <a href="' +
                    la +
                    '">More Info</a></div>'
                );
          }
        ],
        eventDropTransformers: [
          function(e, t) {
            var r = e.resourceMutation;
            return r
              ? {
                  oldResource: t.getResourceById(r.matchResourceId),
                  newResource: t.getResourceById(r.setResourceId)
                }
              : {
                  oldResource: null,
                  newResource: null
                };
          }
        ],
        optionChangeHandlers: ua
      }),
      xa = function(e, t) {
        return (xa =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
    function Ia(e, t) {
      function r() {
        this.constructor = e;
      }
      xa(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var ka = function() {
        return (ka =
          Object.assign ||
          function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      Ma = (function(e) {
        function t(t, r, n, i, o) {
          var s = e.call(this, t) || this;
          return (
            (s.isSizeDirty = !1),
            r.insertBefore((s.spreadsheetTr = document.createElement("tr")), n),
            i.insertBefore((s.timeAxisTr = document.createElement("tr")), o),
            s
          );
        }
        return (
          Ia(t, e),
          (t.prototype.destroy = function() {
            y(this.spreadsheetTr),
              y(this.timeAxisTr),
              e.prototype.destroy.call(this);
          }),
          (t.prototype.updateSize = function(e) {
            this.isSizeDirty = !1;
          }),
          t
        );
      })(Lr);
    function Pa(e, t) {
      var r = e.classList;
      t
        ? (r.remove("fc-icon-plus-square"), r.add("fc-icon-minus-square"))
        : (r.remove("fc-icon-minus-square"), r.add("fc-icon-plus-square"));
    }
    function Ha(e, t) {
      e.setAttribute("data-resource-id", t);
    }
    var _a = (function(e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t._renderCells = gr(t.renderCells, t.unrenderCells)),
          (t._updateExpanderIcon = gr(t.updateExpanderIcon, null, [
            t._renderCells
          ])),
          (t.onExpanderClick = function(e) {
            var r = t.props;
            t.calendar.dispatch({
              type: "SET_RESOURCE_ENTITY_EXPANDED",
              id: r.id,
              isExpanded: !r.isExpanded
            });
          }),
          t
        );
      }
      return (
        Ia(t, e),
        (t.prototype.render = function(e) {
          this._renderCells(e.group, e.spreadsheetColCnt),
            this._updateExpanderIcon(e.isExpanded),
            (this.isSizeDirty = !0);
        }),
        (t.prototype.destroy = function() {
          e.prototype.destroy.call(this), this._renderCells.unrender();
        }),
        (t.prototype.renderCells = function(e, t) {
          var r = this.renderSpreadsheetContent(e);
          this.spreadsheetTr.appendChild(
            c(
              "td",
              {
                className: "fc-divider",
                colSpan: t
              },
              (this.spreadsheetHeightEl = c("div", null, r))
            )
          ),
            (this.expanderIconEl = r.querySelector(".fc-icon")),
            this.expanderIconEl.parentElement.addEventListener(
              "click",
              this.onExpanderClick
            ),
            this.timeAxisTr.appendChild(
              c(
                "td",
                {
                  className: "fc-divider"
                },
                (this.timeAxisHeightEl = document.createElement("div"))
              )
            );
        }),
        (t.prototype.unrenderCells = function() {
          (this.spreadsheetTr.innerHTML = ""), (this.timeAxisTr.innerHTML = "");
        }),
        (t.prototype.renderSpreadsheetContent = function(e) {
          var t = this.renderCellText(e),
            r = d(
              '<div class="fc-cell-content"><span class="fc-expander"><span class="fc-icon"></span></span><span class="fc-cell-text">' +
                (t ? $t(t) : "&nbsp;") +
                "</span></div>"
            ),
            n = e.spec.render;
          return "function" == typeof n && (r = n(r, e.value) || r), r;
        }),
        (t.prototype.renderCellText = function(e) {
          var t = e.value || "",
            r = e.spec.text;
          return "function" == typeof r && (t = r(t) || t), t;
        }),
        (t.prototype.getHeightEls = function() {
          return [this.spreadsheetHeightEl, this.timeAxisHeightEl];
        }),
        (t.prototype.updateExpanderIcon = function(e) {
          Pa(this.expanderIconEl, e);
        }),
        t
      );
    })(Ma);
    _a.addEqualityFuncs({
      group: function(e, t) {
        return e.spec === t.spec && e.value === t.value;
      }
    });
    var La = (function(e) {
      function t(t, r) {
        var n = e.call(this, t) || this;
        return (
          (n._renderRow = gr(n.renderRow, n.unrenderRow)),
          (n._updateTrResourceId = gr(Ha, null, [n._renderRow])),
          (n._updateExpanderIcon = gr(n.updateExpanderIcon, null, [
            n._renderRow
          ])),
          (n.onExpanderClick = function(e) {
            var t = n.props;
            n.calendar.dispatch({
              type: "SET_RESOURCE_ENTITY_EXPANDED",
              id: t.id,
              isExpanded: !t.isExpanded
            });
          }),
          (n.tr = r),
          n
        );
      }
      return (
        Ia(t, e),
        (t.prototype.render = function(e) {
          this._renderRow(e.resource, e.rowSpans, e.depth, e.colSpecs),
            this._updateTrResourceId(this.tr, e.resource.id),
            this._updateExpanderIcon(e.hasChildren, e.isExpanded);
        }),
        (t.prototype.destroy = function() {
          e.prototype.destroy.call(this), this._renderRow.unrender();
        }),
        (t.prototype.renderRow = function(e, t, r, n) {
          for (
            var i,
              o = this.tr,
              s = this.theme,
              a = this.calendar,
              l = this.view,
              u = Ca(e),
              p = 0;
            p < n.length;
            p++
          ) {
            var h = n[p],
              f = t[p];
            if (0 !== f) {
              null == f && (f = 1);
              var v = void 0;
              v = h.field ? u[h.field] : pa(h.text, a)(e);
              var g = d(
                '<div class="fc-cell-content">' +
                  (h.isMain ? Oa(r) : "") +
                  '<span class="fc-cell-text">' +
                  (v ? $t(v) : "&nbsp;") +
                  "</span></div>"
              );
              "function" == typeof h.render &&
                (g = h.render(new ra(a, e), g) || g),
                f > 1 && g.classList.add("fc-sticky");
              var y = c(
                "td",
                {
                  className: s.getClass("widgetContent"),
                  rowspan: f
                },
                g
              );
              h.isMain &&
                (y.appendChild((this.heightEl = c("div", null, y.childNodes))),
                (i = y)),
                o.appendChild(y);
            }
          }
          (this.expanderIconEl = o.querySelector(
            ".fc-expander-space .fc-icon"
          )),
            l.publiclyTrigger("resourceRender", [
              {
                resource: new ra(a, e),
                el: i,
                view: l
              }
            ]);
        }),
        (t.prototype.unrenderRow = function() {
          this.tr.innerHTML = "";
        }),
        (t.prototype.updateExpanderIcon = function(e, t) {
          var r,
            n = this.expanderIconEl,
            i = n.parentElement;
          n &&
            i &&
            (e
              ? (i.addEventListener("click", this.onExpanderClick),
                i.classList.add("fc-expander"),
                Pa(n, t))
              : (i.removeEventListener("click", this.onExpanderClick),
                i.classList.remove("fc-expander"),
                (r = n.classList).remove("fc-icon-minus-square"),
                r.remove("fc-icon-plus-square")));
        }),
        t
      );
    })(Lr);
    function Oa(e) {
      for (var t = "", r = 0; r < e; r++) t += '<span class="fc-icon"></span>';
      return (t +=
        '<span class="fc-expander-space"><span class="fc-icon"></span></span>');
    }
    var Aa = (function(e) {
      function t(t, r, n, i, o, s) {
        var a = e.call(this, t, r, n, i, o) || this;
        return (
          (a._updateTrResourceId = gr(Ha)),
          (a.spreadsheetRow = new La(t, a.spreadsheetTr)),
          a.timeAxisTr.appendChild(
            c(
              "td",
              {
                className: a.theme.getClass("widgetContent")
              },
              (a.innerContainerEl = document.createElement("div"))
            )
          ),
          (a.lane = new ks(t, a.innerContainerEl, a.innerContainerEl, s)),
          a
        );
      }
      return (
        Ia(t, e),
        (t.prototype.destroy = function() {
          this.spreadsheetRow.destroy(),
            this.lane.destroy(),
            e.prototype.destroy.call(this);
        }),
        (t.prototype.render = function(e) {
          this.spreadsheetRow.receiveProps({
            colSpecs: e.colSpecs,
            id: e.id,
            rowSpans: e.rowSpans,
            depth: e.depth,
            isExpanded: e.isExpanded,
            hasChildren: e.hasChildren,
            resource: e.resource
          }),
            this._updateTrResourceId(this.timeAxisTr, e.resource.id),
            this.lane.receiveProps({
              dateProfile: e.dateProfile,
              nextDayThreshold: e.nextDayThreshold,
              businessHours: e.businessHours,
              eventStore: e.eventStore,
              eventUiBases: e.eventUiBases,
              dateSelection: e.dateSelection,
              eventSelection: e.eventSelection,
              eventDrag: e.eventDrag,
              eventResize: e.eventResize
            }),
            (this.isSizeDirty = !0);
        }),
        (t.prototype.updateSize = function(t) {
          e.prototype.updateSize.call(this, t), this.lane.updateSize(t);
        }),
        (t.prototype.getHeightEls = function() {
          return [this.spreadsheetRow.heightEl, this.innerContainerEl];
        }),
        t
      );
    })(Ma);
    Aa.addEqualityFuncs({
      rowSpans: ft
    });
    var Na = (function(e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          return (
            (n.resizables = []),
            (n.colWidths = []),
            (n.emitter = new Dr()),
            r.appendChild(
              (n.tableEl = c("table", {
                className: n.theme.getClass("tableGrid")
              }))
            ),
            n
          );
        }
        return (
          Ia(t, e),
          (t.prototype.destroy = function() {
            for (var t = 0, r = this.resizables; t < r.length; t++) {
              r[t].destroy();
            }
            y(this.tableEl), e.prototype.destroy.call(this);
          }),
          (t.prototype.render = function(e) {
            var t = this.theme,
              r = e.colSpecs,
              n = "<colgroup>" + e.colTags + "</colgroup><tbody>";
            e.superHeaderText &&
              (n +=
                '<tr class="fc-super"><th class="' +
                t.getClass("widgetHeader") +
                '" colspan="' +
                r.length +
                '"><div class="fc-cell-content"><span class="fc-cell-text">' +
                $t(e.superHeaderText) +
                "</span></div></th></tr>"),
              (n += "<tr>");
            for (var i = 0; i < r.length; i++) {
              var o = r[i],
                s = i === r.length - 1;
              n +=
                '<th class="' +
                t.getClass("widgetHeader") +
                '"><div><div class="fc-cell-content">' +
                (o.isMain
                  ? '<span class="fc-expander-space"><span class="fc-icon"></span></span>'
                  : "") +
                '<span class="fc-cell-text">' +
                $t(o.labelText || "") +
                "</span></div>" +
                (s ? "" : '<div class="fc-col-resizer"></div>') +
                "</div></th>";
            }
            (n += "</tr>"),
              (n += "</tbody>"),
              (this.tableEl.innerHTML = n),
              (this.thEls = Array.prototype.slice.call(
                this.tableEl.querySelectorAll("th")
              )),
              (this.colEls = Array.prototype.slice.call(
                this.tableEl.querySelectorAll("col")
              )),
              (this.resizerEls = Array.prototype.slice.call(
                this.tableEl.querySelectorAll(".fc-col-resizer")
              )),
              this.initColResizing();
          }),
          (t.prototype.initColResizing = function() {
            var e = this,
              t = this.calendar.pluginSystem.hooks.elementDraggingImpl;
            t &&
              (this.resizables = this.resizerEls.map(function(r, n) {
                var i,
                  o = new t(r);
                return (
                  o.emitter.on("dragstart", function() {
                    "number" != typeof (i = e.colWidths[n]) &&
                      (i = e.thEls[n].getBoundingClientRect().width);
                  }),
                  o.emitter.on("dragmove", function(t) {
                    (e.colWidths[n] = Math.max(
                      i + t.deltaX * (e.isRtl ? -1 : 1),
                      30
                    )),
                      e.emitter.trigger("colwidthchange", e.colWidths);
                  }),
                  o.setAutoScrollEnabled(!1),
                  o
                );
              }));
          }),
          t
        );
      })(Lr),
      za = (function(e) {
        function t(t, r, n) {
          var i = e.call(this, t) || this;
          (i._renderCells = gr(i.renderCells, i.unrenderCells)),
            (i.layout = new rs(r, n, "clipped-scroll"));
          var o = i.layout.headerScroller.enhancedScroll,
            s = i.layout.bodyScroller.enhancedScroll;
          return (
            (i.header = new Na(t, o.canvas.contentEl)),
            i.header.emitter.on("colwidthchange", function(e) {
              i.applyColWidths(e);
            }),
            s.canvas.contentEl.appendChild(
              (i.bodyContainerEl = c(
                "div",
                {
                  className: "fc-rows"
                },
                "<table><colgroup /><tbody /></table>"
              ))
            ),
            (i.bodyColGroup = i.bodyContainerEl.querySelector("colgroup")),
            (i.bodyTbody = i.bodyContainerEl.querySelector("tbody")),
            i
          );
        }
        return (
          Ia(t, e),
          (t.prototype.destroy = function() {
            this.header.destroy(),
              this.layout.destroy(),
              this._renderCells.unrender(),
              e.prototype.destroy.call(this);
          }),
          (t.prototype.render = function(e) {
            this._renderCells(e.superHeaderText, e.colSpecs);
          }),
          (t.prototype.renderCells = function(e, t) {
            var r = this.renderColTags(t);
            this.header.receiveProps({
              superHeaderText: e,
              colSpecs: t,
              colTags: r
            }),
              (this.bodyColGroup.innerHTML = r),
              (this.bodyColEls = Array.prototype.slice.call(
                this.bodyColGroup.querySelectorAll("col")
              )),
              this.applyColWidths(
                t.map(function(e) {
                  return e.width;
                })
              );
          }),
          (t.prototype.unrenderCells = function() {
            this.bodyColGroup.innerHTML = "";
          }),
          (t.prototype.renderColTags = function(e) {
            for (var t = "", r = 0, n = e; r < n.length; r++) {
              n[r].isMain
                ? (t += '<col class="fc-main-col"/>')
                : (t += "<col/>");
            }
            return t;
          }),
          (t.prototype.updateSize = function(e, t, r) {
            this.layout.setHeight(t, r);
          }),
          (t.prototype.applyColWidths = function(e) {
            var t = this;
            e.forEach(function(e, r) {
              var n,
                i = t.header.colEls[r],
                o = t.bodyColEls[r];
              "number" == typeof e
                ? (n = e + "px")
                : null == typeof e && (n = ""),
                (i.style.width = o.style.width = n);
            });
          }),
          t
        );
      })(Lr);
    function Ba(e) {
      for (var t in e) {
        if (e[t].businessHours) return !0;
      }
      return !1;
    }
    function Ua(e) {
      for (var t = 0, r = e; t < r.length; t++) {
        var n = r[t];
        if (n.group) return !0;
        if (n.resource && n.hasChildren) return !0;
      }
      return !1;
    }
    var ja = Nr({
        deps: [Ra, Ps],
        defaultView: "resourceTimelineDay",
        views: {
          resourceTimeline: {
            class: (function(e) {
              function t(t, r, n, i) {
                var o = e.call(this, t, r, n, i) || this;
                (o.isStickyScrollDirty = !1),
                  (o.rowNodes = []),
                  (o.rowComponents = []),
                  (o.rowComponentsById = {}),
                  (o.resourceAreaWidthDraggings = []),
                  (o.splitter = new na()),
                  (o.hasResourceBusinessHours = vt(Ba)),
                  (o.buildRowNodes = vt(wa)),
                  (o.hasNesting = vt(Ua)),
                  (o._updateHasNesting = gr(o.updateHasNesting));
                var s = o.opt("resourceColumns") || [],
                  a = o.opt("resourceLabelText"),
                  l = null;
                s.length
                  ? (l = a)
                  : s.push({
                      labelText: a || "Resources",
                      text: pa(o.opt("resourceText"), o.calendar)
                    });
                for (
                  var d = [], u = [], p = [], h = !1, f = !1, v = 0, g = s;
                  v < g.length;
                  v++
                ) {
                  var y = g[v];
                  y.group ? u.push(y) : d.push(y);
                }
                if (((d[0].isMain = !0), u.length)) (p = u), (h = !0);
                else {
                  var m = o.opt("resourceGroupField");
                  m &&
                    ((f = !0),
                    p.push({
                      field: m,
                      text: o.opt("resourceGroupText"),
                      render: o.opt("resourceGroupRender")
                    }));
                }
                for (
                  var S = [], E = 0, b = Re(o.opt("resourceOrder"));
                  E < b.length;
                  E++
                ) {
                  for (var w = b[E], T = !1, D = 0, C = p; D < C.length; D++) {
                    var R = C[D];
                    if (R.field === w.field) {
                      (R.order = w.order), (T = !0);
                      break;
                    }
                  }
                  T || S.push(w);
                }
                (o.superHeaderText = l),
                  (o.isVGrouping = h),
                  (o.isHGrouping = f),
                  (o.groupSpecs = p),
                  (o.colSpecs = u.concat(d)),
                  (o.orderSpecs = S),
                  o.el.classList.add("fc-timeline"),
                  !1 === o.opt("eventOverlap") &&
                    o.el.classList.add("fc-no-overlap"),
                  (o.el.innerHTML = o.renderSkeletonHtml()),
                  (o.resourceAreaHeadEl = o.el.querySelector(
                    "thead .fc-resource-area"
                  )),
                  o.setResourceAreaWidth(o.opt("resourceAreaWidth")),
                  o.initResourceAreaWidthDragging(),
                  (o.miscHeight = o.el.getBoundingClientRect().height),
                  (o.spreadsheet = new za(
                    o.context,
                    o.resourceAreaHeadEl,
                    o.el.querySelector("tbody .fc-resource-area")
                  )),
                  (o.timeAxis = new Ts(
                    o.context,
                    o.el.querySelector("thead .fc-time-area"),
                    o.el.querySelector("tbody .fc-time-area")
                  ));
                var x = c(
                  "div",
                  {
                    className: "fc-rows"
                  },
                  "<table><tbody /></table>"
                );
                return (
                  o.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl.appendChild(
                    x
                  ),
                  (o.timeAxisTbody = x.querySelector("tbody")),
                  (o.lane = new ks(
                    o.context,
                    null,
                    o.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl,
                    o.timeAxis
                  )),
                  (o.bodyScrollJoiner = new ts("vertical", [
                    o.spreadsheet.layout.bodyScroller,
                    o.timeAxis.layout.bodyScroller
                  ])),
                  (o.spreadsheetBodyStickyScroller = new ws(
                    o.spreadsheet.layout.bodyScroller.enhancedScroll,
                    o.isRtl,
                    !0
                  )),
                  o.spreadsheet.receiveProps({
                    superHeaderText: o.superHeaderText,
                    colSpecs: o.colSpecs
                  }),
                  t.calendar.registerInteractiveComponent(o, {
                    el: o.timeAxis.slats.el
                  }),
                  o
                );
              }
              return (
                Ia(t, e),
                (t.prototype.renderSkeletonHtml = function() {
                  var e = this.theme;
                  return (
                    '<table class="' +
                    e.getClass("tableGrid") +
                    '"> <thead class="fc-head"> <tr> <td class="fc-resource-area ' +
                    e.getClass("widgetHeader") +
                    '"></td> <td class="fc-divider fc-col-resizer ' +
                    e.getClass("widgetHeader") +
                    '"></td> <td class="fc-time-area ' +
                    e.getClass("widgetHeader") +
                    '"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-resource-area ' +
                    e.getClass("widgetContent") +
                    '"></td> <td class="fc-divider fc-col-resizer ' +
                    e.getClass("widgetHeader") +
                    '"></td> <td class="fc-time-area ' +
                    e.getClass("widgetContent") +
                    '"></td> </tr> </tbody> </table>'
                  );
                }),
                (t.prototype.render = function(t) {
                  e.prototype.render.call(this, t);
                  var r = this.splitter.splitProps(t),
                    n = this.hasResourceBusinessHours(t.resourceStore);
                  this.timeAxis.receiveProps({
                    dateProfile: t.dateProfile
                  }),
                    this.lane.receiveProps(
                      ka({}, r[""], {
                        dateProfile: t.dateProfile,
                        nextDayThreshold: this.nextDayThreshold,
                        businessHours: n ? null : t.businessHours
                      })
                    );
                  var i = this.buildRowNodes(
                    t.resourceStore,
                    this.groupSpecs,
                    this.orderSpecs,
                    this.isVGrouping,
                    t.resourceEntityExpansions,
                    this.opt("resourcesInitiallyExpanded")
                  );
                  this._updateHasNesting(this.hasNesting(i)),
                    this.diffRows(i),
                    this.renderRows(
                      t.dateProfile,
                      n ? t.businessHours : null,
                      r
                    );
                }),
                (t.prototype.updateHasNesting = function(e) {
                  var t = this.el.classList;
                  e ? t.remove("fc-flat") : t.add("fc-flat");
                }),
                (t.prototype.diffRows = function(e) {
                  var t = this.rowNodes,
                    r = t.length,
                    n = {},
                    i = 0,
                    o = 0;
                  for (i = 0; i < r; i++) n[t[i].id] = i;
                  for (i = 0, o = 0; o < e.length; o++) {
                    var s = e[o],
                      a = n[s.id];
                    null != a && a >= i
                      ? (this.removeRows(o, a - i, t), (i = a + 1))
                      : this.addRow(o, s);
                  }
                  this.removeRows(o, r - i, t), (this.rowNodes = e);
                }),
                (t.prototype.addRow = function(e, t) {
                  var r = this.rowComponents,
                    n = this.rowComponentsById,
                    i = r[e],
                    o = this.buildChildComponent(
                      t,
                      this.spreadsheet.bodyTbody,
                      i ? i.spreadsheetTr : null,
                      this.timeAxisTbody,
                      i ? i.timeAxisTr : null
                    );
                  r.splice(e, 0, o), (n[t.id] = o);
                }),
                (t.prototype.removeRows = function(e, t, r) {
                  if (t) {
                    for (
                      var n = this.rowComponents,
                        i = this.rowComponentsById,
                        o = 0;
                      o < t;
                      o++
                    ) {
                      n[e + o].destroy(), delete i[r[o].id];
                    }
                    n.splice(e, t);
                  }
                }),
                (t.prototype.buildChildComponent = function(e, t, r, n, i) {
                  return e.group
                    ? new _a(this.context, t, r, n, i)
                    : e.resource
                    ? new Aa(this.context, t, r, n, i, this.timeAxis)
                    : void 0;
                }),
                (t.prototype.renderRows = function(e, t, r) {
                  for (
                    var n = this.rowNodes, i = this.rowComponents, o = 0;
                    o < n.length;
                    o++
                  ) {
                    var s = n[o],
                      a = i[o];
                    if (s.group)
                      a.receiveProps({
                        spreadsheetColCnt: this.colSpecs.length,
                        id: s.id,
                        isExpanded: s.isExpanded,
                        group: s.group
                      });
                    else {
                      var l = s.resource;
                      a.receiveProps(
                        ka({}, r[l.id], {
                          dateProfile: e,
                          nextDayThreshold: this.nextDayThreshold,
                          businessHours: l.businessHours || t,
                          colSpecs: this.colSpecs,
                          id: s.id,
                          rowSpans: s.rowSpans,
                          depth: s.depth,
                          isExpanded: s.isExpanded,
                          hasChildren: s.hasChildren,
                          resource: s.resource
                        })
                      );
                    }
                  }
                }),
                (t.prototype.updateSize = function(e, t, r) {
                  var n = this.calendar,
                    i =
                      e ||
                      n.isViewUpdated ||
                      n.isDatesUpdated ||
                      n.isEventsUpdated;
                  i &&
                    (this.syncHeadHeights(),
                    this.timeAxis.updateSize(e, t - this.miscHeight, r),
                    this.spreadsheet.updateSize(e, t - this.miscHeight, r));
                  var o = this.updateRowSizes(e);
                  this.lane.updateSize(e),
                    (i || o) &&
                      (this.bodyScrollJoiner.update(),
                      this.timeAxis.layout.scrollJoiner.update(),
                      (this.rowPositions = new xr(
                        this.timeAxis.slats.el,
                        this.rowComponents.map(function(e) {
                          return e.timeAxisTr;
                        }),
                        !1,
                        !0
                      )),
                      this.rowPositions.build(),
                      (this.isStickyScrollDirty = !0));
                }),
                (t.prototype.syncHeadHeights = function() {
                  var e = this.spreadsheet.header.tableEl,
                    t = this.timeAxis.header.tableEl;
                  (e.style.height = ""), (t.style.height = "");
                  var r = Math.max(
                    e.getBoundingClientRect().height,
                    t.getBoundingClientRect().height
                  );
                  e.style.height = t.style.height = r + "px";
                }),
                (t.prototype.updateRowSizes = function(e) {
                  var t = this.rowComponents;
                  e ||
                    (t = t.filter(function(e) {
                      return e.isSizeDirty;
                    }));
                  for (
                    var r = t.map(function(e) {
                        return e.getHeightEls();
                      }),
                      n = 0,
                      i = r;
                    n < i.length;
                    n++
                  )
                    for (var o = 0, s = i[n]; o < s.length; o++) {
                      s[o].style.height = "";
                    }
                  for (var a = 0, l = t; a < l.length; a++) {
                    l[a].updateSize(e);
                  }
                  for (
                    var c = r.map(function(e) {
                        for (var t = null, r = 0, n = e; r < n.length; r++) {
                          var i = n[r].getBoundingClientRect().height;
                          (null === t || i > t) && (t = i);
                        }
                        return t;
                      }),
                      d = 0;
                    d < r.length;
                    d++
                  )
                    for (var u = 0, p = r[d]; u < p.length; u++) {
                      p[u].style.height = c[d] + "px";
                    }
                  return t.length;
                }),
                (t.prototype.destroy = function() {
                  for (var t = 0, r = this.rowComponents; t < r.length; t++) {
                    r[t].destroy();
                  }
                  (this.rowNodes = []),
                    (this.rowComponents = []),
                    this.spreadsheet.destroy(),
                    this.timeAxis.destroy();
                  for (
                    var n = 0, i = this.resourceAreaWidthDraggings;
                    n < i.length;
                    n++
                  ) {
                    i[n].destroy();
                  }
                  this.spreadsheetBodyStickyScroller.destroy(),
                    e.prototype.destroy.call(this),
                    this.calendar.unregisterInteractiveComponent(this);
                }),
                (t.prototype.getNowIndicatorUnit = function(e) {
                  return this.timeAxis.getNowIndicatorUnit(e);
                }),
                (t.prototype.renderNowIndicator = function(e) {
                  this.timeAxis.renderNowIndicator(e);
                }),
                (t.prototype.unrenderNowIndicator = function() {
                  this.timeAxis.unrenderNowIndicator();
                }),
                (t.prototype.queryScroll = function() {
                  var t = e.prototype.queryScroll.call(this);
                  return (
                    this.props.resourceStore &&
                      ka(t, this.queryResourceScroll()),
                    t
                  );
                }),
                (t.prototype.applyScroll = function(t, r) {
                  e.prototype.applyScroll.call(this, t, r),
                    this.props.resourceStore && this.applyResourceScroll(t),
                    (r || this.isStickyScrollDirty) &&
                      ((this.isStickyScrollDirty = !1),
                      this.spreadsheetBodyStickyScroller.updateSize(),
                      this.timeAxis.updateStickyScrollers());
                }),
                (t.prototype.computeDateScroll = function(e) {
                  return this.timeAxis.computeDateScroll(e);
                }),
                (t.prototype.queryDateScroll = function() {
                  return this.timeAxis.queryDateScroll();
                }),
                (t.prototype.applyDateScroll = function(e) {
                  this.timeAxis.applyDateScroll(e);
                }),
                (t.prototype.queryResourceScroll = function() {
                  for (
                    var e = this.rowComponents,
                      t = this.rowNodes,
                      r = {},
                      n = this.timeAxis.layout.bodyScroller.el.getBoundingClientRect()
                        .top,
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    var o = e[i],
                      s = t[i],
                      a = o.timeAxisTr.getBoundingClientRect().bottom;
                    if (a > n) {
                      (r.rowId = s.id), (r.bottom = a - n);
                      break;
                    }
                  }
                  return r;
                }),
                (t.prototype.applyResourceScroll = function(e) {
                  var t = e.forcedRowId || e.rowId;
                  if (t) {
                    var r = this.rowComponentsById[t];
                    if (r) {
                      var n = r.timeAxisTr;
                      if (n) {
                        var i = this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.el.getBoundingClientRect()
                            .top,
                          o = n.getBoundingClientRect(),
                          s = (e.forcedRowId ? o.top : o.bottom - e.bottom) - i;
                        this.timeAxis.layout.bodyScroller.enhancedScroll.setScrollTop(
                          s
                        ),
                          this.spreadsheet.layout.bodyScroller.enhancedScroll.setScrollTop(
                            s
                          );
                      }
                    }
                  }
                }),
                (t.prototype.buildPositionCaches = function() {
                  this.timeAxis.slats.updateSize(), this.rowPositions.build();
                }),
                (t.prototype.queryHit = function(e, t) {
                  var r = this.rowPositions,
                    n = this.timeAxis.slats,
                    i = r.topToIndex(t);
                  if (null != i) {
                    var o = this.rowNodes[i].resource;
                    if (o) {
                      var s = n.positionToHit(e);
                      if (s)
                        return {
                          component: this,
                          dateSpan: {
                            range: s.dateSpan.range,
                            allDay: s.dateSpan.allDay,
                            resourceId: o.id
                          },
                          rect: {
                            left: s.left,
                            right: s.right,
                            top: r.tops[i],
                            bottom: r.bottoms[i]
                          },
                          dayEl: s.dayEl,
                          layer: 0
                        };
                    }
                  }
                }),
                (t.prototype.setResourceAreaWidth = function(e) {
                  (this.resourceAreaWidth = e),
                    x(this.resourceAreaHeadEl, "width", e || "");
                }),
                (t.prototype.initResourceAreaWidthDragging = function() {
                  var e = this,
                    t = Array.prototype.slice.call(
                      this.el.querySelectorAll(".fc-col-resizer")
                    ),
                    r = this.calendar.pluginSystem.hooks.elementDraggingImpl;
                  r &&
                    (this.resourceAreaWidthDraggings = t.map(function(t) {
                      var n,
                        i,
                        o = new r(t);
                      return (
                        o.emitter.on("dragstart", function() {
                          "number" != typeof (n = e.resourceAreaWidth) &&
                            (n = e.resourceAreaHeadEl.getBoundingClientRect()
                              .width),
                            (i = e.el.getBoundingClientRect().width);
                        }),
                        o.emitter.on("dragmove", function(t) {
                          var r = n + t.deltaX * (e.isRtl ? -1 : 1);
                          (r = Math.max(r, 30)),
                            (r = Math.min(r, i - 30)),
                            e.setResourceAreaWidth(r);
                        }),
                        o.setAutoScrollEnabled(!1),
                        o
                      );
                    }));
                }),
                (t.needsResourceData = !0),
                t
              );
            })(Qn),
            resourceAreaWidth: "30%",
            resourcesInitiallyExpanded: !0,
            eventResizableFromStart: !0
          },
          resourceTimelineDay: {
            type: "resourceTimeline",
            duration: {
              days: 1
            }
          },
          resourceTimelineWeek: {
            type: "resourceTimeline",
            duration: {
              weeks: 1
            }
          },
          resourceTimelineMonth: {
            type: "resourceTimeline",
            duration: {
              months: 1
            }
          },
          resourceTimelineYear: {
            type: "resourceTimeline",
            duration: {
              years: 1
            }
          }
        }
      }),
      Ga =
        (r(5),
        r(6),
        (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.title = "Resource Timeline"),
              (t.controlHtml =
                "\n    <span class='badge'>Premium</span>\n    <p>\n      Display resources as rows.\n      The exact time interval is configurable.\n      <a href='/docs/timeline-view' class='more-link'>Learn more</a>\n    </p>\n  "),
              t
            );
          }
          return (
            s(t, e),
            (t.prototype.init = function(e, t, r) {
              return new qn(r, {
                plugins: [Oo, ja],
                timeZone: "UTC",
                defaultView: "resourceTimelineDay",
                aspectRatio: 1.5,
                header: {
                  left: "prev,next",
                  center: "title",
                  right:
                    "resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth"
                },
                editable: !0,
                resourceLabelText: "Rooms",
                resources: "/demo-resources.json?with-nesting&with-colors",
                events: "/demo-events.json?single-day&for-resource-timeline"
              });
            }),
            t
          );
        })(Ao)),
      Va = function(e, t) {
        return (Va =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
    function Wa(e, t) {
      function r() {
        this.constructor = e;
      }
      Va(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var Fa = function() {
        return (Fa =
          Object.assign ||
          function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      qa = (function(e) {
        function t(t, r) {
          var n = e.call(this, t, r.el) || this;
          return (
            (n.splitter = new ma()),
            (n.slicers = {}),
            (n.joiner = new Ya()),
            (n.dayGrid = r),
            t.calendar.registerInteractiveComponent(n, {
              el: n.dayGrid.el
            }),
            n
          );
        }
        return (
          Wa(t, e),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.calendar.unregisterInteractiveComponent(this);
          }),
          (t.prototype.render = function(e) {
            var t = this,
              r = this.dayGrid,
              n = e.dateProfile,
              i = e.resourceDayTable,
              o = e.nextDayThreshold,
              s = this.splitter.splitProps(e);
            this.slicers = Xe(s, function(e, r) {
              return t.slicers[r] || new Li();
            });
            var a = Xe(this.slicers, function(e, t) {
              return e.sliceProps(s[t], n, o, r, i.dayTable);
            });
            (r.allowAcrossResources = 1 === i.dayTable.colCnt),
              r.receiveProps(
                Fa({}, this.joiner.joinProps(a, i), {
                  dateProfile: n,
                  cells: i.cells,
                  isRigid: e.isRigid
                })
              );
          }),
          (t.prototype.buildPositionCaches = function() {
            this.dayGrid.buildPositionCaches();
          }),
          (t.prototype.queryHit = function(e, t) {
            var r = this.dayGrid.positionToHit(e, t);
            if (r)
              return {
                component: this.dayGrid,
                dateSpan: {
                  range: r.dateSpan.range,
                  allDay: r.dateSpan.allDay,
                  resourceId: this.props.resourceDayTable.cells[r.row][r.col]
                    .resource.id
                },
                dayEl: r.dayEl,
                rect: {
                  left: r.relativeRect.left,
                  right: r.relativeRect.right,
                  top: r.relativeRect.top,
                  bottom: r.relativeRect.bottom
                },
                layer: 0
              };
          }),
          t
        );
      })(Or),
      Ya = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Wa(t, e),
          (t.prototype.transformSeg = function(e, t, r) {
            return t
              .computeColRanges(e.firstCol, e.lastCol, r)
              .map(function(t) {
                return Fa({}, e, t, {
                  isStart: e.isStart && t.isStart,
                  isEnd: e.isEnd && t.isEnd
                });
              });
          }),
          t
        );
      })(Ea),
      Za = (function(e) {
        function t(t, r, n, i) {
          var o = e.call(this, t, r, n, i) || this;
          return (
            (o.flattenResources = vt(ba)),
            (o.buildResourceDayTable = vt(Xa)),
            (o.resourceOrderSpecs = Re(o.opt("resourceOrder"))),
            o.opt("columnHeader") &&
              (o.header = new ha(
                o.context,
                o.el.querySelector(".fc-head-container")
              )),
            (o.resourceDayGrid = new qa(t, o.dayGrid)),
            o
          );
        }
        return (
          Wa(t, e),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.header && this.header.destroy(),
              this.resourceDayGrid.destroy();
          }),
          (t.prototype.render = function(t) {
            e.prototype.render.call(this, t);
            var r = this.flattenResources(
                t.resourceStore,
                this.resourceOrderSpecs
              ),
              n = this.buildResourceDayTable(
                this.props.dateProfile,
                this.dateProfileGenerator,
                r,
                this.opt("datesAboveResources")
              );
            this.header &&
              this.header.receiveProps({
                resources: r,
                dates: n.dayTable.headerDates,
                dateProfile: t.dateProfile,
                datesRepDistinctDays: !0,
                renderIntroHtml: this.renderHeadIntroHtml
              }),
              this.resourceDayGrid.receiveProps({
                dateProfile: t.dateProfile,
                resourceDayTable: n,
                businessHours: t.businessHours,
                eventStore: t.eventStore,
                eventUiBases: t.eventUiBases,
                dateSelection: t.dateSelection,
                eventSelection: t.eventSelection,
                eventDrag: t.eventDrag,
                eventResize: t.eventResize,
                isRigid: this.hasRigidRows(),
                nextDayThreshold: this.nextDayThreshold
              });
          }),
          (t.needsResourceData = !0),
          t
        );
      })(Hi);
    function Xa(e, t, r, n) {
      var i = Oi(e, t);
      return n ? new ga(i, r) : new va(i, r);
    }
    Nr({
      deps: [Ra, Ai],
      defaultView: "resourceDayGridDay",
      views: {
        resourceDayGrid: Za,
        resourceDayGridDay: {
          type: "resourceDayGrid",
          duration: {
            days: 1
          }
        },
        resourceDayGridWeek: {
          type: "resourceDayGrid",
          duration: {
            weeks: 1
          }
        },
        resourceDayGridMonth: {
          type: "resourceDayGrid",
          duration: {
            months: 1
          },
          monthMode: !0,
          fixedWeekCount: !0
        }
      }
    });
    var Ka = function(e, t) {
      return (Ka =
        Object.setPrototypeOf ||
        ({
          __proto__: []
        } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, t);
    };
    function Ja(e, t) {
      function r() {
        this.constructor = e;
      }
      Ka(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var Qa = function() {
        return (Qa =
          Object.assign ||
          function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      $a = (function(e) {
        function t(t, r) {
          var n = e.call(this, t, r.el) || this;
          return (
            (n.buildDayRanges = vt(Qi)),
            (n.splitter = new ma()),
            (n.slicers = {}),
            (n.joiner = new el()),
            (n.timeGrid = r),
            t.calendar.registerInteractiveComponent(n, {
              el: n.timeGrid.el
            }),
            n
          );
        }
        return (
          Ja(t, e),
          (t.prototype.destroy = function() {
            this.calendar.unregisterInteractiveComponent(this);
          }),
          (t.prototype.render = function(e) {
            var t = this,
              r = this.timeGrid,
              n = e.dateProfile,
              i = e.resourceDayTable,
              o = (this.dayRanges = this.buildDayRanges(
                i.dayTable,
                n,
                this.dateEnv
              )),
              s = this.splitter.splitProps(e);
            this.slicers = Xe(s, function(e, r) {
              return t.slicers[r] || new $i();
            });
            var a = Xe(this.slicers, function(e, t) {
              return e.sliceProps(s[t], n, null, r, o);
            });
            (r.allowAcrossResources = 1 === o.length),
              r.receiveProps(
                Qa({}, this.joiner.joinProps(a, i), {
                  dateProfile: n,
                  cells: i.cells[0]
                })
              );
          }),
          (t.prototype.renderNowIndicator = function(e) {
            var t = this.timeGrid,
              r = this.props.resourceDayTable,
              n = this.slicers[""].sliceNowDate(e, t, this.dayRanges),
              i = this.joiner.expandSegs(r, n);
            t.renderNowIndicator(i, e);
          }),
          (t.prototype.buildPositionCaches = function() {
            this.timeGrid.buildPositionCaches();
          }),
          (t.prototype.queryHit = function(e, t) {
            var r = this.timeGrid.positionToHit(e, t);
            if (r)
              return {
                component: this.timeGrid,
                dateSpan: {
                  range: r.dateSpan.range,
                  allDay: r.dateSpan.allDay,
                  resourceId: this.props.resourceDayTable.cells[0][r.col]
                    .resource.id
                },
                dayEl: r.dayEl,
                rect: {
                  left: r.relativeRect.left,
                  right: r.relativeRect.right,
                  top: r.relativeRect.top,
                  bottom: r.relativeRect.bottom
                },
                layer: 0
              };
          }),
          t
        );
      })(Or),
      el = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Ja(t, e),
          (t.prototype.transformSeg = function(e, t, r) {
            return [
              Qa({}, e, {
                col: t.computeCol(e.col, r)
              })
            ];
          }),
          t
        );
      })(Ea),
      tl = (function(e) {
        function t(t, r, n, i) {
          var o = e.call(this, t, r, n, i) || this;
          return (
            (o.flattenResources = vt(ba)),
            (o.buildResourceDayTable = vt(rl)),
            (o.resourceOrderSpecs = Re(o.opt("resourceOrder"))),
            o.opt("columnHeader") &&
              (o.header = new ha(
                o.context,
                o.el.querySelector(".fc-head-container")
              )),
            (o.resourceTimeGrid = new $a(t, o.timeGrid)),
            o.dayGrid && (o.resourceDayGrid = new qa(t, o.dayGrid)),
            o
          );
        }
        return (
          Ja(t, e),
          (t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
              this.header && this.header.destroy(),
              this.resourceTimeGrid.destroy(),
              this.resourceDayGrid && this.resourceDayGrid.destroy();
          }),
          (t.prototype.render = function(t) {
            e.prototype.render.call(this, t);
            var r = this.splitter.splitProps(t),
              n = this.flattenResources(
                t.resourceStore,
                this.resourceOrderSpecs
              ),
              i = this.buildResourceDayTable(
                this.props.dateProfile,
                this.dateProfileGenerator,
                n,
                this.opt("datesAboveResources")
              );
            this.header &&
              this.header.receiveProps({
                resources: n,
                dates: i.dayTable.headerDates,
                dateProfile: t.dateProfile,
                datesRepDistinctDays: !0,
                renderIntroHtml: this.renderHeadIntroHtml
              }),
              this.resourceTimeGrid.receiveProps(
                Qa({}, r.timed, {
                  dateProfile: t.dateProfile,
                  resourceDayTable: i
                })
              ),
              this.resourceDayGrid &&
                this.resourceDayGrid.receiveProps(
                  Qa({}, r.allDay, {
                    dateProfile: t.dateProfile,
                    resourceDayTable: i,
                    isRigid: !1,
                    nextDayThreshold: this.nextDayThreshold
                  })
                );
          }),
          (t.prototype.renderNowIndicator = function(e) {
            this.resourceTimeGrid.renderNowIndicator(e);
          }),
          (t.needsResourceData = !0),
          t
        );
      })(Ki);
    function rl(e, t, r, n) {
      var i = eo(e, t);
      return n ? new ga(i, r) : new va(i, r);
    }
    var nl = Nr({
        deps: [Ra, to],
        defaultView: "resourceTimeGridDay",
        views: {
          resourceTimeGrid: {
            class: tl,
            allDaySlot: !0,
            slotDuration: "00:30:00",
            slotEventOverlap: !0
          },
          resourceTimeGridDay: {
            type: "resourceTimeGrid",
            duration: {
              days: 1
            }
          },
          resourceTimeGridWeek: {
            type: "resourceTimeGrid",
            duration: {
              weeks: 1
            }
          }
        }
      }),
      il = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.title = "Resource Time Grid"),
            (t.controlHtml =
              "\n    <span class='badge'>Premium</span>\n    <p>\n      Display resources as columns.\n      <a href='/docs/vertical-resource-view' class='more-link'>Learn more</a>\n    </p>\n  "),
            t
          );
        }
        return (
          s(t, e),
          (t.prototype.init = function(e, t, r) {
            return new qn(r, {
              plugins: [Oo, nl],
              timeZone: "UTC",
              defaultView: "resourceTimeGridDay",
              resources: [
                {
                  id: "a",
                  title: "Room A"
                },
                {
                  id: "b",
                  title: "Room B"
                },
                {
                  id: "c",
                  title: "Room C"
                },
                {
                  id: "d",
                  title: "Room D"
                }
              ],
              editable: !0,
              events: "/demo-events.json?with-resources=4&single-day"
            });
          }),
          t
        );
      })(Ao),
      ol = function(e, t) {
        return (ol =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
    var sl = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        (function(e, t) {
          function r() {
            this.constructor = e;
          }
          ol(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        })(t, e),
        t
      );
    })(Hr);
    (sl.prototype.classes = {
      widget: "fc-bootstrap",
      tableGrid: "table-bordered",
      tableList: "table",
      tableListHeading: "table-active",
      buttonGroup: "btn-group",
      button: "btn btn-primary",
      buttonActive: "active",
      today: "alert alert-info",
      popover: "card card-primary",
      popoverHeader: "card-header",
      popoverContent: "card-body",
      headerRow: "table-bordered",
      dayRow: "table-bordered",
      listView: "card card-primary"
    }),
      (sl.prototype.baseIconClass = "fa"),
      (sl.prototype.iconClasses = {
        close: "fa-times",
        prev: "fa-chevron-left",
        next: "fa-chevron-right",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
      }),
      (sl.prototype.iconOverrideOption = "bootstrapFontAwesome"),
      (sl.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome"),
      (sl.prototype.iconOverridePrefix = "fa-");
    var al = Nr({
        themeClasses: {
          bootstrap: sl
        }
      }),
      ll = {},
      cl = {},
      dl = 0;
    function ul(e, t) {
      if (cl[e]) t();
      else {
        var r = document.querySelector('link[href="' + e + '"]');
        r
          ? ((ll[e] = r), (cl[e] = !0), t())
          : ((r = document.createElement("link")).setAttribute(
              "rel",
              "stylesheet"
            ),
            r.setAttribute("href", e),
            document.querySelector("head").appendChild(r),
            (ll[e] = r),
            (function(e, t) {
              var r = !1;
              function n() {
                r || ((r = !0), t());
              }
              (e.onload = n), setTimeout(n, 2e3);
            })(r, function() {
              (cl[e] = !0), t();
            }));
      }
    }
    function pl(e) {
      var t = ll[e];
      t && (t.parentNode.removeChild(t), delete ll[e], delete cl[e]);
    }
    var hl = "https://use.fontawesome.com/releases/v5.0.6/css/all.css";
    function fl(e) {
      var t = e.callback || function() {},
        r = e.loadingCallback || function() {},
        n = [hl],
        i = (function(e, t) {
          if ("bootstrap" === e)
            return t
              ? "https://bootswatch.com/4/" + t + "/bootstrap.min.css"
              : "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
        })(e.themeSystemName, e.themeName);
      i && n.push(i),
        r(!0),
        (function(e, t) {
          for (var r = ++dl, n = 0, i = 0, o = e; i < o.length; i++) {
            ul(o[i], s);
          }
          function s() {
            if (++n === e.length && r === dl) {
              for (var i in ll) -1 === e.indexOf(i) && pl(i);
              t();
            }
          }
        })(n, function() {
          r(!1), t();
        });
    }
    var vl;
    r(13);
    var gl = [No, Ga, il, zo, Bo, jo, qo, Vo];
    window.isCalendarThemeRender
      ? (window.renderCalendarTheme = function(e, t, r) {
          fl({
            themeSystemName: e,
            themeName: t,
            callback: function() {
              var t;
              vl
                ? vl.setOption("themeSystem", e)
                : ((t = document.getElementById("calendar")),
                  (vl = new qn(t, {
                    timeZone: "UTC",
                    plugins: [Ai, to, ao, al],
                    themeSystem: "bootstrap",
                    header: {
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    },
                    navLinks: !0,
                    eventLimit: !0,
                    events: "/demo-events.json?overload-day"
                  })).render()),
                r && r();
            }
          });
        })
      : document.addEventListener("DOMContentLoaded", function() {
          var e = document.getElementById("demo-accordion"),
            t = document.getElementById("demo-content");
          new yl(e, t);
        });
    var yl = (function() {
      function e(e, t) {
        (this.accordionEl = e),
          (this.contentEl = t),
          (this.demos = gl.map(function(e) {
            return new e();
          })),
          this.renderAccordion();
      }
      return (
        (e.prototype.runDemo = function(e) {
          e !== this.demoIndex &&
            (null != this.demoIndex && this.destroyDemo(this.demoIndex),
            (this.demoIndex = e),
            this.initDemo(e));
        }),
        (e.prototype.initDemo = function(e) {
          var t = this.demos[e],
            r = this.panelEls[e].querySelector(".accordion__panel-content"),
            n = this.contentEl;
          n.innerHTML = t.contentHtml;
          var i = n.querySelector(".demo-calendar");
          t.initSafely(r, n, i);
        }),
        (e.prototype.destroyDemo = function(e) {
          var t = this.demos[e],
            r = this.panelEls[e].querySelector(".accordion__panel-content");
          t.destroy(), (r.innerHTML = t.controlHtml);
        }),
        (e.prototype.renderAccordion = function() {
          var e = this,
            t = this.accordionEl;
          (t.innerHTML = this.renderAccordionHtml()),
            (this.panelEls = i(".accordion__panel", t)),
            t.classList.add("snap"),
            this.panelEls[0].classList.add("accordion__panel--open"),
            new n.Accordion(t, {
              openClass: "accordion__panel--open",
              closeClass: "accordion__panel--closed",
              modal: !0,
              onToggle: function(t, r) {
                r && e.runDemo(t.index);
              }
            }),
            setTimeout(function() {
              t.classList.remove("snap");
            }, 0),
            this.runDemo(0);
        }),
        (e.prototype.renderAccordionHtml = function() {
          for (var e = "", t = 0, r = this.demos; t < r.length; t++) {
            var n = r[t];
            e +=
              '<div class="accordion__panel"><div class="accordion__panel-title"><span class="fc-icon"></span>' +
              (n.title + "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/'/g, "&#039;")
                .replace(/"/g, "&quot;")
                .replace(/\n/g, "<br />") +
              '</div><div class="accordion__panel-content">' +
              n.controlHtml +
              "</div></div>";
          }
          return e;
        }),
        e
      );
    })();
  }
]);
