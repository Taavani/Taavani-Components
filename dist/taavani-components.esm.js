var ln = Object.defineProperty;
var un = (e, o, t) => o in e ? ln(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var F = (e, o, t) => un(e, typeof o != "symbol" ? o + "" : o, t);
import * as Nt from "vue";
import { computed as N, openBlock as p, createElementBlock as v, normalizeClass as B, toDisplayString as y, renderSlot as Le, createStaticVNode as Yo, ref as w, createElementVNode as u, createVNode as k, createCommentVNode as P, unref as C, createTextVNode as te, getCurrentInstance as va, onBeforeMount as hn, watch as V, isRef as qo, reactive as no, onBeforeUnmount as mn, inject as ae, provide as de, isReactive as cn, isReadonly as Cn, nextTick as fe, onMounted as j, Fragment as I, renderList as _, watchEffect as ie, cloneVNode as gn, h as z, defineComponent as W, onUnmounted as le, shallowRef as $n, Teleport as fn, toRaw as re, createBlock as J, withCtx as L, Transition as Ue, resolveDirective as pn, withDirectives as Lo, withKeys as je, withModifiers as yn, vModelText as vn, vModelDynamic as bn, resolveComponent as Sn } from "vue";
import { useI18n as Ee } from "vue-i18n";
const Zo = {
  __name: "T-Button",
  props: {
    title: {
      default: "Title",
      type: String
    },
    coat: {
      type: String,
      validator(e) {
        return ["liquid-blue", "liquid-blue-small", "solid-blue"].indexOf(e) !== -1;
      }
    }
  },
  setup(e) {
    const o = e, t = N(() => ({
      "t-button": !0,
      [`t-button--${o.coat || "solid-blue"}`]: !0
    }));
    return (a, n) => (p(), v("button", {
      type: "button",
      class: B(t.value)
    }, y(e.title), 3));
  }
}, An = { class: "t-flight-offer-list" }, bc = {
  __name: "T-Flight-Offer-List",
  setup(e) {
    return (o, t) => (p(), v("ul", An, [
      Le(o.$slots, "default")
    ]));
  }
};
var Eo = {}, kt;
function Nn() {
  return kt || (kt = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.serialize = e.parse = e.MultipleFractionsError = e.InvalidDurationError = void 0;
    const o = {
      allowMultipleFractions: !0
    }, t = [
      { unit: "years", symbol: "Y" },
      { unit: "months", symbol: "M" },
      { unit: "weeks", symbol: "W" },
      { unit: "days", symbol: "D" },
      { unit: "hours", symbol: "H" },
      { unit: "minutes", symbol: "M" },
      { unit: "seconds", symbol: "S" }
    ], a = (i, h) => `((?<${i}>-?\\d*[\\.,]?\\d+)${h})?`, n = new RegExp([
      "(?<negative>-)?P",
      a("years", "Y"),
      a("months", "M"),
      a("weeks", "W"),
      a("days", "D"),
      "(T",
      a("hours", "H"),
      a("minutes", "M"),
      a("seconds", "S"),
      ")?"
      // end optional time
    ].join(""));
    function r(i) {
      if (!(i === "" || i === void 0 || i === null))
        return parseFloat(i.replace(",", "."));
    }
    e.InvalidDurationError = new Error("Invalid duration"), e.MultipleFractionsError = new Error("Multiple fractions specified");
    function s(i, h = o) {
      const m = n.exec(i);
      if (!m || !m.groups)
        throw e.InvalidDurationError;
      let g = !0, f = 0;
      const c = {};
      for (const { unit: b } of t)
        if (m.groups[b] && (g = !1, c[b] = r(m.groups[b]), !h.allowMultipleFractions && !Number.isInteger(c[b]) && (f++, f > 1)))
          throw e.MultipleFractionsError;
      if (g)
        throw e.InvalidDurationError;
      const $ = c;
      return m.groups.negative && ($.negative = !0), $;
    }
    e.parse = s;
    const d = (i, h) => {
      if (!i)
        return;
      let m = i.toString();
      const g = m.indexOf("e");
      if (g > -1) {
        const f = parseInt(m.slice(g + 2), 10);
        m = i.toFixed(f + g - 2);
      }
      return m + h;
    };
    function l(i) {
      return !i.years && !i.months && !i.weeks && !i.days && !i.hours && !i.minutes && !i.seconds ? "PT0S" : [
        i.negative && "-",
        "P",
        d(i.years, "Y"),
        d(i.months, "M"),
        d(i.weeks, "W"),
        d(i.days, "D"),
        (i.hours || i.minutes || i.seconds) && "T",
        d(i.hours, "H"),
        d(i.minutes, "M"),
        d(i.seconds, "S")
      ].filter(Boolean).join("");
    }
    e.serialize = l;
  })(Eo)), Eo;
}
var ba = Nn();
const Mo = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [a, n] of o)
    t[a] = n;
  return t;
}, kn = {}, wn = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Mn(e, o) {
  return p(), v("svg", wn, [...o[0] || (o[0] = [
    Yo('<g clip-path="url(#clip0_356_3298)"><path d="M14.639 10.2577L19.4686 8.96358C19.981 8.82629 20.5269 8.89816 20.9862 9.16338C21.4456 9.4286 21.7808 9.86543 21.9181 10.3778C22.0554 10.8902 21.9835 11.4361 21.7183 11.8954C21.4531 12.3548 21.0162 12.69 20.5039 12.8273L6.01499 16.7096L1.5643 11.6905L4.46208 10.914L6.91157 12.3282L9.80934 11.5518L6.06576 5.30793L8.96353 4.53147L14.639 10.2577Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 21H21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_356_3298"><rect width="24" height="24" fill="white"></rect></clipPath></defs>', 2)
  ])]);
}
const wt = /* @__PURE__ */ Mo(kn, [["render", Mn]]), On = { class: "flight-offer" }, Pn = {
  type: "button",
  class: "small"
}, Bn = { class: "md:w-4/6 py-2 md:py-4 px-2 md:px-4 flex rounded-t-xl bg-white md:shadow-[0_20px_10px_-15px_rgba(0,110,184,0.08)]" }, Tn = { class: "w-full flex justify-between items-center px-2 md:px-4" }, Dn = { class: "text-xl font-bold" }, xn = { class: "text-xs" }, Ln = { class: "text-center" }, En = { class: "text-xs" }, Rn = {
  key: 0,
  class: "text-xs"
}, In = { class: "text-right" }, Kn = { class: "text-sm" }, Gn = { class: "text-xl font-bold" }, jn = { class: "md:w-2/6 py-2 md:py-4 px-4 items-center rounded-b-xl bg-white shadow-[0_20px_10px_-15px_rgba(0,110,184,0.08)] flex md:flex-col justify-between md:justify-end" }, Fn = { class: "w-1/2 text-xs" }, Hn = { class: "w-1/2 text-right" }, Vn = { class: "text-taa-brand-dark-blue font-bold" }, _n = {
  type: "button",
  class: "large group group-focus-visible:ring-0 group-focus-visible:outline-0",
  style: { outline: "none" },
  tabindex: "0"
}, Un = { class: "itinerary group-focus:border-t-2 group-focus:border-b-2 group-focus:border-l-2 group-focus:border-r-white group-focus:border-taa-brand-dark-blue" }, zn = { class: "first-row" }, Wn = { class: "departure" }, Yn = { class: "airport" }, qn = { class: "time" }, Zn = { class: "date" }, Jn = { class: "travel-time-holder" }, Qn = { class: "text" }, Xn = {
  key: 0,
  class: "text"
}, er = { class: "arrival" }, or = { class: "airport" }, tr = { class: "time" }, ar = { class: "date" }, nr = { class: "second-row flex" }, rr = { class: "flex-grow text-right font-medium" }, sr = {
  key: 0,
  class: "font-extrabold text-red-700"
}, dr = {
  key: 1,
  class: "font-extrabold text-green-700"
}, ir = {
  key: 2,
  class: "font-extrabold text-red-700"
}, lr = {
  key: 3,
  class: "font-extrabold text-green-700"
}, ur = { class: "pricing group-focus:border-t-2 group-focus:border-b-2 group-focus:border-l-white group-focus:border-r-2 group-focus:border-taa-brand-dark-blue" }, hr = { class: "holder" }, mr = {
  key: 0,
  class: "warning"
}, cr = { class: "text" }, Cr = { class: "price" }, Sc = {
  __name: "T-Flight-Offer",
  props: {
    offer: Object
  },
  setup(e) {
    const o = e, t = o.offer.dictionary, a = o.offer.travelerPricings[0].fareDetailsBySegment[0].brandedFare ?? o.offer.travelerPricings[0].fareDetailsBySegment[0].cabin, n = w(""), r = w("");
    o.offer.fareRules && (n.value = o.offer.fareRules.rules.find((i) => i.category === "EXCHANGE"), r.value = o.offer.fareRules.rules.find((i) => i.category === "REFUND"));
    function s(i, h) {
      let m = new Date(i), g = new Date(h);
      return m.getDate() === g.getDate() && m.getMonth() === g.getMonth() && m.getFullYear() === g.getFullYear();
    }
    function d(i) {
      if (!i.duration)
        return "";
      let h = ba.parse(i.duration), m = "";
      return h.hours && (m += h.hours + " h "), h.minutes && (m += h.minutes + " m "), m;
    }
    function l(i) {
      return ("0" + (new Date(i).getMonth() + 1)).slice(-2);
    }
    return (i, h) => (p(), v("li", On, [
      u("a", Pn, [
        u("div", Bn, [
          u("div", Tn, [
            u("div", null, [
              h[0] || (h[0] = u("p", { class: "text-sm" }, null, -1)),
              u("p", Dn, y(("0" + new Date(e.offer.itineraries[0].segments[0].departure.at).getHours()).slice(-2)) + ":" + y(("0" + new Date(e.offer.itineraries[0].segments[0].departure.at).getMinutes()).slice(-2)), 1),
              u("p", xn, y(("0" + new Date(e.offer.itineraries[0].segments[0].departure.at).getDate()).slice(-2) + "-" + ("0" + new Date(e.offer.itineraries[0].segments[0].departure.at).getMonth()).slice(-2) + "-" + new Date(e.offer.itineraries[0].segments[0].departure.at).getFullYear()), 1)
            ]),
            u("div", Ln, [
              k(wt, { class: "stroke-neutral-400" }),
              u("p", En, y(d(e.offer.itineraries[0])), 1),
              e.offer.itineraries[0].segments.length > 1 ? (p(), v("p", Rn, y(e.offer.itineraries[0].segments.length - 1), 1)) : P("", !0)
            ]),
            u("div", In, [
              u("p", Kn, y(e.offer.itineraries[0].segments[e.offer.itineraries[0].segments.length - 1].arrival.iataCode), 1),
              u("p", Gn, y(("0" + new Date(e.offer.itineraries[0].segments[e.offer.itineraries[0].segments.length - 1].arrival.at).getHours()).slice(-2)) + ":" + y(("0" + new Date(e.offer.itineraries[0].segments[e.offer.itineraries[0].segments.length - 1].arrival.at).getMinutes()).slice(-2)), 1),
              h[1] || (h[1] = u("p", { class: "text-xs" }, null, -1))
            ])
          ])
        ]),
        h[3] || (h[3] = Yo('<div class="grid grid-cols-2 h-[20px]"><div class="left-lower-corner border-l-2 border-neutral-300"></div><div class="right-lower-corner border-dashed"></div><div class="right-upper-corner border-l-2 border-neutral-300"></div><div class="left-upper-corner border-dashed"></div></div>', 1)),
        u("div", jn, [
          u("div", Fn, y(C(t).carriers[e.offer.validatingAirlineCodes[0]]) + " | " + y(C(a)), 1),
          u("div", Hn, [
            h[2] || (h[2] = u("div", { class: "text-xs" }, null, -1)),
            u("div", Vn, y(e.offer.price.grandTotal) + " " + y(e.offer.price.currency), 1)
          ])
        ])
      ]),
      u("a", _n, [
        u("div", Un, [
          u("div", zn, [
            u("div", Wn, [
              u("p", Yn, y(e.offer.dictionary.locations[e.offer.itineraries[0].segments[0].departure.iataCode][i.$i18n.locale].city) + " (" + y(e.offer.itineraries[0].segments[0].departure.iataCode) + ") ", 1),
              u("p", qn, [
                u("time", null, y(("0" + new Date(e.offer.itineraries[0].segments[0].departure.at).getHours()).slice(-2)) + ":" + y(("0" + new Date(e.offer.itineraries[0].segments[0].departure.at).getMinutes()).slice(-2)), 1)
              ]),
              u("p", Zn, [
                u("time", null, y(("0" + new Date(e.offer.itineraries[0].segments[0].departure.at).getDate()).slice(-2) + "-" + l(e.offer.itineraries[0].segments[0].departure.at) + "-" + new Date(e.offer.itineraries[0].segments[0].departure.at).getFullYear()), 1)
              ])
            ]),
            u("div", Jn, [
              k(wt, { class: "icon" }),
              u("p", Qn, [
                u("time", null, y(d(e.offer.itineraries[0])), 1)
              ]),
              e.offer.itineraries[0].segments.length > 1 ? (p(), v("p", Xn, y(e.offer.itineraries[0].segments.length - 1) + " " + y(i.$t("flightOffers.stopover", e.offer.itineraries[0].segments.length - 1)), 1)) : P("", !0)
            ]),
            u("div", er, [
              u("p", or, y(e.offer.dictionary.locations[e.offer.itineraries[0].segments[e.offer.itineraries[0].segments.length - 1].arrival.iataCode][i.$i18n.locale].city) + " (" + y(e.offer.itineraries[0].segments[e.offer.itineraries[0].segments.length - 1].arrival.iataCode) + ") ", 1),
              u("p", tr, y(("0" + new Date(e.offer.itineraries[0].segments[e.offer.itineraries[0].segments.length - 1].arrival.at).getHours()).slice(-2)) + ":" + y(("0" + new Date(e.offer.itineraries[0].segments[e.offer.itineraries[0].segments.length - 1].arrival.at).getMinutes()).slice(-2)), 1),
              u("p", ar, y(s(e.offer.itineraries[0].segments[0].departure.at, e.offer.itineraries[0].segments[e.offer.itineraries[0].segments.length - 1].arrival.at) ? i.$t("flightOffers.sameDay") : i.$t("flightOffers.notSameDay")), 1)
            ])
          ]),
          u("div", nr, [
            u("p", null, y(C(t).carriers[e.offer.validatingAirlineCodes[0]]), 1),
            u("p", rr, [
              te(y(i.$t("flightOffers.refund").toUpperCase()) + ": ", 1),
              r.value ? (p(), v("span", sr, "✘")) : P("", !0),
              r.value ? P("", !0) : (p(), v("span", dr, "✓")),
              te(" | " + y(i.$t("flightOffers.exchange").toUpperCase()) + ": ", 1),
              n.value ? (p(), v("span", ir, "✘")) : P("", !0),
              n.value ? P("", !0) : (p(), v("span", lr, "✓"))
            ])
          ])
        ]),
        h[4] || (h[4] = Yo('<div class="divider"><div class="left-upper-corner group-focus:border-t-2 group-focus:border-b-white group-focus:border-l-white group-focus:border-r-white group-focus:border-taa-brand-dark-blue"></div><div class="right-upper-corner"></div><div class="right-lower-corner"></div><div class="left-lower-corner"></div></div>', 1)),
        u("div", ur, [
          u("div", hr, [
            e.offer.numberOfBookableSeats < 9 ? (p(), v("p", mr, y(i.$t("flightOffers.seats", e.offer.numberOfBookableSeats)), 1)) : P("", !0),
            u("p", cr, y(i.$t("flightOffers.priceFrom")), 1),
            u("div", Cr, y(e.offer.price.grandTotal) + " " + y(e.offer.price.currency), 1)
          ])
        ])
      ])
    ]));
  }
};
function Mt(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    o && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Ae(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Mt(Object(t), !0).forEach(function(a) {
      gr(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Mt(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function gr(e, o, t) {
  return o in e ? Object.defineProperty(e, o, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[o] = t, e;
}
function Ot(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((t, a) => (o.includes(a) || (t[a] = C(e[a])), t), {});
}
function So(e) {
  return typeof e == "function";
}
function $r(e) {
  return cn(e) || Cn(e);
}
function Sa(e, o, t) {
  let a = e;
  const n = o.split(".");
  for (let r = 0; r < n.length; r++) {
    if (!a[n[r]]) return t;
    a = a[n[r]];
  }
  return a;
}
function Ro(e, o, t) {
  return N(() => e.some((a) => Sa(o, a, {
    [t]: !1
  })[t]));
}
function Pt(e, o, t) {
  return N(() => e.reduce((a, n) => {
    const r = Sa(o, n, {
      [t]: !1
    })[t] || [];
    return a.concat(r);
  }, []));
}
function Aa(e, o, t, a) {
  return e.call(a, C(o), C(t), a);
}
function Na(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function fr(e, o, t, a, n, r, s) {
  let {
    $lazy: d,
    $rewardEarly: l
  } = n, i = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], h = arguments.length > 8 ? arguments[8] : void 0, m = arguments.length > 9 ? arguments[9] : void 0, g = arguments.length > 10 ? arguments[10] : void 0;
  const f = w(!!a.value), c = w(0);
  t.value = !1;
  const $ = V([o, a].concat(i, g), () => {
    if (d && !a.value || l && !m.value && !t.value)
      return;
    let b;
    try {
      b = Aa(e, o, h, s);
    } catch (M) {
      b = Promise.reject(M);
    }
    c.value++, t.value = !!c.value, f.value = !1, Promise.resolve(b).then((M) => {
      c.value--, t.value = !!c.value, r.value = M, f.value = Na(M);
    }).catch((M) => {
      c.value--, t.value = !!c.value, r.value = M, f.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof o == "object"
  });
  return {
    $invalid: f,
    $unwatch: $
  };
}
function pr(e, o, t, a, n, r, s, d) {
  let {
    $lazy: l,
    $rewardEarly: i
  } = a;
  const h = () => ({}), m = N(() => {
    if (l && !t.value || i && !d.value)
      return !1;
    let g = !0;
    try {
      const f = Aa(e, o, s, r);
      n.value = f, g = Na(f);
    } catch (f) {
      n.value = f;
    }
    return g;
  });
  return {
    $unwatch: h,
    $invalid: m
  };
}
function yr(e, o, t, a, n, r, s, d, l, i, h) {
  const m = w(!1), g = e.$params || {}, f = w(null);
  let c, $;
  e.$async ? {
    $invalid: c,
    $unwatch: $
  } = fr(e.$validator, o, m, t, a, f, n, e.$watchTargets, l, i, h) : {
    $invalid: c,
    $unwatch: $
  } = pr(e.$validator, o, t, a, f, n, l, i);
  const b = e.$message;
  return {
    $message: So(b) ? N(() => b(Ot({
      $pending: m,
      $invalid: c,
      $params: Ot(g),
      $model: o,
      $response: f,
      $validator: r,
      $propertyPath: d,
      $property: s
    }))) : b || "",
    $params: g,
    $pending: m,
    $invalid: c,
    $response: f,
    $unwatch: $
  };
}
function vr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const o = C(e), t = Object.keys(o), a = {}, n = {}, r = {};
  let s = null;
  return t.forEach((d) => {
    const l = o[d];
    switch (!0) {
      case So(l.$validator):
        a[d] = l;
        break;
      case So(l):
        a[d] = {
          $validator: l
        };
        break;
      case d === "$validationGroups":
        s = l;
        break;
      case d.startsWith("$"):
        r[d] = l;
        break;
      default:
        n[d] = l;
    }
  }), {
    rules: a,
    nestedValidators: n,
    config: r,
    validationGroups: s
  };
}
const br = "__root";
function Sr(e, o, t, a, n, r, s, d, l) {
  const i = Object.keys(e), h = a.get(n, e), m = w(!1), g = w(!1), f = w(0);
  if (h) {
    if (!h.$partial) return h;
    h.$unwatch(), m.value = h.$dirty.value;
  }
  const c = {
    $dirty: m,
    $path: n,
    $touch: () => {
      m.value || (m.value = !0);
    },
    $reset: () => {
      m.value && (m.value = !1);
    },
    $commit: () => {
    }
  };
  return i.length ? (i.forEach(($) => {
    c[$] = yr(e[$], o, c.$dirty, r, s, $, t, n, l, g, f);
  }), c.$externalResults = N(() => d.value ? [].concat(d.value).map(($, b) => ({
    $propertyPath: n,
    $property: t,
    $validator: "$externalResults",
    $uid: `${n}-externalResult-${b}`,
    $message: $,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), c.$invalid = N(() => {
    const $ = i.some((b) => C(c[b].$invalid));
    return g.value = $, !!c.$externalResults.value.length || $;
  }), c.$pending = N(() => i.some(($) => C(c[$].$pending))), c.$error = N(() => c.$dirty.value ? c.$pending.value || c.$invalid.value : !1), c.$silentErrors = N(() => i.filter(($) => C(c[$].$invalid)).map(($) => {
    const b = c[$];
    return no({
      $propertyPath: n,
      $property: t,
      $validator: $,
      $uid: `${n}-${$}`,
      $message: b.$message,
      $params: b.$params,
      $response: b.$response,
      $pending: b.$pending
    });
  }).concat(c.$externalResults.value)), c.$errors = N(() => c.$dirty.value ? c.$silentErrors.value : []), c.$unwatch = () => i.forEach(($) => {
    c[$].$unwatch();
  }), c.$commit = () => {
    g.value = !0, f.value = Date.now();
  }, a.set(n, e, c), c) : (h && a.set(n, e, c), c);
}
function Ar(e, o, t, a, n, r, s) {
  const d = Object.keys(e);
  return d.length ? d.reduce((l, i) => (l[i] = Jo({
    validations: e[i],
    state: o,
    key: i,
    parentKey: t,
    resultsCache: a,
    globalConfig: n,
    instance: r,
    externalResults: s
  }), l), {}) : {};
}
function Nr(e, o, t) {
  const a = N(() => [o, t].filter((c) => c).reduce((c, $) => c.concat(Object.values(C($))), [])), n = N({
    get() {
      return e.$dirty.value || (a.value.length ? a.value.every((c) => c.$dirty) : !1);
    },
    set(c) {
      e.$dirty.value = c;
    }
  }), r = N(() => {
    const c = C(e.$silentErrors) || [], $ = a.value.filter((b) => (C(b).$silentErrors || []).length).reduce((b, M) => b.concat(...M.$silentErrors), []);
    return c.concat($);
  }), s = N(() => {
    const c = C(e.$errors) || [], $ = a.value.filter((b) => (C(b).$errors || []).length).reduce((b, M) => b.concat(...M.$errors), []);
    return c.concat($);
  }), d = N(() => a.value.some((c) => c.$invalid) || C(e.$invalid) || !1), l = N(() => a.value.some((c) => C(c.$pending)) || C(e.$pending) || !1), i = N(() => a.value.some((c) => c.$dirty) || a.value.some((c) => c.$anyDirty) || n.value), h = N(() => n.value ? l.value || d.value : !1), m = () => {
    e.$touch(), a.value.forEach((c) => {
      c.$touch();
    });
  }, g = () => {
    e.$commit(), a.value.forEach((c) => {
      c.$commit();
    });
  }, f = () => {
    e.$reset(), a.value.forEach((c) => {
      c.$reset();
    });
  };
  return a.value.length && a.value.every((c) => c.$dirty) && m(), {
    $dirty: n,
    $errors: s,
    $invalid: d,
    $anyDirty: i,
    $error: h,
    $pending: l,
    $touch: m,
    $reset: f,
    $silentErrors: r,
    $commit: g
  };
}
function Jo(e) {
  let {
    validations: o,
    state: t,
    key: a,
    parentKey: n,
    childResults: r,
    resultsCache: s,
    globalConfig: d = {},
    instance: l,
    externalResults: i
  } = e;
  const h = n ? `${n}.${a}` : a, {
    rules: m,
    nestedValidators: g,
    config: f,
    validationGroups: c
  } = vr(o), $ = Ae(Ae({}, d), f), b = a ? N(() => {
    const G = C(t);
    return G ? C(G[a]) : void 0;
  }) : t, M = Ae({}, C(i) || {}), O = N(() => {
    const G = C(i);
    return a ? G ? C(G[a]) : void 0 : G;
  }), A = Sr(m, b, a, s, h, $, l, O, t), S = Ar(g, b, h, s, $, l, O), T = {};
  c && Object.entries(c).forEach((G) => {
    let [E, R] = G;
    T[E] = {
      $invalid: Ro(R, S, "$invalid"),
      $error: Ro(R, S, "$error"),
      $pending: Ro(R, S, "$pending"),
      $errors: Pt(R, S, "$errors"),
      $silentErrors: Pt(R, S, "$silentErrors")
    };
  });
  const {
    $dirty: D,
    $errors: K,
    $invalid: X,
    $anyDirty: ve,
    $error: be,
    $pending: Me,
    $touch: Oe,
    $reset: ue,
    $silentErrors: Pe,
    $commit: he
  } = Nr(A, S, r), Ce = a ? N({
    get: () => C(b),
    set: (G) => {
      D.value = !0;
      const E = C(t), R = C(i);
      R && (R[a] = M[a]), qo(E[a]) ? E[a].value = G : E[a] = G;
    }
  }) : null;
  a && $.$autoDirty && V(b, () => {
    D.value || Oe();
    const G = C(i);
    G && (G[a] = M[a]);
  }, {
    flush: "sync"
  });
  async function Se() {
    return Oe(), $.$rewardEarly && (he(), await fe()), await fe(), new Promise((G) => {
      if (!Me.value) return G(!X.value);
      const E = V(Me, () => {
        G(!X.value), E();
      });
    });
  }
  function ho(G) {
    return (r.value || {})[G];
  }
  function mo() {
    qo(i) ? i.value = M : Object.keys(M).length === 0 ? Object.keys(i).forEach((G) => {
      delete i[G];
    }) : Object.assign(i, M);
  }
  return no(Ae(Ae(Ae({}, A), {}, {
    $model: Ce,
    $dirty: D,
    $error: be,
    $errors: K,
    $invalid: X,
    $anyDirty: ve,
    $pending: Me,
    $touch: Oe,
    $reset: ue,
    $path: h || br,
    $silentErrors: Pe,
    $validate: Se,
    $commit: he
  }, r && {
    $getResultsForChild: ho,
    $clearExternalResults: mo,
    $validationGroups: T
  }), S));
}
class kr {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(o, t, a) {
    this.storage.set(o, {
      rules: t,
      result: a
    });
  }
  checkRulesValidity(o, t, a) {
    const n = Object.keys(a), r = Object.keys(t);
    return r.length !== n.length || !r.every((d) => n.includes(d)) ? !1 : r.every((d) => t[d].$params ? Object.keys(t[d].$params).every((l) => C(a[d].$params[l]) === C(t[d].$params[l])) : !0);
  }
  get(o, t) {
    const a = this.storage.get(o);
    if (!a) return;
    const {
      rules: n,
      result: r
    } = a, s = this.checkRulesValidity(o, t, n), d = r.$unwatch ? r.$unwatch : () => ({});
    return s ? r : {
      $dirty: r.$dirty,
      $partial: !0,
      $unwatch: d
    };
  }
}
const po = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, Bt = Symbol("vuelidate#injectChildResults"), Tt = Symbol("vuelidate#removeChildResults");
function wr(e) {
  let {
    $scope: o,
    instance: t
  } = e;
  const a = {}, n = w([]), r = N(() => n.value.reduce((h, m) => (h[m] = C(a[m]), h), {}));
  function s(h, m) {
    let {
      $registerAs: g,
      $scope: f,
      $stopPropagation: c
    } = m;
    c || o === po.COLLECT_NONE || f === po.COLLECT_NONE || o !== po.COLLECT_ALL && o !== f || (a[g] = h, n.value.push(g));
  }
  t.__vuelidateInjectInstances = [].concat(t.__vuelidateInjectInstances || [], s);
  function d(h) {
    n.value = n.value.filter((m) => m !== h), delete a[h];
  }
  t.__vuelidateRemoveInstances = [].concat(t.__vuelidateRemoveInstances || [], d);
  const l = ae(Bt, []);
  de(Bt, t.__vuelidateInjectInstances);
  const i = ae(Tt, []);
  return de(Tt, t.__vuelidateRemoveInstances), {
    childResults: r,
    sendValidationResultsToParent: l,
    removeValidationResultsFromParent: i
  };
}
function ka(e) {
  return new Proxy(e, {
    get(o, t) {
      return typeof o[t] == "object" ? ka(o[t]) : N(() => o[t]);
    }
  });
}
let Dt = 0;
function ro(e, o) {
  var t;
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (a = e, e = void 0, o = void 0);
  let {
    $registerAs: n,
    $scope: r = po.COLLECT_ALL,
    $stopPropagation: s,
    $externalResults: d,
    currentVueInstance: l
  } = a;
  const i = l || ((t = va()) === null || t === void 0 ? void 0 : t.proxy), h = i ? i.$options : {};
  n || (Dt += 1, n = `_vuelidate_${Dt}`);
  const m = w({}), g = new kr(), {
    childResults: f,
    sendValidationResultsToParent: c,
    removeValidationResultsFromParent: $
  } = i ? wr({
    $scope: r,
    instance: i
  }) : {
    childResults: w({})
  };
  if (!e && h.validations) {
    const b = h.validations;
    o = w({}), hn(() => {
      o.value = i, V(() => So(b) ? b.call(o.value, new ka(o.value)) : b, (M) => {
        m.value = Jo({
          validations: M,
          state: o,
          childResults: f,
          resultsCache: g,
          globalConfig: a,
          instance: i,
          externalResults: d || i.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), a = h.validationsConfig || a;
  } else {
    const b = qo(e) || $r(e) ? e : no(e || {});
    V(b, (M) => {
      m.value = Jo({
        validations: M,
        state: o,
        childResults: f,
        resultsCache: g,
        globalConfig: a,
        instance: i ?? {},
        externalResults: d
      });
    }, {
      immediate: !0
    });
  }
  return i && (c.forEach((b) => b(m, {
    $registerAs: n,
    $scope: r,
    $stopPropagation: s
  })), mn(() => $.forEach((b) => b(n)))), N(() => Ae(Ae({}, C(m.value)), f.value));
}
function xt(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    o && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function eo(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? xt(Object(t), !0).forEach(function(a) {
      Mr(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xt(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function Mr(e, o, t) {
  return o in e ? Object.defineProperty(e, o, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[o] = t, e;
}
function Ao(e) {
  return typeof e == "function";
}
function Qo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Oo(e) {
  return Ao(e.$validator) ? eo({}, e) : {
    $validator: e
  };
}
function wa(e) {
  return typeof e == "object" ? e.$valid : e;
}
function Ma(e) {
  return e.$validator || e;
}
function Or(e, o) {
  if (!Qo(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!Qo(o) && !Ao(o)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const t = Oo(o);
  return t.$params = eo(eo({}, t.$params || {}), e), t;
}
function Pr(e, o) {
  if (!Ao(e) && typeof C(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!Qo(o) && !Ao(o)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const t = Oo(o);
  return t.$message = e, t;
}
function Br(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const t = Oo(e);
  return eo(eo({}, t), {}, {
    $async: !0,
    $watchTargets: o
  });
}
function Tr(e) {
  return {
    $validator(o) {
      for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        a[n - 1] = arguments[n];
      return C(o).reduce((r, s, d) => {
        const l = Object.entries(s).reduce((i, h) => {
          let [m, g] = h;
          const f = e[m] || {}, c = Object.entries(f).reduce(($, b) => {
            let [M, O] = b;
            const S = Ma(O).call(this, g, s, d, ...a), T = wa(S);
            if ($.$data[M] = S, $.$data.$invalid = !T || !!$.$data.$invalid, $.$data.$error = $.$data.$invalid, !T) {
              let D = O.$message || "";
              const K = O.$params || {};
              typeof D == "function" && (D = D({
                $pending: !1,
                $invalid: !T,
                $params: K,
                $model: g,
                $response: S
              })), $.$errors.push({
                $property: m,
                $message: D,
                $params: K,
                $response: S,
                $model: g,
                $pending: !1,
                $validator: M
              });
            }
            return {
              $valid: $.$valid && T,
              $data: $.$data,
              $errors: $.$errors
            };
          }, {
            $valid: !0,
            $data: {},
            $errors: []
          });
          return i.$data[m] = c.$data, i.$errors[m] = c.$errors, {
            $valid: i.$valid && c.$valid,
            $data: i.$data,
            $errors: i.$errors
          };
        }, {
          $valid: !0,
          $data: {},
          $errors: {}
        });
        return {
          $valid: r.$valid && l.$valid,
          $data: r.$data.concat(l.$data),
          $errors: r.$errors.concat(l.$errors)
        };
      }, {
        $valid: !0,
        $data: [],
        $errors: []
      });
    },
    $message: (o) => {
      let {
        $response: t
      } = o;
      return t ? t.$errors.map((a) => Object.values(a).map((n) => n.map((r) => r.$message)).reduce((n, r) => n.concat(r), [])) : [];
    }
  };
}
const Ke = (e) => {
  if (e = C(e), Array.isArray(e)) return !!e.length;
  if (e == null)
    return !1;
  if (e === !1)
    return !0;
  if (e instanceof Date)
    return !isNaN(e.getTime());
  if (typeof e == "object") {
    for (let o in e) return !0;
    return !1;
  }
  return !!String(e).length;
}, Oa = (e) => (e = C(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function we() {
  for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++)
    o[t] = arguments[t];
  return (a) => (a = C(a), !Ke(a) || o.every((n) => (n.lastIndex = 0, n.test(a))));
}
var Dr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: Tr,
  len: Oa,
  normalizeValidatorObject: Oo,
  regex: we,
  req: Ke,
  unwrap: C,
  unwrapNormalizedValidator: Ma,
  unwrapValidatorResponse: wa,
  withAsync: Br,
  withMessage: Pr,
  withParams: Or
});
we(/^[a-zA-Z]*$/);
we(/^[a-zA-Z0-9]*$/);
we(/^\d*(\.\d+)?$/);
const xr = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
var Lr = we(xr), Pa = {
  $validator: Lr,
  $message: "Value is not a valid email address",
  $params: {
    type: "email"
  }
};
function Er(e) {
  return (o) => !Ke(o) || Oa(o) >= C(e);
}
function ze(e) {
  return {
    $validator: Er(e),
    $message: (o) => {
      let {
        $params: t
      } = o;
      return `This field should be at least ${t.min} characters long`;
    },
    $params: {
      min: e,
      type: "minLength"
    }
  };
}
function Rr(e) {
  return typeof e == "string" && (e = e.trim()), Ke(e);
}
var se = {
  $validator: Rr,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
const Ir = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
we(Ir);
function Kr(e) {
  return (o) => !Ke(o) || (!/\s/.test(o) || o instanceof Date) && +o >= +C(e);
}
function Io(e) {
  return {
    $validator: Kr(e),
    $message: (o) => {
      let {
        $params: t
      } = o;
      return `The minimum value allowed is ${t.min}`;
    },
    $params: {
      min: e,
      type: "minValue"
    }
  };
}
function Gr(e) {
  return (o) => !Ke(o) || (!/\s/.test(o) || o instanceof Date) && +o <= +C(e);
}
var Ko = ((e) => ({
  $validator: Gr(e),
  $message: (o) => {
    let {
      $params: t
    } = o;
    return `The maximum value allowed is ${t.max}`;
  },
  $params: {
    max: e,
    type: "maxValue"
  }
}));
we(/(^[0-9]*$)|(^-[0-9]+$)/);
we(/^[-]?\d*(\.\d+)?$/);
const jr = {
  class: /* @__PURE__ */ B({ "px-3 text-sm text-neutral-500": !0, valid: !0 })
}, Fr = { class: "flex items-center mb-3" }, Hr = { class: "flex-1 border border-neutral-300 px-3 py-2 rounded-l-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-taa-brand-blue focus-within:border-taa-brand-blue" }, Vr = {
  for: "birthday",
  class: "sr-only"
}, _r = ["value", "placeholder"], Ur = { class: "flex-1 border border-x-0 border-neutral-300 px-3 py-2 focus-within:z-10 focus-within:border focus-within:ring-1 focus-within:ring-taa-brand-blue focus-within:border-taa-brand-blue" }, zr = {
  for: "birth-month",
  class: "sr-only"
}, Wr = ["value", "placeholder"], Yr = { class: "flex-1 border border-neutral-300 px-3 py-2 rounded-r-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-taa-brand-blue focus-within:border-taa-brand-blue" }, qr = {
  for: "birth-year",
  class: "sr-only"
}, Zr = ["max", "value", "placeholder"], Ac = {
  __name: "T-Birthday-Input",
  props: {
    modelValue: {
      type: String
    }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: o }) {
    const t = e;
    j(function() {
      const i = Date.parse(t.modelValue);
      i instanceof Date && (a.value.day = i.getDate(), a.value.month = i.getMonth() + 1, a.value.year = i.getFullYear());
    });
    const a = w({
      day: null,
      month: null,
      year: null
    }), r = (/* @__PURE__ */ new Date()).getFullYear(), s = r - 120, d = ro({
      day: {
        required: se,
        minValue: Io(1),
        maxValue: Ko(31)
      },
      month: {
        required: se,
        minValue: Io(1),
        maxValue: Ko(12)
      },
      year: {
        required: se,
        minValue: Io(s),
        maxValue: Ko(r)
      }
    }, a.value);
    function l(i) {
      const { data: h } = i;
      a.value.day = i.target.value, console.log(d.value.day.$dirty);
    }
    return (i, h) => (p(), v(I, null, [
      u("h2", jr, y(i.$t("passengers.birthday.label")), 1),
      u("div", Fr, [
        u("div", Hr, [
          u("label", Vr, y(i.$t("passengers.birthday.day")), 1),
          u("input", {
            id: "birthday",
            type: "number",
            min: "1",
            max: "31",
            value: a.value.day,
            onInput: l,
            class: "block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",
            placeholder: i.$t("passengers.birthday.day")
          }, null, 40, _r)
        ]),
        u("div", Ur, [
          u("label", zr, y(i.$t("passengers.birthday.month")), 1),
          u("input", {
            id: "birth-month",
            type: "number",
            min: "1",
            max: "12",
            value: a.value.month,
            class: "block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",
            placeholder: i.$t("passengers.birthday.month")
          }, null, 8, Wr)
        ]),
        u("div", Yr, [
          u("label", qr, y(i.$t("passengers.birthday.year")), 1),
          u("input", {
            id: "birth-year",
            type: "number",
            min: s,
            max: C(r),
            value: a.value.year,
            class: "block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",
            placeholder: i.$t("passengers.birthday.year")
          }, null, 8, Zr)
        ])
      ]),
      te(" " + y(C(d).day.$dirty), 1)
    ], 64));
  }
};
function Lt(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function We(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "fill-rule": "evenodd",
      d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Jr(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ye(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "fill-rule": "evenodd",
      d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Qr(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "fill-rule": "evenodd",
      d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Xr(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", { d: "M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" }),
    u("path", { d: "m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" })
  ]);
}
function es(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Et(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", { d: "M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" })
  ]);
}
const os = { class: "holder" }, ts = { class: "icon" }, as = ["placeholder", "value"], ns = {
  key: 0,
  class: "px-3 text-sm text-red-500"
}, rs = {
  __name: "T-Email-Input",
  props: {
    email: {
      type: String,
      default: "",
      required: !0
    }
  },
  emits: [
    "update:email"
  ],
  setup(e, { emit: o }) {
    const a = ro({
      email: {
        required: se,
        emailValidator: Pa
      }
    }, e), n = N(() => a.value.email.$dirty ? !a.value.email.$invalid : !0);
    return (r, s) => (p(), v("div", {
      class: B({ "t-email-input": !0, error: !n.value })
    }, [
      u("label", {
        for: "email",
        class: B({ label: !0, error: !n.value })
      }, y(r.$t("passengers.email.label")), 3),
      u("div", os, [
        u("div", ts, [
          k(C(Xr), {
            class: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          })
        ]),
        u("input", {
          type: "email",
          name: "email",
          required: "",
          id: "email",
          onBlur: s[0] || (s[0] = (d) => C(a).email.$touch()),
          placeholder: r.$t("passengers.email.placeholder"),
          value: e.email,
          onInput: s[1] || (s[1] = (d) => r.$emit("update:email", d.target.value)),
          class: B({ input: !0, error: !n.value })
        }, null, 42, as)
      ]),
      C(a).$errors.length > 0 ? (p(), v("div", ns, [
        (p(!0), v(I, null, _(C(a).$errors, (d) => (p(), v("p", {
          key: d.$uid
        }, y(r.$t("passengers.errors." + d.$property + "." + d.$validator)), 1))), 128))
      ])) : P("", !0)
    ], 2));
  }
};
function ss(e, o, t) {
  let a = w(t == null ? void 0 : t.value), n = N(() => e.value !== void 0);
  return [N(() => n.value ? e.value : a.value), function(r) {
    return n.value || (a.value = r), o == null ? void 0 : o(r);
  }];
}
function mt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o) => setTimeout(() => {
    throw o;
  }));
}
function so() {
  let e = [], o = { addEventListener(t, a, n, r) {
    return t.addEventListener(a, n, r), o.add(() => t.removeEventListener(a, n, r));
  }, requestAnimationFrame(...t) {
    let a = requestAnimationFrame(...t);
    o.add(() => cancelAnimationFrame(a));
  }, nextFrame(...t) {
    o.requestAnimationFrame(() => {
      o.requestAnimationFrame(...t);
    });
  }, setTimeout(...t) {
    let a = setTimeout(...t);
    o.add(() => clearTimeout(a));
  }, microTask(...t) {
    let a = { current: !0 };
    return mt(() => {
      a.current && t[0]();
    }), o.add(() => {
      a.current = !1;
    });
  }, style(t, a, n) {
    let r = t.style.getPropertyValue(a);
    return Object.assign(t.style, { [a]: n }), this.add(() => {
      Object.assign(t.style, { [a]: r });
    });
  }, group(t) {
    let a = so();
    return t(a), this.add(() => a.dispose());
  }, add(t) {
    return e.push(t), () => {
      let a = e.indexOf(t);
      if (a >= 0) for (let n of e.splice(a, 1)) n();
    };
  }, dispose() {
    for (let t of e.splice(0)) t();
  } };
  return o;
}
var Rt;
let ds = Symbol("headlessui.useid"), is = 0;
const $e = (Rt = Nt.useId) != null ? Rt : function() {
  return Nt.inject(ds, () => `${++is}`)();
};
function x(e) {
  var o;
  if (e == null || e.value == null) return null;
  let t = (o = e.value.$el) != null ? o : e.value;
  return t instanceof Node ? t : null;
}
function q(e, o, ...t) {
  if (e in o) {
    let n = o[e];
    return typeof n == "function" ? n(...t) : n;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(o).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, q), a;
}
var ls = Object.defineProperty, us = (e, o, t) => o in e ? ls(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, It = (e, o, t) => (us(e, typeof o != "symbol" ? o + "" : o, t), t);
let hs = class {
  constructor() {
    It(this, "current", this.detect()), It(this, "currentId", 0);
  }
  set(o) {
    this.current !== o && (this.currentId = 0, this.current = o);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, io = new hs();
function Ge(e) {
  if (io.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let o = x(e);
    if (o) return o.ownerDocument;
  }
  return document;
}
let Xo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Ne || {}), Ba = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ba || {}), ms = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ms || {});
function cs(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Xo)).sort((o, t) => Math.sign((o.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ct = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ct || {});
function Ta(e, o = 0) {
  var t;
  return e === ((t = Ge(e)) == null ? void 0 : t.body) ? !1 : q(o, { 0() {
    return e.matches(Xo);
  }, 1() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(Xo)) return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
var Cs = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Cs || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function xe(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let gs = ["textarea", "input"].join(",");
function $s(e) {
  var o, t;
  return (t = (o = e == null ? void 0 : e.matches) == null ? void 0 : o.call(e, gs)) != null ? t : !1;
}
function Da(e, o = (t) => t) {
  return e.slice().sort((t, a) => {
    let n = o(t), r = o(a);
    if (n === null || r === null) return 0;
    let s = n.compareDocumentPosition(r);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function yo(e, o, { sorted: t = !0, relativeTo: a = null, skipElements: n = [] } = {}) {
  var r;
  let s = (r = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? r : document, d = Array.isArray(e) ? t ? Da(e) : e : cs(e);
  n.length > 0 && d.length > 1 && (d = d.filter((c) => !n.includes(c))), a = a ?? s.activeElement;
  let l = (() => {
    if (o & 5) return 1;
    if (o & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), i = (() => {
    if (o & 1) return 0;
    if (o & 2) return Math.max(0, d.indexOf(a)) - 1;
    if (o & 4) return Math.max(0, d.indexOf(a)) + 1;
    if (o & 8) return d.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = o & 32 ? { preventScroll: !0 } : {}, m = 0, g = d.length, f;
  do {
    if (m >= g || m + g <= 0) return 0;
    let c = i + m;
    if (o & 16) c = (c + g) % g;
    else {
      if (c < 0) return 3;
      if (c >= g) return 1;
    }
    f = d[c], f == null || f.focus(h), m += l;
  } while (f !== s.activeElement);
  return o & 6 && $s(f) && f.select(), 2;
}
function xa() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function fs() {
  return /Android/gi.test(window.navigator.userAgent);
}
function ps() {
  return xa() || fs();
}
function Co(e, o, t) {
  io.isServer || ie((a) => {
    document.addEventListener(e, o, t), a(() => document.removeEventListener(e, o, t));
  });
}
function La(e, o, t) {
  io.isServer || ie((a) => {
    window.addEventListener(e, o, t), a(() => window.removeEventListener(e, o, t));
  });
}
function Ea(e, o, t = N(() => !0)) {
  function a(r, s) {
    if (!t.value || r.defaultPrevented) return;
    let d = s(r);
    if (d === null || !d.getRootNode().contains(d)) return;
    let l = (function i(h) {
      return typeof h == "function" ? i(h()) : Array.isArray(h) || h instanceof Set ? h : [h];
    })(e);
    for (let i of l) {
      if (i === null) continue;
      let h = i instanceof HTMLElement ? i : x(i);
      if (h != null && h.contains(d) || r.composed && r.composedPath().includes(h)) return;
    }
    return !Ta(d, ct.Loose) && d.tabIndex !== -1 && r.preventDefault(), o(r, d);
  }
  let n = w(null);
  Co("pointerdown", (r) => {
    var s, d;
    t.value && (n.value = ((d = (s = r.composedPath) == null ? void 0 : s.call(r)) == null ? void 0 : d[0]) || r.target);
  }, !0), Co("mousedown", (r) => {
    var s, d;
    t.value && (n.value = ((d = (s = r.composedPath) == null ? void 0 : s.call(r)) == null ? void 0 : d[0]) || r.target);
  }, !0), Co("click", (r) => {
    ps() || n.value && (a(r, () => n.value), n.value = null);
  }, !0), Co("touchend", (r) => a(r, () => r.target instanceof HTMLElement ? r.target : null), !0), La("blur", (r) => a(r, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Kt(e, o) {
  if (e) return e;
  let t = o ?? "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function ys(e, o) {
  let t = w(Kt(e.value.type, e.value.as));
  return j(() => {
    t.value = Kt(e.value.type, e.value.as);
  }), ie(() => {
    var a;
    t.value || x(o) && x(o) instanceof HTMLButtonElement && !((a = x(o)) != null && a.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function Gt(e) {
  return [e.screenX, e.screenY];
}
function vs() {
  let e = w([-1, -1]);
  return { wasMoved(o) {
    let t = Gt(o);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(o) {
    e.value = Gt(o);
  } };
}
var Ie = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ie || {}), ke = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ke || {});
function Z({ visible: e = !0, features: o = 0, ourProps: t, theirProps: a, ...n }) {
  var r;
  let s = Ia(a, t), d = Object.assign(n, { props: s });
  if (e || o & 2 && s.static) return Go(d);
  if (o & 1) {
    let l = (r = s.unmount) == null || r ? 0 : 1;
    return q(l, { 0() {
      return null;
    }, 1() {
      return Go({ ...n, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Go(d);
}
function Go({ props: e, attrs: o, slots: t, slot: a, name: n }) {
  var r, s;
  let { as: d, ...l } = Ct(e, ["unmount", "static"]), i = (r = t.default) == null ? void 0 : r.call(t, a), h = {};
  if (a) {
    let m = !1, g = [];
    for (let [f, c] of Object.entries(a)) typeof c == "boolean" && (m = !0), c === !0 && g.push(f);
    m && (h["data-headlessui-state"] = g.join(" "));
  }
  if (d === "template") {
    if (i = Ra(i ?? []), Object.keys(l).length > 0 || Object.keys(o).length > 0) {
      let [m, ...g] = i ?? [];
      if (!Ss(m) || g.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(o)).map(($) => $.trim()).filter(($, b, M) => M.indexOf($) === b).sort(($, b) => $.localeCompare(b)).map(($) => `  - ${$}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(($) => `  - ${$}`).join(`
`)].join(`
`));
      let f = Ia((s = m.props) != null ? s : {}, l, h), c = gn(m, f, !0);
      for (let $ in f) $.startsWith("on") && (c.props || (c.props = {}), c.props[$] = f[$]);
      return c;
    }
    return Array.isArray(i) && i.length === 1 ? i[0] : i;
  }
  return z(d, Object.assign({}, l, h), { default: () => i });
}
function Ra(e) {
  return e.flatMap((o) => o.type === I ? Ra(o.children) : [o]);
}
function Ia(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let o = {}, t = {};
  for (let a of e) for (let n in a) n.startsWith("on") && typeof a[n] == "function" ? (t[n] != null || (t[n] = []), t[n].push(a[n])) : o[n] = a[n];
  if (o.disabled || o["aria-disabled"]) return Object.assign(o, Object.fromEntries(Object.keys(t).map((a) => [a, void 0])));
  for (let a in t) Object.assign(o, { [a](n, ...r) {
    let s = t[a];
    for (let d of s) {
      if (n instanceof Event && n.defaultPrevented) return;
      d(n, ...r);
    }
  } });
  return o;
}
function bs(e) {
  let o = Object.assign({}, e);
  for (let t in o) o[t] === void 0 && delete o[t];
  return o;
}
function Ct(e, o = []) {
  let t = Object.assign({}, e);
  for (let a of o) a in t && delete t[a];
  return t;
}
function Ss(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var oo = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(oo || {});
let No = W({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: o, attrs: t }) {
  return () => {
    var a;
    let { features: n, ...r } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : (a = r["aria-hidden"]) != null ? a : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return Z({ ourProps: s, theirProps: r, slot: {}, attrs: t, slots: o, name: "Hidden" });
  };
} }), Ka = Symbol("Context");
var Q = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Q || {});
function As() {
  return Po() !== null;
}
function Po() {
  return ae(Ka, null);
}
function Ga(e) {
  de(Ka, e);
}
var U = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(U || {});
function Ns(e) {
  function o() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", o));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", o), o());
}
let Te = [];
Ns(() => {
  function e(o) {
    o.target instanceof HTMLElement && o.target !== document.body && Te[0] !== o.target && (Te.unshift(o.target), Te = Te.filter((t) => t != null && t.isConnected), Te.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function ks(e) {
  throw new Error("Unexpected object: " + e);
}
var oe = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(oe || {});
function ws(e, o) {
  let t = o.resolveItems();
  if (t.length <= 0) return null;
  let a = o.resolveActiveIndex(), n = a ?? -1;
  switch (e.focus) {
    case 0: {
      for (let r = 0; r < t.length; ++r) if (!o.resolveDisabled(t[r], r, t)) return r;
      return a;
    }
    case 1: {
      n === -1 && (n = t.length);
      for (let r = n - 1; r >= 0; --r) if (!o.resolveDisabled(t[r], r, t)) return r;
      return a;
    }
    case 2: {
      for (let r = n + 1; r < t.length; ++r) if (!o.resolveDisabled(t[r], r, t)) return r;
      return a;
    }
    case 3: {
      for (let r = t.length - 1; r >= 0; --r) if (!o.resolveDisabled(t[r], r, t)) return r;
      return a;
    }
    case 4: {
      for (let r = 0; r < t.length; ++r) if (o.resolveId(t[r], r, t) === e.id) return r;
      return a;
    }
    case 5:
      return null;
    default:
      ks(e);
  }
}
function ja(e = {}, o = null, t = []) {
  for (let [a, n] of Object.entries(e)) Ha(t, Fa(o, a), n);
  return t;
}
function Fa(e, o) {
  return e ? e + "[" + o + "]" : o;
}
function Ha(e, o, t) {
  if (Array.isArray(t)) for (let [a, n] of t.entries()) Ha(e, Fa(o, a.toString()), n);
  else t instanceof Date ? e.push([o, t.toISOString()]) : typeof t == "boolean" ? e.push([o, t ? "1" : "0"]) : typeof t == "string" ? e.push([o, t]) : typeof t == "number" ? e.push([o, `${t}`]) : t == null ? e.push([o, ""]) : ja(t, o, e);
}
function Va(e, o, t, a) {
  io.isServer || ie((n) => {
    e = e ?? window, e.addEventListener(o, t, a), n(() => e.removeEventListener(o, t, a));
  });
}
var _e = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(_e || {});
function Ms() {
  let e = w(0);
  return La("keydown", (o) => {
    o.key === "Tab" && (e.value = o.shiftKey ? 1 : 0);
  }), e;
}
function _a(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let o = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let a = x(t);
    a instanceof HTMLElement && o.add(a);
  }
  return o;
}
var Ua = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ua || {});
let Fe = Object.assign(W({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: w(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: o, slots: t, expose: a }) {
  let n = w(null);
  a({ el: n, $el: n });
  let r = N(() => Ge(n)), s = w(!1);
  j(() => s.value = !0), le(() => s.value = !1), Ps({ ownerDocument: r }, N(() => s.value && !!(e.features & 16)));
  let d = Bs({ ownerDocument: r, container: n, initialFocus: N(() => e.initialFocus) }, N(() => s.value && !!(e.features & 2)));
  Ts({ ownerDocument: r, container: n, containers: e.containers, previousActiveElement: d }, N(() => s.value && !!(e.features & 8)));
  let l = Ms();
  function i(f) {
    let c = x(n);
    c && (($) => $())(() => {
      q(l.value, { [_e.Forwards]: () => {
        yo(c, Ne.First, { skipElements: [f.relatedTarget] });
      }, [_e.Backwards]: () => {
        yo(c, Ne.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let h = w(!1);
  function m(f) {
    f.key === "Tab" && (h.value = !0, requestAnimationFrame(() => {
      h.value = !1;
    }));
  }
  function g(f) {
    if (!s.value) return;
    let c = _a(e.containers);
    x(n) instanceof HTMLElement && c.add(x(n));
    let $ = f.relatedTarget;
    $ instanceof HTMLElement && $.dataset.headlessuiFocusGuard !== "true" && (za(c, $) || (h.value ? yo(x(n), q(l.value, { [_e.Forwards]: () => Ne.Next, [_e.Backwards]: () => Ne.Previous }) | Ne.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && xe(f.target)));
  }
  return () => {
    let f = {}, c = { ref: n, onKeydown: m, onFocusout: g }, { features: $, initialFocus: b, containers: M, ...O } = e;
    return z(I, [!!($ & 4) && z(No, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: i, features: oo.Focusable }), Z({ ourProps: c, theirProps: { ...o, ...O }, slot: f, attrs: o, slots: t, name: "FocusTrap" }), !!($ & 4) && z(No, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: i, features: oo.Focusable })]);
  };
} }), { features: Ua });
function Os(e) {
  let o = w(Te.slice());
  return V([e], ([t], [a]) => {
    a === !0 && t === !1 ? mt(() => {
      o.value.splice(0);
    }) : a === !1 && t === !0 && (o.value = Te.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = o.value.find((a) => a != null && a.isConnected)) != null ? t : null;
  };
}
function Ps({ ownerDocument: e }, o) {
  let t = Os(o);
  j(() => {
    ie(() => {
      var a, n;
      o.value || ((a = e.value) == null ? void 0 : a.activeElement) === ((n = e.value) == null ? void 0 : n.body) && xe(t());
    }, { flush: "post" });
  }), le(() => {
    o.value && xe(t());
  });
}
function Bs({ ownerDocument: e, container: o, initialFocus: t }, a) {
  let n = w(null), r = w(!1);
  return j(() => r.value = !0), le(() => r.value = !1), j(() => {
    V([o, t, a], (s, d) => {
      if (s.every((i, h) => (d == null ? void 0 : d[h]) === i) || !a.value) return;
      let l = x(o);
      l && mt(() => {
        var i, h;
        if (!r.value) return;
        let m = x(t), g = (i = e.value) == null ? void 0 : i.activeElement;
        if (m) {
          if (m === g) {
            n.value = g;
            return;
          }
        } else if (l.contains(g)) {
          n.value = g;
          return;
        }
        m ? xe(m) : yo(l, Ne.First | Ne.NoScroll) === Ba.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (h = e.value) == null ? void 0 : h.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function Ts({ ownerDocument: e, container: o, containers: t, previousActiveElement: a }, n) {
  var r;
  Va((r = e.value) == null ? void 0 : r.defaultView, "focus", (s) => {
    if (!n.value) return;
    let d = _a(t);
    x(o) instanceof HTMLElement && d.add(x(o));
    let l = a.value;
    if (!l) return;
    let i = s.target;
    i && i instanceof HTMLElement ? za(d, i) ? (a.value = i, xe(i)) : (s.preventDefault(), s.stopPropagation(), xe(l)) : xe(a.value);
  }, !0);
}
function za(e, o) {
  for (let t of e) if (t.contains(o)) return !0;
  return !1;
}
function Ds(e) {
  let o = $n(e.getSnapshot());
  return le(e.subscribe(() => {
    o.value = e.getSnapshot();
  })), o;
}
function xs(e, o) {
  let t = e(), a = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(n) {
    return a.add(n), () => a.delete(n);
  }, dispatch(n, ...r) {
    let s = o[n].call(t, ...r);
    s && (t = s, a.forEach((d) => d()));
  } };
}
function Ls() {
  let e;
  return { before({ doc: o }) {
    var t;
    let a = o.documentElement;
    e = ((t = o.defaultView) != null ? t : window).innerWidth - a.clientWidth;
  }, after({ doc: o, d: t }) {
    let a = o.documentElement, n = a.clientWidth - a.offsetWidth, r = e - n;
    t.style(a, "paddingRight", `${r}px`);
  } };
}
function Es() {
  return xa() ? { before({ doc: e, d: o, meta: t }) {
    function a(n) {
      return t.containers.flatMap((r) => r()).some((r) => r.contains(n));
    }
    o.microTask(() => {
      var n;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let d = so();
        d.style(e.documentElement, "scrollBehavior", "auto"), o.add(() => o.microTask(() => d.dispose()));
      }
      let r = (n = window.scrollY) != null ? n : window.pageYOffset, s = null;
      o.addEventListener(e, "click", (d) => {
        if (d.target instanceof HTMLElement) try {
          let l = d.target.closest("a");
          if (!l) return;
          let { hash: i } = new URL(l.href), h = e.querySelector(i);
          h && !a(h) && (s = h);
        } catch {
        }
      }, !0), o.addEventListener(e, "touchstart", (d) => {
        if (d.target instanceof HTMLElement) if (a(d.target)) {
          let l = d.target;
          for (; l.parentElement && a(l.parentElement); ) l = l.parentElement;
          o.style(l, "overscrollBehavior", "contain");
        } else o.style(d.target, "touchAction", "none");
      }), o.addEventListener(e, "touchmove", (d) => {
        if (d.target instanceof HTMLElement) {
          if (d.target.tagName === "INPUT") return;
          if (a(d.target)) {
            let l = d.target;
            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); ) l = l.parentElement;
            l.dataset.headlessuiPortal === "" && d.preventDefault();
          } else d.preventDefault();
        }
      }, { passive: !1 }), o.add(() => {
        var d;
        let l = (d = window.scrollY) != null ? d : window.pageYOffset;
        r !== l && window.scrollTo(0, r), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
      });
    });
  } } : {};
}
function Rs() {
  return { before({ doc: e, d: o }) {
    o.style(e.documentElement, "overflow", "hidden");
  } };
}
function Is(e) {
  let o = {};
  for (let t of e) Object.assign(o, t(o));
  return o;
}
let De = xs(() => /* @__PURE__ */ new Map(), { PUSH(e, o) {
  var t;
  let a = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: so(), meta: /* @__PURE__ */ new Set() };
  return a.count++, a.meta.add(o), this.set(e, a), this;
}, POP(e, o) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(o)), this;
}, SCROLL_PREVENT({ doc: e, d: o, meta: t }) {
  let a = { doc: e, d: o, meta: Is(t) }, n = [Es(), Ls(), Rs()];
  n.forEach(({ before: r }) => r == null ? void 0 : r(a)), n.forEach(({ after: r }) => r == null ? void 0 : r(a));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
De.subscribe(() => {
  let e = De.getSnapshot(), o = /* @__PURE__ */ new Map();
  for (let [t] of e) o.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let a = o.get(t.doc) === "hidden", n = t.count !== 0;
    (n && !a || !n && a) && De.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && De.dispatch("TEARDOWN", t);
  }
});
function Ks(e, o, t) {
  let a = Ds(De), n = N(() => {
    let r = e.value ? a.value.get(e.value) : void 0;
    return r ? r.count > 0 : !1;
  });
  return V([e, o], ([r, s], [d], l) => {
    if (!r || !s) return;
    De.dispatch("PUSH", r, t);
    let i = !1;
    l(() => {
      i || (De.dispatch("POP", d ?? r, t), i = !0);
    });
  }, { immediate: !0 }), n;
}
let jo = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map();
function jt(e, o = w(!0)) {
  ie((t) => {
    var a;
    if (!o.value) return;
    let n = x(e);
    if (!n) return;
    t(function() {
      var s;
      if (!n) return;
      let d = (s = He.get(n)) != null ? s : 1;
      if (d === 1 ? He.delete(n) : He.set(n, d - 1), d !== 1) return;
      let l = jo.get(n);
      l && (l["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", l["aria-hidden"]), n.inert = l.inert, jo.delete(n));
    });
    let r = (a = He.get(n)) != null ? a : 0;
    He.set(n, r + 1), r === 0 && (jo.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
function Gs({ defaultContainers: e = [], portals: o, mainTreeNodeRef: t } = {}) {
  let a = w(null), n = Ge(a);
  function r() {
    var s, d, l;
    let i = [];
    for (let h of e) h !== null && (h instanceof HTMLElement ? i.push(h) : "value" in h && h.value instanceof HTMLElement && i.push(h.value));
    if (o != null && o.value) for (let h of o.value) i.push(h);
    for (let h of (s = n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null ? s : []) h !== document.body && h !== document.head && h instanceof HTMLElement && h.id !== "headlessui-portal-root" && (h.contains(x(a)) || h.contains((l = (d = x(a)) == null ? void 0 : d.getRootNode()) == null ? void 0 : l.host) || i.some((m) => h.contains(m)) || i.push(h));
    return i;
  }
  return { resolveContainers: r, contains(s) {
    return r().some((d) => d.contains(s));
  }, mainTreeNodeRef: a, MainTreeNode() {
    return t != null ? null : z(No, { features: oo.Hidden, ref: a });
  } };
}
let Wa = Symbol("ForcePortalRootContext");
function js() {
  return ae(Wa, !1);
}
let et = W({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: o, attrs: t }) {
  return de(Wa, e.force), () => {
    let { force: a, ...n } = e;
    return Z({ theirProps: n, ourProps: {}, slot: {}, slots: o, attrs: t, name: "ForcePortalRoot" });
  };
} }), Ya = Symbol("StackContext");
var ot = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ot || {});
function Fs() {
  return ae(Ya, () => {
  });
}
function Hs({ type: e, enabled: o, element: t, onUpdate: a }) {
  let n = Fs();
  function r(...s) {
    a == null || a(...s), n(...s);
  }
  j(() => {
    V(o, (s, d) => {
      s ? r(0, e, t) : d === !0 && r(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), le(() => {
    o.value && r(1, e, t);
  }), de(Ya, r);
}
let qa = Symbol("DescriptionContext");
function Vs() {
  let e = ae(qa, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function _s({ slot: e = w({}), name: o = "Description", props: t = {} } = {}) {
  let a = w([]);
  function n(r) {
    return a.value.push(r), () => {
      let s = a.value.indexOf(r);
      s !== -1 && a.value.splice(s, 1);
    };
  }
  return de(qa, { register: n, slot: e, name: o, props: t }), N(() => a.value.length > 0 ? a.value.join(" ") : void 0);
}
W({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: o, slots: t }) {
  var a;
  let n = (a = e.id) != null ? a : `headlessui-description-${$e()}`, r = Vs();
  return j(() => le(r.register(n))), () => {
    let { name: s = "Description", slot: d = w({}), props: l = {} } = r, { ...i } = e, h = { ...Object.entries(l).reduce((m, [g, f]) => Object.assign(m, { [g]: C(f) }), {}), id: n };
    return Z({ ourProps: h, theirProps: i, slot: d.value, attrs: o, slots: t, name: s });
  };
} });
function Us(e) {
  let o = Ge(e);
  if (!o) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let t = o.getElementById("headlessui-portal-root");
  if (t) return t;
  let a = o.createElement("div");
  return a.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(a);
}
const tt = /* @__PURE__ */ new WeakMap();
function zs(e) {
  var o;
  return (o = tt.get(e)) != null ? o : 0;
}
function Ft(e, o) {
  let t = o(zs(e));
  return t <= 0 ? tt.delete(e) : tt.set(e, t), t;
}
let Za = W({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: o, attrs: t }) {
  let a = w(null), n = N(() => Ge(a)), r = js(), s = ae(Ja, null), d = w(r === !0 || s == null ? Us(a.value) : s.resolveTarget());
  d.value && Ft(d.value, (g) => g + 1);
  let l = w(!1);
  j(() => {
    l.value = !0;
  }), ie(() => {
    r || s != null && (d.value = s.resolveTarget());
  });
  let i = ae(at, null), h = !1, m = va();
  return V(a, () => {
    if (h || !i) return;
    let g = x(a);
    g && (le(i.register(g), m), h = !0);
  }), le(() => {
    var g, f;
    let c = (g = n.value) == null ? void 0 : g.getElementById("headlessui-portal-root");
    !c || d.value !== c || Ft(d.value, ($) => $ - 1) || d.value.children.length > 0 || (f = d.value.parentElement) == null || f.removeChild(d.value);
  }), () => {
    if (!l.value || d.value === null) return null;
    let g = { ref: a, "data-headlessui-portal": "" };
    return z(fn, { to: d.value }, Z({ ourProps: g, theirProps: e, slot: {}, attrs: t, slots: o, name: "Portal" }));
  };
} }), at = Symbol("PortalParentContext");
function Ws() {
  let e = ae(at, null), o = w([]);
  function t(r) {
    return o.value.push(r), e && e.register(r), () => a(r);
  }
  function a(r) {
    let s = o.value.indexOf(r);
    s !== -1 && o.value.splice(s, 1), e && e.unregister(r);
  }
  let n = { register: t, unregister: a, portals: o };
  return [o, W({ name: "PortalWrapper", setup(r, { slots: s }) {
    return de(at, n), () => {
      var d;
      return (d = s.default) == null ? void 0 : d.call(s);
    };
  } })];
}
let Ja = Symbol("PortalGroupContext"), Ys = W({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: o, slots: t }) {
  let a = no({ resolveTarget() {
    return e.target;
  } });
  return de(Ja, a), () => {
    let { target: n, ...r } = e;
    return Z({ theirProps: r, ourProps: {}, slot: {}, attrs: o, slots: t, name: "PortalGroup" });
  };
} });
var qs = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qs || {});
let nt = Symbol("DialogContext");
function lo(e) {
  let o = ae(nt, null);
  if (o === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, lo), t;
  }
  return o;
}
let go = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Zs = W({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: go }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: o, attrs: t, slots: a, expose: n }) {
  var r, s;
  let d = (r = e.id) != null ? r : `headlessui-dialog-${$e()}`, l = w(!1);
  j(() => {
    l.value = !0;
  });
  let i = !1, h = N(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (i || (i = !0, console.warn(`Invalid role [${h}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), m = w(0), g = Po(), f = N(() => e.open === go && g !== null ? (g.value & Q.Open) === Q.Open : e.open), c = w(null), $ = N(() => Ge(c));
  if (n({ el: c, $el: c }), !(e.open !== go || g !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === go ? void 0 : e.open}`);
  let b = N(() => l.value && f.value ? 0 : 1), M = N(() => b.value === 0), O = N(() => m.value > 1), A = ae(nt, null) !== null, [S, T] = Ws(), { resolveContainers: D, mainTreeNodeRef: K, MainTreeNode: X } = Gs({ portals: S, defaultContainers: [N(() => {
    var E;
    return (E = Se.panelRef.value) != null ? E : c.value;
  })] }), ve = N(() => O.value ? "parent" : "leaf"), be = N(() => g !== null ? (g.value & Q.Closing) === Q.Closing : !1), Me = N(() => A || be.value ? !1 : M.value), Oe = N(() => {
    var E, R, me;
    return (me = Array.from((R = (E = $.value) == null ? void 0 : E.querySelectorAll("body > *")) != null ? R : []).find((ce) => ce.id === "headlessui-portal-root" ? !1 : ce.contains(x(K)) && ce instanceof HTMLElement)) != null ? me : null;
  });
  jt(Oe, Me);
  let ue = N(() => O.value ? !0 : M.value), Pe = N(() => {
    var E, R, me;
    return (me = Array.from((R = (E = $.value) == null ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) != null ? R : []).find((ce) => ce.contains(x(K)) && ce instanceof HTMLElement)) != null ? me : null;
  });
  jt(Pe, ue), Hs({ type: "Dialog", enabled: N(() => b.value === 0), element: c, onUpdate: (E, R) => {
    if (R === "Dialog") return q(E, { [ot.Add]: () => m.value += 1, [ot.Remove]: () => m.value -= 1 });
  } });
  let he = _s({ name: "DialogDescription", slot: N(() => ({ open: f.value })) }), Ce = w(null), Se = { titleId: Ce, panelRef: w(null), dialogState: b, setTitleId(E) {
    Ce.value !== E && (Ce.value = E);
  }, close() {
    o("close", !1);
  } };
  de(nt, Se);
  let ho = N(() => !(!M.value || O.value));
  Ea(D, (E, R) => {
    E.preventDefault(), Se.close(), fe(() => R == null ? void 0 : R.focus());
  }, ho);
  let mo = N(() => !(O.value || b.value !== 0));
  Va((s = $.value) == null ? void 0 : s.defaultView, "keydown", (E) => {
    mo.value && (E.defaultPrevented || E.key === U.Escape && (E.preventDefault(), E.stopPropagation(), Se.close()));
  });
  let G = N(() => !(be.value || b.value !== 0 || A));
  return Ks($, G, (E) => {
    var R;
    return { containers: [...(R = E.containers) != null ? R : [], D] };
  }), ie((E) => {
    if (b.value !== 0) return;
    let R = x(c);
    if (!R) return;
    let me = new ResizeObserver((ce) => {
      for (let xo of ce) {
        let co = xo.target.getBoundingClientRect();
        co.x === 0 && co.y === 0 && co.width === 0 && co.height === 0 && Se.close();
      }
    });
    me.observe(R), E(() => me.disconnect());
  }), () => {
    let { open: E, initialFocus: R, ...me } = e, ce = { ...t, ref: c, id: d, role: h.value, "aria-modal": b.value === 0 ? !0 : void 0, "aria-labelledby": Ce.value, "aria-describedby": he.value }, xo = { open: b.value === 0 };
    return z(et, { force: !0 }, () => [z(Za, () => z(Ys, { target: c.value }, () => z(et, { force: !1 }, () => z(Fe, { initialFocus: R, containers: D, features: M.value ? q(ve.value, { parent: Fe.features.RestoreFocus, leaf: Fe.features.All & ~Fe.features.FocusLock }) : Fe.features.None }, () => z(T, {}, () => Z({ ourProps: ce, theirProps: { ...me, ...t }, slot: xo, attrs: t, slots: a, visible: b.value === 0, features: Ie.RenderStrategy | Ie.Static, name: "Dialog" })))))), z(X)]);
  };
} });
W({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: o, slots: t }) {
  var a;
  let n = (a = e.id) != null ? a : `headlessui-dialog-overlay-${$e()}`, r = lo("DialogOverlay");
  function s(d) {
    d.target === d.currentTarget && (d.preventDefault(), d.stopPropagation(), r.close());
  }
  return () => {
    let { ...d } = e;
    return Z({ ourProps: { id: n, "aria-hidden": !0, onClick: s }, theirProps: d, slot: { open: r.dialogState.value === 0 }, attrs: o, slots: t, name: "DialogOverlay" });
  };
} });
W({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: o, slots: t, expose: a }) {
  var n;
  let r = (n = e.id) != null ? n : `headlessui-dialog-backdrop-${$e()}`, s = lo("DialogBackdrop"), d = w(null);
  return a({ el: d, $el: d }), j(() => {
    if (s.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...l } = e, i = { id: r, ref: d, "aria-hidden": !0 };
    return z(et, { force: !0 }, () => z(Za, () => Z({ ourProps: i, theirProps: { ...o, ...l }, slot: { open: s.dialogState.value === 0 }, attrs: o, slots: t, name: "DialogBackdrop" })));
  };
} });
let Js = W({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: o, slots: t, expose: a }) {
  var n;
  let r = (n = e.id) != null ? n : `headlessui-dialog-panel-${$e()}`, s = lo("DialogPanel");
  a({ el: s.panelRef, $el: s.panelRef });
  function d(l) {
    l.stopPropagation();
  }
  return () => {
    let { ...l } = e, i = { id: r, ref: s.panelRef, onClick: d };
    return Z({ ourProps: i, theirProps: l, slot: { open: s.dialogState.value === 0 }, attrs: o, slots: t, name: "DialogPanel" });
  };
} });
W({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: o, slots: t }) {
  var a;
  let n = (a = e.id) != null ? a : `headlessui-dialog-title-${$e()}`, r = lo("DialogTitle");
  return j(() => {
    r.setTitleId(n), le(() => r.setTitleId(null));
  }), () => {
    let { ...s } = e;
    return Z({ ourProps: { id: n }, theirProps: s, slot: { open: r.dialogState.value === 0 }, attrs: o, slots: t, name: "DialogTitle" });
  };
} });
let Ht = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Vt(e) {
  var o, t;
  let a = (o = e.innerText) != null ? o : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement)) return a;
  let r = !1;
  for (let d of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) d.remove(), r = !0;
  let s = r ? (t = n.innerText) != null ? t : "" : a;
  return Ht.test(s) && (s = s.replace(Ht, "")), s;
}
function Qs(e) {
  let o = e.getAttribute("aria-label");
  if (typeof o == "string") return o.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let a = t.split(" ").map((n) => {
      let r = document.getElementById(n);
      if (r) {
        let s = r.getAttribute("aria-label");
        return typeof s == "string" ? s.trim() : Vt(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (a.length > 0) return a.join(", ");
  }
  return Vt(e).trim();
}
function Xs(e) {
  let o = w(""), t = w("");
  return () => {
    let a = x(e);
    if (!a) return "";
    let n = a.innerText;
    if (o.value === n) return t.value;
    let r = Qs(a).trim().toLowerCase();
    return o.value = n, t.value = r, r;
  };
}
function ed(e, o) {
  return e === o;
}
var od = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(od || {}), td = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(td || {}), ad = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ad || {});
function nd(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Qa = Symbol("ListboxContext");
function uo(e) {
  let o = ae(Qa, null);
  if (o === null) {
    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, uo), t;
  }
  return o;
}
let qe = W({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => ed }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: o, attrs: t, emit: a }) {
  let n = w(1), r = w(null), s = w(null), d = w(null), l = w([]), i = w(""), h = w(null), m = w(1);
  function g(A = (S) => S) {
    let S = h.value !== null ? l.value[h.value] : null, T = Da(A(l.value.slice()), (K) => x(K.dataRef.domRef)), D = S ? T.indexOf(S) : null;
    return D === -1 && (D = null), { options: T, activeOptionIndex: D };
  }
  let f = N(() => e.multiple ? 1 : 0), [c, $] = ss(N(() => e.modelValue), (A) => a("update:modelValue", A), N(() => e.defaultValue)), b = N(() => c.value === void 0 ? q(f.value, { 1: [], 0: void 0 }) : c.value), M = { listboxState: n, value: b, mode: f, compare(A, S) {
    if (typeof e.by == "string") {
      let T = e.by;
      return (A == null ? void 0 : A[T]) === (S == null ? void 0 : S[T]);
    }
    return e.by(A, S);
  }, orientation: N(() => e.horizontal ? "horizontal" : "vertical"), labelRef: r, buttonRef: s, optionsRef: d, disabled: N(() => e.disabled), options: l, searchQuery: i, activeOptionIndex: h, activationTrigger: m, closeListbox() {
    e.disabled || n.value !== 1 && (n.value = 1, h.value = null);
  }, openListbox() {
    e.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(A, S, T) {
    if (e.disabled || n.value === 1) return;
    let D = g(), K = ws(A === oe.Specific ? { focus: oe.Specific, id: S } : { focus: A }, { resolveItems: () => D.options, resolveActiveIndex: () => D.activeOptionIndex, resolveId: (X) => X.id, resolveDisabled: (X) => X.dataRef.disabled });
    i.value = "", h.value = K, m.value = T ?? 1, l.value = D.options;
  }, search(A) {
    if (e.disabled || n.value === 1) return;
    let S = i.value !== "" ? 0 : 1;
    i.value += A.toLowerCase();
    let T = (h.value !== null ? l.value.slice(h.value + S).concat(l.value.slice(0, h.value + S)) : l.value).find((K) => K.dataRef.textValue.startsWith(i.value) && !K.dataRef.disabled), D = T ? l.value.indexOf(T) : -1;
    D === -1 || D === h.value || (h.value = D, m.value = 1);
  }, clearSearch() {
    e.disabled || n.value !== 1 && i.value !== "" && (i.value = "");
  }, registerOption(A, S) {
    let T = g((D) => [...D, { id: A, dataRef: S }]);
    l.value = T.options, h.value = T.activeOptionIndex;
  }, unregisterOption(A) {
    let S = g((T) => {
      let D = T.findIndex((K) => K.id === A);
      return D !== -1 && T.splice(D, 1), T;
    });
    l.value = S.options, h.value = S.activeOptionIndex, m.value = 1;
  }, theirOnChange(A) {
    e.disabled || $(A);
  }, select(A) {
    e.disabled || $(q(f.value, { 0: () => A, 1: () => {
      let S = re(M.value.value).slice(), T = re(A), D = S.findIndex((K) => M.compare(T, re(K)));
      return D === -1 ? S.push(T) : S.splice(D, 1), S;
    } }));
  } };
  Ea([s, d], (A, S) => {
    var T;
    M.closeListbox(), Ta(S, ct.Loose) || (A.preventDefault(), (T = x(s)) == null || T.focus());
  }, N(() => n.value === 0)), de(Qa, M), Ga(N(() => q(n.value, { 0: Q.Open, 1: Q.Closed })));
  let O = N(() => {
    var A;
    return (A = x(s)) == null ? void 0 : A.closest("form");
  });
  return j(() => {
    V([O], () => {
      if (!O.value || e.defaultValue === void 0) return;
      function A() {
        M.theirOnChange(e.defaultValue);
      }
      return O.value.addEventListener("reset", A), () => {
        var S;
        (S = O.value) == null || S.removeEventListener("reset", A);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: A, modelValue: S, disabled: T, form: D, ...K } = e, X = { open: n.value === 0, disabled: T, value: b.value };
    return z(I, [...A != null && b.value != null ? ja({ [A]: b.value }).map(([ve, be]) => z(No, bs({ features: oo.Hidden, key: ve, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: D, disabled: T, name: ve, value: be }))) : [], Z({ ourProps: {}, theirProps: { ...t, ...Ct(K, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: X, slots: o, attrs: t, name: "Listbox" })]);
  };
} }), Ze = W({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(e, { attrs: o, slots: t }) {
  var a;
  let n = (a = e.id) != null ? a : `headlessui-listbox-label-${$e()}`, r = uo("ListboxLabel");
  function s() {
    var d;
    (d = x(r.buttonRef)) == null || d.focus({ preventScroll: !0 });
  }
  return () => {
    let d = { open: r.listboxState.value === 0, disabled: r.disabled.value }, { ...l } = e, i = { id: n, ref: r.labelRef, onClick: s };
    return Z({ ourProps: i, theirProps: l, slot: d, attrs: o, slots: t, name: "ListboxLabel" });
  };
} }), Je = W({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: o, slots: t, expose: a }) {
  var n;
  let r = (n = e.id) != null ? n : `headlessui-listbox-button-${$e()}`, s = uo("ListboxButton");
  a({ el: s.buttonRef, $el: s.buttonRef });
  function d(m) {
    switch (m.key) {
      case U.Space:
      case U.Enter:
      case U.ArrowDown:
        m.preventDefault(), s.openListbox(), fe(() => {
          var g;
          (g = x(s.optionsRef)) == null || g.focus({ preventScroll: !0 }), s.value.value || s.goToOption(oe.First);
        });
        break;
      case U.ArrowUp:
        m.preventDefault(), s.openListbox(), fe(() => {
          var g;
          (g = x(s.optionsRef)) == null || g.focus({ preventScroll: !0 }), s.value.value || s.goToOption(oe.Last);
        });
        break;
    }
  }
  function l(m) {
    switch (m.key) {
      case U.Space:
        m.preventDefault();
        break;
    }
  }
  function i(m) {
    s.disabled.value || (s.listboxState.value === 0 ? (s.closeListbox(), fe(() => {
      var g;
      return (g = x(s.buttonRef)) == null ? void 0 : g.focus({ preventScroll: !0 });
    })) : (m.preventDefault(), s.openListbox(), nd(() => {
      var g;
      return (g = x(s.optionsRef)) == null ? void 0 : g.focus({ preventScroll: !0 });
    })));
  }
  let h = ys(N(() => ({ as: e.as, type: o.type })), s.buttonRef);
  return () => {
    var m, g;
    let f = { open: s.listboxState.value === 0, disabled: s.disabled.value, value: s.value.value }, { ...c } = e, $ = { ref: s.buttonRef, id: r, type: h.value, "aria-haspopup": "listbox", "aria-controls": (m = x(s.optionsRef)) == null ? void 0 : m.id, "aria-expanded": s.listboxState.value === 0, "aria-labelledby": s.labelRef.value ? [(g = x(s.labelRef)) == null ? void 0 : g.id, r].join(" ") : void 0, disabled: s.disabled.value === !0 ? !0 : void 0, onKeydown: d, onKeyup: l, onClick: i };
    return Z({ ourProps: $, theirProps: c, slot: f, attrs: o, slots: t, name: "ListboxButton" });
  };
} }), Qe = W({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: o, slots: t, expose: a }) {
  var n;
  let r = (n = e.id) != null ? n : `headlessui-listbox-options-${$e()}`, s = uo("ListboxOptions"), d = w(null);
  a({ el: s.optionsRef, $el: s.optionsRef });
  function l(m) {
    switch (d.value && clearTimeout(d.value), m.key) {
      case U.Space:
        if (s.searchQuery.value !== "") return m.preventDefault(), m.stopPropagation(), s.search(m.key);
      case U.Enter:
        if (m.preventDefault(), m.stopPropagation(), s.activeOptionIndex.value !== null) {
          let g = s.options.value[s.activeOptionIndex.value];
          s.select(g.dataRef.value);
        }
        s.mode.value === 0 && (s.closeListbox(), fe(() => {
          var g;
          return (g = x(s.buttonRef)) == null ? void 0 : g.focus({ preventScroll: !0 });
        }));
        break;
      case q(s.orientation.value, { vertical: U.ArrowDown, horizontal: U.ArrowRight }):
        return m.preventDefault(), m.stopPropagation(), s.goToOption(oe.Next);
      case q(s.orientation.value, { vertical: U.ArrowUp, horizontal: U.ArrowLeft }):
        return m.preventDefault(), m.stopPropagation(), s.goToOption(oe.Previous);
      case U.Home:
      case U.PageUp:
        return m.preventDefault(), m.stopPropagation(), s.goToOption(oe.First);
      case U.End:
      case U.PageDown:
        return m.preventDefault(), m.stopPropagation(), s.goToOption(oe.Last);
      case U.Escape:
        m.preventDefault(), m.stopPropagation(), s.closeListbox(), fe(() => {
          var g;
          return (g = x(s.buttonRef)) == null ? void 0 : g.focus({ preventScroll: !0 });
        });
        break;
      case U.Tab:
        m.preventDefault(), m.stopPropagation();
        break;
      default:
        m.key.length === 1 && (s.search(m.key), d.value = setTimeout(() => s.clearSearch(), 350));
        break;
    }
  }
  let i = Po(), h = N(() => i !== null ? (i.value & Q.Open) === Q.Open : s.listboxState.value === 0);
  return () => {
    var m, g;
    let f = { open: s.listboxState.value === 0 }, { ...c } = e, $ = { "aria-activedescendant": s.activeOptionIndex.value === null || (m = s.options.value[s.activeOptionIndex.value]) == null ? void 0 : m.id, "aria-multiselectable": s.mode.value === 1 ? !0 : void 0, "aria-labelledby": (g = x(s.buttonRef)) == null ? void 0 : g.id, "aria-orientation": s.orientation.value, id: r, onKeydown: l, role: "listbox", tabIndex: 0, ref: s.optionsRef };
    return Z({ ourProps: $, theirProps: c, slot: f, attrs: o, slots: t, features: Ie.RenderStrategy | Ie.Static, visible: h.value, name: "ListboxOptions" });
  };
} }), Xe = W({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: o, attrs: t, expose: a }) {
  var n;
  let r = (n = e.id) != null ? n : `headlessui-listbox-option-${$e()}`, s = uo("ListboxOption"), d = w(null);
  a({ el: d, $el: d });
  let l = N(() => s.activeOptionIndex.value !== null ? s.options.value[s.activeOptionIndex.value].id === r : !1), i = N(() => q(s.mode.value, { 0: () => s.compare(re(s.value.value), re(e.value)), 1: () => re(s.value.value).some((A) => s.compare(re(A), re(e.value))) })), h = N(() => q(s.mode.value, { 1: () => {
    var A;
    let S = re(s.value.value);
    return ((A = s.options.value.find((T) => S.some((D) => s.compare(re(D), re(T.dataRef.value))))) == null ? void 0 : A.id) === r;
  }, 0: () => i.value })), m = Xs(d), g = N(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return m();
  }, domRef: d }));
  j(() => s.registerOption(r, g)), le(() => s.unregisterOption(r)), j(() => {
    V([s.listboxState, i], () => {
      s.listboxState.value === 0 && i.value && q(s.mode.value, { 1: () => {
        h.value && s.goToOption(oe.Specific, r);
      }, 0: () => {
        s.goToOption(oe.Specific, r);
      } });
    }, { immediate: !0 });
  }), ie(() => {
    s.listboxState.value === 0 && l.value && s.activationTrigger.value !== 0 && fe(() => {
      var A, S;
      return (S = (A = x(d)) == null ? void 0 : A.scrollIntoView) == null ? void 0 : S.call(A, { block: "nearest" });
    });
  });
  function f(A) {
    if (e.disabled) return A.preventDefault();
    s.select(e.value), s.mode.value === 0 && (s.closeListbox(), fe(() => {
      var S;
      return (S = x(s.buttonRef)) == null ? void 0 : S.focus({ preventScroll: !0 });
    }));
  }
  function c() {
    if (e.disabled) return s.goToOption(oe.Nothing);
    s.goToOption(oe.Specific, r);
  }
  let $ = vs();
  function b(A) {
    $.update(A);
  }
  function M(A) {
    $.wasMoved(A) && (e.disabled || l.value || s.goToOption(oe.Specific, r, 0));
  }
  function O(A) {
    $.wasMoved(A) && (e.disabled || l.value && s.goToOption(oe.Nothing));
  }
  return () => {
    let { disabled: A } = e, S = { active: l.value, selected: i.value, disabled: A }, { value: T, disabled: D, ...K } = e, X = { id: r, ref: d, role: "option", tabIndex: A === !0 ? void 0 : -1, "aria-disabled": A === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: f, onFocus: c, onPointerenter: b, onMouseenter: b, onPointermove: M, onMousemove: M, onPointerleave: O, onMouseleave: O };
    return Z({ ourProps: X, theirProps: K, slot: S, attrs: t, slots: o, name: "ListboxOption" });
  };
} });
function rd(e) {
  let o = { called: !1 };
  return (...t) => {
    if (!o.called) return o.called = !0, e(...t);
  };
}
function Fo(e, ...o) {
  e && o.length > 0 && e.classList.add(...o);
}
function $o(e, ...o) {
  e && o.length > 0 && e.classList.remove(...o);
}
var rt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(rt || {});
function sd(e, o) {
  let t = so();
  if (!e) return t.dispose;
  let { transitionDuration: a, transitionDelay: n } = getComputedStyle(e), [r, s] = [a, n].map((d) => {
    let [l = 0] = d.split(",").filter(Boolean).map((i) => i.includes("ms") ? parseFloat(i) : parseFloat(i) * 1e3).sort((i, h) => h - i);
    return l;
  });
  return r !== 0 ? t.setTimeout(() => o("finished"), r + s) : o("finished"), t.add(() => o("cancelled")), t.dispose;
}
function _t(e, o, t, a, n, r) {
  let s = so(), d = r !== void 0 ? rd(r) : () => {
  };
  return $o(e, ...n), Fo(e, ...o, ...t), s.nextFrame(() => {
    $o(e, ...t), Fo(e, ...a), s.add(sd(e, (l) => ($o(e, ...a, ...o), Fo(e, ...n), d(l))));
  }), s.add(() => $o(e, ...o, ...t, ...a, ...n)), s.add(() => d("cancelled")), s.dispose;
}
function Be(e = "") {
  return e.split(/\s+/).filter((o) => o.length > 1);
}
let gt = Symbol("TransitionContext");
var dd = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(dd || {});
function id() {
  return ae(gt, null) !== null;
}
function ld() {
  let e = ae(gt, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ud() {
  let e = ae($t, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let $t = Symbol("NestingContext");
function Bo(e) {
  return "children" in e ? Bo(e.children) : e.value.filter(({ state: o }) => o === "visible").length > 0;
}
function Xa(e) {
  let o = w([]), t = w(!1);
  j(() => t.value = !0), le(() => t.value = !1);
  function a(r, s = ke.Hidden) {
    let d = o.value.findIndex(({ id: l }) => l === r);
    d !== -1 && (q(s, { [ke.Unmount]() {
      o.value.splice(d, 1);
    }, [ke.Hidden]() {
      o.value[d].state = "hidden";
    } }), !Bo(o) && t.value && (e == null || e()));
  }
  function n(r) {
    let s = o.value.find(({ id: d }) => d === r);
    return s ? s.state !== "visible" && (s.state = "visible") : o.value.push({ id: r, state: "visible" }), () => a(r, ke.Unmount);
  }
  return { children: o, register: n, unregister: a };
}
let en = Ie.RenderStrategy, ft = W({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: o, attrs: t, slots: a, expose: n }) {
  let r = w(0);
  function s() {
    r.value |= Q.Opening, o("beforeEnter");
  }
  function d() {
    r.value &= ~Q.Opening, o("afterEnter");
  }
  function l() {
    r.value |= Q.Closing, o("beforeLeave");
  }
  function i() {
    r.value &= ~Q.Closing, o("afterLeave");
  }
  if (!id() && As()) return () => z(on, { ...e, onBeforeEnter: s, onAfterEnter: d, onBeforeLeave: l, onAfterLeave: i }, a);
  let h = w(null), m = N(() => e.unmount ? ke.Unmount : ke.Hidden);
  n({ el: h, $el: h });
  let { show: g, appear: f } = ld(), { register: c, unregister: $ } = ud(), b = w(g.value ? "visible" : "hidden"), M = { value: !0 }, O = $e(), A = { value: !1 }, S = Xa(() => {
    !A.value && b.value !== "hidden" && (b.value = "hidden", $(O), i());
  });
  j(() => {
    let ue = c(O);
    le(ue);
  }), ie(() => {
    if (m.value === ke.Hidden && O) {
      if (g.value && b.value !== "visible") {
        b.value = "visible";
        return;
      }
      q(b.value, { hidden: () => $(O), visible: () => c(O) });
    }
  });
  let T = Be(e.enter), D = Be(e.enterFrom), K = Be(e.enterTo), X = Be(e.entered), ve = Be(e.leave), be = Be(e.leaveFrom), Me = Be(e.leaveTo);
  j(() => {
    ie(() => {
      if (b.value === "visible") {
        let ue = x(h);
        if (ue instanceof Comment && ue.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function Oe(ue) {
    let Pe = M.value && !f.value, he = x(h);
    !he || !(he instanceof HTMLElement) || Pe || (A.value = !0, g.value && s(), g.value || l(), ue(g.value ? _t(he, T, D, K, X, (Ce) => {
      A.value = !1, Ce === rt.Finished && d();
    }) : _t(he, ve, be, Me, X, (Ce) => {
      A.value = !1, Ce === rt.Finished && (Bo(S) || (b.value = "hidden", $(O), i()));
    })));
  }
  return j(() => {
    V([g], (ue, Pe, he) => {
      Oe(he), M.value = !1;
    }, { immediate: !0 });
  }), de($t, S), Ga(N(() => q(b.value, { visible: Q.Open, hidden: Q.Closed }) | r.value)), () => {
    let { appear: ue, show: Pe, enter: he, enterFrom: Ce, enterTo: Se, entered: ho, leave: mo, leaveFrom: G, leaveTo: E, ...R } = e, me = { ref: h }, ce = { ...R, ...f.value && g.value && io.isServer ? { class: B([t.class, R.class, ...T, ...D]) } : {} };
    return Z({ theirProps: ce, ourProps: me, slot: {}, slots: a, attrs: t, features: en, visible: b.value === "visible", name: "TransitionChild" });
  };
} }), hd = ft, on = W({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: o, attrs: t, slots: a }) {
  let n = Po(), r = N(() => e.show === null && n !== null ? (n.value & Q.Open) === Q.Open : e.show);
  ie(() => {
    if (![!0, !1].includes(r.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = w(r.value ? "visible" : "hidden"), d = Xa(() => {
    s.value = "hidden";
  }), l = w(!0), i = { show: r, appear: N(() => e.appear || !l.value) };
  return j(() => {
    ie(() => {
      l.value = !1, r.value ? s.value = "visible" : Bo(d) || (s.value = "hidden");
    });
  }), de($t, d), de(gt, i), () => {
    let h = Ct(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return Z({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...a, default: () => [z(hd, { onBeforeEnter: () => o("beforeEnter"), onAfterEnter: () => o("afterEnter"), onBeforeLeave: () => o("beforeLeave"), onAfterLeave: () => o("afterLeave"), ...t, ...m, ...h }, a.default)] }, attrs: {}, features: en, visible: s.value === "visible", name: "Transition" });
  };
} });
const md = { class: "holder" }, cd = { class: "" }, Cd = { class: "icon" }, gd = { class: "flex" }, $d = {
  __name: "T-Gender-Input",
  props: {
    gender: {
      type: String,
      default: null
    }
  },
  emits: [
    "update:gender"
  ],
  setup(e, { emit: o }) {
    const { t } = Ee({ useScope: "global" }), a = e, n = o, r = [
      { value: "MALE" },
      { value: "FEMALE" },
      { value: "UNSPECIFIED" }
    ], s = w(r.find((d) => d.value === a.gender) ?? null);
    return V(s, (d) => {
      n("update:gender", d ? d.value : null);
    }), (d, l) => (p(), J(C(qe), {
      as: "div",
      modelValue: s.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => s.value = i),
      class: "t-gender-input"
    }, {
      default: L(() => [
        k(C(Ze), { class: "label" }, {
          default: L(() => [
            te(y(C(t)("passengers.gender.label")), 1)
          ]),
          _: 1
        }),
        u("div", md, [
          k(C(Je), { class: "button" }, {
            default: L(() => [
              u("span", cd, y(s.value ? C(t)("passengers.gender.options." + s.value.value.toLowerCase()) : C(t)("passengers.gender.options.placeholder")), 1),
              u("span", Cd, [
                k(C(Ye), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            _: 1
          }),
          k(Ue, {
            "leave-active-class": "transition ease-in duration-100",
            "leave-from-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: L(() => [
              k(C(Qe), { class: "options" }, {
                default: L(() => [
                  (p(), v(I, null, _(r, (i) => k(C(Xe), {
                    as: "template",
                    key: i.value,
                    value: i
                  }, {
                    default: L(({ active: h, selected: m }) => [
                      u("li", {
                        class: B([h ? "bg-taa-brand-blue text-white" : "text-gray-900", "relative cursor-default select-none py-2 pl-3 pr-9"])
                      }, [
                        u("div", gd, [
                          u("span", {
                            class: B([m ? "font-semibold" : "font-normal", "truncate"])
                          }, y(C(t)("passengers.gender.options." + i.value.toLowerCase())), 3)
                        ]),
                        m ? (p(), v("span", {
                          key: 0,
                          class: B([h ? "text-white" : "text-brand-blue", "absolute inset-y-0 right-0 flex items-center pr-4"])
                        }, [
                          k(C(We), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          })
                        ], 2)) : P("", !0)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"])), 64))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}, fd = { class: "hidden lg:flex gap-2 justify-between items-center text-white text-sm" }, pd = ["onClick"], yd = {
  id: "journey-type-holder",
  class: "relative inline-block lg:hidden"
}, vd = {
  key: 0,
  class: "absolute left-0 z-50 mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "menu-button",
  tabindex: "-1"
}, bd = {
  class: "py-1 px-1",
  role: "none"
}, Sd = ["onClick"], kc = {
  __name: "T-Journey-Type",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    current: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, a = o, n = w(!1);
    function r(d) {
      let l = d.target, i = document.getElementById("journey-type-holder");
      l !== i && !i.contains(l) && s();
    }
    function s(d) {
      t.disabled || (d && d !== t.current && a("change", d), n.value && document.removeEventListener("click", r), n.value || document.addEventListener("click", r), n.value = !n.value);
    }
    return (d, l) => (p(), v(I, null, [
      u("div", fd, [
        (p(!0), v(I, null, _(e.options, (i) => (p(), v("button", {
          onClick: () => s(i.value),
          class: B(["text-center text-nowrap text-sm px-3 py-0.5 grow flex-1 rounded-full focus:ring-taa-brand-blue focus-within:border-white", { "bg-taa-brand-blue text-neutral-100": e.current === i.value, "bg-white text-neutral-700": e.current !== i.value }])
        }, y(i.label), 11, pd))), 256))
      ]),
      u("div", yd, [
        u("button", {
          type: "button",
          "aria-expanded": "true",
          "aria-haspopup": "true",
          class: "flex gap-2 items-center bg-white text-neutral-700 text-center text-sm px-4 py-0.5 grow flex-1 rounded-full focus:ring-taa-brand-blue focus-within:border-white",
          onClick: l[0] || (l[0] = () => s())
        }, [
          (p(!0), v(I, null, _(e.options, (i) => (p(), v("span", {
            class: B({ hidden: i.value !== e.current })
          }, y(i.value === e.current ? i.label : ""), 3))), 256)),
          l[1] || (l[1] = u("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-4 h-4"
          }, [
            u("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
            })
          ], -1))
        ]),
        n.value ? (p(), v("div", vd, [
          u("div", bd, [
            (p(!0), v(I, null, _(e.options, (i) => (p(), v("button", {
              key: i.value,
              class: "w-full text-left text-gray-700 block rounded-xl px-4 py-1 text-sm hover:bg-taa-brand-blue/30",
              role: "menuitem",
              onClick: () => s(i.value),
              tabindex: "-1"
            }, y(i.label), 9, Sd))), 128))
          ])
        ])) : P("", !0)
      ])
    ], 64));
  }
}, Ad = { class: "t-name-input" }, Nd = { class: "holder" }, kd = {
  for: "firstName",
  class: "label"
}, wd = ["placeholder", "value"], Md = {
  for: "lastName",
  class: "label"
}, Od = ["placeholder", "value"], Pd = {
  key: 0,
  class: "px-3 text-sm text-red-500"
}, Bd = {
  __name: "T-Name-Input",
  props: {
    firstName: {
      type: String,
      default: "",
      required: !0
    },
    lastName: {
      type: String,
      default: "",
      required: !0
    }
  },
  emits: [
    "update:first-name",
    "update:last-name"
  ],
  setup(e, { emit: o }) {
    const t = e, a = ro({
      firstName: {
        required: se,
        minLength: ze(2)
      },
      lastName: {
        required: se,
        minLength: ze(2)
      }
    }, t), n = N(() => a.value.firstName.$dirty ? !a.value.firstName.$invalid : !0), r = N(() => a.value.lastName.$dirty ? !a.value.lastName.$invalid : !0);
    return (s, d) => (p(), v("div", Ad, [
      u("h2", {
        class: B({ title: !0, valid: C(a).$dirty && r.value && n.value })
      }, y(s.$t("passengers.name.title")), 3),
      u("div", Nd, [
        u("div", {
          class: B({ "first-name": !0, error: !n.value, valid: C(a).firstName.$dirty && n.value })
        }, [
          u("label", kd, y(s.$t("passengers.name.firstNameLabel")), 1),
          u("input", {
            id: "firstName",
            type: "text",
            name: "firstName",
            placeholder: s.$t("passengers.name.firstNameLabel"),
            class: "input",
            required: "",
            onBlur: d[0] || (d[0] = (l) => C(a).firstName.$touch()),
            value: e.firstName,
            onInput: d[1] || (d[1] = (l) => s.$emit("update:first-name", l.target.value))
          }, null, 40, wd)
        ], 2),
        u("div", {
          class: B({ "last-name": !0, error: !r.value, valid: C(a).lastName.$dirty && r.value })
        }, [
          u("label", Md, y(s.$t("passengers.name.lastNameLabel")), 1),
          u("input", {
            id: "lastName",
            type: "text",
            name: "lastName",
            placeholder: s.$t("passengers.name.lastNameLabel"),
            class: "input",
            onBlur: d[2] || (d[2] = (l) => C(a).lastName.$touch()),
            required: "",
            value: e.lastName,
            onInput: d[3] || (d[3] = (l) => s.$emit("update:last-name", l.target.value))
          }, null, 40, Od)
        ], 2)
      ]),
      C(a).$errors.length > 0 ? (p(), v("div", Pd, [
        (p(!0), v(I, null, _(C(a).$errors, (l) => (p(), v("p", {
          key: l.$uid
        }, y(s.$t("passengers.errors." + l.$property + "." + l.$validator)), 1))), 128))
      ])) : P("", !0)
    ]));
  }
};
class pt {
  constructor(o) {
    this.travelerId = o, this.name = {
      firstName: "",
      lastName: ""
    }, this.dateOfBirth = null, this.gender = null, this.contact = {
      emailAddress: "",
      phones: []
    }, this.documents = [], this.valid = !1;
  }
  toJson() {
    let o = [];
    return this.contact.phones && this.contact.phones.length > 0 && (o = this.contact.phones.map((t) => ({
      deviceType: t.deviceType,
      countryCallingCode: t.countryCallingCode,
      number: t.number
    }))), {
      id: this.travelerId,
      dateOfBirth: this.dateOfBirth,
      name: {
        firstName: this.name.firstName,
        lastName: this.name.lastName
      },
      gender: this.gender,
      contact: {
        emailAddress: this.contact.emailAddress,
        phones: o
      },
      documents: this.documents
    };
  }
  static fromTraveler(o) {
    let t = new pt(o.travelerId);
    return t.dateOfBirth = o.dateOfBirth, t.gender = o.gender, t;
  }
}
const Td = [
  [
    "Afghanistan (‫افغانستان‬‎)",
    "af",
    "93"
  ],
  [
    "Albania (Shqipëri)",
    "al",
    "355"
  ],
  [
    "Algeria (‫الجزائر‬‎)",
    "dz",
    "213"
  ],
  [
    "American Samoa",
    "as",
    "1",
    5,
    ["684"]
  ],
  [
    "Andorra",
    "ad",
    "376"
  ],
  [
    "Angola",
    "ao",
    "244"
  ],
  [
    "Anguilla",
    "ai",
    "1",
    6,
    ["264"]
  ],
  [
    "Antigua and Barbuda",
    "ag",
    "1",
    7,
    ["268"]
  ],
  [
    "Argentina",
    "ar",
    "54"
  ],
  [
    "Armenia (Հայաստան)",
    "am",
    "374"
  ],
  [
    "Aruba",
    "aw",
    "297"
  ],
  [
    "Ascension Island",
    "ac",
    "247"
  ],
  [
    "Australia",
    "au",
    "61",
    0
  ],
  [
    "Austria (Österreich)",
    "at",
    "43"
  ],
  [
    "Azerbaijan (Azərbaycan)",
    "az",
    "994"
  ],
  [
    "Bahamas",
    "bs",
    "1",
    8,
    ["242"]
  ],
  [
    "Bahrain (‫البحرين‬‎)",
    "bh",
    "973"
  ],
  [
    "Bangladesh (বাংলাদেশ)",
    "bd",
    "880"
  ],
  [
    "Barbados",
    "bb",
    "1",
    9,
    ["246"]
  ],
  [
    "Belarus (Беларусь)",
    "by",
    "375"
  ],
  [
    "Belgium (België)",
    "be",
    "32"
  ],
  [
    "Belize",
    "bz",
    "501"
  ],
  [
    "Benin (Bénin)",
    "bj",
    "229"
  ],
  [
    "Bermuda",
    "bm",
    "1",
    10,
    ["441"]
  ],
  [
    "Bhutan (འབྲུག)",
    "bt",
    "975"
  ],
  [
    "Bolivia",
    "bo",
    "591"
  ],
  [
    "Bosnia and Herzegovina (Босна и Херцеговина)",
    "ba",
    "387"
  ],
  [
    "Botswana",
    "bw",
    "267"
  ],
  [
    "Brazil (Brasil)",
    "br",
    "55"
  ],
  [
    "British Indian Ocean Territory",
    "io",
    "246"
  ],
  [
    "British Virgin Islands",
    "vg",
    "1",
    11,
    ["284"]
  ],
  [
    "Brunei",
    "bn",
    "673"
  ],
  [
    "Bulgaria (България)",
    "bg",
    "359"
  ],
  [
    "Burkina Faso",
    "bf",
    "226"
  ],
  [
    "Burundi (Uburundi)",
    "bi",
    "257"
  ],
  [
    "Cambodia (កម្ពុជា)",
    "kh",
    "855"
  ],
  [
    "Cameroon (Cameroun)",
    "cm",
    "237"
  ],
  [
    "Canada",
    "ca",
    "1",
    1,
    ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]
  ],
  [
    "Cape Verde (Kabu Verdi)",
    "cv",
    "238"
  ],
  [
    "Caribbean Netherlands",
    "bq",
    "599",
    1,
    ["3", "4", "7"]
  ],
  [
    "Cayman Islands",
    "ky",
    "1",
    12,
    ["345"]
  ],
  [
    "Central African Republic (République centrafricaine)",
    "cf",
    "236"
  ],
  [
    "Chad (Tchad)",
    "td",
    "235"
  ],
  [
    "Chile",
    "cl",
    "56"
  ],
  [
    "China (中国)",
    "cn",
    "86"
  ],
  [
    "Christmas Island",
    "cx",
    "61",
    2,
    ["89164"]
  ],
  [
    "Cocos (Keeling) Islands",
    "cc",
    "61",
    1,
    ["89162"]
  ],
  [
    "Colombia",
    "co",
    "57"
  ],
  [
    "Comoros (‫جزر القمر‬‎)",
    "km",
    "269"
  ],
  [
    "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
    "cd",
    "243"
  ],
  [
    "Congo (Republic) (Congo-Brazzaville)",
    "cg",
    "242"
  ],
  [
    "Cook Islands",
    "ck",
    "682"
  ],
  [
    "Costa Rica",
    "cr",
    "506"
  ],
  [
    "Côte d’Ivoire",
    "ci",
    "225"
  ],
  [
    "Croatia (Hrvatska)",
    "hr",
    "385"
  ],
  [
    "Cuba",
    "cu",
    "53"
  ],
  [
    "Curaçao",
    "cw",
    "599",
    0
  ],
  [
    "Cyprus (Κύπρος)",
    "cy",
    "357"
  ],
  [
    "Czech Republic (Česká republika)",
    "cz",
    "420"
  ],
  [
    "Denmark (Danmark)",
    "dk",
    "45"
  ],
  [
    "Djibouti",
    "dj",
    "253"
  ],
  [
    "Dominica",
    "dm",
    "1",
    13,
    ["767"]
  ],
  [
    "Dominican Republic (República Dominicana)",
    "do",
    "1",
    2,
    ["809", "829", "849"]
  ],
  [
    "Ecuador",
    "ec",
    "593"
  ],
  [
    "Egypt (‫مصر‬‎)",
    "eg",
    "20"
  ],
  [
    "El Salvador",
    "sv",
    "503"
  ],
  [
    "Equatorial Guinea (Guinea Ecuatorial)",
    "gq",
    "240"
  ],
  [
    "Eritrea",
    "er",
    "291"
  ],
  [
    "Estonia (Eesti)",
    "ee",
    "372"
  ],
  [
    "Eswatini",
    "sz",
    "268"
  ],
  [
    "Ethiopia",
    "et",
    "251"
  ],
  [
    "Falkland Islands (Islas Malvinas)",
    "fk",
    "500"
  ],
  [
    "Faroe Islands (Føroyar)",
    "fo",
    "298"
  ],
  [
    "Fiji",
    "fj",
    "679"
  ],
  [
    "Finland (Suomi)",
    "fi",
    "358",
    0
  ],
  [
    "France",
    "fr",
    "33"
  ],
  [
    "French Guiana (Guyane française)",
    "gf",
    "594"
  ],
  [
    "French Polynesia (Polynésie française)",
    "pf",
    "689"
  ],
  [
    "Gabon",
    "ga",
    "241"
  ],
  [
    "Gambia",
    "gm",
    "220"
  ],
  [
    "Georgia (საქართველო)",
    "ge",
    "995"
  ],
  [
    "Germany (Deutschland)",
    "de",
    "49"
  ],
  [
    "Ghana (Gaana)",
    "gh",
    "233"
  ],
  [
    "Gibraltar",
    "gi",
    "350"
  ],
  [
    "Greece (Ελλάδα)",
    "gr",
    "30"
  ],
  [
    "Greenland (Kalaallit Nunaat)",
    "gl",
    "299"
  ],
  [
    "Grenada",
    "gd",
    "1",
    14,
    ["473"]
  ],
  [
    "Guadeloupe",
    "gp",
    "590",
    0
  ],
  [
    "Guam",
    "gu",
    "1",
    15,
    ["671"]
  ],
  [
    "Guatemala",
    "gt",
    "502"
  ],
  [
    "Guernsey",
    "gg",
    "44",
    1,
    ["1481", "7781", "7839", "7911"]
  ],
  [
    "Guinea (Guinée)",
    "gn",
    "224"
  ],
  [
    "Guinea-Bissau (Guiné Bissau)",
    "gw",
    "245"
  ],
  [
    "Guyana",
    "gy",
    "592"
  ],
  [
    "Haiti",
    "ht",
    "509"
  ],
  [
    "Honduras",
    "hn",
    "504"
  ],
  [
    "Hong Kong (香港)",
    "hk",
    "852"
  ],
  [
    "Hungary (Magyarország)",
    "hu",
    "36"
  ],
  [
    "Iceland (Ísland)",
    "is",
    "354"
  ],
  [
    "India (भारत)",
    "in",
    "91"
  ],
  [
    "Indonesia",
    "id",
    "62"
  ],
  [
    "Iran (‫ایران‬‎)",
    "ir",
    "98"
  ],
  [
    "Iraq (‫العراق‬‎)",
    "iq",
    "964"
  ],
  [
    "Ireland",
    "ie",
    "353"
  ],
  [
    "Isle of Man",
    "im",
    "44",
    2,
    ["1624", "74576", "7524", "7924", "7624"]
  ],
  [
    "Israel (‫ישראל‬‎)",
    "il",
    "972"
  ],
  [
    "Italy (Italia)",
    "it",
    "39",
    0
  ],
  [
    "Jamaica",
    "jm",
    "1",
    4,
    ["876", "658"]
  ],
  [
    "Japan (日本)",
    "jp",
    "81"
  ],
  [
    "Jersey",
    "je",
    "44",
    3,
    ["1534", "7509", "7700", "7797", "7829", "7937"]
  ],
  [
    "Jordan (‫الأردن‬‎)",
    "jo",
    "962"
  ],
  [
    "Kazakhstan (Казахстан)",
    "kz",
    "7",
    1,
    ["33", "7"]
  ],
  [
    "Kenya",
    "ke",
    "254"
  ],
  [
    "Kiribati",
    "ki",
    "686"
  ],
  [
    "Kosovo",
    "xk",
    "383"
  ],
  [
    "Kuwait (‫الكويت‬‎)",
    "kw",
    "965"
  ],
  [
    "Kyrgyzstan (Кыргызстан)",
    "kg",
    "996"
  ],
  [
    "Laos (ລາວ)",
    "la",
    "856"
  ],
  [
    "Latvia (Latvija)",
    "lv",
    "371"
  ],
  [
    "Lebanon (‫لبنان‬‎)",
    "lb",
    "961"
  ],
  [
    "Lesotho",
    "ls",
    "266"
  ],
  [
    "Liberia",
    "lr",
    "231"
  ],
  [
    "Libya (‫ليبيا‬‎)",
    "ly",
    "218"
  ],
  [
    "Liechtenstein",
    "li",
    "423"
  ],
  [
    "Lithuania (Lietuva)",
    "lt",
    "370"
  ],
  [
    "Luxembourg",
    "lu",
    "352"
  ],
  [
    "Macau (澳門)",
    "mo",
    "853"
  ],
  [
    "Madagascar (Madagasikara)",
    "mg",
    "261"
  ],
  [
    "Malawi",
    "mw",
    "265"
  ],
  [
    "Malaysia",
    "my",
    "60"
  ],
  [
    "Maldives",
    "mv",
    "960"
  ],
  [
    "Mali",
    "ml",
    "223"
  ],
  [
    "Malta",
    "mt",
    "356"
  ],
  [
    "Marshall Islands",
    "mh",
    "692"
  ],
  [
    "Martinique",
    "mq",
    "596"
  ],
  [
    "Mauritania (‫موريتانيا‬‎)",
    "mr",
    "222"
  ],
  [
    "Mauritius (Moris)",
    "mu",
    "230"
  ],
  [
    "Mayotte",
    "yt",
    "262",
    1,
    ["269", "639"]
  ],
  [
    "Mexico (México)",
    "mx",
    "52"
  ],
  [
    "Micronesia",
    "fm",
    "691"
  ],
  [
    "Moldova (Republica Moldova)",
    "md",
    "373"
  ],
  [
    "Monaco",
    "mc",
    "377"
  ],
  [
    "Mongolia (Монгол)",
    "mn",
    "976"
  ],
  [
    "Montenegro (Crna Gora)",
    "me",
    "382"
  ],
  [
    "Montserrat",
    "ms",
    "1",
    16,
    ["664"]
  ],
  [
    "Morocco (‫المغرب‬‎)",
    "ma",
    "212",
    0
  ],
  [
    "Mozambique (Moçambique)",
    "mz",
    "258"
  ],
  [
    "Myanmar (Burma) (မြန်မာ)",
    "mm",
    "95"
  ],
  [
    "Namibia (Namibië)",
    "na",
    "264"
  ],
  [
    "Nauru",
    "nr",
    "674"
  ],
  [
    "Nepal (नेपाल)",
    "np",
    "977"
  ],
  [
    "Netherlands (Nederland)",
    "nl",
    "31"
  ],
  [
    "New Caledonia (Nouvelle-Calédonie)",
    "nc",
    "687"
  ],
  [
    "New Zealand",
    "nz",
    "64"
  ],
  [
    "Nicaragua",
    "ni",
    "505"
  ],
  [
    "Niger (Nijar)",
    "ne",
    "227"
  ],
  [
    "Nigeria",
    "ng",
    "234"
  ],
  [
    "Niue",
    "nu",
    "683"
  ],
  [
    "Norfolk Island",
    "nf",
    "672"
  ],
  [
    "North Korea (조선 민주주의 인민 공화국)",
    "kp",
    "850"
  ],
  [
    "North Macedonia (Северна Македонија)",
    "mk",
    "389"
  ],
  [
    "Northern Mariana Islands",
    "mp",
    "1",
    17,
    ["670"]
  ],
  [
    "Norway (Norge)",
    "no",
    "47",
    0
  ],
  [
    "Oman (‫عُمان‬‎)",
    "om",
    "968"
  ],
  [
    "Pakistan (‫پاکستان‬‎)",
    "pk",
    "92"
  ],
  [
    "Palau",
    "pw",
    "680"
  ],
  [
    "Palestine (‫فلسطين‬‎)",
    "ps",
    "970"
  ],
  [
    "Panama (Panamá)",
    "pa",
    "507"
  ],
  [
    "Papua New Guinea",
    "pg",
    "675"
  ],
  [
    "Paraguay",
    "py",
    "595"
  ],
  [
    "Peru (Perú)",
    "pe",
    "51"
  ],
  [
    "Philippines",
    "ph",
    "63"
  ],
  [
    "Poland (Polska)",
    "pl",
    "48"
  ],
  [
    "Portugal",
    "pt",
    "351"
  ],
  [
    "Puerto Rico",
    "pr",
    "1",
    3,
    ["787", "939"]
  ],
  [
    "Qatar (‫قطر‬‎)",
    "qa",
    "974"
  ],
  [
    "Réunion (La Réunion)",
    "re",
    "262",
    0
  ],
  [
    "Romania (România)",
    "ro",
    "40"
  ],
  [
    "Russia (Россия)",
    "ru",
    "7",
    0
  ],
  [
    "Rwanda",
    "rw",
    "250"
  ],
  [
    "Saint Barthélemy",
    "bl",
    "590",
    1
  ],
  [
    "Saint Helena",
    "sh",
    "290"
  ],
  [
    "Saint Kitts and Nevis",
    "kn",
    "1",
    18,
    ["869"]
  ],
  [
    "Saint Lucia",
    "lc",
    "1",
    19,
    ["758"]
  ],
  [
    "Saint Martin (Saint-Martin (partie française))",
    "mf",
    "590",
    2
  ],
  [
    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    "pm",
    "508"
  ],
  [
    "Saint Vincent and the Grenadines",
    "vc",
    "1",
    20,
    ["784"]
  ],
  [
    "Samoa",
    "ws",
    "685"
  ],
  [
    "San Marino",
    "sm",
    "378"
  ],
  [
    "São Tomé and Príncipe (São Tomé e Príncipe)",
    "st",
    "239"
  ],
  [
    "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    "sa",
    "966"
  ],
  [
    "Senegal (Sénégal)",
    "sn",
    "221"
  ],
  [
    "Serbia (Србија)",
    "rs",
    "381"
  ],
  [
    "Seychelles",
    "sc",
    "248"
  ],
  [
    "Sierra Leone",
    "sl",
    "232"
  ],
  [
    "Singapore",
    "sg",
    "65"
  ],
  [
    "Sint Maarten",
    "sx",
    "1",
    21,
    ["721"]
  ],
  [
    "Slovakia (Slovensko)",
    "sk",
    "421"
  ],
  [
    "Slovenia (Slovenija)",
    "si",
    "386"
  ],
  [
    "Solomon Islands",
    "sb",
    "677"
  ],
  [
    "Somalia (Soomaaliya)",
    "so",
    "252"
  ],
  [
    "South Africa",
    "za",
    "27"
  ],
  [
    "South Korea (대한민국)",
    "kr",
    "82"
  ],
  [
    "South Sudan (‫جنوب السودان‬‎)",
    "ss",
    "211"
  ],
  [
    "Spain (España)",
    "es",
    "34"
  ],
  [
    "Sri Lanka (ශ්‍රී ලංකාව)",
    "lk",
    "94"
  ],
  [
    "Sudan (‫السودان‬‎)",
    "sd",
    "249"
  ],
  [
    "Suriname",
    "sr",
    "597"
  ],
  [
    "Svalbard and Jan Mayen",
    "sj",
    "47",
    1,
    ["79"]
  ],
  [
    "Sweden (Sverige)",
    "se",
    "46"
  ],
  [
    "Switzerland (Schweiz)",
    "ch",
    "41"
  ],
  [
    "Syria (‫سوريا‬‎)",
    "sy",
    "963"
  ],
  [
    "Taiwan (台灣)",
    "tw",
    "886"
  ],
  [
    "Tajikistan",
    "tj",
    "992"
  ],
  [
    "Tanzania",
    "tz",
    "255"
  ],
  [
    "Thailand (ไทย)",
    "th",
    "66"
  ],
  [
    "Timor-Leste",
    "tl",
    "670"
  ],
  [
    "Togo",
    "tg",
    "228"
  ],
  [
    "Tokelau",
    "tk",
    "690"
  ],
  [
    "Tonga",
    "to",
    "676"
  ],
  [
    "Trinidad and Tobago",
    "tt",
    "1",
    22,
    ["868"]
  ],
  [
    "Tunisia (‫تونس‬‎)",
    "tn",
    "216"
  ],
  [
    "Turkey (Türkiye)",
    "tr",
    "90"
  ],
  [
    "Turkmenistan",
    "tm",
    "993"
  ],
  [
    "Turks and Caicos Islands",
    "tc",
    "1",
    23,
    ["649"]
  ],
  [
    "Tuvalu",
    "tv",
    "688"
  ],
  [
    "U.S. Virgin Islands",
    "vi",
    "1",
    24,
    ["340"]
  ],
  [
    "Uganda",
    "ug",
    "256"
  ],
  [
    "Ukraine (Україна)",
    "ua",
    "380"
  ],
  [
    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    "ae",
    "971"
  ],
  [
    "United Kingdom",
    "gb",
    "44",
    0
  ],
  [
    "United States",
    "us",
    "1",
    0
  ],
  [
    "Uruguay",
    "uy",
    "598"
  ],
  [
    "Uzbekistan (Oʻzbekiston)",
    "uz",
    "998"
  ],
  [
    "Vanuatu",
    "vu",
    "678"
  ],
  [
    "Vatican City (Città del Vaticano)",
    "va",
    "39",
    1,
    ["06698"]
  ],
  [
    "Venezuela",
    "ve",
    "58"
  ],
  [
    "Vietnam (Việt Nam)",
    "vn",
    "84"
  ],
  [
    "Wallis and Futuna (Wallis-et-Futuna)",
    "wf",
    "681"
  ],
  [
    "Western Sahara (‫الصحراء الغربية‬‎)",
    "eh",
    "212",
    1,
    ["5288", "5289"]
  ],
  [
    "Yemen (‫اليمن‬‎)",
    "ye",
    "967"
  ],
  [
    "Zambia",
    "zm",
    "260"
  ],
  [
    "Zimbabwe",
    "zw",
    "263"
  ],
  [
    "Åland Islands",
    "ax",
    "358",
    1,
    ["18"]
  ]
], Dd = Td.map(([e, o, t, a = 0, n = null]) => ({
  name: e,
  iso2: o.toUpperCase(),
  dialCode: t,
  priority: a,
  areaCodes: n
}));
function xd() {
  return fetch("https://ip2c.org/s").then((e) => e.text()).then((e) => {
    const o = (e || "").toString();
    if (!o || o[0] !== "1")
      throw new Error("unable to fetch the country");
    return o.substr(2, 2);
  });
}
function Ld(e, o) {
  if (e.setSelectionRange)
    e.focus(), e.setSelectionRange(o, o);
  else if (e.createTextRange) {
    const t = e.createTextRange();
    t.collapse(!0), t.moveEnd("character", o), t.moveStart("character", o), t.select();
  }
}
const Ed = [
  {
    name: "allCountries",
    type: Array,
    default: Dd,
    description: "All countries that are used in <code>libphonenumber-js</code>, can be overridden by this prop",
    inDemo: !1
  },
  {
    name: "autoFormat",
    type: Boolean,
    default: !0,
    description: "Auto update the input to the formatted phone number when it's valid",
    inDemo: !0
  },
  {
    name: "customValidate",
    type: [Boolean, RegExp],
    default: !1,
    description: "Custom validation RegExp for input",
    inDemo: !1
  },
  {
    name: "defaultCountry",
    default: "",
    type: [String, Number],
    description: "Default country (by iso2 or dialCode), will override the country fetched from IP address of user",
    inDemo: !1
  },
  {
    name: "disabled",
    default: !1,
    type: Boolean,
    description: "Disable <code>vue-tel-input</code>, including the input & flag dropdown",
    inDemo: !1
  },
  {
    name: "autoDefaultCountry",
    default: !0,
    type: Boolean,
    description: "To fetch default country based on IP address of user",
    inDemo: !1
  },
  {
    name: "dropdownOptions",
    type: Object,
    description: "Options for dropdown, see below",
    inDemo: !1
  },
  {
    name: "dropdownOptions.disabled",
    default: !1,
    type: Boolean,
    description: "Disable dropdown",
    inDemo: !1
  },
  {
    name: "dropdownOptions.showDialCodeInList",
    default: !0,
    type: Boolean,
    description: "Show dial code in the dropdown list",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showDialCodeInSelection",
    default: !1,
    type: Boolean,
    description: "Show dial code in the dropdown selection",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showFlags",
    default: !0,
    type: Boolean,
    description: "Show flags in the dropdown selection and list",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showSearchBox",
    default: !1,
    type: Boolean,
    description: "Show country search box",
    inDemo: !0
  },
  {
    name: "dropdownOptions.tabindex",
    default: 0,
    type: Number,
    description: "Native dropdown <code>tabindex</code> attribute",
    inDemo: !1
  },
  {
    name: "ignoredCountries",
    default: [],
    type: Array,
    description: "List of countries will NOT be shown on the dropdown",
    inDemo: !1
  },
  {
    name: "inputOptions",
    type: Object,
    description: "Options for input, see below",
    inDemo: !1
  },
  {
    name: "inputOptions.autocomplete",
    type: String,
    default: "on",
    description: "Native input <code>autocomplete</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.autofocus",
    type: Boolean,
    default: !1,
    description: "Native input <code>autofocus</code> attribute",
    inDemo: !1
  },
  // {
  //   name: 'inputOptions.dynamicPlaceholder',
  //   default: false,
  //   type: Boolean,
  //   description: 'Placeholder as a sample phone number in the current country',
  //   inDemo: false,
  // },
  {
    name: "inputOptions.aria-describedby",
    default: "",
    type: String,
    description: "Native input <code>aria-describedby</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.id",
    default: "",
    type: String,
    description: "Native input <code>id</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.maxlength",
    default: 25,
    type: Number,
    description: "Native input <code>maxlength</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.name",
    default: "telephone",
    type: String,
    description: "Native input <code>name</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.showDialCode",
    default: !1,
    type: Boolean,
    description: "Show dial code in input",
    inDemo: !1
  },
  {
    name: "inputOptions.placeholder",
    default: "Enter a phone number",
    type: String,
    description: "Placeholder for the input",
    inDemo: !1
  },
  {
    name: "inputOptions.readonly",
    default: !1,
    type: Boolean,
    description: "Native input <code>readonly</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.required",
    default: !1,
    type: Boolean,
    description: "Native input <code>required</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.tabindex",
    default: 0,
    type: Number,
    description: "Native input <code>tabindex</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.type",
    default: "tel",
    type: String,
    description: "Native input <code>type</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.styleClasses",
    default: "",
    type: [String, Array, Object],
    description: "Custom classes for the <code>input</code>",
    inDemo: !1
  },
  {
    name: "invalidMsg",
    default: "",
    type: String,
    description: "",
    inDemo: !1
  },
  {
    name: "mode",
    default: "auto",
    type: String,
    description: "Allowed values: <code>'auto'</code> (Default set by phone),  <code>'international'</code> (Format number with the dial code i.e. + 61), <code>'national'</code> (Format number without dial code i.e. 0321232)",
    inDemo: !0,
    options: ["auto", "national", "international"]
  },
  {
    name: "onlyCountries",
    default: [],
    type: Array,
    description: "List of countries will be shown on the dropdown",
    inDemo: !1
  },
  {
    name: "preferredCountries",
    default: [],
    type: Array,
    description: "Preferred countries list, will be on top of the dropdown",
    inDemo: !1
  },
  {
    name: "styleClasses",
    default: "",
    type: [String, Array, Object],
    description: "Custom classes for the wrapper",
    inDemo: !1
  },
  {
    name: "validCharactersOnly",
    default: !1,
    type: Boolean,
    description: "Only allow valid characters in a phone number (will also verify in <code>mounted</code>, so phone number with invalid characters will be shown as an empty string)",
    inDemo: !1
  }
], Rd = [...Ed].reduce((e, o) => {
  if (o.name.includes(".")) {
    const [t, a] = o.name.split(".");
    e[t] ? Object.assign(e[t], { [a]: o.default }) : Object.assign(e, { [t]: { [a]: o.default } });
  } else
    Object.assign(e, { [o.name]: o.default });
  return e;
}, {}), Ut = {
  options: { ...Rd }
}, Id = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|8(?:0[89]|92)", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[2378]\\d|62|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:5056(?:[0-35-9]\\d|4[468])|73020\\d)\\d{4}|(?:4722|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function Kd(e, o) {
  var t = Array.prototype.slice.call(o);
  return t.push(Id), e.apply(this, t);
}
function st(e) {
  "@babel/helpers - typeof";
  return st = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, st(e);
}
function Gd(e, o, t) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jd(e, o) {
  if (!(e instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function Fd(e, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(o && o.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), o && to(e, o);
}
function Hd(e) {
  var o = an();
  return function() {
    var t = ao(e), a;
    if (o) {
      var n = ao(this).constructor;
      a = Reflect.construct(t, arguments, n);
    } else
      a = t.apply(this, arguments);
    return Vd(this, a);
  };
}
function Vd(e, o) {
  if (o && (st(o) === "object" || typeof o == "function"))
    return o;
  if (o !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tn(e);
}
function tn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dt(e) {
  var o = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return dt = function(t) {
    if (t === null || !_d(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof o < "u") {
      if (o.has(t))
        return o.get(t);
      o.set(t, a);
    }
    function a() {
      return vo(t, arguments, ao(this).constructor);
    }
    return a.prototype = Object.create(t.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), to(a, t);
  }, dt(e);
}
function vo(e, o, t) {
  return an() ? vo = Reflect.construct : vo = function(a, n, r) {
    var s = [null];
    s.push.apply(s, n);
    var d = Function.bind.apply(a, s), l = new d();
    return r && to(l, r.prototype), l;
  }, vo.apply(null, arguments);
}
function an() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _d(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function to(e, o) {
  return to = Object.setPrototypeOf || function(t, a) {
    return t.__proto__ = a, t;
  }, to(e, o);
}
function ao(e) {
  return ao = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, ao(e);
}
var pe = /* @__PURE__ */ (function(e) {
  Fd(t, e);
  var o = Hd(t);
  function t(a) {
    var n;
    return jd(this, t), n = o.call(this, a), Object.setPrototypeOf(tn(n), t.prototype), n.name = n.constructor.name, n;
  }
  return Gd(t);
})(/* @__PURE__ */ dt(Error)), yt = 2, Ud = 17, zd = 3, ge = "0-9０-９٠-٩۰-۹", Wd = "-‐-―−ー－", Yd = "／/", qd = "．.", Zd = "  ­​⁠　", Jd = "()（）［］\\[\\]", Qd = "~⁓∼～", ko = "".concat(Wd).concat(Yd).concat(qd).concat(Zd).concat(Jd).concat(Qd), vt = "+＋";
function zt(e, o) {
  e = e.split("-"), o = o.split("-");
  for (var t = e[0].split("."), a = o[0].split("."), n = 0; n < 3; n++) {
    var r = Number(t[n]), s = Number(a[n]);
    if (r > s)
      return 1;
    if (s > r)
      return -1;
    if (!isNaN(r) && isNaN(s))
      return 1;
    if (isNaN(r) && !isNaN(s))
      return -1;
  }
  return e[1] && o[1] ? e[1] > o[1] ? 1 : e[1] < o[1] ? -1 : 0 : !e[1] && o[1] ? 1 : e[1] && !o[1] ? -1 : 0;
}
var Xd = {}.constructor;
function bo(e) {
  return e != null && e.constructor === Xd;
}
function it(e) {
  "@babel/helpers - typeof";
  return it = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, it(e);
}
function To(e, o) {
  if (!(e instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function ei(e, o) {
  for (var t = 0; t < o.length; t++) {
    var a = o[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Do(e, o, t) {
  return o && ei(e.prototype, o), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var oi = "1.2.0", ti = "1.7.35", Wt = " ext. ", ai = /^\d+$/, ne = /* @__PURE__ */ (function() {
  function e(o) {
    To(this, e), di(o), this.metadata = o, nn.call(this, o);
  }
  return Do(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(o) {
        return o !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(o) {
      return this.metadata.countries[o];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(o) {
      return this.getCountryMetadata(o) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(o) {
      if (this.getCountryCodesForCallingCode(o))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[o])
          return !0;
      } else {
        var t = this.countryCallingCodes()[o];
        if (t && t.length === 1 && t[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(o) {
      return this.nonGeographic() ? !!this.nonGeographic()[o] : !this.getCountryCodesForCallingCode(o);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(o) {
      return this.selectNumberingPlan(o);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(o, t) {
      if (o && ai.test(o) && (t = o, o = null), o && o !== "001") {
        if (!this.hasCountry(o))
          throw new Error("Unknown country: ".concat(o));
        this.numberingPlan = new Yt(this.getCountryMetadata(o), this);
      } else if (t) {
        if (!this.hasCallingCode(t))
          throw new Error("Unknown calling code: ".concat(t));
        this.numberingPlan = new Yt(this.getNumberingPlanMetadata(t), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(o) {
      var t = this.countryCallingCodes()[o];
      if (t)
        return t.length === 1 && t[0].length === 3 ? void 0 : t;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(o) {
      var t = this.getCountryCodesForCallingCode(o);
      if (t)
        return t[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(o) {
      var t = this.getCountryCodeForCallingCode(o);
      if (t)
        return this.getCountryMetadata(t);
      if (this.nonGeographic()) {
        var a = this.nonGeographic()[o];
        if (a)
          return a;
      } else {
        var n = this.countryCallingCodes()[o];
        if (n && n.length === 1 && n[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(o) {
      return this.numberingPlan.type(o);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(o) {
      return this.selectNumberingPlan(o);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]), e;
})(), Yt = /* @__PURE__ */ (function() {
  function e(o, t) {
    To(this, e), this.globalMetadataObject = t, this.metadata = o, nn.call(this, t.metadata);
  }
  return Do(e, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(o) {
      return o[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var o = this, t = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return t.map(function(a) {
        return new ni(a, o);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(o) {
      return o[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(o) {
      if (this.hasTypes() && qt(this.types(), o))
        return new si(qt(this.types(), o), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? Wt : this.metadata[13] || Wt;
    }
  }]), e;
})(), ni = /* @__PURE__ */ (function() {
  function e(o, t) {
    To(this, e), this._format = o, this.metadata = t;
  }
  return Do(e, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !ri.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), e;
})(), ri = /^\(?\$1\)?$/, si = /* @__PURE__ */ (function() {
  function e(o, t) {
    To(this, e), this.type = o, this.metadata = t;
  }
  return Do(e, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]), e;
})();
function qt(e, o) {
  switch (o) {
    case "FIXED_LINE":
      return e[0];
    case "MOBILE":
      return e[1];
    case "TOLL_FREE":
      return e[2];
    case "PREMIUM_RATE":
      return e[3];
    case "PERSONAL_NUMBER":
      return e[4];
    case "VOICEMAIL":
      return e[5];
    case "UAN":
      return e[6];
    case "PAGER":
      return e[7];
    case "VOIP":
      return e[8];
    case "SHARED_COST":
      return e[9];
  }
}
function di(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!bo(e) || !bo(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(bo(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + ii(e) + ": " + e, "."));
}
var ii = function(e) {
  return it(e);
};
function bt(e, o) {
  if (o = new ne(o), o.hasCountry(e))
    return o.country(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function li(e, o) {
  return o.countries.hasOwnProperty(e);
}
function nn(e) {
  var o = e.version;
  typeof o == "number" ? (this.v1 = o === 1, this.v2 = o === 2, this.v3 = o === 3, this.v4 = o === 4) : o ? zt(o, oi) === -1 ? this.v2 = !0 : zt(o, ti) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var ui = ";ext=", Re = function(e) {
  return "([".concat(ge, "]{1,").concat(e, "})");
};
function rn(e) {
  var o = "20", t = "15", a = "9", n = "6", r = "[  \\t,]*", s = "[:\\.．]?[  \\t,-]*", d = "#?", l = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", i = "(?:[xｘ#＃~～]|int|ｉｎｔ)", h = "[- ]+", m = "[  \\t]*", g = "(?:,{2}|;)", f = ui + Re(o), c = r + l + s + Re(o) + d, $ = r + i + s + Re(a) + d, b = h + Re(n) + "#", M = m + g + s + Re(t) + d, O = m + "(?:,)+" + s + Re(a) + d;
  return f + "|" + c + "|" + $ + "|" + b + "|" + M + "|" + O;
}
var hi = "[" + ge + "]{" + yt + "}", mi = "[" + vt + "]{0,1}(?:[" + ko + "]*[" + ge + "]){3,}[" + ko + ge + "]*", ci = new RegExp("^[" + vt + "]{0,1}(?:[" + ko + "]*[" + ge + "]){1,2}$", "i"), Ci = mi + // Phone number extensions
"(?:" + rn() + ")?", gi = new RegExp(
  // Either a short two-digit-only phone number
  "^" + hi + "$|^" + Ci + "$",
  "i"
);
function $i(e) {
  return e.length >= yt && gi.test(e);
}
function fi(e) {
  return ci.test(e);
}
var Zt = new RegExp("(?:" + rn() + ")$", "i");
function pi(e) {
  var o = e.search(Zt);
  if (o < 0)
    return {};
  for (var t = e.slice(0, o), a = e.match(Zt), n = 1; n < a.length; ) {
    if (a[n])
      return {
        number: t,
        ext: a[n]
      };
    n++;
  }
}
var yi = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function vi(e) {
  return yi[e];
}
function bi(e, o) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Si(e)) || o) {
    t && (e = t);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Si(e, o) {
  if (e) {
    if (typeof e == "string")
      return Jt(e, o);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Jt(e, o);
  }
}
function Jt(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var t = 0, a = new Array(o); t < o; t++)
    a[t] = e[t];
  return a;
}
function Qt(e) {
  for (var o = "", t = bi(e.split("")), a; !(a = t()).done; ) {
    var n = a.value;
    o += Ai(n, o) || "";
  }
  return o;
}
function Ai(e, o) {
  return e === "+" ? o ? void 0 : "+" : vi(e);
}
function St(e, o) {
  return Ni(e, void 0, o);
}
function Ni(e, o, t) {
  var a = t.type(o), n = a && a.possibleLengths() || t.possibleLengths();
  if (!n)
    return "IS_POSSIBLE";
  var r = e.length, s = n[0];
  return s === r ? "IS_POSSIBLE" : s > r ? "TOO_SHORT" : n[n.length - 1] < r ? "TOO_LONG" : n.indexOf(r, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function ki(e, o, t) {
  if (o === void 0 && (o = {}), t = new ne(t), o.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    t.selectNumberingPlan(e.countryCallingCode);
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!t.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      t.country(e.country);
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      t.selectNumberingPlan(e.countryCallingCode);
    }
  }
  if (t.possibleLengths())
    return sn(e.phone || e.nationalNumber, t);
  if (e.countryCallingCode && t.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function sn(e, o) {
  switch (St(e, o)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function ye(e, o) {
  return e = e || "", new RegExp("^(?:" + o + ")$").test(e);
}
function wi(e, o) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Mi(e)) || o) {
    t && (e = t);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mi(e, o) {
  if (e) {
    if (typeof e == "string")
      return Xt(e, o);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Xt(e, o);
  }
}
function Xt(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var t = 0, a = new Array(o); t < o; t++)
    a[t] = e[t];
  return a;
}
var Oi = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function At(e, o, t) {
  if (o = o || {}, !(!e.country && !e.countryCallingCode)) {
    t = new ne(t), t.selectNumberingPlan(e.country, e.countryCallingCode);
    var a = o.v2 ? e.nationalNumber : e.phone;
    if (ye(a, t.nationalNumberPattern())) {
      if (Ho(a, "FIXED_LINE", t))
        return t.type("MOBILE") && t.type("MOBILE").pattern() === "" || !t.type("MOBILE") || Ho(a, "MOBILE", t) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var n = wi(Oi), r; !(r = n()).done; ) {
        var s = r.value;
        if (Ho(a, s, t))
          return s;
      }
    }
  }
}
function Ho(e, o, t) {
  return o = t.type(o), !o || !o.pattern() || o.possibleLengths() && o.possibleLengths().indexOf(e.length) < 0 ? !1 : ye(e, o.pattern());
}
function Pi(e, o, t) {
  if (o = o || {}, t = new ne(t), t.selectNumberingPlan(e.country, e.countryCallingCode), t.hasTypes())
    return At(e, o, t.metadata) !== void 0;
  var a = o.v2 ? e.nationalNumber : e.phone;
  return ye(a, t.nationalNumberPattern());
}
function Bi(e, o, t) {
  var a = new ne(t), n = a.getCountryCodesForCallingCode(e);
  return n ? n.filter(function(r) {
    return Ti(o, r, t);
  }) : [];
}
function Ti(e, o, t) {
  var a = new ne(t);
  return a.selectNumberingPlan(o), a.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
function Di(e) {
  return e.replace(new RegExp("[".concat(ko, "]+"), "g"), " ").trim();
}
var xi = /(\$\d)/;
function Li(e, o, t) {
  var a = t.useInternationalFormat, n = t.withNationalPrefix, r = e.replace(new RegExp(o.pattern()), a ? o.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    n && o.nationalPrefixFormattingRule() ? o.format().replace(xi, o.nationalPrefixFormattingRule()) : o.format()
  ));
  return a ? Di(r) : r;
}
var Ei = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Ri(e, o, t) {
  var a = new ne(t);
  if (a.selectNumberingPlan(e, o), a.defaultIDDPrefix())
    return a.defaultIDDPrefix();
  if (Ei.test(a.IDDPrefix()))
    return a.IDDPrefix();
}
function Ii(e) {
  var o = e.number, t = e.ext;
  if (!o)
    return "";
  if (o[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(o).concat(t ? ";ext=" + t : "");
}
function Ki(e, o) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Gi(e)) || o) {
    t && (e = t);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gi(e, o) {
  if (e) {
    if (typeof e == "string")
      return ea(e, o);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ea(e, o);
  }
}
function ea(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var t = 0, a = new Array(o); t < o; t++)
    a[t] = e[t];
  return a;
}
function oa(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    o && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function ta(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? oa(Object(t), !0).forEach(function(a) {
      ji(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : oa(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function ji(e, o, t) {
  return o in e ? Object.defineProperty(e, o, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = t, e;
}
var aa = {
  formatExtension: function(e, o, t) {
    return "".concat(e).concat(t.ext()).concat(o);
  }
};
function Fi(e, o, t, a) {
  if (t ? t = ta(ta({}, aa), t) : t = aa, a = new ne(a), e.country && e.country !== "001") {
    if (!a.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    a.country(e.country);
  } else if (e.countryCallingCode)
    a.selectNumberingPlan(e.countryCallingCode);
  else
    return e.phone || "";
  var n = a.countryCallingCode(), r = t.v2 ? e.nationalNumber : e.phone, s;
  switch (o) {
    case "NATIONAL":
      return r ? (s = wo(r, e.carrierCode, "NATIONAL", a, t), Vo(s, e.ext, a, t.formatExtension)) : "";
    case "INTERNATIONAL":
      return r ? (s = wo(r, null, "INTERNATIONAL", a, t), s = "+".concat(n, " ").concat(s), Vo(s, e.ext, a, t.formatExtension)) : "+".concat(n);
    case "E.164":
      return "+".concat(n).concat(r);
    case "RFC3966":
      return Ii({
        number: "+".concat(n).concat(r),
        ext: e.ext
      });
    case "IDD":
      if (!t.fromCountry)
        return;
      var d = Vi(r, e.carrierCode, n, t.fromCountry, a);
      return Vo(d, e.ext, a, t.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(o, '"'));
  }
}
function wo(e, o, t, a, n) {
  var r = Hi(a.formats(), e);
  return r ? Li(e, r, {
    useInternationalFormat: t === "INTERNATIONAL",
    withNationalPrefix: !(r.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && n && n.nationalPrefix === !1)
  }) : e;
}
function Hi(e, o) {
  for (var t = Ki(e), a; !(a = t()).done; ) {
    var n = a.value;
    if (n.leadingDigitsPatterns().length > 0) {
      var r = n.leadingDigitsPatterns()[n.leadingDigitsPatterns().length - 1];
      if (o.search(r) !== 0)
        continue;
    }
    if (ye(o, n.pattern()))
      return n;
  }
}
function Vo(e, o, t, a) {
  return o ? a(e, o, t) : e;
}
function Vi(e, o, t, a, n) {
  var r = bt(a, n.metadata);
  if (r === t) {
    var s = wo(e, o, "NATIONAL", n);
    return t === "1" ? t + " " + s : s;
  }
  var d = Ri(a, void 0, n.metadata);
  if (d)
    return "".concat(d, " ").concat(t, " ").concat(wo(e, null, "INTERNATIONAL", n));
}
function na(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    o && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function ra(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? na(Object(t), !0).forEach(function(a) {
      _i(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : na(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function _i(e, o, t) {
  return o in e ? Object.defineProperty(e, o, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = t, e;
}
function Ui(e, o) {
  if (!(e instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function zi(e, o) {
  for (var t = 0; t < o.length; t++) {
    var a = o[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Wi(e, o, t) {
  return o && zi(e.prototype, o), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Yi = /* @__PURE__ */ (function() {
  function e(o, t, a) {
    if (Ui(this, e), !o)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!t)
      throw new TypeError("`nationalNumber` not passed");
    if (!a)
      throw new TypeError("`metadata` not passed");
    var n = Zi(o, a), r = n.country, s = n.countryCallingCode;
    this.country = r, this.countryCallingCode = s, this.nationalNumber = t, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return a;
    };
  }
  return Wi(e, [{
    key: "setExt",
    value: function(o) {
      this.ext = o;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : Bi(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return ki(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return Pi(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var o = new ne(this.getMetadata());
      return o.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(o) {
      return this.number === o.number && this.ext === o.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return At(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(o, t) {
      return Fi(this, o, t ? ra(ra({}, t), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(o) {
      return this.format("NATIONAL", o);
    }
  }, {
    key: "formatInternational",
    value: function(o) {
      return this.format("INTERNATIONAL", o);
    }
  }, {
    key: "getURI",
    value: function(o) {
      return this.format("RFC3966", o);
    }
  }]), e;
})(), qi = function(e) {
  return /^[A-Z]{2}$/.test(e);
};
function Zi(e, o) {
  var t, a, n = new ne(o);
  return qi(e) ? (t = e, n.selectNumberingPlan(t), a = n.countryCallingCode()) : a = e, {
    country: t,
    countryCallingCode: a
  };
}
var Ji = new RegExp("([" + ge + "])");
function Qi(e, o, t, a) {
  if (o) {
    var n = new ne(a);
    n.selectNumberingPlan(o, t);
    var r = new RegExp(n.IDDPrefix());
    if (e.search(r) === 0) {
      e = e.slice(e.match(r)[0].length);
      var s = e.match(Ji);
      if (!(s && s[1] != null && s[1].length > 0 && s[1] === "0"))
        return e;
    }
  }
}
function Xi(e, o) {
  if (e && o.numberingPlan.nationalPrefixForParsing()) {
    var t = new RegExp("^(?:" + o.numberingPlan.nationalPrefixForParsing() + ")"), a = t.exec(e);
    if (a) {
      var n, r, s = a.length - 1, d = s > 0 && a[s];
      if (o.nationalPrefixTransformRule() && d)
        n = e.replace(t, o.nationalPrefixTransformRule()), s > 1 && (r = a[1]);
      else {
        var l = a[0];
        n = e.slice(l.length), d && (r = a[1]);
      }
      var i;
      if (d) {
        var h = e.indexOf(a[1]), m = e.slice(0, h);
        m === o.numberingPlan.nationalPrefix() && (i = o.numberingPlan.nationalPrefix());
      } else
        i = a[0];
      return {
        nationalNumber: n,
        nationalPrefix: i,
        carrierCode: r
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function lt(e, o) {
  var t = Xi(e, o), a = t.carrierCode, n = t.nationalNumber;
  if (n !== e) {
    if (!el(e, n, o))
      return {
        nationalNumber: e
      };
    if (o.possibleLengths() && !ol(n, o))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: n,
    carrierCode: a
  };
}
function el(e, o, t) {
  return !(ye(e, t.nationalNumberPattern()) && !ye(o, t.nationalNumberPattern()));
}
function ol(e, o) {
  switch (St(e, o)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function tl(e, o, t, a) {
  var n = o ? bt(o, a) : t;
  if (e.indexOf(n) === 0) {
    a = new ne(a), a.selectNumberingPlan(o, t);
    var r = e.slice(n.length), s = lt(r, a), d = s.nationalNumber, l = lt(e, a), i = l.nationalNumber;
    if (!ye(i, a.nationalNumberPattern()) && ye(d, a.nationalNumberPattern()) || St(i, a) === "TOO_LONG")
      return {
        countryCallingCode: n,
        number: r
      };
  }
  return {
    number: e
  };
}
function al(e, o, t, a) {
  if (!e)
    return {};
  var n;
  if (e[0] !== "+") {
    var r = Qi(e, o, t, a);
    if (r && r !== e)
      n = !0, e = "+" + r;
    else {
      if (o || t) {
        var s = tl(e, o, t, a), d = s.countryCallingCode, l = s.number;
        if (d)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: d,
            number: l
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: e
      };
    }
  }
  if (e[1] === "0")
    return {};
  a = new ne(a);
  for (var i = 2; i - 1 <= zd && i <= e.length; ) {
    var h = e.slice(1, i);
    if (a.hasCallingCode(h))
      return a.selectNumberingPlan(h), {
        countryCallingCodeSource: n ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: h,
        number: e.slice(i)
      };
    i++;
  }
  return {};
}
function nl(e, o) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = rl(e)) || o) {
    t && (e = t);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rl(e, o) {
  if (e) {
    if (typeof e == "string")
      return sa(e, o);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return sa(e, o);
  }
}
function sa(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var t = 0, a = new Array(o); t < o; t++)
    a[t] = e[t];
  return a;
}
function sl(e, o) {
  var t = o.countries, a = o.defaultCountry, n = o.metadata;
  n = new ne(n);
  for (var r = [], s = nl(t), d; !(d = s()).done; ) {
    var l = d.value;
    if (n.country(l), n.leadingDigits()) {
      if (e && e.search(n.leadingDigits()) === 0)
        return l;
    } else if (At({
      phone: e,
      country: l
    }, void 0, n.metadata))
      if (a) {
        if (l === a)
          return l;
        r.push(l);
      } else
        return l;
  }
  if (r.length > 0)
    return r[0];
}
function dl(e, o) {
  var t = o.nationalNumber, a = o.defaultCountry, n = o.metadata, r = n.getCountryCodesForCallingCode(e);
  if (r)
    return r.length === 1 ? r[0] : sl(t, {
      countries: r,
      defaultCountry: a,
      metadata: n.metadata
    });
}
var dn = "+", il = "[\\-\\.\\(\\)]?", da = "([" + ge + "]|" + il + ")", ll = "^\\" + dn + da + "*[" + ge + "]" + da + "*$", ul = new RegExp(ll, "g"), ut = ge, hl = "[" + ut + "]+((\\-)*[" + ut + "])*", ml = "a-zA-Z", cl = "[" + ml + "]+((\\-)*[" + ut + "])*", Cl = "^(" + hl + "\\.)*" + cl + "\\.?$", gl = new RegExp(Cl, "g"), ia = "tel:", ht = ";phone-context=", $l = ";isub=";
function fl(e) {
  var o = e.indexOf(ht);
  if (o < 0)
    return null;
  var t = o + ht.length;
  if (t >= e.length)
    return "";
  var a = e.indexOf(";", t);
  return a >= 0 ? e.substring(t, a) : e.substring(t);
}
function pl(e) {
  return e === null ? !0 : e.length === 0 ? !1 : ul.test(e) || gl.test(e);
}
function yl(e, o) {
  var t = o.extractFormattedPhoneNumber, a = fl(e);
  if (!pl(a))
    throw new pe("NOT_A_NUMBER");
  var n;
  if (a === null)
    n = t(e) || "";
  else {
    n = "", a.charAt(0) === dn && (n += a);
    var r = e.indexOf(ia), s;
    r >= 0 ? s = r + ia.length : s = 0;
    var d = e.indexOf(ht);
    n += e.substring(s, d);
  }
  var l = n.indexOf($l);
  if (l > 0 && (n = n.substring(0, l)), n !== "")
    return n;
}
var vl = 250, bl = new RegExp("[" + vt + ge + "]"), Sl = new RegExp("[^" + ge + "#]+$");
function Al(e, o, t) {
  if (o = o || {}, t = new ne(t), o.defaultCountry && !t.hasCountry(o.defaultCountry))
    throw o.v2 ? new pe("INVALID_COUNTRY") : new Error("Unknown country: ".concat(o.defaultCountry));
  var a = kl(e, o.v2, o.extract), n = a.number, r = a.ext, s = a.error;
  if (!n) {
    if (o.v2)
      throw s === "TOO_SHORT" ? new pe("TOO_SHORT") : new pe("NOT_A_NUMBER");
    return {};
  }
  var d = Ml(n, o.defaultCountry, o.defaultCallingCode, t), l = d.country, i = d.nationalNumber, h = d.countryCallingCode, m = d.countryCallingCodeSource, g = d.carrierCode;
  if (!t.hasSelectedNumberingPlan()) {
    if (o.v2)
      throw new pe("INVALID_COUNTRY");
    return {};
  }
  if (!i || i.length < yt) {
    if (o.v2)
      throw new pe("TOO_SHORT");
    return {};
  }
  if (i.length > Ud) {
    if (o.v2)
      throw new pe("TOO_LONG");
    return {};
  }
  if (o.v2) {
    var f = new Yi(h, i, t.metadata);
    return l && (f.country = l), g && (f.carrierCode = g), r && (f.ext = r), f.__countryCallingCodeSource = m, f;
  }
  var c = (o.extended ? t.hasSelectedNumberingPlan() : l) ? ye(i, t.nationalNumberPattern()) : !1;
  return o.extended ? {
    country: l,
    countryCallingCode: h,
    carrierCode: g,
    valid: c,
    possible: c ? !0 : !!(o.extended === !0 && t.possibleLengths() && sn(i, t)),
    phone: i,
    ext: r
  } : c ? wl(l, i, r) : {};
}
function Nl(e, o, t) {
  if (e) {
    if (e.length > vl) {
      if (t)
        throw new pe("TOO_LONG");
      return;
    }
    if (o === !1)
      return e;
    var a = e.search(bl);
    if (!(a < 0))
      return e.slice(a).replace(Sl, "");
  }
}
function kl(e, o, t) {
  var a = yl(e, {
    extractFormattedPhoneNumber: function(r) {
      return Nl(r, t, o);
    }
  });
  if (!a)
    return {};
  if (!$i(a))
    return fi(a) ? {
      error: "TOO_SHORT"
    } : {};
  var n = pi(a);
  return n.ext ? n : {
    number: a
  };
}
function wl(e, o, t) {
  var a = {
    country: e,
    phone: o
  };
  return t && (a.ext = t), a;
}
function Ml(e, o, t, a) {
  var n = al(Qt(e), o, t, a.metadata), r = n.countryCallingCodeSource, s = n.countryCallingCode, d = n.number, l;
  if (s)
    a.selectNumberingPlan(s);
  else if (d && (o || t))
    a.selectNumberingPlan(o, t), o && (l = o), s = t || bt(o, a.metadata);
  else
    return {};
  if (!d)
    return {
      countryCallingCodeSource: r,
      countryCallingCode: s
    };
  var i = lt(Qt(d), a), h = i.nationalNumber, m = i.carrierCode, g = dl(s, {
    nationalNumber: h,
    defaultCountry: o,
    metadata: a
  });
  return g && (l = g, g === "001" || a.country(l)), {
    country: l,
    countryCallingCode: s,
    countryCallingCodeSource: r,
    nationalNumber: h,
    carrierCode: m
  };
}
function la(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    o && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function ua(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? la(Object(t), !0).forEach(function(a) {
      Ol(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : la(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function Ol(e, o, t) {
  return o in e ? Object.defineProperty(e, o, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = t, e;
}
function Pl(e, o, t) {
  return Al(e, ua(ua({}, o), {}, {
    v2: !0
  }), t);
}
function ha(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    o && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Bl(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? ha(Object(t), !0).forEach(function(a) {
      Tl(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ha(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function Tl(e, o, t) {
  return o in e ? Object.defineProperty(e, o, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = t, e;
}
function Dl(e, o) {
  return Rl(e) || El(e, o) || Ll(e, o) || xl();
}
function xl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ll(e, o) {
  if (e) {
    if (typeof e == "string")
      return ma(e, o);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ma(e, o);
  }
}
function ma(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var t = 0, a = new Array(o); t < o; t++)
    a[t] = e[t];
  return a;
}
function El(e, o) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var a = [], n = !0, r = !1, s, d;
    try {
      for (t = t.call(e); !(n = (s = t.next()).done) && (a.push(s.value), !(o && a.length === o)); n = !0)
        ;
    } catch (l) {
      r = !0, d = l;
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (r)
          throw d;
      }
    }
    return a;
  }
}
function Rl(e) {
  if (Array.isArray(e))
    return e;
}
function Il(e) {
  var o = Array.prototype.slice.call(e), t = Dl(o, 4), a = t[0], n = t[1], r = t[2], s = t[3], d, l, i;
  if (typeof a == "string")
    d = a;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!n || typeof n == "string")
    s ? (l = r, i = s) : (l = void 0, i = r), n && (l = Bl({
      defaultCountry: n
    }, l));
  else if (bo(n))
    r ? (l = n, i = r) : i = n;
  else
    throw new Error("Invalid second argument: ".concat(n));
  return {
    text: d,
    options: l,
    metadata: i
  };
}
function ca(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    o && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Ca(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? ca(Object(t), !0).forEach(function(a) {
      Kl(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ca(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function Kl(e, o, t) {
  return o in e ? Object.defineProperty(e, o, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = t, e;
}
function Gl(e, o, t) {
  o && o.defaultCountry && !li(o.defaultCountry, t) && (o = Ca(Ca({}, o), {}, {
    defaultCountry: void 0
  }));
  try {
    return Pl(e, o, t);
  } catch (a) {
    if (!(a instanceof pe))
      throw a;
  }
}
function jl() {
  var e = Il(arguments), o = e.text, t = e.options, a = e.metadata;
  return Gl(o, t, a);
}
function _o() {
  return Kd(jl, arguments);
}
const Fl = {
  beforeMount(e, o, t) {
    if (typeof o.value != "function") {
      const a = t.context.name;
      let n = `[Vue-click-outside:] provided expression ${o.expression} is not a function, but has to be`;
      a && (n += `Found in component ${a}`), console.warn(n);
    }
    e.clickOutsideEvent = function(a) {
      const n = a.composedPath ? a.composedPath() : a.path;
      e === a.target || e.contains(a.target) || n.includes(e) || o.value(a, e);
    }, document.body.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.body.removeEventListener("click", e.clickOutsideEvent);
  }
}, Hl = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [a, n] of o)
    t[a] = n;
  return t;
};
function ee(e) {
  const o = Ut.options[e];
  return typeof o > "u" ? Ut.options[e] : o;
}
const Vl = {
  name: "VueTelInput",
  directives: {
    clickOutside: Fl
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    allCountries: {
      type: Array,
      default: () => ee("allCountries")
    },
    autoFormat: {
      type: Boolean,
      default: () => ee("autoFormat")
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: () => ee("customValidate")
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: [String, Number],
      default: () => ee("defaultCountry")
    },
    disabled: {
      type: Boolean,
      default: () => ee("disabled")
    },
    autoDefaultCountry: {
      type: Boolean,
      default: () => ee("autoDefaultCountry")
    },
    dropdownOptions: {
      type: Object,
      default: () => ee("dropdownOptions")
    },
    ignoredCountries: {
      type: Array,
      default: () => ee("ignoredCountries")
    },
    inputOptions: {
      type: Object,
      default: () => ee("inputOptions")
    },
    invalidMsg: {
      type: String,
      default: () => ee("invalidMsg")
    },
    mode: {
      type: String,
      default: () => ee("mode")
    },
    onlyCountries: {
      type: Array,
      default: () => ee("onlyCountries")
    },
    preferredCountries: {
      type: Array,
      default: () => ee("preferredCountries")
    },
    validCharactersOnly: {
      type: Boolean,
      default: () => ee("validCharactersOnly")
    },
    styleClasses: {
      type: [String, Array, Object],
      default: () => ee("styleClasses")
    }
  },
  data() {
    return {
      phone: "",
      activeCountryCode: "",
      open: !1,
      finishMounted: !1,
      selectedIndex: null,
      typeToFindInput: "",
      typeToFindTimer: null,
      dropdownOpenDirection: "below",
      parsedPlaceholder: this.inputOptions.placeholder,
      searchQuery: ""
    };
  },
  computed: {
    activeCountry() {
      return this.findCountry(this.activeCountryCode);
    },
    parsedMode() {
      return this.mode === "auto" ? !this.phone || this.phone[0] !== "+" ? "national" : "international" : ["international", "national"].includes(this.mode) ? this.mode : (console.error('Invalid value of prop "mode"'), "international");
    },
    filteredCountries() {
      return this.onlyCountries.length ? this.allCountries.filter(({ iso2: e }) => this.onlyCountries.some((o) => o.toUpperCase() === e)) : this.ignoredCountries.length ? this.allCountries.filter(
        ({ iso2: e }) => !this.ignoredCountries.includes(e.toUpperCase()) && !this.ignoredCountries.includes(e.toLowerCase())
      ) : this.allCountries;
    },
    sortedCountries() {
      const e = [...this.getCountries(this.preferredCountries).map((t) => ({ ...t, preferred: !0 })), ...this.filteredCountries];
      if (!this.dropdownOptions.showSearchBox)
        return e;
      const o = this.searchQuery.replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, "");
      return e.filter(
        (t) => new RegExp(o, "i").test(t.name) || new RegExp(o, "i").test(t.iso2) || new RegExp(o, "i").test(t.dialCode)
      );
    },
    phoneObject() {
      var e, o, t;
      let a;
      ((e = this.phone) == null ? void 0 : e[0]) === "+" ? a = _o(this.phone) || {} : a = _o(this.phone, this.activeCountryCode) || {};
      const {
        metadata: n,
        ...r
      } = a;
      let s = (o = a.isValid) == null ? void 0 : o.call(a), d = this.phone;
      return s && (d = (t = a.format) == null ? void 0 : t.call(a, this.parsedMode.toUpperCase())), a.country && (this.ignoredCountries.length || this.onlyCountries.length) && (this.findCountry(a.country) || (s = !1, Object.assign(a, { country: null }))), Object.assign(r, {
        countryCode: a.country,
        valid: s,
        country: this.activeCountry,
        formatted: d
      }), r;
    }
  },
  watch: {
    activeCountry(e, o) {
      if (!e && o != null && o.iso2) {
        this.activeCountryCode = o.iso2;
        return;
      }
      e != null && e.iso2 && this.$emit("country-changed", e);
    },
    "phoneObject.countryCode": function(e) {
      this.activeCountryCode = e || "";
    },
    "phoneObject.valid": function() {
      this.$emit("validate", this.phoneObject);
    },
    "phoneObject.formatted": function(e) {
      !this.autoFormat || this.customValidate || (this.emitInput(e), this.$nextTick(() => {
        e && !this.modelValue && (this.phone = e);
      }));
    },
    // finishMounted() {
    //   this.resetPlaceholder();
    // },
    "inputOptions.placeholder": function() {
      this.resetPlaceholder();
    },
    modelValue(e, o) {
      this.testCharacters() ? this.phone = e : this.$nextTick(() => {
        this.phone = o, this.onInput();
      });
    },
    open(e) {
      e ? (this.setDropdownPosition(), this.$emit("open")) : this.$emit("close");
    }
  },
  mounted() {
    this.modelValue && (this.phone = this.modelValue.trim()), this.cleanInvalidCharacters(), this.initializeCountry().then(() => {
      var e;
      !this.phone && (e = this.inputOptions) != null && e.showDialCode && this.activeCountryCode && (this.phone = `+${this.activeCountryCode}`), this.$emit("validate", this.phoneObject);
    }).catch(console.error).then(() => {
      this.finishMounted = !0;
    });
  },
  methods: {
    resetPlaceholder() {
      this.parsedPlaceholder = this.inputOptions.placeholder;
    },
    initializeCountry() {
      return new Promise((e) => {
        var o;
        if (((o = this.phone) == null ? void 0 : o[0]) === "+") {
          e();
          return;
        }
        if (this.defaultCountry) {
          if (typeof this.defaultCountry == "string") {
            this.choose(this.defaultCountry), e();
            return;
          }
          if (typeof this.defaultCountry == "number") {
            const a = this.findCountryByDialCode(this.defaultCountry);
            if (a) {
              this.choose(a.iso2), e();
              return;
            }
          }
        }
        const t = this.preferredCountries[0] || this.filteredCountries[0];
        this.autoDefaultCountry ? xd().then((a) => {
          this.choose(a || this.activeCountryCode);
        }).catch((a) => {
          console.warn(a), this.choose(t);
        }).then(() => {
          e();
        }) : (this.choose(t), e());
      });
    },
    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries(e = []) {
      return e.map((o) => this.findCountry(o)).filter(Boolean);
    },
    findCountry(e = "") {
      return this.filteredCountries.find((o) => o.iso2 === e.toUpperCase());
    },
    findCountryByDialCode(e) {
      return this.filteredCountries.find((o) => Number(o.dialCode) === e);
    },
    getItemClass(e, o) {
      const t = this.selectedIndex === e, a = e === this.preferredCountries.length - 1, n = this.preferredCountries.some((r) => r.toUpperCase() === o);
      return {
        highlighted: t,
        "last-preferred": a,
        preferred: n
      };
    },
    choose(e) {
      var o, t;
      let a = e;
      if (typeof a == "string" && (a = this.findCountry(a)), !!a) {
        if (((o = this.phone) == null ? void 0 : o[0]) === "+" && a.iso2 && this.phoneObject.nationalNumber) {
          this.activeCountryCode = a.iso2, this.phone = _o(
            this.phoneObject.nationalNumber,
            a.iso2
          ).formatInternational();
          return;
        }
        if ((t = this.inputOptions) != null && t.showDialCode && a) {
          this.phone = `+${a.dialCode}`, this.activeCountryCode = a.iso2 || "";
          return;
        }
        this.activeCountryCode = a.iso2 || "", this.emitInput(this.phone);
      }
    },
    cleanInvalidCharacters() {
      const e = this.phone;
      if (this.validCharactersOnly) {
        const o = this.phone.match(/[()\-+0-9\s]*/g);
        this.phone = o.join("");
      }
      if (this.customValidate && this.customValidate instanceof RegExp) {
        const o = this.phone.match(this.customValidate);
        this.phone = o.join("");
      }
      e !== this.phone && this.emitInput(this.phone);
    },
    testCharacters() {
      return this.validCharactersOnly && !/^[()\-+0-9\s]*$/.test(this.phone) ? !1 : this.customValidate ? this.testCustomValidate() : !0;
    },
    testCustomValidate() {
      return this.customValidate instanceof RegExp ? this.customValidate.test(this.phone) : !1;
    },
    onInput() {
      this.$refs.input.setCustomValidity(this.phoneObject.valid ? "" : this.invalidMsg), this.emitInput(this.phone);
    },
    emitInput(e) {
      this.$emit("update:modelValue", e), this.$emit("on-input", e, this.phoneObject, this.$refs.input);
    },
    onBlur() {
      this.$emit("blur");
    },
    onFocus() {
      Ld(this.$refs.input, this.phone.length), this.$emit("focus");
    },
    onEnter() {
      this.$emit("enter");
    },
    onSpace() {
      this.$emit("space");
    },
    focus() {
      this.$refs.input.focus();
    },
    toggleDropdown() {
      this.disabled || this.dropdownOptions.disabled || (this.searchQuery = "", this.open = !this.open);
    },
    clickedOutside() {
      this.open = !1;
    },
    keyboardNav(e) {
      if (e.keyCode === 40) {
        e.preventDefault(), this.open = !0, this.selectedIndex === null ? this.selectedIndex = 0 : this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
        const o = this.$refs.list.children[this.selectedIndex];
        o.focus(), o.offsetTop + o.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight && (this.$refs.list.scrollTop = o.offsetTop - this.$refs.list.clientHeight + o.clientHeight);
      } else if (e.keyCode === 38) {
        e.preventDefault(), this.open = !0, this.selectedIndex === null ? this.selectedIndex = this.sortedCountries.length - 1 : this.selectedIndex = Math.max(0, this.selectedIndex - 1);
        const o = this.$refs.list.children[this.selectedIndex];
        o.focus(), o.offsetTop < this.$refs.list.scrollTop && (this.$refs.list.scrollTop = o.offsetTop);
      } else if (e.keyCode === 13)
        this.selectedIndex !== null && this.choose(this.sortedCountries[this.selectedIndex]), this.open = !this.open;
      else {
        this.typeToFindInput += e.key, clearTimeout(this.typeToFindTimer), this.typeToFindTimer = setTimeout(() => {
          this.typeToFindInput = "";
        }, 700);
        const o = this.sortedCountries.slice(this.preferredCountries.length).findIndex((t) => t.name.toLowerCase().startsWith(this.typeToFindInput));
        if (o >= 0) {
          this.selectedIndex = this.preferredCountries.length + o;
          const t = this.$refs.list.children[this.selectedIndex], a = t.offsetTop < this.$refs.list.scrollTop, n = t.offsetTop + t.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight;
          (a || n) && (this.$refs.list.scrollTop = t.offsetTop - this.$refs.list.clientHeight / 2);
        }
      }
    },
    reset() {
      this.selectedIndex = this.sortedCountries.map((e) => e.iso2).indexOf(this.activeCountryCode), this.open = !1;
    },
    setDropdownPosition() {
      window.innerHeight - this.$el.getBoundingClientRect().bottom > 200 ? this.dropdownOpenDirection = "below" : this.dropdownOpenDirection = "above";
    }
  }
}, _l = ["aria-expanded", "tabindex"], Ul = { class: "vti__selection" }, zl = {
  key: 1,
  class: "vti__country-code"
}, Wl = { class: "vti__dropdown-arrow" }, Yl = ["placeholder"], ql = ["onClick", "onMousemove", "aria-selected"], Zl = { key: 1 }, Jl = ["type", "autocomplete", "autofocus", "disabled", "id", "maxlength", "name", "placeholder", "readonly", "required", "tabindex", "value", "aria-describedby"];
function Ql(e, o, t, a, n, r) {
  const s = pn("click-outside");
  return p(), v("div", {
    class: B(["vue-tel-input", t.styleClasses, { disabled: t.disabled }])
  }, [
    Lo((p(), v("div", {
      "aria-label": "Country Code Selector",
      "aria-haspopup": "listbox",
      "aria-expanded": n.open,
      role: "button",
      class: B(["vti__dropdown", { open: n.open, disabled: t.dropdownOptions.disabled }]),
      tabindex: t.dropdownOptions.tabindex,
      onKeydown: [
        o[2] || (o[2] = (...d) => r.keyboardNav && r.keyboardNav(...d)),
        o[4] || (o[4] = je((...d) => r.toggleDropdown && r.toggleDropdown(...d), ["space"])),
        o[5] || (o[5] = je((...d) => r.reset && r.reset(...d), ["esc"])),
        o[6] || (o[6] = je((...d) => r.reset && r.reset(...d), ["tab"]))
      ],
      onClick: o[3] || (o[3] = (...d) => r.toggleDropdown && r.toggleDropdown(...d))
    }, [
      u("span", Ul, [
        t.dropdownOptions.showFlags ? (p(), v("span", {
          key: 0,
          class: B(["vti__flag", n.activeCountryCode.toLowerCase()])
        }, null, 2)) : P("", !0),
        t.dropdownOptions.showDialCodeInSelection ? (p(), v("span", zl, " +" + y(r.activeCountry && r.activeCountry.dialCode), 1)) : P("", !0),
        Le(e.$slots, "arrow-icon", { open: n.open }, () => [
          u("span", Wl, y(n.open ? "▲" : "▼"), 1)
        ])
      ]),
      n.open ? (p(), v("ul", {
        key: 0,
        ref: "list",
        class: B(["vti__dropdown-list", n.dropdownOpenDirection]),
        role: "listbox"
      }, [
        t.dropdownOptions.showSearchBox ? Lo((p(), v("input", {
          key: 0,
          class: "vti__input vti__search_box",
          "aria-label": "Search by country name or country code",
          placeholder: r.sortedCountries.length ? r.sortedCountries[0].name : "",
          type: "text",
          "onUpdate:modelValue": o[0] || (o[0] = (d) => n.searchQuery = d),
          onClick: o[1] || (o[1] = yn(() => {
          }, ["stop"]))
        }, null, 8, Yl)), [
          [vn, n.searchQuery]
        ]) : P("", !0),
        (p(!0), v(I, null, _(r.sortedCountries, (d, l) => (p(), v("li", {
          role: "option",
          class: B(["vti__dropdown-item", r.getItemClass(l, d.iso2)]),
          key: d.iso2 + (d.preferred ? "-preferred" : ""),
          tabindex: "-1",
          onClick: (i) => r.choose(d),
          onMousemove: (i) => n.selectedIndex = l,
          "aria-selected": n.activeCountryCode === d.iso2 && !d.preferred
        }, [
          t.dropdownOptions.showFlags ? (p(), v("span", {
            key: 0,
            class: B(["vti__flag", d.iso2.toLowerCase()])
          }, null, 2)) : P("", !0),
          u("strong", null, y(d.name), 1),
          t.dropdownOptions.showDialCodeInList ? (p(), v("span", Zl, " +" + y(d.dialCode), 1)) : P("", !0)
        ], 42, ql))), 128))
      ], 2)) : P("", !0)
    ], 42, _l)), [
      [s, r.clickedOutside]
    ]),
    Lo(u("input", {
      "onUpdate:modelValue": o[7] || (o[7] = (d) => n.phone = d),
      ref: "input",
      type: t.inputOptions.type,
      autocomplete: t.inputOptions.autocomplete,
      autofocus: t.inputOptions.autofocus,
      class: B(["vti__input", t.inputOptions.styleClasses]),
      disabled: t.disabled,
      id: t.inputOptions.id,
      maxlength: t.inputOptions.maxlength,
      name: t.inputOptions.name,
      placeholder: n.parsedPlaceholder,
      readonly: t.inputOptions.readonly,
      required: t.inputOptions.required,
      tabindex: t.inputOptions.tabindex,
      value: t.modelValue,
      "aria-describedby": t.inputOptions["aria-describedby"],
      onBlur: o[8] || (o[8] = (...d) => r.onBlur && r.onBlur(...d)),
      onFocus: o[9] || (o[9] = (...d) => r.onFocus && r.onFocus(...d)),
      onInput: o[10] || (o[10] = (...d) => r.onInput && r.onInput(...d)),
      onKeyup: [
        o[11] || (o[11] = je((...d) => r.onEnter && r.onEnter(...d), ["enter"])),
        o[12] || (o[12] = je((...d) => r.onSpace && r.onSpace(...d), ["space"]))
      ]
    }, null, 42, Jl), [
      [bn, n.phone]
    ]),
    Le(e.$slots, "icon-right")
  ], 2);
}
const Xl = /* @__PURE__ */ Hl(Vl, [["render", Ql]]), eu = { class: "v-vue-tel-input" }, ou = { class: "label" }, tu = {
  key: 0,
  class: "px-3 text-sm text-red-500"
}, au = {
  __name: "T-Vue-Tel-Input",
  props: {
    phone: {
      type: String,
      default: "",
      required: !0
    }
  },
  emits: [
    "update:phone"
  ],
  setup(e, { emit: o }) {
    const t = e, a = o, n = w({
      phone: t.phone && ""
    }), r = ro({
      phone: {
        required: se
      }
    }, n);
    function s(d) {
      a("update:phone", d);
    }
    return (d, l) => (p(), v("div", eu, [
      u("h2", ou, y(d.$t("passengers.phone.label")), 1),
      k(C(Xl), {
        mode: "international",
        modelValue: n.value.phone,
        "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value.phone = i),
        required: "true",
        inputOptions: { placeholder: d.$t("passengers.phone.placeholder") },
        onBlur: l[1] || (l[1] = (i) => C(r).phone.$touch()),
        onValidate: l[2] || (l[2] = (i) => s(i)),
        class: B({ error: C(r).phone.$error })
      }, null, 8, ["modelValue", "inputOptions", "class"]),
      C(r).$errors.length > 0 ? (p(), v("div", tu, [
        (p(!0), v(I, null, _(C(r).$errors, (i) => (p(), v("p", {
          key: i.$uid
        }, y(d.$t("passengers.errors." + i.$property + "." + i.$validator)), 1))), 128))
      ])) : P("", !0)
    ]));
  }
}, nu = {
  class: /* @__PURE__ */ B({ "px-3 text-sm text-neutral-500": !0, valid: !0 })
}, ru = { class: "grid grid-cols-3" }, su = { class: "relative mb-2" }, du = { class: "block truncate" }, iu = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, lu = { class: "relative mb-2" }, uu = { class: "block truncate" }, hu = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, mu = { class: "relative mb-2" }, cu = { class: "block truncate" }, Cu = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, gu = {
  __name: "T-Birthday-Input.v2",
  props: {
    modelValue: {
      type: String,
      default: null
    }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: o }) {
    const t = e, a = o, n = (/* @__PURE__ */ new Date()).getFullYear(), r = Array.from({ length: 120 }, (f, c) => n - c).map((f) => ({ id: f, name: f })), s = w(null), d = Array.from({ length: 12 }, (f, c) => {
      const $ = c + 1;
      return { id: $, name: $.toString().padStart(2, "0") };
    }), l = w(null), i = N(() => !s.value || !l.value ? 31 : new Date(s.value.id, l.value.id, 0).getDate()), h = N(() => Array.from({ length: i.value }, (f, c) => {
      const $ = c + 1;
      return { id: $, name: $.toString().padStart(2, "0") };
    })), m = w(null);
    V(i, (f) => {
      m.value && m.value.id > f && (m.value = h.value[f - 1]);
    }), j(function() {
      const f = typeof t.modelValue == "string" ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(t.modelValue) : null;
      if (!f)
        return;
      const [c, $, b] = [f[1], f[2], f[3]].map(Number);
      s.value = r.find((M) => M.id === c) ?? null, l.value = d.find((M) => M.id === $) ?? null, m.value = h.value.find((M) => M.id === b) ?? null;
    });
    function g() {
      if (!s.value || !l.value || !m.value)
        return;
      const f = s.value.id, c = l.value.id.toString().padStart(2, "0"), $ = m.value.id.toString().padStart(2, "0");
      a("update:modelValue", `${f}-${c}-${$}`);
    }
    return V([s, l, m], g), (f, c) => (p(), v(I, null, [
      u("h2", nu, y(f.$t("passengers.birthday.label")), 1),
      u("div", ru, [
        k(C(qe), {
          as: "div",
          modelValue: m.value,
          "onUpdate:modelValue": c[0] || (c[0] = ($) => m.value = $)
        }, {
          default: L(() => [
            k(C(Ze), { class: "hidden" }, {
              default: L(() => [
                te(y(f.$t("passengers.birthday.day")), 1)
              ]),
              _: 1
            }),
            u("div", su, [
              k(C(Je), { class: "relative w-full cursor-default rounded-l-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6" }, {
                default: L(() => [
                  u("span", du, y(m.value ? m.value.name : f.$t("passengers.birthday.day")), 1),
                  u("span", iu, [
                    k(C(Ye), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ]),
                _: 1
              }),
              k(Ue, {
                "leave-active-class": "transition ease-in duration-100",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: L(() => [
                  k(C(Qe), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
                    default: L(() => [
                      (p(!0), v(I, null, _(h.value, ($) => (p(), J(C(Xe), {
                        as: "template",
                        key: $.id,
                        value: $
                      }, {
                        default: L(({ active: b, selected: M }) => [
                          u("li", {
                            class: B([b ? "bg-taa-brand-blue text-white" : "text-gray-900", "relative cursor-default select-none py-2 pl-3 pr-9"])
                          }, [
                            u("span", {
                              class: B([M ? "font-semibold" : "font-normal", "block truncate"])
                            }, y($.name), 3),
                            M ? (p(), v("span", {
                              key: 0,
                              class: B([b ? "text-white" : "text-brand-blue", "absolute inset-y-0 right-0 flex items-center pr-4"])
                            }, [
                              k(C(We), {
                                class: "h-5 w-5",
                                "aria-hidden": "true"
                              })
                            ], 2)) : P("", !0)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        k(C(qe), {
          as: "div",
          modelValue: l.value,
          "onUpdate:modelValue": c[1] || (c[1] = ($) => l.value = $)
        }, {
          default: L(() => [
            k(C(Ze), { class: "hidden" }, {
              default: L(() => [
                te(y(f.$t("passengers.birthday.month")), 1)
              ]),
              _: 1
            }),
            u("div", lu, [
              k(C(Je), { class: "relative w-full cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6" }, {
                default: L(() => [
                  u("span", uu, y(l.value ? l.value.name : f.$t("passengers.birthday.month")), 1),
                  u("span", hu, [
                    k(C(Ye), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ]),
                _: 1
              }),
              k(Ue, {
                "leave-active-class": "transition ease-in duration-100",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: L(() => [
                  k(C(Qe), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
                    default: L(() => [
                      (p(!0), v(I, null, _(C(d), ($) => (p(), J(C(Xe), {
                        as: "template",
                        key: $.id,
                        value: $
                      }, {
                        default: L(({ active: b, selected: M }) => [
                          u("li", {
                            class: B([b ? "bg-taa-brand-blue text-white" : "text-gray-900", "relative cursor-default select-none py-2 pl-3 pr-9"])
                          }, [
                            u("span", {
                              class: B([M ? "font-semibold" : "font-normal", "block truncate"])
                            }, y($.name), 3),
                            M ? (p(), v("span", {
                              key: 0,
                              class: B([b ? "text-white" : "text-brand-blue", "absolute inset-y-0 right-0 flex items-center pr-4"])
                            }, [
                              k(C(We), {
                                class: "h-5 w-5",
                                "aria-hidden": "true"
                              })
                            ], 2)) : P("", !0)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        k(C(qe), {
          as: "div",
          modelValue: s.value,
          "onUpdate:modelValue": c[2] || (c[2] = ($) => s.value = $)
        }, {
          default: L(() => [
            k(C(Ze), { class: "hidden" }, {
              default: L(() => [
                te(y(f.$t("passengers.birthday.year")), 1)
              ]),
              _: 1
            }),
            u("div", mu, [
              k(C(Je), { class: "relative w-full cursor-default rounded-r-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6" }, {
                default: L(() => [
                  u("span", cu, y(s.value ? s.value.name : f.$t("passengers.birthday.year")), 1),
                  u("span", Cu, [
                    k(C(Ye), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ]),
                _: 1
              }),
              k(Ue, {
                "leave-active-class": "transition ease-in duration-100",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: L(() => [
                  k(C(Qe), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
                    default: L(() => [
                      (p(!0), v(I, null, _(C(r), ($) => (p(), J(C(Xe), {
                        as: "template",
                        key: $.id,
                        value: $
                      }, {
                        default: L(({ active: b, selected: M }) => [
                          u("li", {
                            class: B([b ? "bg-taa-brand-blue text-white" : "text-gray-900", "relative cursor-default select-none py-2 pl-3 pr-9"])
                          }, [
                            u("span", {
                              class: B([M ? "font-semibold" : "font-normal", "block truncate"])
                            }, y($.name), 3),
                            M ? (p(), v("span", {
                              key: 0,
                              class: B([b ? "text-white" : "text-brand-blue", "absolute inset-y-0 right-0 flex items-center pr-4"])
                            }, [
                              k(C(We), {
                                class: "h-5 w-5",
                                "aria-hidden": "true"
                              })
                            ], 2)) : P("", !0)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ])
    ], 64));
  }
};
var H;
let Y = (H = class extends Date {
  constructor(t = null, a = "YYYY-MM-DD", n = "en-US") {
    super(H.parseDateTime(t, a, n));
    F(this, "lang");
    this.lang = n;
  }
  static parseDateTime(t, a = "YYYY-MM-DD", n = "en-US") {
    if (!t) return new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
    if (t instanceof H) return t.toJSDate();
    if (t instanceof Date) return t;
    if (/^-?\d{10,}$/.test(String(t))) return new Date(Number(t));
    if (typeof t == "string") {
      const r = [];
      let s = null;
      for (; (s = H.regex.exec(a)) != null; ) s[1] !== "\\" && r.push(s);
      if (r.length) {
        const d = { year: null, month: null, shortMonth: null, longMonth: null, day: null, hour: 0, minute: 0, second: 0, ampm: null, value: "" };
        r[0].index > 0 && (d.value += ".*?");
        for (const [i, h] of Object.entries(r)) {
          const m = Number(i), { group: g, pattern: f } = H.formatPatterns(h[0], n);
          d[g] = m + 1, d.value += f, d.value += ".*?";
        }
        const l = new RegExp(`^${d.value}$`);
        if (l.test(t)) {
          const i = l.exec(t), h = Number(i[d.year]);
          let m = null;
          d.month ? m = Number(i[d.month]) - 1 : d.shortMonth ? m = H.shortMonths(n).indexOf(i[d.shortMonth]) : d.longMonth && (m = H.longMonths(n).indexOf(i[d.longMonth]));
          const g = Number(i[d.day]) || 1, f = Number(i[d.hour]);
          let c = Number.isNaN(f) ? 0 : f;
          const $ = Number(i[d.minute]), b = Number.isNaN($) ? 0 : $, M = Number(i[d.second]), O = Number.isNaN(M) ? 0 : M, A = i[d.ampm];
          return A && A === "PM" && (c += 12, c === 24 && (c = 0)), new Date(h, m, g, c, b, O, 0);
        }
      }
    }
    return new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
  }
  static shortMonths(t) {
    return H.MONTH_JS.map(((a) => new Date(2019, a).toLocaleString(t, { month: "short" })));
  }
  static longMonths(t) {
    return H.MONTH_JS.map(((a) => new Date(2019, a).toLocaleString(t, { month: "long" })));
  }
  static formatPatterns(t, a) {
    switch (t) {
      case "YY":
      case "YYYY":
        return { group: "year", pattern: `(\\d{${t.length}})` };
      case "M":
        return { group: "month", pattern: "(\\d{1,2})" };
      case "MM":
        return { group: "month", pattern: "(\\d{2})" };
      case "MMM":
        return { group: "shortMonth", pattern: `(${H.shortMonths(a).join("|")})` };
      case "MMMM":
        return { group: "longMonth", pattern: `(${H.longMonths(a).join("|")})` };
      case "D":
        return { group: "day", pattern: "(\\d{1,2})" };
      case "DD":
        return { group: "day", pattern: "(\\d{2})" };
      case "h":
      case "H":
        return { group: "hour", pattern: "(\\d{1,2})" };
      case "hh":
      case "HH":
        return { group: "hour", pattern: "(\\d{2})" };
      case "m":
        return { group: "minute", pattern: "(\\d{1,2})" };
      case "mm":
        return { group: "minute", pattern: "(\\d{2})" };
      case "s":
        return { group: "second", pattern: "(\\d{1,2})" };
      case "ss":
        return { group: "second", pattern: "(\\d{2})" };
      case "a":
      case "A":
        return { group: "ampm", pattern: "(AM|PM|am|pm)" };
    }
  }
  getWeek(t) {
    const a = new Date(this.midnight_ts(this)), n = (this.getDay() + (7 - t)) % 7;
    a.setDate(a.getDate() - n);
    const r = a.getTime();
    return a.setMonth(0, 1), a.getDay() !== t && a.setMonth(0, 1 + (4 - a.getDay() + 7) % 7), 1 + Math.ceil((r - a.getTime()) / 6048e5);
  }
  clone() {
    return new H(this);
  }
  toJSDate() {
    return new Date(this);
  }
  inArray(t, a = "[]") {
    return t.some(((n) => n instanceof Array ? this.isBetween(n[0], n[1], a) : this.isSame(n, "day")));
  }
  isBetween(t, a, n = "()") {
    switch (n) {
      default:
      case "()":
        return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(a);
      case "[)":
        return this.midnight_ts(this) >= this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(a);
      case "(]":
        return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) <= this.midnight_ts(a);
      case "[]":
        return this.midnight_ts() >= this.midnight_ts(t) && this.midnight_ts() <= this.midnight_ts(a);
    }
  }
  isBefore(t, a = "days") {
    switch (a) {
      case "day":
      case "days":
        return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
      case "month":
      case "months":
        return new Date(t.getFullYear(), t.getMonth(), 1).getTime() > new Date(this.getFullYear(), this.getMonth(), 1).getTime();
      case "year":
      case "years":
        return t.getFullYear() > this.getFullYear();
    }
    throw new Error("isBefore: Invalid unit!");
  }
  isSameOrBefore(t, a = "days") {
    switch (a) {
      case "day":
      case "days":
        return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
      case "month":
      case "months":
        return new Date(t.getFullYear(), t.getMonth(), 1).getTime() >= new Date(this.getFullYear(), this.getMonth(), 1).getTime();
    }
    throw new Error("isSameOrBefore: Invalid unit!");
  }
  isAfter(t, a = "days") {
    switch (a) {
      case "day":
      case "days":
        return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() > new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
      case "month":
      case "months":
        return new Date(this.getFullYear(), this.getMonth(), 1).getTime() > new Date(t.getFullYear(), t.getMonth(), 1).getTime();
      case "year":
      case "years":
        return this.getFullYear() > t.getFullYear();
    }
    throw new Error("isAfter: Invalid unit!");
  }
  isSameOrAfter(t, a = "days") {
    switch (a) {
      case "day":
      case "days":
        return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >= new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
      case "month":
      case "months":
        return new Date(this.getFullYear(), this.getMonth(), 1).getTime() >= new Date(t.getFullYear(), t.getMonth(), 1).getTime();
    }
    throw new Error("isSameOrAfter: Invalid unit!");
  }
  isSame(t, a = "days") {
    switch (a) {
      case "day":
      case "days":
        return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() === new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
      case "month":
      case "months":
        return new Date(this.getFullYear(), this.getMonth(), 1).getTime() === new Date(t.getFullYear(), t.getMonth(), 1).getTime();
    }
    throw new Error("isSame: Invalid unit!");
  }
  add(t, a = "days") {
    switch (a) {
      case "day":
      case "days":
        this.setDate(this.getDate() + t);
        break;
      case "month":
      case "months":
        this.setMonth(this.getMonth() + t);
    }
    return this;
  }
  subtract(t, a = "days") {
    switch (a) {
      case "day":
      case "days":
        this.setDate(this.getDate() - t);
        break;
      case "month":
      case "months":
        this.setMonth(this.getMonth() - t);
    }
    return this;
  }
  diff(t, a = "days") {
    switch (a) {
      default:
      case "day":
      case "days":
        return Math.round((this.midnight_ts() - this.midnight_ts(t)) / 864e5);
      case "month":
      case "months":
        let n = 12 * (t.getFullYear() - this.getFullYear());
        return n -= t.getMonth(), n += this.getMonth(), n;
    }
  }
  format(t, a = "en-US") {
    let n = "";
    const r = [];
    let s = null;
    for (; (s = H.regex.exec(t)) != null; ) s[1] !== "\\" && r.push(s);
    if (r.length) {
      r[0].index > 0 && (n += t.substring(0, r[0].index));
      for (const [d, l] of Object.entries(r)) {
        const i = Number(d);
        n += this.formatTokens(l[0], a), r[i + 1] && (n += t.substring(l.index + l[0].length, r[i + 1].index)), i === r.length - 1 && (n += t.substring(l.index + l[0].length));
      }
    }
    return n.replace(/\\/g, "");
  }
  midnight_ts(t) {
    return t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0).getTime() : new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime();
  }
  formatTokens(t, a) {
    switch (t) {
      case "YY":
        return String(this.getFullYear()).slice(-2);
      case "YYYY":
        return String(this.getFullYear());
      case "M":
        return String(this.getMonth() + 1);
      case "MM":
        return `0${this.getMonth() + 1}`.slice(-2);
      case "MMM":
        return H.shortMonths(a)[this.getMonth()];
      case "MMMM":
        return H.longMonths(a)[this.getMonth()];
      case "D":
        return String(this.getDate());
      case "DD":
        return `0${this.getDate()}`.slice(-2);
      case "H":
        return String(this.getHours());
      case "HH":
        return `0${this.getHours()}`.slice(-2);
      case "h":
        return String(this.getHours() % 12 || 12);
      case "hh":
        return `0${this.getHours() % 12 || 12}`.slice(-2);
      case "m":
        return String(this.getMinutes());
      case "mm":
        return `0${this.getMinutes()}`.slice(-2);
      case "s":
        return String(this.getSeconds());
      case "ss":
        return `0${this.getSeconds()}`.slice(-2);
      case "a":
        return this.getHours() < 12 || this.getHours() === 24 ? "am" : "pm";
      case "A":
        return this.getHours() < 12 || this.getHours() === 24 ? "AM" : "PM";
      default:
        return "";
    }
  }
}, F(H, "regex", /(\\)?(Y{2,4}|M{1,4}|D{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|A|a)/g), F(H, "MONTH_JS", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), H);
class $u {
  constructor(o) {
    F(this, "picker");
    this.picker = o;
  }
  render(o, t) {
    o || (o = new Y()), o.setDate(1), o.setHours(0, 0, 0, 0), typeof this[`get${t}View`] == "function" && this[`get${t}View`](o);
  }
  getContainerView(o) {
    this.picker.ui.container.innerHTML = "", this.picker.options.header && this.picker.trigger("render", { date: o.clone(), view: "Header" }), this.picker.trigger("render", { date: o.clone(), view: "Main" }), this.picker.options.autoApply || this.picker.trigger("render", { date: o.clone(), view: "Footer" });
  }
  getHeaderView(o) {
    const t = document.createElement("header");
    this.picker.options.header instanceof HTMLElement && t.appendChild(this.picker.options.header), typeof this.picker.options.header == "string" && (t.innerHTML = this.picker.options.header), this.picker.ui.container.appendChild(t), this.picker.trigger("view", { target: t, date: o.clone(), view: "Header" });
  }
  getMainView(o) {
    const t = document.createElement("main");
    this.picker.ui.container.appendChild(t);
    const a = document.createElement("div");
    a.className = `calendars grid-${this.picker.options.grid}`;
    for (let n = 0; n < this.picker.options.calendars; n++) {
      const r = document.createElement("div");
      r.className = "calendar", a.appendChild(r);
      const s = this.getCalendarHeaderView(o.clone());
      r.appendChild(s), this.picker.trigger("view", { date: o.clone(), view: "CalendarHeader", index: n, target: s });
      const d = this.getCalendarDayNamesView();
      r.appendChild(d), this.picker.trigger("view", { date: o.clone(), view: "CalendarDayNames", index: n, target: d });
      const l = this.getCalendarDaysView(o.clone());
      r.appendChild(l), this.picker.trigger("view", { date: o.clone(), view: "CalendarDays", index: n, target: l });
      const i = this.getCalendarFooterView(this.picker.options.lang, o.clone());
      r.appendChild(i), this.picker.trigger("view", { date: o.clone(), view: "CalendarFooter", index: n, target: i }), this.picker.trigger("view", { date: o.clone(), view: "CalendarItem", index: n, target: r }), o.add(1, "month");
    }
    t.appendChild(a), this.picker.trigger("view", { date: o.clone(), view: "Calendars", target: a }), this.picker.trigger("view", { date: o.clone(), view: "Main", target: t });
  }
  getFooterView(o) {
    const t = document.createElement("footer"), a = document.createElement("div");
    a.className = "footer-buttons";
    const n = document.createElement("button");
    n.className = "cancel-button unit", n.innerHTML = this.picker.options.locale.cancel, a.appendChild(n);
    const r = document.createElement("button");
    r.className = "apply-button unit", r.innerHTML = this.picker.options.locale.apply, r.disabled = !0, a.appendChild(r), t.appendChild(a), this.picker.ui.container.appendChild(t), this.picker.trigger("view", { date: o, target: t, view: "Footer" });
  }
  getCalendarHeaderView(o) {
    const t = document.createElement("div");
    t.className = "header";
    const a = document.createElement("div");
    a.className = "month-name", a.innerHTML = `<span>${o.toLocaleString(this.picker.options.lang, { month: "long" })}</span> ${o.format("YYYY")}`, t.appendChild(a);
    const n = document.createElement("button");
    n.className = "previous-button unit", n.innerHTML = this.picker.options.locale.previousMonth, t.appendChild(n);
    const r = document.createElement("button");
    return r.className = "next-button unit", r.innerHTML = this.picker.options.locale.nextMonth, t.appendChild(r), t;
  }
  getCalendarDayNamesView() {
    const o = document.createElement("div");
    o.className = "daynames-row";
    for (let t = 1; t <= 7; t++) {
      const a = 3 + this.picker.options.firstDay + t, n = document.createElement("div");
      n.className = "dayname", n.innerHTML = new Date(1970, 0, a, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, { weekday: "short" }), n.title = new Date(1970, 0, a, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, { weekday: "long" }), o.appendChild(n), this.picker.trigger("view", { dayIdx: a, view: "CalendarDayName", target: n });
    }
    return o;
  }
  getCalendarDaysView(o) {
    const t = document.createElement("div");
    t.className = "days-grid";
    const a = this.calcOffsetDays(o, this.picker.options.firstDay), n = 32 - new Date(o.getFullYear(), o.getMonth(), 32).getDate();
    for (let r = 0; r < a; r++) {
      const s = document.createElement("div");
      s.className = "offset", t.appendChild(s);
    }
    for (let r = 1; r <= n; r++) {
      o.setDate(r);
      const s = this.getCalendarDayView(o);
      t.appendChild(s), this.picker.trigger("view", { date: o, view: "CalendarDay", target: s });
    }
    return t;
  }
  getCalendarDayView(o) {
    const t = this.picker.options.date ? new Y(this.picker.options.date) : null, a = new Y(), n = document.createElement("div");
    return n.className = "day unit", n.innerHTML = o.format("D"), n.dataset.time = String(o.getTime()), o.isSame(a, "day") && n.classList.add("today"), [0, 6].includes(o.getDay()) && n.classList.add("weekend"), this.picker.datePicked.length ? this.picker.datePicked[0].isSame(o, "day") && n.classList.add("selected") : t && o.isSame(t, "day") && n.classList.add("selected"), this.picker.trigger("view", { date: o, view: "CalendarDay", target: n }), n;
  }
  getCalendarFooterView(o, t) {
    const a = document.createElement("div");
    return a.className = "footer", a;
  }
  calcOffsetDays(o, t) {
    let a = o.getDay() - t;
    return a < 0 && (a += 7), a;
  }
}
class fu {
  constructor(o) {
    F(this, "picker");
    F(this, "instances", {});
    this.picker = o;
  }
  initialize() {
    const o = [];
    this.picker.options.plugins.forEach(((t) => {
      typeof t == "function" ? o.push(new t()) : typeof t == "string" && typeof easepick < "u" && Object.prototype.hasOwnProperty.call(easepick, t) ? o.push(new easepick[t]()) : console.warn(`easepick: ${t} not found.`);
    })), o.sort(((t, a) => t.priority > a.priority ? -1 : t.priority < a.priority || t.dependencies.length > a.dependencies.length ? 1 : t.dependencies.length < a.dependencies.length ? -1 : 0)), o.forEach(((t) => {
      t.attach(this.picker), this.instances[t.getName()] = t;
    }));
  }
  getInstance(o) {
    return this.instances[o];
  }
  addInstance(o) {
    if (Object.prototype.hasOwnProperty.call(this.instances, o)) console.warn(`easepick: ${o} already added.`);
    else {
      if (typeof easepick < "u" && Object.prototype.hasOwnProperty.call(easepick, o)) {
        const t = new easepick[o]();
        return t.attach(this.picker), this.instances[t.getName()] = t, t;
      }
      if (this.getPluginFn(o) !== "undefined") {
        const t = new (this.getPluginFn(o))();
        return t.attach(this.picker), this.instances[t.getName()] = t, t;
      }
      console.warn(`easepick: ${o} not found.`);
    }
    return null;
  }
  removeInstance(o) {
    return o in this.instances && this.instances[o].detach(), delete this.instances[o];
  }
  reloadInstance(o) {
    return this.removeInstance(o), this.addInstance(o);
  }
  getPluginFn(o) {
    return [...this.picker.options.plugins].filter(((t) => typeof t == "function" && new t().getName() === o)).shift();
  }
}
class pu {
  constructor(o) {
    F(this, "Calendar", new $u(this));
    F(this, "PluginManager", new fu(this));
    F(this, "calendars", []);
    F(this, "datePicked", []);
    F(this, "cssLoaded", 0);
    F(this, "binds", { hidePicker: this.hidePicker.bind(this), show: this.show.bind(this) });
    F(this, "options", { doc: document, css: [], element: null, firstDay: 1, grid: 1, calendars: 1, lang: "en-US", date: null, format: "YYYY-MM-DD", readonly: !0, autoApply: !0, header: !1, inline: !1, scrollToDate: !0, locale: { nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>', previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>', cancel: "Cancel", apply: "Apply" }, documentClick: this.binds.hidePicker, plugins: [] });
    F(this, "ui", { container: null, shadowRoot: null, wrapper: null });
    F(this, "version", "1.2.1");
    const t = { ...this.options.locale, ...o.locale };
    this.options = { ...this.options, ...o }, this.options.locale = t, this.handleOptions(), this.ui.wrapper = document.createElement("span"), this.ui.wrapper.style.display = "none", this.ui.wrapper.style.position = "absolute", this.ui.wrapper.style.pointerEvents = "none", this.ui.wrapper.className = "easepick-wrapper", this.ui.wrapper.attachShadow({ mode: "open" }), this.ui.shadowRoot = this.ui.wrapper.shadowRoot, this.ui.container = document.createElement("div"), this.ui.container.className = "container", this.options.zIndex && (this.ui.container.style.zIndex = String(this.options.zIndex)), this.options.inline && (this.ui.wrapper.style.position = "relative", this.ui.container.classList.add("inline")), this.ui.shadowRoot.appendChild(this.ui.container), this.options.element.after(this.ui.wrapper), this.handleCSS(), this.options.element.addEventListener("click", this.binds.show), this.on("view", this.onView.bind(this)), this.on("render", this.onRender.bind(this)), this.PluginManager.initialize(), this.parseValues(), typeof this.options.setup == "function" && this.options.setup(this), this.on("click", this.onClick.bind(this));
    const a = this.options.scrollToDate ? this.getDate() : null;
    this.renderAll(a);
  }
  on(o, t, a = {}) {
    this.ui.container.addEventListener(o, t, a);
  }
  off(o, t, a = {}) {
    this.ui.container.removeEventListener(o, t, a);
  }
  trigger(o, t = {}) {
    return this.ui.container.dispatchEvent(new CustomEvent(o, { detail: t }));
  }
  destroy() {
    this.options.element.removeEventListener("click", this.binds.show), typeof this.options.documentClick == "function" && document.removeEventListener("click", this.options.documentClick, !0), Object.keys(this.PluginManager.instances).forEach(((o) => {
      this.PluginManager.removeInstance(o);
    })), this.ui.wrapper.remove();
  }
  onRender(o) {
    const { view: t, date: a } = o.detail;
    this.Calendar.render(a, t);
  }
  onView(o) {
    const { view: t, target: a } = o.detail;
    t === "Footer" && this.datePicked.length && (a.querySelector(".apply-button").disabled = !1);
  }
  onClickHeaderButton(o) {
    this.isCalendarHeaderButton(o) && (o.classList.contains("next-button") ? this.calendars[0].add(1, "month") : this.calendars[0].subtract(1, "month"), this.renderAll(this.calendars[0]));
  }
  onClickCalendarDay(o) {
    if (this.isCalendarDay(o)) {
      const t = new Y(o.dataset.time);
      this.options.autoApply ? (this.setDate(t), this.trigger("select", { date: this.getDate() }), this.hide()) : (this.datePicked[0] = t, this.trigger("preselect", { date: this.getDate() }), this.renderAll());
    }
  }
  onClickApplyButton(o) {
    if (this.isApplyButton(o)) {
      if (this.datePicked[0] instanceof Date) {
        const t = this.datePicked[0].clone();
        this.setDate(t);
      }
      this.hide(), this.trigger("select", { date: this.getDate() });
    }
  }
  onClickCancelButton(o) {
    this.isCancelButton(o) && this.hide();
  }
  onClick(o) {
    const t = o.target;
    if (t instanceof HTMLElement) {
      const a = t.closest(".unit");
      if (!(a instanceof HTMLElement)) return;
      this.onClickHeaderButton(a), this.onClickCalendarDay(a), this.onClickApplyButton(a), this.onClickCancelButton(a);
    }
  }
  isShown() {
    return this.ui.container.classList.contains("inline") || this.ui.container.classList.contains("show");
  }
  show(o) {
    if (this.isShown()) return;
    const t = o && "target" in o ? o.target : this.options.element, { top: a, left: n } = this.adjustPosition(t);
    this.ui.container.style.top = `${a}px`, this.ui.container.style.left = `${n}px`, this.ui.container.classList.add("show"), this.trigger("show", { target: t });
  }
  hide() {
    this.ui.container.classList.remove("show"), this.datePicked.length = 0, this.renderAll(), this.trigger("hide");
  }
  setDate(o) {
    const t = new Y(o, this.options.format);
    this.options.date = t.clone(), this.updateValues(), this.calendars.length && this.renderAll();
  }
  getDate() {
    return this.options.date instanceof Y ? this.options.date.clone() : null;
  }
  parseValues() {
    this.options.date ? this.setDate(this.options.date) : this.options.element instanceof HTMLInputElement && this.options.element.value.length && this.setDate(this.options.element.value), this.options.date instanceof Date || (this.options.date = null);
  }
  updateValues() {
    const o = this.getDate(), t = o instanceof Date ? o.format(this.options.format, this.options.lang) : "", a = this.options.element;
    a instanceof HTMLInputElement ? a.value = t : a instanceof HTMLElement && (a.innerText = t);
  }
  hidePicker(o) {
    let t = o.target, a = null;
    t.shadowRoot && (t = o.composedPath()[0], a = t.getRootNode().host), this.isShown() && a !== this.ui.wrapper && t !== this.options.element && this.hide();
  }
  renderAll(o) {
    this.trigger("render", { view: "Container", date: (o || this.calendars[0]).clone() });
  }
  isCalendarHeaderButton(o) {
    return ["previous-button", "next-button"].some(((t) => o.classList.contains(t)));
  }
  isCalendarDay(o) {
    return o.classList.contains("day");
  }
  isApplyButton(o) {
    return o.classList.contains("apply-button");
  }
  isCancelButton(o) {
    return o.classList.contains("cancel-button");
  }
  gotoDate(o) {
    const t = new Y(o, this.options.format);
    t.setDate(1), this.calendars[0] = t.clone(), this.renderAll();
  }
  clear() {
    this.options.date = null, this.datePicked.length = 0, this.updateValues(), this.renderAll(), this.trigger("clear");
  }
  handleOptions() {
    this.options.element instanceof HTMLElement || (this.options.element = this.options.doc.querySelector(this.options.element)), typeof this.options.documentClick == "function" && document.addEventListener("click", this.options.documentClick, !0), this.options.element instanceof HTMLInputElement && (this.options.element.readOnly = this.options.readonly), this.options.date ? this.calendars[0] = new Y(this.options.date, this.options.format) : this.calendars[0] = new Y();
  }
  handleCSS() {
    if (Array.isArray(this.options.css)) this.options.css.forEach(((o) => {
      const t = document.createElement("link");
      t.href = o, t.rel = "stylesheet";
      const a = () => {
        this.cssLoaded++, this.cssLoaded === this.options.css.length && (this.ui.wrapper.style.display = "");
      };
      t.addEventListener("load", a), t.addEventListener("error", a), this.ui.shadowRoot.append(t);
    }));
    else if (typeof this.options.css == "string") {
      const o = document.createElement("style"), t = document.createTextNode(this.options.css);
      o.appendChild(t), this.ui.shadowRoot.append(o), this.ui.wrapper.style.display = "";
    } else typeof this.options.css == "function" && (this.options.css.call(this, this), this.ui.wrapper.style.display = "");
  }
  adjustPosition(o) {
    const t = o.getBoundingClientRect(), a = this.ui.wrapper.getBoundingClientRect();
    this.ui.container.classList.add("calc");
    const n = this.ui.container.getBoundingClientRect();
    this.ui.container.classList.remove("calc");
    let r = t.bottom - a.bottom, s = t.left - a.left;
    return typeof window < "u" && (window.innerHeight < r + n.height && r - n.height >= 0 && (r = t.top - a.top - n.height), window.innerWidth < s + n.width && t.right - n.width >= 0 && (s = t.right - a.right - n.width)), { left: s, top: r };
  }
}
class yu {
  constructor() {
    F(this, "picker");
    F(this, "options");
    F(this, "priority", 0);
    F(this, "dependencies", []);
  }
  attach(o) {
    const t = this.getName(), a = { ...this.options };
    this.options = { ...this.options, ...o.options[t] || {} };
    for (const r of Object.keys(a)) if (a[r] !== null && typeof a[r] == "object" && Object.keys(a[r]).length && t in o.options && r in o.options[t]) {
      const s = { ...o.options[t][r] };
      s !== null && typeof s == "object" && Object.keys(s).length && Object.keys(s).every(((d) => Object.keys(a[r]).includes(d))) && (this.options[r] = { ...a[r], ...s });
    }
    if (this.picker = o, this.dependenciesNotFound()) {
      const r = this.dependencies.filter(((s) => !this.pluginsAsStringArray().includes(s)));
      return void console.warn(`${this.getName()}: required dependencies (${r.join(", ")}).`);
    }
    const n = this.camelCaseToKebab(this.getName());
    this.picker.ui.container.classList.add(n), this.onAttach();
  }
  detach() {
    const o = this.camelCaseToKebab(this.getName());
    this.picker.ui.container.classList.remove(o), typeof this.onDetach == "function" && this.onDetach();
  }
  dependenciesNotFound() {
    return this.dependencies.length && !this.dependencies.every(((o) => this.pluginsAsStringArray().includes(o)));
  }
  pluginsAsStringArray() {
    return this.picker.options.plugins.map(((o) => typeof o == "function" ? new o().getName() : o));
  }
  camelCaseToKebab(o) {
    return o.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  }
}
class vu extends yu {
  constructor() {
    super(...arguments);
    F(this, "priority", 1);
    F(this, "binds", { onView: this.onView.bind(this) });
    F(this, "options", { minDate: null, maxDate: null, minDays: null, maxDays: null, selectForward: null, selectBackward: null, presets: !0, inseparable: !1, filter: null });
  }
  getName() {
    return "LockPlugin";
  }
  onAttach() {
    if (this.options.minDate && (this.options.minDate = new Y(this.options.minDate, this.picker.options.format, this.picker.options.lang)), this.options.maxDate && (this.options.maxDate = new Y(this.options.maxDate, this.picker.options.format, this.picker.options.lang), this.options.maxDate instanceof Y && this.picker.options.calendars > 1 && this.picker.calendars[0].isSame(this.options.maxDate, "month"))) {
      const t = this.picker.calendars[0].clone().subtract(1, "month");
      this.picker.gotoDate(t);
    }
    if ((this.options.minDays || this.options.maxDays || this.options.selectForward || this.options.selectBackward) && !this.picker.options.plugins.includes("RangePlugin")) {
      const t = ["minDays", "maxDays", "selectForward", "selectBackward"];
      console.warn(`${this.getName()}: options ${t.join(", ")} required RangePlugin.`);
    }
    this.picker.on("view", this.binds.onView);
  }
  onDetach() {
    this.picker.off("view", this.binds.onView);
  }
  onView(t) {
    const { view: a, target: n, date: r } = t.detail;
    if (a === "CalendarHeader" && (this.options.minDate instanceof Y && r.isSameOrBefore(this.options.minDate, "month") && n.classList.add("no-previous-month"), this.options.maxDate instanceof Y && r.isSameOrAfter(this.options.maxDate, "month") && n.classList.add("no-next-month")), a === "CalendarDay") {
      const s = this.picker.datePicked.length ? this.picker.datePicked[0] : null;
      if (this.testFilter(r)) return void n.classList.add("locked");
      if (this.options.inseparable) {
        if (this.options.minDays) {
          const d = r.clone().subtract(this.options.minDays - 1, "day"), l = r.clone().add(this.options.minDays - 1, "day");
          let i = !1, h = !1;
          for (; d.isBefore(r, "day"); ) {
            if (this.testFilter(d)) {
              i = !0;
              break;
            }
            d.add(1, "day");
          }
          for (; l.isAfter(r, "day"); ) {
            if (this.testFilter(l)) {
              h = !0;
              break;
            }
            l.subtract(1, "day");
          }
          i && h && n.classList.add("not-available");
        }
        this.rangeIsNotAvailable(r, s) && n.classList.add("not-available");
      }
      this.dateIsNotAvailable(r, s) && n.classList.add("not-available");
    }
    if (this.options.presets && a === "PresetPluginButton") {
      const s = new Y(Number(n.dataset.start)), d = new Y(Number(n.dataset.end)), l = d.diff(s, "day"), i = this.options.minDays && l < this.options.minDays, h = this.options.maxDays && l > this.options.maxDays;
      (i || h || this.lockMinDate(s) || this.lockMaxDate(s) || this.lockMinDate(d) || this.lockMaxDate(d) || this.rangeIsNotAvailable(s, d)) && n.setAttribute("disabled", "disabled");
    }
  }
  dateIsNotAvailable(t, a) {
    return this.lockMinDate(t) || this.lockMaxDate(t) || this.lockMinDays(t, a) || this.lockMaxDays(t, a) || this.lockSelectForward(t) || this.lockSelectBackward(t);
  }
  rangeIsNotAvailable(t, a) {
    if (!t || !a) return !1;
    const n = (t.isSameOrBefore(a, "day") ? t : a).clone(), r = (a.isSameOrAfter(t, "day") ? a : t).clone();
    for (; n.isSameOrBefore(r, "day"); ) {
      if (this.testFilter(n)) return !0;
      n.add(1, "day");
    }
    return !1;
  }
  lockMinDate(t) {
    return this.options.minDate instanceof Y && t.isBefore(this.options.minDate, "day");
  }
  lockMaxDate(t) {
    return this.options.maxDate instanceof Y && t.isAfter(this.options.maxDate, "day");
  }
  lockMinDays(t, a) {
    if (this.options.minDays && a) {
      const n = a.clone().subtract(this.options.minDays - 1, "day"), r = a.clone().add(this.options.minDays - 1, "day");
      return t.isBetween(n, r);
    }
    return !1;
  }
  lockMaxDays(t, a) {
    if (this.options.maxDays && a) {
      const n = a.clone().subtract(this.options.maxDays, "day"), r = a.clone().add(this.options.maxDays, "day");
      return !t.isBetween(n, r);
    }
    return !1;
  }
  lockSelectForward(t) {
    if (this.picker.datePicked.length === 1 && this.options.selectForward) {
      const a = this.picker.datePicked[0].clone();
      return t.isBefore(a, "day");
    }
    return !1;
  }
  lockSelectBackward(t) {
    if (this.picker.datePicked.length === 1 && this.options.selectBackward) {
      const a = this.picker.datePicked[0].clone();
      return t.isAfter(a, "day");
    }
    return !1;
  }
  testFilter(t) {
    return typeof this.options.filter == "function" && this.options.filter(t, this.picker.datePicked);
  }
}
const bu = { class: "relative lg:flex-1" }, Su = { class: "flex justify-end items-center relative" }, Au = { class: "absolute left-2 w-6 z-20" }, Nu = ["id", "value", "disabled", "placeholder"], ga = {
  __name: "Date-Selector",
  props: {
    modelValue: {
      type: String,
      required: !1,
      default: ""
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, a = o, n = N(() => (Math.random() + 1).toString(36).substring(7));
    return j(() => {
      const r = new pu({
        element: document.getElementById("departure-date-" + n.value),
        format: "DD-MM-YYYY",
        plugins: [
          vu
        ],
        LockPlugin: {
          minDate: /* @__PURE__ */ new Date(),
          maxDate: new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 1))
        },
        KbdPlugin: {
          dayIndex: 2
        },
        // TODO: Add css to the plugin
        css: [
          "https://travelwith.taavani.gl/css/easepick.css",
          "https://cdn.jsdelivr.net/npm/@easepick/kbd-plugin@1.2.0/dist/index.css",
          "https://cdn.jsdelivr.net/npm/@easepick/lock-plugin@1.2.0/dist/index.css"
        ],
        autoApply: !1
      });
      r.setDate(t.modelValue), r.on("select", (s) => {
        a("update:modelValue", document.getElementById("departure-date-" + n.value).value);
      });
    }), (r, s) => {
      const d = Sn("calender-icon");
      return p(), v("div", bu, [
        s[0] || (s[0] = u("label", {
          for: "expiryDate",
          class: "pl-3 text-neutral-500"
        }, " Date of Issue ", -1)),
        u("div", Su, [
          u("div", Au, [
            k(d, { class: "stroke-neutral-400 text-neutral-400" })
          ]),
          u("input", {
            id: "departure-date-" + n.value,
            type: "text",
            class: "rounded-md shadow-sm bg-white block w-full border-neutral-300 p-0 pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 sm:text-sm focus:z-10 focus:ring-1 focus:ring-brand-blue focus:border-taa-brand-blue",
            value: e.modelValue,
            disabled: e.disabled,
            placeholder: r.$t("labels.departurePlaceholder")
          }, null, 8, Nu)
        ])
      ]);
    };
  }
}, ku = [
  {
    countryName: "Afghanistan",
    countryShortCode: "AF",
    regions: [
      {
        name: "Badakhshan",
        shortCode: "BDS"
      },
      {
        name: "Badghis",
        shortCode: "BDG"
      },
      {
        name: "Baghlan",
        shortCode: "BGL"
      },
      {
        name: "Balkh",
        shortCode: "BAL"
      },
      {
        name: "Bamyan",
        shortCode: "BAM"
      },
      {
        name: "Daykundi",
        shortCode: "DAY"
      },
      {
        name: "Farah",
        shortCode: "FRA"
      },
      {
        name: "Faryab",
        shortCode: "FYB"
      },
      {
        name: "Ghazni",
        shortCode: "GHA"
      },
      {
        name: "Ghor",
        shortCode: "GHO"
      },
      {
        name: "Helmand",
        shortCode: "HEL"
      },
      {
        name: "Herat",
        shortCode: "HER"
      },
      {
        name: "Jowzjan",
        shortCode: "JOW"
      },
      {
        name: "Kabul",
        shortCode: "KAB"
      },
      {
        name: "Kandahar",
        shortCode: "KAN"
      },
      {
        name: "Kapisa",
        shortCode: "KAP"
      },
      {
        name: "Khost",
        shortCode: "KHO"
      },
      {
        name: "Kunar",
        shortCode: "KNR"
      },
      {
        name: "Kunduz",
        shortCode: "KDZ"
      },
      {
        name: "Laghman",
        shortCode: "LAG"
      },
      {
        name: "Logar",
        shortCode: "LOW"
      },
      {
        name: "Maidan Wardak",
        shortCode: "WAR"
      },
      {
        name: "Nangarhar",
        shortCode: "NAN"
      },
      {
        name: "Nimruz",
        shortCode: "NIM"
      },
      {
        name: "Nuristan",
        shortCode: "NUR"
      },
      {
        name: "Paktia",
        shortCode: "PIA"
      },
      {
        name: "Paktika",
        shortCode: "PKA"
      },
      {
        name: "Panjshir",
        shortCode: "PAN"
      },
      {
        name: "Parwan",
        shortCode: "PAR"
      },
      {
        name: "Samangan",
        shortCode: "SAM"
      },
      {
        name: "Sar-e Pol",
        shortCode: "SAR"
      },
      {
        name: "Takhar",
        shortCode: "TAK"
      },
      {
        name: "Urozgan",
        shortCode: "ORU"
      },
      {
        name: "Zabul",
        shortCode: "ZAB"
      }
    ]
  },
  {
    countryName: "Åland Islands",
    countryShortCode: "AX",
    regions: [
      {
        name: "Brändö",
        shortCode: "BR"
      },
      {
        name: "Eckerö",
        shortCode: "EC"
      },
      {
        name: "Finström",
        shortCode: "FN"
      },
      {
        name: "Föglö",
        shortCode: "FG"
      },
      {
        name: "Geta",
        shortCode: "GT"
      },
      {
        name: "Hammarland",
        shortCode: "HM"
      },
      {
        name: "Jomala",
        shortCode: "JM"
      },
      {
        name: "Kumlinge",
        shortCode: "KM"
      },
      {
        name: "Kökar",
        shortCode: "KK"
      },
      {
        name: "Lemland",
        shortCode: "LE"
      },
      {
        name: "Lumparland",
        shortCode: "LU"
      },
      {
        name: "Mariehamn",
        shortCode: "MH"
      },
      {
        name: "Saltvik",
        shortCode: "SV"
      },
      {
        name: "Sottunga",
        shortCode: "ST"
      },
      {
        name: "Sund",
        shortCode: "SD"
      },
      {
        name: "Vårdö",
        shortCode: "VR"
      }
    ]
  },
  {
    countryName: "Albania",
    countryShortCode: "AL",
    regions: [
      {
        name: "Berat",
        shortCode: "01"
      },
      {
        name: "Dibër",
        shortCode: "09"
      },
      {
        name: "Durrës",
        shortCode: "02"
      },
      {
        name: "Elbasan",
        shortCode: "03"
      },
      {
        name: "Fier",
        shortCode: "04"
      },
      {
        name: "Gjirokastër",
        shortCode: "05"
      },
      {
        name: "Korçë",
        shortCode: "06"
      },
      {
        name: "Kukës",
        shortCode: "07"
      },
      {
        name: "Lezhë",
        shortCode: "08"
      },
      {
        name: "Shkodër",
        shortCode: "10"
      },
      {
        name: "Tirana",
        shortCode: "11"
      },
      {
        name: "Vlorë",
        shortCode: "12"
      }
    ]
  },
  {
    countryName: "Algeria",
    countryShortCode: "DZ",
    regions: [
      {
        name: "Adrar",
        shortCode: "01"
      },
      {
        name: "Aïn Defla",
        shortCode: "44"
      },
      {
        name: "Aïn Témouchent",
        shortCode: "46"
      },
      {
        name: "Algiers",
        shortCode: "16"
      },
      {
        name: "Annaba",
        shortCode: "23"
      },
      {
        name: "Batna",
        shortCode: "05"
      },
      {
        name: "Béchar",
        shortCode: "08"
      },
      {
        name: "Béjaïa",
        shortCode: "06"
      },
      {
        name: "Biskra",
        shortCode: "07"
      },
      {
        name: "Blida",
        shortCode: "09"
      },
      {
        name: "Bordj Bou Arréridj",
        shortCode: "34"
      },
      {
        name: "Bouïra",
        shortCode: "10"
      },
      {
        name: "Boumerdès",
        shortCode: "35"
      },
      {
        name: "Chlef",
        shortCode: "02"
      },
      {
        name: "Constantine",
        shortCode: "25"
      },
      {
        name: "Djelfa",
        shortCode: "17"
      },
      {
        name: "El Bayadh",
        shortCode: "32"
      },
      {
        name: "El Oued",
        shortCode: "39"
      },
      {
        name: "El Tarf",
        shortCode: "36"
      },
      {
        name: "Ghardaïa",
        shortCode: "47"
      },
      {
        name: "Guelma",
        shortCode: "24"
      },
      {
        name: "Illizi",
        shortCode: "33"
      },
      {
        name: "Jijel",
        shortCode: "18"
      },
      {
        name: "Khenchela",
        shortCode: "40"
      },
      {
        name: "Laghouat",
        shortCode: "03"
      },
      {
        name: "Mascara",
        shortCode: "29"
      },
      {
        name: "Médéa",
        shortCode: "26"
      },
      {
        name: "Mila",
        shortCode: "43"
      },
      {
        name: "Mostaganem",
        shortCode: "27"
      },
      {
        name: "Msila",
        shortCode: "28"
      },
      {
        name: "Naâma",
        shortCode: "45"
      },
      {
        name: "Oran",
        shortCode: "31"
      },
      {
        name: "Ouargla",
        shortCode: "30"
      },
      {
        name: "Oum el Bouaghi",
        shortCode: "04"
      },
      {
        name: "Relizane",
        shortCode: "48"
      },
      {
        name: "Saïda",
        shortCode: "20"
      },
      {
        name: "Sétif",
        shortCode: "19"
      },
      {
        name: "Sidi Bel Abbès",
        shortCode: "22"
      },
      {
        name: "Skikda",
        shortCode: "21"
      },
      {
        name: "Souk Ahras",
        shortCode: "41"
      },
      {
        name: "Tamanghasset",
        shortCode: "11"
      },
      {
        name: "Tébessa",
        shortCode: "12"
      },
      {
        name: "Tiaret",
        shortCode: "14"
      },
      {
        name: "Tindouf",
        shortCode: "37"
      },
      {
        name: "Tipaza",
        shortCode: "42"
      },
      {
        name: "Tissemsilt",
        shortCode: "38"
      },
      {
        name: "Tizi Ouzou",
        shortCode: "15"
      },
      {
        name: "Tlemcen",
        shortCode: "13"
      }
    ]
  },
  {
    countryName: "American Samoa",
    countryShortCode: "AS",
    regions: [
      {
        name: "Tutuila",
        shortCode: "01"
      },
      {
        name: "Aunu'u",
        shortCode: "02"
      },
      {
        name: "Ta'ū",
        shortCode: "03"
      },
      {
        name: "Ofu‑Olosega",
        shortCode: "04"
      },
      {
        name: "Rose Atoll",
        shortCode: "21"
      },
      {
        name: "Swains Island",
        shortCode: "22"
      }
    ]
  },
  {
    countryName: "Andorra",
    countryShortCode: "AD",
    regions: [
      {
        name: "Andorra la Vella",
        shortCode: "07"
      },
      {
        name: "Canillo",
        shortCode: "02"
      },
      {
        name: "Encamp",
        shortCode: "03"
      },
      {
        name: "Escaldes-Engordany",
        shortCode: "08"
      },
      {
        name: "La Massana",
        shortCode: "04"
      },
      {
        name: "Ordino",
        shortCode: "05"
      },
      {
        name: "Sant Julià de Lòria",
        shortCode: "06"
      }
    ]
  },
  {
    countryName: "Angola",
    countryShortCode: "AO",
    regions: [
      {
        name: "Bengo",
        shortCode: "BGO"
      },
      {
        name: "Benguela",
        shortCode: "BGU"
      },
      {
        name: "Bié",
        shortCode: "BIE"
      },
      {
        name: "Cabinda",
        shortCode: "CAB"
      },
      {
        name: "Cuando Cubango",
        shortCode: "CCU"
      },
      {
        name: "Cuanza Norte",
        shortCode: "CNO"
      },
      {
        name: "Cuanza Sul",
        shortCode: "CUS"
      },
      {
        name: "Cunene",
        shortCode: "CNN"
      },
      {
        name: "Huambo",
        shortCode: "HUA"
      },
      {
        name: "Huíla",
        shortCode: "HUI"
      },
      {
        name: "Luanda",
        shortCode: "LUA"
      },
      {
        name: "Lunda Norte",
        shortCode: "LNO"
      },
      {
        name: "Lunda Sul",
        shortCode: "LSU"
      },
      {
        name: "Malanje",
        shortCode: "MAL"
      },
      {
        name: "Moxico",
        shortCode: "MOX"
      },
      {
        name: "Namibe",
        shortCode: "NAM"
      },
      {
        name: "Uíge",
        shortCode: "UIG"
      },
      {
        name: "Zaire",
        shortCode: "ZAI"
      }
    ]
  },
  {
    countryName: "Anguilla",
    countryShortCode: "AI",
    regions: [
      {
        name: "Anguilla",
        shortCode: "01"
      },
      {
        name: "Anguillita Island",
        shortCode: "02"
      },
      {
        name: "Blowing Rock",
        shortCode: "03"
      },
      {
        name: "Cove Cay",
        shortCode: "04"
      },
      {
        name: "Crocus Cay",
        shortCode: "05"
      },
      {
        name: "Deadman's Cay",
        shortCode: "06"
      },
      {
        name: "Dog Island",
        shortCode: "07"
      },
      {
        name: "East Cay",
        shortCode: "08"
      },
      {
        name: "Little Island",
        shortCode: "09"
      },
      {
        name: "Little Scrub Island",
        shortCode: "10"
      },
      {
        name: "Mid Cay",
        shortCode: "11"
      },
      {
        name: "North Cay",
        shortCode: "12"
      },
      {
        name: "Prickly Pear Cays",
        shortCode: "13"
      },
      {
        name: "Rabbit Island",
        shortCode: "14"
      },
      {
        name: "Sandy Island/Sand Island",
        shortCode: "15"
      },
      {
        name: "Scilly Cay",
        shortCode: "16"
      },
      {
        name: "Scrub Island",
        shortCode: "17"
      },
      {
        name: "Seal Island",
        shortCode: "18"
      },
      {
        name: "Sombrero/Hat Island",
        shortCode: "19"
      },
      {
        name: "South Cay",
        shortCode: "20"
      },
      {
        name: "South Wager Island",
        shortCode: "21"
      },
      {
        name: "West Cay",
        shortCode: "22"
      }
    ]
  },
  {
    countryName: "Antarctica",
    countryShortCode: "AQ",
    regions: [
      {
        name: "Antarctica",
        shortCode: "AQ"
      }
    ]
  },
  {
    countryName: "Antigua and Barbuda",
    countryShortCode: "AG",
    regions: [
      {
        name: "Antigua Island",
        shortCode: "01"
      },
      {
        name: "Barbuda Island",
        shortCode: "02"
      },
      {
        name: "Bird Island",
        shortCode: "04"
      },
      {
        name: "Bishop Island",
        shortCode: "05"
      },
      {
        name: "Blake Island",
        shortCode: "06"
      },
      {
        name: "Crump Island",
        shortCode: "09"
      },
      {
        name: "Dulcina Island",
        shortCode: "10"
      },
      {
        name: "Exchange Island",
        shortCode: "11"
      },
      {
        name: "Five Islands",
        shortCode: "12"
      },
      {
        name: "Great Bird Island",
        shortCode: "13"
      },
      {
        name: "Green Island",
        shortCode: "14"
      },
      {
        name: "Guiana Island",
        shortCode: "15"
      },
      {
        name: "Hawes Island",
        shortCode: "17"
      },
      {
        name: "Hells Gate Island",
        shortCode: "16"
      },
      {
        name: "Henry Island",
        shortCode: "18"
      },
      {
        name: "Johnson Island",
        shortCode: "19"
      },
      {
        name: "Kid Island",
        shortCode: "20"
      },
      {
        name: "Lobster Island",
        shortCode: "22"
      },
      {
        name: "Maiden Island",
        shortCode: "24"
      },
      {
        name: "Moor Island",
        shortCode: "25"
      },
      {
        name: "Nanny Island",
        shortCode: "26"
      },
      {
        name: "Pelican Island",
        shortCode: "27"
      },
      {
        name: "Prickly Pear Island",
        shortCode: "28"
      },
      {
        name: "Rabbit Island",
        shortCode: "29"
      },
      {
        name: "Red Head Island",
        shortCode: "31"
      },
      {
        name: "Redonda Island",
        shortCode: "03"
      },
      {
        name: "Sandy Island",
        shortCode: "32"
      },
      {
        name: "Smith Island",
        shortCode: "33"
      },
      {
        name: "The Sisters",
        shortCode: "34"
      },
      {
        name: "Vernon Island",
        shortCode: "35"
      },
      {
        name: "Wicked Will Island",
        shortCode: "36"
      },
      {
        name: "York Island",
        shortCode: "37"
      }
    ]
  },
  {
    countryName: "Argentina",
    countryShortCode: "AR",
    regions: [
      {
        name: "Buenos Aires",
        shortCode: "B"
      },
      {
        name: "Capital Federal",
        shortCode: "C"
      },
      {
        name: "Catamarca",
        shortCode: "K"
      },
      {
        name: "Chaco",
        shortCode: "H"
      },
      {
        name: "Chubut",
        shortCode: "U"
      },
      {
        name: "Córdoba",
        shortCode: "X"
      },
      {
        name: "Corrientes",
        shortCode: "W"
      },
      {
        name: "Entre Ríos",
        shortCode: "E"
      },
      {
        name: "Formosa",
        shortCode: "P"
      },
      {
        name: "Jujuy",
        shortCode: "Y"
      },
      {
        name: "La Pampa",
        shortCode: "L"
      },
      {
        name: "La Rioja",
        shortCode: "F"
      },
      {
        name: "Mendoza",
        shortCode: "M"
      },
      {
        name: "Misiones",
        shortCode: "N"
      },
      {
        name: "Neuquén",
        shortCode: "Q"
      },
      {
        name: "Río Negro",
        shortCode: "R"
      },
      {
        name: "Salta",
        shortCode: "A"
      },
      {
        name: "San Juan",
        shortCode: "J"
      },
      {
        name: "San Luis",
        shortCode: "D"
      },
      {
        name: "Santa Cruz",
        shortCode: "Z"
      },
      {
        name: "Santa Fe",
        shortCode: "S"
      },
      {
        name: "Santiago del Estero",
        shortCode: "G"
      },
      {
        name: "Tierra del Fuego",
        shortCode: "V"
      },
      {
        name: "Tucumán",
        shortCode: "T"
      }
    ]
  },
  {
    countryName: "Armenia",
    countryShortCode: "AM",
    regions: [
      {
        name: "Aragatsotn",
        shortCode: "AG"
      },
      {
        name: "Ararat",
        shortCode: "AR"
      },
      {
        name: "Armavir",
        shortCode: "AV"
      },
      {
        name: "Gegharkunik",
        shortCode: "GR"
      },
      {
        name: "Kotayk",
        shortCode: "KT"
      },
      {
        name: "Lori",
        shortCode: "LO"
      },
      {
        name: "Shirak",
        shortCode: "SH"
      },
      {
        name: "Syunik",
        shortCode: "SU"
      },
      {
        name: "Tavush",
        shortCode: "TV"
      },
      {
        name: "Vayots Dzor",
        shortCode: "VD"
      },
      {
        name: "Yerevan",
        shortCode: "ER"
      }
    ]
  },
  {
    countryName: "Aruba",
    countryShortCode: "AW",
    regions: [
      {
        name: "Aruba",
        shortCode: "AW"
      }
    ]
  },
  {
    countryName: "Australia",
    countryShortCode: "AU",
    regions: [
      {
        name: "Australian Capital Territory",
        shortCode: "ACT"
      },
      {
        name: "New South Wales",
        shortCode: "NSW"
      },
      {
        name: "Northern Territory",
        shortCode: "NT"
      },
      {
        name: "Queensland",
        shortCode: "QLD"
      },
      {
        name: "South Australia",
        shortCode: "SA"
      },
      {
        name: "Tasmania",
        shortCode: "TAS"
      },
      {
        name: "Victoria",
        shortCode: "VIC"
      },
      {
        name: "Western Australia",
        shortCode: "WA"
      }
    ]
  },
  {
    countryName: "Austria",
    countryShortCode: "AT",
    regions: [
      {
        name: "Burgenland",
        shortCode: "1"
      },
      {
        name: "Kärnten",
        shortCode: "2"
      },
      {
        name: "Niederösterreich",
        shortCode: "3"
      },
      {
        name: "Oberösterreich",
        shortCode: "4"
      },
      {
        name: "Salzburg",
        shortCode: "5"
      },
      {
        name: "Steiermark",
        shortCode: "6"
      },
      {
        name: "Tirol",
        shortCode: "7"
      },
      {
        name: "Vorarlberg",
        shortCode: "8"
      },
      {
        name: "Wien",
        shortCode: "9"
      }
    ]
  },
  {
    countryName: "Azerbaijan",
    countryShortCode: "AZ",
    regions: [
      {
        name: "Abşeron",
        shortCode: "ABS"
      },
      {
        name: "Ağcabədi",
        shortCode: "AGC"
      },
      {
        name: "Ağdam",
        shortCode: "AGM"
      },
      {
        name: "Ağdaş",
        shortCode: "AGS"
      },
      {
        name: "Ağstafa",
        shortCode: "AGA"
      },
      {
        name: "Ağsu",
        shortCode: "AGU"
      },
      {
        name: "Astara",
        shortCode: "AST"
      },
      {
        name: "Bakı",
        shortCode: "BAK"
      },
      {
        name: "Babək",
        shortCode: "BAB"
      },
      {
        name: "Balakən",
        shortCode: "BAL"
      },
      {
        name: "Bərdə",
        shortCode: "BAR"
      },
      {
        name: "Beyləqan",
        shortCode: "BEY"
      },
      {
        name: "Biləsuvar",
        shortCode: "BIL"
      },
      {
        name: "Cəbrayıl",
        shortCode: "CAB"
      },
      {
        name: "Cəlilabad",
        shortCode: "CAL"
      },
      {
        name: "Culfa",
        shortCode: "CUL"
      },
      {
        name: "Daşkəsən",
        shortCode: "DAS"
      },
      {
        name: "Füzuli",
        shortCode: "FUZ"
      },
      {
        name: "Gədəbəy",
        shortCode: "GAD"
      },
      {
        name: "Goranboy",
        shortCode: "GOR"
      },
      {
        name: "Göyçay",
        shortCode: "GOY"
      },
      {
        name: "Göygöl",
        shortCode: "GYG"
      },
      {
        name: "Hacıqabul",
        shortCode: "HAC"
      },
      {
        name: "İmişli",
        shortCode: "IMI"
      },
      {
        name: "İsmayıllı",
        shortCode: "ISM"
      },
      {
        name: "Kəlbəcər",
        shortCode: "KAL"
      },
      {
        name: "Kǝngǝrli",
        shortCode: "KAN"
      },
      {
        name: "Kürdəmir",
        shortCode: "KUR"
      },
      {
        name: "Laçın",
        shortCode: "LAC"
      },
      {
        name: "Lənkəran",
        shortCode: "LAN"
      },
      {
        name: "Lerik",
        shortCode: "LER"
      },
      {
        name: "Masallı",
        shortCode: "MAS"
      },
      {
        name: "Neftçala",
        shortCode: "NEF"
      },
      {
        name: "Oğuz",
        shortCode: "OGU"
      },
      {
        name: "Ordubad",
        shortCode: "ORD"
      },
      {
        name: "Qəbələ",
        shortCode: "QAB"
      },
      {
        name: "Qax",
        shortCode: "QAX"
      },
      {
        name: "Qazax",
        shortCode: "QAZ"
      },
      {
        name: "Qobustan",
        shortCode: "QOB"
      },
      {
        name: "Quba",
        shortCode: "QBA"
      },
      {
        name: "Qubadli",
        shortCode: "QBI"
      },
      {
        name: "Qusar",
        shortCode: "QUS"
      },
      {
        name: "Saatlı",
        shortCode: "SAT"
      },
      {
        name: "Sabirabad",
        shortCode: "SAB"
      },
      {
        name: "Şabran",
        shortCode: "SBN"
      },
      {
        name: "Sədərək",
        shortCode: "SAD"
      },
      {
        name: "Şahbuz",
        shortCode: "SAH"
      },
      {
        name: "Şəki",
        shortCode: "SAK"
      },
      {
        name: "Salyan",
        shortCode: "SAL"
      },
      {
        name: "Şamaxı",
        shortCode: "SMI"
      },
      {
        name: "Şəmkir",
        shortCode: "SKR"
      },
      {
        name: "Samux",
        shortCode: "SMX"
      },
      {
        name: "Şərur",
        shortCode: "SAR"
      },
      {
        name: "Siyəzən",
        shortCode: "SIY"
      },
      {
        name: "Şuşa",
        shortCode: "SUS"
      },
      {
        name: "Tərtər",
        shortCode: "TAR"
      },
      {
        name: "Tovuz",
        shortCode: "TOV"
      },
      {
        name: "Ucar",
        shortCode: "UCA"
      },
      {
        name: "Xaçmaz",
        shortCode: "XAC"
      },
      {
        name: "Xızı",
        shortCode: "XIZ"
      },
      {
        name: "Xocalı",
        shortCode: "XCI"
      },
      {
        name: "Xocavənd",
        shortCode: "XVD"
      },
      {
        name: "Yardımlı",
        shortCode: "YAR"
      },
      {
        name: "Yevlax",
        shortCode: "YEV"
      },
      {
        name: "Zəngilan",
        shortCode: "ZAN"
      },
      {
        name: "Zaqatala",
        shortCode: "ZAQ"
      },
      {
        name: "Zərdab",
        shortCode: "ZAR"
      }
    ]
  },
  {
    countryName: "Bahamas",
    countryShortCode: "BS",
    regions: [
      {
        name: "Acklins Island",
        shortCode: "01"
      },
      {
        name: "Berry Islands",
        shortCode: "22"
      },
      {
        name: "Bimini",
        shortCode: "02"
      },
      {
        name: "Black Point",
        shortCode: "23"
      },
      {
        name: "Cat Island",
        shortCode: "03"
      },
      {
        name: "Central Abaco",
        shortCode: "24"
      },
      {
        name: "Crooked Island and Long Cay",
        shortCode: "28"
      },
      {
        name: "East Grand Bahama",
        shortCode: "29"
      },
      {
        name: "Exuma",
        shortCode: "04"
      },
      {
        name: "Freeport",
        shortCode: "05"
      },
      {
        name: "Fresh Creek",
        shortCode: "06"
      },
      {
        name: "Governor's Harbour",
        shortCode: "07"
      },
      {
        name: "Green Turtle Cay",
        shortCode: "08"
      },
      {
        name: "Harbour Island",
        shortCode: "09"
      },
      {
        name: "High Rock",
        shortCode: "10"
      },
      {
        name: "Inagua",
        shortCode: "11"
      },
      {
        name: "Kemps Bay",
        shortCode: "12"
      },
      {
        name: "Long Island",
        shortCode: "13"
      },
      {
        name: "Marsh Harbour",
        shortCode: "14"
      },
      {
        name: "Mayaguana",
        shortCode: "15"
      },
      {
        name: "Moore’s Island",
        shortCode: "40"
      },
      {
        name: "New Providence",
        shortCode: "16"
      },
      {
        name: "Nichollstown and Berry Islands",
        shortCode: "17"
      },
      {
        name: "North Abaco",
        shortCode: "42"
      },
      {
        name: "North Andros",
        shortCode: "41"
      },
      {
        name: "North Eleuthera",
        shortCode: "33"
      },
      {
        name: "Ragged Island",
        shortCode: "18"
      },
      {
        name: "Rock Sound",
        shortCode: "19"
      },
      {
        name: "San Salvador and Rum Cay",
        shortCode: "20"
      },
      {
        name: "Sandy Point",
        shortCode: "21"
      },
      {
        name: "South Abaco",
        shortCode: "35"
      },
      {
        name: "South Andros",
        shortCode: "36"
      },
      {
        name: "South Eleuthera",
        shortCode: "37"
      },
      {
        name: "West Grand Bahama",
        shortCode: "39"
      }
    ]
  },
  {
    countryName: "Bahrain",
    countryShortCode: "BH",
    regions: [
      {
        name: "Al Janūbīyah",
        shortCode: "14"
      },
      {
        name: "Al Manāmah",
        shortCode: "13"
      },
      {
        name: "Al Muḩarraq",
        shortCode: "15"
      },
      {
        name: "Al Wusţá",
        shortCode: "16"
      },
      {
        name: "Ash Shamālīyah",
        shortCode: "17"
      }
    ]
  },
  {
    countryName: "Bangladesh",
    countryShortCode: "BD",
    regions: [
      {
        name: "Barisal",
        shortCode: "A"
      },
      {
        name: "Chittagong",
        shortCode: "B"
      },
      {
        name: "Dhaka",
        shortCode: "C"
      },
      {
        name: "Khulna",
        shortCode: "D"
      },
      {
        name: "Mymensingh",
        shortCode: "M"
      },
      {
        name: "Rajshahi",
        shortCode: "E"
      },
      {
        name: "Rangpur",
        shortCode: "F"
      },
      {
        name: "Sylhet",
        shortCode: "G"
      }
    ]
  },
  {
    countryName: "Barbados",
    countryShortCode: "BB",
    regions: [
      {
        name: "Christ Church",
        shortCode: "01"
      },
      {
        name: "Saint Andrew",
        shortCode: "02"
      },
      {
        name: "Saint George",
        shortCode: "03"
      },
      {
        name: "Saint James",
        shortCode: "04"
      },
      {
        name: "Saint John",
        shortCode: "05"
      },
      {
        name: "Saint Joseph",
        shortCode: "06"
      },
      {
        name: "Saint Lucy",
        shortCode: "07"
      },
      {
        name: "Saint Michael",
        shortCode: "08"
      },
      {
        name: "Saint Peter",
        shortCode: "09"
      },
      {
        name: "Saint Philip",
        shortCode: "10"
      },
      {
        name: "Saint Thomas",
        shortCode: "11"
      }
    ]
  },
  {
    countryName: "Belarus",
    countryShortCode: "BY",
    regions: [
      {
        name: "Brest voblast",
        shortCode: "BR"
      },
      {
        name: "Gorod Minsk",
        shortCode: "HM"
      },
      {
        name: "Homiel voblast",
        shortCode: "HO"
      },
      {
        name: "Hrodna voblast",
        shortCode: "HR"
      },
      {
        name: "Mahilyow voblast",
        shortCode: "MA"
      },
      {
        name: "Minsk voblast",
        shortCode: "MI"
      },
      {
        name: "Vitsebsk voblast",
        shortCode: "VI"
      }
    ]
  },
  {
    countryName: "Belgium",
    countryShortCode: "BE",
    regions: [
      {
        name: "Bruxelles-Capitale",
        shortCode: "BRU"
      },
      {
        name: "Région Flamande",
        shortCode: "VLG"
      },
      {
        name: "Région Wallonië",
        shortCode: "WAL"
      }
    ]
  },
  {
    countryName: "Belize",
    countryShortCode: "BZ",
    regions: [
      {
        name: "Belize District",
        shortCode: "BZ"
      },
      {
        name: "Cayo District",
        shortCode: "CY"
      },
      {
        name: "Corozal District",
        shortCode: "CZL"
      },
      {
        name: "Orange Walk District",
        shortCode: "OW"
      },
      {
        name: "Stann Creek District",
        shortCode: "SC"
      },
      {
        name: "Toledo District",
        shortCode: "TOL"
      }
    ]
  },
  {
    countryName: "Benin",
    countryShortCode: "BJ",
    regions: [
      {
        name: "Alibori",
        shortCode: "AL"
      },
      {
        name: "Atakora",
        shortCode: "AK"
      },
      {
        name: "Atlantique",
        shortCode: "AQ"
      },
      {
        name: "Borgou",
        shortCode: "BO"
      },
      {
        name: "Collines Department",
        shortCode: "CO"
      },
      {
        name: "Donga",
        shortCode: "DO"
      },
      {
        name: "Kouffo",
        shortCode: "KO"
      },
      {
        name: "Littoral Department",
        shortCode: "LI"
      },
      {
        name: "Mono Department",
        shortCode: "MO"
      },
      {
        name: "Ouémé",
        shortCode: "OU"
      },
      {
        name: "Plateau",
        shortCode: "PL"
      },
      {
        name: "Zou",
        shortCode: "ZO"
      }
    ]
  },
  {
    countryName: "Bermuda",
    countryShortCode: "BM",
    regions: [
      {
        name: "City of Hamilton",
        shortCode: "03"
      },
      {
        name: "Devonshire Parish",
        shortCode: "01"
      },
      {
        name: "Hamilton Parish",
        shortCode: "02"
      },
      {
        name: "Paget Parish",
        shortCode: "04"
      },
      {
        name: "Pembroke Parish",
        shortCode: "05"
      },
      {
        name: "Sandys Parish",
        shortCode: "08"
      },
      {
        name: "Smith's Parish",
        shortCode: "09"
      },
      {
        name: "Southampton Parish",
        shortCode: "10"
      },
      {
        name: "St. George's Parish",
        shortCode: "07"
      },
      {
        name: "Town of St. George",
        shortCode: "06"
      },
      {
        name: "Warwick Parish",
        shortCode: "11"
      }
    ]
  },
  {
    countryName: "Bhutan",
    countryShortCode: "BT",
    regions: [
      {
        name: "Bumthang",
        shortCode: "33"
      },
      {
        name: "Chhukha",
        shortCode: "12"
      },
      {
        name: "Dagana",
        shortCode: "22"
      },
      {
        name: "Gasa",
        shortCode: "GA"
      },
      {
        name: "Haa",
        shortCode: "13"
      },
      {
        name: "Lhuntse",
        shortCode: "44"
      },
      {
        name: "Mongar",
        shortCode: "42"
      },
      {
        name: "Paro",
        shortCode: "11"
      },
      {
        name: "Pemagatshel",
        shortCode: "43"
      },
      {
        name: "Punakha",
        shortCode: "23"
      },
      {
        name: "Samdrup Jongkhar",
        shortCode: "45"
      },
      {
        name: "Samtse",
        shortCode: "14"
      },
      {
        name: "Sarpang",
        shortCode: "31"
      },
      {
        name: "Thimphu",
        shortCode: "15"
      },
      {
        name: "Trashigang",
        shortCode: "41"
      },
      {
        name: "Trashiyangtse",
        shortCode: "TY"
      },
      {
        name: "Trongsa",
        shortCode: "32"
      },
      {
        name: "Tsirang",
        shortCode: "21"
      },
      {
        name: "Wangdue Phodrang",
        shortCode: "24"
      },
      {
        name: "Zhemgang",
        shortCode: "34"
      }
    ]
  },
  {
    countryName: "Bolivia",
    countryShortCode: "BO",
    regions: [
      {
        name: "Beni",
        shortCode: "B"
      },
      {
        name: "Chuquisaca",
        shortCode: "H"
      },
      {
        name: "Cochabamba",
        shortCode: "C"
      },
      {
        name: "La Paz",
        shortCode: "L"
      },
      {
        name: "Oruro",
        shortCode: "O"
      },
      {
        name: "Pando",
        shortCode: "N"
      },
      {
        name: "Potosí",
        shortCode: "P"
      },
      {
        name: "Santa Cruz",
        shortCode: "S"
      },
      {
        name: "Tarija",
        shortCode: "T"
      }
    ]
  },
  {
    countryName: "Bonaire, Sint Eustatius and Saba",
    countryShortCode: "BQ",
    regions: [
      {
        name: "Bonaire",
        shortCode: "BO"
      },
      {
        name: "Saba Isand",
        shortCode: "SA"
      },
      {
        name: "Sint Eustatius",
        shortCode: "SE"
      }
    ]
  },
  {
    countryName: "Bosnia and Herzegovina",
    countryShortCode: "BA",
    regions: [
      {
        name: "Brčko Distrikt",
        shortCode: "BRC"
      },
      {
        name: "Federacija Bosne i Hercegovine",
        shortCode: "BIH"
      },
      {
        name: "Republika Srpska",
        shortCode: "SRP"
      }
    ]
  },
  {
    countryName: "Botswana",
    countryShortCode: "BW",
    regions: [
      {
        name: "Central",
        shortCode: "CE"
      },
      {
        name: "Ghanzi",
        shortCode: "GH"
      },
      {
        name: "Kgalagadi",
        shortCode: "KG"
      },
      {
        name: "Kgatleng",
        shortCode: "KL"
      },
      {
        name: "Kweneng",
        shortCode: "KW"
      },
      {
        name: "North West",
        shortCode: "NW"
      },
      {
        name: "North-East",
        shortCode: "NE"
      },
      {
        name: "South East",
        shortCode: "SE"
      },
      {
        name: "Southern",
        shortCode: "SO"
      }
    ]
  },
  {
    countryName: "Bouvet Island",
    countryShortCode: "BV",
    regions: [
      {
        name: "Bouvet Island",
        shortCode: "BV"
      }
    ]
  },
  {
    countryName: "Brazil",
    countryShortCode: "BR",
    regions: [
      {
        name: "Acre",
        shortCode: "AC"
      },
      {
        name: "Alagoas",
        shortCode: "AL"
      },
      {
        name: "Amapá",
        shortCode: "AP"
      },
      {
        name: "Amazonas",
        shortCode: "AM"
      },
      {
        name: "Bahia",
        shortCode: "BA"
      },
      {
        name: "Ceará",
        shortCode: "CE"
      },
      {
        name: "Distrito Federal",
        shortCode: "DF"
      },
      {
        name: "Espírito Santo",
        shortCode: "ES"
      },
      {
        name: "Goiás",
        shortCode: "GO"
      },
      {
        name: "Maranhão",
        shortCode: "MA"
      },
      {
        name: "Mato Grosso",
        shortCode: "MT"
      },
      {
        name: "Mato Grosso do Sul",
        shortCode: "MS"
      },
      {
        name: "Minas Gerais",
        shortCode: "MG"
      },
      {
        name: "Pará",
        shortCode: "PA"
      },
      {
        name: "Paraíba",
        shortCode: "PB"
      },
      {
        name: "Paraná",
        shortCode: "PR"
      },
      {
        name: "Pernambuco",
        shortCode: "PE"
      },
      {
        name: "Piauí",
        shortCode: "PI"
      },
      {
        name: "Rio de Janeiro",
        shortCode: "RJ"
      },
      {
        name: "Rio Grande do Norte",
        shortCode: "RN"
      },
      {
        name: "Rio Grande do Sul",
        shortCode: "RS"
      },
      {
        name: "Rondônia",
        shortCode: "RO"
      },
      {
        name: "Roraima",
        shortCode: "RR"
      },
      {
        name: "Santa Catarina",
        shortCode: "SC"
      },
      {
        name: "São Paulo",
        shortCode: "SP"
      },
      {
        name: "Sergipe",
        shortCode: "SE"
      },
      {
        name: "Tocantins",
        shortCode: "TO"
      }
    ]
  },
  {
    countryName: "British Indian Ocean Territory",
    countryShortCode: "IO",
    regions: [
      {
        name: "British Indian Ocean Territory",
        shortCode: "IO"
      }
    ]
  },
  {
    countryName: "Brunei Darussalam",
    countryShortCode: "BN",
    regions: [
      {
        name: "Belait",
        shortCode: "BE"
      },
      {
        name: "Brunei Muara",
        shortCode: "BM"
      },
      {
        name: "Temburong",
        shortCode: "TE"
      },
      {
        name: "Tutong",
        shortCode: "TU"
      }
    ]
  },
  {
    countryName: "Bulgaria",
    countryShortCode: "BG",
    regions: [
      {
        name: "Blagoevgrad",
        shortCode: "01"
      },
      {
        name: "Burgas",
        shortCode: "02"
      },
      {
        name: "Dobrich",
        shortCode: "08"
      },
      {
        name: "Gabrovo",
        shortCode: "07"
      },
      {
        name: "Jambol",
        shortCode: "28"
      },
      {
        name: "Khaskovo",
        shortCode: "26"
      },
      {
        name: "Kjustendil",
        shortCode: "10"
      },
      {
        name: "Kurdzhali",
        shortCode: "09"
      },
      {
        name: "Lovech",
        shortCode: "11"
      },
      {
        name: "Montana",
        shortCode: "12"
      },
      {
        name: "Pazardzhik",
        shortCode: "13"
      },
      {
        name: "Pernik",
        shortCode: "14"
      },
      {
        name: "Pleven",
        shortCode: "15"
      },
      {
        name: "Plovdiv",
        shortCode: "16"
      },
      {
        name: "Razgrad",
        shortCode: "17"
      },
      {
        name: "Ruse",
        shortCode: "18"
      },
      {
        name: "Shumen",
        shortCode: "27"
      },
      {
        name: "Silistra",
        shortCode: "19"
      },
      {
        name: "Sliven",
        shortCode: "20"
      },
      {
        name: "Smoljan",
        shortCode: "21"
      },
      {
        name: "Sofija",
        shortCode: "23"
      },
      {
        name: "Sofija-Grad",
        shortCode: "22"
      },
      {
        name: "Stara Zagora",
        shortCode: "24"
      },
      {
        name: "Turgovishhe",
        shortCode: "25"
      },
      {
        name: "Varna",
        shortCode: "03"
      },
      {
        name: "Veliko Turnovo",
        shortCode: "04"
      },
      {
        name: "Vidin",
        shortCode: "05"
      },
      {
        name: "Vraca",
        shortCode: "06"
      }
    ]
  },
  {
    countryName: "Burkina Faso",
    countryShortCode: "BF",
    regions: [
      {
        name: "Balé",
        shortCode: "BAL"
      },
      {
        name: "Bam/Lake Bam",
        shortCode: "BAM"
      },
      {
        name: "Banwa Province",
        shortCode: "BAN"
      },
      {
        name: "Bazèga",
        shortCode: "BAZ"
      },
      {
        name: "Bougouriba",
        shortCode: "BGR"
      },
      {
        name: "Boulgou Province",
        shortCode: "BLG"
      },
      {
        name: "Boulkiemdé",
        shortCode: "BLK"
      },
      {
        name: "Comoé/Komoe",
        shortCode: "COM"
      },
      {
        name: "Ganzourgou Province",
        shortCode: "GAN"
      },
      {
        name: "Gnagna",
        shortCode: "GNA"
      },
      {
        name: "Gourma Province",
        shortCode: "GOU"
      },
      {
        name: "Houet",
        shortCode: "HOU"
      },
      {
        name: "Ioba",
        shortCode: "IOB"
      },
      {
        name: "Kadiogo",
        shortCode: "KAD"
      },
      {
        name: "Kénédougou",
        shortCode: "KEN"
      },
      {
        name: "Komondjari",
        shortCode: "KMD"
      },
      {
        name: "Kompienga",
        shortCode: "KMP"
      },
      {
        name: "Kossi Province",
        shortCode: "KOS"
      },
      {
        name: "Koulpélogo",
        shortCode: "KOP"
      },
      {
        name: "Kouritenga",
        shortCode: "KOT"
      },
      {
        name: "Kourwéogo",
        shortCode: "KOW"
      },
      {
        name: "Léraba",
        shortCode: "LER"
      },
      {
        name: "Loroum",
        shortCode: "LOR"
      },
      {
        name: "Mouhoun",
        shortCode: "MOU"
      },
      {
        name: "Namentenga",
        shortCode: "NAM"
      },
      {
        name: "Naouri/Nahouri",
        shortCode: "NAO"
      },
      {
        name: "Nayala",
        shortCode: "NAY"
      },
      {
        name: "Noumbiel",
        shortCode: "NOU"
      },
      {
        name: "Oubritenga",
        shortCode: "OUB"
      },
      {
        name: "Oudalan",
        shortCode: "OUD"
      },
      {
        name: "Passoré",
        shortCode: "PAS"
      },
      {
        name: "Poni",
        shortCode: "PON"
      },
      {
        name: "Sanguié",
        shortCode: "SNG"
      },
      {
        name: "Sanmatenga",
        shortCode: "SMT"
      },
      {
        name: "Séno",
        shortCode: "SEN"
      },
      {
        name: "Sissili",
        shortCode: "SIS"
      },
      {
        name: "Soum",
        shortCode: "SOM"
      },
      {
        name: "Sourou",
        shortCode: "SOR"
      },
      {
        name: "Tapoa",
        shortCode: "TAP"
      },
      {
        name: "Tui/Tuy",
        shortCode: "TUI"
      },
      {
        name: "Yagha",
        shortCode: "YAG"
      },
      {
        name: "Yatenga",
        shortCode: "YAT"
      },
      {
        name: "Ziro",
        shortCode: "ZIR"
      },
      {
        name: "Zondoma",
        shortCode: "ZON"
      },
      {
        name: "Zoundwéogo",
        shortCode: "ZOU"
      }
    ]
  },
  {
    countryName: "Burundi",
    countryShortCode: "BI",
    regions: [
      {
        name: "Bubanza",
        shortCode: "BB"
      },
      {
        name: "Bujumbura Mairie",
        shortCode: "BM"
      },
      {
        name: "Bujumbura Rural",
        shortCode: "BL"
      },
      {
        name: "Bururi",
        shortCode: "BR"
      },
      {
        name: "Cankuzo",
        shortCode: "CA"
      },
      {
        name: "Cibitoke",
        shortCode: "CI"
      },
      {
        name: "Gitega",
        shortCode: "GI"
      },
      {
        name: "Karuzi",
        shortCode: "KR"
      },
      {
        name: "Kayanza",
        shortCode: "KY"
      },
      {
        name: "Kirundo",
        shortCode: "KI"
      },
      {
        name: "Makamba",
        shortCode: "MA"
      },
      {
        name: "Muramvya",
        shortCode: "MU"
      },
      {
        name: "Muyinga",
        shortCode: "MY"
      },
      {
        name: "Mwaro",
        shortCode: "MW"
      },
      {
        name: "Ngozi",
        shortCode: "NG"
      },
      {
        name: "Rutana",
        shortCode: "RT"
      },
      {
        name: "Ruyigi",
        shortCode: "RY"
      }
    ]
  },
  {
    countryName: "Cambodia",
    countryShortCode: "KH",
    regions: [
      {
        name: "Baat Dambang",
        shortCode: "2"
      },
      {
        name: "Banteay Mean Chey",
        shortCode: "1"
      },
      {
        name: "Kampong Chaam",
        shortCode: "3"
      },
      {
        name: "Kampong Chhnang",
        shortCode: "4"
      },
      {
        name: "Kampong Spueu",
        shortCode: "5"
      },
      {
        name: "Kampong Thum",
        shortCode: "6"
      },
      {
        name: "Kampot",
        shortCode: "7"
      },
      {
        name: "Kandaal",
        shortCode: "8"
      },
      {
        name: "Kaoh Kong",
        shortCode: "9"
      },
      {
        name: "Kracheh",
        shortCode: "10"
      },
      {
        name: "Krong Kaeb",
        shortCode: "23"
      },
      {
        name: "Krong Pailin",
        shortCode: "24"
      },
      {
        name: "Krong Preah Sihanouk",
        shortCode: "18"
      },
      {
        name: "Mondol Kiri",
        shortCode: "11"
      },
      {
        name: "Otdar Mean Chey",
        shortCode: "22"
      },
      {
        name: "Phnom Penh",
        shortCode: "12"
      },
      {
        name: "Pousaat",
        shortCode: "15"
      },
      {
        name: "Preah Vihear",
        shortCode: "13"
      },
      {
        name: "Prey Veaeng",
        shortCode: "14"
      },
      {
        name: "Rotanah Kiri",
        shortCode: "16"
      },
      {
        name: "Siem Reab",
        shortCode: "17"
      },
      {
        name: "Stueng Treng",
        shortCode: "19"
      },
      {
        name: "Svaay Rieng",
        shortCode: "20"
      },
      {
        name: "Taakaev",
        shortCode: "21"
      },
      {
        name: "Tbong Khmum",
        shortCode: "25"
      }
    ]
  },
  {
    countryName: "Cameroon",
    countryShortCode: "CM",
    regions: [
      {
        name: "Adamaoua",
        shortCode: "AD"
      },
      {
        name: "Centre",
        shortCode: "CE"
      },
      {
        name: "Est",
        shortCode: "ES"
      },
      {
        name: "Extrême-Nord",
        shortCode: "EN"
      },
      {
        name: "Littoral",
        shortCode: "LT"
      },
      {
        name: "Nord",
        shortCode: "NO"
      },
      {
        name: "Nord-Ouest",
        shortCode: "NW"
      },
      {
        name: "Ouest",
        shortCode: "OU"
      },
      {
        name: "Sud",
        shortCode: "SU"
      },
      {
        name: "Sud-Ouest",
        shortCode: "SW"
      }
    ]
  },
  {
    countryName: "Canada",
    countryShortCode: "CA",
    regions: [
      {
        name: "Alberta",
        shortCode: "AB"
      },
      {
        name: "British Columbia",
        shortCode: "BC"
      },
      {
        name: "Manitoba",
        shortCode: "MB"
      },
      {
        name: "New Brunswick",
        shortCode: "NB"
      },
      {
        name: "Newfoundland and Labrador",
        shortCode: "NL"
      },
      {
        name: "Northwest Territories",
        shortCode: "NT"
      },
      {
        name: "Nova Scotia",
        shortCode: "NS"
      },
      {
        name: "Nunavut",
        shortCode: "NU"
      },
      {
        name: "Ontario",
        shortCode: "ON"
      },
      {
        name: "Prince Edward Island",
        shortCode: "PE"
      },
      {
        name: "Quebec",
        shortCode: "QC"
      },
      {
        name: "Saskatchewan",
        shortCode: "SK"
      },
      {
        name: "Yukon",
        shortCode: "YT"
      }
    ]
  },
  {
    countryName: "Cape Verde",
    countryShortCode: "CV",
    regions: [
      {
        name: "Boa Vista",
        shortCode: "BV"
      },
      {
        name: "Brava",
        shortCode: "BR"
      },
      {
        name: "Calheta de São Miguel",
        shortCode: "CS"
      },
      {
        name: "Maio",
        shortCode: "MA"
      },
      {
        name: "Mosteiros",
        shortCode: "MO"
      },
      {
        name: "Paúl",
        shortCode: "PA"
      },
      {
        name: "Porto Novo",
        shortCode: "PN"
      },
      {
        name: "Praia",
        shortCode: "PR"
      },
      {
        name: "Ribeira Brava",
        shortCode: "RB"
      },
      {
        name: "Ribeira Grande",
        shortCode: "RG"
      },
      {
        name: "Sal",
        shortCode: "SL"
      },
      {
        name: "Santa Catarina",
        shortCode: "CA"
      },
      {
        name: "Santa Cruz",
        shortCode: "CR"
      },
      {
        name: "São Domingos",
        shortCode: "SD"
      },
      {
        name: "São Filipe",
        shortCode: "SF"
      },
      {
        name: "São Nicolau",
        shortCode: "SN"
      },
      {
        name: "São Vicente",
        shortCode: "SV"
      },
      {
        name: "Tarrafal",
        shortCode: "TA"
      },
      {
        name: "Tarrafal de São Nicolau",
        shortCode: "TS"
      }
    ]
  },
  {
    countryName: "Cayman Islands",
    countryShortCode: "KY",
    regions: [
      {
        name: "Creek"
      },
      {
        name: "Eastern"
      },
      {
        name: "Midland"
      },
      {
        name: "South Town"
      },
      {
        name: "Spot Bay"
      },
      {
        name: "Stake Bay"
      },
      {
        name: "West End"
      },
      {
        name: "Western"
      }
    ]
  },
  {
    countryName: "Central African Republic",
    countryShortCode: "CF",
    regions: [
      {
        name: "Bamingui-Bangoran",
        shortCode: "BB"
      },
      {
        name: "Bangui",
        shortCode: "BGF"
      },
      {
        name: "Basse-Kotto",
        shortCode: "BK"
      },
      {
        name: "Haute-Kotto",
        shortCode: "HK"
      },
      {
        name: "Haut-Mbomou",
        shortCode: "HM"
      },
      {
        name: "Kémo",
        shortCode: "KG"
      },
      {
        name: "Lobaye",
        shortCode: "LB"
      },
      {
        name: "Mambéré-Kadéï",
        shortCode: "HS"
      },
      {
        name: "Mbomou",
        shortCode: "MB"
      },
      {
        name: "Nana-Grebizi",
        shortCode: "10"
      },
      {
        name: "Nana-Mambéré",
        shortCode: "NM"
      },
      {
        name: "Ombella-M'Poko",
        shortCode: "MP"
      },
      {
        name: "Ouaka",
        shortCode: "UK"
      },
      {
        name: "Ouham",
        shortCode: "AC"
      },
      {
        name: "Ouham Péndé",
        shortCode: "OP"
      },
      {
        name: "Sangha-Mbaéré",
        shortCode: "SE"
      },
      {
        name: "Vakaga",
        shortCode: "VK"
      }
    ]
  },
  {
    countryName: "Chad",
    countryShortCode: "TD",
    regions: [
      {
        name: "Bahr el Ghazal",
        shortCode: "BG"
      },
      {
        name: "Batha",
        shortCode: "BA"
      },
      {
        name: "Borkou",
        shortCode: "BO"
      },
      {
        name: "Chari-Baguirmi",
        shortCode: "CB"
      },
      {
        name: "Ennedi-Est",
        shortCode: "EE"
      },
      {
        name: "Ennedi-Ouest",
        shortCode: "EO"
      },
      {
        name: "Guéra",
        shortCode: "GR"
      },
      {
        name: "Hadjer Lamis",
        shortCode: "HL"
      },
      {
        name: "Kanem",
        shortCode: "KA"
      },
      {
        name: "Lac",
        shortCode: "LC"
      },
      {
        name: "Logone Occidental",
        shortCode: "LO"
      },
      {
        name: "Logone Oriental",
        shortCode: "LR"
      },
      {
        name: "Mondoul",
        shortCode: "MA"
      },
      {
        name: "Mayo-Kébbi-Est",
        shortCode: "ME"
      },
      {
        name: "Moyen-Chari",
        shortCode: "MC"
      },
      {
        name: "Ouaddai",
        shortCode: "OD"
      },
      {
        name: "Salamat",
        shortCode: "SA"
      },
      {
        name: "Sila",
        shortCode: "SI"
      },
      {
        name: "Tandjilé",
        shortCode: "TA"
      },
      {
        name: "Tibesti",
        shortCode: "TI"
      },
      {
        name: "Ville de Ndjamena",
        shortCode: "ND"
      },
      {
        name: "Wadi Fira",
        shortCode: "WF"
      }
    ]
  },
  {
    countryName: "Chile",
    countryShortCode: "CL",
    regions: [
      {
        name: "Aisén del General Carlos Ibáñez del Campo",
        shortCode: "AI"
      },
      {
        name: "Antofagasta",
        shortCode: "AN"
      },
      {
        name: "Araucanía",
        shortCode: "AR"
      },
      {
        name: "Arica y Parinacota",
        shortCode: "AP"
      },
      {
        name: "Atacama",
        shortCode: "AT"
      },
      {
        name: "Bío-Bío",
        shortCode: "BI"
      },
      {
        name: "Coquimbo",
        shortCode: "CO"
      },
      {
        name: "Libertador General Bernardo O'Higgins",
        shortCode: "LI"
      },
      {
        name: "Los Lagos",
        shortCode: "LL"
      },
      {
        name: "Los Ríos",
        shortCode: "LR"
      },
      {
        name: "Magallanes y Antartica Chilena",
        shortCode: "MA"
      },
      {
        name: "Marga-Marga",
        shortCode: ""
      },
      {
        name: "Maule",
        shortCode: "ML"
      },
      {
        name: "Ñuble",
        shortCode: "NB"
      },
      {
        name: "Región Metropolitana de Santiago",
        shortCode: "RM"
      },
      {
        name: "Tarapacá",
        shortCode: "TA"
      },
      {
        name: "Valparaíso",
        shortCode: "VS"
      }
    ]
  },
  {
    countryName: "China",
    countryShortCode: "CN",
    regions: [
      {
        name: "Anhui",
        shortCode: "34"
      },
      {
        name: "Beijing",
        shortCode: "11"
      },
      {
        name: "Chongqing",
        shortCode: "50"
      },
      {
        name: "Fujian",
        shortCode: "35"
      },
      {
        name: "Gansu",
        shortCode: "62"
      },
      {
        name: "Guangdong",
        shortCode: "44"
      },
      {
        name: "Guangxi",
        shortCode: "45"
      },
      {
        name: "Guizhou",
        shortCode: "52"
      },
      {
        name: "Hainan",
        shortCode: "46"
      },
      {
        name: "Hebei",
        shortCode: "13"
      },
      {
        name: "Heilongjiang",
        shortCode: "23"
      },
      {
        name: "Henan",
        shortCode: "41"
      },
      {
        name: "Hong Kong",
        shortCode: "91"
      },
      {
        name: "Hubei",
        shortCode: "42"
      },
      {
        name: "Hunan",
        shortCode: "43"
      },
      {
        name: "Inner Mongolia",
        shortCode: "15"
      },
      {
        name: "Jiangsu",
        shortCode: "32"
      },
      {
        name: "Jiangxi",
        shortCode: "36"
      },
      {
        name: "Jilin",
        shortCode: "22"
      },
      {
        name: "Liaoning",
        shortCode: "21"
      },
      {
        name: "Macau",
        shortCode: "92"
      },
      {
        name: "Ningxia",
        shortCode: "64"
      },
      {
        name: "Qinghai",
        shortCode: "63"
      },
      {
        name: "Shaanxi",
        shortCode: "61"
      },
      {
        name: "Shandong",
        shortCode: "37"
      },
      {
        name: "Shanghai",
        shortCode: "31"
      },
      {
        name: "Shanxi",
        shortCode: "14"
      },
      {
        name: "Sichuan",
        shortCode: "51"
      },
      {
        name: "Tianjin",
        shortCode: "12"
      },
      {
        name: "Tibet",
        shortCode: "54"
      },
      {
        name: "Xinjiang",
        shortCode: "65"
      },
      {
        name: "Yunnan",
        shortCode: "53"
      },
      {
        name: "Zhejiang",
        shortCode: "33"
      }
    ]
  },
  {
    countryName: "Christmas Island",
    countryShortCode: "CX",
    regions: [
      {
        name: "Christmas Island",
        shortCode: "CX"
      }
    ]
  },
  {
    countryName: "Cocos (Keeling) Islands",
    countryShortCode: "CC",
    regions: [
      {
        name: "Direction Island",
        shortCode: "DI"
      },
      {
        name: "Home Island",
        shortCode: "HM"
      },
      {
        name: "Horsburgh Island",
        shortCode: "HR"
      },
      {
        name: "North Keeling Island",
        shortCode: "NK"
      },
      {
        name: "South Island",
        shortCode: "SI"
      },
      {
        name: "West Island",
        shortCode: "WI"
      }
    ]
  },
  {
    countryName: "Colombia",
    countryShortCode: "CO",
    regions: [
      {
        name: "Amazonas",
        shortCode: "AMA"
      },
      {
        name: "Antioquia",
        shortCode: "ANT"
      },
      {
        name: "Arauca",
        shortCode: "ARA"
      },
      {
        name: "Archipiélago de San Andrés",
        shortCode: "SAP"
      },
      {
        name: "Atlántico",
        shortCode: "ATL"
      },
      {
        name: "Bogotá D.C.",
        shortCode: "DC"
      },
      {
        name: "Bolívar",
        shortCode: "BOL"
      },
      {
        name: "Boyacá",
        shortCode: "BOY"
      },
      {
        name: "Caldas",
        shortCode: "CAL"
      },
      {
        name: "Caquetá",
        shortCode: "CAQ"
      },
      {
        name: "Casanare",
        shortCode: "CAS"
      },
      {
        name: "Cauca",
        shortCode: "CAU"
      },
      {
        name: "Cesar",
        shortCode: "CES"
      },
      {
        name: "Chocó",
        shortCode: "CHO"
      },
      {
        name: "Córdoba",
        shortCode: "COR"
      },
      {
        name: "Cundinamarca",
        shortCode: "CUN"
      },
      {
        name: "Guainía",
        shortCode: "GUA"
      },
      {
        name: "Guaviare",
        shortCode: "GUV"
      },
      {
        name: "Huila",
        shortCode: "HUI"
      },
      {
        name: "La Guajira",
        shortCode: "LAG"
      },
      {
        name: "Magdalena",
        shortCode: "MAG"
      },
      {
        name: "Meta",
        shortCode: "MET"
      },
      {
        name: "Nariño",
        shortCode: "NAR"
      },
      {
        name: "Norte de Santander",
        shortCode: "NSA"
      },
      {
        name: "Putumayo",
        shortCode: "PUT"
      },
      {
        name: "Quindío",
        shortCode: "QUI"
      },
      {
        name: "Risaralda",
        shortCode: "RIS"
      },
      {
        name: "Santander",
        shortCode: "SAN"
      },
      {
        name: "Sucre",
        shortCode: "SUC"
      },
      {
        name: "Tolima",
        shortCode: "TOL"
      },
      {
        name: "Valle del Cauca",
        shortCode: "VAC"
      },
      {
        name: "Vaupés",
        shortCode: "VAU"
      },
      {
        name: "Vichada",
        shortCode: "VID"
      }
    ]
  },
  {
    countryName: "Comoros",
    countryShortCode: "KM",
    regions: [
      {
        name: "Andjazîdja",
        shortCode: "G"
      },
      {
        name: "Andjouân",
        shortCode: "A"
      },
      {
        name: "Moûhîlî",
        shortCode: "M"
      }
    ]
  },
  {
    countryName: "Congo, Republic of the (Brazzaville)",
    countryShortCode: "CG",
    regions: [
      {
        name: "Bouenza",
        shortCode: "11"
      },
      {
        name: "Brazzaville",
        shortCode: "BZV"
      },
      {
        name: "Cuvette",
        shortCode: "8"
      },
      {
        name: "Cuvette-Ouest",
        shortCode: "15"
      },
      {
        name: "Kouilou",
        shortCode: "5"
      },
      {
        name: "Lékoumou",
        shortCode: "2"
      },
      {
        name: "Likouala",
        shortCode: "7"
      },
      {
        name: "Niari",
        shortCode: "9"
      },
      {
        name: "Plateaux",
        shortCode: "14"
      },
      {
        name: "Pointe-Noire",
        shortCode: "16"
      },
      {
        name: "Pool",
        shortCode: "12"
      },
      {
        name: "Sangha",
        shortCode: "13"
      }
    ]
  },
  {
    countryName: "Congo, the Democratic Republic of the (Kinshasa)",
    countryShortCode: "CD",
    regions: [
      {
        name: "Bandundu",
        shortCode: "BN"
      },
      {
        name: "Bas-Congo",
        shortCode: "BC"
      },
      {
        name: "Équateur",
        shortCode: "EQ"
      },
      {
        name: "Kasaï-Occidental",
        shortCode: "KE"
      },
      {
        name: "Kasaï-Oriental",
        shortCode: "KW"
      },
      {
        name: "Katanga",
        shortCode: "KA"
      },
      {
        name: "Kinshasa",
        shortCode: "KN"
      },
      {
        name: "Maniema",
        shortCode: "MA"
      },
      {
        name: "Nord-Kivu",
        shortCode: "NK"
      },
      {
        name: "Orientale",
        shortCode: "OR"
      },
      {
        name: "Sud-Kivu",
        shortCode: "SK"
      }
    ]
  },
  {
    countryName: "Cook Islands",
    countryShortCode: "CK",
    regions: [
      {
        name: "Aitutaki"
      },
      {
        name: "Atiu"
      },
      {
        name: "Avarua"
      },
      {
        name: "Mangaia"
      },
      {
        name: "Manihiki"
      },
      {
        name: "Ma'uke"
      },
      {
        name: "Mitiaro"
      },
      {
        name: "Nassau"
      },
      {
        name: "Palmerston"
      },
      {
        name: "Penrhyn"
      },
      {
        name: "Pukapuka"
      },
      {
        name: "Rakahanga"
      }
    ]
  },
  {
    countryName: "Costa Rica",
    countryShortCode: "CR",
    regions: [
      {
        name: "Alajuela",
        shortCode: "2"
      },
      {
        name: "Cartago",
        shortCode: "3"
      },
      {
        name: "Guanacaste",
        shortCode: "5"
      },
      {
        name: "Heredia",
        shortCode: "4"
      },
      {
        name: "Limón",
        shortCode: "7"
      },
      {
        name: "Puntarenas",
        shortCode: "6"
      },
      {
        name: "San José",
        shortCode: "1"
      }
    ]
  },
  {
    countryName: "Côte d'Ivoire, Republic of",
    countryShortCode: "CI",
    regions: [
      {
        name: "Agnéby",
        shortCode: "16"
      },
      {
        name: "Bafing",
        shortCode: "17"
      },
      {
        name: "Bas-Sassandra",
        shortCode: "09"
      },
      {
        name: "Denguélé",
        shortCode: "10"
      },
      {
        name: "Dix-Huit Montagnes",
        shortCode: "06"
      },
      {
        name: "Fromager",
        shortCode: "18"
      },
      {
        name: "Haut-Sassandra",
        shortCode: "02"
      },
      {
        name: "Lacs",
        shortCode: "07"
      },
      {
        name: "Lagunes",
        shortCode: "01"
      },
      {
        name: "Marahoué",
        shortCode: "12"
      },
      {
        name: "Moyen-Cavally",
        shortCode: "19"
      },
      {
        name: "Moyen-Comoé",
        shortCode: "05"
      },
      {
        name: "N'zi-Comoé",
        shortCode: "11"
      },
      {
        name: "Savanes",
        shortCode: "03"
      },
      {
        name: "Sud-Bandama",
        shortCode: "15"
      },
      {
        name: "Sud-Comoé",
        shortCode: "13"
      },
      {
        name: "Vallée du Bandama",
        shortCode: "04"
      },
      {
        name: "Worodougou",
        shortCode: "14"
      },
      {
        name: "Zanzan",
        shortCode: "08"
      }
    ]
  },
  {
    countryName: "Croatia",
    countryShortCode: "HR",
    regions: [
      {
        name: "Bjelovarsko-Bilogorska Županija",
        shortCode: "07"
      },
      {
        name: "Brodsko-Posavska Županija",
        shortCode: "12"
      },
      {
        name: "Dubrovačko-Neretvanska Županija",
        shortCode: "19"
      },
      {
        name: "Grad Zagreb",
        shortCode: "21"
      },
      {
        name: "Istarska Županija",
        shortCode: "18"
      },
      {
        name: "Karlovačka Županija",
        shortCode: "04"
      },
      {
        name: "Koprivničko-Krizevačka Županija",
        shortCode: "06"
      },
      {
        name: "Krapinsko-Zagorska Županija",
        shortCode: "02"
      },
      {
        name: "Ličko-Senjska Županija",
        shortCode: "09"
      },
      {
        name: "Međimurska Županija",
        shortCode: "20"
      },
      {
        name: "Osječko-Baranjska Županija",
        shortCode: "14"
      },
      {
        name: "Požeško-Slavonska Županija",
        shortCode: "11"
      },
      {
        name: "Primorsko-Goranska Županija",
        shortCode: "08"
      },
      {
        name: "Sisačko-Moslavačka Županija",
        shortCode: "03"
      },
      {
        name: "Splitsko-Dalmatinska Županija",
        shortCode: "17"
      },
      {
        name: "Sibensko-Kninska Županija",
        shortCode: "15"
      },
      {
        name: "Varaždinska Županija",
        shortCode: "05"
      },
      {
        name: "Virovitičko-Podravska Županija",
        shortCode: "10"
      },
      {
        name: "Vukovarsko-Srijemska Županija",
        shortCode: "16"
      },
      {
        name: "Zadarska Županija",
        shortCode: "13"
      },
      {
        name: "Zagrebacka Zupanija",
        shortCode: "01"
      }
    ]
  },
  {
    countryName: "Cuba",
    countryShortCode: "CU",
    regions: [
      {
        name: "Artemisa",
        shortCode: "15"
      },
      {
        name: "Camagüey",
        shortCode: "09"
      },
      {
        name: "Ciego de Ávila",
        shortCode: "08"
      },
      {
        name: "Cienfuegos",
        shortCode: "06"
      },
      {
        name: "Granma",
        shortCode: "12"
      },
      {
        name: "Guantánamo",
        shortCode: "14"
      },
      {
        name: "Holguín",
        shortCode: "11"
      },
      {
        name: "Isla de la Juventud",
        shortCode: "99"
      },
      {
        name: "La Habana",
        shortCode: "03"
      },
      {
        name: "Las Tunas",
        shortCode: "10"
      },
      {
        name: "Matanzas",
        shortCode: "04"
      },
      {
        name: "Mayabeque",
        shortCode: "16"
      },
      {
        name: "Pinar del Río",
        shortCode: "01"
      },
      {
        name: "Sancti Spíritus",
        shortCode: "07"
      },
      {
        name: "Santiago de Cuba",
        shortCode: "13"
      },
      {
        name: "Villa Clara",
        shortCode: "05"
      }
    ]
  },
  {
    countryName: "Curaçao",
    countryShortCode: "CW",
    regions: [
      {
        name: "Curaçao",
        shortCode: "CW"
      }
    ]
  },
  {
    countryName: "Cyprus",
    countryShortCode: "CY",
    regions: [
      {
        name: "Ammochostos",
        shortCode: "04"
      },
      {
        name: "Keryneia",
        shortCode: "05"
      },
      {
        name: "Larnaka",
        shortCode: "03"
      },
      {
        name: "Lefkosia",
        shortCode: "01"
      },
      {
        name: "Lemesos",
        shortCode: "02"
      },
      {
        name: "Pafos",
        shortCode: "05"
      }
    ]
  },
  {
    countryName: "Czech Republic",
    countryShortCode: "CZ",
    regions: [
      {
        name: "Hlavní město Praha",
        shortCode: "PR"
      },
      {
        name: "Jihočeský kraj",
        shortCode: "JC"
      },
      {
        name: "Jihomoravský kraj",
        shortCode: "JM"
      },
      {
        name: "Karlovarský kraj",
        shortCode: "KA"
      },
      {
        name: "Královéhradecký kraj",
        shortCode: "KR"
      },
      {
        name: "Liberecký kraj",
        shortCode: "LI"
      },
      {
        name: "Moravskoslezský kraj",
        shortCode: "MO"
      },
      {
        name: "Olomoucký kraj",
        shortCode: "OL"
      },
      {
        name: "Pardubický kraj",
        shortCode: "PA"
      },
      {
        name: "Plzeňský kraj",
        shortCode: "PL"
      },
      {
        name: "Středočeský kraj",
        shortCode: "ST"
      },
      {
        name: "Ústecký kraj",
        shortCode: "US"
      },
      {
        name: "Vysočina",
        shortCode: "VY"
      },
      {
        name: "Zlínský kraj",
        shortCode: "ZL"
      }
    ]
  },
  {
    countryName: "Denmark",
    countryShortCode: "DK",
    regions: [
      {
        name: "Hovedstaden",
        shortCode: "84"
      },
      {
        name: "Kujalleq",
        shortCode: "GL-KU"
      },
      {
        name: "Midtjylland",
        shortCode: "82"
      },
      {
        name: "Norderøerne",
        shortCode: "FO-01"
      },
      {
        name: "Nordjylland",
        shortCode: "81"
      },
      {
        name: "Østerø",
        shortCode: "FO-06"
      },
      {
        name: "Qaasuitsup",
        shortCode: "GL-QA"
      },
      {
        name: "Qeqqata",
        shortCode: "GL-QE"
      },
      {
        name: "Sandø",
        shortCode: "FO-02"
      },
      {
        name: "Sermersooq",
        shortCode: "GL-SM"
      },
      {
        name: "Sjælland",
        shortCode: "85"
      },
      {
        name: "Strømø",
        shortCode: "FO-03"
      },
      {
        name: "Suderø",
        shortCode: "FO-04"
      },
      {
        name: "Syddanmark",
        shortCode: "83"
      },
      {
        name: "Vågø",
        shortCode: "FO-05"
      }
    ]
  },
  {
    countryName: "Djibouti",
    countryShortCode: "DJ",
    regions: [
      {
        name: "Ali Sabieh",
        shortCode: "AS"
      },
      {
        name: "Arta",
        shortCode: "AR"
      },
      {
        name: "Dikhil",
        shortCode: "DI"
      },
      {
        name: "Obock",
        shortCode: "OB"
      },
      {
        name: "Tadjourah",
        shortCode: "TA"
      }
    ]
  },
  {
    countryName: "Dominica",
    countryShortCode: "DM",
    regions: [
      {
        name: "Saint Andrew Parish",
        shortCode: "02"
      },
      {
        name: "Saint David Parish",
        shortCode: "03"
      },
      {
        name: "Saint George Parish",
        shortCode: "04"
      },
      {
        name: "Saint John Parish",
        shortCode: "05"
      },
      {
        name: "Saint Joseph Parish",
        shortCode: "06"
      },
      {
        name: "Saint Luke Parish",
        shortCode: "07"
      },
      {
        name: "Saint Mark Parish",
        shortCode: "08"
      },
      {
        name: "Saint Patrick Parish",
        shortCode: "09"
      },
      {
        name: "Saint Paul Parish",
        shortCode: "10"
      },
      {
        name: "Saint Peter Parish",
        shortCode: "11"
      }
    ]
  },
  {
    countryName: "Dominican Republic",
    countryShortCode: "DO",
    regions: [
      {
        name: "Cibao Central",
        shortCode: "02"
      },
      {
        name: "Del Valle",
        shortCode: "37"
      },
      {
        name: "Distrito Nacional",
        shortCode: "01"
      },
      {
        name: "Enriquillo",
        shortCode: "38"
      },
      {
        name: "Norcentral",
        shortCode: "04"
      },
      {
        name: "Nordeste",
        shortCode: "34"
      },
      {
        name: "Noroeste",
        shortCode: "34"
      },
      {
        name: "Norte",
        shortCode: "35"
      },
      {
        name: "Valdesia",
        shortCode: "42"
      }
    ]
  },
  {
    countryName: "Ecuador",
    countryShortCode: "EC",
    regions: [
      {
        name: "Azuay",
        shortCode: "A"
      },
      {
        name: "Bolívar",
        shortCode: "B"
      },
      {
        name: "Cañar",
        shortCode: "F"
      },
      {
        name: "Carchi",
        shortCode: "C"
      },
      {
        name: "Chimborazo",
        shortCode: "H"
      },
      {
        name: "Cotopaxi",
        shortCode: "X"
      },
      {
        name: "El Oro",
        shortCode: "O"
      },
      {
        name: "Esmeraldas",
        shortCode: "E"
      },
      {
        name: "Galápagos",
        shortCode: "W"
      },
      {
        name: "Guayas",
        shortCode: "G"
      },
      {
        name: "Imbabura",
        shortCode: "I"
      },
      {
        name: "Loja",
        shortCode: "L"
      },
      {
        name: "Los Ríos",
        shortCode: "R"
      },
      {
        name: "Manabí",
        shortCode: "M"
      },
      {
        name: "Morona-Santiago",
        shortCode: "S"
      },
      {
        name: "Napo",
        shortCode: "N"
      },
      {
        name: "Orellana",
        shortCode: "D"
      },
      {
        name: "Pastaza",
        shortCode: "Y"
      },
      {
        name: "Pichincha",
        shortCode: "P"
      },
      {
        name: "Santa Elena",
        shortCode: "SE"
      },
      {
        name: "Santo Domingo de los Tsáchilas",
        shortCode: "SD"
      },
      {
        name: "Sucumbíos",
        shortCode: "U"
      },
      {
        name: "Tungurahua",
        shortCode: "T"
      },
      {
        name: "Zamora-Chinchipe",
        shortCode: "Z"
      }
    ]
  },
  {
    countryName: "Egypt",
    countryShortCode: "EG",
    regions: [
      {
        name: "Alexandria",
        shortCode: "ALX"
      },
      {
        name: "Aswan",
        shortCode: "ASN"
      },
      {
        name: "Asyout",
        shortCode: "AST"
      },
      {
        name: "Bani Sueif",
        shortCode: "BNS"
      },
      {
        name: "Beheira",
        shortCode: "BH"
      },
      {
        name: "Cairo",
        shortCode: "C"
      },
      {
        name: "Daqahlia",
        shortCode: "DK"
      },
      {
        name: "Dumiat",
        shortCode: "DT"
      },
      {
        name: "El Bahr El Ahmar",
        shortCode: "BA"
      },
      {
        name: "El Ismailia",
        shortCode: "IS"
      },
      {
        name: "El Suez",
        shortCode: "SUZ"
      },
      {
        name: "El Wadi El Gedeed",
        shortCode: "WAD"
      },
      {
        name: "Fayoum",
        shortCode: "FYM"
      },
      {
        name: "Gharbia",
        shortCode: "GH"
      },
      {
        name: "Giza",
        shortCode: "SUZ"
      },
      {
        name: "Helwan",
        shortCode: "HU"
      },
      {
        name: "Kafr El Sheikh",
        shortCode: "KFS"
      },
      {
        name: "Luxor",
        shortCode: "LX"
      },
      {
        name: "Matrouh",
        shortCode: "MT"
      },
      {
        name: "Menia",
        shortCode: "MN"
      },
      {
        name: "Menofia",
        shortCode: "MNF"
      },
      {
        name: "North Sinai",
        shortCode: "SIN"
      },
      {
        name: "Port Said",
        shortCode: "PTS"
      },
      {
        name: "Qalubia",
        shortCode: "KB"
      },
      {
        name: "Qena",
        shortCode: "KN"
      },
      {
        name: "Sharqia",
        shortCode: "SHR"
      },
      {
        name: "Sixth of October",
        shortCode: "SU"
      },
      {
        name: "Sohag",
        shortCode: "SHG"
      },
      {
        name: "South Sinai",
        shortCode: "JS"
      }
    ]
  },
  {
    countryName: "El Salvador",
    countryShortCode: "SV",
    regions: [
      {
        name: "Ahuachapán",
        shortCode: "AH"
      },
      {
        name: "Cabañas",
        shortCode: "CA"
      },
      {
        name: "Cuscatlán",
        shortCode: "CU"
      },
      {
        name: "Chalatenango",
        shortCode: "CH"
      },
      {
        name: "La Libertad",
        shortCode: "LI"
      },
      {
        name: "La Paz",
        shortCode: "PA"
      },
      {
        name: "La Unión",
        shortCode: "UN"
      },
      {
        name: "Morazán",
        shortCode: "MO"
      },
      {
        name: "San Miguel",
        shortCode: "SM"
      },
      {
        name: "San Salvador",
        shortCode: "SS"
      },
      {
        name: "Santa Ana",
        shortCode: "SA"
      },
      {
        name: "San Vicente",
        shortCode: "SV"
      },
      {
        name: "Sonsonate",
        shortCode: "SO"
      },
      {
        name: "Usulután",
        shortCode: "US"
      }
    ]
  },
  {
    countryName: "Equatorial Guinea",
    countryShortCode: "GQ",
    regions: [
      {
        name: "Annobón",
        shortCode: "AN"
      },
      {
        name: "Bioko Norte",
        shortCode: "BN"
      },
      {
        name: "Bioko Sur",
        shortCode: "BS"
      },
      {
        name: "Centro Sur",
        shortCode: "CS"
      },
      {
        name: "Kié-Ntem",
        shortCode: "KN"
      },
      {
        name: "Litoral",
        shortCode: "LI"
      },
      {
        name: "Wele-Nzas",
        shortCode: "WN"
      }
    ]
  },
  {
    countryName: "Eritrea",
    countryShortCode: "ER",
    regions: [
      {
        name: "Anseba",
        shortCode: "AN"
      },
      {
        name: "Debub",
        shortCode: "DU"
      },
      {
        name: "Debub-Keih-Bahri",
        shortCode: "DK"
      },
      {
        name: "Gash-Barka",
        shortCode: "GB"
      },
      {
        name: "Maekel",
        shortCode: "MA"
      },
      {
        name: "Semien-Keih-Bahri",
        shortCode: "SK"
      }
    ]
  },
  {
    countryName: "Estonia",
    countryShortCode: "EE",
    regions: [
      {
        name: "Harjumaa (Tallinn)",
        shortCode: "37"
      },
      {
        name: "Hiiumaa (Kardla)",
        shortCode: "39"
      },
      {
        name: "Ida-Virumaa (Johvi)",
        shortCode: "44"
      },
      {
        name: "Järvamaa (Paide)",
        shortCode: "41"
      },
      {
        name: "Jõgevamaa (Jogeva)",
        shortCode: "49"
      },
      {
        name: "Läänemaa",
        shortCode: "57"
      },
      {
        name: "Lääne-Virumaa (Rakvere)",
        shortCode: "59"
      },
      {
        name: "Pärnumaa (Parnu)",
        shortCode: "67"
      },
      {
        name: "Põlvamaa (Polva)",
        shortCode: "65"
      },
      {
        name: "Raplamaa (Rapla)",
        shortCode: "70"
      },
      {
        name: "Saaremaa (Kuessaare)",
        shortCode: "74"
      },
      {
        name: "Tartumaa (Tartu)",
        shortCode: "78"
      },
      {
        name: "Valgamaa (Valga)",
        shortCode: "82"
      },
      {
        name: "Viljandimaa (Viljandi)",
        shortCode: "84"
      },
      {
        name: "Võrumaa (Voru)",
        shortCode: "86"
      }
    ]
  },
  {
    countryName: "Ethiopia",
    countryShortCode: "ET",
    regions: [
      {
        name: "Addis Ababa",
        shortCode: "AA"
      },
      {
        name: "Afar",
        shortCode: "AF"
      },
      {
        name: "Amhara",
        shortCode: "AM"
      },
      {
        name: "Benshangul-Gumaz",
        shortCode: "BE"
      },
      {
        name: "Dire Dawa",
        shortCode: "DD"
      },
      {
        name: "Gambela",
        shortCode: "GA"
      },
      {
        name: "Harari",
        shortCode: "HA"
      },
      {
        name: "Oromia",
        shortCode: "OR"
      },
      {
        name: "Somali",
        shortCode: "SO"
      },
      {
        name: "Southern Nations Nationalities and People's Region",
        shortCode: "SN"
      },
      {
        name: "Tigray",
        shortCode: "TI"
      }
    ]
  },
  {
    countryName: "Falkland Islands (Islas Malvinas)",
    countryShortCode: "FK",
    regions: [
      {
        name: "Falkland Islands (Islas Malvinas)"
      }
    ]
  },
  {
    countryName: "Faroe Islands",
    countryShortCode: "FO",
    regions: [
      {
        name: "Bordoy"
      },
      {
        name: "Eysturoy"
      },
      {
        name: "Mykines"
      },
      {
        name: "Sandoy"
      },
      {
        name: "Skuvoy"
      },
      {
        name: "Streymoy"
      },
      {
        name: "Suduroy"
      },
      {
        name: "Tvoroyri"
      },
      {
        name: "Vagar"
      }
    ]
  },
  {
    countryName: "Fiji",
    countryShortCode: "FJ",
    regions: [
      {
        name: "Ba",
        shortCode: "01"
      },
      {
        name: "Bua",
        shortCode: "01"
      },
      {
        name: "Cakaudrove",
        shortCode: "03"
      },
      {
        name: "Kadavu",
        shortCode: "04"
      },
      {
        name: "Lau",
        shortCode: "05"
      },
      {
        name: "Lomaiviti",
        shortCode: "06"
      },
      {
        name: "Macuata",
        shortCode: "07"
      },
      {
        name: "Nadroga and Navosa",
        shortCode: "08"
      },
      {
        name: "Naitasiri",
        shortCode: "09"
      },
      {
        name: "Namosi",
        shortCode: "10"
      },
      {
        name: "Ra",
        shortCode: "011"
      },
      {
        name: "Rewa",
        shortCode: "12"
      },
      {
        name: "Rotuma",
        shortCode: "R"
      },
      {
        name: "Serua",
        shortCode: "12"
      },
      {
        name: "Tailevu",
        shortCode: "14"
      }
    ]
  },
  {
    countryName: "Finland",
    countryShortCode: "FI",
    regions: [
      {
        name: "Ahvenanmaan lääni",
        shortCode: "AL"
      },
      {
        name: "Etelä-Suomen lääni",
        shortCode: "ES"
      },
      {
        name: "Itä-Suomen lääni",
        shortCode: "IS"
      },
      {
        name: "Länsi-Suomen lääni",
        shortCode: "LS"
      },
      {
        name: "Lapin lääni",
        shortCode: "LL"
      },
      {
        name: "Oulun lääni",
        shortCode: "OL"
      }
    ]
  },
  {
    countryName: "France",
    countryShortCode: "FR",
    regions: [
      {
        name: "Auvergne-Rhône-Alpes",
        shortCode: "ARA"
      },
      {
        name: "Bourgogne-Franche-Comté",
        shortCode: "BFC"
      },
      {
        name: "Bretagne",
        shortCode: "BRE"
      },
      {
        name: "Centre-Val de Loire",
        shortCode: "CVL"
      },
      {
        name: "Corse",
        shortCode: "COR"
      },
      {
        name: "Grand Est",
        shortCode: "GES"
      },
      {
        name: "Hauts-de-France",
        shortCode: "HDF"
      },
      {
        name: "Île-de-France",
        shortCode: "IDF"
      },
      {
        name: "Normandie",
        shortCode: "NOR"
      },
      {
        name: "Nouvelle-Aquitaine",
        shortCode: "NAQ"
      },
      {
        name: "Occitanie",
        shortCode: "OCC"
      },
      {
        name: "Pays de la Loire",
        shortCode: "PDL"
      },
      {
        name: "Provence-Alpes-Cote d'Azur",
        shortCode: "PAC"
      },
      {
        name: "Clipperton",
        shortCode: "CP"
      },
      {
        name: "Guadeloupe",
        shortCode: "GP"
      },
      {
        name: "Guyane",
        shortCode: "GF"
      },
      {
        name: "Martinique",
        shortCode: "MQ"
      },
      {
        name: "Mayotte",
        shortCode: "YT"
      },
      {
        name: "Novelle-Calédonie",
        shortCode: "NC"
      },
      {
        name: "Polynésie",
        shortCode: "PF"
      },
      {
        name: "Saint-Pierre-et-Miquelon",
        shortCode: "PM"
      },
      {
        name: "Saint Barthélemy",
        shortCode: "BL"
      },
      {
        name: "Saint Martin",
        shortCode: "MF"
      },
      {
        name: "Réunion",
        shortCode: "RE"
      },
      {
        name: "Terres Australes Françaises",
        shortCode: "TF"
      },
      {
        name: "Wallis-et-Futuna",
        shortCode: "WF"
      }
    ]
  },
  {
    countryName: "French Guiana",
    countryShortCode: "GF",
    regions: [
      {
        name: "French Guiana"
      }
    ]
  },
  {
    countryName: "French Polynesia",
    countryShortCode: "PF",
    regions: [
      {
        name: "Archipel des Marquises"
      },
      {
        name: "Archipel des Tuamotu"
      },
      {
        name: "Archipel des Tubuai"
      },
      {
        name: "Iles du Vent"
      },
      {
        name: "Iles Sous-le-Vent"
      }
    ]
  },
  {
    countryName: "French Southern and Antarctic Lands",
    countryShortCode: "TF",
    regions: [
      {
        name: "Adelie Land"
      },
      {
        name: "Ile Crozet"
      },
      {
        name: "Iles Kerguelen"
      },
      {
        name: "Iles Saint-Paul et Amsterdam"
      }
    ]
  },
  {
    countryName: "Gabon",
    countryShortCode: "GA",
    regions: [
      {
        name: "Estuaire",
        shortCode: "1"
      },
      {
        name: "Haut-Ogooué",
        shortCode: "2"
      },
      {
        name: "Moyen-Ogooué",
        shortCode: "3"
      },
      {
        name: "Ngounié",
        shortCode: "4"
      },
      {
        name: "Nyanga",
        shortCode: "5"
      },
      {
        name: "Ogooué-Ivindo",
        shortCode: "6"
      },
      {
        name: "Ogooué-Lolo",
        shortCode: "7"
      },
      {
        name: "Ogooué-Maritime",
        shortCode: "8"
      },
      {
        name: "Woleu-Ntem",
        shortCode: "9"
      }
    ]
  },
  {
    countryName: "Gambia, The",
    countryShortCode: "GM",
    regions: [
      {
        name: "Banjul",
        shortCode: "B"
      },
      {
        name: "Central River",
        shortCode: "M"
      },
      {
        name: "Lower River",
        shortCode: "L"
      },
      {
        name: "North Bank",
        shortCode: "N"
      },
      {
        name: "Upper River",
        shortCode: "U"
      },
      {
        name: "Western",
        shortCode: "W"
      }
    ]
  },
  {
    countryName: "Georgia",
    countryShortCode: "GE",
    regions: [
      {
        name: "Abkhazia (Sokhumi)",
        shortCode: "AB"
      },
      {
        name: "Ajaria (Bat'umi)",
        shortCode: "AJ"
      },
      {
        name: "Guria",
        shortCode: "GU"
      },
      {
        name: "Imereti",
        shortCode: "IM"
      },
      {
        name: "K'akheti",
        shortCode: "KA"
      },
      {
        name: "Kvemo Kartli",
        shortCode: "KK"
      },
      {
        name: "Mtshkheta-Mtianeti",
        shortCode: "MM"
      },
      {
        name: "Rach'a-Lexhkumi-KvemoSvaneti",
        shortCode: "RL"
      },
      {
        name: "Samegrelo-Zemo Svaneti",
        shortCode: "SZ"
      },
      {
        name: "Samtskhe-Javakheti",
        shortCode: "SJ"
      },
      {
        name: "Shida Kartli",
        shortCode: "SK"
      },
      {
        name: "Tbilisi",
        shortCode: "TB"
      }
    ]
  },
  {
    countryName: "Germany",
    countryShortCode: "DE",
    regions: [
      {
        name: "Baden-Württemberg",
        shortCode: "BW"
      },
      {
        name: "Bayern",
        shortCode: "BY"
      },
      {
        name: "Berlin",
        shortCode: "BE"
      },
      {
        name: "Brandenburg",
        shortCode: "BB"
      },
      {
        name: "Bremen",
        shortCode: "HB"
      },
      {
        name: "Hamburg",
        shortCode: "HH"
      },
      {
        name: "Hessen",
        shortCode: "HE"
      },
      {
        name: "Mecklenburg-Vorpommern",
        shortCode: "MV"
      },
      {
        name: "Niedersachsen",
        shortCode: "NI"
      },
      {
        name: "Nordrhein-Westfalen",
        shortCode: "NW"
      },
      {
        name: "Rheinland-Pfalz",
        shortCode: "RP"
      },
      {
        name: "Saarland",
        shortCode: "SL"
      },
      {
        name: "Sachsen",
        shortCode: "SN"
      },
      {
        name: "Sachsen-Anhalt",
        shortCode: "ST"
      },
      {
        name: "Schleswig-Holstein",
        shortCode: "SH"
      },
      {
        name: "Thüringen",
        shortCode: "TH"
      }
    ]
  },
  {
    countryName: "Ghana",
    countryShortCode: "GH",
    regions: [
      {
        name: "Ahafo"
      },
      {
        name: "Ashanti",
        shortCode: "AH"
      },
      {
        name: "Bono"
      },
      {
        name: "Bono East"
      },
      {
        name: "Central",
        shortCode: "CP"
      },
      {
        name: "Eastern",
        shortCode: "EP"
      },
      {
        name: "Greater Accra",
        shortCode: "AA"
      },
      {
        name: "Northern",
        shortCode: "NP"
      },
      {
        name: "North East"
      },
      {
        name: "Oti"
      },
      {
        name: "Savannah"
      },
      {
        name: "Upper East",
        shortCode: "UE"
      },
      {
        name: "Upper West",
        shortCode: "UW"
      },
      {
        name: "Volta",
        shortCode: "TV"
      },
      {
        name: "Western",
        shortCode: "WP"
      },
      {
        name: "Western North"
      }
    ]
  },
  {
    countryName: "Gibraltar",
    countryShortCode: "GI",
    regions: [
      {
        name: "Gibraltar"
      }
    ]
  },
  {
    countryName: "Greece",
    countryShortCode: "GR",
    regions: [
      {
        name: "Anatolikí Makedonía kai Thráki",
        shortCode: "A"
      },
      {
        name: "Attikḯ",
        shortCode: "I"
      },
      {
        name: "Dytikí Elláda",
        shortCode: "G"
      },
      {
        name: "Dytikí Makedonía",
        shortCode: "C"
      },
      {
        name: "Ionía Nísia",
        shortCode: "F"
      },
      {
        name: "Kentrikí Makedonía",
        shortCode: "B"
      },
      {
        name: "Krítí",
        shortCode: "M"
      },
      {
        name: "Notío Aigaío",
        shortCode: "L"
      },
      {
        name: "Peloponnísos",
        shortCode: "J"
      },
      {
        name: "Stereá Elláda",
        shortCode: "H"
      },
      {
        name: "Thessalía",
        shortCode: "E"
      },
      {
        name: "Voreío Aigaío",
        shortCode: "K"
      },
      {
        name: "Ípeiros",
        shortCode: "D"
      },
      {
        name: "Ágion Óros",
        shortCode: "69"
      }
    ]
  },
  {
    countryName: "Greenland",
    countryShortCode: "GL",
    regions: [
      {
        name: "Kommune Kujalleq",
        shortCode: "KU"
      },
      {
        name: "Kommuneqarfik Sermersooq",
        shortCode: "SM"
      },
      {
        name: "Qaasuitsup Kommunia",
        shortCode: "QA"
      },
      {
        name: "Qeqqata Kommunia",
        shortCode: "QE"
      }
    ]
  },
  {
    countryName: "Grenada",
    countryShortCode: "GD",
    regions: [
      {
        name: "Saint Andrew",
        shortCode: "01"
      },
      {
        name: "Saint David",
        shortCode: "02"
      },
      {
        name: "Saint George",
        shortCode: "03"
      },
      {
        name: "Saint John",
        shortCode: "04"
      },
      {
        name: "Saint Mark",
        shortCode: "05"
      },
      {
        name: "Saint Patrick",
        shortCode: "06"
      },
      {
        name: "Southern Grenadine Islands",
        shortCode: "10"
      }
    ]
  },
  {
    countryName: "Guadeloupe",
    countryShortCode: "GP",
    regions: [
      {
        name: "Guadeloupe"
      }
    ]
  },
  {
    countryName: "Guam",
    countryShortCode: "GU",
    regions: [
      {
        name: "Guam"
      }
    ]
  },
  {
    countryName: "Guatemala",
    countryShortCode: "GT",
    regions: [
      {
        name: "Alta Verapaz",
        shortCode: "AV"
      },
      {
        name: "Baja Verapaz",
        shortCode: "BV"
      },
      {
        name: "Chimaltenango",
        shortCode: "CM"
      },
      {
        name: "Chiquimula",
        shortCode: "CQ"
      },
      {
        name: "El Progreso",
        shortCode: "PR"
      },
      {
        name: "Escuintla",
        shortCode: "ES"
      },
      {
        name: "Guatemala",
        shortCode: "GU"
      },
      {
        name: "Huehuetenango",
        shortCode: "HU"
      },
      {
        name: "Izabal",
        shortCode: "IZ"
      },
      {
        name: "Jalapa",
        shortCode: "JA"
      },
      {
        name: "Jutiapa",
        shortCode: "JU"
      },
      {
        name: "Petén",
        shortCode: "PE"
      },
      {
        name: "Quetzaltenango",
        shortCode: "QZ"
      },
      {
        name: "Quiché",
        shortCode: "QC"
      },
      {
        name: "Retalhuleu",
        shortCode: "Re"
      },
      {
        name: "Sacatepéquez",
        shortCode: "SA"
      },
      {
        name: "San Marcos",
        shortCode: "SM"
      },
      {
        name: "Santa Rosa",
        shortCode: "SR"
      },
      {
        name: "Sololá",
        shortCode: "SO"
      },
      {
        name: "Suchitepéquez",
        shortCode: "SU"
      },
      {
        name: "Totonicapán",
        shortCode: "TO"
      },
      {
        name: "Zacapa",
        shortCode: "ZA"
      }
    ]
  },
  {
    countryName: "Guernsey",
    countryShortCode: "GG",
    regions: [
      {
        name: "Castel"
      },
      {
        name: "Forest"
      },
      {
        name: "St. Andrew"
      },
      {
        name: "St. Martin"
      },
      {
        name: "St. Peter Port"
      },
      {
        name: "St. Pierre du Bois"
      },
      {
        name: "St. Sampson"
      },
      {
        name: "St. Saviour"
      },
      {
        name: "Torteval"
      },
      {
        name: "Vale"
      }
    ]
  },
  {
    countryName: "Guinea",
    countryShortCode: "GN",
    regions: [
      {
        name: "Boké",
        shortCode: "B"
      },
      {
        name: "Conakry",
        shortCode: "C"
      },
      {
        name: "Faranah",
        shortCode: "F"
      },
      {
        name: "Kankan",
        shortCode: "K"
      },
      {
        name: "Kindia",
        shortCode: "D"
      },
      {
        name: "Labé",
        shortCode: "L"
      },
      {
        name: "Mamou",
        shortCode: "M"
      },
      {
        name: "Nzérékoré",
        shortCode: "N"
      }
    ]
  },
  {
    countryName: "Guinea-Bissau",
    countryShortCode: "GW",
    regions: [
      {
        name: "Bafatá",
        shortCode: "BA"
      },
      {
        name: "Biombo",
        shortCode: "BM"
      },
      {
        name: "Bissau",
        shortCode: "BS"
      },
      {
        name: "Bolama-Bijagos",
        shortCode: "BL"
      },
      {
        name: "Cacheu",
        shortCode: "CA"
      },
      {
        name: "Gabú",
        shortCode: "GA"
      },
      {
        name: "Oio",
        shortCode: "OI"
      },
      {
        name: "Quinara",
        shortCode: "QU"
      },
      {
        name: "Tombali",
        shortCode: "TO"
      }
    ]
  },
  {
    countryName: "Guyana",
    countryShortCode: "GY",
    regions: [
      {
        name: "Barima-Waini",
        shortCode: "BA"
      },
      {
        name: "Cuyuni-Mazaruni",
        shortCode: "CU"
      },
      {
        name: "Demerara-Mahaica",
        shortCode: "DE"
      },
      {
        name: "East Berbice-Corentyne",
        shortCode: "EB"
      },
      {
        name: "Essequibo Islands-West Demerara",
        shortCode: "ES"
      },
      {
        name: "Mahaica-Berbice",
        shortCode: "MA"
      },
      {
        name: "Pomeroon-Supenaam",
        shortCode: "PM"
      },
      {
        name: "Potaro-Siparuni",
        shortCode: "PT"
      },
      {
        name: "Upper Demerara-Berbice",
        shortCode: "UD"
      },
      {
        name: "Upper Takutu-Upper Essequibo",
        shortCode: "UT"
      }
    ]
  },
  {
    countryName: "Haiti",
    countryShortCode: "HT",
    regions: [
      {
        name: "Artibonite",
        shortCode: "AR"
      },
      {
        name: "Centre",
        shortCode: "CE"
      },
      {
        name: "Grand'Anse",
        shortCode: "GA"
      },
      {
        name: "Nippes",
        shortCode: "NI"
      },
      {
        name: "Nord",
        shortCode: "ND"
      },
      {
        name: "Nord-Est",
        shortCode: "NE"
      },
      {
        name: "Nord-Ouest",
        shortCode: "NO"
      },
      {
        name: "Ouest",
        shortCode: "OU"
      },
      {
        name: "Sud",
        shortCode: "SD"
      },
      {
        name: "Sud-Est",
        shortCode: "SE"
      }
    ]
  },
  {
    countryName: "Heard Island and McDonald Islands",
    countryShortCode: "HM",
    regions: [
      {
        name: "Heard Island and McDonald Islands"
      }
    ]
  },
  {
    countryName: "Holy See (Vatican City)",
    countryShortCode: "VA",
    regions: [
      {
        name: "Holy See (Vatican City)",
        shortCode: "01"
      }
    ]
  },
  {
    countryName: "Honduras",
    countryShortCode: "HN",
    regions: [
      {
        name: "Atlántida",
        shortCode: "AT"
      },
      {
        name: "Choluteca",
        shortCode: "CH"
      },
      {
        name: "Colón",
        shortCode: "CL"
      },
      {
        name: "Comayagua",
        shortCode: "CM"
      },
      {
        name: "Copán",
        shortCode: "CP"
      },
      {
        name: "Cortés",
        shortCode: "CR"
      },
      {
        name: "El Paraíso",
        shortCode: "EP"
      },
      {
        name: "Francisco Morazan",
        shortCode: "FM"
      },
      {
        name: "Gracias a Dios",
        shortCode: "GD"
      },
      {
        name: "Intibucá",
        shortCode: "IN"
      },
      {
        name: "Islas de la Bahía",
        shortCode: "IB"
      },
      {
        name: "La Paz",
        shortCode: "LP"
      },
      {
        name: "Lempira",
        shortCode: "LE"
      },
      {
        name: "Ocotepeque",
        shortCode: "OC"
      },
      {
        name: "Olancho",
        shortCode: "OL"
      },
      {
        name: "Santa Bárbara",
        shortCode: "SB"
      },
      {
        name: "Valle",
        shortCode: "VA"
      },
      {
        name: "Yoro",
        shortCode: "YO"
      }
    ]
  },
  {
    countryName: "Hong Kong",
    countryShortCode: "HK",
    regions: [
      {
        name: "Hong Kong",
        shortCode: "HK"
      }
    ]
  },
  {
    countryName: "Hungary",
    countryShortCode: "HU",
    regions: [
      {
        name: "Bács-Kiskun",
        shortCode: "BK"
      },
      {
        name: "Baranya",
        shortCode: "BA"
      },
      {
        name: "Békés",
        shortCode: "BE"
      },
      {
        name: "Békéscsaba",
        shortCode: "BC"
      },
      {
        name: "Borsod-Abauj-Zemplen",
        shortCode: "BZ"
      },
      {
        name: "Budapest",
        shortCode: "BU"
      },
      {
        name: "Csongrád",
        shortCode: "CS"
      },
      {
        name: "Debrecen",
        shortCode: "DE"
      },
      {
        name: "Dunaújváros",
        shortCode: "DU"
      },
      {
        name: "Eger",
        shortCode: "EG"
      },
      {
        name: "Érd",
        shortCode: "ER"
      },
      {
        name: "Fejér",
        shortCode: "FE"
      },
      {
        name: "Győr",
        shortCode: "GY"
      },
      {
        name: "Győr-Moson-Sopron",
        shortCode: "GS"
      },
      {
        name: "Hajdú-Bihar",
        shortCode: "HB"
      },
      {
        name: "Heves",
        shortCode: "HE"
      },
      {
        name: "Hódmezővásárhely",
        shortCode: "HV"
      },
      {
        name: "Jász-Nagykun-Szolnok",
        shortCode: "N"
      },
      {
        name: "Kaposvár",
        shortCode: "KV"
      },
      {
        name: "Kecskemét",
        shortCode: "KM"
      },
      {
        name: "Komárom-Esztergom",
        shortCode: "KE"
      },
      {
        name: "Miskolc",
        shortCode: "MI"
      },
      {
        name: "Nagykanizsa",
        shortCode: "NK"
      },
      {
        name: "Nógrád",
        shortCode: "NO"
      },
      {
        name: "Nyíregyháza",
        shortCode: "NY"
      },
      {
        name: "Pécs",
        shortCode: "PS"
      },
      {
        name: "Pest",
        shortCode: "PE"
      },
      {
        name: "Salgótarján",
        shortCode: "ST"
      },
      {
        name: "Somogy",
        shortCode: "SO"
      },
      {
        name: "Sopron",
        shortCode: "SN"
      },
      {
        name: "Szabolcs-á-Bereg",
        shortCode: "SZ"
      },
      {
        name: "Szeged",
        shortCode: "SD"
      },
      {
        name: "Székesfehérvár",
        shortCode: "SF"
      },
      {
        name: "Szekszárd",
        shortCode: "SS"
      },
      {
        name: "Szolnok",
        shortCode: "SK"
      },
      {
        name: "Szombathely",
        shortCode: "SH"
      },
      {
        name: "Tatabánya",
        shortCode: "TB"
      },
      {
        name: "Tolna",
        shortCode: "TO"
      },
      {
        name: "Vas",
        shortCode: "VA"
      },
      {
        name: "Veszprém",
        shortCode: "VE"
      },
      {
        name: "Veszprém (City)",
        shortCode: "VM"
      },
      {
        name: "Zala",
        shortCode: "ZA"
      },
      {
        name: "Zalaegerszeg",
        shortCode: "ZE"
      }
    ]
  },
  {
    countryName: "Iceland",
    countryShortCode: "IS",
    regions: [
      {
        name: "Austurland",
        shortCode: "7"
      },
      {
        name: "Höfuðborgarsvæði utan Reykjavíkur",
        shortCode: "1"
      },
      {
        name: "Norðurland eystra",
        shortCode: "6"
      },
      {
        name: "Norðurland vestra",
        shortCode: "5"
      },
      {
        name: "Suðurland",
        shortCode: "8"
      },
      {
        name: "Suðurnes",
        shortCode: "2"
      },
      {
        name: "Vestfirðir",
        shortCode: "4"
      },
      {
        name: "Vesturland",
        shortCode: "3"
      }
    ]
  },
  {
    countryName: "India",
    countryShortCode: "IN",
    regions: [
      {
        name: "Andaman and Nicobar Islands",
        shortCode: "AN"
      },
      {
        name: "Andhra Pradesh",
        shortCode: "AP"
      },
      {
        name: "Arunachal Pradesh",
        shortCode: "AR"
      },
      {
        name: "Assam",
        shortCode: "AS"
      },
      {
        name: "Bihar",
        shortCode: "BR"
      },
      {
        name: "Chandigarh",
        shortCode: "CH"
      },
      {
        name: "Chhattisgarh",
        shortCode: "CT"
      },
      {
        name: "Dadra and Nagar Haveli",
        shortCode: "DN"
      },
      {
        name: "Daman and Diu",
        shortCode: "DD"
      },
      {
        name: "Delhi",
        shortCode: "DL"
      },
      {
        name: "Goa",
        shortCode: "GA"
      },
      {
        name: "Gujarat",
        shortCode: "GJ"
      },
      {
        name: "Haryana",
        shortCode: "HR"
      },
      {
        name: "Himachal Pradesh",
        shortCode: "HP"
      },
      {
        name: "Jammu and Kashmir",
        shortCode: "JK"
      },
      {
        name: "Jharkhand",
        shortCode: "JH"
      },
      {
        name: "Karnataka",
        shortCode: "KA"
      },
      {
        name: "Kerala",
        shortCode: "KL"
      },
      {
        name: "Ladakh",
        shortCode: "LA"
      },
      {
        name: "Lakshadweep",
        shortCode: "LD"
      },
      {
        name: "Madhya Pradesh",
        shortCode: "MP"
      },
      {
        name: "Maharashtra",
        shortCode: "MH"
      },
      {
        name: "Manipur",
        shortCode: "MN"
      },
      {
        name: "Meghalaya",
        shortCode: "ML"
      },
      {
        name: "Mizoram",
        shortCode: "MZ"
      },
      {
        name: "Nagaland",
        shortCode: "NL"
      },
      {
        name: "Odisha",
        shortCode: "OR"
      },
      {
        name: "Puducherry",
        shortCode: "PY"
      },
      {
        name: "Punjab",
        shortCode: "PB"
      },
      {
        name: "Rajasthan",
        shortCode: "RJ"
      },
      {
        name: "Sikkim",
        shortCode: "WK"
      },
      {
        name: "Tamil Nadu",
        shortCode: "TN"
      },
      {
        name: "Telangana",
        shortCode: "TG"
      },
      {
        name: "Tripura",
        shortCode: "TR"
      },
      {
        name: "Uttarakhand",
        shortCode: "UT"
      },
      {
        name: "Uttar Pradesh",
        shortCode: "UP"
      },
      {
        name: "West Bengal",
        shortCode: "WB"
      }
    ]
  },
  {
    countryName: "Indonesia",
    countryShortCode: "ID",
    regions: [
      {
        name: "Aceh",
        shortCode: "AC"
      },
      {
        name: "Bali",
        shortCode: "BA"
      },
      {
        name: "Bangka Belitung",
        shortCode: "BB"
      },
      {
        name: "Banten",
        shortCode: "BT"
      },
      {
        name: "Bengkulu",
        shortCode: "BE"
      },
      {
        name: "Gorontalo",
        shortCode: "GO"
      },
      {
        name: "Jakarta Raya",
        shortCode: "JK"
      },
      {
        name: "Jambi",
        shortCode: "JA"
      },
      {
        name: "Jawa Barat",
        shortCode: "JB"
      },
      {
        name: "Jawa Tengah",
        shortCode: "JT"
      },
      {
        name: "Jawa Timur",
        shortCode: "JI"
      },
      {
        name: "Kalimantan Barat",
        shortCode: "KB"
      },
      {
        name: "Kalimantan Selatan",
        shortCode: "KS"
      },
      {
        name: "Kalimantan Tengah",
        shortCode: "KT"
      },
      {
        name: "Kalimantan Timur",
        shortCode: "KI"
      },
      {
        name: "Kalimantan Utara",
        shortCode: "KU"
      },
      {
        name: "Kepulauan Riau",
        shortCode: "KR"
      },
      {
        name: "Lampung",
        shortCode: "LA"
      },
      {
        name: "Maluku",
        shortCode: "MA"
      },
      {
        name: "Maluku Utara",
        shortCode: "MU"
      },
      {
        name: "Nusa Tenggara Barat",
        shortCode: "NB"
      },
      {
        name: "Nusa Tenggara Timur",
        shortCode: "NT"
      },
      {
        name: "Papua",
        shortCode: "PA"
      },
      {
        name: "Papua Barat",
        shortCode: "PB"
      },
      {
        name: "Riau",
        shortCode: "RI"
      },
      {
        name: "Sulawesi Selatan",
        shortCode: "SR"
      },
      {
        name: "Sulawesi Tengah",
        shortCode: "ST"
      },
      {
        name: "Sulawesi Tenggara",
        shortCode: "SG"
      },
      {
        name: "Sulawesi Utara",
        shortCode: "SA"
      },
      {
        name: "Sumatera Barat",
        shortCode: "SB"
      },
      {
        name: "Sumatera Selatan",
        shortCode: "SS"
      },
      {
        name: "Sumatera Utara",
        shortCode: "SU"
      },
      {
        name: "Yogyakarta",
        shortCode: "YO"
      }
    ]
  },
  {
    countryName: "Iran, Islamic Republic of",
    countryShortCode: "IR",
    regions: [
      {
        name: "Alborz",
        shortCode: "32"
      },
      {
        name: "Ardabīl",
        shortCode: "03"
      },
      {
        name: "Āz̄arbāyjān-e Gharbī",
        shortCode: "02"
      },
      {
        name: "Āz̄arbāyjān-e Sharqī",
        shortCode: "01"
      },
      {
        name: "Būshehr",
        shortCode: "06"
      },
      {
        name: "Chahār Maḩāl va Bakhtīārī",
        shortCode: "08"
      },
      {
        name: "Eşfahān",
        shortCode: "04"
      },
      {
        name: "Fārs",
        shortCode: "14"
      },
      {
        name: "Gīlān",
        shortCode: "19"
      },
      {
        name: "Golestān",
        shortCode: "27"
      },
      {
        name: "Hamadān",
        shortCode: "24"
      },
      {
        name: "Hormozgān",
        shortCode: "23"
      },
      {
        name: "Īlām",
        shortCode: "05"
      },
      {
        name: "Kermān",
        shortCode: "15"
      },
      {
        name: "Kermānshāh",
        shortCode: "17"
      },
      {
        name: "Khorāsān-e Jonūbī",
        shortCode: "29"
      },
      {
        name: "Khorāsān-e Raẕavī",
        shortCode: "30"
      },
      {
        name: "Khorāsān-e Shomālī",
        shortCode: "61"
      },
      {
        name: "Khūzestān",
        shortCode: "10"
      },
      {
        name: "Kohgīlūyeh va Bowyer Aḩmad",
        shortCode: "18"
      },
      {
        name: "Kordestān",
        shortCode: "16"
      },
      {
        name: "Lorestān",
        shortCode: "20"
      },
      {
        name: "Markazi",
        shortCode: "22"
      },
      {
        name: "Māzandarān",
        shortCode: "21"
      },
      {
        name: "Qazvīn",
        shortCode: "28"
      },
      {
        name: "Qom",
        shortCode: "26"
      },
      {
        name: "Semnān",
        shortCode: "12"
      },
      {
        name: "Sīstān va Balūchestān",
        shortCode: "13"
      },
      {
        name: "Tehrān",
        shortCode: "07"
      },
      {
        name: "Yazd",
        shortCode: "25"
      },
      {
        name: "Zanjān",
        shortCode: "11"
      }
    ]
  },
  {
    countryName: "Iraq",
    countryShortCode: "IQ",
    regions: [
      {
        name: "Al Anbār",
        shortCode: "AN"
      },
      {
        name: "Al Başrah",
        shortCode: "BA"
      },
      {
        name: "Al Muthanná",
        shortCode: "MU"
      },
      {
        name: "Al Qādisīyah",
        shortCode: "QA"
      },
      {
        name: "An Najaf",
        shortCode: "NA"
      },
      {
        name: "Arbīl",
        shortCode: "AR"
      },
      {
        name: "As Sulaymānīyah",
        shortCode: "SU"
      },
      {
        name: "Bābil",
        shortCode: "BB"
      },
      {
        name: "Baghdād",
        shortCode: "BG"
      },
      {
        name: "Dohuk",
        shortCode: "DA"
      },
      {
        name: "Dhī Qār",
        shortCode: "DQ"
      },
      {
        name: "Diyālá",
        shortCode: "DI"
      },
      {
        name: "Karbalā'",
        shortCode: "KA"
      },
      {
        name: "Kirkuk",
        shortCode: "KI"
      },
      {
        name: "Maysān",
        shortCode: "MA"
      },
      {
        name: "Nīnawá",
        shortCode: "NI"
      },
      {
        name: "Şalāḩ ad Dīn",
        shortCode: "SD"
      },
      {
        name: "Wāsiţ",
        shortCode: "WA"
      }
    ]
  },
  {
    countryName: "Ireland",
    countryShortCode: "IE",
    regions: [
      {
        name: "Carlow",
        shortCode: "CW"
      },
      {
        name: "Cavan",
        shortCode: "CN"
      },
      {
        name: "Clare",
        shortCode: "CE"
      },
      {
        name: "Cork",
        shortCode: "CO"
      },
      {
        name: "Donegal",
        shortCode: "DL"
      },
      {
        name: "Dublin",
        shortCode: "D"
      },
      {
        name: "Galway",
        shortCode: "G"
      },
      {
        name: "Kerry",
        shortCode: "KY"
      },
      {
        name: "Kildare",
        shortCode: "KE"
      },
      {
        name: "Kilkenny",
        shortCode: "KK"
      },
      {
        name: "Laois",
        shortCode: "LS"
      },
      {
        name: "Leitrim",
        shortCode: "LM"
      },
      {
        name: "Limerick",
        shortCode: "LK"
      },
      {
        name: "Longford",
        shortCode: "LD"
      },
      {
        name: "Louth",
        shortCode: "LH"
      },
      {
        name: "Mayo",
        shortCode: "MO"
      },
      {
        name: "Meath",
        shortCode: "MH"
      },
      {
        name: "Monaghan",
        shortCode: "MN"
      },
      {
        name: "Offaly",
        shortCode: "OY"
      },
      {
        name: "Roscommon",
        shortCode: "RN"
      },
      {
        name: "Sligo",
        shortCode: "SO"
      },
      {
        name: "Tipperary",
        shortCode: "TA"
      },
      {
        name: "Waterford",
        shortCode: "WD"
      },
      {
        name: "Westmeath",
        shortCode: "WH"
      },
      {
        name: "Wexford",
        shortCode: "WX"
      },
      {
        name: "Wicklow",
        shortCode: "WW"
      }
    ]
  },
  {
    countryName: "Isle of Man",
    countryShortCode: "IM",
    regions: [
      {
        name: "Isle of Man"
      }
    ]
  },
  {
    countryName: "Israel",
    countryShortCode: "IL",
    regions: [
      {
        name: "HaDarom",
        shortCode: "D"
      },
      {
        name: "HaMerkaz",
        shortCode: "M"
      },
      {
        name: "HaTsafon",
        shortCode: "Z"
      },
      {
        name: "H̱efa",
        shortCode: "HA"
      },
      {
        name: "Tel-Aviv",
        shortCode: "TA"
      },
      {
        name: "Yerushalayim",
        shortCode: "JM"
      }
    ]
  },
  {
    countryName: "Italy",
    countryShortCode: "IT",
    regions: [
      {
        name: "Abruzzo",
        shortCode: "65"
      },
      {
        name: "Basilicata",
        shortCode: "77"
      },
      {
        name: "Calabria",
        shortCode: "78"
      },
      {
        name: "Campania",
        shortCode: "72"
      },
      {
        name: "Emilia-Romagna",
        shortCode: "45"
      },
      {
        name: "Friuli-Venezia Giulia",
        shortCode: "36"
      },
      {
        name: "Lazio",
        shortCode: "62"
      },
      {
        name: "Liguria",
        shortCode: "42"
      },
      {
        name: "Lombardia",
        shortCode: "25"
      },
      {
        name: "Marche",
        shortCode: "57"
      },
      {
        name: "Molise",
        shortCode: "67"
      },
      {
        name: "Piemonte",
        shortCode: "21"
      },
      {
        name: "Puglia",
        shortCode: "75"
      },
      {
        name: "Sardegna",
        shortCode: "88"
      },
      {
        name: "Sicilia",
        shortCode: "82"
      },
      {
        name: "Toscana",
        shortCode: "52"
      },
      {
        name: "Trentino-Alto Adige",
        shortCode: "32"
      },
      {
        name: "Umbria",
        shortCode: "55"
      },
      {
        name: "Valle d'Aosta",
        shortCode: "23"
      },
      {
        name: "Veneto",
        shortCode: "34"
      }
    ]
  },
  {
    countryName: "Jamaica",
    countryShortCode: "JM",
    regions: [
      {
        name: "Clarendon",
        shortCode: "13"
      },
      {
        name: "Hanover",
        shortCode: "09"
      },
      {
        name: "Kingston",
        shortCode: "01"
      },
      {
        name: "Manchester",
        shortCode: "12"
      },
      {
        name: "Portland",
        shortCode: "04"
      },
      {
        name: "Saint Andrew",
        shortCode: "02"
      },
      {
        name: "Saint Ann",
        shortCode: "06"
      },
      {
        name: "Saint Catherine",
        shortCode: "14"
      },
      {
        name: "Saint Elizabeth",
        shortCode: "11"
      },
      {
        name: "Saint James",
        shortCode: "08"
      },
      {
        name: "Saint Mary",
        shortCode: "05"
      },
      {
        name: "Saint Thomas",
        shortCode: "03"
      },
      {
        name: "Trelawny",
        shortCode: "07"
      },
      {
        name: "Westmoreland",
        shortCode: "10"
      }
    ]
  },
  {
    countryName: "Japan",
    countryShortCode: "JP",
    regions: [
      {
        name: "Aichi",
        shortCode: "23"
      },
      {
        name: "Akita",
        shortCode: "05"
      },
      {
        name: "Aomori",
        shortCode: "02"
      },
      {
        name: "Chiba",
        shortCode: "12"
      },
      {
        name: "Ehime",
        shortCode: "38"
      },
      {
        name: "Fukui",
        shortCode: "18"
      },
      {
        name: "Fukuoka",
        shortCode: "40"
      },
      {
        name: "Fukushima",
        shortCode: "07"
      },
      {
        name: "Gifu",
        shortCode: "21"
      },
      {
        name: "Gunma",
        shortCode: "10"
      },
      {
        name: "Hiroshima",
        shortCode: "34"
      },
      {
        name: "Hokkaido",
        shortCode: "01"
      },
      {
        name: "Hyogo",
        shortCode: "28"
      },
      {
        name: "Ibaraki",
        shortCode: "08"
      },
      {
        name: "Ishikawa",
        shortCode: "17"
      },
      {
        name: "Iwate",
        shortCode: "03"
      },
      {
        name: "Kagawa",
        shortCode: "37"
      },
      {
        name: "Kagoshima",
        shortCode: "46"
      },
      {
        name: "Kanagawa",
        shortCode: "14"
      },
      {
        name: "Kochi",
        shortCode: "39"
      },
      {
        name: "Kumamoto",
        shortCode: "43"
      },
      {
        name: "Kyoto",
        shortCode: "26"
      },
      {
        name: "Mie",
        shortCode: "24"
      },
      {
        name: "Miyagi",
        shortCode: "04"
      },
      {
        name: "Miyazaki",
        shortCode: "45"
      },
      {
        name: "Nagano",
        shortCode: "20"
      },
      {
        name: "Nagasaki",
        shortCode: "42"
      },
      {
        name: "Nara",
        shortCode: "29"
      },
      {
        name: "Niigata",
        shortCode: "15"
      },
      {
        name: "Oita",
        shortCode: "44"
      },
      {
        name: "Okayama",
        shortCode: "33"
      },
      {
        name: "Okinawa",
        shortCode: "47"
      },
      {
        name: "Osaka",
        shortCode: "27"
      },
      {
        name: "Saga",
        shortCode: "41"
      },
      {
        name: "Saitama",
        shortCode: "11"
      },
      {
        name: "Shiga",
        shortCode: "25"
      },
      {
        name: "Shimane",
        shortCode: "32"
      },
      {
        name: "Shizuoka",
        shortCode: "22"
      },
      {
        name: "Tochigi",
        shortCode: "09"
      },
      {
        name: "Tokushima",
        shortCode: "36"
      },
      {
        name: "Tokyo",
        shortCode: "13"
      },
      {
        name: "Tottori",
        shortCode: "31"
      },
      {
        name: "Toyama",
        shortCode: "16"
      },
      {
        name: "Wakayama",
        shortCode: "30"
      },
      {
        name: "Yamagata",
        shortCode: "06"
      },
      {
        name: "Yamaguchi",
        shortCode: "35"
      },
      {
        name: "Yamanashi",
        shortCode: "19"
      }
    ]
  },
  {
    countryName: "Jersey",
    countryShortCode: "JE",
    regions: [
      {
        name: "Jersey"
      }
    ]
  },
  {
    countryName: "Jordan",
    countryShortCode: "JO",
    regions: [
      {
        name: "‘Ajlūn",
        shortCode: "AJ"
      },
      {
        name: "Al 'Aqabah",
        shortCode: "AQ"
      },
      {
        name: "Al Balqā’",
        shortCode: "BA"
      },
      {
        name: "Al Karak",
        shortCode: "KA"
      },
      {
        name: "Al Mafraq",
        shortCode: "MA"
      },
      {
        name: "Al ‘A̅şimah",
        shortCode: "AM"
      },
      {
        name: "Aţ Ţafīlah",
        shortCode: "AT"
      },
      {
        name: "Az Zarqā’",
        shortCode: "AZ"
      },
      {
        name: "Irbid",
        shortCode: "IR"
      },
      {
        name: "Jarash",
        shortCode: "JA"
      },
      {
        name: "Ma‘ān",
        shortCode: "MN"
      },
      {
        name: "Mādabā",
        shortCode: "MD"
      }
    ]
  },
  {
    countryName: "Kazakhstan",
    countryShortCode: "KZ",
    regions: [
      {
        name: "Almaty",
        shortCode: "ALA"
      },
      {
        name: "Aqmola",
        shortCode: "AKM"
      },
      {
        name: "Aqtobe",
        shortCode: "AKT"
      },
      {
        name: "Astana",
        shortCode: "AST"
      },
      {
        name: "Atyrau",
        shortCode: "ATY"
      },
      {
        name: "Batys Qazaqstan",
        shortCode: "ZAP"
      },
      {
        name: "Bayqongyr"
      },
      {
        name: "Mangghystau",
        shortCode: "MAN"
      },
      {
        name: "Ongtustik Qazaqstan",
        shortCode: "YUZ"
      },
      {
        name: "Pavlodar",
        shortCode: "PAV"
      },
      {
        name: "Qaraghandy",
        shortCode: "KAR"
      },
      {
        name: "Qostanay",
        shortCode: "KUS"
      },
      {
        name: "Qyzylorda",
        shortCode: "KZY"
      },
      {
        name: "Shyghys Qazaqstan",
        shortCode: "VOS"
      },
      {
        name: "Soltustik Qazaqstan",
        shortCode: "SEV"
      },
      {
        name: "Zhambyl",
        shortCode: "ZHA"
      }
    ]
  },
  {
    countryName: "Kenya",
    countryShortCode: "KE",
    regions: [
      {
        name: "Baringo",
        shortCode: "01"
      },
      {
        name: "Bomet",
        shortCode: "02"
      },
      {
        name: "Bungoma",
        shortCode: "03"
      },
      {
        name: "Busia",
        shortCode: "04"
      },
      {
        name: "Eleyo/Marakwet",
        shortCode: "05"
      },
      {
        name: "Embu",
        shortCode: "06"
      },
      {
        name: "Garissa",
        shortCode: "07"
      },
      {
        name: "Homa Bay",
        shortCode: "08"
      },
      {
        name: "Isiolo",
        shortCode: "09"
      },
      {
        name: "Kajiado",
        shortCode: "10"
      },
      {
        name: "Kakamega",
        shortCode: "11"
      },
      {
        name: "Kericho",
        shortCode: "12"
      },
      {
        name: "Kiambu",
        shortCode: "13"
      },
      {
        name: "Kilifi",
        shortCode: "14"
      },
      {
        name: "Kirinyaga",
        shortCode: "15"
      },
      {
        name: "Kisii",
        shortCode: "16"
      },
      {
        name: "Kisumu",
        shortCode: "17"
      },
      {
        name: "Kitui",
        shortCode: "18"
      },
      {
        name: "Kwale",
        shortCode: "19"
      },
      {
        name: "Laikipia",
        shortCode: "20"
      },
      {
        name: "Lamu",
        shortCode: "21"
      },
      {
        name: "Machakos",
        shortCode: "22"
      },
      {
        name: "Makueni",
        shortCode: "23"
      },
      {
        name: "Mandera",
        shortCode: "24"
      },
      {
        name: "Marsabit",
        shortCode: "25"
      },
      {
        name: "Meru",
        shortCode: "26"
      },
      {
        name: "Migori",
        shortCode: "27"
      },
      {
        name: "Mombasa",
        shortCode: "28"
      },
      {
        name: "Murang'a",
        shortCode: "29"
      },
      {
        name: "Nairobi City",
        shortCode: "30"
      },
      {
        name: "Nakuru",
        shortCode: "31"
      },
      {
        name: "Nandi",
        shortCode: "32"
      },
      {
        name: "Narok",
        shortCode: "33"
      },
      {
        name: "Nyamira",
        shortCode: "34"
      },
      {
        name: "Nyandarua",
        shortCode: "35"
      },
      {
        name: "Nyeri",
        shortCode: "36"
      },
      {
        name: "Samburu",
        shortCode: "37"
      },
      {
        name: "Siaya",
        shortCode: "38"
      },
      {
        name: "Taita/Taveta",
        shortCode: "39"
      },
      {
        name: "Tana River",
        shortCode: "40"
      },
      {
        name: "Tharaka-Nithi",
        shortCode: "41"
      },
      {
        name: "Trans Nzoia",
        shortCode: "42"
      },
      {
        name: "Turkana",
        shortCode: "43"
      },
      {
        name: "Uasin Gishu",
        shortCode: "44"
      },
      {
        name: "Vihiga",
        shortCode: "45"
      },
      {
        name: "Wajir",
        shortCode: "46"
      },
      {
        name: "West Pokot",
        shortCode: "47"
      }
    ]
  },
  {
    countryName: "Kiribati",
    countryShortCode: "KI",
    regions: [
      {
        name: "Abaiang"
      },
      {
        name: "Abemama"
      },
      {
        name: "Aranuka"
      },
      {
        name: "Arorae"
      },
      {
        name: "Banaba"
      },
      {
        name: "Beru"
      },
      {
        name: "Butaritari"
      },
      {
        name: "Central Gilberts"
      },
      {
        name: "Gilbert Islands",
        shortCode: "G"
      },
      {
        name: "Kanton"
      },
      {
        name: "Kiritimati"
      },
      {
        name: "Kuria"
      },
      {
        name: "Line Islands",
        shortCode: "L"
      },
      {
        name: "Maiana"
      },
      {
        name: "Makin"
      },
      {
        name: "Marakei"
      },
      {
        name: "Nikunau"
      },
      {
        name: "Nonouti"
      },
      {
        name: "Northern Gilberts"
      },
      {
        name: "Onotoa"
      },
      {
        name: "Phoenix Islands",
        shortCode: "P"
      },
      {
        name: "Southern Gilberts"
      },
      {
        name: "Tabiteuea"
      },
      {
        name: "Tabuaeran"
      },
      {
        name: "Tamana"
      },
      {
        name: "Tarawa"
      },
      {
        name: "Teraina"
      }
    ]
  },
  {
    countryName: "Korea, Democratic People's Republic of",
    countryShortCode: "KP",
    regions: [
      {
        name: "Chagang-do (Chagang Province)",
        shortCode: "04"
      },
      {
        name: "Hamgyong-bukto (North Hamgyong Province)",
        shortCode: "09"
      },
      {
        name: "Hamgyong-namdo (South Hamgyong Province)",
        shortCode: "08"
      },
      {
        name: "Hwanghae-bukto (North Hwanghae Province)",
        shortCode: "06"
      },
      {
        name: "Hwanghae-namdo (South Hwanghae Province)",
        shortCode: "05"
      },
      {
        name: "Kangwon-do (Kangwon Province)",
        shortCode: "07"
      },
      {
        name: "Nasŏn (Najin-Sŏnbong)",
        shortCode: "13"
      },
      {
        name: "P'yongan-bukto (North P'yongan Province)",
        shortCode: "03"
      },
      {
        name: "P'yongan-namdo (South P'yongan Province)",
        shortCode: "02"
      },
      {
        name: "P'yongyang-si (P'yongyang City)",
        shortCode: "01"
      },
      {
        name: "Yanggang-do (Yanggang Province)",
        shortCode: "10"
      }
    ]
  },
  {
    countryName: "Korea, Republic of",
    countryShortCode: "KR",
    regions: [
      {
        name: "Ch'ungch'ongbuk-do",
        shortCode: "43"
      },
      {
        name: "Ch'ungch'ongnam-do",
        shortCode: "44"
      },
      {
        name: "Cheju-do",
        shortCode: "49"
      },
      {
        name: "Chollabuk-do",
        shortCode: "45"
      },
      {
        name: "Chollanam-do",
        shortCode: "46"
      },
      {
        name: "Inch'on-Kwangyokhi",
        shortCode: "28"
      },
      {
        name: "Kang-won-do",
        shortCode: "42"
      },
      {
        name: "Kwangju-Kwangyokshi",
        shortCode: "28"
      },
      {
        name: "Kyonggi-do",
        shortCode: "41"
      },
      {
        name: "Kyongsangbuk-do",
        shortCode: "47"
      },
      {
        name: "Kyongsangnam-do",
        shortCode: "48"
      },
      {
        name: "Pusan-Kwangyokshi",
        shortCode: "26"
      },
      {
        name: "Seoul-T'ukpyolshi",
        shortCode: "11"
      },
      {
        name: "Sejong",
        shortCode: "50"
      },
      {
        name: "Taegu-Kwangyokshi",
        shortCode: "27"
      },
      {
        name: "Taejon-Kwangyokshi",
        shortCode: "30"
      },
      {
        name: "Ulsan-Kwangyokshi",
        shortCode: "31"
      }
    ]
  },
  {
    countryName: "Kuwait",
    countryShortCode: "KW",
    regions: [
      {
        name: "Al Aḩmadi",
        shortCode: "AH"
      },
      {
        name: "Al Farwānīyah",
        shortCode: "FA"
      },
      {
        name: "Al Jahrā’",
        shortCode: "JA"
      },
      {
        name: "Al ‘Āşimah",
        shortCode: "KU"
      },
      {
        name: "Ḩawallī",
        shortCode: "HA"
      },
      {
        name: "Mubārak al Kabir",
        shortCode: "MU"
      }
    ]
  },
  {
    countryName: "Kyrgyzstan",
    countryShortCode: "KG",
    regions: [
      {
        name: "Batken Oblasty",
        shortCode: "B"
      },
      {
        name: "Bishkek Shaary",
        shortCode: "GB"
      },
      {
        name: "Chuy Oblasty (Bishkek)",
        shortCode: "C"
      },
      {
        name: "Jalal-Abad Oblasty",
        shortCode: "J"
      },
      {
        name: "Naryn Oblasty",
        shortCode: "N"
      },
      {
        name: "Osh Oblasty",
        shortCode: "O"
      },
      {
        name: "Talas Oblasty",
        shortCode: "T"
      },
      {
        name: "Ysyk-Kol Oblasty (Karakol)",
        shortCode: "Y"
      }
    ]
  },
  {
    countryName: "Laos",
    countryShortCode: "LA",
    regions: [
      {
        name: "Attapu",
        shortCode: "AT"
      },
      {
        name: "Bokèo",
        shortCode: "BK"
      },
      {
        name: "Bolikhamxai",
        shortCode: "BL"
      },
      {
        name: "Champasak",
        shortCode: "CH"
      },
      {
        name: "Houaphan",
        shortCode: "HO"
      },
      {
        name: "Khammouan",
        shortCode: "KH"
      },
      {
        name: "Louang Namtha",
        shortCode: "LM"
      },
      {
        name: "Louangphabang",
        shortCode: "LP"
      },
      {
        name: "Oudômxai",
        shortCode: "OU"
      },
      {
        name: "Phôngsali",
        shortCode: "PH"
      },
      {
        name: "Salavan",
        shortCode: "SL"
      },
      {
        name: "Savannakhét",
        shortCode: "SV"
      },
      {
        name: "Vientiane",
        shortCode: "VI"
      },
      {
        name: "Xaignabouli",
        shortCode: "XA"
      },
      {
        name: "Xékong",
        shortCode: "XE"
      },
      {
        name: "Xaisomboun",
        shortCode: "XS"
      },
      {
        name: "Xiangkhouang",
        shortCode: "XI"
      }
    ]
  },
  {
    countryName: "Latvia",
    countryShortCode: "LV",
    regions: [
      {
        name: "Aglona",
        shortCode: "001"
      },
      {
        name: "Aizkraukle",
        shortCode: "002"
      },
      {
        name: "Aizpute",
        shortCode: "003"
      },
      {
        name: "Aknīste",
        shortCode: "004"
      },
      {
        name: "Aloja",
        shortCode: "005"
      },
      {
        name: "Alsunga",
        shortCode: "06"
      },
      {
        name: "Alūksne",
        shortCode: "007"
      },
      {
        name: "Amata",
        shortCode: "008"
      },
      {
        name: "Ape",
        shortCode: "009"
      },
      {
        name: "Auce",
        shortCode: "010"
      },
      {
        name: "Ādaži",
        shortCode: "011"
      },
      {
        name: "Babīte",
        shortCode: "012"
      },
      {
        name: "Baldone",
        shortCode: "013"
      },
      {
        name: "Baltinava",
        shortCode: "014"
      },
      {
        name: "Balvi",
        shortCode: "015"
      },
      {
        name: "Bauska",
        shortCode: "016"
      },
      {
        name: "Beverīna",
        shortCode: "017"
      },
      {
        name: "Brocēni",
        shortCode: "018"
      },
      {
        name: "Burtnieki",
        shortCode: "019"
      },
      {
        name: "Carnikava",
        shortCode: "020"
      },
      {
        name: "Cesvaine",
        shortCode: "021"
      },
      {
        name: "Cēsis",
        shortCode: "022"
      },
      {
        name: "Cibla",
        shortCode: "023"
      },
      {
        name: "Dagda",
        shortCode: "024"
      },
      {
        name: "Daugavpils",
        shortCode: "025"
      },
      {
        name: "Daugavpils (City)",
        shortCode: "DGV"
      },
      {
        name: "Dobele",
        shortCode: "026"
      },
      {
        name: "Dundaga",
        shortCode: "027"
      },
      {
        name: "Durbe",
        shortCode: "028"
      },
      {
        name: "Engure",
        shortCode: "029"
      },
      {
        name: "Ērgļi",
        shortCode: "030"
      },
      {
        name: "Garkalne",
        shortCode: "031"
      },
      {
        name: "Grobiņa",
        shortCode: "032"
      },
      {
        name: "Gulbene",
        shortCode: "033"
      },
      {
        name: "Iecava",
        shortCode: "034"
      },
      {
        name: "Ikšķile",
        shortCode: "035"
      },
      {
        name: "Ilūkste",
        shortCode: "036"
      },
      {
        name: "Inčukalns",
        shortCode: "037"
      },
      {
        name: "Jaunjelgava",
        shortCode: "038"
      },
      {
        name: "Jaunpiebalga",
        shortCode: "039"
      },
      {
        name: "Jaunpils",
        shortCode: "040"
      },
      {
        name: "Jelgava",
        shortCode: "041"
      },
      {
        name: "Jelgava (City)",
        shortCode: "JEL"
      },
      {
        name: "Jēkabpils",
        shortCode: "042"
      },
      {
        name: "Jēkabpils (City)",
        shortCode: "JKB"
      },
      {
        name: "Jūrmala (City)",
        shortCode: "JUR"
      },
      {
        name: "Kandava",
        shortCode: "043"
      },
      {
        name: "Kārsava",
        shortCode: "044"
      },
      {
        name: "Kocēni",
        shortCode: "045"
      },
      {
        name: "Koknese",
        shortCode: "046"
      },
      {
        name: "Krāslava",
        shortCode: "047"
      },
      {
        name: "Krimulda",
        shortCode: "048"
      },
      {
        name: "Krustpils",
        shortCode: "049"
      },
      {
        name: "Kuldīga",
        shortCode: "050"
      },
      {
        name: "Ķegums",
        shortCode: "051"
      },
      {
        name: "Ķekava",
        shortCode: "052"
      },
      {
        name: "Lielvārde",
        shortCode: "053"
      },
      {
        name: "Liepāja",
        shortCode: "LPX"
      },
      {
        name: "Limbaži",
        shortCode: "054"
      },
      {
        name: "Līgatne",
        shortCode: "055"
      },
      {
        name: "Līvāni",
        shortCode: "056"
      },
      {
        name: "Lubāna",
        shortCode: "057"
      },
      {
        name: "Ludza",
        shortCode: "058"
      },
      {
        name: "Madona",
        shortCode: "059"
      },
      {
        name: "Mazsalaca",
        shortCode: "060"
      },
      {
        name: "Mālpils",
        shortCode: "061"
      },
      {
        name: "Mārupe",
        shortCode: "062"
      },
      {
        name: "Mērsrags",
        shortCode: "063"
      },
      {
        name: "Naukšēni",
        shortCode: "064"
      },
      {
        name: "Nereta",
        shortCode: "065"
      },
      {
        name: "Nīca",
        shortCode: "066"
      },
      {
        name: "Ogre",
        shortCode: "067"
      },
      {
        name: "Olaine",
        shortCode: "068"
      },
      {
        name: "Ozolnieki",
        shortCode: "069"
      },
      {
        name: "Pārgauja",
        shortCode: "070"
      },
      {
        name: "Pāvilosta",
        shortCode: "071"
      },
      {
        name: "Pļaviņas",
        shortCode: "072"
      },
      {
        name: "Preiļi",
        shortCode: "073"
      },
      {
        name: "Priekule",
        shortCode: "074"
      },
      {
        name: "Priekuļi",
        shortCode: "075"
      },
      {
        name: "Rauna",
        shortCode: "076"
      },
      {
        name: "Rēzekne",
        shortCode: "077"
      },
      {
        name: "Rēzekne (City)",
        shortCode: "REZ"
      },
      {
        name: "Riebiņi",
        shortCode: "078"
      },
      {
        name: "Rīga",
        shortCode: "RIX"
      },
      {
        name: "Roja",
        shortCode: "079"
      },
      {
        name: "Ropaži",
        shortCode: "080"
      },
      {
        name: "Rucava",
        shortCode: "081"
      },
      {
        name: "Rugāji",
        shortCode: "082"
      },
      {
        name: "Rundāle",
        shortCode: "083"
      },
      {
        name: "Rūjiena",
        shortCode: "084"
      },
      {
        name: "Sala",
        shortCode: "085"
      },
      {
        name: "Salacgrīva",
        shortCode: "086"
      },
      {
        name: "Salaspils",
        shortCode: "087"
      },
      {
        name: "Saldus",
        shortCode: "088"
      },
      {
        name: "Saulkrasti",
        shortCode: "089"
      },
      {
        name: "Sēja",
        shortCode: "090"
      },
      {
        name: "Sigulda",
        shortCode: "091"
      },
      {
        name: "Skrīveri",
        shortCode: "092"
      },
      {
        name: "Skrunda",
        shortCode: "093"
      },
      {
        name: "Smiltene",
        shortCode: "094"
      },
      {
        name: "Stopiņi",
        shortCode: "095"
      },
      {
        name: "Strenči",
        shortCode: "096"
      },
      {
        name: "Talsi",
        shortCode: "097"
      },
      {
        name: "Tērvete",
        shortCode: "098"
      },
      {
        name: "Tukums",
        shortCode: "099"
      },
      {
        name: "Vaiņode",
        shortCode: "100"
      },
      {
        name: "Valka",
        shortCode: "101"
      },
      {
        name: "Valmiera",
        shortCode: "VMR"
      },
      {
        name: "Varakļāni",
        shortCode: "102"
      },
      {
        name: "Vārkava",
        shortCode: "103"
      },
      {
        name: "Vecpiebalga",
        shortCode: "104"
      },
      {
        name: "Vecumnieki",
        shortCode: "105"
      },
      {
        name: "Ventspils",
        shortCode: "106"
      },
      {
        name: "Ventspils (City)",
        shortCode: "VEN"
      },
      {
        name: "Viesīte",
        shortCode: "107"
      },
      {
        name: "Viļaka",
        shortCode: "108"
      },
      {
        name: "Viļāni",
        shortCode: "109"
      },
      {
        name: "Zilupe",
        shortCode: "110"
      }
    ]
  },
  {
    countryName: "Lebanon",
    countryShortCode: "LB",
    regions: [
      {
        name: "Aakkâr",
        shortCode: "AK"
      },
      {
        name: "Baalbelk-Hermel",
        shortCode: "BH"
      },
      {
        name: "Béqaa",
        shortCode: "BI"
      },
      {
        name: "Beyrouth",
        shortCode: "BA"
      },
      {
        name: "Liban-Nord",
        shortCode: "AS"
      },
      {
        name: "Liban-Sud",
        shortCode: "JA"
      },
      {
        name: "Mont-Liban",
        shortCode: "JL"
      },
      {
        name: "Nabatîyé",
        shortCode: "NA"
      }
    ]
  },
  {
    countryName: "Lesotho",
    countryShortCode: "LS",
    regions: [
      {
        name: "Berea",
        shortCode: "D"
      },
      {
        name: "Butha-Buthe",
        shortCode: "B"
      },
      {
        name: "Leribe",
        shortCode: "C"
      },
      {
        name: "Mafeteng",
        shortCode: "E"
      },
      {
        name: "Maseru",
        shortCode: "A"
      },
      {
        name: "Mohales Hoek",
        shortCode: "F"
      },
      {
        name: "Mokhotlong",
        shortCode: "J"
      },
      {
        name: "Qacha's Nek",
        shortCode: "H"
      },
      {
        name: "Quthing",
        shortCode: "G"
      },
      {
        name: "Thaba-Tseka",
        shortCode: "K"
      }
    ]
  },
  {
    countryName: "Liberia",
    countryShortCode: "LR",
    regions: [
      {
        name: "Bomi",
        shortCode: "BM"
      },
      {
        name: "Bong",
        shortCode: "BG"
      },
      {
        name: "Gbarpolu",
        shortCode: "GP"
      },
      {
        name: "Grand Bassa",
        shortCode: "GB"
      },
      {
        name: "Grand Cape Mount",
        shortCode: "CM"
      },
      {
        name: "Grand Gedeh",
        shortCode: "GG"
      },
      {
        name: "Grand Kru",
        shortCode: "GK"
      },
      {
        name: "Lofa",
        shortCode: "LO"
      },
      {
        name: "Margibi",
        shortCode: "MG"
      },
      {
        name: "Maryland",
        shortCode: "MY"
      },
      {
        name: "Montserrado",
        shortCode: "MO"
      },
      {
        name: "Nimba",
        shortCode: "NI"
      },
      {
        name: "River Cess",
        shortCode: "RI"
      },
      {
        name: "River Geee",
        shortCode: "RG"
      },
      {
        name: "Sinoe",
        shortCode: "SI"
      }
    ]
  },
  {
    countryName: "Libya",
    countryShortCode: "LY",
    regions: [
      {
        name: "Al Buţnān",
        shortCode: "BU"
      },
      {
        name: "Al Jabal al Akhḑar",
        shortCode: "JA"
      },
      {
        name: "Al Jabal al Gharbī",
        shortCode: "JG"
      },
      {
        name: "Al Jafārah",
        shortCode: "JA"
      },
      {
        name: "Al Jufrah",
        shortCode: "JU"
      },
      {
        name: "Al Kufrah",
        shortCode: "FK"
      },
      {
        name: "Al Marj",
        shortCode: "MJ"
      },
      {
        name: "Al Marquab",
        shortCode: "MB"
      },
      {
        name: "Al Wāḩāt",
        shortCode: "WA"
      },
      {
        name: "An Nuqaţ al Khams",
        shortCode: "NQ"
      },
      {
        name: "Az Zāwiyah",
        shortCode: "ZA"
      },
      {
        name: "Banghāzī",
        shortCode: "BA"
      },
      {
        name: "Darnah",
        shortCode: "DR"
      },
      {
        name: "Ghāt",
        shortCode: "GH"
      },
      {
        name: "Mişrātah",
        shortCode: "MI"
      },
      {
        name: "Murzuq",
        shortCode: "MQ"
      },
      {
        name: "Nālūt",
        shortCode: "NL"
      },
      {
        name: "Sabhā",
        shortCode: "SB"
      },
      {
        name: "Surt",
        shortCode: "SR"
      },
      {
        name: "Ţarābulus",
        shortCode: "TB"
      },
      {
        name: "Yafran",
        shortCode: "WD"
      },
      {
        name: "Wādī ash Shāţiʾ",
        shortCode: "WS"
      }
    ]
  },
  {
    countryName: "Liechtenstein",
    countryShortCode: "LI",
    regions: [
      {
        name: "Balzers",
        shortCode: "01"
      },
      {
        name: "Eschen",
        shortCode: "02"
      },
      {
        name: "Gamprin",
        shortCode: "03"
      },
      {
        name: "Mauren",
        shortCode: "04"
      },
      {
        name: "Planken",
        shortCode: "05"
      },
      {
        name: "Ruggell",
        shortCode: "06"
      },
      {
        name: "Schaan",
        shortCode: "07"
      },
      {
        name: "Schellenberg",
        shortCode: "08"
      },
      {
        name: "Triesen",
        shortCode: "09"
      },
      {
        name: "Triesenberg",
        shortCode: "10"
      },
      {
        name: "Vaduz",
        shortCode: "11"
      }
    ]
  },
  {
    countryName: "Lithuania",
    countryShortCode: "LT",
    regions: [
      {
        name: "Alytaus",
        shortCode: "AL"
      },
      {
        name: "Kauno",
        shortCode: "KU"
      },
      {
        name: "Klaipėdos",
        shortCode: "KL"
      },
      {
        name: "Marijampolės",
        shortCode: "MR"
      },
      {
        name: "Panevėžio",
        shortCode: "PN"
      },
      {
        name: "Šiaulių",
        shortCode: "SA"
      },
      {
        name: "Tauragės",
        shortCode: "TA"
      },
      {
        name: "Telšių",
        shortCode: "TE"
      },
      {
        name: "Utenos",
        shortCode: "UT"
      },
      {
        name: "Vilniaus",
        shortCode: "VL"
      }
    ]
  },
  {
    countryName: "Luxembourg",
    countryShortCode: "LU",
    regions: [
      {
        name: "Capellen",
        shortCode: "CA"
      },
      {
        name: "Clevaux",
        shortCode: "CL"
      },
      {
        name: "Diekirch",
        shortCode: "DI"
      },
      {
        name: "Echternach",
        shortCode: "EC"
      },
      {
        name: "Esch-sur-Alzette",
        shortCode: "ES"
      },
      {
        name: "Grevenmacher",
        shortCode: "GR"
      },
      {
        name: "Luxembourg",
        shortCode: "LU"
      },
      {
        name: "Mersch",
        shortCode: "ME"
      },
      {
        name: "Redange",
        shortCode: "RD"
      },
      {
        name: "Remich",
        shortCode: "RM"
      },
      {
        name: "Vianden",
        shortCode: "VD"
      },
      {
        name: "Wiltz",
        shortCode: "WI"
      }
    ]
  },
  {
    countryName: "Macao",
    countryShortCode: "MO",
    regions: [
      {
        name: "Macao"
      }
    ]
  },
  {
    countryName: "Macedonia, Republic of",
    countryShortCode: "MK",
    regions: [
      {
        name: "Aračinovo",
        shortCode: "02"
      },
      {
        name: "Berovo",
        shortCode: "03"
      },
      {
        name: "Bitola",
        shortCode: "04"
      },
      {
        name: "Bogdanci",
        shortCode: "05"
      },
      {
        name: "Bogovinje",
        shortCode: "06"
      },
      {
        name: "Bosilovo",
        shortCode: "07"
      },
      {
        name: "Brvenica",
        shortCode: "08"
      },
      {
        name: "Centar Župa",
        shortCode: "78"
      },
      {
        name: "Čaška",
        shortCode: "08"
      },
      {
        name: "Češinovo-Obleševo",
        shortCode: "81"
      },
      {
        name: "Čučer Sandevo",
        shortCode: "82"
      },
      {
        name: "Debar",
        shortCode: "21"
      },
      {
        name: "Debarca",
        shortCode: "22"
      },
      {
        name: "Delčevo",
        shortCode: "23"
      },
      {
        name: "Demir Hisar",
        shortCode: "25"
      },
      {
        name: "Demir Kapija",
        shortCode: "24"
      },
      {
        name: "Doran",
        shortCode: "26"
      },
      {
        name: "Dolneni",
        shortCode: "27"
      },
      {
        name: "Gevgelija",
        shortCode: "18"
      },
      {
        name: "Gostivar",
        shortCode: "19"
      },
      {
        name: "Gradsko",
        shortCode: "20"
      },
      {
        name: "Ilinden",
        shortCode: "34"
      },
      {
        name: "Jegunovce",
        shortCode: "35"
      },
      {
        name: "Karbinci",
        shortCode: "37"
      },
      {
        name: "Kavadarci",
        shortCode: "36"
      },
      {
        name: "Kičevo",
        shortCode: "40"
      },
      {
        name: "Kočani",
        shortCode: "42"
      },
      {
        name: "Konče",
        shortCode: "41"
      },
      {
        name: "Kratovo",
        shortCode: "43"
      },
      {
        name: "Kriva Palanka",
        shortCode: "44"
      },
      {
        name: "Krivogaštani",
        shortCode: "45"
      },
      {
        name: "Kruševo",
        shortCode: "46"
      },
      {
        name: "Kumanovo",
        shortCode: "47"
      },
      {
        name: "Lipkovo",
        shortCode: "48"
      },
      {
        name: "Lozovo",
        shortCode: "49"
      },
      {
        name: "Makedonska Kamenica",
        shortCode: "51"
      },
      {
        name: "Makedonski Brod",
        shortCode: "52"
      },
      {
        name: "Mavrovo i Rostuša",
        shortCode: "50"
      },
      {
        name: "Mogila",
        shortCode: "53"
      },
      {
        name: "Negotino",
        shortCode: "54"
      },
      {
        name: "Novaci",
        shortCode: "55"
      },
      {
        name: "Novo Selo",
        shortCode: "56"
      },
      {
        name: "Ohrid",
        shortCode: "58"
      },
      {
        name: "Pehčevo",
        shortCode: "60"
      },
      {
        name: "Petrovec",
        shortCode: "59"
      },
      {
        name: "Plasnica",
        shortCode: "61"
      },
      {
        name: "Prilep",
        shortCode: "62"
      },
      {
        name: "Probištip",
        shortCode: "63"
      },
      {
        name: "Radoviš",
        shortCode: ""
      },
      {
        name: "Rankovce",
        shortCode: "65"
      },
      {
        name: "Resen",
        shortCode: "66"
      },
      {
        name: "Rosoman",
        shortCode: "67"
      },
      {
        name: "Skopje",
        shortCode: "85"
      },
      {
        name: "Sopište",
        shortCode: "70"
      },
      {
        name: "Staro Nagoričane",
        shortCode: "71"
      },
      {
        name: "Struga",
        shortCode: "72"
      },
      {
        name: "Strumica",
        shortCode: "73"
      },
      {
        name: "Studeničani",
        shortCode: "74"
      },
      {
        name: "Sveti Nikole",
        shortCode: "69"
      },
      {
        name: "Štip",
        shortCode: "83"
      },
      {
        name: "Tearce",
        shortCode: "75"
      },
      {
        name: "Tetovo",
        shortCode: "76"
      },
      {
        name: "Valandovo",
        shortCode: "10"
      },
      {
        name: "Vasilevo",
        shortCode: "11"
      },
      {
        name: "Veles",
        shortCode: "13"
      },
      {
        name: "Vevčani",
        shortCode: "12"
      },
      {
        name: "Vinica",
        shortCode: "14"
      },
      {
        name: "Vrapčište",
        shortCode: "16"
      },
      {
        name: "Zelenikovo",
        shortCode: "32"
      },
      {
        name: "Zrnovci",
        shortCode: "33"
      },
      {
        name: "Želino",
        shortCode: "30"
      }
    ]
  },
  {
    countryName: "Madagascar",
    countryShortCode: "MG",
    regions: [
      {
        name: "Antananarivo",
        shortCode: "T"
      },
      {
        name: "Antsiranana",
        shortCode: "D"
      },
      {
        name: "Fianarantsoa",
        shortCode: "F"
      },
      {
        name: "Mahajanga",
        shortCode: "M"
      },
      {
        name: "Toamasina",
        shortCode: "A"
      },
      {
        name: "Toliara",
        shortCode: "U"
      }
    ]
  },
  {
    countryName: "Malawi",
    countryShortCode: "MW",
    regions: [
      {
        name: "Balaka",
        shortCode: "BA"
      },
      {
        name: "Blantyre",
        shortCode: "BL"
      },
      {
        name: "Chikwawa",
        shortCode: "CK"
      },
      {
        name: "Chiradzulu",
        shortCode: "CR"
      },
      {
        name: "Chitipa",
        shortCode: "CT"
      },
      {
        name: "Dedza",
        shortCode: "DE"
      },
      {
        name: "Dowa",
        shortCode: "DO"
      },
      {
        name: "Karonga",
        shortCode: "KR"
      },
      {
        name: "Kasungu",
        shortCode: "KS"
      },
      {
        name: "Likoma",
        shortCode: "LK"
      },
      {
        name: "Lilongwe",
        shortCode: "LI"
      },
      {
        name: "Machinga",
        shortCode: "MH"
      },
      {
        name: "Mangochi",
        shortCode: "MG"
      },
      {
        name: "Mchinji",
        shortCode: "MC"
      },
      {
        name: "Mulanje",
        shortCode: "MU"
      },
      {
        name: "Mwanza",
        shortCode: "MW"
      },
      {
        name: "Mzimba",
        shortCode: "MZ"
      },
      {
        name: "Nkhata Bay",
        shortCode: "NE"
      },
      {
        name: "Nkhotakota",
        shortCode: "NB"
      },
      {
        name: "Nsanje",
        shortCode: "NS"
      },
      {
        name: "Ntcheu",
        shortCode: "NU"
      },
      {
        name: "Ntchisi",
        shortCode: "NI"
      },
      {
        name: "Phalombe",
        shortCode: "PH"
      },
      {
        name: "Rumphi",
        shortCode: "RU"
      },
      {
        name: "Salima",
        shortCode: "SA"
      },
      {
        name: "Thyolo",
        shortCode: "TH"
      },
      {
        name: "Zomba",
        shortCode: "ZO"
      }
    ]
  },
  {
    countryName: "Malaysia",
    countryShortCode: "MY",
    regions: [
      {
        name: "Johor",
        shortCode: "01"
      },
      {
        name: "Kedah",
        shortCode: "02"
      },
      {
        name: "Kelantan",
        shortCode: "03"
      },
      {
        name: "Melaka",
        shortCode: "04"
      },
      {
        name: "Negeri Sembilan",
        shortCode: "05"
      },
      {
        name: "Pahang",
        shortCode: "06"
      },
      {
        name: "Perak",
        shortCode: "08"
      },
      {
        name: "Perlis",
        shortCode: "09"
      },
      {
        name: "Pulau Pinang",
        shortCode: "07"
      },
      {
        name: "Sabah",
        shortCode: "12"
      },
      {
        name: "Sarawak",
        shortCode: "13"
      },
      {
        name: "Selangor",
        shortCode: "10"
      },
      {
        name: "Terengganu",
        shortCode: "11"
      },
      {
        name: "Wilayah Persekutuan (Kuala Lumpur)",
        shortCode: "14"
      },
      {
        name: "Wilayah Persekutuan (Labuan)",
        shortCode: "15"
      },
      {
        name: "Wilayah Persekutuan (Putrajaya)",
        shortCode: "16"
      }
    ]
  },
  {
    countryName: "Maldives",
    countryShortCode: "MV",
    regions: [
      {
        name: "Alifu Alifu",
        shortCode: "02"
      },
      {
        name: "Alifu Dhaalu",
        shortCode: "00"
      },
      {
        name: "Baa",
        shortCode: "20"
      },
      {
        name: "Dhaalu",
        shortCode: "17"
      },
      {
        name: "Faafu",
        shortCode: "14"
      },
      {
        name: "Gaafu Alifu",
        shortCode: "27"
      },
      {
        name: "Gaafu Dhaalu",
        shortCode: "28"
      },
      {
        name: "Gnaviyani",
        shortCode: "29"
      },
      {
        name: "Haa Alifu",
        shortCode: "07"
      },
      {
        name: "Haa Dhaalu",
        shortCode: "23"
      },
      {
        name: "Kaafu",
        shortCode: "29"
      },
      {
        name: "Laamu",
        shortCode: "05"
      },
      {
        name: "Lhaviyani",
        shortCode: "03"
      },
      {
        name: "Malé",
        shortCode: "MLE"
      },
      {
        name: "Meemu",
        shortCode: "12"
      },
      {
        name: "Noonu",
        shortCode: "25"
      },
      {
        name: "Raa",
        shortCode: "13"
      },
      {
        name: "Seenu",
        shortCode: "01"
      },
      {
        name: "Shaviyani",
        shortCode: "24"
      },
      {
        name: "Thaa",
        shortCode: "08"
      },
      {
        name: "Vaavu",
        shortCode: "04"
      }
    ]
  },
  {
    countryName: "Mali",
    countryShortCode: "ML",
    regions: [
      {
        name: "Bamako",
        shortCode: "BKO"
      },
      {
        name: "Gao",
        shortCode: "7"
      },
      {
        name: "Kayes",
        shortCode: "1"
      },
      {
        name: "Kidal",
        shortCode: "8"
      },
      {
        name: "Koulikoro",
        shortCode: "2"
      },
      {
        name: "Mopti",
        shortCode: "5"
      },
      {
        name: "Segou",
        shortCode: "4"
      },
      {
        name: "Sikasso",
        shortCode: "3"
      },
      {
        name: "Tombouctou",
        shortCode: "6"
      }
    ]
  },
  {
    countryName: "Malta",
    countryShortCode: "MT",
    regions: [
      {
        name: "Attard",
        shortCode: "01"
      },
      {
        name: "Balzan",
        shortCode: "02"
      },
      {
        name: "Birgu",
        shortCode: "03"
      },
      {
        name: "Birkirkara",
        shortCode: "04"
      },
      {
        name: "Birżebbuġa",
        shortCode: "05"
      },
      {
        name: "Bormla",
        shortCode: "06"
      },
      {
        name: "Dingli",
        shortCode: "07"
      },
      {
        name: "Fgura",
        shortCode: "08"
      },
      {
        name: "Floriana",
        shortCode: "09"
      },
      {
        name: "Fontana",
        shortCode: "10"
      },
      {
        name: "Guda",
        shortCode: "11"
      },
      {
        name: "Gżira",
        shortCode: "12"
      },
      {
        name: "Għajnsielem",
        shortCode: "13"
      },
      {
        name: "Għarb",
        shortCode: "14"
      },
      {
        name: "Għargħur",
        shortCode: "15"
      },
      {
        name: "Għasri",
        shortCode: "16"
      },
      {
        name: "Għaxaq",
        shortCode: "17"
      },
      {
        name: "Ħamrun",
        shortCode: "18"
      },
      {
        name: "Iklin",
        shortCode: "19"
      },
      {
        name: "Isla",
        shortCode: "20"
      },
      {
        name: "Kalkara",
        shortCode: "21"
      },
      {
        name: "Kerċem",
        shortCode: "22"
      },
      {
        name: "Kirkop",
        shortCode: "23"
      },
      {
        name: "Lija",
        shortCode: "24"
      },
      {
        name: "Luqa",
        shortCode: "25"
      },
      {
        name: "Marsa",
        shortCode: "26"
      },
      {
        name: "Marsaskala",
        shortCode: "27"
      },
      {
        name: "Marsaxlokk",
        shortCode: "28"
      },
      {
        name: "Mdina",
        shortCode: "29"
      },
      {
        name: "Mellieħa",
        shortCode: "30"
      },
      {
        name: "Mġarr",
        shortCode: "31"
      },
      {
        name: "Mosta",
        shortCode: "32"
      },
      {
        name: "Mqabba",
        shortCode: "33"
      },
      {
        name: "Msida",
        shortCode: "34"
      },
      {
        name: "Mtarfa",
        shortCode: "35"
      },
      {
        name: "Munxar",
        shortCode: "36"
      },
      {
        name: "Nadur",
        shortCode: "37"
      },
      {
        name: "Naxxar",
        shortCode: "38"
      },
      {
        name: "Paola",
        shortCode: "39"
      },
      {
        name: "Pembroke",
        shortCode: "40"
      },
      {
        name: "Pietà",
        shortCode: "41"
      },
      {
        name: "Qala",
        shortCode: "42"
      },
      {
        name: "Qormi",
        shortCode: "43"
      },
      {
        name: "Qrendi",
        shortCode: "44"
      },
      {
        name: "Rabat Għawdex",
        shortCode: "45"
      },
      {
        name: "Rabat Malta",
        shortCode: "46"
      },
      {
        name: "Safi",
        shortCode: "47"
      },
      {
        name: "San Ġiljan",
        shortCode: "48"
      },
      {
        name: "San Ġwann",
        shortCode: "49"
      },
      {
        name: "San Lawrenz",
        shortCode: "50"
      },
      {
        name: "San Pawl il-Baħar",
        shortCode: "51"
      },
      {
        name: "Sannat",
        shortCode: "52"
      },
      {
        name: "Santa Luċija",
        shortCode: "53"
      },
      {
        name: "Santa Venera",
        shortCode: "54"
      },
      {
        name: "Siġġiewi",
        shortCode: "55"
      },
      {
        name: "Sliema",
        shortCode: "56"
      },
      {
        name: "Swieqi",
        shortCode: "57"
      },
      {
        name: "Tai Xbiex",
        shortCode: "58"
      },
      {
        name: "Tarzien",
        shortCode: "59"
      },
      {
        name: "Valletta",
        shortCode: "60"
      },
      {
        name: "Xagħra",
        shortCode: "61"
      },
      {
        name: "Xewkija",
        shortCode: "62"
      },
      {
        name: "Xgħajra",
        shortCode: "63"
      },
      {
        name: "Żabbar",
        shortCode: "64"
      },
      {
        name: "Żebbuġ Għawde",
        shortCode: "65"
      },
      {
        name: "Żebbuġ Malta",
        shortCode: "66"
      },
      {
        name: "Żejtun",
        shortCode: "67"
      },
      {
        name: "Żurrieq",
        shortCode: "68"
      }
    ]
  },
  {
    countryName: "Marshall Islands",
    countryShortCode: "MH",
    regions: [
      {
        name: "Ailinglaplap",
        shortCode: "ALL"
      },
      {
        name: "Ailuk",
        shortCode: "ALK"
      },
      {
        name: "Arno",
        shortCode: "ARN"
      },
      {
        name: "Aur",
        shortCode: "AUR"
      },
      {
        name: "Bikini and Kili",
        shortCode: "KIL"
      },
      {
        name: "Ebon",
        shortCode: "EBO"
      },
      {
        name: "Jabat",
        shortCode: "JAB"
      },
      {
        name: "Jaluit",
        shortCode: "JAL"
      },
      {
        name: "Kwajalein",
        shortCode: "KWA"
      },
      {
        name: "Lae",
        shortCode: "LAE"
      },
      {
        name: "Lib",
        shortCode: "LIB"
      },
      {
        name: "Likiep",
        shortCode: "LIK"
      },
      {
        name: "Majuro",
        shortCode: "MAJ"
      },
      {
        name: "Maloelap",
        shortCode: "MAL"
      },
      {
        name: "Mejit",
        shortCode: "MEJ"
      },
      {
        name: "Namdrik",
        shortCode: "NMK"
      },
      {
        name: "Namu",
        shortCode: "NMU"
      },
      {
        name: "Rongelap",
        shortCode: "RON"
      },
      {
        name: "Ujae",
        shortCode: "UJA"
      },
      {
        name: "Utrik",
        shortCode: "UTI"
      },
      {
        name: "Wotho",
        shortCode: "WTH"
      },
      {
        name: "Wotje",
        shortCode: "WTJ"
      }
    ]
  },
  {
    countryName: "Martinique",
    countryShortCode: "MQ",
    regions: [
      {
        name: "Martinique"
      }
    ]
  },
  {
    countryName: "Mauritania",
    countryShortCode: "MR",
    regions: [
      {
        name: "Adrar",
        shortCode: "07"
      },
      {
        name: "Assaba",
        shortCode: "03"
      },
      {
        name: "Brakna",
        shortCode: "05"
      },
      {
        name: "Dakhlet Nouadhibou",
        shortCode: "08"
      },
      {
        name: "Gorgol",
        shortCode: "04"
      },
      {
        name: "Guidimaka",
        shortCode: "10"
      },
      {
        name: "Hodh Ech Chargui",
        shortCode: "01"
      },
      {
        name: "Hodh El Gharbi",
        shortCode: "02"
      },
      {
        name: "Inchiri",
        shortCode: "12"
      },
      {
        name: "Nouakchott Nord",
        shortCode: "14"
      },
      {
        name: "Nouakchott Ouest",
        shortCode: "13"
      },
      {
        name: "Nouakchott Sud",
        shortCode: "15"
      },
      {
        name: "Tagant",
        shortCode: "09"
      },
      {
        name: "Tiris Zemmour",
        shortCode: "11"
      },
      {
        name: "Trarza",
        shortCode: "06"
      }
    ]
  },
  {
    countryName: "Mauritius",
    countryShortCode: "MU",
    regions: [
      {
        name: "Agalega Islands",
        shortCode: "AG"
      },
      {
        name: "Beau Bassin-Rose Hill",
        shortCode: "BR"
      },
      {
        name: "Black River",
        shortCode: "BL"
      },
      {
        name: "Cargados Carajos Shoals",
        shortCode: "CC"
      },
      {
        name: "Curepipe",
        shortCode: "CU"
      },
      {
        name: "Flacq",
        shortCode: "FL"
      },
      {
        name: "Grand Port",
        shortCode: "GP"
      },
      {
        name: "Moka",
        shortCode: "MO"
      },
      {
        name: "Pamplemousses",
        shortCode: "PA"
      },
      {
        name: "Plaines Wilhems",
        shortCode: "PW"
      },
      {
        name: "Port Louis (City)",
        shortCode: "PU"
      },
      {
        name: "Port Louis",
        shortCode: "PL"
      },
      {
        name: "Riviere du Rempart",
        shortCode: "RR"
      },
      {
        name: "Rodrigues Island",
        shortCode: "RO"
      },
      {
        name: "Savanne",
        shortCode: "SA"
      },
      {
        name: "Vacoas-Phoenix",
        shortCode: "CP"
      }
    ]
  },
  {
    countryName: "Mayotte",
    countryShortCode: "YT",
    regions: [
      {
        name: "Dzaoudzi",
        shortCode: "01"
      },
      {
        name: "Pamandzi",
        shortCode: "02"
      },
      {
        name: "Mamoudzou",
        shortCode: "03"
      },
      {
        name: "Dembeni",
        shortCode: "04"
      },
      {
        name: "Bandrélé",
        shortCode: "05"
      },
      {
        name: "Kani-Kéli",
        shortCode: "06"
      },
      {
        name: "Bouéni",
        shortCode: "07"
      },
      {
        name: "Chirongui",
        shortCode: "08"
      },
      {
        name: "Sada",
        shortCode: "09"
      },
      {
        name: "Ouangani",
        shortCode: "10"
      },
      {
        name: "Chiconi",
        shortCode: "11"
      },
      {
        name: "Tsingoni",
        shortCode: "12"
      },
      {
        name: "M'Tsangamouji",
        shortCode: "13"
      },
      {
        name: "Acoua",
        shortCode: "14"
      },
      {
        name: "Mtsamboro",
        shortCode: "15"
      },
      {
        name: "Bandraboua",
        shortCode: "16"
      },
      {
        name: "Koungou",
        shortCode: "17"
      }
    ]
  },
  {
    countryName: "Mexico",
    countryShortCode: "MX",
    regions: [
      {
        name: "Aguascalientes",
        shortCode: "AGU"
      },
      {
        name: "Baja California",
        shortCode: "BCN"
      },
      {
        name: "Baja California Sur",
        shortCode: "BCS"
      },
      {
        name: "Campeche",
        shortCode: "CAM"
      },
      {
        name: "Ciudad de México",
        shortCode: "DIF"
      },
      {
        name: "Chiapas",
        shortCode: "CHP"
      },
      {
        name: "Chihuahua",
        shortCode: "CHH"
      },
      {
        name: "Coahuila de Zaragoza",
        shortCode: "COA"
      },
      {
        name: "Colima",
        shortCode: "COL"
      },
      {
        name: "Durango",
        shortCode: "DUR"
      },
      {
        name: "Estado de México",
        shortCode: "MEX"
      },
      {
        name: "Guanajuato",
        shortCode: "GUA"
      },
      {
        name: "Guerrero",
        shortCode: "GRO"
      },
      {
        name: "Hidalgo",
        shortCode: "HID"
      },
      {
        name: "Jalisco",
        shortCode: "JAL"
      },
      {
        name: "Michoacán de Ocampo",
        shortCode: "MIC"
      },
      {
        name: "Morelos",
        shortCode: "MOR"
      },
      {
        name: "Nayarit",
        shortCode: "NAY"
      },
      {
        name: "Nuevo León",
        shortCode: "NLE"
      },
      {
        name: "Oaxaca",
        shortCode: "OAX"
      },
      {
        name: "Puebla",
        shortCode: "PUE"
      },
      {
        name: "Querétaro de Arteaga",
        shortCode: "QUE"
      },
      {
        name: "Quintana Roo",
        shortCode: "ROO"
      },
      {
        name: "San Luis Potosí",
        shortCode: "SLP"
      },
      {
        name: "Sinaloa",
        shortCode: "SIN"
      },
      {
        name: "Sonora",
        shortCode: "SON"
      },
      {
        name: "Tabasco",
        shortCode: "TAB"
      },
      {
        name: "Tamaulipas",
        shortCode: "TAM"
      },
      {
        name: "Tlaxcala",
        shortCode: "TLA"
      },
      {
        name: "Veracruz",
        shortCode: "VER"
      },
      {
        name: "Yucatán",
        shortCode: "YUC"
      },
      {
        name: "Zacatecas",
        shortCode: "ZAC"
      }
    ]
  },
  {
    countryName: "Micronesia, Federated States of",
    countryShortCode: "FM",
    regions: [
      {
        name: "Chuuk (Truk)",
        shortCode: "TRK"
      },
      {
        name: "Kosrae",
        shortCode: "KSA"
      },
      {
        name: "Pohnpei",
        shortCode: "PNI"
      },
      {
        name: "Yap",
        shortCode: "YAP"
      }
    ]
  },
  {
    countryName: "Moldova",
    countryShortCode: "MD",
    regions: [
      {
        name: "Aenii Noi",
        shortCode: "AN"
      },
      {
        name: "Basarabeasca",
        shortCode: "BS"
      },
      {
        name: "Bălți",
        shortCode: "BA"
      },
      {
        name: "Bender",
        shortCode: "BD"
      },
      {
        name: "Briceni",
        shortCode: "BR"
      },
      {
        name: "Cahul",
        shortCode: "CA"
      },
      {
        name: "Cantemir",
        shortCode: "CT"
      },
      {
        name: "Călărași",
        shortCode: "CL"
      },
      {
        name: "Căușeni",
        shortCode: "CS"
      },
      {
        name: "Chișinău",
        shortCode: "CU"
      },
      {
        name: "Cimișlia",
        shortCode: "CM"
      },
      {
        name: "Criuleni",
        shortCode: "CR"
      },
      {
        name: "Dondușeni",
        shortCode: "DO"
      },
      {
        name: "Drochia",
        shortCode: "DR"
      },
      {
        name: "Dubăsari",
        shortCode: "DU"
      },
      {
        name: "Edineț",
        shortCode: "ED"
      },
      {
        name: "Fălești",
        shortCode: "FA"
      },
      {
        name: "Florești",
        shortCode: "FL"
      },
      {
        name: "Găgăuzia",
        shortCode: "GA"
      },
      {
        name: "Glodeni",
        shortCode: "GL"
      },
      {
        name: "Hîncești",
        shortCode: "HI"
      },
      {
        name: "Ialoveni",
        shortCode: "IA"
      },
      {
        name: "Leova",
        shortCode: "LE"
      },
      {
        name: "Nisporeni",
        shortCode: "NI"
      },
      {
        name: "Ocnița",
        shortCode: "OC"
      },
      {
        name: "Orhei",
        shortCode: "OR"
      },
      {
        name: "Rezina",
        shortCode: "RE"
      },
      {
        name: "Rîșcani",
        shortCode: "RI"
      },
      {
        name: "Sîngerei",
        shortCode: "SI"
      },
      {
        name: "Soroca",
        shortCode: "SO"
      },
      {
        name: "Stînga Nistrului",
        shortCode: "SN"
      },
      {
        name: "Strășeni",
        shortCode: "ST"
      },
      {
        name: "Șoldănești",
        shortCode: "SD"
      },
      {
        name: "Ștefan Vodă",
        shortCode: "SV"
      },
      {
        name: "Taraclia",
        shortCode: "TA"
      },
      {
        name: "Telenești",
        shortCode: "TE"
      },
      {
        name: "Ungheni",
        shortCode: "UN"
      }
    ]
  },
  {
    countryName: "Monaco",
    countryShortCode: "MC",
    regions: [
      {
        name: "Colle",
        shortCode: "CL"
      },
      {
        name: "Condamine",
        shortCode: "CO"
      },
      {
        name: "Fontvieille",
        shortCode: "FO"
      },
      {
        name: "Gare",
        shortCode: "GA"
      },
      {
        name: "Jardin Exotique",
        shortCode: "JE"
      },
      {
        name: "Larvotto",
        shortCode: "LA"
      },
      {
        name: "Malbousquet",
        shortCode: "MA"
      },
      {
        name: "Monaco-Ville",
        shortCode: "MO"
      },
      {
        name: "Moneghetti",
        shortCode: "MG"
      },
      {
        name: "Monte-Carlo",
        shortCode: "MC"
      },
      {
        name: "Moulins",
        shortCode: "MU"
      },
      {
        name: "Port-Hercule",
        shortCode: "PH"
      },
      {
        name: "Saint-Roman",
        shortCode: "SR"
      },
      {
        name: "Sainte-Dévote",
        shortCode: "SD"
      },
      {
        name: "Source",
        shortCode: "SO"
      },
      {
        name: "Spélugues",
        shortCode: "SP"
      },
      {
        name: "Vallon de la Rousse",
        shortCode: "VR"
      }
    ]
  },
  {
    countryName: "Mongolia",
    countryShortCode: "MN",
    regions: [
      {
        name: "Arhangay",
        shortCode: "073"
      },
      {
        name: "Bayan-Olgiy",
        shortCode: "071"
      },
      {
        name: "Bayanhongor",
        shortCode: "069"
      },
      {
        name: "Bulgan",
        shortCode: "067"
      },
      {
        name: "Darhan",
        shortCode: "037"
      },
      {
        name: "Dornod",
        shortCode: "061"
      },
      {
        name: "Dornogovi",
        shortCode: "063"
      },
      {
        name: "Dundgovi",
        shortCode: "059"
      },
      {
        name: "Dzavhan",
        shortCode: "065"
      },
      {
        name: "Govi-Altay",
        shortCode: "065"
      },
      {
        name: "Govi-Sumber",
        shortCode: "064"
      },
      {
        name: "Hovd",
        shortCode: "043"
      },
      {
        name: "Hovsgol",
        shortCode: "041"
      },
      {
        name: "Omnogovi",
        shortCode: "053"
      },
      {
        name: "Ovorhangay",
        shortCode: "055"
      },
      {
        name: "Selenge",
        shortCode: "049"
      },
      {
        name: "Suhbaatar",
        shortCode: "051"
      },
      {
        name: "Tov",
        shortCode: "047"
      },
      {
        name: "Ulaanbaatar",
        shortCode: "1"
      },
      {
        name: "Uvs",
        shortCode: "046"
      }
    ]
  },
  {
    countryName: "Montenegro",
    countryShortCode: "ME",
    regions: [
      {
        name: "Andrijevica",
        shortCode: "01"
      },
      {
        name: "Bar",
        shortCode: "02"
      },
      {
        name: "Berane",
        shortCode: "03"
      },
      {
        name: "Bijelo Polje",
        shortCode: "04"
      },
      {
        name: "Budva",
        shortCode: "05"
      },
      {
        name: "Cetinje",
        shortCode: "06"
      },
      {
        name: "Danilovgrad",
        shortCode: "07"
      },
      {
        name: "Gusinje",
        shortCode: "22"
      },
      {
        name: "Herceg Novi",
        shortCode: "08"
      },
      {
        name: "Kolašin",
        shortCode: "09"
      },
      {
        name: "Kotor",
        shortCode: "10"
      },
      {
        name: "Mojkovac",
        shortCode: "11"
      },
      {
        name: "Nikšić",
        shortCode: "12"
      },
      {
        name: "Petnica",
        shortCode: "23"
      },
      {
        name: "Plav",
        shortCode: "13"
      },
      {
        name: "Plužine",
        shortCode: "14"
      },
      {
        name: "Pljevlja",
        shortCode: "15"
      },
      {
        name: "Podgorica",
        shortCode: "16"
      },
      {
        name: "Rožaje",
        shortCode: "17"
      },
      {
        name: "Šavnik",
        shortCode: "18"
      },
      {
        name: "Tivat",
        shortCode: "19"
      },
      {
        name: "Ulcinj",
        shortCode: "20"
      },
      {
        name: "Žabljak",
        shortCode: "21"
      }
    ]
  },
  {
    countryName: "Montserrat",
    countryShortCode: "MS",
    regions: [
      {
        name: "Saint Anthony"
      },
      {
        name: "Saint Georges"
      },
      {
        name: "Saint Peter's"
      }
    ]
  },
  {
    countryName: "Morocco",
    countryShortCode: "MA",
    regions: [
      {
        name: "Chaouia-Ouardigha",
        shortCode: "09"
      },
      {
        name: "Doukhala-Abda",
        shortCode: "10"
      },
      {
        name: "Fès-Boulemane",
        shortCode: "05"
      },
      {
        name: "Gharb-Chrarda-Beni Hssen",
        shortCode: "02"
      },
      {
        name: "Grand Casablanca",
        shortCode: "08"
      },
      {
        name: "Guelmim-Es Semara",
        shortCode: "14"
      },
      {
        name: "Laâyoune-Boujdour-Sakia el Hamra",
        shortCode: "15"
      },
      {
        name: "Marrakech-Tensift-Al Haouz",
        shortCode: "11"
      },
      {
        name: "Meknès-Tafilalet",
        shortCode: "06"
      },
      {
        name: "Oriental",
        shortCode: "04"
      },
      {
        name: "Oued ed Dahab-Lagouira",
        shortCode: "16"
      },
      {
        name: "Souss-Massa-Drâa",
        shortCode: "13"
      },
      {
        name: "Tadla-Azilal",
        shortCode: "12"
      },
      {
        name: "Tanger-Tétouan",
        shortCode: "01"
      },
      {
        name: "Taza-Al Hoceima-Taounate",
        shortCode: "03"
      }
    ]
  },
  {
    countryName: "Mozambique",
    countryShortCode: "MZ",
    regions: [
      {
        name: "Cabo Delgado",
        shortCode: "P"
      },
      {
        name: "Gaza",
        shortCode: "G"
      },
      {
        name: "Inhambane",
        shortCode: "I"
      },
      {
        name: "Manica",
        shortCode: "B"
      },
      {
        name: "Maputo",
        shortCode: "L"
      },
      {
        name: "Maputo (City)",
        shortCode: "MPM"
      },
      {
        name: "Nampula",
        shortCode: "N"
      },
      {
        name: "Niassa",
        shortCode: "A"
      },
      {
        name: "Sofala",
        shortCode: "S"
      },
      {
        name: "Tete",
        shortCode: "T"
      },
      {
        name: "Zambezia",
        shortCode: "Q"
      }
    ]
  },
  {
    countryName: "Myanmar",
    countryShortCode: "MM",
    regions: [
      {
        name: "Ayeyarwady",
        shortCode: "07"
      },
      {
        name: "Bago",
        shortCode: "02"
      },
      {
        name: "Chin",
        shortCode: "14"
      },
      {
        name: "Kachin",
        shortCode: "11"
      },
      {
        name: "Kayah",
        shortCode: "12"
      },
      {
        name: "Kayin",
        shortCode: "13"
      },
      {
        name: "Magway",
        shortCode: "03"
      },
      {
        name: "Mandalay",
        shortCode: "04"
      },
      {
        name: "Mon",
        shortCode: "15"
      },
      {
        name: "Nay Pyi Taw",
        shortCode: "18"
      },
      {
        name: "Rakhine",
        shortCode: "16"
      },
      {
        name: "Sagaing",
        shortCode: "01"
      },
      {
        name: "Shan",
        shortCode: "17"
      },
      {
        name: "Tanintharyi",
        shortCode: "05"
      },
      {
        name: "Yangon",
        shortCode: "06"
      }
    ]
  },
  {
    countryName: "Namibia",
    countryShortCode: "NA",
    regions: [
      {
        name: "Erongo",
        shortCode: "ER"
      },
      {
        name: "Hardap",
        shortCode: "HA"
      },
      {
        name: "Kavango East",
        shortCode: "KE"
      },
      {
        name: "Kavango West",
        shortCode: "KW"
      },
      {
        name: "Karas",
        shortCode: "KA"
      },
      {
        name: "Khomas",
        shortCode: "KH"
      },
      {
        name: "Kunene",
        shortCode: "KU"
      },
      {
        name: "Ohangwena",
        shortCode: "OW"
      },
      {
        name: "Omaheke",
        shortCode: "OH"
      },
      {
        name: "Omusati",
        shortCode: "OS"
      },
      {
        name: "Oshana",
        shortCode: "ON"
      },
      {
        name: "Oshikoto",
        shortCode: "OT"
      },
      {
        name: "Otjozondjupa",
        shortCode: "OD"
      },
      {
        name: "Zambezi",
        shortCode: "CA"
      }
    ]
  },
  {
    countryName: "Nauru",
    countryShortCode: "NR",
    regions: [
      {
        name: "Aiwo",
        shortCode: "01"
      },
      {
        name: "Anabar",
        shortCode: "02"
      },
      {
        name: "Anetan",
        shortCode: "03"
      },
      {
        name: "Anibare",
        shortCode: "04"
      },
      {
        name: "Baiti",
        shortCode: "05"
      },
      {
        name: "Boe",
        shortCode: "06"
      },
      {
        name: "Buada",
        shortCode: "07"
      },
      {
        name: "Denigomodu",
        shortCode: "08"
      },
      {
        name: "Ewa",
        shortCode: "09"
      },
      {
        name: "Ijuw",
        shortCode: "10"
      },
      {
        name: "Meneng",
        shortCode: "11"
      },
      {
        name: "Nibok",
        shortCode: "12"
      },
      {
        name: "Uaboe",
        shortCode: "13"
      },
      {
        name: "Yaren",
        shortCode: "14"
      }
    ]
  },
  {
    countryName: "Nepal",
    countryShortCode: "NP",
    regions: [
      {
        name: "Bagmati",
        shortCode: "BA"
      },
      {
        name: "Bheri",
        shortCode: "BH"
      },
      {
        name: "Dhawalagiri",
        shortCode: "DH"
      },
      {
        name: "Gandaki",
        shortCode: "GA"
      },
      {
        name: "Janakpur",
        shortCode: "JA"
      },
      {
        name: "Karnali",
        shortCode: "KA"
      },
      {
        name: "Kosi",
        shortCode: "KO"
      },
      {
        name: "Lumbini",
        shortCode: "LU"
      },
      {
        name: "Mahakali",
        shortCode: "MA"
      },
      {
        name: "Mechi",
        shortCode: "ME"
      },
      {
        name: "Narayani",
        shortCode: "NA"
      },
      {
        name: "Rapti",
        shortCode: "RA"
      },
      {
        name: "Sagarmatha",
        shortCode: "SA"
      },
      {
        name: "Seti",
        shortCode: "SE"
      }
    ]
  },
  {
    countryName: "Netherlands",
    countryShortCode: "NL",
    regions: [
      {
        name: "Drenthe",
        shortCode: "DR"
      },
      {
        name: "Flevoland",
        shortCode: "FL"
      },
      {
        name: "Friesland",
        shortCode: "FR"
      },
      {
        name: "Gelderland",
        shortCode: "GE"
      },
      {
        name: "Groningen",
        shortCode: "GR"
      },
      {
        name: "Limburg",
        shortCode: "LI"
      },
      {
        name: "Noord-Brabant",
        shortCode: "NB"
      },
      {
        name: "Noord-Holland",
        shortCode: "NH"
      },
      {
        name: "Overijssel",
        shortCode: "OV"
      },
      {
        name: "Utrecht",
        shortCode: "UT"
      },
      {
        name: "Zeeland",
        shortCode: "ZE"
      },
      {
        name: "Zuid-Holland",
        shortCode: "ZH"
      }
    ]
  },
  {
    countryName: "New Caledonia",
    countryShortCode: "NC",
    regions: [
      {
        name: "Iles Loyaute"
      },
      {
        name: "Nord"
      },
      {
        name: "Sud"
      }
    ]
  },
  {
    countryName: "New Zealand",
    countryShortCode: "NZ",
    regions: [
      {
        name: "Auckland",
        shortCode: "AUK"
      },
      {
        name: "Bay of Plenty",
        shortCode: "BOP"
      },
      {
        name: "Canterbury",
        shortCode: "CAN"
      },
      {
        name: "Gisborne",
        shortCode: "GIS"
      },
      {
        name: "Hawke's Bay",
        shortCode: "HKB"
      },
      {
        name: "Marlborough",
        shortCode: "MBH"
      },
      {
        name: "Manawatu-Wanganui",
        shortCode: "MWT"
      },
      {
        name: "Northland",
        shortCode: "NTL"
      },
      {
        name: "Nelson",
        shortCode: "NSN"
      },
      {
        name: "Otago",
        shortCode: "OTA"
      },
      {
        name: "Southland",
        shortCode: "STL"
      },
      {
        name: "Taranaki",
        shortCode: "TKI"
      },
      {
        name: "Tasman",
        shortCode: "TAS"
      },
      {
        name: "Waikato",
        shortCode: "WKO"
      },
      {
        name: "Wellington",
        shortCode: "WGN"
      },
      {
        name: "West Coast",
        shortCode: "WTC"
      },
      {
        name: "Chatham Islands Territory",
        shortCode: "CIT"
      }
    ]
  },
  {
    countryName: "Nicaragua",
    countryShortCode: "NI",
    regions: [
      {
        name: "Boaco",
        shortCode: "BO"
      },
      {
        name: "Carazo",
        shortCode: "CA"
      },
      {
        name: "Chinandega",
        shortCode: "CI"
      },
      {
        name: "Chontales",
        shortCode: "CO"
      },
      {
        name: "Estelí",
        shortCode: "ES"
      },
      {
        name: "Granada",
        shortCode: "GR"
      },
      {
        name: "Jinotega",
        shortCode: "JI"
      },
      {
        name: "León",
        shortCode: "LE"
      },
      {
        name: "Madriz",
        shortCode: "MD"
      },
      {
        name: "Managua",
        shortCode: "MN"
      },
      {
        name: "Masaya",
        shortCode: "MS"
      },
      {
        name: "Matagalpa",
        shortCode: "MT"
      },
      {
        name: "Nueva Segovia",
        shortCode: "NS"
      },
      {
        name: "Río San Juan",
        shortCode: "SJ"
      },
      {
        name: "Rivas",
        shortCode: "RI"
      },
      {
        name: "Atlántico Norte",
        shortCode: "AN"
      },
      {
        name: "Atlántico Sur",
        shortCode: "AS"
      }
    ]
  },
  {
    countryName: "Niger",
    countryShortCode: "NE",
    regions: [
      {
        name: "Agadez",
        shortCode: "1"
      },
      {
        name: "Diffa",
        shortCode: "2"
      },
      {
        name: "Dosso",
        shortCode: "3"
      },
      {
        name: "Maradi",
        shortCode: "4"
      },
      {
        name: "Niamey",
        shortCode: "8"
      },
      {
        name: "Tahoua",
        shortCode: "5"
      },
      {
        name: "Tillabéri",
        shortCode: "6"
      },
      {
        name: "Zinder",
        shortCode: "7"
      }
    ]
  },
  {
    countryName: "Nigeria",
    countryShortCode: "NG",
    regions: [
      {
        name: "Abia",
        shortCode: "AB"
      },
      {
        name: "Abuja Federal Capital Territory",
        shortCode: "FC"
      },
      {
        name: "Adamawa",
        shortCode: "AD"
      },
      {
        name: "Akwa Ibom",
        shortCode: "AK"
      },
      {
        name: "Anambra",
        shortCode: "AN"
      },
      {
        name: "Bauchi",
        shortCode: "BA"
      },
      {
        name: "Bayelsa",
        shortCode: "BY"
      },
      {
        name: "Benue",
        shortCode: "BE"
      },
      {
        name: "Borno",
        shortCode: "BO"
      },
      {
        name: "Cross River",
        shortCode: "CR"
      },
      {
        name: "Delta",
        shortCode: "DE"
      },
      {
        name: "Ebonyi",
        shortCode: "EB"
      },
      {
        name: "Edo",
        shortCode: "ED"
      },
      {
        name: "Ekiti",
        shortCode: "EK"
      },
      {
        name: "Enugu",
        shortCode: "EN"
      },
      {
        name: "Gombe",
        shortCode: "GO"
      },
      {
        name: "Imo",
        shortCode: "IM"
      },
      {
        name: "Jigawa",
        shortCode: "JI"
      },
      {
        name: "Kaduna",
        shortCode: "KD"
      },
      {
        name: "Kano",
        shortCode: "KN"
      },
      {
        name: "Katsina",
        shortCode: "KT"
      },
      {
        name: "Kebbi",
        shortCode: "KE"
      },
      {
        name: "Kogi",
        shortCode: "KO"
      },
      {
        name: "Kwara",
        shortCode: "KW"
      },
      {
        name: "Lagos",
        shortCode: "LA"
      },
      {
        name: "Nassarawa",
        shortCode: "NA"
      },
      {
        name: "Niger",
        shortCode: "NI"
      },
      {
        name: "Ogun",
        shortCode: "OG"
      },
      {
        name: "Ondo",
        shortCode: "ON"
      },
      {
        name: "Osun",
        shortCode: "OS"
      },
      {
        name: "Oyo",
        shortCode: "OY"
      },
      {
        name: "Plateau",
        shortCode: "PL"
      },
      {
        name: "Rivers",
        shortCode: "RI"
      },
      {
        name: "Sokoto",
        shortCode: "SO"
      },
      {
        name: "Taraba",
        shortCode: "TA"
      },
      {
        name: "Yobe",
        shortCode: "YO"
      },
      {
        name: "Zamfara",
        shortCode: "ZA"
      }
    ]
  },
  {
    countryName: "Niue",
    countryShortCode: "NU",
    regions: [
      {
        name: "Niue"
      }
    ]
  },
  {
    countryName: "Norfolk Island",
    countryShortCode: "NF",
    regions: [
      {
        name: "Norfolk Island"
      }
    ]
  },
  {
    countryName: "Northern Mariana Islands",
    countryShortCode: "MP",
    regions: [
      {
        name: "Northern Islands"
      },
      {
        name: "Rota"
      },
      {
        name: "Saipan"
      },
      {
        name: "Tinian"
      }
    ]
  },
  {
    countryName: "Norway",
    countryShortCode: "NO",
    regions: [
      {
        name: "Akershus",
        shortCode: "02"
      },
      {
        name: "Aust-Agder",
        shortCode: "09"
      },
      {
        name: "Buskerud",
        shortCode: "06"
      },
      {
        name: "Finnmark",
        shortCode: "20"
      },
      {
        name: "Hedmark",
        shortCode: "04"
      },
      {
        name: "Hordaland",
        shortCode: "12"
      },
      {
        name: "Møre og Romsdal",
        shortCode: "15"
      },
      {
        name: "Nordland",
        shortCode: "18"
      },
      {
        name: "Nord-Trøndelag",
        shortCode: "17"
      },
      {
        name: "Oppland",
        shortCode: "05"
      },
      {
        name: "Oslo",
        shortCode: "03"
      },
      {
        name: "Rogaland",
        shortCode: "11"
      },
      {
        name: "Sogn og Fjordane",
        shortCode: "14"
      },
      {
        name: "Sør-Trøndelag",
        shortCode: "16"
      },
      {
        name: "Telemark",
        shortCode: "08"
      },
      {
        name: "Troms",
        shortCode: "19"
      },
      {
        name: "Vest-Agder",
        shortCode: "10"
      },
      {
        name: "Vestfold",
        shortCode: "07"
      },
      {
        name: "Østfold",
        shortCode: "01"
      },
      {
        name: "Jan Mayen",
        shortCode: "22"
      },
      {
        name: "Svalbard",
        shortCode: "21"
      }
    ]
  },
  {
    countryName: "Oman",
    countryShortCode: "OM",
    regions: [
      {
        name: "Ad Dakhiliyah",
        shortCode: "DA"
      },
      {
        name: "Al Buraymi",
        shortCode: "BU"
      },
      {
        name: "Al Wusta",
        shortCode: "WU"
      },
      {
        name: "Az Zahirah",
        shortCode: "ZA"
      },
      {
        name: "Janub al Batinah",
        shortCode: "BS"
      },
      {
        name: "Janub ash Sharqiyah",
        shortCode: "SS"
      },
      {
        name: "Masqat",
        shortCode: "MA"
      },
      {
        name: "Musandam",
        shortCode: "MU"
      },
      {
        name: "Shamal al Batinah",
        shortCode: "BJ"
      },
      {
        name: "Shamal ash Sharqiyah",
        shortCode: "SJ"
      },
      {
        name: "Zufar",
        shortCode: "ZU"
      }
    ]
  },
  {
    countryName: "Pakistan",
    countryShortCode: "PK",
    regions: [
      {
        name: "Āzād Kashmīr",
        shortCode: "JK"
      },
      {
        name: "Balōchistān",
        shortCode: "BA"
      },
      {
        name: "Gilgit-Baltistān",
        shortCode: "GB"
      },
      {
        name: "Islāmābād",
        shortCode: "IS"
      },
      {
        name: "Khaībar Pakhtūnkhwās",
        shortCode: "KP"
      },
      {
        name: "Punjāb",
        shortCode: "PB"
      },
      {
        name: "Sindh",
        shortCode: "SD"
      },
      {
        name: "Federally Administered Tribal Areas",
        shortCode: "TA"
      }
    ]
  },
  {
    countryName: "Palau",
    countryShortCode: "PW",
    regions: [
      {
        name: "Aimeliik",
        shortCode: "002"
      },
      {
        name: "Airai",
        shortCode: "004"
      },
      {
        name: "Angaur",
        shortCode: "010"
      },
      {
        name: "Hatobohei",
        shortCode: "050"
      },
      {
        name: "Kayangel",
        shortCode: "100"
      },
      {
        name: "Koror",
        shortCode: "150"
      },
      {
        name: "Melekeok",
        shortCode: "212"
      },
      {
        name: "Ngaraard",
        shortCode: "214"
      },
      {
        name: "Ngarchelong",
        shortCode: "218"
      },
      {
        name: "Ngardmau",
        shortCode: "222"
      },
      {
        name: "Ngatpang",
        shortCode: "224"
      },
      {
        name: "Ngchesar",
        shortCode: "226"
      },
      {
        name: "Ngeremlengui",
        shortCode: "227"
      },
      {
        name: "Ngiwal",
        shortCode: "228"
      },
      {
        name: "Peleliu",
        shortCode: "350"
      },
      {
        name: "Sonsoral",
        shortCode: "350"
      }
    ]
  },
  {
    countryName: "Palestine, State of",
    countryShortCode: "PS",
    regions: [
      {
        name: "Ak Khalīl",
        shortCode: "HBN"
      },
      {
        name: "Al Quds",
        shortCode: "JEM"
      },
      {
        name: "Arīḩā wal Aghwār",
        shortCode: "JRH"
      },
      {
        name: "Bayt Laḩm",
        shortCode: "BTH"
      },
      {
        name: "Dayr al Balaḩ",
        shortCode: "DEB"
      },
      {
        name: "Ghazzah",
        shortCode: "GZA"
      },
      {
        name: "Janīn",
        shortCode: "JEN"
      },
      {
        name: "Khān Yūnis",
        shortCode: "KYS"
      },
      {
        name: "Nāblus",
        shortCode: "NBS"
      },
      {
        name: "Qalqīyah",
        shortCode: "QQA"
      },
      {
        name: "Rafaḩ",
        shortCode: "RFH"
      },
      {
        name: "Rām Allāh wal Bīrah",
        shortCode: "RBH"
      },
      {
        name: "Salfīt",
        shortCode: "SLT"
      },
      {
        name: "Shamāl Ghazzah",
        shortCode: "NGZ"
      },
      {
        name: "Ţūbās",
        shortCode: "TBS"
      },
      {
        name: "Ţūlkarm",
        shortCode: "TKM"
      }
    ]
  },
  {
    countryName: "Panama",
    countryShortCode: "PA",
    regions: [
      {
        name: "Bocas del Toro",
        shortCode: "1"
      },
      {
        name: "Chiriquí",
        shortCode: "4"
      },
      {
        name: "Coclé",
        shortCode: "2"
      },
      {
        name: "Colón",
        shortCode: "3"
      },
      {
        name: "Darién",
        shortCode: "5"
      },
      {
        name: "Emberá",
        shortCode: "EM"
      },
      {
        name: "Herrera",
        shortCode: "6"
      },
      {
        name: "Kuna Yala",
        shortCode: "KY"
      },
      {
        name: "Los Santos",
        shortCode: "7"
      },
      {
        name: "Ngäbe-Buglé",
        shortCode: "NB"
      },
      {
        name: "Panamá",
        shortCode: "8"
      },
      {
        name: "Panamá Oeste",
        shortCode: "10"
      },
      {
        name: "Veraguas",
        shortCode: "9"
      }
    ]
  },
  {
    countryName: "Papua New Guinea",
    countryShortCode: "PG",
    regions: [
      {
        name: "Bougainville",
        shortCode: "NSB"
      },
      {
        name: "Central",
        shortCode: "CPM"
      },
      {
        name: "Chimbu",
        shortCode: "CPK"
      },
      {
        name: "East New Britain",
        shortCode: "EBR"
      },
      {
        name: "East Sepik",
        shortCode: "ESW"
      },
      {
        name: "Eastern Highlands",
        shortCode: "EHG"
      },
      {
        name: "Enga",
        shortCode: "EPW"
      },
      {
        name: "Gulf",
        shortCode: "GPK"
      },
      {
        name: "Hela",
        shortCode: "HLA"
      },
      {
        name: "Jiwaka",
        shortCode: "JWK"
      },
      {
        name: "Madang",
        shortCode: "MOM"
      },
      {
        name: "Manus",
        shortCode: "MRL"
      },
      {
        name: "Milne Bay",
        shortCode: "MBA"
      },
      {
        name: "Morobe",
        shortCode: "MPL"
      },
      {
        name: "Port Moresby",
        shortCode: "NCD"
      },
      {
        name: "New Ireland",
        shortCode: "NIK"
      },
      {
        name: "Northern",
        shortCode: "NPP"
      },
      {
        name: "Southern Highlands",
        shortCode: "SHM"
      },
      {
        name: "West New Britain",
        shortCode: "WBK"
      },
      {
        name: "West Sepik",
        shortCode: "SAN"
      },
      {
        name: "Western",
        shortCode: "WPD"
      },
      {
        name: "Western Highlands",
        shortCode: "WHM"
      }
    ]
  },
  {
    countryName: "Paraguay",
    countryShortCode: "PY",
    regions: [
      {
        name: "Alto Paraguay",
        shortCode: "16"
      },
      {
        name: "Alto Parana",
        shortCode: "10"
      },
      {
        name: "Amambay",
        shortCode: "13"
      },
      {
        name: "Asuncion",
        shortCode: "ASU"
      },
      {
        name: "Caaguazu",
        shortCode: "5"
      },
      {
        name: "Caazapa",
        shortCode: "6"
      },
      {
        name: "Canindeyu",
        shortCode: "14"
      },
      {
        name: "Central",
        shortCode: "11"
      },
      {
        name: "Concepcion",
        shortCode: "1"
      },
      {
        name: "Cordillera",
        shortCode: "3"
      },
      {
        name: "Guaira",
        shortCode: "4"
      },
      {
        name: "Itapua",
        shortCode: "7"
      },
      {
        name: "Misiones",
        shortCode: "8"
      },
      {
        name: "Neembucu",
        shortCode: "12"
      },
      {
        name: "Paraguari",
        shortCode: "9"
      },
      {
        name: "Presidente Hayes",
        shortCode: "15"
      },
      {
        name: "San Pedro",
        shortCode: "2"
      }
    ]
  },
  {
    countryName: "Peru",
    countryShortCode: "PE",
    regions: [
      {
        name: "Amazonas",
        shortCode: "AMA"
      },
      {
        name: "Ancash",
        shortCode: "ANC"
      },
      {
        name: "Apurimac",
        shortCode: "APU"
      },
      {
        name: "Arequipa",
        shortCode: "ARE"
      },
      {
        name: "Ayacucho",
        shortCode: "AYA"
      },
      {
        name: "Cajamarca",
        shortCode: "CAJ"
      },
      {
        name: "Callao",
        shortCode: "CAL"
      },
      {
        name: "Cusco",
        shortCode: "CUS"
      },
      {
        name: "Huancavelica",
        shortCode: "HUV"
      },
      {
        name: "Huanuco",
        shortCode: "HUC"
      },
      {
        name: "Ica",
        shortCode: "ICA"
      },
      {
        name: "Junin",
        shortCode: "JUN"
      },
      {
        name: "La Libertad",
        shortCode: "LAL"
      },
      {
        name: "Lambayeque",
        shortCode: "LAM"
      },
      {
        name: "Lima",
        shortCode: "LIM"
      },
      {
        name: "Loreto",
        shortCode: "LOR"
      },
      {
        name: "Madre de Dios",
        shortCode: "MDD"
      },
      {
        name: "Moquegua",
        shortCode: "MOQ"
      },
      {
        name: "Municipalidad Metropolitana de Lima",
        shortCode: "LMA"
      },
      {
        name: "Pasco",
        shortCode: "PAS"
      },
      {
        name: "Piura",
        shortCode: "PIU"
      },
      {
        name: "Puno",
        shortCode: "PUN"
      },
      {
        name: "San Martin",
        shortCode: "SAM"
      },
      {
        name: "Tacna",
        shortCode: "TAC"
      },
      {
        name: "Tumbes",
        shortCode: "TUM"
      },
      {
        name: "Ucayali",
        shortCode: "UCA"
      }
    ]
  },
  {
    countryName: "Philippines",
    countryShortCode: "PH",
    regions: [
      {
        name: "Abra",
        shortCode: "ABR"
      },
      {
        name: "Agusan del Norte",
        shortCode: "AGN"
      },
      {
        name: "Agusan del Sur",
        shortCode: "AGS"
      },
      {
        name: "Aklan",
        shortCode: "AKL"
      },
      {
        name: "Albay",
        shortCode: "ALB"
      },
      {
        name: "Antique",
        shortCode: "ANT"
      },
      {
        name: "Apayao",
        shortCode: "APA"
      },
      {
        name: "Aurora",
        shortCode: "AUR"
      },
      {
        name: "Basilan",
        shortCode: "BAS"
      },
      {
        name: "Bataan",
        shortCode: "BAN"
      },
      {
        name: "Batanes",
        shortCode: "BTN"
      },
      {
        name: "Batangas",
        shortCode: "BTG"
      },
      {
        name: "Benguet",
        shortCode: "BEN"
      },
      {
        name: "Biliran",
        shortCode: "BIL"
      },
      {
        name: "Bohol",
        shortCode: "BOH"
      },
      {
        name: "Bukidnon",
        shortCode: "BUK"
      },
      {
        name: "Bulacan",
        shortCode: "BUL"
      },
      {
        name: "Cagayan",
        shortCode: "CAG"
      },
      {
        name: "Camarines Norte",
        shortCode: "CAN"
      },
      {
        name: "Camarines Sur",
        shortCode: "CAS"
      },
      {
        name: "Camiguin",
        shortCode: "CAM"
      },
      {
        name: "Capiz",
        shortCode: "CAP"
      },
      {
        name: "Catanduanes",
        shortCode: "CAT"
      },
      {
        name: "Cavite",
        shortCode: "CAV"
      },
      {
        name: "Cebu",
        shortCode: "CEB"
      },
      {
        name: "Compostela",
        shortCode: "COM"
      },
      {
        name: "Cotabato",
        shortCode: "NCO"
      },
      {
        name: "Davao del Norte",
        shortCode: "DAV"
      },
      {
        name: "Davao del Sur",
        shortCode: "DAS"
      },
      {
        name: "Davao Occidental",
        shortCode: "DVO"
      },
      {
        name: "Davao Oriental",
        shortCode: "DAO"
      },
      {
        name: "Dinagat Islands",
        shortCode: "DIN"
      },
      {
        name: "Eastern Samar",
        shortCode: "EAS"
      },
      {
        name: "Guimaras",
        shortCode: "GUI"
      },
      {
        name: "Ifugao",
        shortCode: "IFU"
      },
      {
        name: "Ilocos Norte",
        shortCode: "ILN"
      },
      {
        name: "Ilocos Sur",
        shortCode: "ILS"
      },
      {
        name: "Iloilo",
        shortCode: "ILI"
      },
      {
        name: "Isabela",
        shortCode: "ISA"
      },
      {
        name: "Kalinga",
        shortCode: "KAL"
      },
      {
        name: "La Union",
        shortCode: "LUN"
      },
      {
        name: "Laguna",
        shortCode: "LAG"
      },
      {
        name: "Lanao del Norte",
        shortCode: "LAN"
      },
      {
        name: "Lanao del Sur",
        shortCode: "LAS"
      },
      {
        name: "Leyte",
        shortCode: "LEY"
      },
      {
        name: "Maguindanao",
        shortCode: "MAG"
      },
      {
        name: "Masbate",
        shortCode: "MAS"
      },
      {
        name: "Metro Manila",
        shortCode: "00"
      },
      {
        name: "Mindoro Occidental",
        shortCode: "MDC"
      },
      {
        name: "Mindoro Oriental",
        shortCode: "MDR"
      },
      {
        name: "Misamis Occidental",
        shortCode: "MSC"
      },
      {
        name: "Misamis Oriental",
        shortCode: "MSR"
      },
      {
        name: "Mountain Province",
        shortCode: "MOU"
      },
      {
        name: "Negros Occidental",
        shortCode: "NEC"
      },
      {
        name: "Negros Oriental",
        shortCode: "NER"
      },
      {
        name: "Northern Samar",
        shortCode: "NSA"
      },
      {
        name: "Nueva Ecija",
        shortCode: "NUE"
      },
      {
        name: "Nueva Vizcaya",
        shortCode: "NUV"
      },
      {
        name: "Palawan",
        shortCode: "PLW"
      },
      {
        name: "Pampanga",
        shortCode: "PAM"
      },
      {
        name: "Pangasinan",
        shortCode: "PAN"
      },
      {
        name: "Quezon",
        shortCode: "QUE"
      },
      {
        name: "Quirino",
        shortCode: "QUI"
      },
      {
        name: "Rizal",
        shortCode: "RIZ"
      },
      {
        name: "Romblon",
        shortCode: "ROM"
      },
      {
        name: "Samar",
        shortCode: "WSA"
      },
      {
        name: "Sarangani",
        shortCode: "SAR"
      },
      {
        name: "Siquijor",
        shortCode: "SIG"
      },
      {
        name: "Sorsogon",
        shortCode: "SOR"
      },
      {
        name: "Southern Leyte",
        shortCode: "SLE"
      },
      {
        name: "Sultan Kudarat",
        shortCode: "AUK"
      },
      {
        name: "Sulu",
        shortCode: "SLU"
      },
      {
        name: "Surigao del Norte",
        shortCode: "SUN"
      },
      {
        name: "Surigao del Sur",
        shortCode: "SUR"
      },
      {
        name: "Tarlac",
        shortCode: "TAR"
      },
      {
        name: "Tawi-Tawi",
        shortCode: "TAW"
      },
      {
        name: "Zambales",
        shortCode: "ZMB"
      },
      {
        name: "Zamboanga del Norte",
        shortCode: "ZAN"
      },
      {
        name: "Zamboanga del Sur",
        shortCode: "ZAS"
      },
      {
        name: "Zamboanga Sibugay",
        shortCode: "ZSI"
      }
    ]
  },
  {
    countryName: "Pitcairn",
    countryShortCode: "PN",
    regions: [
      {
        name: "Pitcairn Islands"
      }
    ]
  },
  {
    countryName: "Poland",
    countryShortCode: "PL",
    regions: [
      {
        name: "Dolnośląskie",
        shortCode: "DS"
      },
      {
        name: "Kujawsko-pomorskie",
        shortCode: "KP"
      },
      {
        name: "Łódzkie",
        shortCode: "LD"
      },
      {
        name: "Lubelskie",
        shortCode: "LU"
      },
      {
        name: "Lubuskie",
        shortCode: "LB"
      },
      {
        name: "Malopolskie",
        shortCode: "MA"
      },
      {
        name: "Mazowieckie",
        shortCode: "MZ"
      },
      {
        name: "Opolskie",
        shortCode: "OP"
      },
      {
        name: "Podkarpackie",
        shortCode: "PK"
      },
      {
        name: "Podlaskie",
        shortCode: "PD"
      },
      {
        name: "Pomorskie",
        shortCode: "PM"
      },
      {
        name: "Śląskie",
        shortCode: "SL"
      },
      {
        name: "Świętokrzyskie",
        shortCode: "SK"
      },
      {
        name: "Warmińsko-mazurskie",
        shortCode: "WN"
      },
      {
        name: "Wielkopolskie",
        shortCode: "WP"
      },
      {
        name: "Zachodniopomorskie",
        shortCode: "ZP"
      }
    ]
  },
  {
    countryName: "Portugal",
    countryShortCode: "PT",
    regions: [
      {
        name: "Açores",
        shortCode: "20"
      },
      {
        name: "Aveiro",
        shortCode: "01"
      },
      {
        name: "Beja",
        shortCode: "02"
      },
      {
        name: "Braga",
        shortCode: "03"
      },
      {
        name: "Bragança",
        shortCode: "04"
      },
      {
        name: "Castelo Branco",
        shortCode: "05"
      },
      {
        name: "Coimbra",
        shortCode: "06"
      },
      {
        name: "Évora",
        shortCode: "07"
      },
      {
        name: "Faro",
        shortCode: "08"
      },
      {
        name: "Guarda",
        shortCode: "09"
      },
      {
        name: "Leiria",
        shortCode: "10"
      },
      {
        name: "Lisboa",
        shortCode: "11"
      },
      {
        name: "Madeira",
        shortCode: "30"
      },
      {
        name: "Portalegre",
        shortCode: "12"
      },
      {
        name: "Porto",
        shortCode: "13"
      },
      {
        name: "Santarém",
        shortCode: "14"
      },
      {
        name: "Setúbal",
        shortCode: "15"
      },
      {
        name: "Viana do Castelo",
        shortCode: "16"
      },
      {
        name: "Vila Real",
        shortCode: "17"
      },
      {
        name: "Viseu",
        shortCode: "18"
      }
    ]
  },
  {
    countryName: "Puerto Rico",
    countryShortCode: "PR",
    regions: [
      {
        name: "Adjuntas"
      },
      {
        name: "Aguada"
      },
      {
        name: "Aguadilla"
      },
      {
        name: "Aguas Buenas"
      },
      {
        name: "Aibonito"
      },
      {
        name: "Anasco"
      },
      {
        name: "Arecibo"
      },
      {
        name: "Arroyo"
      },
      {
        name: "Barceloneta"
      },
      {
        name: "Barranquitas"
      },
      {
        name: "Bayamon"
      },
      {
        name: "Cabo Rojo"
      },
      {
        name: "Caguas"
      },
      {
        name: "Camuy"
      },
      {
        name: "Canovanas"
      },
      {
        name: "Carolina"
      },
      {
        name: "Cat"
      },
      {
        name: "Ceiba"
      },
      {
        name: "Ciales"
      },
      {
        name: "Cidra"
      },
      {
        name: "Coamo"
      },
      {
        name: "Comerio"
      },
      {
        name: "Corozal"
      },
      {
        name: "Culebra"
      },
      {
        name: "Dorado"
      },
      {
        name: "Fajardo"
      },
      {
        name: "Florida"
      },
      {
        name: "Guanica"
      },
      {
        name: "Guayama"
      },
      {
        name: "Guayanilla"
      },
      {
        name: "Guaynabo"
      },
      {
        name: "Gurabo"
      },
      {
        name: "Hatillo"
      },
      {
        name: "Hormigueros"
      },
      {
        name: "Humacao"
      },
      {
        name: "Isabe"
      },
      {
        name: "Juana Diaz"
      },
      {
        name: "Juncos"
      },
      {
        name: "Lajas"
      },
      {
        name: "Lares"
      },
      {
        name: "Las Marias"
      },
      {
        name: "Las oiza"
      },
      {
        name: "Luquillo"
      },
      {
        name: "Manati"
      },
      {
        name: "Maricao"
      },
      {
        name: "Maunabo"
      },
      {
        name: "Mayaguez"
      },
      {
        name: "Moca"
      },
      {
        name: "Morovis"
      },
      {
        name: "Naguabo"
      },
      {
        name: "Naranjito"
      },
      {
        name: "Orocovis"
      },
      {
        name: "Patillas"
      },
      {
        name: "Penuelas"
      },
      {
        name: "Ponce"
      },
      {
        name: "Quebradillas"
      },
      {
        name: "Rincon"
      },
      {
        name: "Rio Grande"
      },
      {
        name: "Sabana linas"
      },
      {
        name: "San German"
      },
      {
        name: "San Juan"
      },
      {
        name: "San Lorenzo"
      },
      {
        name: "San Sebastian"
      },
      {
        name: "Santa Isabel"
      },
      {
        name: "Toa Alta"
      },
      {
        name: "Toa Baja"
      },
      {
        name: "Trujillo Alto"
      },
      {
        name: "Utuado"
      },
      {
        name: "Vega Alta"
      },
      {
        name: "Vega ues"
      },
      {
        name: "Villalba"
      },
      {
        name: "Yabucoa"
      },
      {
        name: "Yauco"
      }
    ]
  },
  {
    countryName: "Qatar",
    countryShortCode: "QA",
    regions: [
      {
        name: "Ad Dawḩah",
        shortCode: "DA"
      },
      {
        name: "Al Khawr wa adh Dhakhīrah",
        shortCode: "KH"
      },
      {
        name: "Al Wakrah",
        shortCode: "WA"
      },
      {
        name: "Ar Rayyān",
        shortCode: "RA"
      },
      {
        name: "Ash Shamāl",
        shortCode: "MS"
      },
      {
        name: "Az̧ Za̧`āyin",
        shortCode: "ZA"
      },
      {
        name: "Umm Şalāl",
        shortCode: "US"
      }
    ]
  },
  {
    countryName: "Réunion",
    countryShortCode: "RE",
    regions: [
      {
        name: "Réunion"
      }
    ]
  },
  {
    countryName: "Romania",
    countryShortCode: "RO",
    regions: [
      {
        name: "Alba",
        shortCode: "AB"
      },
      {
        name: "Arad",
        shortCode: "AR"
      },
      {
        name: "Arges",
        shortCode: "AG"
      },
      {
        name: "Bacau",
        shortCode: "BC"
      },
      {
        name: "Bihor",
        shortCode: "BH"
      },
      {
        name: "Bistrita-Nasaud",
        shortCode: "BN"
      },
      {
        name: "Botosani",
        shortCode: "BT"
      },
      {
        name: "Braila",
        shortCode: "BR"
      },
      {
        name: "Brasov",
        shortCode: "BV"
      },
      {
        name: "Bucuresti",
        shortCode: "B"
      },
      {
        name: "Buzau",
        shortCode: "BZ"
      },
      {
        name: "Calarasi",
        shortCode: "CL"
      },
      {
        name: "Caras-Severin",
        shortCode: "CS"
      },
      {
        name: "Cluj",
        shortCode: "CJ"
      },
      {
        name: "Constanta",
        shortCode: "CT"
      },
      {
        name: "Covasna",
        shortCode: "CV"
      },
      {
        name: "Dambovita",
        shortCode: "DB"
      },
      {
        name: "Dolj",
        shortCode: "DJ"
      },
      {
        name: "Galati",
        shortCode: "GL"
      },
      {
        name: "Giurgiu",
        shortCode: "GR"
      },
      {
        name: "Gorj",
        shortCode: "GJ"
      },
      {
        name: "Harghita",
        shortCode: "HR"
      },
      {
        name: "Hunedoara",
        shortCode: "HD"
      },
      {
        name: "Ialomita",
        shortCode: "IL"
      },
      {
        name: "Iasi",
        shortCode: "IS"
      },
      {
        name: "Maramures",
        shortCode: "MM"
      },
      {
        name: "Mehedinti",
        shortCode: "MH"
      },
      {
        name: "Mures",
        shortCode: "MS"
      },
      {
        name: "Neamt",
        shortCode: "NT"
      },
      {
        name: "Olt",
        shortCode: "OT"
      },
      {
        name: "Prahova",
        shortCode: "PH"
      },
      {
        name: "Salaj",
        shortCode: "SJ"
      },
      {
        name: "Satu Mare",
        shortCode: "SM"
      },
      {
        name: "Sibiu",
        shortCode: "SB"
      },
      {
        name: "Suceava",
        shortCode: "SV"
      },
      {
        name: "Teleorman",
        shortCode: "TR"
      },
      {
        name: "Timis",
        shortCode: "TM"
      },
      {
        name: "Tulcea",
        shortCode: "TL"
      },
      {
        name: "Valcea",
        shortCode: "VL"
      },
      {
        name: "Vaslui",
        shortCode: "VS"
      },
      {
        name: "Vrancea",
        shortCode: "VN"
      }
    ]
  },
  {
    countryName: "Russian Federation",
    countryShortCode: "RU",
    regions: [
      {
        name: "Republic of Adygea",
        shortCode: "AD"
      },
      {
        name: "Republic of Altai (Gorno-Altaysk)",
        shortCode: "AL"
      },
      {
        name: "Altai Krai",
        shortCode: "ALT"
      },
      {
        name: "Amur Oblast",
        shortCode: "AMU"
      },
      {
        name: "Arkhangelsk Oblast",
        shortCode: "ARK"
      },
      {
        name: "Astrakhan Oblast",
        shortCode: "AST"
      },
      {
        name: "Republic of Bashkortostan",
        shortCode: "BA"
      },
      {
        name: "Belgorod Oblast",
        shortCode: "BEL"
      },
      {
        name: "Bryansk Oblast",
        shortCode: "BRY"
      },
      {
        name: "Republic of Buryatia",
        shortCode: "BU"
      },
      {
        name: "Chechen Republic",
        shortCode: "CE"
      },
      {
        name: "Chelyabinsk Oblast",
        shortCode: "CHE"
      },
      {
        name: "Chukotka Autonomous Okrug",
        shortCode: "CHU"
      },
      {
        name: "Chuvash Republic",
        shortCode: "CU"
      },
      {
        name: "Republic of Dagestan",
        shortCode: "DA"
      },
      {
        name: "Republic of Ingushetia",
        shortCode: "IN"
      },
      {
        name: "Irkutsk Oblast",
        shortCode: "IRK"
      },
      {
        name: "Ivanovo Oblast",
        shortCode: "IVA"
      },
      {
        name: "Jewish Autonomous Oblast",
        shortCode: "JEW"
      },
      {
        name: "Kabardino-Balkar Republic",
        shortCode: "KB"
      },
      {
        name: "Kaliningrad Oblast",
        shortCode: "KLN"
      },
      {
        name: "Republic of Kalmykia",
        shortCode: "KL"
      },
      {
        name: "Kaluga Oblast",
        shortCode: "KLU"
      },
      {
        name: "Kamchatka Krai",
        shortCode: "KAM"
      },
      {
        name: "Karachay-Cherkess Republic",
        shortCode: "KC"
      },
      {
        name: "Republic of Karelia",
        shortCode: "KR"
      },
      {
        name: "Khabarovsk Krai",
        shortCode: "KHA"
      },
      {
        name: "Republic of Khakassia",
        shortCode: "KK"
      },
      {
        name: "Khanty-Mansi Autonomous Okrug - Yugra",
        shortCode: "KHM"
      },
      {
        name: "Kemerovo Oblast",
        shortCode: "KEM"
      },
      {
        name: "Kirov Oblast",
        shortCode: "KIR"
      },
      {
        name: "Komi Republic",
        shortCode: "KO"
      },
      {
        name: "Kostroma Oblast",
        shortCode: "KOS"
      },
      {
        name: "Krasnodar Krai",
        shortCode: "KDA"
      },
      {
        name: "Krasnoyarsk Krai",
        shortCode: "KYA"
      },
      {
        name: "Kurgan Oblast",
        shortCode: "KGN"
      },
      {
        name: "Kursk Oblast",
        shortCode: "KRS"
      },
      {
        name: "Leningrad Oblast",
        shortCode: "LEN"
      },
      {
        name: "Lipetsk Oblast",
        shortCode: "LIP"
      },
      {
        name: "Magadan Oblast",
        shortCode: "MAG"
      },
      {
        name: "Mari El Republic",
        shortCode: "ME"
      },
      {
        name: "Republic of Mordovia",
        shortCode: "MO"
      },
      {
        name: "Moscow Oblast",
        shortCode: "MOS"
      },
      {
        name: "Moscow",
        shortCode: "MOW"
      },
      {
        name: "Murmansk Oblast",
        shortCode: "MU"
      },
      {
        name: "Nenets Autonomous Okrug",
        shortCode: "NEN"
      },
      {
        name: "Nizhny Novgorod Oblast",
        shortCode: "NIZ"
      },
      {
        name: "Novgorod Oblast",
        shortCode: "NGR"
      },
      {
        name: "Novosibirsk Oblast",
        shortCode: "NVS"
      },
      {
        name: "Omsk Oblast",
        shortCode: "OMS"
      },
      {
        name: "Orenburg Oblast",
        shortCode: "ORE"
      },
      {
        name: "Oryol Oblast",
        shortCode: "ORL"
      },
      {
        name: "Penza Oblast",
        shortCode: "PNZ"
      },
      {
        name: "Perm Krai",
        shortCode: "PER"
      },
      {
        name: "Primorsky Krai",
        shortCode: "PRI"
      },
      {
        name: "Pskov Oblast",
        shortCode: "PSK"
      },
      {
        name: "Rostov Oblast",
        shortCode: "ROS"
      },
      {
        name: "Ryazan Oblast",
        shortCode: "RYA"
      },
      {
        name: "Saint Petersburg",
        shortCode: "SPE"
      },
      {
        name: "Sakha (Yakutia) Republic",
        shortCode: "SA"
      },
      {
        name: "Sakhalin Oblast",
        shortCode: "SAK"
      },
      {
        name: "Samara Oblast",
        shortCode: "SAM"
      },
      {
        name: "Saratov Oblast",
        shortCode: "SAR"
      },
      {
        name: "Republic of North Ossetia-Alania",
        shortCode: "NOA"
      },
      {
        name: "Smolensk Oblast",
        shortCode: "SMO"
      },
      {
        name: "Stavropol Krai",
        shortCode: "STA"
      },
      {
        name: "Sverdlovsk Oblast",
        shortCode: "SVE"
      },
      {
        name: "Tambov Oblast",
        shortCode: "TAM"
      },
      {
        name: "Republic of Tatarstan",
        shortCode: "TA"
      },
      {
        name: "Tomsk Oblast",
        shortCode: "TOM"
      },
      {
        name: "Tuva Republic",
        shortCode: "TU"
      },
      {
        name: "Tula Oblast",
        shortCode: "TUL"
      },
      {
        name: "Tver Oblast",
        shortCode: "TVE"
      },
      {
        name: "Tyumen Oblast",
        shortCode: "TYU"
      },
      {
        name: "Udmurt Republic",
        shortCode: "UD"
      },
      {
        name: "Ulyanovsk Oblast",
        shortCode: "ULY"
      },
      {
        name: "Vladimir Oblast",
        shortCode: "VLA"
      },
      {
        name: "Volgograd Oblast",
        shortCode: "VGG"
      },
      {
        name: "Vologda Oblast",
        shortCode: "VLG"
      },
      {
        name: "Voronezh Oblast",
        shortCode: "VOR"
      },
      {
        name: "Yamalo-Nenets Autonomous Okrug",
        shortCode: "YAN"
      },
      {
        name: "Yaroslavl Oblast",
        shortCode: "YAR"
      },
      {
        name: "Zabaykalsky Krai",
        shortCode: "ZAB"
      }
    ]
  },
  {
    countryName: "Rwanda",
    countryShortCode: "RW",
    regions: [
      {
        name: "Kigali",
        shortCode: "01"
      },
      {
        name: "Eastern",
        shortCode: "02"
      },
      {
        name: "Northern",
        shortCode: "03"
      },
      {
        name: "Western",
        shortCode: "04"
      },
      {
        name: "Southern",
        shortCode: "05"
      }
    ]
  },
  {
    countryName: "Saint Barthélemy",
    countryShortCode: "BL",
    regions: [
      {
        name: "Au Vent",
        shortCode: "02"
      },
      {
        name: "Sous le Vent",
        shortCode: "01"
      }
    ]
  },
  {
    countryName: "Saint Helena, Ascension and Tristan da Cunha",
    countryShortCode: "SH",
    regions: [
      {
        name: "Ascension",
        shortCode: "AC"
      },
      {
        name: "Saint Helena",
        shortCode: "HL"
      },
      {
        name: "Tristan da Cunha",
        shortCode: "TA"
      }
    ]
  },
  {
    countryName: "Saint Kitts and Nevis",
    countryShortCode: "KN",
    regions: [
      {
        name: "Saint Kitts",
        shortCode: "K"
      },
      {
        name: "Nevis",
        shortCode: "N"
      }
    ]
  },
  {
    countryName: "Saint Lucia",
    countryShortCode: "LC",
    regions: [
      {
        name: "Anse-la-Raye",
        shortCode: "01"
      },
      {
        name: "Canaries",
        shortCode: "12"
      },
      {
        name: "Castries",
        shortCode: "02"
      },
      {
        name: "Choiseul",
        shortCode: "03"
      },
      {
        name: "Dennery",
        shortCode: "05"
      },
      {
        name: "Gros Islet",
        shortCode: "06"
      },
      {
        name: "Laborie",
        shortCode: "07"
      },
      {
        name: "Micoud",
        shortCode: "08"
      },
      {
        name: "Soufriere",
        shortCode: "10"
      },
      {
        name: "Vieux Fort",
        shortCode: "11"
      }
    ]
  },
  {
    countryName: "Saint Martin",
    countryShortCode: "MF",
    regions: [
      {
        name: "Saint Martin"
      }
    ]
  },
  {
    countryName: "Saint Pierre and Miquelon",
    countryShortCode: "PM",
    regions: [
      {
        name: "Miquelon"
      },
      {
        name: "Saint Pierre"
      }
    ]
  },
  {
    countryName: "Saint Vincent and the Grenadines",
    countryShortCode: "VC",
    regions: [
      {
        name: "Charlotte",
        shortCode: "01"
      },
      {
        name: "Grenadines",
        shortCode: "06"
      },
      {
        name: "Saint Andrew",
        shortCode: "02"
      },
      {
        name: "Saint David",
        shortCode: "03"
      },
      {
        name: "Saint George",
        shortCode: "04"
      },
      {
        name: "Saint Patrick",
        shortCode: "05"
      }
    ]
  },
  {
    countryName: "Samoa",
    countryShortCode: "WS",
    regions: [
      {
        name: "A'ana",
        shortCode: "AA"
      },
      {
        name: "Aiga-i-le-Tai",
        shortCode: "AL"
      },
      {
        name: "Atua",
        shortCode: "AT"
      },
      {
        name: "Fa'asaleleaga",
        shortCode: "FA"
      },
      {
        name: "Gaga'emauga",
        shortCode: "GE"
      },
      {
        name: "Gagaifomauga",
        shortCode: "GI"
      },
      {
        name: "Palauli",
        shortCode: "PA"
      },
      {
        name: "Satupa'itea",
        shortCode: "SA"
      },
      {
        name: "Tuamasaga",
        shortCode: "TU"
      },
      {
        name: "Va'a-o-Fonoti",
        shortCode: "VF"
      },
      {
        name: "Vaisigano",
        shortCode: "VS"
      }
    ]
  },
  {
    countryName: "San Marino",
    countryShortCode: "SM",
    regions: [
      {
        name: "Acquaviva",
        shortCode: "01"
      },
      {
        name: "Borgo Maggiore",
        shortCode: "06"
      },
      {
        name: "Chiesanuova",
        shortCode: "02"
      },
      {
        name: "Domagnano",
        shortCode: "03"
      },
      {
        name: "Faetano",
        shortCode: "04"
      },
      {
        name: "Fiorentino",
        shortCode: "05"
      },
      {
        name: "Montegiardino",
        shortCode: "08"
      },
      {
        name: "San Marino",
        shortCode: "07"
      },
      {
        name: "Serravalle",
        shortCode: "09"
      }
    ]
  },
  {
    countryName: "Sao Tome and Principe",
    countryShortCode: "ST",
    regions: [
      {
        name: "Principe",
        shortCode: "P"
      },
      {
        name: "Sao Tome",
        shortCode: "S"
      }
    ]
  },
  {
    countryName: "Saudi Arabia",
    countryShortCode: "SA",
    regions: [
      {
        name: "'Asir",
        shortCode: "14"
      },
      {
        name: "Al Bahah",
        shortCode: "11"
      },
      {
        name: "Al Hudud ash Shamaliyah",
        shortCode: "08"
      },
      {
        name: "Al Jawf",
        shortCode: "12"
      },
      {
        name: "Al Madinah al Munawwarah",
        shortCode: "03"
      },
      {
        name: "Al Qasim",
        shortCode: "05"
      },
      {
        name: "Ar Riyad",
        shortCode: "01"
      },
      {
        name: "Ash Sharqiyah",
        shortCode: "04"
      },
      {
        name: "Ha'il",
        shortCode: "06"
      },
      {
        name: "Jazan",
        shortCode: "09"
      },
      {
        name: "Makkah al Mukarramah",
        shortCode: "02"
      },
      {
        name: "Najran",
        shortCode: "10"
      },
      {
        name: "Tabuk",
        shortCode: "07"
      }
    ]
  },
  {
    countryName: "Senegal",
    countryShortCode: "SN",
    regions: [
      {
        name: "Dakar",
        shortCode: "DK"
      },
      {
        name: "Diourbel",
        shortCode: "DB"
      },
      {
        name: "Fatick",
        shortCode: "FK"
      },
      {
        name: "Kaffrine",
        shortCode: "KA"
      },
      {
        name: "Kaolack",
        shortCode: "KL"
      },
      {
        name: "Kedougou",
        shortCode: "KE"
      },
      {
        name: "Kolda",
        shortCode: "KD"
      },
      {
        name: "Louga",
        shortCode: "LG"
      },
      {
        name: "Matam",
        shortCode: "MT"
      },
      {
        name: "Saint-Louis",
        shortCode: "SL"
      },
      {
        name: "Sedhiou",
        shortCode: "SE"
      },
      {
        name: "Tambacounda",
        shortCode: "TC"
      },
      {
        name: "Thies",
        shortCode: "TH"
      },
      {
        name: "Ziguinchor",
        shortCode: "ZG"
      }
    ]
  },
  {
    countryName: "Serbia",
    countryShortCode: "RS",
    regions: [
      {
        name: "Beograd (Belgrade)",
        shortCode: "00"
      },
      {
        name: "Borski",
        shortCode: "14"
      },
      {
        name: "Braničevski",
        shortCode: "11"
      },
      {
        name: "Jablanički",
        shortCode: "23"
      },
      {
        name: "Južnobački",
        shortCode: "06"
      },
      {
        name: "Južnobanatski",
        shortCode: "04"
      },
      {
        name: "Kolubarski",
        shortCode: "09"
      },
      {
        name: "Kosovski",
        shortCode: "25"
      },
      {
        name: "Kosovsko-Mitrovački",
        shortCode: "28"
      },
      {
        name: "Kosovsko-Pomoravski",
        shortCode: "29"
      },
      {
        name: "Mačvanski",
        shortCode: "08"
      },
      {
        name: "Moravički",
        shortCode: "17"
      },
      {
        name: "Nišavski",
        shortCode: "20"
      },
      {
        name: "Pčinjski",
        shortCode: "24"
      },
      {
        name: "Pećki",
        shortCode: "26"
      },
      {
        name: "Pirotski",
        shortCode: "22"
      },
      {
        name: "Podunavski",
        shortCode: "10"
      },
      {
        name: "Pomoravski",
        shortCode: "13"
      },
      {
        name: "Prizrenski",
        shortCode: "27"
      },
      {
        name: "Rasinski",
        shortCode: "19"
      },
      {
        name: "Raški",
        shortCode: "18"
      },
      {
        name: "Severnobački",
        shortCode: "01"
      },
      {
        name: "Severnobanatski",
        shortCode: "03"
      },
      {
        name: "Srednjebanatski",
        shortCode: "02"
      },
      {
        name: "Sremski",
        shortCode: "07"
      },
      {
        name: "Šumadijski",
        shortCode: "12"
      },
      {
        name: "Toplički",
        shortCode: "21"
      },
      {
        name: "Zaječarski",
        shortCode: "15"
      },
      {
        name: "Zapadnobački",
        shortCode: "05"
      },
      {
        name: "Zlatiborski",
        shortCode: "16"
      }
    ]
  },
  {
    countryName: "Seychelles",
    countryShortCode: "SC",
    regions: [
      {
        name: "Anse aux Pins",
        shortCode: "01"
      },
      {
        name: "Anse Boileau",
        shortCode: "02"
      },
      {
        name: "Anse Etoile",
        shortCode: "03"
      },
      {
        name: "Anse Royale",
        shortCode: "05"
      },
      {
        name: "Anu Cap",
        shortCode: "04"
      },
      {
        name: "Baie Lazare",
        shortCode: "06"
      },
      {
        name: "Baie Sainte Anne",
        shortCode: "07"
      },
      {
        name: "Beau Vallon",
        shortCode: "08"
      },
      {
        name: "Bel Air",
        shortCode: "09"
      },
      {
        name: "Bel Ombre",
        shortCode: "10"
      },
      {
        name: "Cascade",
        shortCode: "11"
      },
      {
        name: "Glacis",
        shortCode: "12"
      },
      {
        name: "Grand'Anse Mahe",
        shortCode: "13"
      },
      {
        name: "Grand'Anse Praslin",
        shortCode: "14"
      },
      {
        name: "La Digue",
        shortCode: "15"
      },
      {
        name: "La Riviere Anglaise",
        shortCode: "16"
      },
      {
        name: "Les Mamelles",
        shortCode: "24"
      },
      {
        name: "Mont Buxton",
        shortCode: "17"
      },
      {
        name: "Mont Fleuri",
        shortCode: "18"
      },
      {
        name: "Plaisance",
        shortCode: "19"
      },
      {
        name: "Pointe La Rue",
        shortCode: "20"
      },
      {
        name: "Port Glaud",
        shortCode: "21"
      },
      {
        name: "Roche Caiman",
        shortCode: "25"
      },
      {
        name: "Saint Louis",
        shortCode: "22"
      },
      {
        name: "Takamaka",
        shortCode: "23"
      }
    ]
  },
  {
    countryName: "Sierra Leone",
    countryShortCode: "SL",
    regions: [
      {
        name: "Eastern",
        shortCode: "E"
      },
      {
        name: "Northern",
        shortCode: "N"
      },
      {
        name: "Southern",
        shortCode: "S"
      },
      {
        name: "Western",
        shortCode: "W"
      }
    ]
  },
  {
    countryName: "Singapore",
    countryShortCode: "SG",
    regions: [
      {
        name: "Central Singapore",
        shortCode: "01"
      },
      {
        name: "North East",
        shortCode: "02"
      },
      {
        name: "North West",
        shortCode: "03"
      },
      {
        name: "South East",
        shortCode: "04"
      },
      {
        name: "South West",
        shortCode: "05"
      }
    ]
  },
  {
    countryName: "Sint Maarten (Dutch part)",
    countryShortCode: "SX",
    regions: [
      {
        name: "Sint Maarten"
      }
    ]
  },
  {
    countryName: "Slovakia",
    countryShortCode: "SK",
    regions: [
      {
        name: "Banskobystricky",
        shortCode: "BC"
      },
      {
        name: "Bratislavsky",
        shortCode: "BL"
      },
      {
        name: "Kosicky",
        shortCode: "KI"
      },
      {
        name: "Nitriansky",
        shortCode: "NI"
      },
      {
        name: "Presovsky",
        shortCode: "PV"
      },
      {
        name: "Trenciansky",
        shortCode: "TC"
      },
      {
        name: "Trnavsky",
        shortCode: "TA"
      },
      {
        name: "Zilinsky",
        shortCode: "ZI"
      }
    ]
  },
  {
    countryName: "Slovenia",
    countryShortCode: "SI",
    regions: [
      {
        name: "Ajdovscina",
        shortCode: "001"
      },
      {
        name: "Apace",
        shortCode: "195"
      },
      {
        name: "Beltinci",
        shortCode: "002"
      },
      {
        name: "Benedikt",
        shortCode: "148"
      },
      {
        name: "Bistrica ob Sotli",
        shortCode: "149"
      },
      {
        name: "Bled",
        shortCode: "003"
      },
      {
        name: "Bloke",
        shortCode: "150"
      },
      {
        name: "Bohinj",
        shortCode: "004"
      },
      {
        name: "Borovnica",
        shortCode: "005"
      },
      {
        name: "Bovec",
        shortCode: "006"
      },
      {
        name: "Braslovce",
        shortCode: "151"
      },
      {
        name: "Brda",
        shortCode: "007"
      },
      {
        name: "Brezice",
        shortCode: "009"
      },
      {
        name: "Brezovica",
        shortCode: "008"
      },
      {
        name: "Cankova",
        shortCode: "152"
      },
      {
        name: "Celje",
        shortCode: "011"
      },
      {
        name: "Cerklje na Gorenjskem",
        shortCode: "012"
      },
      {
        name: "Cerknica",
        shortCode: "013"
      },
      {
        name: "Cerkno",
        shortCode: "014"
      },
      {
        name: "Cerkvenjak",
        shortCode: "153"
      },
      {
        name: "Cirkulane",
        shortCode: "196"
      },
      {
        name: "Crensovci",
        shortCode: "015"
      },
      {
        name: "Crna na Koroskem",
        shortCode: "016"
      },
      {
        name: "Crnomelj",
        shortCode: "017"
      },
      {
        name: "Destrnik",
        shortCode: "018"
      },
      {
        name: "Divaca",
        shortCode: "019"
      },
      {
        name: "Dobje",
        shortCode: "154"
      },
      {
        name: "Dobrepolje",
        shortCode: "020"
      },
      {
        name: "Dobrna",
        shortCode: "155"
      },
      {
        name: "Dobrova-Polhov Gradec",
        shortCode: "021"
      },
      {
        name: "Dobrovnik",
        shortCode: "156"
      },
      {
        name: "Dol pri Ljubljani",
        shortCode: "022"
      },
      {
        name: "Dolenjske Toplice",
        shortCode: "157"
      },
      {
        name: "Domzale",
        shortCode: "023"
      },
      {
        name: "Dornava",
        shortCode: "024"
      },
      {
        name: "Dravograd",
        shortCode: "025"
      },
      {
        name: "Duplek",
        shortCode: "026"
      },
      {
        name: "Gorenja Vas-Poljane",
        shortCode: "027"
      },
      {
        name: "Gorisnica",
        shortCode: "028"
      },
      {
        name: "Gorje",
        shortCode: "207"
      },
      {
        name: "Gornja Radgona",
        shortCode: "029"
      },
      {
        name: "Gornji Grad",
        shortCode: "030"
      },
      {
        name: "Gornji Petrovci",
        shortCode: "031"
      },
      {
        name: "Grad",
        shortCode: "158"
      },
      {
        name: "Grosuplje",
        shortCode: "032"
      },
      {
        name: "Hajdina",
        shortCode: "159"
      },
      {
        name: "Hoce-Slivnica",
        shortCode: "160"
      },
      {
        name: "Hodos",
        shortCode: "161"
      },
      {
        name: "Horjul",
        shortCode: "162"
      },
      {
        name: "Hrastnik",
        shortCode: "034"
      },
      {
        name: "Hrpelje-Kozina",
        shortCode: "035"
      },
      {
        name: "Idrija",
        shortCode: "036"
      },
      {
        name: "Ig",
        shortCode: "037"
      },
      {
        name: "Ilirska Bistrica",
        shortCode: "038"
      },
      {
        name: "Ivancna Gorica",
        shortCode: "039"
      },
      {
        name: "Izola",
        shortCode: "040s"
      },
      {
        name: "Jesenice",
        shortCode: "041"
      },
      {
        name: "Jursinci",
        shortCode: "042"
      },
      {
        name: "Kamnik",
        shortCode: "043"
      },
      {
        name: "Kanal",
        shortCode: "044"
      },
      {
        name: "Kidricevo",
        shortCode: "045"
      },
      {
        name: "Kobarid",
        shortCode: "046"
      },
      {
        name: "Kobilje",
        shortCode: "047"
      },
      {
        name: "Kocevje",
        shortCode: "048"
      },
      {
        name: "Komen",
        shortCode: "049"
      },
      {
        name: "Komenda",
        shortCode: "164"
      },
      {
        name: "Koper",
        shortCode: "050"
      },
      {
        name: "Kodanjevica na Krki",
        shortCode: "197"
      },
      {
        name: "Kostel",
        shortCode: "165"
      },
      {
        name: "Kozje",
        shortCode: "051"
      },
      {
        name: "Kranj",
        shortCode: "052"
      },
      {
        name: "Kranjska Gora",
        shortCode: "053"
      },
      {
        name: "Krizevci",
        shortCode: "166"
      },
      {
        name: "Krsko",
        shortCode: "054"
      },
      {
        name: "Kungota",
        shortCode: "055"
      },
      {
        name: "Kuzma",
        shortCode: "056"
      },
      {
        name: "Lasko",
        shortCode: "057"
      },
      {
        name: "Lenart",
        shortCode: "058"
      },
      {
        name: "Lendava",
        shortCode: "059"
      },
      {
        name: "Litija",
        shortCode: "068"
      },
      {
        name: "Ljubljana",
        shortCode: "061"
      },
      {
        name: "Ljubno",
        shortCode: "062"
      },
      {
        name: "Ljutomer",
        shortCode: "063"
      },
      {
        name: "Log-Dragomer",
        shortCode: "208"
      },
      {
        name: "Logatec",
        shortCode: "064"
      },
      {
        name: "Loska Dolina",
        shortCode: "065"
      },
      {
        name: "Loski Potok",
        shortCode: "066"
      },
      {
        name: "Lovrenc na Pohorju",
        shortCode: "167"
      },
      {
        name: "Lukovica",
        shortCode: "068"
      },
      {
        name: "Luce",
        shortCode: "067"
      },
      {
        name: "Majsperk",
        shortCode: "069"
      },
      {
        name: "Makole",
        shortCode: "198"
      },
      {
        name: "Maribor",
        shortCode: "070"
      },
      {
        name: "Markovci",
        shortCode: "168"
      },
      {
        name: "Medvode",
        shortCode: "071"
      },
      {
        name: "Menges",
        shortCode: "072"
      },
      {
        name: "Metlika",
        shortCode: "073"
      },
      {
        name: "Mezica",
        shortCode: "074"
      },
      {
        name: "Miklavz na Dravskem Polju",
        shortCode: "169"
      },
      {
        name: "Miren-Kostanjevica",
        shortCode: "075"
      },
      {
        name: "Mirna",
        shortCode: "212"
      },
      {
        name: "Mirna Pec",
        shortCode: "170"
      },
      {
        name: "Mislinja",
        shortCode: "076"
      },
      {
        name: "Mokronog-Trebelno",
        shortCode: "199"
      },
      {
        name: "Moravce",
        shortCode: "077"
      },
      {
        name: "Moravske Toplice",
        shortCode: "078"
      },
      {
        name: "Mozirje",
        shortCode: "079"
      },
      {
        name: "Murska Sobota",
        shortCode: "080"
      },
      {
        name: "Naklo",
        shortCode: "082"
      },
      {
        name: "Nazarje",
        shortCode: "083"
      },
      {
        name: "Nova Gorica",
        shortCode: "084"
      },
      {
        name: "Novo Mesto",
        shortCode: "085"
      },
      {
        name: "Odranci",
        shortCode: "086"
      },
      {
        name: "Ormoz",
        shortCode: "087"
      },
      {
        name: "Osilnica",
        shortCode: "088"
      },
      {
        name: "Pesnica",
        shortCode: "089"
      },
      {
        name: "Piran",
        shortCode: "090"
      },
      {
        name: "Pivka",
        shortCode: "091"
      },
      {
        name: "Podcetrtek",
        shortCode: "092"
      },
      {
        name: "Podlehnik",
        shortCode: "172"
      },
      {
        name: "Podvelka",
        shortCode: "093"
      },
      {
        name: "Poljcane",
        shortCode: "200"
      },
      {
        name: "Postojna",
        shortCode: "094"
      },
      {
        name: "Prebold",
        shortCode: "174"
      },
      {
        name: "Preddvor",
        shortCode: "095"
      },
      {
        name: "Prevalje",
        shortCode: "175"
      },
      {
        name: "Ptuj",
        shortCode: "096"
      },
      {
        name: "Race-Fram",
        shortCode: "098"
      },
      {
        name: "Radece",
        shortCode: "099"
      },
      {
        name: "Radenci",
        shortCode: "100"
      },
      {
        name: "Radlje ob Dravi",
        shortCode: "101"
      },
      {
        name: "Radovljica",
        shortCode: "102"
      },
      {
        name: "Ravne na Koroskem",
        shortCode: "103"
      },
      {
        name: "Razkrizje",
        shortCode: "176"
      },
      {
        name: "Recica ob Savinji",
        shortCode: "209"
      },
      {
        name: "Rence-Vogrsko",
        shortCode: "201"
      },
      {
        name: "Ribnica",
        shortCode: "104"
      },
      {
        name: "Ribnica na Poboriu",
        shortCode: "177"
      },
      {
        name: "Rogaska Slatina",
        shortCode: "106"
      },
      {
        name: "Rogasovci",
        shortCode: "105"
      },
      {
        name: "Rogatec",
        shortCode: "107"
      },
      {
        name: "Ruse",
        shortCode: "108"
      },
      {
        name: "Salovci",
        shortCode: "033"
      },
      {
        name: "Selnica ob Dravi",
        shortCode: "178"
      },
      {
        name: "Semic",
        shortCode: "109"
      },
      {
        name: "Sempeter-Vrtojba",
        shortCode: "183"
      },
      {
        name: "Sencur",
        shortCode: "117"
      },
      {
        name: "Sentilj",
        shortCode: "118"
      },
      {
        name: "Sentjernej",
        shortCode: "119"
      },
      {
        name: "Sentjur",
        shortCode: "120"
      },
      {
        name: "Sentrupert",
        shortCode: "211"
      },
      {
        name: "Sevnica",
        shortCode: "110"
      },
      {
        name: "Sezana",
        shortCode: "111"
      },
      {
        name: "Skocjan",
        shortCode: "121"
      },
      {
        name: "Skofja Loka",
        shortCode: "122"
      },
      {
        name: "Skofljica",
        shortCode: "123"
      },
      {
        name: "Slovenj Gradec",
        shortCode: "112"
      },
      {
        name: "Slovenska Bistrica",
        shortCode: "113"
      },
      {
        name: "Slovenske Konjice",
        shortCode: "114"
      },
      {
        name: "Smarje pri elsah",
        shortCode: "124"
      },
      {
        name: "Smarjeske Toplice",
        shortCode: "206"
      },
      {
        name: "Smartno ob Paki",
        shortCode: "125"
      },
      {
        name: "Smartno pri Litiji",
        shortCode: "194"
      },
      {
        name: "Sodrazica",
        shortCode: "179"
      },
      {
        name: "Solcava",
        shortCode: "180"
      },
      {
        name: "Sostanj",
        shortCode: "126"
      },
      {
        name: "Sredisce ob Dravi",
        shortCode: "202"
      },
      {
        name: "Starse",
        shortCode: "115"
      },
      {
        name: "Store",
        shortCode: "127"
      },
      {
        name: "Straza",
        shortCode: "203"
      },
      {
        name: "Sveta Ana",
        shortCode: "181"
      },
      {
        name: "Sveta Trojica v Slovenskih Goricah",
        shortCode: "204"
      },
      {
        name: "Sveta Andraz v Slovenskih Goricah",
        shortCode: "182"
      },
      {
        name: "Sveti Jurij",
        shortCode: "116"
      },
      {
        name: "Sveti Jurij v Slovenskih Goricah",
        shortCode: "210"
      },
      {
        name: "Sveti Tomaz",
        shortCode: "205"
      },
      {
        name: "Tabor",
        shortCode: "184"
      },
      {
        name: "Tisina",
        shortCode: "128"
      },
      {
        name: "Tolmin",
        shortCode: "128"
      },
      {
        name: "Trbovlje",
        shortCode: "129"
      },
      {
        name: "Trebnje",
        shortCode: "130"
      },
      {
        name: "Trnovska Vas",
        shortCode: "185"
      },
      {
        name: "Trzin",
        shortCode: "186"
      },
      {
        name: "Trzic",
        shortCode: "131"
      },
      {
        name: "Turnisce",
        shortCode: "132"
      },
      {
        name: "Velenje",
        shortCode: "133"
      },
      {
        name: "Velika Polana",
        shortCode: "187"
      },
      {
        name: "Velike Lasce",
        shortCode: "134"
      },
      {
        name: "Verzej",
        shortCode: "188"
      },
      {
        name: "Videm",
        shortCode: "135"
      },
      {
        name: "Vipava",
        shortCode: "136"
      },
      {
        name: "Vitanje",
        shortCode: "137"
      },
      {
        name: "Vodice",
        shortCode: "138"
      },
      {
        name: "Vojnik",
        shortCode: "139"
      },
      {
        name: "Vransko",
        shortCode: "189"
      },
      {
        name: "Vrhnika",
        shortCode: "140"
      },
      {
        name: "Vuzenica",
        shortCode: "141"
      },
      {
        name: "Zagorje ob Savi",
        shortCode: "142"
      },
      {
        name: "Zavrc",
        shortCode: "143"
      },
      {
        name: "Zrece",
        shortCode: "144"
      },
      {
        name: "Zalec",
        shortCode: "190"
      },
      {
        name: "Zelezniki",
        shortCode: "146"
      },
      {
        name: "Zetale",
        shortCode: "191"
      },
      {
        name: "Ziri",
        shortCode: "147"
      },
      {
        name: "Zirovnica",
        shortCode: "192"
      },
      {
        name: "Zuzemberk",
        shortCode: "193"
      }
    ]
  },
  {
    countryName: "Solomon Islands",
    countryShortCode: "SB",
    regions: [
      {
        name: "Central",
        shortCode: "CE"
      },
      {
        name: "Choiseul",
        shortCode: "CH"
      },
      {
        name: "Guadalcanal",
        shortCode: "GU"
      },
      {
        name: "Honiara",
        shortCode: "CT"
      },
      {
        name: "Isabel",
        shortCode: "IS"
      },
      {
        name: "Makira-Ulawa",
        shortCode: "MK"
      },
      {
        name: "Malaita",
        shortCode: "ML"
      },
      {
        name: "Rennell and Bellona",
        shortCode: "RB"
      },
      {
        name: "Temotu",
        shortCode: "TE"
      },
      {
        name: "Western",
        shortCode: "WE"
      }
    ]
  },
  {
    countryName: "Somalia",
    countryShortCode: "SO",
    regions: [
      {
        name: "Awdal",
        shortCode: "AW"
      },
      {
        name: "Bakool",
        shortCode: "BK"
      },
      {
        name: "Banaadir",
        shortCode: "BN"
      },
      {
        name: "Bari",
        shortCode: "BR"
      },
      {
        name: "Bay",
        shortCode: "BY"
      },
      {
        name: "Galguduud",
        shortCode: "GA"
      },
      {
        name: "Gedo",
        shortCode: "GE"
      },
      {
        name: "Hiiraan",
        shortCode: "HI"
      },
      {
        name: "Jubbada Dhexe",
        shortCode: "JD"
      },
      {
        name: "Jubbada Hoose",
        shortCode: "JH"
      },
      {
        name: "Mudug",
        shortCode: "MU"
      },
      {
        name: "Nugaal",
        shortCode: "NU"
      },
      {
        name: "Sanaag",
        shortCode: "SA"
      },
      {
        name: "Shabeellaha Dhexe",
        shortCode: "SD"
      },
      {
        name: "Shabeellaha Hoose",
        shortCode: "SH"
      },
      {
        name: "Sool",
        shortCode: "SO"
      },
      {
        name: "Togdheer",
        shortCode: "TO"
      },
      {
        name: "Woqooyi Galbeed",
        shortCode: "WO"
      }
    ]
  },
  {
    countryName: "South Africa",
    countryShortCode: "ZA",
    regions: [
      {
        name: "Eastern Cape",
        shortCode: "EC"
      },
      {
        name: "Free State",
        shortCode: "FS"
      },
      {
        name: "Gauteng",
        shortCode: "GT"
      },
      {
        name: "KwaZulu-Natal",
        shortCode: "NL"
      },
      {
        name: "Limpopo",
        shortCode: "LP"
      },
      {
        name: "Mpumalanga",
        shortCode: "MP"
      },
      {
        name: "Northern Cape",
        shortCode: "NC"
      },
      {
        name: "North West",
        shortCode: "NW"
      },
      {
        name: "Western Cape",
        shortCode: "WC"
      }
    ]
  },
  {
    countryName: "South Georgia and South Sandwich Islands",
    countryShortCode: "GS",
    regions: [
      {
        name: "Bird Island"
      },
      {
        name: "Bristol Island"
      },
      {
        name: "Clerke Rocks"
      },
      {
        name: "Montagu Island"
      },
      {
        name: "Saunders Island"
      },
      {
        name: "South Georgia"
      },
      {
        name: "Southern Thule"
      },
      {
        name: "Traversay Islands"
      }
    ]
  },
  {
    countryName: "South Sudan",
    countryShortCode: "SS",
    regions: [
      {
        name: "Central Equatoria",
        shortCode: "CE"
      },
      {
        name: "Eastern Equatoria",
        shortCode: "EE"
      },
      {
        name: "Jonglei",
        shortCode: "JG"
      },
      {
        name: "Lakes",
        shortCode: "LK"
      },
      {
        name: "Northern Bahr el Ghazal",
        shortCode: "BN"
      },
      {
        name: "Unity",
        shortCode: "UY"
      },
      {
        name: "Upper Nile",
        shortCode: "NU"
      },
      {
        name: "Warrap",
        shortCode: "WR"
      },
      {
        name: "Western Bahr el Ghazal",
        shortCode: "BW"
      },
      {
        name: "Western Equatoria",
        shortCode: "EW"
      }
    ]
  },
  {
    countryName: "Spain",
    countryShortCode: "ES",
    regions: [
      {
        name: "Albacete",
        shortCode: "CM"
      },
      {
        name: "Alicante",
        shortCode: "VC"
      },
      {
        name: "Almería",
        shortCode: "AN"
      },
      {
        name: "Araba/Álava",
        shortCode: "VI"
      },
      {
        name: "Asturias",
        shortCode: "O"
      },
      {
        name: "Ávila",
        shortCode: "AV"
      },
      {
        name: "Badajoz",
        shortCode: "BA"
      },
      {
        name: "Barcelona",
        shortCode: "B"
      },
      {
        name: "Bizkaia",
        shortCode: "BI"
      },
      {
        name: "Burgos",
        shortCode: "BU"
      },
      {
        name: "Cáceres",
        shortCode: "CC"
      },
      {
        name: "Cádiz",
        shortCode: "CA"
      },
      {
        name: "Cantabria",
        shortCode: "S"
      },
      {
        name: "Castellón",
        shortCode: "CS"
      },
      {
        name: "Cueta",
        shortCode: "CU"
      },
      {
        name: "Ciudad Real",
        shortCode: "CR"
      },
      {
        name: "Córdoba",
        shortCode: "CO"
      },
      {
        name: "A Coruña",
        shortCode: "C"
      },
      {
        name: "Cuenca",
        shortCode: "CU"
      },
      {
        name: "Gipuzkoa",
        shortCode: "SS"
      },
      {
        name: "Girona",
        shortCode: "GI"
      },
      {
        name: "Granada",
        shortCode: "GR"
      },
      {
        name: "Guadalajara",
        shortCode: "GU"
      },
      {
        name: "Huelva",
        shortCode: "H"
      },
      {
        name: "Huesca",
        shortCode: "HU"
      },
      {
        name: "Illes Balears",
        shortCode: "PM"
      },
      {
        name: "Jaén",
        shortCode: "J"
      },
      {
        name: "León",
        shortCode: "LE"
      },
      {
        name: "Lleida",
        shortCode: "L"
      },
      {
        name: "Lugo",
        shortCode: "LU"
      },
      {
        name: "Madrid",
        shortCode: "M"
      },
      {
        name: "Málaga",
        shortCode: "MA"
      },
      {
        name: "Melilla",
        shortCode: "ML"
      },
      {
        name: "Murcia",
        shortCode: "MU"
      },
      {
        name: "Navarre",
        shortCode: "NA"
      },
      {
        name: "Ourense",
        shortCode: "OR"
      },
      {
        name: "Palencia",
        shortCode: "P"
      },
      {
        name: "Las Palmas",
        shortCode: "GC"
      },
      {
        name: "Pontevedra",
        shortCode: "PO"
      },
      {
        name: "La Rioja",
        shortCode: "LO"
      },
      {
        name: "Salamanca",
        shortCode: "SA"
      },
      {
        name: "Santa Cruz de Tenerife",
        shortCode: "TF"
      },
      {
        name: "Segovia",
        shortCode: "SG"
      },
      {
        name: "Sevilla",
        shortCode: "SE"
      },
      {
        name: "Soria",
        shortCode: "SO"
      },
      {
        name: "Tarragona",
        shortCode: "T"
      },
      {
        name: "Teruel",
        shortCode: "TE"
      },
      {
        name: "Toledo",
        shortCode: "TO"
      },
      {
        name: "Valencia",
        shortCode: "V"
      },
      {
        name: "Valladolid",
        shortCode: "VA"
      },
      {
        name: "Zamora",
        shortCode: "ZA"
      },
      {
        name: "Zaragoza",
        shortCode: "Z"
      }
    ]
  },
  {
    countryName: "Sri Lanka",
    countryShortCode: "LK",
    regions: [
      {
        name: "Basnahira",
        shortCode: "1"
      },
      {
        name: "Dakunu",
        shortCode: "3"
      },
      {
        name: "Madhyama",
        shortCode: "2"
      },
      {
        name: "Naegenahira",
        shortCode: "5"
      },
      {
        name: "Sabaragamuwa",
        shortCode: "9"
      },
      {
        name: "Uturu",
        shortCode: "4"
      },
      {
        name: "Uturumaeda",
        shortCode: "7"
      },
      {
        name: "Vayamba",
        shortCode: "6"
      },
      {
        name: "Uva",
        shortCode: "8"
      }
    ]
  },
  {
    countryName: "Sudan",
    countryShortCode: "SD",
    regions: [
      {
        name: "Al Bahr al Ahmar",
        shortCode: "RS"
      },
      {
        name: "Al Jazirah",
        shortCode: "GZ"
      },
      {
        name: "Al Khartum",
        shortCode: "KH"
      },
      {
        name: "Al Qadarif",
        shortCode: "GD"
      },
      {
        name: "An Nil al Abyad",
        shortCode: "NW"
      },
      {
        name: "An Nil al Azraq",
        shortCode: "NB"
      },
      {
        name: "Ash Shamaliyah",
        shortCode: "NO"
      },
      {
        name: "Gharb Darfur",
        shortCode: "DW"
      },
      {
        name: "Gharb Kurdufan",
        shortCode: "GK"
      },
      {
        name: "Janub Darfur",
        shortCode: "DS"
      },
      {
        name: "Janub Kurdufan",
        shortCode: "KS"
      },
      {
        name: "Kassala",
        shortCode: "KA"
      },
      {
        name: "Nahr an Nil",
        shortCode: "NR"
      },
      {
        name: "Shamal Darfur",
        shortCode: "DN"
      },
      {
        name: "Sharq Darfur",
        shortCode: "DE"
      },
      {
        name: "Shiamal Kurdufan",
        shortCode: "KN"
      },
      {
        name: "Sinnar",
        shortCode: "SI"
      },
      {
        name: "Wasat Darfur Zalinjay",
        shortCode: "DC"
      }
    ]
  },
  {
    countryName: "Suriname",
    countryShortCode: "SR",
    regions: [
      {
        name: "Brokopondo",
        shortCode: "BR"
      },
      {
        name: "Commewijne",
        shortCode: "CM"
      },
      {
        name: "Coronie",
        shortCode: "CR"
      },
      {
        name: "Marowijne",
        shortCode: "MA"
      },
      {
        name: "Nickerie",
        shortCode: "NI"
      },
      {
        name: "Para",
        shortCode: "PR"
      },
      {
        name: "Paramaribo",
        shortCode: "PM"
      },
      {
        name: "Saramacca",
        shortCode: "SA"
      },
      {
        name: "Sipaliwini",
        shortCode: "SI"
      },
      {
        name: "Wanica",
        shortCode: "WA"
      }
    ]
  },
  {
    countryName: "Swaziland",
    countryShortCode: "SZ",
    regions: [
      {
        name: "Hhohho",
        shortCode: "HH"
      },
      {
        name: "Lubombo",
        shortCode: "LU"
      },
      {
        name: "Manzini",
        shortCode: "MA"
      },
      {
        name: "Shiselweni",
        shortCode: "SH"
      }
    ]
  },
  {
    countryName: "Sweden",
    countryShortCode: "SE",
    regions: [
      {
        name: "Blekinge",
        shortCode: "K"
      },
      {
        name: "Dalarna",
        shortCode: "W"
      },
      {
        name: "Gävleborg",
        shortCode: "X"
      },
      {
        name: "Gotland",
        shortCode: "I"
      },
      {
        name: "Halland",
        shortCode: "N"
      },
      {
        name: "Jämtland",
        shortCode: "Z"
      },
      {
        name: "Jönköping",
        shortCode: "F"
      },
      {
        name: "Kalmar",
        shortCode: "H"
      },
      {
        name: "Kronoberg",
        shortCode: "G"
      },
      {
        name: "Norrbotten",
        shortCode: "BD"
      },
      {
        name: "Örebro",
        shortCode: "T"
      },
      {
        name: "Östergötland",
        shortCode: "E"
      },
      {
        name: "Skåne",
        shortCode: "M"
      },
      {
        name: "Södermanland",
        shortCode: "D"
      },
      {
        name: "Stockholm",
        shortCode: "AB"
      },
      {
        name: "Uppsala",
        shortCode: "C"
      },
      {
        name: "Värmland",
        shortCode: "S"
      },
      {
        name: "Västerbotten",
        shortCode: "AC"
      },
      {
        name: "Västernorrland",
        shortCode: "Y"
      },
      {
        name: "Västmanland",
        shortCode: "U"
      },
      {
        name: "Västra Götaland",
        shortCode: "O"
      }
    ]
  },
  {
    countryName: "Switzerland",
    countryShortCode: "CH",
    regions: [
      {
        name: "Aargau",
        shortCode: "AG"
      },
      {
        name: "Appenzell Ausserrhoden",
        shortCode: "AR"
      },
      {
        name: "Appenzell Innerhoden",
        shortCode: "AI"
      },
      {
        name: "Basel-Landschaft",
        shortCode: "BL"
      },
      {
        name: "Basel-Stadt",
        shortCode: "BS"
      },
      {
        name: "Bern",
        shortCode: "BE"
      },
      {
        name: "Fribourg",
        shortCode: "FR"
      },
      {
        name: "Genève",
        shortCode: "GE"
      },
      {
        name: "Glarus",
        shortCode: "GL"
      },
      {
        name: "Graubünden",
        shortCode: "GR"
      },
      {
        name: "Jura",
        shortCode: "JU"
      },
      {
        name: "Luzern",
        shortCode: "LU"
      },
      {
        name: "Neuchâtel",
        shortCode: "NE"
      },
      {
        name: "Nidwalden",
        shortCode: "NW"
      },
      {
        name: "Obwalden",
        shortCode: "OW"
      },
      {
        name: "Sankt Gallen",
        shortCode: "SG"
      },
      {
        name: "Schaffhausen",
        shortCode: "SH"
      },
      {
        name: "Schwyz",
        shortCode: "SZ"
      },
      {
        name: "Solothurn",
        shortCode: "SO"
      },
      {
        name: "Thurgau",
        shortCode: "TG"
      },
      {
        name: "Ticino",
        shortCode: "TI"
      },
      {
        name: "Uri",
        shortCode: "UR"
      },
      {
        name: "Valais",
        shortCode: "VS"
      },
      {
        name: "Vaud",
        shortCode: "VD"
      },
      {
        name: "Zug",
        shortCode: "ZG"
      },
      {
        name: "Zürich",
        shortCode: "ZH"
      }
    ]
  },
  {
    countryName: "Syrian Arab Republic",
    countryShortCode: "SY",
    regions: [
      {
        name: "Al Hasakah",
        shortCode: "HA"
      },
      {
        name: "Al Ladhiqiyah",
        shortCode: "LA"
      },
      {
        name: "Al Qunaytirah",
        shortCode: "QU"
      },
      {
        name: "Ar Raqqah",
        shortCode: "RA"
      },
      {
        name: "As Suwayda'",
        shortCode: "SU"
      },
      {
        name: "Dar'a",
        shortCode: "DR"
      },
      {
        name: "Dayr az Zawr",
        shortCode: "DY"
      },
      {
        name: "Dimashq",
        shortCode: "DI"
      },
      {
        name: "Halab",
        shortCode: "HL"
      },
      {
        name: "Hamah",
        shortCode: "HM"
      },
      {
        name: "Hims",
        shortCode: "HI"
      },
      {
        name: "Idlib",
        shortCode: "ID"
      },
      {
        name: "Rif Dimashq",
        shortCode: "RD"
      },
      {
        name: "Tartus",
        shortCode: "TA"
      }
    ]
  },
  {
    countryName: "Taiwan",
    countryShortCode: "TW",
    regions: [
      {
        name: "Chang-hua",
        shortCode: "CHA"
      },
      {
        name: "Chia-i",
        shortCode: "CYQ"
      },
      {
        name: "Hsin-chu",
        shortCode: "HSQ"
      },
      {
        name: "Hua-lien",
        shortCode: "HUA"
      },
      {
        name: "Kao-hsiung",
        shortCode: "KHH"
      },
      {
        name: "Keelung",
        shortCode: "KEE"
      },
      {
        name: "Kinmen",
        shortCode: "KIN"
      },
      {
        name: "Lienchiang",
        shortCode: "LIE"
      },
      {
        name: "Miao-li",
        shortCode: "MIA"
      },
      {
        name: "Nan-t'ou",
        shortCode: "NAN"
      },
      {
        name: "P'eng-hu",
        shortCode: "PEN"
      },
      {
        name: "New Taipei",
        shortCode: "NWT"
      },
      {
        name: "P'ing-chung",
        shortCode: "PIF"
      },
      {
        name: "T'ai-chung",
        shortCode: "TXG"
      },
      {
        name: "T'ai-nan",
        shortCode: "TNN"
      },
      {
        name: "T'ai-pei",
        shortCode: "TPE"
      },
      {
        name: "T'ai-tung",
        shortCode: "TTT"
      },
      {
        name: "T'ao-yuan",
        shortCode: "TAO"
      },
      {
        name: "Yi-lan",
        shortCode: "ILA"
      },
      {
        name: "Yun-lin",
        shortCode: "YUN"
      }
    ]
  },
  {
    countryName: "Tajikistan",
    countryShortCode: "TJ",
    regions: [
      {
        name: "Dushanbe",
        shortCode: "DU"
      },
      {
        name: "Kŭhistoni Badakhshon",
        shortCode: "GB"
      },
      {
        name: "Khatlon",
        shortCode: "KT"
      },
      {
        name: "Sughd",
        shortCode: "SU"
      }
    ]
  },
  {
    countryName: "Tanzania, United Republic of",
    countryShortCode: "TZ",
    regions: [
      {
        name: "Arusha",
        shortCode: "01"
      },
      {
        name: "Coast",
        shortCode: "19"
      },
      {
        name: "Dar es Salaam",
        shortCode: "02"
      },
      {
        name: "Dodoma",
        shortCode: "03"
      },
      {
        name: "Iringa",
        shortCode: "04"
      },
      {
        name: "Kagera",
        shortCode: "05"
      },
      {
        name: "Kigoma",
        shortCode: "08"
      },
      {
        name: "Kilimanjaro",
        shortCode: "09"
      },
      {
        name: "Lindi",
        shortCode: "12"
      },
      {
        name: "Manyara",
        shortCode: "26"
      },
      {
        name: "Mara",
        shortCode: "13"
      },
      {
        name: "Mbeya",
        shortCode: "14"
      },
      {
        name: "Morogoro",
        shortCode: "16"
      },
      {
        name: "Mtwara",
        shortCode: "17"
      },
      {
        name: "Mwanza",
        shortCode: "18"
      },
      {
        name: "Pemba North",
        shortCode: "06"
      },
      {
        name: "Pemba South",
        shortCode: "10"
      },
      {
        name: "Rukwa",
        shortCode: "20"
      },
      {
        name: "Ruvuma",
        shortCode: "21"
      },
      {
        name: "Shinyanga",
        shortCode: "22"
      },
      {
        name: "Singida",
        shortCode: "23"
      },
      {
        name: "Tabora",
        shortCode: "24"
      },
      {
        name: "Tanga",
        shortCode: "25"
      },
      {
        name: "Zanzibar North",
        shortCode: "07"
      },
      {
        name: "Zanzibar Central/South",
        shortCode: "11"
      },
      {
        name: "Zanzibar Urban/West",
        shortCode: "15"
      }
    ]
  },
  {
    countryName: "Thailand",
    countryShortCode: "TH",
    regions: [
      {
        name: "Amnat Charoen",
        shortCode: "37"
      },
      {
        name: "Ang Thong",
        shortCode: "15"
      },
      {
        name: "Bueng Kan",
        shortCode: "38"
      },
      {
        name: "Buri Ram",
        shortCode: "31"
      },
      {
        name: "Chachoengsao",
        shortCode: "24"
      },
      {
        name: "Chai Nat",
        shortCode: "18"
      },
      {
        name: "Chaiyaphum",
        shortCode: "36"
      },
      {
        name: "Chanthaburi",
        shortCode: "22"
      },
      {
        name: "Chiang Mai",
        shortCode: "50"
      },
      {
        name: "Chiang Rai",
        shortCode: "57"
      },
      {
        name: "Chon Buri",
        shortCode: "20"
      },
      {
        name: "Chumphon",
        shortCode: "86"
      },
      {
        name: "Kalasin",
        shortCode: "46"
      },
      {
        name: "Kamphaeng Phet",
        shortCode: "62"
      },
      {
        name: "Kanchanaburi",
        shortCode: "71"
      },
      {
        name: "Khon Kaen",
        shortCode: "40"
      },
      {
        name: "Krabi",
        shortCode: "81"
      },
      {
        name: "Krung Thep Mahanakhon (Bangkok)",
        shortCode: "10"
      },
      {
        name: "Lampang",
        shortCode: "52"
      },
      {
        name: "Lamphun",
        shortCode: "51"
      },
      {
        name: "Loei",
        shortCode: "42"
      },
      {
        name: "Lop Buri",
        shortCode: "16"
      },
      {
        name: "Mae Hong Son",
        shortCode: "58"
      },
      {
        name: "Maha Sarakham",
        shortCode: "44"
      },
      {
        name: "Mukdahan",
        shortCode: "49"
      },
      {
        name: "Nakhon Nayok",
        shortCode: "26"
      },
      {
        name: "Nakhon Phathom",
        shortCode: "73"
      },
      {
        name: "Nakhon Phanom",
        shortCode: "48"
      },
      {
        name: "Nakhon Ratchasima",
        shortCode: "30"
      },
      {
        name: "Nakhon Sawan",
        shortCode: "60"
      },
      {
        name: "Nakhon Si Thammarat",
        shortCode: "80"
      },
      {
        name: "Nan",
        shortCode: "55"
      },
      {
        name: "Narathiwat",
        shortCode: "96"
      },
      {
        name: "Nong Bua Lam Phu",
        shortCode: "39"
      },
      {
        name: "Nong Khai",
        shortCode: "43"
      },
      {
        name: "Nonthaburi",
        shortCode: "12"
      },
      {
        name: "Pathum Thani",
        shortCode: "13"
      },
      {
        name: "Pattani",
        shortCode: "94"
      },
      {
        name: "Phangnga",
        shortCode: "82"
      },
      {
        name: "Phatthalung",
        shortCode: "93"
      },
      {
        name: "Phayao",
        shortCode: "56"
      },
      {
        name: "Phetchabun",
        shortCode: "76"
      },
      {
        name: "Phetchaburi",
        shortCode: "76"
      },
      {
        name: "Phichit",
        shortCode: "66"
      },
      {
        name: "Phitsanulok",
        shortCode: "65"
      },
      {
        name: "Phra Nakhon Si Ayutthaya",
        shortCode: "14"
      },
      {
        name: "Phrae",
        shortCode: "54"
      },
      {
        name: "Phuket",
        shortCode: "83"
      },
      {
        name: "Prachin Buri",
        shortCode: "25"
      },
      {
        name: "Prachuap Khiri Khan",
        shortCode: "77"
      },
      {
        name: "Ranong",
        shortCode: "85"
      },
      {
        name: "Ratchaburi",
        shortCode: "70"
      },
      {
        name: "Rayong",
        shortCode: "21"
      },
      {
        name: "Roi Et",
        shortCode: "45"
      },
      {
        name: "Sa Kaeo",
        shortCode: "27"
      },
      {
        name: "Sakon Nakhon",
        shortCode: "47"
      },
      {
        name: "Samut Prakan",
        shortCode: "11"
      },
      {
        name: "Samut Sakhon",
        shortCode: "74"
      },
      {
        name: "Samut Songkhram",
        shortCode: "75"
      },
      {
        name: "Saraburi",
        shortCode: "19"
      },
      {
        name: "Satun",
        shortCode: "91"
      },
      {
        name: "Sing Buri",
        shortCode: "17"
      },
      {
        name: "Si Sa ket",
        shortCode: "33"
      },
      {
        name: "Songkhla",
        shortCode: "90"
      },
      {
        name: "Sukhothai",
        shortCode: "64"
      },
      {
        name: "Suphan Buri",
        shortCode: "72"
      },
      {
        name: "Surat Thani",
        shortCode: "84"
      },
      {
        name: "Surin",
        shortCode: "32"
      },
      {
        name: "Tak",
        shortCode: "63"
      },
      {
        name: "Trang",
        shortCode: "92"
      },
      {
        name: "Trat",
        shortCode: "23"
      },
      {
        name: "Ubon Ratchathani",
        shortCode: "34"
      },
      {
        name: "Udon Thani",
        shortCode: "41"
      },
      {
        name: "Uthai Thani",
        shortCode: "61"
      },
      {
        name: "Uttaradit",
        shortCode: "53"
      },
      {
        name: "Yala",
        shortCode: "95"
      },
      {
        name: "Yasothon",
        shortCode: "35"
      }
    ]
  },
  {
    countryName: "Timor-Leste",
    countryShortCode: "TL",
    regions: [
      {
        name: "Aileu",
        shortCode: "AL"
      },
      {
        name: "Ainaro",
        shortCode: "AN"
      },
      {
        name: "Baucau",
        shortCode: "BA"
      },
      {
        name: "Bobonaro",
        shortCode: "BO"
      },
      {
        name: "Cova Lima",
        shortCode: "CO"
      },
      {
        name: "Dili",
        shortCode: "DI"
      },
      {
        name: "Ermera",
        shortCode: "ER"
      },
      {
        name: "Lautem",
        shortCode: "LA"
      },
      {
        name: "Liquica",
        shortCode: "LI"
      },
      {
        name: "Manatuto",
        shortCode: "MT"
      },
      {
        name: "Manufahi",
        shortCode: "MF"
      },
      {
        name: "Oecussi",
        shortCode: "OE"
      },
      {
        name: "Viqueque",
        shortCode: "VI"
      }
    ]
  },
  {
    countryName: "Togo",
    countryShortCode: "TG",
    regions: [
      {
        name: "Centre",
        shortCode: "C"
      },
      {
        name: "Kara",
        shortCode: "K"
      },
      {
        name: "Maritime",
        shortCode: "M"
      },
      {
        name: "Plateaux",
        shortCode: "P"
      },
      {
        name: "Savannes",
        shortCode: "S"
      }
    ]
  },
  {
    countryName: "Tokelau",
    countryShortCode: "TK",
    regions: [
      {
        name: "Atafu"
      },
      {
        name: "Fakaofo"
      },
      {
        name: "Nukunonu"
      }
    ]
  },
  {
    countryName: "Tonga",
    countryShortCode: "TO",
    regions: [
      {
        name: "'Eua",
        shortCode: "01"
      },
      {
        name: "Ha'apai",
        shortCode: "02"
      },
      {
        name: "Niuas",
        shortCode: "03"
      },
      {
        name: "Tongatapu",
        shortCode: "04"
      },
      {
        name: "Vava'u",
        shortCode: "05"
      }
    ]
  },
  {
    countryName: "Trinidad and Tobago",
    countryShortCode: "TT",
    regions: [
      {
        name: "Arima",
        shortCode: "ARI"
      },
      {
        name: "Chaguanas",
        shortCode: "CHA"
      },
      {
        name: "Couva-Tabaquite-Talparo",
        shortCode: "CTT"
      },
      {
        name: "Diefo Martin",
        shortCode: "DMN"
      },
      {
        name: "Mayaro-Rio Claro",
        shortCode: "MRC"
      },
      {
        name: "Penal-Debe",
        shortCode: "PED"
      },
      {
        name: "Point Fortin",
        shortCode: "PTF"
      },
      {
        name: "Port-of-Spain",
        shortCode: "POS"
      },
      {
        name: "Princes Town",
        shortCode: "PRT"
      },
      {
        name: "San Fernando",
        shortCode: "SFO"
      },
      {
        name: "San Juan-Laventille",
        shortCode: "SJL"
      },
      {
        name: "Sangre Grande",
        shortCode: "SGE"
      },
      {
        name: "Siparia",
        shortCode: "SIP"
      },
      {
        name: "Tobago",
        shortCode: "TOB"
      },
      {
        name: "Tunapuna-Piarco",
        shortCode: "TUP"
      }
    ]
  },
  {
    countryName: "Tunisia",
    countryShortCode: "TN",
    regions: [
      {
        name: "Ariana",
        shortCode: "12"
      },
      {
        name: "Beja",
        shortCode: "31"
      },
      {
        name: "Ben Arous",
        shortCode: "13"
      },
      {
        name: "Bizerte",
        shortCode: "23"
      },
      {
        name: "Gabes",
        shortCode: "81"
      },
      {
        name: "Gafsa",
        shortCode: "71"
      },
      {
        name: "Jendouba",
        shortCode: "32"
      },
      {
        name: "Kairouan",
        shortCode: "41"
      },
      {
        name: "Kasserine",
        shortCode: "42"
      },
      {
        name: "Kebili",
        shortCode: "73"
      },
      {
        name: "Kef",
        shortCode: "33"
      },
      {
        name: "Mahdia",
        shortCode: "53"
      },
      {
        name: "Medenine",
        shortCode: "82"
      },
      {
        name: "Monastir",
        shortCode: "52"
      },
      {
        name: "Nabeul",
        shortCode: "21"
      },
      {
        name: "Sfax",
        shortCode: "61"
      },
      {
        name: "Sidi Bouzid",
        shortCode: "43"
      },
      {
        name: "Siliana",
        shortCode: "34"
      },
      {
        name: "Sousse",
        shortCode: "51"
      },
      {
        name: "Tataouine",
        shortCode: "83"
      },
      {
        name: "Tozeur",
        shortCode: "72"
      },
      {
        name: "Tunis",
        shortCode: "11"
      },
      {
        name: "Zaghouan",
        shortCode: "22"
      }
    ]
  },
  {
    countryName: "Turkey",
    countryShortCode: "TR",
    regions: [
      {
        name: "Adana",
        shortCode: "01"
      },
      {
        name: "Adiyaman",
        shortCode: "02"
      },
      {
        name: "Afyonkarahisar",
        shortCode: "03"
      },
      {
        name: "Agri",
        shortCode: "04"
      },
      {
        name: "Aksaray",
        shortCode: "68"
      },
      {
        name: "Amasya",
        shortCode: "05"
      },
      {
        name: "Ankara",
        shortCode: "06"
      },
      {
        name: "Antalya",
        shortCode: "07"
      },
      {
        name: "Ardahan",
        shortCode: "75"
      },
      {
        name: "Artvin",
        shortCode: "08"
      },
      {
        name: "Aydin",
        shortCode: "09"
      },
      {
        name: "Balikesir",
        shortCode: "10"
      },
      {
        name: "Bartin",
        shortCode: "74"
      },
      {
        name: "Batman",
        shortCode: "72"
      },
      {
        name: "Bayburt",
        shortCode: "69"
      },
      {
        name: "Bilecik",
        shortCode: "11"
      },
      {
        name: "Bingol",
        shortCode: "12"
      },
      {
        name: "Bitlis",
        shortCode: "13"
      },
      {
        name: "Bolu",
        shortCode: "14"
      },
      {
        name: "Burdur",
        shortCode: "15"
      },
      {
        name: "Bursa",
        shortCode: "16"
      },
      {
        name: "Canakkale",
        shortCode: "17"
      },
      {
        name: "Cankiri",
        shortCode: "18"
      },
      {
        name: "Corum",
        shortCode: "19"
      },
      {
        name: "Denizli",
        shortCode: "20"
      },
      {
        name: "Diyarbakir",
        shortCode: "21"
      },
      {
        name: "Duzce",
        shortCode: "81"
      },
      {
        name: "Edirne",
        shortCode: "22"
      },
      {
        name: "Elazig",
        shortCode: "23"
      },
      {
        name: "Erzincan",
        shortCode: "24"
      },
      {
        name: "Erzurum",
        shortCode: "25"
      },
      {
        name: "Eskisehir",
        shortCode: "26"
      },
      {
        name: "Gaziantep",
        shortCode: "27"
      },
      {
        name: "Giresun",
        shortCode: "28"
      },
      {
        name: "Gumushane",
        shortCode: "29"
      },
      {
        name: "Hakkari",
        shortCode: "30"
      },
      {
        name: "Hatay",
        shortCode: "31"
      },
      {
        name: "Igdir",
        shortCode: "76"
      },
      {
        name: "Isparta",
        shortCode: "32"
      },
      {
        name: "Istanbul",
        shortCode: "34"
      },
      {
        name: "Izmir",
        shortCode: "35"
      },
      {
        name: "Kahramanmaras",
        shortCode: "46"
      },
      {
        name: "Karabuk",
        shortCode: "78"
      },
      {
        name: "Karaman",
        shortCode: "70"
      },
      {
        name: "Kars",
        shortCode: "36"
      },
      {
        name: "Kastamonu",
        shortCode: "37"
      },
      {
        name: "Kayseri",
        shortCode: "38"
      },
      {
        name: "Kilis",
        shortCode: "79"
      },
      {
        name: "Kirikkale",
        shortCode: "71"
      },
      {
        name: "Kirklareli",
        shortCode: "39"
      },
      {
        name: "Kirsehir",
        shortCode: "40"
      },
      {
        name: "Kocaeli",
        shortCode: "41"
      },
      {
        name: "Konya",
        shortCode: "42"
      },
      {
        name: "Kutahya",
        shortCode: "43"
      },
      {
        name: "Malatya",
        shortCode: "44"
      },
      {
        name: "Manisa",
        shortCode: "45"
      },
      {
        name: "Mardin",
        shortCode: "47"
      },
      {
        name: "Mersin",
        shortCode: "33"
      },
      {
        name: "Mugla",
        shortCode: "48"
      },
      {
        name: "Mus",
        shortCode: "49"
      },
      {
        name: "Nevsehir",
        shortCode: "50"
      },
      {
        name: "Nigde",
        shortCode: "51"
      },
      {
        name: "Ordu",
        shortCode: "52"
      },
      {
        name: "Osmaniye",
        shortCode: "80"
      },
      {
        name: "Rize",
        shortCode: "53"
      },
      {
        name: "Sakarya",
        shortCode: "54"
      },
      {
        name: "Samsun",
        shortCode: "55"
      },
      {
        name: "Sanliurfa",
        shortCode: "63"
      },
      {
        name: "Siirt",
        shortCode: "56"
      },
      {
        name: "Sinop",
        shortCode: "57"
      },
      {
        name: "Sirnak",
        shortCode: "73"
      },
      {
        name: "Sivas",
        shortCode: "58"
      },
      {
        name: "Tekirdag",
        shortCode: "59"
      },
      {
        name: "Tokat",
        shortCode: "60"
      },
      {
        name: "Trabzon",
        shortCode: "61"
      },
      {
        name: "Tunceli",
        shortCode: "62"
      },
      {
        name: "Usak",
        shortCode: "64"
      },
      {
        name: "Van",
        shortCode: "65"
      },
      {
        name: "Yalova",
        shortCode: "77"
      },
      {
        name: "Yozgat",
        shortCode: "66"
      },
      {
        name: "Zonguldak",
        shortCode: "67"
      }
    ]
  },
  {
    countryName: "Turkmenistan",
    countryShortCode: "TM",
    regions: [
      {
        name: "Ahal",
        shortCode: "A"
      },
      {
        name: "Asgabat",
        shortCode: "S"
      },
      {
        name: "Balkan",
        shortCode: "B"
      },
      {
        name: "Dashoguz",
        shortCode: "D"
      },
      {
        name: "Lebap",
        shortCode: "L"
      },
      {
        name: "Mary",
        shortCode: "M"
      }
    ]
  },
  {
    countryName: "Turks and Caicos Islands",
    countryShortCode: "TC",
    regions: [
      {
        name: "Turks and Caicos Islands"
      }
    ]
  },
  {
    countryName: "Tuvalu",
    countryShortCode: "TV",
    regions: [
      {
        name: "Funafuti",
        shortCode: "FUN"
      },
      {
        name: "Nanumanga",
        shortCode: "NMG"
      },
      {
        name: "Nanumea",
        shortCode: "NMA"
      },
      {
        name: "Niutao",
        shortCode: "NIT"
      },
      {
        name: "Nui",
        shortCode: "NUI"
      },
      {
        name: "Nukufetau",
        shortCode: "NKF"
      },
      {
        name: "Nukulaelae",
        shortCode: "NKL"
      },
      {
        name: "Vaitupu",
        shortCode: "VAU"
      }
    ]
  },
  {
    countryName: "Uganda",
    countryShortCode: "UG",
    regions: [
      {
        name: "Abim",
        shortCode: "317"
      },
      {
        name: "Adjumani",
        shortCode: "301"
      },
      {
        name: "Amolatar",
        shortCode: "314"
      },
      {
        name: "Amuria",
        shortCode: "216"
      },
      {
        name: "Amuru",
        shortCode: "319"
      },
      {
        name: "Apac",
        shortCode: "302"
      },
      {
        name: "Arua",
        shortCode: "303"
      },
      {
        name: "Budaka",
        shortCode: "217"
      },
      {
        name: "Bududa",
        shortCode: "223"
      },
      {
        name: "Bugiri",
        shortCode: "201"
      },
      {
        name: "Bukedea",
        shortCode: "224"
      },
      {
        name: "Bukwa",
        shortCode: "218"
      },
      {
        name: "Buliisa",
        shortCode: "419"
      },
      {
        name: "Bundibugyo",
        shortCode: "401"
      },
      {
        name: "Bushenyi",
        shortCode: "402"
      },
      {
        name: "Busia",
        shortCode: "202"
      },
      {
        name: "Butaleja",
        shortCode: "219"
      },
      {
        name: "Dokolo",
        shortCode: "318"
      },
      {
        name: "Gulu",
        shortCode: "304"
      },
      {
        name: "Hoima",
        shortCode: "403"
      },
      {
        name: "Ibanda",
        shortCode: "416"
      },
      {
        name: "Iganga",
        shortCode: "203"
      },
      {
        name: "Isingiro",
        shortCode: "417"
      },
      {
        name: "Jinja",
        shortCode: "204"
      },
      {
        name: "Kaabong",
        shortCode: "315"
      },
      {
        name: "Kabale",
        shortCode: "404"
      },
      {
        name: "Kabarole",
        shortCode: "405"
      },
      {
        name: "Kaberamaido",
        shortCode: "213"
      },
      {
        name: "Kalangala",
        shortCode: "101"
      },
      {
        name: "Kaliro",
        shortCode: "220"
      },
      {
        name: "Kampala",
        shortCode: "102"
      },
      {
        name: "Kamuli",
        shortCode: "205"
      },
      {
        name: "Kamwenge",
        shortCode: "413"
      },
      {
        name: "Kanungu",
        shortCode: "414"
      },
      {
        name: "Kapchorwa",
        shortCode: "206"
      },
      {
        name: "Kasese",
        shortCode: "406"
      },
      {
        name: "Katakwi",
        shortCode: "207"
      },
      {
        name: "Kayunga",
        shortCode: "112"
      },
      {
        name: "Kibaale",
        shortCode: "407"
      },
      {
        name: "Kiboga",
        shortCode: "103"
      },
      {
        name: "Kiruhura",
        shortCode: "418"
      },
      {
        name: "Kisoro",
        shortCode: "408"
      },
      {
        name: "Kitgum",
        shortCode: "305"
      },
      {
        name: "Koboko",
        shortCode: "316"
      },
      {
        name: "Kotido",
        shortCode: "306"
      },
      {
        name: "Kumi",
        shortCode: "208"
      },
      {
        name: "Kyenjojo",
        shortCode: "415"
      },
      {
        name: "Lira",
        shortCode: "307"
      },
      {
        name: "Luwero",
        shortCode: "104"
      },
      {
        name: "Lyantonde",
        shortCode: "116"
      },
      {
        name: "Manafwa",
        shortCode: "221"
      },
      {
        name: "Maracha",
        shortCode: "320"
      },
      {
        name: "Masaka",
        shortCode: "105"
      },
      {
        name: "Masindi",
        shortCode: "409"
      },
      {
        name: "Mayuge",
        shortCode: "214"
      },
      {
        name: "Mbale",
        shortCode: "209"
      },
      {
        name: "Mbarara",
        shortCode: "410"
      },
      {
        name: "Mityana",
        shortCode: "114"
      },
      {
        name: "Moroto",
        shortCode: "308"
      },
      {
        name: "Moyo",
        shortCode: "309"
      },
      {
        name: "Mpigi",
        shortCode: "106"
      },
      {
        name: "Mubende",
        shortCode: "107"
      },
      {
        name: "Mukono",
        shortCode: "108"
      },
      {
        name: "Nakapiripirit",
        shortCode: "311"
      },
      {
        name: "Nakaseke",
        shortCode: "115"
      },
      {
        name: "Nakasongola",
        shortCode: "109"
      },
      {
        name: "Namutumba",
        shortCode: "222"
      },
      {
        name: "Nebbi",
        shortCode: "310"
      },
      {
        name: "Ntungamo",
        shortCode: "411"
      },
      {
        name: "Oyam",
        shortCode: "321"
      },
      {
        name: "Pader",
        shortCode: "312"
      },
      {
        name: "Pallisa",
        shortCode: "210"
      },
      {
        name: "Rakai",
        shortCode: "110"
      },
      {
        name: "Rukungiri",
        shortCode: "412"
      },
      {
        name: "Sembabule",
        shortCode: "111"
      },
      {
        name: "Sironko",
        shortCode: "215"
      },
      {
        name: "Soroti",
        shortCode: "211"
      },
      {
        name: "Tororo",
        shortCode: "212"
      },
      {
        name: "Wakiso",
        shortCode: "113"
      },
      {
        name: "Yumbe",
        shortCode: "313"
      }
    ]
  },
  {
    countryName: "Ukraine",
    countryShortCode: "UA",
    regions: [
      {
        name: "Cherkasy",
        shortCode: "71"
      },
      {
        name: "Chernihiv",
        shortCode: "74"
      },
      {
        name: "Chernivtsi",
        shortCode: "77"
      },
      {
        name: "Dnipropetrovsk",
        shortCode: "12"
      },
      {
        name: "Donetsk",
        shortCode: "14"
      },
      {
        name: "Ivano-Frankivsk",
        shortCode: "26"
      },
      {
        name: "Kharkiv",
        shortCode: "63"
      },
      {
        name: "Kherson",
        shortCode: "65"
      },
      {
        name: "Khmelnytskyi",
        shortCode: "68"
      },
      {
        name: "Kiev",
        shortCode: "32"
      },
      {
        name: "Kirovohrad",
        shortCode: "35"
      },
      {
        name: "Luhansk",
        shortCode: "09"
      },
      {
        name: "Lviv",
        shortCode: "46"
      },
      {
        name: "Mykolaiv",
        shortCode: "48"
      },
      {
        name: "Odessa",
        shortCode: "51"
      },
      {
        name: "Poltava",
        shortCode: "53"
      },
      {
        name: "Rivne",
        shortCode: "56"
      },
      {
        name: "Sumy",
        shortCode: "59"
      },
      {
        name: "Ternopil",
        shortCode: "61"
      },
      {
        name: "Vinnytsia",
        shortCode: "05"
      },
      {
        name: "Volyn",
        shortCode: "07"
      },
      {
        name: "Zakarpattia",
        shortCode: "21"
      },
      {
        name: "Zaporizhia",
        shortCode: "23"
      },
      {
        name: "Zhytomyr",
        shortCode: "18"
      },
      {
        name: "Avtonomna Respublika Krym",
        shortCode: "43"
      },
      {
        name: "Kyïv",
        shortCode: "30"
      },
      {
        name: "Sevastopol",
        shortCode: "40"
      }
    ]
  },
  {
    countryName: "United Arab Emirates",
    countryShortCode: "AE",
    regions: [
      {
        name: "Abu Dhabi",
        shortCode: "AZ"
      },
      {
        name: "Ajman",
        shortCode: "AJ"
      },
      {
        name: "Dubai",
        shortCode: "DU"
      },
      {
        name: "Fujairah",
        shortCode: "FU"
      },
      {
        name: "Ras al Khaimah",
        shortCode: "RK"
      },
      {
        name: "Sharjah",
        shortCode: "SH"
      },
      {
        name: "Umm Al Quwain",
        shortCode: "UQ"
      }
    ]
  },
  {
    countryName: "United Kingdom",
    countryShortCode: "GB",
    regions: [
      {
        name: "Avon",
        shortCode: "AVN"
      },
      {
        name: "Bedfordshire",
        shortCode: "BDF"
      },
      {
        name: "Berkshire",
        shortCode: "BRK"
      },
      {
        name: "Bristol, City of",
        shortCode: "COB"
      },
      {
        name: "Buckinghamshire",
        shortCode: "BKM"
      },
      {
        name: "Cambridgeshire",
        shortCode: "CAM"
      },
      {
        name: "Cheshire",
        shortCode: "CHS"
      },
      {
        name: "Cleveland",
        shortCode: "CLV"
      },
      {
        name: "Cornwall",
        shortCode: "CON"
      },
      {
        name: "Cumbria",
        shortCode: "CMA"
      },
      {
        name: "Derbyshire",
        shortCode: "DBY"
      },
      {
        name: "Devon",
        shortCode: "DEV"
      },
      {
        name: "Dorset",
        shortCode: "DOR"
      },
      {
        name: "Durham",
        shortCode: "DUR"
      },
      {
        name: "East Sussex",
        shortCode: "SXE"
      },
      {
        name: "Essex",
        shortCode: "ESS"
      },
      {
        name: "Gloucestershire",
        shortCode: "GLS"
      },
      {
        name: "Greater London",
        shortCode: "LND"
      },
      {
        name: "Greater Manchester",
        shortCode: "GTM"
      },
      {
        name: "Hampshire",
        shortCode: "HAM"
      },
      {
        name: "Hereford and Worcester",
        shortCode: "HWR"
      },
      {
        name: "Herefordshire",
        shortCode: "HEF"
      },
      {
        name: "Hertfordshire",
        shortCode: "HRT"
      },
      {
        name: "Isle of Wight",
        shortCode: "IOW"
      },
      {
        name: "Kent",
        shortCode: "KEN"
      },
      {
        name: "Lancashire",
        shortCode: "LAN"
      },
      {
        name: "Leicestershire",
        shortCode: "LEI"
      },
      {
        name: "Lincolnshire",
        shortCode: "LIN"
      },
      {
        name: "London",
        shortCode: "LDN"
      },
      {
        name: "Merseyside",
        shortCode: "MSY"
      },
      {
        name: "Middlesex",
        shortCode: "MDX"
      },
      {
        name: "Norfolk",
        shortCode: "NFK"
      },
      {
        name: "Northamptonshire",
        shortCode: "NTH"
      },
      {
        name: "Northumberland",
        shortCode: "NBL"
      },
      {
        name: "North Humberside",
        shortCode: "NHM"
      },
      {
        name: "North Yorkshire",
        shortCode: "NYK"
      },
      {
        name: "Nottinghamshire",
        shortCode: "NTT"
      },
      {
        name: "Oxfordshire",
        shortCode: "OXF"
      },
      {
        name: "Rutland",
        shortCode: "RUT"
      },
      {
        name: "Shropshire",
        shortCode: "SAL"
      },
      {
        name: "Somerset",
        shortCode: "SOM"
      },
      {
        name: "South Humberside",
        shortCode: "SHM"
      },
      {
        name: "South Yorkshire",
        shortCode: "SYK"
      },
      {
        name: "Staffordshire",
        shortCode: "STS"
      },
      {
        name: "Suffolk",
        shortCode: "SFK"
      },
      {
        name: "Surrey",
        shortCode: "SRY"
      },
      {
        name: "Tyne and Wear",
        shortCode: "TWR"
      },
      {
        name: "Warwickshire",
        shortCode: "WAR"
      },
      {
        name: "West Midlands",
        shortCode: "WMD"
      },
      {
        name: "West Sussex",
        shortCode: "SXW"
      },
      {
        name: "West Yorkshire",
        shortCode: "WYK"
      },
      {
        name: "Wiltshire",
        shortCode: "WIL"
      },
      {
        name: "Worcestershire",
        shortCode: "WOR"
      },
      {
        name: "Antrim",
        shortCode: "ANT"
      },
      {
        name: "Armagh",
        shortCode: "ARM"
      },
      {
        name: "Belfast, City of",
        shortCode: "BLF"
      },
      {
        name: "Down",
        shortCode: "DOW"
      },
      {
        name: "Fermanagh",
        shortCode: "FER"
      },
      {
        name: "Londonderry",
        shortCode: "LDY"
      },
      {
        name: "Derry, City of",
        shortCode: "DRY"
      },
      {
        name: "Tyrone",
        shortCode: "TYR"
      },
      {
        name: "Aberdeen, City of",
        shortCode: "AN"
      },
      {
        name: "Aberdeenshire",
        shortCode: "ABD"
      },
      {
        name: "Angus (Forfarshire)",
        shortCode: "ANS"
      },
      {
        name: "Argyll",
        shortCode: "AGB"
      },
      {
        name: "Ayrshire",
        shortCode: "ARG"
      },
      {
        name: "Banffshire",
        shortCode: "BAN"
      },
      {
        name: "Berwickshire",
        shortCode: "BEW"
      },
      {
        name: "Bute",
        shortCode: "BUT"
      },
      {
        name: "Caithness",
        shortCode: "CAI"
      },
      {
        name: "Clackmannanshire",
        shortCode: "CLK"
      },
      {
        name: "Cromartyshire",
        shortCode: "COC"
      },
      {
        name: "Dumfriesshire",
        shortCode: "DFS"
      },
      {
        name: "Dunbartonshire (Dumbarton)",
        shortCode: "DNB"
      },
      {
        name: "Dundee, City of",
        shortCode: "DD"
      },
      {
        name: "East Lothian (Haddingtonshire)",
        shortCode: "ELN"
      },
      {
        name: "Edinburgh, City of",
        shortCode: "EB"
      },
      {
        name: "Fife",
        shortCode: "FIF"
      },
      {
        name: "Glasgow, City of",
        shortCode: "GLA"
      },
      {
        name: "Inverness-shire",
        shortCode: "INV"
      },
      {
        name: "Kincardineshire",
        shortCode: "KCD"
      },
      {
        name: "Kinross-shire",
        shortCode: "KRS"
      },
      {
        name: "Kirkcudbrightshire",
        shortCode: "KKD"
      },
      {
        name: "Lanarkshire",
        shortCode: "LKS"
      },
      {
        name: "Midlothian (County of Edinburgh)",
        shortCode: "MLN"
      },
      {
        name: "Moray (Elginshire)",
        shortCode: "MOR"
      },
      {
        name: "Nairnshire",
        shortCode: "NAI"
      },
      {
        name: "Orkney",
        shortCode: "OKI"
      },
      {
        name: "Peeblesshire",
        shortCode: "PEE"
      },
      {
        name: "Perthshire",
        shortCode: "PER"
      },
      {
        name: "Renfrewshire",
        shortCode: "RFW"
      },
      {
        name: "Ross and Cromarty",
        shortCode: "ROC"
      },
      {
        name: "Ross-shire",
        shortCode: "ROS"
      },
      {
        name: "Roxburghshire",
        shortCode: "ROX"
      },
      {
        name: "Selkirkshire",
        shortCode: "SEL"
      },
      {
        name: "Shetland (Zetland)",
        shortCode: "SHI"
      },
      {
        name: "Stirlingshire",
        shortCode: "STI"
      },
      {
        name: "Sutherland",
        shortCode: "SUT"
      },
      {
        name: "West Lothian (Linlithgowshire)",
        shortCode: "WLN"
      },
      {
        name: "Wigtownshire",
        shortCode: "WIG"
      },
      {
        name: "Clwyd",
        shortCode: "CWD"
      },
      {
        name: "Dyfed",
        shortCode: "DFD"
      },
      {
        name: "Gwent",
        shortCode: "GNT"
      },
      {
        name: "Gwynedd",
        shortCode: "GWN"
      },
      {
        name: "Mid Glamorgan",
        shortCode: "MGM"
      },
      {
        name: "Powys",
        shortCode: "POW"
      },
      {
        name: "South Glamorgan",
        shortCode: "SGM"
      },
      {
        name: "West Glamorgan",
        shortCode: "WGM"
      }
    ]
  },
  {
    countryName: "United States",
    countryShortCode: "US",
    regions: [
      {
        name: "Alabama",
        shortCode: "AL"
      },
      {
        name: "Alaska",
        shortCode: "AK"
      },
      {
        name: "American Samoa",
        shortCode: "AS"
      },
      {
        name: "Arizona",
        shortCode: "AZ"
      },
      {
        name: "Arkansas",
        shortCode: "AR"
      },
      {
        name: "California",
        shortCode: "CA"
      },
      {
        name: "Colorado",
        shortCode: "CO"
      },
      {
        name: "Connecticut",
        shortCode: "CT"
      },
      {
        name: "Delaware",
        shortCode: "DE"
      },
      {
        name: "District of Columbia",
        shortCode: "DC"
      },
      {
        name: "Micronesia",
        shortCode: "FM"
      },
      {
        name: "Florida",
        shortCode: "FL"
      },
      {
        name: "Georgia",
        shortCode: "GA"
      },
      {
        name: "Guam",
        shortCode: "GU"
      },
      {
        name: "Hawaii",
        shortCode: "HI"
      },
      {
        name: "Idaho",
        shortCode: "ID"
      },
      {
        name: "Illinois",
        shortCode: "IL"
      },
      {
        name: "Indiana",
        shortCode: "IN"
      },
      {
        name: "Iowa",
        shortCode: "IA"
      },
      {
        name: "Kansas",
        shortCode: "KS"
      },
      {
        name: "Kentucky",
        shortCode: "KY"
      },
      {
        name: "Louisiana",
        shortCode: "LA"
      },
      {
        name: "Maine",
        shortCode: "ME"
      },
      {
        name: "Marshall Islands",
        shortCode: "MH"
      },
      {
        name: "Maryland",
        shortCode: "MD"
      },
      {
        name: "Massachusetts",
        shortCode: "MA"
      },
      {
        name: "Michigan",
        shortCode: "MI"
      },
      {
        name: "Minnesota",
        shortCode: "MN"
      },
      {
        name: "Mississippi",
        shortCode: "MS"
      },
      {
        name: "Missouri",
        shortCode: "MO"
      },
      {
        name: "Montana",
        shortCode: "MT"
      },
      {
        name: "Nebraska",
        shortCode: "NE"
      },
      {
        name: "Nevada",
        shortCode: "NV"
      },
      {
        name: "New Hampshire",
        shortCode: "NH"
      },
      {
        name: "New Jersey",
        shortCode: "NJ"
      },
      {
        name: "New Mexico",
        shortCode: "NM"
      },
      {
        name: "New York",
        shortCode: "NY"
      },
      {
        name: "North Carolina",
        shortCode: "NC"
      },
      {
        name: "North Dakota",
        shortCode: "ND"
      },
      {
        name: "Northern Mariana Islands",
        shortCode: "MP"
      },
      {
        name: "Ohio",
        shortCode: "OH"
      },
      {
        name: "Oklahoma",
        shortCode: "OK"
      },
      {
        name: "Oregon",
        shortCode: "OR"
      },
      {
        name: "Palau",
        shortCode: "PW"
      },
      {
        name: "Pennsylvania",
        shortCode: "PA"
      },
      {
        name: "Puerto Rico",
        shortCode: "PR"
      },
      {
        name: "Rhode Island",
        shortCode: "RI"
      },
      {
        name: "South Carolina",
        shortCode: "SC"
      },
      {
        name: "South Dakota",
        shortCode: "SD"
      },
      {
        name: "Tennessee",
        shortCode: "TN"
      },
      {
        name: "Texas",
        shortCode: "TX"
      },
      {
        name: "Utah",
        shortCode: "UT"
      },
      {
        name: "Vermont",
        shortCode: "VT"
      },
      {
        name: "Virgin Islands",
        shortCode: "VI"
      },
      {
        name: "Virginia",
        shortCode: "VA"
      },
      {
        name: "Washington",
        shortCode: "WA"
      },
      {
        name: "West Virginia",
        shortCode: "WV"
      },
      {
        name: "Wisconsin",
        shortCode: "WI"
      },
      {
        name: "Wyoming",
        shortCode: "WY"
      },
      {
        name: "Armed Forces Americas",
        shortCode: "AA"
      },
      {
        name: "Armed Forces Europe, Canada, Africa and Middle East",
        shortCode: "AE"
      },
      {
        name: "Armed Forces Pacific",
        shortCode: "AP"
      }
    ]
  },
  {
    countryName: "United States Minor Outlying Islands",
    countryShortCode: "UM",
    regions: [
      {
        name: "Baker Island",
        shortCode: "81"
      },
      {
        name: "Howland Island",
        shortCode: "84"
      },
      {
        name: "Jarvis Island",
        shortCode: "86"
      },
      {
        name: "Johnston Atoll",
        shortCode: "67"
      },
      {
        name: "Kingman Reef",
        shortCode: "89"
      },
      {
        name: "Midway Islands",
        shortCode: "71"
      },
      {
        name: "Navassa Island",
        shortCode: "76"
      },
      {
        name: "Palmyra Atoll",
        shortCode: "95"
      },
      {
        name: "Wake Island",
        shortCode: "79"
      },
      {
        name: "Bajo Nuevo Bank",
        shortCode: "BN"
      },
      {
        name: "Serranilla Bank",
        shortCode: "SB"
      }
    ]
  },
  {
    countryName: "Uruguay",
    countryShortCode: "UY",
    regions: [
      {
        name: "Artigas",
        shortCode: "AR"
      },
      {
        name: "Canelones",
        shortCode: "CA"
      },
      {
        name: "Cerro Largo",
        shortCode: "CL"
      },
      {
        name: "Colonia",
        shortCode: "CO"
      },
      {
        name: "Durazno",
        shortCode: "DU"
      },
      {
        name: "Flores",
        shortCode: "FS"
      },
      {
        name: "Florida",
        shortCode: "FD"
      },
      {
        name: "Lavalleja",
        shortCode: "LA"
      },
      {
        name: "Maldonado",
        shortCode: "MA"
      },
      {
        name: "Montevideo",
        shortCode: "MO"
      },
      {
        name: "Paysandú",
        shortCode: "PA"
      },
      {
        name: "Río Negro",
        shortCode: "RN"
      },
      {
        name: "Rivera",
        shortCode: "RV"
      },
      {
        name: "Rocha",
        shortCode: "RO"
      },
      {
        name: "Salto",
        shortCode: "SA"
      },
      {
        name: "San José",
        shortCode: "SJ"
      },
      {
        name: "Soriano",
        shortCode: "SO"
      },
      {
        name: "Tacuarembó",
        shortCode: "TA"
      },
      {
        name: "Treinta y Tres",
        shortCode: "TT"
      }
    ]
  },
  {
    countryName: "Uzbekistan",
    countryShortCode: "UZ",
    regions: [
      {
        name: "Toshkent shahri",
        shortCode: "TK"
      },
      {
        name: "Andijon",
        shortCode: "AN"
      },
      {
        name: "Buxoro",
        shortCode: "BU"
      },
      {
        name: "Farg‘ona",
        shortCode: "FA"
      },
      {
        name: "Jizzax",
        shortCode: "JI"
      },
      {
        name: "Namangan",
        shortCode: "NG"
      },
      {
        name: "Navoiy",
        shortCode: "NW"
      },
      {
        name: "Qashqadaryo (Qarshi)",
        shortCode: "QA"
      },
      {
        name: "Samarqand",
        shortCode: "SA"
      },
      {
        name: "Sirdaryo (Guliston)",
        shortCode: "SI"
      },
      {
        name: "Surxondaryo (Termiz)",
        shortCode: "SU"
      },
      {
        name: "Toshkent wiloyati",
        shortCode: "TO"
      },
      {
        name: "Xorazm (Urganch)",
        shortCode: "XO"
      },
      {
        name: "Qoraqalpog‘iston Respublikasi (Nukus)",
        shortCode: "QR"
      }
    ]
  },
  {
    countryName: "Vanuatu",
    countryShortCode: "VU",
    regions: [
      {
        name: "Malampa",
        shortCode: "MAP"
      },
      {
        name: "Pénama",
        shortCode: "PAM"
      },
      {
        name: "Sanma",
        shortCode: "SAM"
      },
      {
        name: "Shéfa",
        shortCode: "SEE"
      },
      {
        name: "Taféa",
        shortCode: "TAE"
      },
      {
        name: "Torba",
        shortCode: "TOB"
      }
    ]
  },
  {
    countryName: "Venezuela, Bolivarian Republic of",
    countryShortCode: "VE",
    regions: [
      {
        name: "Dependencias Federales",
        shortCode: "W"
      },
      {
        name: "Distrito Federal",
        shortCode: "A"
      },
      {
        name: "Amazonas",
        shortCode: "Z"
      },
      {
        name: "Anzoátegui",
        shortCode: "B"
      },
      {
        name: "Apure",
        shortCode: "C"
      },
      {
        name: "Aragua",
        shortCode: "D"
      },
      {
        name: "Barinas",
        shortCode: "E"
      },
      {
        name: "Bolívar",
        shortCode: "F"
      },
      {
        name: "Carabobo",
        shortCode: "G"
      },
      {
        name: "Cojedes",
        shortCode: "H"
      },
      {
        name: "Delta Amacuro",
        shortCode: "Y"
      },
      {
        name: "Falcón",
        shortCode: "I"
      },
      {
        name: "Guárico",
        shortCode: "J"
      },
      {
        name: "Lara",
        shortCode: "K"
      },
      {
        name: "Mérida",
        shortCode: "L"
      },
      {
        name: "Miranda",
        shortCode: "M"
      },
      {
        name: "Monagas",
        shortCode: "N"
      },
      {
        name: "Nueva Esparta",
        shortCode: "O"
      },
      {
        name: "Portuguesa",
        shortCode: "P"
      },
      {
        name: "Sucre",
        shortCode: "R"
      },
      {
        name: "Táchira",
        shortCode: "S"
      },
      {
        name: "Trujillo",
        shortCode: "T"
      },
      {
        name: "Vargas",
        shortCode: "X"
      },
      {
        name: "Yaracuy",
        shortCode: "U"
      },
      {
        name: "Zulia",
        shortCode: "V"
      }
    ]
  },
  {
    countryName: "Vietnam",
    countryShortCode: "VN",
    regions: [
      {
        name: "Đồng Nai",
        shortCode: "39"
      },
      {
        name: "Đồng Tháp",
        shortCode: "45"
      },
      {
        name: "Gia Lai",
        shortCode: "30"
      },
      {
        name: "Hà Giang",
        shortCode: "03"
      },
      {
        name: "Hà Nam",
        shortCode: "63"
      },
      {
        name: "Hà Tây",
        shortCode: "15"
      },
      {
        name: "Hà Tĩnh",
        shortCode: "23"
      },
      {
        name: "Hải Dương",
        shortCode: "61"
      },
      {
        name: "Hậu Giang",
        shortCode: "73"
      },
      {
        name: "Hòa Bình",
        shortCode: "14"
      },
      {
        name: "Hưng Yên",
        shortCode: "66"
      },
      {
        name: "Khánh Hòa",
        shortCode: "34"
      },
      {
        name: "Kiên Giang",
        shortCode: "47"
      },
      {
        name: "Kon Tum",
        shortCode: "28"
      },
      {
        name: "Lai Châu",
        shortCode: "01"
      },
      {
        name: "Lâm Đồng",
        shortCode: "35"
      },
      {
        name: "Lạng Sơn",
        shortCode: "09"
      },
      {
        name: "Lào Cai",
        shortCode: "02"
      },
      {
        name: "Long An",
        shortCode: "41"
      },
      {
        name: "Nam Định",
        shortCode: "67"
      },
      {
        name: "Nghệ An",
        shortCode: "22"
      },
      {
        name: "Ninh Bình",
        shortCode: "18"
      },
      {
        name: "Ninh Thuận",
        shortCode: "36"
      },
      {
        name: "Phú Thọ",
        shortCode: "68"
      },
      {
        name: "Phú Yên",
        shortCode: "32"
      },
      {
        name: "Quảng Bình",
        shortCode: "24"
      },
      {
        name: "Quảng Nam",
        shortCode: "27"
      },
      {
        name: "Quảng Ngãi",
        shortCode: "29"
      },
      {
        name: "Quảng Ninh",
        shortCode: "13"
      },
      {
        name: "Quảng Trị",
        shortCode: "25"
      },
      {
        name: "Sóc Trăng",
        shortCode: "52"
      },
      {
        name: "Sơn La",
        shortCode: "05"
      },
      {
        name: "Tây Ninh",
        shortCode: "37"
      },
      {
        name: "Thái Bình",
        shortCode: "20"
      },
      {
        name: "Thái Nguyên",
        shortCode: "69"
      },
      {
        name: "Thanh Hóa",
        shortCode: "21"
      },
      {
        name: "Thừa Thiên–Huế",
        shortCode: "26"
      },
      {
        name: "Tiền Giang",
        shortCode: "46"
      },
      {
        name: "Trà Vinh",
        shortCode: "51"
      },
      {
        name: "Tuyên Quang",
        shortCode: "07"
      },
      {
        name: "Vĩnh Long",
        shortCode: "49"
      },
      {
        name: "Vĩnh Phúc",
        shortCode: "70"
      },
      {
        name: "Yên Bái",
        shortCode: "06"
      },
      {
        name: "Cần Thơ",
        shortCode: "CT"
      },
      {
        name: "Đà Nẵng",
        shortCode: "DN"
      },
      {
        name: "Hà Nội",
        shortCode: "HN"
      },
      {
        name: "Hải Phòng",
        shortCode: "HP"
      },
      {
        name: "Hồ Chí Minh (Sài Gòn)",
        shortCode: "SG"
      }
    ]
  },
  {
    countryName: "Virgin Islands, British",
    countryShortCode: "VG",
    regions: [
      {
        name: "Anegada",
        shortCode: "ANG"
      },
      {
        name: "Jost Van Dyke",
        shortCode: "JVD"
      },
      {
        name: "Tortola",
        shortCode: "TTA"
      },
      {
        name: "Virgin Gorda",
        shortCode: "VGD"
      }
    ]
  },
  {
    countryName: "Virgin Islands, U.S.",
    countryShortCode: "VI",
    regions: [
      {
        name: "St. Thomas",
        shortCode: "STH"
      },
      {
        name: "St. John",
        shortCode: "SJO"
      },
      {
        name: "St. Croix",
        shortCode: "SCR"
      }
    ]
  },
  {
    countryName: "Wallis and Futuna",
    countryShortCode: "WF",
    regions: [
      {
        name: "Alo",
        shortCode: "ALO"
      },
      {
        name: "Sigave",
        shortCode: "SIG"
      },
      {
        name: "Wallis",
        shortCode: "WAL"
      }
    ]
  },
  {
    countryName: "Western Sahara",
    countryShortCode: "EH",
    regions: [
      {
        name: "Es Smara",
        shortCode: "ESM"
      },
      {
        name: "Boujdour",
        shortCode: "BOD"
      },
      {
        name: "Laâyoune",
        shortCode: "LAA"
      },
      {
        name: "Aousserd",
        shortCode: "AOU"
      },
      {
        name: "Oued ed Dahab",
        shortCode: "OUD"
      }
    ]
  },
  {
    countryName: "Yemen",
    countryShortCode: "YE",
    regions: [
      {
        name: "Abyān",
        shortCode: "AB"
      },
      {
        name: "'Adan",
        shortCode: "AD"
      },
      {
        name: "Aḑ Ḑāli'",
        shortCode: "DA"
      },
      {
        name: "Al Bayḑā'",
        shortCode: "BA"
      },
      {
        name: "Al Ḩudaydah",
        shortCode: "HU"
      },
      {
        name: "Al Jawf",
        shortCode: "JA"
      },
      {
        name: "Al Mahrah",
        shortCode: "MR"
      },
      {
        name: "Al Maḩwīt",
        shortCode: "MW"
      },
      {
        name: "'Amrān",
        shortCode: "AM"
      },
      {
        name: "Dhamār",
        shortCode: "DH"
      },
      {
        name: "Ḩaḑramawt",
        shortCode: "HD"
      },
      {
        name: "Ḩajjah",
        shortCode: "HJ"
      },
      {
        name: "Ibb",
        shortCode: "IB"
      },
      {
        name: "Laḩij",
        shortCode: "LA"
      },
      {
        name: "Ma'rib",
        shortCode: "MA"
      },
      {
        name: "Raymah",
        shortCode: "RA"
      },
      {
        name: "Şā‘dah",
        shortCode: "SD"
      },
      {
        name: "Şan‘ā'",
        shortCode: "SN"
      },
      {
        name: "Shabwah",
        shortCode: "SH"
      },
      {
        name: "Tā‘izz",
        shortCode: "TA"
      }
    ]
  },
  {
    countryName: "Zambia",
    countryShortCode: "ZM",
    regions: [
      {
        name: "Central",
        shortCode: "02"
      },
      {
        name: "Copperbelt",
        shortCode: "08"
      },
      {
        name: "Eastern",
        shortCode: "03"
      },
      {
        name: "Luapula",
        shortCode: "04"
      },
      {
        name: "Lusaka",
        shortCode: "09"
      },
      {
        name: "Northern",
        shortCode: "05"
      },
      {
        name: "North-Western",
        shortCode: "06"
      },
      {
        name: "Southern",
        shortCode: "07"
      },
      {
        name: "Western",
        shortCode: "01"
      }
    ]
  },
  {
    countryName: "Zimbabwe",
    countryShortCode: "ZW",
    regions: [
      {
        name: "Bulawayo",
        shortCode: "BU"
      },
      {
        name: "Harare",
        shortCode: "HA"
      },
      {
        name: "Manicaland",
        shortCode: "MA"
      },
      {
        name: "Mashonaland Central",
        shortCode: "MC"
      },
      {
        name: "Mashonaland East",
        shortCode: "ME"
      },
      {
        name: "Mashonaland West",
        shortCode: "MW"
      },
      {
        name: "Masvingo",
        shortCode: "MV"
      },
      {
        name: "Matabeleland North",
        shortCode: "MN"
      },
      {
        name: "Matabeleland South",
        shortCode: "MS"
      },
      {
        name: "Midlands",
        shortCode: "MI"
      }
    ]
  }
], wu = { class: "relative mb-2" }, Mu = { class: "block truncate" }, Ou = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, Pu = {
  __name: "Country-Selector",
  props: {
    modelValue: {
      type: String | Object | null
    },
    country: String,
    countryName: Boolean,
    whiteList: Array,
    blackList: Array,
    className: String,
    shortCodeDropdown: Boolean,
    autocomplete: Boolean,
    topCountry: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Select Country"
    },
    disablePlaceholder: {
      type: Boolean,
      default: !1
    },
    removePlaceholder: {
      type: Boolean,
      default: !1
    },
    usei18n: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const { t } = Ee({ useScope: "global" }), a = e, n = N({
      get: function() {
        let s = ku.filter((d) => a.countryName ? d.countryName !== a.firstCountry : d.countryShortCode !== a.firstCountry);
        return a.$i18n && a.usei18n && (s = s.map((d) => {
          let l = Object.assign({}, d);
          return l.countryName = t(d.countryName), l;
        }), s.sort((d, l) => d.countryName > l.countryName ? 1 : -1)), s;
      },
      set: function() {
      }
    }), r = w(n.value[12]);
    return j(function() {
    }), V(r, async (s) => {
    }), (s, d) => (p(), J(C(qe), {
      as: "div",
      modelValue: r.value,
      "onUpdate:modelValue": d[0] || (d[0] = (l) => r.value = l)
    }, {
      default: L(() => [
        k(C(Ze), { class: "hidden" }),
        u("div", wu, [
          k(C(Je), { class: "relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6" }, {
            default: L(() => [
              u("span", Mu, y(r.value.countryName), 1),
              u("span", Ou, [
                k(C(Ye), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            _: 1
          }),
          k(Ue, {
            "leave-active-class": "transition ease-in duration-100",
            "leave-from-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: L(() => [
              k(C(Qe), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
                default: L(() => [
                  (p(!0), v(I, null, _(n.value, (l) => (p(), J(C(Xe), {
                    as: "template",
                    key: l.countryShortCode,
                    value: l
                  }, {
                    default: L(({ active: i, selected: h }) => [
                      u("li", {
                        class: B([i ? "bg-taa-brand-blue text-white" : "text-gray-900", "relative cursor-default select-none py-2 pl-3 pr-9"])
                      }, [
                        u("span", {
                          class: B([h ? "font-semibold" : "font-normal", "block truncate"])
                        }, y(l.countryName), 3),
                        h ? (p(), v("span", {
                          key: 0,
                          class: B([i ? "text-white" : "text-brand-blue", "absolute inset-y-0 right-0 flex items-center pr-4"])
                        }, [
                          k(C(We), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          })
                        ], 2)) : P("", !0)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}, Bu = { class: "mb-3" }, Tu = { class: "px-3 text-sm text-neutral-500 mb-1" }, Du = { class: "flex flex-col gap-2" }, xu = { class: "flex flex-col" }, Lu = {
  for: "passportNumber",
  class: "px-3 text-sm font-medium text-neutral-500"
}, Eu = ["placeholder", "value"], Ru = { class: "grid grid-cols-2 gap-2" }, Iu = { class: "flex flex-col" }, Ku = { class: "px-3 text-sm font-medium text-neutral-500" }, Gu = { class: "flex flex-col" }, ju = { class: "px-3 text-sm font-medium text-neutral-500" }, Fu = { class: "flex flex-col" }, Hu = { class: "px-3 text-sm font-medium text-neutral-500" }, Vu = { class: "flex flex-col" }, _u = {
  for: "issuanceLocation",
  class: "px-3 text-sm font-medium text-neutral-500"
}, Uu = ["placeholder", "value"], zu = {
  __name: "T-Passport-Input",
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        documentType: "PASSPORT",
        number: null,
        issuanceLocation: null,
        issuanceDate: null,
        expiryDate: null,
        issuanceCountry: null,
        nationality: null,
        holder: !0
      })
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, a = o;
    function n(r, s) {
      a("update:modelValue", { ...t.modelValue, [r]: s });
    }
    return (r, s) => (p(), v("div", Bu, [
      u("h2", Tu, y(r.$t("passengers.document.title")), 1),
      u("div", Du, [
        u("div", xu, [
          u("label", Lu, y(r.$t("passengers.document.number")), 1),
          u("input", {
            id: "passportNumber",
            type: "text",
            name: "passportNumber",
            placeholder: r.$t("passengers.document.numberPlaceholder"),
            value: e.modelValue.number,
            onInput: s[0] || (s[0] = (d) => n("number", d.target.value)),
            class: "w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6"
          }, null, 40, Eu)
        ]),
        u("div", Ru, [
          u("div", Iu, [
            u("label", Ku, y(r.$t("passengers.document.issuanceDate")), 1),
            k(ga, {
              "model-value": e.modelValue.issuanceDate,
              "onUpdate:modelValue": s[1] || (s[1] = (d) => n("issuanceDate", d))
            }, null, 8, ["model-value"])
          ]),
          u("div", Gu, [
            u("label", ju, y(r.$t("passengers.document.expiryDate")), 1),
            k(ga, {
              "model-value": e.modelValue.expiryDate,
              "onUpdate:modelValue": s[2] || (s[2] = (d) => n("expiryDate", d))
            }, null, 8, ["model-value"])
          ])
        ]),
        u("div", Fu, [
          u("label", Hu, y(r.$t("passengers.document.issuanceCountry")), 1),
          k(Pu, {
            "model-value": e.modelValue.issuanceCountry,
            "onUpdate:modelValue": s[3] || (s[3] = (d) => n("issuanceCountry", d)),
            "class-name": "border-neutral-300 rounded-md w-full"
          }, null, 8, ["model-value"])
        ]),
        u("div", Vu, [
          u("label", _u, y(r.$t("passengers.document.issuanceLocation")), 1),
          u("input", {
            id: "issuanceLocation",
            type: "text",
            name: "issuanceLocation",
            placeholder: r.$t("passengers.document.issuanceLocationPlaceholder"),
            value: e.modelValue.issuanceLocation,
            onInput: s[4] || (s[4] = (d) => n("issuanceLocation", d.target.value)),
            class: "w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6"
          }, null, 40, Uu)
        ])
      ])
    ]));
  }
}, Wu = { class: "t-passenger" }, Yu = { class: "grow flex items-center pr-4" }, qu = ["src"], Zu = { class: "grow text-neutral-600" }, Ju = {
  key: 0,
  class: "w-8"
}, Qu = { class: "flex gap-2" }, Xu = { class: "hidden sm:block uppercase group-hover:text-brand-blue pl-1 text-xs group-focus:text-brand-blue" }, eh = { class: "hidden sm:block uppercase group-hover:text-brand-blue pl-1 text-xs group-focus:text-brand-blue" }, oh = {
  key: 0,
  class: "content-input"
}, th = { key: 5 }, ah = { key: 6 }, nh = { key: 7 }, rh = {
  key: 1,
  class: "content-select-passenger grid grid-cols-1 gap-3"
}, sh = ["onClick"], dh = ["src"], ih = {
  key: 0,
  class: "text-red-500 text-xs"
}, fo = "input", Uo = "select", lh = {
  __name: "T-Passenger",
  props: {
    traveler: {
      type: Object,
      default: () => ({
        travelerID: 0,
        name: {
          firstName: "",
          lastName: "",
          middleName: "",
          secondLastName: ""
        },
        dateOfBirth: null,
        gender: null,
        contact: {
          addresseeName: "",
          address: "",
          language: "",
          purpose: "",
          phones: "",
          companyName: "",
          emailAddress: ""
        },
        profilePhoto: ""
      })
    },
    employees: {
      type: Array,
      default: () => []
    },
    requirements: {
      type: Object,
      default: () => ({
        bookingRequirements: {
          dateOfBirthRequired: !1,
          genderRequired: !1,
          documentRequired: !1,
          documentIssuanceCityRequired: !1,
          redressRequiredIfAny: !1,
          residenceRequired: !1
        }
      })
    }
  },
  emits: [
    "update"
  ],
  setup(e, { emit: o }) {
    const { t } = Ee({ useScope: "global" }), a = e, n = o, r = w(fo), s = w(!0), d = no(pt.fromTraveler(a.traveler)), l = N({
      get: () => {
        let O = {
          name: {
            firstName: {
              required: se,
              minLength: ze(2)
            },
            lastName: {
              required: se,
              minLength: ze(2)
            }
          },
          contact: {
            emailAddress: {}
          }
        };
        return a.requirements.emailAddressRequired && (O.contact.emailAddress = {
          required: se,
          email: Pa
        }), a.requirements.mobilePhoneNumberRequired && (O.contact.phones = {
          required: se,
          minLength: ze(1)
        }), a.requirements.dateOfBirthRequired && (O.dateOfBirth = {
          required: se
        }), a.requirements.genderRequired && (O.gender = {
          required: se
        }), a.requirements.documentRequired && (O.documents = {
          hasDocument: Dr.withMessage(
            "Document with number is required",
            (A) => {
              var S;
              return Array.isArray(A) && A.length > 0 && !!((S = A[0]) != null && S.number);
            }
          )
        }), O;
      }
    });
    let i = ro(l, d);
    function h() {
      return i.value.$anyDirty === !0 && i.value.$invalid === !1;
    }
    async function m(O) {
      f(), d.name = O.name, d.contact.emailAddress = O.contact.emailAddress, d.contact.phones = O.contact.phones, i.value.$touch(), i.value.$invalid || (s.value = !1);
    }
    function g(O) {
      f(), r.value = O, s.value || (s.value = !0);
    }
    function f() {
      d.name = {
        firstName: "",
        lastName: "",
        middleName: "",
        secondLastName: ""
      }, d.contact.emailAddress = "", d.contact.phones = [], i.value.$reset();
    }
    function c(O) {
      O.valid === !0 ? (d.contact.phones = [{
        deviceType: "MOBILE",
        countryCallingCode: O.countryCallingCode,
        number: O.nationalNumber
      }], i.value.$touch()) : (d.contact.phones.length = 0, i.value.$anyDirty && i.value.$touch());
    }
    function $(O) {
      d.gender = O, i.value.gender.$touch();
    }
    function b(O) {
      d.dateOfBirth = O;
    }
    function M(O) {
      d.documents = [O], i.value.$touch();
    }
    return V(i, () => {
      d && (d.valid = h(), h() && n("update", d));
    }), V(() => a.requirements, (O) => {
      f();
    }), (O, A) => (p(), v("div", Wu, [
      u("div", {
        class: B({ header: !0, "pb-4": s.value })
      }, [
        u("div", Yu, [
          u("img", {
            class: "h-8 w-8 rounded-full mr-3 bg-neutral-300 border-0",
            src: "https://ui-avatars.com/api/?name=" + (d.name.firstName.length > 0 ? d.name.firstName[0] : "p") + "&color=828282&background=D3F8F0",
            alt: ""
          }, null, 8, qu),
          u("h1", Zu, y(d.name.firstName.length !== 0 ? d.name.firstName : C(t)("passengers.placeholder", Number(d.travelerId) + 1)) + " " + y(d.name.lastName.length !== 0 ? d.name.lastName : ""), 1),
          h() ? (p(), v("div", Ju, [
            k(C(Lt), { class: "text-success-900" })
          ])) : P("", !0)
        ]),
        u("div", Qu, [
          Uo === r.value ? (p(), v("button", {
            key: 0,
            type: "button",
            onClick: A[0] || (A[0] = (S) => g(fo)),
            class: "border hover:border-taa-brand-blue px-2 border-neutral-300 focus:border-taa-brand-blue rounded-xl group outline-none flex items-center"
          }, [
            k(C(Et), { class: "w-6 group-hover:stroke-brand-blue group-hover:text-brand-blue stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue" }),
            u("span", Xu, y(C(t)("passengers.passengerDetails")), 1)
          ])) : P("", !0),
          fo === r.value ? (p(), v("button", {
            key: 1,
            type: "button",
            onClick: A[1] || (A[1] = (S) => g(Uo)),
            class: "border px-2 hover:border-taa-brand-blue border-neutral-300 focus:border-taa-brand-blue rounded-xl group outline-none flex items-center"
          }, [
            k(C(Et), { class: "w-6 group-hover:stroke-brand-blue group-hover:text-brand-blue stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue" }),
            u("span", eh, y(C(t)("passengers.selectPassenger")), 1)
          ])) : P("", !0),
          s.value ? P("", !0) : (p(), v("button", {
            key: 2,
            type: "button",
            class: "group outline-none",
            onClick: A[2] || (A[2] = () => s.value = !s.value)
          }, [
            k(C(Jr), { class: "w-8 group-hover:text-brand-blue group-hover:stroke-brand-blue group-focus:text-brand-blue stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue" })
          ])),
          s.value ? (p(), v("button", {
            key: 3,
            type: "button",
            class: "group outline-none",
            onClick: A[3] || (A[3] = () => s.value = !s.value)
          }, [
            k(C(Qr), { class: "w-8 group-hover:text-brand-blue group-hover:stroke-brand-blue group-focus:text-brand-blue stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue" })
          ])) : P("", !0)
        ])
      ], 2),
      fo === r.value && s.value ? (p(), v("div", oh, [
        k(Bd, {
          "first-name": d.name.firstName,
          "onUpdate:firstName": A[4] || (A[4] = (S) => d.name.firstName = S),
          "last-name": d.name.lastName,
          "onUpdate:lastName": A[5] || (A[5] = (S) => d.name.lastName = S)
        }, null, 8, ["first-name", "last-name"]),
        e.requirements.dateOfBirthRequired ? (p(), J(gu, {
          key: 0,
          "model-value": d.dateOfBirth,
          "onUpdate:modelValue": b
        }, null, 8, ["model-value"])) : P("", !0),
        e.requirements.genderRequired ? (p(), J($d, {
          key: 1,
          gender: d.gender,
          "onUpdate:gender": A[6] || (A[6] = (S) => $(S))
        }, null, 8, ["gender"])) : P("", !0),
        e.requirements.documentRequired ? (p(), J(zu, {
          key: 2,
          "model-value": d.documents[0] ?? {},
          "onUpdate:modelValue": M
        }, null, 8, ["model-value"])) : P("", !0),
        e.requirements.emailAddressRequired ? (p(), J(rs, {
          key: 3,
          email: d.contact.emailAddress,
          "onUpdate:email": A[7] || (A[7] = (S) => d.contact.emailAddress = S)
        }, null, 8, ["email"])) : P("", !0),
        e.requirements.mobilePhoneNumberRequired ? (p(), J(au, {
          key: 4,
          phone: d.contact.phones[0] ? d.contact.phones[0].number : d.contact.phones[0],
          "onUpdate:phone": A[8] || (A[8] = (S) => c(S))
        }, null, 8, ["phone"])) : P("", !0),
        e.requirements.documentIssuanceCityRequired ? (p(), v("div", th, " The issuance city of the document is required for the concerned traveler for the creation of the flight-order ")) : P("", !0),
        e.requirements.redressRequiredIfAny ? (p(), v("div", ah, " The redress is required if any for the concerned traveler for the creation of the flight-order ")) : P("", !0),
        e.requirements.residenceRequired ? (p(), v("div", nh, " The address is required for the concerned traveler for the creation of the flight-order ")) : P("", !0)
      ])) : P("", !0),
      Uo === r.value && s.value ? (p(), v("div", rh, [
        (p(!0), v(I, null, _(e.employees, (S, T) => (p(), v("button", {
          key: T,
          class: B([{ "border-green-300": !C(i).$error && d.contact.emailAddress === S.contact.emailAddress, "border-neutral-300": d.contact.emailAddress !== S.contact.emailAddress, "border-red-500": C(i).$error && d.contact.emailAddress === S.contact.emailAddress }, "border rounded-xl px-4 py-3 flex outline-none items-center"]),
          onClick: () => m(S)
        }, [
          !C(i).$error && d.contact.emailAddress === S.contact.emailAddress ? (p(), J(C(Lt), {
            key: 0,
            class: "w-8 stroke-green-500 text-green-500"
          })) : C(i).$error && d.contact.emailAddress === S.contact.emailAddress ? (p(), J(C(es), {
            key: 1,
            class: "w-8 stroke-red-500 text-red-500"
          })) : (p(), v("img", {
            key: 2,
            class: B([{ "bg-green-500": !C(i).$error && d.contact.emailAddress === S.contact.emailAddress, "bg-neutral-300": d.contact.emailAddress !== S.contact.emailAddress, "bg-red-500": C(i).$error && d.contact.emailAddress === S.contact.emailAddress }, "h-8 w-8 rounded-full mr-3"]),
            src: S.profilePhoto ? S.profilePhoto : "https://ui-avatars.com/api/?name=" + (S.name.firstName.length > 0 ? S.name.firstName[0] : "p") + "&color=828282&background=D3F8F0",
            alt: ""
          }, null, 10, dh)),
          u("span", {
            class: B([{ "text-green-500": !C(i).$error && S.contact.emailAddress === d.contact.emailAddress, "text-red-500": C(i).$error && d.contact.emailAddress === S.contact.emailAddress }, "grow text-neutral-600 flex flex-col"])
          }, [
            te(y(S.name.firstName.length !== 0 ? S.name.firstName : "Passenger " + (Number(S.id) + 1)) + " " + y(S.name.lastName && S.name.lastName.length !== 0 ? S.name.lastName : "") + " ", 1),
            S.contact.emailAddress === d.contact.emailAddress && C(i).$error ? (p(), v("span", ih, [
              te(y(C(t)("passengers.errors.generic")) + " ", 1),
              (p(!0), v(I, null, _(C(i).$errors, (D) => (p(), v("span", {
                class: "flex flex-col uppercase",
                key: D.$uid
              }, y(C(t)("passengers.errors." + D.$property + "." + D.$validator)), 1))), 128))
            ])) : P("", !0)
          ], 2)
        ], 10, sh))), 128))
      ])) : P("", !0)
    ]));
  }
}, uh = { class: "t-passengers-list" }, wc = {
  __name: "T-Passengers-List",
  props: {
    passengers: {
      type: Array,
      required: !0
    },
    employees: {
      type: Array,
      required: !0
    },
    requirements: {
      type: Object,
      required: !0
    }
  },
  emits: ["update"],
  setup(e, { emit: o }) {
    const t = e, a = w([]), n = o;
    V(() => [t.passengers, t.requirements], ([d, l]) => {
      a.value = r(re(d), re(l));
    }, { immediate: !0 });
    function r(d, l) {
      let i = [];
      for (let h = 0; h < d.length; h++) {
        let m = d[h], g = {};
        if (g.emailAddressRequired = l.emailAddressRequired ?? !1, g.mobilePhoneNumberRequired = l.mobilePhoneNumberRequired ?? !1, g.genderRequired = !1, l.travelerRequirements) {
          const f = l.travelerRequirements;
          let c;
          Array.isArray(f) ? c = f.find(($) => $.travelerId === m.travelerId) : c = f[m.travelerId], c && (g.genderRequired = c.genderRequired ?? g.genderRequired, g.documentRequired = c.documentRequired ?? !1, g.dateOfBirthRequired = c.dateOfBirthRequired ?? !1, g.residenceRequired = c.residenceRequired ?? !1, g.redressRequiredIfAny = c.redressRequiredIfAny ?? !1);
        }
        i[m.travelerId] = g;
      }
      return i;
    }
    function s(d) {
      const l = t.passengers.map(
        (i) => i.travelerId === d.travelerId ? d : i
      );
      n("update", l);
    }
    return (d, l) => (p(), v("div", uh, [
      (p(!0), v(I, null, _(e.passengers, (i, h) => (p(), J(lh, {
        key: h,
        traveler: i,
        employees: e.employees,
        requirements: a.value[i.travelerId],
        onUpdate: s
      }, null, 8, ["traveler", "employees", "requirements"]))), 128))
    ]));
  }
}, hh = {}, mh = {
  viewBox: "0 0 22 19",
  fill: "none",
  "stroke-width": "1.5",
  stroke: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function ch(e, o) {
  return p(), v("svg", mh, [...o[0] || (o[0] = [
    u("path", {
      d: "M16.059 12.521C16.5268 12.2015 17.0755 12.0211 17.6415 12.0004C18.2076 11.9798 18.768 12.1199 19.2578 12.4044C19.7476 12.689 20.1468 13.1064 20.4093 13.6084C20.6718 14.1104 20.7868 14.6764 20.741 15.241C19.5412 15.6603 18.2668 15.8235 17 15.72C16.9961 14.5866 16.6697 13.4768 16.059 12.522C15.5169 11.6718 14.7691 10.972 13.8848 10.4875C13.0005 10.003 12.0083 9.74932 11 9.75C9.99182 9.74948 8.99981 10.0032 8.11571 10.4877C7.23162 10.9723 6.48399 11.6719 5.94199 12.522M16.999 15.719L17 15.75C17 15.975 16.988 16.197 16.963 16.416C15.1483 17.4571 13.0921 18.0033 11 18C8.82998 18 6.79299 17.424 5.03699 16.416C5.01128 16.1846 4.99892 15.9519 4.99999 15.719M4.99999 15.719C3.73361 15.8263 2.45989 15.6637 1.26099 15.242C1.21534 14.6776 1.33038 14.1117 1.59281 13.6099C1.85525 13.1081 2.25435 12.6908 2.74399 12.4063C3.23362 12.1218 3.79378 11.9817 4.3597 12.0021C4.92563 12.0226 5.4742 12.2028 5.94199 12.522M4.99999 15.719C5.00358 14.5857 5.33161 13.4769 5.94199 12.522M14 3.75C14 4.54565 13.6839 5.30871 13.1213 5.87132C12.5587 6.43393 11.7956 6.75 11 6.75C10.2043 6.75 9.44127 6.43393 8.87866 5.87132C8.31606 5.30871 7.99999 4.54565 7.99999 3.75C7.99999 2.95435 8.31606 2.19129 8.87866 1.62868C9.44127 1.06607 10.2043 0.75 11 0.75C11.7956 0.75 12.5587 1.06607 13.1213 1.62868C13.6839 2.19129 14 2.95435 14 3.75ZM20 6.75C20 7.04547 19.9418 7.33806 19.8287 7.61104C19.7156 7.88402 19.5499 8.13206 19.341 8.34099C19.132 8.54992 18.884 8.71566 18.611 8.82873C18.338 8.9418 18.0455 9 17.75 9C17.4545 9 17.1619 8.9418 16.8889 8.82873C16.616 8.71566 16.3679 8.54992 16.159 8.34099C15.9501 8.13206 15.7843 7.88402 15.6713 7.61104C15.5582 7.33806 15.5 7.04547 15.5 6.75C15.5 6.15326 15.737 5.58097 16.159 5.15901C16.581 4.73705 17.1532 4.5 17.75 4.5C18.3467 4.5 18.919 4.73705 19.341 5.15901C19.7629 5.58097 20 6.15326 20 6.75ZM6.49999 6.75C6.49999 7.04547 6.44179 7.33806 6.32871 7.61104C6.21564 7.88402 6.04991 8.13206 5.84098 8.34099C5.63204 8.54992 5.38401 8.71566 5.11102 8.82873C4.83804 8.9418 4.54546 9 4.24999 9C3.95451 9 3.66193 8.9418 3.38895 8.82873C3.11596 8.71566 2.86793 8.54992 2.65899 8.34099C2.45006 8.13206 2.28433 7.88402 2.17126 7.61104C2.05818 7.33806 1.99999 7.04547 1.99999 6.75C1.99999 6.15326 2.23704 5.58097 2.65899 5.15901C3.08095 4.73705 3.65325 4.5 4.24999 4.5C4.84672 4.5 5.41902 4.73705 5.84098 5.15901C6.26293 5.58097 6.49999 6.15326 6.49999 6.75Z",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1)
  ])]);
}
const Ch = /* @__PURE__ */ Mo(hh, [["render", ch]]), gh = { class: "rounded-xl px-3 bg-white" }, $h = { class: "px-2 py-0.5 flex text-brand-blue text-sm items-center" }, fh = {
  __name: "Travellers-Menu",
  props: {
    numberOfTravellers: {
      default: 0,
      type: Number
    }
  },
  setup(e) {
    return (o, t) => (p(), v("button", gh, [
      u("span", $h, [
        k(Ch, { class: "h-4 w-4 stroke-brand-blue mr-3" }),
        te(" " + y(e.numberOfTravellers), 1)
      ])
    ]));
  }
}, ph = { class: "grid grid-cols-3 gap-1 items-center" }, yh = ["disabled"], vh = { class: "text-center" }, bh = ["disabled"], zo = {
  __name: "Travellers-Counter",
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: -1
    },
    current: {
      type: Number,
      default: 0
    },
    availability: {
      type: Number,
      default: -1
    }
  },
  emits: ["update"],
  setup(e, { emit: o }) {
    const t = e, a = o, n = () => {
      t.max === -1 && t.availability > 0 && a("update", t.current + 1), t.availability > 0 && a("update", t.current + 1);
    }, r = () => {
      t.current !== t.min && a("update", t.current - 1);
    };
    return (s, d) => (p(), v("div", ph, [
      u("button", {
        class: "rounded-full border-black border w-8 h-8 hover:border-taa-brand-blue hover:text-brand-blue disabled:border-neutral-300 disabled:text-neutral-300",
        disabled: t.current === e.min,
        onClick: r
      }, " - ", 8, yh),
      u("span", vh, y(t.current), 1),
      u("button", {
        class: "rounded-full border-black border w-8 h-8 hover:border-taa-brand-blue hover:text-brand-blue disabled:border-neutral-300 disabled:text-neutral-300",
        disabled: e.current === e.max || e.availability === 0,
        onClick: n
      }, " + ", 8, bh)
    ]));
  }
}, Sh = {
  id: "travelers-holder",
  class: "relative inline-block text-left"
}, Ah = {
  key: 0,
  class: "absolute z-50 right-0 mt-2 w-[20rem] origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "menu-button",
  tabindex: "-1"
}, Nh = {
  class: "py-2 px-3 grid grid-cols-1 gap-3",
  role: "none"
}, kh = { class: "flex items-center" }, wh = { class: "grow" }, Mh = { class: "flex items-center" }, Oh = { class: "grow" }, Ph = { class: "flex items-center" }, Bh = { class: "grow" }, Mc = {
  __name: "T-Travellers",
  props: {
    adults: {
      type: Number,
      default: 0
    },
    children: {
      type: Number,
      default: 0
    },
    infants: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update"],
  setup(e, { emit: o }) {
    const t = e, a = o, n = w(!1), r = (h) => {
      h < t.infants ? a("update", { adults: h, children: t.children, infants: h }) : a("update", { adults: h, children: t.children, infants: t.infants });
    }, s = (h) => {
      a("update", { adults: t.adults, children: h, infants: t.infants });
    }, d = (h) => {
      a("update", { adults: t.adults, children: t.children, infants: h });
    };
    function l(h) {
      let m = h.target, g = document.getElementById("travelers-holder");
      m !== g && !g.contains(m) && i();
    }
    function i() {
      t.disabled || (n.value && document.removeEventListener("click", l), n.value || document.addEventListener("click", l), n.value = !n.value);
    }
    return (h, m) => (p(), v("div", Sh, [
      k(fh, {
        numberOfTravellers: e.adults + e.children + e.infants,
        onClick: i
      }, null, 8, ["numberOfTravellers"]),
      n.value ? (p(), v("div", Ah, [
        u("div", Nh, [
          u("h3", null, y(h.$t("travellers.travellers")), 1),
          u("div", kh, [
            u("p", wh, y(h.$t("travellers.adults")), 1),
            k(zo, {
              min: 1,
              max: 9,
              current: e.adults,
              availability: 9 - (e.adults + e.children + e.infants),
              onUpdate: r
            }, null, 8, ["current", "availability"])
          ]),
          u("div", Mh, [
            u("p", Oh, y(h.$t("travellers.children")), 1),
            k(zo, {
              min: 0,
              max: 9,
              current: e.children,
              availability: 9 - (e.adults + e.children + e.infants),
              onUpdate: s
            }, null, 8, ["current", "availability"])
          ]),
          u("div", Ph, [
            u("p", Bh, y(h.$t("travellers.infants")), 1),
            k(zo, {
              min: 0,
              max: 9,
              current: e.infants,
              availability: e.adults - e.infants && 9 - (e.adults + e.children + e.infants),
              onUpdate: d
            }, null, 8, ["current", "availability"])
          ])
        ])
      ])) : P("", !0)
    ]));
  }
};
function Ve(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function Th(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function $a(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 12h14"
    })
  ]);
}
const Dh = { class: "snap-center rounded-2xl py-4 px-4 bg-white mx-auto w-96 shadow border mb-3" }, xh = { class: "w-full h-full inline-flex flex-col" }, Lh = { class: "font-bold text-xl text-taa-brand-dark-blue pb-3" }, Eh = { class: "text-sm pt-2 pb-3" }, Rh = {
  key: 0,
  class: "pb-3"
}, Ih = { class: "pb-2 uppercase font-light" }, Kh = {
  key: 0,
  class: "flex flex-col"
}, Gh = { class: "flex" }, jh = { class: "pl-2 text-xs content-center" }, Fh = { key: 1 }, Hh = { class: "flex" }, Vh = { class: "pl-2 text-xs content-center" }, _h = {
  key: 2,
  class: "flex flex-col"
}, Uh = { class: "flex" }, zh = { class: "pl-2 text-xs content-center" }, Wh = { key: 3 }, Yh = { class: "flex" }, qh = { class: "pl-2 text-xs content-center" }, Zh = {
  key: 4,
  class: "flex flex-col"
}, Jh = { class: "flex" }, Qh = { class: "pl-2 text-xs content-center" }, Xh = { key: 5 }, em = { class: "flex" }, om = { class: "pl-2 text-xs content-center" }, tm = {
  key: 1,
  class: "pb-2 uppercase font-light"
}, am = {
  key: 2,
  class: "pb-3"
}, nm = { class: "flex flex-col" }, rm = { class: "flex" }, sm = { class: "pl-2 text-xs" }, dm = {
  key: 3,
  class: "pb-2 uppercase font-light"
}, im = {
  key: 4,
  class: "pb-3"
}, lm = { class: "flex flex-col" }, um = { class: "flex" }, hm = { class: "pl-2 text-xs" }, Oc = {
  __name: "T-Upsell-Offer",
  props: {
    offer: Object,
    onSelect: Function
  },
  setup(e) {
    const o = e, { t } = Ee({ useScope: "global" }), a = o.offer.travelerPricings, n = a[0].fareDetailsBySegment[0].cabin, r = a[0].fareDetailsBySegment[0].includedCheckedBags ?? 0, s = a[0].fareDetailsBySegment[0].amenities ?? [], d = s.filter((f) => f.isChargeable === !1), l = s.filter((f) => f.isChargeable === !0), i = o.offer.price.grandTotal, h = o.offer.price.currency, m = w({
      active: !1,
      amount: 0
    }), g = w({
      active: !1,
      amount: 0
    });
    if (o.offer.pricingOptions.refundableFare && (m.value.active = !0), o.offer.fareRules) {
      let f = o.offer.fareRules.rules.find(($) => $.category === "EXCHANGE");
      f != null && (!f.notApplicable || f.hasOwnProperty("maxPenaltyAmount")) && (g.value.active = !0, g.value.amount = f.maxPenaltyAmount);
      let c = o.offer.fareRules.rules.find(($) => $.category === "REFUND");
      c != null && (!c.notApplicable || c.hasOwnProperty("maxPenaltyAmount")) && (m.value.active = !0, m.value.amount = c.maxPenaltyAmount);
    }
    return (f, c) => (p(), v("div", Dh, [
      u("div", xh, [
        u("h1", null, [
          u("span", Lh, y(C(i)), 1),
          te(" " + y(C(h)), 1)
        ]),
        u("p", Eh, y(C(t)("flightOfferExtended.cabin")) + ": " + y(C(n)), 1),
        C(d).length > 0 ? P("", !0) : (p(), v("ul", Rh, [
          u("h2", Ih, y(C(t)("flightOfferExtended.description")), 1),
          g.value.active ? (p(), v("li", Kh, [
            u("div", Gh, [
              k(C(Ve), { class: "h-5 w-5 text-gray-900" }),
              u("p", jh, y(C(t)("flightOfferExtended.exchangeable", g.value.amount)), 1)
            ])
          ])) : P("", !0),
          g.value.active ? P("", !0) : (p(), v("li", Fh, [
            u("div", Hh, [
              k(C($a), { class: "h-5 w-5 text-gray-900" }),
              u("p", Vh, y(C(t)("flightOfferExtended.noExchange")), 1)
            ])
          ])),
          m.value.active ? (p(), v("li", _h, [
            u("div", Uh, [
              k(C(Ve), { class: "h-5 w-5 text-gray-900" }),
              u("p", zh, y(C(t)("flightOfferExtended.refundable", m.value.amount)), 1)
            ])
          ])) : P("", !0),
          m.value.active ? P("", !0) : (p(), v("li", Wh, [
            u("div", Yh, [
              k(C($a), { class: "h-5 w-5 text-gray-900" }),
              u("p", qh, y(C(t)("flightOfferExtended.noRefund")), 1)
            ])
          ])),
          C(r).quantity ? (p(), v("li", Zh, [
            u("div", Jh, [
              k(C(Ve), { class: "h-5 w-5 text-gray-900" }),
              u("p", Qh, y(C(t)("flightOfferExtended.includedBaggage", C(r).quantity)), 1)
            ])
          ])) : P("", !0),
          C(r).weight ? (p(), v("li", Xh, [
            u("div", em, [
              k(C(Ve), { class: "h-5 w-5 text-gray-900" }),
              u("p", om, y(C(t)("flightOfferExtended.includedBaggageWeight", {
                weight: C(r).weight,
                unit: C(r).weightUnit
              })), 1)
            ])
          ])) : P("", !0)
        ])),
        C(d).length > 0 ? (p(), v("h2", tm, y(C(t)("flightOfferExtended.included")), 1)) : P("", !0),
        C(d).length > 0 ? (p(), v("ul", am, [
          (p(!0), v(I, null, _(C(d), ($) => (p(), v("li", nm, [
            u("div", rm, [
              k(C(Ve), { class: "h-5 w-5 text-gray-900" }),
              u("p", sm, y($.description), 1)
            ])
          ]))), 256))
        ])) : P("", !0),
        C(l).length > 0 ? (p(), v("h2", dm, y(C(t)("flightOfferExtended.purchase")), 1)) : P("", !0),
        C(l).length > 0 ? (p(), v("ul", im, [
          (p(!0), v(I, null, _(C(l), ($) => (p(), v("li", lm, [
            u("div", um, [
              k(C(Th), { class: "h-5 w-5 text-gray-900" }),
              u("p", hm, y($.description), 1)
            ])
          ]))), 256))
        ])) : P("", !0),
        c[1] || (c[1] = u("div", { class: "grow" }, null, -1)),
        k(Zo, {
          title: C(t)("flightOfferExtended.select"),
          onClick: c[0] || (c[0] = ($) => o.onSelect(o.offer)),
          class: "w-full"
        }, null, 8, ["title"])
      ])
    ]));
  }
}, mm = {}, cm = { class: "snap-mandatory snap-x w-full grid grid-flow-col gap-4 overflow-x-scroll overflow-hidden pb-4" };
function Cm(e, o) {
  return p(), v("div", cm, [
    Le(e.$slots, "default")
  ]);
}
const Pc = /* @__PURE__ */ Mo(mm, [["render", Cm]]), gm = { class: "t-days-selector" }, $m = { class: "bg-white items" }, fm = ["onClick"], pm = { class: "label" }, Bc = {
  __name: "T-Days-Selector",
  props: {
    options: Array,
    onChoose: Function
  },
  setup(e) {
    const o = e;
    function t(n) {
      return Math.floor(o.options.length / 2) === n;
    }
    function a(n) {
      const r = Math.min(...o.options.map((s) => s.value.split(" ")[1]));
      return parseInt(n.split(" ")[1]) === r;
    }
    return (n, r) => (p(), v("ul", gm, [
      (p(!0), v(I, null, _(e.options, (s, d) => (p(), v("li", $m, [
        u("button", {
          class: B([{ "outline outline-2 outline-neutral-400": t(d), "text-green-700": a(s.value), "text-taa-brand-dark-blue": !a(s.value) }, "button"]),
          onClick: () => e.onChoose(s.label)
        }, [
          u("span", pm, y(s.label), 1),
          te(" " + y(s.value), 1)
        ], 10, fm)
      ]))), 256))
    ]));
  }
}, ym = {
  __name: "T-Fullscreen-Container",
  props: {
    show: Boolean
  },
  setup(e) {
    return j(() => {
      document.body.classList.add("overflow-hidden");
    }), le(() => {
      document.body.classList.remove("overflow-hidden");
    }), (o, t) => (p(), J(C(on), {
      show: e.show,
      as: "template"
    }, {
      default: L(() => [
        k(C(Zs), {
          as: "div",
          class: "relative z-50"
        }, {
          default: L(() => [
            k(C(ft), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: L(() => [...t[0] || (t[0] = [
                u("div", { class: "fixed inset-0 bg-neutral-400/25 backdrop-blur bg-opacity-75 transition-opacity" }, null, -1)
              ])]),
              _: 1
            }),
            Le(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}, vm = { class: "t-contact" }, bm = ["src"], Sm = {
  __name: "T-Contact",
  props: {
    contact: {
      type: Object,
      default: () => ({
        name: {
          firstName: "Undefined",
          lastName: ""
        }
      })
    },
    manager: {
      type: Object,
      default: null
    }
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const t = o;
    return (a, n) => (p(), v("li", vm, [
      u("button", {
        class: B([{ active: e.manager && e.manager.id === e.contact.id }, "t-button"]),
        "aria-setsize": "4",
        onClick: n[0] || (n[0] = () => t("click", e.contact))
      }, [
        u("img", {
          class: "image",
          src: "https://ui-avatars.com/api/?name=" + (e.contact.name.firstName.length > 0 ? e.contact.name.firstName[0] : "p") + "&color=828282&background=D3F8F0",
          alt: ""
        }, null, 8, bm),
        u("span", {
          class: B(["name", { "text-white": e.manager && e.manager.id === e.contact.id }])
        }, y(e.contact.name.firstName.length !== 0 ? e.contact.name.firstName : "") + " " + y(e.contact.name.lastName.length !== 0 ? e.contact.name.lastName : ""), 3)
      ], 2)
    ]));
  }
};
function fa(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "fill-rule": "evenodd",
      d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function pa(e, o) {
  return p(), v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    u("path", {
      "fill-rule": "evenodd",
      d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Am = {
  key: 0,
  class: "t-pagination"
}, Nm = {
  key: 0,
  class: "small"
}, km = ["disabled"], wm = { class: "sr-only" }, Mm = ["disabled"], Om = { class: "sr-only" }, Pm = { class: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" }, Bm = {
  key: 0,
  class: "isolate inline-flex -space-x-px rounded-md shadow-sm",
  "aria-label": "Pagination"
}, Tm = ["disabled"], Dm = { class: "sr-only" }, xm = ["onClick"], Lm = ["disabled"], Em = { class: "sr-only" }, Rm = { key: 1 }, Im = {
  __name: "T-Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    },
    goToPage: {
      type: Function,
      required: !0
    },
    manager: {
      type: Object,
      default: null
    },
    name: {
      type: Function,
      required: !0
    },
    paginatedContacts: {
      type: Array,
      default: () => []
    }
  },
  emits: ["confirmEvent"],
  setup(e) {
    const { t: o } = Ee({ useScope: "global" });
    return (t, a) => 0 < e.paginatedContacts.length ? (p(), v("div", Am, [
      e.paginatedContacts.length > 4 ? (p(), v("div", Nm, [
        u("div", null, [
          u("button", {
            onClick: a[0] || (a[0] = (n) => e.goToPage(e.currentPage - 1)),
            disabled: e.currentPage === 1,
            class: "button back",
            "aria-label": "Pagination"
          }, [
            u("span", wm, y(C(o)("approve.previous")), 1),
            k(C(fa), {
              class: "h-5 w-5",
              "aria-hidden": "true"
            })
          ], 8, km),
          u("button", {
            onClick: a[1] || (a[1] = (n) => e.goToPage(e.currentPage + 1)),
            disabled: e.currentPage === e.totalPages,
            class: "button next"
          }, [
            u("span", Om, y(C(o)("approve.next")), 1),
            k(C(pa), {
              class: "h-5 w-5",
              "aria-hidden": "true"
            })
          ], 8, Mm)
        ]),
        u("div", null, [
          k(Zo, {
            title: e.name(),
            disabled: !e.manager
          }, null, 8, ["title", "disabled"])
        ])
      ])) : P("", !0),
      u("div", Pm, [
        e.paginatedContacts.length > 4 ? (p(), v("nav", Bm, [
          u("button", {
            onClick: a[2] || (a[2] = (n) => e.goToPage(e.currentPage - 1)),
            disabled: e.currentPage === 1,
            class: B([{ "hover:bg-gray-50 text-gray-400": e.currentPage === 1 }, "relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"])
          }, [
            u("span", Dm, y(C(o)("approve.previous")), 1),
            k(C(fa), {
              class: B([{ "fill-gray-400": e.currentPage === 1 }, "h-5 w-5"]),
              "aria-hidden": "true"
            }, null, 8, ["class"])
          ], 10, Tm),
          (p(!0), v(I, null, _(e.totalPages, (n) => (p(), v("button", {
            key: n,
            onClick: (r) => e.goToPage(n),
            class: B([{ "z-10 bg-white text-taa-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600": n === e.currentPage }, "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"])
          }, y(n), 11, xm))), 128)),
          u("button", {
            onClick: a[3] || (a[3] = (n) => e.goToPage(e.currentPage + 1)),
            disabled: e.currentPage === e.totalPages,
            class: B([{ "hover:bg-gray-50": e.currentPage !== e.totalPages }, "relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"])
          }, [
            u("span", Em, y(C(o)("approve.next")), 1),
            k(C(pa), {
              class: B([{ "fill-gray-400": e.currentPage === e.totalPages }, "h-5 w-5"]),
              "aria-hidden": "true"
            }, null, 8, ["class"])
          ], 10, Lm)
        ])) : (p(), v("div", Rm)),
        u("div", null, [
          k(Zo, {
            title: e.name(),
            disabled: !e.manager,
            onClick: a[4] || (a[4] = () => t.$emit("confirmEvent", e.manager))
          }, null, 8, ["title", "disabled"])
        ])
      ])
    ])) : P("", !0);
  }
}, Km = { class: "t-search" }, Gm = {
  for: "search",
  class: "t-search-label"
}, jm = { class: "t-search-input" }, Fm = ["value", "placeholder"], Hm = {
  __name: "T-Search",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = o, { t: a } = Ee({ useScope: "global" });
    function n(r) {
      t("update:modelValue", r.target.value);
    }
    return (r, s) => (p(), v("div", Km, [
      u("label", Gm, y(C(a)("approve.title")), 1),
      u("div", jm, [
        u("input", {
          id: "search",
          type: "text",
          name: "search",
          value: e.modelValue,
          onInput: n,
          placeholder: C(a)("approve.searchPlaceholder"),
          class: "t-input shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        }, null, 40, Fm)
      ])
    ]));
  }
}, Vm = { class: "t-contact-list" }, _m = {
  __name: "T-Contact-List",
  setup(e) {
    return (o, t) => (p(), v("ul", Vm, [
      Le(o.$slots, "default")
    ]));
  }
}, Um = { class: "t-holder" }, zm = { class: "t-content transform scale-100" }, Wm = { class: "t-approve transform shadow-xl" }, Wo = 5, Tc = {
  __name: "T-Approve",
  props: {
    contacts: {
      type: Array,
      required: !0,
      default: () => []
    }
  },
  emits: ["confirm"],
  setup(e, { emit: o }) {
    const t = o, a = e, { t: n } = Ee({ useScope: "global" }), r = w(""), s = w(1), d = w(null), l = N(() => a.contacts.filter(
      ($) => $.name.firstName.toLowerCase().includes(r.value.toLowerCase()) || $.name.lastName.toLowerCase().includes(r.value.toLowerCase())
    )), i = N(() => {
      const $ = (s.value - 1) * Wo, b = $ + Wo;
      return l.value.slice($, b);
    }), h = N(() => Math.ceil(l.value.length / Wo));
    function m($) {
      $ >= 1 && $ <= h.value && (s.value = $);
    }
    function g($) {
      d.value = $;
    }
    function f() {
      return d.value ? n("approve.sendRequestToApprove", { name: d.value.name.firstName + " " + d.value.name.lastName }) : n("approve.selectApprove");
    }
    function c($) {
      t("confirm", $);
    }
    return V(r, () => {
      s.value = 1, d.value = null;
    }), ($, b) => (p(), J(ym, { show: !0 }, {
      default: L(() => [
        u("div", Um, [
          u("div", zm, [
            k(C(ft), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to": "opacity-100 translate-y-0 sm:scale-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: L(() => [
                k(C(Js), null, {
                  default: L(() => [
                    u("div", Wm, [
                      k(Hm, {
                        modelValue: r.value,
                        "onUpdate:modelValue": b[0] || (b[0] = (M) => r.value = M)
                      }, null, 8, ["modelValue"]),
                      k(_m, null, {
                        default: L(() => [
                          (p(!0), v(I, null, _(i.value, (M, O) => (p(), J(Sm, {
                            key: O,
                            contact: M,
                            manager: d.value,
                            onClick: g
                          }, null, 8, ["contact", "manager"]))), 128))
                        ]),
                        _: 1
                      }),
                      k(Im, {
                        currentPage: s.value,
                        totalPages: h.value,
                        goToPage: m,
                        manager: d.value,
                        name: f,
                        onConfirmEvent: b[1] || (b[1] = (M) => c(M)),
                        paginatedContacts: i.value
                      }, null, 8, ["currentPage", "totalPages", "manager", "paginatedContacts"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]),
      _: 1
    }));
  }
}, Ym = { class: "t-large-button relative overflow-hidden" }, qm = { class: "coming-soon" }, Zm = { class: "title" }, Jm = { class: "description" }, Qm = { class: "fake-button" }, ya = {
  __name: "T-Large-Button",
  props: {
    title: {
      type: String,
      required: !0
    },
    attentionText: {
      type: String,
      required: !1
    },
    description: {
      type: String,
      required: !0
    },
    buttonText: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (o, t) => (p(), v("button", Ym, [
      u("span", qm, y(e.attentionText), 1),
      u("span", Zm, y(e.title), 1),
      u("span", Jm, y(e.description), 1),
      u("span", Qm, y(e.buttonText), 1)
    ]));
  }
}, Xm = { class: "grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4" }, Dc = {
  __name: "T-Large-Button-Group",
  setup(e) {
    return (o, t) => (p(), v("div", Xm, [
      k(ya, {
        title: o.$t("additionalServices.seats.title"),
        "attention-text": o.$t("additionalServices.seats.attentionText"),
        description: o.$t("additionalServices.seats.description"),
        "button-text": o.$t("additionalServices.seats.buttonText")
      }, null, 8, ["title", "attention-text", "description", "button-text"]),
      k(ya, {
        title: o.$t("additionalServices.baggage.title"),
        "attention-text": o.$t("additionalServices.baggage.attentionText"),
        description: o.$t("additionalServices.baggage.description"),
        "button-text": o.$t("additionalServices.baggage.buttonText")
      }, {
        default: L(() => [...t[0] || (t[0] = [
          te(" >", -1)
        ])]),
        _: 1
      }, 8, ["title", "attention-text", "description", "button-text"])
    ]));
  }
}, ec = { class: "grid grid-cols-6 pb-2" }, oc = {
  datetime: "2024-10-10",
  class: "col-span-1 font-medium text-xl"
}, tc = { class: "col-span-4 text-left font-medium text-xl" }, ac = ["innerHTML"], nc = { class: "grid grid-cols-6" }, rc = { class: "grid grid-cols-1 gap-4 col-start-2 col-span-5 mb-4" }, xc = {
  __name: "T-Itinerary-Day",
  props: {
    date: {
      type: String,
      required: !0
    },
    day: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (o, t) => (p(), v("section", null, [
      u("header", ec, [
        u("time", oc, y(e.date), 1),
        u("h2", tc, y(e.day), 1),
        u("p", {
          innerHTML: e.description,
          class: "col-span-1 text-right font-medium text-xl"
        }, null, 8, ac)
      ]),
      u("div", nc, [
        u("ul", rc, [
          Le(o.$slots, "default")
        ])
      ])
    ]));
  }
}, sc = { class: "px-3 py-2 flex justify-between items-start bg-white shadow border rounded-xl" }, dc = { class: "font-semibold text-taa-brand-dark-blue pt-1" }, ic = { class: "text-sm break-words break-after-all pr-3" }, lc = { class: "flex flex-col w-[80%]" }, uc = { class: "flex justify-between text-base w-full font-semibold" }, hc = { class: "font-medium text-sm" }, mc = { class: "text-sm font-light" }, cc = { class: "font-medium text-sm" }, Cc = { class: "text-sm text-neutral-400 w-full flex flex-row pb-2" }, Lc = {
  __name: "T-Itinerary-Flight",
  props: {
    flight: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    return (o, t) => (p(), v("li", sc, [
      u("div", null, [
        u("div", dc, y(e.flight.flightNumber), 1),
        u("p", ic, y(e.flight.airline), 1)
      ]),
      u("div", lc, [
        t[0] || (t[0] = u("div", { class: "flex items-center h-full py-1.5 w-full" }, [
          u("div", { class: "mx-auto rounded-full border-neutral-200 border-3 h-4 w-4" }),
          u("hr", { class: "mx-auto h-0 w-full border border-neutral-200 border-dashed" }),
          u("div", { class: "mx-auto rounded-full border-black border-3 h-4 w-4" })
        ], -1)),
        u("div", uc, [
          u("p", null, [
            te(y(e.flight.departureCity) + " ", 1),
            u("time", hc, " (" + y(e.flight.departureTime) + ") ", 1)
          ]),
          u("p", mc, y(e.flight.duration), 1),
          u("p", null, [
            te(y(e.flight.arrivalCity) + " ", 1),
            u("time", cc, " (" + y(e.flight.arrivalTime) + ") ", 1)
          ])
        ]),
        u("div", Cc, [
          u("p", null, y(e.flight.aircraft), 1)
        ])
      ])
    ]));
  }
}, gc = {}, $c = { class: "loading snap-center rounded-2xl py-4 px-4 bg-white mx-auto w-96 mb-3 min-h-52" };
function fc(e, o) {
  return p(), v("div", $c, [...o[0] || (o[0] = [
    u("div", { class: "w-full h-full inline-flex flex-col" }, [
      u("div", { class: "grow" })
    ], -1)
  ])]);
}
const Ec = /* @__PURE__ */ Mo(gc, [["render", fc]]);
function Rc(e, o, t) {
  let a = t.t, n = t.locale.value, r = [];
  for (let s = 0; s < e.length; s++) {
    let l = e[s].segments.map((i) => {
      let h = i.departure.at, m = new Date(h);
      return {
        date: ("0" + m.getDate()).slice(-2) + "-" + ("0" + (m.getMonth() + 1)).slice(-2) + "-" + m.getFullYear(),
        day: m.toLocaleDateString(n, { weekday: "long" })
      };
    });
    r = r.concat(l);
  }
  return r = r.filter(
    (s, d, l) => d === l.findIndex((i) => i.date === s.date)
  ), r.map((s) => {
    let d = [];
    for (let l = 0; l < e.length; l++) {
      let h = e[l].segments.filter((m) => {
        let g = m.departure.at, f = new Date(g);
        return s.date === ("0" + f.getDate()).slice(-2) + "-" + ("0" + (f.getMonth() + 1)).slice(-2) + "-" + f.getFullYear();
      }).map((m) => {
        let g = ba.parse(m.duration), f = "";
        return g.days > 0 && (f += g.days + " " + a("time.days") + " "), g.hours > 0 && (f += g.hours + " " + a("time.hours") + " "), g.minutes > 0 && (f += g.minutes + " " + a("time.minutes") + " "), {
          departureTime: ("0" + new Date(m.departure.at).getHours()).slice(-2) + ":" + ("0" + new Date(m.departure.at).getMinutes()).slice(-2),
          departureAirport: o.locations[m.departure.iataCode][n].name,
          departureCity: o.locations[m.departure.iataCode][n].city,
          departureCode: m.departure.iataCode,
          arrivalTime: new Date(m.arrival.at).getHours() + ":" + new Date(m.arrival.at).getMinutes(),
          arrivalAirport: o.locations[m.arrival.iataCode][n].name,
          arrivalCity: o.locations[m.arrival.iataCode][n].city,
          arrivalCode: m.arrival.iataCode,
          duration: f,
          airline: o.carriers[m.carrierCode],
          flightNumber: m.carrierCode + "-" + m.number,
          aircraft: o.aircraft[m.aircraft.code]
        };
      });
      d = d.concat(h);
    }
    return {
      date: s.date,
      day: s.day,
      description: d[0].departureCode + " 	&rarr; " + d[d.length - 1].arrivalCode,
      flights: d
    };
  });
}
export {
  Tc as TApprove,
  Ac as TBirthdayInput,
  Zo as TButton,
  Bc as TDaysSelector,
  rs as TEmailInput,
  Sc as TFlightOffer,
  bc as TFlightOfferList,
  ym as TFullscreenContainer,
  $d as TGenderInput,
  xc as TItineraryDay,
  Lc as TItineraryFlight,
  kc as TJourneyType,
  Dc as TLargeButtonGroup,
  Bd as TNameInput,
  lh as TPassenger,
  wc as TPassengersList,
  Mc as TTravellers,
  Ec as TUpsellLoading,
  Oc as TUpsellOffer,
  Pc as TUpsellOfferList,
  au as TVueTelInput,
  Rc as mapSegmentsToItinerariesDays
};
//# sourceMappingURL=taavani-components.esm.js.map
