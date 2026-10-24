var Cm = Object.defineProperty;
var Em = (r, i, a) => i in r ? Cm(r, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[i] = a;
var be = (r, i, a) => Em(r, typeof i != "symbol" ? i + "" : i, a);
function Rf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var fl = { exports: {} }, As = {}, pl = { exports: {} }, xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function Nm() {
  if (Kd) return xe;
  Kd = 1;
  var r = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.iterator;
  function S(E) {
    return E === null || typeof E != "object" ? null : (E = x && E[x] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var j = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, C = {};
  function N(E, $, re) {
    this.props = E, this.context = $, this.refs = C, this.updater = re || j;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(E, $) {
    if (typeof E != "object" && typeof E != "function" && E != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, E, $, "setState");
  }, N.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function A() {
  }
  A.prototype = N.prototype;
  function F(E, $, re) {
    this.props = E, this.context = $, this.refs = C, this.updater = re || j;
  }
  var P = F.prototype = new A();
  P.constructor = F, b(P, N.prototype), P.isPureReactComponent = !0;
  var H = Array.isArray, B = Object.prototype.hasOwnProperty, I = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(E, $, re) {
    var me, we = {}, Se = null, Ne = null;
    if ($ != null) for (me in $.ref !== void 0 && (Ne = $.ref), $.key !== void 0 && (Se = "" + $.key), $) B.call($, me) && !J.hasOwnProperty(me) && (we[me] = $[me]);
    var je = arguments.length - 2;
    if (je === 1) we.children = re;
    else if (1 < je) {
      for (var Re = Array(je), Z = 0; Z < je; Z++) Re[Z] = arguments[Z + 2];
      we.children = Re;
    }
    if (E && E.defaultProps) for (me in je = E.defaultProps, je) we[me] === void 0 && (we[me] = je[me]);
    return { $$typeof: r, type: E, key: Se, ref: Ne, props: we, _owner: I.current };
  }
  function G(E, $) {
    return { $$typeof: r, type: E.type, key: $, ref: E.ref, props: E.props, _owner: E._owner };
  }
  function ye(E) {
    return typeof E == "object" && E !== null && E.$$typeof === r;
  }
  function de(E) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(re) {
      return $[re];
    });
  }
  var ge = /\/+/g;
  function pe(E, $) {
    return typeof E == "object" && E !== null && E.key != null ? de("" + E.key) : $.toString(36);
  }
  function _e(E, $, re, me, we) {
    var Se = typeof E;
    (Se === "undefined" || Se === "boolean") && (E = null);
    var Ne = !1;
    if (E === null) Ne = !0;
    else switch (Se) {
      case "string":
      case "number":
        Ne = !0;
        break;
      case "object":
        switch (E.$$typeof) {
          case r:
          case i:
            Ne = !0;
        }
    }
    if (Ne) return Ne = E, we = we(Ne), E = me === "" ? "." + pe(Ne, 0) : me, H(we) ? (re = "", E != null && (re = E.replace(ge, "$&/") + "/"), _e(we, $, re, "", function(Z) {
      return Z;
    })) : we != null && (ye(we) && (we = G(we, re + (!we.key || Ne && Ne.key === we.key ? "" : ("" + we.key).replace(ge, "$&/") + "/") + E)), $.push(we)), 1;
    if (Ne = 0, me = me === "" ? "." : me + ":", H(E)) for (var je = 0; je < E.length; je++) {
      Se = E[je];
      var Re = me + pe(Se, je);
      Ne += _e(Se, $, re, Re, we);
    }
    else if (Re = S(E), typeof Re == "function") for (E = Re.call(E), je = 0; !(Se = E.next()).done; ) Se = Se.value, Re = me + pe(Se, je++), Ne += _e(Se, $, re, Re, we);
    else if (Se === "object") throw $ = String(E), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return Ne;
  }
  function te(E, $, re) {
    if (E == null) return E;
    var me = [], we = 0;
    return _e(E, me, "", "", function(Se) {
      return $.call(re, Se, we++);
    }), me;
  }
  function Ee(E) {
    if (E._status === -1) {
      var $ = E._result;
      $ = $(), $.then(function(re) {
        (E._status === 0 || E._status === -1) && (E._status = 1, E._result = re);
      }, function(re) {
        (E._status === 0 || E._status === -1) && (E._status = 2, E._result = re);
      }), E._status === -1 && (E._status = 0, E._result = $);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var W = { current: null }, O = { transition: null }, z = { ReactCurrentDispatcher: W, ReactCurrentBatchConfig: O, ReactCurrentOwner: I };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xe.Children = { map: te, forEach: function(E, $, re) {
    te(E, function() {
      $.apply(this, arguments);
    }, re);
  }, count: function(E) {
    var $ = 0;
    return te(E, function() {
      $++;
    }), $;
  }, toArray: function(E) {
    return te(E, function($) {
      return $;
    }) || [];
  }, only: function(E) {
    if (!ye(E)) throw Error("React.Children.only expected to receive a single React element child.");
    return E;
  } }, xe.Component = N, xe.Fragment = a, xe.Profiler = d, xe.PureComponent = F, xe.StrictMode = c, xe.Suspense = g, xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, xe.act = q, xe.cloneElement = function(E, $, re) {
    if (E == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
    var me = b({}, E.props), we = E.key, Se = E.ref, Ne = E._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (Se = $.ref, Ne = I.current), $.key !== void 0 && (we = "" + $.key), E.type && E.type.defaultProps) var je = E.type.defaultProps;
      for (Re in $) B.call($, Re) && !J.hasOwnProperty(Re) && (me[Re] = $[Re] === void 0 && je !== void 0 ? je[Re] : $[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) me.children = re;
    else if (1 < Re) {
      je = Array(Re);
      for (var Z = 0; Z < Re; Z++) je[Z] = arguments[Z + 2];
      me.children = je;
    }
    return { $$typeof: r, type: E.type, key: we, ref: Se, props: me, _owner: Ne };
  }, xe.createContext = function(E) {
    return E = { $$typeof: p, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, E.Provider = { $$typeof: f, _context: E }, E.Consumer = E;
  }, xe.createElement = U, xe.createFactory = function(E) {
    var $ = U.bind(null, E);
    return $.type = E, $;
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(E) {
    return { $$typeof: v, render: E };
  }, xe.isValidElement = ye, xe.lazy = function(E) {
    return { $$typeof: y, _payload: { _status: -1, _result: E }, _init: Ee };
  }, xe.memo = function(E, $) {
    return { $$typeof: w, type: E, compare: $ === void 0 ? null : $ };
  }, xe.startTransition = function(E) {
    var $ = O.transition;
    O.transition = {};
    try {
      E();
    } finally {
      O.transition = $;
    }
  }, xe.unstable_act = q, xe.useCallback = function(E, $) {
    return W.current.useCallback(E, $);
  }, xe.useContext = function(E) {
    return W.current.useContext(E);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(E) {
    return W.current.useDeferredValue(E);
  }, xe.useEffect = function(E, $) {
    return W.current.useEffect(E, $);
  }, xe.useId = function() {
    return W.current.useId();
  }, xe.useImperativeHandle = function(E, $, re) {
    return W.current.useImperativeHandle(E, $, re);
  }, xe.useInsertionEffect = function(E, $) {
    return W.current.useInsertionEffect(E, $);
  }, xe.useLayoutEffect = function(E, $) {
    return W.current.useLayoutEffect(E, $);
  }, xe.useMemo = function(E, $) {
    return W.current.useMemo(E, $);
  }, xe.useReducer = function(E, $, re) {
    return W.current.useReducer(E, $, re);
  }, xe.useRef = function(E) {
    return W.current.useRef(E);
  }, xe.useState = function(E) {
    return W.current.useState(E);
  }, xe.useSyncExternalStore = function(E, $, re) {
    return W.current.useSyncExternalStore(E, $, re);
  }, xe.useTransition = function() {
    return W.current.useTransition();
  }, xe.version = "18.3.1", xe;
}
var Yd;
function Dl() {
  return Yd || (Yd = 1, pl.exports = Nm()), pl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function Tm() {
  if (Gd) return As;
  Gd = 1;
  var r = Dl(), i = Symbol.for("react.element"), a = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(v, g, w) {
    var y, x = {}, S = null, j = null;
    w !== void 0 && (S = "" + w), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (j = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (x[y] = g[y]);
    if (v && v.defaultProps) for (y in g = v.defaultProps, g) x[y] === void 0 && (x[y] = g[y]);
    return { $$typeof: i, type: v, key: S, ref: j, props: x, _owner: d.current };
  }
  return As.Fragment = a, As.jsx = p, As.jsxs = p, As;
}
var Jd;
function bm() {
  return Jd || (Jd = 1, fl.exports = Tm()), fl.exports;
}
var o = bm(), m = Dl();
const Af = /* @__PURE__ */ Rf(m);
var Xo = {}, hl = { exports: {} }, wt = {}, ml = { exports: {} }, vl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function Rm() {
  return Xd || (Xd = 1, (function(r) {
    function i(O, z) {
      var q = O.length;
      O.push(z);
      e: for (; 0 < q; ) {
        var E = q - 1 >>> 1, $ = O[E];
        if (0 < d($, z)) O[E] = z, O[q] = $, q = E;
        else break e;
      }
    }
    function a(O) {
      return O.length === 0 ? null : O[0];
    }
    function c(O) {
      if (O.length === 0) return null;
      var z = O[0], q = O.pop();
      if (q !== z) {
        O[0] = q;
        e: for (var E = 0, $ = O.length, re = $ >>> 1; E < re; ) {
          var me = 2 * (E + 1) - 1, we = O[me], Se = me + 1, Ne = O[Se];
          if (0 > d(we, q)) Se < $ && 0 > d(Ne, we) ? (O[E] = Ne, O[Se] = q, E = Se) : (O[E] = we, O[me] = q, E = me);
          else if (Se < $ && 0 > d(Ne, q)) O[E] = Ne, O[Se] = q, E = Se;
          else break e;
        }
      }
      return z;
    }
    function d(O, z) {
      var q = O.sortIndex - z.sortIndex;
      return q !== 0 ? q : O.id - z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, v = p.now();
      r.unstable_now = function() {
        return p.now() - v;
      };
    }
    var g = [], w = [], y = 1, x = null, S = 3, j = !1, b = !1, C = !1, N = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function P(O) {
      for (var z = a(w); z !== null; ) {
        if (z.callback === null) c(w);
        else if (z.startTime <= O) c(w), z.sortIndex = z.expirationTime, i(g, z);
        else break;
        z = a(w);
      }
    }
    function H(O) {
      if (C = !1, P(O), !b) if (a(g) !== null) b = !0, Ee(B);
      else {
        var z = a(w);
        z !== null && W(H, z.startTime - O);
      }
    }
    function B(O, z) {
      b = !1, C && (C = !1, A(U), U = -1), j = !0;
      var q = S;
      try {
        for (P(z), x = a(g); x !== null && (!(x.expirationTime > z) || O && !de()); ) {
          var E = x.callback;
          if (typeof E == "function") {
            x.callback = null, S = x.priorityLevel;
            var $ = E(x.expirationTime <= z);
            z = r.unstable_now(), typeof $ == "function" ? x.callback = $ : x === a(g) && c(g), P(z);
          } else c(g);
          x = a(g);
        }
        if (x !== null) var re = !0;
        else {
          var me = a(w);
          me !== null && W(H, me.startTime - z), re = !1;
        }
        return re;
      } finally {
        x = null, S = q, j = !1;
      }
    }
    var I = !1, J = null, U = -1, G = 5, ye = -1;
    function de() {
      return !(r.unstable_now() - ye < G);
    }
    function ge() {
      if (J !== null) {
        var O = r.unstable_now();
        ye = O;
        var z = !0;
        try {
          z = J(!0, O);
        } finally {
          z ? pe() : (I = !1, J = null);
        }
      } else I = !1;
    }
    var pe;
    if (typeof F == "function") pe = function() {
      F(ge);
    };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), te = _e.port2;
      _e.port1.onmessage = ge, pe = function() {
        te.postMessage(null);
      };
    } else pe = function() {
      N(ge, 0);
    };
    function Ee(O) {
      J = O, I || (I = !0, pe());
    }
    function W(O, z) {
      U = N(function() {
        O(r.unstable_now());
      }, z);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, r.unstable_continueExecution = function() {
      b || j || (b = !0, Ee(B));
    }, r.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < O ? Math.floor(1e3 / O) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, r.unstable_getFirstCallbackNode = function() {
      return a(g);
    }, r.unstable_next = function(O) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = S;
      }
      var q = S;
      S = z;
      try {
        return O();
      } finally {
        S = q;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(O, z) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var q = S;
      S = O;
      try {
        return z();
      } finally {
        S = q;
      }
    }, r.unstable_scheduleCallback = function(O, z, q) {
      var E = r.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? E + q : E) : q = E, O) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = q + $, O = { id: y++, callback: z, priorityLevel: O, startTime: q, expirationTime: $, sortIndex: -1 }, q > E ? (O.sortIndex = q, i(w, O), a(g) === null && O === a(w) && (C ? (A(U), U = -1) : C = !0, W(H, q - E))) : (O.sortIndex = $, i(g, O), b || j || (b = !0, Ee(B))), O;
    }, r.unstable_shouldYield = de, r.unstable_wrapCallback = function(O) {
      var z = S;
      return function() {
        var q = S;
        S = z;
        try {
          return O.apply(this, arguments);
        } finally {
          S = q;
        }
      };
    };
  })(vl)), vl;
}
var Zd;
function Am() {
  return Zd || (Zd = 1, ml.exports = Rm()), ml.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef;
function Pm() {
  if (ef) return wt;
  ef = 1;
  var r = Dl(), i = Am();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var v = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, x = {};
  function S(e) {
    return g.call(x, e) ? !0 : g.call(y, e) ? !1 : w.test(e) ? x[e] = !0 : (y[e] = !0, !1);
  }
  function j(e, t, n, s) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function b(e, t, n, s) {
    if (t === null || typeof t > "u" || j(e, t, n, s)) return !0;
    if (s) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function C(e, t, n, s, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new C(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new C(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new C(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new C(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new C(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new C(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function F(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      A,
      F
    );
    N[t] = new C(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(A, F);
    N[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(A, F);
    N[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function P(e, t, n, s) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, s) && (n = null), s || l === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var H = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), I = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), ye = Symbol.for("react.provider"), de = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), O = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != "object" ? null : (e = O && e[O] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, E;
  function $(e) {
    if (E === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      E = t && t[1] || "";
    }
    return `
` + E + e;
  }
  var re = !1;
  function me(e, t) {
    if (!e || re) return "";
    re = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (D) {
          var s = D;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (D) {
          s = D;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (D) {
          s = D;
        }
        e();
      }
    } catch (D) {
      if (D && s && typeof D.stack == "string") {
        for (var l = D.stack.split(`
`), u = s.stack.split(`
`), h = l.length - 1, k = u.length - 1; 1 <= h && 0 <= k && l[h] !== u[k]; ) k--;
        for (; 1 <= h && 0 <= k; h--, k--) if (l[h] !== u[k]) {
          if (h !== 1 || k !== 1)
            do
              if (h--, k--, 0 > k || l[h] !== u[k]) {
                var T = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), T;
              }
            while (1 <= h && 0 <= k);
          break;
        }
      }
    } finally {
      re = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? $(e) : "";
  }
  function we(e) {
    switch (e.tag) {
      case 5:
        return $(e.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = me(e.type, !1), e;
      case 11:
        return e = me(e.type.render, !1), e;
      case 1:
        return e = me(e.type, !0), e;
      default:
        return "";
    }
  }
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case J:
        return "Fragment";
      case I:
        return "Portal";
      case G:
        return "Profiler";
      case U:
        return "StrictMode";
      case pe:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case de:
        return (e.displayName || "Context") + ".Consumer";
      case ye:
        return (e._context.displayName || "Context") + ".Provider";
      case ge:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case te:
        return t = e.displayName || null, t !== null ? t : Se(e.type) || "Memo";
      case Ee:
        t = e._payload, e = e._init;
        try {
          return Se(e(t));
        } catch {
        }
    }
    return null;
  }
  function Ne(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Se(t);
      case 8:
        return t === U ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function je(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Z(e) {
    var t = Re(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(h) {
        s = "" + h, u.call(this, h);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(h) {
        s = "" + h;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function fe(e) {
    e._valueTracker || (e._valueTracker = Z(e));
  }
  function De(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = Re(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ae(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Yt(e, t) {
    var n = t.checked;
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ws(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = je(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function nu(e, t) {
    t = t.checked, t != null && P(e, "checked", t, !1);
  }
  function xa(e, t) {
    nu(e, t);
    var n = je(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? wa(e, t.type, n) : t.hasOwnProperty("defaultValue") && wa(e, t.type, je(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ru(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function wa(e, t, n) {
    (t !== "number" || Ae(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var qr = Array.isArray;
  function ur(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + je(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, s && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Sa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function su(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (qr(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: je(n) };
  }
  function ou(e, t) {
    var n = je(t.value), s = je(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function au(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function iu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ka(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Bs, lu = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Bs = Bs || document.createElement("div"), Bs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Bs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Qr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, bp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kr).forEach(function(e) {
    bp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Kr[t] = Kr[e];
    });
  });
  function uu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kr.hasOwnProperty(e) && Kr[e] ? ("" + t).trim() : t + "px";
  }
  function cu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = uu(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Rp = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ja(e, t) {
    if (t) {
      if (Rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Ca(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ea = null;
  function Na(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ta = null, cr = null, dr = null;
  function du(e) {
    if (e = vs(e)) {
      if (typeof Ta != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = po(t), Ta(e.stateNode, e.type, t));
    }
  }
  function fu(e) {
    cr ? dr ? dr.push(e) : dr = [e] : cr = e;
  }
  function pu() {
    if (cr) {
      var e = cr, t = dr;
      if (dr = cr = null, du(e), t) for (e = 0; e < t.length; e++) du(t[e]);
    }
  }
  function hu(e, t) {
    return e(t);
  }
  function mu() {
  }
  var ba = !1;
  function vu(e, t, n) {
    if (ba) return e(t, n);
    ba = !0;
    try {
      return hu(e, t, n);
    } finally {
      ba = !1, (cr !== null || dr !== null) && (mu(), pu());
    }
  }
  function Yr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = po(n);
    if (s === null) return null;
    n = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var Ra = !1;
  if (v) try {
    var Gr = {};
    Object.defineProperty(Gr, "passive", { get: function() {
      Ra = !0;
    } }), window.addEventListener("test", Gr, Gr), window.removeEventListener("test", Gr, Gr);
  } catch {
    Ra = !1;
  }
  function Ap(e, t, n, s, l, u, h, k, T) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Jr = !1, Us = null, Vs = !1, Aa = null, Pp = { onError: function(e) {
    Jr = !0, Us = e;
  } };
  function $p(e, t, n, s, l, u, h, k, T) {
    Jr = !1, Us = null, Ap.apply(Pp, arguments);
  }
  function Mp(e, t, n, s, l, u, h, k, T) {
    if ($p.apply(this, arguments), Jr) {
      if (Jr) {
        var D = Us;
        Jr = !1, Us = null;
      } else throw Error(a(198));
      Vs || (Vs = !0, Aa = D);
    }
  }
  function On(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function yu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gu(e) {
    if (On(e) !== e) throw Error(a(188));
  }
  function Ip(e) {
    var t = e.alternate;
    if (!t) {
      if (t = On(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (s = l.return, s !== null) {
          n = s;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return gu(l), e;
          if (u === s) return gu(l), t;
          u = u.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== s.return) n = l, s = u;
      else {
        for (var h = !1, k = l.child; k; ) {
          if (k === n) {
            h = !0, n = l, s = u;
            break;
          }
          if (k === s) {
            h = !0, s = l, n = u;
            break;
          }
          k = k.sibling;
        }
        if (!h) {
          for (k = u.child; k; ) {
            if (k === n) {
              h = !0, n = u, s = l;
              break;
            }
            if (k === s) {
              h = !0, s = u, n = l;
              break;
            }
            k = k.sibling;
          }
          if (!h) throw Error(a(189));
        }
      }
      if (n.alternate !== s) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function _u(e) {
    return e = Ip(e), e !== null ? xu(e) : null;
  }
  function xu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = xu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wu = i.unstable_scheduleCallback, Su = i.unstable_cancelCallback, Lp = i.unstable_shouldYield, Dp = i.unstable_requestPaint, Be = i.unstable_now, Op = i.unstable_getCurrentPriorityLevel, Pa = i.unstable_ImmediatePriority, ku = i.unstable_UserBlockingPriority, qs = i.unstable_NormalPriority, zp = i.unstable_LowPriority, ju = i.unstable_IdlePriority, Qs = null, Gt = null;
  function Hp(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(Qs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ot = Math.clz32 ? Math.clz32 : Bp, Fp = Math.log, Wp = Math.LN2;
  function Bp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Fp(e) / Wp | 0) | 0;
  }
  var Ks = 64, Ys = 4194304;
  function Xr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Gs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? s = Xr(k) : (u &= h, u !== 0 && (s = Xr(u)));
    } else h = n & ~l, h !== 0 ? s = Xr(h) : u !== 0 && (s = Xr(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Ot(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function Up(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Vp(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - Ot(u), k = 1 << h, T = l[h];
      T === -1 ? ((k & n) === 0 || (k & s) !== 0) && (l[h] = Up(k, t)) : T <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function $a(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Cu() {
    var e = Ks;
    return Ks <<= 1, (Ks & 4194240) === 0 && (Ks = 64), e;
  }
  function Ma(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ot(t), e[t] = n;
  }
  function qp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ot(n), u = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Ia(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Ot(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Pe = 0;
  function Eu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Nu, La, Tu, bu, Ru, Da = !1, Js = [], vn = null, yn = null, gn = null, es = /* @__PURE__ */ new Map(), ts = /* @__PURE__ */ new Map(), _n = [], Qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Au(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        vn = null;
        break;
      case "dragenter":
      case "dragleave":
        yn = null;
        break;
      case "mouseover":
      case "mouseout":
        gn = null;
        break;
      case "pointerover":
      case "pointerout":
        es.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ts.delete(t.pointerId);
    }
  }
  function ns(e, t, n, s, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = vs(t), t !== null && La(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Kp(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return vn = ns(vn, e, t, n, s, l), !0;
      case "dragenter":
        return yn = ns(yn, e, t, n, s, l), !0;
      case "mouseover":
        return gn = ns(gn, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return es.set(u, ns(es.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, ts.set(u, ns(ts.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function Pu(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = On(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = yu(n), t !== null) {
            e.blockedOn = t, Ru(e.priority, function() {
              Tu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = za(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Ea = s, n.target.dispatchEvent(s), Ea = null;
      } else return t = vs(n), t !== null && La(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $u(e, t, n) {
    Xs(e) && n.delete(t);
  }
  function Yp() {
    Da = !1, vn !== null && Xs(vn) && (vn = null), yn !== null && Xs(yn) && (yn = null), gn !== null && Xs(gn) && (gn = null), es.forEach($u), ts.forEach($u);
  }
  function rs(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Da || (Da = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Yp)));
  }
  function ss(e) {
    function t(l) {
      return rs(l, e);
    }
    if (0 < Js.length) {
      rs(Js[0], e);
      for (var n = 1; n < Js.length; n++) {
        var s = Js[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (vn !== null && rs(vn, e), yn !== null && rs(yn, e), gn !== null && rs(gn, e), es.forEach(t), ts.forEach(t), n = 0; n < _n.length; n++) s = _n[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < _n.length && (n = _n[0], n.blockedOn === null); ) Pu(n), n.blockedOn === null && _n.shift();
  }
  var fr = H.ReactCurrentBatchConfig, Zs = !0;
  function Gp(e, t, n, s) {
    var l = Pe, u = fr.transition;
    fr.transition = null;
    try {
      Pe = 1, Oa(e, t, n, s);
    } finally {
      Pe = l, fr.transition = u;
    }
  }
  function Jp(e, t, n, s) {
    var l = Pe, u = fr.transition;
    fr.transition = null;
    try {
      Pe = 4, Oa(e, t, n, s);
    } finally {
      Pe = l, fr.transition = u;
    }
  }
  function Oa(e, t, n, s) {
    if (Zs) {
      var l = za(e, t, n, s);
      if (l === null) ni(e, t, s, eo, n), Au(e, s);
      else if (Kp(l, e, t, n, s)) s.stopPropagation();
      else if (Au(e, s), t & 4 && -1 < Qp.indexOf(e)) {
        for (; l !== null; ) {
          var u = vs(l);
          if (u !== null && Nu(u), u = za(e, t, n, s), u === null && ni(e, t, s, eo, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else ni(e, t, s, null, n);
    }
  }
  var eo = null;
  function za(e, t, n, s) {
    if (eo = null, e = Na(s), e = zn(e), e !== null) if (t = On(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = yu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return eo = e, null;
  }
  function Mu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Op()) {
          case Pa:
            return 1;
          case ku:
            return 4;
          case qs:
          case zp:
            return 16;
          case ju:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var xn = null, Ha = null, to = null;
  function Iu() {
    if (to) return to;
    var e, t = Ha, n = t.length, s, l = "value" in xn ? xn.value : xn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (s = 1; s <= h && t[n - s] === l[u - s]; s++) ;
    return to = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function no(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ro() {
    return !0;
  }
  function Lu() {
    return !1;
  }
  function jt(e) {
    function t(n, s, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ro : Lu, this.isPropagationStopped = Lu, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ro);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ro);
    }, persist: function() {
    }, isPersistent: ro }), t;
  }
  var pr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Fa = jt(pr), os = q({}, pr, { view: 0, detail: 0 }), Xp = jt(os), Wa, Ba, as, so = q({}, os, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Va, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== as && (as && e.type === "mousemove" ? (Wa = e.screenX - as.screenX, Ba = e.screenY - as.screenY) : Ba = Wa = 0, as = e), Wa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ba;
  } }), Du = jt(so), Zp = q({}, so, { dataTransfer: 0 }), eh = jt(Zp), th = q({}, os, { relatedTarget: 0 }), Ua = jt(th), nh = q({}, pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rh = jt(nh), sh = q({}, pr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), oh = jt(sh), ah = q({}, pr, { data: 0 }), Ou = jt(ah), ih = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, lh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, uh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ch(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = uh[e]) ? !!t[e] : !1;
  }
  function Va() {
    return ch;
  }
  var dh = q({}, os, { key: function(e) {
    if (e.key) {
      var t = ih[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = no(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Va, charCode: function(e) {
    return e.type === "keypress" ? no(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? no(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), fh = jt(dh), ph = q({}, so, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zu = jt(ph), hh = q({}, os, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Va }), mh = jt(hh), vh = q({}, pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yh = jt(vh), gh = q({}, so, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _h = jt(gh), xh = [9, 13, 27, 32], qa = v && "CompositionEvent" in window, is = null;
  v && "documentMode" in document && (is = document.documentMode);
  var wh = v && "TextEvent" in window && !is, Hu = v && (!qa || is && 8 < is && 11 >= is), Fu = " ", Wu = !1;
  function Bu(e, t) {
    switch (e) {
      case "keyup":
        return xh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Uu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var hr = !1;
  function Sh(e, t) {
    switch (e) {
      case "compositionend":
        return Uu(t);
      case "keypress":
        return t.which !== 32 ? null : (Wu = !0, Fu);
      case "textInput":
        return e = t.data, e === Fu && Wu ? null : e;
      default:
        return null;
    }
  }
  function kh(e, t) {
    if (hr) return e === "compositionend" || !qa && Bu(e, t) ? (e = Iu(), to = Ha = xn = null, hr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jh[e.type] : t === "textarea";
  }
  function qu(e, t, n, s) {
    fu(s), t = uo(t, "onChange"), 0 < t.length && (n = new Fa("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var ls = null, us = null;
  function Ch(e) {
    cc(e, 0);
  }
  function oo(e) {
    var t = _r(e);
    if (De(t)) return e;
  }
  function Eh(e, t) {
    if (e === "change") return t;
  }
  var Qu = !1;
  if (v) {
    var Qa;
    if (v) {
      var Ka = "oninput" in document;
      if (!Ka) {
        var Ku = document.createElement("div");
        Ku.setAttribute("oninput", "return;"), Ka = typeof Ku.oninput == "function";
      }
      Qa = Ka;
    } else Qa = !1;
    Qu = Qa && (!document.documentMode || 9 < document.documentMode);
  }
  function Yu() {
    ls && (ls.detachEvent("onpropertychange", Gu), us = ls = null);
  }
  function Gu(e) {
    if (e.propertyName === "value" && oo(us)) {
      var t = [];
      qu(t, us, e, Na(e)), vu(Ch, t);
    }
  }
  function Nh(e, t, n) {
    e === "focusin" ? (Yu(), ls = t, us = n, ls.attachEvent("onpropertychange", Gu)) : e === "focusout" && Yu();
  }
  function Th(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return oo(us);
  }
  function bh(e, t) {
    if (e === "click") return oo(t);
  }
  function Rh(e, t) {
    if (e === "input" || e === "change") return oo(t);
  }
  function Ah(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var zt = typeof Object.is == "function" ? Object.is : Ah;
  function cs(e, t) {
    if (zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!g.call(t, l) || !zt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ju(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xu(e, t) {
    var n = Ju(e);
    e = 0;
    for (var s; n; ) {
      if (n.nodeType === 3) {
        if (s = e + n.textContent.length, e <= t && s >= t) return { node: n, offset: t - e };
        e = s;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ju(n);
    }
  }
  function Zu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ec() {
    for (var e = window, t = Ae(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ae(e.document);
    }
    return t;
  }
  function Ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ph(e) {
    var t = ec(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zu(n.ownerDocument.documentElement, n)) {
      if (s !== null && Ya(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(s.start, l);
          s = s.end === void 0 ? u : Math.min(s.end, l), !e.extend && u > s && (l = s, s = u, u = l), l = Xu(n, u);
          var h = Xu(
            n,
            s
          );
          l && h && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > s ? (e.addRange(t), e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var $h = v && "documentMode" in document && 11 >= document.documentMode, mr = null, Ga = null, ds = null, Ja = !1;
  function tc(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ja || mr == null || mr !== Ae(s) || (s = mr, "selectionStart" in s && Ya(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ds && cs(ds, s) || (ds = s, s = uo(Ga, "onSelect"), 0 < s.length && (t = new Fa("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = mr)));
  }
  function ao(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var vr = { animationend: ao("Animation", "AnimationEnd"), animationiteration: ao("Animation", "AnimationIteration"), animationstart: ao("Animation", "AnimationStart"), transitionend: ao("Transition", "TransitionEnd") }, Xa = {}, nc = {};
  v && (nc = document.createElement("div").style, "AnimationEvent" in window || (delete vr.animationend.animation, delete vr.animationiteration.animation, delete vr.animationstart.animation), "TransitionEvent" in window || delete vr.transitionend.transition);
  function io(e) {
    if (Xa[e]) return Xa[e];
    if (!vr[e]) return e;
    var t = vr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in nc) return Xa[e] = t[n];
    return e;
  }
  var rc = io("animationend"), sc = io("animationiteration"), oc = io("animationstart"), ac = io("transitionend"), ic = /* @__PURE__ */ new Map(), lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function wn(e, t) {
    ic.set(e, t), f(t, [e]);
  }
  for (var Za = 0; Za < lc.length; Za++) {
    var ei = lc[Za], Mh = ei.toLowerCase(), Ih = ei[0].toUpperCase() + ei.slice(1);
    wn(Mh, "on" + Ih);
  }
  wn(rc, "onAnimationEnd"), wn(sc, "onAnimationIteration"), wn(oc, "onAnimationStart"), wn("dblclick", "onDoubleClick"), wn("focusin", "onFocus"), wn("focusout", "onBlur"), wn(ac, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));
  function uc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, Mp(s, t, void 0, e), e.currentTarget = null;
  }
  function cc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = s.length - 1; 0 <= h; h--) {
          var k = s[h], T = k.instance, D = k.currentTarget;
          if (k = k.listener, T !== u && l.isPropagationStopped()) break e;
          uc(l, k, D), u = T;
        }
        else for (h = 0; h < s.length; h++) {
          if (k = s[h], T = k.instance, D = k.currentTarget, k = k.listener, T !== u && l.isPropagationStopped()) break e;
          uc(l, k, D), u = T;
        }
      }
    }
    if (Vs) throw e = Aa, Vs = !1, Aa = null, e;
  }
  function Ie(e, t) {
    var n = t[li];
    n === void 0 && (n = t[li] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (dc(t, e, 2, !1), n.add(s));
  }
  function ti(e, t, n) {
    var s = 0;
    t && (s |= 4), dc(n, e, s, t);
  }
  var lo = "_reactListening" + Math.random().toString(36).slice(2);
  function ps(e) {
    if (!e[lo]) {
      e[lo] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Lh.has(n) || ti(n, !1, e), ti(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[lo] || (t[lo] = !0, ti("selectionchange", !1, t));
    }
  }
  function dc(e, t, n, s) {
    switch (Mu(t)) {
      case 1:
        var l = Gp;
        break;
      case 4:
        l = Jp;
        break;
      default:
        l = Oa;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ra || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function ni(e, t, n, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var h = s.tag;
      if (h === 3 || h === 4) {
        var k = s.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (h === 4) for (h = s.return; h !== null; ) {
          var T = h.tag;
          if ((T === 3 || T === 4) && (T = h.stateNode.containerInfo, T === l || T.nodeType === 8 && T.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = zn(k), h === null) return;
          if (T = h.tag, T === 5 || T === 6) {
            s = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    vu(function() {
      var D = u, Q = Na(n), K = [];
      e: {
        var V = ic.get(e);
        if (V !== void 0) {
          var ee = Fa, se = e;
          switch (e) {
            case "keypress":
              if (no(n) === 0) break e;
            case "keydown":
            case "keyup":
              ee = fh;
              break;
            case "focusin":
              se = "focus", ee = Ua;
              break;
            case "focusout":
              se = "blur", ee = Ua;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Ua;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = Du;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = eh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = mh;
              break;
            case rc:
            case sc:
            case oc:
              ee = rh;
              break;
            case ac:
              ee = yh;
              break;
            case "scroll":
              ee = Xp;
              break;
            case "wheel":
              ee = _h;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = oh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = zu;
          }
          var oe = (t & 4) !== 0, Ue = !oe && e === "scroll", M = oe ? V !== null ? V + "Capture" : null : V;
          oe = [];
          for (var R = D, L; R !== null; ) {
            L = R;
            var Y = L.stateNode;
            if (L.tag === 5 && Y !== null && (L = Y, M !== null && (Y = Yr(R, M), Y != null && oe.push(hs(R, Y, L)))), Ue) break;
            R = R.return;
          }
          0 < oe.length && (V = new ee(V, se, null, n, Q), K.push({ event: V, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", V && n !== Ea && (se = n.relatedTarget || n.fromElement) && (zn(se) || se[rn])) break e;
          if ((ee || V) && (V = Q.window === Q ? Q : (V = Q.ownerDocument) ? V.defaultView || V.parentWindow : window, ee ? (se = n.relatedTarget || n.toElement, ee = D, se = se ? zn(se) : null, se !== null && (Ue = On(se), se !== Ue || se.tag !== 5 && se.tag !== 6) && (se = null)) : (ee = null, se = D), ee !== se)) {
            if (oe = Du, Y = "onMouseLeave", M = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (oe = zu, Y = "onPointerLeave", M = "onPointerEnter", R = "pointer"), Ue = ee == null ? V : _r(ee), L = se == null ? V : _r(se), V = new oe(Y, R + "leave", ee, n, Q), V.target = Ue, V.relatedTarget = L, Y = null, zn(Q) === D && (oe = new oe(M, R + "enter", se, n, Q), oe.target = L, oe.relatedTarget = Ue, Y = oe), Ue = Y, ee && se) t: {
              for (oe = ee, M = se, R = 0, L = oe; L; L = yr(L)) R++;
              for (L = 0, Y = M; Y; Y = yr(Y)) L++;
              for (; 0 < R - L; ) oe = yr(oe), R--;
              for (; 0 < L - R; ) M = yr(M), L--;
              for (; R--; ) {
                if (oe === M || M !== null && oe === M.alternate) break t;
                oe = yr(oe), M = yr(M);
              }
              oe = null;
            }
            else oe = null;
            ee !== null && fc(K, V, ee, oe, !1), se !== null && Ue !== null && fc(K, Ue, se, oe, !0);
          }
        }
        e: {
          if (V = D ? _r(D) : window, ee = V.nodeName && V.nodeName.toLowerCase(), ee === "select" || ee === "input" && V.type === "file") var ie = Eh;
          else if (Vu(V)) if (Qu) ie = Rh;
          else {
            ie = Th;
            var le = Nh;
          }
          else (ee = V.nodeName) && ee.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (ie = bh);
          if (ie && (ie = ie(e, D))) {
            qu(K, ie, n, Q);
            break e;
          }
          le && le(e, V, D), e === "focusout" && (le = V._wrapperState) && le.controlled && V.type === "number" && wa(V, "number", V.value);
        }
        switch (le = D ? _r(D) : window, e) {
          case "focusin":
            (Vu(le) || le.contentEditable === "true") && (mr = le, Ga = D, ds = null);
            break;
          case "focusout":
            ds = Ga = mr = null;
            break;
          case "mousedown":
            Ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ja = !1, tc(K, n, Q);
            break;
          case "selectionchange":
            if ($h) break;
          case "keydown":
          case "keyup":
            tc(K, n, Q);
        }
        var ue;
        if (qa) e: {
          switch (e) {
            case "compositionstart":
              var he = "onCompositionStart";
              break e;
            case "compositionend":
              he = "onCompositionEnd";
              break e;
            case "compositionupdate":
              he = "onCompositionUpdate";
              break e;
          }
          he = void 0;
        }
        else hr ? Bu(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (Hu && n.locale !== "ko" && (hr || he !== "onCompositionStart" ? he === "onCompositionEnd" && hr && (ue = Iu()) : (xn = Q, Ha = "value" in xn ? xn.value : xn.textContent, hr = !0)), le = uo(D, he), 0 < le.length && (he = new Ou(he, e, null, n, Q), K.push({ event: he, listeners: le }), ue ? he.data = ue : (ue = Uu(n), ue !== null && (he.data = ue)))), (ue = wh ? Sh(e, n) : kh(e, n)) && (D = uo(D, "onBeforeInput"), 0 < D.length && (Q = new Ou("onBeforeInput", "beforeinput", null, n, Q), K.push({ event: Q, listeners: D }), Q.data = ue));
      }
      cc(K, t);
    });
  }
  function hs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function uo(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Yr(e, n), u != null && s.unshift(hs(e, u, l)), u = Yr(e, t), u != null && s.push(hs(e, u, l))), e = e.return;
    }
    return s;
  }
  function yr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function fc(e, t, n, s, l) {
    for (var u = t._reactName, h = []; n !== null && n !== s; ) {
      var k = n, T = k.alternate, D = k.stateNode;
      if (T !== null && T === s) break;
      k.tag === 5 && D !== null && (k = D, l ? (T = Yr(n, u), T != null && h.unshift(hs(n, T, k))) : l || (T = Yr(n, u), T != null && h.push(hs(n, T, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Dh = /\r\n?/g, Oh = /\u0000|\uFFFD/g;
  function pc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dh, `
`).replace(Oh, "");
  }
  function co(e, t, n) {
    if (t = pc(t), pc(e) !== t && n) throw Error(a(425));
  }
  function fo() {
  }
  var ri = null, si = null;
  function oi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ai = typeof setTimeout == "function" ? setTimeout : void 0, zh = typeof clearTimeout == "function" ? clearTimeout : void 0, hc = typeof Promise == "function" ? Promise : void 0, Hh = typeof queueMicrotask == "function" ? queueMicrotask : typeof hc < "u" ? function(e) {
    return hc.resolve(null).then(e).catch(Fh);
  } : ai;
  function Fh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ii(e, t) {
    var n = t, s = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (s === 0) {
          e.removeChild(l), ss(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = l;
    } while (n);
    ss(t);
  }
  function Sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function mc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var gr = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + gr, ms = "__reactProps$" + gr, rn = "__reactContainer$" + gr, li = "__reactEvents$" + gr, Wh = "__reactListeners$" + gr, Bh = "__reactHandles$" + gr;
  function zn(e) {
    var t = e[Jt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[rn] || n[Jt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = mc(e); e !== null; ) {
          if (n = e[Jt]) return n;
          e = mc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function vs(e) {
    return e = e[Jt] || e[rn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function _r(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function po(e) {
    return e[ms] || null;
  }
  var ui = [], xr = -1;
  function kn(e) {
    return { current: e };
  }
  function Le(e) {
    0 > xr || (e.current = ui[xr], ui[xr] = null, xr--);
  }
  function Me(e, t) {
    xr++, ui[xr] = e.current, e.current = t;
  }
  var jn = {}, ot = kn(jn), vt = kn(!1), Hn = jn;
  function wr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return jn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function yt(e) {
    return e = e.childContextTypes, e != null;
  }
  function ho() {
    Le(vt), Le(ot);
  }
  function vc(e, t, n) {
    if (ot.current !== jn) throw Error(a(168));
    Me(ot, t), Me(vt, n);
  }
  function yc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(a(108, Ne(e) || "Unknown", l));
    return q({}, n, s);
  }
  function mo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn, Hn = ot.current, Me(ot, e), Me(vt, vt.current), !0;
  }
  function gc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(a(169));
    n ? (e = yc(e, t, Hn), s.__reactInternalMemoizedMergedChildContext = e, Le(vt), Le(ot), Me(ot, e)) : Le(vt), Me(vt, n);
  }
  var sn = null, vo = !1, ci = !1;
  function _c(e) {
    sn === null ? sn = [e] : sn.push(e);
  }
  function Uh(e) {
    vo = !0, _c(e);
  }
  function Cn() {
    if (!ci && sn !== null) {
      ci = !0;
      var e = 0, t = Pe;
      try {
        var n = sn;
        for (Pe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        sn = null, vo = !1;
      } catch (l) {
        throw sn !== null && (sn = sn.slice(e + 1)), wu(Pa, Cn), l;
      } finally {
        Pe = t, ci = !1;
      }
    }
    return null;
  }
  var Sr = [], kr = 0, yo = null, go = 0, Rt = [], At = 0, Fn = null, on = 1, an = "";
  function Wn(e, t) {
    Sr[kr++] = go, Sr[kr++] = yo, yo = e, go = t;
  }
  function xc(e, t, n) {
    Rt[At++] = on, Rt[At++] = an, Rt[At++] = Fn, Fn = e;
    var s = on;
    e = an;
    var l = 32 - Ot(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - Ot(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (s & (1 << h) - 1).toString(32), s >>= h, l -= h, on = 1 << 32 - Ot(t) + l | n << l | s, an = u + e;
    } else on = 1 << u | n << l | s, an = e;
  }
  function di(e) {
    e.return !== null && (Wn(e, 1), xc(e, 1, 0));
  }
  function fi(e) {
    for (; e === yo; ) yo = Sr[--kr], Sr[kr] = null, go = Sr[--kr], Sr[kr] = null;
    for (; e === Fn; ) Fn = Rt[--At], Rt[At] = null, an = Rt[--At], Rt[At] = null, on = Rt[--At], Rt[At] = null;
  }
  var Ct = null, Et = null, Oe = !1, Ht = null;
  function wc(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Sc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ct = e, Et = Sn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ct = e, Et = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Fn !== null ? { id: on, overflow: an } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ct = e, Et = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function hi(e) {
    if (Oe) {
      var t = Et;
      if (t) {
        var n = t;
        if (!Sc(e, t)) {
          if (pi(e)) throw Error(a(418));
          t = Sn(n.nextSibling);
          var s = Ct;
          t && Sc(e, t) ? wc(s, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, Ct = e);
        }
      } else {
        if (pi(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Oe = !1, Ct = e;
      }
    }
  }
  function kc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ct = e;
  }
  function _o(e) {
    if (e !== Ct) return !1;
    if (!Oe) return kc(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !oi(e.type, e.memoizedProps)), t && (t = Et)) {
      if (pi(e)) throw jc(), Error(a(418));
      for (; t; ) wc(e, t), t = Sn(t.nextSibling);
    }
    if (kc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Et = Sn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Et = null;
      }
    } else Et = Ct ? Sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function jc() {
    for (var e = Et; e; ) e = Sn(e.nextSibling);
  }
  function jr() {
    Et = Ct = null, Oe = !1;
  }
  function mi(e) {
    Ht === null ? Ht = [e] : Ht.push(e);
  }
  var Vh = H.ReactCurrentBatchConfig;
  function ys(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(a(147, e));
        var l = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
          var k = l.refs;
          h === null ? delete k[u] : k[u] = h;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function xo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Cc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ec(e) {
    function t(M, R) {
      if (e) {
        var L = M.deletions;
        L === null ? (M.deletions = [R], M.flags |= 16) : L.push(R);
      }
    }
    function n(M, R) {
      if (!e) return null;
      for (; R !== null; ) t(M, R), R = R.sibling;
      return null;
    }
    function s(M, R) {
      for (M = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? M.set(R.key, R) : M.set(R.index, R), R = R.sibling;
      return M;
    }
    function l(M, R) {
      return M = $n(M, R), M.index = 0, M.sibling = null, M;
    }
    function u(M, R, L) {
      return M.index = L, e ? (L = M.alternate, L !== null ? (L = L.index, L < R ? (M.flags |= 2, R) : L) : (M.flags |= 2, R)) : (M.flags |= 1048576, R);
    }
    function h(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function k(M, R, L, Y) {
      return R === null || R.tag !== 6 ? (R = al(L, M.mode, Y), R.return = M, R) : (R = l(R, L), R.return = M, R);
    }
    function T(M, R, L, Y) {
      var ie = L.type;
      return ie === J ? Q(M, R, L.props.children, Y, L.key) : R !== null && (R.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === Ee && Cc(ie) === R.type) ? (Y = l(R, L.props), Y.ref = ys(M, R, L), Y.return = M, Y) : (Y = Uo(L.type, L.key, L.props, null, M.mode, Y), Y.ref = ys(M, R, L), Y.return = M, Y);
    }
    function D(M, R, L, Y) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = il(L, M.mode, Y), R.return = M, R) : (R = l(R, L.children || []), R.return = M, R);
    }
    function Q(M, R, L, Y, ie) {
      return R === null || R.tag !== 7 ? (R = Gn(L, M.mode, Y, ie), R.return = M, R) : (R = l(R, L), R.return = M, R);
    }
    function K(M, R, L) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = al("" + R, M.mode, L), R.return = M, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case B:
            return L = Uo(R.type, R.key, R.props, null, M.mode, L), L.ref = ys(M, null, R), L.return = M, L;
          case I:
            return R = il(R, M.mode, L), R.return = M, R;
          case Ee:
            var Y = R._init;
            return K(M, Y(R._payload), L);
        }
        if (qr(R) || z(R)) return R = Gn(R, M.mode, L, null), R.return = M, R;
        xo(M, R);
      }
      return null;
    }
    function V(M, R, L, Y) {
      var ie = R !== null ? R.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ie !== null ? null : k(M, R, "" + L, Y);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case B:
            return L.key === ie ? T(M, R, L, Y) : null;
          case I:
            return L.key === ie ? D(M, R, L, Y) : null;
          case Ee:
            return ie = L._init, V(
              M,
              R,
              ie(L._payload),
              Y
            );
        }
        if (qr(L) || z(L)) return ie !== null ? null : Q(M, R, L, Y, null);
        xo(M, L);
      }
      return null;
    }
    function ee(M, R, L, Y, ie) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return M = M.get(L) || null, k(R, M, "" + Y, ie);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case B:
            return M = M.get(Y.key === null ? L : Y.key) || null, T(R, M, Y, ie);
          case I:
            return M = M.get(Y.key === null ? L : Y.key) || null, D(R, M, Y, ie);
          case Ee:
            var le = Y._init;
            return ee(M, R, L, le(Y._payload), ie);
        }
        if (qr(Y) || z(Y)) return M = M.get(L) || null, Q(R, M, Y, ie, null);
        xo(R, Y);
      }
      return null;
    }
    function se(M, R, L, Y) {
      for (var ie = null, le = null, ue = R, he = R = 0, et = null; ue !== null && he < L.length; he++) {
        ue.index > he ? (et = ue, ue = null) : et = ue.sibling;
        var Te = V(M, ue, L[he], Y);
        if (Te === null) {
          ue === null && (ue = et);
          break;
        }
        e && ue && Te.alternate === null && t(M, ue), R = u(Te, R, he), le === null ? ie = Te : le.sibling = Te, le = Te, ue = et;
      }
      if (he === L.length) return n(M, ue), Oe && Wn(M, he), ie;
      if (ue === null) {
        for (; he < L.length; he++) ue = K(M, L[he], Y), ue !== null && (R = u(ue, R, he), le === null ? ie = ue : le.sibling = ue, le = ue);
        return Oe && Wn(M, he), ie;
      }
      for (ue = s(M, ue); he < L.length; he++) et = ee(ue, M, he, L[he], Y), et !== null && (e && et.alternate !== null && ue.delete(et.key === null ? he : et.key), R = u(et, R, he), le === null ? ie = et : le.sibling = et, le = et);
      return e && ue.forEach(function(Mn) {
        return t(M, Mn);
      }), Oe && Wn(M, he), ie;
    }
    function oe(M, R, L, Y) {
      var ie = z(L);
      if (typeof ie != "function") throw Error(a(150));
      if (L = ie.call(L), L == null) throw Error(a(151));
      for (var le = ie = null, ue = R, he = R = 0, et = null, Te = L.next(); ue !== null && !Te.done; he++, Te = L.next()) {
        ue.index > he ? (et = ue, ue = null) : et = ue.sibling;
        var Mn = V(M, ue, Te.value, Y);
        if (Mn === null) {
          ue === null && (ue = et);
          break;
        }
        e && ue && Mn.alternate === null && t(M, ue), R = u(Mn, R, he), le === null ? ie = Mn : le.sibling = Mn, le = Mn, ue = et;
      }
      if (Te.done) return n(
        M,
        ue
      ), Oe && Wn(M, he), ie;
      if (ue === null) {
        for (; !Te.done; he++, Te = L.next()) Te = K(M, Te.value, Y), Te !== null && (R = u(Te, R, he), le === null ? ie = Te : le.sibling = Te, le = Te);
        return Oe && Wn(M, he), ie;
      }
      for (ue = s(M, ue); !Te.done; he++, Te = L.next()) Te = ee(ue, M, he, Te.value, Y), Te !== null && (e && Te.alternate !== null && ue.delete(Te.key === null ? he : Te.key), R = u(Te, R, he), le === null ? ie = Te : le.sibling = Te, le = Te);
      return e && ue.forEach(function(jm) {
        return t(M, jm);
      }), Oe && Wn(M, he), ie;
    }
    function Ue(M, R, L, Y) {
      if (typeof L == "object" && L !== null && L.type === J && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case B:
            e: {
              for (var ie = L.key, le = R; le !== null; ) {
                if (le.key === ie) {
                  if (ie = L.type, ie === J) {
                    if (le.tag === 7) {
                      n(M, le.sibling), R = l(le, L.props.children), R.return = M, M = R;
                      break e;
                    }
                  } else if (le.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === Ee && Cc(ie) === le.type) {
                    n(M, le.sibling), R = l(le, L.props), R.ref = ys(M, le, L), R.return = M, M = R;
                    break e;
                  }
                  n(M, le);
                  break;
                } else t(M, le);
                le = le.sibling;
              }
              L.type === J ? (R = Gn(L.props.children, M.mode, Y, L.key), R.return = M, M = R) : (Y = Uo(L.type, L.key, L.props, null, M.mode, Y), Y.ref = ys(M, R, L), Y.return = M, M = Y);
            }
            return h(M);
          case I:
            e: {
              for (le = L.key; R !== null; ) {
                if (R.key === le) if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                  n(M, R.sibling), R = l(R, L.children || []), R.return = M, M = R;
                  break e;
                } else {
                  n(M, R);
                  break;
                }
                else t(M, R);
                R = R.sibling;
              }
              R = il(L, M.mode, Y), R.return = M, M = R;
            }
            return h(M);
          case Ee:
            return le = L._init, Ue(M, R, le(L._payload), Y);
        }
        if (qr(L)) return se(M, R, L, Y);
        if (z(L)) return oe(M, R, L, Y);
        xo(M, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, R !== null && R.tag === 6 ? (n(M, R.sibling), R = l(R, L), R.return = M, M = R) : (n(M, R), R = al(L, M.mode, Y), R.return = M, M = R), h(M)) : n(M, R);
    }
    return Ue;
  }
  var Cr = Ec(!0), Nc = Ec(!1), wo = kn(null), So = null, Er = null, vi = null;
  function yi() {
    vi = Er = So = null;
  }
  function gi(e) {
    var t = wo.current;
    Le(wo), e._currentValue = t;
  }
  function _i(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Nr(e, t) {
    So = e, vi = Er = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (gt = !0), e.firstContext = null);
  }
  function Pt(e) {
    var t = e._currentValue;
    if (vi !== e) if (e = { context: e, memoizedValue: t, next: null }, Er === null) {
      if (So === null) throw Error(a(308));
      Er = e, So.dependencies = { lanes: 0, firstContext: e };
    } else Er = Er.next = e;
    return t;
  }
  var Bn = null;
  function xi(e) {
    Bn === null ? Bn = [e] : Bn.push(e);
  }
  function Tc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, xi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ln(e, s);
  }
  function ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var En = !1;
  function wi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function un(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Nn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ce & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, ln(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, xi(s)) : (t.next = l.next, l.next = t), s.interleaved = t, ln(e, n);
  }
  function ko(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Ia(e, n);
    }
  }
  function Rc(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var h = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = h : u = u.next = h, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: s.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function jo(e, t, n, s) {
    var l = e.updateQueue;
    En = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var T = k, D = T.next;
      T.next = null, h === null ? u = D : h.next = D, h = T;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, k = Q.lastBaseUpdate, k !== h && (k === null ? Q.firstBaseUpdate = D : k.next = D, Q.lastBaseUpdate = T));
    }
    if (u !== null) {
      var K = l.baseState;
      h = 0, Q = D = T = null, k = u;
      do {
        var V = k.lane, ee = k.eventTime;
        if ((s & V) === V) {
          Q !== null && (Q = Q.next = {
            eventTime: ee,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var se = e, oe = k;
            switch (V = t, ee = n, oe.tag) {
              case 1:
                if (se = oe.payload, typeof se == "function") {
                  K = se.call(ee, K, V);
                  break e;
                }
                K = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = oe.payload, V = typeof se == "function" ? se.call(ee, K, V) : se, V == null) break e;
                K = q({}, K, V);
                break e;
              case 2:
                En = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, V = l.effects, V === null ? l.effects = [k] : V.push(k));
        } else ee = { eventTime: ee, lane: V, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Q === null ? (D = Q = ee, T = K) : Q = Q.next = ee, h |= V;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          V = k, k = V.next, V.next = null, l.lastBaseUpdate = V, l.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = K), l.baseState = T, l.firstBaseUpdate = D, l.lastBaseUpdate = Q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      qn |= h, e.lanes = h, e.memoizedState = K;
    }
  }
  function Ac(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], l = s.callback;
      if (l !== null) {
        if (s.callback = null, s = n, typeof l != "function") throw Error(a(191, l));
        l.call(s);
      }
    }
  }
  var gs = {}, Xt = kn(gs), _s = kn(gs), xs = kn(gs);
  function Un(e) {
    if (e === gs) throw Error(a(174));
    return e;
  }
  function Si(e, t) {
    switch (Me(xs, t), Me(_s, e), Me(Xt, gs), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ka(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ka(t, e);
    }
    Le(Xt), Me(Xt, t);
  }
  function Tr() {
    Le(Xt), Le(_s), Le(xs);
  }
  function Pc(e) {
    Un(xs.current);
    var t = Un(Xt.current), n = ka(t, e.type);
    t !== n && (Me(_s, e), Me(Xt, n));
  }
  function ki(e) {
    _s.current === e && (Le(Xt), Le(_s));
  }
  var He = kn(0);
  function Co(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ji = [];
  function Ci() {
    for (var e = 0; e < ji.length; e++) ji[e]._workInProgressVersionPrimary = null;
    ji.length = 0;
  }
  var Eo = H.ReactCurrentDispatcher, Ei = H.ReactCurrentBatchConfig, Vn = 0, Fe = null, qe = null, Xe = null, No = !1, ws = !1, Ss = 0, qh = 0;
  function at() {
    throw Error(a(321));
  }
  function Ni(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!zt(e[n], t[n])) return !1;
    return !0;
  }
  function Ti(e, t, n, s, l, u) {
    if (Vn = u, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Eo.current = e === null || e.memoizedState === null ? Gh : Jh, e = n(s, l), ws) {
      u = 0;
      do {
        if (ws = !1, Ss = 0, 25 <= u) throw Error(a(301));
        u += 1, Xe = qe = null, t.updateQueue = null, Eo.current = Xh, e = n(s, l);
      } while (ws);
    }
    if (Eo.current = Ro, t = qe !== null && qe.next !== null, Vn = 0, Xe = qe = Fe = null, No = !1, t) throw Error(a(300));
    return e;
  }
  function bi() {
    var e = Ss !== 0;
    return Ss = 0, e;
  }
  function Zt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xe === null ? Fe.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function $t() {
    if (qe === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var t = Xe === null ? Fe.memoizedState : Xe.next;
    if (t !== null) Xe = t, qe = e;
    else {
      if (e === null) throw Error(a(310));
      qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, Xe === null ? Fe.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function ks(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ri(e) {
    var t = $t(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var s = qe, l = s.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        l.next = u.next, u.next = h;
      }
      s.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, s = s.baseState;
      var k = h = null, T = null, D = u;
      do {
        var Q = D.lane;
        if ((Vn & Q) === Q) T !== null && (T = T.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), s = D.hasEagerState ? D.eagerState : e(s, D.action);
        else {
          var K = {
            lane: Q,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          T === null ? (k = T = K, h = s) : T = T.next = K, Fe.lanes |= Q, qn |= Q;
        }
        D = D.next;
      } while (D !== null && D !== u);
      T === null ? h = s : T.next = k, zt(s, t.memoizedState) || (gt = !0), t.memoizedState = s, t.baseState = h, t.baseQueue = T, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, Fe.lanes |= u, qn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ai(e) {
    var t = $t(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = l = l.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== l);
      zt(u, t.memoizedState) || (gt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function $c() {
  }
  function Mc(e, t) {
    var n = Fe, s = $t(), l = t(), u = !zt(s.memoizedState, l);
    if (u && (s.memoizedState = l, gt = !0), s = s.queue, Pi(Dc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Xe !== null && Xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, js(9, Lc.bind(null, n, s, l, t), void 0, null), Ze === null) throw Error(a(349));
      (Vn & 30) !== 0 || Ic(n, t, l);
    }
    return l;
  }
  function Ic(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Lc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, Oc(t) && zc(e);
  }
  function Dc(e, t, n) {
    return n(function() {
      Oc(t) && zc(e);
    });
  }
  function Oc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !zt(e, n);
    } catch {
      return !0;
    }
  }
  function zc(e) {
    var t = ln(e, 1);
    t !== null && Ut(t, e, 1, -1);
  }
  function Hc(e) {
    var t = Zt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ks, lastRenderedState: e }, t.queue = e, e = e.dispatch = Yh.bind(null, Fe, e), [t.memoizedState, e];
  }
  function js(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Fc() {
    return $t().memoizedState;
  }
  function To(e, t, n, s) {
    var l = Zt();
    Fe.flags |= e, l.memoizedState = js(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function bo(e, t, n, s) {
    var l = $t();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (qe !== null) {
      var h = qe.memoizedState;
      if (u = h.destroy, s !== null && Ni(s, h.deps)) {
        l.memoizedState = js(t, n, u, s);
        return;
      }
    }
    Fe.flags |= e, l.memoizedState = js(1 | t, n, u, s);
  }
  function Wc(e, t) {
    return To(8390656, 8, e, t);
  }
  function Pi(e, t) {
    return bo(2048, 8, e, t);
  }
  function Bc(e, t) {
    return bo(4, 2, e, t);
  }
  function Uc(e, t) {
    return bo(4, 4, e, t);
  }
  function Vc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function qc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, bo(4, 4, Vc.bind(null, t, e), n);
  }
  function $i() {
  }
  function Qc(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ni(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Kc(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ni(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Yc(e, t, n) {
    return (Vn & 21) === 0 ? (e.baseState && (e.baseState = !1, gt = !0), e.memoizedState = n) : (zt(n, t) || (n = Cu(), Fe.lanes |= n, qn |= n, e.baseState = !0), t);
  }
  function Qh(e, t) {
    var n = Pe;
    Pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Ei.transition;
    Ei.transition = {};
    try {
      e(!1), t();
    } finally {
      Pe = n, Ei.transition = s;
    }
  }
  function Gc() {
    return $t().memoizedState;
  }
  function Kh(e, t, n) {
    var s = An(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Jc(e)) Xc(t, n);
    else if (n = Tc(e, t, n, s), n !== null) {
      var l = ft();
      Ut(n, e, s, l), Zc(n, t, s);
    }
  }
  function Yh(e, t, n) {
    var s = An(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Jc(e)) Xc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, zt(k, h)) {
          var T = t.interleaved;
          T === null ? (l.next = l, xi(t)) : (l.next = T.next, T.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Tc(e, t, l, s), n !== null && (l = ft(), Ut(n, e, s, l), Zc(n, t, s));
    }
  }
  function Jc(e) {
    var t = e.alternate;
    return e === Fe || t !== null && t === Fe;
  }
  function Xc(e, t) {
    ws = No = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Zc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Ia(e, n);
    }
  }
  var Ro = { readContext: Pt, useCallback: at, useContext: at, useEffect: at, useImperativeHandle: at, useInsertionEffect: at, useLayoutEffect: at, useMemo: at, useReducer: at, useRef: at, useState: at, useDebugValue: at, useDeferredValue: at, useTransition: at, useMutableSource: at, useSyncExternalStore: at, useId: at, unstable_isNewReconciler: !1 }, Gh = { readContext: Pt, useCallback: function(e, t) {
    return Zt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Pt, useEffect: Wc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, To(
      4194308,
      4,
      Vc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return To(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return To(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Zt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = Zt();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Kh.bind(null, Fe, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Zt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hc, useDebugValue: $i, useDeferredValue: function(e) {
    return Zt().memoizedState = e;
  }, useTransition: function() {
    var e = Hc(!1), t = e[0];
    return e = Qh.bind(null, e[1]), Zt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Fe, l = Zt();
    if (Oe) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), Ze === null) throw Error(a(349));
      (Vn & 30) !== 0 || Ic(s, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Wc(Dc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, js(9, Lc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Zt(), t = Ze.identifierPrefix;
    if (Oe) {
      var n = an, s = on;
      n = (s & ~(1 << 32 - Ot(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ss++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = qh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Jh = {
    readContext: Pt,
    useCallback: Qc,
    useContext: Pt,
    useEffect: Pi,
    useImperativeHandle: qc,
    useInsertionEffect: Bc,
    useLayoutEffect: Uc,
    useMemo: Kc,
    useReducer: Ri,
    useRef: Fc,
    useState: function() {
      return Ri(ks);
    },
    useDebugValue: $i,
    useDeferredValue: function(e) {
      var t = $t();
      return Yc(t, qe.memoizedState, e);
    },
    useTransition: function() {
      var e = Ri(ks)[0], t = $t().memoizedState;
      return [e, t];
    },
    useMutableSource: $c,
    useSyncExternalStore: Mc,
    useId: Gc,
    unstable_isNewReconciler: !1
  }, Xh = { readContext: Pt, useCallback: Qc, useContext: Pt, useEffect: Pi, useImperativeHandle: qc, useInsertionEffect: Bc, useLayoutEffect: Uc, useMemo: Kc, useReducer: Ai, useRef: Fc, useState: function() {
    return Ai(ks);
  }, useDebugValue: $i, useDeferredValue: function(e) {
    var t = $t();
    return qe === null ? t.memoizedState = e : Yc(t, qe.memoizedState, e);
  }, useTransition: function() {
    var e = Ai(ks)[0], t = $t().memoizedState;
    return [e, t];
  }, useMutableSource: $c, useSyncExternalStore: Mc, useId: Gc, unstable_isNewReconciler: !1 };
  function Ft(e, t) {
    if (e && e.defaultProps) {
      t = q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Mi(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ao = { isMounted: function(e) {
    return (e = e._reactInternals) ? On(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = ft(), l = An(e), u = un(s, l);
    u.payload = t, n != null && (u.callback = n), t = Nn(e, u, l), t !== null && (Ut(t, e, l, s), ko(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = ft(), l = An(e), u = un(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Nn(e, u, l), t !== null && (Ut(t, e, l, s), ko(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ft(), s = An(e), l = un(n, s);
    l.tag = 2, t != null && (l.callback = t), t = Nn(e, l, s), t !== null && (Ut(t, e, s, n), ko(t, e, s));
  } };
  function ed(e, t, n, s, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, h) : t.prototype && t.prototype.isPureReactComponent ? !cs(n, s) || !cs(l, u) : !0;
  }
  function td(e, t, n) {
    var s = !1, l = jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Pt(u) : (l = yt(t) ? Hn : ot.current, s = t.contextTypes, u = (s = s != null) ? wr(e, l) : jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ao, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function nd(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Ao.enqueueReplaceState(t, t.state, null);
  }
  function Ii(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, wi(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Pt(u) : (u = yt(t) ? Hn : ot.current, l.context = wr(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Mi(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ao.enqueueReplaceState(l, l.state, null), jo(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function br(e, t) {
    try {
      var n = "", s = t;
      do
        n += we(s), s = s.return;
      while (s);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Li(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Di(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Zh = typeof WeakMap == "function" ? WeakMap : Map;
  function rd(e, t, n) {
    n = un(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      Oo || (Oo = !0, Xi = s), Di(e, t);
    }, n;
  }
  function sd(e, t, n) {
    n = un(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        Di(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Di(e, t), typeof s != "function" && (bn === null ? bn = /* @__PURE__ */ new Set([this]) : bn.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function od(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Zh();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = pm.bind(null, e, t, n), t.then(e, e));
  }
  function ad(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function id(e, t, n, s, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = un(-1, 1), t.tag = 2, Nn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var em = H.ReactCurrentOwner, gt = !1;
  function dt(e, t, n, s) {
    t.child = e === null ? Nc(t, null, n, s) : Cr(t, e.child, n, s);
  }
  function ld(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return Nr(t, l), s = Ti(e, t, n, s, u, l), n = bi(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, cn(e, t, l)) : (Oe && n && di(t), t.flags |= 1, dt(e, t, s, l), t.child);
  }
  function ud(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ol(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, cd(e, t, u, s, l)) : (e = Uo(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : cs, n(h, s) && e.ref === t.ref) return cn(e, t, l);
    }
    return t.flags |= 1, e = $n(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function cd(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (cs(u, s) && e.ref === t.ref) if (gt = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (gt = !0);
      else return t.lanes = e.lanes, cn(e, t, l);
    }
    return Oi(e, t, n, s, l);
  }
  function dd(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Me(Ar, Nt), Nt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Me(Ar, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Me(Ar, Nt), Nt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Me(Ar, Nt), Nt |= s;
    return dt(e, t, l, n), t.child;
  }
  function fd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Oi(e, t, n, s, l) {
    var u = yt(n) ? Hn : ot.current;
    return u = wr(t, u), Nr(t, l), n = Ti(e, t, n, s, u, l), s = bi(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, cn(e, t, l)) : (Oe && s && di(t), t.flags |= 1, dt(e, t, n, l), t.child);
  }
  function pd(e, t, n, s, l) {
    if (yt(n)) {
      var u = !0;
      mo(t);
    } else u = !1;
    if (Nr(t, l), t.stateNode === null) $o(e, t), td(t, n, s), Ii(t, n, s, l), s = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var T = h.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = Pt(D) : (D = yt(n) ? Hn : ot.current, D = wr(t, D));
      var Q = n.getDerivedStateFromProps, K = typeof Q == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      K || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== s || T !== D) && nd(t, h, s, D), En = !1;
      var V = t.memoizedState;
      h.state = V, jo(t, s, h, l), T = t.memoizedState, k !== s || V !== T || vt.current || En ? (typeof Q == "function" && (Mi(t, n, Q, s), T = t.memoizedState), (k = En || ed(t, n, k, s, V, T, D)) ? (K || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = T), h.props = s, h.state = T, h.context = D, s = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      h = t.stateNode, bc(e, t), k = t.memoizedProps, D = t.type === t.elementType ? k : Ft(t.type, k), h.props = D, K = t.pendingProps, V = h.context, T = n.contextType, typeof T == "object" && T !== null ? T = Pt(T) : (T = yt(n) ? Hn : ot.current, T = wr(t, T));
      var ee = n.getDerivedStateFromProps;
      (Q = typeof ee == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== K || V !== T) && nd(t, h, s, T), En = !1, V = t.memoizedState, h.state = V, jo(t, s, h, l);
      var se = t.memoizedState;
      k !== K || V !== se || vt.current || En ? (typeof ee == "function" && (Mi(t, n, ee, s), se = t.memoizedState), (D = En || ed(t, n, D, s, V, se, T) || !1) ? (Q || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, se, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, se, T)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = se), h.props = s, h.state = se, h.context = T, s = D) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return zi(e, t, n, s, u, l);
  }
  function zi(e, t, n, s, l, u) {
    fd(e, t);
    var h = (t.flags & 128) !== 0;
    if (!s && !h) return l && gc(t, n, !1), cn(e, t, u);
    s = t.stateNode, em.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && h ? (t.child = Cr(t, e.child, null, u), t.child = Cr(t, null, k, u)) : dt(e, t, k, u), t.memoizedState = s.state, l && gc(t, n, !0), t.child;
  }
  function hd(e) {
    var t = e.stateNode;
    t.pendingContext ? vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vc(e, t.context, !1), Si(e, t.containerInfo);
  }
  function md(e, t, n, s, l) {
    return jr(), mi(l), t.flags |= 256, dt(e, t, n, s), t.child;
  }
  var Hi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function vd(e, t, n) {
    var s = t.pendingProps, l = He.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Me(He, l & 1), e === null)
      return hi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, h = { mode: "hidden", children: h }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = Vo(h, s, 0, null), e = Gn(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Fi(n), t.memoizedState = Hi, e) : Wi(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return tm(e, t, h, s, k, l, n);
    if (u) {
      u = s.fallback, h = t.mode, l = e.child, k = l.sibling;
      var T = { mode: "hidden", children: s.children };
      return (h & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = T, t.deletions = null) : (s = $n(l, T), s.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = $n(k, u) : (u = Gn(u, h, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, h = e.child.memoizedState, h = h === null ? Fi(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = Hi, s;
    }
    return u = e.child, e = u.sibling, s = $n(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Wi(e, t) {
    return t = Vo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Po(e, t, n, s) {
    return s !== null && mi(s), Cr(t, e.child, null, n), e = Wi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function tm(e, t, n, s, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Li(Error(a(422))), Po(e, t, h, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = Vo({ mode: "visible", children: s.children }, l, 0, null), u = Gn(u, l, h, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Cr(t, e.child, null, h), t.child.memoizedState = Fi(h), t.memoizedState = Hi, u);
    if ((t.mode & 1) === 0) return Po(e, t, h, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var k = s.dgst;
      return s = k, u = Error(a(419)), s = Li(u, s, void 0), Po(e, t, h, s);
    }
    if (k = (h & e.childLanes) !== 0, gt || k) {
      if (s = Ze, s !== null) {
        switch (h & -h) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (s.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, ln(e, l), Ut(s, e, l, -1));
      }
      return sl(), s = Li(Error(a(421))), Po(e, t, h, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Et = Sn(l.nextSibling), Ct = t, Oe = !0, Ht = null, e !== null && (Rt[At++] = on, Rt[At++] = an, Rt[At++] = Fn, on = e.id, an = e.overflow, Fn = t), t = Wi(t, s.children), t.flags |= 4096, t);
  }
  function yd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), _i(e.return, t, n);
  }
  function Bi(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function gd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (dt(e, t, s.children, n), s = He.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yd(e, n, t);
        else if (e.tag === 19) yd(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      s &= 1;
    }
    if (Me(He, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Co(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Bi(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Co(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Bi(t, !0, n, null, u);
        break;
      case "together":
        Bi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function $o(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function cn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), qn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = $n(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function nm(e, t, n) {
    switch (t.tag) {
      case 3:
        hd(t), jr();
        break;
      case 5:
        Pc(t);
        break;
      case 1:
        yt(t.type) && mo(t);
        break;
      case 4:
        Si(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Me(wo, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Me(He, He.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? vd(e, t, n) : (Me(He, He.current & 1), e = cn(e, t, n), e !== null ? e.sibling : null);
        Me(He, He.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return gd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Me(He, He.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, dd(e, t, n);
    }
    return cn(e, t, n);
  }
  var _d, Ui, xd, wd;
  _d = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Ui = function() {
  }, xd = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, Un(Xt.current);
      var u = null;
      switch (n) {
        case "input":
          l = Yt(e, l), s = Yt(e, s), u = [];
          break;
        case "select":
          l = q({}, l, { value: void 0 }), s = q({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Sa(e, l), s = Sa(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = fo);
      }
      ja(n, s);
      var h;
      n = null;
      for (D in l) if (!s.hasOwnProperty(D) && l.hasOwnProperty(D) && l[D] != null) if (D === "style") {
        var k = l[D];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (d.hasOwnProperty(D) ? u || (u = []) : (u = u || []).push(D, null));
      for (D in s) {
        var T = s[D];
        if (k = l != null ? l[D] : void 0, s.hasOwnProperty(D) && T !== k && (T != null || k != null)) if (D === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || T && T.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in T) T.hasOwnProperty(h) && k[h] !== T[h] && (n || (n = {}), n[h] = T[h]);
        } else n || (u || (u = []), u.push(
          D,
          n
        )), n = T;
        else D === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, k = k ? k.__html : void 0, T != null && k !== T && (u = u || []).push(D, T)) : D === "children" ? typeof T != "string" && typeof T != "number" || (u = u || []).push(D, "" + T) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (d.hasOwnProperty(D) ? (T != null && D === "onScroll" && Ie("scroll", e), u || k === T || (u = [])) : (u = u || []).push(D, T));
      }
      n && (u = u || []).push("style", n);
      var D = u;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, wd = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function Cs(e, t) {
    if (!Oe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; ) n.alternate !== null && (s = n), n = n.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags & 14680064, s |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function rm(e, t, n) {
    var s = t.pendingProps;
    switch (fi(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(t), null;
      case 1:
        return yt(t.type) && ho(), it(t), null;
      case 3:
        return s = t.stateNode, Tr(), Le(vt), Le(ot), Ci(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (_o(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ht !== null && (tl(Ht), Ht = null))), Ui(e, t), it(t), null;
      case 5:
        ki(t);
        var l = Un(xs.current);
        if (n = t.type, e !== null && t.stateNode != null) xd(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(a(166));
            return it(t), null;
          }
          if (e = Un(Xt.current), _o(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[Jt] = t, s[ms] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ie("cancel", s), Ie("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ie("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < fs.length; l++) Ie(fs[l], s);
                break;
              case "source":
                Ie("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Ie(
                  "error",
                  s
                ), Ie("load", s);
                break;
              case "details":
                Ie("toggle", s);
                break;
              case "input":
                Ws(s, u), Ie("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, Ie("invalid", s);
                break;
              case "textarea":
                su(s, u), Ie("invalid", s);
            }
            ja(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? s.textContent !== k && (u.suppressHydrationWarning !== !0 && co(s.textContent, k, e), l = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && co(
                s.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && Ie("scroll", s);
            }
            switch (n) {
              case "input":
                fe(s), ru(s, u, !0);
                break;
              case "textarea":
                fe(s), au(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = fo);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = h.createElement(n, { is: s.is }) : (e = h.createElement(n), n === "select" && (h = e, s.multiple ? h.multiple = !0 : s.size && (h.size = s.size))) : e = h.createElementNS(e, n), e[Jt] = t, e[ms] = s, _d(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = Ca(n, s), n) {
                case "dialog":
                  Ie("cancel", e), Ie("close", e), l = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ie("load", e), l = s;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < fs.length; l++) Ie(fs[l], e);
                  l = s;
                  break;
                case "source":
                  Ie("error", e), l = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Ie(
                    "error",
                    e
                  ), Ie("load", e), l = s;
                  break;
                case "details":
                  Ie("toggle", e), l = s;
                  break;
                case "input":
                  Ws(e, s), l = Yt(e, s), Ie("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = q({}, s, { value: void 0 }), Ie("invalid", e);
                  break;
                case "textarea":
                  su(e, s), l = Sa(e, s), Ie("invalid", e);
                  break;
                default:
                  l = s;
              }
              ja(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var T = k[u];
                u === "style" ? cu(e, T) : u === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && lu(e, T)) : u === "children" ? typeof T == "string" ? (n !== "textarea" || T !== "") && Qr(e, T) : typeof T == "number" && Qr(e, "" + T) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? T != null && u === "onScroll" && Ie("scroll", e) : T != null && P(e, u, T, h));
              }
              switch (n) {
                case "input":
                  fe(e), ru(e, s, !1);
                  break;
                case "textarea":
                  fe(e), au(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + je(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? ur(e, !!s.multiple, u, !1) : s.defaultValue != null && ur(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = fo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return it(t), null;
      case 6:
        if (e && t.stateNode != null) wd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(a(166));
          if (n = Un(xs.current), Un(Xt.current), _o(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[Jt] = t, (u = s.nodeValue !== n) && (e = Ct, e !== null)) switch (e.tag) {
              case 3:
                co(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && co(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[Jt] = t, t.stateNode = s;
        }
        return it(t), null;
      case 13:
        if (Le(He), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) jc(), jr(), t.flags |= 98560, u = !1;
          else if (u = _o(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(a(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(a(317));
              u[Jt] = t;
            } else jr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            it(t), u = !1;
          } else Ht !== null && (tl(Ht), Ht = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (He.current & 1) !== 0 ? Qe === 0 && (Qe = 3) : sl())), t.updateQueue !== null && (t.flags |= 4), it(t), null);
      case 4:
        return Tr(), Ui(e, t), e === null && ps(t.stateNode.containerInfo), it(t), null;
      case 10:
        return gi(t.type._context), it(t), null;
      case 17:
        return yt(t.type) && ho(), it(t), null;
      case 19:
        if (Le(He), u = t.memoizedState, u === null) return it(t), null;
        if (s = (t.flags & 128) !== 0, h = u.rendering, h === null) if (s) Cs(u, !1);
        else {
          if (Qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Co(e), h !== null) {
              for (t.flags |= 128, Cs(u, !1), s = h.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Me(He, He.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Be() > Pr && (t.flags |= 128, s = !0, Cs(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Co(h), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Cs(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !Oe) return it(t), null;
          } else 2 * Be() - u.renderingStartTime > Pr && n !== 1073741824 && (t.flags |= 128, s = !0, Cs(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Be(), t.sibling = null, n = He.current, Me(He, s ? n & 1 | 2 : n & 1), t) : (it(t), null);
      case 22:
      case 23:
        return rl(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Nt & 1073741824) !== 0 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function sm(e, t) {
    switch (fi(t), t.tag) {
      case 1:
        return yt(t.type) && ho(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Tr(), Le(vt), Le(ot), Ci(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ki(t), null;
      case 13:
        if (Le(He), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          jr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Le(He), null;
      case 4:
        return Tr(), null;
      case 10:
        return gi(t.type._context), null;
      case 22:
      case 23:
        return rl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Mo = !1, lt = !1, om = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
  function Rr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      We(e, t, s);
    }
    else n.current = null;
  }
  function Vi(e, t, n) {
    try {
      n();
    } catch (s) {
      We(e, t, s);
    }
  }
  var Sd = !1;
  function am(e, t) {
    if (ri = Zs, e = ec(), Ya(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var l = s.anchorOffset, u = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var h = 0, k = -1, T = -1, D = 0, Q = 0, K = e, V = null;
          t: for (; ; ) {
            for (var ee; K !== n || l !== 0 && K.nodeType !== 3 || (k = h + l), K !== u || s !== 0 && K.nodeType !== 3 || (T = h + s), K.nodeType === 3 && (h += K.nodeValue.length), (ee = K.firstChild) !== null; )
              V = K, K = ee;
            for (; ; ) {
              if (K === e) break t;
              if (V === n && ++D === l && (k = h), V === u && ++Q === s && (T = h), (ee = K.nextSibling) !== null) break;
              K = V, V = K.parentNode;
            }
            K = ee;
          }
          n = k === -1 || T === -1 ? null : { start: k, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (si = { focusedElem: e, selectionRange: n }, Zs = !1, ne = t; ne !== null; ) if (t = ne, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ne = e;
    else for (; ne !== null; ) {
      t = ne;
      try {
        var se = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (se !== null) {
              var oe = se.memoizedProps, Ue = se.memoizedState, M = t.stateNode, R = M.getSnapshotBeforeUpdate(t.elementType === t.type ? oe : Ft(t.type, oe), Ue);
              M.__reactInternalSnapshotBeforeUpdate = R;
            }
            break;
          case 3:
            var L = t.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(a(163));
        }
      } catch (Y) {
        We(t, t.return, Y);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ne = e;
        break;
      }
      ne = t.return;
    }
    return se = Sd, Sd = !1, se;
  }
  function Es(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Vi(t, n, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function Io(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var s = n.create;
          n.destroy = s();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function qi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function kd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Jt], delete t[ms], delete t[li], delete t[Wh], delete t[Bh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function jd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Cd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qi(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fo));
    else if (s !== 4 && (e = e.child, e !== null)) for (Qi(e, t, n), e = e.sibling; e !== null; ) Qi(e, t, n), e = e.sibling;
  }
  function Ki(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), e = e.sibling;
  }
  var rt = null, Wt = !1;
  function Tn(e, t, n) {
    for (n = n.child; n !== null; ) Ed(e, t, n), n = n.sibling;
  }
  function Ed(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(Qs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        lt || Rr(n, t);
      case 6:
        var s = rt, l = Wt;
        rt = null, Tn(e, t, n), rt = s, Wt = l, rt !== null && (Wt ? (e = rt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : rt.removeChild(n.stateNode));
        break;
      case 18:
        rt !== null && (Wt ? (e = rt, n = n.stateNode, e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n), ss(e)) : ii(rt, n.stateNode));
        break;
      case 4:
        s = rt, l = Wt, rt = n.stateNode.containerInfo, Wt = !0, Tn(e, t, n), rt = s, Wt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!lt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Vi(n, t, h), l = l.next;
          } while (l !== s);
        }
        Tn(e, t, n);
        break;
      case 1:
        if (!lt && (Rr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (k) {
          We(n, t, k);
        }
        Tn(e, t, n);
        break;
      case 21:
        Tn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (lt = (s = lt) || n.memoizedState !== null, Tn(e, t, n), lt = s) : Tn(e, t, n);
        break;
      default:
        Tn(e, t, n);
    }
  }
  function Nd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new om()), t.forEach(function(s) {
        var l = mm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function Bt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var u = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              rt = k.stateNode, Wt = !1;
              break e;
            case 3:
              rt = k.stateNode.containerInfo, Wt = !0;
              break e;
            case 4:
              rt = k.stateNode.containerInfo, Wt = !0;
              break e;
          }
          k = k.return;
        }
        if (rt === null) throw Error(a(160));
        Ed(u, h, l), rt = null, Wt = !1;
        var T = l.alternate;
        T !== null && (T.return = null), l.return = null;
      } catch (D) {
        We(l, t, D);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Td(t, e), t = t.sibling;
  }
  function Td(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Bt(t, e), en(e), s & 4) {
          try {
            Es(3, e, e.return), Io(3, e);
          } catch (oe) {
            We(e, e.return, oe);
          }
          try {
            Es(5, e, e.return);
          } catch (oe) {
            We(e, e.return, oe);
          }
        }
        break;
      case 1:
        Bt(t, e), en(e), s & 512 && n !== null && Rr(n, n.return);
        break;
      case 5:
        if (Bt(t, e), en(e), s & 512 && n !== null && Rr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Qr(l, "");
          } catch (oe) {
            We(e, e.return, oe);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, T = e.updateQueue;
          if (e.updateQueue = null, T !== null) try {
            k === "input" && u.type === "radio" && u.name != null && nu(l, u), Ca(k, h);
            var D = Ca(k, u);
            for (h = 0; h < T.length; h += 2) {
              var Q = T[h], K = T[h + 1];
              Q === "style" ? cu(l, K) : Q === "dangerouslySetInnerHTML" ? lu(l, K) : Q === "children" ? Qr(l, K) : P(l, Q, K, D);
            }
            switch (k) {
              case "input":
                xa(l, u);
                break;
              case "textarea":
                ou(l, u);
                break;
              case "select":
                var V = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var ee = u.value;
                ee != null ? ur(l, !!u.multiple, ee, !1) : V !== !!u.multiple && (u.defaultValue != null ? ur(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : ur(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[ms] = u;
          } catch (oe) {
            We(e, e.return, oe);
          }
        }
        break;
      case 6:
        if (Bt(t, e), en(e), s & 4) {
          if (e.stateNode === null) throw Error(a(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (oe) {
            We(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (Bt(t, e), en(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ss(t.containerInfo);
        } catch (oe) {
          We(e, e.return, oe);
        }
        break;
      case 4:
        Bt(t, e), en(e);
        break;
      case 13:
        Bt(t, e), en(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ji = Be())), s & 4 && Nd(e);
        break;
      case 22:
        if (Q = n !== null && n.memoizedState !== null, e.mode & 1 ? (lt = (D = lt) || Q, Bt(t, e), lt = D) : Bt(t, e), en(e), s & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !Q && (e.mode & 1) !== 0) for (ne = e, Q = e.child; Q !== null; ) {
            for (K = ne = Q; ne !== null; ) {
              switch (V = ne, ee = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Es(4, V, V.return);
                  break;
                case 1:
                  Rr(V, V.return);
                  var se = V.stateNode;
                  if (typeof se.componentWillUnmount == "function") {
                    s = V, n = V.return;
                    try {
                      t = s, se.props = t.memoizedProps, se.state = t.memoizedState, se.componentWillUnmount();
                    } catch (oe) {
                      We(s, n, oe);
                    }
                  }
                  break;
                case 5:
                  Rr(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Ad(K);
                    continue;
                  }
              }
              ee !== null ? (ee.return = V, ne = ee) : Ad(K);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, K = e; ; ) {
            if (K.tag === 5) {
              if (Q === null) {
                Q = K;
                try {
                  l = K.stateNode, D ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = K.stateNode, T = K.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null, k.style.display = uu("display", h));
                } catch (oe) {
                  We(e, e.return, oe);
                }
              }
            } else if (K.tag === 6) {
              if (Q === null) try {
                K.stateNode.nodeValue = D ? "" : K.memoizedProps;
              } catch (oe) {
                We(e, e.return, oe);
              }
            } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === e) && K.child !== null) {
              K.child.return = K, K = K.child;
              continue;
            }
            if (K === e) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === e) break e;
              Q === K && (Q = null), K = K.return;
            }
            Q === K && (Q = null), K.sibling.return = K.return, K = K.sibling;
          }
        }
        break;
      case 19:
        Bt(t, e), en(e), s & 4 && Nd(e);
        break;
      case 21:
        break;
      default:
        Bt(
          t,
          e
        ), en(e);
    }
  }
  function en(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (jd(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (Qr(l, ""), s.flags &= -33);
            var u = Cd(e);
            Ki(e, u, l);
            break;
          case 3:
          case 4:
            var h = s.stateNode.containerInfo, k = Cd(e);
            Qi(e, k, h);
            break;
          default:
            throw Error(a(161));
        }
      } catch (T) {
        We(e, e.return, T);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function im(e, t, n) {
    ne = e, bd(e);
  }
  function bd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ne !== null; ) {
      var l = ne, u = l.child;
      if (l.tag === 22 && s) {
        var h = l.memoizedState !== null || Mo;
        if (!h) {
          var k = l.alternate, T = k !== null && k.memoizedState !== null || lt;
          k = Mo;
          var D = lt;
          if (Mo = h, (lt = T) && !D) for (ne = l; ne !== null; ) h = ne, T = h.child, h.tag === 22 && h.memoizedState !== null ? Pd(l) : T !== null ? (T.return = h, ne = T) : Pd(l);
          for (; u !== null; ) ne = u, bd(u), u = u.sibling;
          ne = l, Mo = k, lt = D;
        }
        Rd(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, ne = u) : Rd(e);
    }
  }
  function Rd(e) {
    for (; ne !== null; ) {
      var t = ne;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              lt || Io(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !lt) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
                s.componentDidUpdate(l, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Ac(t, u, s);
              break;
            case 3:
              var h = t.updateQueue;
              if (h !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Ac(t, h, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var T = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && n.focus();
                    break;
                  case "img":
                    T.src && (n.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var D = t.alternate;
                if (D !== null) {
                  var Q = D.memoizedState;
                  if (Q !== null) {
                    var K = Q.dehydrated;
                    K !== null && ss(K);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(a(163));
          }
          lt || t.flags & 512 && qi(t);
        } catch (V) {
          We(t, t.return, V);
        }
      }
      if (t === e) {
        ne = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ne = n;
        break;
      }
      ne = t.return;
    }
  }
  function Ad(e) {
    for (; ne !== null; ) {
      var t = ne;
      if (t === e) {
        ne = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ne = n;
        break;
      }
      ne = t.return;
    }
  }
  function Pd(e) {
    for (; ne !== null; ) {
      var t = ne;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Io(4, t);
            } catch (T) {
              We(t, n, T);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (T) {
                We(t, l, T);
              }
            }
            var u = t.return;
            try {
              qi(t);
            } catch (T) {
              We(t, u, T);
            }
            break;
          case 5:
            var h = t.return;
            try {
              qi(t);
            } catch (T) {
              We(t, h, T);
            }
        }
      } catch (T) {
        We(t, t.return, T);
      }
      if (t === e) {
        ne = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, ne = k;
        break;
      }
      ne = t.return;
    }
  }
  var lm = Math.ceil, Lo = H.ReactCurrentDispatcher, Yi = H.ReactCurrentOwner, Mt = H.ReactCurrentBatchConfig, Ce = 0, Ze = null, Ve = null, st = 0, Nt = 0, Ar = kn(0), Qe = 0, Ns = null, qn = 0, Do = 0, Gi = 0, Ts = null, _t = null, Ji = 0, Pr = 1 / 0, dn = null, Oo = !1, Xi = null, bn = null, zo = !1, Rn = null, Ho = 0, bs = 0, Zi = null, Fo = -1, Wo = 0;
  function ft() {
    return (Ce & 6) !== 0 ? Be() : Fo !== -1 ? Fo : Fo = Be();
  }
  function An(e) {
    return (e.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && st !== 0 ? st & -st : Vh.transition !== null ? (Wo === 0 && (Wo = Cu()), Wo) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mu(e.type)), e);
  }
  function Ut(e, t, n, s) {
    if (50 < bs) throw bs = 0, Zi = null, Error(a(185));
    Zr(e, n, s), ((Ce & 2) === 0 || e !== Ze) && (e === Ze && ((Ce & 2) === 0 && (Do |= n), Qe === 4 && Pn(e, st)), xt(e, s), n === 1 && Ce === 0 && (t.mode & 1) === 0 && (Pr = Be() + 500, vo && Cn()));
  }
  function xt(e, t) {
    var n = e.callbackNode;
    Vp(e, t);
    var s = Gs(e, e === Ze ? st : 0);
    if (s === 0) n !== null && Su(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && Su(n), t === 1) e.tag === 0 ? Uh(Md.bind(null, e)) : _c(Md.bind(null, e)), Hh(function() {
        (Ce & 6) === 0 && Cn();
      }), n = null;
      else {
        switch (Eu(s)) {
          case 1:
            n = Pa;
            break;
          case 4:
            n = ku;
            break;
          case 16:
            n = qs;
            break;
          case 536870912:
            n = ju;
            break;
          default:
            n = qs;
        }
        n = Wd(n, $d.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function $d(e, t) {
    if (Fo = -1, Wo = 0, (Ce & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if ($r() && e.callbackNode !== n) return null;
    var s = Gs(e, e === Ze ? st : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Bo(e, s);
    else {
      t = s;
      var l = Ce;
      Ce |= 2;
      var u = Ld();
      (Ze !== e || st !== t) && (dn = null, Pr = Be() + 500, Kn(e, t));
      do
        try {
          dm();
          break;
        } catch (k) {
          Id(e, k);
        }
      while (!0);
      yi(), Lo.current = u, Ce = l, Ve !== null ? t = 0 : (Ze = null, st = 0, t = Qe);
    }
    if (t !== 0) {
      if (t === 2 && (l = $a(e), l !== 0 && (s = l, t = el(e, l))), t === 1) throw n = Ns, Kn(e, 0), Pn(e, s), xt(e, Be()), n;
      if (t === 6) Pn(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !um(l) && (t = Bo(e, s), t === 2 && (u = $a(e), u !== 0 && (s = u, t = el(e, u))), t === 1)) throw n = Ns, Kn(e, 0), Pn(e, s), xt(e, Be()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Yn(e, _t, dn);
            break;
          case 3:
            if (Pn(e, s), (s & 130023424) === s && (t = Ji + 500 - Be(), 10 < t)) {
              if (Gs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                ft(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ai(Yn.bind(null, e, _t, dn), t);
              break;
            }
            Yn(e, _t, dn);
            break;
          case 4:
            if (Pn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var h = 31 - Ot(s);
              u = 1 << h, h = t[h], h > l && (l = h), s &= ~u;
            }
            if (s = l, s = Be() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * lm(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = ai(Yn.bind(null, e, _t, dn), s);
              break;
            }
            Yn(e, _t, dn);
            break;
          case 5:
            Yn(e, _t, dn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return xt(e, Be()), e.callbackNode === n ? $d.bind(null, e) : null;
  }
  function el(e, t) {
    var n = Ts;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = Bo(e, t), e !== 2 && (t = _t, _t = n, t !== null && tl(t)), e;
  }
  function tl(e) {
    _t === null ? _t = e : _t.push.apply(_t, e);
  }
  function um(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], u = l.getSnapshot;
          l = l.value;
          try {
            if (!zt(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Pn(e, t) {
    for (t &= ~Gi, t &= ~Do, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ot(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Md(e) {
    if ((Ce & 6) !== 0) throw Error(a(327));
    $r();
    var t = Gs(e, 0);
    if ((t & 1) === 0) return xt(e, Be()), null;
    var n = Bo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = $a(e);
      s !== 0 && (t = s, n = el(e, s));
    }
    if (n === 1) throw n = Ns, Kn(e, 0), Pn(e, t), xt(e, Be()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yn(e, _t, dn), xt(e, Be()), null;
  }
  function nl(e, t) {
    var n = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      Ce = n, Ce === 0 && (Pr = Be() + 500, vo && Cn());
    }
  }
  function Qn(e) {
    Rn !== null && Rn.tag === 0 && (Ce & 6) === 0 && $r();
    var t = Ce;
    Ce |= 1;
    var n = Mt.transition, s = Pe;
    try {
      if (Mt.transition = null, Pe = 1, e) return e();
    } finally {
      Pe = s, Mt.transition = n, Ce = t, (Ce & 6) === 0 && Cn();
    }
  }
  function rl() {
    Nt = Ar.current, Le(Ar);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, zh(n)), Ve !== null) for (n = Ve.return; n !== null; ) {
      var s = n;
      switch (fi(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && ho();
          break;
        case 3:
          Tr(), Le(vt), Le(ot), Ci();
          break;
        case 5:
          ki(s);
          break;
        case 4:
          Tr();
          break;
        case 13:
          Le(He);
          break;
        case 19:
          Le(He);
          break;
        case 10:
          gi(s.type._context);
          break;
        case 22:
        case 23:
          rl();
      }
      n = n.return;
    }
    if (Ze = e, Ve = e = $n(e.current, null), st = Nt = t, Qe = 0, Ns = null, Gi = Do = qn = 0, _t = Ts = null, Bn !== null) {
      for (t = 0; t < Bn.length; t++) if (n = Bn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var h = u.next;
          u.next = l, s.next = h;
        }
        n.pending = s;
      }
      Bn = null;
    }
    return e;
  }
  function Id(e, t) {
    do {
      var n = Ve;
      try {
        if (yi(), Eo.current = Ro, No) {
          for (var s = Fe.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          No = !1;
        }
        if (Vn = 0, Xe = qe = Fe = null, ws = !1, Ss = 0, Yi.current = null, n === null || n.return === null) {
          Qe = 1, Ns = t, Ve = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, T = t;
          if (t = st, k.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var D = T, Q = k, K = Q.tag;
            if ((Q.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var V = Q.alternate;
              V ? (Q.updateQueue = V.updateQueue, Q.memoizedState = V.memoizedState, Q.lanes = V.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ee = ad(h);
            if (ee !== null) {
              ee.flags &= -257, id(ee, h, k, u, t), ee.mode & 1 && od(u, D, t), t = ee, T = D;
              var se = t.updateQueue;
              if (se === null) {
                var oe = /* @__PURE__ */ new Set();
                oe.add(T), t.updateQueue = oe;
              } else se.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                od(u, D, t), sl();
                break e;
              }
              T = Error(a(426));
            }
          } else if (Oe && k.mode & 1) {
            var Ue = ad(h);
            if (Ue !== null) {
              (Ue.flags & 65536) === 0 && (Ue.flags |= 256), id(Ue, h, k, u, t), mi(br(T, k));
              break e;
            }
          }
          u = T = br(T, k), Qe !== 4 && (Qe = 2), Ts === null ? Ts = [u] : Ts.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var M = rd(u, T, t);
                Rc(u, M);
                break e;
              case 1:
                k = T;
                var R = u.type, L = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (bn === null || !bn.has(L)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var Y = sd(u, k, t);
                  Rc(u, Y);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Od(n);
      } catch (ie) {
        t = ie, Ve === n && n !== null && (Ve = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ld() {
    var e = Lo.current;
    return Lo.current = Ro, e === null ? Ro : e;
  }
  function sl() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Ze === null || (qn & 268435455) === 0 && (Do & 268435455) === 0 || Pn(Ze, st);
  }
  function Bo(e, t) {
    var n = Ce;
    Ce |= 2;
    var s = Ld();
    (Ze !== e || st !== t) && (dn = null, Kn(e, t));
    do
      try {
        cm();
        break;
      } catch (l) {
        Id(e, l);
      }
    while (!0);
    if (yi(), Ce = n, Lo.current = s, Ve !== null) throw Error(a(261));
    return Ze = null, st = 0, Qe;
  }
  function cm() {
    for (; Ve !== null; ) Dd(Ve);
  }
  function dm() {
    for (; Ve !== null && !Lp(); ) Dd(Ve);
  }
  function Dd(e) {
    var t = Fd(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? Od(e) : Ve = t, Yi.current = null;
  }
  function Od(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = rm(n, t, Nt), n !== null) {
          Ve = n;
          return;
        }
      } else {
        if (n = sm(n, t), n !== null) {
          n.flags &= 32767, Ve = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Qe = 6, Ve = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ve = t;
        return;
      }
      Ve = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function Yn(e, t, n) {
    var s = Pe, l = Mt.transition;
    try {
      Mt.transition = null, Pe = 1, fm(e, t, n, s);
    } finally {
      Mt.transition = l, Pe = s;
    }
    return null;
  }
  function fm(e, t, n, s) {
    do
      $r();
    while (Rn !== null);
    if ((Ce & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (qp(e, u), e === Ze && (Ve = Ze = null, st = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || zo || (zo = !0, Wd(qs, function() {
      return $r(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = Mt.transition, Mt.transition = null;
      var h = Pe;
      Pe = 1;
      var k = Ce;
      Ce |= 4, Yi.current = null, am(e, n), Td(n, e), Ph(si), Zs = !!ri, si = ri = null, e.current = n, im(n), Dp(), Ce = k, Pe = h, Mt.transition = u;
    } else e.current = n;
    if (zo && (zo = !1, Rn = e, Ho = l), u = e.pendingLanes, u === 0 && (bn = null), Hp(n.stateNode), xt(e, Be()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Oo) throw Oo = !1, e = Xi, Xi = null, e;
    return (Ho & 1) !== 0 && e.tag !== 0 && $r(), u = e.pendingLanes, (u & 1) !== 0 ? e === Zi ? bs++ : (bs = 0, Zi = e) : bs = 0, Cn(), null;
  }
  function $r() {
    if (Rn !== null) {
      var e = Eu(Ho), t = Mt.transition, n = Pe;
      try {
        if (Mt.transition = null, Pe = 16 > e ? 16 : e, Rn === null) var s = !1;
        else {
          if (e = Rn, Rn = null, Ho = 0, (Ce & 6) !== 0) throw Error(a(331));
          var l = Ce;
          for (Ce |= 4, ne = e.current; ne !== null; ) {
            var u = ne, h = u.child;
            if ((ne.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var T = 0; T < k.length; T++) {
                  var D = k[T];
                  for (ne = D; ne !== null; ) {
                    var Q = ne;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Es(8, Q, u);
                    }
                    var K = Q.child;
                    if (K !== null) K.return = Q, ne = K;
                    else for (; ne !== null; ) {
                      Q = ne;
                      var V = Q.sibling, ee = Q.return;
                      if (kd(Q), Q === D) {
                        ne = null;
                        break;
                      }
                      if (V !== null) {
                        V.return = ee, ne = V;
                        break;
                      }
                      ne = ee;
                    }
                  }
                }
                var se = u.alternate;
                if (se !== null) {
                  var oe = se.child;
                  if (oe !== null) {
                    se.child = null;
                    do {
                      var Ue = oe.sibling;
                      oe.sibling = null, oe = Ue;
                    } while (oe !== null);
                  }
                }
                ne = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, ne = h;
            else e: for (; ne !== null; ) {
              if (u = ne, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Es(9, u, u.return);
              }
              var M = u.sibling;
              if (M !== null) {
                M.return = u.return, ne = M;
                break e;
              }
              ne = u.return;
            }
          }
          var R = e.current;
          for (ne = R; ne !== null; ) {
            h = ne;
            var L = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && L !== null) L.return = h, ne = L;
            else e: for (h = R; ne !== null; ) {
              if (k = ne, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Io(9, k);
                }
              } catch (ie) {
                We(k, k.return, ie);
              }
              if (k === h) {
                ne = null;
                break e;
              }
              var Y = k.sibling;
              if (Y !== null) {
                Y.return = k.return, ne = Y;
                break e;
              }
              ne = k.return;
            }
          }
          if (Ce = l, Cn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(Qs, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Pe = n, Mt.transition = t;
      }
    }
    return !1;
  }
  function zd(e, t, n) {
    t = br(n, t), t = rd(e, t, 1), e = Nn(e, t, 1), t = ft(), e !== null && (Zr(e, 1, t), xt(e, t));
  }
  function We(e, t, n) {
    if (e.tag === 3) zd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        zd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (bn === null || !bn.has(s))) {
          e = br(n, e), e = sd(t, e, 1), t = Nn(t, e, 1), e = ft(), t !== null && (Zr(t, 1, e), xt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function pm(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & n, Ze === e && (st & n) === n && (Qe === 4 || Qe === 3 && (st & 130023424) === st && 500 > Be() - Ji ? Kn(e, 0) : Gi |= n), xt(e, t);
  }
  function Hd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ys, Ys <<= 1, (Ys & 130023424) === 0 && (Ys = 4194304)));
    var n = ft();
    e = ln(e, t), e !== null && (Zr(e, t, n), xt(e, n));
  }
  function hm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hd(e, n);
  }
  function mm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    s !== null && s.delete(t), Hd(e, n);
  }
  var Fd;
  Fd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || vt.current) gt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return gt = !1, nm(e, t, n);
      gt = (e.flags & 131072) !== 0;
    }
    else gt = !1, Oe && (t.flags & 1048576) !== 0 && xc(t, go, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        $o(e, t), e = t.pendingProps;
        var l = wr(t, ot.current);
        Nr(t, n), l = Ti(null, t, s, e, l, n);
        var u = bi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(s) ? (u = !0, mo(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, wi(t), l.updater = Ao, t.stateNode = l, l._reactInternals = t, Ii(t, s, e, n), t = zi(null, t, s, !0, u, n)) : (t.tag = 0, Oe && u && di(t), dt(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch ($o(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = ym(s), e = Ft(s, e), l) {
            case 0:
              t = Oi(null, t, s, e, n);
              break e;
            case 1:
              t = pd(null, t, s, e, n);
              break e;
            case 11:
              t = ld(null, t, s, e, n);
              break e;
            case 14:
              t = ud(null, t, s, Ft(s.type, e), n);
              break e;
          }
          throw Error(a(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Ft(s, l), Oi(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Ft(s, l), pd(e, t, s, l, n);
      case 3:
        e: {
          if (hd(t), e === null) throw Error(a(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, bc(e, t), jo(t, s, null, n);
          var h = t.memoizedState;
          if (s = h.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = br(Error(a(423)), t), t = md(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = br(Error(a(424)), t), t = md(e, t, s, n, l);
            break e;
          } else for (Et = Sn(t.stateNode.containerInfo.firstChild), Ct = t, Oe = !0, Ht = null, n = Nc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (jr(), s === l) {
              t = cn(e, t, n);
              break e;
            }
            dt(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Pc(t), e === null && hi(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, oi(s, l) ? h = null : u !== null && oi(s, u) && (t.flags |= 32), fd(e, t), dt(e, t, h, n), t.child;
      case 6:
        return e === null && hi(t), null;
      case 13:
        return vd(e, t, n);
      case 4:
        return Si(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Cr(t, null, s, n) : dt(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Ft(s, l), ld(e, t, s, l, n);
      case 7:
        return dt(e, t, t.pendingProps, n), t.child;
      case 8:
        return dt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return dt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, Me(wo, s._currentValue), s._currentValue = h, u !== null) if (zt(u.value, h)) {
            if (u.children === l.children && !vt.current) {
              t = cn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var T = k.firstContext; T !== null; ) {
                if (T.context === s) {
                  if (u.tag === 1) {
                    T = un(-1, n & -n), T.tag = 2;
                    var D = u.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var Q = D.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), D.pending = T;
                    }
                  }
                  u.lanes |= n, T = u.alternate, T !== null && (T.lanes |= n), _i(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                T = T.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(a(341));
              h.lanes |= n, k = h.alternate, k !== null && (k.lanes |= n), _i(h, n, t), h = u.sibling;
            } else h = u.child;
            if (h !== null) h.return = u;
            else for (h = u; h !== null; ) {
              if (h === t) {
                h = null;
                break;
              }
              if (u = h.sibling, u !== null) {
                u.return = h.return, h = u;
                break;
              }
              h = h.return;
            }
            u = h;
          }
          dt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, s = t.pendingProps.children, Nr(t, n), l = Pt(l), s = s(l), t.flags |= 1, dt(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = Ft(s, t.pendingProps), l = Ft(s.type, l), ud(e, t, s, l, n);
      case 15:
        return cd(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Ft(s, l), $o(e, t), t.tag = 1, yt(s) ? (e = !0, mo(t)) : e = !1, Nr(t, n), td(t, s, l), Ii(t, s, l, n), zi(null, t, s, !0, e, n);
      case 19:
        return gd(e, t, n);
      case 22:
        return dd(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Wd(e, t) {
    return wu(e, t);
  }
  function vm(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, n, s) {
    return new vm(e, t, n, s);
  }
  function ol(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ym(e) {
    if (typeof e == "function") return ol(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ge) return 11;
      if (e === te) return 14;
    }
    return 2;
  }
  function $n(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Uo(e, t, n, s, l, u) {
    var h = 2;
    if (s = e, typeof e == "function") ol(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case J:
        return Gn(n.children, l, u, t);
      case U:
        h = 8, l |= 8;
        break;
      case G:
        return e = It(12, n, t, l | 2), e.elementType = G, e.lanes = u, e;
      case pe:
        return e = It(13, n, t, l), e.elementType = pe, e.lanes = u, e;
      case _e:
        return e = It(19, n, t, l), e.elementType = _e, e.lanes = u, e;
      case W:
        return Vo(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ye:
            h = 10;
            break e;
          case de:
            h = 9;
            break e;
          case ge:
            h = 11;
            break e;
          case te:
            h = 14;
            break e;
          case Ee:
            h = 16, s = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = It(h, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function Gn(e, t, n, s) {
    return e = It(7, e, s, t), e.lanes = n, e;
  }
  function Vo(e, t, n, s) {
    return e = It(22, e, s, t), e.elementType = W, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function al(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e;
  }
  function il(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function gm(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ma(0), this.expirationTimes = Ma(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ma(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ll(e, t, n, s, l, u, h, k, T) {
    return e = new gm(e, t, n, k, T), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = It(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wi(u), e;
  }
  function _m(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: I, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Bd(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (On(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (yt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (yt(n)) return yc(e, n, t);
    }
    return t;
  }
  function Ud(e, t, n, s, l, u, h, k, T) {
    return e = ll(n, s, !0, e, l, u, h, k, T), e.context = Bd(null), n = e.current, s = ft(), l = An(n), u = un(s, l), u.callback = t ?? null, Nn(n, u, l), e.current.lanes = l, Zr(e, l, s), xt(e, s), e;
  }
  function qo(e, t, n, s) {
    var l = t.current, u = ft(), h = An(l);
    return n = Bd(n), t.context === null ? t.context = n : t.pendingContext = n, t = un(u, h), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Nn(l, t, h), e !== null && (Ut(e, l, h, u), ko(e, l, h)), h;
  }
  function Qo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Vd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ul(e, t) {
    Vd(e, t), (e = e.alternate) && Vd(e, t);
  }
  function xm() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function cl(e) {
    this._internalRoot = e;
  }
  Ko.prototype.render = cl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    qo(e, t, null, null);
  }, Ko.prototype.unmount = cl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Qn(function() {
        qo(null, e, null, null);
      }), t[rn] = null;
    }
  };
  function Ko(e) {
    this._internalRoot = e;
  }
  Ko.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = bu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < _n.length && t !== 0 && t < _n[n].priority; n++) ;
      _n.splice(n, 0, e), n === 0 && Pu(e);
    }
  };
  function dl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Yo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Qd() {
  }
  function wm(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var D = Qo(h);
          u.call(D);
        };
      }
      var h = Ud(t, s, e, 0, null, !1, !1, "", Qd);
      return e._reactRootContainer = h, e[rn] = h.current, ps(e.nodeType === 8 ? e.parentNode : e), Qn(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var D = Qo(T);
        k.call(D);
      };
    }
    var T = ll(e, 0, !1, null, null, !1, !1, "", Qd);
    return e._reactRootContainer = T, e[rn] = T.current, ps(e.nodeType === 8 ? e.parentNode : e), Qn(function() {
      qo(t, T, n, s);
    }), T;
  }
  function Go(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var T = Qo(h);
          k.call(T);
        };
      }
      qo(t, h, e, l);
    } else h = wm(n, t, e, l, s);
    return Qo(h);
  }
  Nu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xr(t.pendingLanes);
          n !== 0 && (Ia(t, n | 1), xt(t, Be()), (Ce & 6) === 0 && (Pr = Be() + 500, Cn()));
        }
        break;
      case 13:
        Qn(function() {
          var s = ln(e, 1);
          if (s !== null) {
            var l = ft();
            Ut(s, e, 1, l);
          }
        }), ul(e, 1);
    }
  }, La = function(e) {
    if (e.tag === 13) {
      var t = ln(e, 134217728);
      if (t !== null) {
        var n = ft();
        Ut(t, e, 134217728, n);
      }
      ul(e, 134217728);
    }
  }, Tu = function(e) {
    if (e.tag === 13) {
      var t = An(e), n = ln(e, t);
      if (n !== null) {
        var s = ft();
        Ut(n, e, t, s);
      }
      ul(e, t);
    }
  }, bu = function() {
    return Pe;
  }, Ru = function(e, t) {
    var n = Pe;
    try {
      return Pe = e, t();
    } finally {
      Pe = n;
    }
  }, Ta = function(e, t, n) {
    switch (t) {
      case "input":
        if (xa(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = po(s);
              if (!l) throw Error(a(90));
              De(s), xa(s, l);
            }
          }
        }
        break;
      case "textarea":
        ou(e, n);
        break;
      case "select":
        t = n.value, t != null && ur(e, !!n.multiple, t, !1);
    }
  }, hu = nl, mu = Qn;
  var Sm = { usingClientEntryPoint: !1, Events: [vs, _r, po, fu, pu, nl] }, Rs = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, km = { bundleType: Rs.bundleType, version: Rs.version, rendererPackageName: Rs.rendererPackageName, rendererConfig: Rs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = _u(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Rs.findFiberByHostInstance || xm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jo.isDisabled && Jo.supportsFiber) try {
      Qs = Jo.inject(km), Gt = Jo;
    } catch {
    }
  }
  return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm, wt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!dl(t)) throw Error(a(200));
    return _m(e, t, null, n);
  }, wt.createRoot = function(e, t) {
    if (!dl(e)) throw Error(a(299));
    var n = !1, s = "", l = qd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ll(e, 1, !1, null, null, n, !1, s, l), e[rn] = t.current, ps(e.nodeType === 8 ? e.parentNode : e), new cl(t);
  }, wt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = _u(t), e = e === null ? null : e.stateNode, e;
  }, wt.flushSync = function(e) {
    return Qn(e);
  }, wt.hydrate = function(e, t, n) {
    if (!Yo(t)) throw Error(a(200));
    return Go(null, e, t, !0, n);
  }, wt.hydrateRoot = function(e, t, n) {
    if (!dl(e)) throw Error(a(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", h = qd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = Ud(t, null, e, 1, n ?? null, l, !1, u, h), e[rn] = t.current, ps(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Ko(t);
  }, wt.render = function(e, t, n) {
    if (!Yo(t)) throw Error(a(200));
    return Go(null, e, t, !1, n);
  }, wt.unmountComponentAtNode = function(e) {
    if (!Yo(e)) throw Error(a(40));
    return e._reactRootContainer ? (Qn(function() {
      Go(null, null, e, !1, function() {
        e._reactRootContainer = null, e[rn] = null;
      });
    }), !0) : !1;
  }, wt.unstable_batchedUpdates = nl, wt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Yo(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return Go(e, t, n, !1, s);
  }, wt.version = "18.3.1-next-f1338f8080-20240426", wt;
}
var tf;
function Pf() {
  if (tf) return hl.exports;
  tf = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), hl.exports = Pm(), hl.exports;
}
var nf;
function $m() {
  if (nf) return Xo;
  nf = 1;
  var r = Pf();
  return Xo.createRoot = r.createRoot, Xo.hydrateRoot = r.hydrateRoot, Xo;
}
var Mm = $m();
const Im = /* @__PURE__ */ Rf(Mm);
/**
 * react-router v7.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var rf = "popstate";
function sf(r) {
  return typeof r == "object" && r != null && "pathname" in r && "search" in r && "hash" in r && "state" in r && "key" in r;
}
function Lm(r = {}) {
  function i(d, f) {
    let {
      pathname: p = "/",
      search: v = "",
      hash: g = ""
    } = ar(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Nl(
      "",
      { pathname: p, search: v, hash: g },
      // state defaults to `null` because `window.history.state` does
      f.state && f.state.usr || null,
      f.state && f.state.key || "default"
    );
  }
  function a(d, f) {
    let p = d.document.querySelector("base"), v = "";
    if (p && p.getAttribute("href")) {
      let g = d.location.href, w = g.indexOf("#");
      v = w === -1 ? g : g.slice(0, w);
    }
    return v + "#" + (typeof f == "string" ? f : zs(f));
  }
  function c(d, f) {
    Dt(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return Om(
    i,
    a,
    c,
    r
  );
}
function ze(r, i) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(i);
}
function Dt(r, i) {
  if (!r) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {
    }
  }
}
function Dm() {
  return Math.random().toString(36).substring(2, 10);
}
function of(r, i) {
  return {
    usr: r.state,
    key: r.key,
    idx: i,
    masked: r.mask ? {
      pathname: r.pathname,
      search: r.search,
      hash: r.hash
    } : void 0
  };
}
function Nl(r, i, a = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof i == "string" ? ar(i) : i,
    state: a,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: i && i.key || c || Dm(),
    mask: d
  };
}
function zs({
  pathname: r = "/",
  search: i = "",
  hash: a = ""
}) {
  return i && i !== "?" && (r += i.charAt(0) === "?" ? i : "?" + i), a && a !== "#" && (r += a.charAt(0) === "#" ? a : "#" + a), r;
}
function ar(r) {
  let i = {};
  if (r) {
    let a = r.indexOf("#");
    a >= 0 && (i.hash = r.substring(a), r = r.substring(0, a));
    let c = r.indexOf("?");
    c >= 0 && (i.search = r.substring(c), r = r.substring(0, c)), r && (i.pathname = r);
  }
  return i;
}
function Om(r, i, a, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, p = d.history, v = "POP", g = null, w = y();
  w == null && (w = 0, p.replaceState({ ...p.state, idx: w }, ""));
  function y() {
    return (p.state || { idx: null }).idx;
  }
  function x() {
    v = "POP";
    let N = y(), A = N == null ? null : N - w;
    w = N, g && g({ action: v, location: C.location, delta: A });
  }
  function S(N, A) {
    v = "PUSH";
    let F = sf(N) ? N : Nl(C.location, N, A);
    a && a(F, N), w = y() + 1;
    let P = of(F, w), H = C.createHref(F.mask || F);
    try {
      p.pushState(P, "", H);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError")
        throw B;
      d.location.assign(H);
    }
    f && g && g({ action: v, location: C.location, delta: 1 });
  }
  function j(N, A) {
    v = "REPLACE";
    let F = sf(N) ? N : Nl(C.location, N, A);
    a && a(F, N), w = y();
    let P = of(F, w), H = C.createHref(F.mask || F);
    p.replaceState(P, "", H), f && g && g({ action: v, location: C.location, delta: 0 });
  }
  function b(N) {
    return zm(d, N);
  }
  let C = {
    get action() {
      return v;
    },
    get location() {
      return r(d, p);
    },
    listen(N) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(rf, x), g = N, () => {
        d.removeEventListener(rf, x), g = null;
      };
    },
    createHref(N) {
      return i(d, N);
    },
    createURL: b,
    encodeLocation(N) {
      let A = b(N);
      return {
        pathname: A.pathname,
        search: A.search,
        hash: A.hash
      };
    },
    push: S,
    replace: j,
    go(N) {
      return p.go(N);
    }
  };
  return C;
}
function zm(r, i, a = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), ze(c, "No window.location.(origin|href) available to create URL");
  let d = typeof i == "string" ? i : zs(i);
  return d = d.replace(/ $/, "%20"), !a && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function $f(r, i, a = "/") {
  return Hm(r, i, a, !1);
}
function Hm(r, i, a, c, d) {
  let f = typeof i == "string" ? ar(i) : i, p = hn(f.pathname || "/", a);
  if (p == null)
    return null;
  let v = Fm(r), g = null, w = Zm(p);
  for (let y = 0; g == null && y < v.length; ++y)
    g = Jm(
      v[y],
      w,
      c
    );
  return g;
}
function Fm(r) {
  let i = Mf(r);
  return Wm(i), i;
}
function Mf(r, i = [], a = [], c = "", d = !1) {
  let f = (p, v, g = d, w) => {
    let y = {
      relativePath: w === void 0 ? p.path || "" : w,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: v,
      route: p
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(c) && g)
        return;
      ze(
        y.relativePath.startsWith(c),
        `Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), y.relativePath = y.relativePath.slice(c.length);
    }
    let x = qt([c, y.relativePath]), S = a.concat(y);
    p.children && p.children.length > 0 && (ze(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), Mf(
      p.children,
      i,
      S,
      x,
      g
    )), !(p.path == null && !p.index) && i.push({
      path: x,
      score: Ym(x, p.index),
      routesMeta: S
    });
  };
  return r.forEach((p, v) => {
    var g;
    if (p.path === "" || !((g = p.path) != null && g.includes("?")))
      f(p, v);
    else
      for (let w of If(p.path))
        f(p, v, !0, w);
  }), i;
}
function If(r) {
  let i = r.split("/");
  if (i.length === 0) return [];
  let [a, ...c] = i, d = a.endsWith("?"), f = a.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let p = If(c.join("/")), v = [];
  return v.push(
    ...p.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && v.push(...p), v.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function Wm(r) {
  r.sort(
    (i, a) => i.score !== a.score ? a.score - i.score : Gm(
      i.routesMeta.map((c) => c.childrenIndex),
      a.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Bm = /^:[\w-]+$/, Um = 3, Vm = 2, qm = 1, Qm = 10, Km = -2, af = (r) => r === "*";
function Ym(r, i) {
  let a = r.split("/"), c = a.length;
  return a.some(af) && (c += Km), i && (c += Vm), a.filter((d) => !af(d)).reduce(
    (d, f) => d + (Bm.test(f) ? Um : f === "" ? qm : Qm),
    c
  );
}
function Gm(r, i) {
  return r.length === i.length && r.slice(0, -1).every((c, d) => c === i[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    r[r.length - 1] - i[i.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Jm(r, i, a = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", p = [];
  for (let v = 0; v < c.length; ++v) {
    let g = c[v], w = v === c.length - 1, y = f === "/" ? i : i.slice(f.length) || "/", x = ia(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: w },
      y
    ), S = g.route;
    if (!x && w && a && !c[c.length - 1].route.index && (x = ia(
      {
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: !1
      },
      y
    )), !x)
      return null;
    Object.assign(d, x.params), p.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: qt([f, x.pathname]),
      pathnameBase: rv(
        qt([f, x.pathnameBase])
      ),
      route: S
    }), x.pathnameBase !== "/" && (f = qt([f, x.pathnameBase]));
  }
  return p;
}
function ia(r, i) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [a, c] = Xm(
    r.path,
    r.caseSensitive,
    r.end
  ), d = i.match(a);
  if (!d) return null;
  let f = d[0], p = f.replace(/(.)\/+$/, "$1"), v = d.slice(1);
  return {
    params: c.reduce(
      (w, { paramName: y, isOptional: x }, S) => {
        if (y === "*") {
          let b = v[S] || "";
          p = f.slice(0, f.length - b.length).replace(/(.)\/+$/, "$1");
        }
        const j = v[S];
        return x && !j ? w[y] = void 0 : w[y] = (j || "").replace(/%2F/g, "/"), w;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: r
  };
}
function Xm(r, i = !1, a = !0) {
  Dt(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  );
  let c = [], d = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, v, g, w, y) => {
      if (c.push({ paramName: v, isOptional: g != null }), g) {
        let x = y.charAt(w + p.length);
        return x && x !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return r.endsWith("*") ? (c.push({ paramName: "*" }), d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? d += "\\/*$" : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, i ? void 0 : "i"), c];
}
function Zm(r) {
  try {
    return r.split("/").map((i) => decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
  } catch (i) {
    return Dt(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
    ), r;
  }
}
function hn(r, i) {
  if (i === "/") return r;
  if (!r.toLowerCase().startsWith(i.toLowerCase()))
    return null;
  let a = i.endsWith("/") ? i.length - 1 : i.length, c = r.charAt(a);
  return c && c !== "/" ? null : r.slice(a) || "/";
}
var ev = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function tv(r, i = "/") {
  let {
    pathname: a,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? ar(r) : r, f;
  return a ? (a = Lf(a), a.startsWith("/") ? f = lf(a.substring(1), "/") : f = lf(a, i)) : f = i, {
    pathname: f,
    search: sv(c),
    hash: ov(d)
  };
}
function lf(r, i) {
  let a = la(i).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? a.length > 1 && a.pop() : d !== "." && a.push(d);
  }), a.length > 1 ? a.join("/") : "/";
}
function yl(r, i, a, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function nv(r) {
  return r.filter(
    (i, a) => a === 0 || i.route.path && i.route.path.length > 0
  );
}
function Ol(r) {
  let i = nv(r);
  return i.map(
    (a, c) => c === i.length - 1 ? a.pathname : a.pathnameBase
  );
}
function ha(r, i, a, c = !1) {
  let d;
  typeof r == "string" ? d = ar(r) : (d = { ...r }, ze(
    !d.pathname || !d.pathname.includes("?"),
    yl("?", "pathname", "search", d)
  ), ze(
    !d.pathname || !d.pathname.includes("#"),
    yl("#", "pathname", "hash", d)
  ), ze(
    !d.search || !d.search.includes("#"),
    yl("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", p = f ? "/" : d.pathname, v;
  if (p == null)
    v = a;
  else {
    let x = i.length - 1;
    if (!c && p.startsWith("..")) {
      let S = p.split("/");
      for (; S[0] === ".."; )
        S.shift(), x -= 1;
      d.pathname = S.join("/");
    }
    v = x >= 0 ? i[x] : "/";
  }
  let g = tv(d, v), w = p && p !== "/" && p.endsWith("/"), y = (f || p === ".") && a.endsWith("/");
  return !g.pathname.endsWith("/") && (w || y) && (g.pathname += "/"), g;
}
var Lf = (r) => r.replace(/\/\/+/g, "/"), qt = (r) => Lf(r.join("/")), la = (r) => r.replace(/\/+$/, ""), rv = (r) => la(r).replace(/^\/*/, "/"), sv = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, ov = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, av = class {
  constructor(r, i, a, c = !1) {
    this.status = r, this.statusText = i || "", this.internal = c, a instanceof Error ? (this.data = a.toString(), this.error = a) : this.data = a;
  }
};
function iv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function lv(r) {
  let i = r.map((a) => a.route.path).filter(Boolean);
  return qt(i) || "/";
}
var Df = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Of(r, i) {
  let a = r;
  if (typeof a != "string" || !ev.test(a))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: a
    };
  let c = a, d = !1;
  if (Df)
    try {
      let f = new URL(window.location.href), p = a.startsWith("//") ? new URL(f.protocol + a) : new URL(a), v = hn(p.pathname, i);
      p.origin === f.origin && v != null ? a = v + p.search + p.hash : d = !0;
    } catch {
      Dt(
        !1,
        `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: c,
    isExternal: d,
    to: a
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var zf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  zf
);
var uv = [
  "GET",
  ...zf
];
new Set(uv);
var Or = m.createContext(null);
Or.displayName = "DataRouter";
var ma = m.createContext(null);
ma.displayName = "DataRouterState";
var Hf = m.createContext(!1);
function cv() {
  return m.useContext(Hf);
}
var Ff = m.createContext({
  isTransitioning: !1
});
Ff.displayName = "ViewTransition";
var dv = m.createContext(
  /* @__PURE__ */ new Map()
);
dv.displayName = "Fetchers";
var fv = m.createContext(null);
fv.displayName = "Await";
var bt = m.createContext(
  null
);
bt.displayName = "Navigation";
var Hs = m.createContext(
  null
);
Hs.displayName = "Location";
var nn = m.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
nn.displayName = "Route";
var zl = m.createContext(null);
zl.displayName = "RouteError";
var Wf = "REACT_ROUTER_ERROR", pv = "REDIRECT", hv = "ROUTE_ERROR_RESPONSE";
function mv(r) {
  if (r.startsWith(`${Wf}:${pv}:{`))
    try {
      let i = JSON.parse(r.slice(28));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean")
        return i;
    } catch {
    }
}
function vv(r) {
  if (r.startsWith(
    `${Wf}:${hv}:{`
  ))
    try {
      let i = JSON.parse(r.slice(40));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string")
        return new av(
          i.status,
          i.statusText,
          i.data
        );
    } catch {
    }
}
function yv(r, { relative: i } = {}) {
  ze(
    ir(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: c } = m.useContext(bt), { hash: d, pathname: f, search: p } = Fs(r, { relative: i }), v = f;
  return a !== "/" && (v = f === "/" ? a : qt([a, f])), c.createHref({ pathname: v, search: p, hash: d });
}
function ir() {
  return m.useContext(Hs) != null;
}
function kt() {
  return ze(
    ir(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), m.useContext(Hs).location;
}
var Bf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Uf(r) {
  m.useContext(bt).static || m.useLayoutEffect(r);
}
function Hl() {
  let { isDataRoute: r } = m.useContext(nn);
  return r ? Rv() : gv();
}
function gv() {
  ze(
    ir(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = m.useContext(Or), { basename: i, navigator: a } = m.useContext(bt), { matches: c } = m.useContext(nn), { pathname: d } = kt(), f = JSON.stringify(Ol(c)), p = m.useRef(!1);
  return Uf(() => {
    p.current = !0;
  }), m.useCallback(
    (g, w = {}) => {
      if (Dt(p.current, Bf), !p.current) return;
      if (typeof g == "number") {
        a.go(g);
        return;
      }
      let y = ha(
        g,
        JSON.parse(f),
        d,
        w.relative === "path"
      );
      r == null && i !== "/" && (y.pathname = y.pathname === "/" ? i : qt([i, y.pathname])), (w.replace ? a.replace : a.push)(
        y,
        w.state,
        w
      );
    },
    [
      i,
      a,
      f,
      d,
      r
    ]
  );
}
m.createContext(null);
function Fs(r, { relative: i } = {}) {
  let { matches: a } = m.useContext(nn), { pathname: c } = kt(), d = JSON.stringify(Ol(a));
  return m.useMemo(
    () => ha(
      r,
      JSON.parse(d),
      c,
      i === "path"
    ),
    [r, d, c, i]
  );
}
function _v(r, i) {
  return Vf(r, i);
}
function Vf(r, i, a) {
  var N;
  ze(
    ir(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = m.useContext(bt), { matches: d } = m.useContext(nn), f = d[d.length - 1], p = f ? f.params : {}, v = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", w = f && f.route;
  {
    let A = w && w.path || "";
    Qf(
      v,
      !w || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`
    );
  }
  let y = kt(), x;
  if (i) {
    let A = typeof i == "string" ? ar(i) : i;
    ze(
      g === "/" || ((N = A.pathname) == null ? void 0 : N.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ), x = A;
  } else
    x = y;
  let S = x.pathname || "/", j = S;
  if (g !== "/") {
    let A = g.replace(/^\//, "").split("/");
    j = "/" + S.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let b = a && a.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    a.state.matches.map(
      (A) => Object.assign(A, {
        route: a.manifest[A.route.id] || A.route
      })
    )
  ) : $f(r, { pathname: j });
  Dt(
    w || b != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `
  ), Dt(
    b == null || b[b.length - 1].route.element !== void 0 || b[b.length - 1].route.Component !== void 0 || b[b.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let C = jv(
    b && b.map(
      (A) => Object.assign({}, A, {
        params: Object.assign({}, p, A.params),
        pathname: qt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            A.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : A.pathname
        ]),
        pathnameBase: A.pathnameBase === "/" ? g : qt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            A.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : A.pathnameBase
        ])
      })
    ),
    d,
    a
  );
  return i && C ? /* @__PURE__ */ m.createElement(
    Hs.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...x
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    C
  ) : C;
}
function xv() {
  let r = bv(), i = iv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), a = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), p = /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ m.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ m.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ m.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ m.createElement("h3", { style: { fontStyle: "italic" } }, i), a ? /* @__PURE__ */ m.createElement("pre", { style: d }, a) : null, p);
}
var wv = /* @__PURE__ */ m.createElement(xv, null), qf = class extends m.Component {
  constructor(r) {
    super(r), this.state = {
      location: r.location,
      revalidation: r.revalidation,
      error: r.error
    };
  }
  static getDerivedStateFromError(r) {
    return { error: r };
  }
  static getDerivedStateFromProps(r, i) {
    return i.location !== r.location || i.revalidation !== "idle" && r.revalidation === "idle" ? {
      error: r.error,
      location: r.location,
      revalidation: r.revalidation
    } : {
      error: r.error !== void 0 ? r.error : i.error,
      location: i.location,
      revalidation: r.revalidation || i.revalidation
    };
  }
  componentDidCatch(r, i) {
    this.props.onError ? this.props.onError(r, i) : console.error(
      "React Router caught the following error during render",
      r
    );
  }
  render() {
    let r = this.state.error;
    if (this.context && typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
      const a = vv(r.digest);
      a && (r = a);
    }
    let i = r !== void 0 ? /* @__PURE__ */ m.createElement(nn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ m.createElement(
      zl.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ m.createElement(Sv, { error: r }, i) : i;
  }
};
qf.contextType = Hf;
var gl = /* @__PURE__ */ new WeakMap();
function Sv({
  children: r,
  error: i
}) {
  let { basename: a } = m.useContext(bt);
  if (typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
    let c = mv(i.digest);
    if (c) {
      let d = gl.get(i);
      if (d) throw d;
      let f = Of(c.location, a);
      if (Df && !gl.get(i))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw gl.set(i, p), p;
        }
      return /* @__PURE__ */ m.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${f.absoluteURL || f.to}`
        }
      );
    }
  }
  return r;
}
function kv({ routeContext: r, match: i, children: a }) {
  let c = m.useContext(Or);
  return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id), /* @__PURE__ */ m.createElement(nn.Provider, { value: r }, a);
}
function jv(r, i = [], a) {
  let c = a == null ? void 0 : a.state;
  if (r == null) {
    if (!c)
      return null;
    if (c.errors)
      r = c.matches;
    else if (i.length === 0 && !c.initialized && c.matches.length > 0)
      r = c.matches;
    else
      return null;
  }
  let d = r, f = c == null ? void 0 : c.errors;
  if (f != null) {
    let y = d.findIndex(
      (x) => x.route.id && (f == null ? void 0 : f[x.route.id]) !== void 0
    );
    ze(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, y + 1)
    );
  }
  let p = !1, v = -1;
  if (a && c) {
    p = c.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let x = d[y];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (v = y), x.route.id) {
        let { loaderData: S, errors: j } = c, b = x.route.loader && !S.hasOwnProperty(x.route.id) && (!j || j[x.route.id] === void 0);
        if (x.route.lazy || b) {
          a.isStatic && (p = !0), v >= 0 ? d = d.slice(0, v + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let g = a == null ? void 0 : a.onError, w = c && g ? (y, x) => {
    var S, j;
    g(y, {
      location: c.location,
      params: ((j = (S = c.matches) == null ? void 0 : S[0]) == null ? void 0 : j.params) ?? {},
      pattern: lv(c.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (y, x, S) => {
      let j, b = !1, C = null, N = null;
      c && (j = f && x.route.id ? f[x.route.id] : void 0, C = x.route.errorElement || wv, p && (v < 0 && S === 0 ? (Qf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), b = !0, N = null) : v === S && (b = !0, N = x.route.hydrateFallbackElement || null)));
      let A = i.concat(d.slice(0, S + 1)), F = () => {
        let P;
        return j ? P = C : b ? P = N : x.route.Component ? P = /* @__PURE__ */ m.createElement(x.route.Component, null) : x.route.element ? P = x.route.element : P = y, /* @__PURE__ */ m.createElement(
          kv,
          {
            match: x,
            routeContext: {
              outlet: y,
              matches: A,
              isDataRoute: c != null
            },
            children: P
          }
        );
      };
      return c && (x.route.ErrorBoundary || x.route.errorElement || S === 0) ? /* @__PURE__ */ m.createElement(
        qf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: C,
          error: j,
          children: F(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: w
        }
      ) : F();
    },
    null
  );
}
function Fl(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cv(r) {
  let i = m.useContext(Or);
  return ze(i, Fl(r)), i;
}
function Ev(r) {
  let i = m.useContext(ma);
  return ze(i, Fl(r)), i;
}
function Nv(r) {
  let i = m.useContext(nn);
  return ze(i, Fl(r)), i;
}
function Wl(r) {
  let i = Nv(r), a = i.matches[i.matches.length - 1];
  return ze(
    a.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), a.route.id;
}
function Tv() {
  return Wl(
    "useRouteId"
    /* UseRouteId */
  );
}
function bv() {
  var c;
  let r = m.useContext(zl), i = Ev(
    "useRouteError"
    /* UseRouteError */
  ), a = Wl(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = i.errors) == null ? void 0 : c[a];
}
function Rv() {
  let { router: r } = Cv(
    "useNavigate"
    /* UseNavigateStable */
  ), i = Wl(
    "useNavigate"
    /* UseNavigateStable */
  ), a = m.useRef(!1);
  return Uf(() => {
    a.current = !0;
  }), m.useCallback(
    async (d, f = {}) => {
      Dt(a.current, Bf), a.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: i, ...f }));
    },
    [r, i]
  );
}
var uf = {};
function Qf(r, i, a) {
  !i && !uf[r] && (uf[r] = !0, Dt(!1, a));
}
m.memo(Av);
function Av({
  routes: r,
  manifest: i,
  future: a,
  state: c,
  isStatic: d,
  onError: f
}) {
  return Vf(r, void 0, {
    manifest: i,
    state: c,
    isStatic: d,
    onError: f
  });
}
function In({
  to: r,
  replace: i,
  state: a,
  relative: c
}) {
  ze(
    ir(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = m.useContext(bt);
  Dt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = m.useContext(nn), { pathname: p } = kt(), v = Hl(), g = ha(
    r,
    Ol(f),
    p,
    c === "path"
  ), w = JSON.stringify(g);
  return m.useEffect(() => {
    v(JSON.parse(w), { replace: i, state: a, relative: c });
  }, [v, w, c, i, a]), null;
}
function Ye(r) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Pv({
  basename: r = "/",
  children: i = null,
  location: a,
  navigationType: c = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: p
}) {
  ze(
    !ir(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let v = r.replace(/^\/*/, "/"), g = m.useMemo(
    () => ({
      basename: v,
      navigator: d,
      static: f,
      useTransitions: p,
      future: {}
    }),
    [v, d, f, p]
  );
  typeof a == "string" && (a = ar(a));
  let {
    pathname: w = "/",
    search: y = "",
    hash: x = "",
    state: S = null,
    key: j = "default",
    mask: b
  } = a, C = m.useMemo(() => {
    let N = hn(w, v);
    return N == null ? null : {
      location: {
        pathname: N,
        search: y,
        hash: x,
        state: S,
        key: j,
        mask: b
      },
      navigationType: c
    };
  }, [v, w, y, x, S, j, c, b]);
  return Dt(
    C != null,
    `<Router basename="${v}"> is not able to match the URL "${w}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ m.createElement(bt.Provider, { value: g }, /* @__PURE__ */ m.createElement(Hs.Provider, { children: i, value: C }));
}
function $v({
  children: r,
  location: i
}) {
  return _v(Tl(r), i);
}
function Tl(r, i = []) {
  let a = [];
  return m.Children.forEach(r, (c, d) => {
    if (!m.isValidElement(c))
      return;
    let f = [...i, d];
    if (c.type === m.Fragment) {
      a.push.apply(
        a,
        Tl(c.props.children, f)
      );
      return;
    }
    ze(
      c.type === Ye,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), ze(
      !c.props.index || !c.props.children,
      "An index route cannot have child routes."
    );
    let p = {
      id: c.props.id || f.join("-"),
      caseSensitive: c.props.caseSensitive,
      element: c.props.element,
      Component: c.props.Component,
      index: c.props.index,
      path: c.props.path,
      middleware: c.props.middleware,
      loader: c.props.loader,
      action: c.props.action,
      hydrateFallbackElement: c.props.hydrateFallbackElement,
      HydrateFallback: c.props.HydrateFallback,
      errorElement: c.props.errorElement,
      ErrorBoundary: c.props.ErrorBoundary,
      hasErrorBoundary: c.props.hasErrorBoundary === !0 || c.props.ErrorBoundary != null || c.props.errorElement != null,
      shouldRevalidate: c.props.shouldRevalidate,
      handle: c.props.handle,
      lazy: c.props.lazy
    };
    c.props.children && (p.children = Tl(
      c.props.children,
      f
    )), a.push(p);
  }), a;
}
var oa = "get", aa = "application/x-www-form-urlencoded";
function va(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function Mv(r) {
  return va(r) && r.tagName.toLowerCase() === "button";
}
function Iv(r) {
  return va(r) && r.tagName.toLowerCase() === "form";
}
function Lv(r) {
  return va(r) && r.tagName.toLowerCase() === "input";
}
function Dv(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Ov(r, i) {
  return r.button === 0 && // Ignore everything but left clicks
  (!i || i === "_self") && // Let browser handle "target=_blank" etc.
  !Dv(r);
}
var Zo = null;
function zv() {
  if (Zo === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Zo = !1;
    } catch {
      Zo = !0;
    }
  return Zo;
}
var Hv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function _l(r) {
  return r != null && !Hv.has(r) ? (Dt(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${aa}"`
  ), null) : r;
}
function Fv(r, i) {
  let a, c, d, f, p;
  if (Iv(r)) {
    let v = r.getAttribute("action");
    c = v ? hn(v, i) : null, a = r.getAttribute("method") || oa, d = _l(r.getAttribute("enctype")) || aa, f = new FormData(r);
  } else if (Mv(r) || Lv(r) && (r.type === "submit" || r.type === "image")) {
    let v = r.form;
    if (v == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || v.getAttribute("action");
    if (c = g ? hn(g, i) : null, a = r.getAttribute("formmethod") || v.getAttribute("method") || oa, d = _l(r.getAttribute("formenctype")) || _l(v.getAttribute("enctype")) || aa, f = new FormData(v, r), !zv()) {
      let { name: w, type: y, value: x } = r;
      if (y === "image") {
        let S = w ? `${w}.` : "";
        f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
      } else w && f.append(w, x);
    }
  } else {
    if (va(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    a = oa, c = null, d = aa, p = r;
  }
  return f && d === "text/plain" && (p = f, f = void 0), { action: c, method: a.toLowerCase(), encType: d, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Bl(r, i) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(i);
}
function Kf(r, i, a, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return a ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : i && hn(d.pathname, i) === "/" ? d.pathname = `${la(i)}/_root.${c}` : d.pathname = `${la(d.pathname)}.${c}`, d;
}
async function Wv(r, i) {
  if (r.id in i)
    return i[r.id];
  try {
    let a = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      r.module
    );
    return i[r.id] = a, a;
  } catch (a) {
    return console.error(
      `Error loading route module \`${r.module}\`, reloading page...`
    ), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Bv(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function Uv(r, i, a) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = i.routes[d.route.id];
      if (f) {
        let p = await Wv(f, a);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Kv(
    c.flat(1).filter(Bv).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function cf(r, i, a, c, d, f) {
  let p = (g, w) => a[w] ? g.route.id !== a[w].route.id : !0, v = (g, w) => {
    var y;
    return (
      // param change, /users/123 -> /users/456
      a[w].pathname !== g.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((y = a[w].route.path) == null ? void 0 : y.endsWith("*")) && a[w].params["*"] !== g.params["*"]
    );
  };
  return f === "assets" ? i.filter(
    (g, w) => p(g, w) || v(g, w)
  ) : f === "data" ? i.filter((g, w) => {
    var x;
    let y = c.routes[g.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (p(g, w) || v(g, w))
      return !0;
    if (g.route.shouldRevalidate) {
      let S = g.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((x = a[0]) == null ? void 0 : x.params) || {},
        nextUrl: new URL(r, window.origin),
        nextParams: g.params,
        defaultShouldRevalidate: !0
      });
      if (typeof S == "boolean")
        return S;
    }
    return !0;
  }) : [];
}
function Vv(r, i, { includeHydrateFallback: a } = {}) {
  return qv(
    r.map((c) => {
      let d = i.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), a && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function qv(r) {
  return [...new Set(r)];
}
function Qv(r) {
  let i = {}, a = Object.keys(r).sort();
  for (let c of a)
    i[c] = r[c];
  return i;
}
function Kv(r, i) {
  let a = /* @__PURE__ */ new Set();
  return new Set(i), r.reduce((c, d) => {
    let f = JSON.stringify(Qv(d));
    return a.has(f) || (a.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function Ul() {
  let r = m.useContext(Or);
  return Bl(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function Yv() {
  let r = m.useContext(ma);
  return Bl(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Vl = m.createContext(void 0);
Vl.displayName = "FrameworkContext";
function ql() {
  let r = m.useContext(Vl);
  return Bl(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function Gv(r, i) {
  let a = m.useContext(Vl), [c, d] = m.useState(!1), [f, p] = m.useState(!1), { onFocus: v, onBlur: g, onMouseEnter: w, onMouseLeave: y, onTouchStart: x } = i, S = m.useRef(null);
  m.useEffect(() => {
    if (r === "render" && p(!0), r === "viewport") {
      let C = (A) => {
        A.forEach((F) => {
          p(F.isIntersecting);
        });
      }, N = new IntersectionObserver(C, { threshold: 0.5 });
      return S.current && N.observe(S.current), () => {
        N.disconnect();
      };
    }
  }, [r]), m.useEffect(() => {
    if (c) {
      let C = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(C);
      };
    }
  }, [c]);
  let j = () => {
    d(!0);
  }, b = () => {
    d(!1), p(!1);
  };
  return a ? r !== "intent" ? [f, S, {}] : [
    f,
    S,
    {
      onFocus: Ps(v, j),
      onBlur: Ps(g, b),
      onMouseEnter: Ps(w, j),
      onMouseLeave: Ps(y, b),
      onTouchStart: Ps(x, j)
    }
  ] : [!1, S, {}];
}
function Ps(r, i) {
  return (a) => {
    r && r(a), a.defaultPrevented || i(a);
  };
}
function Jv({ page: r, ...i }) {
  let a = cv(), { router: c } = Ul(), d = m.useMemo(
    () => $f(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? a ? /* @__PURE__ */ m.createElement(Zv, { page: r, matches: d, ...i }) : /* @__PURE__ */ m.createElement(ey, { page: r, matches: d, ...i }) : null;
}
function Xv(r) {
  let { manifest: i, routeModules: a } = ql(), [c, d] = m.useState([]);
  return m.useEffect(() => {
    let f = !1;
    return Uv(r, i, a).then(
      (p) => {
        f || d(p);
      }
    ), () => {
      f = !0;
    };
  }, [r, i, a]), c;
}
function Zv({
  page: r,
  matches: i,
  ...a
}) {
  let c = kt(), { future: d } = ql(), { basename: f } = Ul(), p = m.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let v = Kf(
      r,
      f,
      d.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), g = !1, w = [];
    for (let y of i)
      typeof y.route.shouldRevalidate == "function" ? g = !0 : w.push(y.route.id);
    return g && w.length > 0 && v.searchParams.set("_routes", w.join(",")), [v.pathname + v.search];
  }, [
    f,
    d.v8_trailingSlashAwareDataRequests,
    r,
    c,
    i
  ]);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, p.map((v) => /* @__PURE__ */ m.createElement("link", { key: v, rel: "prefetch", as: "fetch", href: v, ...a })));
}
function ey({
  page: r,
  matches: i,
  ...a
}) {
  let c = kt(), { future: d, manifest: f, routeModules: p } = ql(), { basename: v } = Ul(), { loaderData: g, matches: w } = Yv(), y = m.useMemo(
    () => cf(
      r,
      i,
      w,
      f,
      c,
      "data"
    ),
    [r, i, w, f, c]
  ), x = m.useMemo(
    () => cf(
      r,
      i,
      w,
      f,
      c,
      "assets"
    ),
    [r, i, w, f, c]
  ), S = m.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), N = !1;
    if (i.forEach((F) => {
      var H;
      let P = f.routes[F.route.id];
      !P || !P.hasLoader || (!y.some((B) => B.route.id === F.route.id) && F.route.id in g && ((H = p[F.route.id]) != null && H.shouldRevalidate) || P.hasClientLoader ? N = !0 : C.add(F.route.id));
    }), C.size === 0)
      return [];
    let A = Kf(
      r,
      v,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return N && C.size > 0 && A.searchParams.set(
      "_routes",
      i.filter((F) => C.has(F.route.id)).map((F) => F.route.id).join(",")
    ), [A.pathname + A.search];
  }, [
    v,
    d.v8_trailingSlashAwareDataRequests,
    g,
    c,
    f,
    y,
    i,
    r,
    p
  ]), j = m.useMemo(
    () => Vv(x, f),
    [x, f]
  ), b = Xv(x);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, S.map((C) => /* @__PURE__ */ m.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...a })), j.map((C) => /* @__PURE__ */ m.createElement("link", { key: C, rel: "modulepreload", href: C, ...a })), b.map(({ key: C, link: N }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ m.createElement(
      "link",
      {
        key: C,
        nonce: a.nonce,
        ...N,
        crossOrigin: N.crossOrigin ?? a.crossOrigin
      }
    )
  )));
}
function ty(...r) {
  return (i) => {
    r.forEach((a) => {
      typeof a == "function" ? a(i) : a != null && (a.current = i);
    });
  };
}
var ny = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ny && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function ry({
  basename: r,
  children: i,
  useTransitions: a,
  window: c
}) {
  let d = m.useRef();
  d.current == null && (d.current = Lm({ window: c, v5Compat: !0 }));
  let f = d.current, [p, v] = m.useState({
    action: f.action,
    location: f.location
  }), g = m.useCallback(
    (w) => {
      a === !1 ? v(w) : m.startTransition(() => v(w));
    },
    [a]
  );
  return m.useLayoutEffect(() => f.listen(g), [f, g]), /* @__PURE__ */ m.createElement(
    Pv,
    {
      basename: r,
      children: i,
      location: p.location,
      navigationType: p.action,
      navigator: f,
      useTransitions: a
    }
  );
}
var Yf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Gf = m.forwardRef(
  function({
    onClick: i,
    discover: a = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: f,
    replace: p,
    mask: v,
    state: g,
    target: w,
    to: y,
    preventScrollReset: x,
    viewTransition: S,
    defaultShouldRevalidate: j,
    ...b
  }, C) {
    let { basename: N, navigator: A, useTransitions: F } = m.useContext(bt), P = typeof y == "string" && Yf.test(y), H = Of(y, N);
    y = H.to;
    let B = yv(y, { relative: d }), I = kt(), J = null;
    if (v) {
      let te = ha(
        v,
        [],
        I.mask ? I.mask.pathname : "/",
        !0
      );
      N !== "/" && (te.pathname = te.pathname === "/" ? N : qt([N, te.pathname])), J = A.createHref(te);
    }
    let [U, G, ye] = Gv(
      c,
      b
    ), de = ay(y, {
      replace: p,
      mask: v,
      state: g,
      target: w,
      preventScrollReset: x,
      relative: d,
      viewTransition: S,
      defaultShouldRevalidate: j,
      useTransitions: F
    });
    function ge(te) {
      i && i(te), te.defaultPrevented || de(te);
    }
    let pe = !(H.isExternal || f), _e = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ m.createElement(
        "a",
        {
          ...b,
          ...ye,
          href: (pe ? J : void 0) || H.absoluteURL || B,
          onClick: pe ? ge : i,
          ref: ty(C, G),
          target: w,
          "data-discover": !P && a === "render" ? "true" : void 0
        }
      )
    );
    return U && !P ? /* @__PURE__ */ m.createElement(m.Fragment, null, _e, /* @__PURE__ */ m.createElement(Jv, { page: B })) : _e;
  }
);
Gf.displayName = "Link";
var pt = m.forwardRef(
  function({
    "aria-current": i = "page",
    caseSensitive: a = !1,
    className: c = "",
    end: d = !1,
    style: f,
    to: p,
    viewTransition: v,
    children: g,
    ...w
  }, y) {
    let x = Fs(p, { relative: w.relative }), S = kt(), j = m.useContext(ma), { navigator: b, basename: C } = m.useContext(bt), N = j != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dy(x) && v === !0, A = b.encodeLocation ? b.encodeLocation(x).pathname : x.pathname, F = S.pathname, P = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
    a || (F = F.toLowerCase(), P = P ? P.toLowerCase() : null, A = A.toLowerCase()), P && C && (P = hn(P, C) || P);
    const H = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let B = F === A || !d && F.startsWith(A) && F.charAt(H) === "/", I = P != null && (P === A || !d && P.startsWith(A) && P.charAt(A.length) === "/"), J = {
      isActive: B,
      isPending: I,
      isTransitioning: N
    }, U = B ? i : void 0, G;
    typeof c == "function" ? G = c(J) : G = [
      c,
      B ? "active" : null,
      I ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ye = typeof f == "function" ? f(J) : f;
    return /* @__PURE__ */ m.createElement(
      Gf,
      {
        ...w,
        "aria-current": U,
        className: G,
        ref: y,
        style: ye,
        to: p,
        viewTransition: v
      },
      typeof g == "function" ? g(J) : g
    );
  }
);
pt.displayName = "NavLink";
var sy = m.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: i,
    navigate: a,
    reloadDocument: c,
    replace: d,
    state: f,
    method: p = oa,
    action: v,
    onSubmit: g,
    relative: w,
    preventScrollReset: y,
    viewTransition: x,
    defaultShouldRevalidate: S,
    ...j
  }, b) => {
    let { useTransitions: C } = m.useContext(bt), N = uy(), A = cy(v, { relative: w }), F = p.toLowerCase() === "get" ? "get" : "post", P = typeof v == "string" && Yf.test(v), H = (B) => {
      if (g && g(B), B.defaultPrevented) return;
      B.preventDefault();
      let I = B.nativeEvent.submitter, J = (I == null ? void 0 : I.getAttribute("formmethod")) || p, U = () => N(I || B.currentTarget, {
        fetcherKey: i,
        method: J,
        navigate: a,
        replace: d,
        state: f,
        relative: w,
        preventScrollReset: y,
        viewTransition: x,
        defaultShouldRevalidate: S
      });
      C && a !== !1 ? m.startTransition(() => U()) : U();
    };
    return /* @__PURE__ */ m.createElement(
      "form",
      {
        ref: b,
        method: F,
        action: A,
        onSubmit: c ? g : H,
        ...j,
        "data-discover": !P && r === "render" ? "true" : void 0
      }
    );
  }
);
sy.displayName = "Form";
function oy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jf(r) {
  let i = m.useContext(Or);
  return ze(i, oy(r)), i;
}
function ay(r, {
  target: i,
  replace: a,
  mask: c,
  state: d,
  preventScrollReset: f,
  relative: p,
  viewTransition: v,
  defaultShouldRevalidate: g,
  useTransitions: w
} = {}) {
  let y = Hl(), x = kt(), S = Fs(r, { relative: p });
  return m.useCallback(
    (j) => {
      if (Ov(j, i)) {
        j.preventDefault();
        let b = a !== void 0 ? a : zs(x) === zs(S), C = () => y(r, {
          replace: b,
          mask: c,
          state: d,
          preventScrollReset: f,
          relative: p,
          viewTransition: v,
          defaultShouldRevalidate: g
        });
        w ? m.startTransition(() => C()) : C();
      }
    },
    [
      x,
      y,
      S,
      a,
      c,
      d,
      i,
      r,
      f,
      p,
      v,
      g,
      w
    ]
  );
}
var iy = 0, ly = () => `__${String(++iy)}__`;
function uy() {
  let { router: r } = Jf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: i } = m.useContext(bt), a = Tv(), c = r.fetch, d = r.navigate;
  return m.useCallback(
    async (f, p = {}) => {
      let { action: v, method: g, encType: w, formData: y, body: x } = Fv(
        f,
        i
      );
      if (p.navigate === !1) {
        let S = p.fetcherKey || ly();
        await c(S, a, p.action || v, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: y,
          body: x,
          formMethod: p.method || g,
          formEncType: p.encType || w,
          flushSync: p.flushSync
        });
      } else
        await d(p.action || v, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: y,
          body: x,
          formMethod: p.method || g,
          formEncType: p.encType || w,
          replace: p.replace,
          state: p.state,
          fromRouteId: a,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, d, i, a]
  );
}
function cy(r, { relative: i } = {}) {
  let { basename: a } = m.useContext(bt), c = m.useContext(nn);
  ze(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Fs(r || ".", { relative: i }) }, p = kt();
  if (r == null) {
    f.search = p.search;
    let v = new URLSearchParams(f.search), g = v.getAll("index");
    if (g.some((y) => y === "")) {
      v.delete("index"), g.filter((x) => x).forEach((x) => v.append("index", x));
      let y = v.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (f.pathname = f.pathname === "/" ? a : qt([a, f.pathname])), zs(f);
}
function dy(r, { relative: i } = {}) {
  let a = m.useContext(Ff);
  ze(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Jf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Fs(r, { relative: i });
  if (!a.isTransitioning)
    return !1;
  let f = hn(a.currentLocation.pathname, c) || a.currentLocation.pathname, p = hn(a.nextLocation.pathname, c) || a.nextLocation.pathname;
  return ia(d.pathname, p) != null || ia(d.pathname, f) != null;
}
var Xf = Pf();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = (...r) => r.filter((i, a, c) => !!i && i.trim() !== "" && c.indexOf(i) === a).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, a, c) => c ? c.toUpperCase() : a.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = (r) => {
  const i = py(r);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = (r) => {
  for (const i in r)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, my = m.createContext({}), vy = () => m.useContext(my), yy = m.forwardRef(
  ({ color: r, size: i, strokeWidth: a, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: p, ...v }, g) => {
    const {
      size: w = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: x = !1,
      color: S = "currentColor",
      className: j = ""
    } = vy() ?? {}, b = c ?? x ? Number(a ?? y) * 24 / Number(i ?? w) : a ?? y;
    return m.createElement(
      "svg",
      {
        ref: g,
        ...xl,
        width: i ?? w ?? xl.width,
        height: i ?? w ?? xl.height,
        stroke: r ?? S,
        strokeWidth: b,
        className: Zf("lucide", j, d),
        ...!f && !hy(v) && { "aria-hidden": "true" },
        ...v
      },
      [
        ...p.map(([C, N]) => m.createElement(C, N)),
        ...Array.isArray(f) ? f : [f]
      ]
    );
  }
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (r, i) => {
  const a = m.forwardRef(
    ({ className: c, ...d }, f) => m.createElement(yy, {
      ref: f,
      iconNode: i,
      className: Zf(
        `lucide-${fy(df(r))}`,
        `lucide-${r}`,
        c
      ),
      ...d
    })
  );
  return a.displayName = df(r), a;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], ep = ke("alarm-clock", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], xy = ke("arrow-left", _y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Sy = ke("arrow-right", wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], jy = ke("audio-lines", ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  [
    "path",
    {
      d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "11xh7x"
    }
  ],
  ["path", { d: "M9 12h.01", key: "157uk2" }]
], Ql = ke("baby", Cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ny = ke("check", Ey);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], tp = ke("chevron-down", Ty);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Ry = ke("circle-check", by);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ay = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Py = ke("circle-question-mark", Ay);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], My = ke("circle", $y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], Ly = ke("clock-3", Iy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Oy = ke("command", Dy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zy = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], np = ke("download", zy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hy = [
  [
    "path",
    {
      d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
      key: "1wthlu"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
  ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
], Fy = ke("file-code-corner", Hy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], By = ke("git-branch", Wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uy = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
], Vy = ke("headphones", Uy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], Qy = ke("layers", qy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], Yy = ke("layout-grid", Ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], rp = ke("menu", Gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Xy = ke("message-circle", Jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
  ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
], eg = ke("mic-off", Zy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tg = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], ng = ke("mic", tg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ff = ke("phone-call", rg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = [
  [
    "path",
    {
      d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",
      key: "1wngk7"
    }
  ],
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }],
  [
    "path",
    {
      d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",
      key: "10hv5p"
    }
  ]
], og = ke("phone-off", sg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ag = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ua = ke("phone", ag);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], lg = ke("radio", ig);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], cg = ke("search", ug);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dg = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], sp = ke("settings", dg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fg = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], wl = ke("sliders-horizontal", fg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], Kl = ke("speaker", pg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], mg = ke("timer", hg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], yg = ke("triangle-alert", vg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], _g = ke("volume-2", gg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], pf = ke("workflow", xg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], op = ke("x", wg), Sg = { ru: "Тема", en: "Theme" }, kg = { ru: "Тёмная", en: "Dark" }, jg = { ru: "Светлая", en: "Light" }, Cg = { ru: "Токен", en: "Token" }, Eg = { ru: "Тип действия", en: "Action type" }, Ng = { ru: "Ветка диалога", en: "Conversation branch" }, Tg = { ru: "Текст ответа", en: "Response text" }, bg = { ru: "Команда", en: "Command" }, Rg = { ru: "Название переменной", en: "Variable name" }, Ag = { ru: "Основная команда", en: "Main command" }, Pg = { ru: "Второстепенная команда", en: "Secondary command" }, $g = { ru: "Прямая команда", en: "Direct command" }, Mg = { ru: "Дополнительные фразы", en: "Additional phrases" }, Ig = { ru: "Удалённый сервер", en: "Remote server" }, Lg = { ru: "Вложенные команды", en: "Nested commands" }, Dg = { ru: "Тип вложенного значения", en: "Nested value type" }, Og = { ru: "Тип данных", en: "Data type" }, zg = { ru: "Вручную", en: "Manual" }, Hg = { ru: "Любой", en: "Any" }, Fg = { ru: "Любой", en: "Any" }, Wg = { ru: "Текст", en: "Text" }, Bg = { ru: "Число", en: "Number" }, Ug = { ru: "Дата", en: "Date" }, Vg = { ru: "Время", en: "Time" }, qg = {
  "Без названия": { ru: "Без названия", en: "Untitled" },
  Будильник: { ru: "Будильник", en: "Alarm" },
  "Быстрое создание": { ru: "Быстрое создание", en: "Quick create" },
  Включена: { ru: "Включена", en: "Enabled" },
  Включить: { ru: "Включить", en: "Enable" },
  Вс: { ru: "Вс", en: "Sun" },
  Вт: { ru: "Вт", en: "Tue" },
  Второстепенные: { ru: "Второстепенные", en: "Secondary" },
  "Второстепенные команды": { ru: "Второстепенные команды", en: "Secondary commands" },
  Выберите: { ru: "Выберите", en: "Select" },
  "Выберите устройство": { ru: "Выберите устройство", en: "Select a device" },
  Выключена: { ru: "Выключена", en: "Disabled" },
  Выключить: { ru: "Выключить", en: "Disable" },
  Готово: { ru: "Готово", en: "Done" },
  Действия: { ru: "Действия", en: "Actions" },
  "Длительность таймера": { ru: "Длительность таймера", en: "Timer duration" },
  "Добавить ещё": { ru: "Добавить ещё", en: "Add another" },
  "Добавить сценарий": { ru: "Добавить сценарий", en: "Add scenario" },
  Ежедневно: { ru: "Ежедневно", en: "Daily" },
  "Заведен на": { ru: "Заведен на", en: "Duration" },
  "Завершать диалог": { ru: "Завершать диалог", en: "End conversation" },
  "Загрузка...": { ru: "Загрузка...", en: "Loading..." },
  Изменить: { ru: "Изменить", en: "Edit" },
  "Использует фразы из раздела «Список ответов».": { ru: "Использует фразы из раздела «Список ответов».", en: "Uses phrases from the response list." },
  "Источник ответа": { ru: "Источник ответа", en: "Response source" },
  Кастом: { ru: "Кастом", en: "Custom" },
  "Ключ доступа для API endpoints": { ru: "Ключ доступа для API endpoints", en: "API access token" },
  Команды: { ru: "Команды", en: "Commands" },
  Комманды: { ru: "Команды", en: "Commands" },
  "Круговая чч мм": { ru: "Круговая чч мм", en: "Circular hours and minutes" },
  "Музыка на сервере не найдена.": { ru: "Музыка на сервере не найдена.", en: "No music found on the server." },
  "Нажмите для редактирования": { ru: "Нажмите для редактирования", en: "Click to edit" },
  Название: { ru: "Название", en: "Name" },
  "Название команды": { ru: "Название команды", en: "Command name" },
  Настройки: { ru: "Настройки", en: "Settings" },
  "Настройки команд": { ru: "Настройки команд", en: "Command settings" },
  "Начните вводить title или uuid": { ru: "Начните вводить title или uuid", en: "Start typing a name or UUID" },
  "Не выбрано": { ru: "Не выбрано", en: "Not selected" },
  "Нет будильников.": { ru: "Нет будильников.", en: "No alarms." },
  "Нет быстрых значений.": { ru: "Нет быстрых значений.", en: "No presets." },
  "Нет запущенных таймеров.": { ru: "Нет запущенных таймеров.", en: "No running timers." },
  Обновить: { ru: "Обновить", en: "Update" },
  Общие: { ru: "Общие", en: "General" },
  "Обязательное поле": { ru: "Обязательное поле", en: "Required field" },
  Однократно: { ru: "Однократно", en: "Once" },
  Основной: { ru: "Основной", en: "Main" },
  Основные: { ru: "Основные", en: "Main" },
  "Ответ из скрипта": { ru: "Ответ из скрипта", en: "Script response" },
  "Ответ из списка фраз": { ru: "Ответ из списка фраз", en: "Response from phrase list" },
  "Ответное сообщение": { ru: "Ответное сообщение", en: "Response message" },
  "Отправить команду как есть": { ru: "Отправить команду как есть", en: "Send command unchanged" },
  "Передать команду серверу": { ru: "Передать команду серверу", en: "Forward command to server" },
  "Передаёт данные команды в Home Assistant и ожидает ответ от скрипта.": { ru: "Передаёт данные команды в Home Assistant и ожидает ответ от скрипта.", en: "Sends command data to Home Assistant and waits for a script response." },
  Перейти: { ru: "Перейти", en: "Go" },
  Пн: { ru: "Пн", en: "Mon" },
  "По будням": { ru: "По будням", en: "Weekdays" },
  "По выходным": { ru: "По выходным", en: "Weekends" },
  Повторы: { ru: "Повторы", en: "Repeat" },
  "Подключение к Home Assistant...": { ru: "Подключение к Home Assistant...", en: "Connecting to Home Assistant..." },
  "Поиск...": { ru: "Поиск...", en: "Searching..." },
  "Предыдущая страница": { ru: "Предыдущая страница", en: "Previous page" },
  "Продолжение диалога": { ru: "Продолжение диалога", en: "Continue conversation" },
  Прямые: { ru: "Прямые", en: "Direct" },
  "Прямые команды": { ru: "Прямые команды", en: "Direct commands" },
  "Прямые команды шаблоны": { ru: "Прямые команды шаблоны", en: "Direct command templates" },
  Пт: { ru: "Пт", en: "Fri" },
  "Ранее заводимые": { ru: "Ранее заводимые", en: "Recent presets" },
  Редактировать: { ru: "Редактировать", en: "Edit" },
  "Редактировать будильник": { ru: "Редактировать будильник", en: "Edit alarm" },
  "Редактировать сценарий": { ru: "Редактировать сценарий", en: "Edit scenario" },
  Сб: { ru: "Сб", en: "Sat" },
  "Связанные прямые команды для сопоставления значений во фразе. Например, имя «Миша» в команде «Привет ${name}».": { ru: "Связанные прямые команды для сопоставления значений во фразе. Например, имя «Миша» в команде «Привет ${name}».", en: "Linked direct commands match values in a phrase, such as the name “Misha” in “Hello ${name}”." },
  Скачать: { ru: "Скачать", en: "Download" },
  "Скачать настройки": { ru: "Скачать настройки", en: "Download settings" },
  "Скачать скрипты": { ru: "Скачать скрипты", en: "Download scripts" },
  "Скачать сценарии": { ru: "Скачать сценарии", en: "Download scenarios" },
  Скрипт: { ru: "Скрипт", en: "Script" },
  Скрипты: { ru: "Скрипты", en: "Scripts" },
  "Следующая страница": { ru: "Следующая страница", en: "Next page" },
  "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.": { ru: "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.", en: "Create automations to control devices and combine actions into scenarios." },
  "Создавайте будильники, настраивайте повторы, устройство и громкость.": { ru: "Создавайте будильники, настраивайте повторы, устройство и громкость.", en: "Create alarms and set repeats, playback device and volume." },
  "Создавайте и редактируйте голосовые команды ассистента.": { ru: "Создавайте и редактируйте голосовые команды ассистента.", en: "Create and edit assistant voice commands." },
  "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.": { ru: "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.", en: "Create commands to control devices and combine actions into scenarios." },
  "Создавайте таймеры через модальное окно и отслеживайте запущенные отсчеты.": { ru: "Создавайте таймеры через модальное окно и отслеживайте запущенные отсчеты.", en: "Create timers and track running countdowns." },
  Создать: { ru: "Создать", en: "Create" },
  "Создать будильник": { ru: "Создать будильник", en: "Create alarm" },
  "Создать сценарий": { ru: "Создать сценарий", en: "Create scenario" },
  "Создать таймер": { ru: "Создать таймер", en: "Create timer" },
  Сохранить: { ru: "Сохранить", en: "Save" },
  "Список ответов": { ru: "Список ответов", en: "Response list" },
  Ср: { ru: "Ср", en: "Wed" },
  "Стартовая громкость": { ru: "Стартовая громкость", en: "Starting volume" },
  Страница: { ru: "Страница", en: "Page" },
  "Страницы списка": { ru: "Страницы списка", en: "List pages" },
  Сценарии: { ru: "Сценарии", en: "Scenarios" },
  Таймер: { ru: "Таймер", en: "Timer" },
  Удалить: { ru: "Удалить", en: "Delete" },
  "Уникальный идентификатор клиента": { ru: "Уникальный идентификатор клиента", en: "Unique client identifier" },
  Условия: { ru: "Условия", en: "Conditions" },
  "Устройство воспроизведения": { ru: "Устройство воспроизведения", en: "Playback device" },
  "Фразы для запуска": { ru: "Фразы для запуска", en: "Trigger phrases" },
  Чт: { ru: "Чт", en: "Thu" },
  Шаблон: { ru: "Шаблон", en: "Template" },
  ежедневно: { ru: "ежедневно", en: "daily" },
  из: { ru: "из", en: "of" },
  кастом: { ru: "кастом", en: "custom" },
  мин: { ru: "мин", en: "min" },
  мм: { ru: "мм", en: "mm" },
  однократно: { ru: "однократно", en: "once" },
  "по будням": { ru: "по будням", en: "weekdays" },
  "по выходным": { ru: "по выходным", en: "weekends" },
  сс: { ru: "сс", en: "ss" },
  чч: { ru: "чч", en: "hh" },
  "🗑 Удалить условие": { ru: "🗑 Удалить условие", en: "🗑 Delete condition" },
  "🞢 Добавить сценарий": { ru: "🞢 Добавить сценарий", en: "🞢 Add scenario" },
  "🞢 Создать": { ru: "🞢 Создать", en: "🞢 Create" },
  "+ Добавить условие": { ru: "+ Добавить условие", en: "+ Add condition" },
  Theme: Sg,
  dark: kg,
  light: jg,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: Cg,
  actionType: Eg,
  actionTypeComponent: Ng,
  voiceResponse: Tg,
  uuid: bg,
  mappingType: Rg,
  parent_type: Ag,
  children_type: Pg,
  children_direct_type: $g,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: Mg,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: Ig,
  subDirectControl: Lg,
  subMappingType: Dg,
  valueType: Og,
  manual: zg,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Hg,
  All: Fg,
  string: Wg,
  int: Bg,
  date: Ug,
  time: Vg,
  "Значения шаблона": { ru: "Значения шаблона", en: "Template values" },
  "Код значения": { ru: "Код значения", en: "Value identifier" },
  "Варианты произношения": { ru: "Варианты произношения", en: "Spoken variants" },
  "Раздел прямых команд": { ru: "Раздел прямых команд", en: "Direct command section" },
  "Не удалось сохранить настройки. Попробуйте ещё раз.": { ru: "Не удалось сохранить настройки. Попробуйте ещё раз.", en: "Could not save settings. Please try again." },
  "Не удалось открыть панель. Попробуйте ещё раз.": { ru: "Не удалось открыть панель. Попробуйте ещё раз.", en: "Could not open the panel. Please try again." },
  "Открыть повторно": { ru: "Открыть повторно", en: "Try again" },
  "Импорт и экспорт": { ru: "Импорт и экспорт", en: "Import and export" },
  "Загрузить скрипты": { ru: "Загрузить скрипты", en: "Upload scripts" },
  "Загрузить сценарии": { ru: "Загрузить сценарии", en: "Upload scenarios" },
  "Загрузить настройки": { ru: "Загрузить настройки", en: "Upload settings" },
  "Данные загружены.": { ru: "Данные загружены.", en: "Data imported." },
  "Обработка файла...": { ru: "Обработка файла...", en: "Processing file..." },
  "Скачивайте и загружайте JSON-файлы. Записи с совпадающим ID обновляются, остальные добавляются. Другие записи сохраняются.": { ru: "Скачивайте и загружайте JSON-файлы. Записи с совпадающим ID обновляются, остальные добавляются. Другие записи сохраняются.", en: "Download and upload JSON files. Matching IDs are updated; new records are added. Other records are kept." },
  "Некорректный JSON-файл.": { ru: "Некорректный JSON-файл.", en: "Invalid JSON file." },
  "Файл не содержит корректные настройки.": { ru: "Файл не содержит корректные настройки.", en: "The file does not contain valid settings." },
  "Ожидается массив записей JSON.": { ru: "Ожидается массив записей JSON.", en: "Expected a JSON array of records." },
  "Некорректные или повторяющиеся ID записей.": { ru: "Некорректные или повторяющиеся ID записей.", en: "Invalid or duplicate record IDs." },
  "Нужен файл с полными записями. Краткий список названий загрузить нельзя.": { ru: "Нужен файл с полными записями. Краткий список названий загрузить нельзя.", en: "A full export is required. A list of names cannot be imported." },
  "Не удалось выполнить операцию. Попробуйте ещё раз.": { ru: "Не удалось выполнить операцию. Попробуйте ещё раз.", en: "Operation failed. Please try again." },
  "Сценарии включают все разделы «Команды»: основные, второстепенные, прямые, шаблоны и настройки команд. Скрипты Home Assistant не переносятся.": { ru: "Сценарии включают все разделы «Команды»: основные, второстепенные, прямые, шаблоны и настройки команд. Скрипты Home Assistant не переносятся.", en: "Scenarios include all Commands sections: main, secondary, direct, templates and command settings. Home Assistant scripts are not transferred." },
  "Некорректный файл сценариев или неподдерживаемая версия.": { ru: "Некорректный файл сценариев или неподдерживаемая версия.", en: "Invalid scenario file or unsupported version." },
  "Запуск скриптов": { ru: "Запуск скриптов", en: "Script triggers" },
  Таймеры: { ru: "Таймеры", en: "Timers" },
  Будильники: { ru: "Будильники", en: "Alarms" },
  "Основные команды": { ru: "Основные команды", en: "Main commands" },
  "Шаблоны значений": { ru: "Шаблоны значений", en: "Value templates" },
  "Ответы по умолчанию": { ru: "Ответы по умолчанию", en: "Default responses" },
  "Настройки интеграции": { ru: "Настройки интеграции", en: "Integration settings" },
  "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.": { ru: "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.", en: "Link a recognized command to a Home Assistant script. Select the script and set its trigger conditions." },
  "Задайте фразы, с которых начинается диалог, и ответ ассистента. При необходимости добавьте продолжение диалога или прямую команду.": { ru: "Задайте фразы, с которых начинается диалог, и ответ ассистента. При необходимости добавьте продолжение диалога или прямую команду.", en: "Define phrases that start a dialog and the assistant response. Add a dialog continuation or direct command when needed." },
  "Настройте команды для следующего шага диалога. Подключите их в «Продолжении диалога» основной или другой второстепенной команды.": { ru: "Настройте команды для следующего шага диалога. Подключите их в «Продолжении диалога» основной или другой второстепенной команды.", en: "Define commands for the next dialog step. Link them from the Dialog continuation section of a main or another secondary command." },
  "Опишите значения, которые ассистент должен распознавать во фразе, например имя или комнату. Задайте варианты произношения вручную или выберите шаблон.": { ru: "Опишите значения, которые ассистент должен распознавать во фразе, например имя или комнату. Задайте варианты произношения вручную или выберите шаблон.", en: "Define values the assistant should recognize in a phrase, such as a name or room. Enter spoken variants manually or select a template." },
  "Соберите набор значений и вариантов произношения, например названия комнат. Выбирайте этот шаблон в прямых командах, чтобы использовать набор повторно.": { ru: "Соберите набор значений и вариантов произношения, например названия комнат. Выбирайте этот шаблон в прямых командах, чтобы использовать набор повторно.", en: "Create a reusable set of values and spoken variants, such as room names. Select this template in direct commands to reuse the set." },
  "Изменяйте встроенные ответы для случаев, когда команда не найдена или диалог нужно начать заново. Набор этих настроек фиксирован: новые записи не создаются.": { ru: "Изменяйте встроенные ответы для случаев, когда команда не найдена или диалог нужно начать заново. Набор этих настроек фиксирован: новые записи не создаются.", en: "Edit built-in responses for an unrecognized command or a dialog restart. These settings are fixed; new entries cannot be added." },
  "Задайте длительность и выберите колонку для сигнала. Здесь отображаются оставшееся время и устройство каждого таймера.": { ru: "Задайте длительность и выберите колонку для сигнала. Здесь отображаются оставшееся время и устройство каждого таймера.", en: "Set a duration and select a speaker for the alert. View the remaining time and device for each timer here." },
  "Выберите время, дни повтора и колонку для сигнала. Нажмите на будильник, чтобы изменить, включить или удалить его.": { ru: "Выберите время, дни повтора и колонку для сигнала. Нажмите на будильник, чтобы изменить, включить или удалить его.", en: "Choose the time, repeat days and speaker for the alert. Select an alarm to edit, enable or delete it." },
  "Настройте язык, тему, подключение к удалённому серверу и звуки таймеров и будильников. Нажмите «Сохранить», чтобы применить изменения.": { ru: "Настройте язык, тему, подключение к удалённому серверу и звуки таймеров и будильников. Нажмите «Сохранить», чтобы применить изменения.", en: "Set the language, theme, remote server connection and timer/alarm sounds. Select Save to apply changes." },
  "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.": { ru: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", en: "Command-to-script links and trigger conditions. The Home Assistant scripts themselves are not included." },
  "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.": { ru: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", en: "All Commands sections: main, secondary, direct, templates and default responses. IDs and links are preserved." },
  "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.": { ru: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", en: "Theme, connection settings, API and timer/alarm sounds. The interface language is not included." },
  "Скачайте JSON-файл для сохранения или переноса данных. Для восстановления выберите «Загрузить» в нужном разделе. Существующие записи обновятся, новые добавятся; встроенные настройки только редактируются.": { ru: "Скачайте JSON-файл для сохранения или переноса данных. Для восстановления выберите «Загрузить» в нужном разделе. Существующие записи обновятся, новые добавятся; встроенные настройки только редактируются.", en: "Download a JSON file to save or transfer data. To restore it, select Upload in the matching section. Existing entries are updated, new ones are added; built-in settings can only be edited." },
  "Повторить загрузку": { ru: "Повторить загрузку", en: "Retry loading" },
  "Недостаточно прав. Войдите как администратор Home Assistant.": { ru: "Недостаточно прав. Войдите как администратор Home Assistant.", en: "Insufficient permissions. Sign in as a Home Assistant administrator." },
  "Запись больше не существует. Обновите список.": { ru: "Запись больше не существует. Обновите список.", en: "This entry no longer exists. Reload the list." },
  "Home Assistant не ответил вовремя. Проверьте подключение и повторите загрузку.": { ru: "Home Assistant не ответил вовремя. Проверьте подключение и повторите загрузку.", en: "Home Assistant did not respond in time. Check the connection and retry loading." },
  "Соединение с Home Assistant потеряно. Проверьте подключение и повторите загрузку.": { ru: "Соединение с Home Assistant потеряно. Проверьте подключение и повторите загрузку.", en: "Connection to Home Assistant was lost. Check the connection and retry loading." },
  "Данные сохранены, но не удалось обновить интеграцию. Обновите список перед следующими изменениями.": { ru: "Данные сохранены, но не удалось обновить интеграцию. Обновите список перед следующими изменениями.", en: "Data was saved, but the integration could not reload. Reload the list before making further changes." },
  "Не удалось импортировать данные. Проверьте журнал Home Assistant и текущее состояние записей.": { ru: "Не удалось импортировать данные. Проверьте журнал Home Assistant и текущее состояние записей.", en: "Data import failed. Check the Home Assistant log and the current records." },
  "Команда API недоступна. Обновите интеграцию и перезапустите Home Assistant.": { ru: "Команда API недоступна. Обновите интеграцию и перезапустите Home Assistant.", en: "The API command is unavailable. Update the integration and restart Home Assistant." },
  "Некорректные данные запроса. Обновите страницу и проверьте введённые значения.": { ru: "Некорректные данные запроса. Обновите страницу и проверьте введённые значения.", en: "Invalid request data. Refresh the page and check the entered values." },
  "Некорректные данные запроса. Проверьте файл или введённые значения.": { ru: "Некорректные данные запроса. Проверьте файл или введённые значения.", en: "Invalid request data. Check the file or entered values." },
  "Не удалось выполнить операцию. Проверьте подключение к Home Assistant.": { ru: "Не удалось выполнить операцию. Проверьте подключение к Home Assistant.", en: "The operation failed. Check the connection to Home Assistant." },
  "Не удалось загрузить список. Проверьте подключение к Home Assistant.": { ru: "Не удалось загрузить список. Проверьте подключение к Home Assistant.", en: "The list could not be loaded. Check the connection to Home Assistant." },
  "По умолчанию": { ru: "По умолчанию", en: "Default" },
  "По типу ответа": { ru: "По типу ответа", en: "By response type" },
  "Вид продолжения": { ru: "Вид продолжения", en: "Continuation mode" },
  "Если подходящего продолжения нет, диалог завершается. Переход по типу ответа имеет приоритет.": { ru: "Если подходящего продолжения нет, диалог завершается. Переход по типу ответа имеет приоритет.", en: "The dialog ends if no continuation matches. A matching response type takes priority." },
  "Скрипт Home Assistant": { ru: "Скрипт Home Assistant", en: "Home Assistant script" },
  "Не запускать скрипт": { ru: "Не запускать скрипт", en: "Do not run a script" },
  "Скрипт запускается для прямой команды или финального ответа. При ответе из скрипта запускается всегда с ожиданием результата.": { ru: "Скрипт запускается для прямой команды или финального ответа. При ответе из скрипта запускается всегда с ожиданием результата.", en: "Runs for a direct command or a final response. For a script response, always runs and waits for the result." },
  "Действия удалённых команд": { ru: "Действия удалённых команд", en: "Remote command actions" },
  "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную.": { ru: "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную.", en: "Choose a Home Assistant script and enter the command types received from the remote server. Enter types manually." },
  "Использовать существующие сценарии": { ru: "Использовать существующие сценарии", en: "Use existing scenarios" },
  "Все разделы": { ru: "Все разделы", en: "All sections" },
  "Разделы команд": { ru: "Разделы команд", en: "Command sections" },
  "Основная навигация": { ru: "Основная навигация", en: "Main navigation" },
  "Настроить логику": { ru: "Настроить логику", en: "Configure logic" },
  "Настройки логики": { ru: "Настройки логики", en: "Logic settings" },
  Ответы: { ru: "Ответы", en: "Responses" },
  Продолжения: { ru: "Продолжения", en: "Continuations" },
  "Вернуться к команде": { ru: "Вернуться к команде", en: "Back to command" },
  "Укажите тип действия в настройках логики.": { ru: "Укажите тип действия в настройках логики.", en: "Set the action type in logic settings." },
  "Ответ выбирается из настроенных фраз.": { ru: "Ответ выбирается из настроенных фраз.", en: "The response is selected from configured phrases." },
  "Ожидаем результат скрипта и выбираем ответ по его типу.": { ru: "Ожидаем результат скрипта и выбираем ответ по его типу.", en: "Wait for the script result and select the response by its type." },
  Назад: { ru: "Назад", en: "Back" },
  "default — основной ответ, в том числе для фразы с подстановкой ${…}.": { ru: "default — основной ответ, в том числе для фразы с подстановкой ${…}.", en: "default — the standard response, including phrases with a ${…} placeholder." },
  "default_next_step — сначала ищется для обычной команды. Если такого ответа нет, используется default.": { ru: "default_next_step — сначала ищется для обычной команды. Если такого ответа нет, используется default.", en: "default_next_step — checked first for a regular command. If no such response exists, default is used." },
  "При ожидании скрипта тип ответа берётся из typeVoice, затем из actionType. Если тип не передан, используется выбор выше.": { ru: "При ожидании скрипта тип ответа берётся из typeVoice, затем из actionType. Если тип не передан, используется выбор выше.", en: "When waiting for a script, the response type comes from typeVoice, then actionType. If no type is provided, the rules above apply." },
  "По типу результата скрипта": { ru: "По типу результата скрипта", en: "By script result type" },
  "Тип результата скрипта": { ru: "Тип результата скрипта", en: "Script result type" },
  "Например, room_required": { ru: "Например, room_required", en: "For example, room_required" },
  "Выберите команду": { ru: "Выберите команду", en: "Choose a command" },
  "Выбранная команда недоступна": { ru: "Выбранная команда недоступна", en: "Selected command is unavailable" },
  "Открыть меню Home Assistant": { ru: "Открыть меню Home Assistant", en: "Open Home Assistant menu" },
  Подсказка: { ru: "Подсказка", en: "Help" },
  "Закрыть подсказку": { ru: "Закрыть подсказку", en: "Close help" },
  "По типу ответа скрипта": { ru: "По типу ответа скрипта", en: "By script response type" },
  "Название помогает найти команду в списке. Оно не используется для распознавания речи.": { ru: "Название помогает найти команду в списке. Оно не используется для распознавания речи.", en: "The name helps you find the command in the list. It is not used for speech recognition." },
  "Укажите варианты фразы через точку с запятой (;). Например: включи свет; зажги свет.\nВарианты окончаний запишите в скобках через |: свет(а|у|ом). Знак ? после скобок делает окончание необязательным: свет(а|у|ом)? распознаёт также слово «свет».\nДля подстановки значения используйте переменную, например: установи таймер на ${timer}.": { ru: `Укажите варианты фразы через точку с запятой (;). Например: включи свет; зажги свет.
Варианты окончаний запишите в скобках через |: свет(а|у|ом). Знак ? после скобок делает окончание необязательным: свет(а|у|ом)? распознаёт также слово «свет».
Для подстановки значения используйте переменную, например: установи таймер на \${timer}.`, en: `Separate alternative phrases with semicolons (;), for example: turn on the light; switch on the light.
Use parentheses and | for alternative endings: свет(а|у|ом). Add ? after the parentheses to make the ending optional: свет(а|у|ом)? also matches «свет».
Use a variable to capture a value, for example: set a timer for \${timer}.` },
  "Ответ из списка фраз — интеграция выбирает текст из раздела «Ответы» этой команды.\nОтвет из скрипта — добавьте в HA-скрипт действие интеграции, возвращающее тип результата. По этому типу выбирается соответствующий текст из раздела «Ответы».": { ru: `Ответ из списка фраз — интеграция выбирает текст из раздела «Ответы» этой команды.
Ответ из скрипта — добавьте в HA-скрипт действие интеграции, возвращающее тип результата. По этому типу выбирается соответствующий текст из раздела «Ответы».`, en: `Response from phrase list: the integration selects text from this command’s Responses section.
Response from script: add an integration action to your HA script that returns a result type. This type selects the matching text from the Responses section.` },
  "Выберите HA-скрипт для выполнения действия. При ответе из скрипта интеграция ждёт его результат. При ответе из списка скрипт запускается для распознанной прямой команды или финального ответа без обычного продолжения.": { ru: "Выберите HA-скрипт для выполнения действия. При ответе из скрипта интеграция ждёт его результат. При ответе из списка скрипт запускается для распознанной прямой команды или финального ответа без обычного продолжения.", en: "Choose an HA script to perform the action. For a script response, the integration waits for its result. For a phrase-list response, the script runs when direct values are recognized or the local response has no default continuation." },
  "Укажите тип, который возвращает HA-скрипт, например room_required. Значение должно совпадать с типом результата скрипта.": { ru: "Укажите тип, который возвращает HA-скрипт, например room_required. Значение должно совпадать с типом результата скрипта.", en: "Enter the type returned by the HA script, for example room_required. It must match the script’s result type." },
  "Текст, который произнесёт ассистент, когда выбран этот ответ.": { ru: "Текст, который произнесёт ассистент, когда выбран этот ответ.", en: "The text the assistant will say when this response is selected." },
  "Название переменной во фразе. Например, для ${room} укажите room, а для ${timer} — timer, без ${}.": { ru: "Название переменной во фразе. Например, для ${room} укажите room, а для ${timer} — timer, без ${}.", en: "The variable name in the phrase. For ${room}, enter room; for ${timer}, enter timer, without ${}." },
  "Выберите, что распознавать в переменной: текст, число, дату, время или любое значение. Название переменной и тип данных — разные настройки.": { ru: "Выберите, что распознавать в переменной: текст, число, дату, время или любое значение. Название переменной и тип данных — разные настройки.", en: "Choose what to recognize in the variable: text, a number, a date, a time, or any value. Variable name and data type are separate settings." },
  "Выберите команду по названию. В прямых командах она распознаёт значение переменной, а в продолжениях — следующую реплику диалога.": { ru: "Выберите команду по названию. В прямых командах она распознаёт значение переменной, а в продолжениях — следующую реплику диалога.", en: "Select a command by name. A direct command recognizes a variable value; a continuation recognizes the next utterance in the dialog." },
  "Код распознанного варианта, который получит HA-скрипт в matched_codes. Например, _hall для фразы «в зале».": { ru: "Код распознанного варианта, который получит HA-скрипт в matched_codes. Например, _hall для фразы «в зале».", en: "The code of the recognized option sent to the HA script in matched_codes, for example _hall for “in the hall”." },
  "Выберите шаблон со списком значений переменной и вариантами их произношения.": { ru: "Выберите шаблон со списком значений переменной и вариантами их произношения.", en: "Choose a template containing variable values and the phrases used to recognize them." },
  "Типы ответов": { ru: "Типы ответов", en: "Response types" },
  "Ответ для продолжения диалога": { ru: "Ответ для продолжения диалога", en: "Response for dialog continuation" },
  "Основной — используется для команд без продолжения диалога.\nОтвет для продолжения диалога — используется, когда у команды есть продолжение.\nПо типу результата скрипта — выбирает ответ с типом, который передал скрипт. Если скрипт не передал тип, используется основной ответ или ответ для продолжения диалога.": { ru: `Основной — используется для команд без продолжения диалога.
Ответ для продолжения диалога — используется, когда у команды есть продолжение.
По типу результата скрипта — выбирает ответ с типом, который передал скрипт. Если скрипт не передал тип, используется основной ответ или ответ для продолжения диалога.`, en: `Main: used for commands without a dialog continuation.
Response for dialog continuation: used when the command has a continuation.
By script result type: selects the response matching the type returned by the script. If the script returns no type, the main or continuation response is used.` },
  "По умолчанию — обычное продолжение диалога. Используется, если нет подходящего продолжения по типу ответа скрипта. Следующая фраза пользователя определяет, какая команда продолжения сработает.\nПо типу ответа скрипта — выбирает продолжение по значению типа, который вернул скрипт.": { ru: `По умолчанию — обычное продолжение диалога. Используется, если нет подходящего продолжения по типу ответа скрипта. Следующая фраза пользователя определяет, какая команда продолжения сработает.
По типу ответа скрипта — выбирает продолжение по значению типа, который вернул скрипт.`, en: `Default: a regular dialog continuation, used when no continuation matches the script result type. The user’s next phrase determines which continuation command matches.
By script response type: selects a continuation using the type returned by the script.` },
  "Запасной сценарий: если обычные команды не подошли, передаёт текст пользователя как есть, без сравнения с фразами запуска этой команды и без разбора прямых значений.": { ru: "Запасной сценарий: если обычные команды не подошли, передаёт текст пользователя как есть, без сравнения с фразами запуска этой команды и без разбора прямых значений.", en: "Fallback: if ordinary commands do not match, forwards the user’s text unchanged, without comparing it against this command’s trigger phrases or extracting direct values." },
  "Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room.": { ru: "Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room.", en: "The variable for trigger phrases. For example, use ${room} in a phrase if this field shows room." },
  "Вложенные команды": { ru: "Вложенные команды", en: "Nested commands" },
  "Варианты вложенных команд": { ru: "Варианты вложенных команд", en: "Nested command options" },
  "Без вложенных команд": { ru: "Без вложенных команд", en: "No nested commands" },
  "Сохранённые вложенные команды": { ru: "Сохранённые вложенные команды", en: "Saved nested commands" },
  "Выберите набор из раздела «Вложенные команды». Его варианты можно переиспользовать в нескольких прямых командах.": { ru: "Выберите набор из раздела «Вложенные команды». Его варианты можно переиспользовать в нескольких прямых командах.", en: "Choose a set from Nested commands. Its options can be reused by multiple direct commands." },
  "Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам.": { ru: "Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам.", en: "Direct-command phrases are the common part placed before nested commands. For example, the main command is “turn on ${light}”, this field is “light”, and nested commands contain “in the hall” and “in the bedroom”. Together they recognize “turn on light in the hall” and “turn on light in the bedroom”.\nYou can leave this field empty to use only the nested command phrases. The same nested command set can be linked to multiple direct commands." },
  Команда: { ru: "Команда", en: "Command" },
  "Укажите варианты одного значения через ; или с новой строки. Например: зал; в зале.\nСкобки с | задают варианты окончаний: кухн(я|ю|е) распознаёт «кухня», «кухню» и «кухне».\nЗнак ? после скобок делает окончание необязательным: зал(а|е)? распознаёт «зал», «зала» и «зале».": { ru: `Укажите варианты одного значения через ; или с новой строки. Например: зал; в зале.
Скобки с | задают варианты окончаний: кухн(я|ю|е) распознаёт «кухня», «кухню» и «кухне».
Знак ? после скобок делает окончание необязательным: зал(а|е)? распознаёт «зал», «зала» и «зале».`, en: `Separate alternative phrases for the same value with ; or new lines, for example: hall; in the hall.
Parentheses with | specify alternative endings: кухн(я|ю|е) matches «кухня», «кухню» and «кухне».
A ? after the parentheses makes the ending optional: зал(а|е)? matches «зал», «зала» and «зале».` },
  Часы: { ru: "Часы", en: "Hours" },
  Минуты: { ru: "Минуты", en: "Minutes" },
  "Время будильника": { ru: "Время будильника", en: "Alarm time" },
  "Ранее заданное время": { ru: "Ранее заданное время", en: "Previously used times" },
  "Выбранные дни": { ru: "Выбранные дни", en: "Selected days" },
  "Дни повтора": { ru: "Дни повтора", en: "Repeat days" },
  "Подключаться к удалённому серверу": { ru: "Подключаться к удалённому серверу", en: "Connect to a remote server" },
  Подключения: { ru: "Подключения", en: "Connections" },
  "Включить API": { ru: "Включить API", en: "Enable API" },
  "Не удалось прочитать медиатеку Home Assistant. Проверьте раздел «Медиа» и настройку media_dirs.": { ru: "Не удалось прочитать медиатеку Home Assistant. Проверьте раздел «Медиа» и настройку media_dirs.", en: "Unable to browse Home Assistant media. Check Media and the media_dirs configuration." },
  "Ошибка на стороне Home Assistant. Подробности — в журнале сервера.": { ru: "Ошибка на стороне Home Assistant. Подробности — в журнале сервера.", en: "Home Assistant encountered an error. See the server log for details." },
  "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.": { ru: "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.", en: "Unable to complete the operation. Check the Home Assistant log and try again." },
  Секунды: { ru: "Секунды", en: "Seconds" },
  "Поиск по названию": { ru: "Поиск по названию", en: "Search by name" },
  "Введите часть названия": { ru: "Введите часть названия", en: "Enter part of a name" },
  "Ничего не найдено": { ru: "Ничего не найдено", en: "No results found" },
  "Перейти к команде": { ru: "Перейти к команде", en: "Open command" },
  "Назад к предыдущей команде": { ru: "Назад к предыдущей команде", en: "Back to previous command" },
  Разделы: { ru: "Разделы", en: "Sections" },
  "Открыть меню разделов": { ru: "Открыть меню разделов", en: "Open section menu" },
  "Закрыть меню разделов": { ru: "Закрыть меню разделов", en: "Close section menu" },
  "Навигация интеграции": { ru: "Навигация интеграции", en: "Integration navigation" },
  "Текст озвучки": { ru: "Текст озвучки", en: "Speech text" },
  "Можно использовать переменные из ответа скрипта: например, ${reply}. Скрипт должен вернуть тип success.": { ru: "Можно использовать переменные из ответа скрипта: например, ${reply}. Скрипт должен вернуть тип success.", en: "You can use variables from the script response, for example ${reply}. The script must return the success type." },
  "Например: ${reply}": { ru: "Например: ${reply}", en: "For example: ${reply}" },
  "Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.": { ru: "Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.", en: "A script response with type success is expected. Once received, the text in the field below will be spoken." },
  "Текст, который произнесёт ассистент. Можно подставлять значения в формате ${имя}: например, «Температура ${temperature} градусов». При ответе из скрипта передайте temperature в поле variables действия ha_dialog_ui.send_command. Имя в тексте должно совпадать с ключом переменной. Для ответа из списка доступны распознанные значения команды.": { ru: "Текст, который произнесёт ассистент. Можно подставлять значения в формате ${имя}: например, «Температура ${temperature} градусов». При ответе из скрипта передайте temperature в поле variables действия ha_dialog_ui.send_command. Имя в тексте должно совпадать с ключом переменной. Для ответа из списка доступны распознанные значения команды.", en: "The text spoken by the assistant. Insert values with ${name}, for example “Temperature: ${temperature} degrees”. For script responses, pass temperature in the variables field of ha_dialog_ui.send_command. The placeholder name must match the variable key. List-based responses can use recognized command values." },
  "Обычный текст служебного ответа. В ответах команд значения подставляются через ${имя}, например ${temperature}. Чтобы озвучить данные из скрипта в настройке «Если ничего не нашёл», включите «Передать команду серверу» и задайте шаблон в поле «Текст озвучки».": { ru: "Обычный текст служебного ответа. В ответах команд значения подставляются через ${имя}, например ${temperature}. Чтобы озвучить данные из скрипта в настройке «Если ничего не нашёл», включите «Передать команду серверу» и задайте шаблон в поле «Текст озвучки».", en: "The plain text of a built-in response. Command responses support ${name} placeholders, such as ${temperature}. To speak script data in the “Nothing matched” setting, enable forwarding and enter a template in the “Speech text” field." },
  "Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success.": { ru: "Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success.", en: "Insert script data with ${name}. For example, for “Reply: ${reply}”, pass reply in the variables field of ha_dialog_ui.send_command. The names must match. The script must return the success type." },
  "Если ничего не нашёл": { ru: "Если ничего не нашёл", en: "When no command matches" },
  "Если не распознано продолжение": { ru: "Если не распознано продолжение", en: "When a follow-up is not recognized" },
  "Если продолжение не распознано несколько раз": { ru: "Если продолжение не распознано несколько раз", en: "After repeated unrecognized follow-ups" },
  "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже.": { ru: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже.", en: "Allows external applications to send commands to the integration and exchange events over HTTP API. Endpoints: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Access requires the API commands token from the field below." },
  "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер.": { ru: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер.", en: "The integration connects to an existing remote server and receives commands over SSE. Remote command actions are used to execute them, while local command sections are hidden. This switch does not start a new server." },
  "🞢 Добавить второстепенную команду": { ru: "🞢 Добавить второстепенную команду", en: "🞢 Add child command condition" },
  "🞢 Добавить прямую команду": { ru: "🞢 Добавить прямую команду", en: "🞢 Add direct command condition" },
  "Убрать второстепенную команду": { ru: "Убрать второстепенную команду", en: "Remove child command condition" },
  "Убрать прямую команду": { ru: "Убрать прямую команду", en: "Remove direct command condition" },
  Логи: { ru: "Логи", en: "Logs" },
  "Запросов к API пока нет.": { ru: "Запросов к API пока нет.", en: "No API requests yet." },
  "SSE подключён": { ru: "SSE подключён", en: "SSE connected" },
  "Событие SSE": { ru: "Событие SSE", en: "SSE event" },
  "Запрос завершён": { ru: "Запрос завершён", en: "Request completed" },
  мс: { ru: "мс", en: "ms" },
  "Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.": { ru: "Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.", en: "Latest 200 API entries with request and response bodies. Refreshes every 3 seconds. The log is cleared on restart. Sensitive fields and configured tokens are hidden." },
  "Тело запроса": { ru: "Тело запроса", en: "Request body" },
  "Тело ответа": { ru: "Тело ответа", en: "Response body" },
  "Промпт распознавания": { ru: "Промпт распознавания", en: "Recognition prompt" },
  "Адрес API Whisper": { ru: "Адрес API Whisper", en: "Whisper API URL" },
  "Токен API Whisper": { ru: "Токен API Whisper", en: "Whisper API token" },
  "Прочитать из Whisper": { ru: "Прочитать из Whisper", en: "Read from Whisper" },
  "Сохранить и применить": { ru: "Сохранить и применить", en: "Save and apply" },
  "Токен сохранён; оставьте пустым, чтобы сохранить его": { ru: "Токен сохранён; оставьте пустым, чтобы сохранить его", en: "Token saved; leave blank to keep it" },
  "Сохранено и применено в Whisper. Перезапуск контейнера не нужен.": { ru: "Сохранено и применено в Whisper. Перезапуск контейнера не нужен.", en: "Saved and applied in Whisper. No container restart is required." },
  "Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен.": { ru: "Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен.", en: "Address of the Whisper container prompt API, for example http://192.168.1.10:10301. This is a separate HTTP port, not the Wyoming port 10300." },
  "Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса.": { ru: "Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса.", en: "Optional. Leave empty if WHISPER_PROMPT_TOKEN is not set in the container. Otherwise enter it without the Bearer prefix. The saved token is hidden and reused for the same address." },
  "Укажите адрес API Whisper, например http://192.168.1.10:10301": { ru: "Укажите адрес API Whisper, например http://192.168.1.10:10301", en: "Enter the Whisper API URL, for example http://192.168.1.10:10301" },
  "Укажите токен API Whisper": { ru: "Укажите токен API Whisper", en: "Enter the Whisper API token" },
  "Whisper отклонил токен доступа": { ru: "Whisper отклонил токен доступа", en: "Whisper rejected the access token" },
  "API Whisper вернул некорректный ответ": { ru: "API Whisper вернул некорректный ответ", en: "Whisper API returned an invalid response" },
  "Промпт Whisper слишком длинный": { ru: "Промпт Whisper слишком длинный", en: "The Whisper prompt is too long" },
  "Ответ API Whisper слишком большой": { ru: "Ответ API Whisper слишком большой", en: "The Whisper API response is too large" },
  "Whisper не подтвердил применение промпта": { ru: "Whisper не подтвердил применение промпта", en: "Whisper did not confirm the prompt update" },
  "Не удалось подключиться к API Whisper. Проверьте адрес, порт и доступность контейнера.": { ru: "Не удалось подключиться к API Whisper. Проверьте адрес, порт и доступность контейнера.", en: "Could not connect to the Whisper API. Check the address, port and container availability." },
  "Промпт применён в Whisper, но не удалось сохранить настройки Home Assistant. Повторите сохранение.": { ru: "Промпт применён в Whisper, но не удалось сохранить настройки Home Assistant. Повторите сохранение.", en: "The prompt was applied in Whisper, but Home Assistant could not save the settings. Save again." },
  "Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели.": { ru: "Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели.", en: "Whisper initial_prompt: familiar words, names and example phrases. Separate phrases with ; to save them as an array. For example: Feed the cats; Start the vacuum; Turn on the hallway light. This guides recognition, not dialogue. Empty text disables the hint. Applied from the next transcription without reloading the model." },
  "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Сохранить и применить» повторно.": { ru: "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Сохранить и применить» повторно.", en: "Saved in Home Assistant. Could not apply in Whisper. Once the connection is restored, click Save and apply again." },
  "Загрузить текущий промпт из Whisper": { ru: "Загрузить текущий промпт из Whisper", en: "Load current prompt from Whisper" },
  "Отправить в Whisper": { ru: "Отправить в Whisper", en: "Send to Whisper" },
  "Сохранено в Home Assistant.": { ru: "Сохранено в Home Assistant.", en: "Saved in Home Assistant." },
  "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно.": { ru: "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно.", en: "Saved in Home Assistant. Could not apply in Whisper. Once connected, click Send to Whisper again." },
  "Закрыть уведомление": { ru: "Закрыть уведомление", en: "Dismiss notification" },
  Радионяня: { ru: "Радионяня", en: "Baby monitor" },
  "Где воспроизводить звук?": { ru: "Где воспроизводить звук?", en: "Where should audio play?" },
  "На этом устройстве": { ru: "На этом устройстве", en: "On this device" },
  "Телефон или компьютер": { ru: "Телефон или компьютер", en: "Phone or computer" },
  Колонка: { ru: "Колонка", en: "Speaker" },
  "Нет подключения": { ru: "Нет подключения", en: "Offline" },
  "Подключаемся…": { ru: "Подключаемся…", en: "Connecting…" },
  "Прослушивание активно": { ru: "Прослушивание активно", en: "Listening is active" },
  "Источник включён": { ru: "Источник включён", en: "Source is on" },
  "Готово к запуску": { ru: "Готово к запуску", en: "Ready to start" },
  Старт: { ru: "Старт", en: "Start" },
  "Начать слушать": { ru: "Начать слушать", en: "Listen" },
  "Остановить источник": { ru: "Остановить источник", en: "Stop source" },
  "Выберите колонку, чтобы слышать, что происходит рядом с ней.": { ru: "Выберите колонку, чтобы слышать, что происходит рядом с ней.", en: "Select a speaker to hear what is happening nearby." },
  "Готова к прослушиванию": { ru: "Готова к прослушиванию", en: "Ready to listen" },
  "Воспроизведение:": { ru: "Воспроизведение:", en: "Playback:" },
  "Радионяня включена:": { ru: "Радионяня включена:", en: "Baby monitor is on:" },
  "Подключение:": { ru: "Подключение:", en: "Connecting:" },
  "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня».": { ru: "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня».", en: "Closing this window keeps listening active. Stop below or leave the Baby monitor tab." },
  "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже.": { ru: "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже.", en: "This session was started outside this tab. Closing the window or tab will not stop it. Use Stop below." },
  "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124.": { ru: "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124.", en: "Baby monitor receiver is unavailable. Check the HA log and TCP port 8124." },
  "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome.": { ru: "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome.", en: "No compatible speakers found. Install compatible firmware and connect the speaker to the ESPHome integration." },
  "Чтобы сменить устройство воспроизведения, сначала остановите сеанс.": { ru: "Чтобы сменить устройство воспроизведения, сначала остановите сеанс.", en: "Stop the session before changing the playback device." },
  "Переподключение…": { ru: "Переподключение…", en: "Reconnecting…" },
  "Панель диалога": { ru: "Панель диалога", en: "Dialog panel" },
  "Разделы панели": { ru: "Разделы панели", en: "Panel sections" },
  Главная: { ru: "Главная", en: "Home" },
  Звонки: { ru: "Звонки", en: "Calls" },
  Разговор: { ru: "Разговор", en: "In call" },
  "Соединяем колонки…": { ru: "Соединяем колонки…", en: "Connecting speakers…" },
  "Ожидание ответа": { ru: "Ожидание ответа", en: "Waiting for an answer" },
  "Готово к звонку": { ru: "Готово к звонку", en: "Ready to call" },
  "Выберите колонку, с которой хотите позвонить.": { ru: "Выберите колонку, с которой хотите позвонить.", en: "Choose the speaker to call from." },
  "Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.": { ru: "Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.", en: "Call server is unavailable. Check the HA log and TCP port 8125." },
  "Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.": { ru: "Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.", en: "No call-capable speakers found. Add the calls.yaml module and update the firmware." },
  "Участвует в звонке": { ru: "Участвует в звонке", en: "In a call" },
  "Готова к звонку": { ru: "Готова к звонку", en: "Ready to call" },
  Ответить: { ru: "Ответить", en: "Answer" },
  "Положить трубку": { ru: "Положить трубку", en: "Hang up" },
  Позвонить: { ru: "Позвонить", en: "Call" },
  "Выполняем…": { ru: "Выполняем…", en: "Working…" },
  "Кому позвонить": { ru: "Кому позвонить", en: "Call to" },
  "Выберите колонку": { ru: "Выберите колонку", en: "Choose a speaker" },
  Занято: { ru: "Занято", en: "Busy" },
  "Закрытие окна или вкладки не завершает звонок. Чтобы закончить разговор, нажмите «Положить трубку» или верхнюю кнопку любой колонки. Голосовой ассистент остаётся доступен.": { ru: "Закрытие окна или вкладки не завершает звонок. Чтобы закончить разговор, нажмите «Положить трубку» или верхнюю кнопку любой колонки. Голосовой ассистент остаётся доступен.", en: "Closing the window or tab does not end the call. Hang up with the button below or the top button on either speaker. The voice assistant remains available." },
  "Выберите колонку, на которую хотите позвонить с этого устройства.": { ru: "Выберите колонку, на которую хотите позвонить с этого устройства.", en: "Choose the speaker you want to call from this device." },
  "Этот телефон или компьютер": { ru: "Этот телефон или компьютер", en: "This phone or computer" },
  "Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.": { ru: "Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.", en: "To call, allow microphone access and open Home Assistant over HTTPS." },
  "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA.": { ru: "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA.", en: "You are calling with this phone or computer microphone. Closing the dialog keeps the call running; leaving this section or closing the page ends this device’s call. Speaker-to-speaker calls are started by HA scripts." },
  "Подключаем микрофон…": { ru: "Подключаем микрофон…", en: "Connecting microphone…" },
  "Соединяем…": { ru: "Соединяем…", en: "Connecting…" },
  "Колонка уже участвует в другом звонке.": { ru: "Колонка уже участвует в другом звонке.", en: "The speaker is already in another call." },
  "Сначала завершите текущий звонок.": { ru: "Сначала завершите текущий звонок.", en: "End the current call first." },
  "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS.": { ru: "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS.", en: "Allow microphone access in browser settings and open HA over HTTPS." },
  "Микрофон на этом устройстве не найден.": { ru: "Микрофон на этом устройстве не найден.", en: "No microphone was found on this device." },
  "Микрофон занят другим приложением или недоступен.": { ru: "Микрофон занят другим приложением или недоступен.", en: "The microphone is in use by another app or unavailable." },
  "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.": { ru: "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.", en: "Could not connect the microphone or call audio. Check permissions and connection." },
  "Микрофон отключён. Звонок завершён.": { ru: "Микрофон отключён. Звонок завершён.", en: "Microphone disconnected. The call has ended." },
  "Потеряно соединение звонка.": { ru: "Потеряно соединение звонка.", en: "Call connection lost." },
  "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari.": { ru: "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari.", en: "This browser does not support calls. Open HA in a current Chrome or Safari version." },
  "Включить звук": { ru: "Включить звук", en: "Enable audio" },
  "Браузер заблокировал звук. Проверьте разрешение воспроизведения и громкость телефона.": { ru: "Браузер заблокировал звук. Проверьте разрешение воспроизведения и громкость телефона.", en: "The browser blocked audio. Check playback permission and the phone volume." },
  "Выключить микрофон": { ru: "Выключить микрофон", en: "Mute microphone" },
  "Включить микрофон": { ru: "Включить микрофон", en: "Unmute microphone" },
  "Микрофон выкл.": { ru: "Микрофон выкл.", en: "Mic off" },
  Микрофон: { ru: "Микрофон", en: "Microphone" },
  "Ваш микрофон выключен": { ru: "Ваш микрофон выключен", en: "Your microphone is muted" },
  Динамик: { ru: "Динамик", en: "Speaker" },
  Звук: { ru: "Звук", en: "Audio" },
  Завершить: { ru: "Завершить", en: "End call" },
  "Устройство вывода": { ru: "Устройство вывода", en: "Audio output" },
  "Длительность звонка": { ru: "Длительность звонка", en: "Call duration" },
  "Выход звука — через настройки телефона": { ru: "Выход звука — через настройки телефона", en: "Choose audio output in phone settings" },
  "Не удалось переключить звук. Используйте системный выбор аудиоустройства.": { ru: "Не удалось переключить звук. Используйте системный выбор аудиоустройства.", en: "Could not switch audio output. Use the system audio device selector." },
  "Этот браузер не разрешает переключать разговорный динамик и громкую связь из сайта. Выберите динамик или наушники в системном меню телефона. Кнопка «Звук» повторно включает воспроизведение.": { ru: "Этот браузер не разрешает переключать разговорный динамик и громкую связь из сайта. Выберите динамик или наушники в системном меню телефона. Кнопка «Звук» повторно включает воспроизведение.", en: "This browser cannot switch between the earpiece and speakerphone from a website. Choose speakers or headphones in the phone system menu. The Audio button resumes playback." }
}, ap = "ha-dialog-ui-language";
let Yl = localStorage.getItem(ap) === "en" ? "en" : "ru";
const bl = /* @__PURE__ */ new Set();
function Qg(r) {
  Yl = r, localStorage.setItem(ap, r), bl.forEach((i) => i());
}
function ip() {
  return m.useSyncExternalStore((r) => (bl.add(r), () => {
    bl.delete(r);
  }), () => Yl);
}
function _(r) {
  if (typeof r != "string") return r;
  const i = qg[r];
  return (i == null ? void 0 : i[Yl]) ?? r;
}
const Kg = "_button_180pj_1", Yg = "_full_180pj_32", Gg = "_primary_180pj_37", Jg = "_secondary_180pj_49", Xg = "_ghost_180pj_61", Zg = "_remove_180pj_83", Sl = {
  button: Kg,
  full: Yg,
  primary: Gg,
  secondary: Jg,
  ghost: Xg,
  remove: Zg
}, ae = ({
  children: r,
  variant: i = "primary",
  fullWidth: a = !1,
  leftIcon: c,
  rightIcon: d,
  className: f = "",
  ...p
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    ...p,
    className: `
        ${Sl.button}
        ${Sl[i]}
        ${a ? Sl.full : ""}
        ${f}
      `,
    children: [
      c,
      r,
      d
    ]
  }
), Rl = "ha-dialog-ui-api-enabled-change", lp = m.createContext(!1), Gl = () => m.useContext(lp), up = m.createContext(!1), Jl = () => m.useContext(up), ca = "ha-dialog-ui-remote-server-change", cp = m.createContext(null), zr = () => m.useContext(cp), nt = (r = 768) => {
  const [i, a] = m.useState(
    window.innerWidth <= r
  );
  return m.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      a(f.matches);
    };
    return a(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), i;
}, e_ = "_tabs_1vwxg_1", t_ = "_dropdown_1vwxg_16", n_ = "_tab_1vwxg_1", r_ = "_active_1vwxg_49", s_ = "_menu_1vwxg_59", o_ = "_chevron_1vwxg_76", a_ = "_menuItem_1vwxg_84", ve = {
  tabs: e_,
  dropdown: t_,
  tab: n_,
  active: r_,
  menu: s_,
  chevron: o_,
  menuItem: a_
}, ht = () => {
  const r = nt(), i = Gl(), a = Jl(), c = zr(), d = kt(), [f, p] = m.useState(!1), v = m.useRef(null), g = m.useRef(null), w = m.useId();
  if (m.useEffect(() => {
    p(!1);
  }, [d.pathname, r, c]), m.useEffect(() => {
    if (!f) return;
    const y = (x) => {
      v.current && !x.composedPath().includes(v.current) && p(!1);
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("focusin", y), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("focusin", y);
    };
  }, [f]), !r)
    return /* @__PURE__ */ o.jsxs("div", { className: ve.tabs, children: [
      c === !0 && /* @__PURE__ */ o.jsxs(
        pt,
        {
          to: "/scripts",
          className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab,
          children: [
            /* @__PURE__ */ o.jsx(Fy, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _(c ? "Действия удалённых команд" : "Запуск скриптов") })
          ]
        }
      ),
      c === !1 && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: ve.dropdown,
          ref: v,
          onKeyDown: (y) => {
            var x;
            y.key === "Escape" && f && (y.stopPropagation(), p(!1), (x = g.current) == null || x.focus());
          },
          children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                ref: g,
                className: `${ve.tab} ${d.pathname.startsWith("/commands") ? ve.active : ""}`,
                "aria-expanded": f,
                "aria-controls": w,
                onClick: () => p((y) => !y),
                onKeyDown: (y) => {
                  y.key === "ArrowDown" && (y.preventDefault(), p(!0), requestAnimationFrame(() => {
                    var x, S;
                    return (S = (x = v.current) == null ? void 0 : x.querySelector("a")) == null ? void 0 : S.focus();
                  }));
                },
                children: [
                  /* @__PURE__ */ o.jsx(Oy, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ o.jsx("span", { children: _("Команды") }),
                  /* @__PURE__ */ o.jsx(tp, { size: 14, className: ve.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ o.jsxs(
              "nav",
              {
                id: w,
                className: ve.menu,
                "aria-label": _("Разделы команд"),
                onClick: () => p(!1),
                children: [
                  /* @__PURE__ */ o.jsx(
                    pt,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${ve.menuItem} ${ve.active}` : ve.menuItem,
                      children: _("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    pt,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${ve.menuItem} ${ve.active}` : ve.menuItem,
                      children: _("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    pt,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${ve.menuItem} ${ve.active}` : ve.menuItem,
                      children: _("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    pt,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${ve.menuItem} ${ve.active}` : ve.menuItem,
                      children: _("Ответы по умолчанию")
                    }
                  ),
                  a && /* @__PURE__ */ o.jsx(
                    pt,
                    {
                      to: "/commands/whisper",
                      className: ({ isActive: y }) => y ? `${ve.menuItem} ${ve.active}` : ve.menuItem,
                      children: _("Промпт распознавания")
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        pt,
        {
          to: "/timer",
          className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab,
          children: [
            /* @__PURE__ */ o.jsx(mg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        pt,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab,
          children: [
            /* @__PURE__ */ o.jsx(ep, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Будильники") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(pt, { to: "/monitor", className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab, children: [
        /* @__PURE__ */ o.jsx(Ql, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Радионяня") })
      ] }),
      /* @__PURE__ */ o.jsxs(pt, { to: "/calls", className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab, children: [
        /* @__PURE__ */ o.jsx(ua, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Звонки") })
      ] }),
      a && /* @__PURE__ */ o.jsxs(pt, { to: "/downloads", className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab, children: [
        /* @__PURE__ */ o.jsx(np, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Импорт и экспорт") })
      ] }),
      i && a && /* @__PURE__ */ o.jsx(pt, { to: "/logs", className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab, children: _("Логи") }),
      /* @__PURE__ */ o.jsxs(
        pt,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab,
          children: [
            /* @__PURE__ */ o.jsx(sp, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Настройки") })
          ]
        }
      )
    ] });
}, $s = "dialogCustomUiOverlay", ea = [], da = /* @__PURE__ */ new Set();
let i_ = 0, Mr = null, Al = !1;
function l_() {
  Al = !0, window.addEventListener("popstate", () => {
    Al = !1;
    const r = [...da];
    da.clear(), queueMicrotask(() => r.forEach((i) => i()));
  }, { once: !0 }), history.back();
}
function dp(r, i) {
  const a = nt(), c = m.useRef(i);
  c.current = i, m.useEffect(() => {
    if (!r || !a) return;
    const d = `overlay-${++i_}`;
    let f = !1, p = !1, v = !1;
    const g = () => {
      var y;
      ea.at(-1) !== d || ((y = history.state) == null ? void 0 : y[$s]) === d || (f = !0, c.current());
    }, w = () => {
      var x;
      if (v) return;
      p = !0, ea.push(d);
      const y = { ...history.state, [$s]: d };
      Mr && ((x = history.state) == null ? void 0 : x[$s]) === Mr ? (history.replaceState(y, ""), Mr = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return Al ? da.add(w) : w(), () => {
      var y;
      v = !0, da.delete(w), window.removeEventListener("popstate", g), p && (ea.splice(ea.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[$s]) === d && (Mr = d, queueMicrotask(() => {
        var x;
        Mr === d && (Mr = null, ((x = history.state) == null ? void 0 : x[$s]) === d && l_());
      })));
    };
  }, [r, a]);
}
const u_ = "_overlay_tb5vv_1", c_ = "_sheet_tb5vv_11", d_ = "_handle_tb5vv_21", Jn = {
  overlay: u_,
  sheet: c_,
  handle: d_
}, Xl = ({
  open: r,
  className: i = "",
  labelledBy: a,
  onClose: c,
  children: d
}) => {
  dp(r, c);
  const [f, p] = m.useState(r), [v, g] = m.useState(r), w = m.useRef(0), y = m.useRef(0), [x, S] = m.useState(0);
  m.useEffect(() => {
    const N = document.body.style.overflow;
    if (r)
      p(!0), requestAnimationFrame(() => {
        g(!0);
      }), document.body.style.overflow = "hidden";
    else {
      g(!1);
      const A = setTimeout(() => {
        p(!1);
      }, 300);
      return () => clearTimeout(A);
    }
    return () => {
      document.body.style.overflow = N;
    };
  }, [r]);
  const j = (N) => {
    w.current = N.touches[0].clientY;
  }, b = (N) => {
    y.current = N.touches[0].clientY;
    const A = y.current - w.current;
    A > 0 && S(A);
  }, C = () => {
    x > 120 && c(), S(0);
  };
  return m.useEffect(() => {
    const N = (A) => {
      A.key === "Escape" && c();
    };
    return r && window.addEventListener(
      "keydown",
      N
    ), () => {
      window.removeEventListener(
        "keydown",
        N
      );
    };
  }, [r, c]), f ? /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `${Jn.overlay} ${v ? Jn.visible : ""} ${i}`,
      onClick: c,
      children: /* @__PURE__ */ o.jsxs(
        "section",
        {
          className: `${Jn.sheet} ${v ? Jn.open : ""}`,
          style: {
            transform: `translateY(${x}px)`,
            transition: x === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
          },
          onClick: (N) => N.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": a,
          children: [
            /* @__PURE__ */ o.jsx(
              "div",
              {
                className: Jn.handleArea,
                onTouchStart: j,
                onTouchMove: b,
                onTouchEnd: C,
                children: /* @__PURE__ */ o.jsx("div", { className: Jn.handle })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: Jn.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, f_ = "_overlay_avpnk_1", p_ = "_heading_avpnk_16", h_ = "_close_avpnk_32", m_ = "_nav_avpnk_45", v_ = "_item_avpnk_51", y_ = "_icon_avpnk_70", g_ = "_label_avpnk_78", __ = "_arrow_avpnk_86", x_ = "_active_avpnk_91", fn = {
  overlay: f_,
  heading: p_,
  close: h_,
  nav: m_,
  item: v_,
  icon: y_,
  label: g_,
  arrow: __,
  active: x_
};
function w_({ open: r, onClose: i }) {
  const a = Gl(), c = Jl(), d = zr(), { pathname: f } = kt(), p = m.useId(), v = m.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: Xy },
      { to: "/commands/sub", label: "Второстепенные команды", icon: By },
      { to: "/commands/direct/main", label: "Прямые команды", icon: pf },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: Qy },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: wl },
      ...c ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: wl }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: pf }] : [],
    { to: "/timer", label: "Таймеры", icon: Ly },
    { to: "/alarm", label: "Будильники", icon: ep },
    { to: "/monitor", label: "Радионяня", icon: Ql },
    { to: "/calls", label: "Звонки", icon: ua },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: np }] : [],
    ...a && c ? [{ to: "/logs", label: "Логи", icon: wl }] : [],
    { to: "/settings", label: "Настройки", icon: sp }
  ];
  return m.useEffect(() => {
    if (!r) return;
    const w = requestAnimationFrame(() => {
      var y, x, S;
      return (S = ((y = v.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((x = v.current) == null ? void 0 : x.querySelector("a"))) == null ? void 0 : S.focus();
    });
    return () => cancelAnimationFrame(w);
  }, [r]), /* @__PURE__ */ o.jsx(Xl, { open: r, onClose: i, labelledBy: p, className: fn.overlay, children: /* @__PURE__ */ o.jsxs("div", { ref: v, onKeyDown: (w) => {
    if (w.key !== "Tab") return;
    const y = [...v.current.querySelectorAll("button, a")], x = y[0], S = y[y.length - 1];
    w.shiftKey && w.target === x ? (w.preventDefault(), S.focus()) : !w.shiftKey && w.target === S && (w.preventDefault(), x.focus());
  }, children: [
    /* @__PURE__ */ o.jsxs("div", { className: fn.heading, children: [
      /* @__PURE__ */ o.jsx("h2", { id: p, children: _("Разделы") }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: fn.close, "aria-label": _("Закрыть меню разделов"), onClick: i, children: /* @__PURE__ */ o.jsx(op, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsx("nav", { className: fn.nav, "aria-label": _("Навигация интеграции"), children: g.map(({ to: w, label: y, icon: x }) => /* @__PURE__ */ o.jsxs(
      pt,
      {
        to: w,
        end: !0,
        className: ({ isActive: S }) => `${fn.item} ${S ? fn.active : ""}`,
        onClick: (S) => {
          f === w && S.preventDefault(), i();
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: fn.icon, children: /* @__PURE__ */ o.jsx(x, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ o.jsx("span", { className: fn.label, children: _(y) }),
          f === w ? /* @__PURE__ */ o.jsx(Ny, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(Sy, { size: 16, className: fn.arrow, "aria-hidden": "true" })
        ]
      },
      w
    )) })
  ] }) });
}
const S_ = "_search_1h7xe_1", k_ = {
  search: S_
};
function Hr({ value: r, onChange: i }) {
  return /* @__PURE__ */ o.jsxs("div", { className: k_.search, children: [
    /* @__PURE__ */ o.jsx(cg, { size: 18, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "search",
        "aria-label": _("Поиск по названию"),
        placeholder: _("Поиск по названию"),
        value: r,
        onChange: (a) => i(a.target.value)
      }
    )
  ] });
}
const j_ = "_header_1pxju_1", C_ = "_bar_1pxju_9", E_ = "_tools_1pxju_18", N_ = "_title_1pxju_31", T_ = "_menuButton_1pxju_38", b_ = "_active_1pxju_76", Xn = {
  header: j_,
  bar: C_,
  tools: E_,
  title: N_,
  menuButton: T_,
  active: b_
}, mt = ({ title: r = "", search: i, beforeSearch: a }) => {
  const c = nt(), [d, f] = m.useState(!1), p = m.useRef(null), v = () => {
    var g;
    f(!1), (g = p.current) == null || g.focus();
  };
  return m.useEffect(() => {
    c || f(!1);
  }, [c]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { className: Xn.header, children: [
      /* @__PURE__ */ o.jsxs("div", { className: Xn.bar, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-label": _("Открыть меню Home Assistant"),
            className: Xn.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ o.jsx(rp, { size: 20 })
          }
        ),
        /* @__PURE__ */ o.jsx("h1", { className: Xn.title, children: _(r) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            ref: p,
            "aria-label": _("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${Xn.menuButton} ${d ? Xn.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ o.jsx(Yy, { size: 20 })
          }
        )
      ] }),
      c && (a || i) && /* @__PURE__ */ o.jsxs("div", { className: Xn.tools, children: [
        a,
        i && /* @__PURE__ */ o.jsx(Hr, { ...i })
      ] })
    ] }),
    c && /* @__PURE__ */ o.jsx(w_, { open: d, onClose: v })
  ] });
};
function R_({ retry: r }) {
  const i = ir();
  let a = "dark";
  try {
    a = localStorage.getItem("ha-dialog-ui-theme") || "dark";
  } catch {
  }
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "appShell panelRecovery panelRenderRecovery",
      "data-theme": a,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "panelRecoveryNavigation", children: i ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(ht, {}),
          /* @__PURE__ */ o.jsx(mt, { title: _("Панель диалога") })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            ae,
            {
              variant: "ghost",
              "aria-label": _("Открыть меню Home Assistant"),
              onClick: (c) => c.currentTarget.dispatchEvent(
                new CustomEvent("hass-toggle-menu", {
                  bubbles: !0,
                  composed: !0
                })
              ),
              children: /* @__PURE__ */ o.jsx(rp, { size: 22 })
            }
          ),
          /* @__PURE__ */ o.jsx("nav", { "aria-label": _("Разделы панели"), children: [
            ["/", "Главная"],
            ["/timer", "Таймеры"],
            ["/alarm", "Будильники"],
            ["/monitor", "Радионяня"],
            ["/calls", "Звонки"],
            ["/settings", "Настройки"]
          ].map(([c, d]) => /* @__PURE__ */ o.jsx(
            "a",
            {
              href: `#${c}`,
              onClick: (f) => {
                f.preventDefault(), window.location.hash = c, r();
              },
              children: _(d)
            },
            c
          )) })
        ] }) }),
        /* @__PURE__ */ o.jsx("main", { className: "panelRecoveryContent", children: /* @__PURE__ */ o.jsxs("div", { role: "alert", className: "panelRecoveryMessage", children: [
          /* @__PURE__ */ o.jsx("p", { children: _("Не удалось открыть панель. Попробуйте ещё раз.") }),
          /* @__PURE__ */ o.jsx(ae, { onClick: r, children: _("Открыть повторно") })
        ] }) })
      ]
    }
  );
}
class fp extends m.Component {
  constructor() {
    super(...arguments);
    be(this, "state", { failed: !1 });
    be(this, "retry", () => this.setState({ failed: !1 }));
    be(this, "routeChanged", () => {
      this.state.failed && this.props.resetKey === void 0 && this.retry();
    });
  }
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.routeChanged);
  }
  componentWillUnmount() {
    window.removeEventListener("hashchange", this.routeChanged);
  }
  componentDidUpdate(a) {
    this.state.failed && a.resetKey !== this.props.resetKey && this.retry();
  }
  componentDidCatch(a, c) {
    console.error(
      "[ha_dialog_ui] Panel render failed",
      a,
      c.componentStack
    );
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ o.jsx(R_, { retry: this.retry }) : this.props.children;
  }
}
const A_ = "_loader_m2244_1", P_ = "_fullscreen_m2244_11", $_ = "_spinner_m2244_15", M_ = "_label_m2244_24", ta = {
  loader: A_,
  fullscreen: P_,
  spinner: $_,
  label: M_
}, Fr = ({ label: r = "Загрузка...", fullscreen: i = !1 }) => /* @__PURE__ */ o.jsxs("div", { className: `${ta.loader} ${i ? ta.fullscreen : ""}`, role: "status", "aria-live": "polite", children: [
  /* @__PURE__ */ o.jsx("span", { className: ta.spinner, "aria-hidden": "true" }),
  r && /* @__PURE__ */ o.jsx("span", { className: ta.label, children: _(r) })
] }), I_ = "_error_fi1f1_1", L_ = {
  error: I_
}, Ge = ({ error: r, retry: i, busy: a = !1 }) => r ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: L_.error, children: [
  /* @__PURE__ */ o.jsx("p", { children: _(r) }),
  i && /* @__PURE__ */ o.jsx(ae, { variant: "secondary", disabled: a, onClick: i, children: _("Повторить загрузку") })
] }) : null, hf = {
  unauthorized: "Недостаточно прав. Войдите как администратор Home Assistant.",
  not_allowed: "Недостаточно прав. Войдите как администратор Home Assistant.",
  not_found: "Запись больше не существует. Обновите список.",
  timeout: "Home Assistant не ответил вовремя. Проверьте подключение и повторите загрузку.",
  connection_lost: "Соединение с Home Assistant потеряно. Проверьте подключение и повторите загрузку.",
  reload_failed: "Данные сохранены, но не удалось обновить интеграцию. Обновите список перед следующими изменениями.",
  import_failed: "Не удалось импортировать данные. Проверьте журнал Home Assistant и текущее состояние записей.",
  browse_media_failed: "Не удалось прочитать медиатеку Home Assistant. Проверьте раздел «Медиа» и настройку media_dirs.",
  unknown_error: "Ошибка на стороне Home Assistant. Подробности — в журнале сервера.",
  unknown_command: "Команда API недоступна. Обновите интеграцию и перезапустите Home Assistant.",
  invalid_format: "Некорректные данные запроса. Обновите страницу и проверьте введённые значения.",
  invalid_payload: "Некорректные данные запроса. Проверьте файл или введённые значения."
};
function Tt(r, i = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.") {
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? (r.code === "call_error" || r.code === "monitor_error" || r.code === "whisper_prompt_error") && "message" in r && typeof r.message == "string" ? r.message : hf[r.code] ?? i : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? hf.connection_lost : i;
}
function Qt() {
  const [r, i] = m.useState(null), [a, c] = m.useState(!1), [d, f] = m.useState(!1), p = m.useRef(0), v = m.useRef(null), g = m.useCallback(async (x, S = {}) => {
    if (S.exclusive && p.current > 0) return !1;
    p.current += 1, c(!0), i(null), f(!1);
    try {
      return await x(), v.current = null, !0;
    } catch (j) {
      return i(Tt(j, S.fallback)), v.current = S.retryable ? x : null, f(!!S.retryable), !1;
    } finally {
      p.current -= 1, c(p.current > 0);
    }
  }, []), w = m.useCallback(() => {
    v.current && g(v.current, { retryable: !0 });
  }, [g]), y = m.useCallback(() => {
    i(null), f(!1), v.current = null;
  }, []);
  return { error: r, busy: a, retry: d ? w : void 0, run: g, clearError: y };
}
const pp = m.createContext(null);
function ct() {
  const r = m.useContext(pp);
  if (!r)
    throw new Error(
      "DialogContext not initialized"
    );
  return r;
}
const D_ = "_toast_1g76h_1", O_ = "_warning_1g76h_43", mf = {
  toast: D_,
  warning: O_
};
function z_({ message: r, warning: i = !1, onClose: a }) {
  m.useEffect(() => {
    const d = setTimeout(a, 5e3);
    return () => clearTimeout(d);
  }, [r, i, a]);
  const c = i ? yg : Ry;
  return /* @__PURE__ */ o.jsxs("div", { role: "status", "aria-live": "polite", className: `${mf.toast} ${i ? mf.warning : ""}`, children: [
    /* @__PURE__ */ o.jsx(c, { size: 22, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("span", { children: r }),
    /* @__PURE__ */ o.jsx("button", { type: "button", "aria-label": _("Закрыть уведомление"), onClick: a, children: /* @__PURE__ */ o.jsx(op, { size: 18 }) })
  ] });
}
const hp = {
  "Отправить команду как есть": "Запасной сценарий: если обычные команды не подошли, передаёт текст пользователя как есть, без сравнения с фразами запуска этой команды и без разбора прямых значений.",
  "Название команды": "Название помогает найти команду в списке. Оно не используется для распознавания речи.",
  "Фразы для запуска": `Укажите варианты фразы через точку с запятой (;). Например: включи свет; зажги свет.
Варианты окончаний запишите в скобках через |: свет(а|у|ом). Знак ? после скобок делает окончание необязательным: свет(а|у|ом)? распознаёт также слово «свет».
Для подстановки значения используйте переменную, например: установи таймер на \${timer}.`,
  "Источник ответа": `Ответ из списка фраз — интеграция выбирает текст из раздела «Ответы» этой команды.
Ответ из скрипта — добавьте в HA-скрипт действие интеграции, возвращающее тип результата. По этому типу выбирается соответствующий текст из раздела «Ответы».`,
  "Скрипт Home Assistant": "Выберите HA-скрипт для выполнения действия. При ответе из скрипта интеграция ждёт его результат. При ответе из списка скрипт запускается для распознанной прямой команды или финального ответа без обычного продолжения.",
  "Типы ответов": `Основной — используется для команд без продолжения диалога.
Ответ для продолжения диалога — используется, когда у команды есть продолжение.
По типу результата скрипта — выбирает ответ с типом, который передал скрипт. Если скрипт не передал тип, используется основной ответ или ответ для продолжения диалога.`,
  "Тип результата скрипта": "Укажите тип, который возвращает HA-скрипт, например room_required. Значение должно совпадать с типом результата скрипта.",
  voiceResponse: "Текст, который произнесёт ассистент. Можно подставлять значения в формате ${имя}: например, «Температура ${temperature} градусов». При ответе из скрипта передайте temperature в поле variables действия ha_dialog_ui.send_command. Имя в тексте должно совпадать с ключом переменной. Для ответа из списка доступны распознанные значения команды.",
  mappingType: "Название переменной во фразе. Например, для ${room} укажите room, а для ${timer} — timer, без ${}.",
  valueType: "Выберите, что распознавать в переменной: текст, число, дату, время или любое значение. Название переменной и тип данных — разные настройки.",
  "Вид продолжения": `По умолчанию — обычное продолжение диалога. Используется, если нет подходящего продолжения по типу ответа скрипта. Следующая фраза пользователя определяет, какая команда продолжения сработает.
По типу ответа скрипта — выбирает продолжение по значению типа, который вернул скрипт.`,
  uuid: "Выберите команду по названию. В прямых командах она распознаёт значение переменной, а в продолжениях — следующую реплику диалога.",
  "Ответное сообщение": "Обычный текст служебного ответа. В ответах команд значения подставляются через ${имя}, например ${temperature}. Чтобы озвучить данные из скрипта в настройке «Если ничего не нашёл», включите «Передать команду серверу» и задайте шаблон в поле «Текст озвучки».",
  "Код значения": "Код распознанного варианта, который получит HA-скрипт в matched_codes. Например, _hall для фразы «в зале».",
  subMappingType: "Код распознанного варианта, который получит HA-скрипт в matched_codes. Например, _hall для фразы «в зале».",
  "Варианты произношения": `Укажите варианты одного значения через ; или с новой строки. Например: зал; в зале.
Скобки с | задают варианты окончаний: кухн(я|ю|е) распознаёт «кухня», «кухню» и «кухне».
Знак ? после скобок делает окончание необязательным: зал(а|е)? распознаёт «зал», «зала» и «зале».`,
  subVoiceCommands: `Укажите варианты одного значения через ; или с новой строки. Например: зал; в зале.
Скобки с | задают варианты окончаний: кухн(я|ю|е) распознаёт «кухня», «кухню» и «кухне».
Знак ? после скобок делает окончание необязательным: зал(а|е)? распознаёт «зал», «зала» и «зале».`,
  subDirectControl: "Выберите набор из раздела «Вложенные команды». Его варианты можно переиспользовать в нескольких прямых командах."
};
function mp(r) {
  var i;
  return (i = Object.entries(hp).find(([a]) => r === a || r === _(a))) == null ? void 0 : i[1];
}
function ya(r) {
  const i = _(hp["Название команды"]);
  return r ? `${i}
UUID: ${r}` : i;
}
const H_ = "_labelRow_1w41x_1", F_ = "_helpButton_1w41x_12", W_ = "_tooltip_1w41x_37", B_ = "_helpOverlay_1w41x_56", U_ = "_sheetContent_1w41x_60", Os = {
  labelRow: H_,
  helpButton: F_,
  tooltip: W_,
  helpOverlay: B_,
  sheetContent: U_
};
function Zl({ label: r, htmlFor: i, className: a, hint: c }) {
  const d = c ?? mp(r);
  return /* @__PURE__ */ o.jsxs("div", { className: Os.labelRow, children: [
    /* @__PURE__ */ o.jsx("label", { htmlFor: i, className: a, children: _(r) }),
    d && /* @__PURE__ */ o.jsx(rr, { label: r, description: d })
  ] });
}
function rr({ label: r, description: i = mp(r) ?? "" }) {
  var C, N;
  const a = nt(), [c, d] = m.useState(!1), [f, p] = m.useState({ left: 12, top: 12 }), v = m.useRef(null), g = m.useRef(null), w = m.useRef(), y = m.useId(), x = () => {
    var A;
    d(!1), a && ((A = v.current) == null || A.focus());
  }, S = () => {
    clearTimeout(w.current), d(!0);
  }, j = () => {
    w.current = setTimeout(() => d(!1), 150);
  };
  m.useEffect(() => () => clearTimeout(w.current), []), m.useEffect(() => {
    d(!1);
  }, [a]), m.useLayoutEffect(() => {
    if (!c || a || !v.current || !g.current) return;
    const A = v.current.getBoundingClientRect(), F = g.current.getBoundingClientRect();
    p({
      left: Math.max(12, Math.min(A.left, window.innerWidth - F.width - 12)),
      top: Math.max(12, A.bottom + 8 + F.height <= window.innerHeight - 12 ? A.bottom + 8 : A.top - F.height - 8)
    });
  }, [c, a]), m.useEffect(() => {
    if (!c) return;
    const A = (P) => {
      P.key === "Escape" ? (P.preventDefault(), P.stopImmediatePropagation(), x()) : a && P.key === "Tab" && P.preventDefault();
    };
    window.addEventListener("keydown", A, !0);
    const F = (P) => {
      var H;
      !a && !(P.target instanceof Node && ((H = g.current) != null && H.contains(P.target))) && d(!1);
    };
    return window.addEventListener("scroll", F, !0), window.addEventListener("resize", F), () => {
      window.removeEventListener("keydown", A, !0), window.removeEventListener("scroll", F, !0), window.removeEventListener("resize", F);
    };
  }, [c, a]);
  const b = ((C = v.current) == null ? void 0 : C.closest("[data-theme]")) ?? ((N = v.current) == null ? void 0 : N.getRootNode());
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        ref: v,
        type: "button",
        className: Os.helpButton,
        "aria-label": `${_("Подсказка")}: ${_(r)}`,
        "aria-describedby": c && !a ? y : void 0,
        "aria-haspopup": a ? "dialog" : void 0,
        "aria-expanded": a ? c : void 0,
        onMouseEnter: () => {
          a || S();
        },
        onMouseLeave: () => {
          a || j();
        },
        onFocus: () => {
          a || S();
        },
        onBlur: () => {
          a || j();
        },
        onClick: S,
        children: /* @__PURE__ */ o.jsx(Py, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && b && Xf.createPortal(a ? /* @__PURE__ */ o.jsx(Xl, { open: !0, onClose: x, className: Os.helpOverlay, labelledBy: y, children: /* @__PURE__ */ o.jsxs("div", { className: Os.sheetContent, children: [
      /* @__PURE__ */ o.jsx("h3", { id: y, children: _(r) }),
      /* @__PURE__ */ o.jsx("p", { children: _(i) }),
      /* @__PURE__ */ o.jsx(ae, { autoFocus: !0, variant: "secondary", onClick: x, children: _("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: g,
        id: y,
        role: "tooltip",
        className: Os.tooltip,
        style: f,
        onMouseEnter: S,
        onMouseLeave: j,
        children: _(i)
      }
    ), b)
  ] });
}
const V_ = "_field_1vuim_1", q_ = "_label_1vuim_10", Q_ = "_inputWrapper_1vuim_18", K_ = "_input_1vuim_18", Y_ = "_passwordInput_1vuim_40", G_ = "_passwordToggle_1vuim_66", J_ = "_error_1vuim_95", X_ = "_errorText_1vuim_108", Ln = {
  field: V_,
  label: q_,
  inputWrapper: Q_,
  input: K_,
  passwordInput: Y_,
  passwordToggle: G_,
  error: J_,
  errorText: X_
}, Je = ({
  label: r,
  hint: i,
  error: a,
  disabled: c,
  className: d = "",
  id: f,
  type: p,
  ...v
}) => {
  const g = m.useId(), [w, y] = m.useState(!1), x = f ?? g, S = p === "password" && w ? "text" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: Ln.field, children: [
    r && /* @__PURE__ */ o.jsx(Zl, { label: r, htmlFor: x, className: Ln.label, hint: i }),
    /* @__PURE__ */ o.jsxs("div", { className: Ln.inputWrapper, children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: x,
          disabled: c,
          type: S,
          ...v,
          "aria-invalid": a ? !0 : v["aria-invalid"],
          "aria-describedby": [v["aria-describedby"], a ? `${x}-error` : void 0].filter(Boolean).join(" ") || void 0,
          className: `
            ${Ln.input}
            ${p === "password" ? Ln.passwordInput : ""}
            ${a ? Ln.error : ""}
            ${d}
          `
        }
      ),
      p === "password" && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: Ln.passwordToggle,
          onClick: () => y((j) => !j),
          disabled: c,
          "aria-label": w ? "Hide password" : "Show password",
          children: w ? "🙈" : "👁"
        }
      )
    ] }),
    a && /* @__PURE__ */ o.jsx("span", { id: `${x}-error`, className: Ln.errorText, children: _(a) })
  ] });
}, Z_ = "_field_1aipr_1", e1 = "_label_1aipr_8", t1 = "_textarea_1aipr_14", n1 = "_error_1aipr_46", r1 = "_errorText_1aipr_55", Ms = {
  field: Z_,
  label: e1,
  textarea: t1,
  error: n1,
  errorText: r1
}, sr = ({
  label: r,
  hint: i,
  error: a,
  className: c = "",
  id: d,
  ...f
}) => {
  const p = m.useId(), v = d ?? p;
  return /* @__PURE__ */ o.jsxs("div", { className: Ms.field, children: [
    r && /* @__PURE__ */ o.jsx(Zl, { label: r, htmlFor: v, className: Ms.label, hint: i }),
    /* @__PURE__ */ o.jsx(
      "textarea",
      {
        id: v,
        ...f,
        className: `
          ${Ms.textarea}
          ${a ? Ms.error : ""}
          ${c}
        `
      }
    ),
    a && /* @__PURE__ */ o.jsx("span", { className: Ms.errorText, children: _(a) })
  ] });
}, s1 = "_form_15zw4_1", o1 = "_actions_15zw4_8", vf = {
  form: s1,
  actions: o1
};
function a1() {
  const r = ct(), i = Qt(), [a, c] = m.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = m.useState(""), [p, v] = m.useState(""), [g, w] = m.useState(!1), [y, x] = m.useState(null);
  m.useEffect(() => {
    let b = !0;
    return i.run(async () => {
      const C = await r.getData("get_whisper_prompt");
      b && (c({ ...C, initial_prompt: Array.isArray(C.initial_prompt) ? C.initial_prompt.join("; ") : C.initial_prompt }), v(C.url), w(!0));
    }, { retryable: !0 }), () => {
      b = !1;
    };
  }, [r, i.run]);
  const S = (b) => {
    c((C) => ({ ...C, ...b })), x(null);
  }, j = (b) => i.run(async () => {
    const C = await r.saveData({
      url: a.url,
      token: d,
      apply: b,
      initial_prompt: a.initial_prompt
    }, "save_whisper_prompt");
    c((N) => ({ ...N, initial_prompt: Array.isArray(C.initial_prompt) ? C.initial_prompt.join("; ") : C.initial_prompt, has_token: !!(d.trim() || N.has_token && a.url === p) })), x({ message: b ? C.applied ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен." : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно." : "Сохранено в Home Assistant.", warning: b && !C.applied }), v(a.url), f("");
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs("section", { className: vf.form, children: [
    /* @__PURE__ */ o.jsx(Ge, { ...i }),
    !g && !i.error && /* @__PURE__ */ o.jsx(Fr, {}),
    g && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        Je,
        {
          label: _("Адрес API Whisper"),
          hint: _("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен."),
          placeholder: "http://192.168.1.10:10301",
          value: a.url,
          disabled: i.busy,
          onChange: (b) => S({ url: b.target.value })
        }
      ),
      /* @__PURE__ */ o.jsx(
        Je,
        {
          label: _("Токен API Whisper"),
          hint: _("Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса."),
          type: "password",
          value: d,
          disabled: i.busy,
          autoComplete: "new-password",
          placeholder: a.has_token && a.url === p ? _("Токен сохранён; оставьте пустым, чтобы сохранить его") : "",
          onChange: (b) => {
            f(b.target.value), x(null);
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        sr,
        {
          label: _("Промпт распознавания"),
          hint: _("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели."),
          rows: 10,
          maxLength: 16e3,
          value: a.initial_prompt,
          disabled: i.busy,
          onChange: (b) => S({ initial_prompt: b.target.value })
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: vf.actions, children: [
        /* @__PURE__ */ o.jsx(ae, { variant: "secondary", disabled: i.busy, onClick: () => void j(!1), children: _("Сохранить") }),
        /* @__PURE__ */ o.jsx(ae, { disabled: i.busy || !a.url.trim(), onClick: () => void j(!0), children: _("Отправить в Whisper") })
      ] }),
      y && /* @__PURE__ */ o.jsx(z_, { message: _(y.message), warning: y.warning, onClose: () => x(null) })
    ] })
  ] });
}
const i1 = "_page_z6937_7", l1 = "_header_z6937_19", u1 = "_headerTop_z6937_24", c1 = "_heading_z6937_31", d1 = "_title_z6937_36", f1 = "_description_z6937_45", p1 = "_actions_z6937_52", h1 = "_list_z6937_57", m1 = "_innerTabs_z6937_88", v1 = "_innerTab_z6937_88", y1 = "_activeInnerTab_z6937_121", g1 = "_settingsActions_z6937_131", _1 = "_listSentinel_z6937_141", x1 = "_settingsSections_z6937_145", w1 = "_settingsSection_z6937_145", S1 = "_settingsMobileActions_z6937_171", k1 = "_connectionFields_z6937_191", j1 = "_collectionHeader_z6937_197", X = {
  page: i1,
  header: l1,
  headerTop: u1,
  heading: c1,
  title: d1,
  description: f1,
  actions: p1,
  list: h1,
  innerTabs: m1,
  innerTab: v1,
  activeInnerTab: y1,
  settingsActions: g1,
  listSentinel: _1,
  settingsSections: x1,
  settingsSection: w1,
  settingsMobileActions: S1,
  connectionFields: k1,
  collectionHeader: j1
};
function C1() {
  const r = nt();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: "Промпт распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !r && /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${X.header} ${X.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: X.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: X.heading, children: !r && /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ o.jsx(a1, {})
    ] })
  ] });
}
const E1 = "_heading_1w2wz_1", N1 = "_note_1w2wz_6", T1 = "_entries_1w2wz_12", b1 = "_entry_1w2wz_19", R1 = "_line_1w2wz_27", A1 = "_error_1w2wz_40", P1 = "_body_1w2wz_49", Dn = {
  heading: E1,
  note: N1,
  entries: T1,
  entry: b1,
  line: R1,
  error: A1,
  body: P1
};
function $1() {
  const r = ct(), i = Qt(), [a, c] = m.useState([]);
  return m.useEffect(() => {
    let d = !0, f;
    const p = async () => {
      await i.run(async () => {
        const v = await r.getData("get_api_logs");
        d && (c(v.logs), f = setTimeout(() => {
          p();
        }, 3e3));
      }, { retryable: !0 });
    };
    return p(), () => {
      d = !1, clearTimeout(f);
    };
  }, [r, i.run]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: _("Логи") }),
    /* @__PURE__ */ o.jsxs("main", { className: X.page, children: [
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsx("h1", { className: Dn.heading, children: _("Логи") }),
      /* @__PURE__ */ o.jsx("p", { className: Dn.note, children: _("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ o.jsx(Ge, { ...i }),
      !a.length && !i.busy && !i.error && /* @__PURE__ */ o.jsx("p", { children: _("Запросов к API пока нет.") }),
      /* @__PURE__ */ o.jsx("div", { className: Dn.entries, children: a.map((d) => /* @__PURE__ */ o.jsxs("article", { className: Dn.entry, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Dn.line, children: [
          /* @__PURE__ */ o.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ o.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: Dn.line, children: [
          /* @__PURE__ */ o.jsx("span", { children: _({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ o.jsxs("span", { className: d.status >= 400 ? Dn.error : void 0, children: [
            "HTTP ",
            d.status
          ] }),
          d.duration_ms !== null && /* @__PURE__ */ o.jsxs("span", { children: [
            d.duration_ms,
            " ",
            _("мс")
          ] }),
          d.event && /* @__PURE__ */ o.jsx("code", { children: d.event })
        ] }),
        [["Тело запроса", d.request_body], ["Тело ответа", d.response_body]].map(
          ([f, p]) => p != null && /* @__PURE__ */ o.jsxs("details", { className: Dn.body, children: [
            /* @__PURE__ */ o.jsx("summary", { children: _(f) }),
            /* @__PURE__ */ o.jsx("pre", { children: JSON.stringify(p, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Pl = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new WeakMap(), yf = 0, M1;
function I1(r) {
  return r ? (na.has(r) || (yf += 1, na.set(r, yf.toString())), na.get(r)) : "0";
}
function L1(r) {
  return Object.keys(r).sort().filter(
    (i) => r[i] !== void 0
  ).map((i) => `${i}_${i === "root" ? I1(r.root) : r[i]}`).toString();
}
function D1(r) {
  const i = L1(r);
  let a = Pl.get(i);
  if (!a) {
    const c = /* @__PURE__ */ new Map();
    let d;
    const f = new IntersectionObserver((p) => {
      p.forEach((v) => {
        var g;
        const w = v.isIntersecting && d.some((y) => v.intersectionRatio >= y);
        r.trackVisibility && typeof v.isVisible > "u" && (v.isVisible = w), [...(g = c.get(v.target)) != null ? g : []].forEach((y) => {
          y(w, v);
        });
      });
    }, r);
    d = f.thresholds || (Array.isArray(r.threshold) ? r.threshold : [r.threshold || 0]), a = {
      id: i,
      observer: f,
      elements: c
    }, Pl.set(i, a);
  }
  return a;
}
function O1(r, i, a = {}, c = M1) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const g = r.getBoundingClientRect();
    return i(c, {
      isIntersecting: c,
      target: r,
      intersectionRatio: typeof a.threshold == "number" ? a.threshold : 0,
      time: 0,
      boundingClientRect: g,
      intersectionRect: g,
      rootBounds: g
    }), () => {
    };
  }
  const { id: d, observer: f, elements: p } = D1(a), v = p.get(r) || [];
  return p.has(r) || p.set(r, v), v.push(i), f.observe(r), function() {
    v.splice(v.indexOf(i), 1), v.length === 0 && (p.delete(r), f.unobserve(r)), p.size === 0 && (f.disconnect(), Pl.delete(d));
  };
}
function z1({
  threshold: r,
  delay: i,
  trackVisibility: a,
  rootMargin: c,
  root: d,
  triggerOnce: f,
  skip: p,
  initialInView: v,
  fallbackInView: g,
  onChange: w
} = {}) {
  var y;
  const [x, S] = m.useState(null), j = m.useRef(w), b = m.useRef(v), [C, N] = m.useState({
    inView: !!v,
    entry: void 0
  });
  j.current = w, m.useEffect(
    () => {
      if (b.current === void 0 && (b.current = v), p || !x) return;
      let H;
      return H = O1(
        x,
        (B, I) => {
          const J = b.current;
          b.current = B, !(J === void 0 && !B) && (N({
            inView: B,
            entry: I
          }), j.current && j.current(B, I), I.isIntersecting && f && H && (H(), H = void 0));
        },
        {
          root: d,
          rootMargin: c,
          threshold: r,
          // @ts-expect-error
          trackVisibility: a,
          delay: i
        },
        g
      ), () => {
        H && H();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(r) ? r.toString() : r,
      x,
      d,
      c,
      f,
      p,
      a,
      g,
      i
    ]
  );
  const A = (y = C.entry) == null ? void 0 : y.target, F = m.useRef(void 0);
  !x && A && !f && !p && F.current !== A && (F.current = A, N({
    inView: !!v,
    entry: void 0
  }), b.current = v);
  const P = [S, C.inView, C.entry];
  return P.ref = P[0], P.inView = P[1], P.entry = P[2], P;
}
function Wr(r, i, a, c) {
  const { ref: d, inView: f } = z1({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [p, v] = m.useState(!1);
  return m.useEffect(() => {
    !i && (r == null ? void 0 : r.page) === 1 && v(!0);
  }, [i, r]), m.useEffect(() => {
    p && c && f && !i && r && r.page < r.total_pages && a(r.page + 1, !0);
  }, [p, c, f, i, r, a]), d;
}
const kl = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function vp(r) {
  const i = ct(), [a, c] = m.useState(null), [d, f] = m.useState(""), p = m.useRef(""), v = m.useRef(0), [g, w] = m.useState(!0), [y, x] = m.useState(null), S = m.useRef(), j = m.useRef(1), b = m.useRef(!1), C = m.useRef(), N = m.useCallback(async (P, H = !1) => {
    const B = ++v.current, I = p.current.trim(), J = P === void 0 && b.current, U = P ?? j.current;
    x(null), w(!0);
    try {
      let G = kl(await i.getPage(r, U, void 0, I));
      const ye = Math.max(1, G.total_pages);
      if (U > ye && (G = kl(await i.getPage(r, ye, void 0, I))), J && G.page > 1) {
        const de = await Promise.all(Array.from({ length: G.page - 1 }, (ge, pe) => i.getPage(r, pe + 1, void 0, I).then(kl)));
        G = { ...G, data: [...de.flatMap((ge) => ge.data), ...G.data] };
      }
      if (B !== v.current) return;
      J || (b.current = H), S.current = void 0, j.current = G.page, c((de) => H && de ? { ...G, data: [...de.data, ...G.data] } : G);
    } catch (G) {
      if (B !== v.current) return;
      S.current = { page: P, append: H }, x(Tt(G, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      B === v.current && w(!1);
    }
  }, [i, r]);
  m.useEffect(() => {
    const P = C.current !== r;
    if (C.current = r, !P && p.current === d) return;
    p.current = d, j.current = 1, b.current = !1, v.current += 1, w(!0);
    const H = window.setTimeout(() => {
      N(1);
    }, P ? 0 : 250);
    return () => window.clearTimeout(H);
  }, [r, N, d]);
  const A = m.useCallback((P) => {
    c((H) => H && { ...H, data: P(H.data) });
  }, []);
  return { query: d, setQuery: f, page: a, loading: g, loadPage: N, updateItems: A, error: y, retry: () => {
    var P, H;
    N((P = S.current) == null ? void 0 : P.page, ((H = S.current) == null ? void 0 : H.append) ?? !1);
  } };
}
function H1() {
  const r = ct(), { query: i, setQuery: a, page: c, loading: d, loadPage: f, error: p, retry: v } = vp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: i, setQuery: a, error: p, retry: v, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (b) => {
    await r.saveData(b, "save_script_action"), await f();
  }, updateScript: async (b, C) => {
    await r.updateRecord(b, "update_script_action", C), await f();
  }, getScriptAction: async (b) => (await r.getRecord(b, "get_script_action")).data, deleteScriptAction: async (b) => {
    await r.deleteRecord(b, "delete_script_action"), await f();
  } };
}
const F1 = "_subtitle_c1esh_1", W1 = "_card_c1esh_6", B1 = "_content_c1esh_32", U1 = "_title_c1esh_40", V1 = "_arrow_c1esh_46", q1 = "_titleOnly_c1esh_57", Ir = {
  subtitle: F1,
  card: W1,
  content: B1,
  title: U1,
  arrow: V1,
  titleOnly: q1
}, Br = ({
  title: r,
  subTitle: i,
  onClick: a
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    type: "button",
    className: `${Ir.card} ${i ? "" : Ir.titleOnly}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: Ir.content, children: [
        /* @__PURE__ */ o.jsx("div", { className: Ir.title, children: r }),
        i && /* @__PURE__ */ o.jsx("div", { className: Ir.subtitle, children: _(i) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: Ir.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), Q1 = "_pagination_r0e80_1", K1 = "_button_r0e80_10", Y1 = "_label_r0e80_34", G1 = "_pages_r0e80_40", J1 = "_active_r0e80_48", Zn = {
  pagination: Q1,
  button: K1,
  label: Y1,
  pages: G1,
  active: J1
}, Ur = ({ page: r, totalPages: i, onChange: a }) => {
  if (i <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, p) => r + p - 2).filter((f) => f >= 1 && f <= i),
    i
  ])).sort((f, p) => f - p), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= i && f !== r && a(f);
  };
  return /* @__PURE__ */ o.jsx("nav", { className: Zn.pagination, "aria-label": _("Страницы списка"), children: /* @__PURE__ */ o.jsxs("div", { className: Zn.pages, children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: Zn.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": _("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, p) => /* @__PURE__ */ o.jsxs(Af.Fragment, { children: [
      p > 0 && f - c[p - 1] > 1 && /* @__PURE__ */ o.jsx("span", { className: Zn.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: `${Zn.button} ${f === r ? Zn.active : ""}`,
          "aria-label": `${_("Страница")} ${f}`,
          "aria-current": f === r ? "page" : void 0,
          onClick: () => d(f),
          children: f
        }
      )
    ] }, f)),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: Zn.button,
        disabled: r >= i,
        onClick: () => d(r + 1),
        "aria-label": _("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, X1 = "_overlay_1m3e5_1", Z1 = "_modal_1m3e5_1", e0 = "_header_1m3e5_1", t0 = "_body_1m3e5_1", n0 = "_footer_1m3e5_1", r0 = "_sm_1m3e5_32", s0 = "_md_1m3e5_36", o0 = "_lg_1m3e5_40", a0 = "_xl_1m3e5_44", i0 = "_title_1m3e5_59", l0 = "_close_1m3e5_86", u0 = "_fields_1m3e5_116", c0 = "_suspended_1m3e5_124", d0 = "_heading_1m3e5_128", St = {
  overlay: X1,
  modal: Z1,
  header: e0,
  body: t0,
  footer: n0,
  sm: r0,
  md: s0,
  lg: o0,
  xl: a0,
  title: i0,
  close: l0,
  fields: u0,
  suspended: c0,
  heading: d0
}, Kt = ({
  open: r,
  suspended: i = !1,
  feedback: a,
  onClose: c,
  onBack: d,
  title: f,
  dialogLabel: p,
  subtitle: v,
  footer: g,
  children: w,
  size: y = "md"
}) => (dp(r, c), m.useEffect(() => {
  if (!r || i) return;
  document.body.style.overflow = "hidden";
  const x = (S) => {
    S.key === "Escape" && c();
  };
  return window.addEventListener(
    "keydown",
    x
  ), () => {
    document.body.style.overflow = "", window.removeEventListener(
      "keydown",
      x
    );
  };
}, [r, c, i]), r ? /* @__PURE__ */ o.jsx(
  "div",
  {
    className: `${St.overlay} ${i ? St.suspended : ""}`,
    "aria-hidden": i || void 0,
    onClick: c,
    children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `${St.modal} ${St[y]}`,
        role: p ? "dialog" : void 0,
        "aria-modal": p ? !0 : void 0,
        "aria-label": p,
        onClick: (x) => x.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: St.header, children: [
            d && /* @__PURE__ */ o.jsx(
              ae,
              {
                variant: "ghost",
                className: St.close,
                "aria-label": _("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ o.jsx(xy, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (v ? /* @__PURE__ */ o.jsxs("div", { className: St.heading, children: [
              /* @__PURE__ */ o.jsx("h2", { className: St.title, children: _(f) }),
              v
            ] }) : /* @__PURE__ */ o.jsx("h2", { className: St.title, children: _(f) })),
            /* @__PURE__ */ o.jsx(
              ae,
              {
                variant: "ghost",
                className: St.close,
                "aria-label": p ? _("Закрыть") : void 0,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: St.body, children: [
            /* @__PURE__ */ o.jsx(Ge, { ...a }),
            /* @__PURE__ */ o.jsx("fieldset", { className: St.fields, disabled: a == null ? void 0 : a.busy, children: w })
          ] }),
          g && /* @__PURE__ */ o.jsx("div", { className: St.footer, children: /* @__PURE__ */ o.jsx("fieldset", { className: St.fields, disabled: a == null ? void 0 : a.busy, children: g }) })
        ]
      }
    )
  }
) : null), f0 = "_content_eng69_1", p0 = "_title_eng69_7", h0 = "_actions_eng69_14", m0 = "_row_eng69_20", v0 = "_identifier_eng69_31", Is = {
  content: f0,
  title: p0,
  actions: h0,
  row: m0,
  identifier: v0
}, eu = ({ open: r, title: i, uuid: a, onClose: c, actions: d, size: f = "md", layout: p = "column" }) => {
  const v = nt(), g = a ? /* @__PURE__ */ o.jsx("p", { className: Is.identifier, children: a }) : null, w = /* @__PURE__ */ o.jsxs("div", { className: Is.content, children: [
    v && /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx("h3", { className: Is.title, children: i }),
      g
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `${Is.actions} ${p === "row" && !v ? Is.row : ""}`, children: d.map((y) => /* @__PURE__ */ o.jsx(ae, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: _(y.label) }, y.label)) })
  ] });
  return v ? /* @__PURE__ */ o.jsx(Xl, { open: r, onClose: c, children: w }) : /* @__PURE__ */ o.jsx(Kt, { open: r, onClose: c, title: i, subtitle: g, size: f, children: w });
}, y0 = ({ uuid: r, title: i, open: a, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(eu, { open: a, title: i, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, g0 = "_accordion_5owbj_1", _0 = "_header_5owbj_7", x0 = "_content_5owbj_20", ra = {
  accordion: g0,
  header: _0,
  content: x0
}, w0 = ({
  title: r,
  defaultOpen: i = !1,
  children: a
}) => {
  const [c, d] = m.useState(i);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: ra.accordion,
      "data-open": c,
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: ra.header,
            onClick: () => d((f) => !f),
            "aria-expanded": c,
            children: [
              /* @__PURE__ */ o.jsx("span", { children: _(r) }),
              /* @__PURE__ */ o.jsx("span", { className: ra.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ o.jsx("div", { className: ra.content, children: a })
      ]
    }
  );
}, S0 = "_wrapper_1fgdg_1", k0 = "_dropdown_1fgdg_10", j0 = "_option_1fgdg_22", C0 = "_title_1fgdg_46", E0 = "_uuid_1fgdg_51", N0 = "_hint_1fgdg_52", er = {
  wrapper: S0,
  dropdown: k0,
  option: j0,
  title: C0,
  uuid: E0,
  hint: N0
}, T0 = ({
  label: r = "uuid",
  value: i,
  selectedTitle: a,
  searchSource: c = ["search_assistant_commands"],
  minQueryLength: d = 2,
  onChange: f,
  onSelect: p,
  getSelectedValue: v,
  error: g
}) => {
  const w = ct(), y = JSON.stringify(c), x = m.useMemo(() => JSON.parse(y), [y]), [S, j] = m.useState(null), b = v ? "" : a || ((S == null ? void 0 : S.uuid) === i ? S.title : "");
  m.useEffect(() => {
    var z;
    if (!i || a || v || (z = de.current) != null && z.contains(document.activeElement)) return;
    let O = !1;
    return (async () => {
      var q;
      try {
        for (const E of x) {
          const re = (q = (await w.searchAssistantCommands(i, E)).data) == null ? void 0 : q.find((me) => me.uuid === i);
          if (re) {
            O || j(re);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      O = !0;
    };
  }, [w, i, a, v, x]);
  const [C, N] = m.useState(null), [A, F] = m.useState(0), [P, H] = m.useState([]), [B, I] = m.useState(!1), [J, U] = m.useState(!1), [G, ye] = m.useState(!1), de = m.useRef(null), [ge, pe] = m.useState({});
  m.useEffect(() => {
    var z, q;
    if (!B) return;
    const O = () => {
      var De, Ae;
      const E = (Ae = (De = de.current) == null ? void 0 : De.querySelector("input")) == null ? void 0 : Ae.getBoundingClientRect();
      if (!E) return;
      const $ = window.visualViewport, re = (($ == null ? void 0 : $.offsetTop) ?? 0) + 8, me = (($ == null ? void 0 : $.offsetTop) ?? 0) + (($ == null ? void 0 : $.height) ?? window.innerHeight) - 8, we = Math.min(me, Math.max(re, E.bottom + 6)), Se = Math.min(me, Math.max(re, E.top - 6)), Ne = me - we, je = Se - re, Re = Ne < 180 && je > Ne, Z = Math.min(260, Re ? je : Ne), fe = Math.max(8, E.left);
      pe({
        left: fe,
        width: Math.max(0, Math.min(E.width, window.innerWidth - fe - 8)),
        top: Re ? Se : we,
        transform: Re ? "translateY(-100%)" : void 0,
        maxHeight: Z
      });
    };
    return O(), window.addEventListener("scroll", O, !0), window.addEventListener("resize", O), (z = window.visualViewport) == null || z.addEventListener("resize", O), (q = window.visualViewport) == null || q.addEventListener("scroll", O), () => {
      var E, $;
      window.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O), (E = window.visualViewport) == null || E.removeEventListener("resize", O), ($ = window.visualViewport) == null || $.removeEventListener("scroll", O);
    };
  }, [B]);
  const _e = m.useRef(0), te = m.useRef(""), Ee = m.useMemo(() => i.trim(), [i]);
  m.useEffect(() => {
    if (!Ee) {
      _e.current += 1, N(null), te.current = "", H([]), I(!1);
      return;
    }
    if (Ee.length < d) {
      _e.current += 1, N(null), H([]), I(!1);
      return;
    }
    if (!G || b) {
      _e.current += 1, I(!1), U(!1);
      return;
    }
    if (te.current === Ee)
      return;
    te.current = Ee;
    const O = _e.current + 1;
    _e.current = O;
    const z = window.setTimeout(async () => {
      U(!0), N(null);
      try {
        let q = [];
        for (const E of x) {
          const $ = await w.searchAssistantCommands(Ee, E), re = Array.isArray($ == null ? void 0 : $.data) ? $.data : [];
          q.push(...re);
        }
        if (_e.current !== O)
          return;
        H(q), I(q.length > 0);
      } catch (q) {
        _e.current === O && (N(Tt(q)), H([]), I(!1));
      } finally {
        _e.current === O && U(!1);
      }
    }, 250);
    return () => window.clearTimeout(z);
  }, [w, Ee, x, d, G, A, b]);
  const W = (O) => {
    const z = v ? v(O) : O.uuid;
    _e.current += 1, j(O), te.current = "", U(!1), H([]), f(z), p == null || p(O), I(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { ref: de, className: er.wrapper, children: [
    /* @__PURE__ */ o.jsx(
      Je,
      {
        label: r,
        value: b || i,
        autoComplete: "off",
        placeholder: _("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          ye(!1), window.setTimeout(() => I(!1), 150);
        },
        onFocus: () => {
          ye(!0), I(!b && P.length > 0);
        },
        onChange: (O) => {
          j(null), f(O.target.value);
        }
      }
    ),
    B && de.current && Xf.createPortal(
      /* @__PURE__ */ o.jsx("div", { role: "listbox", className: er.dropdown, style: ge, children: P.map((O) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: er.option,
          onMouseDown: (z) => z.preventDefault(),
          onClick: () => W(O),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: er.title, children: O.title || "Без названия" }),
            /* @__PURE__ */ o.jsx("span", { className: er.uuid, children: O.uuid }),
            O.mappingType && /* @__PURE__ */ o.jsxs("span", { className: er.uuid, children: [
              _("mappingType:"),
              O.mappingType
            ] })
          ]
        },
        O.uuid
      )) }),
      de.current.closest("[data-theme]") ?? de.current
    ),
    /* @__PURE__ */ o.jsx(Ge, { error: C, busy: J, retry: () => {
      var O, z;
      te.current = "", (z = (O = de.current) == null ? void 0 : O.querySelector("input")) == null || z.focus(), F((q) => q + 1);
    } }),
    J && /* @__PURE__ */ o.jsx("span", { className: er.hint, children: _("Поиск...") })
  ] });
}, b0 = "_field_1esqu_1", R0 = "_row_1esqu_5", A0 = "_inputWrapper_1esqu_11", P0 = "_clearButton_1esqu_22", $0 = "_rowError_1esqu_31", Vt = {
  field: b0,
  row: R0,
  inputWrapper: A0,
  clearButton: P0,
  rowError: $0
}, M0 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function jl({ field: r, value: i, error: a, onChange: c }) {
  return zr() ? /* @__PURE__ */ o.jsx(Je, { label: _(r), value: i, error: a, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ o.jsx(
    T0,
    {
      label: _(r),
      value: i,
      error: a,
      searchSource: [M0[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const I0 = ({
  condition: r,
  index: i,
  defaultOpen: a,
  onChange: c,
  onDelete: d,
  totalCount: f,
  errors: p
}) => {
  const v = r.children_type !== void 0, g = r.children_direct_type !== void 0, w = () => {
    c({
      ...r,
      children_type: void 0
    });
  }, y = () => {
    c({
      ...r,
      children_direct_type: void 0
    });
  };
  return /* @__PURE__ */ o.jsxs(
    w0,
    {
      title: `${_("Условие")} ${i + 1}`,
      defaultOpen: a,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: Vt.field, children: /* @__PURE__ */ o.jsx(
          jl,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: p == null ? void 0 : p.parent_type,
            onChange: (x) => c({ ...r, parent_type: x })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Vt.field, children: v ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Vt.row} ${p != null && p.children_type ? Vt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Vt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                jl,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: p == null ? void 0 : p.children_type,
                  onChange: (x) => c({ ...r, children_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                ae,
                {
                  type: "button",
                  variant: "ghost",
                  className: Vt.clearButton,
                  "aria-label": _("Убрать второстепенную команду"),
                  onClick: w,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          ae,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => c({
              ...r,
              children_type: ""
            }),
            children: _("🞢 Добавить второстепенную команду")
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Vt.field, children: g ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Vt.row} ${p != null && p.children_direct_type ? Vt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Vt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                jl,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: p == null ? void 0 : p.children_direct_type,
                  onChange: (x) => c({ ...r, children_direct_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                ae,
                {
                  type: "button",
                  variant: "ghost",
                  className: Vt.clearButton,
                  "aria-label": _("Убрать прямую команду"),
                  onClick: y,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          ae,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => c({
              ...r,
              children_direct_type: ""
            }),
            children: _("🞢 Добавить прямую команду")
          }
        ) }),
        f > 1 && /* @__PURE__ */ o.jsx(
          ae,
          {
            type: "button",
            variant: "remove",
            onClick: d,
            children: _("Удалить")
          }
        )
      ]
    }
  );
}, L0 = "_dropdown_3mupk_2", D0 = "_label_3mupk_11", O0 = "_wrapper_3mupk_19", z0 = "_select_3mupk_23", H0 = "_arrow_3mupk_65", F0 = "_error_3mupk_85", W0 = "_errorText_3mupk_103", tr = {
  dropdown: L0,
  label: D0,
  wrapper: O0,
  select: z0,
  arrow: H0,
  error: F0,
  errorText: W0
};
function Dr({
  label: r,
  options: i,
  value: a = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: f
}) {
  const p = m.useId();
  return /* @__PURE__ */ o.jsxs("div", { className: tr.dropdown, children: [
    r && /* @__PURE__ */ o.jsx(
      "label",
      {
        htmlFor: p,
        className: tr.label,
        children: _(r)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: tr.wrapper, children: [
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: p,
          className: `
            ${tr.select}
            ${d ? tr.error : ""}
          `,
          value: a,
          onChange: (v) => f == null ? void 0 : f(v.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: _(c) }),
            i.map((v) => /* @__PURE__ */ o.jsx(
              "option",
              {
                value: v.value,
                children: v.label
              },
              v.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        tp,
        {
          size: 18,
          className: tr.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsx("span", { className: tr.errorText, children: _(d) })
  ] });
}
const B0 = "_form_1ogov_1", U0 = "_section_1ogov_7", V0 = "_sectionTitle_1ogov_18", q0 = "_conditions_1ogov_27", Q0 = "_addCondition_1ogov_33", Lr = {
  form: B0,
  section: U0,
  sectionTitle: V0,
  conditions: q0,
  addCondition: Q0
}, K0 = ({
  open: r,
  feedback: i,
  initialData: a,
  availableScripts: c,
  isEdit: d = !1,
  loading: f = !1,
  onSave: p,
  onCancel: v
}) => {
  const [g, w] = m.useState({
    uuid: "",
    name: "",
    script_entity_id: "",
    conditions: [
      {
        parent_type: ""
      }
    ]
  }), [y, x] = m.useState({
    conditions: []
  });
  m.useEffect(() => {
    w({
      uuid: (a == null ? void 0 : a.uuid) || "",
      name: (a == null ? void 0 : a.name) || "",
      script_entity_id: (a == null ? void 0 : a.script_entity_id) || "",
      conditions: (a == null ? void 0 : a.conditions) || [
        {
          parent_type: ""
        }
      ]
    }), x({
      conditions: []
    });
  }, [a, r]);
  const S = (A) => {
    w(A);
  }, j = () => {
    S({
      ...g,
      conditions: [
        ...g.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, b = (A, F) => {
    const P = [...g.conditions];
    P[A] = F, S({
      ...g,
      conditions: P
    });
  }, C = (A) => {
    const F = g.conditions.filter(
      (P, H) => H !== A
    );
    S({
      ...g,
      conditions: F.length > 0 ? F : [
        {
          parent_type: ""
        }
      ]
    });
  }, N = () => {
    const A = {
      conditions: []
    };
    return g.name.trim() || (A.name = "Обязательное поле"), g.script_entity_id || (A.script_entity_id = "Обязательное поле"), g.conditions.forEach(
      (F, P) => {
        const H = {};
        F.parent_type.trim() || (H.parent_type = "Обязательное поле"), F.children_type !== void 0 && !F.children_type.trim() && (H.children_type = "Обязательное поле"), F.children_direct_type !== void 0 && !F.children_direct_type.trim() && (H.children_direct_type = "Обязательное поле"), A.conditions[P] = H;
      }
    ), x(A), !A.name && !A.script_entity_id && A.conditions.every(
      (F) => Object.keys(F).length === 0
    );
  };
  return /* @__PURE__ */ o.jsx(
    Kt,
    {
      feedback: i,
      open: r,
      onClose: v,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ o.jsx(
        ae,
        {
          disabled: f,
          onClick: () => {
            N() && (p == null || p(g));
          },
          children: _("Сохранить")
        }
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: Lr.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Lr.section, children: [
          /* @__PURE__ */ o.jsx(
            Je,
            {
              label: _("Название"),
              value: g.name,
              error: y.name,
              onChange: (A) => S({
                ...g,
                name: A.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Dr,
            {
              label: _("Скрипт"),
              error: y.script_entity_id,
              options: c.map(
                (A) => ({
                  label: A.name,
                  value: A.entity_id
                })
              ),
              value: g.script_entity_id,
              onSelect: (A) => S({
                ...g,
                script_entity_id: A
              })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: Lr.section, children: [
          /* @__PURE__ */ o.jsx("h3", { className: Lr.sectionTitle, children: _("Условия") }),
          /* @__PURE__ */ o.jsx("div", { className: Lr.conditions, children: g.conditions.map(
            (A, F, P) => /* @__PURE__ */ o.jsx(
              I0,
              {
                index: F,
                condition: A,
                defaultOpen: !d,
                errors: y.conditions[F],
                onChange: (H) => b(
                  F,
                  H
                ),
                onDelete: () => C(F),
                totalCount: P.length
              },
              F
            )
          ) }),
          /* @__PURE__ */ o.jsx(
            ae,
            {
              type: "button",
              className: Lr.addCondition,
              onClick: j,
              children: _("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, Y0 = "_container_rqdjx_1", G0 = "_rows_rqdjx_9", J0 = "_hidden_rqdjx_20", X0 = "_overlay_rqdjx_24", Z0 = "_card_rqdjx_32", ex = "_title_rqdjx_51", tx = "_subtitle_rqdjx_51", nx = "_srOnly_rqdjx_70", pn = {
  container: Y0,
  rows: G0,
  hidden: J0,
  overlay: X0,
  card: Z0,
  title: ex,
  subtitle: tx,
  srOnly: nx
};
function Vr({ loading: r, itemCount: i, append: a = !1, children: c }) {
  const d = r && i > 0 && !a, f = r && /* @__PURE__ */ o.jsxs("div", { className: d ? pn.overlay : pn.rows, role: "status", children: [
    /* @__PURE__ */ o.jsx("span", { className: pn.srOnly, children: _("Загрузка...") }),
    Array.from({ length: d ? i : a && i > 0 ? 3 : 10 }, (p, v) => /* @__PURE__ */ o.jsxs("div", { className: pn.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: pn.title }),
      /* @__PURE__ */ o.jsx("span", { className: pn.subtitle })
    ] }, v))
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: pn.container, "aria-busy": r, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${pn.rows} ${d ? pn.hidden : ""}`, "aria-hidden": d || void 0, children: c }),
    f
  ] });
}
const rx = "_container_9wouv_1", sx = "_visible_9wouv_20", gf = {
  container: rx,
  visible: sx
}, lr = ({
  children: r,
  offset: i = 10,
  startVisible: a = !1
}) => {
  const c = m.useRef(null), [d, f] = m.useState(a);
  return m.useEffect(() => {
    var x;
    const p = (x = c.current) == null ? void 0 : x.getRootNode(), v = p instanceof ShadowRoot ? p.host : null, g = () => window.scrollY + ((v == null ? void 0 : v.scrollTop) ?? 0);
    let w = g();
    const y = () => {
      const S = g();
      S !== w && (S > w && S > i ? f(!0) : f(!1), w = S);
    };
    return v == null || v.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("scroll", y, {
      passive: !0
    }), () => {
      v == null || v.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
  }, [i]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: c,
      className: `${gf.container} ${d ? gf.visible : ""}`,
      children: r
    }
  );
}, ox = () => {
  const r = Qt(), i = zr(), a = i ? "Действия удалённых команд" : "Запуск скриптов", c = nt(), [d, f] = m.useState(), [p, v] = m.useState(!1), [g, w] = m.useState(!1), [y, x] = m.useState({ uuid: "", title: "" }), [S, j] = m.useState(!1), {
    query: b,
    setQuery: C,
    error: N,
    retry: A,
    loading: F,
    scripts: P,
    getAvailableScripts: H,
    loadScripts: B,
    saveScript: I,
    updateScript: J,
    getScriptAction: U,
    deleteScriptAction: G
  } = H1(), ye = Wr(P, F || !!N, B, c), de = { error: r.error ?? N, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), A();
  }) : A }, ge = () => {
    r.clearError(), f(void 0), j(!1), v(!0);
  }, pe = (W) => {
    w(!0), x(W);
  }, _e = (W) => r.run(async () => {
    j(!0);
    const O = await U(
      W
    );
    f(O), v(!0);
  }, { retryable: !0 }), te = async (W) => {
    await r.run(async () => {
      if (S) {
        if (!W.uuid) return;
        const { uuid: O, ...z } = W;
        await J(W.uuid, z);
      } else
        await I(W);
      v(!1);
    }, { exclusive: !0 });
  }, Ee = (W) => r.run(async () => {
    W && await G(W);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: b, onChange: C },
        title: a
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !p && /* @__PURE__ */ o.jsx(Ge, { ...de }),
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _(a) }),
          /* @__PURE__ */ o.jsx("p", { className: X.description, children: _(i ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: c ? /* @__PURE__ */ o.jsx(lr, { children: /* @__PURE__ */ o.jsx(
          ae,
          {
            variant: "primary",
            onClick: ge,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
          ae,
          {
            variant: "primary",
            onClick: ge,
            children: _("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ o.jsx(Hr, { value: b, onChange: C })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Vr, { loading: F, itemCount: (P == null ? void 0 : P.script_actions.length) ?? 0, append: c, children: P == null ? void 0 : P.script_actions.map((W) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: W.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => pe(W)
          },
          W.uuid
        )) }),
        !F && !N && b.trim() && !(P != null && P.script_actions.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        c ? /* @__PURE__ */ o.jsx("div", { ref: ye, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (P == null ? void 0 : P.page) || 1,
          totalPages: (P == null ? void 0 : P.total_pages) || 1,
          onChange: B
        }
      ),
      /* @__PURE__ */ o.jsx(
        y0,
        {
          uuid: y.uuid,
          open: g,
          title: y.title,
          onClose: () => w(!1),
          onEdit: _e,
          onDelete: Ee
        }
      ),
      /* @__PURE__ */ o.jsx(
        K0,
        {
          feedback: de,
          open: p,
          initialData: d,
          isEdit: S,
          availableScripts: H(),
          loading: F,
          onCancel: () => v(!1),
          onSave: async (W) => {
            await te(W);
          }
        }
      )
    ] })
  ] });
}, yp = (r) => ({
  status: !0,
  title: "",
  [r]: {
    endStatus: !0,
    script_entity_id: "",
    answerType: "default",
    forwardText: !1,
    voiceCommands: [""],
    nextDirectControl: [{ uuid: "" }],
    voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
    nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "" }]
  }
});
function gp(r) {
  const i = ct(), { query: a, setQuery: c, page: d, loading: f, loadPage: p, updateItems: v, error: g, retry: w } = vp(r);
  return { query: a, setQuery: c, error: g, retry: w, loading: f, commands: d, loadCommands: p, saveCommand: (C, N) => i.saveData(N, C), updateCommand: async (C, N) => {
    if (!N.uuid) return;
    const { uuid: A, ...F } = N, P = await i.updateRecord(A, C, F);
    return await p(), P;
  }, deleteCommand: (C, N) => i.deleteRecord(N, C), setCommandStatus: async (C, N, A) => {
    const F = await i.updateRecordStatus(C, N, A);
    return v((P) => P.map((H) => H.uuid === N ? { ...H, status: A } : H)), F;
  }, getCommandDetails: (C, N) => i.getRecord(N, C) };
}
const ax = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function ga(r, i) {
  const a = ax[r], { query: c, setQuery: d, commands: f, loading: p, loadCommands: v, getCommandDetails: g, saveCommand: w, updateCommand: y, deleteCommand: x, setCommandStatus: S, error: j, retry: b } = gp(a.list), C = Qt(), [N, A] = m.useState(!1), [F, P] = m.useState(!1), [H, B] = m.useState(i), [I, J] = m.useState(null), U = () => {
    C.clearError(), P(!1), B(i()), A(!0);
  }, G = (_e) => C.run(async () => {
    const te = await g(a.detail, _e);
    P(!0);
    const Ee = { ...te.data, status: te.data.status ?? !1 };
    for (const W of ["componentDialog", "subComponentDialog"]) {
      const O = Ee[W];
      O && (O.nextAction = (O.nextAction ?? []).filter(
        (z) => !z.actionTypeComponent || ["children", "custom"].includes(z.actionTypeComponent)
      ));
    }
    B(Ee), A(!0);
  }, { retryable: !0 }), ye = (_e, te) => C.run(async () => {
    a.status && await S(a.status, _e, te);
  }, { exclusive: !0 }), de = (_e) => C.run(async () => {
    await x(a.remove, _e), await v();
  }, { exclusive: !0 }), ge = () => C.run(async () => {
    await w(a.create, H), A(!1), await v();
  }, { exclusive: !0 }), pe = () => C.run(async () => {
    await y(a.update, H), A(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: C.error ?? j, busy: C.busy, retry: C.error ? C.retry ?? (() => {
      C.clearError(), b();
    }) : b },
    listError: j,
    commands: f,
    loading: p,
    loadCommands: v,
    modalOpen: N,
    setModalOpen: A,
    isEdit: F,
    formData: H,
    setFormData: B,
    actionsCommand: I,
    setActionsCommand: J,
    openCreateModal: U,
    openEditModal: G,
    handleToggleStatus: ye,
    handleDelete: de,
    handleCreate: ge,
    handleUpdate: pe
  };
}
const ix = "_field_1iloj_1", lx = "_label_1iloj_8", ux = "_select_1iloj_14", Cl = {
  field: ix,
  label: lx,
  select: ux
}, mn = ({
  label: r,
  hint: i,
  options: a,
  className: c = "",
  id: d,
  value: f,
  ...p
}) => {
  const v = m.useId(), g = d ?? v, w = f == null ? "" : String(f), y = !w || a.some((x) => x.value === w);
  return /* @__PURE__ */ o.jsxs("div", { className: Cl.field, children: [
    r && /* @__PURE__ */ o.jsx(Zl, { label: r, htmlFor: g, className: Cl.label, hint: i }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        id: g,
        ...p,
        value: w,
        className: `${Cl.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ o.jsx("option", { value: w, children: w }),
          a.map((x) => /* @__PURE__ */ o.jsx("option", { value: x.value, disabled: x.disabled, children: _(x.label) }, x.value))
        ]
      }
    )
  ] });
};
function $l({ kind: r, value: i, title: a, onSelect: c }) {
  const d = ct(), [f, p] = m.useState([]), [v, g] = m.useState(!0), [w, y] = m.useState(!1), [x, S] = m.useState(null), [j, b] = m.useState(0), C = m.useRef(null), N = m.useRef(0);
  m.useEffect(() => () => {
    N.current += 1;
  }, []), m.useEffect(() => {
    let H = !1;
    g(!0), S(null);
    const B = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(B.map((I) => d.getAllRecords(I))).then((I) => {
      H || p([...new Map(I.flat().map((J) => [J.uuid, J])).values()]);
    }).catch((I) => {
      H || (S(Tt(I)), C.current = () => b((J) => J + 1));
    }).finally(() => {
      H || g(!1);
    }), () => {
      H = !0;
    };
  }, [d, r, j]), m.useEffect(() => {
    i && a && p((H) => H.map((B) => B.uuid === i ? { ...B, title: a } : B));
  }, [i, a]);
  const A = async (H) => {
    var J;
    if (!H) {
      N.current += 1, S(null), c({ uuid: "", title: "" });
      return;
    }
    const B = f.find((U) => U.uuid === H);
    if (!B) return;
    const I = ++N.current;
    if (S(null), r !== "direct") {
      c(B);
      return;
    }
    y(!0);
    try {
      const U = await d.getRecord(H, "get_assistant_sub_direct_control");
      I === N.current && c({ ...B, mappingType: ((J = U.data.directControl) == null ? void 0 : J.mappingType) ?? "" });
    } catch (U) {
      I === N.current && (S(Tt(U)), C.current = () => {
        A(H);
      });
    } finally {
      I === N.current && y(!1);
    }
  }, F = f.map((H) => ({ value: H.uuid, label: H.title || _("Без названия") }));
  i && !f.some((H) => H.uuid === i) && F.unshift({ value: i, label: a || _("Выбранная команда недоступна") });
  const P = _(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(
      mn,
      {
        label: P,
        "aria-label": P,
        value: i,
        disabled: v || w,
        options: [{ value: "", label: _(v ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...F],
        onChange: (H) => {
          A(H.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(Ge, { error: x, busy: v || w, retry: () => {
      var H;
      return (H = C.current) == null ? void 0 : H.call(C);
    } })
  ] });
}
const cx = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], dx = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], fx = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], px = "_form_1a1tt_1", hx = "_field_1a1tt_7", mx = "_arrayItem_1a1tt_29", vx = "_logicTabs_1a1tt_46", yx = "_sectionTitle_1a1tt_85", gx = "_footerActions_1a1tt_92", _x = "_phraseMode_1a1tt_106", xx = "_directTabLabel_1a1tt_122", wx = "_linkActions_1a1tt_126", tt = {
  form: px,
  field: hx,
  arrayItem: mx,
  logicTabs: vx,
  sectionTitle: yx,
  footerActions: gx,
  phraseMode: _x,
  directTabLabel: xx,
  linkActions: wx
}, _f = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), _p = ({
  open: r,
  feedback: i,
  onClose: a,
  title: c,
  formData: d,
  setFormData: f,
  onSave: p,
  onBack: v
}) => {
  const [g, w] = m.useState("");
  m.useEffect(() => {
    w("");
  }, [r, d.uuid]);
  const y = () => {
    var j;
    if (!((j = d.title) != null && j.trim())) {
      w("Обязательное поле");
      return;
    }
    w(""), p();
  }, x = m.useMemo(() => d.directControl ?? _f(), [d]), S = (j) => {
    f((b) => ({
      ...b,
      directControl: {
        ...b.directControl ?? _f(),
        ...j
      }
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Kt,
    {
      feedback: i,
      open: r,
      onClose: a,
      onBack: v,
      title: c,
      footer: /* @__PURE__ */ o.jsx("div", { className: tt.form, children: /* @__PURE__ */ o.jsx(ae, { onClick: y, children: _("Сохранить") }) }),
      children: /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
        /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("Название команды"),
            hint: ya(d.uuid),
            required: !0,
            error: g,
            value: d.title,
            onChange: (j) => f((b) => ({
              ...b,
              title: j.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("mappingType"),
            value: x.mappingType,
            onChange: (j) => S({
              mappingType: j.target.value
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          mn,
          {
            label: _("valueType"),
            value: x.valueType,
            options: dx,
            onChange: (j) => S({
              valueType: j.target.value
            })
          }
        ),
        x.valueType == "command" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: tt.field, children: /* @__PURE__ */ o.jsx(
            sr,
            {
              label: _("Фразы для запуска"),
              hint: _("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам."),
              rows: 6,
              value: (x.voiceCommands ?? []).join(`
`),
              onChange: (j) => S({
                voiceCommands: j.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsx(
            $l,
            {
              kind: "nested",
              value: Array.isArray(x.subDirectControl) ? x.subDirectControl.length ? "__inline__" : "" : x.subDirectControl,
              title: Array.isArray(x.subDirectControl) ? _("Сохранённые вложенные команды") : x.subDirectControlTitle,
              onSelect: (j) => S({
                manual: !1,
                subDirectControl: j.uuid,
                subDirectControlTitle: j.title
              })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] })
    }
  );
};
function Sx({ target: r, onBack: i, onSaved: a }) {
  const c = ct(), d = Qt(), [f, p] = m.useState({ title: "" }), [v, g] = m.useState();
  m.useEffect(() => {
    let y = !1;
    return d.run(async () => {
      let x = r.kind === "direct" ? "direct" : "main", S;
      if (r.kind === "direct") S = await c.getRecord(r.uuid, "get_assistant_sub_direct_control");
      else
        try {
          S = await c.getRecord(r.uuid, "get_assistant_command");
        } catch (j) {
          if (!(j && typeof j == "object" && "code" in j && j.code === "not_found")) throw j;
          x = "sub", S = await c.getRecord(r.uuid, "get_assistant_sub_command");
        }
      y || (p({ ...S.data, status: S.data.status ?? !1 }), g(x));
    }, { retryable: !0 }), () => {
      y = !0;
    };
  }, [c, r.uuid, r.kind, d.run]);
  const w = () => d.run(async () => {
    if (!v) return;
    const y = v === "direct" ? "update_assistant_sub_direct_control" : v === "main" ? "update_assistant_command" : "update_assistant_sub_command", { uuid: x, ...S } = f;
    await c.updateRecord(r.uuid, y, S), a(f), i();
  }, { exclusive: !0 });
  return v ? v === "direct" ? /* @__PURE__ */ o.jsx(
    _p,
    {
      open: !0,
      title: "Редактировать",
      feedback: d,
      formData: f,
      setFormData: p,
      onClose: i,
      onBack: i,
      onSave: w
    }
  ) : /* @__PURE__ */ o.jsx(
    tu,
    {
      open: !0,
      isEdit: !0,
      feedback: d,
      formData: f,
      setFormData: p,
      componentKey: v === "main" ? "componentDialog" : "subComponentDialog",
      onClose: i,
      onBack: i,
      onSave: w,
      onUpdate: w
    }
  ) : /* @__PURE__ */ o.jsx(Kt, { open: !0, onClose: i, onBack: i, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка...") }) });
}
const kx = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function jx({ response: r, onChange: i }) {
  const a = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(a) ? "default" : a === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mn,
      {
        label: _("Типы ответов"),
        "aria-label": _("Типы ответов"),
        value: c,
        options: kx,
        onChange: (d) => i({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ o.jsx(
      Je,
      {
        label: _("Тип результата скрипта"),
        placeholder: _("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => i({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ o.jsx(
      sr,
      {
        label: _("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => i({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const Cx = "_switchRow_1hmmz_1", Ex = "_input_1hmmz_11", Nx = "_track_1hmmz_22", Tx = "_thumb_1hmmz_33", bx = "_label_1hmmz_62", Ls = {
  switchRow: Cx,
  input: Ex,
  track: Nx,
  thumb: Tx,
  label: bx
}, or = ({ label: r, className: i = "", ...a }) => /* @__PURE__ */ o.jsxs("label", { className: `${Ls.switchRow} ${i}`, children: [
  /* @__PURE__ */ o.jsx("input", { ...a, type: "checkbox", className: Ls.input }),
  /* @__PURE__ */ o.jsx("span", { className: Ls.track, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: Ls.thumb }) }),
  /* @__PURE__ */ o.jsx("span", { className: Ls.label, children: _(r) })
] }), Rx = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function Ax({ component: r, onOpenCommand: i, updateComponentArray: a, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = m.useId(), [p, v] = m.useState("direct"), g = Rx.filter((y) => y.key !== "direct" || !r.forwardText), w = r.forwardText && p === "direct" ? "continuations" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ o.jsx("div", { className: tt.logicTabs, role: "tablist", "aria-label": _("Настройки логики"), children: g.map((y) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: w === y.key ? 0 : -1,
        onKeyDown: (x) => {
          var b, C;
          const S = g.findIndex((N) => N.key === y.key), j = x.key === "ArrowRight" ? (S + 1) % g.length : x.key === "ArrowLeft" ? (S + g.length - 1) % g.length : x.key === "Home" ? 0 : x.key === "End" ? g.length - 1 : -1;
          j < 0 || (x.preventDefault(), v(g[j].key), (C = (b = x.currentTarget.parentElement) == null ? void 0 : b.querySelectorAll('[role="tab"]')[j]) == null || C.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": w === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => v(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ o.jsx("span", { className: tt.directTabLabel, children: _(y.label).replace(" ", `
`) }) : _(y.label)
      },
      y.key
    )) }),
    w === "continuations" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, x) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          mn,
          {
            label: _("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: fx,
            onChange: (S) => a("nextAction", x, {
              actionTypeComponent: S.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("Тип результата скрипта"),
            placeholder: _("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (S) => a("nextAction", x, {
              actionType: S.target.value
            })
          }
        ) : /* @__PURE__ */ o.jsx(o.Fragment, {}),
        /* @__PURE__ */ o.jsx(
          $l,
          {
            kind: "continuation",
            value: y.uuid,
            title: y.title,
            onSelect: (S) => a("nextAction", x, {
              uuid: S.uuid,
              title: S.title ?? "",
              actionTypeComponent: y.actionTypeComponent || "children"
            })
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: tt.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(ae, { variant: "secondary", onClick: () => i({ uuid: y.uuid, kind: "continuation" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            ae,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextAction", x),
              children: _("Удалить")
            }
          )
        ] })
      ] }, x)),
      /* @__PURE__ */ o.jsx(
        ae,
        {
          type: "button",
          variant: "secondary",
          fullWidth: !0,
          leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
          onClick: () => c("nextAction", {
            actionTypeComponent: "children",
            actionType: "",
            uuid: "",
            title: ""
          }),
          children: _("Добавить ещё")
        }
      )
    ] }),
    w === "direct" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-direct`, "aria-labelledby": `${f}-command-logic-tab-direct`, children: [
      (r.nextDirectControl ?? []).map((y, x) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          $l,
          {
            kind: "direct",
            value: y.uuid,
            title: y.title,
            onSelect: (S) => a("nextDirectControl", x, {
              uuid: S.uuid,
              mappingType: S.mappingType ?? "",
              title: S.title ?? ""
            })
          }
        ),
        y.uuid && /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("mappingType"),
            hint: _("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: tt.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(ae, { variant: "secondary", onClick: () => i({ uuid: y.uuid, kind: "direct" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            ae,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextDirectControl", x),
              children: _("Удалить")
            }
          )
        ] })
      ] }, x)),
      /* @__PURE__ */ o.jsx(
        ae,
        {
          type: "button",
          variant: "secondary",
          fullWidth: !0,
          leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
          onClick: () => c("nextDirectControl", {
            uuid: "",
            actionType: "",
            title: ""
          }),
          children: _("Добавить ещё")
        }
      )
    ] })
  ] });
}
const xf = () => ({
  endStatus: !0,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }]
}), tu = ({
  open: r,
  feedback: i,
  isEdit: a,
  formData: c,
  componentKey: d,
  setFormData: f,
  onClose: p,
  onBack: v,
  onSave: g,
  onUpdate: w
}) => {
  const x = ct().getScripts(), S = m.useMemo(() => c[d] ?? xf(), [c, d]);
  m.useEffect(() => {
    r && f((U) => {
      var ye;
      const G = U[d];
      return (ye = G == null ? void 0 : G.nextAction) != null && ye.some((de) => !de.actionTypeComponent) ? { ...U, [d]: {
        ...G,
        nextAction: G.nextAction.map((de) => ({ ...de, actionTypeComponent: de.actionTypeComponent || "children" }))
      } } : U;
    });
  }, [r, c.uuid, d, f]);
  const [j, b] = m.useState(null);
  m.useEffect(() => {
    r || b(null);
  }, [r]);
  const [C, N] = m.useState(!1);
  m.useEffect(() => {
    N(!1), F({});
  }, [r, c.uuid, d]);
  const [A, F] = m.useState({}), P = (U) => {
    f((G) => ({
      ...G,
      [d]: {
        ...G[d] ?? xf(),
        ...U
      }
    }));
  }, H = (U, G, ye) => {
    const de = [...S[U] ?? []];
    de[G] = { ...de[G], ...ye }, P({
      [U]: de
    });
  }, B = (U, G) => {
    P({
      [U]: [...S[U] ?? [], G]
    });
  }, I = (U, G) => {
    P({
      [U]: (S[U] ?? []).filter(
        (ye, de) => de !== G
      )
    });
  }, J = () => {
    const U = {};
    return c.title.trim() || (U.title = "Обязательное поле"), F(U), Object.keys(U).length === 0;
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Kt,
      {
        suspended: !!j,
        feedback: i,
        open: r,
        onClose: p,
        onBack: v,
        title: C ? "Настроить логику" : a ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ o.jsx("div", { className: tt.form, children: C ? /* @__PURE__ */ o.jsx(ae, { variant: "secondary", onClick: () => N(!1), children: _("Назад") }) : /* @__PURE__ */ o.jsxs("div", { className: tt.footerActions, children: [
          /* @__PURE__ */ o.jsx(ae, { variant: "secondary", onClick: () => N(!0), children: _("Настроить логику") }),
          /* @__PURE__ */ o.jsx(ae, { onClick: () => {
            J() && (a ? w() : g());
          }, children: _(a ? "Обновить" : "Сохранить") })
        ] }) }),
        children: C ? /* @__PURE__ */ o.jsx(
          Ax,
          {
            onOpenCommand: (U, G) => b({ ...U, index: G }),
            component: S,
            updateComponentArray: H,
            addComponentArrayItem: B,
            removeComponentArrayItem: I
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
          /* @__PURE__ */ o.jsx(
            Je,
            {
              label: _("Название команды"),
              hint: ya(c.uuid),
              value: c.title,
              error: A.title,
              onChange: (U) => f({
                ...c,
                title: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            mn,
            {
              label: _("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(S.answerType) ? "script_response" : S.answerType,
              options: cx,
              onChange: (U) => P({
                answerType: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            mn,
            {
              label: _("Скрипт Home Assistant"),
              value: S.script_entity_id ?? "__legacy__",
              options: [
                ...S.script_entity_id === void 0 ? [{ label: _("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: _("Не запускать скрипт"), value: "" },
                ...x.map((U) => ({ label: U.name, value: U.entity_id }))
              ],
              onChange: (U) => P({ script_entity_id: U.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ o.jsxs("div", { className: tt.phraseMode, children: [
            /* @__PURE__ */ o.jsx(
              or,
              {
                label: _("Отправить команду как есть"),
                checked: !!S.forwardText,
                onChange: (U) => P({ forwardText: U.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(rr, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && S.forwardText) && /* @__PURE__ */ o.jsx("div", { className: tt.field, children: /* @__PURE__ */ o.jsx(
            sr,
            {
              label: _("Фразы для запуска"),
              value: (S.voiceCommands == null ? [] : typeof S.voiceCommands != "object" ? S == null ? void 0 : S.voiceCommands.split(";") : S == null ? void 0 : S.voiceCommands).join(`
`),
              onChange: (U) => P({
                voiceCommands: U.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("section", { className: tt.form, "aria-label": _("Ответы"), children: [
            /* @__PURE__ */ o.jsx("h3", { className: tt.sectionTitle, children: _("Ответы") }),
            (S.voiceResponseArray ?? []).map((U, G) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
              /* @__PURE__ */ o.jsx(
                jx,
                {
                  response: U,
                  onChange: (ye) => H("voiceResponseArray", G, ye)
                }
              ),
              /* @__PURE__ */ o.jsx(
                ae,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => I("voiceResponseArray", G),
                  children: _("Удалить")
                }
              )
            ] }, G)),
            /* @__PURE__ */ o.jsx(
              ae,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
                onClick: () => B("voiceResponseArray", {
                  actionType: "default",
                  voiceResponse: ""
                }),
                children: _("Добавить ещё")
              }
            )
          ] })
        ] })
      }
    ),
    j && /* @__PURE__ */ o.jsx(
      Sx,
      {
        target: j,
        onBack: () => b(null),
        onSaved: (U) => {
          var G;
          j.kind === "direct" ? H("nextDirectControl", j.index, { title: U.title, mappingType: ((G = U.directControl) == null ? void 0 : G.mappingType) ?? "" }) : H("nextAction", j.index, { title: U.title });
        }
      },
      `${j.kind}-${j.uuid}`
    )
  ] });
}, _a = ({ command: r, open: i, onClose: a, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(eu, { open: i, title: r.title, uuid: r.uuid, onClose: a, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, Px = () => yp("componentDialog"), $x = () => {
  const r = nt(), {
    query: i,
    setQuery: a,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: v,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: S,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: C,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: F,
    handleCreate: P,
    handleUpdate: H
  } = ga("main", Px), B = Wr(f, p || !!d, v, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: i, onChange: a },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...c }),
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Основные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(lr, { children: /* @__PURE__ */ o.jsx(ae, { variant: "primary", onClick: C, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ae, { variant: "primary", onClick: C, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Hr, { value: i, onChange: a })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Vr, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(I)
          },
          I.uuid
        )) }),
        !p && !d && i.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => v(I)
        }
      ),
      /* @__PURE__ */ o.jsx(
        tu,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: x,
          componentKey: "componentDialog",
          setFormData: S,
          onClose: () => w(!1),
          onSave: P,
          onUpdate: H
        }
      ),
      /* @__PURE__ */ o.jsx(
        _a,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: A,
          onDelete: F,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, Mx = () => yp("subComponentDialog"), Ix = () => {
  const r = nt(), {
    query: i,
    setQuery: a,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: v,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: S,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: C,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: F,
    handleCreate: P,
    handleUpdate: H
  } = ga("sub", Mx), B = Wr(f, p || !!d, v, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: i, onChange: a },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Второстепенные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(lr, { children: /* @__PURE__ */ o.jsx(ae, { variant: "primary", onClick: C, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(ae, { variant: "primary", onClick: C, children: _("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ o.jsx(Hr, { value: i, onChange: a })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Vr, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(I)
          },
          I.uuid
        )) }),
        !p && !d && i.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => v(I)
        }
      ),
      /* @__PURE__ */ o.jsx(
        tu,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: x,
          componentKey: "subComponentDialog",
          setFormData: S,
          onClose: () => w(!1),
          onSave: P,
          onUpdate: H
        }
      ),
      /* @__PURE__ */ o.jsx(
        _a,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: A,
          onDelete: F,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, Lx = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], fa = () => {
  const { pathname: r } = kt(), i = Hl();
  return /* @__PURE__ */ o.jsx("div", { className: X.innerTabs, role: "group", "aria-label": _("Раздел прямых команд"), children: Lx.map((a) => /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === a.path,
      className: `${X.innerTab} ${r === a.path ? X.activeInnerTab : ""}`,
      onClick: () => i(a.path),
      children: _(a.label)
    },
    a.path
  )) });
}, Dx = () => ({
  status: !0,
  title: "",
  directControl: {
    mappingType: "",
    valueType: "",
    voiceCommands: [""],
    manual: !1,
    subDirectControl: "",
    subDirectControlTitle: ""
  }
}), Ox = () => {
  const r = nt(), {
    query: i,
    setQuery: a,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: v,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: S,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: C,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: F,
    handleCreate: P,
    handleUpdate: H
  } = ga("direct", Dx), B = Wr(f, p || !!d, v, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: i, onChange: a },
        beforeSearch: /* @__PURE__ */ o.jsx(fa, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Прямые команды") }),
          !r && /* @__PURE__ */ o.jsx(fa, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(lr, { children: /* @__PURE__ */ o.jsx(ae, { variant: "primary", onClick: C, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ae, { variant: "primary", onClick: C, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Hr, { value: i, onChange: a })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Vr, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(I)
          },
          I.uuid
        )) }),
        !p && !d && i.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => v(I)
        }
      ),
      /* @__PURE__ */ o.jsx(
        _p,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: _(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: x,
          setFormData: S,
          onSave: y ? H : P
        }
      ),
      /* @__PURE__ */ o.jsx(
        _a,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: A,
          onDelete: F,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, zx = "_form_mn1ml_1", Hx = "_arrayItem_mn1ml_8", Fx = "_sectionTitle_mn1ml_25", sa = {
  form: zx,
  arrayItem: Hx,
  sectionTitle: Fx
}, Wx = ({
  open: r,
  feedback: i,
  onClose: a,
  title: c,
  formData: d,
  setFormData: f,
  onSave: p
}) => {
  const [v, g] = m.useState("");
  m.useEffect(() => {
    g("");
  }, [r, d.uuid]);
  const w = () => {
    var C;
    if (!((C = d.title) != null && C.trim())) {
      g("Обязательное поле");
      return;
    }
    g(""), p();
  }, y = m.useMemo(
    () => d.subDirectControl ?? [],
    [d]
  ), x = (C) => {
    f((N) => ({
      ...N,
      subDirectControl: C
    }));
  }, S = (C, N) => {
    const A = [...y];
    A[C] = {
      ...A[C],
      ...N
    }, x(A);
  }, j = () => {
    x([
      ...y,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, b = (C) => {
    x(
      y.filter((N, A) => A !== C)
    );
  };
  return /* @__PURE__ */ o.jsx(
    Kt,
    {
      feedback: i,
      open: r,
      onClose: a,
      title: c,
      footer: /* @__PURE__ */ o.jsx(ae, { onClick: w, children: _("Сохранить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: sa.form, children: [
        /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("Название команды"),
            hint: ya(d.uuid),
            required: !0,
            error: v,
            value: d.title,
            onChange: (C) => f((N) => ({
              ...N,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsxs("section", { className: sa.form, "aria-label": _("Варианты вложенных команд"), children: [
          /* @__PURE__ */ o.jsx("h3", { className: sa.sectionTitle, children: _("Варианты вложенных команд") }),
          y.map((C, N) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: sa.arrayItem,
              children: [
                /* @__PURE__ */ o.jsx(
                  Je,
                  {
                    label: _("Код значения"),
                    value: C.subMappingType ?? "",
                    onChange: (A) => S(N, {
                      subMappingType: A.target.value
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  sr,
                  {
                    label: _("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(C.subVoiceCommands) ? C.subVoiceCommands : []).join(`
`),
                    onChange: (A) => S(N, {
                      subVoiceCommands: A.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  ae,
                  {
                    type: "button",
                    variant: "remove",
                    onClick: () => b(N),
                    children: _("Удалить")
                  }
                )
              ]
            },
            N
          )),
          /* @__PURE__ */ o.jsx(
            ae,
            {
              type: "button",
              variant: "secondary",
              fullWidth: !0,
              leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
              onClick: j,
              children: _("Добавить ещё")
            }
          )
        ] })
      ] })
    }
  );
}, Bx = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), Ux = () => {
  const r = nt(), {
    query: i,
    setQuery: a,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: v,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: S,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: C,
    openEditModal: N,
    handleDelete: A,
    handleCreate: F,
    handleUpdate: P
  } = ga("template", Bx), H = Wr(f, p || !!d, v, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: i, onChange: a },
        beforeSearch: /* @__PURE__ */ o.jsx(fa, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...c }),
      !r && /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Вложенные команды") }),
          !r && /* @__PURE__ */ o.jsx(fa, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(lr, { children: /* @__PURE__ */ o.jsx(ae, { variant: "primary", onClick: C, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ae, { variant: "primary", onClick: C, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Hr, { value: i, onChange: a })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Vr, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((B) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: B.title,
            onClick: () => b(B)
          },
          B.uuid
        )) }),
        !p && !d && i.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: H,
          className: X.listSentinel
        }
      ) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (B) => v(
            B
          )
        }
      ),
      /* @__PURE__ */ o.jsx(
        Wx,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: y ? "Редактировать" : "Создать",
          formData: x,
          setFormData: S,
          onSave: y ? P : F
        }
      ),
      /* @__PURE__ */ o.jsx(
        _a,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onDelete: A,
          onEdit: (B) => N(B)
        }
      )
    ] })
  ] });
}, wf = {
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function xp(r) {
  return r.actionType && wf[r.actionType] ? _(wf[r.actionType]) : r.title;
}
const Vx = "_form_1i0x1_1", qx = {
  form: Vx
}, Qx = ({
  open: r,
  feedback: i,
  isEdit: a,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: p
}) => {
  var x, S;
  const v = c, g = ct().getScripts(), w = v.actionType === "default_main" && !!v.forwardCommandToServer, y = (j) => {
    d((b) => ({
      ...b,
      ...j
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Kt,
    {
      feedback: i,
      open: r,
      onClose: f,
      title: a ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ o.jsx(ae, { onClick: p, children: _("Обновить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: qx.form, children: [
        /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("Название команды"),
            hint: ya(c.uuid),
            value: xp(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ o.jsx(
          or,
          {
            label: _("Завершать диалог"),
            checked: !!v.endStatus,
            onChange: (j) => y({
              endStatus: j.target.checked
            })
          }
        ),
        v.actionType === "default_main" && /* @__PURE__ */ o.jsx(
          or,
          {
            label: _("Передать команду серверу"),
            checked: !!v.forwardCommandToServer,
            onChange: (j) => y({
              forwardCommandToServer: j.target.checked
            })
          }
        ),
        v.actionType === "default_main" && v.forwardCommandToServer && /* @__PURE__ */ o.jsx(
          mn,
          {
            label: _("Скрипт Home Assistant"),
            value: v.script_entity_id ?? "",
            options: [
              { value: "", label: _("Использовать существующие сценарии") },
              ...g.map((j) => ({ value: j.entity_id, label: j.name })),
              ...v.script_entity_id && !g.some((j) => j.entity_id === v.script_entity_id) ? [{ value: v.script_entity_id, label: v.script_entity_id }] : []
            ],
            onChange: (j) => y({ script_entity_id: j.target.value })
          }
        ),
        w ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            Je,
            {
              label: _("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: _("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ o.jsx(
            sr,
            {
              rows: 8,
              label: _("Текст озвучки"),
              hint: _("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: _("Например: ${reply}"),
              value: ((S = (x = v.voiceResponseArray) == null ? void 0 : x.find((j) => j.actionType === "success")) == null ? void 0 : S.voiceResponse) ?? "",
              onChange: (j) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: j.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(
          sr,
          {
            rows: 8,
            "aria-label": _("Ответное сообщение"),
            label: _("Ответное сообщение"),
            value: v.voiceResponse,
            onChange: (j) => y({
              voiceResponse: j.target.value
            })
          }
        )
      ] })
    }
  );
}, Kx = () => {
  const r = Qt(), i = nt(), [a, c] = m.useState(!1), [d, f] = m.useState(!1), [p, v] = m.useState({ title: "" }), {
    error: g,
    retry: w,
    loading: y,
    loadCommands: x,
    getCommandDetails: S,
    updateCommand: j,
    commands: b
  } = gp("get_assistant_settings_short"), C = Wr(b, y || !!g, x, i), N = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), w();
  }) : w }, A = (P) => r.run(async () => {
    f(!0);
    const H = await S("get_assistant_setting", P.uuid);
    v(H.data), c(!0);
  }, { retryable: !0 }), F = () => r.run(async () => {
    await j("update_assistant_setting", p), c(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !a && /* @__PURE__ */ o.jsx(Ge, { ...N }),
      i ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${X.header} ${X.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: X.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: X.heading, children: !i && /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ o.jsx("div", { className: X.list, children: /* @__PURE__ */ o.jsx(Vr, { loading: y, itemCount: (b == null ? void 0 : b.data.length) ?? 0, append: i, children: b == null ? void 0 : b.data.map((P) => /* @__PURE__ */ o.jsx(
        Br,
        {
          title: xp(P),
          onClick: () => A(P)
        },
        P.uuid
      )) }) }),
      i ? /* @__PURE__ */ o.jsx("div", { ref: C, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (b == null ? void 0 : b.page) || 1,
          totalPages: (b == null ? void 0 : b.total_pages) || 1,
          onChange: (P) => x(P)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Qx,
        {
          feedback: N,
          open: a,
          isEdit: d,
          formData: p,
          setFormData: v,
          onClose: () => c(!1),
          onUpdate: F
        }
      )
    ] })
  ] });
}, Yx = (r, i) => {
  const a = new Blob([JSON.stringify(i, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(a), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class Lt extends Error {
}
const wp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, tn = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function Gx(r, i) {
  if (i === "settings") {
    const d = await r.getData("get_settings"), f = tn(d) && tn(d.result) ? d.result : d;
    if (!tn(f)) throw new Lt("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "remout", "timer_alarm"].filter((v) => v in f).map((v) => [v, f[v]]));
  }
  if (i === "scenarios") return r.getData("export_command_bundle");
  const a = wp[i], c = await r.getAllRecords(a.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, a.detail);
    return tn(f) ? f.data : void 0;
  }));
}
function Jx(r, i) {
  let a;
  try {
    a = JSON.parse(r);
  } catch {
    throw new Lt("Некорректный JSON-файл.");
  }
  if (i === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", remout: "object", timer_alarm: "object" };
    if (!tn(a) || !Object.keys(a).length || Object.keys(a).some((f) => !d[f] || typeof a[f] !== d[f])) throw new Lt("Файл не содержит корректные настройки.");
    if (a.theme !== void 0 && (typeof a.theme != "string" || !["dark", "light"].includes(a.theme))) throw new Lt("Файл не содержит корректные настройки.");
    for (const [f, p] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in a && (!tn(a[f]) || Object.entries(a[f]).some(([v, g]) => !p.includes(v) || typeof g != "string"))) throw new Lt("Файл не содержит корректные настройки.");
    return a;
  }
  if (i === "scenarios" && tn(a)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (a.format !== "ha-dialog-ui-commands" || a.version !== 1 || Object.keys(a).length !== 7 || d.some((f) => !Array.isArray(a[f]))) throw new Lt("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const p = /* @__PURE__ */ new Set(), v = a[f];
      if (!Array.isArray(v)) throw new Lt("Ожидается массив записей JSON.");
      for (const g of v) {
        if (!tn(g) || typeof g.uuid != "string" || !g.uuid.trim() || p.has(g.uuid) || typeof g.title != "string") throw new Lt("Некорректные или повторяющиеся ID записей.");
        p.add(g.uuid);
      }
    }
    return a;
  }
  if (!Array.isArray(a)) throw new Lt("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of a) {
    if (!tn(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new Lt("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(i === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && tn(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new Lt("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return a;
}
async function Xx(r, i, a) {
  const c = Jx(a, i);
  return await r.saveData(c, i === "settings" ? "import_settings" : i === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : wp[i].import), c;
}
const Zx = "_grid_fc8hl_1", ew = "_card_fc8hl_8", tw = "_actions_fc8hl_23", nw = "_description_fc8hl_29", rw = "_page_fc8hl_36", Ds = {
  grid: Zx,
  card: ew,
  actions: tw,
  description: nw,
  page: rw
}, sw = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], ow = () => {
  const r = ct(), i = zr(), a = nt(), [c, d] = m.useState(!1), [f, p] = m.useState(""), [v, g] = m.useState(!1), w = m.useRef(null), y = m.useRef(null), x = m.useRef("scripts"), S = async (j, b = !1) => {
    w.current = b ? j : null, d(!0), p(""), g(!1);
    try {
      await j();
    } catch (C) {
      g(!0), p(C instanceof Lt ? C.message : Tt(C));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: _("Импорт и экспорт") }),
    /* @__PURE__ */ o.jsxs("div", { className: `${X.page} ${Ds.page}`, children: [
      /* @__PURE__ */ o.jsx(ht, {}),
      !a && /* @__PURE__ */ o.jsx("h1", { children: _("Импорт и экспорт") }),
      /* @__PURE__ */ o.jsx("div", { className: Ds.grid, children: sw.filter((j) => j.kind === "scripts" ? i === !0 : j.kind !== "scenarios" || i === !1).map((j) => /* @__PURE__ */ o.jsxs("section", { className: Ds.card, children: [
        /* @__PURE__ */ o.jsx("h2", { children: _(j.title) }),
        /* @__PURE__ */ o.jsx("p", { className: Ds.description, children: _(j.description) }),
        /* @__PURE__ */ o.jsxs("div", { className: Ds.actions, children: [
          /* @__PURE__ */ o.jsx(ae, { disabled: c, onClick: () => S(async () => {
            Yx(`ha-dialog-ui-${j.kind}.json`, await Gx(r, j.kind));
          }, !0), children: _(j.download) }),
          /* @__PURE__ */ o.jsx(ae, { variant: "secondary", disabled: c, onClick: () => {
            var b;
            x.current = j.kind, (b = y.current) == null || b.click();
          }, children: _(j.upload) })
        ] })
      ] }, j.kind)) }),
      /* @__PURE__ */ o.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (j) => {
        var N;
        const b = (N = j.target.files) == null ? void 0 : N[0], C = x.current;
        j.target.value = "", b && S(async () => {
          const A = await Xx(r, C, await b.text());
          C === "settings" && A !== null && typeof A == "object" && !Array.isArray(A) && (typeof A.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: A.theme })), typeof A.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(ca, { detail: A.active_remout }))), p("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Обработка файла...") }),
      /* @__PURE__ */ o.jsx(Ge, { error: v ? f : null, busy: c, retry: w.current ? () => {
        w.current && S(w.current, !0);
      } : void 0 }),
      !v && f && /* @__PURE__ */ o.jsx("p", { role: "status", children: _(f) })
    ] })
  ] });
};
function aw() {
  const r = ct(), [i, a] = m.useState(null), [c, d] = m.useState([]), f = Qt(), p = Qt(), v = m.useCallback(() => f.run(async () => {
    a(await r.getSettings());
  }, { retryable: !0 }), [r, f.run]), g = m.useCallback(() => p.run(async () => {
    d(await r.getLocalMusicOptions());
  }, { retryable: !0 }), [r, p.run]);
  m.useEffect(() => {
    v();
  }, [v]), m.useEffect(() => {
    g();
  }, [g]);
  const w = async (y) => {
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(Rl, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(ca, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: i, musicOptions: c, saveSettings: w, settingsFeedback: f, musicFeedback: p };
}
const iw = "_form_1ijxr_1", lw = "_field_1ijxr_7", uw = "_input_1ijxr_13", cw = "_label_1ijxr_29", dw = "_help_1ijxr_35", fw = "_toggleHelp_1ijxr_40", ut = {
  form: iw,
  field: lw,
  input: uw,
  label: cw,
  help: dw,
  toggleHelp: fw
}, pw = ({ data: r, onChange: i }) => {
  const a = (c, d) => {
    i({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ut.form, children: [
    /* @__PURE__ */ o.jsx(Je, { label: _("Base URL"), value: r.base_url ?? "", placeholder: _("http://192.168.31.83:9379"), onChange: (c) => a("base_url", c.target.value) }),
    /* @__PURE__ */ o.jsx(Je, { label: _("Token"), value: r.token ?? "", placeholder: _("Bearer ..."), onChange: (c) => a("token", c.target.value) })
  ] });
}, hw = ({ data: r, musicOptions: i, musicUnavailable: a, onChange: c }) => {
  const d = (p, v) => {
    c({
      ...r,
      [p]: v
    });
  }, f = (p, v, g = "") => {
    const w = i.some((y) => y.value === g);
    return /* @__PURE__ */ o.jsxs("label", { className: ut.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ut.label, children: _(p) }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: ut.input,
          value: g,
          onChange: (y) => d(v, y.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: _("Не выбрано") }),
            g && !w && /* @__PURE__ */ o.jsx("option", { value: g, children: g }),
            i.map((y) => /* @__PURE__ */ o.jsx("option", { value: y.value, children: y.label }, y.value))
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ut.form, children: [
    f(
      "Global music timer",
      "global_music_timer",
      r.global_music_timer
    ),
    f(
      "Global music alarm",
      "global_music_alarm",
      r.global_music_alarm
    ),
    i.length === 0 && !a && /* @__PURE__ */ o.jsx("span", { className: ut.help, children: _("Музыка на сервере не найдена.") })
  ] });
}, mw = ({ data: r, onChange: i }) => {
  const a = ip(), c = (d, f) => {
    i({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ut.form, children: [
    /* @__PURE__ */ o.jsxs("label", { className: ut.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ut.label, children: _("Язык интерфейса") }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: ut.input,
          value: a,
          onChange: (d) => Qg(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ o.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      Je,
      {
        label: _("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => c("client_id", d.target.value),
        placeholder: _("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ o.jsxs("label", { className: ut.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ut.label, children: _("Theme") }),
      /* @__PURE__ */ o.jsxs("select", { className: ut.input, value: r.theme ?? "dark", onChange: (d) => c("theme", d.target.value), children: [
        /* @__PURE__ */ o.jsx("option", { value: "dark", children: _("dark") }),
        /* @__PURE__ */ o.jsx("option", { value: "light", children: _("light") })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(or, { label: _("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, vw = ({ data: r, onChange: i }) => {
  const a = (c, d) => i({ ...r, [c]: d });
  return /* @__PURE__ */ o.jsxs("div", { className: ut.form, children: [
    /* @__PURE__ */ o.jsxs("div", { className: ut.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(or, { label: _("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => a("active_remout", c.target.checked) }),
      /* @__PURE__ */ o.jsx(rr, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: ut.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(or, { label: _("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => a("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ o.jsx(rr, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ o.jsx(
      Je,
      {
        label: _("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => a("api_commands_token", c.target.value),
        placeholder: _("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, pa = {
  base_url: "",
  token: ""
}, yw = {
  global_music_timer: "",
  global_music_alarm: ""
}, Sf = {
  remout: pa,
  timer_alarm: yw,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, gw = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), _w = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), xw = (r) => ({
  remout: gw(r == null ? void 0 : r.remout),
  timer_alarm: _w(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), kf = (r, i) => {
  const a = {};
  return Object.keys(r).forEach((c) => {
    const d = c;
    r[d] !== i[d] && (a[d] = r[d]);
  }), a;
}, jf = (r, i) => {
  const a = {}, c = kf(r.timer_alarm, i.timer_alarm);
  if (Object.keys(c).length > 0 && (a.timer_alarm = c), r.theme !== i.theme && (a.theme = r.theme), r.is_admin !== i.is_admin && (a.is_admin = r.is_admin), r.active_remout !== i.active_remout && (a.active_remout = r.active_remout), r.client_id !== i.client_id && (a.client_id = r.client_id), r.api_commands_enabled !== i.api_commands_enabled && (a.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== i.api_commands_token && (a.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = kf(r.remout ?? pa, i.remout ?? pa);
    Object.keys(d).length > 0 && (a.remout = d);
  }
  return a;
}, ww = () => {
  const r = nt(), [i, a] = m.useState(Sf), c = Qt(), [d, f] = m.useState(Sf), { settings: p, musicOptions: v, saveSettings: g, settingsFeedback: w, musicFeedback: y } = aw();
  m.useEffect(() => {
    if (!p) return;
    const b = xw(p);
    a(b), f(b), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme }));
  }, [p]);
  const x = async (b) => {
    a((C) => ({ ...C, ...b })), b.theme && b.theme !== i.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme })), await c.run(async () => {
      await g({ theme: b.theme }), f((C) => ({ ...C, theme: b.theme }));
    }, { exclusive: !0 }));
  }, S = () => c.run(async () => {
    await g(jf(i, d)), f(i);
  }, { exclusive: !0 }), j = !!p && Object.keys(jf(i, d)).length > 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        title: _("Настройки")
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      /* @__PURE__ */ o.jsx(ht, {}),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { children: _("Настройки") }),
      /* @__PURE__ */ o.jsxs("div", { className: X.settingsSections, children: [
        /* @__PURE__ */ o.jsx(Ge, { ...w }),
        /* @__PURE__ */ o.jsx(Ge, { ...y }),
        /* @__PURE__ */ o.jsx(Ge, { ...c }),
        /* @__PURE__ */ o.jsxs("section", { className: X.settingsSection, "aria-label": _("Общие"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Общие") }),
          /* @__PURE__ */ o.jsx(
            mw,
            {
              data: {
                is_admin: i.is_admin,
                theme: i.theme,
                client_id: i.client_id
              },
              onChange: x
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: X.settingsSection, "aria-label": _("Подключения"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Подключения") }),
          /* @__PURE__ */ o.jsxs("div", { className: X.connectionFields, children: [
            /* @__PURE__ */ o.jsx(vw, { data: i, onChange: x }),
            i.active_remout && /* @__PURE__ */ o.jsx(
              pw,
              {
                data: i.remout ?? pa,
                onChange: (b) => a((C) => ({ ...C, remout: b }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: X.settingsSection, "aria-label": _("Timer / Alarm"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Timer / Alarm") }),
          /* @__PURE__ */ o.jsx(
            hw,
            {
              data: i.timer_alarm,
              musicOptions: v,
              musicUnavailable: y.busy || !!y.error,
              onChange: (b) => a({ ...i, timer_alarm: b })
            }
          )
        ] })
      ] }),
      j && (r ? /* @__PURE__ */ o.jsx("div", { className: X.settingsMobileActions, children: /* @__PURE__ */ o.jsx(
        ae,
        {
          variant: "primary",
          disabled: c.busy || w.busy || !p,
          onClick: S,
          children: _("Сохранить")
        }
      ) }) : /* @__PURE__ */ o.jsx("div", { className: X.settingsActions, children: /* @__PURE__ */ o.jsx(ae, { disabled: c.busy || w.busy || !p, onClick: S, children: _("Сохранить") }) }))
    ] })
  ] });
}, Ml = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const i = r.split(":").map(Number);
  return i.some((a) => !Number.isFinite(a) || a < 0) ? 0 : i.length === 3 ? i[0] * 3600 + i[1] * 60 + i[2] : i.length === 2 ? i[0] * 60 + i[1] : i.length === 1 ? i[0] : 0;
}, Sp = (r) => typeof r == "string" || typeof r == "number" ? Ml(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Ml(r.count_timer || "") : 0, Sw = (r, i = "on", a = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Ml(r);
  if (!r) return 0;
  if (i !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - a) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : Sp(r);
}, Il = (r) => r !== null && typeof r == "object", nr = (r) => {
  const i = Il(r) && "result" in r ? r.result : r;
  return Il(i) && "data" in i ? i.data : i;
}, kw = (r) => {
  const i = Math.max(1, Number(r) || 1);
  return new Date(Date.now() + i * 1e3).toISOString();
}, Cf = (r) => {
  const i = Math.max(1, Number(r) || 1), a = Math.floor(i / 3600), c = Math.floor(i % 3600 / 60), d = i % 60;
  return `${String(a).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, Ef = (r) => {
  const i = nr(r);
  return Array.isArray(i) ? i : Il(i) && Array.isArray(i.data) ? i.data : [];
};
function kp() {
  const r = ct(), i = Qt(), [a, c] = m.useState([]), [d, f] = m.useState([]), [p, v] = m.useState([]), [g, w] = m.useState(!0), y = m.useMemo(() => r.getDevices(), [r]), x = m.useCallback(async () => {
    const B = await r.getPage("get_timer_requests_short", 1, 100), I = await Promise.all(
      Ef(B).map(async (J) => {
        var G;
        const U = await r.getRecord(J.uuid, "get_timer_request");
        return ((G = nr(U)) == null ? void 0 : G.data) ?? nr(U);
      })
    );
    c(I.filter((J) => !!J && J.action_type === "create_timer"));
  }, [r]), S = m.useCallback(async () => {
    const B = await r.getPage("get_alarm_requests_short", 1, 100), I = await Promise.all(
      Ef(B).map(async (J) => {
        var G;
        const U = await r.getRecord(J.uuid, "get_alarm_request");
        return ((G = nr(U)) == null ? void 0 : G.data) ?? nr(U);
      })
    );
    f(I.filter((J) => !!J && J.action_type !== "delete_alarm"));
  }, [r]), j = m.useCallback(async () => {
    const B = await r.getAllRecords("get_alarm_time_widgets_short"), I = await Promise.all(
      B.map(async (J) => {
        var G;
        const U = await r.getRecord(J.uuid, "get_alarm_time_widget");
        return ((G = nr(U)) == null ? void 0 : G.data) ?? nr(U);
      })
    );
    v(I.filter(Boolean));
  }, [r]), b = m.useCallback(async () => {
    w(!0);
    try {
      await i.run(async () => {
        await Promise.all([x(), S(), j()]);
      }, { retryable: !0 });
    } finally {
      w(!1);
    }
  }, [S, j, x, i.run]);
  m.useEffect(() => {
    b();
  }, []);
  const C = async (B, I) => await i.run(async () => {
    await B();
  }, { exclusive: !0 }) ? (await i.run(I, { retryable: !0 }), !0) : !1, N = async (B, I, J = 0.3) => {
    const U = {
      count_timer: Cf(I),
      date_end: kw(I)
    };
    return C(() => r.saveData({ name: `Таймер ${Cf(I)}`, action_type: "create_timer", device_id: B, timer_time: U, volume_start: J }, "save_timer_request"), x);
  }, A = async (B) => C(() => r.deleteRecord(B.uuid, "delete_timer_request"), x), F = async (B, I, J = 0.3, U = "once", G = []) => C(() => r.saveData({ name: `Будильник ${I}`, action_type: "create_alarm", device_id: B, status: "on", time: I, volume_start: J, repeat_type: U, repeat_days: G }, "save_alarm_request"), async () => {
    await Promise.all([S(), j()]);
  }), P = async (B, I) => C(() => r.updateRecord(B.uuid, "update_alarm_request", { ...B, action_type: "edit_alarm", ...I }), async () => {
    await Promise.all([S(), j()]);
  }), H = async (B) => C(() => r.deleteRecord(B.uuid, "delete_alarm_request"), S);
  return {
    feedback: { ...i, retry: i.error ? i.retry ?? (() => {
      b();
    }) : void 0 },
    alarmTimeWidgets: p,
    refreshAlarmTimes: () => i.run(j, { retryable: !0 }),
    alarms: d,
    createAlarm: F,
    createTimer: N,
    deleteAlarm: H,
    devices: y,
    loading: g,
    stopTimer: A,
    timers: a,
    toTimerSeconds: Sw,
    updateAlarm: P
  };
}
const jw = "_grid_w5y3x_31", Cw = "_card_w5y3x_38", Ew = "_empty_w5y3x_38", Nw = "_cardHeader_w5y3x_47", Tw = "_cardTitle_w5y3x_54", bw = "_meta_w5y3x_59", Rw = "_form_w5y3x_73", Aw = "_field_w5y3x_79", Pw = "_label_w5y3x_85", $w = "_input_w5y3x_91", Mw = "_quickTabs_w5y3x_101", Iw = "_quickTab_w5y3x_101", Lw = "_activeQuickTab_w5y3x_117", Dw = "_cardLead_w5y3x_135", Ow = "_cardIcon_w5y3x_143", zw = "_cardButton_w5y3x_148", Hw = "_wheelPicker_w5y3x_160", Fw = "_wheelColumn_w5y3x_173", Ww = "_wheelSelect_w5y3x_180", Bw = "_footerActions_w5y3x_202", Uw = "_saveButton_w5y3x_208", Vw = "_volumeLabel_w5y3x_226", qw = "_volumeValue_w5y3x_232", Qw = "_alarmTimeFields_w5y3x_237", ce = {
  grid: jw,
  card: Cw,
  empty: Ew,
  cardHeader: Nw,
  cardTitle: Tw,
  meta: bw,
  form: Rw,
  field: Aw,
  label: Pw,
  input: $w,
  quickTabs: Mw,
  quickTab: Iw,
  activeQuickTab: Lw,
  cardLead: Dw,
  cardIcon: Ow,
  cardButton: zw,
  wheelPicker: Hw,
  wheelColumn: Fw,
  wheelSelect: Ww,
  footerActions: Bw,
  saveButton: Uw,
  volumeLabel: Vw,
  volumeValue: qw,
  alarmTimeFields: Qw
}, Kw = [5, 10, 15, 30, 45, 60], Nf = (r) => {
  const i = Math.max(0, r), a = Math.floor(i / 3600), c = Math.floor(i % 3600 / 60), d = i % 60;
  return [a, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, Yw = (r, i, a) => Math.max(1, r * 3600 + i * 60 + a), Gw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), Jw = () => {
  const r = nt(), { feedback: i, createTimer: a, devices: c, loading: d, stopTimer: f, timers: p, toTimerSeconds: v } = kp(), [g, w] = m.useState(!1), [y, x] = m.useState(""), [S, j] = m.useState(0.3), [b, C] = m.useState({ hours: 0, minutes: 5, seconds: 0 }), [N, A] = m.useState({});
  m.useEffect(() => {
    A(Object.fromEntries(p.map((I) => [I.uuid, v(I.timer_time, I.status)])));
  }, [p, v]), m.useEffect(() => {
    const I = window.setInterval(() => {
      A((J) => Object.fromEntries(Object.entries(J).map(([U, G]) => {
        var ye;
        return [U, ((ye = p.find((de) => de.uuid === U)) == null ? void 0 : ye.status) === "paused" ? G : Math.max(0, G - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(I);
  }, [p]);
  const F = m.useMemo(() => new Map(c.map((I) => [I.id, I.name])), [c]), P = Yw(b.hours, b.minutes, b.seconds), H = async () => {
    y && await a(y, P, S) && w(!1);
  }, B = (I) => C(Gw(I * 60));
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: _("Таймеры") }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...i }),
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: X.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Таймеры") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(lr, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          ae,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          ae,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      d && /* @__PURE__ */ o.jsx(Fr, {}),
      /* @__PURE__ */ o.jsx("div", { className: ce.grid, children: p.length ? p.map((I) => {
        const J = v(I.timer_time, I.status), U = Sp(I.timer_time);
        return /* @__PURE__ */ o.jsx("div", { className: ce.card, children: /* @__PURE__ */ o.jsxs("div", { className: ce.cardHeader, children: [
          /* @__PURE__ */ o.jsxs("div", { className: ce.cardLead, children: [
            /* @__PURE__ */ o.jsx(Kl, { className: ce.cardIcon, size: 26 }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("h2", { className: ce.cardTitle, children: Nf(N[I.uuid] ?? J) }),
              /* @__PURE__ */ o.jsxs("div", { className: ce.meta, children: [
                _("Заведен на"),
                " ",
                Nf(U),
                " • ",
                F.get(I.device_id) || I.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(ae, { variant: "remove", onClick: () => f(I), children: _("Удалить") })
        ] }) }, I.uuid);
      }) : !d && !i.error && /* @__PURE__ */ o.jsx("div", { className: ce.empty, children: _("Нет запущенных таймеров.") }) }),
      /* @__PURE__ */ o.jsx(Kt, { feedback: i, open: g, onClose: () => w(!1), title: _("Создать таймер"), footer: /* @__PURE__ */ o.jsx("div", { className: ce.footerActions, children: /* @__PURE__ */ o.jsx(ae, { className: ce.saveButton, onClick: H, disabled: !y, children: _("Создать") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: ce.form, children: [
        /* @__PURE__ */ o.jsx("div", { className: ce.wheelPicker, "aria-label": _("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((I) => /* @__PURE__ */ o.jsxs("label", { className: ce.wheelColumn, children: [
          /* @__PURE__ */ o.jsx("span", { className: ce.label, children: _(I === "hours" ? "Часы" : I === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              className: ce.wheelSelect,
              type: "number",
              min: 0,
              max: I === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: b[I],
              onChange: (J) => {
                const U = Math.max(0, Math.min(I === "hours" ? 23 : 59, Math.trunc(Number(J.target.value) || 0)));
                C((G) => ({ ...G, [I]: U }));
              }
            }
          )
        ] }, I)) }),
        /* @__PURE__ */ o.jsxs("div", { className: ce.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: ce.label, children: _("Быстрое создание") }),
          /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, children: Kw.map((I) => /* @__PURE__ */ o.jsxs("button", { type: "button", className: `${ce.quickTab} ${P === I * 60 ? ce.activeQuickTab : ""}`, onClick: () => B(I), children: [
            I,
            " ",
            _("мин")
          ] }, I)) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Dr,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: y,
            options: c.map((I) => ({ value: I.id, label: I.name })),
            onSelect: x
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: ce.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${ce.label} ${ce.volumeLabel}`, children: [
            _("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: ce.volumeValue, children: [
              Math.round(S * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: ce.input, type: "range", min: "0", max: "1", step: "0.05", value: S, onChange: (I) => j(Number(I.target.value)) })
        ] })
      ] }) })
    ] })
  ] });
};
let Xw = 0;
function jp() {
  var r;
  if ((r = globalThis.crypto) != null && r.getRandomValues) {
    const i = new Uint8Array(16);
    return globalThis.crypto.getRandomValues(i), `monitor-${Array.from(i, (a) => a.toString(16).padStart(2, "0")).join("")}`;
  }
  return `monitor-${Date.now().toString(36)}-${(++Xw).toString(36)}`;
}
class Cp {
  constructor() {
    be(this, "context");
    be(this, "ownsContext", !0);
    be(this, "unsubscribe");
    be(this, "closed", !1);
    be(this, "nextTime", 0);
    be(this, "sources", /* @__PURE__ */ new Set());
  }
  async prepare(i) {
    this.ownsContext = !i, this.context = i ?? new AudioContext(), await this.context.resume();
  }
  async listen(i, a, c) {
    return this.listenWith((d) => i.monitorAudio(a, d), c);
  }
  async listenWith(i, a) {
    const c = await i((d) => {
      const f = this.context;
      if (this.closed || !f) return;
      if (d.type === "status") {
        d.connected || this.clear(), a(!!d.connected);
        return;
      }
      if (d.type !== "audio" || d.rate !== 16e3 || !d.pcm) return;
      const p = Uint8Array.from(atob(d.pcm), (x) => x.charCodeAt(0)), v = new DataView(p.buffer), g = f.createBuffer(1, p.length / 2, d.rate), w = g.getChannelData(0);
      for (let x = 0; x < w.length; x++)
        w[x] = v.getInt16(x * 2, !0) / 32768;
      this.nextTime > f.currentTime + 0.3 && this.clear(), this.nextTime = Math.max(this.nextTime, f.currentTime + 0.06);
      const y = f.createBufferSource();
      y.buffer = g, y.connect(f.destination), this.sources.add(y), y.onended = () => this.sources.delete(y), y.start(this.nextTime), this.nextTime += g.duration;
    });
    this.closed ? Promise.resolve(c()).catch(() => {
    }) : this.unsubscribe = c;
  }
  clear() {
    for (const i of this.sources)
      try {
        i.stop();
      } catch {
      }
    this.sources.clear(), this.nextTime = 0;
  }
  close() {
    var i;
    this.closed = !0, this.clear(), this.unsubscribe && Promise.resolve(this.unsubscribe()).catch(() => {
    }), this.unsubscribe = void 0, this.ownsContext && ((i = this.context) == null || i.close().catch(() => {
    })), this.context = void 0;
  }
}
function Ep() {
  var r;
  return !!(globalThis.isSecureContext && ((r = navigator.mediaDevices) != null && r.getUserMedia));
}
function Zw(r) {
  const i = r && typeof r == "object" && "name" in r ? String(r.name) : "";
  return i === "NotAllowedError" || i === "SecurityError" ? "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS." : i === "NotSupportedError" ? "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari." : i === "NotFoundError" ? "Микрофон на этом устройстве не найден." : i === "NotReadableError" ? "Микрофон занят другим приложением или недоступен." : "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.";
}
class eS {
  constructor(i, a, c) {
    be(this, "output", new Cp());
    be(this, "context");
    be(this, "stream");
    be(this, "input");
    be(this, "worklet");
    be(this, "closed", !1);
    be(this, "sending", !1);
    be(this, "inFlight", 0);
    be(this, "failed", !1);
    be(this, "muted", !1);
    be(this, "outputs", []);
    be(this, "api");
    be(this, "viewId");
    be(this, "onFailure");
    this.api = i, this.viewId = a, this.onFailure = c;
  }
  setSending(i) {
    this.sending = i;
  }
  setMicrophoneMuted(i) {
    var a;
    this.muted = i;
    for (const c of ((a = this.stream) == null ? void 0 : a.getAudioTracks()) ?? []) c.enabled = !i;
  }
  getOutputDevices() {
    return [...this.outputs];
  }
  canSelectOutput() {
    var i, a;
    return typeof ((i = this.context) == null ? void 0 : i.setSinkId) == "function" && (typeof ((a = navigator.mediaDevices) == null ? void 0 : a.selectAudioOutput) == "function" || this.outputs.some((c) => c.id !== "default"));
  }
  canPromptOutput() {
    return this.canSelectOutput() && typeof navigator.mediaDevices.selectAudioOutput == "function";
  }
  async selectOutput(i) {
    if (this.closed || !this.context) throw new DOMException("Call closed", "AbortError");
    const a = this.context;
    if (!a.setSinkId) throw new DOMException("Output selection unavailable", "NotSupportedError");
    if (await a.setSinkId(i), this.closed) throw new DOMException("Call closed", "AbortError");
    await a.resume();
  }
  async promptOutput() {
    const i = navigator.mediaDevices;
    if (!this.canPromptOutput() || !i.selectAudioOutput) throw new DOMException("Output chooser unavailable", "NotSupportedError");
    const a = await i.selectAudioOutput();
    return await this.selectOutput(a.deviceId), { id: a.deviceId, label: a.label };
  }
  async prepare() {
    if (!Ep()) throw new DOMException("Secure microphone unavailable", "SecurityError");
    if (this.context = new AudioContext(), !this.context.audioWorklet || !globalThis.AudioWorkletNode) throw new DOMException("AudioWorklet unavailable", "NotSupportedError");
    if (await this.output.prepare(this.context), this.closed) throw new DOMException("Call closed", "AbortError");
    const i = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }, video: !1 });
    if (this.closed)
      throw i.getTracks().forEach((a) => a.stop()), new DOMException("Call closed", "AbortError");
    if (this.stream = i, this.setMicrophoneMuted(this.muted), navigator.mediaDevices.enumerateDevices) {
      const a = await navigator.mediaDevices.enumerateDevices().catch(() => []);
      this.outputs = a.filter((c) => c.kind === "audiooutput" && c.deviceId).map((c) => ({ id: c.deviceId, label: c.label || c.deviceId }));
    }
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    if (await this.context.resume(), this.closed) throw new DOMException("Call closed", "AbortError");
    for (const a of i.getAudioTracks()) a.onended = () => this.fail("Микрофон отключён. Звонок завершён.");
    if (await this.context.audioWorklet.addModule("/ha_dialog_ui_static/call-capture-worklet.js"), this.closed) throw new DOMException("Call closed", "AbortError");
    this.input = this.context.createMediaStreamSource(i), this.worklet = new AudioWorkletNode(this.context, "ha-call-capture", { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1] }), this.worklet.port.onmessage = (a) => {
      var f;
      if ((f = this.worklet) == null || f.port.postMessage("ack"), this.closed || !this.sending || this.inFlight >= 3) return;
      const c = new Uint8Array(a.data);
      if (c.length !== 1280) return;
      this.muted && c.fill(0), this.inFlight++;
      let d = "";
      for (const p of c) d += String.fromCharCode(p);
      this.api.browserCallAudio(this.viewId, btoa(d)).catch(() => this.fail("Потеряно соединение звонка.")).finally(() => {
        this.inFlight--;
      });
    }, this.input.connect(this.worklet), this.worklet.connect(this.context.destination);
  }
  async resumePlayback() {
    this.closed || !this.context || await this.context.resume();
  }
  async listen() {
    await this.output.listenWith((i) => this.api.browserCallReceive(this.viewId, i), () => {
    });
  }
  fail(i) {
    this.closed || this.failed || (this.failed = !0, this.close(), this.onFailure(i));
  }
  close() {
    var i, a, c;
    this.closed = !0, this.sending = !1, this.output.close(), this.worklet && (this.worklet.port.onmessage = null, this.worklet.disconnect()), (i = this.input) == null || i.disconnect();
    for (const d of ((a = this.stream) == null ? void 0 : a.getTracks()) ?? [])
      d.onended = null, d.stop();
    this.stream = void 0, (c = this.context) == null || c.close().catch(() => {
    }), this.context = void 0;
  }
}
const tS = "_navigation_mjbb7_1", nS = "_page_mjbb7_5", rS = "_title_mjbb7_11", sS = "_hint_mjbb7_15", oS = "_grid_mjbb7_20", aS = "_device_mjbb7_27", iS = "_active_mjbb7_56", lS = "_phoneStage_mjbb7_113", uS = "_avatar_mjbb7_124", cS = "_phoneStatus_mjbb7_141", dS = "_duration_mjbb7_148", fS = "_phoneFooter_mjbb7_159", pS = "_callControls_mjbb7_167", hS = "_control_mjbb7_173", mS = "_roundControl_mjbb7_186", vS = "_hangup_mjbb7_186", yS = "_controlSelected_mjbb7_196", gS = "_routeHint_mjbb7_214", _S = "_routeName_mjbb7_223", xS = "_dial_mjbb7_237", $e = {
  navigation: tS,
  page: nS,
  title: rS,
  hint: sS,
  grid: oS,
  device: aS,
  active: iS,
  phoneStage: lS,
  avatar: uS,
  phoneStatus: cS,
  duration: dS,
  phoneFooter: fS,
  callControls: pS,
  control: hS,
  roundControl: mS,
  hangup: vS,
  controlSelected: yS,
  routeHint: gS,
  routeName: _S,
  dial: xS
};
function wS() {
  var Re;
  const r = ct(), i = nt(), [a, c] = m.useState(), [d, f] = m.useState(""), [p, v] = m.useState(""), [g, w] = m.useState(!1), [y, x] = m.useState(!1), [S, j] = m.useState(!1), [b, C] = m.useState([]), [N, A] = m.useState(!1), [F, P] = m.useState("default"), [H, B] = m.useState(!1), [I, J] = m.useState(!1), [U, G] = m.useState(0), ye = m.useRef(), de = m.useRef(""), ge = m.useRef(), pe = m.useRef(!1), _e = Ep();
  m.useEffect(() => {
    let Z = !0;
    pe.current = !0, x(!1);
    const fe = jp();
    de.current = fe;
    let De;
    return r.callsWatch(fe, (Ae) => {
      Z && c(Ae);
    }).then((Ae) => {
      Z ? (De = Ae, x(!0)) : Promise.resolve(Ae()).catch(() => {
      });
    }).catch((Ae) => {
      Z && v(Tt(Ae));
    }), () => {
      var Ae;
      Z = !1, pe.current = !1, (Ae = ge.current) == null || Ae.close(), ge.current = void 0, De && Promise.resolve(De()).catch(() => {
      });
    };
  }, [r]);
  const te = a == null ? void 0 : a.calls.find((Z) => Z.id === a.owned_call_id);
  m.useEffect(() => {
    var Z, fe;
    (Z = ge.current) == null || Z.setSending((te == null ? void 0 : te.state) === "connecting" || (te == null ? void 0 : te.state) === "active"), a && !a.owned_call_id && !g && ((fe = ge.current) == null || fe.close(), ge.current = void 0);
  }, [a, te == null ? void 0 : te.state, g]), m.useEffect(() => {
    var De;
    if ((te == null ? void 0 : te.state) !== "active") {
      ye.current = void 0, G(0);
      return;
    }
    ((De = ye.current) == null ? void 0 : De.id) !== te.id && (ye.current = { id: te.id, time: Date.now() });
    const Z = () => G(Math.max(0, Math.floor((Date.now() - ye.current.time) / 1e3)));
    Z();
    const fe = setInterval(Z, 1e3);
    return () => clearInterval(fe);
  }, [te == null ? void 0 : te.id, te == null ? void 0 : te.state]);
  const Ee = () => {
    var fe;
    if (!re) return;
    const Z = !S;
    (fe = ge.current) == null || fe.setMicrophoneMuted(Z), j(Z);
  }, W = async (Z) => {
    const fe = ge.current;
    if (!(!fe || I || !re)) {
      J(!0), v("");
      try {
        await fe.selectOutput(Z), pe.current && ge.current === fe && (P(Z), B(!1));
      } catch (De) {
        pe.current && !(De instanceof DOMException && De.name === "AbortError") && v(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        pe.current && J(!1);
      }
    }
  }, O = async () => {
    const Z = ge.current;
    if (!(!Z || I || !re)) {
      if (F !== "default") {
        await W("default");
        return;
      }
      if (!Z.canPromptOutput()) {
        B((fe) => !fe);
        return;
      }
      J(!0), v("");
      try {
        const fe = await Z.promptOutput();
        pe.current && ge.current === Z && (P(fe.id), C((De) => De.some((Ae) => Ae.id === fe.id) ? De : [...De, fe]));
      } catch (fe) {
        pe.current && !(fe instanceof DOMException && ["AbortError", "NotAllowedError"].includes(fe.name)) && v(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        pe.current && J(!1);
      }
    }
  }, z = a == null ? void 0 : a.devices.find((Z) => Z.id === d), q = (Z) => a == null ? void 0 : a.calls.some((fe) => fe.source_device_id === Z || fe.target_device_id === Z), E = a == null ? void 0 : a.calls.find((Z) => Z.source_device_id === d || Z.target_device_id === d), $ = !!(te && te.target_device_id === d), re = $ && (te == null ? void 0 : te.state) === "active" && !g, me = (Z) => {
    var fe;
    return ((fe = a == null ? void 0 : a.devices.find((De) => De.id === Z)) == null ? void 0 : fe.name) ?? _("Колонка");
  }, we = _((E == null ? void 0 : E.state) === "active" ? "Разговор" : (E == null ? void 0 : E.state) === "connecting" ? "Соединяем…" : E ? "Ожидание ответа" : "Готово к звонку"), Se = async () => {
    var Z;
    if (!g) {
      w(!0), v("");
      try {
        await r.browserCallEnd(de.current), (Z = ge.current) == null || Z.close(), ge.current = void 0;
      } catch (fe) {
        pe.current && v(Tt(fe));
      } finally {
        pe.current && w(!1);
      }
    }
  }, Ne = async () => {
    var De;
    if (g || !d) return;
    w(!0), v(""), j(!1), P("default"), B(!1), C([]), A(!1);
    const Z = de.current, fe = new eS(r, Z, (Ae) => {
      pe.current && v(_(Ae)), r.browserCallEnd(Z).catch(() => {
      });
    });
    (De = ge.current) == null || De.close(), ge.current = fe;
    try {
      if (await fe.prepare(), pe.current && (C(fe.getOutputDevices()), A(fe.canSelectOutput())), !pe.current) {
        fe.close();
        return;
      }
      const Ae = await r.browserCallStart(Z, d);
      if (!pe.current) {
        fe.close();
        return;
      }
      if (await fe.listen(), !pe.current) {
        fe.close();
        return;
      }
      c((Yt) => Yt && { ...Yt, owned_call_id: Ae.call_id, calls: Yt.calls.some((Ws) => Ws.id === Ae.call_id) ? Yt.calls : [...Yt.calls, { id: Ae.call_id, source_device_id: null, source_type: "browser", target_device_id: d, state: "ringing" }] });
    } catch (Ae) {
      fe.close(), pe.current && v(Ae instanceof DOMException ? _(Zw(Ae)) : Tt(Ae)), await r.browserCallEnd(Z).catch(() => {
      });
    } finally {
      pe.current && w(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: $e.navigation, children: /* @__PURE__ */ o.jsx(ht, {}) }),
    i && /* @__PURE__ */ o.jsx(mt, { title: "Звонки" }),
    /* @__PURE__ */ o.jsxs("section", { className: $e.page, children: [
      /* @__PURE__ */ o.jsx("h1", { className: $e.title, children: _("Звонки") }),
      /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Выберите колонку, на которую хотите позвонить с этого устройства.") }),
      !_e && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.") }),
      p && !d && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
      !a && !p && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка…") }),
      a && !a.available && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.") }),
      (a == null ? void 0 : a.available) && a.devices.length === 0 && /* @__PURE__ */ o.jsx("p", { children: _("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.") }),
      /* @__PURE__ */ o.jsx("div", { className: $e.grid, children: a == null ? void 0 : a.devices.map((Z) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `${$e.device} ${q(Z.id) ? $e.active : ""}`,
          onClick: () => {
            f(Z.id), v("");
          },
          children: [
            q(Z.id) ? /* @__PURE__ */ o.jsx(ff, { size: 26 }) : /* @__PURE__ */ o.jsx(ua, { size: 26 }),
            /* @__PURE__ */ o.jsx("strong", { children: Z.name }),
            /* @__PURE__ */ o.jsx("span", { children: _(Z.online ? q(Z.id) ? "Участвует в звонке" : "Готова к звонку" : "Нет подключения") })
          ]
        },
        Z.id
      )) }),
      /* @__PURE__ */ o.jsxs(Kt, { open: !!d, onClose: () => f(""), title: _("Звонки"), dialogLabel: me(d), footer: /* @__PURE__ */ o.jsxs("div", { className: $e.phoneFooter, children: [
        /* @__PURE__ */ o.jsxs("div", { className: $e.callControls, children: [
          /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ o.jsx(ae, { variant: "secondary", className: `${$e.roundControl} ${$ && S ? $e.controlSelected : ""}`, "aria-label": _($ && S ? "Включить микрофон" : "Выключить микрофон"), "aria-pressed": $ && S, disabled: !re, onClick: Ee, children: $ && S ? /* @__PURE__ */ o.jsx(eg, { size: 25 }) : /* @__PURE__ */ o.jsx(ng, { size: 25 }) }),
            /* @__PURE__ */ o.jsx("span", { children: _($ && S ? "Микрофон выкл." : "Микрофон") })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ o.jsx(ae, { variant: "secondary", className: `${$e.roundControl} ${$ && F !== "default" ? $e.controlSelected : ""}`, "aria-label": _("Динамик"), "aria-pressed": $ && F !== "default", disabled: !re || !N || I, onClick: () => void O(), children: /* @__PURE__ */ o.jsx(_g, { size: 25 }) }),
            /* @__PURE__ */ o.jsx("span", { children: _("Динамик") })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ o.jsx(ae, { variant: "secondary", className: $e.roundControl, "aria-label": _("Включить звук"), disabled: !re, onClick: () => {
              var Z;
              return void ((Z = ge.current) == null ? void 0 : Z.resumePlayback().catch(() => v(_("Браузер заблокировал звук. Проверьте разрешение воспроизведения и громкость телефона."))));
            }, children: /* @__PURE__ */ o.jsx(jy, { size: 25 }) }),
            /* @__PURE__ */ o.jsx("span", { children: _("Звук") })
          ] })
        ] }),
        re && !N && /* @__PURE__ */ o.jsxs("div", { className: $e.routeHint, children: [
          /* @__PURE__ */ o.jsx("span", { children: _("Выход звука — через настройки телефона") }),
          /* @__PURE__ */ o.jsx(rr, { label: "Динамик", description: "Этот браузер не разрешает переключать разговорный динамик и громкую связь из сайта. Выберите динамик или наушники в системном меню телефона. Кнопка «Звук» повторно включает воспроизведение." })
        ] }),
        re && H && /* @__PURE__ */ o.jsx(mn, { label: "Устройство вывода", value: F, disabled: I, onChange: (Z) => void W(Z.target.value), options: [{ value: "default", label: _("По умолчанию") }, ...b.filter((Z) => Z.id !== "default").map((Z) => ({ value: Z.id, label: Z.label }))] }),
        re && F !== "default" && /* @__PURE__ */ o.jsx("small", { className: $e.routeName, children: (Re = b.find((Z) => Z.id === F)) == null ? void 0 : Re.label }),
        /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
          $ ? /* @__PURE__ */ o.jsx(ae, { className: $e.hangup, disabled: g, "aria-label": _("Положить трубку"), onClick: () => void Se(), children: /* @__PURE__ */ o.jsx(og, { size: 30 }) }) : /* @__PURE__ */ o.jsx(ae, { className: $e.dial, "aria-label": _(E ? "Занято" : "Позвонить"), disabled: g || !y || !_e || !(a != null && a.available) || !(z != null && z.online) || !!te || !!E, onClick: () => void Ne(), children: /* @__PURE__ */ o.jsx(ua, { size: 30 }) }),
          /* @__PURE__ */ o.jsx("span", { children: _($ ? "Завершить" : E ? "Занято" : "Позвонить") })
        ] })
      ] }), children: [
        /* @__PURE__ */ o.jsxs("div", { className: $e.phoneStage, children: [
          /* @__PURE__ */ o.jsx("div", { className: $e.avatar, children: /* @__PURE__ */ o.jsx(ff, { size: 46, strokeWidth: 1.4 }) }),
          /* @__PURE__ */ o.jsx("h2", { children: me(d) }),
          /* @__PURE__ */ o.jsxs("div", { className: $e.phoneStatus, children: [
            /* @__PURE__ */ o.jsx("span", { role: "status", "aria-live": "polite", children: g && !$ ? _("Подключаем микрофон…") : we }),
            /* @__PURE__ */ o.jsx(rr, { label: "Звонки", description: "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA." })
          ] }),
          $ && (te == null ? void 0 : te.state) === "active" && /* @__PURE__ */ o.jsxs("time", { className: $e.duration, "aria-label": _("Длительность звонка"), children: [
            String(Math.floor(U / 60)).padStart(2, "0"),
            ":",
            String(U % 60).padStart(2, "0")
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _($ && S ? "Ваш микрофон выключен" : "Этот телефон или компьютер") })
        ] }),
        p && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
        !_e && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.") }),
        E && !$ && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Колонка уже участвует в другом звонке.") }),
        te && !$ && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Сначала завершите текущий звонок.") })
      ] })
    ] })
  ] });
}
const SS = "_page_12ruw_1", kS = "_heading_12ruw_8", jS = "_grid_12ruw_26", CS = "_device_12ruw_33", ES = "_deviceLive_12ruw_64", NS = "_navigation_12ruw_72", TS = "_playback_12ruw_76", bS = "_playbackSelect_12ruw_92", RS = "_statusRow_12ruw_112", AS = "_status_12ruw_112", PS = "_live_12ruw_127", $S = "_hint_12ruw_131", MS = "_footer_12ruw_137", IS = "_empty_12ruw_148", LS = "_error_12ruw_155", Ke = {
  page: SS,
  heading: kS,
  grid: jS,
  device: CS,
  deviceLive: ES,
  navigation: NS,
  playback: TS,
  playbackSelect: bS,
  statusRow: RS,
  status: AS,
  live: PS,
  hint: $S,
  footer: MS,
  empty: IS,
  error: LS
};
function DS() {
  const r = ct(), i = nt(), [a, c] = m.useState(), [d, f] = m.useState(""), [p, v] = m.useState(null), [g, w] = m.useState("browser"), [y, x] = m.useState(!1), [S, j] = m.useState(!1), b = m.useRef(""), C = m.useRef(!1), N = m.useRef(), [A, F] = m.useState(0);
  m.useEffect(() => {
    C.current = !0;
    let z = !0, q;
    const E = jp();
    return b.current = E, c(void 0), f(""), r.monitorWatch(E, ($) => {
      z && c($);
    }).then(($) => {
      z ? q = $ : Promise.resolve($()).catch(() => {
      });
    }).catch(($) => {
      z && f(
        Tt(
          $,
          "Не удалось открыть радионяню. Проверьте подключение к HA."
        )
      );
    }), () => {
      var $;
      z = !1, C.current = !1, ($ = N.current) == null || $.close(), N.current = void 0, q && Promise.resolve(q()).catch(() => {
      });
    };
  }, [r, A]), m.useEffect(() => {
    var z;
    a && !a.owned_source_id && !y && ((z = N.current) == null || z.close(), N.current = void 0, j(!1));
  }, [a, y]);
  const P = a == null ? void 0 : a.devices.find((z) => z.id === p), H = (a == null ? void 0 : a.devices.filter((z) => z.source)) ?? [], B = a == null ? void 0 : a.sessions.find(
    (z) => z.source_device_id === p
  ), I = !!(P != null && P.transmitting || (P == null ? void 0 : P.source_state) === "on" || B), J = S && (P == null ? void 0 : P.transmitting) && (a == null ? void 0 : a.owned_source_id) === p, U = !!B || J, G = (z) => {
    const q = a == null ? void 0 : a.sessions.find(
      (E) => E.source_device_id === z.id
    );
    w((q == null ? void 0 : q.listener_device_id) ?? "browser"), v(z.id), f("");
  }, ye = () => v(null), de = async () => {
    var q;
    if (!P || y) return;
    x(!0), f(""), j(!1), (q = N.current) == null || q.close(), N.current = void 0;
    let z;
    try {
      g === "browser" && (z = new Cp(), N.current = z, await z.prepare());
      const E = await r.monitorStart(
        b.current,
        P.id,
        g === "browser" ? void 0 : g
      );
      if (!C.current || !E.started) {
        z == null || z.close();
        return;
      }
      z && await z.listen(r, P.node_id, ($) => {
        C.current && j($);
      }), C.current && (j(!0), c(
        ($) => $ && {
          ...$,
          owned_source_id: P.id,
          devices: $.devices.map(
            (re) => re.id === P.id ? { ...re, transmitting: !0, source_state: "on" } : re
          ),
          sessions: g === "browser" ? $.sessions : [
            ...$.sessions.filter(
              (re) => re.source_device_id !== P.id
            ),
            {
              source_device_id: P.id,
              listener_device_id: g
            }
          ]
        }
      ));
    } catch (E) {
      if (z == null || z.close(), C.current) {
        f(
          Tt(
            E,
            "Не удалось начать прослушивание. Проверьте подключение и разрешение воспроизведения."
          )
        );
        try {
          await r.monitorStop(b.current, P.id);
        } catch {
        }
      }
    } finally {
      C.current && x(!1);
    }
  }, ge = async (z) => {
    var q;
    x(!0), f("");
    try {
      await r.monitorStop(b.current, z), (a == null ? void 0 : a.owned_source_id) === z && ((q = N.current) == null || q.close(), N.current = void 0, j(!1)), c(
        (E) => E && {
          ...E,
          owned_source_id: E.owned_source_id === z ? null : E.owned_source_id,
          devices: E.devices.map(
            ($) => $.id === z ? { ...$, transmitting: !1, source_state: "off" } : $
          ),
          sessions: E.sessions.filter(
            ($) => $.source_device_id !== z && $.listener_device_id !== z
          )
        }
      );
    } catch (E) {
      C.current && f(Tt(E));
    } finally {
      C.current && x(!1);
    }
  }, pe = (a == null ? void 0 : a.devices.filter(
    (z) => z.listener && z.id !== p
  )) ?? [], _e = pe.find((z) => z.id === g), te = _(
    y ? "Подключаемся…" : I ? J || B ? "Прослушивание активно" : "Источник включён" : "Готово к запуску"
  ), Ee = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: Ke.statusRow, children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: `${Ke.status} ${I ? Ke.live : ""}`,
          children: [
            /* @__PURE__ */ o.jsx(My, { size: 12, fill: "currentColor" }),
            te
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(rr, { label: te, description: _(
        I && (a == null ? void 0 : a.owned_source_id) !== p ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже." : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня»."
      ) })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: Ke.hint, children: _("Где воспроизводить звук?") }),
    /* @__PURE__ */ o.jsxs("div", { className: Ke.playback, children: [
      g === "browser" ? /* @__PURE__ */ o.jsx(Vy, { size: 22 }) : /* @__PURE__ */ o.jsx(Kl, { size: 22 }),
      /* @__PURE__ */ o.jsx(
        mn,
        {
          "aria-label": _("Где воспроизводить звук?"),
          className: Ke.playbackSelect,
          value: g,
          onChange: (z) => w(z.target.value),
          disabled: y || U,
          options: [
            { value: "browser", label: _("На этом устройстве") },
            ...pe.map((z) => ({
              value: z.id,
              label: z.online ? z.name : `${z.name} — ${_("Нет подключения")}`,
              disabled: !z.online
            }))
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("small", { children: _(g === "browser" ? "Телефон или компьютер" : _e != null && _e.online ? "Колонка" : "Нет подключения") })
    ] }),
    U && /* @__PURE__ */ o.jsx("p", { className: Ke.hint, children: _("Чтобы сменить устройство воспроизведения, сначала остановите сеанс.") })
  ] }), W = /* @__PURE__ */ o.jsx("div", { className: Ke.footer, children: /* @__PURE__ */ o.jsx(
    ae,
    {
      onClick: I ? () => void ge(p) : () => void de(),
      disabled: y || !I && !(P != null && P.online) || !I && g !== "browser" && !(a != null && a.devices.some(
        (z) => z.id === g && z.online
      )),
      children: _(
        y ? "Подключаемся…" : I ? g === "browser" && !J && !B ? "Начать слушать" : "Остановить" : "Старт"
      )
    }
  ) }), O = I && !U ? /* @__PURE__ */ o.jsxs("div", { className: Ke.footer, children: [
    /* @__PURE__ */ o.jsx(ae, { disabled: y || !(P != null && P.online), onClick: () => void de(), children: _(g === "browser" ? "Начать слушать" : "Старт") }),
    /* @__PURE__ */ o.jsx(
      ae,
      {
        variant: "ghost",
        disabled: y,
        onClick: () => void ge(p),
        children: _("Остановить источник")
      }
    )
  ] }) : W;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: Ke.navigation, children: /* @__PURE__ */ o.jsx(ht, {}) }),
    i && /* @__PURE__ */ o.jsx(mt, { title: "Радионяня" }),
    /* @__PURE__ */ o.jsxs("section", { className: Ke.page, children: [
      /* @__PURE__ */ o.jsxs("header", { className: Ke.heading, children: [
        /* @__PURE__ */ o.jsx(Ql, { size: 30 }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("h1", { children: _("Радионяня") }),
          /* @__PURE__ */ o.jsx("p", { children: _("Выберите колонку, чтобы слышать, что происходит рядом с ней.") })
        ] })
      ] }),
      d && !p && /* @__PURE__ */ o.jsxs("div", { role: "alert", className: Ke.error, children: [
        d,
        /* @__PURE__ */ o.jsx(ae, { onClick: () => F((z) => z + 1), children: _("Повторить") })
      ] }),
      !a && !d && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка…") }),
      a && !a.available && /* @__PURE__ */ o.jsx("div", { className: Ke.empty, children: _(
        "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124."
      ) }),
      (a == null ? void 0 : a.available) && H.length === 0 && /* @__PURE__ */ o.jsx("div", { className: Ke.empty, children: _(
        "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome."
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: Ke.grid, children: H.map((z) => {
        const q = a == null ? void 0 : a.sessions.find(
          ($) => $.source_device_id === z.id
        ), E = a == null ? void 0 : a.devices.find(
          ($) => $.id === (q == null ? void 0 : q.listener_device_id)
        );
        return /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `${Ke.device} ${z.transmitting ? Ke.deviceLive : ""}`,
            onClick: () => G(z),
            children: [
              /* @__PURE__ */ o.jsx(lg, { size: 28 }),
              /* @__PURE__ */ o.jsx("strong", { children: z.name }),
              /* @__PURE__ */ o.jsx("span", { children: _(
                z.online ? z.transmitting ? "Источник включён" : z.source_state === "on" ? "Переподключение…" : "Готова к прослушиванию" : "Нет подключения"
              ) }),
              E && /* @__PURE__ */ o.jsxs("small", { children: [
                _("Воспроизведение:"),
                " ",
                E.name
              ] })
            ]
          },
          z.id
        );
      }) }),
      /* @__PURE__ */ o.jsxs(
        Kt,
        {
          open: p !== null,
          onClose: ye,
          title: (P == null ? void 0 : P.name) ?? "Радионяня",
          dialogLabel: (P == null ? void 0 : P.name) ?? _("Радионяня"),
          footer: O,
          children: [
            d && /* @__PURE__ */ o.jsx("p", { role: "alert", className: Ke.error, children: d }),
            Ee
          ]
        }
      )
    ] })
  ] });
}
const OS = ({ command: r, open: i, onClose: a, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const p = r.status === "on";
  return /* @__PURE__ */ o.jsx(eu, { open: i, title: r.title, uuid: r.uuid, onClose: a, actions: [
    { label: p ? "Выключить" : "Включить", onClick: () => c(r, p ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, zS = (r) => {
  const i = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !i || Number(i[1]) > 23 || Number(i[2]) > 59 ? null : `${i[1].padStart(2, "0")}:${i[2]}`;
}, Ll = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], HS = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], FS = (r = "once", i = []) => r === "daily" ? _("ежедневно") : r === "weekdays" ? _("по будням") : r === "weekends" ? _("по выходным") : r === "custom" ? i.length ? i.map((a) => {
  var c;
  return (c = Ll.find((d) => d.key === a)) != null && c.label ? _(Ll.find((d) => d.key === a).label) : a;
}).join(", ") : _("кастом") : _("однократно"), WS = () => {
  const r = nt(), { feedback: i, alarmTimeWidgets: a, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: p, devices: v, loading: g, updateAlarm: w } = kp(), [y, x] = m.useState(!1), [S, j] = m.useState(null), [b, C] = m.useState(null), [N, A] = m.useState(""), [F, P] = m.useState("08:00"), [H, B] = m.useState(0.3), [I, J] = m.useState("once"), [U, G] = m.useState([]), ye = m.useMemo(() => Array.from(new Set([...a.flatMap((W) => W.time || []), ...d.map((W) => W.time)].map(zS).filter((W) => W !== null))), [a, d]), de = m.useMemo(() => new Map(v.map((W) => [W.id, W.name])), [v]), ge = d.find((W) => W.uuid === S) || null, pe = async () => {
    if (!N || !F) return;
    const W = d.find((O) => O.uuid === b);
    if (W) {
      if (!await w(W, { device_id: N, time: F, volume_start: H, repeat_type: I, repeat_days: U })) return;
    } else if (!await f(N, F, H, I, U)) return;
    C(null), x(!1);
  }, _e = () => {
    C(null), x(!0), c();
  }, te = (W) => {
    P(W.time), A(W.device_id), B(W.volume_start ?? 0.3), J(W.repeat_type ?? "once"), G(W.repeat_days ?? []), c(), C(W.uuid), j(null), x(!0);
  }, Ee = (W) => G((O) => O.includes(W) ? O.filter((z) => z !== W) : [...O, W]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: _("Будильники") }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !y && /* @__PURE__ */ o.jsx(Ge, { ...i }),
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: X.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Будильники") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(lr, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          ae,
          {
            variant: "primary",
            onClick: _e,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          ae,
          {
            variant: "primary",
            onClick: _e,
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      g && /* @__PURE__ */ o.jsx(Fr, {}),
      /* @__PURE__ */ o.jsx("div", { className: ce.grid, children: d.length ? d.map((W) => /* @__PURE__ */ o.jsx("button", { className: `${ce.card} ${ce.cardButton}`, type: "button", onClick: () => j(W.uuid), children: /* @__PURE__ */ o.jsxs("div", { className: ce.cardHeader, children: [
        /* @__PURE__ */ o.jsxs("div", { className: ce.cardLead, children: [
          /* @__PURE__ */ o.jsx(Kl, { className: ce.cardIcon, size: 26 }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h2", { className: ce.cardTitle, children: W.time }),
            /* @__PURE__ */ o.jsxs("div", { className: ce.meta, children: [
              FS(W.repeat_type, W.repeat_days),
              " • ",
              de.get(W.device_id) || W.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            onClick: (O) => O.stopPropagation(),
            onMouseDown: (O) => O.stopPropagation(),
            children: /* @__PURE__ */ o.jsx(or, { label: _(""), checked: W.status !== "off", onClick: (O) => O.stopPropagation(), onChange: (O) => w(W, { status: O.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, W.uuid)) : !g && !i.error && /* @__PURE__ */ o.jsx("div", { className: ce.empty, children: _("Нет будильников.") }) }),
      /* @__PURE__ */ o.jsx(Kt, { feedback: i, open: y, onClose: () => {
        x(!1), C(null);
      }, title: b ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ o.jsx("div", { className: ce.footerActions, children: /* @__PURE__ */ o.jsx(ae, { className: ce.saveButton, onClick: pe, disabled: !N || !F, children: _("Сохранить") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: ce.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: ce.alarmTimeFields, role: "group", "aria-label": _("Время будильника"), children: [
          /* @__PURE__ */ o.jsx(
            Dr,
            {
              label: _("Часы"),
              value: F.split(":")[0],
              options: Array.from({ length: 24 }, (W, O) => ({ value: String(O).padStart(2, "0"), label: String(O).padStart(2, "0") })),
              onSelect: (W) => P(`${W}:${F.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ o.jsx(
            Dr,
            {
              label: _("Минуты"),
              value: F.split(":")[1],
              options: Array.from({ length: 60 }, (W, O) => ({ value: String(O).padStart(2, "0"), label: String(O).padStart(2, "0") })),
              onSelect: (W) => P(`${F.split(":")[0]}:${W}`)
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: ce.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: ce.label, children: _("Ранее заданное время") }),
          /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, children: ye.length ? ye.map((W) => /* @__PURE__ */ o.jsx("button", { type: "button", className: `${ce.quickTab} ${F === W ? ce.activeQuickTab : ""}`, onClick: () => P(W), children: W }, W)) : /* @__PURE__ */ o.jsx("span", { className: ce.meta, children: _("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Dr,
          {
            label: _("Повторы"),
            value: I,
            options: HS.map((W) => ({ ...W, label: _(W.label) })),
            onSelect: (W) => J(W)
          }
        ),
        I === "custom" && /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, role: "group", "aria-label": _("Дни повтора"), children: Ll.map((W) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": U.includes(W.key),
            className: `${ce.quickTab} ${U.includes(W.key) ? ce.activeQuickTab : ""}`,
            onClick: () => Ee(W.key),
            children: _(W.label)
          },
          W.key
        )) }),
        /* @__PURE__ */ o.jsx(
          Dr,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: N,
            options: v.map((W) => ({ value: W.id, label: W.name })),
            onSelect: A
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: ce.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${ce.label} ${ce.volumeLabel}`, children: [
            _("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: ce.volumeValue, children: [
              Math.round(H * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: ce.input, type: "range", min: "0", max: "1", step: "0.05", value: H, onChange: (W) => B(Number(W.target.value)) })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(
        OS,
        {
          open: !!ge,
          onClose: () => j(null),
          command: ge,
          onEdit: (W) => te(W),
          onToggleStatus: (W, O) => w(W, { status: O }),
          onDelete: (W) => {
            p(W), j(null);
          }
        }
      )
    ] })
  ] });
}, BS = () => {
  const r = Gl(), i = Jl(), a = zr(), { pathname: c } = kt(), d = a ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && a !== !1 ? a === null ? /* @__PURE__ */ o.jsx(Fr, {}) : /* @__PURE__ */ o.jsx(In, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ o.jsx(fp, { resetKey: c, children: /* @__PURE__ */ o.jsxs($v, { children: [
    /* @__PURE__ */ o.jsx(Ye, { path: "/commands/whisper", element: i ? /* @__PURE__ */ o.jsx(C1, {}) : /* @__PURE__ */ o.jsx(In, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ye, { path: "/logs", element: r && i ? /* @__PURE__ */ o.jsx($1, {}) : /* @__PURE__ */ o.jsx(In, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ye, { path: "/downloads", element: i ? /* @__PURE__ */ o.jsx(ow, {}) : /* @__PURE__ */ o.jsx(In, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/",
        element: /* @__PURE__ */ o.jsx(
          In,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/scripts",
        element: /* @__PURE__ */ o.jsx(ox, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands",
        element: /* @__PURE__ */ o.jsx(
          In,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ o.jsx($x, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ o.jsx(Ix, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ o.jsx(
          In,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ o.jsx(Ox, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ o.jsx(Ux, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ o.jsx(Kx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(Ye, { path: "/monitor", element: /* @__PURE__ */ o.jsx(DS, {}) }),
    /* @__PURE__ */ o.jsx(Ye, { path: "/calls", element: /* @__PURE__ */ o.jsx(wS, {}) }),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/timer",
        element: /* @__PURE__ */ o.jsx(Jw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/alarm",
        element: /* @__PURE__ */ o.jsx(WS, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/settings",
        element: /* @__PURE__ */ o.jsx(ww, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "*",
        element: /* @__PURE__ */ o.jsx(
          In,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] }) });
}, Np = "ha-dialog-ui-theme", El = (r) => r === "light" ? "light" : "dark", US = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(Np, r);
}, VS = () => {
  const r = Qt(), i = ip(), a = ct(), [c, d] = m.useState(!1), [f, p] = m.useState(null), [v, g] = m.useState(() => El(localStorage.getItem(Np)));
  return m.useEffect(() => {
    US(v);
  }, [v]), m.useEffect(() => {
    let w = !0, y = !1, x = !1, S = !1;
    r.run(async () => {
      const N = await a.getSettings();
      w && (y || g(El(N.theme)), S || d(!!N.api_commands_enabled), x || p(!!N.active_remout));
    }, { retryable: !0 });
    const j = (N) => {
      y = !0, g(El(N.detail));
    }, b = (N) => {
      x = !0, p(N.detail);
    }, C = (N) => {
      S = !0, d(!!N.detail);
    };
    return window.addEventListener(Rl, C), window.addEventListener(ca, b), window.addEventListener("ha-dialog-ui-theme-change", j), () => {
      w = !1, window.removeEventListener(Rl, C), window.removeEventListener(ca, b), window.removeEventListener("ha-dialog-ui-theme-change", j);
    };
  }, [a, r.run]), /* @__PURE__ */ o.jsx(lp.Provider, { value: c, children: /* @__PURE__ */ o.jsx(cp.Provider, { value: f, children: /* @__PURE__ */ o.jsxs("div", { className: "appShell", "data-theme": v, lang: i, children: [
    /* @__PURE__ */ o.jsx(Ge, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ o.jsx(Fr, {}) : /* @__PURE__ */ o.jsx(BS, {})
  ] }) }) });
};
class qS {
  constructor(i) {
    be(this, "hass");
    this.hass = i;
  }
  callsWatch(i, a) {
    return this.monitorSubscribe(a, { type: "ha_dialog_ui/calls/watch", view_id: i });
  }
  browserCallStart(i, a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_start", view_id: i, target_device_id: a });
  }
  browserCallEnd(i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_end", view_id: i });
  }
  browserCallAudio(i, a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_audio", view_id: i, pcm: a });
  }
  browserCallReceive(i, a) {
    return this.monitorSubscribe(a, { type: "ha_dialog_ui/calls/browser_receive", view_id: i });
  }
  callStart(i, a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/start", source_device_id: i, target_device_id: a });
  }
  callAnswer(i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/answer", device_id: i });
  }
  callEnd(i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/end", device_id: i });
  }
  monitorWatch(i, a) {
    return this.monitorSubscribe(a, { type: "ha_dialog_ui/monitor/watch", view_id: i });
  }
  monitorAudio(i, a) {
    return this.monitorSubscribe(a, { type: "ha_dialog_ui/monitor/listen", node_id: i });
  }
  monitorSubscribe(i, a) {
    const c = this.hass.connection;
    return c.subscribeMessage ? c.subscribeMessage(i, a) : Promise.reject(new Error("Подписки Home Assistant недоступны"));
  }
  monitorStart(i, a, c) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/monitor/start", view_id: i, source_device_id: a, ...c ? { listener_device_id: c } : {} });
  }
  monitorStop(i, a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/monitor/stop", view_id: i, device_id: a });
  }
  setHass(i) {
    this.hass = i;
  }
  getData(i) {
    return this.hass.connection.sendMessagePromise({ type: `ha_dialog_ui/${i}` });
  }
  async getSettings() {
    const i = await this.getData("get_settings");
    return "result" in i ? i.result : i;
  }
  async getPage(i, a, c, d) {
    return await this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      ...a ? { page: a } : {},
      ...c ? { page_size: c } : {},
      ...d ? { query: d } : {}
    });
  }
  async getAllRecords(i, a = 100) {
    const c = await this.getPage(i, 1, a), d = (c == null ? void 0 : c.total_pages) ?? 1, f = Array.isArray(c == null ? void 0 : c.data) ? c.data : Array.isArray(c == null ? void 0 : c.script_actions) ? c.script_actions : [];
    return d <= 1 ? f : (await Promise.all(
      Array.from(
        { length: d - 1 },
        (v, g) => this.getPage(i, g + 2, a)
      )
    )).reduce((v, g) => {
      const w = Array.isArray(g == null ? void 0 : g.data) ? g.data : Array.isArray(g == null ? void 0 : g.script_actions) ? g.script_actions : [];
      return [...v, ...w];
    }, f);
  }
  async getRecord(i, a) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      uuid: i
    });
  }
  async saveData(i, a) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      data: i
    });
  }
  async updateRecord(i, a, c) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      uuid: i,
      data: c
    });
  }
  async updateRecordStatus(i, a, c) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      uuid: a,
      status: c
    });
  }
  async searchAssistantCommands(i, a) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      query: i
    });
  }
  async deleteRecord(i, a) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      uuid: i
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((i) => {
      const a = String(i.entity_id || "");
      return a.startsWith("media_player.") || a.startsWith("speaker.");
    }).map((i) => {
      var a;
      return {
        id: i.entity_id,
        name: ((a = i.attributes) == null ? void 0 : a.friendly_name) ?? i.entity_id
      };
    });
  }
  async getLocalMusicOptions() {
    const i = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i, a = [
      "media-source://media_source/local",
      "media-source://media_source"
    ], c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), f = [];
    let p = !1, v;
    const g = async (w) => {
      if (c.has(w)) return;
      c.add(w);
      const y = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: w
      }), x = Array.isArray(y == null ? void 0 : y.children) ? y.children : [];
      await Promise.all(x.map(async (S) => {
        var C;
        const j = String((S == null ? void 0 : S.media_content_id) || ""), b = String((S == null ? void 0 : S.title) || j);
        if (j) {
          if (S != null && S.can_expand) {
            try {
              await g(j);
            } catch (N) {
              f.push(N);
            }
            return;
          }
          if (i.test(b) || i.test(j) || (S == null ? void 0 : S.media_content_type) === "music" || (C = S == null ? void 0 : S.media_content_type) != null && C.startsWith("audio/")) {
            const N = "media-source://media_source/local/", A = j.startsWith(N) ? j.slice(N.length) : j;
            d.set(A, {
              value: A,
              label: b
            });
          }
        }
      }));
    };
    for (const w of a)
      try {
        await g(w), p = !0;
      } catch (y) {
        v = y;
      }
    if (d.size === 0) {
      if (f.length > 0) throw f[0];
      if (!p) throw v;
    }
    return Array.from(d.values()).sort(
      (w, y) => w.label.localeCompare(y.label)
    );
  }
  getScripts() {
    return Object.values(this.hass.states).filter((i) => i.entity_id.startsWith("script.")).map((i) => {
      var a;
      return {
        entity_id: i.entity_id,
        name: ((a = i.attributes) == null ? void 0 : a.friendly_name) ?? i.entity_id
      };
    });
  }
}
function Tp(r) {
  var i;
  return (i = r == null ? void 0 : r.connection) != null && i.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function QS() {
  return Tp(window.hass);
}
function KS({
  children: r,
  hass: i
}) {
  const [a, c] = m.useState(null), [d, f] = m.useState(0), p = m.useRef(null), [v, g] = m.useState(!1), [w, y] = m.useState(!1);
  return m.useEffect(() => {
    let x = !0;
    c(null);
    async function S() {
      const j = i ? Tp(i) : await QS();
      if (!x) return;
      p.current ? p.current.setHass(j) : p.current = new qS(j);
      const b = j.user ?? await j.connection.sendMessagePromise({ type: "auth/current_user" });
      x && (g((b == null ? void 0 : b.is_admin) === !0), y(!0));
    }
    return S().catch((j) => {
      x && c(Tt(j));
    }), () => {
      x = !1;
    };
  }, [i, d]), a ? /* @__PURE__ */ o.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ o.jsx(Ge, { error: a, retry: () => f((x) => x + 1) }) }) : !w || !p.current ? /* @__PURE__ */ o.jsx(Fr, { label: _("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ o.jsx(pp.Provider, { value: p.current, children: /* @__PURE__ */ o.jsx(up.Provider, { value: v, children: r }) });
}
function YS({ hass: r }) {
  return /* @__PURE__ */ o.jsx(ry, { children: /* @__PURE__ */ o.jsx(KS, { hass: r, children: /* @__PURE__ */ o.jsx(VS, {}) }) });
}
const Tf = "ha-dialog-ui-panel", bf = "ha-dialog-ui-style";
class GS extends HTMLElement {
  constructor() {
    super(...arguments);
    be(this, "root");
    be(this, "container");
    be(this, "layoutObserver");
    be(this, "updateViewport", () => {
      const a = Math.max(0, this.getBoundingClientRect().top + window.scrollY);
      this.style.setProperty("--ha-dialog-ui-available-height", `${Math.max(0, window.innerHeight - a)}px`);
    });
    be(this, "resume", () => {
      document.visibilityState !== "hidden" && this.isConnected && (this.updateViewport(), this.loadStyles(), this.render());
    });
    be(this, "hassValue");
    be(this, "renderTimer");
  }
  ensureShadowRoot() {
    return this.shadowRoot || this.attachShadow({ mode: "open" }), this.shadowRoot;
  }
  set hass(a) {
    this.hassValue = a, this.renderTimer === void 0 && (this.renderTimer = window.setTimeout(() => {
      this.renderTimer = void 0, this.render();
    }, 250));
  }
  get hass() {
    return this.hassValue;
  }
  connectedCallback() {
    this.updateViewport(), window.addEventListener("resize", this.updateViewport), this.layoutObserver = new ResizeObserver(this.updateViewport), this.parentElement && this.layoutObserver.observe(this.parentElement), document.addEventListener("visibilitychange", this.resume), window.addEventListener("pageshow", this.resume), this.ensureShadowRoot(), this.loadStyles(), this.render();
  }
  disconnectedCallback() {
    var a;
    window.removeEventListener("resize", this.updateViewport), (a = this.layoutObserver) == null || a.disconnect(), this.layoutObserver = void 0, document.removeEventListener("visibilitychange", this.resume), window.removeEventListener("pageshow", this.resume), this.renderTimer !== void 0 && (window.clearTimeout(this.renderTimer), this.renderTimer = void 0), queueMicrotask(() => {
      var c;
      this.isConnected || ((c = this.root) == null || c.unmount(), this.root = void 0);
    });
  }
  loadStyles() {
    const a = this.ensureShadowRoot();
    if (a.getElementById(bf)) return;
    const c = document.createElement("style");
    c.id = bf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px;min-height:var(--ha-dialog-ui-available-height, 100dvh)}.panelRenderRecovery{display:flex;flex-direction:column;height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;box-sizing:border-box}.panelRecoveryNavigation{flex-shrink:0;min-width:0}.panelRecoveryNavigation>nav{display:inline-flex;flex-wrap:wrap;gap:8px}.panelRecoveryNavigation>nav a{padding:10px 14px;border:1px solid var(--border);border-radius:12px}.panelRecoveryNavigation>nav a:hover,.panelRecoveryNavigation>nav a:focus-visible{background:var(--surface-hover)}.panelRecoveryContent{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px 0}.panelRecoveryMessage{width:100%;max-width:36rem;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center}.panelRecoveryMessage p{margin:0;font-size:clamp(16px,2vw,20px);line-height:1.6;overflow-wrap:anywhere}.panelRecoveryMessage>button{align-self:center;max-width:100%;min-height:46px}@media(max-width:768px){.panelRenderRecovery{padding:16px}.panelRecoveryContent{padding:20px 8px}}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._tabs_1vwxg_1{display:inline-flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_1vwxg_16{position:relative}._tab_1vwxg_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_1vwxg_1:hover{color:var(--text);background:var(--control-background)}._tab_1vwxg_1:active{transform:scale(.98)}._active_1vwxg_49{color:var(--text);background:var(--primary);box-shadow:none}._tab_1vwxg_1>span{margin-left:5px}._menu_1vwxg_59{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_1vwxg_76{margin-left:8px}._tab_1vwxg_1[aria-expanded=true] ._chevron_1vwxg_76{transform:rotate(180deg)}._tab_1vwxg_1:focus-visible,._menuItem_1vwxg_84:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_1vwxg_84{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_1vwxg_84:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_1vwxg_84._active_1vwxg_49{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_1vwxg_1{flex-wrap:wrap;max-width:100%}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._loader_m2244_1{width:100%;min-height:220px;display:flex;align-items:center;justify-content:center;gap:14px;color:var(--text-secondary)}._fullscreen_m2244_11{min-height:100vh}._spinner_m2244_15{width:42px;height:42px;border-radius:50%;border:4px solid var(--loader-track);border-top-color:var(--primary);animation:_spin_m2244_15 .85s linear infinite}._label_m2244_24{font-size:15px;font-weight:600}@keyframes _spin_m2244_15{to{transform:rotate(360deg)}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._toast_1g76h_1{position:fixed;z-index:10001;top:max(16px,env(safe-area-inset-top));left:50%;transform:translate(-50%);width:max-content;max-width:min(560px,100% - 32px);box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;border:1px solid var(--primary);border-radius:16px;background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 32px var(--shadow-floating);line-height:1.5;overflow-wrap:anywhere}._toast_1g76h_1>svg{flex-shrink:0;color:var(--primary)}._toast_1g76h_1 button{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:36px;min-height:36px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}._toast_1g76h_1 button:hover{background:var(--surface-hover)}._warning_1g76h_43{border-color:var(--danger)}._warning_1g76h_43>svg{color:var(--danger)}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_rqdjx_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_rqdjx_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_rqdjx_9:empty{display:none}._hidden_rqdjx_20{visibility:hidden}._overlay_rqdjx_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_rqdjx_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_rqdjx_24 ._card_rqdjx_32{flex:1;min-height:0}._title_rqdjx_51,._subtitle_rqdjx_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_rqdjx_1 1.4s ease-in-out infinite}._title_rqdjx_51{width:45%;max-width:320px;height:18px}._subtitle_rqdjx_51{width:25%;max-width:180px;height:13px}._srOnly_rqdjx_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_rqdjx_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_rqdjx_51,._subtitle_rqdjx_51{animation:none}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}._navigation_mjbb7_1{padding:24px 32px 0}._page_mjbb7_5{padding:0 32px 24px;color:var(--text);min-width:0}._title_mjbb7_11{margin-top:28px}._hint_mjbb7_15{color:var(--text-secondary);line-height:1.6}._grid_mjbb7_20{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_mjbb7_27{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border);border-radius:20px;background:var(--surface);color:var(--text);font:inherit;cursor:pointer;min-width:0}._device_mjbb7_27 strong{overflow-wrap:anywhere;font-size:18px}._device_mjbb7_27 span{color:var(--text-secondary)}._device_mjbb7_27:hover,._device_mjbb7_27:focus-visible{border-color:var(--primary)}._active_mjbb7_56{border-color:var(--primary)}._active_mjbb7_56 svg{color:var(--primary)}._status_mjbb7_64{display:flex;align-items:center;gap:8px;margin-bottom:24px}._actions_mjbb7_71{display:flex;gap:12px;width:100%}._actions_mjbb7_71>button{flex:1;min-width:0}._actions_mjbb7_71 button{display:flex;align-items:center;justify-content:center;gap:8px}@media(max-width:768px){._navigation_mjbb7_1{padding:0}._page_mjbb7_5{padding:16px}._title_mjbb7_11{display:none}}._origin_mjbb7_100{display:flex;align-items:center;flex-wrap:wrap;gap:10px;line-height:1.6}._origin_mjbb7_100 svg{flex-shrink:0;color:var(--primary)}._phoneStage_mjbb7_113{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;min-height:240px;padding:24px 0}._avatar_mjbb7_124{display:grid;place-items:center;width:106px;height:106px;border-radius:50%;color:var(--primary);background:color-mix(in srgb,var(--primary) 12%,var(--surface));border:1px solid color-mix(in srgb,var(--primary) 25%,var(--border))}._phoneStage_mjbb7_113 h2{margin:10px 0 0;font-size:26px;overflow-wrap:anywhere}._phoneStatus_mjbb7_141{display:flex;gap:8px;align-items:center;color:var(--text-secondary)}._duration_mjbb7_148{font-size:20px;font-variant-numeric:tabular-nums;letter-spacing:2px}._phoneStage_mjbb7_113 p{margin:0;font-size:13px}._phoneFooter_mjbb7_159{width:100%;display:flex;flex-direction:column;align-items:stretch;gap:18px}._callControls_mjbb7_167{display:flex;justify-content:center;gap:clamp(16px,5vw,48px)}._control_mjbb7_173{display:flex;flex-direction:column;align-items:center;gap:9px;min-width:74px}._control_mjbb7_173>span{font-size:12px;color:var(--text-secondary)}._control_mjbb7_173 ._roundControl_mjbb7_186,._control_mjbb7_173 ._hangup_mjbb7_186{width:62px;height:62px;min-width:62px;padding:0;display:grid;place-items:center;border-radius:50%}._control_mjbb7_173 ._controlSelected_mjbb7_196{color:var(--primary);background:color-mix(in srgb,var(--primary) 18%,var(--surface));border-color:var(--primary)}._control_mjbb7_173 ._hangup_mjbb7_186{width:72px;height:72px;background:#cf3549;color:#fff;border-color:#cf3549}._control_mjbb7_173 ._hangup_mjbb7_186:hover{background:#b9273a}._routeHint_mjbb7_214{display:flex;justify-content:center;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary)}._routeName_mjbb7_223{text-align:center;color:var(--text-secondary);overflow-wrap:anywhere}@media(max-width:768px){._phoneStage_mjbb7_113{min-height:220px}._phoneFooter_mjbb7_159{padding-bottom:max(8px,env(safe-area-inset-bottom))}}._control_mjbb7_173 ._dial_mjbb7_237{width:72px;height:72px;min-width:72px;padding:0;display:grid;place-items:center;border-radius:50%;background:#23875c;border-color:#23875c;color:#fff}._control_mjbb7_173 ._dial_mjbb7_237:hover:not(:disabled){background:#1a714b}._page_12ruw_1{padding:0 32px 24px;box-sizing:border-box;min-width:0;color:var(--text)}._heading_12ruw_8{display:flex;align-items:center;gap:16px;margin:28px 0}._heading_12ruw_8 h1{font-size:30px;margin:0}._heading_12ruw_8 p{color:var(--text-secondary);line-height:1.6;margin:8px 0 0}._grid_12ruw_26{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_12ruw_33{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border, #333);background:var(--surface, #1c1c1c);color:var(--text);border-radius:20px;font:inherit;cursor:pointer;min-width:0}._device_12ruw_33 strong{font-size:18px;overflow-wrap:anywhere}._device_12ruw_33 span,._device_12ruw_33 small{color:var(--text-secondary)}._device_12ruw_33:hover,._device_12ruw_33:focus-visible{border-color:var(--primary, #03a9f4)}._deviceLive_12ruw_64{border-color:#3da98c}._deviceLive_12ruw_64 svg{color:#3da98c}._navigation_12ruw_72{padding:24px 32px 0}._playback_12ruw_76{position:relative;border:1px solid var(--primary, #03a9f4);background:color-mix(in srgb,var(--primary, #03a9f4) 10%,transparent);border-radius:14px;overflow:hidden}._playback_12ruw_76>svg{position:absolute;left:18px;top:23px;pointer-events:none;color:var(--primary)}._playbackSelect_12ruw_92{padding:18px 40px 6px 54px;border:0;background:transparent;border-radius:14px 14px 0 0;min-height:48px;text-overflow:ellipsis}._playback_12ruw_76:has(select:disabled){opacity:.65}._playback_12ruw_76 small{display:block;padding:0 18px 18px 54px;color:var(--text-secondary);pointer-events:none}._statusRow_12ruw_112{display:flex;align-items:center;gap:8px;margin-bottom:20px}._status_12ruw_112{display:flex;gap:10px;align-items:center;padding:16px 0;color:var(--text-secondary)}._live_12ruw_127{color:#32aa87}._hint_12ruw_131{font-size:14px;color:var(--text-secondary);line-height:1.6}._footer_12ruw_137{display:flex;gap:12px;width:100%}._footer_12ruw_137>button{flex:1;min-width:0}._empty_12ruw_148{padding:28px;border:1px dashed var(--border, #333);border-radius:18px;line-height:1.7}._error_12ruw_155{color:var(--danger, #ed8291);line-height:1.5}@media(max-width:768px){._navigation_12ruw_72{padding:0}._page_12ruw_1{padding:16px}._heading_12ruw_8{margin:20px 0}._heading_12ruw_8 h1{display:none}._grid_12ruw_26{grid-template-columns:1fr}._heading_12ruw_8>svg{display:none}}\n", a.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const a = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), a.appendChild(this.container)), this.root = Im.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ o.jsx(Af.StrictMode, { children: /* @__PURE__ */ o.jsx(fp, { children: /* @__PURE__ */ o.jsx(YS, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(Tf) || customElements.define(Tf, GS);
