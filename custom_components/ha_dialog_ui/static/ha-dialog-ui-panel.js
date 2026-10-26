var Em = Object.defineProperty;
var Nm = (r, a, o) => a in r ? Em(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[a] = o;
var be = (r, a, o) => Nm(r, typeof a != "symbol" ? a + "" : a, o);
function Af(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var pl = { exports: {} }, Is = {}, hl = { exports: {} }, Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd;
function Tm() {
  if (Qd) return Se;
  Qd = 1;
  var r = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.iterator;
  function k(E) {
    return E === null || typeof E != "object" ? null : (E = x && E[x] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, j = {};
  function N(E, O, ie) {
    this.props = E, this.context = O, this.refs = j, this.updater = ie || C;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(E, O) {
    if (typeof E != "object" && typeof E != "function" && E != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, E, O, "setState");
  }, N.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function A() {
  }
  A.prototype = N.prototype;
  function F(E, O, ie) {
    this.props = E, this.context = O, this.refs = j, this.updater = ie || C;
  }
  var P = F.prototype = new A();
  P.constructor = F, b(P, N.prototype), P.isPureReactComponent = !0;
  var M = Array.isArray, W = Object.prototype.hasOwnProperty, H = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(E, O, ie) {
    var oe, ge = {}, ke = null, Ne = null;
    if (O != null) for (oe in O.ref !== void 0 && (Ne = O.ref), O.key !== void 0 && (ke = "" + O.key), O) W.call(O, oe) && !X.hasOwnProperty(oe) && (ge[oe] = O[oe]);
    var Ce = arguments.length - 2;
    if (Ce === 1) ge.children = ie;
    else if (1 < Ce) {
      for (var Ae = Array(Ce), ot = 0; ot < Ce; ot++) Ae[ot] = arguments[ot + 2];
      ge.children = Ae;
    }
    if (E && E.defaultProps) for (oe in Ce = E.defaultProps, Ce) ge[oe] === void 0 && (ge[oe] = Ce[oe]);
    return { $$typeof: r, type: E, key: ke, ref: Ne, props: ge, _owner: H.current };
  }
  function G(E, O) {
    return { $$typeof: r, type: E.type, key: O, ref: E.ref, props: E.props, _owner: E._owner };
  }
  function xe(E) {
    return typeof E == "object" && E !== null && E.$$typeof === r;
  }
  function fe(E) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(ie) {
      return O[ie];
    });
  }
  var he = /\/+/g;
  function me(E, O) {
    return typeof E == "object" && E !== null && E.key != null ? fe("" + E.key) : O.toString(36);
  }
  function we(E, O, ie, oe, ge) {
    var ke = typeof E;
    (ke === "undefined" || ke === "boolean") && (E = null);
    var Ne = !1;
    if (E === null) Ne = !0;
    else switch (ke) {
      case "string":
      case "number":
        Ne = !0;
        break;
      case "object":
        switch (E.$$typeof) {
          case r:
          case a:
            Ne = !0;
        }
    }
    if (Ne) return Ne = E, ge = ge(Ne), E = oe === "" ? "." + me(Ne, 0) : oe, M(ge) ? (ie = "", E != null && (ie = E.replace(he, "$&/") + "/"), we(ge, O, ie, "", function(ot) {
      return ot;
    })) : ge != null && (xe(ge) && (ge = G(ge, ie + (!ge.key || Ne && Ne.key === ge.key ? "" : ("" + ge.key).replace(he, "$&/") + "/") + E)), O.push(ge)), 1;
    if (Ne = 0, oe = oe === "" ? "." : oe + ":", M(E)) for (var Ce = 0; Ce < E.length; Ce++) {
      ke = E[Ce];
      var Ae = oe + me(ke, Ce);
      Ne += we(ke, O, ie, Ae, ge);
    }
    else if (Ae = k(E), typeof Ae == "function") for (E = Ae.call(E), Ce = 0; !(ke = E.next()).done; ) ke = ke.value, Ae = oe + me(ke, Ce++), Ne += we(ke, O, ie, Ae, ge);
    else if (ke === "object") throw O = String(E), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
    return Ne;
  }
  function z(E, O, ie) {
    if (E == null) return E;
    var oe = [], ge = 0;
    return we(E, oe, "", "", function(ke) {
      return O.call(ie, ke, ge++);
    }), oe;
  }
  function le(E) {
    if (E._status === -1) {
      var O = E._result;
      O = O(), O.then(function(ie) {
        (E._status === 0 || E._status === -1) && (E._status = 1, E._result = ie);
      }, function(ie) {
        (E._status === 0 || E._status === -1) && (E._status = 2, E._result = ie);
      }), E._status === -1 && (E._status = 0, E._result = O);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var de = { current: null }, $ = { transition: null }, K = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: $, ReactCurrentOwner: H };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Se.Children = { map: z, forEach: function(E, O, ie) {
    z(E, function() {
      O.apply(this, arguments);
    }, ie);
  }, count: function(E) {
    var O = 0;
    return z(E, function() {
      O++;
    }), O;
  }, toArray: function(E) {
    return z(E, function(O) {
      return O;
    }) || [];
  }, only: function(E) {
    if (!xe(E)) throw Error("React.Children.only expected to receive a single React element child.");
    return E;
  } }, Se.Component = N, Se.Fragment = o, Se.Profiler = d, Se.PureComponent = F, Se.StrictMode = c, Se.Suspense = g, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, Se.act = B, Se.cloneElement = function(E, O, ie) {
    if (E == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
    var oe = b({}, E.props), ge = E.key, ke = E.ref, Ne = E._owner;
    if (O != null) {
      if (O.ref !== void 0 && (ke = O.ref, Ne = H.current), O.key !== void 0 && (ge = "" + O.key), E.type && E.type.defaultProps) var Ce = E.type.defaultProps;
      for (Ae in O) W.call(O, Ae) && !X.hasOwnProperty(Ae) && (oe[Ae] = O[Ae] === void 0 && Ce !== void 0 ? Ce[Ae] : O[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1) oe.children = ie;
    else if (1 < Ae) {
      Ce = Array(Ae);
      for (var ot = 0; ot < Ae; ot++) Ce[ot] = arguments[ot + 2];
      oe.children = Ce;
    }
    return { $$typeof: r, type: E.type, key: ge, ref: ke, props: oe, _owner: Ne };
  }, Se.createContext = function(E) {
    return E = { $$typeof: p, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, E.Provider = { $$typeof: f, _context: E }, E.Consumer = E;
  }, Se.createElement = V, Se.createFactory = function(E) {
    var O = V.bind(null, E);
    return O.type = E, O;
  }, Se.createRef = function() {
    return { current: null };
  }, Se.forwardRef = function(E) {
    return { $$typeof: m, render: E };
  }, Se.isValidElement = xe, Se.lazy = function(E) {
    return { $$typeof: y, _payload: { _status: -1, _result: E }, _init: le };
  }, Se.memo = function(E, O) {
    return { $$typeof: w, type: E, compare: O === void 0 ? null : O };
  }, Se.startTransition = function(E) {
    var O = $.transition;
    $.transition = {};
    try {
      E();
    } finally {
      $.transition = O;
    }
  }, Se.unstable_act = B, Se.useCallback = function(E, O) {
    return de.current.useCallback(E, O);
  }, Se.useContext = function(E) {
    return de.current.useContext(E);
  }, Se.useDebugValue = function() {
  }, Se.useDeferredValue = function(E) {
    return de.current.useDeferredValue(E);
  }, Se.useEffect = function(E, O) {
    return de.current.useEffect(E, O);
  }, Se.useId = function() {
    return de.current.useId();
  }, Se.useImperativeHandle = function(E, O, ie) {
    return de.current.useImperativeHandle(E, O, ie);
  }, Se.useInsertionEffect = function(E, O) {
    return de.current.useInsertionEffect(E, O);
  }, Se.useLayoutEffect = function(E, O) {
    return de.current.useLayoutEffect(E, O);
  }, Se.useMemo = function(E, O) {
    return de.current.useMemo(E, O);
  }, Se.useReducer = function(E, O, ie) {
    return de.current.useReducer(E, O, ie);
  }, Se.useRef = function(E) {
    return de.current.useRef(E);
  }, Se.useState = function(E) {
    return de.current.useState(E);
  }, Se.useSyncExternalStore = function(E, O, ie) {
    return de.current.useSyncExternalStore(E, O, ie);
  }, Se.useTransition = function() {
    return de.current.useTransition();
  }, Se.version = "18.3.1", Se;
}
var Kd;
function Ol() {
  return Kd || (Kd = 1, hl.exports = Tm()), hl.exports;
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
var Yd;
function bm() {
  if (Yd) return Is;
  Yd = 1;
  var r = Ol(), a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, g, w) {
    var y, x = {}, k = null, C = null;
    w !== void 0 && (k = "" + w), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (x[y] = g[y]);
    if (m && m.defaultProps) for (y in g = m.defaultProps, g) x[y] === void 0 && (x[y] = g[y]);
    return { $$typeof: a, type: m, key: k, ref: C, props: x, _owner: d.current };
  }
  return Is.Fragment = o, Is.jsx = p, Is.jsxs = p, Is;
}
var Gd;
function Rm() {
  return Gd || (Gd = 1, pl.exports = bm()), pl.exports;
}
var i = Rm(), v = Ol();
const Pf = /* @__PURE__ */ Af(v);
var ti = {}, ml = { exports: {} }, kt = {}, vl = { exports: {} }, yl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jd;
function Am() {
  return Jd || (Jd = 1, (function(r) {
    function a($, K) {
      var B = $.length;
      $.push(K);
      e: for (; 0 < B; ) {
        var E = B - 1 >>> 1, O = $[E];
        if (0 < d(O, K)) $[E] = K, $[B] = O, B = E;
        else break e;
      }
    }
    function o($) {
      return $.length === 0 ? null : $[0];
    }
    function c($) {
      if ($.length === 0) return null;
      var K = $[0], B = $.pop();
      if (B !== K) {
        $[0] = B;
        e: for (var E = 0, O = $.length, ie = O >>> 1; E < ie; ) {
          var oe = 2 * (E + 1) - 1, ge = $[oe], ke = oe + 1, Ne = $[ke];
          if (0 > d(ge, B)) ke < O && 0 > d(Ne, ge) ? ($[E] = Ne, $[ke] = B, E = ke) : ($[E] = ge, $[oe] = B, E = oe);
          else if (ke < O && 0 > d(Ne, B)) $[E] = Ne, $[ke] = B, E = ke;
          else break e;
        }
      }
      return K;
    }
    function d($, K) {
      var B = $.sortIndex - K.sortIndex;
      return B !== 0 ? B : $.id - K.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, m = p.now();
      r.unstable_now = function() {
        return p.now() - m;
      };
    }
    var g = [], w = [], y = 1, x = null, k = 3, C = !1, b = !1, j = !1, N = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function P($) {
      for (var K = o(w); K !== null; ) {
        if (K.callback === null) c(w);
        else if (K.startTime <= $) c(w), K.sortIndex = K.expirationTime, a(g, K);
        else break;
        K = o(w);
      }
    }
    function M($) {
      if (j = !1, P($), !b) if (o(g) !== null) b = !0, le(W);
      else {
        var K = o(w);
        K !== null && de(M, K.startTime - $);
      }
    }
    function W($, K) {
      b = !1, j && (j = !1, A(V), V = -1), C = !0;
      var B = k;
      try {
        for (P(K), x = o(g); x !== null && (!(x.expirationTime > K) || $ && !fe()); ) {
          var E = x.callback;
          if (typeof E == "function") {
            x.callback = null, k = x.priorityLevel;
            var O = E(x.expirationTime <= K);
            K = r.unstable_now(), typeof O == "function" ? x.callback = O : x === o(g) && c(g), P(K);
          } else c(g);
          x = o(g);
        }
        if (x !== null) var ie = !0;
        else {
          var oe = o(w);
          oe !== null && de(M, oe.startTime - K), ie = !1;
        }
        return ie;
      } finally {
        x = null, k = B, C = !1;
      }
    }
    var H = !1, X = null, V = -1, G = 5, xe = -1;
    function fe() {
      return !(r.unstable_now() - xe < G);
    }
    function he() {
      if (X !== null) {
        var $ = r.unstable_now();
        xe = $;
        var K = !0;
        try {
          K = X(!0, $);
        } finally {
          K ? me() : (H = !1, X = null);
        }
      } else H = !1;
    }
    var me;
    if (typeof F == "function") me = function() {
      F(he);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), z = we.port2;
      we.port1.onmessage = he, me = function() {
        z.postMessage(null);
      };
    } else me = function() {
      N(he, 0);
    };
    function le($) {
      X = $, H || (H = !0, me());
    }
    function de($, K) {
      V = N(function() {
        $(r.unstable_now());
      }, K);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function($) {
      $.callback = null;
    }, r.unstable_continueExecution = function() {
      b || C || (b = !0, le(W));
    }, r.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(g);
    }, r.unstable_next = function($) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = k;
      }
      var B = k;
      k = K;
      try {
        return $();
      } finally {
        k = B;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function($, K) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var B = k;
      k = $;
      try {
        return K();
      } finally {
        k = B;
      }
    }, r.unstable_scheduleCallback = function($, K, B) {
      var E = r.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? E + B : E) : B = E, $) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return O = B + O, $ = { id: y++, callback: K, priorityLevel: $, startTime: B, expirationTime: O, sortIndex: -1 }, B > E ? ($.sortIndex = B, a(w, $), o(g) === null && $ === o(w) && (j ? (A(V), V = -1) : j = !0, de(M, B - E))) : ($.sortIndex = O, a(g, $), b || C || (b = !0, le(W))), $;
    }, r.unstable_shouldYield = fe, r.unstable_wrapCallback = function($) {
      var K = k;
      return function() {
        var B = k;
        k = K;
        try {
          return $.apply(this, arguments);
        } finally {
          k = B;
        }
      };
    };
  })(yl)), yl;
}
var Xd;
function Pm() {
  return Xd || (Xd = 1, vl.exports = Am()), vl.exports;
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
var Zd;
function $m() {
  if (Zd) return kt;
  Zd = 1;
  var r = Ol(), a = Pm();
  function o(e) {
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, x = {};
  function k(e) {
    return g.call(x, e) ? !0 : g.call(y, e) ? !1 : w.test(e) ? x[e] = !0 : (y[e] = !0, !1);
  }
  function C(e, t, n, s) {
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
    if (t === null || typeof t > "u" || C(e, t, n, s)) return !0;
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
  function j(e, t, n, s, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new j(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new j(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new j(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new j(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new j(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new j(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    N[t] = new j(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(A, F);
    N[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(A, F);
    N[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function P(e, t, n, s) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, s) && (n = null), s || l === null ? k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), H = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), xe = Symbol.for("react.provider"), fe = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var B = Object.assign, E;
  function O(e) {
    if (E === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      E = t && t[1] || "";
    }
    return `
` + E + e;
  }
  var ie = !1;
  function oe(e, t) {
    if (!e || ie) return "";
    ie = !0;
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
`), h = l.length - 1, S = u.length - 1; 1 <= h && 0 <= S && l[h] !== u[S]; ) S--;
        for (; 1 <= h && 0 <= S; h--, S--) if (l[h] !== u[S]) {
          if (h !== 1 || S !== 1)
            do
              if (h--, S--, 0 > S || l[h] !== u[S]) {
                var T = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), T;
              }
            while (1 <= h && 0 <= S);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? O(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return O(e.type);
      case 16:
        return O("Lazy");
      case 13:
        return O("Suspense");
      case 19:
        return O("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = oe(e.type, !1), e;
      case 11:
        return e = oe(e.type.render, !1), e;
      case 1:
        return e = oe(e.type, !0), e;
      default:
        return "";
    }
  }
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case H:
        return "Portal";
      case G:
        return "Profiler";
      case V:
        return "StrictMode";
      case me:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case fe:
        return (e.displayName || "Context") + ".Consumer";
      case xe:
        return (e._context.displayName || "Context") + ".Provider";
      case he:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case z:
        return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
      case le:
        t = e._payload, e = e._init;
        try {
          return ke(e(t));
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
        return ke(t);
      case 8:
        return t === V ? "StrictMode" : "Mode";
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
  function Ce(e) {
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
  function Ae(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ot(e) {
    var t = Ae(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
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
  function Xt(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function _n(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = Ae(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function J(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ve(e, t) {
    var n = t.checked;
    return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Re(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = Ce(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function De(e, t) {
    t = t.checked, t != null && P(e, "checked", t, !1);
  }
  function Et(e, t) {
    De(e, t);
    var n = Ce(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Wn(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wn(e, t.type, Ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Yr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Wn(e, t, n) {
    (t !== "number" || J(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Gr = Array.isArray;
  function pr(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ce(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, s && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Si(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ru(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Gr(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Ce(n) };
  }
  function su(e, t) {
    var n = Ce(t.value), s = Ce(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function ou(e) {
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
  function Ci(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var qs, au = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (qs = qs || document.createElement("div"), qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Jr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xr = {
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
  }, Rp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Xr).forEach(function(e) {
    Rp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Xr[t] = Xr[e];
    });
  });
  function lu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xr.hasOwnProperty(e) && Xr[e] ? ("" + t).trim() : t + "px";
  }
  function uu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = lu(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ap = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ji(e, t) {
    if (t) {
      if (Ap[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Ei(e, t) {
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
  var Ni = null;
  function Ti(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var bi = null, hr = null, mr = null;
  function cu(e) {
    if (e = xs(e)) {
      if (typeof bi != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = vo(t), bi(e.stateNode, e.type, t));
    }
  }
  function du(e) {
    hr ? mr ? mr.push(e) : mr = [e] : hr = e;
  }
  function fu() {
    if (hr) {
      var e = hr, t = mr;
      if (mr = hr = null, cu(e), t) for (e = 0; e < t.length; e++) cu(t[e]);
    }
  }
  function pu(e, t) {
    return e(t);
  }
  function hu() {
  }
  var Ri = !1;
  function mu(e, t, n) {
    if (Ri) return e(t, n);
    Ri = !0;
    try {
      return pu(e, t, n);
    } finally {
      Ri = !1, (hr !== null || mr !== null) && (hu(), fu());
    }
  }
  function Zr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = vo(n);
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
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Ai = !1;
  if (m) try {
    var es = {};
    Object.defineProperty(es, "passive", { get: function() {
      Ai = !0;
    } }), window.addEventListener("test", es, es), window.removeEventListener("test", es, es);
  } catch {
    Ai = !1;
  }
  function Pp(e, t, n, s, l, u, h, S, T) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (q) {
      this.onError(q);
    }
  }
  var ts = !1, Qs = null, Ks = !1, Pi = null, $p = { onError: function(e) {
    ts = !0, Qs = e;
  } };
  function Mp(e, t, n, s, l, u, h, S, T) {
    ts = !1, Qs = null, Pp.apply($p, arguments);
  }
  function Ip(e, t, n, s, l, u, h, S, T) {
    if (Mp.apply(this, arguments), ts) {
      if (ts) {
        var D = Qs;
        ts = !1, Qs = null;
      } else throw Error(o(198));
      Ks || (Ks = !0, Pi = D);
    }
  }
  function Bn(e) {
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
  function vu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function yu(e) {
    if (Bn(e) !== e) throw Error(o(188));
  }
  function Lp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Bn(e), t === null) throw Error(o(188));
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
          if (u === n) return yu(l), e;
          if (u === s) return yu(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== s.return) n = l, s = u;
      else {
        for (var h = !1, S = l.child; S; ) {
          if (S === n) {
            h = !0, n = l, s = u;
            break;
          }
          if (S === s) {
            h = !0, s = l, n = u;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = u.child; S; ) {
            if (S === n) {
              h = !0, n = u, s = l;
              break;
            }
            if (S === s) {
              h = !0, s = u, n = l;
              break;
            }
            S = S.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (n.alternate !== s) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function gu(e) {
    return e = Lp(e), e !== null ? _u(e) : null;
  }
  function _u(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = _u(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var xu = a.unstable_scheduleCallback, wu = a.unstable_cancelCallback, Dp = a.unstable_shouldYield, Op = a.unstable_requestPaint, Be = a.unstable_now, zp = a.unstable_getCurrentPriorityLevel, $i = a.unstable_ImmediatePriority, ku = a.unstable_UserBlockingPriority, Ys = a.unstable_NormalPriority, Hp = a.unstable_LowPriority, Su = a.unstable_IdlePriority, Gs = null, Zt = null;
  function Fp(e) {
    if (Zt && typeof Zt.onCommitFiberRoot == "function") try {
      Zt.onCommitFiberRoot(Gs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ht = Math.clz32 ? Math.clz32 : Up, Wp = Math.log, Bp = Math.LN2;
  function Up(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wp(e) / Bp | 0) | 0;
  }
  var Js = 64, Xs = 4194304;
  function ns(e) {
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
  function Zs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var S = h & ~l;
      S !== 0 ? s = ns(S) : (u &= h, u !== 0 && (s = ns(u)));
    } else h = n & ~l, h !== 0 ? s = ns(h) : u !== 0 && (s = ns(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Ht(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function Vp(e, t) {
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
  function qp(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - Ht(u), S = 1 << h, T = l[h];
      T === -1 ? ((S & n) === 0 || (S & s) !== 0) && (l[h] = Vp(S, t)) : T <= t && (e.expiredLanes |= S), u &= ~S;
    }
  }
  function Mi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Cu() {
    var e = Js;
    return Js <<= 1, (Js & 4194240) === 0 && (Js = 64), e;
  }
  function Ii(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function rs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ht(t), e[t] = n;
  }
  function Qp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ht(n), u = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Li(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Ht(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Pe = 0;
  function ju(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Eu, Di, Nu, Tu, bu, Oi = !1, eo = [], xn = null, wn = null, kn = null, ss = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), Sn = [], Kp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ru(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        xn = null;
        break;
      case "dragenter":
      case "dragleave":
        wn = null;
        break;
      case "mouseover":
      case "mouseout":
        kn = null;
        break;
      case "pointerover":
      case "pointerout":
        ss.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        os.delete(t.pointerId);
    }
  }
  function is(e, t, n, s, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = xs(t), t !== null && Di(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Yp(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return xn = is(xn, e, t, n, s, l), !0;
      case "dragenter":
        return wn = is(wn, e, t, n, s, l), !0;
      case "mouseover":
        return kn = is(kn, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return ss.set(u, is(ss.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, os.set(u, is(os.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function Au(e) {
    var t = Un(e.target);
    if (t !== null) {
      var n = Bn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = vu(n), t !== null) {
            e.blockedOn = t, bu(e.priority, function() {
              Nu(n);
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
  function to(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Ni = s, n.target.dispatchEvent(s), Ni = null;
      } else return t = xs(n), t !== null && Di(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Pu(e, t, n) {
    to(e) && n.delete(t);
  }
  function Gp() {
    Oi = !1, xn !== null && to(xn) && (xn = null), wn !== null && to(wn) && (wn = null), kn !== null && to(kn) && (kn = null), ss.forEach(Pu), os.forEach(Pu);
  }
  function as(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Oi || (Oi = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Gp)));
  }
  function ls(e) {
    function t(l) {
      return as(l, e);
    }
    if (0 < eo.length) {
      as(eo[0], e);
      for (var n = 1; n < eo.length; n++) {
        var s = eo[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (xn !== null && as(xn, e), wn !== null && as(wn, e), kn !== null && as(kn, e), ss.forEach(t), os.forEach(t), n = 0; n < Sn.length; n++) s = Sn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Sn.length && (n = Sn[0], n.blockedOn === null); ) Au(n), n.blockedOn === null && Sn.shift();
  }
  var vr = M.ReactCurrentBatchConfig, no = !0;
  function Jp(e, t, n, s) {
    var l = Pe, u = vr.transition;
    vr.transition = null;
    try {
      Pe = 1, zi(e, t, n, s);
    } finally {
      Pe = l, vr.transition = u;
    }
  }
  function Xp(e, t, n, s) {
    var l = Pe, u = vr.transition;
    vr.transition = null;
    try {
      Pe = 4, zi(e, t, n, s);
    } finally {
      Pe = l, vr.transition = u;
    }
  }
  function zi(e, t, n, s) {
    if (no) {
      var l = Hi(e, t, n, s);
      if (l === null) ra(e, t, s, ro, n), Ru(e, s);
      else if (Yp(l, e, t, n, s)) s.stopPropagation();
      else if (Ru(e, s), t & 4 && -1 < Kp.indexOf(e)) {
        for (; l !== null; ) {
          var u = xs(l);
          if (u !== null && Eu(u), u = Hi(e, t, n, s), u === null && ra(e, t, s, ro, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else ra(e, t, s, null, n);
    }
  }
  var ro = null;
  function Hi(e, t, n, s) {
    if (ro = null, e = Ti(s), e = Un(e), e !== null) if (t = Bn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = vu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ro = e, null;
  }
  function $u(e) {
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
        switch (zp()) {
          case $i:
            return 1;
          case ku:
            return 4;
          case Ys:
          case Hp:
            return 16;
          case Su:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Cn = null, Fi = null, so = null;
  function Mu() {
    if (so) return so;
    var e, t = Fi, n = t.length, s, l = "value" in Cn ? Cn.value : Cn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (s = 1; s <= h && t[n - s] === l[u - s]; s++) ;
    return so = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function oo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function io() {
    return !0;
  }
  function Iu() {
    return !1;
  }
  function Nt(e) {
    function t(n, s, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(u) : u[S]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? io : Iu, this.isPropagationStopped = Iu, this;
    }
    return B(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = io);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = io);
    }, persist: function() {
    }, isPersistent: io }), t;
  }
  var yr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Wi = Nt(yr), us = B({}, yr, { view: 0, detail: 0 }), Zp = Nt(us), Bi, Ui, cs, ao = B({}, us, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== cs && (cs && e.type === "mousemove" ? (Bi = e.screenX - cs.screenX, Ui = e.screenY - cs.screenY) : Ui = Bi = 0, cs = e), Bi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ui;
  } }), Lu = Nt(ao), eh = B({}, ao, { dataTransfer: 0 }), th = Nt(eh), nh = B({}, us, { relatedTarget: 0 }), Vi = Nt(nh), rh = B({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sh = Nt(rh), oh = B({}, yr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ih = Nt(oh), ah = B({}, yr, { data: 0 }), Du = Nt(ah), lh = {
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
  }, uh = {
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
  }, ch = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function dh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ch[e]) ? !!t[e] : !1;
  }
  function qi() {
    return dh;
  }
  var fh = B({}, us, { key: function(e) {
    if (e.key) {
      var t = lh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = oo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qi, charCode: function(e) {
    return e.type === "keypress" ? oo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? oo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ph = Nt(fh), hh = B({}, ao, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ou = Nt(hh), mh = B({}, us, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qi }), vh = Nt(mh), yh = B({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gh = Nt(yh), _h = B({}, ao, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), xh = Nt(_h), wh = [9, 13, 27, 32], Qi = m && "CompositionEvent" in window, ds = null;
  m && "documentMode" in document && (ds = document.documentMode);
  var kh = m && "TextEvent" in window && !ds, zu = m && (!Qi || ds && 8 < ds && 11 >= ds), Hu = " ", Fu = !1;
  function Wu(e, t) {
    switch (e) {
      case "keyup":
        return wh.indexOf(t.keyCode) !== -1;
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
  function Bu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var gr = !1;
  function Sh(e, t) {
    switch (e) {
      case "compositionend":
        return Bu(t);
      case "keypress":
        return t.which !== 32 ? null : (Fu = !0, Hu);
      case "textInput":
        return e = t.data, e === Hu && Fu ? null : e;
      default:
        return null;
    }
  }
  function Ch(e, t) {
    if (gr) return e === "compositionend" || !Qi && Wu(e, t) ? (e = Mu(), so = Fi = Cn = null, gr = !1, e) : null;
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
        return zu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jh[e.type] : t === "textarea";
  }
  function Vu(e, t, n, s) {
    du(s), t = po(t, "onChange"), 0 < t.length && (n = new Wi("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var fs = null, ps = null;
  function Eh(e) {
    uc(e, 0);
  }
  function lo(e) {
    var t = Sr(e);
    if (_n(t)) return e;
  }
  function Nh(e, t) {
    if (e === "change") return t;
  }
  var qu = !1;
  if (m) {
    var Ki;
    if (m) {
      var Yi = "oninput" in document;
      if (!Yi) {
        var Qu = document.createElement("div");
        Qu.setAttribute("oninput", "return;"), Yi = typeof Qu.oninput == "function";
      }
      Ki = Yi;
    } else Ki = !1;
    qu = Ki && (!document.documentMode || 9 < document.documentMode);
  }
  function Ku() {
    fs && (fs.detachEvent("onpropertychange", Yu), ps = fs = null);
  }
  function Yu(e) {
    if (e.propertyName === "value" && lo(ps)) {
      var t = [];
      Vu(t, ps, e, Ti(e)), mu(Eh, t);
    }
  }
  function Th(e, t, n) {
    e === "focusin" ? (Ku(), fs = t, ps = n, fs.attachEvent("onpropertychange", Yu)) : e === "focusout" && Ku();
  }
  function bh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return lo(ps);
  }
  function Rh(e, t) {
    if (e === "click") return lo(t);
  }
  function Ah(e, t) {
    if (e === "input" || e === "change") return lo(t);
  }
  function Ph(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ft = typeof Object.is == "function" ? Object.is : Ph;
  function hs(e, t) {
    if (Ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!g.call(t, l) || !Ft(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Gu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ju(e, t) {
    var n = Gu(e);
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
      n = Gu(n);
    }
  }
  function Xu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zu() {
    for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = J(e.document);
    }
    return t;
  }
  function Gi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function $h(e) {
    var t = Zu(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Xu(n.ownerDocument.documentElement, n)) {
      if (s !== null && Gi(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(s.start, l);
          s = s.end === void 0 ? u : Math.min(s.end, l), !e.extend && u > s && (l = s, s = u, u = l), l = Ju(n, u);
          var h = Ju(
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
  var Mh = m && "documentMode" in document && 11 >= document.documentMode, _r = null, Ji = null, ms = null, Xi = !1;
  function ec(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xi || _r == null || _r !== J(s) || (s = _r, "selectionStart" in s && Gi(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ms && hs(ms, s) || (ms = s, s = po(Ji, "onSelect"), 0 < s.length && (t = new Wi("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = _r)));
  }
  function uo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var xr = { animationend: uo("Animation", "AnimationEnd"), animationiteration: uo("Animation", "AnimationIteration"), animationstart: uo("Animation", "AnimationStart"), transitionend: uo("Transition", "TransitionEnd") }, Zi = {}, tc = {};
  m && (tc = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
  function co(e) {
    if (Zi[e]) return Zi[e];
    if (!xr[e]) return e;
    var t = xr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in tc) return Zi[e] = t[n];
    return e;
  }
  var nc = co("animationend"), rc = co("animationiteration"), sc = co("animationstart"), oc = co("transitionend"), ic = /* @__PURE__ */ new Map(), ac = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function jn(e, t) {
    ic.set(e, t), f(t, [e]);
  }
  for (var ea = 0; ea < ac.length; ea++) {
    var ta = ac[ea], Ih = ta.toLowerCase(), Lh = ta[0].toUpperCase() + ta.slice(1);
    jn(Ih, "on" + Lh);
  }
  jn(nc, "onAnimationEnd"), jn(rc, "onAnimationIteration"), jn(sc, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(oc, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dh = new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));
  function lc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, Ip(s, t, void 0, e), e.currentTarget = null;
  }
  function uc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = s.length - 1; 0 <= h; h--) {
          var S = s[h], T = S.instance, D = S.currentTarget;
          if (S = S.listener, T !== u && l.isPropagationStopped()) break e;
          lc(l, S, D), u = T;
        }
        else for (h = 0; h < s.length; h++) {
          if (S = s[h], T = S.instance, D = S.currentTarget, S = S.listener, T !== u && l.isPropagationStopped()) break e;
          lc(l, S, D), u = T;
        }
      }
    }
    if (Ks) throw e = Pi, Ks = !1, Pi = null, e;
  }
  function Ie(e, t) {
    var n = t[ua];
    n === void 0 && (n = t[ua] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (cc(t, e, 2, !1), n.add(s));
  }
  function na(e, t, n) {
    var s = 0;
    t && (s |= 4), cc(n, e, s, t);
  }
  var fo = "_reactListening" + Math.random().toString(36).slice(2);
  function ys(e) {
    if (!e[fo]) {
      e[fo] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Dh.has(n) || na(n, !1, e), na(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fo] || (t[fo] = !0, na("selectionchange", !1, t));
    }
  }
  function cc(e, t, n, s) {
    switch ($u(t)) {
      case 1:
        var l = Jp;
        break;
      case 4:
        l = Xp;
        break;
      default:
        l = zi;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ai || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function ra(e, t, n, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var h = s.tag;
      if (h === 3 || h === 4) {
        var S = s.stateNode.containerInfo;
        if (S === l || S.nodeType === 8 && S.parentNode === l) break;
        if (h === 4) for (h = s.return; h !== null; ) {
          var T = h.tag;
          if ((T === 3 || T === 4) && (T = h.stateNode.containerInfo, T === l || T.nodeType === 8 && T.parentNode === l)) return;
          h = h.return;
        }
        for (; S !== null; ) {
          if (h = Un(S), h === null) return;
          if (T = h.tag, T === 5 || T === 6) {
            s = u = h;
            continue e;
          }
          S = S.parentNode;
        }
      }
      s = s.return;
    }
    mu(function() {
      var D = u, q = Ti(n), Q = [];
      e: {
        var U = ic.get(e);
        if (U !== void 0) {
          var ee = Wi, ne = e;
          switch (e) {
            case "keypress":
              if (oo(n) === 0) break e;
            case "keydown":
            case "keyup":
              ee = ph;
              break;
            case "focusin":
              ne = "focus", ee = Vi;
              break;
            case "focusout":
              ne = "blur", ee = Vi;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Vi;
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
              ee = Lu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = th;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = vh;
              break;
            case nc:
            case rc:
            case sc:
              ee = sh;
              break;
            case oc:
              ee = gh;
              break;
            case "scroll":
              ee = Zp;
              break;
            case "wheel":
              ee = xh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = ih;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = Ou;
          }
          var re = (t & 4) !== 0, Ue = !re && e === "scroll", I = re ? U !== null ? U + "Capture" : null : U;
          re = [];
          for (var R = D, L; R !== null; ) {
            L = R;
            var Y = L.stateNode;
            if (L.tag === 5 && Y !== null && (L = Y, I !== null && (Y = Zr(R, I), Y != null && re.push(gs(R, Y, L)))), Ue) break;
            R = R.return;
          }
          0 < re.length && (U = new ee(U, ne, null, n, q), Q.push({ event: U, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", U && n !== Ni && (ne = n.relatedTarget || n.fromElement) && (Un(ne) || ne[ln])) break e;
          if ((ee || U) && (U = q.window === q ? q : (U = q.ownerDocument) ? U.defaultView || U.parentWindow : window, ee ? (ne = n.relatedTarget || n.toElement, ee = D, ne = ne ? Un(ne) : null, ne !== null && (Ue = Bn(ne), ne !== Ue || ne.tag !== 5 && ne.tag !== 6) && (ne = null)) : (ee = null, ne = D), ee !== ne)) {
            if (re = Lu, Y = "onMouseLeave", I = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (re = Ou, Y = "onPointerLeave", I = "onPointerEnter", R = "pointer"), Ue = ee == null ? U : Sr(ee), L = ne == null ? U : Sr(ne), U = new re(Y, R + "leave", ee, n, q), U.target = Ue, U.relatedTarget = L, Y = null, Un(q) === D && (re = new re(I, R + "enter", ne, n, q), re.target = L, re.relatedTarget = Ue, Y = re), Ue = Y, ee && ne) t: {
              for (re = ee, I = ne, R = 0, L = re; L; L = wr(L)) R++;
              for (L = 0, Y = I; Y; Y = wr(Y)) L++;
              for (; 0 < R - L; ) re = wr(re), R--;
              for (; 0 < L - R; ) I = wr(I), L--;
              for (; R--; ) {
                if (re === I || I !== null && re === I.alternate) break t;
                re = wr(re), I = wr(I);
              }
              re = null;
            }
            else re = null;
            ee !== null && dc(Q, U, ee, re, !1), ne !== null && Ue !== null && dc(Q, Ue, ne, re, !0);
          }
        }
        e: {
          if (U = D ? Sr(D) : window, ee = U.nodeName && U.nodeName.toLowerCase(), ee === "select" || ee === "input" && U.type === "file") var ae = Nh;
          else if (Uu(U)) if (qu) ae = Ah;
          else {
            ae = bh;
            var ue = Th;
          }
          else (ee = U.nodeName) && ee.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (ae = Rh);
          if (ae && (ae = ae(e, D))) {
            Vu(Q, ae, n, q);
            break e;
          }
          ue && ue(e, U, D), e === "focusout" && (ue = U._wrapperState) && ue.controlled && U.type === "number" && Wn(U, "number", U.value);
        }
        switch (ue = D ? Sr(D) : window, e) {
          case "focusin":
            (Uu(ue) || ue.contentEditable === "true") && (_r = ue, Ji = D, ms = null);
            break;
          case "focusout":
            ms = Ji = _r = null;
            break;
          case "mousedown":
            Xi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xi = !1, ec(Q, n, q);
            break;
          case "selectionchange":
            if (Mh) break;
          case "keydown":
          case "keyup":
            ec(Q, n, q);
        }
        var ce;
        if (Qi) e: {
          switch (e) {
            case "compositionstart":
              var pe = "onCompositionStart";
              break e;
            case "compositionend":
              pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              pe = "onCompositionUpdate";
              break e;
          }
          pe = void 0;
        }
        else gr ? Wu(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (zu && n.locale !== "ko" && (gr || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && gr && (ce = Mu()) : (Cn = q, Fi = "value" in Cn ? Cn.value : Cn.textContent, gr = !0)), ue = po(D, pe), 0 < ue.length && (pe = new Du(pe, e, null, n, q), Q.push({ event: pe, listeners: ue }), ce ? pe.data = ce : (ce = Bu(n), ce !== null && (pe.data = ce)))), (ce = kh ? Sh(e, n) : Ch(e, n)) && (D = po(D, "onBeforeInput"), 0 < D.length && (q = new Du("onBeforeInput", "beforeinput", null, n, q), Q.push({ event: q, listeners: D }), q.data = ce));
      }
      uc(Q, t);
    });
  }
  function gs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function po(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Zr(e, n), u != null && s.unshift(gs(e, u, l)), u = Zr(e, t), u != null && s.push(gs(e, u, l))), e = e.return;
    }
    return s;
  }
  function wr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function dc(e, t, n, s, l) {
    for (var u = t._reactName, h = []; n !== null && n !== s; ) {
      var S = n, T = S.alternate, D = S.stateNode;
      if (T !== null && T === s) break;
      S.tag === 5 && D !== null && (S = D, l ? (T = Zr(n, u), T != null && h.unshift(gs(n, T, S))) : l || (T = Zr(n, u), T != null && h.push(gs(n, T, S)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Oh = /\r\n?/g, zh = /\u0000|\uFFFD/g;
  function fc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Oh, `
`).replace(zh, "");
  }
  function ho(e, t, n) {
    if (t = fc(t), fc(e) !== t && n) throw Error(o(425));
  }
  function mo() {
  }
  var sa = null, oa = null;
  function ia(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var aa = typeof setTimeout == "function" ? setTimeout : void 0, Hh = typeof clearTimeout == "function" ? clearTimeout : void 0, pc = typeof Promise == "function" ? Promise : void 0, Fh = typeof queueMicrotask == "function" ? queueMicrotask : typeof pc < "u" ? function(e) {
    return pc.resolve(null).then(e).catch(Wh);
  } : aa;
  function Wh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function la(e, t) {
    var n = t, s = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (s === 0) {
          e.removeChild(l), ls(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = l;
    } while (n);
    ls(t);
  }
  function En(e) {
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
  function hc(e) {
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
  var kr = Math.random().toString(36).slice(2), en = "__reactFiber$" + kr, _s = "__reactProps$" + kr, ln = "__reactContainer$" + kr, ua = "__reactEvents$" + kr, Bh = "__reactListeners$" + kr, Uh = "__reactHandles$" + kr;
  function Un(e) {
    var t = e[en];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ln] || n[en]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = hc(e); e !== null; ) {
          if (n = e[en]) return n;
          e = hc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function xs(e) {
    return e = e[en] || e[ln], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Sr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function vo(e) {
    return e[_s] || null;
  }
  var ca = [], Cr = -1;
  function Nn(e) {
    return { current: e };
  }
  function Le(e) {
    0 > Cr || (e.current = ca[Cr], ca[Cr] = null, Cr--);
  }
  function Me(e, t) {
    Cr++, ca[Cr] = e.current, e.current = t;
  }
  var Tn = {}, it = Nn(Tn), yt = Nn(!1), Vn = Tn;
  function jr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Tn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function gt(e) {
    return e = e.childContextTypes, e != null;
  }
  function yo() {
    Le(yt), Le(it);
  }
  function mc(e, t, n) {
    if (it.current !== Tn) throw Error(o(168));
    Me(it, t), Me(yt, n);
  }
  function vc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(o(108, Ne(e) || "Unknown", l));
    return B({}, n, s);
  }
  function go(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tn, Vn = it.current, Me(it, e), Me(yt, yt.current), !0;
  }
  function yc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    n ? (e = vc(e, t, Vn), s.__reactInternalMemoizedMergedChildContext = e, Le(yt), Le(it), Me(it, e)) : Le(yt), Me(yt, n);
  }
  var un = null, _o = !1, da = !1;
  function gc(e) {
    un === null ? un = [e] : un.push(e);
  }
  function Vh(e) {
    _o = !0, gc(e);
  }
  function bn() {
    if (!da && un !== null) {
      da = !0;
      var e = 0, t = Pe;
      try {
        var n = un;
        for (Pe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        un = null, _o = !1;
      } catch (l) {
        throw un !== null && (un = un.slice(e + 1)), xu($i, bn), l;
      } finally {
        Pe = t, da = !1;
      }
    }
    return null;
  }
  var Er = [], Nr = 0, xo = null, wo = 0, Pt = [], $t = 0, qn = null, cn = 1, dn = "";
  function Qn(e, t) {
    Er[Nr++] = wo, Er[Nr++] = xo, xo = e, wo = t;
  }
  function _c(e, t, n) {
    Pt[$t++] = cn, Pt[$t++] = dn, Pt[$t++] = qn, qn = e;
    var s = cn;
    e = dn;
    var l = 32 - Ht(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - Ht(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (s & (1 << h) - 1).toString(32), s >>= h, l -= h, cn = 1 << 32 - Ht(t) + l | n << l | s, dn = u + e;
    } else cn = 1 << u | n << l | s, dn = e;
  }
  function fa(e) {
    e.return !== null && (Qn(e, 1), _c(e, 1, 0));
  }
  function pa(e) {
    for (; e === xo; ) xo = Er[--Nr], Er[Nr] = null, wo = Er[--Nr], Er[Nr] = null;
    for (; e === qn; ) qn = Pt[--$t], Pt[$t] = null, dn = Pt[--$t], Pt[$t] = null, cn = Pt[--$t], Pt[$t] = null;
  }
  var Tt = null, bt = null, Oe = !1, Wt = null;
  function xc(e, t) {
    var n = Dt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function wc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Tt = e, bt = En(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Tt = e, bt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qn !== null ? { id: cn, overflow: dn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Tt = e, bt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ha(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ma(e) {
    if (Oe) {
      var t = bt;
      if (t) {
        var n = t;
        if (!wc(e, t)) {
          if (ha(e)) throw Error(o(418));
          t = En(n.nextSibling);
          var s = Tt;
          t && wc(e, t) ? xc(s, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, Tt = e);
        }
      } else {
        if (ha(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Oe = !1, Tt = e;
      }
    }
  }
  function kc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Tt = e;
  }
  function ko(e) {
    if (e !== Tt) return !1;
    if (!Oe) return kc(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ia(e.type, e.memoizedProps)), t && (t = bt)) {
      if (ha(e)) throw Sc(), Error(o(418));
      for (; t; ) xc(e, t), t = En(t.nextSibling);
    }
    if (kc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                bt = En(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        bt = null;
      }
    } else bt = Tt ? En(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Sc() {
    for (var e = bt; e; ) e = En(e.nextSibling);
  }
  function Tr() {
    bt = Tt = null, Oe = !1;
  }
  function va(e) {
    Wt === null ? Wt = [e] : Wt.push(e);
  }
  var qh = M.ReactCurrentBatchConfig;
  function ws(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var l = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
          var S = l.refs;
          h === null ? delete S[u] : S[u] = h;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function So(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Cc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function jc(e) {
    function t(I, R) {
      if (e) {
        var L = I.deletions;
        L === null ? (I.deletions = [R], I.flags |= 16) : L.push(R);
      }
    }
    function n(I, R) {
      if (!e) return null;
      for (; R !== null; ) t(I, R), R = R.sibling;
      return null;
    }
    function s(I, R) {
      for (I = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? I.set(R.key, R) : I.set(R.index, R), R = R.sibling;
      return I;
    }
    function l(I, R) {
      return I = Dn(I, R), I.index = 0, I.sibling = null, I;
    }
    function u(I, R, L) {
      return I.index = L, e ? (L = I.alternate, L !== null ? (L = L.index, L < R ? (I.flags |= 2, R) : L) : (I.flags |= 2, R)) : (I.flags |= 1048576, R);
    }
    function h(I) {
      return e && I.alternate === null && (I.flags |= 2), I;
    }
    function S(I, R, L, Y) {
      return R === null || R.tag !== 6 ? (R = al(L, I.mode, Y), R.return = I, R) : (R = l(R, L), R.return = I, R);
    }
    function T(I, R, L, Y) {
      var ae = L.type;
      return ae === X ? q(I, R, L.props.children, Y, L.key) : R !== null && (R.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === le && Cc(ae) === R.type) ? (Y = l(R, L.props), Y.ref = ws(I, R, L), Y.return = I, Y) : (Y = Qo(L.type, L.key, L.props, null, I.mode, Y), Y.ref = ws(I, R, L), Y.return = I, Y);
    }
    function D(I, R, L, Y) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = ll(L, I.mode, Y), R.return = I, R) : (R = l(R, L.children || []), R.return = I, R);
    }
    function q(I, R, L, Y, ae) {
      return R === null || R.tag !== 7 ? (R = tr(L, I.mode, Y, ae), R.return = I, R) : (R = l(R, L), R.return = I, R);
    }
    function Q(I, R, L) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = al("" + R, I.mode, L), R.return = I, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case W:
            return L = Qo(R.type, R.key, R.props, null, I.mode, L), L.ref = ws(I, null, R), L.return = I, L;
          case H:
            return R = ll(R, I.mode, L), R.return = I, R;
          case le:
            var Y = R._init;
            return Q(I, Y(R._payload), L);
        }
        if (Gr(R) || K(R)) return R = tr(R, I.mode, L, null), R.return = I, R;
        So(I, R);
      }
      return null;
    }
    function U(I, R, L, Y) {
      var ae = R !== null ? R.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ae !== null ? null : S(I, R, "" + L, Y);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case W:
            return L.key === ae ? T(I, R, L, Y) : null;
          case H:
            return L.key === ae ? D(I, R, L, Y) : null;
          case le:
            return ae = L._init, U(
              I,
              R,
              ae(L._payload),
              Y
            );
        }
        if (Gr(L) || K(L)) return ae !== null ? null : q(I, R, L, Y, null);
        So(I, L);
      }
      return null;
    }
    function ee(I, R, L, Y, ae) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return I = I.get(L) || null, S(R, I, "" + Y, ae);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case W:
            return I = I.get(Y.key === null ? L : Y.key) || null, T(R, I, Y, ae);
          case H:
            return I = I.get(Y.key === null ? L : Y.key) || null, D(R, I, Y, ae);
          case le:
            var ue = Y._init;
            return ee(I, R, L, ue(Y._payload), ae);
        }
        if (Gr(Y) || K(Y)) return I = I.get(L) || null, q(R, I, Y, ae, null);
        So(R, Y);
      }
      return null;
    }
    function ne(I, R, L, Y) {
      for (var ae = null, ue = null, ce = R, pe = R = 0, Ze = null; ce !== null && pe < L.length; pe++) {
        ce.index > pe ? (Ze = ce, ce = null) : Ze = ce.sibling;
        var Te = U(I, ce, L[pe], Y);
        if (Te === null) {
          ce === null && (ce = Ze);
          break;
        }
        e && ce && Te.alternate === null && t(I, ce), R = u(Te, R, pe), ue === null ? ae = Te : ue.sibling = Te, ue = Te, ce = Ze;
      }
      if (pe === L.length) return n(I, ce), Oe && Qn(I, pe), ae;
      if (ce === null) {
        for (; pe < L.length; pe++) ce = Q(I, L[pe], Y), ce !== null && (R = u(ce, R, pe), ue === null ? ae = ce : ue.sibling = ce, ue = ce);
        return Oe && Qn(I, pe), ae;
      }
      for (ce = s(I, ce); pe < L.length; pe++) Ze = ee(ce, I, pe, L[pe], Y), Ze !== null && (e && Ze.alternate !== null && ce.delete(Ze.key === null ? pe : Ze.key), R = u(Ze, R, pe), ue === null ? ae = Ze : ue.sibling = Ze, ue = Ze);
      return e && ce.forEach(function(On) {
        return t(I, On);
      }), Oe && Qn(I, pe), ae;
    }
    function re(I, R, L, Y) {
      var ae = K(L);
      if (typeof ae != "function") throw Error(o(150));
      if (L = ae.call(L), L == null) throw Error(o(151));
      for (var ue = ae = null, ce = R, pe = R = 0, Ze = null, Te = L.next(); ce !== null && !Te.done; pe++, Te = L.next()) {
        ce.index > pe ? (Ze = ce, ce = null) : Ze = ce.sibling;
        var On = U(I, ce, Te.value, Y);
        if (On === null) {
          ce === null && (ce = Ze);
          break;
        }
        e && ce && On.alternate === null && t(I, ce), R = u(On, R, pe), ue === null ? ae = On : ue.sibling = On, ue = On, ce = Ze;
      }
      if (Te.done) return n(
        I,
        ce
      ), Oe && Qn(I, pe), ae;
      if (ce === null) {
        for (; !Te.done; pe++, Te = L.next()) Te = Q(I, Te.value, Y), Te !== null && (R = u(Te, R, pe), ue === null ? ae = Te : ue.sibling = Te, ue = Te);
        return Oe && Qn(I, pe), ae;
      }
      for (ce = s(I, ce); !Te.done; pe++, Te = L.next()) Te = ee(ce, I, pe, Te.value, Y), Te !== null && (e && Te.alternate !== null && ce.delete(Te.key === null ? pe : Te.key), R = u(Te, R, pe), ue === null ? ae = Te : ue.sibling = Te, ue = Te);
      return e && ce.forEach(function(jm) {
        return t(I, jm);
      }), Oe && Qn(I, pe), ae;
    }
    function Ue(I, R, L, Y) {
      if (typeof L == "object" && L !== null && L.type === X && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case W:
            e: {
              for (var ae = L.key, ue = R; ue !== null; ) {
                if (ue.key === ae) {
                  if (ae = L.type, ae === X) {
                    if (ue.tag === 7) {
                      n(I, ue.sibling), R = l(ue, L.props.children), R.return = I, I = R;
                      break e;
                    }
                  } else if (ue.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === le && Cc(ae) === ue.type) {
                    n(I, ue.sibling), R = l(ue, L.props), R.ref = ws(I, ue, L), R.return = I, I = R;
                    break e;
                  }
                  n(I, ue);
                  break;
                } else t(I, ue);
                ue = ue.sibling;
              }
              L.type === X ? (R = tr(L.props.children, I.mode, Y, L.key), R.return = I, I = R) : (Y = Qo(L.type, L.key, L.props, null, I.mode, Y), Y.ref = ws(I, R, L), Y.return = I, I = Y);
            }
            return h(I);
          case H:
            e: {
              for (ue = L.key; R !== null; ) {
                if (R.key === ue) if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                  n(I, R.sibling), R = l(R, L.children || []), R.return = I, I = R;
                  break e;
                } else {
                  n(I, R);
                  break;
                }
                else t(I, R);
                R = R.sibling;
              }
              R = ll(L, I.mode, Y), R.return = I, I = R;
            }
            return h(I);
          case le:
            return ue = L._init, Ue(I, R, ue(L._payload), Y);
        }
        if (Gr(L)) return ne(I, R, L, Y);
        if (K(L)) return re(I, R, L, Y);
        So(I, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, R !== null && R.tag === 6 ? (n(I, R.sibling), R = l(R, L), R.return = I, I = R) : (n(I, R), R = al(L, I.mode, Y), R.return = I, I = R), h(I)) : n(I, R);
    }
    return Ue;
  }
  var br = jc(!0), Ec = jc(!1), Co = Nn(null), jo = null, Rr = null, ya = null;
  function ga() {
    ya = Rr = jo = null;
  }
  function _a(e) {
    var t = Co.current;
    Le(Co), e._currentValue = t;
  }
  function xa(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ar(e, t) {
    jo = e, ya = Rr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (_t = !0), e.firstContext = null);
  }
  function Mt(e) {
    var t = e._currentValue;
    if (ya !== e) if (e = { context: e, memoizedValue: t, next: null }, Rr === null) {
      if (jo === null) throw Error(o(308));
      Rr = e, jo.dependencies = { lanes: 0, firstContext: e };
    } else Rr = Rr.next = e;
    return t;
  }
  var Kn = null;
  function wa(e) {
    Kn === null ? Kn = [e] : Kn.push(e);
  }
  function Nc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, wa(t)) : (n.next = l.next, l.next = n), t.interleaved = n, fn(e, s);
  }
  function fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Rn = !1;
  function ka(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function pn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function An(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ee & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, fn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, wa(s)) : (t.next = l.next, l.next = t), s.interleaved = t, fn(e, n);
  }
  function Eo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Li(e, n);
    }
  }
  function bc(e, t) {
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
  function No(e, t, n, s) {
    var l = e.updateQueue;
    Rn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, S = l.shared.pending;
    if (S !== null) {
      l.shared.pending = null;
      var T = S, D = T.next;
      T.next = null, h === null ? u = D : h.next = D, h = T;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, S = q.lastBaseUpdate, S !== h && (S === null ? q.firstBaseUpdate = D : S.next = D, q.lastBaseUpdate = T));
    }
    if (u !== null) {
      var Q = l.baseState;
      h = 0, q = D = T = null, S = u;
      do {
        var U = S.lane, ee = S.eventTime;
        if ((s & U) === U) {
          q !== null && (q = q.next = {
            eventTime: ee,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ne = e, re = S;
            switch (U = t, ee = n, re.tag) {
              case 1:
                if (ne = re.payload, typeof ne == "function") {
                  Q = ne.call(ee, Q, U);
                  break e;
                }
                Q = ne;
                break e;
              case 3:
                ne.flags = ne.flags & -65537 | 128;
              case 0:
                if (ne = re.payload, U = typeof ne == "function" ? ne.call(ee, Q, U) : ne, U == null) break e;
                Q = B({}, Q, U);
                break e;
              case 2:
                Rn = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (e.flags |= 64, U = l.effects, U === null ? l.effects = [S] : U.push(S));
        } else ee = { eventTime: ee, lane: U, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, q === null ? (D = q = ee, T = Q) : q = q.next = ee, h |= U;
        if (S = S.next, S === null) {
          if (S = l.shared.pending, S === null) break;
          U = S, S = U.next, U.next = null, l.lastBaseUpdate = U, l.shared.pending = null;
        }
      } while (!0);
      if (q === null && (T = Q), l.baseState = T, l.firstBaseUpdate = D, l.lastBaseUpdate = q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      Jn |= h, e.lanes = h, e.memoizedState = Q;
    }
  }
  function Rc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], l = s.callback;
      if (l !== null) {
        if (s.callback = null, s = n, typeof l != "function") throw Error(o(191, l));
        l.call(s);
      }
    }
  }
  var ks = {}, tn = Nn(ks), Ss = Nn(ks), Cs = Nn(ks);
  function Yn(e) {
    if (e === ks) throw Error(o(174));
    return e;
  }
  function Sa(e, t) {
    switch (Me(Cs, t), Me(Ss, e), Me(tn, ks), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ci(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ci(t, e);
    }
    Le(tn), Me(tn, t);
  }
  function Pr() {
    Le(tn), Le(Ss), Le(Cs);
  }
  function Ac(e) {
    Yn(Cs.current);
    var t = Yn(tn.current), n = Ci(t, e.type);
    t !== n && (Me(Ss, e), Me(tn, n));
  }
  function Ca(e) {
    Ss.current === e && (Le(tn), Le(Ss));
  }
  var He = Nn(0);
  function To(e) {
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
  var ja = [];
  function Ea() {
    for (var e = 0; e < ja.length; e++) ja[e]._workInProgressVersionPrimary = null;
    ja.length = 0;
  }
  var bo = M.ReactCurrentDispatcher, Na = M.ReactCurrentBatchConfig, Gn = 0, Fe = null, qe = null, Je = null, Ro = !1, js = !1, Es = 0, Qh = 0;
  function at() {
    throw Error(o(321));
  }
  function Ta(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ft(e[n], t[n])) return !1;
    return !0;
  }
  function ba(e, t, n, s, l, u) {
    if (Gn = u, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, bo.current = e === null || e.memoizedState === null ? Jh : Xh, e = n(s, l), js) {
      u = 0;
      do {
        if (js = !1, Es = 0, 25 <= u) throw Error(o(301));
        u += 1, Je = qe = null, t.updateQueue = null, bo.current = Zh, e = n(s, l);
      } while (js);
    }
    if (bo.current = $o, t = qe !== null && qe.next !== null, Gn = 0, Je = qe = Fe = null, Ro = !1, t) throw Error(o(300));
    return e;
  }
  function Ra() {
    var e = Es !== 0;
    return Es = 0, e;
  }
  function nn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Je === null ? Fe.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function It() {
    if (qe === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var t = Je === null ? Fe.memoizedState : Je.next;
    if (t !== null) Je = t, qe = e;
    else {
      if (e === null) throw Error(o(310));
      qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, Je === null ? Fe.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function Ns(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Aa(e) {
    var t = It(), n = t.queue;
    if (n === null) throw Error(o(311));
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
      var S = h = null, T = null, D = u;
      do {
        var q = D.lane;
        if ((Gn & q) === q) T !== null && (T = T.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), s = D.hasEagerState ? D.eagerState : e(s, D.action);
        else {
          var Q = {
            lane: q,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          T === null ? (S = T = Q, h = s) : T = T.next = Q, Fe.lanes |= q, Jn |= q;
        }
        D = D.next;
      } while (D !== null && D !== u);
      T === null ? h = s : T.next = S, Ft(s, t.memoizedState) || (_t = !0), t.memoizedState = s, t.baseState = h, t.baseQueue = T, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, Fe.lanes |= u, Jn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Pa(e) {
    var t = It(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = l = l.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== l);
      Ft(u, t.memoizedState) || (_t = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function Pc() {
  }
  function $c(e, t) {
    var n = Fe, s = It(), l = t(), u = !Ft(s.memoizedState, l);
    if (u && (s.memoizedState = l, _t = !0), s = s.queue, $a(Lc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Je !== null && Je.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ts(9, Ic.bind(null, n, s, l, t), void 0, null), Xe === null) throw Error(o(349));
      (Gn & 30) !== 0 || Mc(n, t, l);
    }
    return l;
  }
  function Mc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ic(e, t, n, s) {
    t.value = n, t.getSnapshot = s, Dc(t) && Oc(e);
  }
  function Lc(e, t, n) {
    return n(function() {
      Dc(t) && Oc(e);
    });
  }
  function Dc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ft(e, n);
    } catch {
      return !0;
    }
  }
  function Oc(e) {
    var t = fn(e, 1);
    t !== null && qt(t, e, 1, -1);
  }
  function zc(e) {
    var t = nn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ns, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gh.bind(null, Fe, e), [t.memoizedState, e];
  }
  function Ts(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Hc() {
    return It().memoizedState;
  }
  function Ao(e, t, n, s) {
    var l = nn();
    Fe.flags |= e, l.memoizedState = Ts(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function Po(e, t, n, s) {
    var l = It();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (qe !== null) {
      var h = qe.memoizedState;
      if (u = h.destroy, s !== null && Ta(s, h.deps)) {
        l.memoizedState = Ts(t, n, u, s);
        return;
      }
    }
    Fe.flags |= e, l.memoizedState = Ts(1 | t, n, u, s);
  }
  function Fc(e, t) {
    return Ao(8390656, 8, e, t);
  }
  function $a(e, t) {
    return Po(2048, 8, e, t);
  }
  function Wc(e, t) {
    return Po(4, 2, e, t);
  }
  function Bc(e, t) {
    return Po(4, 4, e, t);
  }
  function Uc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Vc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Po(4, 4, Uc.bind(null, t, e), n);
  }
  function Ma() {
  }
  function qc(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ta(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Qc(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ta(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Kc(e, t, n) {
    return (Gn & 21) === 0 ? (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n) : (Ft(n, t) || (n = Cu(), Fe.lanes |= n, Jn |= n, e.baseState = !0), t);
  }
  function Kh(e, t) {
    var n = Pe;
    Pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Na.transition;
    Na.transition = {};
    try {
      e(!1), t();
    } finally {
      Pe = n, Na.transition = s;
    }
  }
  function Yc() {
    return It().memoizedState;
  }
  function Yh(e, t, n) {
    var s = In(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Gc(e)) Jc(t, n);
    else if (n = Nc(e, t, n, s), n !== null) {
      var l = pt();
      qt(n, e, s, l), Xc(n, t, s);
    }
  }
  function Gh(e, t, n) {
    var s = In(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Gc(e)) Jc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, S = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = S, Ft(S, h)) {
          var T = t.interleaved;
          T === null ? (l.next = l, wa(t)) : (l.next = T.next, T.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Nc(e, t, l, s), n !== null && (l = pt(), qt(n, e, s, l), Xc(n, t, s));
    }
  }
  function Gc(e) {
    var t = e.alternate;
    return e === Fe || t !== null && t === Fe;
  }
  function Jc(e, t) {
    js = Ro = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Xc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Li(e, n);
    }
  }
  var $o = { readContext: Mt, useCallback: at, useContext: at, useEffect: at, useImperativeHandle: at, useInsertionEffect: at, useLayoutEffect: at, useMemo: at, useReducer: at, useRef: at, useState: at, useDebugValue: at, useDeferredValue: at, useTransition: at, useMutableSource: at, useSyncExternalStore: at, useId: at, unstable_isNewReconciler: !1 }, Jh = { readContext: Mt, useCallback: function(e, t) {
    return nn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Mt, useEffect: Fc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ao(
      4194308,
      4,
      Uc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ao(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ao(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = nn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = nn();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Yh.bind(null, Fe, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = nn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: zc, useDebugValue: Ma, useDeferredValue: function(e) {
    return nn().memoizedState = e;
  }, useTransition: function() {
    var e = zc(!1), t = e[0];
    return e = Kh.bind(null, e[1]), nn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Fe, l = nn();
    if (Oe) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), Xe === null) throw Error(o(349));
      (Gn & 30) !== 0 || Mc(s, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Fc(Lc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, Ts(9, Ic.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = nn(), t = Xe.identifierPrefix;
    if (Oe) {
      var n = dn, s = cn;
      n = (s & ~(1 << 32 - Ht(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Es++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Qh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Xh = {
    readContext: Mt,
    useCallback: qc,
    useContext: Mt,
    useEffect: $a,
    useImperativeHandle: Vc,
    useInsertionEffect: Wc,
    useLayoutEffect: Bc,
    useMemo: Qc,
    useReducer: Aa,
    useRef: Hc,
    useState: function() {
      return Aa(Ns);
    },
    useDebugValue: Ma,
    useDeferredValue: function(e) {
      var t = It();
      return Kc(t, qe.memoizedState, e);
    },
    useTransition: function() {
      var e = Aa(Ns)[0], t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Pc,
    useSyncExternalStore: $c,
    useId: Yc,
    unstable_isNewReconciler: !1
  }, Zh = { readContext: Mt, useCallback: qc, useContext: Mt, useEffect: $a, useImperativeHandle: Vc, useInsertionEffect: Wc, useLayoutEffect: Bc, useMemo: Qc, useReducer: Pa, useRef: Hc, useState: function() {
    return Pa(Ns);
  }, useDebugValue: Ma, useDeferredValue: function(e) {
    var t = It();
    return qe === null ? t.memoizedState = e : Kc(t, qe.memoizedState, e);
  }, useTransition: function() {
    var e = Pa(Ns)[0], t = It().memoizedState;
    return [e, t];
  }, useMutableSource: Pc, useSyncExternalStore: $c, useId: Yc, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = B({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ia(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Mo = { isMounted: function(e) {
    return (e = e._reactInternals) ? Bn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = pt(), l = In(e), u = pn(s, l);
    u.payload = t, n != null && (u.callback = n), t = An(e, u, l), t !== null && (qt(t, e, l, s), Eo(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = pt(), l = In(e), u = pn(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = An(e, u, l), t !== null && (qt(t, e, l, s), Eo(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = pt(), s = In(e), l = pn(n, s);
    l.tag = 2, t != null && (l.callback = t), t = An(e, l, s), t !== null && (qt(t, e, s, n), Eo(t, e, s));
  } };
  function Zc(e, t, n, s, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, h) : t.prototype && t.prototype.isPureReactComponent ? !hs(n, s) || !hs(l, u) : !0;
  }
  function ed(e, t, n) {
    var s = !1, l = Tn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Mt(u) : (l = gt(t) ? Vn : it.current, s = t.contextTypes, u = (s = s != null) ? jr(e, l) : Tn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Mo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function td(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Mo.enqueueReplaceState(t, t.state, null);
  }
  function La(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, ka(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Mt(u) : (u = gt(t) ? Vn : it.current, l.context = jr(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ia(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Mo.enqueueReplaceState(l, l.state, null), No(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function $r(e, t) {
    try {
      var n = "", s = t;
      do
        n += ge(s), s = s.return;
      while (s);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Da(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Oa(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var em = typeof WeakMap == "function" ? WeakMap : Map;
  function nd(e, t, n) {
    n = pn(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      Fo || (Fo = !0, Za = s), Oa(e, t);
    }, n;
  }
  function rd(e, t, n) {
    n = pn(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        Oa(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Oa(e, t), typeof s != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function sd(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new em();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = hm.bind(null, e, t, n), t.then(e, e));
  }
  function od(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function id(e, t, n, s, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pn(-1, 1), t.tag = 2, An(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var tm = M.ReactCurrentOwner, _t = !1;
  function ft(e, t, n, s) {
    t.child = e === null ? Ec(t, null, n, s) : br(t, e.child, n, s);
  }
  function ad(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return Ar(t, l), s = ba(e, t, n, s, u, l), n = Ra(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, hn(e, t, l)) : (Oe && n && fa(t), t.flags |= 1, ft(e, t, s, l), t.child);
  }
  function ld(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !il(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, ud(e, t, u, s, l)) : (e = Qo(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : hs, n(h, s) && e.ref === t.ref) return hn(e, t, l);
    }
    return t.flags |= 1, e = Dn(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ud(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (hs(u, s) && e.ref === t.ref) if (_t = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (_t = !0);
      else return t.lanes = e.lanes, hn(e, t, l);
    }
    return za(e, t, n, s, l);
  }
  function cd(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Me(Ir, Rt), Rt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Me(Ir, Rt), Rt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Me(Ir, Rt), Rt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Me(Ir, Rt), Rt |= s;
    return ft(e, t, l, n), t.child;
  }
  function dd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function za(e, t, n, s, l) {
    var u = gt(n) ? Vn : it.current;
    return u = jr(t, u), Ar(t, l), n = ba(e, t, n, s, u, l), s = Ra(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, hn(e, t, l)) : (Oe && s && fa(t), t.flags |= 1, ft(e, t, n, l), t.child);
  }
  function fd(e, t, n, s, l) {
    if (gt(n)) {
      var u = !0;
      go(t);
    } else u = !1;
    if (Ar(t, l), t.stateNode === null) Lo(e, t), ed(t, n, s), La(t, n, s, l), s = !0;
    else if (e === null) {
      var h = t.stateNode, S = t.memoizedProps;
      h.props = S;
      var T = h.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = Mt(D) : (D = gt(n) ? Vn : it.current, D = jr(t, D));
      var q = n.getDerivedStateFromProps, Q = typeof q == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Q || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== s || T !== D) && td(t, h, s, D), Rn = !1;
      var U = t.memoizedState;
      h.state = U, No(t, s, h, l), T = t.memoizedState, S !== s || U !== T || yt.current || Rn ? (typeof q == "function" && (Ia(t, n, q, s), T = t.memoizedState), (S = Rn || Zc(t, n, S, s, U, T, D)) ? (Q || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = T), h.props = s, h.state = T, h.context = D, s = S) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      h = t.stateNode, Tc(e, t), S = t.memoizedProps, D = t.type === t.elementType ? S : Bt(t.type, S), h.props = D, Q = t.pendingProps, U = h.context, T = n.contextType, typeof T == "object" && T !== null ? T = Mt(T) : (T = gt(n) ? Vn : it.current, T = jr(t, T));
      var ee = n.getDerivedStateFromProps;
      (q = typeof ee == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== Q || U !== T) && td(t, h, s, T), Rn = !1, U = t.memoizedState, h.state = U, No(t, s, h, l);
      var ne = t.memoizedState;
      S !== Q || U !== ne || yt.current || Rn ? (typeof ee == "function" && (Ia(t, n, ee, s), ne = t.memoizedState), (D = Rn || Zc(t, n, D, s, U, ne, T) || !1) ? (q || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, ne, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, ne, T)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = ne), h.props = s, h.state = ne, h.context = T, s = D) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Ha(e, t, n, s, u, l);
  }
  function Ha(e, t, n, s, l, u) {
    dd(e, t);
    var h = (t.flags & 128) !== 0;
    if (!s && !h) return l && yc(t, n, !1), hn(e, t, u);
    s = t.stateNode, tm.current = t;
    var S = h && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && h ? (t.child = br(t, e.child, null, u), t.child = br(t, null, S, u)) : ft(e, t, S, u), t.memoizedState = s.state, l && yc(t, n, !0), t.child;
  }
  function pd(e) {
    var t = e.stateNode;
    t.pendingContext ? mc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mc(e, t.context, !1), Sa(e, t.containerInfo);
  }
  function hd(e, t, n, s, l) {
    return Tr(), va(l), t.flags |= 256, ft(e, t, n, s), t.child;
  }
  var Fa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Wa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function md(e, t, n) {
    var s = t.pendingProps, l = He.current, u = !1, h = (t.flags & 128) !== 0, S;
    if ((S = h) || (S = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), S ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Me(He, l & 1), e === null)
      return ma(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, h = { mode: "hidden", children: h }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = Ko(h, s, 0, null), e = tr(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Wa(n), t.memoizedState = Fa, e) : Ba(t, h));
    if (l = e.memoizedState, l !== null && (S = l.dehydrated, S !== null)) return nm(e, t, h, s, S, l, n);
    if (u) {
      u = s.fallback, h = t.mode, l = e.child, S = l.sibling;
      var T = { mode: "hidden", children: s.children };
      return (h & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = T, t.deletions = null) : (s = Dn(l, T), s.subtreeFlags = l.subtreeFlags & 14680064), S !== null ? u = Dn(S, u) : (u = tr(u, h, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, h = e.child.memoizedState, h = h === null ? Wa(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = Fa, s;
    }
    return u = e.child, e = u.sibling, s = Dn(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Ba(e, t) {
    return t = Ko({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Io(e, t, n, s) {
    return s !== null && va(s), br(t, e.child, null, n), e = Ba(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function nm(e, t, n, s, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Da(Error(o(422))), Io(e, t, h, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = Ko({ mode: "visible", children: s.children }, l, 0, null), u = tr(u, l, h, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && br(t, e.child, null, h), t.child.memoizedState = Wa(h), t.memoizedState = Fa, u);
    if ((t.mode & 1) === 0) return Io(e, t, h, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var S = s.dgst;
      return s = S, u = Error(o(419)), s = Da(u, s, void 0), Io(e, t, h, s);
    }
    if (S = (h & e.childLanes) !== 0, _t || S) {
      if (s = Xe, s !== null) {
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
        l = (l & (s.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, fn(e, l), qt(s, e, l, -1));
      }
      return ol(), s = Da(Error(o(421))), Io(e, t, h, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, bt = En(l.nextSibling), Tt = t, Oe = !0, Wt = null, e !== null && (Pt[$t++] = cn, Pt[$t++] = dn, Pt[$t++] = qn, cn = e.id, dn = e.overflow, qn = t), t = Ba(t, s.children), t.flags |= 4096, t);
  }
  function vd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), xa(e.return, t, n);
  }
  function Ua(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function yd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (ft(e, t, s.children, n), s = He.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vd(e, n, t);
        else if (e.tag === 19) vd(e, n, t);
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && To(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ua(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && To(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Ua(t, !0, n, null, u);
        break;
      case "together":
        Ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Lo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function hn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Jn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = Dn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Dn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function rm(e, t, n) {
    switch (t.tag) {
      case 3:
        pd(t), Tr();
        break;
      case 5:
        Ac(t);
        break;
      case 1:
        gt(t.type) && go(t);
        break;
      case 4:
        Sa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Me(Co, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Me(He, He.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? md(e, t, n) : (Me(He, He.current & 1), e = hn(e, t, n), e !== null ? e.sibling : null);
        Me(He, He.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return yd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Me(He, He.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, cd(e, t, n);
    }
    return hn(e, t, n);
  }
  var gd, Va, _d, xd;
  gd = function(e, t) {
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
  }, Va = function() {
  }, _d = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, Yn(tn.current);
      var u = null;
      switch (n) {
        case "input":
          l = ve(e, l), s = ve(e, s), u = [];
          break;
        case "select":
          l = B({}, l, { value: void 0 }), s = B({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Si(e, l), s = Si(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = mo);
      }
      ji(n, s);
      var h;
      n = null;
      for (D in l) if (!s.hasOwnProperty(D) && l.hasOwnProperty(D) && l[D] != null) if (D === "style") {
        var S = l[D];
        for (h in S) S.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (d.hasOwnProperty(D) ? u || (u = []) : (u = u || []).push(D, null));
      for (D in s) {
        var T = s[D];
        if (S = l != null ? l[D] : void 0, s.hasOwnProperty(D) && T !== S && (T != null || S != null)) if (D === "style") if (S) {
          for (h in S) !S.hasOwnProperty(h) || T && T.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in T) T.hasOwnProperty(h) && S[h] !== T[h] && (n || (n = {}), n[h] = T[h]);
        } else n || (u || (u = []), u.push(
          D,
          n
        )), n = T;
        else D === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, S = S ? S.__html : void 0, T != null && S !== T && (u = u || []).push(D, T)) : D === "children" ? typeof T != "string" && typeof T != "number" || (u = u || []).push(D, "" + T) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (d.hasOwnProperty(D) ? (T != null && D === "onScroll" && Ie("scroll", e), u || S === T || (u = [])) : (u = u || []).push(D, T));
      }
      n && (u = u || []).push("style", n);
      var D = u;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, xd = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function bs(e, t) {
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
  function lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags & 14680064, s |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function sm(e, t, n) {
    var s = t.pendingProps;
    switch (pa(t), t.tag) {
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
        return lt(t), null;
      case 1:
        return gt(t.type) && yo(), lt(t), null;
      case 3:
        return s = t.stateNode, Pr(), Le(yt), Le(it), Ea(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (ko(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wt !== null && (nl(Wt), Wt = null))), Va(e, t), lt(t), null;
      case 5:
        Ca(t);
        var l = Yn(Cs.current);
        if (n = t.type, e !== null && t.stateNode != null) _d(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return lt(t), null;
          }
          if (e = Yn(tn.current), ko(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[en] = t, s[_s] = u, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < vs.length; l++) Ie(vs[l], s);
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
                Re(s, u), Ie("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, Ie("invalid", s);
                break;
              case "textarea":
                ru(s, u), Ie("invalid", s);
            }
            ji(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var S = u[h];
              h === "children" ? typeof S == "string" ? s.textContent !== S && (u.suppressHydrationWarning !== !0 && ho(s.textContent, S, e), l = ["children", S]) : typeof S == "number" && s.textContent !== "" + S && (u.suppressHydrationWarning !== !0 && ho(
                s.textContent,
                S,
                e
              ), l = ["children", "" + S]) : d.hasOwnProperty(h) && S != null && h === "onScroll" && Ie("scroll", s);
            }
            switch (n) {
              case "input":
                Xt(s), Yr(s, u, !0);
                break;
              case "textarea":
                Xt(s), ou(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = mo);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = h.createElement(n, { is: s.is }) : (e = h.createElement(n), n === "select" && (h = e, s.multiple ? h.multiple = !0 : s.size && (h.size = s.size))) : e = h.createElementNS(e, n), e[en] = t, e[_s] = s, gd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = Ei(n, s), n) {
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
                  for (l = 0; l < vs.length; l++) Ie(vs[l], e);
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
                  Re(e, s), l = ve(e, s), Ie("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = B({}, s, { value: void 0 }), Ie("invalid", e);
                  break;
                case "textarea":
                  ru(e, s), l = Si(e, s), Ie("invalid", e);
                  break;
                default:
                  l = s;
              }
              ji(n, l), S = l;
              for (u in S) if (S.hasOwnProperty(u)) {
                var T = S[u];
                u === "style" ? uu(e, T) : u === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && au(e, T)) : u === "children" ? typeof T == "string" ? (n !== "textarea" || T !== "") && Jr(e, T) : typeof T == "number" && Jr(e, "" + T) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? T != null && u === "onScroll" && Ie("scroll", e) : T != null && P(e, u, T, h));
              }
              switch (n) {
                case "input":
                  Xt(e), Yr(e, s, !1);
                  break;
                case "textarea":
                  Xt(e), ou(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Ce(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? pr(e, !!s.multiple, u, !1) : s.defaultValue != null && pr(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = mo);
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
        return lt(t), null;
      case 6:
        if (e && t.stateNode != null) xd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (n = Yn(Cs.current), Yn(tn.current), ko(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[en] = t, (u = s.nodeValue !== n) && (e = Tt, e !== null)) switch (e.tag) {
              case 3:
                ho(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ho(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[en] = t, t.stateNode = s;
        }
        return lt(t), null;
      case 13:
        if (Le(He), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && bt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Sc(), Tr(), t.flags |= 98560, u = !1;
          else if (u = ko(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[en] = t;
            } else Tr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), u = !1;
          } else Wt !== null && (nl(Wt), Wt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (He.current & 1) !== 0 ? Qe === 0 && (Qe = 3) : ol())), t.updateQueue !== null && (t.flags |= 4), lt(t), null);
      case 4:
        return Pr(), Va(e, t), e === null && ys(t.stateNode.containerInfo), lt(t), null;
      case 10:
        return _a(t.type._context), lt(t), null;
      case 17:
        return gt(t.type) && yo(), lt(t), null;
      case 19:
        if (Le(He), u = t.memoizedState, u === null) return lt(t), null;
        if (s = (t.flags & 128) !== 0, h = u.rendering, h === null) if (s) bs(u, !1);
        else {
          if (Qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = To(e), h !== null) {
              for (t.flags |= 128, bs(u, !1), s = h.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Me(He, He.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Be() > Lr && (t.flags |= 128, s = !0, bs(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = To(h), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), bs(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !Oe) return lt(t), null;
          } else 2 * Be() - u.renderingStartTime > Lr && n !== 1073741824 && (t.flags |= 128, s = !0, bs(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Be(), t.sibling = null, n = He.current, Me(He, s ? n & 1 | 2 : n & 1), t) : (lt(t), null);
      case 22:
      case 23:
        return sl(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Rt & 1073741824) !== 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function om(e, t) {
    switch (pa(t), t.tag) {
      case 1:
        return gt(t.type) && yo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Pr(), Le(yt), Le(it), Ea(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ca(t), null;
      case 13:
        if (Le(He), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Tr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Le(He), null;
      case 4:
        return Pr(), null;
      case 10:
        return _a(t.type._context), null;
      case 22:
      case 23:
        return sl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Do = !1, ut = !1, im = typeof WeakSet == "function" ? WeakSet : Set, te = null;
  function Mr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      We(e, t, s);
    }
    else n.current = null;
  }
  function qa(e, t, n) {
    try {
      n();
    } catch (s) {
      We(e, t, s);
    }
  }
  var wd = !1;
  function am(e, t) {
    if (sa = no, e = Zu(), Gi(e)) {
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
          var h = 0, S = -1, T = -1, D = 0, q = 0, Q = e, U = null;
          t: for (; ; ) {
            for (var ee; Q !== n || l !== 0 && Q.nodeType !== 3 || (S = h + l), Q !== u || s !== 0 && Q.nodeType !== 3 || (T = h + s), Q.nodeType === 3 && (h += Q.nodeValue.length), (ee = Q.firstChild) !== null; )
              U = Q, Q = ee;
            for (; ; ) {
              if (Q === e) break t;
              if (U === n && ++D === l && (S = h), U === u && ++q === s && (T = h), (ee = Q.nextSibling) !== null) break;
              Q = U, U = Q.parentNode;
            }
            Q = ee;
          }
          n = S === -1 || T === -1 ? null : { start: S, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (oa = { focusedElem: e, selectionRange: n }, no = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
    else for (; te !== null; ) {
      t = te;
      try {
        var ne = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ne !== null) {
              var re = ne.memoizedProps, Ue = ne.memoizedState, I = t.stateNode, R = I.getSnapshotBeforeUpdate(t.elementType === t.type ? re : Bt(t.type, re), Ue);
              I.__reactInternalSnapshotBeforeUpdate = R;
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
            throw Error(o(163));
        }
      } catch (Y) {
        We(t, t.return, Y);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, te = e;
        break;
      }
      te = t.return;
    }
    return ne = wd, wd = !1, ne;
  }
  function Rs(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && qa(t, n, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function Oo(e, t) {
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
  function Qa(e) {
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
    t !== null && (e.alternate = null, kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[en], delete t[_s], delete t[ua], delete t[Bh], delete t[Uh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Sd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Cd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ka(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mo));
    else if (s !== 4 && (e = e.child, e !== null)) for (Ka(e, t, n), e = e.sibling; e !== null; ) Ka(e, t, n), e = e.sibling;
  }
  function Ya(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Ya(e, t, n), e = e.sibling; e !== null; ) Ya(e, t, n), e = e.sibling;
  }
  var rt = null, Ut = !1;
  function Pn(e, t, n) {
    for (n = n.child; n !== null; ) jd(e, t, n), n = n.sibling;
  }
  function jd(e, t, n) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function") try {
      Zt.onCommitFiberUnmount(Gs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        ut || Mr(n, t);
      case 6:
        var s = rt, l = Ut;
        rt = null, Pn(e, t, n), rt = s, Ut = l, rt !== null && (Ut ? (e = rt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : rt.removeChild(n.stateNode));
        break;
      case 18:
        rt !== null && (Ut ? (e = rt, n = n.stateNode, e.nodeType === 8 ? la(e.parentNode, n) : e.nodeType === 1 && la(e, n), ls(e)) : la(rt, n.stateNode));
        break;
      case 4:
        s = rt, l = Ut, rt = n.stateNode.containerInfo, Ut = !0, Pn(e, t, n), rt = s, Ut = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ut && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && qa(n, t, h), l = l.next;
          } while (l !== s);
        }
        Pn(e, t, n);
        break;
      case 1:
        if (!ut && (Mr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (S) {
          We(n, t, S);
        }
        Pn(e, t, n);
        break;
      case 21:
        Pn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ut = (s = ut) || n.memoizedState !== null, Pn(e, t, n), ut = s) : Pn(e, t, n);
        break;
      default:
        Pn(e, t, n);
    }
  }
  function Ed(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new im()), t.forEach(function(s) {
        var l = vm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function Vt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var u = e, h = t, S = h;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              rt = S.stateNode, Ut = !1;
              break e;
            case 3:
              rt = S.stateNode.containerInfo, Ut = !0;
              break e;
            case 4:
              rt = S.stateNode.containerInfo, Ut = !0;
              break e;
          }
          S = S.return;
        }
        if (rt === null) throw Error(o(160));
        jd(u, h, l), rt = null, Ut = !1;
        var T = l.alternate;
        T !== null && (T.return = null), l.return = null;
      } catch (D) {
        We(l, t, D);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nd(t, e), t = t.sibling;
  }
  function Nd(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Vt(t, e), rn(e), s & 4) {
          try {
            Rs(3, e, e.return), Oo(3, e);
          } catch (re) {
            We(e, e.return, re);
          }
          try {
            Rs(5, e, e.return);
          } catch (re) {
            We(e, e.return, re);
          }
        }
        break;
      case 1:
        Vt(t, e), rn(e), s & 512 && n !== null && Mr(n, n.return);
        break;
      case 5:
        if (Vt(t, e), rn(e), s & 512 && n !== null && Mr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Jr(l, "");
          } catch (re) {
            We(e, e.return, re);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, S = e.type, T = e.updateQueue;
          if (e.updateQueue = null, T !== null) try {
            S === "input" && u.type === "radio" && u.name != null && De(l, u), Ei(S, h);
            var D = Ei(S, u);
            for (h = 0; h < T.length; h += 2) {
              var q = T[h], Q = T[h + 1];
              q === "style" ? uu(l, Q) : q === "dangerouslySetInnerHTML" ? au(l, Q) : q === "children" ? Jr(l, Q) : P(l, q, Q, D);
            }
            switch (S) {
              case "input":
                Et(l, u);
                break;
              case "textarea":
                su(l, u);
                break;
              case "select":
                var U = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var ee = u.value;
                ee != null ? pr(l, !!u.multiple, ee, !1) : U !== !!u.multiple && (u.defaultValue != null ? pr(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : pr(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[_s] = u;
          } catch (re) {
            We(e, e.return, re);
          }
        }
        break;
      case 6:
        if (Vt(t, e), rn(e), s & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (re) {
            We(e, e.return, re);
          }
        }
        break;
      case 3:
        if (Vt(t, e), rn(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ls(t.containerInfo);
        } catch (re) {
          We(e, e.return, re);
        }
        break;
      case 4:
        Vt(t, e), rn(e);
        break;
      case 13:
        Vt(t, e), rn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Xa = Be())), s & 4 && Ed(e);
        break;
      case 22:
        if (q = n !== null && n.memoizedState !== null, e.mode & 1 ? (ut = (D = ut) || q, Vt(t, e), ut = D) : Vt(t, e), rn(e), s & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !q && (e.mode & 1) !== 0) for (te = e, q = e.child; q !== null; ) {
            for (Q = te = q; te !== null; ) {
              switch (U = te, ee = U.child, U.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rs(4, U, U.return);
                  break;
                case 1:
                  Mr(U, U.return);
                  var ne = U.stateNode;
                  if (typeof ne.componentWillUnmount == "function") {
                    s = U, n = U.return;
                    try {
                      t = s, ne.props = t.memoizedProps, ne.state = t.memoizedState, ne.componentWillUnmount();
                    } catch (re) {
                      We(s, n, re);
                    }
                  }
                  break;
                case 5:
                  Mr(U, U.return);
                  break;
                case 22:
                  if (U.memoizedState !== null) {
                    Rd(Q);
                    continue;
                  }
              }
              ee !== null ? (ee.return = U, te = ee) : Rd(Q);
            }
            q = q.sibling;
          }
          e: for (q = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (q === null) {
                q = Q;
                try {
                  l = Q.stateNode, D ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (S = Q.stateNode, T = Q.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null, S.style.display = lu("display", h));
                } catch (re) {
                  We(e, e.return, re);
                }
              }
            } else if (Q.tag === 6) {
              if (q === null) try {
                Q.stateNode.nodeValue = D ? "" : Q.memoizedProps;
              } catch (re) {
                We(e, e.return, re);
              }
            } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === e) && Q.child !== null) {
              Q.child.return = Q, Q = Q.child;
              continue;
            }
            if (Q === e) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === e) break e;
              q === Q && (q = null), Q = Q.return;
            }
            q === Q && (q = null), Q.sibling.return = Q.return, Q = Q.sibling;
          }
        }
        break;
      case 19:
        Vt(t, e), rn(e), s & 4 && Ed(e);
        break;
      case 21:
        break;
      default:
        Vt(
          t,
          e
        ), rn(e);
    }
  }
  function rn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Sd(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (Jr(l, ""), s.flags &= -33);
            var u = Cd(e);
            Ya(e, u, l);
            break;
          case 3:
          case 4:
            var h = s.stateNode.containerInfo, S = Cd(e);
            Ka(e, S, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (T) {
        We(e, e.return, T);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function lm(e, t, n) {
    te = e, Td(e);
  }
  function Td(e, t, n) {
    for (var s = (e.mode & 1) !== 0; te !== null; ) {
      var l = te, u = l.child;
      if (l.tag === 22 && s) {
        var h = l.memoizedState !== null || Do;
        if (!h) {
          var S = l.alternate, T = S !== null && S.memoizedState !== null || ut;
          S = Do;
          var D = ut;
          if (Do = h, (ut = T) && !D) for (te = l; te !== null; ) h = te, T = h.child, h.tag === 22 && h.memoizedState !== null ? Ad(l) : T !== null ? (T.return = h, te = T) : Ad(l);
          for (; u !== null; ) te = u, Td(u), u = u.sibling;
          te = l, Do = S, ut = D;
        }
        bd(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, te = u) : bd(e);
    }
  }
  function bd(e) {
    for (; te !== null; ) {
      var t = te;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ut || Oo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !ut) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                s.componentDidUpdate(l, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Rc(t, u, s);
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
                Rc(t, h, n);
              }
              break;
            case 5:
              var S = t.stateNode;
              if (n === null && t.flags & 4) {
                n = S;
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
                  var q = D.memoizedState;
                  if (q !== null) {
                    var Q = q.dehydrated;
                    Q !== null && ls(Q);
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
              throw Error(o(163));
          }
          ut || t.flags & 512 && Qa(t);
        } catch (U) {
          We(t, t.return, U);
        }
      }
      if (t === e) {
        te = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, te = n;
        break;
      }
      te = t.return;
    }
  }
  function Rd(e) {
    for (; te !== null; ) {
      var t = te;
      if (t === e) {
        te = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, te = n;
        break;
      }
      te = t.return;
    }
  }
  function Ad(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Oo(4, t);
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
              Qa(t);
            } catch (T) {
              We(t, u, T);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Qa(t);
            } catch (T) {
              We(t, h, T);
            }
        }
      } catch (T) {
        We(t, t.return, T);
      }
      if (t === e) {
        te = null;
        break;
      }
      var S = t.sibling;
      if (S !== null) {
        S.return = t.return, te = S;
        break;
      }
      te = t.return;
    }
  }
  var um = Math.ceil, zo = M.ReactCurrentDispatcher, Ga = M.ReactCurrentOwner, Lt = M.ReactCurrentBatchConfig, Ee = 0, Xe = null, Ve = null, st = 0, Rt = 0, Ir = Nn(0), Qe = 0, As = null, Jn = 0, Ho = 0, Ja = 0, Ps = null, xt = null, Xa = 0, Lr = 1 / 0, mn = null, Fo = !1, Za = null, $n = null, Wo = !1, Mn = null, Bo = 0, $s = 0, el = null, Uo = -1, Vo = 0;
  function pt() {
    return (Ee & 6) !== 0 ? Be() : Uo !== -1 ? Uo : Uo = Be();
  }
  function In(e) {
    return (e.mode & 1) === 0 ? 1 : (Ee & 2) !== 0 && st !== 0 ? st & -st : qh.transition !== null ? (Vo === 0 && (Vo = Cu()), Vo) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $u(e.type)), e);
  }
  function qt(e, t, n, s) {
    if (50 < $s) throw $s = 0, el = null, Error(o(185));
    rs(e, n, s), ((Ee & 2) === 0 || e !== Xe) && (e === Xe && ((Ee & 2) === 0 && (Ho |= n), Qe === 4 && Ln(e, st)), wt(e, s), n === 1 && Ee === 0 && (t.mode & 1) === 0 && (Lr = Be() + 500, _o && bn()));
  }
  function wt(e, t) {
    var n = e.callbackNode;
    qp(e, t);
    var s = Zs(e, e === Xe ? st : 0);
    if (s === 0) n !== null && wu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && wu(n), t === 1) e.tag === 0 ? Vh($d.bind(null, e)) : gc($d.bind(null, e)), Fh(function() {
        (Ee & 6) === 0 && bn();
      }), n = null;
      else {
        switch (ju(s)) {
          case 1:
            n = $i;
            break;
          case 4:
            n = ku;
            break;
          case 16:
            n = Ys;
            break;
          case 536870912:
            n = Su;
            break;
          default:
            n = Ys;
        }
        n = Fd(n, Pd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Pd(e, t) {
    if (Uo = -1, Vo = 0, (Ee & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Dr() && e.callbackNode !== n) return null;
    var s = Zs(e, e === Xe ? st : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = qo(e, s);
    else {
      t = s;
      var l = Ee;
      Ee |= 2;
      var u = Id();
      (Xe !== e || st !== t) && (mn = null, Lr = Be() + 500, Zn(e, t));
      do
        try {
          fm();
          break;
        } catch (S) {
          Md(e, S);
        }
      while (!0);
      ga(), zo.current = u, Ee = l, Ve !== null ? t = 0 : (Xe = null, st = 0, t = Qe);
    }
    if (t !== 0) {
      if (t === 2 && (l = Mi(e), l !== 0 && (s = l, t = tl(e, l))), t === 1) throw n = As, Zn(e, 0), Ln(e, s), wt(e, Be()), n;
      if (t === 6) Ln(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !cm(l) && (t = qo(e, s), t === 2 && (u = Mi(e), u !== 0 && (s = u, t = tl(e, u))), t === 1)) throw n = As, Zn(e, 0), Ln(e, s), wt(e, Be()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            er(e, xt, mn);
            break;
          case 3:
            if (Ln(e, s), (s & 130023424) === s && (t = Xa + 500 - Be(), 10 < t)) {
              if (Zs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                pt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = aa(er.bind(null, e, xt, mn), t);
              break;
            }
            er(e, xt, mn);
            break;
          case 4:
            if (Ln(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var h = 31 - Ht(s);
              u = 1 << h, h = t[h], h > l && (l = h), s &= ~u;
            }
            if (s = l, s = Be() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * um(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = aa(er.bind(null, e, xt, mn), s);
              break;
            }
            er(e, xt, mn);
            break;
          case 5:
            er(e, xt, mn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return wt(e, Be()), e.callbackNode === n ? Pd.bind(null, e) : null;
  }
  function tl(e, t) {
    var n = Ps;
    return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256), e = qo(e, t), e !== 2 && (t = xt, xt = n, t !== null && nl(t)), e;
  }
  function nl(e) {
    xt === null ? xt = e : xt.push.apply(xt, e);
  }
  function cm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Ft(u(), l)) return !1;
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
  function Ln(e, t) {
    for (t &= ~Ja, t &= ~Ho, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ht(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function $d(e) {
    if ((Ee & 6) !== 0) throw Error(o(327));
    Dr();
    var t = Zs(e, 0);
    if ((t & 1) === 0) return wt(e, Be()), null;
    var n = qo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Mi(e);
      s !== 0 && (t = s, n = tl(e, s));
    }
    if (n === 1) throw n = As, Zn(e, 0), Ln(e, t), wt(e, Be()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, er(e, xt, mn), wt(e, Be()), null;
  }
  function rl(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      Ee = n, Ee === 0 && (Lr = Be() + 500, _o && bn());
    }
  }
  function Xn(e) {
    Mn !== null && Mn.tag === 0 && (Ee & 6) === 0 && Dr();
    var t = Ee;
    Ee |= 1;
    var n = Lt.transition, s = Pe;
    try {
      if (Lt.transition = null, Pe = 1, e) return e();
    } finally {
      Pe = s, Lt.transition = n, Ee = t, (Ee & 6) === 0 && bn();
    }
  }
  function sl() {
    Rt = Ir.current, Le(Ir);
  }
  function Zn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Hh(n)), Ve !== null) for (n = Ve.return; n !== null; ) {
      var s = n;
      switch (pa(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && yo();
          break;
        case 3:
          Pr(), Le(yt), Le(it), Ea();
          break;
        case 5:
          Ca(s);
          break;
        case 4:
          Pr();
          break;
        case 13:
          Le(He);
          break;
        case 19:
          Le(He);
          break;
        case 10:
          _a(s.type._context);
          break;
        case 22:
        case 23:
          sl();
      }
      n = n.return;
    }
    if (Xe = e, Ve = e = Dn(e.current, null), st = Rt = t, Qe = 0, As = null, Ja = Ho = Jn = 0, xt = Ps = null, Kn !== null) {
      for (t = 0; t < Kn.length; t++) if (n = Kn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var h = u.next;
          u.next = l, s.next = h;
        }
        n.pending = s;
      }
      Kn = null;
    }
    return e;
  }
  function Md(e, t) {
    do {
      var n = Ve;
      try {
        if (ga(), bo.current = $o, Ro) {
          for (var s = Fe.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          Ro = !1;
        }
        if (Gn = 0, Je = qe = Fe = null, js = !1, Es = 0, Ga.current = null, n === null || n.return === null) {
          Qe = 1, As = t, Ve = null;
          break;
        }
        e: {
          var u = e, h = n.return, S = n, T = t;
          if (t = st, S.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var D = T, q = S, Q = q.tag;
            if ((q.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var U = q.alternate;
              U ? (q.updateQueue = U.updateQueue, q.memoizedState = U.memoizedState, q.lanes = U.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var ee = od(h);
            if (ee !== null) {
              ee.flags &= -257, id(ee, h, S, u, t), ee.mode & 1 && sd(u, D, t), t = ee, T = D;
              var ne = t.updateQueue;
              if (ne === null) {
                var re = /* @__PURE__ */ new Set();
                re.add(T), t.updateQueue = re;
              } else ne.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                sd(u, D, t), ol();
                break e;
              }
              T = Error(o(426));
            }
          } else if (Oe && S.mode & 1) {
            var Ue = od(h);
            if (Ue !== null) {
              (Ue.flags & 65536) === 0 && (Ue.flags |= 256), id(Ue, h, S, u, t), va($r(T, S));
              break e;
            }
          }
          u = T = $r(T, S), Qe !== 4 && (Qe = 2), Ps === null ? Ps = [u] : Ps.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var I = nd(u, T, t);
                bc(u, I);
                break e;
              case 1:
                S = T;
                var R = u.type, L = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && ($n === null || !$n.has(L)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var Y = rd(u, S, t);
                  bc(u, Y);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Dd(n);
      } catch (ae) {
        t = ae, Ve === n && n !== null && (Ve = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Id() {
    var e = zo.current;
    return zo.current = $o, e === null ? $o : e;
  }
  function ol() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Xe === null || (Jn & 268435455) === 0 && (Ho & 268435455) === 0 || Ln(Xe, st);
  }
  function qo(e, t) {
    var n = Ee;
    Ee |= 2;
    var s = Id();
    (Xe !== e || st !== t) && (mn = null, Zn(e, t));
    do
      try {
        dm();
        break;
      } catch (l) {
        Md(e, l);
      }
    while (!0);
    if (ga(), Ee = n, zo.current = s, Ve !== null) throw Error(o(261));
    return Xe = null, st = 0, Qe;
  }
  function dm() {
    for (; Ve !== null; ) Ld(Ve);
  }
  function fm() {
    for (; Ve !== null && !Dp(); ) Ld(Ve);
  }
  function Ld(e) {
    var t = Hd(e.alternate, e, Rt);
    e.memoizedProps = e.pendingProps, t === null ? Dd(e) : Ve = t, Ga.current = null;
  }
  function Dd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = sm(n, t, Rt), n !== null) {
          Ve = n;
          return;
        }
      } else {
        if (n = om(n, t), n !== null) {
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
  function er(e, t, n) {
    var s = Pe, l = Lt.transition;
    try {
      Lt.transition = null, Pe = 1, pm(e, t, n, s);
    } finally {
      Lt.transition = l, Pe = s;
    }
    return null;
  }
  function pm(e, t, n, s) {
    do
      Dr();
    while (Mn !== null);
    if ((Ee & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Qp(e, u), e === Xe && (Ve = Xe = null, st = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Wo || (Wo = !0, Fd(Ys, function() {
      return Dr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = Lt.transition, Lt.transition = null;
      var h = Pe;
      Pe = 1;
      var S = Ee;
      Ee |= 4, Ga.current = null, am(e, n), Nd(n, e), $h(oa), no = !!sa, oa = sa = null, e.current = n, lm(n), Op(), Ee = S, Pe = h, Lt.transition = u;
    } else e.current = n;
    if (Wo && (Wo = !1, Mn = e, Bo = l), u = e.pendingLanes, u === 0 && ($n = null), Fp(n.stateNode), wt(e, Be()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Fo) throw Fo = !1, e = Za, Za = null, e;
    return (Bo & 1) !== 0 && e.tag !== 0 && Dr(), u = e.pendingLanes, (u & 1) !== 0 ? e === el ? $s++ : ($s = 0, el = e) : $s = 0, bn(), null;
  }
  function Dr() {
    if (Mn !== null) {
      var e = ju(Bo), t = Lt.transition, n = Pe;
      try {
        if (Lt.transition = null, Pe = 16 > e ? 16 : e, Mn === null) var s = !1;
        else {
          if (e = Mn, Mn = null, Bo = 0, (Ee & 6) !== 0) throw Error(o(331));
          var l = Ee;
          for (Ee |= 4, te = e.current; te !== null; ) {
            var u = te, h = u.child;
            if ((te.flags & 16) !== 0) {
              var S = u.deletions;
              if (S !== null) {
                for (var T = 0; T < S.length; T++) {
                  var D = S[T];
                  for (te = D; te !== null; ) {
                    var q = te;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rs(8, q, u);
                    }
                    var Q = q.child;
                    if (Q !== null) Q.return = q, te = Q;
                    else for (; te !== null; ) {
                      q = te;
                      var U = q.sibling, ee = q.return;
                      if (kd(q), q === D) {
                        te = null;
                        break;
                      }
                      if (U !== null) {
                        U.return = ee, te = U;
                        break;
                      }
                      te = ee;
                    }
                  }
                }
                var ne = u.alternate;
                if (ne !== null) {
                  var re = ne.child;
                  if (re !== null) {
                    ne.child = null;
                    do {
                      var Ue = re.sibling;
                      re.sibling = null, re = Ue;
                    } while (re !== null);
                  }
                }
                te = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, te = h;
            else e: for (; te !== null; ) {
              if (u = te, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Rs(9, u, u.return);
              }
              var I = u.sibling;
              if (I !== null) {
                I.return = u.return, te = I;
                break e;
              }
              te = u.return;
            }
          }
          var R = e.current;
          for (te = R; te !== null; ) {
            h = te;
            var L = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && L !== null) L.return = h, te = L;
            else e: for (h = R; te !== null; ) {
              if (S = te, (S.flags & 2048) !== 0) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Oo(9, S);
                }
              } catch (ae) {
                We(S, S.return, ae);
              }
              if (S === h) {
                te = null;
                break e;
              }
              var Y = S.sibling;
              if (Y !== null) {
                Y.return = S.return, te = Y;
                break e;
              }
              te = S.return;
            }
          }
          if (Ee = l, bn(), Zt && typeof Zt.onPostCommitFiberRoot == "function") try {
            Zt.onPostCommitFiberRoot(Gs, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Pe = n, Lt.transition = t;
      }
    }
    return !1;
  }
  function Od(e, t, n) {
    t = $r(n, t), t = nd(e, t, 1), e = An(e, t, 1), t = pt(), e !== null && (rs(e, 1, t), wt(e, t));
  }
  function We(e, t, n) {
    if (e.tag === 3) Od(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Od(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && ($n === null || !$n.has(s))) {
          e = $r(n, e), e = rd(t, e, 1), t = An(t, e, 1), e = pt(), t !== null && (rs(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function hm(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = pt(), e.pingedLanes |= e.suspendedLanes & n, Xe === e && (st & n) === n && (Qe === 4 || Qe === 3 && (st & 130023424) === st && 500 > Be() - Xa ? Zn(e, 0) : Ja |= n), wt(e, t);
  }
  function zd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Xs, Xs <<= 1, (Xs & 130023424) === 0 && (Xs = 4194304)));
    var n = pt();
    e = fn(e, t), e !== null && (rs(e, t, n), wt(e, n));
  }
  function mm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), zd(e, n);
  }
  function vm(e, t) {
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
        throw Error(o(314));
    }
    s !== null && s.delete(t), zd(e, n);
  }
  var Hd;
  Hd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || yt.current) _t = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return _t = !1, rm(e, t, n);
      _t = (e.flags & 131072) !== 0;
    }
    else _t = !1, Oe && (t.flags & 1048576) !== 0 && _c(t, wo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Lo(e, t), e = t.pendingProps;
        var l = jr(t, it.current);
        Ar(t, n), l = ba(null, t, s, e, l, n);
        var u = Ra();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(s) ? (u = !0, go(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ka(t), l.updater = Mo, t.stateNode = l, l._reactInternals = t, La(t, s, e, n), t = Ha(null, t, s, !0, u, n)) : (t.tag = 0, Oe && u && fa(t), ft(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (Lo(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = gm(s), e = Bt(s, e), l) {
            case 0:
              t = za(null, t, s, e, n);
              break e;
            case 1:
              t = fd(null, t, s, e, n);
              break e;
            case 11:
              t = ad(null, t, s, e, n);
              break e;
            case 14:
              t = ld(null, t, s, Bt(s.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Bt(s, l), za(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Bt(s, l), fd(e, t, s, l, n);
      case 3:
        e: {
          if (pd(t), e === null) throw Error(o(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, Tc(e, t), No(t, s, null, n);
          var h = t.memoizedState;
          if (s = h.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = $r(Error(o(423)), t), t = hd(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = $r(Error(o(424)), t), t = hd(e, t, s, n, l);
            break e;
          } else for (bt = En(t.stateNode.containerInfo.firstChild), Tt = t, Oe = !0, Wt = null, n = Ec(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Tr(), s === l) {
              t = hn(e, t, n);
              break e;
            }
            ft(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ac(t), e === null && ma(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, ia(s, l) ? h = null : u !== null && ia(s, u) && (t.flags |= 32), dd(e, t), ft(e, t, h, n), t.child;
      case 6:
        return e === null && ma(t), null;
      case 13:
        return md(e, t, n);
      case 4:
        return Sa(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = br(t, null, s, n) : ft(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Bt(s, l), ad(e, t, s, l, n);
      case 7:
        return ft(e, t, t.pendingProps, n), t.child;
      case 8:
        return ft(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ft(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, Me(Co, s._currentValue), s._currentValue = h, u !== null) if (Ft(u.value, h)) {
            if (u.children === l.children && !yt.current) {
              t = hn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var S = u.dependencies;
            if (S !== null) {
              h = u.child;
              for (var T = S.firstContext; T !== null; ) {
                if (T.context === s) {
                  if (u.tag === 1) {
                    T = pn(-1, n & -n), T.tag = 2;
                    var D = u.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var q = D.pending;
                      q === null ? T.next = T : (T.next = q.next, q.next = T), D.pending = T;
                    }
                  }
                  u.lanes |= n, T = u.alternate, T !== null && (T.lanes |= n), xa(
                    u.return,
                    n,
                    t
                  ), S.lanes |= n;
                  break;
                }
                T = T.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(o(341));
              h.lanes |= n, S = h.alternate, S !== null && (S.lanes |= n), xa(h, n, t), h = u.sibling;
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
          ft(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, s = t.pendingProps.children, Ar(t, n), l = Mt(l), s = s(l), t.flags |= 1, ft(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = Bt(s, t.pendingProps), l = Bt(s.type, l), ld(e, t, s, l, n);
      case 15:
        return ud(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Bt(s, l), Lo(e, t), t.tag = 1, gt(s) ? (e = !0, go(t)) : e = !1, Ar(t, n), ed(t, s, l), La(t, s, l, n), Ha(null, t, s, !0, e, n);
      case 19:
        return yd(e, t, n);
      case 22:
        return cd(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Fd(e, t) {
    return xu(e, t);
  }
  function ym(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Dt(e, t, n, s) {
    return new ym(e, t, n, s);
  }
  function il(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gm(e) {
    if (typeof e == "function") return il(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === he) return 11;
      if (e === z) return 14;
    }
    return 2;
  }
  function Dn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Qo(e, t, n, s, l, u) {
    var h = 2;
    if (s = e, typeof e == "function") il(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case X:
        return tr(n.children, l, u, t);
      case V:
        h = 8, l |= 8;
        break;
      case G:
        return e = Dt(12, n, t, l | 2), e.elementType = G, e.lanes = u, e;
      case me:
        return e = Dt(13, n, t, l), e.elementType = me, e.lanes = u, e;
      case we:
        return e = Dt(19, n, t, l), e.elementType = we, e.lanes = u, e;
      case de:
        return Ko(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            h = 10;
            break e;
          case fe:
            h = 9;
            break e;
          case he:
            h = 11;
            break e;
          case z:
            h = 14;
            break e;
          case le:
            h = 16, s = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = Dt(h, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function tr(e, t, n, s) {
    return e = Dt(7, e, s, t), e.lanes = n, e;
  }
  function Ko(e, t, n, s) {
    return e = Dt(22, e, s, t), e.elementType = de, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function al(e, t, n) {
    return e = Dt(6, e, null, t), e.lanes = n, e;
  }
  function ll(e, t, n) {
    return t = Dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function _m(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ii(0), this.expirationTimes = Ii(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ii(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ul(e, t, n, s, l, u, h, S, T) {
    return e = new _m(e, t, n, S, T), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Dt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ka(u), e;
  }
  function xm(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: H, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Wd(e) {
    if (!e) return Tn;
    e = e._reactInternals;
    e: {
      if (Bn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (gt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (gt(n)) return vc(e, n, t);
    }
    return t;
  }
  function Bd(e, t, n, s, l, u, h, S, T) {
    return e = ul(n, s, !0, e, l, u, h, S, T), e.context = Wd(null), n = e.current, s = pt(), l = In(n), u = pn(s, l), u.callback = t ?? null, An(n, u, l), e.current.lanes = l, rs(e, l, s), wt(e, s), e;
  }
  function Yo(e, t, n, s) {
    var l = t.current, u = pt(), h = In(l);
    return n = Wd(n), t.context === null ? t.context = n : t.pendingContext = n, t = pn(u, h), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = An(l, t, h), e !== null && (qt(e, l, h, u), Eo(e, l, h)), h;
  }
  function Go(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ud(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function cl(e, t) {
    Ud(e, t), (e = e.alternate) && Ud(e, t);
  }
  function wm() {
    return null;
  }
  var Vd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function dl(e) {
    this._internalRoot = e;
  }
  Jo.prototype.render = dl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    Yo(e, t, null, null);
  }, Jo.prototype.unmount = dl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xn(function() {
        Yo(null, e, null, null);
      }), t[ln] = null;
    }
  };
  function Jo(e) {
    this._internalRoot = e;
  }
  Jo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Tu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++) ;
      Sn.splice(n, 0, e), n === 0 && Au(e);
    }
  };
  function fl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Xo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function qd() {
  }
  function km(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var D = Go(h);
          u.call(D);
        };
      }
      var h = Bd(t, s, e, 0, null, !1, !1, "", qd);
      return e._reactRootContainer = h, e[ln] = h.current, ys(e.nodeType === 8 ? e.parentNode : e), Xn(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var S = s;
      s = function() {
        var D = Go(T);
        S.call(D);
      };
    }
    var T = ul(e, 0, !1, null, null, !1, !1, "", qd);
    return e._reactRootContainer = T, e[ln] = T.current, ys(e.nodeType === 8 ? e.parentNode : e), Xn(function() {
      Yo(t, T, n, s);
    }), T;
  }
  function Zo(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var S = l;
        l = function() {
          var T = Go(h);
          S.call(T);
        };
      }
      Yo(t, h, e, l);
    } else h = km(n, t, e, l, s);
    return Go(h);
  }
  Eu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ns(t.pendingLanes);
          n !== 0 && (Li(t, n | 1), wt(t, Be()), (Ee & 6) === 0 && (Lr = Be() + 500, bn()));
        }
        break;
      case 13:
        Xn(function() {
          var s = fn(e, 1);
          if (s !== null) {
            var l = pt();
            qt(s, e, 1, l);
          }
        }), cl(e, 1);
    }
  }, Di = function(e) {
    if (e.tag === 13) {
      var t = fn(e, 134217728);
      if (t !== null) {
        var n = pt();
        qt(t, e, 134217728, n);
      }
      cl(e, 134217728);
    }
  }, Nu = function(e) {
    if (e.tag === 13) {
      var t = In(e), n = fn(e, t);
      if (n !== null) {
        var s = pt();
        qt(n, e, t, s);
      }
      cl(e, t);
    }
  }, Tu = function() {
    return Pe;
  }, bu = function(e, t) {
    var n = Pe;
    try {
      return Pe = e, t();
    } finally {
      Pe = n;
    }
  }, bi = function(e, t, n) {
    switch (t) {
      case "input":
        if (Et(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = vo(s);
              if (!l) throw Error(o(90));
              _n(s), Et(s, l);
            }
          }
        }
        break;
      case "textarea":
        su(e, n);
        break;
      case "select":
        t = n.value, t != null && pr(e, !!n.multiple, t, !1);
    }
  }, pu = rl, hu = Xn;
  var Sm = { usingClientEntryPoint: !1, Events: [xs, Sr, vo, du, fu, rl] }, Ms = { findFiberByHostInstance: Un, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cm = { bundleType: Ms.bundleType, version: Ms.version, rendererPackageName: Ms.rendererPackageName, rendererConfig: Ms.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: M.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = gu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ms.findFiberByHostInstance || wm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ei.isDisabled && ei.supportsFiber) try {
      Gs = ei.inject(Cm), Zt = ei;
    } catch {
    }
  }
  return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm, kt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fl(t)) throw Error(o(200));
    return xm(e, t, null, n);
  }, kt.createRoot = function(e, t) {
    if (!fl(e)) throw Error(o(299));
    var n = !1, s = "", l = Vd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ul(e, 1, !1, null, null, n, !1, s, l), e[ln] = t.current, ys(e.nodeType === 8 ? e.parentNode : e), new dl(t);
  }, kt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = gu(t), e = e === null ? null : e.stateNode, e;
  }, kt.flushSync = function(e) {
    return Xn(e);
  }, kt.hydrate = function(e, t, n) {
    if (!Xo(t)) throw Error(o(200));
    return Zo(null, e, t, !0, n);
  }, kt.hydrateRoot = function(e, t, n) {
    if (!fl(e)) throw Error(o(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", h = Vd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = Bd(t, null, e, 1, n ?? null, l, !1, u, h), e[ln] = t.current, ys(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Jo(t);
  }, kt.render = function(e, t, n) {
    if (!Xo(t)) throw Error(o(200));
    return Zo(null, e, t, !1, n);
  }, kt.unmountComponentAtNode = function(e) {
    if (!Xo(e)) throw Error(o(40));
    return e._reactRootContainer ? (Xn(function() {
      Zo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[ln] = null;
      });
    }), !0) : !1;
  }, kt.unstable_batchedUpdates = rl, kt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Xo(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return Zo(e, t, n, !1, s);
  }, kt.version = "18.3.1-next-f1338f8080-20240426", kt;
}
var ef;
function $f() {
  if (ef) return ml.exports;
  ef = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), ml.exports = $m(), ml.exports;
}
var tf;
function Mm() {
  if (tf) return ti;
  tf = 1;
  var r = $f();
  return ti.createRoot = r.createRoot, ti.hydrateRoot = r.hydrateRoot, ti;
}
var Im = Mm();
const Lm = /* @__PURE__ */ Af(Im);
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
var nf = "popstate";
function rf(r) {
  return typeof r == "object" && r != null && "pathname" in r && "search" in r && "hash" in r && "state" in r && "key" in r;
}
function Dm(r = {}) {
  function a(d, f) {
    let {
      pathname: p = "/",
      search: m = "",
      hash: g = ""
    } = cr(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Tl(
      "",
      { pathname: p, search: m, hash: g },
      // state defaults to `null` because `window.history.state` does
      f.state && f.state.usr || null,
      f.state && f.state.key || "default"
    );
  }
  function o(d, f) {
    let p = d.document.querySelector("base"), m = "";
    if (p && p.getAttribute("href")) {
      let g = d.location.href, w = g.indexOf("#");
      m = w === -1 ? g : g.slice(0, w);
    }
    return m + "#" + (typeof f == "string" ? f : Bs(f));
  }
  function c(d, f) {
    zt(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return zm(
    a,
    o,
    c,
    r
  );
}
function ze(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function zt(r, a) {
  if (!r) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function Om() {
  return Math.random().toString(36).substring(2, 10);
}
function sf(r, a) {
  return {
    usr: r.state,
    key: r.key,
    idx: a,
    masked: r.mask ? {
      pathname: r.pathname,
      search: r.search,
      hash: r.hash
    } : void 0
  };
}
function Tl(r, a, o = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? cr(a) : a,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || c || Om(),
    mask: d
  };
}
function Bs({
  pathname: r = "/",
  search: a = "",
  hash: o = ""
}) {
  return a && a !== "?" && (r += a.charAt(0) === "?" ? a : "?" + a), o && o !== "#" && (r += o.charAt(0) === "#" ? o : "#" + o), r;
}
function cr(r) {
  let a = {};
  if (r) {
    let o = r.indexOf("#");
    o >= 0 && (a.hash = r.substring(o), r = r.substring(0, o));
    let c = r.indexOf("?");
    c >= 0 && (a.search = r.substring(c), r = r.substring(0, c)), r && (a.pathname = r);
  }
  return a;
}
function zm(r, a, o, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, p = d.history, m = "POP", g = null, w = y();
  w == null && (w = 0, p.replaceState({ ...p.state, idx: w }, ""));
  function y() {
    return (p.state || { idx: null }).idx;
  }
  function x() {
    m = "POP";
    let N = y(), A = N == null ? null : N - w;
    w = N, g && g({ action: m, location: j.location, delta: A });
  }
  function k(N, A) {
    m = "PUSH";
    let F = rf(N) ? N : Tl(j.location, N, A);
    o && o(F, N), w = y() + 1;
    let P = sf(F, w), M = j.createHref(F.mask || F);
    try {
      p.pushState(P, "", M);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      d.location.assign(M);
    }
    f && g && g({ action: m, location: j.location, delta: 1 });
  }
  function C(N, A) {
    m = "REPLACE";
    let F = rf(N) ? N : Tl(j.location, N, A);
    o && o(F, N), w = y();
    let P = sf(F, w), M = j.createHref(F.mask || F);
    p.replaceState(P, "", M), f && g && g({ action: m, location: j.location, delta: 0 });
  }
  function b(N) {
    return Hm(d, N);
  }
  let j = {
    get action() {
      return m;
    },
    get location() {
      return r(d, p);
    },
    listen(N) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(nf, x), g = N, () => {
        d.removeEventListener(nf, x), g = null;
      };
    },
    createHref(N) {
      return a(d, N);
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
    push: k,
    replace: C,
    go(N) {
      return p.go(N);
    }
  };
  return j;
}
function Hm(r, a, o = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), ze(c, "No window.location.(origin|href) available to create URL");
  let d = typeof a == "string" ? a : Bs(a);
  return d = d.replace(/ $/, "%20"), !o && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Mf(r, a, o = "/") {
  return Fm(r, a, o, !1);
}
function Fm(r, a, o, c, d) {
  let f = typeof a == "string" ? cr(a) : a, p = yn(f.pathname || "/", o);
  if (p == null)
    return null;
  let m = Wm(r), g = null, w = ev(p);
  for (let y = 0; g == null && y < m.length; ++y)
    g = Xm(
      m[y],
      w,
      c
    );
  return g;
}
function Wm(r) {
  let a = If(r);
  return Bm(a), a;
}
function If(r, a = [], o = [], c = "", d = !1) {
  let f = (p, m, g = d, w) => {
    let y = {
      relativePath: w === void 0 ? p.path || "" : w,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: m,
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
    let x = Kt([c, y.relativePath]), k = o.concat(y);
    p.children && p.children.length > 0 && (ze(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), If(
      p.children,
      a,
      k,
      x,
      g
    )), !(p.path == null && !p.index) && a.push({
      path: x,
      score: Gm(x, p.index),
      routesMeta: k
    });
  };
  return r.forEach((p, m) => {
    var g;
    if (p.path === "" || !((g = p.path) != null && g.includes("?")))
      f(p, m);
    else
      for (let w of Lf(p.path))
        f(p, m, !0, w);
  }), a;
}
function Lf(r) {
  let a = r.split("/");
  if (a.length === 0) return [];
  let [o, ...c] = a, d = o.endsWith("?"), f = o.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let p = Lf(c.join("/")), m = [];
  return m.push(
    ...p.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && m.push(...p), m.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function Bm(r) {
  r.sort(
    (a, o) => a.score !== o.score ? o.score - a.score : Jm(
      a.routesMeta.map((c) => c.childrenIndex),
      o.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Um = /^:[\w-]+$/, Vm = 3, qm = 2, Qm = 1, Km = 10, Ym = -2, of = (r) => r === "*";
function Gm(r, a) {
  let o = r.split("/"), c = o.length;
  return o.some(of) && (c += Ym), a && (c += qm), o.filter((d) => !of(d)).reduce(
    (d, f) => d + (Um.test(f) ? Vm : f === "" ? Qm : Km),
    c
  );
}
function Jm(r, a) {
  return r.length === a.length && r.slice(0, -1).every((c, d) => c === a[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    r[r.length - 1] - a[a.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Xm(r, a, o = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", p = [];
  for (let m = 0; m < c.length; ++m) {
    let g = c[m], w = m === c.length - 1, y = f === "/" ? a : a.slice(f.length) || "/", x = ui(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: w },
      y
    ), k = g.route;
    if (!x && w && o && !c[c.length - 1].route.index && (x = ui(
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
      pathname: Kt([f, x.pathname]),
      pathnameBase: sv(
        Kt([f, x.pathnameBase])
      ),
      route: k
    }), x.pathnameBase !== "/" && (f = Kt([f, x.pathnameBase]));
  }
  return p;
}
function ui(r, a) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, c] = Zm(
    r.path,
    r.caseSensitive,
    r.end
  ), d = a.match(o);
  if (!d) return null;
  let f = d[0], p = f.replace(/(.)\/+$/, "$1"), m = d.slice(1);
  return {
    params: c.reduce(
      (w, { paramName: y, isOptional: x }, k) => {
        if (y === "*") {
          let b = m[k] || "";
          p = f.slice(0, f.length - b.length).replace(/(.)\/+$/, "$1");
        }
        const C = m[k];
        return x && !C ? w[y] = void 0 : w[y] = (C || "").replace(/%2F/g, "/"), w;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: r
  };
}
function Zm(r, a = !1, o = !0) {
  zt(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  );
  let c = [], d = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, m, g, w, y) => {
      if (c.push({ paramName: m, isOptional: g != null }), g) {
        let x = y.charAt(w + p.length);
        return x && x !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return r.endsWith("*") ? (c.push({ paramName: "*" }), d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? d += "\\/*$" : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, a ? void 0 : "i"), c];
}
function ev(r) {
  try {
    return r.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return zt(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), r;
  }
}
function yn(r, a) {
  if (a === "/") return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let o = a.endsWith("/") ? a.length - 1 : a.length, c = r.charAt(o);
  return c && c !== "/" ? null : r.slice(o) || "/";
}
var tv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function nv(r, a = "/") {
  let {
    pathname: o,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? cr(r) : r, f;
  return o ? (o = Df(o), o.startsWith("/") ? f = af(o.substring(1), "/") : f = af(o, a)) : f = a, {
    pathname: f,
    search: ov(c),
    hash: iv(d)
  };
}
function af(r, a) {
  let o = ci(a).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
  }), o.length > 1 ? o.join("/") : "/";
}
function gl(r, a, o, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function rv(r) {
  return r.filter(
    (a, o) => o === 0 || a.route.path && a.route.path.length > 0
  );
}
function zl(r) {
  let a = rv(r);
  return a.map(
    (o, c) => c === a.length - 1 ? o.pathname : o.pathnameBase
  );
}
function vi(r, a, o, c = !1) {
  let d;
  typeof r == "string" ? d = cr(r) : (d = { ...r }, ze(
    !d.pathname || !d.pathname.includes("?"),
    gl("?", "pathname", "search", d)
  ), ze(
    !d.pathname || !d.pathname.includes("#"),
    gl("#", "pathname", "hash", d)
  ), ze(
    !d.search || !d.search.includes("#"),
    gl("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", p = f ? "/" : d.pathname, m;
  if (p == null)
    m = o;
  else {
    let x = a.length - 1;
    if (!c && p.startsWith("..")) {
      let k = p.split("/");
      for (; k[0] === ".."; )
        k.shift(), x -= 1;
      d.pathname = k.join("/");
    }
    m = x >= 0 ? a[x] : "/";
  }
  let g = nv(d, m), w = p && p !== "/" && p.endsWith("/"), y = (f || p === ".") && o.endsWith("/");
  return !g.pathname.endsWith("/") && (w || y) && (g.pathname += "/"), g;
}
var Df = (r) => r.replace(/\/\/+/g, "/"), Kt = (r) => Df(r.join("/")), ci = (r) => r.replace(/\/+$/, ""), sv = (r) => ci(r).replace(/^\/*/, "/"), ov = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, iv = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, av = class {
  constructor(r, a, o, c = !1) {
    this.status = r, this.statusText = a || "", this.internal = c, o instanceof Error ? (this.data = o.toString(), this.error = o) : this.data = o;
  }
};
function lv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function uv(r) {
  let a = r.map((o) => o.route.path).filter(Boolean);
  return Kt(a) || "/";
}
var Of = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function zf(r, a) {
  let o = r;
  if (typeof o != "string" || !tv.test(o))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: o
    };
  let c = o, d = !1;
  if (Of)
    try {
      let f = new URL(window.location.href), p = o.startsWith("//") ? new URL(f.protocol + o) : new URL(o), m = yn(p.pathname, a);
      p.origin === f.origin && m != null ? o = m + p.search + p.hash : d = !0;
    } catch {
      zt(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: c,
    isExternal: d,
    to: o
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Hf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Hf
);
var cv = [
  "GET",
  ...Hf
];
new Set(cv);
var Br = v.createContext(null);
Br.displayName = "DataRouter";
var yi = v.createContext(null);
yi.displayName = "DataRouterState";
var Ff = v.createContext(!1);
function dv() {
  return v.useContext(Ff);
}
var Wf = v.createContext({
  isTransitioning: !1
});
Wf.displayName = "ViewTransition";
var fv = v.createContext(
  /* @__PURE__ */ new Map()
);
fv.displayName = "Fetchers";
var pv = v.createContext(null);
pv.displayName = "Await";
var At = v.createContext(
  null
);
At.displayName = "Navigation";
var Us = v.createContext(
  null
);
Us.displayName = "Location";
var an = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
an.displayName = "Route";
var Hl = v.createContext(null);
Hl.displayName = "RouteError";
var Bf = "REACT_ROUTER_ERROR", hv = "REDIRECT", mv = "ROUTE_ERROR_RESPONSE";
function vv(r) {
  if (r.startsWith(`${Bf}:${hv}:{`))
    try {
      let a = JSON.parse(r.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function yv(r) {
  if (r.startsWith(
    `${Bf}:${mv}:{`
  ))
    try {
      let a = JSON.parse(r.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new av(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function gv(r, { relative: a } = {}) {
  ze(
    dr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: c } = v.useContext(At), { hash: d, pathname: f, search: p } = Vs(r, { relative: a }), m = f;
  return o !== "/" && (m = f === "/" ? o : Kt([o, f])), c.createHref({ pathname: m, search: p, hash: d });
}
function dr() {
  return v.useContext(Us) != null;
}
function jt() {
  return ze(
    dr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(Us).location;
}
var Uf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Vf(r) {
  v.useContext(At).static || v.useLayoutEffect(r);
}
function Fl() {
  let { isDataRoute: r } = v.useContext(an);
  return r ? Av() : _v();
}
function _v() {
  ze(
    dr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext(Br), { basename: a, navigator: o } = v.useContext(At), { matches: c } = v.useContext(an), { pathname: d } = jt(), f = JSON.stringify(zl(c)), p = v.useRef(!1);
  return Vf(() => {
    p.current = !0;
  }), v.useCallback(
    (g, w = {}) => {
      if (zt(p.current, Uf), !p.current) return;
      if (typeof g == "number") {
        o.go(g);
        return;
      }
      let y = vi(
        g,
        JSON.parse(f),
        d,
        w.relative === "path"
      );
      r == null && a !== "/" && (y.pathname = y.pathname === "/" ? a : Kt([a, y.pathname])), (w.replace ? o.replace : o.push)(
        y,
        w.state,
        w
      );
    },
    [
      a,
      o,
      f,
      d,
      r
    ]
  );
}
v.createContext(null);
function Vs(r, { relative: a } = {}) {
  let { matches: o } = v.useContext(an), { pathname: c } = jt(), d = JSON.stringify(zl(o));
  return v.useMemo(
    () => vi(
      r,
      JSON.parse(d),
      c,
      a === "path"
    ),
    [r, d, c, a]
  );
}
function xv(r, a) {
  return qf(r, a);
}
function qf(r, a, o) {
  var N;
  ze(
    dr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(At), { matches: d } = v.useContext(an), f = d[d.length - 1], p = f ? f.params : {}, m = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", w = f && f.route;
  {
    let A = w && w.path || "";
    Kf(
      m,
      !w || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`
    );
  }
  let y = jt(), x;
  if (a) {
    let A = typeof a == "string" ? cr(a) : a;
    ze(
      g === "/" || ((N = A.pathname) == null ? void 0 : N.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ), x = A;
  } else
    x = y;
  let k = x.pathname || "/", C = k;
  if (g !== "/") {
    let A = g.replace(/^\//, "").split("/");
    C = "/" + k.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let b = o && o.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    o.state.matches.map(
      (A) => Object.assign(A, {
        route: o.manifest[A.route.id] || A.route
      })
    )
  ) : Mf(r, { pathname: C });
  zt(
    w || b != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `
  ), zt(
    b == null || b[b.length - 1].route.element !== void 0 || b[b.length - 1].route.Component !== void 0 || b[b.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let j = jv(
    b && b.map(
      (A) => Object.assign({}, A, {
        params: Object.assign({}, p, A.params),
        pathname: Kt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            A.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : A.pathname
        ]),
        pathnameBase: A.pathnameBase === "/" ? g : Kt([
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
    o
  );
  return a && j ? /* @__PURE__ */ v.createElement(
    Us.Provider,
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
    j
  ) : j;
}
function wv() {
  let r = Rv(), a = lv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), o = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, a), o ? /* @__PURE__ */ v.createElement("pre", { style: d }, o) : null, p);
}
var kv = /* @__PURE__ */ v.createElement(wv, null), Qf = class extends v.Component {
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
  static getDerivedStateFromProps(r, a) {
    return a.location !== r.location || a.revalidation !== "idle" && r.revalidation === "idle" ? {
      error: r.error,
      location: r.location,
      revalidation: r.revalidation
    } : {
      error: r.error !== void 0 ? r.error : a.error,
      location: a.location,
      revalidation: r.revalidation || a.revalidation
    };
  }
  componentDidCatch(r, a) {
    this.props.onError ? this.props.onError(r, a) : console.error(
      "React Router caught the following error during render",
      r
    );
  }
  render() {
    let r = this.state.error;
    if (this.context && typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
      const o = yv(r.digest);
      o && (r = o);
    }
    let a = r !== void 0 ? /* @__PURE__ */ v.createElement(an.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Hl.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(Sv, { error: r }, a) : a;
  }
};
Qf.contextType = Ff;
var _l = /* @__PURE__ */ new WeakMap();
function Sv({
  children: r,
  error: a
}) {
  let { basename: o } = v.useContext(At);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let c = vv(a.digest);
    if (c) {
      let d = _l.get(a);
      if (d) throw d;
      let f = zf(c.location, o);
      if (Of && !_l.get(a))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw _l.set(a, p), p;
        }
      return /* @__PURE__ */ v.createElement(
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
function Cv({ routeContext: r, match: a, children: o }) {
  let c = v.useContext(Br);
  return c && c.static && c.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ v.createElement(an.Provider, { value: r }, o);
}
function jv(r, a = [], o) {
  let c = o == null ? void 0 : o.state;
  if (r == null) {
    if (!c)
      return null;
    if (c.errors)
      r = c.matches;
    else if (a.length === 0 && !c.initialized && c.matches.length > 0)
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
  let p = !1, m = -1;
  if (o && c) {
    p = c.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let x = d[y];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (m = y), x.route.id) {
        let { loaderData: k, errors: C } = c, b = x.route.loader && !k.hasOwnProperty(x.route.id) && (!C || C[x.route.id] === void 0);
        if (x.route.lazy || b) {
          o.isStatic && (p = !0), m >= 0 ? d = d.slice(0, m + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let g = o == null ? void 0 : o.onError, w = c && g ? (y, x) => {
    var k, C;
    g(y, {
      location: c.location,
      params: ((C = (k = c.matches) == null ? void 0 : k[0]) == null ? void 0 : C.params) ?? {},
      pattern: uv(c.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (y, x, k) => {
      let C, b = !1, j = null, N = null;
      c && (C = f && x.route.id ? f[x.route.id] : void 0, j = x.route.errorElement || kv, p && (m < 0 && k === 0 ? (Kf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), b = !0, N = null) : m === k && (b = !0, N = x.route.hydrateFallbackElement || null)));
      let A = a.concat(d.slice(0, k + 1)), F = () => {
        let P;
        return C ? P = j : b ? P = N : x.route.Component ? P = /* @__PURE__ */ v.createElement(x.route.Component, null) : x.route.element ? P = x.route.element : P = y, /* @__PURE__ */ v.createElement(
          Cv,
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
      return c && (x.route.ErrorBoundary || x.route.errorElement || k === 0) ? /* @__PURE__ */ v.createElement(
        Qf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: j,
          error: C,
          children: F(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: w
        }
      ) : F();
    },
    null
  );
}
function Wl(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ev(r) {
  let a = v.useContext(Br);
  return ze(a, Wl(r)), a;
}
function Nv(r) {
  let a = v.useContext(yi);
  return ze(a, Wl(r)), a;
}
function Tv(r) {
  let a = v.useContext(an);
  return ze(a, Wl(r)), a;
}
function Bl(r) {
  let a = Tv(r), o = a.matches[a.matches.length - 1];
  return ze(
    o.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function bv() {
  return Bl(
    "useRouteId"
    /* UseRouteId */
  );
}
function Rv() {
  var c;
  let r = v.useContext(Hl), a = Nv(
    "useRouteError"
    /* UseRouteError */
  ), o = Bl(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = a.errors) == null ? void 0 : c[o];
}
function Av() {
  let { router: r } = Ev(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Bl(
    "useNavigate"
    /* UseNavigateStable */
  ), o = v.useRef(!1);
  return Vf(() => {
    o.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      zt(o.current, Uf), o.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: a, ...f }));
    },
    [r, a]
  );
}
var lf = {};
function Kf(r, a, o) {
  !a && !lf[r] && (lf[r] = !0, zt(!1, o));
}
v.memo(Pv);
function Pv({
  routes: r,
  manifest: a,
  future: o,
  state: c,
  isStatic: d,
  onError: f
}) {
  return qf(r, void 0, {
    manifest: a,
    state: c,
    isStatic: d,
    onError: f
  });
}
function zn({
  to: r,
  replace: a,
  state: o,
  relative: c
}) {
  ze(
    dr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(At);
  zt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(an), { pathname: p } = jt(), m = Fl(), g = vi(
    r,
    zl(f),
    p,
    c === "path"
  ), w = JSON.stringify(g);
  return v.useEffect(() => {
    m(JSON.parse(w), { replace: a, state: o, relative: c });
  }, [m, w, c, a, o]), null;
}
function Ke(r) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function $v({
  basename: r = "/",
  children: a = null,
  location: o,
  navigationType: c = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: p
}) {
  ze(
    !dr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let m = r.replace(/^\/*/, "/"), g = v.useMemo(
    () => ({
      basename: m,
      navigator: d,
      static: f,
      useTransitions: p,
      future: {}
    }),
    [m, d, f, p]
  );
  typeof o == "string" && (o = cr(o));
  let {
    pathname: w = "/",
    search: y = "",
    hash: x = "",
    state: k = null,
    key: C = "default",
    mask: b
  } = o, j = v.useMemo(() => {
    let N = yn(w, m);
    return N == null ? null : {
      location: {
        pathname: N,
        search: y,
        hash: x,
        state: k,
        key: C,
        mask: b
      },
      navigationType: c
    };
  }, [m, w, y, x, k, C, c, b]);
  return zt(
    j != null,
    `<Router basename="${m}"> is not able to match the URL "${w}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), j == null ? null : /* @__PURE__ */ v.createElement(At.Provider, { value: g }, /* @__PURE__ */ v.createElement(Us.Provider, { children: a, value: j }));
}
function Mv({
  children: r,
  location: a
}) {
  return xv(bl(r), a);
}
function bl(r, a = []) {
  let o = [];
  return v.Children.forEach(r, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let f = [...a, d];
    if (c.type === v.Fragment) {
      o.push.apply(
        o,
        bl(c.props.children, f)
      );
      return;
    }
    ze(
      c.type === Ke,
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
    c.props.children && (p.children = bl(
      c.props.children,
      f
    )), o.push(p);
  }), o;
}
var ai = "get", li = "application/x-www-form-urlencoded";
function gi(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function Iv(r) {
  return gi(r) && r.tagName.toLowerCase() === "button";
}
function Lv(r) {
  return gi(r) && r.tagName.toLowerCase() === "form";
}
function Dv(r) {
  return gi(r) && r.tagName.toLowerCase() === "input";
}
function Ov(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function zv(r, a) {
  return r.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !Ov(r);
}
var ni = null;
function Hv() {
  if (ni === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ni = !1;
    } catch {
      ni = !0;
    }
  return ni;
}
var Fv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function xl(r) {
  return r != null && !Fv.has(r) ? (zt(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`
  ), null) : r;
}
function Wv(r, a) {
  let o, c, d, f, p;
  if (Lv(r)) {
    let m = r.getAttribute("action");
    c = m ? yn(m, a) : null, o = r.getAttribute("method") || ai, d = xl(r.getAttribute("enctype")) || li, f = new FormData(r);
  } else if (Iv(r) || Dv(r) && (r.type === "submit" || r.type === "image")) {
    let m = r.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || m.getAttribute("action");
    if (c = g ? yn(g, a) : null, o = r.getAttribute("formmethod") || m.getAttribute("method") || ai, d = xl(r.getAttribute("formenctype")) || xl(m.getAttribute("enctype")) || li, f = new FormData(m, r), !Hv()) {
      let { name: w, type: y, value: x } = r;
      if (y === "image") {
        let k = w ? `${w}.` : "";
        f.append(`${k}x`, "0"), f.append(`${k}y`, "0");
      } else w && f.append(w, x);
    }
  } else {
    if (gi(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = ai, c = null, d = li, p = r;
  }
  return f && d === "text/plain" && (p = f, f = void 0), { action: c, method: o.toLowerCase(), encType: d, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ul(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function Yf(r, a, o, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return o ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : a && yn(d.pathname, a) === "/" ? d.pathname = `${ci(a)}/_root.${c}` : d.pathname = `${ci(d.pathname)}.${c}`, d;
}
async function Bv(r, a) {
  if (r.id in a)
    return a[r.id];
  try {
    let o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      r.module
    );
    return a[r.id] = o, o;
  } catch (o) {
    return console.error(
      `Error loading route module \`${r.module}\`, reloading page...`
    ), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Uv(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function Vv(r, a, o) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = a.routes[d.route.id];
      if (f) {
        let p = await Bv(f, o);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Yv(
    c.flat(1).filter(Uv).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function uf(r, a, o, c, d, f) {
  let p = (g, w) => o[w] ? g.route.id !== o[w].route.id : !0, m = (g, w) => {
    var y;
    return (
      // param change, /users/123 -> /users/456
      o[w].pathname !== g.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((y = o[w].route.path) == null ? void 0 : y.endsWith("*")) && o[w].params["*"] !== g.params["*"]
    );
  };
  return f === "assets" ? a.filter(
    (g, w) => p(g, w) || m(g, w)
  ) : f === "data" ? a.filter((g, w) => {
    var x;
    let y = c.routes[g.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (p(g, w) || m(g, w))
      return !0;
    if (g.route.shouldRevalidate) {
      let k = g.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((x = o[0]) == null ? void 0 : x.params) || {},
        nextUrl: new URL(r, window.origin),
        nextParams: g.params,
        defaultShouldRevalidate: !0
      });
      if (typeof k == "boolean")
        return k;
    }
    return !0;
  }) : [];
}
function qv(r, a, { includeHydrateFallback: o } = {}) {
  return Qv(
    r.map((c) => {
      let d = a.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), o && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function Qv(r) {
  return [...new Set(r)];
}
function Kv(r) {
  let a = {}, o = Object.keys(r).sort();
  for (let c of o)
    a[c] = r[c];
  return a;
}
function Yv(r, a) {
  let o = /* @__PURE__ */ new Set();
  return new Set(a), r.reduce((c, d) => {
    let f = JSON.stringify(Kv(d));
    return o.has(f) || (o.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function Vl() {
  let r = v.useContext(Br);
  return Ul(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function Gv() {
  let r = v.useContext(yi);
  return Ul(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var ql = v.createContext(void 0);
ql.displayName = "FrameworkContext";
function Ql() {
  let r = v.useContext(ql);
  return Ul(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function Jv(r, a) {
  let o = v.useContext(ql), [c, d] = v.useState(!1), [f, p] = v.useState(!1), { onFocus: m, onBlur: g, onMouseEnter: w, onMouseLeave: y, onTouchStart: x } = a, k = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && p(!0), r === "viewport") {
      let j = (A) => {
        A.forEach((F) => {
          p(F.isIntersecting);
        });
      }, N = new IntersectionObserver(j, { threshold: 0.5 });
      return k.current && N.observe(k.current), () => {
        N.disconnect();
      };
    }
  }, [r]), v.useEffect(() => {
    if (c) {
      let j = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(j);
      };
    }
  }, [c]);
  let C = () => {
    d(!0);
  }, b = () => {
    d(!1), p(!1);
  };
  return o ? r !== "intent" ? [f, k, {}] : [
    f,
    k,
    {
      onFocus: Ls(m, C),
      onBlur: Ls(g, b),
      onMouseEnter: Ls(w, C),
      onMouseLeave: Ls(y, b),
      onTouchStart: Ls(x, C)
    }
  ] : [!1, k, {}];
}
function Ls(r, a) {
  return (o) => {
    r && r(o), o.defaultPrevented || a(o);
  };
}
function Xv({ page: r, ...a }) {
  let o = dv(), { router: c } = Vl(), d = v.useMemo(
    () => Mf(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? o ? /* @__PURE__ */ v.createElement(ey, { page: r, matches: d, ...a }) : /* @__PURE__ */ v.createElement(ty, { page: r, matches: d, ...a }) : null;
}
function Zv(r) {
  let { manifest: a, routeModules: o } = Ql(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return Vv(r, a, o).then(
      (p) => {
        f || d(p);
      }
    ), () => {
      f = !0;
    };
  }, [r, a, o]), c;
}
function ey({
  page: r,
  matches: a,
  ...o
}) {
  let c = jt(), { future: d } = Ql(), { basename: f } = Vl(), p = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let m = Yf(
      r,
      f,
      d.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), g = !1, w = [];
    for (let y of a)
      typeof y.route.shouldRevalidate == "function" ? g = !0 : w.push(y.route.id);
    return g && w.length > 0 && m.searchParams.set("_routes", w.join(",")), [m.pathname + m.search];
  }, [
    f,
    d.v8_trailingSlashAwareDataRequests,
    r,
    c,
    a
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((m) => /* @__PURE__ */ v.createElement("link", { key: m, rel: "prefetch", as: "fetch", href: m, ...o })));
}
function ty({
  page: r,
  matches: a,
  ...o
}) {
  let c = jt(), { future: d, manifest: f, routeModules: p } = Ql(), { basename: m } = Vl(), { loaderData: g, matches: w } = Gv(), y = v.useMemo(
    () => uf(
      r,
      a,
      w,
      f,
      c,
      "data"
    ),
    [r, a, w, f, c]
  ), x = v.useMemo(
    () => uf(
      r,
      a,
      w,
      f,
      c,
      "assets"
    ),
    [r, a, w, f, c]
  ), k = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let j = /* @__PURE__ */ new Set(), N = !1;
    if (a.forEach((F) => {
      var M;
      let P = f.routes[F.route.id];
      !P || !P.hasLoader || (!y.some((W) => W.route.id === F.route.id) && F.route.id in g && ((M = p[F.route.id]) != null && M.shouldRevalidate) || P.hasClientLoader ? N = !0 : j.add(F.route.id));
    }), j.size === 0)
      return [];
    let A = Yf(
      r,
      m,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return N && j.size > 0 && A.searchParams.set(
      "_routes",
      a.filter((F) => j.has(F.route.id)).map((F) => F.route.id).join(",")
    ), [A.pathname + A.search];
  }, [
    m,
    d.v8_trailingSlashAwareDataRequests,
    g,
    c,
    f,
    y,
    a,
    r,
    p
  ]), C = v.useMemo(
    () => qv(x, f),
    [x, f]
  ), b = Zv(x);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, k.map((j) => /* @__PURE__ */ v.createElement("link", { key: j, rel: "prefetch", as: "fetch", href: j, ...o })), C.map((j) => /* @__PURE__ */ v.createElement("link", { key: j, rel: "modulepreload", href: j, ...o })), b.map(({ key: j, link: N }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: j,
        nonce: o.nonce,
        ...N,
        crossOrigin: N.crossOrigin ?? o.crossOrigin
      }
    )
  )));
}
function ny(...r) {
  return (a) => {
    r.forEach((o) => {
      typeof o == "function" ? o(a) : o != null && (o.current = a);
    });
  };
}
var ry = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ry && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function sy({
  basename: r,
  children: a,
  useTransitions: o,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = Dm({ window: c, v5Compat: !0 }));
  let f = d.current, [p, m] = v.useState({
    action: f.action,
    location: f.location
  }), g = v.useCallback(
    (w) => {
      o === !1 ? m(w) : v.startTransition(() => m(w));
    },
    [o]
  );
  return v.useLayoutEffect(() => f.listen(g), [f, g]), /* @__PURE__ */ v.createElement(
    $v,
    {
      basename: r,
      children: a,
      location: p.location,
      navigationType: p.action,
      navigator: f,
      useTransitions: o
    }
  );
}
var Gf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Jf = v.forwardRef(
  function({
    onClick: a,
    discover: o = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: f,
    replace: p,
    mask: m,
    state: g,
    target: w,
    to: y,
    preventScrollReset: x,
    viewTransition: k,
    defaultShouldRevalidate: C,
    ...b
  }, j) {
    let { basename: N, navigator: A, useTransitions: F } = v.useContext(At), P = typeof y == "string" && Gf.test(y), M = zf(y, N);
    y = M.to;
    let W = gv(y, { relative: d }), H = jt(), X = null;
    if (m) {
      let z = vi(
        m,
        [],
        H.mask ? H.mask.pathname : "/",
        !0
      );
      N !== "/" && (z.pathname = z.pathname === "/" ? N : Kt([N, z.pathname])), X = A.createHref(z);
    }
    let [V, G, xe] = Jv(
      c,
      b
    ), fe = ay(y, {
      replace: p,
      mask: m,
      state: g,
      target: w,
      preventScrollReset: x,
      relative: d,
      viewTransition: k,
      defaultShouldRevalidate: C,
      useTransitions: F
    });
    function he(z) {
      a && a(z), z.defaultPrevented || fe(z);
    }
    let me = !(M.isExternal || f), we = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...b,
          ...xe,
          href: (me ? X : void 0) || M.absoluteURL || W,
          onClick: me ? he : a,
          ref: ny(j, G),
          target: w,
          "data-discover": !P && o === "render" ? "true" : void 0
        }
      )
    );
    return V && !P ? /* @__PURE__ */ v.createElement(v.Fragment, null, we, /* @__PURE__ */ v.createElement(Xv, { page: W })) : we;
  }
);
Jf.displayName = "Link";
var ht = v.forwardRef(
  function({
    "aria-current": a = "page",
    caseSensitive: o = !1,
    className: c = "",
    end: d = !1,
    style: f,
    to: p,
    viewTransition: m,
    children: g,
    ...w
  }, y) {
    let x = Vs(p, { relative: w.relative }), k = jt(), C = v.useContext(yi), { navigator: b, basename: j } = v.useContext(At), N = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fy(x) && m === !0, A = b.encodeLocation ? b.encodeLocation(x).pathname : x.pathname, F = k.pathname, P = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    o || (F = F.toLowerCase(), P = P ? P.toLowerCase() : null, A = A.toLowerCase()), P && j && (P = yn(P, j) || P);
    const M = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let W = F === A || !d && F.startsWith(A) && F.charAt(M) === "/", H = P != null && (P === A || !d && P.startsWith(A) && P.charAt(A.length) === "/"), X = {
      isActive: W,
      isPending: H,
      isTransitioning: N
    }, V = W ? a : void 0, G;
    typeof c == "function" ? G = c(X) : G = [
      c,
      W ? "active" : null,
      H ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let xe = typeof f == "function" ? f(X) : f;
    return /* @__PURE__ */ v.createElement(
      Jf,
      {
        ...w,
        "aria-current": V,
        className: G,
        ref: y,
        style: xe,
        to: p,
        viewTransition: m
      },
      typeof g == "function" ? g(X) : g
    );
  }
);
ht.displayName = "NavLink";
var oy = v.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: a,
    navigate: o,
    reloadDocument: c,
    replace: d,
    state: f,
    method: p = ai,
    action: m,
    onSubmit: g,
    relative: w,
    preventScrollReset: y,
    viewTransition: x,
    defaultShouldRevalidate: k,
    ...C
  }, b) => {
    let { useTransitions: j } = v.useContext(At), N = cy(), A = dy(m, { relative: w }), F = p.toLowerCase() === "get" ? "get" : "post", P = typeof m == "string" && Gf.test(m), M = (W) => {
      if (g && g(W), W.defaultPrevented) return;
      W.preventDefault();
      let H = W.nativeEvent.submitter, X = (H == null ? void 0 : H.getAttribute("formmethod")) || p, V = () => N(H || W.currentTarget, {
        fetcherKey: a,
        method: X,
        navigate: o,
        replace: d,
        state: f,
        relative: w,
        preventScrollReset: y,
        viewTransition: x,
        defaultShouldRevalidate: k
      });
      j && o !== !1 ? v.startTransition(() => V()) : V();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: b,
        method: F,
        action: A,
        onSubmit: c ? g : M,
        ...C,
        "data-discover": !P && r === "render" ? "true" : void 0
      }
    );
  }
);
oy.displayName = "Form";
function iy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Xf(r) {
  let a = v.useContext(Br);
  return ze(a, iy(r)), a;
}
function ay(r, {
  target: a,
  replace: o,
  mask: c,
  state: d,
  preventScrollReset: f,
  relative: p,
  viewTransition: m,
  defaultShouldRevalidate: g,
  useTransitions: w
} = {}) {
  let y = Fl(), x = jt(), k = Vs(r, { relative: p });
  return v.useCallback(
    (C) => {
      if (zv(C, a)) {
        C.preventDefault();
        let b = o !== void 0 ? o : Bs(x) === Bs(k), j = () => y(r, {
          replace: b,
          mask: c,
          state: d,
          preventScrollReset: f,
          relative: p,
          viewTransition: m,
          defaultShouldRevalidate: g
        });
        w ? v.startTransition(() => j()) : j();
      }
    },
    [
      x,
      y,
      k,
      o,
      c,
      d,
      a,
      r,
      f,
      p,
      m,
      g,
      w
    ]
  );
}
var ly = 0, uy = () => `__${String(++ly)}__`;
function cy() {
  let { router: r } = Xf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = v.useContext(At), o = bv(), c = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, p = {}) => {
      let { action: m, method: g, encType: w, formData: y, body: x } = Wv(
        f,
        a
      );
      if (p.navigate === !1) {
        let k = p.fetcherKey || uy();
        await c(k, o, p.action || m, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: y,
          body: x,
          formMethod: p.method || g,
          formEncType: p.encType || w,
          flushSync: p.flushSync
        });
      } else
        await d(p.action || m, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: y,
          body: x,
          formMethod: p.method || g,
          formEncType: p.encType || w,
          replace: p.replace,
          state: p.state,
          fromRouteId: o,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, d, a, o]
  );
}
function dy(r, { relative: a } = {}) {
  let { basename: o } = v.useContext(At), c = v.useContext(an);
  ze(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Vs(r || ".", { relative: a }) }, p = jt();
  if (r == null) {
    f.search = p.search;
    let m = new URLSearchParams(f.search), g = m.getAll("index");
    if (g.some((y) => y === "")) {
      m.delete("index"), g.filter((x) => x).forEach((x) => m.append("index", x));
      let y = m.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (f.pathname = f.pathname === "/" ? o : Kt([o, f.pathname])), Bs(f);
}
function fy(r, { relative: a } = {}) {
  let o = v.useContext(Wf);
  ze(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Xf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Vs(r, { relative: a });
  if (!o.isTransitioning)
    return !1;
  let f = yn(o.currentLocation.pathname, c) || o.currentLocation.pathname, p = yn(o.nextLocation.pathname, c) || o.nextLocation.pathname;
  return ui(d.pathname, p) != null || ui(d.pathname, f) != null;
}
var Zf = $f();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = (...r) => r.filter((a, o, c) => !!a && a.trim() !== "" && c.indexOf(a) === o).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, o, c) => c ? c.toUpperCase() : o.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = (r) => {
  const a = hy(r);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wl = {
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
const my = (r) => {
  for (const a in r)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
}, vy = v.createContext({}), yy = () => v.useContext(vy), gy = v.forwardRef(
  ({ color: r, size: a, strokeWidth: o, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: p, ...m }, g) => {
    const {
      size: w = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: x = !1,
      color: k = "currentColor",
      className: C = ""
    } = yy() ?? {}, b = c ?? x ? Number(o ?? y) * 24 / Number(a ?? w) : o ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...wl,
        width: a ?? w ?? wl.width,
        height: a ?? w ?? wl.height,
        stroke: r ?? k,
        strokeWidth: b,
        className: ep("lucide", C, d),
        ...!f && !my(m) && { "aria-hidden": "true" },
        ...m
      },
      [
        ...p.map(([j, N]) => v.createElement(j, N)),
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
const je = (r, a) => {
  const o = v.forwardRef(
    ({ className: c, ...d }, f) => v.createElement(gy, {
      ref: f,
      iconNode: a,
      className: ep(
        `lucide-${py(cf(r))}`,
        `lucide-${r}`,
        c
      ),
      ...d
    })
  );
  return o.displayName = cf(r), o;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], tp = je("alarm-clock", _y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], wy = je("arrow-left", xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Sy = je("arrow-right", ky);
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
], Kl = je("baby", Cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ey = je("check", jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], np = je("chevron-down", Ny);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], by = je("circle-check", Ty);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ay = je("circle-question-mark", Ry);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], $y = je("circle", Py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], Iy = je("clock-3", My);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Dy = je("command", Ly);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], rp = je("download", Oy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zy = [
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
], Hy = je("file-code-corner", zy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], Wy = je("git-branch", Fy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
], Uy = je("headphones", By);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = [
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
], qy = je("layers", Vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], Ky = je("layout-grid", Qy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], sp = je("menu", Yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Jy = je("message-circle", Gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
  ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
], Zy = je("mic-off", Xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], tg = je("mic", eg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], df = je("phone-call", ng);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
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
], ff = je("phone-off", rg);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], di = je("phone", sg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], ig = je("radio", og);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ag = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], lg = je("search", ag);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], op = je("settings", ug);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], kl = je("sliders-horizontal", cg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dg = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], Yl = je("speaker", dg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fg = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], pg = je("timer", fg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], mg = je("triangle-alert", hg);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], yg = je("volume-2", vg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], pf = je("workflow", gg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ip = je("x", _g), xg = { ru: "Тема", en: "Theme" }, wg = { ru: "Тёмная", en: "Dark" }, kg = { ru: "Светлая", en: "Light" }, Sg = { ru: "Токен", en: "Token" }, Cg = { ru: "Тип действия", en: "Action type" }, jg = { ru: "Ветка диалога", en: "Conversation branch" }, Eg = { ru: "Текст ответа", en: "Response text" }, Ng = { ru: "Команда", en: "Command" }, Tg = { ru: "Название переменной", en: "Variable name" }, bg = { ru: "Основная команда", en: "Main command" }, Rg = { ru: "Второстепенная команда", en: "Secondary command" }, Ag = { ru: "Прямая команда", en: "Direct command" }, Pg = { ru: "Дополнительные фразы", en: "Additional phrases" }, $g = { ru: "Удалённый сервер", en: "Remote server" }, Mg = { ru: "Вложенные команды", en: "Nested commands" }, Ig = { ru: "Тип вложенного значения", en: "Nested value type" }, Lg = { ru: "Тип данных", en: "Data type" }, Dg = { ru: "Вручную", en: "Manual" }, Og = { ru: "Любой", en: "Any" }, zg = { ru: "Любой", en: "Any" }, Hg = { ru: "Текст", en: "Text" }, Fg = { ru: "Число", en: "Number" }, Wg = { ru: "Дата", en: "Date" }, Bg = { ru: "Время", en: "Time" }, Ug = {
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
  Theme: xg,
  dark: wg,
  light: kg,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: Sg,
  actionType: Cg,
  actionTypeComponent: jg,
  voiceResponse: Eg,
  uuid: Ng,
  mappingType: Tg,
  parent_type: bg,
  children_type: Rg,
  children_direct_type: Ag,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: Pg,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: $g,
  subDirectControl: Mg,
  subMappingType: Ig,
  valueType: Lg,
  manual: Dg,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Og,
  All: zg,
  string: Hg,
  int: Fg,
  date: Wg,
  time: Bg,
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
  "Этот браузер не разрешает переключать разговорный динамик и громкую связь из сайта. Выберите динамик или наушники в системном меню телефона. Кнопка «Звук» повторно включает воспроизведение.": { ru: "Этот браузер не разрешает переключать разговорный динамик и громкую связь из сайта. Выберите динамик или наушники в системном меню телефона. Кнопка «Звук» повторно включает воспроизведение.", en: "This browser cannot switch between the earpiece and speakerphone from a website. Choose speakers or headphones in the phone system menu. The Audio button resumes playback." },
  "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже. Пока прослушивание активно, сменить устройство воспроизведения нельзя.": { ru: "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже. Пока прослушивание активно, сменить устройство воспроизведения нельзя.", en: "This session was started outside this tab. Closing the window or tab will not stop it. Use Stop below. You cannot change the playback device while listening is active." },
  "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня». Пока прослушивание активно, сменить устройство воспроизведения нельзя.": { ru: "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня». Пока прослушивание активно, сменить устройство воспроизведения нельзя.", en: "Closing this window keeps listening active. Stop below or leave the Baby monitor tab. You cannot change the playback device while listening is active." },
  Аудиовыход: { ru: "Аудиовыход", en: "Audio output" },
  "По умолчанию (системный выход)": { ru: "По умолчанию (системный выход)", en: "Default (system output)" },
  "Выбрать другое устройство…": { ru: "Выбрать другое устройство…", en: "Choose another device…" },
  "Этот браузер не позволяет выбирать аудиовыход. Переключите динамик или наушники в системном меню телефона.": { ru: "Этот браузер не позволяет выбирать аудиовыход. Переключите динамик или наушники в системном меню телефона.", en: "This browser cannot select audio outputs. Switch speakers or headphones in your phone’s system menu." },
  "Входящий звонок": { ru: "Входящий звонок", en: "Incoming call" },
  Отклонить: { ru: "Отклонить", en: "Decline" },
  "Мелодия звонка": { ru: "Мелодия звонка", en: "Ringtone" },
  Стандартная: { ru: "Стандартная", en: "Default" }
}, ap = "ha-dialog-ui-language";
let Gl = localStorage.getItem(ap) === "en" ? "en" : "ru";
const Rl = /* @__PURE__ */ new Set();
function Vg(r) {
  Gl = r, localStorage.setItem(ap, r), Rl.forEach((a) => a());
}
function lp() {
  return v.useSyncExternalStore((r) => (Rl.add(r), () => {
    Rl.delete(r);
  }), () => Gl);
}
function _(r) {
  if (typeof r != "string") return r;
  const a = Ug[r];
  return (a == null ? void 0 : a[Gl]) ?? r;
}
const qg = "_button_180pj_1", Qg = "_full_180pj_32", Kg = "_primary_180pj_37", Yg = "_secondary_180pj_49", Gg = "_ghost_180pj_61", Jg = "_remove_180pj_83", Sl = {
  button: qg,
  full: Qg,
  primary: Kg,
  secondary: Yg,
  ghost: Gg,
  remove: Jg
}, se = ({
  children: r,
  variant: a = "primary",
  fullWidth: o = !1,
  leftIcon: c,
  rightIcon: d,
  className: f = "",
  ...p
}) => /* @__PURE__ */ i.jsxs(
  "button",
  {
    ...p,
    className: `
        ${Sl.button}
        ${Sl[a]}
        ${o ? Sl.full : ""}
        ${f}
      `,
    children: [
      c,
      r,
      d
    ]
  }
), Al = "ha-dialog-ui-api-enabled-change", up = v.createContext(!1), Jl = () => v.useContext(up), cp = v.createContext(!1), Xl = () => v.useContext(cp), fi = "ha-dialog-ui-remote-server-change", dp = v.createContext(null), Ur = () => v.useContext(dp), nt = (r = 768) => {
  const [a, o] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      o(f.matches);
    };
    return o(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), a;
}, Xg = "_tabs_1vwxg_1", Zg = "_dropdown_1vwxg_16", e_ = "_tab_1vwxg_1", t_ = "_active_1vwxg_49", n_ = "_menu_1vwxg_59", r_ = "_chevron_1vwxg_76", s_ = "_menuItem_1vwxg_84", ye = {
  tabs: Xg,
  dropdown: Zg,
  tab: e_,
  active: t_,
  menu: n_,
  chevron: r_,
  menuItem: s_
}, mt = () => {
  const r = nt(), a = Jl(), o = Xl(), c = Ur(), d = jt(), [f, p] = v.useState(!1), m = v.useRef(null), g = v.useRef(null), w = v.useId();
  if (v.useEffect(() => {
    p(!1);
  }, [d.pathname, r, c]), v.useEffect(() => {
    if (!f) return;
    const y = (x) => {
      m.current && !x.composedPath().includes(m.current) && p(!1);
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("focusin", y), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("focusin", y);
    };
  }, [f]), !r)
    return /* @__PURE__ */ i.jsxs("div", { className: ye.tabs, children: [
      c === !0 && /* @__PURE__ */ i.jsxs(
        ht,
        {
          to: "/scripts",
          className: ({ isActive: y }) => y ? `${ye.tab} ${ye.active}` : ye.tab,
          children: [
            /* @__PURE__ */ i.jsx(Hy, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ i.jsx("span", { children: _(c ? "Действия удалённых команд" : "Запуск скриптов") })
          ]
        }
      ),
      c === !1 && /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: ye.dropdown,
          ref: m,
          onKeyDown: (y) => {
            var x;
            y.key === "Escape" && f && (y.stopPropagation(), p(!1), (x = g.current) == null || x.focus());
          },
          children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                type: "button",
                ref: g,
                className: `${ye.tab} ${d.pathname.startsWith("/commands") ? ye.active : ""}`,
                "aria-expanded": f,
                "aria-controls": w,
                onClick: () => p((y) => !y),
                onKeyDown: (y) => {
                  y.key === "ArrowDown" && (y.preventDefault(), p(!0), requestAnimationFrame(() => {
                    var x, k;
                    return (k = (x = m.current) == null ? void 0 : x.querySelector("a")) == null ? void 0 : k.focus();
                  }));
                },
                children: [
                  /* @__PURE__ */ i.jsx(Dy, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ i.jsx("span", { children: _("Команды") }),
                  /* @__PURE__ */ i.jsx(np, { size: 14, className: ye.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ i.jsxs(
              "nav",
              {
                id: w,
                className: ye.menu,
                "aria-label": _("Разделы команд"),
                onClick: () => p(!1),
                children: [
                  /* @__PURE__ */ i.jsx(
                    ht,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${ye.menuItem} ${ye.active}` : ye.menuItem,
                      children: _("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    ht,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${ye.menuItem} ${ye.active}` : ye.menuItem,
                      children: _("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    ht,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${ye.menuItem} ${ye.active}` : ye.menuItem,
                      children: _("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    ht,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${ye.menuItem} ${ye.active}` : ye.menuItem,
                      children: _("Ответы по умолчанию")
                    }
                  ),
                  o && /* @__PURE__ */ i.jsx(
                    ht,
                    {
                      to: "/commands/whisper",
                      className: ({ isActive: y }) => y ? `${ye.menuItem} ${ye.active}` : ye.menuItem,
                      children: _("Промпт распознавания")
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        ht,
        {
          to: "/timer",
          className: ({ isActive: y }) => y ? `${ye.tab} ${ye.active}` : ye.tab,
          children: [
            /* @__PURE__ */ i.jsx(pg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ i.jsx("span", { children: _("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        ht,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${ye.tab} ${ye.active}` : ye.tab,
          children: [
            /* @__PURE__ */ i.jsx(tp, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ i.jsx("span", { children: _("Будильники") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(ht, { to: "/monitor", className: ({ isActive: y }) => y ? `${ye.tab} ${ye.active}` : ye.tab, children: [
        /* @__PURE__ */ i.jsx(Kl, { size: 16 }),
        /* @__PURE__ */ i.jsx("span", { children: _("Радионяня") })
      ] }),
      /* @__PURE__ */ i.jsxs(ht, { to: "/calls", className: ({ isActive: y }) => y ? `${ye.tab} ${ye.active}` : ye.tab, children: [
        /* @__PURE__ */ i.jsx(di, { size: 16 }),
        /* @__PURE__ */ i.jsx("span", { children: _("Звонки") })
      ] }),
      o && /* @__PURE__ */ i.jsxs(ht, { to: "/downloads", className: ({ isActive: y }) => y ? `${ye.tab} ${ye.active}` : ye.tab, children: [
        /* @__PURE__ */ i.jsx(rp, { size: 16 }),
        /* @__PURE__ */ i.jsx("span", { children: _("Импорт и экспорт") })
      ] }),
      a && o && /* @__PURE__ */ i.jsx(ht, { to: "/logs", className: ({ isActive: y }) => y ? `${ye.tab} ${ye.active}` : ye.tab, children: _("Логи") }),
      /* @__PURE__ */ i.jsxs(
        ht,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${ye.tab} ${ye.active}` : ye.tab,
          children: [
            /* @__PURE__ */ i.jsx(op, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ i.jsx("span", { children: _("Настройки") })
          ]
        }
      )
    ] });
}, Ds = "dialogCustomUiOverlay", ri = [], pi = /* @__PURE__ */ new Set();
let o_ = 0, Or = null, Pl = !1;
function i_() {
  Pl = !0, window.addEventListener("popstate", () => {
    Pl = !1;
    const r = [...pi];
    pi.clear(), queueMicrotask(() => r.forEach((a) => a()));
  }, { once: !0 }), history.back();
}
function fp(r, a) {
  const o = nt(), c = v.useRef(a);
  c.current = a, v.useEffect(() => {
    if (!r || !o) return;
    const d = `overlay-${++o_}`;
    let f = !1, p = !1, m = !1;
    const g = () => {
      var y;
      ri.at(-1) !== d || ((y = history.state) == null ? void 0 : y[Ds]) === d || (f = !0, c.current());
    }, w = () => {
      var x;
      if (m) return;
      p = !0, ri.push(d);
      const y = { ...history.state, [Ds]: d };
      Or && ((x = history.state) == null ? void 0 : x[Ds]) === Or ? (history.replaceState(y, ""), Or = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return Pl ? pi.add(w) : w(), () => {
      var y;
      m = !0, pi.delete(w), window.removeEventListener("popstate", g), p && (ri.splice(ri.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[Ds]) === d && (Or = d, queueMicrotask(() => {
        var x;
        Or === d && (Or = null, ((x = history.state) == null ? void 0 : x[Ds]) === d && i_());
      })));
    };
  }, [r, o]);
}
const a_ = "_overlay_tb5vv_1", l_ = "_sheet_tb5vv_11", u_ = "_handle_tb5vv_21", nr = {
  overlay: a_,
  sheet: l_,
  handle: u_
}, Zl = ({
  open: r,
  className: a = "",
  labelledBy: o,
  onClose: c,
  children: d
}) => {
  fp(r, c);
  const [f, p] = v.useState(r), [m, g] = v.useState(r), w = v.useRef(0), y = v.useRef(0), [x, k] = v.useState(0);
  v.useEffect(() => {
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
  const C = (N) => {
    w.current = N.touches[0].clientY;
  }, b = (N) => {
    y.current = N.touches[0].clientY;
    const A = y.current - w.current;
    A > 0 && k(A);
  }, j = () => {
    x > 120 && c(), k(0);
  };
  return v.useEffect(() => {
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
  }, [r, c]), f ? /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `${nr.overlay} ${m ? nr.visible : ""} ${a}`,
      onClick: c,
      children: /* @__PURE__ */ i.jsxs(
        "section",
        {
          className: `${nr.sheet} ${m ? nr.open : ""}`,
          style: {
            transform: `translateY(${x}px)`,
            transition: x === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
          },
          onClick: (N) => N.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": o,
          children: [
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: nr.handleArea,
                onTouchStart: C,
                onTouchMove: b,
                onTouchEnd: j,
                children: /* @__PURE__ */ i.jsx("div", { className: nr.handle })
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: nr.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, c_ = "_overlay_avpnk_1", d_ = "_heading_avpnk_16", f_ = "_close_avpnk_32", p_ = "_nav_avpnk_45", h_ = "_item_avpnk_51", m_ = "_icon_avpnk_70", v_ = "_label_avpnk_78", y_ = "_arrow_avpnk_86", g_ = "_active_avpnk_91", vn = {
  overlay: c_,
  heading: d_,
  close: f_,
  nav: p_,
  item: h_,
  icon: m_,
  label: v_,
  arrow: y_,
  active: g_
};
function __({ open: r, onClose: a }) {
  const o = Jl(), c = Xl(), d = Ur(), { pathname: f } = jt(), p = v.useId(), m = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: Jy },
      { to: "/commands/sub", label: "Второстепенные команды", icon: Wy },
      { to: "/commands/direct/main", label: "Прямые команды", icon: pf },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: qy },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: kl },
      ...c ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: kl }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: pf }] : [],
    { to: "/timer", label: "Таймеры", icon: Iy },
    { to: "/alarm", label: "Будильники", icon: tp },
    { to: "/monitor", label: "Радионяня", icon: Kl },
    { to: "/calls", label: "Звонки", icon: di },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: rp }] : [],
    ...o && c ? [{ to: "/logs", label: "Логи", icon: kl }] : [],
    { to: "/settings", label: "Настройки", icon: op }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const w = requestAnimationFrame(() => {
      var y, x, k;
      return (k = ((y = m.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((x = m.current) == null ? void 0 : x.querySelector("a"))) == null ? void 0 : k.focus();
    });
    return () => cancelAnimationFrame(w);
  }, [r]), /* @__PURE__ */ i.jsx(Zl, { open: r, onClose: a, labelledBy: p, className: vn.overlay, children: /* @__PURE__ */ i.jsxs("div", { ref: m, onKeyDown: (w) => {
    if (w.key !== "Tab") return;
    const y = [...m.current.querySelectorAll("button, a")], x = y[0], k = y[y.length - 1];
    w.shiftKey && w.target === x ? (w.preventDefault(), k.focus()) : !w.shiftKey && w.target === k && (w.preventDefault(), x.focus());
  }, children: [
    /* @__PURE__ */ i.jsxs("div", { className: vn.heading, children: [
      /* @__PURE__ */ i.jsx("h2", { id: p, children: _("Разделы") }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: vn.close, "aria-label": _("Закрыть меню разделов"), onClick: a, children: /* @__PURE__ */ i.jsx(ip, { size: 20 }) })
    ] }),
    /* @__PURE__ */ i.jsx("nav", { className: vn.nav, "aria-label": _("Навигация интеграции"), children: g.map(({ to: w, label: y, icon: x }) => /* @__PURE__ */ i.jsxs(
      ht,
      {
        to: w,
        end: !0,
        className: ({ isActive: k }) => `${vn.item} ${k ? vn.active : ""}`,
        onClick: (k) => {
          f === w && k.preventDefault(), a();
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: vn.icon, children: /* @__PURE__ */ i.jsx(x, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ i.jsx("span", { className: vn.label, children: _(y) }),
          f === w ? /* @__PURE__ */ i.jsx(Ey, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ i.jsx(Sy, { size: 16, className: vn.arrow, "aria-hidden": "true" })
        ]
      },
      w
    )) })
  ] }) });
}
const x_ = "_search_1h7xe_1", w_ = {
  search: x_
};
function Vr({ value: r, onChange: a }) {
  return /* @__PURE__ */ i.jsxs("div", { className: w_.search, children: [
    /* @__PURE__ */ i.jsx(lg, { size: 18, "aria-hidden": "true" }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "search",
        "aria-label": _("Поиск по названию"),
        placeholder: _("Поиск по названию"),
        value: r,
        onChange: (o) => a(o.target.value)
      }
    )
  ] });
}
const k_ = "_header_1pxju_1", S_ = "_bar_1pxju_9", C_ = "_tools_1pxju_18", j_ = "_title_1pxju_31", E_ = "_menuButton_1pxju_38", N_ = "_active_1pxju_76", rr = {
  header: k_,
  bar: S_,
  tools: C_,
  title: j_,
  menuButton: E_,
  active: N_
}, vt = ({ title: r = "", search: a, beforeSearch: o }) => {
  const c = nt(), [d, f] = v.useState(!1), p = v.useRef(null), m = () => {
    var g;
    f(!1), (g = p.current) == null || g.focus();
  };
  return v.useEffect(() => {
    c || f(!1);
  }, [c]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("header", { className: rr.header, children: [
      /* @__PURE__ */ i.jsxs("div", { className: rr.bar, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            "aria-label": _("Открыть меню Home Assistant"),
            className: rr.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ i.jsx(sp, { size: 20 })
          }
        ),
        /* @__PURE__ */ i.jsx("h1", { className: rr.title, children: _(r) }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            ref: p,
            "aria-label": _("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${rr.menuButton} ${d ? rr.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ i.jsx(Ky, { size: 20 })
          }
        )
      ] }),
      c && (o || a) && /* @__PURE__ */ i.jsxs("div", { className: rr.tools, children: [
        o,
        a && /* @__PURE__ */ i.jsx(Vr, { ...a })
      ] })
    ] }),
    c && /* @__PURE__ */ i.jsx(__, { open: d, onClose: m })
  ] });
};
function T_({ retry: r }) {
  const a = dr();
  let o = "dark";
  try {
    o = localStorage.getItem("ha-dialog-ui-theme") || "dark";
  } catch {
  }
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "appShell panelRecovery panelRenderRecovery",
      "data-theme": o,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "panelRecoveryNavigation", children: a ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(mt, {}),
          /* @__PURE__ */ i.jsx(vt, { title: _("Панель диалога") })
        ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            se,
            {
              variant: "ghost",
              "aria-label": _("Открыть меню Home Assistant"),
              onClick: (c) => c.currentTarget.dispatchEvent(
                new CustomEvent("hass-toggle-menu", {
                  bubbles: !0,
                  composed: !0
                })
              ),
              children: /* @__PURE__ */ i.jsx(sp, { size: 22 })
            }
          ),
          /* @__PURE__ */ i.jsx("nav", { "aria-label": _("Разделы панели"), children: [
            ["/", "Главная"],
            ["/timer", "Таймеры"],
            ["/alarm", "Будильники"],
            ["/monitor", "Радионяня"],
            ["/calls", "Звонки"],
            ["/settings", "Настройки"]
          ].map(([c, d]) => /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsx("main", { className: "panelRecoveryContent", children: /* @__PURE__ */ i.jsxs("div", { role: "alert", className: "panelRecoveryMessage", children: [
          /* @__PURE__ */ i.jsx("p", { children: _("Не удалось открыть панель. Попробуйте ещё раз.") }),
          /* @__PURE__ */ i.jsx(se, { onClick: r, children: _("Открыть повторно") })
        ] }) })
      ]
    }
  );
}
class pp extends v.Component {
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
  componentDidUpdate(o) {
    this.state.failed && o.resetKey !== this.props.resetKey && this.retry();
  }
  componentDidCatch(o, c) {
    console.error(
      "[ha_dialog_ui] Panel render failed",
      o,
      c.componentStack
    );
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ i.jsx(T_, { retry: this.retry }) : this.props.children;
  }
}
const b_ = "_container_x92qn_1", R_ = "_rows_x92qn_9", A_ = "_hidden_x92qn_20", P_ = "_overlay_x92qn_24", $_ = "_card_x92qn_32", M_ = "_title_x92qn_51", I_ = "_subtitle_x92qn_51", L_ = "_srOnly_x92qn_70", D_ = "_grid_x92qn_89", sn = {
  container: b_,
  rows: R_,
  hidden: A_,
  overlay: P_,
  card: $_,
  title: M_,
  subtitle: I_,
  srOnly: L_,
  grid: D_
};
function Gt({ loading: r, itemCount: a, append: o = !1, children: c, placeholderCount: d = 10, grid: f = !1, label: p = "Загрузка..." }) {
  const m = r && a > 0 && !o, g = r && /* @__PURE__ */ i.jsxs("div", { className: `${m ? sn.overlay : sn.rows} ${f ? sn.grid : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i.jsx("span", { className: sn.srOnly, children: _(p) }),
    Array.from({ length: m ? a : o && a > 0 ? 3 : d }, (w, y) => /* @__PURE__ */ i.jsxs("div", { className: sn.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ i.jsx("span", { className: sn.title }),
      /* @__PURE__ */ i.jsx("span", { className: sn.subtitle })
    ] }, y))
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: sn.container, "aria-busy": r, children: [
    /* @__PURE__ */ i.jsx("div", { className: `${sn.rows} ${m ? sn.hidden : ""}`, "aria-hidden": m || void 0, children: c }),
    g
  ] });
}
const O_ = "_loader_1tvqb_1", z_ = "_fullscreen_1tvqb_7", hf = {
  loader: O_,
  fullscreen: z_
}, _i = ({ label: r = "Загрузка...", fullscreen: a = !1 }) => /* @__PURE__ */ i.jsx("div", { className: `${hf.loader} ${a ? hf.fullscreen : ""}`, children: /* @__PURE__ */ i.jsx(Gt, { loading: !0, itemCount: 0, placeholderCount: 4, label: r }) }), H_ = "_error_fi1f1_1", F_ = {
  error: H_
}, Ye = ({ error: r, retry: a, busy: o = !1 }) => r ? /* @__PURE__ */ i.jsxs("div", { role: "alert", className: F_.error, children: [
  /* @__PURE__ */ i.jsx("p", { children: _(r) }),
  a && /* @__PURE__ */ i.jsx(se, { variant: "secondary", disabled: o, onClick: a, children: _("Повторить загрузку") })
] }) : null, mf = {
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
function Ct(r, a = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.") {
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? (r.code === "call_error" || r.code === "monitor_error" || r.code === "whisper_prompt_error") && "message" in r && typeof r.message == "string" ? r.message : mf[r.code] ?? a : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? mf.connection_lost : a;
}
function Yt() {
  const [r, a] = v.useState(null), [o, c] = v.useState(!1), [d, f] = v.useState(!1), p = v.useRef(0), m = v.useRef(null), g = v.useCallback(async (x, k = {}) => {
    if (k.exclusive && p.current > 0) return !1;
    p.current += 1, c(!0), a(null), f(!1);
    try {
      return await x(), m.current = null, !0;
    } catch (C) {
      return a(Ct(C, k.fallback)), m.current = k.retryable ? x : null, f(!!k.retryable), !1;
    } finally {
      p.current -= 1, c(p.current > 0);
    }
  }, []), w = v.useCallback(() => {
    m.current && g(m.current, { retryable: !0 });
  }, [g]), y = v.useCallback(() => {
    a(null), f(!1), m.current = null;
  }, []);
  return { error: r, busy: o, retry: d ? w : void 0, run: g, clearError: y };
}
const hp = v.createContext(null);
function dt() {
  const r = v.useContext(hp);
  if (!r)
    throw new Error(
      "DialogContext not initialized"
    );
  return r;
}
const W_ = "_toast_1g76h_1", B_ = "_warning_1g76h_43", vf = {
  toast: W_,
  warning: B_
};
function U_({ message: r, warning: a = !1, onClose: o }) {
  v.useEffect(() => {
    const d = setTimeout(o, 5e3);
    return () => clearTimeout(d);
  }, [r, a, o]);
  const c = a ? mg : by;
  return /* @__PURE__ */ i.jsxs("div", { role: "status", "aria-live": "polite", className: `${vf.toast} ${a ? vf.warning : ""}`, children: [
    /* @__PURE__ */ i.jsx(c, { size: 22, "aria-hidden": "true" }),
    /* @__PURE__ */ i.jsx("span", { children: r }),
    /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": _("Закрыть уведомление"), onClick: o, children: /* @__PURE__ */ i.jsx(ip, { size: 18 }) })
  ] });
}
const mp = {
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
function vp(r) {
  var a;
  return (a = Object.entries(mp).find(([o]) => r === o || r === _(o))) == null ? void 0 : a[1];
}
function xi(r) {
  const a = _(mp["Название команды"]);
  return r ? `${a}
UUID: ${r}` : a;
}
const V_ = "_labelRow_1w41x_1", q_ = "_helpButton_1w41x_12", Q_ = "_tooltip_1w41x_37", K_ = "_helpOverlay_1w41x_56", Y_ = "_sheetContent_1w41x_60", Ws = {
  labelRow: V_,
  helpButton: q_,
  tooltip: Q_,
  helpOverlay: K_,
  sheetContent: Y_
};
function eu({ label: r, htmlFor: a, className: o, hint: c }) {
  const d = c ?? vp(r);
  return /* @__PURE__ */ i.jsxs("div", { className: Ws.labelRow, children: [
    /* @__PURE__ */ i.jsx("label", { htmlFor: a, className: o, children: _(r) }),
    d && /* @__PURE__ */ i.jsx(Wr, { label: r, description: d })
  ] });
}
function Wr({ label: r, description: a = vp(r) ?? "" }) {
  var j, N;
  const o = nt(), [c, d] = v.useState(!1), [f, p] = v.useState({ left: 12, top: 12 }), m = v.useRef(null), g = v.useRef(null), w = v.useRef(), y = v.useId(), x = () => {
    var A;
    d(!1), o && ((A = m.current) == null || A.focus());
  }, k = () => {
    clearTimeout(w.current), d(!0);
  }, C = () => {
    w.current = setTimeout(() => d(!1), 150);
  };
  v.useEffect(() => () => clearTimeout(w.current), []), v.useEffect(() => {
    d(!1);
  }, [o]), v.useLayoutEffect(() => {
    if (!c || o || !m.current || !g.current) return;
    const A = m.current.getBoundingClientRect(), F = g.current.getBoundingClientRect();
    p({
      left: Math.max(12, Math.min(A.left, window.innerWidth - F.width - 12)),
      top: Math.max(12, A.bottom + 8 + F.height <= window.innerHeight - 12 ? A.bottom + 8 : A.top - F.height - 8)
    });
  }, [c, o]), v.useEffect(() => {
    if (!c) return;
    const A = (P) => {
      P.key === "Escape" ? (P.preventDefault(), P.stopImmediatePropagation(), x()) : o && P.key === "Tab" && P.preventDefault();
    };
    window.addEventListener("keydown", A, !0);
    const F = (P) => {
      var M;
      !o && !(P.target instanceof Node && ((M = g.current) != null && M.contains(P.target))) && d(!1);
    };
    return window.addEventListener("scroll", F, !0), window.addEventListener("resize", F), () => {
      window.removeEventListener("keydown", A, !0), window.removeEventListener("scroll", F, !0), window.removeEventListener("resize", F);
    };
  }, [c, o]);
  const b = ((j = m.current) == null ? void 0 : j.closest("[data-theme]")) ?? ((N = m.current) == null ? void 0 : N.getRootNode());
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        ref: m,
        type: "button",
        className: Ws.helpButton,
        "aria-label": `${_("Подсказка")}: ${_(r)}`,
        "aria-describedby": c && !o ? y : void 0,
        "aria-haspopup": o ? "dialog" : void 0,
        "aria-expanded": o ? c : void 0,
        onMouseEnter: () => {
          o || k();
        },
        onMouseLeave: () => {
          o || C();
        },
        onFocus: () => {
          o || k();
        },
        onBlur: () => {
          o || C();
        },
        onClick: k,
        children: /* @__PURE__ */ i.jsx(Ay, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && b && Zf.createPortal(o ? /* @__PURE__ */ i.jsx(Zl, { open: !0, onClose: x, className: Ws.helpOverlay, labelledBy: y, children: /* @__PURE__ */ i.jsxs("div", { className: Ws.sheetContent, children: [
      /* @__PURE__ */ i.jsx("h3", { id: y, children: _(r) }),
      /* @__PURE__ */ i.jsx("p", { children: _(a) }),
      /* @__PURE__ */ i.jsx(se, { autoFocus: !0, variant: "secondary", onClick: x, children: _("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: g,
        id: y,
        role: "tooltip",
        className: Ws.tooltip,
        style: f,
        onMouseEnter: k,
        onMouseLeave: C,
        children: _(a)
      }
    ), b)
  ] });
}
const G_ = "_field_1vuim_1", J_ = "_label_1vuim_10", X_ = "_inputWrapper_1vuim_18", Z_ = "_input_1vuim_18", e1 = "_passwordInput_1vuim_40", t1 = "_passwordToggle_1vuim_66", n1 = "_error_1vuim_95", r1 = "_errorText_1vuim_108", Hn = {
  field: G_,
  label: J_,
  inputWrapper: X_,
  input: Z_,
  passwordInput: e1,
  passwordToggle: t1,
  error: n1,
  errorText: r1
}, Ge = ({
  label: r,
  hint: a,
  error: o,
  disabled: c,
  className: d = "",
  id: f,
  type: p,
  ...m
}) => {
  const g = v.useId(), [w, y] = v.useState(!1), x = f ?? g, k = p === "password" && w ? "text" : p;
  return /* @__PURE__ */ i.jsxs("div", { className: Hn.field, children: [
    r && /* @__PURE__ */ i.jsx(eu, { label: r, htmlFor: x, className: Hn.label, hint: a }),
    /* @__PURE__ */ i.jsxs("div", { className: Hn.inputWrapper, children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          id: x,
          disabled: c,
          type: k,
          ...m,
          "aria-invalid": o ? !0 : m["aria-invalid"],
          "aria-describedby": [m["aria-describedby"], o ? `${x}-error` : void 0].filter(Boolean).join(" ") || void 0,
          className: `
            ${Hn.input}
            ${p === "password" ? Hn.passwordInput : ""}
            ${o ? Hn.error : ""}
            ${d}
          `
        }
      ),
      p === "password" && /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: Hn.passwordToggle,
          onClick: () => y((C) => !C),
          disabled: c,
          "aria-label": w ? "Hide password" : "Show password",
          children: w ? "🙈" : "👁"
        }
      )
    ] }),
    o && /* @__PURE__ */ i.jsx("span", { id: `${x}-error`, className: Hn.errorText, children: _(o) })
  ] });
}, s1 = "_field_1aipr_1", o1 = "_label_1aipr_8", i1 = "_textarea_1aipr_14", a1 = "_error_1aipr_46", l1 = "_errorText_1aipr_55", Os = {
  field: s1,
  label: o1,
  textarea: i1,
  error: a1,
  errorText: l1
}, lr = ({
  label: r,
  hint: a,
  error: o,
  className: c = "",
  id: d,
  ...f
}) => {
  const p = v.useId(), m = d ?? p;
  return /* @__PURE__ */ i.jsxs("div", { className: Os.field, children: [
    r && /* @__PURE__ */ i.jsx(eu, { label: r, htmlFor: m, className: Os.label, hint: a }),
    /* @__PURE__ */ i.jsx(
      "textarea",
      {
        id: m,
        ...f,
        className: `
          ${Os.textarea}
          ${o ? Os.error : ""}
          ${c}
        `
      }
    ),
    o && /* @__PURE__ */ i.jsx("span", { className: Os.errorText, children: _(o) })
  ] });
}, u1 = "_form_15zw4_1", c1 = "_actions_15zw4_8", yf = {
  form: u1,
  actions: c1
};
function d1() {
  const r = dt(), a = Yt(), [o, c] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [p, m] = v.useState(""), [g, w] = v.useState(!1), [y, x] = v.useState(null);
  v.useEffect(() => {
    let b = !0;
    return a.run(async () => {
      const j = await r.getData("get_whisper_prompt");
      b && (c({ ...j, initial_prompt: Array.isArray(j.initial_prompt) ? j.initial_prompt.join("; ") : j.initial_prompt }), m(j.url), w(!0));
    }, { retryable: !0 }), () => {
      b = !1;
    };
  }, [r, a.run]);
  const k = (b) => {
    c((j) => ({ ...j, ...b })), x(null);
  }, C = (b) => a.run(async () => {
    const j = await r.saveData({
      url: o.url,
      token: d,
      apply: b,
      initial_prompt: o.initial_prompt
    }, "save_whisper_prompt");
    c((N) => ({ ...N, initial_prompt: Array.isArray(j.initial_prompt) ? j.initial_prompt.join("; ") : j.initial_prompt, has_token: !!(d.trim() || N.has_token && o.url === p) })), x({ message: b ? j.applied ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен." : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно." : "Сохранено в Home Assistant.", warning: b && !j.applied }), m(o.url), f("");
  }, { exclusive: !0 });
  return /* @__PURE__ */ i.jsxs("section", { className: yf.form, children: [
    /* @__PURE__ */ i.jsx(Ye, { ...a }),
    !g && !a.error && /* @__PURE__ */ i.jsx(_i, {}),
    g && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        Ge,
        {
          label: _("Адрес API Whisper"),
          hint: _("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен."),
          placeholder: "http://192.168.1.10:10301",
          value: o.url,
          disabled: a.busy,
          onChange: (b) => k({ url: b.target.value })
        }
      ),
      /* @__PURE__ */ i.jsx(
        Ge,
        {
          label: _("Токен API Whisper"),
          hint: _("Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса."),
          type: "password",
          value: d,
          disabled: a.busy,
          autoComplete: "new-password",
          placeholder: o.has_token && o.url === p ? _("Токен сохранён; оставьте пустым, чтобы сохранить его") : "",
          onChange: (b) => {
            f(b.target.value), x(null);
          }
        }
      ),
      /* @__PURE__ */ i.jsx(
        lr,
        {
          label: _("Промпт распознавания"),
          hint: _("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели."),
          rows: 10,
          maxLength: 16e3,
          value: o.initial_prompt,
          disabled: a.busy,
          onChange: (b) => k({ initial_prompt: b.target.value })
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: yf.actions, children: [
        /* @__PURE__ */ i.jsx(se, { variant: "secondary", disabled: a.busy, onClick: () => void C(!1), children: _("Сохранить") }),
        /* @__PURE__ */ i.jsx(se, { disabled: a.busy || !o.url.trim(), onClick: () => void C(!0), children: _("Отправить в Whisper") })
      ] }),
      y && /* @__PURE__ */ i.jsx(U_, { message: _(y.message), warning: y.warning, onClose: () => x(null) })
    ] })
  ] });
}
const f1 = "_page_z6937_7", p1 = "_header_z6937_19", h1 = "_headerTop_z6937_24", m1 = "_heading_z6937_31", v1 = "_title_z6937_36", y1 = "_description_z6937_45", g1 = "_actions_z6937_52", _1 = "_list_z6937_57", x1 = "_innerTabs_z6937_88", w1 = "_innerTab_z6937_88", k1 = "_activeInnerTab_z6937_121", S1 = "_settingsActions_z6937_131", C1 = "_listSentinel_z6937_141", j1 = "_settingsSections_z6937_145", E1 = "_settingsSection_z6937_145", N1 = "_settingsMobileActions_z6937_171", T1 = "_connectionFields_z6937_191", b1 = "_collectionHeader_z6937_197", Z = {
  page: f1,
  header: p1,
  headerTop: h1,
  heading: m1,
  title: v1,
  description: y1,
  actions: g1,
  list: _1,
  innerTabs: x1,
  innerTab: w1,
  activeInnerTab: k1,
  settingsActions: S1,
  listSentinel: C1,
  settingsSections: j1,
  settingsSection: E1,
  settingsMobileActions: N1,
  connectionFields: T1,
  collectionHeader: b1
};
function R1() {
  const r = nt();
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(vt, { title: "Промпт распознавания" }),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !r && /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsx("div", { className: `${Z.header} ${Z.collectionHeader}`, children: /* @__PURE__ */ i.jsx("div", { className: Z.headerTop, children: /* @__PURE__ */ i.jsx("div", { className: Z.heading, children: !r && /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ i.jsx(d1, {})
    ] })
  ] });
}
const A1 = "_heading_1w2wz_1", P1 = "_note_1w2wz_6", $1 = "_entries_1w2wz_12", M1 = "_entry_1w2wz_19", I1 = "_line_1w2wz_27", L1 = "_error_1w2wz_40", D1 = "_body_1w2wz_49", Fn = {
  heading: A1,
  note: P1,
  entries: $1,
  entry: M1,
  line: I1,
  error: L1,
  body: D1
};
function O1() {
  const r = dt(), a = Yt(), [o, c] = v.useState([]);
  return v.useEffect(() => {
    let d = !0, f;
    const p = async () => {
      await a.run(async () => {
        const m = await r.getData("get_api_logs");
        d && (c(m.logs), f = setTimeout(() => {
          p();
        }, 3e3));
      }, { retryable: !0 });
    };
    return p(), () => {
      d = !1, clearTimeout(f);
    };
  }, [r, a.run]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(vt, { title: _("Логи") }),
    /* @__PURE__ */ i.jsxs("main", { className: Z.page, children: [
      /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsx("h1", { className: Fn.heading, children: _("Логи") }),
      /* @__PURE__ */ i.jsx("p", { className: Fn.note, children: _("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ i.jsx(Ye, { ...a }),
      !o.length && !a.busy && !a.error && /* @__PURE__ */ i.jsx("p", { children: _("Запросов к API пока нет.") }),
      /* @__PURE__ */ i.jsx("div", { className: Fn.entries, children: o.map((d) => /* @__PURE__ */ i.jsxs("article", { className: Fn.entry, children: [
        /* @__PURE__ */ i.jsxs("div", { className: Fn.line, children: [
          /* @__PURE__ */ i.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: Fn.line, children: [
          /* @__PURE__ */ i.jsx("span", { children: _({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ i.jsxs("span", { className: d.status >= 400 ? Fn.error : void 0, children: [
            "HTTP ",
            d.status
          ] }),
          d.duration_ms !== null && /* @__PURE__ */ i.jsxs("span", { children: [
            d.duration_ms,
            " ",
            _("мс")
          ] }),
          d.event && /* @__PURE__ */ i.jsx("code", { children: d.event })
        ] }),
        [["Тело запроса", d.request_body], ["Тело ответа", d.response_body]].map(
          ([f, p]) => p != null && /* @__PURE__ */ i.jsxs("details", { className: Fn.body, children: [
            /* @__PURE__ */ i.jsx("summary", { children: _(f) }),
            /* @__PURE__ */ i.jsx("pre", { children: JSON.stringify(p, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var $l = /* @__PURE__ */ new Map(), si = /* @__PURE__ */ new WeakMap(), gf = 0, z1;
function H1(r) {
  return r ? (si.has(r) || (gf += 1, si.set(r, gf.toString())), si.get(r)) : "0";
}
function F1(r) {
  return Object.keys(r).sort().filter(
    (a) => r[a] !== void 0
  ).map((a) => `${a}_${a === "root" ? H1(r.root) : r[a]}`).toString();
}
function W1(r) {
  const a = F1(r);
  let o = $l.get(a);
  if (!o) {
    const c = /* @__PURE__ */ new Map();
    let d;
    const f = new IntersectionObserver((p) => {
      p.forEach((m) => {
        var g;
        const w = m.isIntersecting && d.some((y) => m.intersectionRatio >= y);
        r.trackVisibility && typeof m.isVisible > "u" && (m.isVisible = w), [...(g = c.get(m.target)) != null ? g : []].forEach((y) => {
          y(w, m);
        });
      });
    }, r);
    d = f.thresholds || (Array.isArray(r.threshold) ? r.threshold : [r.threshold || 0]), o = {
      id: a,
      observer: f,
      elements: c
    }, $l.set(a, o);
  }
  return o;
}
function B1(r, a, o = {}, c = z1) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const g = r.getBoundingClientRect();
    return a(c, {
      isIntersecting: c,
      target: r,
      intersectionRatio: typeof o.threshold == "number" ? o.threshold : 0,
      time: 0,
      boundingClientRect: g,
      intersectionRect: g,
      rootBounds: g
    }), () => {
    };
  }
  const { id: d, observer: f, elements: p } = W1(o), m = p.get(r) || [];
  return p.has(r) || p.set(r, m), m.push(a), f.observe(r), function() {
    m.splice(m.indexOf(a), 1), m.length === 0 && (p.delete(r), f.unobserve(r)), p.size === 0 && (f.disconnect(), $l.delete(d));
  };
}
function U1({
  threshold: r,
  delay: a,
  trackVisibility: o,
  rootMargin: c,
  root: d,
  triggerOnce: f,
  skip: p,
  initialInView: m,
  fallbackInView: g,
  onChange: w
} = {}) {
  var y;
  const [x, k] = v.useState(null), C = v.useRef(w), b = v.useRef(m), [j, N] = v.useState({
    inView: !!m,
    entry: void 0
  });
  C.current = w, v.useEffect(
    () => {
      if (b.current === void 0 && (b.current = m), p || !x) return;
      let M;
      return M = B1(
        x,
        (W, H) => {
          const X = b.current;
          b.current = W, !(X === void 0 && !W) && (N({
            inView: W,
            entry: H
          }), C.current && C.current(W, H), H.isIntersecting && f && M && (M(), M = void 0));
        },
        {
          root: d,
          rootMargin: c,
          threshold: r,
          // @ts-expect-error
          trackVisibility: o,
          delay: a
        },
        g
      ), () => {
        M && M();
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
      o,
      g,
      a
    ]
  );
  const A = (y = j.entry) == null ? void 0 : y.target, F = v.useRef(void 0);
  !x && A && !f && !p && F.current !== A && (F.current = A, N({
    inView: !!m,
    entry: void 0
  }), b.current = m);
  const P = [k, j.inView, j.entry];
  return P.ref = P[0], P.inView = P[1], P.entry = P[2], P;
}
function qr(r, a, o, c) {
  const { ref: d, inView: f } = U1({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [p, m] = v.useState(!1);
  return v.useEffect(() => {
    !a && (r == null ? void 0 : r.page) === 1 && m(!0);
  }, [a, r]), v.useEffect(() => {
    p && c && f && !a && r && r.page < r.total_pages && o(r.page + 1, !0);
  }, [p, c, f, a, r, o]), d;
}
const Cl = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function yp(r) {
  const a = dt(), [o, c] = v.useState(null), [d, f] = v.useState(""), p = v.useRef(""), m = v.useRef(0), [g, w] = v.useState(!0), [y, x] = v.useState(null), k = v.useRef(), C = v.useRef(1), b = v.useRef(!1), j = v.useRef(), N = v.useCallback(async (P, M = !1) => {
    const W = ++m.current, H = p.current.trim(), X = P === void 0 && b.current, V = P ?? C.current;
    x(null), w(!0);
    try {
      let G = Cl(await a.getPage(r, V, void 0, H));
      const xe = Math.max(1, G.total_pages);
      if (V > xe && (G = Cl(await a.getPage(r, xe, void 0, H))), X && G.page > 1) {
        const fe = await Promise.all(Array.from({ length: G.page - 1 }, (he, me) => a.getPage(r, me + 1, void 0, H).then(Cl)));
        G = { ...G, data: [...fe.flatMap((he) => he.data), ...G.data] };
      }
      if (W !== m.current) return;
      X || (b.current = M), k.current = void 0, C.current = G.page, c((fe) => M && fe ? { ...G, data: [...fe.data, ...G.data] } : G);
    } catch (G) {
      if (W !== m.current) return;
      k.current = { page: P, append: M }, x(Ct(G, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      W === m.current && w(!1);
    }
  }, [a, r]);
  v.useEffect(() => {
    const P = j.current !== r;
    if (j.current = r, !P && p.current === d) return;
    p.current = d, C.current = 1, b.current = !1, m.current += 1, w(!0);
    const M = window.setTimeout(() => {
      N(1);
    }, P ? 0 : 250);
    return () => window.clearTimeout(M);
  }, [r, N, d]);
  const A = v.useCallback((P) => {
    c((M) => M && { ...M, data: P(M.data) });
  }, []);
  return { query: d, setQuery: f, page: o, loading: g, loadPage: N, updateItems: A, error: y, retry: () => {
    var P, M;
    N((P = k.current) == null ? void 0 : P.page, ((M = k.current) == null ? void 0 : M.append) ?? !1);
  } };
}
function V1() {
  const r = dt(), { query: a, setQuery: o, page: c, loading: d, loadPage: f, error: p, retry: m } = yp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: a, setQuery: o, error: p, retry: m, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (b) => {
    await r.saveData(b, "save_script_action"), await f();
  }, updateScript: async (b, j) => {
    await r.updateRecord(b, "update_script_action", j), await f();
  }, getScriptAction: async (b) => (await r.getRecord(b, "get_script_action")).data, deleteScriptAction: async (b) => {
    await r.deleteRecord(b, "delete_script_action"), await f();
  } };
}
const q1 = "_subtitle_c1esh_1", Q1 = "_card_c1esh_6", K1 = "_content_c1esh_32", Y1 = "_title_c1esh_40", G1 = "_arrow_c1esh_46", J1 = "_titleOnly_c1esh_57", zr = {
  subtitle: q1,
  card: Q1,
  content: K1,
  title: Y1,
  arrow: G1,
  titleOnly: J1
}, Qr = ({
  title: r,
  subTitle: a,
  onClick: o
}) => /* @__PURE__ */ i.jsxs(
  "button",
  {
    type: "button",
    className: `${zr.card} ${a ? "" : zr.titleOnly}`,
    onClick: o,
    children: [
      /* @__PURE__ */ i.jsxs("div", { className: zr.content, children: [
        /* @__PURE__ */ i.jsx("div", { className: zr.title, children: r }),
        a && /* @__PURE__ */ i.jsx("div", { className: zr.subtitle, children: _(a) })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: zr.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), X1 = "_pagination_r0e80_1", Z1 = "_button_r0e80_10", e0 = "_label_r0e80_34", t0 = "_pages_r0e80_40", n0 = "_active_r0e80_48", sr = {
  pagination: X1,
  button: Z1,
  label: e0,
  pages: t0,
  active: n0
}, Kr = ({ page: r, totalPages: a, onChange: o }) => {
  if (a <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, p) => r + p - 2).filter((f) => f >= 1 && f <= a),
    a
  ])).sort((f, p) => f - p), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= a && f !== r && o(f);
  };
  return /* @__PURE__ */ i.jsx("nav", { className: sr.pagination, "aria-label": _("Страницы списка"), children: /* @__PURE__ */ i.jsxs("div", { className: sr.pages, children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: sr.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": _("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, p) => /* @__PURE__ */ i.jsxs(Pf.Fragment, { children: [
      p > 0 && f - c[p - 1] > 1 && /* @__PURE__ */ i.jsx("span", { className: sr.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: `${sr.button} ${f === r ? sr.active : ""}`,
          "aria-label": `${_("Страница")} ${f}`,
          "aria-current": f === r ? "page" : void 0,
          onClick: () => d(f),
          children: f
        }
      )
    ] }, f)),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: sr.button,
        disabled: r >= a,
        onClick: () => d(r + 1),
        "aria-label": _("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, r0 = "_overlay_1m3e5_1", s0 = "_modal_1m3e5_1", o0 = "_header_1m3e5_1", i0 = "_body_1m3e5_1", a0 = "_footer_1m3e5_1", l0 = "_sm_1m3e5_32", u0 = "_md_1m3e5_36", c0 = "_lg_1m3e5_40", d0 = "_xl_1m3e5_44", f0 = "_title_1m3e5_59", p0 = "_close_1m3e5_86", h0 = "_fields_1m3e5_116", m0 = "_suspended_1m3e5_124", v0 = "_heading_1m3e5_128", St = {
  overlay: r0,
  modal: s0,
  header: o0,
  body: i0,
  footer: a0,
  sm: l0,
  md: u0,
  lg: c0,
  xl: d0,
  title: f0,
  close: p0,
  fields: h0,
  suspended: m0,
  heading: v0
}, Jt = ({
  open: r,
  suspended: a = !1,
  feedback: o,
  onClose: c,
  onBack: d,
  title: f,
  dialogLabel: p,
  subtitle: m,
  footer: g,
  children: w,
  size: y = "md"
}) => (fp(r, c), v.useEffect(() => {
  if (!r || a) return;
  document.body.style.overflow = "hidden";
  const x = (k) => {
    k.key === "Escape" && c();
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
}, [r, c, a]), r ? /* @__PURE__ */ i.jsx(
  "div",
  {
    className: `${St.overlay} ${a ? St.suspended : ""}`,
    "aria-hidden": a || void 0,
    onClick: c,
    children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `${St.modal} ${St[y]}`,
        role: p ? "dialog" : void 0,
        "aria-modal": p ? !0 : void 0,
        "aria-label": p,
        onClick: (x) => x.stopPropagation(),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: St.header, children: [
            d && /* @__PURE__ */ i.jsx(
              se,
              {
                variant: "ghost",
                className: St.close,
                "aria-label": _("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ i.jsx(wy, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (m ? /* @__PURE__ */ i.jsxs("div", { className: St.heading, children: [
              /* @__PURE__ */ i.jsx("h2", { className: St.title, children: _(f) }),
              m
            ] }) : /* @__PURE__ */ i.jsx("h2", { className: St.title, children: _(f) })),
            /* @__PURE__ */ i.jsx(
              se,
              {
                variant: "ghost",
                className: St.close,
                "aria-label": p ? _("Закрыть") : void 0,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: St.body, children: [
            /* @__PURE__ */ i.jsx(Ye, { ...o }),
            /* @__PURE__ */ i.jsx("fieldset", { className: St.fields, disabled: o == null ? void 0 : o.busy, children: w })
          ] }),
          g && /* @__PURE__ */ i.jsx("div", { className: St.footer, children: /* @__PURE__ */ i.jsx("fieldset", { className: St.fields, disabled: o == null ? void 0 : o.busy, children: g }) })
        ]
      }
    )
  }
) : null), y0 = "_content_eng69_1", g0 = "_title_eng69_7", _0 = "_actions_eng69_14", x0 = "_row_eng69_20", w0 = "_identifier_eng69_31", zs = {
  content: y0,
  title: g0,
  actions: _0,
  row: x0,
  identifier: w0
}, tu = ({ open: r, title: a, uuid: o, onClose: c, actions: d, size: f = "md", layout: p = "column" }) => {
  const m = nt(), g = o ? /* @__PURE__ */ i.jsx("p", { className: zs.identifier, children: o }) : null, w = /* @__PURE__ */ i.jsxs("div", { className: zs.content, children: [
    m && /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("h3", { className: zs.title, children: a }),
      g
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: `${zs.actions} ${p === "row" && !m ? zs.row : ""}`, children: d.map((y) => /* @__PURE__ */ i.jsx(se, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: _(y.label) }, y.label)) })
  ] });
  return m ? /* @__PURE__ */ i.jsx(Zl, { open: r, onClose: c, children: w }) : /* @__PURE__ */ i.jsx(Jt, { open: r, onClose: c, title: a, subtitle: g, size: f, children: w });
}, k0 = ({ uuid: r, title: a, open: o, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ i.jsx(tu, { open: o, title: a, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, S0 = "_accordion_5owbj_1", C0 = "_header_5owbj_7", j0 = "_content_5owbj_20", oi = {
  accordion: S0,
  header: C0,
  content: j0
}, E0 = ({
  title: r,
  defaultOpen: a = !1,
  children: o
}) => {
  const [c, d] = v.useState(a);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: oi.accordion,
      "data-open": c,
      children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            className: oi.header,
            onClick: () => d((f) => !f),
            "aria-expanded": c,
            children: [
              /* @__PURE__ */ i.jsx("span", { children: _(r) }),
              /* @__PURE__ */ i.jsx("span", { className: oi.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ i.jsx("div", { className: oi.content, children: o })
      ]
    }
  );
}, N0 = "_wrapper_1fgdg_1", T0 = "_dropdown_1fgdg_10", b0 = "_option_1fgdg_22", R0 = "_title_1fgdg_46", A0 = "_uuid_1fgdg_51", P0 = "_hint_1fgdg_52", or = {
  wrapper: N0,
  dropdown: T0,
  option: b0,
  title: R0,
  uuid: A0,
  hint: P0
}, $0 = ({
  label: r = "uuid",
  value: a,
  selectedTitle: o,
  searchSource: c = ["search_assistant_commands"],
  minQueryLength: d = 2,
  onChange: f,
  onSelect: p,
  getSelectedValue: m,
  error: g
}) => {
  const w = dt(), y = JSON.stringify(c), x = v.useMemo(() => JSON.parse(y), [y]), [k, C] = v.useState(null), b = m ? "" : o || ((k == null ? void 0 : k.uuid) === a ? k.title : "");
  v.useEffect(() => {
    var K;
    if (!a || o || m || (K = fe.current) != null && K.contains(document.activeElement)) return;
    let $ = !1;
    return (async () => {
      var B;
      try {
        for (const E of x) {
          const ie = (B = (await w.searchAssistantCommands(a, E)).data) == null ? void 0 : B.find((oe) => oe.uuid === a);
          if (ie) {
            $ || C(ie);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      $ = !0;
    };
  }, [w, a, o, m, x]);
  const [j, N] = v.useState(null), [A, F] = v.useState(0), [P, M] = v.useState([]), [W, H] = v.useState(!1), [X, V] = v.useState(!1), [G, xe] = v.useState(!1), fe = v.useRef(null), [he, me] = v.useState({});
  v.useEffect(() => {
    var K, B;
    if (!W) return;
    const $ = () => {
      var _n, J;
      const E = (J = (_n = fe.current) == null ? void 0 : _n.querySelector("input")) == null ? void 0 : J.getBoundingClientRect();
      if (!E) return;
      const O = window.visualViewport, ie = ((O == null ? void 0 : O.offsetTop) ?? 0) + 8, oe = ((O == null ? void 0 : O.offsetTop) ?? 0) + ((O == null ? void 0 : O.height) ?? window.innerHeight) - 8, ge = Math.min(oe, Math.max(ie, E.bottom + 6)), ke = Math.min(oe, Math.max(ie, E.top - 6)), Ne = oe - ge, Ce = ke - ie, Ae = Ne < 180 && Ce > Ne, ot = Math.min(260, Ae ? Ce : Ne), Xt = Math.max(8, E.left);
      me({
        left: Xt,
        width: Math.max(0, Math.min(E.width, window.innerWidth - Xt - 8)),
        top: Ae ? ke : ge,
        transform: Ae ? "translateY(-100%)" : void 0,
        maxHeight: ot
      });
    };
    return $(), window.addEventListener("scroll", $, !0), window.addEventListener("resize", $), (K = window.visualViewport) == null || K.addEventListener("resize", $), (B = window.visualViewport) == null || B.addEventListener("scroll", $), () => {
      var E, O;
      window.removeEventListener("scroll", $, !0), window.removeEventListener("resize", $), (E = window.visualViewport) == null || E.removeEventListener("resize", $), (O = window.visualViewport) == null || O.removeEventListener("scroll", $);
    };
  }, [W]);
  const we = v.useRef(0), z = v.useRef(""), le = v.useMemo(() => a.trim(), [a]);
  v.useEffect(() => {
    if (!le) {
      we.current += 1, N(null), z.current = "", M([]), H(!1);
      return;
    }
    if (le.length < d) {
      we.current += 1, N(null), M([]), H(!1);
      return;
    }
    if (!G || b) {
      we.current += 1, H(!1), V(!1);
      return;
    }
    if (z.current === le)
      return;
    z.current = le;
    const $ = we.current + 1;
    we.current = $;
    const K = window.setTimeout(async () => {
      V(!0), N(null);
      try {
        let B = [];
        for (const E of x) {
          const O = await w.searchAssistantCommands(le, E), ie = Array.isArray(O == null ? void 0 : O.data) ? O.data : [];
          B.push(...ie);
        }
        if (we.current !== $)
          return;
        M(B), H(B.length > 0);
      } catch (B) {
        we.current === $ && (N(Ct(B)), M([]), H(!1));
      } finally {
        we.current === $ && V(!1);
      }
    }, 250);
    return () => window.clearTimeout(K);
  }, [w, le, x, d, G, A, b]);
  const de = ($) => {
    const K = m ? m($) : $.uuid;
    we.current += 1, C($), z.current = "", V(!1), M([]), f(K), p == null || p($), H(!1);
  };
  return /* @__PURE__ */ i.jsxs("div", { ref: fe, className: or.wrapper, children: [
    /* @__PURE__ */ i.jsx(
      Ge,
      {
        label: r,
        value: b || a,
        autoComplete: "off",
        placeholder: _("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          xe(!1), window.setTimeout(() => H(!1), 150);
        },
        onFocus: () => {
          xe(!0), H(!b && P.length > 0);
        },
        onChange: ($) => {
          C(null), f($.target.value);
        }
      }
    ),
    W && fe.current && Zf.createPortal(
      /* @__PURE__ */ i.jsx("div", { role: "listbox", className: or.dropdown, style: he, children: P.map(($) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: or.option,
          onMouseDown: (K) => K.preventDefault(),
          onClick: () => de($),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: or.title, children: $.title || "Без названия" }),
            /* @__PURE__ */ i.jsx("span", { className: or.uuid, children: $.uuid }),
            $.mappingType && /* @__PURE__ */ i.jsxs("span", { className: or.uuid, children: [
              _("mappingType:"),
              $.mappingType
            ] })
          ]
        },
        $.uuid
      )) }),
      fe.current.closest("[data-theme]") ?? fe.current
    ),
    /* @__PURE__ */ i.jsx(Ye, { error: j, busy: X, retry: () => {
      var $, K;
      z.current = "", (K = ($ = fe.current) == null ? void 0 : $.querySelector("input")) == null || K.focus(), F((B) => B + 1);
    } }),
    X && /* @__PURE__ */ i.jsx("span", { className: or.hint, children: _("Поиск...") })
  ] });
}, M0 = "_field_1esqu_1", I0 = "_row_1esqu_5", L0 = "_inputWrapper_1esqu_11", D0 = "_clearButton_1esqu_22", O0 = "_rowError_1esqu_31", Qt = {
  field: M0,
  row: I0,
  inputWrapper: L0,
  clearButton: D0,
  rowError: O0
}, z0 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function jl({ field: r, value: a, error: o, onChange: c }) {
  return Ur() ? /* @__PURE__ */ i.jsx(Ge, { label: _(r), value: a, error: o, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ i.jsx(
    $0,
    {
      label: _(r),
      value: a,
      error: o,
      searchSource: [z0[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const H0 = ({
  condition: r,
  index: a,
  defaultOpen: o,
  onChange: c,
  onDelete: d,
  totalCount: f,
  errors: p
}) => {
  const m = r.children_type !== void 0, g = r.children_direct_type !== void 0, w = () => {
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
  return /* @__PURE__ */ i.jsxs(
    E0,
    {
      title: `${_("Условие")} ${a + 1}`,
      defaultOpen: o,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: Qt.field, children: /* @__PURE__ */ i.jsx(
          jl,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: p == null ? void 0 : p.parent_type,
            onChange: (x) => c({ ...r, parent_type: x })
          }
        ) }),
        /* @__PURE__ */ i.jsx("div", { className: Qt.field, children: m ? /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `${Qt.row} ${p != null && p.children_type ? Qt.rowError : ""}`,
            children: [
              /* @__PURE__ */ i.jsx("div", { className: Qt.inputWrapper, children: /* @__PURE__ */ i.jsx(
                jl,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: p == null ? void 0 : p.children_type,
                  onChange: (x) => c({ ...r, children_type: x })
                }
              ) }),
              /* @__PURE__ */ i.jsx(
                se,
                {
                  type: "button",
                  variant: "ghost",
                  className: Qt.clearButton,
                  "aria-label": _("Убрать второстепенную команду"),
                  onClick: w,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ i.jsx(
          se,
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
        /* @__PURE__ */ i.jsx("div", { className: Qt.field, children: g ? /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `${Qt.row} ${p != null && p.children_direct_type ? Qt.rowError : ""}`,
            children: [
              /* @__PURE__ */ i.jsx("div", { className: Qt.inputWrapper, children: /* @__PURE__ */ i.jsx(
                jl,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: p == null ? void 0 : p.children_direct_type,
                  onChange: (x) => c({ ...r, children_direct_type: x })
                }
              ) }),
              /* @__PURE__ */ i.jsx(
                se,
                {
                  type: "button",
                  variant: "ghost",
                  className: Qt.clearButton,
                  "aria-label": _("Убрать прямую команду"),
                  onClick: y,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ i.jsx(
          se,
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
        f > 1 && /* @__PURE__ */ i.jsx(
          se,
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
}, F0 = "_dropdown_3mupk_2", W0 = "_label_3mupk_11", B0 = "_wrapper_3mupk_19", U0 = "_select_3mupk_23", V0 = "_arrow_3mupk_65", q0 = "_error_3mupk_85", Q0 = "_errorText_3mupk_103", ir = {
  dropdown: F0,
  label: W0,
  wrapper: B0,
  select: U0,
  arrow: V0,
  error: q0,
  errorText: Q0
};
function Fr({
  label: r,
  options: a,
  value: o = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: f
}) {
  const p = v.useId();
  return /* @__PURE__ */ i.jsxs("div", { className: ir.dropdown, children: [
    r && /* @__PURE__ */ i.jsx(
      "label",
      {
        htmlFor: p,
        className: ir.label,
        children: _(r)
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: ir.wrapper, children: [
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          id: p,
          className: `
            ${ir.select}
            ${d ? ir.error : ""}
          `,
          value: o,
          onChange: (m) => f == null ? void 0 : f(m.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: _(c) }),
            a.map((m) => /* @__PURE__ */ i.jsx(
              "option",
              {
                value: m.value,
                children: m.label
              },
              m.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(
        np,
        {
          size: 18,
          className: ir.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ i.jsx("span", { className: ir.errorText, children: _(d) })
  ] });
}
const K0 = "_form_1ogov_1", Y0 = "_section_1ogov_7", G0 = "_sectionTitle_1ogov_18", J0 = "_conditions_1ogov_27", X0 = "_addCondition_1ogov_33", Hr = {
  form: K0,
  section: Y0,
  sectionTitle: G0,
  conditions: J0,
  addCondition: X0
}, Z0 = ({
  open: r,
  feedback: a,
  initialData: o,
  availableScripts: c,
  isEdit: d = !1,
  loading: f = !1,
  onSave: p,
  onCancel: m
}) => {
  const [g, w] = v.useState({
    uuid: "",
    name: "",
    script_entity_id: "",
    conditions: [
      {
        parent_type: ""
      }
    ]
  }), [y, x] = v.useState({
    conditions: []
  });
  v.useEffect(() => {
    w({
      uuid: (o == null ? void 0 : o.uuid) || "",
      name: (o == null ? void 0 : o.name) || "",
      script_entity_id: (o == null ? void 0 : o.script_entity_id) || "",
      conditions: (o == null ? void 0 : o.conditions) || [
        {
          parent_type: ""
        }
      ]
    }), x({
      conditions: []
    });
  }, [o, r]);
  const k = (A) => {
    w(A);
  }, C = () => {
    k({
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
    P[A] = F, k({
      ...g,
      conditions: P
    });
  }, j = (A) => {
    const F = g.conditions.filter(
      (P, M) => M !== A
    );
    k({
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
        const M = {};
        F.parent_type.trim() || (M.parent_type = "Обязательное поле"), F.children_type !== void 0 && !F.children_type.trim() && (M.children_type = "Обязательное поле"), F.children_direct_type !== void 0 && !F.children_direct_type.trim() && (M.children_direct_type = "Обязательное поле"), A.conditions[P] = M;
      }
    ), x(A), !A.name && !A.script_entity_id && A.conditions.every(
      (F) => Object.keys(F).length === 0
    );
  };
  return /* @__PURE__ */ i.jsx(
    Jt,
    {
      feedback: a,
      open: r,
      onClose: m,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ i.jsx(
        se,
        {
          disabled: f,
          onClick: () => {
            N() && (p == null || p(g));
          },
          children: _("Сохранить")
        }
      ),
      children: /* @__PURE__ */ i.jsxs("div", { className: Hr.form, children: [
        /* @__PURE__ */ i.jsxs("div", { className: Hr.section, children: [
          /* @__PURE__ */ i.jsx(
            Ge,
            {
              label: _("Название"),
              value: g.name,
              error: y.name,
              onChange: (A) => k({
                ...g,
                name: A.target.value
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            Fr,
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
              onSelect: (A) => k({
                ...g,
                script_entity_id: A
              })
            }
          )
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: Hr.section, children: [
          /* @__PURE__ */ i.jsx("h3", { className: Hr.sectionTitle, children: _("Условия") }),
          /* @__PURE__ */ i.jsx("div", { className: Hr.conditions, children: g.conditions.map(
            (A, F, P) => /* @__PURE__ */ i.jsx(
              H0,
              {
                index: F,
                condition: A,
                defaultOpen: !d,
                errors: y.conditions[F],
                onChange: (M) => b(
                  F,
                  M
                ),
                onDelete: () => j(F),
                totalCount: P.length
              },
              F
            )
          ) }),
          /* @__PURE__ */ i.jsx(
            se,
            {
              type: "button",
              className: Hr.addCondition,
              onClick: C,
              children: _("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, ex = "_container_9wouv_1", tx = "_visible_9wouv_20", _f = {
  container: ex,
  visible: tx
}, fr = ({
  children: r,
  offset: a = 10,
  startVisible: o = !1
}) => {
  const c = v.useRef(null), [d, f] = v.useState(o);
  return v.useEffect(() => {
    var x;
    const p = (x = c.current) == null ? void 0 : x.getRootNode(), m = p instanceof ShadowRoot ? p.host : null, g = () => window.scrollY + ((m == null ? void 0 : m.scrollTop) ?? 0);
    let w = g();
    const y = () => {
      const k = g();
      k !== w && (k > w && k > a ? f(!0) : f(!1), w = k);
    };
    return m == null || m.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("scroll", y, {
      passive: !0
    }), () => {
      m == null || m.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
  }, [a]), /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: c,
      className: `${_f.container} ${d ? _f.visible : ""}`,
      children: r
    }
  );
}, nx = () => {
  const r = Yt(), a = Ur(), o = a ? "Действия удалённых команд" : "Запуск скриптов", c = nt(), [d, f] = v.useState(), [p, m] = v.useState(!1), [g, w] = v.useState(!1), [y, x] = v.useState({ uuid: "", title: "" }), [k, C] = v.useState(!1), {
    query: b,
    setQuery: j,
    error: N,
    retry: A,
    loading: F,
    scripts: P,
    getAvailableScripts: M,
    loadScripts: W,
    saveScript: H,
    updateScript: X,
    getScriptAction: V,
    deleteScriptAction: G
  } = V1(), xe = qr(P, F || !!N, W, c), fe = { error: r.error ?? N, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), A();
  }) : A }, he = () => {
    r.clearError(), f(void 0), C(!1), m(!0);
  }, me = (de) => {
    w(!0), x(de);
  }, we = (de) => r.run(async () => {
    C(!0);
    const $ = await V(
      de
    );
    f($), m(!0);
  }, { retryable: !0 }), z = async (de) => {
    await r.run(async () => {
      if (k) {
        if (!de.uuid) return;
        const { uuid: $, ...K } = de;
        await X(de.uuid, K);
      } else
        await H(de);
      m(!1);
    }, { exclusive: !0 });
  }, le = (de) => r.run(async () => {
    de && await G(de);
  }, { exclusive: !0 });
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      vt,
      {
        search: { value: b, onChange: j },
        title: o
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !p && /* @__PURE__ */ i.jsx(Ye, { ...fe }),
      /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: `${Z.header} ${Z.collectionHeader}`, children: [
        /* @__PURE__ */ i.jsxs("div", { className: Z.heading, children: [
          c ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _(o) }),
          /* @__PURE__ */ i.jsx("p", { className: Z.description, children: _(a ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: Z.actions, children: c ? /* @__PURE__ */ i.jsx(fr, { children: /* @__PURE__ */ i.jsx(
          se,
          {
            variant: "primary",
            onClick: he,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx(
          se,
          {
            variant: "primary",
            onClick: he,
            children: _("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ i.jsx(Vr, { value: b, onChange: j })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: Z.list, children: [
        /* @__PURE__ */ i.jsx(Gt, { loading: F, itemCount: (P == null ? void 0 : P.script_actions.length) ?? 0, append: c, children: P == null ? void 0 : P.script_actions.map((de) => /* @__PURE__ */ i.jsx(
          Qr,
          {
            title: de.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => me(de)
          },
          de.uuid
        )) }),
        !F && !N && b.trim() && !(P != null && P.script_actions.length) && /* @__PURE__ */ i.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        c ? /* @__PURE__ */ i.jsx("div", { ref: xe, className: Z.listSentinel }) : /* @__PURE__ */ i.jsx(i.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx(
        Kr,
        {
          page: (P == null ? void 0 : P.page) || 1,
          totalPages: (P == null ? void 0 : P.total_pages) || 1,
          onChange: W
        }
      ),
      /* @__PURE__ */ i.jsx(
        k0,
        {
          uuid: y.uuid,
          open: g,
          title: y.title,
          onClose: () => w(!1),
          onEdit: we,
          onDelete: le
        }
      ),
      /* @__PURE__ */ i.jsx(
        Z0,
        {
          feedback: fe,
          open: p,
          initialData: d,
          isEdit: k,
          availableScripts: M(),
          loading: F,
          onCancel: () => m(!1),
          onSave: async (de) => {
            await z(de);
          }
        }
      )
    ] })
  ] });
}, gp = (r) => ({
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
function _p(r) {
  const a = dt(), { query: o, setQuery: c, page: d, loading: f, loadPage: p, updateItems: m, error: g, retry: w } = yp(r);
  return { query: o, setQuery: c, error: g, retry: w, loading: f, commands: d, loadCommands: p, saveCommand: (j, N) => a.saveData(N, j), updateCommand: async (j, N) => {
    if (!N.uuid) return;
    const { uuid: A, ...F } = N, P = await a.updateRecord(A, j, F);
    return await p(), P;
  }, deleteCommand: (j, N) => a.deleteRecord(N, j), setCommandStatus: async (j, N, A) => {
    const F = await a.updateRecordStatus(j, N, A);
    return m((P) => P.map((M) => M.uuid === N ? { ...M, status: A } : M)), F;
  }, getCommandDetails: (j, N) => a.getRecord(N, j) };
}
const rx = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function wi(r, a) {
  const o = rx[r], { query: c, setQuery: d, commands: f, loading: p, loadCommands: m, getCommandDetails: g, saveCommand: w, updateCommand: y, deleteCommand: x, setCommandStatus: k, error: C, retry: b } = _p(o.list), j = Yt(), [N, A] = v.useState(!1), [F, P] = v.useState(!1), [M, W] = v.useState(a), [H, X] = v.useState(null), V = () => {
    j.clearError(), P(!1), W(a()), A(!0);
  }, G = (we) => j.run(async () => {
    const z = await g(o.detail, we);
    P(!0);
    const le = { ...z.data, status: z.data.status ?? !1 };
    for (const de of ["componentDialog", "subComponentDialog"]) {
      const $ = le[de];
      $ && ($.nextAction = ($.nextAction ?? []).filter(
        (K) => !K.actionTypeComponent || ["children", "custom"].includes(K.actionTypeComponent)
      ));
    }
    W(le), A(!0);
  }, { retryable: !0 }), xe = (we, z) => j.run(async () => {
    o.status && await k(o.status, we, z);
  }, { exclusive: !0 }), fe = (we) => j.run(async () => {
    await x(o.remove, we), await m();
  }, { exclusive: !0 }), he = () => j.run(async () => {
    await w(o.create, M), A(!1), await m();
  }, { exclusive: !0 }), me = () => j.run(async () => {
    await y(o.update, M), A(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: j.error ?? C, busy: j.busy, retry: j.error ? j.retry ?? (() => {
      j.clearError(), b();
    }) : b },
    listError: C,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: N,
    setModalOpen: A,
    isEdit: F,
    formData: M,
    setFormData: W,
    actionsCommand: H,
    setActionsCommand: X,
    openCreateModal: V,
    openEditModal: G,
    handleToggleStatus: xe,
    handleDelete: fe,
    handleCreate: he,
    handleUpdate: me
  };
}
const sx = "_field_1iloj_1", ox = "_label_1iloj_8", ix = "_select_1iloj_14", El = {
  field: sx,
  label: ox,
  select: ix
}, gn = ({
  label: r,
  hint: a,
  options: o,
  className: c = "",
  id: d,
  value: f,
  ...p
}) => {
  const m = v.useId(), g = d ?? m, w = f == null ? "" : String(f), y = !w || o.some((x) => x.value === w);
  return /* @__PURE__ */ i.jsxs("div", { className: El.field, children: [
    r && /* @__PURE__ */ i.jsx(eu, { label: r, htmlFor: g, className: El.label, hint: a }),
    /* @__PURE__ */ i.jsxs(
      "select",
      {
        id: g,
        ...p,
        value: w,
        className: `${El.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ i.jsx("option", { value: w, children: w }),
          o.map((x) => /* @__PURE__ */ i.jsx("option", { value: x.value, disabled: x.disabled, children: _(x.label) }, x.value))
        ]
      }
    )
  ] });
};
function Ml({ kind: r, value: a, title: o, onSelect: c }) {
  const d = dt(), [f, p] = v.useState([]), [m, g] = v.useState(!0), [w, y] = v.useState(!1), [x, k] = v.useState(null), [C, b] = v.useState(0), j = v.useRef(null), N = v.useRef(0);
  v.useEffect(() => () => {
    N.current += 1;
  }, []), v.useEffect(() => {
    let M = !1;
    g(!0), k(null);
    const W = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(W.map((H) => d.getAllRecords(H))).then((H) => {
      M || p([...new Map(H.flat().map((X) => [X.uuid, X])).values()]);
    }).catch((H) => {
      M || (k(Ct(H)), j.current = () => b((X) => X + 1));
    }).finally(() => {
      M || g(!1);
    }), () => {
      M = !0;
    };
  }, [d, r, C]), v.useEffect(() => {
    a && o && p((M) => M.map((W) => W.uuid === a ? { ...W, title: o } : W));
  }, [a, o]);
  const A = async (M) => {
    var X;
    if (!M) {
      N.current += 1, k(null), c({ uuid: "", title: "" });
      return;
    }
    const W = f.find((V) => V.uuid === M);
    if (!W) return;
    const H = ++N.current;
    if (k(null), r !== "direct") {
      c(W);
      return;
    }
    y(!0);
    try {
      const V = await d.getRecord(M, "get_assistant_sub_direct_control");
      H === N.current && c({ ...W, mappingType: ((X = V.data.directControl) == null ? void 0 : X.mappingType) ?? "" });
    } catch (V) {
      H === N.current && (k(Ct(V)), j.current = () => {
        A(M);
      });
    } finally {
      H === N.current && y(!1);
    }
  }, F = f.map((M) => ({ value: M.uuid, label: M.title || _("Без названия") }));
  a && !f.some((M) => M.uuid === a) && F.unshift({ value: a, label: o || _("Выбранная команда недоступна") });
  const P = _(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx(
      gn,
      {
        label: P,
        "aria-label": P,
        value: a,
        disabled: m || w,
        options: [{ value: "", label: _(m ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...F],
        onChange: (M) => {
          A(M.target.value);
        }
      }
    ),
    /* @__PURE__ */ i.jsx(Ye, { error: x, busy: m || w, retry: () => {
      var M;
      return (M = j.current) == null ? void 0 : M.call(j);
    } })
  ] });
}
const ax = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], lx = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], ux = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], cx = "_form_1a1tt_1", dx = "_field_1a1tt_7", fx = "_arrayItem_1a1tt_29", px = "_logicTabs_1a1tt_46", hx = "_sectionTitle_1a1tt_85", mx = "_footerActions_1a1tt_92", vx = "_phraseMode_1a1tt_106", yx = "_directTabLabel_1a1tt_122", gx = "_linkActions_1a1tt_126", tt = {
  form: cx,
  field: dx,
  arrayItem: fx,
  logicTabs: px,
  sectionTitle: hx,
  footerActions: mx,
  phraseMode: vx,
  directTabLabel: yx,
  linkActions: gx
}, xf = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), xp = ({
  open: r,
  feedback: a,
  onClose: o,
  title: c,
  formData: d,
  setFormData: f,
  onSave: p,
  onBack: m
}) => {
  const [g, w] = v.useState("");
  v.useEffect(() => {
    w("");
  }, [r, d.uuid]);
  const y = () => {
    var C;
    if (!((C = d.title) != null && C.trim())) {
      w("Обязательное поле");
      return;
    }
    w(""), p();
  }, x = v.useMemo(() => d.directControl ?? xf(), [d]), k = (C) => {
    f((b) => ({
      ...b,
      directControl: {
        ...b.directControl ?? xf(),
        ...C
      }
    }));
  };
  return /* @__PURE__ */ i.jsx(
    Jt,
    {
      feedback: a,
      open: r,
      onClose: o,
      onBack: m,
      title: c,
      footer: /* @__PURE__ */ i.jsx("div", { className: tt.form, children: /* @__PURE__ */ i.jsx(se, { onClick: y, children: _("Сохранить") }) }),
      children: /* @__PURE__ */ i.jsxs("div", { className: tt.form, children: [
        /* @__PURE__ */ i.jsx(
          Ge,
          {
            label: _("Название команды"),
            hint: xi(d.uuid),
            required: !0,
            error: g,
            value: d.title,
            onChange: (C) => f((b) => ({
              ...b,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ i.jsx(
          Ge,
          {
            label: _("mappingType"),
            value: x.mappingType,
            onChange: (C) => k({
              mappingType: C.target.value
            })
          }
        ),
        /* @__PURE__ */ i.jsx(
          gn,
          {
            label: _("valueType"),
            value: x.valueType,
            options: lx,
            onChange: (C) => k({
              valueType: C.target.value
            })
          }
        ),
        x.valueType == "command" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("div", { className: tt.field, children: /* @__PURE__ */ i.jsx(
            lr,
            {
              label: _("Фразы для запуска"),
              hint: _("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам."),
              rows: 6,
              value: (x.voiceCommands ?? []).join(`
`),
              onChange: (C) => k({
                voiceCommands: C.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ i.jsx(
            Ml,
            {
              kind: "nested",
              value: Array.isArray(x.subDirectControl) ? x.subDirectControl.length ? "__inline__" : "" : x.subDirectControl,
              title: Array.isArray(x.subDirectControl) ? _("Сохранённые вложенные команды") : x.subDirectControlTitle,
              onSelect: (C) => k({
                manual: !1,
                subDirectControl: C.uuid,
                subDirectControlTitle: C.title
              })
            }
          )
        ] }) : /* @__PURE__ */ i.jsx(i.Fragment, {})
      ] })
    }
  );
};
function _x({ target: r, onBack: a, onSaved: o }) {
  const c = dt(), d = Yt(), [f, p] = v.useState({ title: "" }), [m, g] = v.useState();
  v.useEffect(() => {
    let y = !1;
    return d.run(async () => {
      let x = r.kind === "direct" ? "direct" : "main", k;
      if (r.kind === "direct") k = await c.getRecord(r.uuid, "get_assistant_sub_direct_control");
      else
        try {
          k = await c.getRecord(r.uuid, "get_assistant_command");
        } catch (C) {
          if (!(C && typeof C == "object" && "code" in C && C.code === "not_found")) throw C;
          x = "sub", k = await c.getRecord(r.uuid, "get_assistant_sub_command");
        }
      y || (p({ ...k.data, status: k.data.status ?? !1 }), g(x));
    }, { retryable: !0 }), () => {
      y = !0;
    };
  }, [c, r.uuid, r.kind, d.run]);
  const w = () => d.run(async () => {
    if (!m) return;
    const y = m === "direct" ? "update_assistant_sub_direct_control" : m === "main" ? "update_assistant_command" : "update_assistant_sub_command", { uuid: x, ...k } = f;
    await c.updateRecord(r.uuid, y, k), o(f), a();
  }, { exclusive: !0 });
  return m ? m === "direct" ? /* @__PURE__ */ i.jsx(
    xp,
    {
      open: !0,
      title: "Редактировать",
      feedback: d,
      formData: f,
      setFormData: p,
      onClose: a,
      onBack: a,
      onSave: w
    }
  ) : /* @__PURE__ */ i.jsx(
    nu,
    {
      open: !0,
      isEdit: !0,
      feedback: d,
      formData: f,
      setFormData: p,
      componentKey: m === "main" ? "componentDialog" : "subComponentDialog",
      onClose: a,
      onBack: a,
      onSave: w,
      onUpdate: w
    }
  ) : /* @__PURE__ */ i.jsx(Jt, { open: !0, onClose: a, onBack: a, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ i.jsx("p", { role: "status", children: _("Загрузка...") }) });
}
const xx = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function wx({ response: r, onChange: a }) {
  const o = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(o) ? "default" : o === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      gn,
      {
        label: _("Типы ответов"),
        "aria-label": _("Типы ответов"),
        value: c,
        options: xx,
        onChange: (d) => a({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ i.jsx(
      Ge,
      {
        label: _("Тип результата скрипта"),
        placeholder: _("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => a({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ i.jsx(
      lr,
      {
        label: _("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => a({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const kx = "_switchRow_1hmmz_1", Sx = "_input_1hmmz_11", Cx = "_track_1hmmz_22", jx = "_thumb_1hmmz_33", Ex = "_label_1hmmz_62", Hs = {
  switchRow: kx,
  input: Sx,
  track: Cx,
  thumb: jx,
  label: Ex
}, ur = ({ label: r, className: a = "", ...o }) => /* @__PURE__ */ i.jsxs("label", { className: `${Hs.switchRow} ${a}`, children: [
  /* @__PURE__ */ i.jsx("input", { ...o, type: "checkbox", className: Hs.input }),
  /* @__PURE__ */ i.jsx("span", { className: Hs.track, "aria-hidden": "true", children: /* @__PURE__ */ i.jsx("span", { className: Hs.thumb }) }),
  /* @__PURE__ */ i.jsx("span", { className: Hs.label, children: _(r) })
] }), Nx = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function Tx({ component: r, onOpenCommand: a, updateComponentArray: o, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [p, m] = v.useState("direct"), g = Nx.filter((y) => y.key !== "direct" || !r.forwardText), w = r.forwardText && p === "direct" ? "continuations" : p;
  return /* @__PURE__ */ i.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ i.jsx("div", { className: tt.logicTabs, role: "tablist", "aria-label": _("Настройки логики"), children: g.map((y) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: w === y.key ? 0 : -1,
        onKeyDown: (x) => {
          var b, j;
          const k = g.findIndex((N) => N.key === y.key), C = x.key === "ArrowRight" ? (k + 1) % g.length : x.key === "ArrowLeft" ? (k + g.length - 1) % g.length : x.key === "Home" ? 0 : x.key === "End" ? g.length - 1 : -1;
          C < 0 || (x.preventDefault(), m(g[C].key), (j = (b = x.currentTarget.parentElement) == null ? void 0 : b.querySelectorAll('[role="tab"]')[C]) == null || j.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": w === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => m(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ i.jsx("span", { className: tt.directTabLabel, children: _(y.label).replace(" ", `
`) }) : _(y.label)
      },
      y.key
    )) }),
    w === "continuations" && /* @__PURE__ */ i.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, x) => /* @__PURE__ */ i.jsxs("div", { className: tt.arrayItem, children: [
        /* @__PURE__ */ i.jsx(
          gn,
          {
            label: _("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: ux,
            onChange: (k) => o("nextAction", x, {
              actionTypeComponent: k.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ i.jsx(
          Ge,
          {
            label: _("Тип результата скрипта"),
            placeholder: _("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (k) => o("nextAction", x, {
              actionType: k.target.value
            })
          }
        ) : /* @__PURE__ */ i.jsx(i.Fragment, {}),
        /* @__PURE__ */ i.jsx(
          Ml,
          {
            kind: "continuation",
            value: y.uuid,
            title: y.title,
            onSelect: (k) => o("nextAction", x, {
              uuid: k.uuid,
              title: k.title ?? "",
              actionTypeComponent: y.actionTypeComponent || "children"
            })
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: tt.linkActions, children: [
          y.uuid && /* @__PURE__ */ i.jsx(se, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "continuation" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ i.jsx(
            se,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextAction", x),
              children: _("Удалить")
            }
          )
        ] })
      ] }, x)),
      /* @__PURE__ */ i.jsx(
        se,
        {
          type: "button",
          variant: "secondary",
          fullWidth: !0,
          leftIcon: /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "+" }),
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
    w === "direct" && /* @__PURE__ */ i.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-direct`, "aria-labelledby": `${f}-command-logic-tab-direct`, children: [
      (r.nextDirectControl ?? []).map((y, x) => /* @__PURE__ */ i.jsxs("div", { className: tt.arrayItem, children: [
        /* @__PURE__ */ i.jsx(
          Ml,
          {
            kind: "direct",
            value: y.uuid,
            title: y.title,
            onSelect: (k) => o("nextDirectControl", x, {
              uuid: k.uuid,
              mappingType: k.mappingType ?? "",
              title: k.title ?? ""
            })
          }
        ),
        y.uuid && /* @__PURE__ */ i.jsx(
          Ge,
          {
            label: _("mappingType"),
            hint: _("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: tt.linkActions, children: [
          y.uuid && /* @__PURE__ */ i.jsx(se, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "direct" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ i.jsx(
            se,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextDirectControl", x),
              children: _("Удалить")
            }
          )
        ] })
      ] }, x)),
      /* @__PURE__ */ i.jsx(
        se,
        {
          type: "button",
          variant: "secondary",
          fullWidth: !0,
          leftIcon: /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "+" }),
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
const wf = () => ({
  endStatus: !0,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }]
}), nu = ({
  open: r,
  feedback: a,
  isEdit: o,
  formData: c,
  componentKey: d,
  setFormData: f,
  onClose: p,
  onBack: m,
  onSave: g,
  onUpdate: w
}) => {
  const x = dt().getScripts(), k = v.useMemo(() => c[d] ?? wf(), [c, d]);
  v.useEffect(() => {
    r && f((V) => {
      var xe;
      const G = V[d];
      return (xe = G == null ? void 0 : G.nextAction) != null && xe.some((fe) => !fe.actionTypeComponent) ? { ...V, [d]: {
        ...G,
        nextAction: G.nextAction.map((fe) => ({ ...fe, actionTypeComponent: fe.actionTypeComponent || "children" }))
      } } : V;
    });
  }, [r, c.uuid, d, f]);
  const [C, b] = v.useState(null);
  v.useEffect(() => {
    r || b(null);
  }, [r]);
  const [j, N] = v.useState(!1);
  v.useEffect(() => {
    N(!1), F({});
  }, [r, c.uuid, d]);
  const [A, F] = v.useState({}), P = (V) => {
    f((G) => ({
      ...G,
      [d]: {
        ...G[d] ?? wf(),
        ...V
      }
    }));
  }, M = (V, G, xe) => {
    const fe = [...k[V] ?? []];
    fe[G] = { ...fe[G], ...xe }, P({
      [V]: fe
    });
  }, W = (V, G) => {
    P({
      [V]: [...k[V] ?? [], G]
    });
  }, H = (V, G) => {
    P({
      [V]: (k[V] ?? []).filter(
        (xe, fe) => fe !== G
      )
    });
  }, X = () => {
    const V = {};
    return c.title.trim() || (V.title = "Обязательное поле"), F(V), Object.keys(V).length === 0;
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      Jt,
      {
        suspended: !!C,
        feedback: a,
        open: r,
        onClose: p,
        onBack: m,
        title: j ? "Настроить логику" : o ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ i.jsx("div", { className: tt.form, children: j ? /* @__PURE__ */ i.jsx(se, { variant: "secondary", onClick: () => N(!1), children: _("Назад") }) : /* @__PURE__ */ i.jsxs("div", { className: tt.footerActions, children: [
          /* @__PURE__ */ i.jsx(se, { variant: "secondary", onClick: () => N(!0), children: _("Настроить логику") }),
          /* @__PURE__ */ i.jsx(se, { onClick: () => {
            X() && (o ? w() : g());
          }, children: _(o ? "Обновить" : "Сохранить") })
        ] }) }),
        children: j ? /* @__PURE__ */ i.jsx(
          Tx,
          {
            onOpenCommand: (V, G) => b({ ...V, index: G }),
            component: k,
            updateComponentArray: M,
            addComponentArrayItem: W,
            removeComponentArrayItem: H
          }
        ) : /* @__PURE__ */ i.jsxs("div", { className: tt.form, children: [
          /* @__PURE__ */ i.jsx(
            Ge,
            {
              label: _("Название команды"),
              hint: xi(c.uuid),
              value: c.title,
              error: A.title,
              onChange: (V) => f({
                ...c,
                title: V.target.value
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            gn,
            {
              label: _("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(k.answerType) ? "script_response" : k.answerType,
              options: ax,
              onChange: (V) => P({
                answerType: V.target.value
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            gn,
            {
              label: _("Скрипт Home Assistant"),
              value: k.script_entity_id ?? "__legacy__",
              options: [
                ...k.script_entity_id === void 0 ? [{ label: _("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: _("Не запускать скрипт"), value: "" },
                ...x.map((V) => ({ label: V.name, value: V.entity_id }))
              ],
              onChange: (V) => P({ script_entity_id: V.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ i.jsxs("div", { className: tt.phraseMode, children: [
            /* @__PURE__ */ i.jsx(
              ur,
              {
                label: _("Отправить команду как есть"),
                checked: !!k.forwardText,
                onChange: (V) => P({ forwardText: V.target.checked })
              }
            ),
            /* @__PURE__ */ i.jsx(Wr, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && k.forwardText) && /* @__PURE__ */ i.jsx("div", { className: tt.field, children: /* @__PURE__ */ i.jsx(
            lr,
            {
              label: _("Фразы для запуска"),
              value: (k.voiceCommands == null ? [] : typeof k.voiceCommands != "object" ? k == null ? void 0 : k.voiceCommands.split(";") : k == null ? void 0 : k.voiceCommands).join(`
`),
              onChange: (V) => P({
                voiceCommands: V.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ i.jsxs("section", { className: tt.form, "aria-label": _("Ответы"), children: [
            /* @__PURE__ */ i.jsx("h3", { className: tt.sectionTitle, children: _("Ответы") }),
            (k.voiceResponseArray ?? []).map((V, G) => /* @__PURE__ */ i.jsxs("div", { className: tt.arrayItem, children: [
              /* @__PURE__ */ i.jsx(
                wx,
                {
                  response: V,
                  onChange: (xe) => M("voiceResponseArray", G, xe)
                }
              ),
              /* @__PURE__ */ i.jsx(
                se,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => H("voiceResponseArray", G),
                  children: _("Удалить")
                }
              )
            ] }, G)),
            /* @__PURE__ */ i.jsx(
              se,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "+" }),
                onClick: () => W("voiceResponseArray", {
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
    C && /* @__PURE__ */ i.jsx(
      _x,
      {
        target: C,
        onBack: () => b(null),
        onSaved: (V) => {
          var G;
          C.kind === "direct" ? M("nextDirectControl", C.index, { title: V.title, mappingType: ((G = V.directControl) == null ? void 0 : G.mappingType) ?? "" }) : M("nextAction", C.index, { title: V.title });
        }
      },
      `${C.kind}-${C.uuid}`
    )
  ] });
}, ki = ({ command: r, open: a, onClose: o, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ i.jsx(tu, { open: a, title: r.title, uuid: r.uuid, onClose: o, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, bx = () => gp("componentDialog"), Rx = () => {
  const r = nt(), {
    query: a,
    setQuery: o,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: k,
    actionsCommand: C,
    setActionsCommand: b,
    openCreateModal: j,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: F,
    handleCreate: P,
    handleUpdate: M
  } = wi("main", bx), W = qr(f, p || !!d, m, r);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      vt,
      {
        search: { value: a, onChange: o },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !g && /* @__PURE__ */ i.jsx(Ye, { ...c }),
      /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: `${Z.header} ${Z.collectionHeader}`, children: [
        /* @__PURE__ */ i.jsx("div", { className: Z.heading, children: r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _("Основные команды") }) }),
        /* @__PURE__ */ i.jsx("div", { className: Z.actions, children: r ? /* @__PURE__ */ i.jsx(fr, { children: /* @__PURE__ */ i.jsx(se, { variant: "primary", onClick: j, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ i.jsx(se, { variant: "primary", onClick: j, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ i.jsx(Vr, { value: a, onChange: o })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: Z.list, children: [
        /* @__PURE__ */ i.jsx(Gt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((H) => /* @__PURE__ */ i.jsx(
          Qr,
          {
            title: H.title,
            subTitle: H.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(H)
          },
          H.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ i.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        r ? /* @__PURE__ */ i.jsx("div", { ref: W, className: Z.listSentinel }) : /* @__PURE__ */ i.jsx(i.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx(
        Kr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (H) => m(H)
        }
      ),
      /* @__PURE__ */ i.jsx(
        nu,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: x,
          componentKey: "componentDialog",
          setFormData: k,
          onClose: () => w(!1),
          onSave: P,
          onUpdate: M
        }
      ),
      /* @__PURE__ */ i.jsx(
        ki,
        {
          open: !!C,
          command: C,
          onClose: () => b(null),
          onToggleStatus: A,
          onDelete: F,
          onEdit: (H) => N(H)
        }
      )
    ] })
  ] });
}, Ax = () => gp("subComponentDialog"), Px = () => {
  const r = nt(), {
    query: a,
    setQuery: o,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: k,
    actionsCommand: C,
    setActionsCommand: b,
    openCreateModal: j,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: F,
    handleCreate: P,
    handleUpdate: M
  } = wi("sub", Ax), W = qr(f, p || !!d, m, r);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      vt,
      {
        search: { value: a, onChange: o },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !g && /* @__PURE__ */ i.jsx(Ye, { ...c }),
      r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: `${Z.header} ${Z.collectionHeader}`, children: [
        /* @__PURE__ */ i.jsx("div", { className: Z.heading, children: r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _("Второстепенные команды") }) }),
        /* @__PURE__ */ i.jsx("div", { className: Z.actions, children: r ? /* @__PURE__ */ i.jsx(fr, { children: /* @__PURE__ */ i.jsx(se, { variant: "primary", onClick: j, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx(se, { variant: "primary", onClick: j, children: _("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ i.jsx(Vr, { value: a, onChange: o })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: Z.list, children: [
        /* @__PURE__ */ i.jsx(Gt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((H) => /* @__PURE__ */ i.jsx(
          Qr,
          {
            title: H.title,
            subTitle: H.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(H)
          },
          H.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ i.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ i.jsx("div", { ref: W, className: Z.listSentinel }) : /* @__PURE__ */ i.jsx(
        Kr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (H) => m(H)
        }
      ),
      /* @__PURE__ */ i.jsx(
        nu,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: x,
          componentKey: "subComponentDialog",
          setFormData: k,
          onClose: () => w(!1),
          onSave: P,
          onUpdate: M
        }
      ),
      /* @__PURE__ */ i.jsx(
        ki,
        {
          open: !!C,
          command: C,
          onClose: () => b(null),
          onToggleStatus: A,
          onDelete: F,
          onEdit: (H) => N(H)
        }
      )
    ] })
  ] });
}, $x = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], hi = () => {
  const { pathname: r } = jt(), a = Fl();
  return /* @__PURE__ */ i.jsx("div", { className: Z.innerTabs, role: "group", "aria-label": _("Раздел прямых команд"), children: $x.map((o) => /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === o.path,
      className: `${Z.innerTab} ${r === o.path ? Z.activeInnerTab : ""}`,
      onClick: () => a(o.path),
      children: _(o.label)
    },
    o.path
  )) });
}, Mx = () => ({
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
}), Ix = () => {
  const r = nt(), {
    query: a,
    setQuery: o,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: k,
    actionsCommand: C,
    setActionsCommand: b,
    openCreateModal: j,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: F,
    handleCreate: P,
    handleUpdate: M
  } = wi("direct", Mx), W = qr(f, p || !!d, m, r);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      vt,
      {
        search: { value: a, onChange: o },
        beforeSearch: /* @__PURE__ */ i.jsx(hi, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !g && /* @__PURE__ */ i.jsx(Ye, { ...c }),
      r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: `${Z.header} ${Z.collectionHeader}`, children: [
        /* @__PURE__ */ i.jsxs("div", { className: Z.heading, children: [
          r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _("Прямые команды") }),
          !r && /* @__PURE__ */ i.jsx(hi, {})
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: Z.actions, children: r ? /* @__PURE__ */ i.jsx(fr, { children: /* @__PURE__ */ i.jsx(se, { variant: "primary", onClick: j, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ i.jsx(se, { variant: "primary", onClick: j, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ i.jsx(Vr, { value: a, onChange: o })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: Z.list, children: [
        /* @__PURE__ */ i.jsx(Gt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((H) => /* @__PURE__ */ i.jsx(
          Qr,
          {
            title: H.title,
            subTitle: H.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(H)
          },
          H.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ i.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ i.jsx("div", { ref: W, className: Z.listSentinel }) : /* @__PURE__ */ i.jsx(
        Kr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (H) => m(H)
        }
      ),
      /* @__PURE__ */ i.jsx(
        xp,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: _(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: x,
          setFormData: k,
          onSave: y ? M : P
        }
      ),
      /* @__PURE__ */ i.jsx(
        ki,
        {
          open: !!C,
          command: C,
          onClose: () => b(null),
          onToggleStatus: A,
          onDelete: F,
          onEdit: (H) => N(H)
        }
      )
    ] })
  ] });
}, Lx = "_form_mn1ml_1", Dx = "_arrayItem_mn1ml_8", Ox = "_sectionTitle_mn1ml_25", ii = {
  form: Lx,
  arrayItem: Dx,
  sectionTitle: Ox
}, zx = ({
  open: r,
  feedback: a,
  onClose: o,
  title: c,
  formData: d,
  setFormData: f,
  onSave: p
}) => {
  const [m, g] = v.useState("");
  v.useEffect(() => {
    g("");
  }, [r, d.uuid]);
  const w = () => {
    var j;
    if (!((j = d.title) != null && j.trim())) {
      g("Обязательное поле");
      return;
    }
    g(""), p();
  }, y = v.useMemo(
    () => d.subDirectControl ?? [],
    [d]
  ), x = (j) => {
    f((N) => ({
      ...N,
      subDirectControl: j
    }));
  }, k = (j, N) => {
    const A = [...y];
    A[j] = {
      ...A[j],
      ...N
    }, x(A);
  }, C = () => {
    x([
      ...y,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, b = (j) => {
    x(
      y.filter((N, A) => A !== j)
    );
  };
  return /* @__PURE__ */ i.jsx(
    Jt,
    {
      feedback: a,
      open: r,
      onClose: o,
      title: c,
      footer: /* @__PURE__ */ i.jsx(se, { onClick: w, children: _("Сохранить") }),
      children: /* @__PURE__ */ i.jsxs("div", { className: ii.form, children: [
        /* @__PURE__ */ i.jsx(
          Ge,
          {
            label: _("Название команды"),
            hint: xi(d.uuid),
            required: !0,
            error: m,
            value: d.title,
            onChange: (j) => f((N) => ({
              ...N,
              title: j.target.value
            }))
          }
        ),
        /* @__PURE__ */ i.jsxs("section", { className: ii.form, "aria-label": _("Варианты вложенных команд"), children: [
          /* @__PURE__ */ i.jsx("h3", { className: ii.sectionTitle, children: _("Варианты вложенных команд") }),
          y.map((j, N) => /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: ii.arrayItem,
              children: [
                /* @__PURE__ */ i.jsx(
                  Ge,
                  {
                    label: _("Код значения"),
                    value: j.subMappingType ?? "",
                    onChange: (A) => k(N, {
                      subMappingType: A.target.value
                    })
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  lr,
                  {
                    label: _("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(j.subVoiceCommands) ? j.subVoiceCommands : []).join(`
`),
                    onChange: (A) => k(N, {
                      subVoiceCommands: A.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  se,
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
          /* @__PURE__ */ i.jsx(
            se,
            {
              type: "button",
              variant: "secondary",
              fullWidth: !0,
              leftIcon: /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "+" }),
              onClick: C,
              children: _("Добавить ещё")
            }
          )
        ] })
      ] })
    }
  );
}, Hx = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), Fx = () => {
  const r = nt(), {
    query: a,
    setQuery: o,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: k,
    actionsCommand: C,
    setActionsCommand: b,
    openCreateModal: j,
    openEditModal: N,
    handleDelete: A,
    handleCreate: F,
    handleUpdate: P
  } = wi("template", Hx), M = qr(f, p || !!d, m, r);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      vt,
      {
        search: { value: a, onChange: o },
        beforeSearch: /* @__PURE__ */ i.jsx(hi, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !g && /* @__PURE__ */ i.jsx(Ye, { ...c }),
      !r && /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: `${Z.header} ${Z.collectionHeader}`, children: [
        /* @__PURE__ */ i.jsxs("div", { className: Z.heading, children: [
          r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _("Вложенные команды") }),
          !r && /* @__PURE__ */ i.jsx(hi, {})
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: Z.actions, children: r ? /* @__PURE__ */ i.jsx(fr, { children: /* @__PURE__ */ i.jsx(se, { variant: "primary", onClick: j, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ i.jsx(se, { variant: "primary", onClick: j, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ i.jsx(Vr, { value: a, onChange: o })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: Z.list, children: [
        /* @__PURE__ */ i.jsx(Gt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((W) => /* @__PURE__ */ i.jsx(
          Qr,
          {
            title: W.title,
            onClick: () => b(W)
          },
          W.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ i.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: M,
          className: Z.listSentinel
        }
      ) : /* @__PURE__ */ i.jsx(
        Kr,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (W) => m(
            W
          )
        }
      ),
      /* @__PURE__ */ i.jsx(
        zx,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: y ? "Редактировать" : "Создать",
          formData: x,
          setFormData: k,
          onSave: y ? P : F
        }
      ),
      /* @__PURE__ */ i.jsx(
        ki,
        {
          open: !!C,
          command: C,
          onClose: () => b(null),
          onDelete: A,
          onEdit: (W) => N(W)
        }
      )
    ] })
  ] });
}, kf = {
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function wp(r) {
  return r.actionType && kf[r.actionType] ? _(kf[r.actionType]) : r.title;
}
const Wx = "_form_1i0x1_1", Bx = {
  form: Wx
}, Ux = ({
  open: r,
  feedback: a,
  isEdit: o,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: p
}) => {
  var x, k;
  const m = c, g = dt().getScripts(), w = m.actionType === "default_main" && !!m.forwardCommandToServer, y = (C) => {
    d((b) => ({
      ...b,
      ...C
    }));
  };
  return /* @__PURE__ */ i.jsx(
    Jt,
    {
      feedback: a,
      open: r,
      onClose: f,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ i.jsx(se, { onClick: p, children: _("Обновить") }),
      children: /* @__PURE__ */ i.jsxs("div", { className: Bx.form, children: [
        /* @__PURE__ */ i.jsx(
          Ge,
          {
            label: _("Название команды"),
            hint: xi(c.uuid),
            value: wp(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ i.jsx(
          ur,
          {
            label: _("Завершать диалог"),
            checked: !!m.endStatus,
            onChange: (C) => y({
              endStatus: C.target.checked
            })
          }
        ),
        m.actionType === "default_main" && /* @__PURE__ */ i.jsx(
          ur,
          {
            label: _("Передать команду серверу"),
            checked: !!m.forwardCommandToServer,
            onChange: (C) => y({
              forwardCommandToServer: C.target.checked
            })
          }
        ),
        m.actionType === "default_main" && m.forwardCommandToServer && /* @__PURE__ */ i.jsx(
          gn,
          {
            label: _("Скрипт Home Assistant"),
            value: m.script_entity_id ?? "",
            options: [
              { value: "", label: _("Использовать существующие сценарии") },
              ...g.map((C) => ({ value: C.entity_id, label: C.name })),
              ...m.script_entity_id && !g.some((C) => C.entity_id === m.script_entity_id) ? [{ value: m.script_entity_id, label: m.script_entity_id }] : []
            ],
            onChange: (C) => y({ script_entity_id: C.target.value })
          }
        ),
        w ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            Ge,
            {
              label: _("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: _("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ i.jsx(
            lr,
            {
              rows: 8,
              label: _("Текст озвучки"),
              hint: _("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: _("Например: ${reply}"),
              value: ((k = (x = m.voiceResponseArray) == null ? void 0 : x.find((C) => C.actionType === "success")) == null ? void 0 : k.voiceResponse) ?? "",
              onChange: (C) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: C.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ i.jsx(
          lr,
          {
            rows: 8,
            "aria-label": _("Ответное сообщение"),
            label: _("Ответное сообщение"),
            value: m.voiceResponse,
            onChange: (C) => y({
              voiceResponse: C.target.value
            })
          }
        )
      ] })
    }
  );
}, Vx = () => {
  const r = Yt(), a = nt(), [o, c] = v.useState(!1), [d, f] = v.useState(!1), [p, m] = v.useState({ title: "" }), {
    error: g,
    retry: w,
    loading: y,
    loadCommands: x,
    getCommandDetails: k,
    updateCommand: C,
    commands: b
  } = _p("get_assistant_settings_short"), j = qr(b, y || !!g, x, a), N = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), w();
  }) : w }, A = (P) => r.run(async () => {
    f(!0);
    const M = await k("get_assistant_setting", P.uuid);
    m(M.data), c(!0);
  }, { retryable: !0 }), F = () => r.run(async () => {
    await C("update_assistant_setting", p), c(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      vt,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !o && /* @__PURE__ */ i.jsx(Ye, { ...N }),
      a ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsx("div", { className: `${Z.header} ${Z.collectionHeader}`, children: /* @__PURE__ */ i.jsx("div", { className: Z.headerTop, children: /* @__PURE__ */ i.jsx("div", { className: Z.heading, children: !a && /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ i.jsx("div", { className: Z.list, children: /* @__PURE__ */ i.jsx(Gt, { loading: y, itemCount: (b == null ? void 0 : b.data.length) ?? 0, append: a, children: b == null ? void 0 : b.data.map((P) => /* @__PURE__ */ i.jsx(
        Qr,
        {
          title: wp(P),
          onClick: () => A(P)
        },
        P.uuid
      )) }) }),
      a ? /* @__PURE__ */ i.jsx("div", { ref: j, className: Z.listSentinel }) : /* @__PURE__ */ i.jsx(
        Kr,
        {
          page: (b == null ? void 0 : b.page) || 1,
          totalPages: (b == null ? void 0 : b.total_pages) || 1,
          onChange: (P) => x(P)
        }
      ),
      /* @__PURE__ */ i.jsx(
        Ux,
        {
          feedback: N,
          open: o,
          isEdit: d,
          formData: p,
          setFormData: m,
          onClose: () => c(!1),
          onUpdate: F
        }
      )
    ] })
  ] });
}, qx = (r, a) => {
  const o = new Blob([JSON.stringify(a, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(o), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class Ot extends Error {
}
const kp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, on = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function Qx(r, a) {
  if (a === "settings") {
    const d = await r.getData("get_settings"), f = on(d) && on(d.result) ? d.result : d;
    if (!on(f)) throw new Ot("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "call_music", "remout", "timer_alarm"].filter((m) => m in f).map((m) => [m, f[m]]));
  }
  if (a === "scenarios") return r.getData("export_command_bundle");
  const o = kp[a], c = await r.getAllRecords(o.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, o.detail);
    return on(f) ? f.data : void 0;
  }));
}
function Kx(r, a) {
  let o;
  try {
    o = JSON.parse(r);
  } catch {
    throw new Ot("Некорректный JSON-файл.");
  }
  if (a === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", call_music: "string", remout: "object", timer_alarm: "object" };
    if (!on(o) || !Object.keys(o).length || Object.keys(o).some((f) => !d[f] || typeof o[f] !== d[f])) throw new Ot("Файл не содержит корректные настройки.");
    if (o.theme !== void 0 && (typeof o.theme != "string" || !["dark", "light"].includes(o.theme))) throw new Ot("Файл не содержит корректные настройки.");
    for (const [f, p] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in o && (!on(o[f]) || Object.entries(o[f]).some(([m, g]) => !p.includes(m) || typeof g != "string"))) throw new Ot("Файл не содержит корректные настройки.");
    return o;
  }
  if (a === "scenarios" && on(o)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (o.format !== "ha-dialog-ui-commands" || o.version !== 1 || Object.keys(o).length !== 7 || d.some((f) => !Array.isArray(o[f]))) throw new Ot("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const p = /* @__PURE__ */ new Set(), m = o[f];
      if (!Array.isArray(m)) throw new Ot("Ожидается массив записей JSON.");
      for (const g of m) {
        if (!on(g) || typeof g.uuid != "string" || !g.uuid.trim() || p.has(g.uuid) || typeof g.title != "string") throw new Ot("Некорректные или повторяющиеся ID записей.");
        p.add(g.uuid);
      }
    }
    return o;
  }
  if (!Array.isArray(o)) throw new Ot("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of o) {
    if (!on(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new Ot("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(a === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && on(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new Ot("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return o;
}
async function Yx(r, a, o) {
  const c = Kx(o, a);
  return await r.saveData(c, a === "settings" ? "import_settings" : a === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : kp[a].import), c;
}
const Gx = "_grid_fc8hl_1", Jx = "_card_fc8hl_8", Xx = "_actions_fc8hl_23", Zx = "_description_fc8hl_29", ew = "_page_fc8hl_36", Fs = {
  grid: Gx,
  card: Jx,
  actions: Xx,
  description: Zx,
  page: ew
}, tw = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], nw = () => {
  const r = dt(), a = Ur(), o = nt(), [c, d] = v.useState(!1), [f, p] = v.useState(""), [m, g] = v.useState(!1), w = v.useRef(null), y = v.useRef(null), x = v.useRef("scripts"), k = async (C, b = !1) => {
    w.current = b ? C : null, d(!0), p(""), g(!1);
    try {
      await C();
    } catch (j) {
      g(!0), p(j instanceof Ot ? j.message : Ct(j));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(vt, { title: _("Импорт и экспорт") }),
    /* @__PURE__ */ i.jsxs("div", { className: `${Z.page} ${Fs.page}`, children: [
      /* @__PURE__ */ i.jsx(mt, {}),
      !o && /* @__PURE__ */ i.jsx("h1", { children: _("Импорт и экспорт") }),
      /* @__PURE__ */ i.jsx("div", { className: Fs.grid, children: tw.filter((C) => C.kind === "scripts" ? a === !0 : C.kind !== "scenarios" || a === !1).map((C) => /* @__PURE__ */ i.jsxs("section", { className: Fs.card, children: [
        /* @__PURE__ */ i.jsx("h2", { children: _(C.title) }),
        /* @__PURE__ */ i.jsx("p", { className: Fs.description, children: _(C.description) }),
        /* @__PURE__ */ i.jsxs("div", { className: Fs.actions, children: [
          /* @__PURE__ */ i.jsx(se, { disabled: c, onClick: () => k(async () => {
            qx(`ha-dialog-ui-${C.kind}.json`, await Qx(r, C.kind));
          }, !0), children: _(C.download) }),
          /* @__PURE__ */ i.jsx(se, { variant: "secondary", disabled: c, onClick: () => {
            var b;
            x.current = C.kind, (b = y.current) == null || b.click();
          }, children: _(C.upload) })
        ] })
      ] }, C.kind)) }),
      /* @__PURE__ */ i.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (C) => {
        var N;
        const b = (N = C.target.files) == null ? void 0 : N[0], j = x.current;
        C.target.value = "", b && k(async () => {
          const A = await Yx(r, j, await b.text());
          j === "settings" && A !== null && typeof A == "object" && !Array.isArray(A) && (typeof A.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: A.theme })), typeof A.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(fi, { detail: A.active_remout }))), p("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ i.jsx("p", { role: "status", children: _("Обработка файла...") }),
      /* @__PURE__ */ i.jsx(Ye, { error: m ? f : null, busy: c, retry: w.current ? () => {
        w.current && k(w.current, !0);
      } : void 0 }),
      !m && f && /* @__PURE__ */ i.jsx("p", { role: "status", children: _(f) })
    ] })
  ] });
};
function rw() {
  const r = dt(), [a, o] = v.useState(null), [c, d] = v.useState([]), f = Yt(), p = Yt(), m = v.useCallback(() => f.run(async () => {
    o(await r.getSettings());
  }, { retryable: !0 }), [r, f.run]), g = v.useCallback(() => p.run(async () => {
    d(await r.getLocalMusicOptions());
  }, { retryable: !0 }), [r, p.run]);
  v.useEffect(() => {
    m();
  }, [m]), v.useEffect(() => {
    g();
  }, [g]);
  const w = async (y) => {
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(Al, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(fi, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: a, musicOptions: c, saveSettings: w, settingsFeedback: f, musicFeedback: p };
}
const sw = "_form_1ijxr_1", ow = "_field_1ijxr_7", iw = "_input_1ijxr_13", aw = "_label_1ijxr_29", lw = "_help_1ijxr_35", uw = "_toggleHelp_1ijxr_40", ct = {
  form: sw,
  field: ow,
  input: iw,
  label: aw,
  help: lw,
  toggleHelp: uw
}, cw = ({ data: r, onChange: a }) => {
  const o = (c, d) => {
    a({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: ct.form, children: [
    /* @__PURE__ */ i.jsx(Ge, { label: _("Base URL"), value: r.base_url ?? "", placeholder: _("http://192.168.31.83:9379"), onChange: (c) => o("base_url", c.target.value) }),
    /* @__PURE__ */ i.jsx(Ge, { label: _("Token"), value: r.token ?? "", placeholder: _("Bearer ..."), onChange: (c) => o("token", c.target.value) })
  ] });
}, dw = ({ data: r, musicOptions: a, musicUnavailable: o, onChange: c, callMusic: d, onCallMusicChange: f }) => {
  const p = (g, w) => {
    c({
      ...r,
      [g]: w
    });
  }, m = (g, w, y = "", x = "Стандартная") => {
    const k = a.some((C) => C.value === y);
    return /* @__PURE__ */ i.jsxs("label", { className: ct.field, children: [
      /* @__PURE__ */ i.jsx("span", { className: ct.label, children: _(g) }),
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: ct.input,
          value: y,
          onChange: (C) => w(C.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: _(x) }),
            y && !k && /* @__PURE__ */ i.jsx("option", { value: y, children: y }),
            a.map((C) => /* @__PURE__ */ i.jsx("option", { value: C.value, children: C.label }, C.value))
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: ct.form, children: [
    m(
      "Global music timer",
      (g) => p("global_music_timer", g),
      r.global_music_timer
    ),
    m(
      "Global music alarm",
      (g) => p("global_music_alarm", g),
      r.global_music_alarm
    ),
    f && m("Мелодия звонка", f, d, "Стандартная"),
    a.length === 0 && !o && /* @__PURE__ */ i.jsx("span", { className: ct.help, children: _("Музыка на сервере не найдена.") })
  ] });
}, fw = ({ data: r, onChange: a }) => {
  const o = lp(), c = (d, f) => {
    a({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: ct.form, children: [
    /* @__PURE__ */ i.jsxs("label", { className: ct.field, children: [
      /* @__PURE__ */ i.jsx("span", { className: ct.label, children: _("Язык интерфейса") }),
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: ct.input,
          value: o,
          onChange: (d) => Vg(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ i.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      Ge,
      {
        label: _("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => c("client_id", d.target.value),
        placeholder: _("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ i.jsxs("label", { className: ct.field, children: [
      /* @__PURE__ */ i.jsx("span", { className: ct.label, children: _("Theme") }),
      /* @__PURE__ */ i.jsxs("select", { className: ct.input, value: r.theme ?? "dark", onChange: (d) => c("theme", d.target.value), children: [
        /* @__PURE__ */ i.jsx("option", { value: "dark", children: _("dark") }),
        /* @__PURE__ */ i.jsx("option", { value: "light", children: _("light") })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(ur, { label: _("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, pw = ({ data: r, onChange: a }) => {
  const o = (c, d) => a({ ...r, [c]: d });
  return /* @__PURE__ */ i.jsxs("div", { className: ct.form, children: [
    /* @__PURE__ */ i.jsxs("div", { className: ct.toggleHelp, children: [
      /* @__PURE__ */ i.jsx(ur, { label: _("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => o("active_remout", c.target.checked) }),
      /* @__PURE__ */ i.jsx(Wr, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: ct.toggleHelp, children: [
      /* @__PURE__ */ i.jsx(ur, { label: _("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => o("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ i.jsx(Wr, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ i.jsx(
      Ge,
      {
        label: _("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => o("api_commands_token", c.target.value),
        placeholder: _("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, mi = {
  base_url: "",
  token: ""
}, hw = {
  global_music_timer: "",
  global_music_alarm: ""
}, Sf = {
  remout: mi,
  timer_alarm: hw,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, mw = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), vw = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), yw = (r) => ({
  call_music: (r == null ? void 0 : r.call_music) ?? "",
  remout: mw(r == null ? void 0 : r.remout),
  timer_alarm: vw(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), Cf = (r, a) => {
  const o = {};
  return Object.keys(r).forEach((c) => {
    const d = c;
    r[d] !== a[d] && (o[d] = r[d]);
  }), o;
}, jf = (r, a) => {
  const o = {}, c = Cf(r.timer_alarm, a.timer_alarm);
  if (Object.keys(c).length > 0 && (o.timer_alarm = c), r.call_music !== a.call_music && (o.call_music = r.call_music), r.theme !== a.theme && (o.theme = r.theme), r.is_admin !== a.is_admin && (o.is_admin = r.is_admin), r.active_remout !== a.active_remout && (o.active_remout = r.active_remout), r.client_id !== a.client_id && (o.client_id = r.client_id), r.api_commands_enabled !== a.api_commands_enabled && (o.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== a.api_commands_token && (o.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = Cf(r.remout ?? mi, a.remout ?? mi);
    Object.keys(d).length > 0 && (o.remout = d);
  }
  return o;
}, gw = () => {
  const r = nt(), [a, o] = v.useState(Sf), c = Yt(), [d, f] = v.useState(Sf), { settings: p, musicOptions: m, saveSettings: g, settingsFeedback: w, musicFeedback: y } = rw();
  v.useEffect(() => {
    if (!p) return;
    const b = yw(p);
    o(b), f(b), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme }));
  }, [p]);
  const x = async (b) => {
    o((j) => ({ ...j, ...b })), b.theme && b.theme !== a.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme })), await c.run(async () => {
      await g({ theme: b.theme }), f((j) => ({ ...j, theme: b.theme }));
    }, { exclusive: !0 }));
  }, k = () => c.run(async () => {
    await g(jf(a, d)), f(a);
  }, { exclusive: !0 }), C = !!p && Object.keys(jf(a, d)).length > 0;
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      vt,
      {
        title: _("Настройки")
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      /* @__PURE__ */ i.jsx(mt, {}),
      r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx("h1", { children: _("Настройки") }),
      /* @__PURE__ */ i.jsxs("div", { className: Z.settingsSections, children: [
        /* @__PURE__ */ i.jsx(Ye, { ...w }),
        /* @__PURE__ */ i.jsx(Ye, { ...y }),
        /* @__PURE__ */ i.jsx(Ye, { ...c }),
        /* @__PURE__ */ i.jsxs("section", { className: Z.settingsSection, "aria-label": _("Общие"), children: [
          /* @__PURE__ */ i.jsx("h2", { children: _("Общие") }),
          /* @__PURE__ */ i.jsx(
            fw,
            {
              data: {
                is_admin: a.is_admin,
                theme: a.theme,
                client_id: a.client_id
              },
              onChange: x
            }
          )
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: Z.settingsSection, "aria-label": _("Подключения"), children: [
          /* @__PURE__ */ i.jsx("h2", { children: _("Подключения") }),
          /* @__PURE__ */ i.jsxs("div", { className: Z.connectionFields, children: [
            /* @__PURE__ */ i.jsx(pw, { data: a, onChange: x }),
            a.active_remout && /* @__PURE__ */ i.jsx(
              cw,
              {
                data: a.remout ?? mi,
                onChange: (b) => o((j) => ({ ...j, remout: b }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: Z.settingsSection, "aria-label": _("Timer / Alarm"), children: [
          /* @__PURE__ */ i.jsx("h2", { children: _("Timer / Alarm") }),
          /* @__PURE__ */ i.jsx(
            dw,
            {
              data: a.timer_alarm,
              callMusic: a.call_music,
              onCallMusicChange: (b) => o((j) => ({ ...j, call_music: b })),
              musicOptions: m,
              musicUnavailable: y.busy || !!y.error,
              onChange: (b) => o({ ...a, timer_alarm: b })
            }
          )
        ] })
      ] }),
      C && (r ? /* @__PURE__ */ i.jsx("div", { className: Z.settingsMobileActions, children: /* @__PURE__ */ i.jsx(
        se,
        {
          variant: "primary",
          disabled: c.busy || w.busy || !p,
          onClick: k,
          children: _("Сохранить")
        }
      ) }) : /* @__PURE__ */ i.jsx("div", { className: Z.settingsActions, children: /* @__PURE__ */ i.jsx(se, { disabled: c.busy || w.busy || !p, onClick: k, children: _("Сохранить") }) }))
    ] })
  ] });
}, Il = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const a = r.split(":").map(Number);
  return a.some((o) => !Number.isFinite(o) || o < 0) ? 0 : a.length === 3 ? a[0] * 3600 + a[1] * 60 + a[2] : a.length === 2 ? a[0] * 60 + a[1] : a.length === 1 ? a[0] : 0;
}, Sp = (r) => typeof r == "string" || typeof r == "number" ? Il(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Il(r.count_timer || "") : 0, _w = (r, a = "on", o = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Il(r);
  if (!r) return 0;
  if (a !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - o) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : Sp(r);
}, Ll = (r) => r !== null && typeof r == "object", ar = (r) => {
  const a = Ll(r) && "result" in r ? r.result : r;
  return Ll(a) && "data" in a ? a.data : a;
}, Ef = (r) => {
  const a = Math.max(1, Number(r) || 1), o = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return `${String(o).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, Nf = (r) => {
  const a = ar(r);
  return Array.isArray(a) ? a : Ll(a) && Array.isArray(a.data) ? a.data : [];
};
function Cp() {
  const r = dt(), a = Yt(), [o, c] = v.useState([]), [d, f] = v.useState([]), [p, m] = v.useState([]), [g, w] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), x = v.useCallback(async () => {
    const W = await r.getPage("get_timer_requests_short", 1, 100), H = await Promise.all(
      Nf(W).map(async (X) => {
        var G;
        const V = await r.getRecord(X.uuid, "get_timer_request");
        return ((G = ar(V)) == null ? void 0 : G.data) ?? ar(V);
      })
    );
    c(H.filter((X) => !!X && X.action_type === "create_timer"));
  }, [r]), k = v.useCallback(async () => {
    const W = await r.getPage("get_alarm_requests_short", 1, 100), H = await Promise.all(
      Nf(W).map(async (X) => {
        var G;
        const V = await r.getRecord(X.uuid, "get_alarm_request");
        return ((G = ar(V)) == null ? void 0 : G.data) ?? ar(V);
      })
    );
    f(H.filter((X) => !!X && X.action_type !== "delete_alarm"));
  }, [r]), C = v.useCallback(async () => {
    const W = await r.getAllRecords("get_alarm_time_widgets_short"), H = await Promise.all(
      W.map(async (X) => {
        var G;
        const V = await r.getRecord(X.uuid, "get_alarm_time_widget");
        return ((G = ar(V)) == null ? void 0 : G.data) ?? ar(V);
      })
    );
    m(H.filter(Boolean));
  }, [r]), b = v.useCallback(async () => {
    w(!0);
    try {
      await a.run(async () => {
        await Promise.all([x(), k(), C()]);
      }, { retryable: !0 });
    } finally {
      w(!1);
    }
  }, [k, C, x, a.run]);
  v.useEffect(() => {
    b();
  }, []);
  const j = async (W, H) => await a.run(async () => {
    await W();
  }, { exclusive: !0 }) ? (await a.run(H, { retryable: !0 }), !0) : !1, N = async (W, H, X = 0.3) => {
    const V = {
      count_timer: Ef(H)
    };
    return j(() => r.saveData({ name: `Таймер ${Ef(H)}`, action_type: "create_timer", device_id: W, timer_time: V, volume_start: X }, "save_timer_request"), x);
  }, A = async (W) => j(() => r.deleteRecord(W.uuid, "delete_timer_request"), x), F = async (W, H, X = 0.3, V = "once", G = []) => j(() => r.saveData({ name: `Будильник ${H}`, action_type: "create_alarm", device_id: W, status: "on", time: H, volume_start: X, repeat_type: V, repeat_days: G }, "save_alarm_request"), async () => {
    await Promise.all([k(), C()]);
  }), P = async (W, H) => j(() => r.updateRecord(W.uuid, "update_alarm_request", { ...W, action_type: "edit_alarm", ...H }), async () => {
    await Promise.all([k(), C()]);
  }), M = async (W) => j(() => r.deleteRecord(W.uuid, "delete_alarm_request"), k);
  return {
    feedback: { ...a, retry: a.error ? a.retry ?? (() => {
      b();
    }) : void 0 },
    alarmTimeWidgets: p,
    refreshAlarmTimes: () => a.run(C, { retryable: !0 }),
    alarms: d,
    createAlarm: F,
    createTimer: N,
    deleteAlarm: M,
    devices: y,
    loading: g,
    stopTimer: A,
    timers: o,
    toTimerSeconds: _w,
    updateAlarm: P
  };
}
const xw = "_grid_w5y3x_31", ww = "_card_w5y3x_38", kw = "_empty_w5y3x_38", Sw = "_cardHeader_w5y3x_47", Cw = "_cardTitle_w5y3x_54", jw = "_meta_w5y3x_59", Ew = "_form_w5y3x_73", Nw = "_field_w5y3x_79", Tw = "_label_w5y3x_85", bw = "_quickTabs_w5y3x_101", Rw = "_quickTab_w5y3x_101", Aw = "_activeQuickTab_w5y3x_117", Pw = "_cardLead_w5y3x_135", $w = "_cardIcon_w5y3x_143", Mw = "_cardButton_w5y3x_148", Iw = "_wheelPicker_w5y3x_160", Lw = "_wheelColumn_w5y3x_173", Dw = "_wheelSelect_w5y3x_180", Ow = "_footerActions_w5y3x_202", zw = "_saveButton_w5y3x_208", Hw = "_alarmTimeFields_w5y3x_237", _e = {
  grid: xw,
  card: ww,
  empty: kw,
  cardHeader: Sw,
  cardTitle: Cw,
  meta: jw,
  form: Ew,
  field: Nw,
  label: Tw,
  quickTabs: bw,
  quickTab: Rw,
  activeQuickTab: Aw,
  cardLead: Pw,
  cardIcon: $w,
  cardButton: Mw,
  wheelPicker: Iw,
  wheelColumn: Lw,
  wheelSelect: Dw,
  footerActions: Ow,
  saveButton: zw,
  alarmTimeFields: Hw
}, Fw = [5, 10, 15, 30, 45, 60], Tf = (r) => {
  const a = Math.max(0, r), o = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return [o, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, Ww = (r, a, o) => Math.max(1, r * 3600 + a * 60 + o), Bw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), Uw = () => {
  const r = nt(), { feedback: a, createTimer: o, devices: c, loading: d, stopTimer: f, timers: p, toTimerSeconds: m } = Cp(), [g, w] = v.useState(!1), [y, x] = v.useState(""), [k, C] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [b, j] = v.useState({});
  v.useEffect(() => {
    j(Object.fromEntries(p.map((M) => [M.uuid, m(M.timer_time, M.status)])));
  }, [p, m]), v.useEffect(() => {
    const M = window.setInterval(() => {
      j((W) => Object.fromEntries(Object.entries(W).map(([H, X]) => {
        var V;
        return [H, ((V = p.find((G) => G.uuid === H)) == null ? void 0 : V.status) === "paused" ? X : Math.max(0, X - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(M);
  }, [p]);
  const N = v.useMemo(() => new Map(c.map((M) => [M.id, M.name])), [c]), A = Ww(k.hours, k.minutes, k.seconds), F = async () => {
    y && await o(y, A, 0.3) && w(!1);
  }, P = (M) => C(Bw(M * 60));
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(vt, { title: _("Таймеры") }),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !g && /* @__PURE__ */ i.jsx(Ye, { ...a }),
      /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: Z.header, children: [
        /* @__PURE__ */ i.jsx("div", { className: Z.heading, children: r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _("Таймеры") }) }),
        /* @__PURE__ */ i.jsx("div", { className: Z.actions, children: r ? /* @__PURE__ */ i.jsx(fr, { startVisible: !0, children: /* @__PURE__ */ i.jsx(
          se,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ i.jsx(
          se,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsx(Gt, { loading: d, itemCount: p.length, placeholderCount: 4, children: /* @__PURE__ */ i.jsx("div", { className: _e.grid, children: p.length ? p.map((M) => {
        const W = m(M.timer_time, M.status), H = Sp(M.timer_time);
        return /* @__PURE__ */ i.jsx("div", { className: _e.card, children: /* @__PURE__ */ i.jsxs("div", { className: _e.cardHeader, children: [
          /* @__PURE__ */ i.jsxs("div", { className: _e.cardLead, children: [
            /* @__PURE__ */ i.jsx(Yl, { className: _e.cardIcon, size: 26 }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("h2", { className: _e.cardTitle, children: Tf(b[M.uuid] ?? W) }),
              /* @__PURE__ */ i.jsxs("div", { className: _e.meta, children: [
                _("Заведен на"),
                " ",
                Tf(H),
                " • ",
                N.get(M.device_id) || M.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsx(se, { variant: "remove", onClick: () => f(M), children: _("Удалить") })
        ] }) }, M.uuid);
      }) : !d && !a.error && /* @__PURE__ */ i.jsx("div", { className: _e.empty, children: _("Нет запущенных таймеров.") }) }) }),
      /* @__PURE__ */ i.jsx(Jt, { feedback: a, open: g, onClose: () => w(!1), title: _("Создать таймер"), footer: /* @__PURE__ */ i.jsx("div", { className: _e.footerActions, children: /* @__PURE__ */ i.jsx(se, { className: _e.saveButton, onClick: F, disabled: !y, children: _("Создать") }) }), children: /* @__PURE__ */ i.jsxs("div", { className: _e.form, children: [
        /* @__PURE__ */ i.jsx("div", { className: _e.wheelPicker, "aria-label": _("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((M) => /* @__PURE__ */ i.jsxs("label", { className: _e.wheelColumn, children: [
          /* @__PURE__ */ i.jsx("span", { className: _e.label, children: _(M === "hours" ? "Часы" : M === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              className: _e.wheelSelect,
              type: "number",
              min: 0,
              max: M === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: k[M],
              onChange: (W) => {
                const H = Math.max(0, Math.min(M === "hours" ? 23 : 59, Math.trunc(Number(W.target.value) || 0)));
                C((X) => ({ ...X, [M]: H }));
              }
            }
          )
        ] }, M)) }),
        /* @__PURE__ */ i.jsxs("div", { className: _e.field, children: [
          /* @__PURE__ */ i.jsx("span", { className: _e.label, children: _("Быстрое создание") }),
          /* @__PURE__ */ i.jsx("div", { className: _e.quickTabs, children: Fw.map((M) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: `${_e.quickTab} ${A === M * 60 ? _e.activeQuickTab : ""}`, onClick: () => P(M), children: [
            M,
            " ",
            _("мин")
          ] }, M)) })
        ] }),
        /* @__PURE__ */ i.jsx(
          Fr,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: y,
            options: c.map((M) => ({ value: M.id, label: M.name })),
            onSelect: x
          }
        )
      ] }) })
    ] })
  ] });
};
let Vw = 0;
function jp() {
  var r;
  if ((r = globalThis.crypto) != null && r.getRandomValues) {
    const a = new Uint8Array(16);
    return globalThis.crypto.getRandomValues(a), `monitor-${Array.from(a, (o) => o.toString(16).padStart(2, "0")).join("")}`;
  }
  return `monitor-${Date.now().toString(36)}-${(++Vw).toString(36)}`;
}
class Ep {
  constructor() {
    be(this, "context");
    be(this, "ownsContext", !0);
    be(this, "unsubscribe");
    be(this, "closed", !1);
    be(this, "nextTime", 0);
    be(this, "sources", /* @__PURE__ */ new Set());
  }
  async prepare(a) {
    this.ownsContext = !a, this.context = a ?? new AudioContext(), await this.context.resume();
  }
  async listen(a, o, c) {
    return this.listenWith((d) => a.monitorAudio(o, d), c);
  }
  async listenWith(a, o) {
    const c = await a((d) => {
      const f = this.context;
      if (this.closed || !f) return;
      if (d.type === "status") {
        d.connected || this.clear(), o(!!d.connected);
        return;
      }
      if (d.type !== "audio" || d.rate !== 16e3 || !d.pcm) return;
      const p = Uint8Array.from(atob(d.pcm), (x) => x.charCodeAt(0)), m = new DataView(p.buffer), g = f.createBuffer(1, p.length / 2, d.rate), w = g.getChannelData(0);
      for (let x = 0; x < w.length; x++)
        w[x] = m.getInt16(x * 2, !0) / 32768;
      this.nextTime > f.currentTime + 0.3 && this.clear(), this.nextTime = Math.max(this.nextTime, f.currentTime + 0.06);
      const y = f.createBufferSource();
      y.buffer = g, y.connect(f.destination), this.sources.add(y), y.onended = () => this.sources.delete(y), y.start(this.nextTime), this.nextTime += g.duration;
    });
    this.closed ? Promise.resolve(c()).catch(() => {
    }) : this.unsubscribe = c;
  }
  clear() {
    for (const a of this.sources)
      try {
        a.stop();
      } catch {
      }
    this.sources.clear(), this.nextTime = 0;
  }
  close() {
    var a;
    this.closed = !0, this.clear(), this.unsubscribe && Promise.resolve(this.unsubscribe()).catch(() => {
    }), this.unsubscribe = void 0, this.ownsContext && ((a = this.context) == null || a.close().catch(() => {
    })), this.context = void 0;
  }
}
function Np() {
  var r;
  return !!(globalThis.isSecureContext && ((r = navigator.mediaDevices) != null && r.getUserMedia));
}
function qw(r) {
  const a = r && typeof r == "object" && "name" in r ? String(r.name) : "";
  return a === "NotAllowedError" || a === "SecurityError" ? "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS." : a === "NotSupportedError" ? "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari." : a === "NotFoundError" ? "Микрофон на этом устройстве не найден." : a === "NotReadableError" ? "Микрофон занят другим приложением или недоступен." : "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.";
}
class Qw {
  constructor(a, o, c) {
    be(this, "output", new Ep());
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
    this.api = a, this.viewId = o, this.onFailure = c;
  }
  setSending(a) {
    this.sending = a;
  }
  setMicrophoneMuted(a) {
    var o;
    this.muted = a;
    for (const c of ((o = this.stream) == null ? void 0 : o.getAudioTracks()) ?? []) c.enabled = !a;
  }
  getOutputDevices() {
    return [...this.outputs];
  }
  async refreshOutputDevices() {
    if (this.closed || !navigator.mediaDevices.enumerateDevices) return;
    const a = await navigator.mediaDevices.enumerateDevices().catch(() => []);
    this.closed || (this.outputs = a.filter((o) => o.kind === "audiooutput" && o.deviceId).map((o) => ({ id: o.deviceId, label: o.label || o.deviceId })));
  }
  canSelectOutput() {
    var a, o;
    return typeof ((a = this.context) == null ? void 0 : a.setSinkId) == "function" && (typeof ((o = navigator.mediaDevices) == null ? void 0 : o.selectAudioOutput) == "function" || this.outputs.some((c) => c.id !== "default"));
  }
  canPromptOutput() {
    return this.canSelectOutput() && typeof navigator.mediaDevices.selectAudioOutput == "function";
  }
  async selectOutput(a) {
    if (this.closed || !this.context) throw new DOMException("Call closed", "AbortError");
    const o = this.context;
    if (!o.setSinkId) throw new DOMException("Output selection unavailable", "NotSupportedError");
    if (await o.setSinkId(a), this.closed) throw new DOMException("Call closed", "AbortError");
    await o.resume();
  }
  async promptOutput() {
    const a = navigator.mediaDevices;
    if (!this.canPromptOutput() || !a.selectAudioOutput) throw new DOMException("Output chooser unavailable", "NotSupportedError");
    const o = await a.selectAudioOutput();
    return await this.selectOutput(o.deviceId), { id: o.deviceId, label: o.label };
  }
  async prepare() {
    if (!Np()) throw new DOMException("Secure microphone unavailable", "SecurityError");
    if (this.context = new AudioContext(), !this.context.audioWorklet || !globalThis.AudioWorkletNode) throw new DOMException("AudioWorklet unavailable", "NotSupportedError");
    if (await this.output.prepare(this.context), this.closed) throw new DOMException("Call closed", "AbortError");
    const a = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }, video: !1 });
    if (this.closed)
      throw a.getTracks().forEach((o) => o.stop()), new DOMException("Call closed", "AbortError");
    if (this.stream = a, this.setMicrophoneMuted(this.muted), navigator.mediaDevices.enumerateDevices) {
      const o = await navigator.mediaDevices.enumerateDevices().catch(() => []);
      this.outputs = o.filter((c) => c.kind === "audiooutput" && c.deviceId).map((c) => ({ id: c.deviceId, label: c.label || c.deviceId }));
    }
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    if (await this.context.resume(), this.closed) throw new DOMException("Call closed", "AbortError");
    for (const o of a.getAudioTracks()) o.onended = () => this.fail("Микрофон отключён. Звонок завершён.");
    if (await this.context.audioWorklet.addModule("/ha_dialog_ui_static/call-capture-worklet.js"), this.closed) throw new DOMException("Call closed", "AbortError");
    this.input = this.context.createMediaStreamSource(a), this.worklet = new AudioWorkletNode(this.context, "ha-call-capture", { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1] }), this.worklet.port.onmessage = (o) => {
      var f;
      if ((f = this.worklet) == null || f.port.postMessage("ack"), this.closed || !this.sending || this.inFlight >= 3) return;
      const c = new Uint8Array(o.data);
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
    await this.output.listenWith((a) => this.api.browserCallReceive(this.viewId, a), () => {
    });
  }
  fail(a) {
    this.closed || this.failed || (this.failed = !0, this.close(), this.onFailure(a));
  }
  close() {
    var a, o, c;
    this.closed = !0, this.sending = !1, this.output.close(), this.worklet && (this.worklet.port.onmessage = null, this.worklet.disconnect()), (a = this.input) == null || a.disconnect();
    for (const d of ((o = this.stream) == null ? void 0 : o.getTracks()) ?? [])
      d.onended = null, d.stop();
    this.stream = void 0, (c = this.context) == null || c.close().catch(() => {
    }), this.context = void 0;
  }
}
const Kw = "_navigation_mjbb7_1", Yw = "_page_mjbb7_5", Gw = "_title_mjbb7_11", Jw = "_hint_mjbb7_15", Xw = "_grid_mjbb7_20", Zw = "_device_mjbb7_27", ek = "_active_mjbb7_56", tk = "_phoneStage_mjbb7_113", nk = "_avatar_mjbb7_124", rk = "_phoneStatus_mjbb7_141", sk = "_duration_mjbb7_148", ok = "_phoneFooter_mjbb7_159", ik = "_callControls_mjbb7_167", ak = "_control_mjbb7_173", lk = "_roundControl_mjbb7_186", uk = "_hangup_mjbb7_186", ck = "_controlSelected_mjbb7_196", dk = "_routeHint_mjbb7_214", fk = "_dial_mjbb7_237", $e = {
  navigation: Kw,
  page: Yw,
  title: Gw,
  hint: Jw,
  grid: Xw,
  device: Zw,
  active: ek,
  phoneStage: tk,
  avatar: nk,
  phoneStatus: rk,
  duration: sk,
  phoneFooter: ok,
  callControls: ik,
  control: ak,
  roundControl: lk,
  hangup: uk,
  controlSelected: ck,
  routeHint: dk,
  dial: fk
};
function pk() {
  var Xt, _n;
  const r = dt(), a = nt(), [o, c] = v.useState(), [d, f] = v.useState(""), [p, m] = v.useState(""), [g, w] = v.useState(!1), [y, x] = v.useState(!1), [k, C] = v.useState(!1), [b, j] = v.useState([]), [N, A] = v.useState(!1), [F, P] = v.useState("default"), [M, W] = v.useState(!1), [H, X] = v.useState(!1), [V, G] = v.useState(0), xe = v.useRef(), fe = v.useRef(""), he = v.useRef(), me = v.useRef(!1), we = Np();
  v.useEffect(() => {
    let J = !0;
    me.current = !0, x(!1);
    const ve = jp();
    fe.current = ve;
    let Re;
    return r.callsWatch(ve, (De) => {
      J && c(De);
    }).then((De) => {
      J ? (Re = De, x(!0)) : Promise.resolve(De()).catch(() => {
      });
    }).catch((De) => {
      J && m(Ct(De));
    }), () => {
      var De;
      J = !1, me.current = !1, (De = he.current) == null || De.close(), he.current = void 0, Re && Promise.resolve(Re()).catch(() => {
      });
    };
  }, [r]);
  const z = o == null ? void 0 : o.calls.find((J) => J.id === o.owned_call_id);
  v.useEffect(() => {
    var J, ve;
    (J = he.current) == null || J.setSending((z == null ? void 0 : z.state) === "connecting" || (z == null ? void 0 : z.state) === "active"), o && !o.owned_call_id && !g && ((ve = he.current) == null || ve.close(), he.current = void 0);
  }, [o, z == null ? void 0 : z.state, g]), v.useEffect(() => {
    var Re;
    if ((z == null ? void 0 : z.state) !== "active") {
      xe.current = void 0, G(0);
      return;
    }
    ((Re = xe.current) == null ? void 0 : Re.id) !== z.id && (xe.current = { id: z.id, time: Date.now() });
    const J = () => G(Math.max(0, Math.floor((Date.now() - xe.current.time) / 1e3)));
    J();
    const ve = setInterval(J, 1e3);
    return () => clearInterval(ve);
  }, [z == null ? void 0 : z.id, z == null ? void 0 : z.state]);
  const le = () => {
    var ve;
    if (!ge) return;
    const J = !k;
    (ve = he.current) == null || ve.setMicrophoneMuted(J), C(J);
  }, de = async (J) => {
    const ve = he.current;
    if (!(!ve || H || !ge)) {
      X(!0), m("");
      try {
        await ve.selectOutput(J), me.current && he.current === ve && (P(J), W(!1));
      } catch (Re) {
        me.current && !(Re instanceof DOMException && Re.name === "AbortError") && m(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        me.current && X(!1);
      }
    }
  }, $ = async () => {
    if (!ge) return;
    const J = he.current;
    await (J == null ? void 0 : J.resumePlayback()), await (J == null ? void 0 : J.refreshOutputDevices()), !(!me.current || !J || he.current !== J) && (j(J.getOutputDevices()), A(J.canSelectOutput()), W((ve) => !ve));
  }, K = async (J) => {
    const ve = he.current;
    if (J !== "choose") {
      await de(J);
      return;
    }
    if (!(!ve || H)) {
      X(!0);
      try {
        const Re = await ve.promptOutput();
        me.current && he.current === ve && (j((De) => [...De.filter((Et) => Et.id !== Re.id), Re]), P(Re.id), W(!1));
      } catch (Re) {
        Re instanceof DOMException && ["AbortError", "NotAllowedError"].includes(Re.name) || m(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        me.current && X(!1);
      }
    }
  }, B = o == null ? void 0 : o.devices.find((J) => J.id === d), E = (J) => {
    var ve;
    return ((ve = o == null ? void 0 : o.incoming) == null ? void 0 : ve.some((Re) => Re.source_device_id === J)) || (o == null ? void 0 : o.calls.some((Re) => Re.source_device_id === J || Re.target_device_id === J));
  }, O = (Xt = o == null ? void 0 : o.incoming) == null ? void 0 : Xt.find((J) => J.source_device_id === d), ie = o == null ? void 0 : o.calls.find((J) => J.source_device_id === d || J.target_device_id === d), oe = !!(z && z.target_device_id === d), ge = oe && (z == null ? void 0 : z.state) === "active" && !g, ke = (J) => {
    var ve;
    return ((ve = o == null ? void 0 : o.devices.find((Re) => Re.id === J)) == null ? void 0 : ve.name) ?? _("Колонка");
  }, Ne = _((ie == null ? void 0 : ie.state) === "active" ? "Разговор" : (ie == null ? void 0 : ie.state) === "connecting" ? "Соединяем…" : ie ? "Ожидание ответа" : O ? "Входящий звонок" : "Готово к звонку"), Ce = async () => {
    var J;
    if (!g) {
      w(!0), m("");
      try {
        await r.browserCallEnd(fe.current), (J = he.current) == null || J.close(), he.current = void 0;
      } catch (ve) {
        me.current && m(Ct(ve));
      } finally {
        me.current && w(!1);
      }
    }
  }, Ae = async () => {
    var Re;
    if (g || !d) return;
    w(!0), m(""), C(!1), P("default"), W(!1), j([]), A(!1);
    const J = fe.current, ve = new Qw(r, J, (De) => {
      me.current && m(_(De)), r.browserCallEnd(J).catch(() => {
      });
    });
    (Re = he.current) == null || Re.close(), he.current = ve;
    try {
      if (await ve.prepare(), me.current && (j(ve.getOutputDevices()), A(ve.canSelectOutput())), !me.current) {
        ve.close();
        return;
      }
      const De = O ? await r.browserCallAccept(J, O.id) : await r.browserCallStart(J, d);
      if (!me.current) {
        ve.close();
        return;
      }
      if (await ve.listen(), !me.current) {
        ve.close();
        return;
      }
      c((Et) => {
        var Yr;
        return Et && { ...Et, owned_call_id: De.call_id, calls: Et.calls.some((Wn) => Wn.id === De.call_id) ? Et.calls : [...Et.calls, { id: De.call_id, source_device_id: null, source_type: "browser", target_device_id: d, state: O ? "active" : "ringing" }], incoming: (Yr = Et.incoming) == null ? void 0 : Yr.filter((Wn) => Wn.id !== (O == null ? void 0 : O.id)) };
      });
    } catch (De) {
      ve.close(), me.current && m(De instanceof DOMException ? _(qw(De)) : Ct(De)), await r.browserCallEnd(J).catch(() => {
      });
    } finally {
      me.current && w(!1);
    }
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: $e.navigation, children: /* @__PURE__ */ i.jsx(mt, {}) }),
    a && /* @__PURE__ */ i.jsx(vt, { title: "Звонки" }),
    /* @__PURE__ */ i.jsxs("section", { className: $e.page, children: [
      /* @__PURE__ */ i.jsx("h1", { className: $e.title, children: _("Звонки") }),
      p && !d && /* @__PURE__ */ i.jsx("p", { role: "alert", children: p }),
      !o && !p && /* @__PURE__ */ i.jsx(Gt, { loading: !0, itemCount: 0, placeholderCount: 3, grid: !0 }),
      o && !o.available && /* @__PURE__ */ i.jsx("p", { role: "alert", children: _("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.") }),
      (o == null ? void 0 : o.available) && o.devices.length === 0 && /* @__PURE__ */ i.jsx("p", { children: _("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.") }),
      /* @__PURE__ */ i.jsx("div", { className: $e.grid, children: o == null ? void 0 : o.devices.map((J) => {
        var ve;
        return /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `${$e.device} ${E(J.id) ? $e.active : ""}`,
            onClick: () => {
              f(J.id), m("");
            },
            children: [
              E(J.id) ? /* @__PURE__ */ i.jsx(df, { size: 26 }) : /* @__PURE__ */ i.jsx(di, { size: 26 }),
              /* @__PURE__ */ i.jsx("strong", { children: J.name }),
              /* @__PURE__ */ i.jsx("span", { children: _(J.online ? (ve = o == null ? void 0 : o.incoming) != null && ve.some((Re) => Re.source_device_id === J.id) ? "Входящий звонок" : E(J.id) ? "Участвует в звонке" : "Готова к звонку" : "Нет подключения") })
            ]
          },
          J.id
        );
      }) }),
      /* @__PURE__ */ i.jsxs(Jt, { open: !!d, onClose: () => f(""), title: _("Звонки"), dialogLabel: ke(d), footer: /* @__PURE__ */ i.jsxs("div", { className: $e.phoneFooter, children: [
        (!O || oe) && /* @__PURE__ */ i.jsxs("div", { className: $e.callControls, children: [
          /* @__PURE__ */ i.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ i.jsx(se, { variant: "secondary", className: `${$e.roundControl} ${oe && k ? $e.controlSelected : ""}`, "aria-label": _(oe && k ? "Включить микрофон" : "Выключить микрофон"), "aria-pressed": oe && k, disabled: !ge, onClick: le, children: oe && k ? /* @__PURE__ */ i.jsx(Zy, { size: 25 }) : /* @__PURE__ */ i.jsx(tg, { size: 25 }) }),
            /* @__PURE__ */ i.jsx("span", { children: _(oe && k ? "Микрофон выкл." : "Микрофон") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ i.jsx(se, { variant: "secondary", className: `${$e.roundControl} ${oe && F !== "default" ? $e.controlSelected : ""}`, "aria-label": _("Аудиовыход"), "aria-pressed": oe && F !== "default", disabled: !ge || H, onClick: () => void $(), children: /* @__PURE__ */ i.jsx(yg, { size: 25 }) }),
            /* @__PURE__ */ i.jsx("span", { children: _("Аудиовыход") })
          ] })
        ] }),
        ge && M && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(gn, { label: "Устройство вывода", value: F, disabled: H || !N, onChange: (J) => void K(J.target.value), options: [{ value: "default", label: _("По умолчанию (системный выход)") }, ...b.filter((J) => J.id !== "default").map((J) => ({ value: J.id, label: J.label })), ...(_n = he.current) != null && _n.canPromptOutput() ? [{ value: "choose", label: _("Выбрать другое устройство…") }] : []] }),
          !N && /* @__PURE__ */ i.jsx("p", { className: $e.routeHint, children: _("Этот браузер не позволяет выбирать аудиовыход. Переключите динамик или наушники в системном меню телефона.") })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: $e.callControls, children: [
          O && !oe && /* @__PURE__ */ i.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ i.jsx(se, { className: $e.hangup, "aria-label": _("Отклонить"), disabled: g, onClick: () => void r.browserCallDecline(fe.current, O.id).catch((J) => m(Ct(J))), children: /* @__PURE__ */ i.jsx(ff, { size: 30 }) }),
            /* @__PURE__ */ i.jsx("span", { children: _("Отклонить") })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: $e.control, children: [
            oe ? /* @__PURE__ */ i.jsx(se, { className: $e.hangup, disabled: g, "aria-label": _("Положить трубку"), onClick: () => void Ce(), children: /* @__PURE__ */ i.jsx(ff, { size: 30 }) }) : /* @__PURE__ */ i.jsx(se, { className: $e.dial, "aria-label": _(ie ? "Занято" : O ? "Ответить" : "Позвонить"), disabled: g || !y || !we || !(o != null && o.available) || !(B != null && B.online) || !!z || !!ie, onClick: () => void Ae(), children: /* @__PURE__ */ i.jsx(di, { size: 30 }) }),
            /* @__PURE__ */ i.jsx("span", { children: _(oe ? "Завершить" : ie ? "Занято" : O ? "Ответить" : "Позвонить") })
          ] })
        ] })
      ] }), children: [
        /* @__PURE__ */ i.jsxs("div", { className: $e.phoneStage, children: [
          /* @__PURE__ */ i.jsx("div", { className: $e.avatar, children: /* @__PURE__ */ i.jsx(df, { size: 46, strokeWidth: 1.4 }) }),
          /* @__PURE__ */ i.jsx("h2", { children: ke(d) }),
          /* @__PURE__ */ i.jsxs("div", { className: $e.phoneStatus, children: [
            /* @__PURE__ */ i.jsx("span", { role: "status", "aria-live": "polite", children: g && !oe ? _("Подключаем микрофон…") : Ne }),
            /* @__PURE__ */ i.jsx(Wr, { label: "Звонки", description: "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA." })
          ] }),
          oe && (z == null ? void 0 : z.state) === "active" && /* @__PURE__ */ i.jsxs("time", { className: $e.duration, "aria-label": _("Длительность звонка"), children: [
            String(Math.floor(V / 60)).padStart(2, "0"),
            ":",
            String(V % 60).padStart(2, "0")
          ] }),
          oe && k && /* @__PURE__ */ i.jsx("p", { className: $e.hint, children: _("Ваш микрофон выключен") }),
          !we && /* @__PURE__ */ i.jsx("p", { role: "alert", children: _("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.") })
        ] }),
        p && /* @__PURE__ */ i.jsx("p", { role: "alert", children: p }),
        ie && !oe && /* @__PURE__ */ i.jsx("p", { className: $e.hint, children: _("Колонка уже участвует в другом звонке.") }),
        z && !oe && /* @__PURE__ */ i.jsx("p", { className: $e.hint, children: _("Сначала завершите текущий звонок.") })
      ] })
    ] })
  ] });
}
const hk = "_page_1k5zr_1", mk = "_heading_1k5zr_8", vk = "_grid_1k5zr_26", yk = "_device_1k5zr_33", gk = "_deviceLive_1k5zr_64", _k = "_navigation_1k5zr_72", xk = "_playback_1k5zr_76", wk = "_playbackSelect_1k5zr_93", kk = "_statusRow_1k5zr_117", Sk = "_status_1k5zr_117", Ck = "_live_1k5zr_132", jk = "_hint_1k5zr_136", Ek = "_footer_1k5zr_142", Nk = "_empty_1k5zr_153", Tk = "_error_1k5zr_160", et = {
  page: hk,
  heading: mk,
  grid: vk,
  device: yk,
  deviceLive: gk,
  navigation: _k,
  playback: xk,
  playbackSelect: wk,
  statusRow: kk,
  status: Sk,
  live: Ck,
  hint: jk,
  footer: Ek,
  empty: Nk,
  error: Tk
};
function bk() {
  const r = dt(), a = nt(), [o, c] = v.useState(), [d, f] = v.useState(""), [p, m] = v.useState(null), [g, w] = v.useState("browser"), [y, x] = v.useState(!1), [k, C] = v.useState(!1), b = v.useRef(""), j = v.useRef(!1), N = v.useRef(), [A, F] = v.useState(0);
  v.useEffect(() => {
    j.current = !0;
    let $ = !0, K;
    const B = jp();
    return b.current = B, c(void 0), f(""), r.monitorWatch(B, (E) => {
      $ && c(E);
    }).then((E) => {
      $ ? K = E : Promise.resolve(E()).catch(() => {
      });
    }).catch((E) => {
      $ && f(
        Ct(
          E,
          "Не удалось открыть радионяню. Проверьте подключение к HA."
        )
      );
    }), () => {
      var E;
      $ = !1, j.current = !1, (E = N.current) == null || E.close(), N.current = void 0, K && Promise.resolve(K()).catch(() => {
      });
    };
  }, [r, A]), v.useEffect(() => {
    var $;
    o && !o.owned_source_id && !y && (($ = N.current) == null || $.close(), N.current = void 0, C(!1));
  }, [o, y]);
  const P = o == null ? void 0 : o.devices.find(($) => $.id === p), M = (o == null ? void 0 : o.devices.filter(($) => $.source)) ?? [], W = o == null ? void 0 : o.sessions.find(
    ($) => $.source_device_id === p
  ), H = !!(P != null && P.transmitting || (P == null ? void 0 : P.source_state) === "on" || W), X = k && (P == null ? void 0 : P.transmitting) && (o == null ? void 0 : o.owned_source_id) === p, V = !!W || X, G = ($) => {
    const K = o == null ? void 0 : o.sessions.find(
      (B) => B.source_device_id === $.id
    );
    w((K == null ? void 0 : K.listener_device_id) ?? "browser"), m($.id), f("");
  }, xe = () => m(null), fe = async () => {
    var K;
    if (!P || y) return;
    x(!0), f(""), C(!1), (K = N.current) == null || K.close(), N.current = void 0;
    let $;
    try {
      g === "browser" && ($ = new Ep(), N.current = $, await $.prepare());
      const B = await r.monitorStart(
        b.current,
        P.id,
        g === "browser" ? void 0 : g
      );
      if (!j.current || !B.started) {
        $ == null || $.close();
        return;
      }
      $ && await $.listen(r, P.node_id, (E) => {
        j.current && C(E);
      }), j.current && (C(!0), c(
        (E) => E && {
          ...E,
          owned_source_id: P.id,
          devices: E.devices.map(
            (O) => O.id === P.id ? { ...O, transmitting: !0, source_state: "on" } : O
          ),
          sessions: g === "browser" ? E.sessions : [
            ...E.sessions.filter(
              (O) => O.source_device_id !== P.id
            ),
            {
              source_device_id: P.id,
              listener_device_id: g
            }
          ]
        }
      ));
    } catch (B) {
      if ($ == null || $.close(), j.current) {
        f(
          Ct(
            B,
            "Не удалось начать прослушивание. Проверьте подключение и разрешение воспроизведения."
          )
        );
        try {
          await r.monitorStop(b.current, P.id);
        } catch {
        }
      }
    } finally {
      j.current && x(!1);
    }
  }, he = async ($) => {
    var K;
    x(!0), f("");
    try {
      await r.monitorStop(b.current, $), (o == null ? void 0 : o.owned_source_id) === $ && ((K = N.current) == null || K.close(), N.current = void 0, C(!1)), c(
        (B) => B && {
          ...B,
          owned_source_id: B.owned_source_id === $ ? null : B.owned_source_id,
          devices: B.devices.map(
            (E) => E.id === $ ? { ...E, transmitting: !1, source_state: "off" } : E
          ),
          sessions: B.sessions.filter(
            (E) => E.source_device_id !== $ && E.listener_device_id !== $
          )
        }
      );
    } catch (B) {
      j.current && f(Ct(B));
    } finally {
      j.current && x(!1);
    }
  }, me = (o == null ? void 0 : o.devices.filter(
    ($) => $.listener && $.id !== p
  )) ?? [], we = _(
    y ? "Подключаемся…" : H ? X || W ? "Прослушивание активно" : "Источник включён" : "Готово к запуску"
  ), z = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("div", { className: et.statusRow, children: [
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: `${et.status} ${H ? et.live : ""}`,
          children: [
            /* @__PURE__ */ i.jsx($y, { size: 12, fill: "currentColor" }),
            we
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(Wr, { label: we, description: _(
        H && (o == null ? void 0 : o.owned_source_id) !== p ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже. Пока прослушивание активно, сменить устройство воспроизведения нельзя." : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня». Пока прослушивание активно, сменить устройство воспроизведения нельзя."
      ) })
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: et.hint, children: _("Выберите устройство") }),
    /* @__PURE__ */ i.jsxs("div", { className: et.playback, children: [
      g === "browser" ? /* @__PURE__ */ i.jsx(Uy, { size: 22 }) : /* @__PURE__ */ i.jsx(Yl, { size: 22 }),
      /* @__PURE__ */ i.jsx(
        gn,
        {
          "aria-label": _("Выберите устройство"),
          className: et.playbackSelect,
          value: g,
          onChange: ($) => w($.target.value),
          disabled: y || V,
          options: [
            { value: "browser", label: _("На этом устройстве") },
            ...me.map(($) => ({
              value: $.id,
              label: $.online ? $.name : `${$.name} — ${_("Нет подключения")}`,
              disabled: !$.online
            }))
          ]
        }
      )
    ] })
  ] }), le = /* @__PURE__ */ i.jsx("div", { className: et.footer, children: /* @__PURE__ */ i.jsx(
    se,
    {
      onClick: H ? () => void he(p) : () => void fe(),
      disabled: y || !H && !(P != null && P.online) || !H && g !== "browser" && !(o != null && o.devices.some(
        ($) => $.id === g && $.online
      )),
      children: _(
        y ? "Подключаемся…" : H ? g === "browser" && !X && !W ? "Начать слушать" : "Остановить" : "Старт"
      )
    }
  ) }), de = H && !V ? /* @__PURE__ */ i.jsxs("div", { className: et.footer, children: [
    /* @__PURE__ */ i.jsx(se, { disabled: y || !(P != null && P.online), onClick: () => void fe(), children: _(g === "browser" ? "Начать слушать" : "Старт") }),
    /* @__PURE__ */ i.jsx(
      se,
      {
        variant: "ghost",
        disabled: y,
        onClick: () => void he(p),
        children: _("Остановить источник")
      }
    )
  ] }) : le;
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: et.navigation, children: /* @__PURE__ */ i.jsx(mt, {}) }),
    a && /* @__PURE__ */ i.jsx(vt, { title: "Радионяня" }),
    /* @__PURE__ */ i.jsxs("section", { className: et.page, children: [
      /* @__PURE__ */ i.jsxs("header", { className: et.heading, children: [
        /* @__PURE__ */ i.jsx(Kl, { size: 30 }),
        /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("h1", { children: _("Радионяня") }) })
      ] }),
      d && !p && /* @__PURE__ */ i.jsxs("div", { role: "alert", className: et.error, children: [
        d,
        /* @__PURE__ */ i.jsx(se, { onClick: () => F(($) => $ + 1), children: _("Повторить") })
      ] }),
      !o && !d && /* @__PURE__ */ i.jsx(Gt, { loading: !0, itemCount: 0, placeholderCount: 3, grid: !0 }),
      o && !o.available && /* @__PURE__ */ i.jsx("div", { className: et.empty, children: _(
        "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124."
      ) }),
      (o == null ? void 0 : o.available) && M.length === 0 && /* @__PURE__ */ i.jsx("div", { className: et.empty, children: _(
        "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome."
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: et.grid, children: M.map(($) => {
        const K = o == null ? void 0 : o.sessions.find(
          (E) => E.source_device_id === $.id
        ), B = o == null ? void 0 : o.devices.find(
          (E) => E.id === (K == null ? void 0 : K.listener_device_id)
        );
        return /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `${et.device} ${$.transmitting ? et.deviceLive : ""}`,
            onClick: () => G($),
            children: [
              /* @__PURE__ */ i.jsx(ig, { size: 28 }),
              /* @__PURE__ */ i.jsx("strong", { children: $.name }),
              /* @__PURE__ */ i.jsx("span", { children: _(
                $.online ? $.transmitting ? "Источник включён" : $.source_state === "on" ? "Переподключение…" : "Готова к прослушиванию" : "Нет подключения"
              ) }),
              B && /* @__PURE__ */ i.jsxs("small", { children: [
                _("Воспроизведение:"),
                " ",
                B.name
              ] })
            ]
          },
          $.id
        );
      }) }),
      /* @__PURE__ */ i.jsxs(
        Jt,
        {
          open: p !== null,
          onClose: xe,
          title: (P == null ? void 0 : P.name) ?? "Радионяня",
          dialogLabel: (P == null ? void 0 : P.name) ?? _("Радионяня"),
          footer: de,
          children: [
            d && /* @__PURE__ */ i.jsx("p", { role: "alert", className: et.error, children: d }),
            z
          ]
        }
      )
    ] })
  ] });
}
const Rk = ({ command: r, open: a, onClose: o, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const p = r.status === "on";
  return /* @__PURE__ */ i.jsx(tu, { open: a, title: r.title, uuid: r.uuid, onClose: o, actions: [
    { label: p ? "Выключить" : "Включить", onClick: () => c(r, p ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, Ak = (r) => {
  const a = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !a || Number(a[1]) > 23 || Number(a[2]) > 59 ? null : `${a[1].padStart(2, "0")}:${a[2]}`;
}, Dl = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], Pk = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], $k = (r = "once", a = []) => r === "daily" ? _("ежедневно") : r === "weekdays" ? _("по будням") : r === "weekends" ? _("по выходным") : r === "custom" ? a.length ? a.map((o) => {
  var c;
  return (c = Dl.find((d) => d.key === o)) != null && c.label ? _(Dl.find((d) => d.key === o).label) : o;
}).join(", ") : _("кастом") : _("однократно"), Mk = () => {
  const r = nt(), { feedback: a, alarmTimeWidgets: o, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: p, devices: m, loading: g, updateAlarm: w } = Cp(), [y, x] = v.useState(!1), [k, C] = v.useState(null), [b, j] = v.useState(null), [N, A] = v.useState(""), [F, P] = v.useState("08:00"), [M, W] = v.useState("once"), [H, X] = v.useState([]), V = v.useMemo(() => Array.from(new Set([...o.flatMap((z) => z.time || []), ...d.map((z) => z.time)].map(Ak).filter((z) => z !== null))), [o, d]), G = v.useMemo(() => new Map(m.map((z) => [z.id, z.name])), [m]), xe = d.find((z) => z.uuid === k) || null, fe = async () => {
    if (!N || !F) return;
    const z = d.find((le) => le.uuid === b);
    if (z) {
      if (!await w(z, { device_id: N, time: F, volume_start: 0.3, repeat_type: M, repeat_days: H })) return;
    } else if (!await f(N, F, 0.3, M, H)) return;
    j(null), x(!1);
  }, he = () => {
    j(null), x(!0), c();
  }, me = (z) => {
    P(z.time), A(z.device_id), W(z.repeat_type ?? "once"), X(z.repeat_days ?? []), c(), j(z.uuid), C(null), x(!0);
  }, we = (z) => X((le) => le.includes(z) ? le.filter((de) => de !== z) : [...le, z]);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(vt, { title: _("Будильники") }),
    /* @__PURE__ */ i.jsxs("div", { className: Z.page, children: [
      !y && /* @__PURE__ */ i.jsx(Ye, { ...a }),
      /* @__PURE__ */ i.jsx(mt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: Z.header, children: [
        /* @__PURE__ */ i.jsx("div", { className: Z.heading, children: r ? /* @__PURE__ */ i.jsx(i.Fragment, {}) : /* @__PURE__ */ i.jsx("h1", { className: Z.title, children: _("Будильники") }) }),
        /* @__PURE__ */ i.jsx("div", { className: Z.actions, children: r ? /* @__PURE__ */ i.jsx(fr, { startVisible: !0, children: /* @__PURE__ */ i.jsx(
          se,
          {
            variant: "primary",
            onClick: he,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ i.jsx(
          se,
          {
            variant: "primary",
            onClick: he,
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsx(Gt, { loading: g, itemCount: d.length, placeholderCount: 4, children: /* @__PURE__ */ i.jsx("div", { className: _e.grid, children: d.length ? d.map((z) => /* @__PURE__ */ i.jsx("button", { className: `${_e.card} ${_e.cardButton}`, type: "button", onClick: () => C(z.uuid), children: /* @__PURE__ */ i.jsxs("div", { className: _e.cardHeader, children: [
        /* @__PURE__ */ i.jsxs("div", { className: _e.cardLead, children: [
          /* @__PURE__ */ i.jsx(Yl, { className: _e.cardIcon, size: 26 }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("h2", { className: _e.cardTitle, children: z.time }),
            /* @__PURE__ */ i.jsxs("div", { className: _e.meta, children: [
              $k(z.repeat_type, z.repeat_days),
              " • ",
              G.get(z.device_id) || z.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            onClick: (le) => le.stopPropagation(),
            onMouseDown: (le) => le.stopPropagation(),
            children: /* @__PURE__ */ i.jsx(ur, { label: _(""), checked: z.status !== "off", onClick: (le) => le.stopPropagation(), onChange: (le) => w(z, { status: le.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, z.uuid)) : !g && !a.error && /* @__PURE__ */ i.jsx("div", { className: _e.empty, children: _("Нет будильников.") }) }) }),
      /* @__PURE__ */ i.jsx(Jt, { feedback: a, open: y, onClose: () => {
        x(!1), j(null);
      }, title: b ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ i.jsx("div", { className: _e.footerActions, children: /* @__PURE__ */ i.jsx(se, { className: _e.saveButton, onClick: fe, disabled: !N || !F, children: _("Сохранить") }) }), children: /* @__PURE__ */ i.jsxs("div", { className: _e.form, children: [
        /* @__PURE__ */ i.jsxs("div", { className: _e.alarmTimeFields, role: "group", "aria-label": _("Время будильника"), children: [
          /* @__PURE__ */ i.jsx(
            Fr,
            {
              label: _("Часы"),
              value: F.split(":")[0],
              options: Array.from({ length: 24 }, (z, le) => ({ value: String(le).padStart(2, "0"), label: String(le).padStart(2, "0") })),
              onSelect: (z) => P(`${z}:${F.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ i.jsx(
            Fr,
            {
              label: _("Минуты"),
              value: F.split(":")[1],
              options: Array.from({ length: 60 }, (z, le) => ({ value: String(le).padStart(2, "0"), label: String(le).padStart(2, "0") })),
              onSelect: (z) => P(`${F.split(":")[0]}:${z}`)
            }
          )
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: _e.field, children: [
          /* @__PURE__ */ i.jsx("span", { className: _e.label, children: _("Ранее заданное время") }),
          /* @__PURE__ */ i.jsx("div", { className: _e.quickTabs, children: V.length ? V.map((z) => /* @__PURE__ */ i.jsx("button", { type: "button", className: `${_e.quickTab} ${F === z ? _e.activeQuickTab : ""}`, onClick: () => P(z), children: z }, z)) : /* @__PURE__ */ i.jsx("span", { className: _e.meta, children: _("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ i.jsx(
          Fr,
          {
            label: _("Повторы"),
            value: M,
            options: Pk.map((z) => ({ ...z, label: _(z.label) })),
            onSelect: (z) => W(z)
          }
        ),
        M === "custom" && /* @__PURE__ */ i.jsx("div", { className: _e.quickTabs, role: "group", "aria-label": _("Дни повтора"), children: Dl.map((z) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": H.includes(z.key),
            className: `${_e.quickTab} ${H.includes(z.key) ? _e.activeQuickTab : ""}`,
            onClick: () => we(z.key),
            children: _(z.label)
          },
          z.key
        )) }),
        /* @__PURE__ */ i.jsx(
          Fr,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: N,
            options: m.map((z) => ({ value: z.id, label: z.name })),
            onSelect: A
          }
        )
      ] }) }),
      /* @__PURE__ */ i.jsx(
        Rk,
        {
          open: !!xe,
          onClose: () => C(null),
          command: xe,
          onEdit: (z) => me(z),
          onToggleStatus: (z, le) => w(z, { status: le }),
          onDelete: (z) => {
            p(z), C(null);
          }
        }
      )
    ] })
  ] });
}, Ik = () => {
  const r = Jl(), a = Xl(), o = Ur(), { pathname: c } = jt(), d = o ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && o !== !1 ? o === null ? /* @__PURE__ */ i.jsx(_i, {}) : /* @__PURE__ */ i.jsx(zn, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ i.jsx(pp, { resetKey: c, children: /* @__PURE__ */ i.jsxs(Mv, { children: [
    /* @__PURE__ */ i.jsx(Ke, { path: "/commands/whisper", element: a ? /* @__PURE__ */ i.jsx(R1, {}) : /* @__PURE__ */ i.jsx(zn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ i.jsx(Ke, { path: "/logs", element: r && a ? /* @__PURE__ */ i.jsx(O1, {}) : /* @__PURE__ */ i.jsx(zn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ i.jsx(Ke, { path: "/downloads", element: a ? /* @__PURE__ */ i.jsx(nw, {}) : /* @__PURE__ */ i.jsx(zn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/",
        element: /* @__PURE__ */ i.jsx(
          zn,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/scripts",
        element: /* @__PURE__ */ i.jsx(nx, {})
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/commands",
        element: /* @__PURE__ */ i.jsx(
          zn,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ i.jsx(Rx, {})
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ i.jsx(Px, {})
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ i.jsx(
          zn,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ i.jsx(Ix, {})
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ i.jsx(Fx, {})
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ i.jsx(Vx, {})
      }
    ),
    /* @__PURE__ */ i.jsx(Ke, { path: "/monitor", element: /* @__PURE__ */ i.jsx(bk, {}) }),
    /* @__PURE__ */ i.jsx(Ke, { path: "/calls", element: /* @__PURE__ */ i.jsx(pk, {}) }),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/timer",
        element: /* @__PURE__ */ i.jsx(Uw, {})
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/alarm",
        element: /* @__PURE__ */ i.jsx(Mk, {})
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "/settings",
        element: /* @__PURE__ */ i.jsx(gw, {})
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ke,
      {
        path: "*",
        element: /* @__PURE__ */ i.jsx(
          zn,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] }) });
}, Tp = "ha-dialog-ui-theme", Nl = (r) => r === "light" ? "light" : "dark", Lk = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(Tp, r);
}, Dk = () => {
  const r = Yt(), a = lp(), o = dt(), [c, d] = v.useState(!1), [f, p] = v.useState(null), [m, g] = v.useState(() => Nl(localStorage.getItem(Tp)));
  return v.useEffect(() => {
    Lk(m);
  }, [m]), v.useEffect(() => {
    let w = !0, y = !1, x = !1, k = !1;
    r.run(async () => {
      const N = await o.getSettings();
      w && (y || g(Nl(N.theme)), k || d(!!N.api_commands_enabled), x || p(!!N.active_remout));
    }, { retryable: !0 });
    const C = (N) => {
      y = !0, g(Nl(N.detail));
    }, b = (N) => {
      x = !0, p(N.detail);
    }, j = (N) => {
      k = !0, d(!!N.detail);
    };
    return window.addEventListener(Al, j), window.addEventListener(fi, b), window.addEventListener("ha-dialog-ui-theme-change", C), () => {
      w = !1, window.removeEventListener(Al, j), window.removeEventListener(fi, b), window.removeEventListener("ha-dialog-ui-theme-change", C);
    };
  }, [o, r.run]), /* @__PURE__ */ i.jsx(up.Provider, { value: c, children: /* @__PURE__ */ i.jsx(dp.Provider, { value: f, children: /* @__PURE__ */ i.jsxs("div", { className: "appShell", "data-theme": m, lang: a, children: [
    /* @__PURE__ */ i.jsx(Ye, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ i.jsx(_i, {}) : /* @__PURE__ */ i.jsx(Ik, {})
  ] }) }) });
};
class Ok {
  constructor(a) {
    be(this, "hass");
    this.hass = a;
  }
  callsWatch(a, o) {
    return this.monitorSubscribe(o, { type: "ha_dialog_ui/calls/watch", view_id: a });
  }
  browserCallStart(a, o) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_start", view_id: a, target_device_id: o });
  }
  browserCallAccept(a, o) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_accept", view_id: a, invitation_id: o });
  }
  browserCallDecline(a, o) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_decline", view_id: a, invitation_id: o });
  }
  browserCallEnd(a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_end", view_id: a });
  }
  browserCallAudio(a, o) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_audio", view_id: a, pcm: o });
  }
  browserCallReceive(a, o) {
    return this.monitorSubscribe(o, { type: "ha_dialog_ui/calls/browser_receive", view_id: a });
  }
  callStart(a, o) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/start", source_device_id: a, target_device_id: o });
  }
  callAnswer(a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/answer", device_id: a });
  }
  callEnd(a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/end", device_id: a });
  }
  monitorWatch(a, o) {
    return this.monitorSubscribe(o, { type: "ha_dialog_ui/monitor/watch", view_id: a });
  }
  monitorAudio(a, o) {
    return this.monitorSubscribe(o, { type: "ha_dialog_ui/monitor/listen", node_id: a });
  }
  monitorSubscribe(a, o) {
    const c = this.hass.connection;
    return c.subscribeMessage ? c.subscribeMessage(a, o) : Promise.reject(new Error("Подписки Home Assistant недоступны"));
  }
  monitorStart(a, o, c) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/monitor/start", view_id: a, source_device_id: o, ...c ? { listener_device_id: c } : {} });
  }
  monitorStop(a, o) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/monitor/stop", view_id: a, device_id: o });
  }
  setHass(a) {
    this.hass = a;
  }
  getData(a) {
    return this.hass.connection.sendMessagePromise({ type: `ha_dialog_ui/${a}` });
  }
  async getSettings() {
    const a = await this.getData("get_settings");
    return "result" in a ? a.result : a;
  }
  async getPage(a, o, c, d) {
    return await this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      ...o ? { page: o } : {},
      ...c ? { page_size: c } : {},
      ...d ? { query: d } : {}
    });
  }
  async getAllRecords(a, o = 100) {
    const c = await this.getPage(a, 1, o), d = (c == null ? void 0 : c.total_pages) ?? 1, f = Array.isArray(c == null ? void 0 : c.data) ? c.data : Array.isArray(c == null ? void 0 : c.script_actions) ? c.script_actions : [];
    return d <= 1 ? f : (await Promise.all(
      Array.from(
        { length: d - 1 },
        (m, g) => this.getPage(a, g + 2, o)
      )
    )).reduce((m, g) => {
      const w = Array.isArray(g == null ? void 0 : g.data) ? g.data : Array.isArray(g == null ? void 0 : g.script_actions) ? g.script_actions : [];
      return [...m, ...w];
    }, f);
  }
  async getRecord(a, o) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${o}`,
      uuid: a
    });
  }
  async saveData(a, o) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${o}`,
      data: a
    });
  }
  async updateRecord(a, o, c) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${o}`,
      uuid: a,
      data: c
    });
  }
  async updateRecordStatus(a, o, c) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      uuid: o,
      status: c
    });
  }
  async searchAssistantCommands(a, o) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${o}`,
      query: a
    });
  }
  async deleteRecord(a, o) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${o}`,
      uuid: a
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((a) => {
      const o = String(a.entity_id || "");
      return o.startsWith("media_player.") || o.startsWith("speaker.");
    }).map((a) => {
      var o;
      return {
        id: a.entity_id,
        name: ((o = a.attributes) == null ? void 0 : o.friendly_name) ?? a.entity_id
      };
    });
  }
  async getLocalMusicOptions() {
    const a = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i, o = [
      "media-source://media_source/local",
      "media-source://media_source"
    ], c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), f = [];
    let p = !1, m;
    const g = async (w) => {
      if (c.has(w)) return;
      c.add(w);
      const y = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: w
      }), x = Array.isArray(y == null ? void 0 : y.children) ? y.children : [];
      await Promise.all(x.map(async (k) => {
        var j;
        const C = String((k == null ? void 0 : k.media_content_id) || ""), b = String((k == null ? void 0 : k.title) || C);
        if (C) {
          if (k != null && k.can_expand) {
            try {
              await g(C);
            } catch (N) {
              f.push(N);
            }
            return;
          }
          if (a.test(b) || a.test(C) || (k == null ? void 0 : k.media_content_type) === "music" || (j = k == null ? void 0 : k.media_content_type) != null && j.startsWith("audio/")) {
            const N = "media-source://media_source/local/", A = C.startsWith(N) ? C.slice(N.length) : C;
            d.set(A, {
              value: A,
              label: b
            });
          }
        }
      }));
    };
    for (const w of o)
      try {
        await g(w), p = !0;
      } catch (y) {
        m = y;
      }
    if (d.size === 0) {
      if (f.length > 0) throw f[0];
      if (!p) throw m;
    }
    return Array.from(d.values()).sort(
      (w, y) => w.label.localeCompare(y.label)
    );
  }
  getScripts() {
    return Object.values(this.hass.states).filter((a) => a.entity_id.startsWith("script.")).map((a) => {
      var o;
      return {
        entity_id: a.entity_id,
        name: ((o = a.attributes) == null ? void 0 : o.friendly_name) ?? a.entity_id
      };
    });
  }
}
function bp(r) {
  var a;
  return (a = r == null ? void 0 : r.connection) != null && a.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function zk() {
  return bp(window.hass);
}
function Hk({
  children: r,
  hass: a
}) {
  const [o, c] = v.useState(null), [d, f] = v.useState(0), p = v.useRef(null), [m, g] = v.useState(!1), [w, y] = v.useState(!1);
  return v.useEffect(() => {
    let x = !0;
    c(null);
    async function k() {
      const C = a ? bp(a) : await zk();
      if (!x) return;
      p.current ? p.current.setHass(C) : p.current = new Ok(C);
      const b = C.user ?? await C.connection.sendMessagePromise({ type: "auth/current_user" });
      x && (g((b == null ? void 0 : b.is_admin) === !0), y(!0));
    }
    return k().catch((C) => {
      x && c(Ct(C));
    }), () => {
      x = !1;
    };
  }, [a, d]), o ? /* @__PURE__ */ i.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ i.jsx(Ye, { error: o, retry: () => f((x) => x + 1) }) }) : !w || !p.current ? /* @__PURE__ */ i.jsx(_i, { label: _("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ i.jsx(hp.Provider, { value: p.current, children: /* @__PURE__ */ i.jsx(cp.Provider, { value: m, children: r }) });
}
function Fk({ hass: r }) {
  return /* @__PURE__ */ i.jsx(sy, { children: /* @__PURE__ */ i.jsx(Hk, { hass: r, children: /* @__PURE__ */ i.jsx(Dk, {}) }) });
}
const bf = "ha-dialog-ui-panel", Rf = "ha-dialog-ui-style";
class Wk extends HTMLElement {
  constructor() {
    super(...arguments);
    be(this, "root");
    be(this, "container");
    be(this, "layoutObserver");
    be(this, "updateViewport", () => {
      const o = Math.max(0, this.getBoundingClientRect().top + window.scrollY);
      this.style.setProperty("--ha-dialog-ui-available-height", `${Math.max(0, window.innerHeight - o)}px`);
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
  set hass(o) {
    this.hassValue = o, this.renderTimer === void 0 && (this.renderTimer = window.setTimeout(() => {
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
    var o;
    window.removeEventListener("resize", this.updateViewport), (o = this.layoutObserver) == null || o.disconnect(), this.layoutObserver = void 0, document.removeEventListener("visibilitychange", this.resume), window.removeEventListener("pageshow", this.resume), this.renderTimer !== void 0 && (window.clearTimeout(this.renderTimer), this.renderTimer = void 0), queueMicrotask(() => {
      var c;
      this.isConnected || ((c = this.root) == null || c.unmount(), this.root = void 0);
    });
  }
  loadStyles() {
    const o = this.ensureShadowRoot();
    if (o.getElementById(Rf)) return;
    const c = document.createElement("style");
    c.id = Rf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px;min-height:var(--ha-dialog-ui-available-height, 100dvh)}.panelRenderRecovery{display:flex;flex-direction:column;height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;box-sizing:border-box}.panelRecoveryNavigation{flex-shrink:0;min-width:0}.panelRecoveryNavigation>nav{display:inline-flex;flex-wrap:wrap;gap:8px}.panelRecoveryNavigation>nav a{padding:10px 14px;border:1px solid var(--border);border-radius:12px}.panelRecoveryNavigation>nav a:hover,.panelRecoveryNavigation>nav a:focus-visible{background:var(--surface-hover)}.panelRecoveryContent{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px 0}.panelRecoveryMessage{width:100%;max-width:36rem;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center}.panelRecoveryMessage p{margin:0;font-size:clamp(16px,2vw,20px);line-height:1.6;overflow-wrap:anywhere}.panelRecoveryMessage>button{align-self:center;max-width:100%;min-height:46px}@media(max-width:768px){.panelRenderRecovery{padding:16px}.panelRecoveryContent{padding:20px 8px}}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._tabs_1vwxg_1{display:inline-flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_1vwxg_16{position:relative}._tab_1vwxg_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_1vwxg_1:hover{color:var(--text);background:var(--control-background)}._tab_1vwxg_1:active{transform:scale(.98)}._active_1vwxg_49{color:var(--text);background:var(--primary);box-shadow:none}._tab_1vwxg_1>span{margin-left:5px}._menu_1vwxg_59{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_1vwxg_76{margin-left:8px}._tab_1vwxg_1[aria-expanded=true] ._chevron_1vwxg_76{transform:rotate(180deg)}._tab_1vwxg_1:focus-visible,._menuItem_1vwxg_84:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_1vwxg_84{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_1vwxg_84:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_1vwxg_84._active_1vwxg_49{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_1vwxg_1{flex-wrap:wrap;max-width:100%}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._container_x92qn_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_x92qn_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_x92qn_9:empty{display:none}._hidden_x92qn_20{visibility:hidden}._overlay_x92qn_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_x92qn_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_x92qn_24 ._card_x92qn_32{flex:1;min-height:0}._title_x92qn_51,._subtitle_x92qn_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_x92qn_1 1.4s ease-in-out infinite}._title_x92qn_51{width:45%;max-width:320px;height:18px}._subtitle_x92qn_51{width:25%;max-width:180px;height:13px}._srOnly_x92qn_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_x92qn_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_x92qn_51,._subtitle_x92qn_51{animation:none}}._grid_x92qn_89{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px}._grid_x92qn_89 ._card_x92qn_32{min-height:160px}._loader_1tvqb_1{width:100%;min-width:0;box-sizing:border-box}._fullscreen_1tvqb_7{min-height:100vh;padding:28px}@media(max-width:768px){._fullscreen_1tvqb_7{padding:16px}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._toast_1g76h_1{position:fixed;z-index:10001;top:max(16px,env(safe-area-inset-top));left:50%;transform:translate(-50%);width:max-content;max-width:min(560px,100% - 32px);box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;border:1px solid var(--primary);border-radius:16px;background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 32px var(--shadow-floating);line-height:1.5;overflow-wrap:anywhere}._toast_1g76h_1>svg{flex-shrink:0;color:var(--primary)}._toast_1g76h_1 button{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:36px;min-height:36px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}._toast_1g76h_1 button:hover{background:var(--surface-hover)}._warning_1g76h_43{border-color:var(--danger)}._warning_1g76h_43>svg{color:var(--danger)}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}._navigation_mjbb7_1{padding:24px 32px 0}._page_mjbb7_5{padding:0 32px 24px;color:var(--text);min-width:0}._title_mjbb7_11{margin-top:28px}._hint_mjbb7_15{color:var(--text-secondary);line-height:1.6}._grid_mjbb7_20{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_mjbb7_27{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border);border-radius:20px;background:var(--surface);color:var(--text);font:inherit;cursor:pointer;min-width:0}._device_mjbb7_27 strong{overflow-wrap:anywhere;font-size:18px}._device_mjbb7_27 span{color:var(--text-secondary)}._device_mjbb7_27:hover,._device_mjbb7_27:focus-visible{border-color:var(--primary)}._active_mjbb7_56{border-color:var(--primary)}._active_mjbb7_56 svg{color:var(--primary)}._status_mjbb7_64{display:flex;align-items:center;gap:8px;margin-bottom:24px}._actions_mjbb7_71{display:flex;gap:12px;width:100%}._actions_mjbb7_71>button{flex:1;min-width:0}._actions_mjbb7_71 button{display:flex;align-items:center;justify-content:center;gap:8px}@media(max-width:768px){._navigation_mjbb7_1{padding:0}._page_mjbb7_5{padding:16px}._title_mjbb7_11{display:none}}._origin_mjbb7_100{display:flex;align-items:center;flex-wrap:wrap;gap:10px;line-height:1.6}._origin_mjbb7_100 svg{flex-shrink:0;color:var(--primary)}._phoneStage_mjbb7_113{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;min-height:240px;padding:24px 0}._avatar_mjbb7_124{display:grid;place-items:center;width:106px;height:106px;border-radius:50%;color:var(--primary);background:color-mix(in srgb,var(--primary) 12%,var(--surface));border:1px solid color-mix(in srgb,var(--primary) 25%,var(--border))}._phoneStage_mjbb7_113 h2{margin:10px 0 0;font-size:26px;overflow-wrap:anywhere}._phoneStatus_mjbb7_141{display:flex;gap:8px;align-items:center;color:var(--text-secondary)}._duration_mjbb7_148{font-size:20px;font-variant-numeric:tabular-nums;letter-spacing:2px}._phoneStage_mjbb7_113 p{margin:0;font-size:13px}._phoneFooter_mjbb7_159{width:100%;display:flex;flex-direction:column;align-items:stretch;gap:18px}._callControls_mjbb7_167{display:flex;justify-content:center;gap:clamp(16px,5vw,48px)}._control_mjbb7_173{display:flex;flex-direction:column;align-items:center;gap:9px;min-width:74px}._control_mjbb7_173>span{font-size:12px;color:var(--text-secondary)}._control_mjbb7_173 ._roundControl_mjbb7_186,._control_mjbb7_173 ._hangup_mjbb7_186{width:62px;height:62px;min-width:62px;padding:0;display:grid;place-items:center;border-radius:50%}._control_mjbb7_173 ._controlSelected_mjbb7_196{color:var(--primary);background:color-mix(in srgb,var(--primary) 18%,var(--surface));border-color:var(--primary)}._control_mjbb7_173 ._hangup_mjbb7_186{width:72px;height:72px;background:#cf3549;color:#fff;border-color:#cf3549}._control_mjbb7_173 ._hangup_mjbb7_186:hover{background:#b9273a}._routeHint_mjbb7_214{display:flex;justify-content:center;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary)}._routeName_mjbb7_223{text-align:center;color:var(--text-secondary);overflow-wrap:anywhere}@media(max-width:768px){._phoneStage_mjbb7_113{min-height:220px}._phoneFooter_mjbb7_159{padding-bottom:max(8px,env(safe-area-inset-bottom))}}._control_mjbb7_173 ._dial_mjbb7_237{width:72px;height:72px;min-width:72px;padding:0;display:grid;place-items:center;border-radius:50%;background:#23875c;border-color:#23875c;color:#fff}._control_mjbb7_173 ._dial_mjbb7_237:hover:not(:disabled){background:#1a714b}._page_1k5zr_1{padding:0 32px 24px;box-sizing:border-box;min-width:0;color:var(--text)}._heading_1k5zr_8{display:flex;align-items:center;gap:16px;margin:28px 0}._heading_1k5zr_8 h1{font-size:30px;margin:0}._heading_1k5zr_8 p{color:var(--text-secondary);line-height:1.6;margin:8px 0 0}._grid_1k5zr_26{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_1k5zr_33{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border, #333);background:var(--surface, #1c1c1c);color:var(--text);border-radius:20px;font:inherit;cursor:pointer;min-width:0}._device_1k5zr_33 strong{font-size:18px;overflow-wrap:anywhere}._device_1k5zr_33 span,._device_1k5zr_33 small{color:var(--text-secondary)}._device_1k5zr_33:hover,._device_1k5zr_33:focus-visible{border-color:var(--primary, #03a9f4)}._deviceLive_1k5zr_64{border-color:#3da98c}._deviceLive_1k5zr_64 svg{color:#3da98c}._navigation_1k5zr_72{padding:24px 32px 0}._playback_1k5zr_76{position:relative;border:1px solid var(--primary, #03a9f4);background:color-mix(in srgb,var(--primary, #03a9f4) 10%,transparent);border-radius:14px;overflow:hidden}._playback_1k5zr_76>svg{position:absolute;left:18px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--primary)}._playback_1k5zr_76 ._playbackSelect_1k5zr_93{padding:20px 54px;text-align:center;text-align-last:center;border:0;background:transparent;border-radius:14px;min-height:48px;text-overflow:ellipsis}._playback_1k5zr_76:has(select:disabled){opacity:.65}._playback_1k5zr_76 ._playbackSelect_1k5zr_93:focus{box-shadow:none}._playback_1k5zr_76:focus-within{outline:2px solid var(--primary, #03a9f4);outline-offset:3px}._statusRow_1k5zr_117{display:flex;align-items:center;gap:8px;margin-bottom:20px}._status_1k5zr_117{display:flex;gap:10px;align-items:center;padding:16px 0;color:var(--text-secondary)}._live_1k5zr_132{color:#32aa87}._hint_1k5zr_136{font-size:14px;color:var(--text-secondary);line-height:1.6}._footer_1k5zr_142{display:flex;gap:12px;width:100%}._footer_1k5zr_142>button{flex:1;min-width:0}._empty_1k5zr_153{padding:28px;border:1px dashed var(--border, #333);border-radius:18px;line-height:1.7}._error_1k5zr_160{color:var(--danger, #ed8291);line-height:1.5}@media(max-width:768px){._navigation_1k5zr_72{padding:0}._page_1k5zr_1{padding:16px}._heading_1k5zr_8{margin:20px 0}._heading_1k5zr_8 h1{display:none}._grid_1k5zr_26{grid-template-columns:1fr}._heading_1k5zr_8>svg{display:none}}\n", o.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const o = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), o.appendChild(this.container)), this.root = Lm.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ i.jsx(Pf.StrictMode, { children: /* @__PURE__ */ i.jsx(pp, { children: /* @__PURE__ */ i.jsx(Fk, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(bf) || customElements.define(bf, Wk);
