var bm = Object.defineProperty;
var Am = (r, a, i) => a in r ? bm(r, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[a] = i;
var be = (r, a, i) => Am(r, typeof a != "symbol" ? a + "" : a, i);
function $f(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var hl = { exports: {} }, Is = {}, ml = { exports: {} }, Se = {};
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
function Rm() {
  if (Kd) return Se;
  Kd = 1;
  var r = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.iterator;
  function k(E) {
    return E === null || typeof E != "object" ? null : (E = x && E[x] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, j = {};
  function N(E, z, ie) {
    this.props = E, this.context = z, this.refs = j, this.updater = ie || C;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(E, z) {
    if (typeof E != "object" && typeof E != "function" && E != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, E, z, "setState");
  }, N.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function P() {
  }
  P.prototype = N.prototype;
  function F(E, z, ie) {
    this.props = E, this.context = z, this.refs = j, this.updater = ie || C;
  }
  var $ = F.prototype = new P();
  $.constructor = F, b($, N.prototype), $.isPureReactComponent = !0;
  var A = Array.isArray, H = Object.prototype.hasOwnProperty, O = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(E, z, ie) {
    var oe, ge = {}, ke = null, Ne = null;
    if (z != null) for (oe in z.ref !== void 0 && (Ne = z.ref), z.key !== void 0 && (ke = "" + z.key), z) H.call(z, oe) && !G.hasOwnProperty(oe) && (ge[oe] = z[oe]);
    var Ce = arguments.length - 2;
    if (Ce === 1) ge.children = ie;
    else if (1 < Ce) {
      for (var Re = Array(Ce), it = 0; it < Ce; it++) Re[it] = arguments[it + 2];
      ge.children = Re;
    }
    if (E && E.defaultProps) for (oe in Ce = E.defaultProps, Ce) ge[oe] === void 0 && (ge[oe] = Ce[oe]);
    return { $$typeof: r, type: E, key: ke, ref: Ne, props: ge, _owner: O.current };
  }
  function X(E, z) {
    return { $$typeof: r, type: E.type, key: z, ref: E.ref, props: E.props, _owner: E._owner };
  }
  function xe(E) {
    return typeof E == "object" && E !== null && E.$$typeof === r;
  }
  function fe(E) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(ie) {
      return z[ie];
    });
  }
  var me = /\/+/g;
  function ve(E, z) {
    return typeof E == "object" && E !== null && E.key != null ? fe("" + E.key) : z.toString(36);
  }
  function we(E, z, ie, oe, ge) {
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
    if (Ne) return Ne = E, ge = ge(Ne), E = oe === "" ? "." + ve(Ne, 0) : oe, A(ge) ? (ie = "", E != null && (ie = E.replace(me, "$&/") + "/"), we(ge, z, ie, "", function(it) {
      return it;
    })) : ge != null && (xe(ge) && (ge = X(ge, ie + (!ge.key || Ne && Ne.key === ge.key ? "" : ("" + ge.key).replace(me, "$&/") + "/") + E)), z.push(ge)), 1;
    if (Ne = 0, oe = oe === "" ? "." : oe + ":", A(E)) for (var Ce = 0; Ce < E.length; Ce++) {
      ke = E[Ce];
      var Re = oe + ve(ke, Ce);
      Ne += we(ke, z, ie, Re, ge);
    }
    else if (Re = k(E), typeof Re == "function") for (E = Re.call(E), Ce = 0; !(ke = E.next()).done; ) ke = ke.value, Re = oe + ve(ke, Ce++), Ne += we(ke, z, ie, Re, ge);
    else if (ke === "object") throw z = String(E), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return Ne;
  }
  function W(E, z, ie) {
    if (E == null) return E;
    var oe = [], ge = 0;
    return we(E, oe, "", "", function(ke) {
      return z.call(ie, ke, ge++);
    }), oe;
  }
  function le(E) {
    if (E._status === -1) {
      var z = E._result;
      z = z(), z.then(function(ie) {
        (E._status === 0 || E._status === -1) && (E._status = 1, E._result = ie);
      }, function(ie) {
        (E._status === 0 || E._status === -1) && (E._status = 2, E._result = ie);
      }), E._status === -1 && (E._status = 0, E._result = z);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var de = { current: null }, M = { transition: null }, K = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: M, ReactCurrentOwner: O };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Se.Children = { map: W, forEach: function(E, z, ie) {
    W(E, function() {
      z.apply(this, arguments);
    }, ie);
  }, count: function(E) {
    var z = 0;
    return W(E, function() {
      z++;
    }), z;
  }, toArray: function(E) {
    return W(E, function(z) {
      return z;
    }) || [];
  }, only: function(E) {
    if (!xe(E)) throw Error("React.Children.only expected to receive a single React element child.");
    return E;
  } }, Se.Component = N, Se.Fragment = i, Se.Profiler = d, Se.PureComponent = F, Se.StrictMode = c, Se.Suspense = g, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, Se.act = B, Se.cloneElement = function(E, z, ie) {
    if (E == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
    var oe = b({}, E.props), ge = E.key, ke = E.ref, Ne = E._owner;
    if (z != null) {
      if (z.ref !== void 0 && (ke = z.ref, Ne = O.current), z.key !== void 0 && (ge = "" + z.key), E.type && E.type.defaultProps) var Ce = E.type.defaultProps;
      for (Re in z) H.call(z, Re) && !G.hasOwnProperty(Re) && (oe[Re] = z[Re] === void 0 && Ce !== void 0 ? Ce[Re] : z[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) oe.children = ie;
    else if (1 < Re) {
      Ce = Array(Re);
      for (var it = 0; it < Re; it++) Ce[it] = arguments[it + 2];
      oe.children = Ce;
    }
    return { $$typeof: r, type: E.type, key: ge, ref: ke, props: oe, _owner: Ne };
  }, Se.createContext = function(E) {
    return E = { $$typeof: p, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, E.Provider = { $$typeof: f, _context: E }, E.Consumer = E;
  }, Se.createElement = U, Se.createFactory = function(E) {
    var z = U.bind(null, E);
    return z.type = E, z;
  }, Se.createRef = function() {
    return { current: null };
  }, Se.forwardRef = function(E) {
    return { $$typeof: h, render: E };
  }, Se.isValidElement = xe, Se.lazy = function(E) {
    return { $$typeof: y, _payload: { _status: -1, _result: E }, _init: le };
  }, Se.memo = function(E, z) {
    return { $$typeof: w, type: E, compare: z === void 0 ? null : z };
  }, Se.startTransition = function(E) {
    var z = M.transition;
    M.transition = {};
    try {
      E();
    } finally {
      M.transition = z;
    }
  }, Se.unstable_act = B, Se.useCallback = function(E, z) {
    return de.current.useCallback(E, z);
  }, Se.useContext = function(E) {
    return de.current.useContext(E);
  }, Se.useDebugValue = function() {
  }, Se.useDeferredValue = function(E) {
    return de.current.useDeferredValue(E);
  }, Se.useEffect = function(E, z) {
    return de.current.useEffect(E, z);
  }, Se.useId = function() {
    return de.current.useId();
  }, Se.useImperativeHandle = function(E, z, ie) {
    return de.current.useImperativeHandle(E, z, ie);
  }, Se.useInsertionEffect = function(E, z) {
    return de.current.useInsertionEffect(E, z);
  }, Se.useLayoutEffect = function(E, z) {
    return de.current.useLayoutEffect(E, z);
  }, Se.useMemo = function(E, z) {
    return de.current.useMemo(E, z);
  }, Se.useReducer = function(E, z, ie) {
    return de.current.useReducer(E, z, ie);
  }, Se.useRef = function(E) {
    return de.current.useRef(E);
  }, Se.useState = function(E) {
    return de.current.useState(E);
  }, Se.useSyncExternalStore = function(E, z, ie) {
    return de.current.useSyncExternalStore(E, z, ie);
  }, Se.useTransition = function() {
    return de.current.useTransition();
  }, Se.version = "18.3.1", Se;
}
var Yd;
function zl() {
  return Yd || (Yd = 1, ml.exports = Rm()), ml.exports;
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
var Jd;
function Pm() {
  if (Jd) return Is;
  Jd = 1;
  var r = zl(), a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, g, w) {
    var y, x = {}, k = null, C = null;
    w !== void 0 && (k = "" + w), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (x[y] = g[y]);
    if (h && h.defaultProps) for (y in g = h.defaultProps, g) x[y] === void 0 && (x[y] = g[y]);
    return { $$typeof: a, type: h, key: k, ref: C, props: x, _owner: d.current };
  }
  return Is.Fragment = i, Is.jsx = p, Is.jsxs = p, Is;
}
var Gd;
function $m() {
  return Gd || (Gd = 1, hl.exports = Pm()), hl.exports;
}
var o = $m(), v = zl();
const Mf = /* @__PURE__ */ $f(v);
var ni = {}, vl = { exports: {} }, kt = {}, yl = { exports: {} }, gl = {};
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
function Mm() {
  return Xd || (Xd = 1, (function(r) {
    function a(M, K) {
      var B = M.length;
      M.push(K);
      e: for (; 0 < B; ) {
        var E = B - 1 >>> 1, z = M[E];
        if (0 < d(z, K)) M[E] = K, M[B] = z, B = E;
        else break e;
      }
    }
    function i(M) {
      return M.length === 0 ? null : M[0];
    }
    function c(M) {
      if (M.length === 0) return null;
      var K = M[0], B = M.pop();
      if (B !== K) {
        M[0] = B;
        e: for (var E = 0, z = M.length, ie = z >>> 1; E < ie; ) {
          var oe = 2 * (E + 1) - 1, ge = M[oe], ke = oe + 1, Ne = M[ke];
          if (0 > d(ge, B)) ke < z && 0 > d(Ne, ge) ? (M[E] = Ne, M[ke] = B, E = ke) : (M[E] = ge, M[oe] = B, E = oe);
          else if (ke < z && 0 > d(Ne, B)) M[E] = Ne, M[ke] = B, E = ke;
          else break e;
        }
      }
      return K;
    }
    function d(M, K) {
      var B = M.sortIndex - K.sortIndex;
      return B !== 0 ? B : M.id - K.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, h = p.now();
      r.unstable_now = function() {
        return p.now() - h;
      };
    }
    var g = [], w = [], y = 1, x = null, k = 3, C = !1, b = !1, j = !1, N = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $(M) {
      for (var K = i(w); K !== null; ) {
        if (K.callback === null) c(w);
        else if (K.startTime <= M) c(w), K.sortIndex = K.expirationTime, a(g, K);
        else break;
        K = i(w);
      }
    }
    function A(M) {
      if (j = !1, $(M), !b) if (i(g) !== null) b = !0, le(H);
      else {
        var K = i(w);
        K !== null && de(A, K.startTime - M);
      }
    }
    function H(M, K) {
      b = !1, j && (j = !1, P(U), U = -1), C = !0;
      var B = k;
      try {
        for ($(K), x = i(g); x !== null && (!(x.expirationTime > K) || M && !fe()); ) {
          var E = x.callback;
          if (typeof E == "function") {
            x.callback = null, k = x.priorityLevel;
            var z = E(x.expirationTime <= K);
            K = r.unstable_now(), typeof z == "function" ? x.callback = z : x === i(g) && c(g), $(K);
          } else c(g);
          x = i(g);
        }
        if (x !== null) var ie = !0;
        else {
          var oe = i(w);
          oe !== null && de(A, oe.startTime - K), ie = !1;
        }
        return ie;
      } finally {
        x = null, k = B, C = !1;
      }
    }
    var O = !1, G = null, U = -1, X = 5, xe = -1;
    function fe() {
      return !(r.unstable_now() - xe < X);
    }
    function me() {
      if (G !== null) {
        var M = r.unstable_now();
        xe = M;
        var K = !0;
        try {
          K = G(!0, M);
        } finally {
          K ? ve() : (O = !1, G = null);
        }
      } else O = !1;
    }
    var ve;
    if (typeof F == "function") ve = function() {
      F(me);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), W = we.port2;
      we.port1.onmessage = me, ve = function() {
        W.postMessage(null);
      };
    } else ve = function() {
      N(me, 0);
    };
    function le(M) {
      G = M, O || (O = !0, ve());
    }
    function de(M, K) {
      U = N(function() {
        M(r.unstable_now());
      }, K);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, r.unstable_continueExecution = function() {
      b || C || (b = !0, le(H));
    }, r.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < M ? Math.floor(1e3 / M) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, r.unstable_next = function(M) {
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
        return M();
      } finally {
        k = B;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(M, K) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var B = k;
      k = M;
      try {
        return K();
      } finally {
        k = B;
      }
    }, r.unstable_scheduleCallback = function(M, K, B) {
      var E = r.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? E + B : E) : B = E, M) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = B + z, M = { id: y++, callback: K, priorityLevel: M, startTime: B, expirationTime: z, sortIndex: -1 }, B > E ? (M.sortIndex = B, a(w, M), i(g) === null && M === i(w) && (j ? (P(U), U = -1) : j = !0, de(A, B - E))) : (M.sortIndex = z, a(g, M), b || C || (b = !0, le(H))), M;
    }, r.unstable_shouldYield = fe, r.unstable_wrapCallback = function(M) {
      var K = k;
      return function() {
        var B = k;
        k = K;
        try {
          return M.apply(this, arguments);
        } finally {
          k = B;
        }
      };
    };
  })(gl)), gl;
}
var Zd;
function Im() {
  return Zd || (Zd = 1, yl.exports = Mm()), yl.exports;
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
function Lm() {
  if (ef) return kt;
  ef = 1;
  var r = zl(), a = Im();
  function i(e) {
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, x = {};
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
  function j(e, t, n, s, l, u, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = m;
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
  var P = /[\-:]([a-z])/g;
  function F(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      P,
      F
    );
    N[t] = new j(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, F);
    N[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, F);
    N[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function $(e, t, n, s) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, s) && (n = null), s || l === null ? k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = Symbol.for("react.element"), O = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), xe = Symbol.for("react.provider"), fe = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var B = Object.assign, E;
  function z(e) {
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
`), m = l.length - 1, S = u.length - 1; 1 <= m && 0 <= S && l[m] !== u[S]; ) S--;
        for (; 1 <= m && 0 <= S; m--, S--) if (l[m] !== u[S]) {
          if (m !== 1 || S !== 1)
            do
              if (m--, S--, 0 > S || l[m] !== u[S]) {
                var T = `
` + l[m].replace(" at new ", " at ");
                return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), T;
              }
            while (1 <= m && 0 <= S);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return z(e.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
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
      case G:
        return "Fragment";
      case O:
        return "Portal";
      case X:
        return "Profiler";
      case U:
        return "StrictMode";
      case ve:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case fe:
        return (e.displayName || "Context") + ".Consumer";
      case xe:
        return (e._context.displayName || "Context") + ".Provider";
      case me:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case W:
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
  function Re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function it(e) {
    var t = Re(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(m) {
        s = "" + m, u.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(m) {
        s = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Xt(e) {
    e._valueTracker || (e._valueTracker = it(e));
  }
  function xn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = Re(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Z(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ye(e, t) {
    var n = t.checked;
    return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = Ce(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function De(e, t) {
    t = t.checked, t != null && $(e, "checked", t, !1);
  }
  function Et(e, t) {
    De(e, t);
    var n = Ce(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Un(e, t.type, n) : t.hasOwnProperty("defaultValue") && Un(e, t.type, Ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Yr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Un(e, t, n) {
    (t !== "number" || Z(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Jr = Array.isArray;
  function hr(e, t, n, s) {
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
  function Ci(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function su(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Jr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Ce(n) };
  }
  function ou(e, t) {
    var n = Ce(t.value), s = Ce(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function iu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function au(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ji(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? au(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Qs, lu = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Qs = Qs || document.createElement("div"), Qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Qs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Gr(e, t) {
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
  }, $p = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Xr).forEach(function(e) {
    $p.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Xr[t] = Xr[e];
    });
  });
  function uu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xr.hasOwnProperty(e) && Xr[e] ? ("" + t).trim() : t + "px";
  }
  function cu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = uu(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Mp = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ei(e, t) {
    if (t) {
      if (Mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Ni(e, t) {
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
  var Ti = null;
  function bi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ai = null, mr = null, vr = null;
  function du(e) {
    if (e = xs(e)) {
      if (typeof Ai != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = yo(t), Ai(e.stateNode, e.type, t));
    }
  }
  function fu(e) {
    mr ? vr ? vr.push(e) : vr = [e] : mr = e;
  }
  function pu() {
    if (mr) {
      var e = mr, t = vr;
      if (vr = mr = null, du(e), t) for (e = 0; e < t.length; e++) du(t[e]);
    }
  }
  function hu(e, t) {
    return e(t);
  }
  function mu() {
  }
  var Ri = !1;
  function vu(e, t, n) {
    if (Ri) return e(t, n);
    Ri = !0;
    try {
      return hu(e, t, n);
    } finally {
      Ri = !1, (mr !== null || vr !== null) && (mu(), pu());
    }
  }
  function Zr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = yo(n);
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
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Pi = !1;
  if (h) try {
    var es = {};
    Object.defineProperty(es, "passive", { get: function() {
      Pi = !0;
    } }), window.addEventListener("test", es, es), window.removeEventListener("test", es, es);
  } catch {
    Pi = !1;
  }
  function Ip(e, t, n, s, l, u, m, S, T) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (q) {
      this.onError(q);
    }
  }
  var ts = !1, Ks = null, Ys = !1, $i = null, Lp = { onError: function(e) {
    ts = !0, Ks = e;
  } };
  function Dp(e, t, n, s, l, u, m, S, T) {
    ts = !1, Ks = null, Ip.apply(Lp, arguments);
  }
  function Op(e, t, n, s, l, u, m, S, T) {
    if (Dp.apply(this, arguments), ts) {
      if (ts) {
        var D = Ks;
        ts = !1, Ks = null;
      } else throw Error(i(198));
      Ys || (Ys = !0, $i = D);
    }
  }
  function Vn(e) {
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
    if (Vn(e) !== e) throw Error(i(188));
  }
  function zp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Vn(e), t === null) throw Error(i(188));
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
        throw Error(i(188));
      }
      if (n.return !== s.return) n = l, s = u;
      else {
        for (var m = !1, S = l.child; S; ) {
          if (S === n) {
            m = !0, n = l, s = u;
            break;
          }
          if (S === s) {
            m = !0, s = l, n = u;
            break;
          }
          S = S.sibling;
        }
        if (!m) {
          for (S = u.child; S; ) {
            if (S === n) {
              m = !0, n = u, s = l;
              break;
            }
            if (S === s) {
              m = !0, s = u, n = l;
              break;
            }
            S = S.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (n.alternate !== s) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function _u(e) {
    return e = zp(e), e !== null ? xu(e) : null;
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
  var wu = a.unstable_scheduleCallback, ku = a.unstable_cancelCallback, Hp = a.unstable_shouldYield, Fp = a.unstable_requestPaint, Be = a.unstable_now, Wp = a.unstable_getCurrentPriorityLevel, Mi = a.unstable_ImmediatePriority, Su = a.unstable_UserBlockingPriority, Js = a.unstable_NormalPriority, Bp = a.unstable_LowPriority, Cu = a.unstable_IdlePriority, Gs = null, Zt = null;
  function Up(e) {
    if (Zt && typeof Zt.onCommitFiberRoot == "function") try {
      Zt.onCommitFiberRoot(Gs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Wt = Math.clz32 ? Math.clz32 : Qp, Vp = Math.log, qp = Math.LN2;
  function Qp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Vp(e) / qp | 0) | 0;
  }
  var Xs = 64, Zs = 4194304;
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
  function eo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, m = n & 268435455;
    if (m !== 0) {
      var S = m & ~l;
      S !== 0 ? s = ns(S) : (u &= m, u !== 0 && (s = ns(u)));
    } else m = n & ~l, m !== 0 ? s = ns(m) : u !== 0 && (s = ns(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Wt(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function Kp(e, t) {
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
  function Yp(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var m = 31 - Wt(u), S = 1 << m, T = l[m];
      T === -1 ? ((S & n) === 0 || (S & s) !== 0) && (l[m] = Kp(S, t)) : T <= t && (e.expiredLanes |= S), u &= ~S;
    }
  }
  function Ii(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ju() {
    var e = Xs;
    return Xs <<= 1, (Xs & 4194240) === 0 && (Xs = 64), e;
  }
  function Li(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function rs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
  }
  function Jp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Wt(n), u = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Di(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Wt(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Pe = 0;
  function Eu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Nu, Oi, Tu, bu, Au, zi = !1, to = [], wn = null, kn = null, Sn = null, ss = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), Cn = [], Gp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ru(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Sn = null;
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
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = xs(t), t !== null && Oi(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Xp(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return wn = is(wn, e, t, n, s, l), !0;
      case "dragenter":
        return kn = is(kn, e, t, n, s, l), !0;
      case "mouseover":
        return Sn = is(Sn, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return ss.set(u, is(ss.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, os.set(u, is(os.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function Pu(e) {
    var t = qn(e.target);
    if (t !== null) {
      var n = Vn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = yu(n), t !== null) {
            e.blockedOn = t, Au(e.priority, function() {
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
  function no(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Ti = s, n.target.dispatchEvent(s), Ti = null;
      } else return t = xs(n), t !== null && Oi(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $u(e, t, n) {
    no(e) && n.delete(t);
  }
  function Zp() {
    zi = !1, wn !== null && no(wn) && (wn = null), kn !== null && no(kn) && (kn = null), Sn !== null && no(Sn) && (Sn = null), ss.forEach($u), os.forEach($u);
  }
  function as(e, t) {
    e.blockedOn === t && (e.blockedOn = null, zi || (zi = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Zp)));
  }
  function ls(e) {
    function t(l) {
      return as(l, e);
    }
    if (0 < to.length) {
      as(to[0], e);
      for (var n = 1; n < to.length; n++) {
        var s = to[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (wn !== null && as(wn, e), kn !== null && as(kn, e), Sn !== null && as(Sn, e), ss.forEach(t), os.forEach(t), n = 0; n < Cn.length; n++) s = Cn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Cn.length && (n = Cn[0], n.blockedOn === null); ) Pu(n), n.blockedOn === null && Cn.shift();
  }
  var yr = A.ReactCurrentBatchConfig, ro = !0;
  function eh(e, t, n, s) {
    var l = Pe, u = yr.transition;
    yr.transition = null;
    try {
      Pe = 1, Hi(e, t, n, s);
    } finally {
      Pe = l, yr.transition = u;
    }
  }
  function th(e, t, n, s) {
    var l = Pe, u = yr.transition;
    yr.transition = null;
    try {
      Pe = 4, Hi(e, t, n, s);
    } finally {
      Pe = l, yr.transition = u;
    }
  }
  function Hi(e, t, n, s) {
    if (ro) {
      var l = Fi(e, t, n, s);
      if (l === null) sa(e, t, s, so, n), Ru(e, s);
      else if (Xp(l, e, t, n, s)) s.stopPropagation();
      else if (Ru(e, s), t & 4 && -1 < Gp.indexOf(e)) {
        for (; l !== null; ) {
          var u = xs(l);
          if (u !== null && Nu(u), u = Fi(e, t, n, s), u === null && sa(e, t, s, so, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else sa(e, t, s, null, n);
    }
  }
  var so = null;
  function Fi(e, t, n, s) {
    if (so = null, e = bi(s), e = qn(e), e !== null) if (t = Vn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = yu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return so = e, null;
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
        switch (Wp()) {
          case Mi:
            return 1;
          case Su:
            return 4;
          case Js:
          case Bp:
            return 16;
          case Cu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jn = null, Wi = null, oo = null;
  function Iu() {
    if (oo) return oo;
    var e, t = Wi, n = t.length, s, l = "value" in jn ? jn.value : jn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var m = n - e;
    for (s = 1; s <= m && t[n - s] === l[u - s]; s++) ;
    return oo = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function io(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ao() {
    return !0;
  }
  function Lu() {
    return !1;
  }
  function Nt(e) {
    function t(n, s, l, u, m) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(u) : u[S]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ao : Lu, this.isPropagationStopped = Lu, this;
    }
    return B(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ao);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ao);
    }, persist: function() {
    }, isPersistent: ao }), t;
  }
  var gr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Bi = Nt(gr), us = B({}, gr, { view: 0, detail: 0 }), nh = Nt(us), Ui, Vi, cs, lo = B({}, us, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== cs && (cs && e.type === "mousemove" ? (Ui = e.screenX - cs.screenX, Vi = e.screenY - cs.screenY) : Vi = Ui = 0, cs = e), Ui);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Vi;
  } }), Du = Nt(lo), rh = B({}, lo, { dataTransfer: 0 }), sh = Nt(rh), oh = B({}, us, { relatedTarget: 0 }), qi = Nt(oh), ih = B({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ah = Nt(ih), lh = B({}, gr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), uh = Nt(lh), ch = B({}, gr, { data: 0 }), Ou = Nt(ch), dh = {
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
  }, fh = {
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
  }, ph = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ph[e]) ? !!t[e] : !1;
  }
  function Qi() {
    return hh;
  }
  var mh = B({}, us, { key: function(e) {
    if (e.key) {
      var t = dh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = io(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qi, charCode: function(e) {
    return e.type === "keypress" ? io(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? io(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), vh = Nt(mh), yh = B({}, lo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zu = Nt(yh), gh = B({}, us, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qi }), _h = Nt(gh), xh = B({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wh = Nt(xh), kh = B({}, lo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Sh = Nt(kh), Ch = [9, 13, 27, 32], Ki = h && "CompositionEvent" in window, ds = null;
  h && "documentMode" in document && (ds = document.documentMode);
  var jh = h && "TextEvent" in window && !ds, Hu = h && (!Ki || ds && 8 < ds && 11 >= ds), Fu = " ", Wu = !1;
  function Bu(e, t) {
    switch (e) {
      case "keyup":
        return Ch.indexOf(t.keyCode) !== -1;
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
  var _r = !1;
  function Eh(e, t) {
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
  function Nh(e, t) {
    if (_r) return e === "compositionend" || !Ki && Bu(e, t) ? (e = Iu(), oo = Wi = jn = null, _r = !1, e) : null;
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
  var Th = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Th[e.type] : t === "textarea";
  }
  function qu(e, t, n, s) {
    fu(s), t = ho(t, "onChange"), 0 < t.length && (n = new Bi("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var fs = null, ps = null;
  function bh(e) {
    cc(e, 0);
  }
  function uo(e) {
    var t = Cr(e);
    if (xn(t)) return e;
  }
  function Ah(e, t) {
    if (e === "change") return t;
  }
  var Qu = !1;
  if (h) {
    var Yi;
    if (h) {
      var Ji = "oninput" in document;
      if (!Ji) {
        var Ku = document.createElement("div");
        Ku.setAttribute("oninput", "return;"), Ji = typeof Ku.oninput == "function";
      }
      Yi = Ji;
    } else Yi = !1;
    Qu = Yi && (!document.documentMode || 9 < document.documentMode);
  }
  function Yu() {
    fs && (fs.detachEvent("onpropertychange", Ju), ps = fs = null);
  }
  function Ju(e) {
    if (e.propertyName === "value" && uo(ps)) {
      var t = [];
      qu(t, ps, e, bi(e)), vu(bh, t);
    }
  }
  function Rh(e, t, n) {
    e === "focusin" ? (Yu(), fs = t, ps = n, fs.attachEvent("onpropertychange", Ju)) : e === "focusout" && Yu();
  }
  function Ph(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return uo(ps);
  }
  function $h(e, t) {
    if (e === "click") return uo(t);
  }
  function Mh(e, t) {
    if (e === "input" || e === "change") return uo(t);
  }
  function Ih(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : Ih;
  function hs(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!g.call(t, l) || !Bt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Gu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xu(e, t) {
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
  function Zu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ec() {
    for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Z(e.document);
    }
    return t;
  }
  function Gi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Lh(e) {
    var t = ec(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zu(n.ownerDocument.documentElement, n)) {
      if (s !== null && Gi(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(s.start, l);
          s = s.end === void 0 ? u : Math.min(s.end, l), !e.extend && u > s && (l = s, s = u, u = l), l = Xu(n, u);
          var m = Xu(
            n,
            s
          );
          l && m && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > s ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Dh = h && "documentMode" in document && 11 >= document.documentMode, xr = null, Xi = null, ms = null, Zi = !1;
  function tc(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zi || xr == null || xr !== Z(s) || (s = xr, "selectionStart" in s && Gi(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ms && hs(ms, s) || (ms = s, s = ho(Xi, "onSelect"), 0 < s.length && (t = new Bi("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = xr)));
  }
  function co(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var wr = { animationend: co("Animation", "AnimationEnd"), animationiteration: co("Animation", "AnimationIteration"), animationstart: co("Animation", "AnimationStart"), transitionend: co("Transition", "TransitionEnd") }, ea = {}, nc = {};
  h && (nc = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
  function fo(e) {
    if (ea[e]) return ea[e];
    if (!wr[e]) return e;
    var t = wr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in nc) return ea[e] = t[n];
    return e;
  }
  var rc = fo("animationend"), sc = fo("animationiteration"), oc = fo("animationstart"), ic = fo("transitionend"), ac = /* @__PURE__ */ new Map(), lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function En(e, t) {
    ac.set(e, t), f(t, [e]);
  }
  for (var ta = 0; ta < lc.length; ta++) {
    var na = lc[ta], Oh = na.toLowerCase(), zh = na[0].toUpperCase() + na.slice(1);
    En(Oh, "on" + zh);
  }
  En(rc, "onAnimationEnd"), En(sc, "onAnimationIteration"), En(oc, "onAnimationStart"), En("dblclick", "onDoubleClick"), En("focusin", "onFocus"), En("focusout", "onBlur"), En(ic, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hh = new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));
  function uc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, Op(s, t, void 0, e), e.currentTarget = null;
  }
  function cc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var m = s.length - 1; 0 <= m; m--) {
          var S = s[m], T = S.instance, D = S.currentTarget;
          if (S = S.listener, T !== u && l.isPropagationStopped()) break e;
          uc(l, S, D), u = T;
        }
        else for (m = 0; m < s.length; m++) {
          if (S = s[m], T = S.instance, D = S.currentTarget, S = S.listener, T !== u && l.isPropagationStopped()) break e;
          uc(l, S, D), u = T;
        }
      }
    }
    if (Ys) throw e = $i, Ys = !1, $i = null, e;
  }
  function Ie(e, t) {
    var n = t[ca];
    n === void 0 && (n = t[ca] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (dc(t, e, 2, !1), n.add(s));
  }
  function ra(e, t, n) {
    var s = 0;
    t && (s |= 4), dc(n, e, s, t);
  }
  var po = "_reactListening" + Math.random().toString(36).slice(2);
  function ys(e) {
    if (!e[po]) {
      e[po] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Hh.has(n) || ra(n, !1, e), ra(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[po] || (t[po] = !0, ra("selectionchange", !1, t));
    }
  }
  function dc(e, t, n, s) {
    switch (Mu(t)) {
      case 1:
        var l = eh;
        break;
      case 4:
        l = th;
        break;
      default:
        l = Hi;
    }
    n = l.bind(null, t, n, e), l = void 0, !Pi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function sa(e, t, n, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var m = s.tag;
      if (m === 3 || m === 4) {
        var S = s.stateNode.containerInfo;
        if (S === l || S.nodeType === 8 && S.parentNode === l) break;
        if (m === 4) for (m = s.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === l || T.nodeType === 8 && T.parentNode === l)) return;
          m = m.return;
        }
        for (; S !== null; ) {
          if (m = qn(S), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            s = u = m;
            continue e;
          }
          S = S.parentNode;
        }
      }
      s = s.return;
    }
    vu(function() {
      var D = u, q = bi(n), Q = [];
      e: {
        var V = ac.get(e);
        if (V !== void 0) {
          var ee = Bi, ne = e;
          switch (e) {
            case "keypress":
              if (io(n) === 0) break e;
            case "keydown":
            case "keyup":
              ee = vh;
              break;
            case "focusin":
              ne = "focus", ee = qi;
              break;
            case "focusout":
              ne = "blur", ee = qi;
              break;
            case "beforeblur":
            case "afterblur":
              ee = qi;
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
              ee = sh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = _h;
              break;
            case rc:
            case sc:
            case oc:
              ee = ah;
              break;
            case ic:
              ee = wh;
              break;
            case "scroll":
              ee = nh;
              break;
            case "wheel":
              ee = Sh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = uh;
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
          var se = (t & 4) !== 0, Ue = !se && e === "scroll", I = se ? V !== null ? V + "Capture" : null : V;
          se = [];
          for (var R = D, L; R !== null; ) {
            L = R;
            var Y = L.stateNode;
            if (L.tag === 5 && Y !== null && (L = Y, I !== null && (Y = Zr(R, I), Y != null && se.push(gs(R, Y, L)))), Ue) break;
            R = R.return;
          }
          0 < se.length && (V = new ee(V, ne, null, n, q), Q.push({ event: V, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", V && n !== Ti && (ne = n.relatedTarget || n.fromElement) && (qn(ne) || ne[ln])) break e;
          if ((ee || V) && (V = q.window === q ? q : (V = q.ownerDocument) ? V.defaultView || V.parentWindow : window, ee ? (ne = n.relatedTarget || n.toElement, ee = D, ne = ne ? qn(ne) : null, ne !== null && (Ue = Vn(ne), ne !== Ue || ne.tag !== 5 && ne.tag !== 6) && (ne = null)) : (ee = null, ne = D), ee !== ne)) {
            if (se = Du, Y = "onMouseLeave", I = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (se = zu, Y = "onPointerLeave", I = "onPointerEnter", R = "pointer"), Ue = ee == null ? V : Cr(ee), L = ne == null ? V : Cr(ne), V = new se(Y, R + "leave", ee, n, q), V.target = Ue, V.relatedTarget = L, Y = null, qn(q) === D && (se = new se(I, R + "enter", ne, n, q), se.target = L, se.relatedTarget = Ue, Y = se), Ue = Y, ee && ne) t: {
              for (se = ee, I = ne, R = 0, L = se; L; L = kr(L)) R++;
              for (L = 0, Y = I; Y; Y = kr(Y)) L++;
              for (; 0 < R - L; ) se = kr(se), R--;
              for (; 0 < L - R; ) I = kr(I), L--;
              for (; R--; ) {
                if (se === I || I !== null && se === I.alternate) break t;
                se = kr(se), I = kr(I);
              }
              se = null;
            }
            else se = null;
            ee !== null && fc(Q, V, ee, se, !1), ne !== null && Ue !== null && fc(Q, Ue, ne, se, !0);
          }
        }
        e: {
          if (V = D ? Cr(D) : window, ee = V.nodeName && V.nodeName.toLowerCase(), ee === "select" || ee === "input" && V.type === "file") var ae = Ah;
          else if (Vu(V)) if (Qu) ae = Mh;
          else {
            ae = Ph;
            var ue = Rh;
          }
          else (ee = V.nodeName) && ee.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (ae = $h);
          if (ae && (ae = ae(e, D))) {
            qu(Q, ae, n, q);
            break e;
          }
          ue && ue(e, V, D), e === "focusout" && (ue = V._wrapperState) && ue.controlled && V.type === "number" && Un(V, "number", V.value);
        }
        switch (ue = D ? Cr(D) : window, e) {
          case "focusin":
            (Vu(ue) || ue.contentEditable === "true") && (xr = ue, Xi = D, ms = null);
            break;
          case "focusout":
            ms = Xi = xr = null;
            break;
          case "mousedown":
            Zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zi = !1, tc(Q, n, q);
            break;
          case "selectionchange":
            if (Dh) break;
          case "keydown":
          case "keyup":
            tc(Q, n, q);
        }
        var ce;
        if (Ki) e: {
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
        else _r ? Bu(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (Hu && n.locale !== "ko" && (_r || he !== "onCompositionStart" ? he === "onCompositionEnd" && _r && (ce = Iu()) : (jn = q, Wi = "value" in jn ? jn.value : jn.textContent, _r = !0)), ue = ho(D, he), 0 < ue.length && (he = new Ou(he, e, null, n, q), Q.push({ event: he, listeners: ue }), ce ? he.data = ce : (ce = Uu(n), ce !== null && (he.data = ce)))), (ce = jh ? Eh(e, n) : Nh(e, n)) && (D = ho(D, "onBeforeInput"), 0 < D.length && (q = new Ou("onBeforeInput", "beforeinput", null, n, q), Q.push({ event: q, listeners: D }), q.data = ce));
      }
      cc(Q, t);
    });
  }
  function gs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ho(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Zr(e, n), u != null && s.unshift(gs(e, u, l)), u = Zr(e, t), u != null && s.push(gs(e, u, l))), e = e.return;
    }
    return s;
  }
  function kr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function fc(e, t, n, s, l) {
    for (var u = t._reactName, m = []; n !== null && n !== s; ) {
      var S = n, T = S.alternate, D = S.stateNode;
      if (T !== null && T === s) break;
      S.tag === 5 && D !== null && (S = D, l ? (T = Zr(n, u), T != null && m.unshift(gs(n, T, S))) : l || (T = Zr(n, u), T != null && m.push(gs(n, T, S)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Fh = /\r\n?/g, Wh = /\u0000|\uFFFD/g;
  function pc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Fh, `
`).replace(Wh, "");
  }
  function mo(e, t, n) {
    if (t = pc(t), pc(e) !== t && n) throw Error(i(425));
  }
  function vo() {
  }
  var oa = null, ia = null;
  function aa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var la = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, hc = typeof Promise == "function" ? Promise : void 0, Uh = typeof queueMicrotask == "function" ? queueMicrotask : typeof hc < "u" ? function(e) {
    return hc.resolve(null).then(e).catch(Vh);
  } : la;
  function Vh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ua(e, t) {
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
  function Nn(e) {
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
  var Sr = Math.random().toString(36).slice(2), en = "__reactFiber$" + Sr, _s = "__reactProps$" + Sr, ln = "__reactContainer$" + Sr, ca = "__reactEvents$" + Sr, qh = "__reactListeners$" + Sr, Qh = "__reactHandles$" + Sr;
  function qn(e) {
    var t = e[en];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ln] || n[en]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = mc(e); e !== null; ) {
          if (n = e[en]) return n;
          e = mc(e);
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
  function Cr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function yo(e) {
    return e[_s] || null;
  }
  var da = [], jr = -1;
  function Tn(e) {
    return { current: e };
  }
  function Le(e) {
    0 > jr || (e.current = da[jr], da[jr] = null, jr--);
  }
  function Me(e, t) {
    jr++, da[jr] = e.current, e.current = t;
  }
  var bn = {}, at = Tn(bn), yt = Tn(!1), Qn = bn;
  function Er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return bn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function gt(e) {
    return e = e.childContextTypes, e != null;
  }
  function go() {
    Le(yt), Le(at);
  }
  function vc(e, t, n) {
    if (at.current !== bn) throw Error(i(168));
    Me(at, t), Me(yt, n);
  }
  function yc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(i(108, Ne(e) || "Unknown", l));
    return B({}, n, s);
  }
  function _o(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bn, Qn = at.current, Me(at, e), Me(yt, yt.current), !0;
  }
  function gc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    n ? (e = yc(e, t, Qn), s.__reactInternalMemoizedMergedChildContext = e, Le(yt), Le(at), Me(at, e)) : Le(yt), Me(yt, n);
  }
  var un = null, xo = !1, fa = !1;
  function _c(e) {
    un === null ? un = [e] : un.push(e);
  }
  function Kh(e) {
    xo = !0, _c(e);
  }
  function An() {
    if (!fa && un !== null) {
      fa = !0;
      var e = 0, t = Pe;
      try {
        var n = un;
        for (Pe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        un = null, xo = !1;
      } catch (l) {
        throw un !== null && (un = un.slice(e + 1)), wu(Mi, An), l;
      } finally {
        Pe = t, fa = !1;
      }
    }
    return null;
  }
  var Nr = [], Tr = 0, wo = null, ko = 0, Pt = [], $t = 0, Kn = null, cn = 1, dn = "";
  function Yn(e, t) {
    Nr[Tr++] = ko, Nr[Tr++] = wo, wo = e, ko = t;
  }
  function xc(e, t, n) {
    Pt[$t++] = cn, Pt[$t++] = dn, Pt[$t++] = Kn, Kn = e;
    var s = cn;
    e = dn;
    var l = 32 - Wt(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - Wt(t) + l;
    if (30 < u) {
      var m = l - l % 5;
      u = (s & (1 << m) - 1).toString(32), s >>= m, l -= m, cn = 1 << 32 - Wt(t) + l | n << l | s, dn = u + e;
    } else cn = 1 << u | n << l | s, dn = e;
  }
  function pa(e) {
    e.return !== null && (Yn(e, 1), xc(e, 1, 0));
  }
  function ha(e) {
    for (; e === wo; ) wo = Nr[--Tr], Nr[Tr] = null, ko = Nr[--Tr], Nr[Tr] = null;
    for (; e === Kn; ) Kn = Pt[--$t], Pt[$t] = null, dn = Pt[--$t], Pt[$t] = null, cn = Pt[--$t], Pt[$t] = null;
  }
  var Tt = null, bt = null, Oe = !1, Ut = null;
  function wc(e, t) {
    var n = Dt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function kc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Tt = e, bt = Nn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Tt = e, bt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Kn !== null ? { id: cn, overflow: dn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Tt = e, bt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ma(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function va(e) {
    if (Oe) {
      var t = bt;
      if (t) {
        var n = t;
        if (!kc(e, t)) {
          if (ma(e)) throw Error(i(418));
          t = Nn(n.nextSibling);
          var s = Tt;
          t && kc(e, t) ? wc(s, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, Tt = e);
        }
      } else {
        if (ma(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Oe = !1, Tt = e;
      }
    }
  }
  function Sc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Tt = e;
  }
  function So(e) {
    if (e !== Tt) return !1;
    if (!Oe) return Sc(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !aa(e.type, e.memoizedProps)), t && (t = bt)) {
      if (ma(e)) throw Cc(), Error(i(418));
      for (; t; ) wc(e, t), t = Nn(t.nextSibling);
    }
    if (Sc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                bt = Nn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        bt = null;
      }
    } else bt = Tt ? Nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Cc() {
    for (var e = bt; e; ) e = Nn(e.nextSibling);
  }
  function br() {
    bt = Tt = null, Oe = !1;
  }
  function ya(e) {
    Ut === null ? Ut = [e] : Ut.push(e);
  }
  var Yh = A.ReactCurrentBatchConfig;
  function ws(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var l = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(m) {
          var S = l.refs;
          m === null ? delete S[u] : S[u] = m;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Co(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function jc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ec(e) {
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
      return I = On(I, R), I.index = 0, I.sibling = null, I;
    }
    function u(I, R, L) {
      return I.index = L, e ? (L = I.alternate, L !== null ? (L = L.index, L < R ? (I.flags |= 2, R) : L) : (I.flags |= 2, R)) : (I.flags |= 1048576, R);
    }
    function m(I) {
      return e && I.alternate === null && (I.flags |= 2), I;
    }
    function S(I, R, L, Y) {
      return R === null || R.tag !== 6 ? (R = ll(L, I.mode, Y), R.return = I, R) : (R = l(R, L), R.return = I, R);
    }
    function T(I, R, L, Y) {
      var ae = L.type;
      return ae === G ? q(I, R, L.props.children, Y, L.key) : R !== null && (R.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === le && jc(ae) === R.type) ? (Y = l(R, L.props), Y.ref = ws(I, R, L), Y.return = I, Y) : (Y = Ko(L.type, L.key, L.props, null, I.mode, Y), Y.ref = ws(I, R, L), Y.return = I, Y);
    }
    function D(I, R, L, Y) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = ul(L, I.mode, Y), R.return = I, R) : (R = l(R, L.children || []), R.return = I, R);
    }
    function q(I, R, L, Y, ae) {
      return R === null || R.tag !== 7 ? (R = rr(L, I.mode, Y, ae), R.return = I, R) : (R = l(R, L), R.return = I, R);
    }
    function Q(I, R, L) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = ll("" + R, I.mode, L), R.return = I, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            return L = Ko(R.type, R.key, R.props, null, I.mode, L), L.ref = ws(I, null, R), L.return = I, L;
          case O:
            return R = ul(R, I.mode, L), R.return = I, R;
          case le:
            var Y = R._init;
            return Q(I, Y(R._payload), L);
        }
        if (Jr(R) || K(R)) return R = rr(R, I.mode, L, null), R.return = I, R;
        Co(I, R);
      }
      return null;
    }
    function V(I, R, L, Y) {
      var ae = R !== null ? R.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ae !== null ? null : S(I, R, "" + L, Y);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case H:
            return L.key === ae ? T(I, R, L, Y) : null;
          case O:
            return L.key === ae ? D(I, R, L, Y) : null;
          case le:
            return ae = L._init, V(
              I,
              R,
              ae(L._payload),
              Y
            );
        }
        if (Jr(L) || K(L)) return ae !== null ? null : q(I, R, L, Y, null);
        Co(I, L);
      }
      return null;
    }
    function ee(I, R, L, Y, ae) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return I = I.get(L) || null, S(R, I, "" + Y, ae);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case H:
            return I = I.get(Y.key === null ? L : Y.key) || null, T(R, I, Y, ae);
          case O:
            return I = I.get(Y.key === null ? L : Y.key) || null, D(R, I, Y, ae);
          case le:
            var ue = Y._init;
            return ee(I, R, L, ue(Y._payload), ae);
        }
        if (Jr(Y) || K(Y)) return I = I.get(L) || null, q(R, I, Y, ae, null);
        Co(R, Y);
      }
      return null;
    }
    function ne(I, R, L, Y) {
      for (var ae = null, ue = null, ce = R, he = R = 0, et = null; ce !== null && he < L.length; he++) {
        ce.index > he ? (et = ce, ce = null) : et = ce.sibling;
        var Te = V(I, ce, L[he], Y);
        if (Te === null) {
          ce === null && (ce = et);
          break;
        }
        e && ce && Te.alternate === null && t(I, ce), R = u(Te, R, he), ue === null ? ae = Te : ue.sibling = Te, ue = Te, ce = et;
      }
      if (he === L.length) return n(I, ce), Oe && Yn(I, he), ae;
      if (ce === null) {
        for (; he < L.length; he++) ce = Q(I, L[he], Y), ce !== null && (R = u(ce, R, he), ue === null ? ae = ce : ue.sibling = ce, ue = ce);
        return Oe && Yn(I, he), ae;
      }
      for (ce = s(I, ce); he < L.length; he++) et = ee(ce, I, he, L[he], Y), et !== null && (e && et.alternate !== null && ce.delete(et.key === null ? he : et.key), R = u(et, R, he), ue === null ? ae = et : ue.sibling = et, ue = et);
      return e && ce.forEach(function(zn) {
        return t(I, zn);
      }), Oe && Yn(I, he), ae;
    }
    function se(I, R, L, Y) {
      var ae = K(L);
      if (typeof ae != "function") throw Error(i(150));
      if (L = ae.call(L), L == null) throw Error(i(151));
      for (var ue = ae = null, ce = R, he = R = 0, et = null, Te = L.next(); ce !== null && !Te.done; he++, Te = L.next()) {
        ce.index > he ? (et = ce, ce = null) : et = ce.sibling;
        var zn = V(I, ce, Te.value, Y);
        if (zn === null) {
          ce === null && (ce = et);
          break;
        }
        e && ce && zn.alternate === null && t(I, ce), R = u(zn, R, he), ue === null ? ae = zn : ue.sibling = zn, ue = zn, ce = et;
      }
      if (Te.done) return n(
        I,
        ce
      ), Oe && Yn(I, he), ae;
      if (ce === null) {
        for (; !Te.done; he++, Te = L.next()) Te = Q(I, Te.value, Y), Te !== null && (R = u(Te, R, he), ue === null ? ae = Te : ue.sibling = Te, ue = Te);
        return Oe && Yn(I, he), ae;
      }
      for (ce = s(I, ce); !Te.done; he++, Te = L.next()) Te = ee(ce, I, he, Te.value, Y), Te !== null && (e && Te.alternate !== null && ce.delete(Te.key === null ? he : Te.key), R = u(Te, R, he), ue === null ? ae = Te : ue.sibling = Te, ue = Te);
      return e && ce.forEach(function(Tm) {
        return t(I, Tm);
      }), Oe && Yn(I, he), ae;
    }
    function Ue(I, R, L, Y) {
      if (typeof L == "object" && L !== null && L.type === G && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case H:
            e: {
              for (var ae = L.key, ue = R; ue !== null; ) {
                if (ue.key === ae) {
                  if (ae = L.type, ae === G) {
                    if (ue.tag === 7) {
                      n(I, ue.sibling), R = l(ue, L.props.children), R.return = I, I = R;
                      break e;
                    }
                  } else if (ue.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === le && jc(ae) === ue.type) {
                    n(I, ue.sibling), R = l(ue, L.props), R.ref = ws(I, ue, L), R.return = I, I = R;
                    break e;
                  }
                  n(I, ue);
                  break;
                } else t(I, ue);
                ue = ue.sibling;
              }
              L.type === G ? (R = rr(L.props.children, I.mode, Y, L.key), R.return = I, I = R) : (Y = Ko(L.type, L.key, L.props, null, I.mode, Y), Y.ref = ws(I, R, L), Y.return = I, I = Y);
            }
            return m(I);
          case O:
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
              R = ul(L, I.mode, Y), R.return = I, I = R;
            }
            return m(I);
          case le:
            return ue = L._init, Ue(I, R, ue(L._payload), Y);
        }
        if (Jr(L)) return ne(I, R, L, Y);
        if (K(L)) return se(I, R, L, Y);
        Co(I, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, R !== null && R.tag === 6 ? (n(I, R.sibling), R = l(R, L), R.return = I, I = R) : (n(I, R), R = ll(L, I.mode, Y), R.return = I, I = R), m(I)) : n(I, R);
    }
    return Ue;
  }
  var Ar = Ec(!0), Nc = Ec(!1), jo = Tn(null), Eo = null, Rr = null, ga = null;
  function _a() {
    ga = Rr = Eo = null;
  }
  function xa(e) {
    var t = jo.current;
    Le(jo), e._currentValue = t;
  }
  function wa(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pr(e, t) {
    Eo = e, ga = Rr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (_t = !0), e.firstContext = null);
  }
  function Mt(e) {
    var t = e._currentValue;
    if (ga !== e) if (e = { context: e, memoizedValue: t, next: null }, Rr === null) {
      if (Eo === null) throw Error(i(308));
      Rr = e, Eo.dependencies = { lanes: 0, firstContext: e };
    } else Rr = Rr.next = e;
    return t;
  }
  var Jn = null;
  function ka(e) {
    Jn === null ? Jn = [e] : Jn.push(e);
  }
  function Tc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, ka(t)) : (n.next = l.next, l.next = n), t.interleaved = n, fn(e, s);
  }
  function fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Rn = !1;
  function Sa(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function pn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Pn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ee & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, fn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, ka(s)) : (t.next = l.next, l.next = t), s.interleaved = t, fn(e, n);
  }
  function No(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Di(e, n);
    }
  }
  function Ac(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = m : u = u.next = m, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: s.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function To(e, t, n, s) {
    var l = e.updateQueue;
    Rn = !1;
    var u = l.firstBaseUpdate, m = l.lastBaseUpdate, S = l.shared.pending;
    if (S !== null) {
      l.shared.pending = null;
      var T = S, D = T.next;
      T.next = null, m === null ? u = D : m.next = D, m = T;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, S = q.lastBaseUpdate, S !== m && (S === null ? q.firstBaseUpdate = D : S.next = D, q.lastBaseUpdate = T));
    }
    if (u !== null) {
      var Q = l.baseState;
      m = 0, q = D = T = null, S = u;
      do {
        var V = S.lane, ee = S.eventTime;
        if ((s & V) === V) {
          q !== null && (q = q.next = {
            eventTime: ee,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ne = e, se = S;
            switch (V = t, ee = n, se.tag) {
              case 1:
                if (ne = se.payload, typeof ne == "function") {
                  Q = ne.call(ee, Q, V);
                  break e;
                }
                Q = ne;
                break e;
              case 3:
                ne.flags = ne.flags & -65537 | 128;
              case 0:
                if (ne = se.payload, V = typeof ne == "function" ? ne.call(ee, Q, V) : ne, V == null) break e;
                Q = B({}, Q, V);
                break e;
              case 2:
                Rn = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (e.flags |= 64, V = l.effects, V === null ? l.effects = [S] : V.push(S));
        } else ee = { eventTime: ee, lane: V, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, q === null ? (D = q = ee, T = Q) : q = q.next = ee, m |= V;
        if (S = S.next, S === null) {
          if (S = l.shared.pending, S === null) break;
          V = S, S = V.next, V.next = null, l.lastBaseUpdate = V, l.shared.pending = null;
        }
      } while (!0);
      if (q === null && (T = Q), l.baseState = T, l.firstBaseUpdate = D, l.lastBaseUpdate = q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          m |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      Zn |= m, e.lanes = m, e.memoizedState = Q;
    }
  }
  function Rc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], l = s.callback;
      if (l !== null) {
        if (s.callback = null, s = n, typeof l != "function") throw Error(i(191, l));
        l.call(s);
      }
    }
  }
  var ks = {}, tn = Tn(ks), Ss = Tn(ks), Cs = Tn(ks);
  function Gn(e) {
    if (e === ks) throw Error(i(174));
    return e;
  }
  function Ca(e, t) {
    switch (Me(Cs, t), Me(Ss, e), Me(tn, ks), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ji(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ji(t, e);
    }
    Le(tn), Me(tn, t);
  }
  function $r() {
    Le(tn), Le(Ss), Le(Cs);
  }
  function Pc(e) {
    Gn(Cs.current);
    var t = Gn(tn.current), n = ji(t, e.type);
    t !== n && (Me(Ss, e), Me(tn, n));
  }
  function ja(e) {
    Ss.current === e && (Le(tn), Le(Ss));
  }
  var He = Tn(0);
  function bo(e) {
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
  var Ea = [];
  function Na() {
    for (var e = 0; e < Ea.length; e++) Ea[e]._workInProgressVersionPrimary = null;
    Ea.length = 0;
  }
  var Ao = A.ReactCurrentDispatcher, Ta = A.ReactCurrentBatchConfig, Xn = 0, Fe = null, Ye = null, Xe = null, Ro = !1, js = !1, Es = 0, Jh = 0;
  function lt() {
    throw Error(i(321));
  }
  function ba(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function Aa(e, t, n, s, l, u) {
    if (Xn = u, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ao.current = e === null || e.memoizedState === null ? em : tm, e = n(s, l), js) {
      u = 0;
      do {
        if (js = !1, Es = 0, 25 <= u) throw Error(i(301));
        u += 1, Xe = Ye = null, t.updateQueue = null, Ao.current = nm, e = n(s, l);
      } while (js);
    }
    if (Ao.current = Mo, t = Ye !== null && Ye.next !== null, Xn = 0, Xe = Ye = Fe = null, Ro = !1, t) throw Error(i(300));
    return e;
  }
  function Ra() {
    var e = Es !== 0;
    return Es = 0, e;
  }
  function nn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xe === null ? Fe.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function It() {
    if (Ye === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = Xe === null ? Fe.memoizedState : Xe.next;
    if (t !== null) Xe = t, Ye = e;
    else {
      if (e === null) throw Error(i(310));
      Ye = e, e = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, Xe === null ? Fe.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function Ns(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pa(e) {
    var t = It(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = Ye, l = s.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var m = l.next;
        l.next = u.next, u.next = m;
      }
      s.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, s = s.baseState;
      var S = m = null, T = null, D = u;
      do {
        var q = D.lane;
        if ((Xn & q) === q) T !== null && (T = T.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), s = D.hasEagerState ? D.eagerState : e(s, D.action);
        else {
          var Q = {
            lane: q,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          T === null ? (S = T = Q, m = s) : T = T.next = Q, Fe.lanes |= q, Zn |= q;
        }
        D = D.next;
      } while (D !== null && D !== u);
      T === null ? m = s : T.next = S, Bt(s, t.memoizedState) || (_t = !0), t.memoizedState = s, t.baseState = m, t.baseQueue = T, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, Fe.lanes |= u, Zn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $a(e) {
    var t = It(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var m = l = l.next;
      do
        u = e(u, m.action), m = m.next;
      while (m !== l);
      Bt(u, t.memoizedState) || (_t = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function $c() {
  }
  function Mc(e, t) {
    var n = Fe, s = It(), l = t(), u = !Bt(s.memoizedState, l);
    if (u && (s.memoizedState = l, _t = !0), s = s.queue, Ma(Dc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Xe !== null && Xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ts(9, Lc.bind(null, n, s, l, t), void 0, null), Ze === null) throw Error(i(349));
      (Xn & 30) !== 0 || Ic(n, t, l);
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
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function zc(e) {
    var t = fn(e, 1);
    t !== null && Kt(t, e, 1, -1);
  }
  function Hc(e) {
    var t = nn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ns, lastRenderedState: e }, t.queue = e, e = e.dispatch = Zh.bind(null, Fe, e), [t.memoizedState, e];
  }
  function Ts(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Fc() {
    return It().memoizedState;
  }
  function Po(e, t, n, s) {
    var l = nn();
    Fe.flags |= e, l.memoizedState = Ts(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function $o(e, t, n, s) {
    var l = It();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Ye !== null) {
      var m = Ye.memoizedState;
      if (u = m.destroy, s !== null && ba(s, m.deps)) {
        l.memoizedState = Ts(t, n, u, s);
        return;
      }
    }
    Fe.flags |= e, l.memoizedState = Ts(1 | t, n, u, s);
  }
  function Wc(e, t) {
    return Po(8390656, 8, e, t);
  }
  function Ma(e, t) {
    return $o(2048, 8, e, t);
  }
  function Bc(e, t) {
    return $o(4, 2, e, t);
  }
  function Uc(e, t) {
    return $o(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, $o(4, 4, Vc.bind(null, t, e), n);
  }
  function Ia() {
  }
  function Qc(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && ba(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Kc(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && ba(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Yc(e, t, n) {
    return (Xn & 21) === 0 ? (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n) : (Bt(n, t) || (n = ju(), Fe.lanes |= n, Zn |= n, e.baseState = !0), t);
  }
  function Gh(e, t) {
    var n = Pe;
    Pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Ta.transition;
    Ta.transition = {};
    try {
      e(!1), t();
    } finally {
      Pe = n, Ta.transition = s;
    }
  }
  function Jc() {
    return It().memoizedState;
  }
  function Xh(e, t, n) {
    var s = Ln(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Gc(e)) Xc(t, n);
    else if (n = Tc(e, t, n, s), n !== null) {
      var l = vt();
      Kt(n, e, s, l), Zc(n, t, s);
    }
  }
  function Zh(e, t, n) {
    var s = Ln(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Gc(e)) Xc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var m = t.lastRenderedState, S = u(m, n);
        if (l.hasEagerState = !0, l.eagerState = S, Bt(S, m)) {
          var T = t.interleaved;
          T === null ? (l.next = l, ka(t)) : (l.next = T.next, T.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Tc(e, t, l, s), n !== null && (l = vt(), Kt(n, e, s, l), Zc(n, t, s));
    }
  }
  function Gc(e) {
    var t = e.alternate;
    return e === Fe || t !== null && t === Fe;
  }
  function Xc(e, t) {
    js = Ro = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Zc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Di(e, n);
    }
  }
  var Mo = { readContext: Mt, useCallback: lt, useContext: lt, useEffect: lt, useImperativeHandle: lt, useInsertionEffect: lt, useLayoutEffect: lt, useMemo: lt, useReducer: lt, useRef: lt, useState: lt, useDebugValue: lt, useDeferredValue: lt, useTransition: lt, useMutableSource: lt, useSyncExternalStore: lt, useId: lt, unstable_isNewReconciler: !1 }, em = { readContext: Mt, useCallback: function(e, t) {
    return nn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Mt, useEffect: Wc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Po(
      4194308,
      4,
      Vc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Po(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Po(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = nn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = nn();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Xh.bind(null, Fe, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = nn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hc, useDebugValue: Ia, useDeferredValue: function(e) {
    return nn().memoizedState = e;
  }, useTransition: function() {
    var e = Hc(!1), t = e[0];
    return e = Gh.bind(null, e[1]), nn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Fe, l = nn();
    if (Oe) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Ze === null) throw Error(i(349));
      (Xn & 30) !== 0 || Ic(s, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Wc(Dc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, Ts(9, Lc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = nn(), t = Ze.identifierPrefix;
    if (Oe) {
      var n = dn, s = cn;
      n = (s & ~(1 << 32 - Wt(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Es++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Jh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, tm = {
    readContext: Mt,
    useCallback: Qc,
    useContext: Mt,
    useEffect: Ma,
    useImperativeHandle: qc,
    useInsertionEffect: Bc,
    useLayoutEffect: Uc,
    useMemo: Kc,
    useReducer: Pa,
    useRef: Fc,
    useState: function() {
      return Pa(Ns);
    },
    useDebugValue: Ia,
    useDeferredValue: function(e) {
      var t = It();
      return Yc(t, Ye.memoizedState, e);
    },
    useTransition: function() {
      var e = Pa(Ns)[0], t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: $c,
    useSyncExternalStore: Mc,
    useId: Jc,
    unstable_isNewReconciler: !1
  }, nm = { readContext: Mt, useCallback: Qc, useContext: Mt, useEffect: Ma, useImperativeHandle: qc, useInsertionEffect: Bc, useLayoutEffect: Uc, useMemo: Kc, useReducer: $a, useRef: Fc, useState: function() {
    return $a(Ns);
  }, useDebugValue: Ia, useDeferredValue: function(e) {
    var t = It();
    return Ye === null ? t.memoizedState = e : Yc(t, Ye.memoizedState, e);
  }, useTransition: function() {
    var e = $a(Ns)[0], t = It().memoizedState;
    return [e, t];
  }, useMutableSource: $c, useSyncExternalStore: Mc, useId: Jc, unstable_isNewReconciler: !1 };
  function Vt(e, t) {
    if (e && e.defaultProps) {
      t = B({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function La(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Io = { isMounted: function(e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = vt(), l = Ln(e), u = pn(s, l);
    u.payload = t, n != null && (u.callback = n), t = Pn(e, u, l), t !== null && (Kt(t, e, l, s), No(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = vt(), l = Ln(e), u = pn(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Pn(e, u, l), t !== null && (Kt(t, e, l, s), No(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = vt(), s = Ln(e), l = pn(n, s);
    l.tag = 2, t != null && (l.callback = t), t = Pn(e, l, s), t !== null && (Kt(t, e, s, n), No(t, e, s));
  } };
  function ed(e, t, n, s, l, u, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, m) : t.prototype && t.prototype.isPureReactComponent ? !hs(n, s) || !hs(l, u) : !0;
  }
  function td(e, t, n) {
    var s = !1, l = bn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Mt(u) : (l = gt(t) ? Qn : at.current, s = t.contextTypes, u = (s = s != null) ? Er(e, l) : bn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Io, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function nd(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Io.enqueueReplaceState(t, t.state, null);
  }
  function Da(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Sa(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Mt(u) : (u = gt(t) ? Qn : at.current, l.context = Er(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (La(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Io.enqueueReplaceState(l, l.state, null), To(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Mr(e, t) {
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
  function Oa(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function za(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var rm = typeof WeakMap == "function" ? WeakMap : Map;
  function rd(e, t, n) {
    n = pn(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      Wo || (Wo = !0, el = s), za(e, t);
    }, n;
  }
  function sd(e, t, n) {
    n = pn(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        za(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      za(e, t), typeof s != "function" && (Mn === null ? Mn = /* @__PURE__ */ new Set([this]) : Mn.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function od(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new rm();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = ym.bind(null, e, t, n), t.then(e, e));
  }
  function id(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ad(e, t, n, s, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pn(-1, 1), t.tag = 2, Pn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var sm = A.ReactCurrentOwner, _t = !1;
  function mt(e, t, n, s) {
    t.child = e === null ? Nc(t, null, n, s) : Ar(t, e.child, n, s);
  }
  function ld(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return Pr(t, l), s = Aa(e, t, n, s, u, l), n = Ra(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, hn(e, t, l)) : (Oe && n && pa(t), t.flags |= 1, mt(e, t, s, l), t.child);
  }
  function ud(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !al(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, cd(e, t, u, s, l)) : (e = Ko(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var m = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : hs, n(m, s) && e.ref === t.ref) return hn(e, t, l);
    }
    return t.flags |= 1, e = On(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function cd(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (hs(u, s) && e.ref === t.ref) if (_t = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (_t = !0);
      else return t.lanes = e.lanes, hn(e, t, l);
    }
    return Ha(e, t, n, s, l);
  }
  function dd(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Me(Lr, At), At |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Me(Lr, At), At |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Me(Lr, At), At |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Me(Lr, At), At |= s;
    return mt(e, t, l, n), t.child;
  }
  function fd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ha(e, t, n, s, l) {
    var u = gt(n) ? Qn : at.current;
    return u = Er(t, u), Pr(t, l), n = Aa(e, t, n, s, u, l), s = Ra(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, hn(e, t, l)) : (Oe && s && pa(t), t.flags |= 1, mt(e, t, n, l), t.child);
  }
  function pd(e, t, n, s, l) {
    if (gt(n)) {
      var u = !0;
      _o(t);
    } else u = !1;
    if (Pr(t, l), t.stateNode === null) Do(e, t), td(t, n, s), Da(t, n, s, l), s = !0;
    else if (e === null) {
      var m = t.stateNode, S = t.memoizedProps;
      m.props = S;
      var T = m.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = Mt(D) : (D = gt(n) ? Qn : at.current, D = Er(t, D));
      var q = n.getDerivedStateFromProps, Q = typeof q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== s || T !== D) && nd(t, m, s, D), Rn = !1;
      var V = t.memoizedState;
      m.state = V, To(t, s, m, l), T = t.memoizedState, S !== s || V !== T || yt.current || Rn ? (typeof q == "function" && (La(t, n, q, s), T = t.memoizedState), (S = Rn || ed(t, n, S, s, V, T, D)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = T), m.props = s, m.state = T, m.context = D, s = S) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      m = t.stateNode, bc(e, t), S = t.memoizedProps, D = t.type === t.elementType ? S : Vt(t.type, S), m.props = D, Q = t.pendingProps, V = m.context, T = n.contextType, typeof T == "object" && T !== null ? T = Mt(T) : (T = gt(n) ? Qn : at.current, T = Er(t, T));
      var ee = n.getDerivedStateFromProps;
      (q = typeof ee == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== Q || V !== T) && nd(t, m, s, T), Rn = !1, V = t.memoizedState, m.state = V, To(t, s, m, l);
      var ne = t.memoizedState;
      S !== Q || V !== ne || yt.current || Rn ? (typeof ee == "function" && (La(t, n, ee, s), ne = t.memoizedState), (D = Rn || ed(t, n, D, s, V, ne, T) || !1) ? (q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(s, ne, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(s, ne, T)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = ne), m.props = s, m.state = ne, m.context = T, s = D) : (typeof m.componentDidUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Fa(e, t, n, s, u, l);
  }
  function Fa(e, t, n, s, l, u) {
    fd(e, t);
    var m = (t.flags & 128) !== 0;
    if (!s && !m) return l && gc(t, n, !1), hn(e, t, u);
    s = t.stateNode, sm.current = t;
    var S = m && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && m ? (t.child = Ar(t, e.child, null, u), t.child = Ar(t, null, S, u)) : mt(e, t, S, u), t.memoizedState = s.state, l && gc(t, n, !0), t.child;
  }
  function hd(e) {
    var t = e.stateNode;
    t.pendingContext ? vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vc(e, t.context, !1), Ca(e, t.containerInfo);
  }
  function md(e, t, n, s, l) {
    return br(), ya(l), t.flags |= 256, mt(e, t, n, s), t.child;
  }
  var Wa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ba(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function vd(e, t, n) {
    var s = t.pendingProps, l = He.current, u = !1, m = (t.flags & 128) !== 0, S;
    if ((S = m) || (S = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), S ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Me(He, l & 1), e === null)
      return va(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, m = { mode: "hidden", children: m }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = m) : u = Yo(m, s, 0, null), e = rr(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Ba(n), t.memoizedState = Wa, e) : Ua(t, m));
    if (l = e.memoizedState, l !== null && (S = l.dehydrated, S !== null)) return om(e, t, m, s, S, l, n);
    if (u) {
      u = s.fallback, m = t.mode, l = e.child, S = l.sibling;
      var T = { mode: "hidden", children: s.children };
      return (m & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = T, t.deletions = null) : (s = On(l, T), s.subtreeFlags = l.subtreeFlags & 14680064), S !== null ? u = On(S, u) : (u = rr(u, m, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, m = e.child.memoizedState, m = m === null ? Ba(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, u.memoizedState = m, u.childLanes = e.childLanes & ~n, t.memoizedState = Wa, s;
    }
    return u = e.child, e = u.sibling, s = On(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Ua(e, t) {
    return t = Yo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Lo(e, t, n, s) {
    return s !== null && ya(s), Ar(t, e.child, null, n), e = Ua(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function om(e, t, n, s, l, u, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Oa(Error(i(422))), Lo(e, t, m, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = Yo({ mode: "visible", children: s.children }, l, 0, null), u = rr(u, l, m, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Ar(t, e.child, null, m), t.child.memoizedState = Ba(m), t.memoizedState = Wa, u);
    if ((t.mode & 1) === 0) return Lo(e, t, m, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var S = s.dgst;
      return s = S, u = Error(i(419)), s = Oa(u, s, void 0), Lo(e, t, m, s);
    }
    if (S = (m & e.childLanes) !== 0, _t || S) {
      if (s = Ze, s !== null) {
        switch (m & -m) {
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
        l = (l & (s.suspendedLanes | m)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, fn(e, l), Kt(s, e, l, -1));
      }
      return il(), s = Oa(Error(i(421))), Lo(e, t, m, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, bt = Nn(l.nextSibling), Tt = t, Oe = !0, Ut = null, e !== null && (Pt[$t++] = cn, Pt[$t++] = dn, Pt[$t++] = Kn, cn = e.id, dn = e.overflow, Kn = t), t = Ua(t, s.children), t.flags |= 4096, t);
  }
  function yd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), wa(e.return, t, n);
  }
  function Va(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function gd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (mt(e, t, s.children, n), s = He.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && bo(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Va(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && bo(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Va(t, !0, n, null, u);
        break;
      case "together":
        Va(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Do(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function hn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Zn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = On(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function im(e, t, n) {
    switch (t.tag) {
      case 3:
        hd(t), br();
        break;
      case 5:
        Pc(t);
        break;
      case 1:
        gt(t.type) && _o(t);
        break;
      case 4:
        Ca(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Me(jo, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Me(He, He.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? vd(e, t, n) : (Me(He, He.current & 1), e = hn(e, t, n), e !== null ? e.sibling : null);
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
    return hn(e, t, n);
  }
  var _d, qa, xd, wd;
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
  }, qa = function() {
  }, xd = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, Gn(tn.current);
      var u = null;
      switch (n) {
        case "input":
          l = ye(e, l), s = ye(e, s), u = [];
          break;
        case "select":
          l = B({}, l, { value: void 0 }), s = B({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Ci(e, l), s = Ci(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = vo);
      }
      Ei(n, s);
      var m;
      n = null;
      for (D in l) if (!s.hasOwnProperty(D) && l.hasOwnProperty(D) && l[D] != null) if (D === "style") {
        var S = l[D];
        for (m in S) S.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (d.hasOwnProperty(D) ? u || (u = []) : (u = u || []).push(D, null));
      for (D in s) {
        var T = s[D];
        if (S = l != null ? l[D] : void 0, s.hasOwnProperty(D) && T !== S && (T != null || S != null)) if (D === "style") if (S) {
          for (m in S) !S.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in T) T.hasOwnProperty(m) && S[m] !== T[m] && (n || (n = {}), n[m] = T[m]);
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
  }, wd = function(e, t, n, s) {
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
  function ut(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags & 14680064, s |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function am(e, t, n) {
    var s = t.pendingProps;
    switch (ha(t), t.tag) {
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
        return ut(t), null;
      case 1:
        return gt(t.type) && go(), ut(t), null;
      case 3:
        return s = t.stateNode, $r(), Le(yt), Le(at), Na(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (So(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ut !== null && (rl(Ut), Ut = null))), qa(e, t), ut(t), null;
      case 5:
        ja(t);
        var l = Gn(Cs.current);
        if (n = t.type, e !== null && t.stateNode != null) xd(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return ut(t), null;
          }
          if (e = Gn(tn.current), So(t)) {
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
                Ae(s, u), Ie("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, Ie("invalid", s);
                break;
              case "textarea":
                su(s, u), Ie("invalid", s);
            }
            Ei(n, u), l = null;
            for (var m in u) if (u.hasOwnProperty(m)) {
              var S = u[m];
              m === "children" ? typeof S == "string" ? s.textContent !== S && (u.suppressHydrationWarning !== !0 && mo(s.textContent, S, e), l = ["children", S]) : typeof S == "number" && s.textContent !== "" + S && (u.suppressHydrationWarning !== !0 && mo(
                s.textContent,
                S,
                e
              ), l = ["children", "" + S]) : d.hasOwnProperty(m) && S != null && m === "onScroll" && Ie("scroll", s);
            }
            switch (n) {
              case "input":
                Xt(s), Yr(s, u, !0);
                break;
              case "textarea":
                Xt(s), iu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = vo);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            m = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = au(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = m.createElement(n, { is: s.is }) : (e = m.createElement(n), n === "select" && (m = e, s.multiple ? m.multiple = !0 : s.size && (m.size = s.size))) : e = m.createElementNS(e, n), e[en] = t, e[_s] = s, _d(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = Ni(n, s), n) {
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
                  Ae(e, s), l = ye(e, s), Ie("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = B({}, s, { value: void 0 }), Ie("invalid", e);
                  break;
                case "textarea":
                  su(e, s), l = Ci(e, s), Ie("invalid", e);
                  break;
                default:
                  l = s;
              }
              Ei(n, l), S = l;
              for (u in S) if (S.hasOwnProperty(u)) {
                var T = S[u];
                u === "style" ? cu(e, T) : u === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && lu(e, T)) : u === "children" ? typeof T == "string" ? (n !== "textarea" || T !== "") && Gr(e, T) : typeof T == "number" && Gr(e, "" + T) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? T != null && u === "onScroll" && Ie("scroll", e) : T != null && $(e, u, T, m));
              }
              switch (n) {
                case "input":
                  Xt(e), Yr(e, s, !1);
                  break;
                case "textarea":
                  Xt(e), iu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Ce(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? hr(e, !!s.multiple, u, !1) : s.defaultValue != null && hr(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = vo);
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
        return ut(t), null;
      case 6:
        if (e && t.stateNode != null) wd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Gn(Cs.current), Gn(tn.current), So(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[en] = t, (u = s.nodeValue !== n) && (e = Tt, e !== null)) switch (e.tag) {
              case 3:
                mo(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && mo(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[en] = t, t.stateNode = s;
        }
        return ut(t), null;
      case 13:
        if (Le(He), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && bt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Cc(), br(), t.flags |= 98560, u = !1;
          else if (u = So(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[en] = t;
            } else br(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ut(t), u = !1;
          } else Ut !== null && (rl(Ut), Ut = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (He.current & 1) !== 0 ? Je === 0 && (Je = 3) : il())), t.updateQueue !== null && (t.flags |= 4), ut(t), null);
      case 4:
        return $r(), qa(e, t), e === null && ys(t.stateNode.containerInfo), ut(t), null;
      case 10:
        return xa(t.type._context), ut(t), null;
      case 17:
        return gt(t.type) && go(), ut(t), null;
      case 19:
        if (Le(He), u = t.memoizedState, u === null) return ut(t), null;
        if (s = (t.flags & 128) !== 0, m = u.rendering, m === null) if (s) bs(u, !1);
        else {
          if (Je !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = bo(e), m !== null) {
              for (t.flags |= 128, bs(u, !1), s = m.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, m = u.alternate, m === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = m.childLanes, u.lanes = m.lanes, u.child = m.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = m.memoizedProps, u.memoizedState = m.memoizedState, u.updateQueue = m.updateQueue, u.type = m.type, e = m.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Me(He, He.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Be() > Dr && (t.flags |= 128, s = !0, bs(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = bo(m), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), bs(u, !0), u.tail === null && u.tailMode === "hidden" && !m.alternate && !Oe) return ut(t), null;
          } else 2 * Be() - u.renderingStartTime > Dr && n !== 1073741824 && (t.flags |= 128, s = !0, bs(u, !1), t.lanes = 4194304);
          u.isBackwards ? (m.sibling = t.child, t.child = m) : (n = u.last, n !== null ? n.sibling = m : t.child = m, u.last = m);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Be(), t.sibling = null, n = He.current, Me(He, s ? n & 1 | 2 : n & 1), t) : (ut(t), null);
      case 22:
      case 23:
        return ol(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (At & 1073741824) !== 0 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function lm(e, t) {
    switch (ha(t), t.tag) {
      case 1:
        return gt(t.type) && go(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return $r(), Le(yt), Le(at), Na(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ja(t), null;
      case 13:
        if (Le(He), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          br();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Le(He), null;
      case 4:
        return $r(), null;
      case 10:
        return xa(t.type._context), null;
      case 22:
      case 23:
        return ol(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Oo = !1, ct = !1, um = typeof WeakSet == "function" ? WeakSet : Set, te = null;
  function Ir(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      We(e, t, s);
    }
    else n.current = null;
  }
  function Qa(e, t, n) {
    try {
      n();
    } catch (s) {
      We(e, t, s);
    }
  }
  var kd = !1;
  function cm(e, t) {
    if (oa = ro, e = ec(), Gi(e)) {
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
          var m = 0, S = -1, T = -1, D = 0, q = 0, Q = e, V = null;
          t: for (; ; ) {
            for (var ee; Q !== n || l !== 0 && Q.nodeType !== 3 || (S = m + l), Q !== u || s !== 0 && Q.nodeType !== 3 || (T = m + s), Q.nodeType === 3 && (m += Q.nodeValue.length), (ee = Q.firstChild) !== null; )
              V = Q, Q = ee;
            for (; ; ) {
              if (Q === e) break t;
              if (V === n && ++D === l && (S = m), V === u && ++q === s && (T = m), (ee = Q.nextSibling) !== null) break;
              Q = V, V = Q.parentNode;
            }
            Q = ee;
          }
          n = S === -1 || T === -1 ? null : { start: S, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ia = { focusedElem: e, selectionRange: n }, ro = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
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
              var se = ne.memoizedProps, Ue = ne.memoizedState, I = t.stateNode, R = I.getSnapshotBeforeUpdate(t.elementType === t.type ? se : Vt(t.type, se), Ue);
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
            throw Error(i(163));
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
    return ne = kd, kd = !1, ne;
  }
  function As(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Qa(t, n, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function zo(e, t) {
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
  function Ka(e) {
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
  function Sd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Sd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[en], delete t[_s], delete t[ca], delete t[qh], delete t[Qh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Cd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function jd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Cd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ya(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vo));
    else if (s !== 4 && (e = e.child, e !== null)) for (Ya(e, t, n), e = e.sibling; e !== null; ) Ya(e, t, n), e = e.sibling;
  }
  function Ja(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Ja(e, t, n), e = e.sibling; e !== null; ) Ja(e, t, n), e = e.sibling;
  }
  var nt = null, qt = !1;
  function $n(e, t, n) {
    for (n = n.child; n !== null; ) Ed(e, t, n), n = n.sibling;
  }
  function Ed(e, t, n) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function") try {
      Zt.onCommitFiberUnmount(Gs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        ct || Ir(n, t);
      case 6:
        var s = nt, l = qt;
        nt = null, $n(e, t, n), nt = s, qt = l, nt !== null && (qt ? (e = nt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : nt.removeChild(n.stateNode));
        break;
      case 18:
        nt !== null && (qt ? (e = nt, n = n.stateNode, e.nodeType === 8 ? ua(e.parentNode, n) : e.nodeType === 1 && ua(e, n), ls(e)) : ua(nt, n.stateNode));
        break;
      case 4:
        s = nt, l = qt, nt = n.stateNode.containerInfo, qt = !0, $n(e, t, n), nt = s, qt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ct && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, m = u.destroy;
            u = u.tag, m !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Qa(n, t, m), l = l.next;
          } while (l !== s);
        }
        $n(e, t, n);
        break;
      case 1:
        if (!ct && (Ir(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (S) {
          We(n, t, S);
        }
        $n(e, t, n);
        break;
      case 21:
        $n(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ct = (s = ct) || n.memoizedState !== null, $n(e, t, n), ct = s) : $n(e, t, n);
        break;
      default:
        $n(e, t, n);
    }
  }
  function Nd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new um()), t.forEach(function(s) {
        var l = _m.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function Qt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var u = e, m = t, S = m;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              nt = S.stateNode, qt = !1;
              break e;
            case 3:
              nt = S.stateNode.containerInfo, qt = !0;
              break e;
            case 4:
              nt = S.stateNode.containerInfo, qt = !0;
              break e;
          }
          S = S.return;
        }
        if (nt === null) throw Error(i(160));
        Ed(u, m, l), nt = null, qt = !1;
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
        if (Qt(t, e), rn(e), s & 4) {
          try {
            As(3, e, e.return), zo(3, e);
          } catch (se) {
            We(e, e.return, se);
          }
          try {
            As(5, e, e.return);
          } catch (se) {
            We(e, e.return, se);
          }
        }
        break;
      case 1:
        Qt(t, e), rn(e), s & 512 && n !== null && Ir(n, n.return);
        break;
      case 5:
        if (Qt(t, e), rn(e), s & 512 && n !== null && Ir(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Gr(l, "");
          } catch (se) {
            We(e, e.return, se);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, m = n !== null ? n.memoizedProps : u, S = e.type, T = e.updateQueue;
          if (e.updateQueue = null, T !== null) try {
            S === "input" && u.type === "radio" && u.name != null && De(l, u), Ni(S, m);
            var D = Ni(S, u);
            for (m = 0; m < T.length; m += 2) {
              var q = T[m], Q = T[m + 1];
              q === "style" ? cu(l, Q) : q === "dangerouslySetInnerHTML" ? lu(l, Q) : q === "children" ? Gr(l, Q) : $(l, q, Q, D);
            }
            switch (S) {
              case "input":
                Et(l, u);
                break;
              case "textarea":
                ou(l, u);
                break;
              case "select":
                var V = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var ee = u.value;
                ee != null ? hr(l, !!u.multiple, ee, !1) : V !== !!u.multiple && (u.defaultValue != null ? hr(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : hr(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[_s] = u;
          } catch (se) {
            We(e, e.return, se);
          }
        }
        break;
      case 6:
        if (Qt(t, e), rn(e), s & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (se) {
            We(e, e.return, se);
          }
        }
        break;
      case 3:
        if (Qt(t, e), rn(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ls(t.containerInfo);
        } catch (se) {
          We(e, e.return, se);
        }
        break;
      case 4:
        Qt(t, e), rn(e);
        break;
      case 13:
        Qt(t, e), rn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Za = Be())), s & 4 && Nd(e);
        break;
      case 22:
        if (q = n !== null && n.memoizedState !== null, e.mode & 1 ? (ct = (D = ct) || q, Qt(t, e), ct = D) : Qt(t, e), rn(e), s & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !q && (e.mode & 1) !== 0) for (te = e, q = e.child; q !== null; ) {
            for (Q = te = q; te !== null; ) {
              switch (V = te, ee = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  As(4, V, V.return);
                  break;
                case 1:
                  Ir(V, V.return);
                  var ne = V.stateNode;
                  if (typeof ne.componentWillUnmount == "function") {
                    s = V, n = V.return;
                    try {
                      t = s, ne.props = t.memoizedProps, ne.state = t.memoizedState, ne.componentWillUnmount();
                    } catch (se) {
                      We(s, n, se);
                    }
                  }
                  break;
                case 5:
                  Ir(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Rd(Q);
                    continue;
                  }
              }
              ee !== null ? (ee.return = V, te = ee) : Rd(Q);
            }
            q = q.sibling;
          }
          e: for (q = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (q === null) {
                q = Q;
                try {
                  l = Q.stateNode, D ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (S = Q.stateNode, T = Q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, S.style.display = uu("display", m));
                } catch (se) {
                  We(e, e.return, se);
                }
              }
            } else if (Q.tag === 6) {
              if (q === null) try {
                Q.stateNode.nodeValue = D ? "" : Q.memoizedProps;
              } catch (se) {
                We(e, e.return, se);
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
        Qt(t, e), rn(e), s & 4 && Nd(e);
        break;
      case 21:
        break;
      default:
        Qt(
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
            if (Cd(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (Gr(l, ""), s.flags &= -33);
            var u = jd(e);
            Ja(e, u, l);
            break;
          case 3:
          case 4:
            var m = s.stateNode.containerInfo, S = jd(e);
            Ya(e, S, m);
            break;
          default:
            throw Error(i(161));
        }
      } catch (T) {
        We(e, e.return, T);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dm(e, t, n) {
    te = e, bd(e);
  }
  function bd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; te !== null; ) {
      var l = te, u = l.child;
      if (l.tag === 22 && s) {
        var m = l.memoizedState !== null || Oo;
        if (!m) {
          var S = l.alternate, T = S !== null && S.memoizedState !== null || ct;
          S = Oo;
          var D = ct;
          if (Oo = m, (ct = T) && !D) for (te = l; te !== null; ) m = te, T = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(l) : T !== null ? (T.return = m, te = T) : Pd(l);
          for (; u !== null; ) te = u, bd(u), u = u.sibling;
          te = l, Oo = S, ct = D;
        }
        Ad(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, te = u) : Ad(e);
    }
  }
  function Ad(e) {
    for (; te !== null; ) {
      var t = te;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ct || zo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !ct) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Vt(t.type, n.memoizedProps);
                s.componentDidUpdate(l, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Rc(t, u, s);
              break;
            case 3:
              var m = t.updateQueue;
              if (m !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Rc(t, m, n);
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
              throw Error(i(163));
          }
          ct || t.flags & 512 && Ka(t);
        } catch (V) {
          We(t, t.return, V);
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
  function Pd(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              zo(4, t);
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
              Ka(t);
            } catch (T) {
              We(t, u, T);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Ka(t);
            } catch (T) {
              We(t, m, T);
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
  var fm = Math.ceil, Ho = A.ReactCurrentDispatcher, Ga = A.ReactCurrentOwner, Lt = A.ReactCurrentBatchConfig, Ee = 0, Ze = null, qe = null, rt = 0, At = 0, Lr = Tn(0), Je = 0, Rs = null, Zn = 0, Fo = 0, Xa = 0, Ps = null, xt = null, Za = 0, Dr = 1 / 0, mn = null, Wo = !1, el = null, Mn = null, Bo = !1, In = null, Uo = 0, $s = 0, tl = null, Vo = -1, qo = 0;
  function vt() {
    return (Ee & 6) !== 0 ? Be() : Vo !== -1 ? Vo : Vo = Be();
  }
  function Ln(e) {
    return (e.mode & 1) === 0 ? 1 : (Ee & 2) !== 0 && rt !== 0 ? rt & -rt : Yh.transition !== null ? (qo === 0 && (qo = ju()), qo) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mu(e.type)), e);
  }
  function Kt(e, t, n, s) {
    if (50 < $s) throw $s = 0, tl = null, Error(i(185));
    rs(e, n, s), ((Ee & 2) === 0 || e !== Ze) && (e === Ze && ((Ee & 2) === 0 && (Fo |= n), Je === 4 && Dn(e, rt)), wt(e, s), n === 1 && Ee === 0 && (t.mode & 1) === 0 && (Dr = Be() + 500, xo && An()));
  }
  function wt(e, t) {
    var n = e.callbackNode;
    Yp(e, t);
    var s = eo(e, e === Ze ? rt : 0);
    if (s === 0) n !== null && ku(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && ku(n), t === 1) e.tag === 0 ? Kh(Md.bind(null, e)) : _c(Md.bind(null, e)), Uh(function() {
        (Ee & 6) === 0 && An();
      }), n = null;
      else {
        switch (Eu(s)) {
          case 1:
            n = Mi;
            break;
          case 4:
            n = Su;
            break;
          case 16:
            n = Js;
            break;
          case 536870912:
            n = Cu;
            break;
          default:
            n = Js;
        }
        n = Wd(n, $d.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function $d(e, t) {
    if (Vo = -1, qo = 0, (Ee & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (Or() && e.callbackNode !== n) return null;
    var s = eo(e, e === Ze ? rt : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Qo(e, s);
    else {
      t = s;
      var l = Ee;
      Ee |= 2;
      var u = Ld();
      (Ze !== e || rt !== t) && (mn = null, Dr = Be() + 500, tr(e, t));
      do
        try {
          mm();
          break;
        } catch (S) {
          Id(e, S);
        }
      while (!0);
      _a(), Ho.current = u, Ee = l, qe !== null ? t = 0 : (Ze = null, rt = 0, t = Je);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ii(e), l !== 0 && (s = l, t = nl(e, l))), t === 1) throw n = Rs, tr(e, 0), Dn(e, s), wt(e, Be()), n;
      if (t === 6) Dn(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !pm(l) && (t = Qo(e, s), t === 2 && (u = Ii(e), u !== 0 && (s = u, t = nl(e, u))), t === 1)) throw n = Rs, tr(e, 0), Dn(e, s), wt(e, Be()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            nr(e, xt, mn);
            break;
          case 3:
            if (Dn(e, s), (s & 130023424) === s && (t = Za + 500 - Be(), 10 < t)) {
              if (eo(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                vt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = la(nr.bind(null, e, xt, mn), t);
              break;
            }
            nr(e, xt, mn);
            break;
          case 4:
            if (Dn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var m = 31 - Wt(s);
              u = 1 << m, m = t[m], m > l && (l = m), s &= ~u;
            }
            if (s = l, s = Be() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * fm(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = la(nr.bind(null, e, xt, mn), s);
              break;
            }
            nr(e, xt, mn);
            break;
          case 5:
            nr(e, xt, mn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return wt(e, Be()), e.callbackNode === n ? $d.bind(null, e) : null;
  }
  function nl(e, t) {
    var n = Ps;
    return e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256), e = Qo(e, t), e !== 2 && (t = xt, xt = n, t !== null && rl(t)), e;
  }
  function rl(e) {
    xt === null ? xt = e : xt.push.apply(xt, e);
  }
  function pm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Bt(u(), l)) return !1;
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
  function Dn(e, t) {
    for (t &= ~Xa, t &= ~Fo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Wt(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Md(e) {
    if ((Ee & 6) !== 0) throw Error(i(327));
    Or();
    var t = eo(e, 0);
    if ((t & 1) === 0) return wt(e, Be()), null;
    var n = Qo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Ii(e);
      s !== 0 && (t = s, n = nl(e, s));
    }
    if (n === 1) throw n = Rs, tr(e, 0), Dn(e, t), wt(e, Be()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, nr(e, xt, mn), wt(e, Be()), null;
  }
  function sl(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      Ee = n, Ee === 0 && (Dr = Be() + 500, xo && An());
    }
  }
  function er(e) {
    In !== null && In.tag === 0 && (Ee & 6) === 0 && Or();
    var t = Ee;
    Ee |= 1;
    var n = Lt.transition, s = Pe;
    try {
      if (Lt.transition = null, Pe = 1, e) return e();
    } finally {
      Pe = s, Lt.transition = n, Ee = t, (Ee & 6) === 0 && An();
    }
  }
  function ol() {
    At = Lr.current, Le(Lr);
  }
  function tr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Bh(n)), qe !== null) for (n = qe.return; n !== null; ) {
      var s = n;
      switch (ha(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && go();
          break;
        case 3:
          $r(), Le(yt), Le(at), Na();
          break;
        case 5:
          ja(s);
          break;
        case 4:
          $r();
          break;
        case 13:
          Le(He);
          break;
        case 19:
          Le(He);
          break;
        case 10:
          xa(s.type._context);
          break;
        case 22:
        case 23:
          ol();
      }
      n = n.return;
    }
    if (Ze = e, qe = e = On(e.current, null), rt = At = t, Je = 0, Rs = null, Xa = Fo = Zn = 0, xt = Ps = null, Jn !== null) {
      for (t = 0; t < Jn.length; t++) if (n = Jn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var m = u.next;
          u.next = l, s.next = m;
        }
        n.pending = s;
      }
      Jn = null;
    }
    return e;
  }
  function Id(e, t) {
    do {
      var n = qe;
      try {
        if (_a(), Ao.current = Mo, Ro) {
          for (var s = Fe.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          Ro = !1;
        }
        if (Xn = 0, Xe = Ye = Fe = null, js = !1, Es = 0, Ga.current = null, n === null || n.return === null) {
          Je = 1, Rs = t, qe = null;
          break;
        }
        e: {
          var u = e, m = n.return, S = n, T = t;
          if (t = rt, S.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var D = T, q = S, Q = q.tag;
            if ((q.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var V = q.alternate;
              V ? (q.updateQueue = V.updateQueue, q.memoizedState = V.memoizedState, q.lanes = V.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var ee = id(m);
            if (ee !== null) {
              ee.flags &= -257, ad(ee, m, S, u, t), ee.mode & 1 && od(u, D, t), t = ee, T = D;
              var ne = t.updateQueue;
              if (ne === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(T), t.updateQueue = se;
              } else ne.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                od(u, D, t), il();
                break e;
              }
              T = Error(i(426));
            }
          } else if (Oe && S.mode & 1) {
            var Ue = id(m);
            if (Ue !== null) {
              (Ue.flags & 65536) === 0 && (Ue.flags |= 256), ad(Ue, m, S, u, t), ya(Mr(T, S));
              break e;
            }
          }
          u = T = Mr(T, S), Je !== 4 && (Je = 2), Ps === null ? Ps = [u] : Ps.push(u), u = m;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var I = rd(u, T, t);
                Ac(u, I);
                break e;
              case 1:
                S = T;
                var R = u.type, L = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Mn === null || !Mn.has(L)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var Y = sd(u, S, t);
                  Ac(u, Y);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Od(n);
      } catch (ae) {
        t = ae, qe === n && n !== null && (qe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ld() {
    var e = Ho.current;
    return Ho.current = Mo, e === null ? Mo : e;
  }
  function il() {
    (Je === 0 || Je === 3 || Je === 2) && (Je = 4), Ze === null || (Zn & 268435455) === 0 && (Fo & 268435455) === 0 || Dn(Ze, rt);
  }
  function Qo(e, t) {
    var n = Ee;
    Ee |= 2;
    var s = Ld();
    (Ze !== e || rt !== t) && (mn = null, tr(e, t));
    do
      try {
        hm();
        break;
      } catch (l) {
        Id(e, l);
      }
    while (!0);
    if (_a(), Ee = n, Ho.current = s, qe !== null) throw Error(i(261));
    return Ze = null, rt = 0, Je;
  }
  function hm() {
    for (; qe !== null; ) Dd(qe);
  }
  function mm() {
    for (; qe !== null && !Hp(); ) Dd(qe);
  }
  function Dd(e) {
    var t = Fd(e.alternate, e, At);
    e.memoizedProps = e.pendingProps, t === null ? Od(e) : qe = t, Ga.current = null;
  }
  function Od(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = am(n, t, At), n !== null) {
          qe = n;
          return;
        }
      } else {
        if (n = lm(n, t), n !== null) {
          n.flags &= 32767, qe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Je = 6, qe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        qe = t;
        return;
      }
      qe = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function nr(e, t, n) {
    var s = Pe, l = Lt.transition;
    try {
      Lt.transition = null, Pe = 1, vm(e, t, n, s);
    } finally {
      Lt.transition = l, Pe = s;
    }
    return null;
  }
  function vm(e, t, n, s) {
    do
      Or();
    while (In !== null);
    if ((Ee & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Jp(e, u), e === Ze && (qe = Ze = null, rt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Bo || (Bo = !0, Wd(Js, function() {
      return Or(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = Lt.transition, Lt.transition = null;
      var m = Pe;
      Pe = 1;
      var S = Ee;
      Ee |= 4, Ga.current = null, cm(e, n), Td(n, e), Lh(ia), ro = !!oa, ia = oa = null, e.current = n, dm(n), Fp(), Ee = S, Pe = m, Lt.transition = u;
    } else e.current = n;
    if (Bo && (Bo = !1, In = e, Uo = l), u = e.pendingLanes, u === 0 && (Mn = null), Up(n.stateNode), wt(e, Be()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Wo) throw Wo = !1, e = el, el = null, e;
    return (Uo & 1) !== 0 && e.tag !== 0 && Or(), u = e.pendingLanes, (u & 1) !== 0 ? e === tl ? $s++ : ($s = 0, tl = e) : $s = 0, An(), null;
  }
  function Or() {
    if (In !== null) {
      var e = Eu(Uo), t = Lt.transition, n = Pe;
      try {
        if (Lt.transition = null, Pe = 16 > e ? 16 : e, In === null) var s = !1;
        else {
          if (e = In, In = null, Uo = 0, (Ee & 6) !== 0) throw Error(i(331));
          var l = Ee;
          for (Ee |= 4, te = e.current; te !== null; ) {
            var u = te, m = u.child;
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
                        As(8, q, u);
                    }
                    var Q = q.child;
                    if (Q !== null) Q.return = q, te = Q;
                    else for (; te !== null; ) {
                      q = te;
                      var V = q.sibling, ee = q.return;
                      if (Sd(q), q === D) {
                        te = null;
                        break;
                      }
                      if (V !== null) {
                        V.return = ee, te = V;
                        break;
                      }
                      te = ee;
                    }
                  }
                }
                var ne = u.alternate;
                if (ne !== null) {
                  var se = ne.child;
                  if (se !== null) {
                    ne.child = null;
                    do {
                      var Ue = se.sibling;
                      se.sibling = null, se = Ue;
                    } while (se !== null);
                  }
                }
                te = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && m !== null) m.return = u, te = m;
            else e: for (; te !== null; ) {
              if (u = te, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  As(9, u, u.return);
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
            m = te;
            var L = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && L !== null) L.return = m, te = L;
            else e: for (m = R; te !== null; ) {
              if (S = te, (S.flags & 2048) !== 0) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zo(9, S);
                }
              } catch (ae) {
                We(S, S.return, ae);
              }
              if (S === m) {
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
          if (Ee = l, An(), Zt && typeof Zt.onPostCommitFiberRoot == "function") try {
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
  function zd(e, t, n) {
    t = Mr(n, t), t = rd(e, t, 1), e = Pn(e, t, 1), t = vt(), e !== null && (rs(e, 1, t), wt(e, t));
  }
  function We(e, t, n) {
    if (e.tag === 3) zd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        zd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Mn === null || !Mn.has(s))) {
          e = Mr(n, e), e = sd(t, e, 1), t = Pn(t, e, 1), e = vt(), t !== null && (rs(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ym(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = vt(), e.pingedLanes |= e.suspendedLanes & n, Ze === e && (rt & n) === n && (Je === 4 || Je === 3 && (rt & 130023424) === rt && 500 > Be() - Za ? tr(e, 0) : Xa |= n), wt(e, t);
  }
  function Hd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Zs, Zs <<= 1, (Zs & 130023424) === 0 && (Zs = 4194304)));
    var n = vt();
    e = fn(e, t), e !== null && (rs(e, t, n), wt(e, n));
  }
  function gm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hd(e, n);
  }
  function _m(e, t) {
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
        throw Error(i(314));
    }
    s !== null && s.delete(t), Hd(e, n);
  }
  var Fd;
  Fd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || yt.current) _t = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return _t = !1, im(e, t, n);
      _t = (e.flags & 131072) !== 0;
    }
    else _t = !1, Oe && (t.flags & 1048576) !== 0 && xc(t, ko, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Do(e, t), e = t.pendingProps;
        var l = Er(t, at.current);
        Pr(t, n), l = Aa(null, t, s, e, l, n);
        var u = Ra();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(s) ? (u = !0, _o(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Sa(t), l.updater = Io, t.stateNode = l, l._reactInternals = t, Da(t, s, e, n), t = Fa(null, t, s, !0, u, n)) : (t.tag = 0, Oe && u && pa(t), mt(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (Do(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = wm(s), e = Vt(s, e), l) {
            case 0:
              t = Ha(null, t, s, e, n);
              break e;
            case 1:
              t = pd(null, t, s, e, n);
              break e;
            case 11:
              t = ld(null, t, s, e, n);
              break e;
            case 14:
              t = ud(null, t, s, Vt(s.type, e), n);
              break e;
          }
          throw Error(i(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Vt(s, l), Ha(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Vt(s, l), pd(e, t, s, l, n);
      case 3:
        e: {
          if (hd(t), e === null) throw Error(i(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, bc(e, t), To(t, s, null, n);
          var m = t.memoizedState;
          if (s = m.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Mr(Error(i(423)), t), t = md(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = Mr(Error(i(424)), t), t = md(e, t, s, n, l);
            break e;
          } else for (bt = Nn(t.stateNode.containerInfo.firstChild), Tt = t, Oe = !0, Ut = null, n = Nc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (br(), s === l) {
              t = hn(e, t, n);
              break e;
            }
            mt(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Pc(t), e === null && va(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = l.children, aa(s, l) ? m = null : u !== null && aa(s, u) && (t.flags |= 32), fd(e, t), mt(e, t, m, n), t.child;
      case 6:
        return e === null && va(t), null;
      case 13:
        return vd(e, t, n);
      case 4:
        return Ca(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Ar(t, null, s, n) : mt(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Vt(s, l), ld(e, t, s, l, n);
      case 7:
        return mt(e, t, t.pendingProps, n), t.child;
      case 8:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, m = l.value, Me(jo, s._currentValue), s._currentValue = m, u !== null) if (Bt(u.value, m)) {
            if (u.children === l.children && !yt.current) {
              t = hn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var S = u.dependencies;
            if (S !== null) {
              m = u.child;
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
                  u.lanes |= n, T = u.alternate, T !== null && (T.lanes |= n), wa(
                    u.return,
                    n,
                    t
                  ), S.lanes |= n;
                  break;
                }
                T = T.next;
              }
            } else if (u.tag === 10) m = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (m = u.return, m === null) throw Error(i(341));
              m.lanes |= n, S = m.alternate, S !== null && (S.lanes |= n), wa(m, n, t), m = u.sibling;
            } else m = u.child;
            if (m !== null) m.return = u;
            else for (m = u; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (u = m.sibling, u !== null) {
                u.return = m.return, m = u;
                break;
              }
              m = m.return;
            }
            u = m;
          }
          mt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, s = t.pendingProps.children, Pr(t, n), l = Mt(l), s = s(l), t.flags |= 1, mt(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = Vt(s, t.pendingProps), l = Vt(s.type, l), ud(e, t, s, l, n);
      case 15:
        return cd(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Vt(s, l), Do(e, t), t.tag = 1, gt(s) ? (e = !0, _o(t)) : e = !1, Pr(t, n), td(t, s, l), Da(t, s, l, n), Fa(null, t, s, !0, e, n);
      case 19:
        return gd(e, t, n);
      case 22:
        return dd(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Wd(e, t) {
    return wu(e, t);
  }
  function xm(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Dt(e, t, n, s) {
    return new xm(e, t, n, s);
  }
  function al(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function wm(e) {
    if (typeof e == "function") return al(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === me) return 11;
      if (e === W) return 14;
    }
    return 2;
  }
  function On(e, t) {
    var n = e.alternate;
    return n === null ? (n = Dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ko(e, t, n, s, l, u) {
    var m = 2;
    if (s = e, typeof e == "function") al(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case G:
        return rr(n.children, l, u, t);
      case U:
        m = 8, l |= 8;
        break;
      case X:
        return e = Dt(12, n, t, l | 2), e.elementType = X, e.lanes = u, e;
      case ve:
        return e = Dt(13, n, t, l), e.elementType = ve, e.lanes = u, e;
      case we:
        return e = Dt(19, n, t, l), e.elementType = we, e.lanes = u, e;
      case de:
        return Yo(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            m = 10;
            break e;
          case fe:
            m = 9;
            break e;
          case me:
            m = 11;
            break e;
          case W:
            m = 14;
            break e;
          case le:
            m = 16, s = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = Dt(m, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function rr(e, t, n, s) {
    return e = Dt(7, e, s, t), e.lanes = n, e;
  }
  function Yo(e, t, n, s) {
    return e = Dt(22, e, s, t), e.elementType = de, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ll(e, t, n) {
    return e = Dt(6, e, null, t), e.lanes = n, e;
  }
  function ul(e, t, n) {
    return t = Dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function km(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Li(0), this.expirationTimes = Li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Li(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function cl(e, t, n, s, l, u, m, S, T) {
    return e = new km(e, t, n, S, T), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Dt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Sa(u), e;
  }
  function Sm(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: O, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Bd(e) {
    if (!e) return bn;
    e = e._reactInternals;
    e: {
      if (Vn(e) !== e || e.tag !== 1) throw Error(i(170));
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
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (gt(n)) return yc(e, n, t);
    }
    return t;
  }
  function Ud(e, t, n, s, l, u, m, S, T) {
    return e = cl(n, s, !0, e, l, u, m, S, T), e.context = Bd(null), n = e.current, s = vt(), l = Ln(n), u = pn(s, l), u.callback = t ?? null, Pn(n, u, l), e.current.lanes = l, rs(e, l, s), wt(e, s), e;
  }
  function Jo(e, t, n, s) {
    var l = t.current, u = vt(), m = Ln(l);
    return n = Bd(n), t.context === null ? t.context = n : t.pendingContext = n, t = pn(u, m), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Pn(l, t, m), e !== null && (Kt(e, l, m, u), No(e, l, m)), m;
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
  function Vd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function dl(e, t) {
    Vd(e, t), (e = e.alternate) && Vd(e, t);
  }
  function Cm() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function fl(e) {
    this._internalRoot = e;
  }
  Xo.prototype.render = fl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Jo(e, t, null, null);
  }, Xo.prototype.unmount = fl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      er(function() {
        Jo(null, e, null, null);
      }), t[ln] = null;
    }
  };
  function Xo(e) {
    this._internalRoot = e;
  }
  Xo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = bu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Cn.length && t !== 0 && t < Cn[n].priority; n++) ;
      Cn.splice(n, 0, e), n === 0 && Pu(e);
    }
  };
  function pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Zo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Qd() {
  }
  function jm(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var D = Go(m);
          u.call(D);
        };
      }
      var m = Ud(t, s, e, 0, null, !1, !1, "", Qd);
      return e._reactRootContainer = m, e[ln] = m.current, ys(e.nodeType === 8 ? e.parentNode : e), er(), m;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var S = s;
      s = function() {
        var D = Go(T);
        S.call(D);
      };
    }
    var T = cl(e, 0, !1, null, null, !1, !1, "", Qd);
    return e._reactRootContainer = T, e[ln] = T.current, ys(e.nodeType === 8 ? e.parentNode : e), er(function() {
      Jo(t, T, n, s);
    }), T;
  }
  function ei(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var m = u;
      if (typeof l == "function") {
        var S = l;
        l = function() {
          var T = Go(m);
          S.call(T);
        };
      }
      Jo(t, m, e, l);
    } else m = jm(n, t, e, l, s);
    return Go(m);
  }
  Nu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ns(t.pendingLanes);
          n !== 0 && (Di(t, n | 1), wt(t, Be()), (Ee & 6) === 0 && (Dr = Be() + 500, An()));
        }
        break;
      case 13:
        er(function() {
          var s = fn(e, 1);
          if (s !== null) {
            var l = vt();
            Kt(s, e, 1, l);
          }
        }), dl(e, 1);
    }
  }, Oi = function(e) {
    if (e.tag === 13) {
      var t = fn(e, 134217728);
      if (t !== null) {
        var n = vt();
        Kt(t, e, 134217728, n);
      }
      dl(e, 134217728);
    }
  }, Tu = function(e) {
    if (e.tag === 13) {
      var t = Ln(e), n = fn(e, t);
      if (n !== null) {
        var s = vt();
        Kt(n, e, t, s);
      }
      dl(e, t);
    }
  }, bu = function() {
    return Pe;
  }, Au = function(e, t) {
    var n = Pe;
    try {
      return Pe = e, t();
    } finally {
      Pe = n;
    }
  }, Ai = function(e, t, n) {
    switch (t) {
      case "input":
        if (Et(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = yo(s);
              if (!l) throw Error(i(90));
              xn(s), Et(s, l);
            }
          }
        }
        break;
      case "textarea":
        ou(e, n);
        break;
      case "select":
        t = n.value, t != null && hr(e, !!n.multiple, t, !1);
    }
  }, hu = sl, mu = er;
  var Em = { usingClientEntryPoint: !1, Events: [xs, Cr, yo, fu, pu, sl] }, Ms = { findFiberByHostInstance: qn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nm = { bundleType: Ms.bundleType, version: Ms.version, rendererPackageName: Ms.rendererPackageName, rendererConfig: Ms.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: A.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = _u(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ms.findFiberByHostInstance || Cm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ti.isDisabled && ti.supportsFiber) try {
      Gs = ti.inject(Nm), Zt = ti;
    } catch {
    }
  }
  return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em, kt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pl(t)) throw Error(i(200));
    return Sm(e, t, null, n);
  }, kt.createRoot = function(e, t) {
    if (!pl(e)) throw Error(i(299));
    var n = !1, s = "", l = qd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = cl(e, 1, !1, null, null, n, !1, s, l), e[ln] = t.current, ys(e.nodeType === 8 ? e.parentNode : e), new fl(t);
  }, kt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = _u(t), e = e === null ? null : e.stateNode, e;
  }, kt.flushSync = function(e) {
    return er(e);
  }, kt.hydrate = function(e, t, n) {
    if (!Zo(t)) throw Error(i(200));
    return ei(null, e, t, !0, n);
  }, kt.hydrateRoot = function(e, t, n) {
    if (!pl(e)) throw Error(i(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", m = qd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), t = Ud(t, null, e, 1, n ?? null, l, !1, u, m), e[ln] = t.current, ys(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Xo(t);
  }, kt.render = function(e, t, n) {
    if (!Zo(t)) throw Error(i(200));
    return ei(null, e, t, !1, n);
  }, kt.unmountComponentAtNode = function(e) {
    if (!Zo(e)) throw Error(i(40));
    return e._reactRootContainer ? (er(function() {
      ei(null, null, e, !1, function() {
        e._reactRootContainer = null, e[ln] = null;
      });
    }), !0) : !1;
  }, kt.unstable_batchedUpdates = sl, kt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Zo(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return ei(e, t, n, !1, s);
  }, kt.version = "18.3.1-next-f1338f8080-20240426", kt;
}
var tf;
function If() {
  if (tf) return vl.exports;
  tf = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), vl.exports = Lm(), vl.exports;
}
var nf;
function Dm() {
  if (nf) return ni;
  nf = 1;
  var r = If();
  return ni.createRoot = r.createRoot, ni.hydrateRoot = r.hydrateRoot, ni;
}
var Om = Dm();
const zm = /* @__PURE__ */ $f(Om);
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
function Hm(r = {}) {
  function a(d, f) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: g = ""
    } = dr(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), bl(
      "",
      { pathname: p, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      f.state && f.state.usr || null,
      f.state && f.state.key || "default"
    );
  }
  function i(d, f) {
    let p = d.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let g = d.location.href, w = g.indexOf("#");
      h = w === -1 ? g : g.slice(0, w);
    }
    return h + "#" + (typeof f == "string" ? f : Bs(f));
  }
  function c(d, f) {
    zt(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return Wm(
    a,
    i,
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
function Fm() {
  return Math.random().toString(36).substring(2, 10);
}
function of(r, a) {
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
function bl(r, a, i = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? dr(a) : a,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || c || Fm(),
    mask: d
  };
}
function Bs({
  pathname: r = "/",
  search: a = "",
  hash: i = ""
}) {
  return a && a !== "?" && (r += a.charAt(0) === "?" ? a : "?" + a), i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i), r;
}
function dr(r) {
  let a = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && (a.hash = r.substring(i), r = r.substring(0, i));
    let c = r.indexOf("?");
    c >= 0 && (a.search = r.substring(c), r = r.substring(0, c)), r && (a.pathname = r);
  }
  return a;
}
function Wm(r, a, i, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, p = d.history, h = "POP", g = null, w = y();
  w == null && (w = 0, p.replaceState({ ...p.state, idx: w }, ""));
  function y() {
    return (p.state || { idx: null }).idx;
  }
  function x() {
    h = "POP";
    let N = y(), P = N == null ? null : N - w;
    w = N, g && g({ action: h, location: j.location, delta: P });
  }
  function k(N, P) {
    h = "PUSH";
    let F = sf(N) ? N : bl(j.location, N, P);
    i && i(F, N), w = y() + 1;
    let $ = of(F, w), A = j.createHref(F.mask || F);
    try {
      p.pushState($, "", A);
    } catch (H) {
      if (H instanceof DOMException && H.name === "DataCloneError")
        throw H;
      d.location.assign(A);
    }
    f && g && g({ action: h, location: j.location, delta: 1 });
  }
  function C(N, P) {
    h = "REPLACE";
    let F = sf(N) ? N : bl(j.location, N, P);
    i && i(F, N), w = y();
    let $ = of(F, w), A = j.createHref(F.mask || F);
    p.replaceState($, "", A), f && g && g({ action: h, location: j.location, delta: 0 });
  }
  function b(N) {
    return Bm(d, N);
  }
  let j = {
    get action() {
      return h;
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
      return a(d, N);
    },
    createURL: b,
    encodeLocation(N) {
      let P = b(N);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
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
function Bm(r, a, i = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), ze(c, "No window.location.(origin|href) available to create URL");
  let d = typeof a == "string" ? a : Bs(a);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Lf(r, a, i = "/") {
  return Um(r, a, i, !1);
}
function Um(r, a, i, c, d) {
  let f = typeof a == "string" ? dr(a) : a, p = gn(f.pathname || "/", i);
  if (p == null)
    return null;
  let h = Vm(r), g = null, w = rv(p);
  for (let y = 0; g == null && y < h.length; ++y)
    g = tv(
      h[y],
      w,
      c
    );
  return g;
}
function Vm(r) {
  let a = Df(r);
  return qm(a), a;
}
function Df(r, a = [], i = [], c = "", d = !1) {
  let f = (p, h, g = d, w) => {
    let y = {
      relativePath: w === void 0 ? p.path || "" : w,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
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
    let x = Jt([c, y.relativePath]), k = i.concat(y);
    p.children && p.children.length > 0 && (ze(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), Df(
      p.children,
      a,
      k,
      x,
      g
    )), !(p.path == null && !p.index) && a.push({
      path: x,
      score: Zm(x, p.index),
      routesMeta: k
    });
  };
  return r.forEach((p, h) => {
    var g;
    if (p.path === "" || !((g = p.path) != null && g.includes("?")))
      f(p, h);
    else
      for (let w of Of(p.path))
        f(p, h, !0, w);
  }), a;
}
function Of(r) {
  let a = r.split("/");
  if (a.length === 0) return [];
  let [i, ...c] = a, d = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let p = Of(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && h.push(...p), h.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function qm(r) {
  r.sort(
    (a, i) => a.score !== i.score ? i.score - a.score : ev(
      a.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Qm = /^:[\w-]+$/, Km = 3, Ym = 2, Jm = 1, Gm = 10, Xm = -2, af = (r) => r === "*";
function Zm(r, a) {
  let i = r.split("/"), c = i.length;
  return i.some(af) && (c += Xm), a && (c += Ym), i.filter((d) => !af(d)).reduce(
    (d, f) => d + (Qm.test(f) ? Km : f === "" ? Jm : Gm),
    c
  );
}
function ev(r, a) {
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
function tv(r, a, i = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let g = c[h], w = h === c.length - 1, y = f === "/" ? a : a.slice(f.length) || "/", x = di(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: w },
      y
    ), k = g.route;
    if (!x && w && i && !c[c.length - 1].route.index && (x = di(
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
      pathname: Jt([f, x.pathname]),
      pathnameBase: av(
        Jt([f, x.pathnameBase])
      ),
      route: k
    }), x.pathnameBase !== "/" && (f = Jt([f, x.pathnameBase]));
  }
  return p;
}
function di(r, a) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, c] = nv(
    r.path,
    r.caseSensitive,
    r.end
  ), d = a.match(i);
  if (!d) return null;
  let f = d[0], p = f.replace(/(.)\/+$/, "$1"), h = d.slice(1);
  return {
    params: c.reduce(
      (w, { paramName: y, isOptional: x }, k) => {
        if (y === "*") {
          let b = h[k] || "";
          p = f.slice(0, f.length - b.length).replace(/(.)\/+$/, "$1");
        }
        const C = h[k];
        return x && !C ? w[y] = void 0 : w[y] = (C || "").replace(/%2F/g, "/"), w;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: r
  };
}
function nv(r, a = !1, i = !0) {
  zt(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  );
  let c = [], d = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, g, w, y) => {
      if (c.push({ paramName: h, isOptional: g != null }), g) {
        let x = y.charAt(w + p.length);
        return x && x !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return r.endsWith("*") ? (c.push({ paramName: "*" }), d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? d += "\\/*$" : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, a ? void 0 : "i"), c];
}
function rv(r) {
  try {
    return r.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return zt(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), r;
  }
}
function gn(r, a) {
  if (a === "/") return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let i = a.endsWith("/") ? a.length - 1 : a.length, c = r.charAt(i);
  return c && c !== "/" ? null : r.slice(i) || "/";
}
var sv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ov(r, a = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? dr(r) : r, f;
  return i ? (i = zf(i), i.startsWith("/") ? f = lf(i.substring(1), "/") : f = lf(i, a)) : f = a, {
    pathname: f,
    search: lv(c),
    hash: uv(d)
  };
}
function lf(r, a) {
  let i = fi(a).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function _l(r, a, i, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function iv(r) {
  return r.filter(
    (a, i) => i === 0 || a.route.path && a.route.path.length > 0
  );
}
function Hl(r) {
  let a = iv(r);
  return a.map(
    (i, c) => c === a.length - 1 ? i.pathname : i.pathnameBase
  );
}
function gi(r, a, i, c = !1) {
  let d;
  typeof r == "string" ? d = dr(r) : (d = { ...r }, ze(
    !d.pathname || !d.pathname.includes("?"),
    _l("?", "pathname", "search", d)
  ), ze(
    !d.pathname || !d.pathname.includes("#"),
    _l("#", "pathname", "hash", d)
  ), ze(
    !d.search || !d.search.includes("#"),
    _l("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", p = f ? "/" : d.pathname, h;
  if (p == null)
    h = i;
  else {
    let x = a.length - 1;
    if (!c && p.startsWith("..")) {
      let k = p.split("/");
      for (; k[0] === ".."; )
        k.shift(), x -= 1;
      d.pathname = k.join("/");
    }
    h = x >= 0 ? a[x] : "/";
  }
  let g = ov(d, h), w = p && p !== "/" && p.endsWith("/"), y = (f || p === ".") && i.endsWith("/");
  return !g.pathname.endsWith("/") && (w || y) && (g.pathname += "/"), g;
}
var zf = (r) => r.replace(/\/\/+/g, "/"), Jt = (r) => zf(r.join("/")), fi = (r) => r.replace(/\/+$/, ""), av = (r) => fi(r).replace(/^\/*/, "/"), lv = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, uv = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, cv = class {
  constructor(r, a, i, c = !1) {
    this.status = r, this.statusText = a || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function dv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function fv(r) {
  let a = r.map((i) => i.route.path).filter(Boolean);
  return Jt(a) || "/";
}
var Hf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ff(r, a) {
  let i = r;
  if (typeof i != "string" || !sv.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, d = !1;
  if (Hf)
    try {
      let f = new URL(window.location.href), p = i.startsWith("//") ? new URL(f.protocol + i) : new URL(i), h = gn(p.pathname, a);
      p.origin === f.origin && h != null ? i = h + p.search + p.hash : d = !0;
    } catch {
      zt(
        !1,
        `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: c,
    isExternal: d,
    to: i
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Wf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Wf
);
var pv = [
  "GET",
  ...Wf
];
new Set(pv);
var Ur = v.createContext(null);
Ur.displayName = "DataRouter";
var _i = v.createContext(null);
_i.displayName = "DataRouterState";
var Bf = v.createContext(!1);
function hv() {
  return v.useContext(Bf);
}
var Uf = v.createContext({
  isTransitioning: !1
});
Uf.displayName = "ViewTransition";
var mv = v.createContext(
  /* @__PURE__ */ new Map()
);
mv.displayName = "Fetchers";
var vv = v.createContext(null);
vv.displayName = "Await";
var Rt = v.createContext(
  null
);
Rt.displayName = "Navigation";
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
var Fl = v.createContext(null);
Fl.displayName = "RouteError";
var Vf = "REACT_ROUTER_ERROR", yv = "REDIRECT", gv = "ROUTE_ERROR_RESPONSE";
function _v(r) {
  if (r.startsWith(`${Vf}:${yv}:{`))
    try {
      let a = JSON.parse(r.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function xv(r) {
  if (r.startsWith(
    `${Vf}:${gv}:{`
  ))
    try {
      let a = JSON.parse(r.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new cv(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function wv(r, { relative: a } = {}) {
  ze(
    fr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(Rt), { hash: d, pathname: f, search: p } = Vs(r, { relative: a }), h = f;
  return i !== "/" && (h = f === "/" ? i : Jt([i, f])), c.createHref({ pathname: h, search: p, hash: d });
}
function fr() {
  return v.useContext(Us) != null;
}
function jt() {
  return ze(
    fr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(Us).location;
}
var qf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Qf(r) {
  v.useContext(Rt).static || v.useLayoutEffect(r);
}
function Wl() {
  let { isDataRoute: r } = v.useContext(an);
  return r ? Mv() : kv();
}
function kv() {
  ze(
    fr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext(Ur), { basename: a, navigator: i } = v.useContext(Rt), { matches: c } = v.useContext(an), { pathname: d } = jt(), f = JSON.stringify(Hl(c)), p = v.useRef(!1);
  return Qf(() => {
    p.current = !0;
  }), v.useCallback(
    (g, w = {}) => {
      if (zt(p.current, qf), !p.current) return;
      if (typeof g == "number") {
        i.go(g);
        return;
      }
      let y = gi(
        g,
        JSON.parse(f),
        d,
        w.relative === "path"
      );
      r == null && a !== "/" && (y.pathname = y.pathname === "/" ? a : Jt([a, y.pathname])), (w.replace ? i.replace : i.push)(
        y,
        w.state,
        w
      );
    },
    [
      a,
      i,
      f,
      d,
      r
    ]
  );
}
v.createContext(null);
function Vs(r, { relative: a } = {}) {
  let { matches: i } = v.useContext(an), { pathname: c } = jt(), d = JSON.stringify(Hl(i));
  return v.useMemo(
    () => gi(
      r,
      JSON.parse(d),
      c,
      a === "path"
    ),
    [r, d, c, a]
  );
}
function Sv(r, a) {
  return Kf(r, a);
}
function Kf(r, a, i) {
  var N;
  ze(
    fr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(Rt), { matches: d } = v.useContext(an), f = d[d.length - 1], p = f ? f.params : {}, h = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", w = f && f.route;
  {
    let P = w && w.path || "";
    Jf(
      h,
      !w || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`
    );
  }
  let y = jt(), x;
  if (a) {
    let P = typeof a == "string" ? dr(a) : a;
    ze(
      g === "/" || ((N = P.pathname) == null ? void 0 : N.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${P.pathname}" was given in the \`location\` prop.`
    ), x = P;
  } else
    x = y;
  let k = x.pathname || "/", C = k;
  if (g !== "/") {
    let P = g.replace(/^\//, "").split("/");
    C = "/" + k.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let b = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (P) => Object.assign(P, {
        route: i.manifest[P.route.id] || P.route
      })
    )
  ) : Lf(r, { pathname: C });
  zt(
    w || b != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `
  ), zt(
    b == null || b[b.length - 1].route.element !== void 0 || b[b.length - 1].route.Component !== void 0 || b[b.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let j = Tv(
    b && b.map(
      (P) => Object.assign({}, P, {
        params: Object.assign({}, p, P.params),
        pathname: Jt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            P.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathname
        ]),
        pathnameBase: P.pathnameBase === "/" ? g : Jt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            P.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathnameBase
        ])
      })
    ),
    d,
    i
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
function Cv() {
  let r = $v(), a = dv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), i = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, a), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, p);
}
var jv = /* @__PURE__ */ v.createElement(Cv, null), Yf = class extends v.Component {
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
      const i = xv(r.digest);
      i && (r = i);
    }
    let a = r !== void 0 ? /* @__PURE__ */ v.createElement(an.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Fl.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(Ev, { error: r }, a) : a;
  }
};
Yf.contextType = Bf;
var xl = /* @__PURE__ */ new WeakMap();
function Ev({
  children: r,
  error: a
}) {
  let { basename: i } = v.useContext(Rt);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let c = _v(a.digest);
    if (c) {
      let d = xl.get(a);
      if (d) throw d;
      let f = Ff(c.location, i);
      if (Hf && !xl.get(a))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw xl.set(a, p), p;
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
function Nv({ routeContext: r, match: a, children: i }) {
  let c = v.useContext(Ur);
  return c && c.static && c.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ v.createElement(an.Provider, { value: r }, i);
}
function Tv(r, a = [], i) {
  let c = i == null ? void 0 : i.state;
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
  let p = !1, h = -1;
  if (i && c) {
    p = c.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let x = d[y];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (h = y), x.route.id) {
        let { loaderData: k, errors: C } = c, b = x.route.loader && !k.hasOwnProperty(x.route.id) && (!C || C[x.route.id] === void 0);
        if (x.route.lazy || b) {
          i.isStatic && (p = !0), h >= 0 ? d = d.slice(0, h + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let g = i == null ? void 0 : i.onError, w = c && g ? (y, x) => {
    var k, C;
    g(y, {
      location: c.location,
      params: ((C = (k = c.matches) == null ? void 0 : k[0]) == null ? void 0 : C.params) ?? {},
      pattern: fv(c.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (y, x, k) => {
      let C, b = !1, j = null, N = null;
      c && (C = f && x.route.id ? f[x.route.id] : void 0, j = x.route.errorElement || jv, p && (h < 0 && k === 0 ? (Jf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), b = !0, N = null) : h === k && (b = !0, N = x.route.hydrateFallbackElement || null)));
      let P = a.concat(d.slice(0, k + 1)), F = () => {
        let $;
        return C ? $ = j : b ? $ = N : x.route.Component ? $ = /* @__PURE__ */ v.createElement(x.route.Component, null) : x.route.element ? $ = x.route.element : $ = y, /* @__PURE__ */ v.createElement(
          Nv,
          {
            match: x,
            routeContext: {
              outlet: y,
              matches: P,
              isDataRoute: c != null
            },
            children: $
          }
        );
      };
      return c && (x.route.ErrorBoundary || x.route.errorElement || k === 0) ? /* @__PURE__ */ v.createElement(
        Yf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: j,
          error: C,
          children: F(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: w
        }
      ) : F();
    },
    null
  );
}
function Bl(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function bv(r) {
  let a = v.useContext(Ur);
  return ze(a, Bl(r)), a;
}
function Av(r) {
  let a = v.useContext(_i);
  return ze(a, Bl(r)), a;
}
function Rv(r) {
  let a = v.useContext(an);
  return ze(a, Bl(r)), a;
}
function Ul(r) {
  let a = Rv(r), i = a.matches[a.matches.length - 1];
  return ze(
    i.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Pv() {
  return Ul(
    "useRouteId"
    /* UseRouteId */
  );
}
function $v() {
  var c;
  let r = v.useContext(Fl), a = Av(
    "useRouteError"
    /* UseRouteError */
  ), i = Ul(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = a.errors) == null ? void 0 : c[i];
}
function Mv() {
  let { router: r } = bv(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Ul(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return Qf(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      zt(i.current, qf), i.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: a, ...f }));
    },
    [r, a]
  );
}
var uf = {};
function Jf(r, a, i) {
  !a && !uf[r] && (uf[r] = !0, zt(!1, i));
}
v.memo(Iv);
function Iv({
  routes: r,
  manifest: a,
  future: i,
  state: c,
  isStatic: d,
  onError: f
}) {
  return Kf(r, void 0, {
    manifest: a,
    state: c,
    isStatic: d,
    onError: f
  });
}
function vn({
  to: r,
  replace: a,
  state: i,
  relative: c
}) {
  ze(
    fr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(Rt);
  zt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(an), { pathname: p } = jt(), h = Wl(), g = gi(
    r,
    Hl(f),
    p,
    c === "path"
  ), w = JSON.stringify(g);
  return v.useEffect(() => {
    h(JSON.parse(w), { replace: a, state: i, relative: c });
  }, [h, w, c, a, i]), null;
}
function Qe(r) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Lv({
  basename: r = "/",
  children: a = null,
  location: i,
  navigationType: c = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: p
}) {
  ze(
    !fr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = r.replace(/^\/*/, "/"), g = v.useMemo(
    () => ({
      basename: h,
      navigator: d,
      static: f,
      useTransitions: p,
      future: {}
    }),
    [h, d, f, p]
  );
  typeof i == "string" && (i = dr(i));
  let {
    pathname: w = "/",
    search: y = "",
    hash: x = "",
    state: k = null,
    key: C = "default",
    mask: b
  } = i, j = v.useMemo(() => {
    let N = gn(w, h);
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
  }, [h, w, y, x, k, C, c, b]);
  return zt(
    j != null,
    `<Router basename="${h}"> is not able to match the URL "${w}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), j == null ? null : /* @__PURE__ */ v.createElement(Rt.Provider, { value: g }, /* @__PURE__ */ v.createElement(Us.Provider, { children: a, value: j }));
}
function Dv({
  children: r,
  location: a
}) {
  return Sv(Al(r), a);
}
function Al(r, a = []) {
  let i = [];
  return v.Children.forEach(r, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let f = [...a, d];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
        Al(c.props.children, f)
      );
      return;
    }
    ze(
      c.type === Qe,
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
    c.props.children && (p.children = Al(
      c.props.children,
      f
    )), i.push(p);
  }), i;
}
var ui = "get", ci = "application/x-www-form-urlencoded";
function xi(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function Ov(r) {
  return xi(r) && r.tagName.toLowerCase() === "button";
}
function zv(r) {
  return xi(r) && r.tagName.toLowerCase() === "form";
}
function Hv(r) {
  return xi(r) && r.tagName.toLowerCase() === "input";
}
function Fv(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Wv(r, a) {
  return r.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !Fv(r);
}
var ri = null;
function Bv() {
  if (ri === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ri = !1;
    } catch {
      ri = !0;
    }
  return ri;
}
var Uv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function wl(r) {
  return r != null && !Uv.has(r) ? (zt(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ci}"`
  ), null) : r;
}
function Vv(r, a) {
  let i, c, d, f, p;
  if (zv(r)) {
    let h = r.getAttribute("action");
    c = h ? gn(h, a) : null, i = r.getAttribute("method") || ui, d = wl(r.getAttribute("enctype")) || ci, f = new FormData(r);
  } else if (Ov(r) || Hv(r) && (r.type === "submit" || r.type === "image")) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || h.getAttribute("action");
    if (c = g ? gn(g, a) : null, i = r.getAttribute("formmethod") || h.getAttribute("method") || ui, d = wl(r.getAttribute("formenctype")) || wl(h.getAttribute("enctype")) || ci, f = new FormData(h, r), !Bv()) {
      let { name: w, type: y, value: x } = r;
      if (y === "image") {
        let k = w ? `${w}.` : "";
        f.append(`${k}x`, "0"), f.append(`${k}y`, "0");
      } else w && f.append(w, x);
    }
  } else {
    if (xi(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = ui, c = null, d = ci, p = r;
  }
  return f && d === "text/plain" && (p = f, f = void 0), { action: c, method: i.toLowerCase(), encType: d, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Vl(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function Gf(r, a, i, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : a && gn(d.pathname, a) === "/" ? d.pathname = `${fi(a)}/_root.${c}` : d.pathname = `${fi(d.pathname)}.${c}`, d;
}
async function qv(r, a) {
  if (r.id in a)
    return a[r.id];
  try {
    let i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      r.module
    );
    return a[r.id] = i, i;
  } catch (i) {
    return console.error(
      `Error loading route module \`${r.module}\`, reloading page...`
    ), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Qv(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function Kv(r, a, i) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = a.routes[d.route.id];
      if (f) {
        let p = await qv(f, i);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Xv(
    c.flat(1).filter(Qv).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function cf(r, a, i, c, d, f) {
  let p = (g, w) => i[w] ? g.route.id !== i[w].route.id : !0, h = (g, w) => {
    var y;
    return (
      // param change, /users/123 -> /users/456
      i[w].pathname !== g.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((y = i[w].route.path) == null ? void 0 : y.endsWith("*")) && i[w].params["*"] !== g.params["*"]
    );
  };
  return f === "assets" ? a.filter(
    (g, w) => p(g, w) || h(g, w)
  ) : f === "data" ? a.filter((g, w) => {
    var x;
    let y = c.routes[g.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (p(g, w) || h(g, w))
      return !0;
    if (g.route.shouldRevalidate) {
      let k = g.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((x = i[0]) == null ? void 0 : x.params) || {},
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
function Yv(r, a, { includeHydrateFallback: i } = {}) {
  return Jv(
    r.map((c) => {
      let d = a.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function Jv(r) {
  return [...new Set(r)];
}
function Gv(r) {
  let a = {}, i = Object.keys(r).sort();
  for (let c of i)
    a[c] = r[c];
  return a;
}
function Xv(r, a) {
  let i = /* @__PURE__ */ new Set();
  return new Set(a), r.reduce((c, d) => {
    let f = JSON.stringify(Gv(d));
    return i.has(f) || (i.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function ql() {
  let r = v.useContext(Ur);
  return Vl(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function Zv() {
  let r = v.useContext(_i);
  return Vl(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Ql = v.createContext(void 0);
Ql.displayName = "FrameworkContext";
function Kl() {
  let r = v.useContext(Ql);
  return Vl(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function ey(r, a) {
  let i = v.useContext(Ql), [c, d] = v.useState(!1), [f, p] = v.useState(!1), { onFocus: h, onBlur: g, onMouseEnter: w, onMouseLeave: y, onTouchStart: x } = a, k = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && p(!0), r === "viewport") {
      let j = (P) => {
        P.forEach((F) => {
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
  return i ? r !== "intent" ? [f, k, {}] : [
    f,
    k,
    {
      onFocus: Ls(h, C),
      onBlur: Ls(g, b),
      onMouseEnter: Ls(w, C),
      onMouseLeave: Ls(y, b),
      onTouchStart: Ls(x, C)
    }
  ] : [!1, k, {}];
}
function Ls(r, a) {
  return (i) => {
    r && r(i), i.defaultPrevented || a(i);
  };
}
function ty({ page: r, ...a }) {
  let i = hv(), { router: c } = ql(), d = v.useMemo(
    () => Lf(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(ry, { page: r, matches: d, ...a }) : /* @__PURE__ */ v.createElement(sy, { page: r, matches: d, ...a }) : null;
}
function ny(r) {
  let { manifest: a, routeModules: i } = Kl(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return Kv(r, a, i).then(
      (p) => {
        f || d(p);
      }
    ), () => {
      f = !0;
    };
  }, [r, a, i]), c;
}
function ry({
  page: r,
  matches: a,
  ...i
}) {
  let c = jt(), { future: d } = Kl(), { basename: f } = ql(), p = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let h = Gf(
      r,
      f,
      d.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), g = !1, w = [];
    for (let y of a)
      typeof y.route.shouldRevalidate == "function" ? g = !0 : w.push(y.route.id);
    return g && w.length > 0 && h.searchParams.set("_routes", w.join(",")), [h.pathname + h.search];
  }, [
    f,
    d.v8_trailingSlashAwareDataRequests,
    r,
    c,
    a
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...i })));
}
function sy({
  page: r,
  matches: a,
  ...i
}) {
  let c = jt(), { future: d, manifest: f, routeModules: p } = Kl(), { basename: h } = ql(), { loaderData: g, matches: w } = Zv(), y = v.useMemo(
    () => cf(
      r,
      a,
      w,
      f,
      c,
      "data"
    ),
    [r, a, w, f, c]
  ), x = v.useMemo(
    () => cf(
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
      var A;
      let $ = f.routes[F.route.id];
      !$ || !$.hasLoader || (!y.some((H) => H.route.id === F.route.id) && F.route.id in g && ((A = p[F.route.id]) != null && A.shouldRevalidate) || $.hasClientLoader ? N = !0 : j.add(F.route.id));
    }), j.size === 0)
      return [];
    let P = Gf(
      r,
      h,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return N && j.size > 0 && P.searchParams.set(
      "_routes",
      a.filter((F) => j.has(F.route.id)).map((F) => F.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    h,
    d.v8_trailingSlashAwareDataRequests,
    g,
    c,
    f,
    y,
    a,
    r,
    p
  ]), C = v.useMemo(
    () => Yv(x, f),
    [x, f]
  ), b = ny(x);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, k.map((j) => /* @__PURE__ */ v.createElement("link", { key: j, rel: "prefetch", as: "fetch", href: j, ...i })), C.map((j) => /* @__PURE__ */ v.createElement("link", { key: j, rel: "modulepreload", href: j, ...i })), b.map(({ key: j, link: N }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: j,
        nonce: i.nonce,
        ...N,
        crossOrigin: N.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function oy(...r) {
  return (a) => {
    r.forEach((i) => {
      typeof i == "function" ? i(a) : i != null && (i.current = a);
    });
  };
}
var iy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  iy && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function ay({
  basename: r,
  children: a,
  useTransitions: i,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = Hm({ window: c, v5Compat: !0 }));
  let f = d.current, [p, h] = v.useState({
    action: f.action,
    location: f.location
  }), g = v.useCallback(
    (w) => {
      i === !1 ? h(w) : v.startTransition(() => h(w));
    },
    [i]
  );
  return v.useLayoutEffect(() => f.listen(g), [f, g]), /* @__PURE__ */ v.createElement(
    Lv,
    {
      basename: r,
      children: a,
      location: p.location,
      navigationType: p.action,
      navigator: f,
      useTransitions: i
    }
  );
}
var Xf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Zf = v.forwardRef(
  function({
    onClick: a,
    discover: i = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: f,
    replace: p,
    mask: h,
    state: g,
    target: w,
    to: y,
    preventScrollReset: x,
    viewTransition: k,
    defaultShouldRevalidate: C,
    ...b
  }, j) {
    let { basename: N, navigator: P, useTransitions: F } = v.useContext(Rt), $ = typeof y == "string" && Xf.test(y), A = Ff(y, N);
    y = A.to;
    let H = wv(y, { relative: d }), O = jt(), G = null;
    if (h) {
      let W = gi(
        h,
        [],
        O.mask ? O.mask.pathname : "/",
        !0
      );
      N !== "/" && (W.pathname = W.pathname === "/" ? N : Jt([N, W.pathname])), G = P.createHref(W);
    }
    let [U, X, xe] = ey(
      c,
      b
    ), fe = cy(y, {
      replace: p,
      mask: h,
      state: g,
      target: w,
      preventScrollReset: x,
      relative: d,
      viewTransition: k,
      defaultShouldRevalidate: C,
      useTransitions: F
    });
    function me(W) {
      a && a(W), W.defaultPrevented || fe(W);
    }
    let ve = !(A.isExternal || f), we = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...b,
          ...xe,
          href: (ve ? G : void 0) || A.absoluteURL || H,
          onClick: ve ? me : a,
          ref: oy(j, X),
          target: w,
          "data-discover": !$ && i === "render" ? "true" : void 0
        }
      )
    );
    return U && !$ ? /* @__PURE__ */ v.createElement(v.Fragment, null, we, /* @__PURE__ */ v.createElement(ty, { page: H })) : we;
  }
);
Zf.displayName = "Link";
var dt = v.forwardRef(
  function({
    "aria-current": a = "page",
    caseSensitive: i = !1,
    className: c = "",
    end: d = !1,
    style: f,
    to: p,
    viewTransition: h,
    children: g,
    ...w
  }, y) {
    let x = Vs(p, { relative: w.relative }), k = jt(), C = v.useContext(_i), { navigator: b, basename: j } = v.useContext(Rt), N = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    my(x) && h === !0, P = b.encodeLocation ? b.encodeLocation(x).pathname : x.pathname, F = k.pathname, $ = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    i || (F = F.toLowerCase(), $ = $ ? $.toLowerCase() : null, P = P.toLowerCase()), $ && j && ($ = gn($, j) || $);
    const A = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let H = F === P || !d && F.startsWith(P) && F.charAt(A) === "/", O = $ != null && ($ === P || !d && $.startsWith(P) && $.charAt(P.length) === "/"), G = {
      isActive: H,
      isPending: O,
      isTransitioning: N
    }, U = H ? a : void 0, X;
    typeof c == "function" ? X = c(G) : X = [
      c,
      H ? "active" : null,
      O ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let xe = typeof f == "function" ? f(G) : f;
    return /* @__PURE__ */ v.createElement(
      Zf,
      {
        ...w,
        "aria-current": U,
        className: X,
        ref: y,
        style: xe,
        to: p,
        viewTransition: h
      },
      typeof g == "function" ? g(G) : g
    );
  }
);
dt.displayName = "NavLink";
var ly = v.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: a,
    navigate: i,
    reloadDocument: c,
    replace: d,
    state: f,
    method: p = ui,
    action: h,
    onSubmit: g,
    relative: w,
    preventScrollReset: y,
    viewTransition: x,
    defaultShouldRevalidate: k,
    ...C
  }, b) => {
    let { useTransitions: j } = v.useContext(Rt), N = py(), P = hy(h, { relative: w }), F = p.toLowerCase() === "get" ? "get" : "post", $ = typeof h == "string" && Xf.test(h), A = (H) => {
      if (g && g(H), H.defaultPrevented) return;
      H.preventDefault();
      let O = H.nativeEvent.submitter, G = (O == null ? void 0 : O.getAttribute("formmethod")) || p, U = () => N(O || H.currentTarget, {
        fetcherKey: a,
        method: G,
        navigate: i,
        replace: d,
        state: f,
        relative: w,
        preventScrollReset: y,
        viewTransition: x,
        defaultShouldRevalidate: k
      });
      j && i !== !1 ? v.startTransition(() => U()) : U();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: b,
        method: F,
        action: P,
        onSubmit: c ? g : A,
        ...C,
        "data-discover": !$ && r === "render" ? "true" : void 0
      }
    );
  }
);
ly.displayName = "Form";
function uy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ep(r) {
  let a = v.useContext(Ur);
  return ze(a, uy(r)), a;
}
function cy(r, {
  target: a,
  replace: i,
  mask: c,
  state: d,
  preventScrollReset: f,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: g,
  useTransitions: w
} = {}) {
  let y = Wl(), x = jt(), k = Vs(r, { relative: p });
  return v.useCallback(
    (C) => {
      if (Wv(C, a)) {
        C.preventDefault();
        let b = i !== void 0 ? i : Bs(x) === Bs(k), j = () => y(r, {
          replace: b,
          mask: c,
          state: d,
          preventScrollReset: f,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: g
        });
        w ? v.startTransition(() => j()) : j();
      }
    },
    [
      x,
      y,
      k,
      i,
      c,
      d,
      a,
      r,
      f,
      p,
      h,
      g,
      w
    ]
  );
}
var dy = 0, fy = () => `__${String(++dy)}__`;
function py() {
  let { router: r } = ep(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = v.useContext(Rt), i = Pv(), c = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, p = {}) => {
      let { action: h, method: g, encType: w, formData: y, body: x } = Vv(
        f,
        a
      );
      if (p.navigate === !1) {
        let k = p.fetcherKey || fy();
        await c(k, i, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: y,
          body: x,
          formMethod: p.method || g,
          formEncType: p.encType || w,
          flushSync: p.flushSync
        });
      } else
        await d(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: y,
          body: x,
          formMethod: p.method || g,
          formEncType: p.encType || w,
          replace: p.replace,
          state: p.state,
          fromRouteId: i,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, d, a, i]
  );
}
function hy(r, { relative: a } = {}) {
  let { basename: i } = v.useContext(Rt), c = v.useContext(an);
  ze(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Vs(r || ".", { relative: a }) }, p = jt();
  if (r == null) {
    f.search = p.search;
    let h = new URLSearchParams(f.search), g = h.getAll("index");
    if (g.some((y) => y === "")) {
      h.delete("index"), g.filter((x) => x).forEach((x) => h.append("index", x));
      let y = h.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Jt([i, f.pathname])), Bs(f);
}
function my(r, { relative: a } = {}) {
  let i = v.useContext(Uf);
  ze(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = ep(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Vs(r, { relative: a });
  if (!i.isTransitioning)
    return !1;
  let f = gn(i.currentLocation.pathname, c) || i.currentLocation.pathname, p = gn(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return di(d.pathname, p) != null || di(d.pathname, f) != null;
}
var tp = If();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = (...r) => r.filter((a, i, c) => !!a && a.trim() !== "" && c.indexOf(a) === i).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, i, c) => c ? c.toUpperCase() : i.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = (r) => {
  const a = yy(r);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var kl = {
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
const gy = (r) => {
  for (const a in r)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
}, _y = v.createContext({}), xy = () => v.useContext(_y), wy = v.forwardRef(
  ({ color: r, size: a, strokeWidth: i, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: p, ...h }, g) => {
    const {
      size: w = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: x = !1,
      color: k = "currentColor",
      className: C = ""
    } = xy() ?? {}, b = c ?? x ? Number(i ?? y) * 24 / Number(a ?? w) : i ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...kl,
        width: a ?? w ?? kl.width,
        height: a ?? w ?? kl.height,
        stroke: r ?? k,
        strokeWidth: b,
        className: np("lucide", C, d),
        ...!f && !gy(h) && { "aria-hidden": "true" },
        ...h
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
  const i = v.forwardRef(
    ({ className: c, ...d }, f) => v.createElement(wy, {
      ref: f,
      iconNode: a,
      className: np(
        `lucide-${vy(df(r))}`,
        `lucide-${r}`,
        c
      ),
      ...d
    })
  );
  return i.displayName = df(r), i;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], rp = je("alarm-clock", ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Cy = je("arrow-left", Sy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ey = je("arrow-right", jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [
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
], Yl = je("baby", Ny);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], by = je("check", Ty);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ay = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], sp = je("chevron-down", Ay);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Py = je("circle-check", Ry);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], My = je("circle-question-mark", $y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iy = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ly = je("circle", Iy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], Oy = je("clock-3", Dy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zy = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Hy = je("command", zy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], op = je("download", Fy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = [
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
], By = je("file-code-corner", Wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uy = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], Vy = je("git-branch", Uy);
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
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
], Qy = je("headphones", qy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = [
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
], Yy = je("layers", Ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], Gy = je("layout-grid", Jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], ip = je("menu", Xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], eg = je("message-circle", Zy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tg = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
  ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
], ng = je("mic-off", tg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], sg = je("mic", rg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ff = je("phone-call", og);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = [
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
], pf = je("phone-off", ig);
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
], pi = je("phone", ag);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lg = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], ug = je("radio", lg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], dg = je("search", cg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fg = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ap = je("settings", fg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], si = je("sliders-horizontal", pg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], Jl = je("speaker", hg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mg = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], vg = je("timer", mg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], gg = je("triangle-alert", yg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], xg = je("volume-2", _g);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], hf = je("workflow", wg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], lp = je("x", kg), Sg = { ru: "Тема", en: "Theme" }, Cg = { ru: "Тёмная", en: "Dark" }, jg = { ru: "Светлая", en: "Light" }, Eg = { ru: "Токен", en: "Token" }, Ng = { ru: "Тип действия", en: "Action type" }, Tg = { ru: "Ветка диалога", en: "Conversation branch" }, bg = { ru: "Текст ответа", en: "Response text" }, Ag = { ru: "Команда", en: "Command" }, Rg = { ru: "Название переменной", en: "Variable name" }, Pg = { ru: "Основная команда", en: "Main command" }, $g = { ru: "Второстепенная команда", en: "Secondary command" }, Mg = { ru: "Прямая команда", en: "Direct command" }, Ig = { ru: "Дополнительные фразы", en: "Additional phrases" }, Lg = { ru: "Удалённый сервер", en: "Remote server" }, Dg = { ru: "Вложенные команды", en: "Nested commands" }, Og = { ru: "Тип вложенного значения", en: "Nested value type" }, zg = { ru: "Тип данных", en: "Data type" }, Hg = { ru: "Вручную", en: "Manual" }, Fg = { ru: "Любой", en: "Any" }, Wg = { ru: "Любой", en: "Any" }, Bg = { ru: "Текст", en: "Text" }, Ug = { ru: "Число", en: "Number" }, Vg = { ru: "Дата", en: "Date" }, qg = { ru: "Время", en: "Time" }, Qg = {
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
  dark: Cg,
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
  Token: Eg,
  actionType: Ng,
  actionTypeComponent: Tg,
  voiceResponse: bg,
  uuid: Ag,
  mappingType: Rg,
  parent_type: Pg,
  children_type: $g,
  children_direct_type: Mg,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: Ig,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: Lg,
  subDirectControl: Dg,
  subMappingType: Og,
  valueType: zg,
  manual: Hg,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Fg,
  All: Wg,
  string: Bg,
  int: Ug,
  date: Vg,
  time: qg,
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
  Стандартная: { ru: "Стандартная", en: "Default" },
  "Настройки распознавания": { ru: "Настройки распознавания", en: "Recognition settings" },
  "Числа от 0 до 9": { ru: "Числа от 0 до 9", en: "Numbers from 0 to 9" },
  "Числа от 10 до 19": { ru: "Числа от 10 до 19", en: "Numbers from 10 to 19" },
  Десятки: { ru: "Десятки", en: "Tens" },
  Сотни: { ru: "Сотни", en: "Hundreds" },
  "Тысяча: варианты произношения": { ru: "Тысяча: варианты произношения", en: "Thousand: pronunciation variants" },
  "Служебные слова в названиях мест": { ru: "Служебные слова в названиях мест", en: "Location stop words" },
  Месяцы: { ru: "Месяцы", en: "Months" },
  "Время суток": { ru: "Время суток", en: "Time of day" },
  "Предлоги перед временем": { ru: "Предлоги перед временем", en: "Time prefixes" },
  "Единицы времени": { ru: "Единицы времени", en: "Time units" },
  "Относительные даты": { ru: "Относительные даты", en: "Relative dates" },
  "Произношение дат": { ru: "Произношение дат", en: "Date pronunciation" },
  "Замена символов": { ru: "Замена символов", en: "Character replacements" },
  Утро: { ru: "Утро", en: "Morning" },
  Вечер: { ru: "Вечер", en: "Evening" },
  День: { ru: "День", en: "Day" },
  Ночь: { ru: "Ночь", en: "Night" },
  "Родительный падеж": { ru: "Родительный падеж", en: "Genitive case" },
  "Дательный падеж": { ru: "Дательный падеж", en: "Dative case" },
  "Без склонения": { ru: "Без склонения", en: "Without inflection" },
  Сегодня: { ru: "Сегодня", en: "Today" },
  Завтра: { ru: "Завтра", en: "Tomorrow" },
  Послезавтра: { ru: "Послезавтра", en: "Day after tomorrow" },
  "Порядковые числа от 1 до 9": { ru: "Порядковые числа от 1 до 9", en: "Ordinal numbers from 1 to 9" },
  "Номера месяцев": { ru: "Номера месяцев", en: "Month numbers" },
  "Формы названий месяцев": { ru: "Формы названий месяцев", en: "Month name forms" },
  "Название раздела": { ru: "Название раздела", en: "Section name" },
  "Это название отображается в редакторе. Технический ключ словаря не меняется.": { ru: "Это название отображается в редакторе. Технический ключ словаря не меняется.", en: "This name is displayed in the editor. The technical dictionary key remains unchanged." },
  "Укажите варианты через ;. Например: ноль; ноля; нолю. Пустые элементы не сохраняются.": { ru: "Укажите варианты через ;. Например: ноль; ноля; нолю. Пустые элементы не сохраняются.", en: "Separate variants with ;. For example: zero; nought. Empty items are not saved." },
  "Словарь сохранён и применяется без перезапуска.": { ru: "Словарь сохранён и применяется без перезапуска.", en: "Dictionary saved and applied without restarting." }
}, up = "ha-dialog-ui-language";
let Gl = localStorage.getItem(up) === "en" ? "en" : "ru";
const Rl = /* @__PURE__ */ new Set();
function Kg(r) {
  Gl = r, localStorage.setItem(up, r), Rl.forEach((a) => a());
}
function cp() {
  return v.useSyncExternalStore((r) => (Rl.add(r), () => {
    Rl.delete(r);
  }), () => Gl);
}
function _(r) {
  if (typeof r != "string") return r;
  const a = Qg[r];
  return (a == null ? void 0 : a[Gl]) ?? r;
}
const Yg = "_button_180pj_1", Jg = "_full_180pj_32", Gg = "_primary_180pj_37", Xg = "_secondary_180pj_49", Zg = "_ghost_180pj_61", e_ = "_remove_180pj_83", Sl = {
  button: Yg,
  full: Jg,
  primary: Gg,
  secondary: Xg,
  ghost: Zg,
  remove: e_
}, re = ({
  children: r,
  variant: a = "primary",
  fullWidth: i = !1,
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
        ${Sl[a]}
        ${i ? Sl.full : ""}
        ${f}
      `,
    children: [
      c,
      r,
      d
    ]
  }
), Pl = "ha-dialog-ui-api-enabled-change", dp = v.createContext(!1), Xl = () => v.useContext(dp), fp = v.createContext(!1), Zl = () => v.useContext(fp), hi = "ha-dialog-ui-remote-server-change", pp = v.createContext(null), Vr = () => v.useContext(pp), Ge = (r = 768) => {
  const [a, i] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      i(f.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), a;
}, t_ = "_tabs_1vwxg_1", n_ = "_dropdown_1vwxg_16", r_ = "_tab_1vwxg_1", s_ = "_active_1vwxg_49", o_ = "_menu_1vwxg_59", i_ = "_chevron_1vwxg_76", a_ = "_menuItem_1vwxg_84", pe = {
  tabs: t_,
  dropdown: n_,
  tab: r_,
  active: s_,
  menu: o_,
  chevron: i_,
  menuItem: a_
}, pt = () => {
  const r = Ge(), a = Xl(), i = Zl(), c = Vr(), d = jt(), [f, p] = v.useState(!1), h = v.useRef(null), g = v.useRef(null), w = v.useId();
  if (v.useEffect(() => {
    p(!1);
  }, [d.pathname, r, c]), v.useEffect(() => {
    if (!f) return;
    const y = (x) => {
      h.current && !x.composedPath().includes(h.current) && p(!1);
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("focusin", y), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("focusin", y);
    };
  }, [f]), !r)
    return /* @__PURE__ */ o.jsxs("div", { className: pe.tabs, children: [
      c === !0 && /* @__PURE__ */ o.jsxs(
        dt,
        {
          to: "/scripts",
          className: ({ isActive: y }) => y ? `${pe.tab} ${pe.active}` : pe.tab,
          children: [
            /* @__PURE__ */ o.jsx(By, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _(c ? "Действия удалённых команд" : "Запуск скриптов") })
          ]
        }
      ),
      c === !1 && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: pe.dropdown,
          ref: h,
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
                className: `${pe.tab} ${d.pathname.startsWith("/commands") ? pe.active : ""}`,
                "aria-expanded": f,
                "aria-controls": w,
                onClick: () => p((y) => !y),
                onKeyDown: (y) => {
                  y.key === "ArrowDown" && (y.preventDefault(), p(!0), requestAnimationFrame(() => {
                    var x, k;
                    return (k = (x = h.current) == null ? void 0 : x.querySelector("a")) == null ? void 0 : k.focus();
                  }));
                },
                children: [
                  /* @__PURE__ */ o.jsx(Hy, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ o.jsx("span", { children: _("Команды") }),
                  /* @__PURE__ */ o.jsx(sp, { size: 14, className: pe.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ o.jsxs(
              "nav",
              {
                id: w,
                className: pe.menu,
                "aria-label": _("Разделы команд"),
                onClick: () => p(!1),
                children: [
                  /* @__PURE__ */ o.jsx(
                    dt,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${pe.menuItem} ${pe.active}` : pe.menuItem,
                      children: _("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    dt,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${pe.menuItem} ${pe.active}` : pe.menuItem,
                      children: _("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    dt,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${pe.menuItem} ${pe.active}` : pe.menuItem,
                      children: _("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    dt,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${pe.menuItem} ${pe.active}` : pe.menuItem,
                      children: _("Ответы по умолчанию")
                    }
                  ),
                  i && /* @__PURE__ */ o.jsx(dt, { to: "/commands/normalization", className: ({ isActive: y }) => y ? `${pe.menuItem} ${pe.active}` : pe.menuItem, children: _("Настройки распознавания") }),
                  i && /* @__PURE__ */ o.jsx(
                    dt,
                    {
                      to: "/commands/whisper",
                      className: ({ isActive: y }) => y ? `${pe.menuItem} ${pe.active}` : pe.menuItem,
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
        dt,
        {
          to: "/timer",
          className: ({ isActive: y }) => y ? `${pe.tab} ${pe.active}` : pe.tab,
          children: [
            /* @__PURE__ */ o.jsx(vg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        dt,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${pe.tab} ${pe.active}` : pe.tab,
          children: [
            /* @__PURE__ */ o.jsx(rp, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Будильники") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(dt, { to: "/monitor", className: ({ isActive: y }) => y ? `${pe.tab} ${pe.active}` : pe.tab, children: [
        /* @__PURE__ */ o.jsx(Yl, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Радионяня") })
      ] }),
      /* @__PURE__ */ o.jsxs(dt, { to: "/calls", className: ({ isActive: y }) => y ? `${pe.tab} ${pe.active}` : pe.tab, children: [
        /* @__PURE__ */ o.jsx(pi, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Звонки") })
      ] }),
      i && /* @__PURE__ */ o.jsxs(dt, { to: "/downloads", className: ({ isActive: y }) => y ? `${pe.tab} ${pe.active}` : pe.tab, children: [
        /* @__PURE__ */ o.jsx(op, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Импорт и экспорт") })
      ] }),
      a && i && /* @__PURE__ */ o.jsx(dt, { to: "/logs", className: ({ isActive: y }) => y ? `${pe.tab} ${pe.active}` : pe.tab, children: _("Логи") }),
      /* @__PURE__ */ o.jsxs(
        dt,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${pe.tab} ${pe.active}` : pe.tab,
          children: [
            /* @__PURE__ */ o.jsx(ap, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Настройки") })
          ]
        }
      )
    ] });
}, Ds = "dialogCustomUiOverlay", oi = [], mi = /* @__PURE__ */ new Set();
let l_ = 0, zr = null, $l = !1;
function u_() {
  $l = !0, window.addEventListener("popstate", () => {
    $l = !1;
    const r = [...mi];
    mi.clear(), queueMicrotask(() => r.forEach((a) => a()));
  }, { once: !0 }), history.back();
}
function hp(r, a) {
  const i = Ge(), c = v.useRef(a);
  c.current = a, v.useEffect(() => {
    if (!r || !i) return;
    const d = `overlay-${++l_}`;
    let f = !1, p = !1, h = !1;
    const g = () => {
      var y;
      oi.at(-1) !== d || ((y = history.state) == null ? void 0 : y[Ds]) === d || (f = !0, c.current());
    }, w = () => {
      var x;
      if (h) return;
      p = !0, oi.push(d);
      const y = { ...history.state, [Ds]: d };
      zr && ((x = history.state) == null ? void 0 : x[Ds]) === zr ? (history.replaceState(y, ""), zr = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return $l ? mi.add(w) : w(), () => {
      var y;
      h = !0, mi.delete(w), window.removeEventListener("popstate", g), p && (oi.splice(oi.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[Ds]) === d && (zr = d, queueMicrotask(() => {
        var x;
        zr === d && (zr = null, ((x = history.state) == null ? void 0 : x[Ds]) === d && u_());
      })));
    };
  }, [r, i]);
}
const c_ = "_overlay_tb5vv_1", d_ = "_sheet_tb5vv_11", f_ = "_handle_tb5vv_21", sr = {
  overlay: c_,
  sheet: d_,
  handle: f_
}, eu = ({
  open: r,
  className: a = "",
  labelledBy: i,
  onClose: c,
  children: d
}) => {
  hp(r, c);
  const [f, p] = v.useState(r), [h, g] = v.useState(r), w = v.useRef(0), y = v.useRef(0), [x, k] = v.useState(0);
  v.useEffect(() => {
    const N = document.body.style.overflow;
    if (r)
      p(!0), requestAnimationFrame(() => {
        g(!0);
      }), document.body.style.overflow = "hidden";
    else {
      g(!1);
      const P = setTimeout(() => {
        p(!1);
      }, 300);
      return () => clearTimeout(P);
    }
    return () => {
      document.body.style.overflow = N;
    };
  }, [r]);
  const C = (N) => {
    w.current = N.touches[0].clientY;
  }, b = (N) => {
    y.current = N.touches[0].clientY;
    const P = y.current - w.current;
    P > 0 && k(P);
  }, j = () => {
    x > 120 && c(), k(0);
  };
  return v.useEffect(() => {
    const N = (P) => {
      P.key === "Escape" && c();
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
      className: `${sr.overlay} ${h ? sr.visible : ""} ${a}`,
      onClick: c,
      children: /* @__PURE__ */ o.jsxs(
        "section",
        {
          className: `${sr.sheet} ${h ? sr.open : ""}`,
          style: {
            transform: `translateY(${x}px)`,
            transition: x === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
          },
          onClick: (N) => N.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": i,
          children: [
            /* @__PURE__ */ o.jsx(
              "div",
              {
                className: sr.handleArea,
                onTouchStart: C,
                onTouchMove: b,
                onTouchEnd: j,
                children: /* @__PURE__ */ o.jsx("div", { className: sr.handle })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: sr.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, p_ = "_overlay_avpnk_1", h_ = "_heading_avpnk_16", m_ = "_close_avpnk_32", v_ = "_nav_avpnk_45", y_ = "_item_avpnk_51", g_ = "_icon_avpnk_70", __ = "_label_avpnk_78", x_ = "_arrow_avpnk_86", w_ = "_active_avpnk_91", yn = {
  overlay: p_,
  heading: h_,
  close: m_,
  nav: v_,
  item: y_,
  icon: g_,
  label: __,
  arrow: x_,
  active: w_
};
function k_({ open: r, onClose: a }) {
  const i = Xl(), c = Zl(), d = Vr(), { pathname: f } = jt(), p = v.useId(), h = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: eg },
      { to: "/commands/sub", label: "Второстепенные команды", icon: Vy },
      { to: "/commands/direct/main", label: "Прямые команды", icon: hf },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: Yy },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: si },
      ...c ? [{ to: "/commands/normalization", label: "Настройки распознавания", icon: si }] : [],
      ...c ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: si }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: hf }] : [],
    { to: "/timer", label: "Таймеры", icon: Oy },
    { to: "/alarm", label: "Будильники", icon: rp },
    { to: "/monitor", label: "Радионяня", icon: Yl },
    { to: "/calls", label: "Звонки", icon: pi },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: op }] : [],
    ...i && c ? [{ to: "/logs", label: "Логи", icon: si }] : [],
    { to: "/settings", label: "Настройки", icon: ap }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const w = requestAnimationFrame(() => {
      var y, x, k;
      return (k = ((y = h.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((x = h.current) == null ? void 0 : x.querySelector("a"))) == null ? void 0 : k.focus();
    });
    return () => cancelAnimationFrame(w);
  }, [r]), /* @__PURE__ */ o.jsx(eu, { open: r, onClose: a, labelledBy: p, className: yn.overlay, children: /* @__PURE__ */ o.jsxs("div", { ref: h, onKeyDown: (w) => {
    if (w.key !== "Tab") return;
    const y = [...h.current.querySelectorAll("button, a")], x = y[0], k = y[y.length - 1];
    w.shiftKey && w.target === x ? (w.preventDefault(), k.focus()) : !w.shiftKey && w.target === k && (w.preventDefault(), x.focus());
  }, children: [
    /* @__PURE__ */ o.jsxs("div", { className: yn.heading, children: [
      /* @__PURE__ */ o.jsx("h2", { id: p, children: _("Разделы") }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: yn.close, "aria-label": _("Закрыть меню разделов"), onClick: a, children: /* @__PURE__ */ o.jsx(lp, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsx("nav", { className: yn.nav, "aria-label": _("Навигация интеграции"), children: g.map(({ to: w, label: y, icon: x }) => /* @__PURE__ */ o.jsxs(
      dt,
      {
        to: w,
        end: !0,
        className: ({ isActive: k }) => `${yn.item} ${k ? yn.active : ""}`,
        onClick: (k) => {
          f === w && k.preventDefault(), a();
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: yn.icon, children: /* @__PURE__ */ o.jsx(x, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ o.jsx("span", { className: yn.label, children: _(y) }),
          f === w ? /* @__PURE__ */ o.jsx(by, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(Ey, { size: 16, className: yn.arrow, "aria-hidden": "true" })
        ]
      },
      w
    )) })
  ] }) });
}
const S_ = "_search_1h7xe_1", C_ = {
  search: S_
};
function qr({ value: r, onChange: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: C_.search, children: [
    /* @__PURE__ */ o.jsx(dg, { size: 18, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "search",
        "aria-label": _("Поиск по названию"),
        placeholder: _("Поиск по названию"),
        value: r,
        onChange: (i) => a(i.target.value)
      }
    )
  ] });
}
const j_ = "_header_1pxju_1", E_ = "_bar_1pxju_9", N_ = "_tools_1pxju_18", T_ = "_title_1pxju_31", b_ = "_menuButton_1pxju_38", A_ = "_active_1pxju_76", or = {
  header: j_,
  bar: E_,
  tools: N_,
  title: T_,
  menuButton: b_,
  active: A_
}, ht = ({ title: r = "", search: a, beforeSearch: i }) => {
  const c = Ge(), [d, f] = v.useState(!1), p = v.useRef(null), h = () => {
    var g;
    f(!1), (g = p.current) == null || g.focus();
  };
  return v.useEffect(() => {
    c || f(!1);
  }, [c]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { className: or.header, children: [
      /* @__PURE__ */ o.jsxs("div", { className: or.bar, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-label": _("Открыть меню Home Assistant"),
            className: or.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ o.jsx(ip, { size: 20 })
          }
        ),
        /* @__PURE__ */ o.jsx("h1", { className: or.title, children: _(r) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            ref: p,
            "aria-label": _("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${or.menuButton} ${d ? or.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ o.jsx(Gy, { size: 20 })
          }
        )
      ] }),
      c && (i || a) && /* @__PURE__ */ o.jsxs("div", { className: or.tools, children: [
        i,
        a && /* @__PURE__ */ o.jsx(qr, { ...a })
      ] })
    ] }),
    c && /* @__PURE__ */ o.jsx(k_, { open: d, onClose: h })
  ] });
};
function R_({ retry: r }) {
  const a = fr();
  let i = "dark";
  try {
    i = localStorage.getItem("ha-dialog-ui-theme") || "dark";
  } catch {
  }
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "appShell panelRecovery panelRenderRecovery",
      "data-theme": i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "panelRecoveryNavigation", children: a ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(pt, {}),
          /* @__PURE__ */ o.jsx(ht, { title: _("Панель диалога") })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            re,
            {
              variant: "ghost",
              "aria-label": _("Открыть меню Home Assistant"),
              onClick: (c) => c.currentTarget.dispatchEvent(
                new CustomEvent("hass-toggle-menu", {
                  bubbles: !0,
                  composed: !0
                })
              ),
              children: /* @__PURE__ */ o.jsx(ip, { size: 22 })
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
          /* @__PURE__ */ o.jsx(re, { onClick: r, children: _("Открыть повторно") })
        ] }) })
      ]
    }
  );
}
class mp extends v.Component {
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
  componentDidUpdate(i) {
    this.state.failed && i.resetKey !== this.props.resetKey && this.retry();
  }
  componentDidCatch(i, c) {
    console.error(
      "[ha_dialog_ui] Panel render failed",
      i,
      c.componentStack
    );
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ o.jsx(R_, { retry: this.retry }) : this.props.children;
  }
}
const P_ = "_container_x92qn_1", $_ = "_rows_x92qn_9", M_ = "_hidden_x92qn_20", I_ = "_overlay_x92qn_24", L_ = "_card_x92qn_32", D_ = "_title_x92qn_51", O_ = "_subtitle_x92qn_51", z_ = "_srOnly_x92qn_70", H_ = "_grid_x92qn_89", sn = {
  container: P_,
  rows: $_,
  hidden: M_,
  overlay: I_,
  card: L_,
  title: D_,
  subtitle: O_,
  srOnly: z_,
  grid: H_
};
function Gt({ loading: r, itemCount: a, append: i = !1, children: c, placeholderCount: d = 10, grid: f = !1, label: p = "Загрузка..." }) {
  const h = r && a > 0 && !i, g = r && /* @__PURE__ */ o.jsxs("div", { className: `${h ? sn.overlay : sn.rows} ${f ? sn.grid : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ o.jsx("span", { className: sn.srOnly, children: _(p) }),
    Array.from({ length: h ? a : i && a > 0 ? 3 : d }, (w, y) => /* @__PURE__ */ o.jsxs("div", { className: sn.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: sn.title }),
      /* @__PURE__ */ o.jsx("span", { className: sn.subtitle })
    ] }, y))
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: sn.container, "aria-busy": r, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${sn.rows} ${h ? sn.hidden : ""}`, "aria-hidden": h || void 0, children: c }),
    g
  ] });
}
const F_ = "_loader_1tvqb_1", W_ = "_fullscreen_1tvqb_7", mf = {
  loader: F_,
  fullscreen: W_
}, qs = ({ label: r = "Загрузка...", fullscreen: a = !1 }) => /* @__PURE__ */ o.jsx("div", { className: `${mf.loader} ${a ? mf.fullscreen : ""}`, children: /* @__PURE__ */ o.jsx(Gt, { loading: !0, itemCount: 0, placeholderCount: 4, label: r }) }), B_ = "_error_fi1f1_1", U_ = {
  error: B_
}, Ke = ({ error: r, retry: a, busy: i = !1 }) => r ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: U_.error, children: [
  /* @__PURE__ */ o.jsx("p", { children: _(r) }),
  a && /* @__PURE__ */ o.jsx(re, { variant: "secondary", disabled: i, onClick: a, children: _("Повторить загрузку") })
] }) : null, vf = {
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
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? (r.code === "call_error" || r.code === "monitor_error" || r.code === "whisper_prompt_error") && "message" in r && typeof r.message == "string" ? r.message : vf[r.code] ?? a : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? vf.connection_lost : a;
}
function Ht() {
  const [r, a] = v.useState(null), [i, c] = v.useState(!1), [d, f] = v.useState(!1), p = v.useRef(0), h = v.useRef(null), g = v.useCallback(async (x, k = {}) => {
    if (k.exclusive && p.current > 0) return !1;
    p.current += 1, c(!0), a(null), f(!1);
    try {
      return await x(), h.current = null, !0;
    } catch (C) {
      return a(Ct(C, k.fallback)), h.current = k.retryable ? x : null, f(!!k.retryable), !1;
    } finally {
      p.current -= 1, c(p.current > 0);
    }
  }, []), w = v.useCallback(() => {
    h.current && g(h.current, { retryable: !0 });
  }, [g]), y = v.useCallback(() => {
    a(null), f(!1), h.current = null;
  }, []);
  return { error: r, busy: i, retry: d ? w : void 0, run: g, clearError: y };
}
const vp = v.createContext(null);
function ot() {
  const r = v.useContext(vp);
  if (!r)
    throw new Error(
      "DialogContext not initialized"
    );
  return r;
}
const V_ = "_subtitle_c1esh_1", q_ = "_card_c1esh_6", Q_ = "_content_c1esh_32", K_ = "_title_c1esh_40", Y_ = "_arrow_c1esh_46", J_ = "_titleOnly_c1esh_57", Hr = {
  subtitle: V_,
  card: q_,
  content: Q_,
  title: K_,
  arrow: Y_,
  titleOnly: J_
}, Wn = ({
  title: r,
  subTitle: a,
  onClick: i
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    type: "button",
    className: `${Hr.card} ${a ? "" : Hr.titleOnly}`,
    onClick: i,
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: Hr.content, children: [
        /* @__PURE__ */ o.jsx("div", { className: Hr.title, children: r }),
        a && /* @__PURE__ */ o.jsx("div", { className: Hr.subtitle, children: _(a) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: Hr.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), G_ = "_overlay_1m3e5_1", X_ = "_modal_1m3e5_1", Z_ = "_header_1m3e5_1", e1 = "_body_1m3e5_1", t1 = "_footer_1m3e5_1", n1 = "_sm_1m3e5_32", r1 = "_md_1m3e5_36", s1 = "_lg_1m3e5_40", o1 = "_xl_1m3e5_44", i1 = "_title_1m3e5_59", a1 = "_close_1m3e5_86", l1 = "_fields_1m3e5_116", u1 = "_suspended_1m3e5_124", c1 = "_heading_1m3e5_128", St = {
  overlay: G_,
  modal: X_,
  header: Z_,
  body: e1,
  footer: t1,
  sm: n1,
  md: r1,
  lg: s1,
  xl: o1,
  title: i1,
  close: a1,
  fields: l1,
  suspended: u1,
  heading: c1
}, Ft = ({
  open: r,
  suspended: a = !1,
  feedback: i,
  onClose: c,
  onBack: d,
  title: f,
  dialogLabel: p,
  subtitle: h,
  footer: g,
  children: w,
  size: y = "md"
}) => (hp(r, c), v.useEffect(() => {
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
}, [r, c, a]), r ? /* @__PURE__ */ o.jsx(
  "div",
  {
    className: `${St.overlay} ${a ? St.suspended : ""}`,
    "aria-hidden": a || void 0,
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
              re,
              {
                variant: "ghost",
                className: St.close,
                "aria-label": _("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ o.jsx(Cy, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (h ? /* @__PURE__ */ o.jsxs("div", { className: St.heading, children: [
              /* @__PURE__ */ o.jsx("h2", { className: St.title, children: _(f) }),
              h
            ] }) : /* @__PURE__ */ o.jsx("h2", { className: St.title, children: _(f) })),
            /* @__PURE__ */ o.jsx(
              re,
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
            /* @__PURE__ */ o.jsx(Ke, { ...i }),
            /* @__PURE__ */ o.jsx("fieldset", { className: St.fields, disabled: i == null ? void 0 : i.busy, children: w })
          ] }),
          g && /* @__PURE__ */ o.jsx("div", { className: St.footer, children: /* @__PURE__ */ o.jsx("fieldset", { className: St.fields, disabled: i == null ? void 0 : i.busy, children: g }) })
        ]
      }
    )
  }
) : null), yp = {
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
function gp(r) {
  var a;
  return (a = Object.entries(yp).find(([i]) => r === i || r === _(i))) == null ? void 0 : a[1];
}
function wi(r) {
  const a = _(yp["Название команды"]);
  return r ? `${a}
UUID: ${r}` : a;
}
const d1 = "_labelRow_1w41x_1", f1 = "_helpButton_1w41x_12", p1 = "_tooltip_1w41x_37", h1 = "_helpOverlay_1w41x_56", m1 = "_sheetContent_1w41x_60", Ws = {
  labelRow: d1,
  helpButton: f1,
  tooltip: p1,
  helpOverlay: h1,
  sheetContent: m1
};
function tu({ label: r, htmlFor: a, className: i, hint: c }) {
  const d = c ?? gp(r);
  return /* @__PURE__ */ o.jsxs("div", { className: Ws.labelRow, children: [
    /* @__PURE__ */ o.jsx("label", { htmlFor: a, className: i, children: _(r) }),
    d && /* @__PURE__ */ o.jsx(Br, { label: r, description: d })
  ] });
}
function Br({ label: r, description: a = gp(r) ?? "" }) {
  var j, N;
  const i = Ge(), [c, d] = v.useState(!1), [f, p] = v.useState({ left: 12, top: 12 }), h = v.useRef(null), g = v.useRef(null), w = v.useRef(), y = v.useId(), x = () => {
    var P;
    d(!1), i && ((P = h.current) == null || P.focus());
  }, k = () => {
    clearTimeout(w.current), d(!0);
  }, C = () => {
    w.current = setTimeout(() => d(!1), 150);
  };
  v.useEffect(() => () => clearTimeout(w.current), []), v.useEffect(() => {
    d(!1);
  }, [i]), v.useLayoutEffect(() => {
    if (!c || i || !h.current || !g.current) return;
    const P = h.current.getBoundingClientRect(), F = g.current.getBoundingClientRect();
    p({
      left: Math.max(12, Math.min(P.left, window.innerWidth - F.width - 12)),
      top: Math.max(12, P.bottom + 8 + F.height <= window.innerHeight - 12 ? P.bottom + 8 : P.top - F.height - 8)
    });
  }, [c, i]), v.useEffect(() => {
    if (!c) return;
    const P = ($) => {
      $.key === "Escape" ? ($.preventDefault(), $.stopImmediatePropagation(), x()) : i && $.key === "Tab" && $.preventDefault();
    };
    window.addEventListener("keydown", P, !0);
    const F = ($) => {
      var A;
      !i && !($.target instanceof Node && ((A = g.current) != null && A.contains($.target))) && d(!1);
    };
    return window.addEventListener("scroll", F, !0), window.addEventListener("resize", F), () => {
      window.removeEventListener("keydown", P, !0), window.removeEventListener("scroll", F, !0), window.removeEventListener("resize", F);
    };
  }, [c, i]);
  const b = ((j = h.current) == null ? void 0 : j.closest("[data-theme]")) ?? ((N = h.current) == null ? void 0 : N.getRootNode());
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        ref: h,
        type: "button",
        className: Ws.helpButton,
        "aria-label": `${_("Подсказка")}: ${_(r)}`,
        "aria-describedby": c && !i ? y : void 0,
        "aria-haspopup": i ? "dialog" : void 0,
        "aria-expanded": i ? c : void 0,
        onMouseEnter: () => {
          i || k();
        },
        onMouseLeave: () => {
          i || C();
        },
        onFocus: () => {
          i || k();
        },
        onBlur: () => {
          i || C();
        },
        onClick: k,
        children: /* @__PURE__ */ o.jsx(My, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && b && tp.createPortal(i ? /* @__PURE__ */ o.jsx(eu, { open: !0, onClose: x, className: Ws.helpOverlay, labelledBy: y, children: /* @__PURE__ */ o.jsxs("div", { className: Ws.sheetContent, children: [
      /* @__PURE__ */ o.jsx("h3", { id: y, children: _(r) }),
      /* @__PURE__ */ o.jsx("p", { children: _(a) }),
      /* @__PURE__ */ o.jsx(re, { autoFocus: !0, variant: "secondary", onClick: x, children: _("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ o.jsx(
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
const v1 = "_field_1vuim_1", y1 = "_label_1vuim_10", g1 = "_inputWrapper_1vuim_18", _1 = "_input_1vuim_18", x1 = "_passwordInput_1vuim_40", w1 = "_passwordToggle_1vuim_66", k1 = "_error_1vuim_95", S1 = "_errorText_1vuim_108", Hn = {
  field: v1,
  label: y1,
  inputWrapper: g1,
  input: _1,
  passwordInput: x1,
  passwordToggle: w1,
  error: k1,
  errorText: S1
}, Ve = ({
  label: r,
  hint: a,
  error: i,
  disabled: c,
  className: d = "",
  id: f,
  type: p,
  ...h
}) => {
  const g = v.useId(), [w, y] = v.useState(!1), x = f ?? g, k = p === "password" && w ? "text" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: Hn.field, children: [
    r && /* @__PURE__ */ o.jsx(tu, { label: r, htmlFor: x, className: Hn.label, hint: a }),
    /* @__PURE__ */ o.jsxs("div", { className: Hn.inputWrapper, children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: x,
          disabled: c,
          type: k,
          ...h,
          "aria-invalid": i ? !0 : h["aria-invalid"],
          "aria-describedby": [h["aria-describedby"], i ? `${x}-error` : void 0].filter(Boolean).join(" ") || void 0,
          className: `
            ${Hn.input}
            ${p === "password" ? Hn.passwordInput : ""}
            ${i ? Hn.error : ""}
            ${d}
          `
        }
      ),
      p === "password" && /* @__PURE__ */ o.jsx(
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
    i && /* @__PURE__ */ o.jsx("span", { id: `${x}-error`, className: Hn.errorText, children: _(i) })
  ] });
}, C1 = "_field_1aipr_1", j1 = "_label_1aipr_8", E1 = "_textarea_1aipr_14", N1 = "_error_1aipr_46", T1 = "_errorText_1aipr_55", Os = {
  field: C1,
  label: j1,
  textarea: E1,
  error: N1,
  errorText: T1
}, Bn = ({
  label: r,
  hint: a,
  error: i,
  className: c = "",
  id: d,
  ...f
}) => {
  const p = v.useId(), h = d ?? p;
  return /* @__PURE__ */ o.jsxs("div", { className: Os.field, children: [
    r && /* @__PURE__ */ o.jsx(tu, { label: r, htmlFor: h, className: Os.label, hint: a }),
    /* @__PURE__ */ o.jsx(
      "textarea",
      {
        id: h,
        ...f,
        className: `
          ${Os.textarea}
          ${i ? Os.error : ""}
          ${c}
        `
      }
    ),
    i && /* @__PURE__ */ o.jsx("span", { className: Os.errorText, children: _(i) })
  ] });
}, b1 = "_toast_1g76h_1", A1 = "_warning_1g76h_43", yf = {
  toast: b1,
  warning: A1
};
function _p({ message: r, warning: a = !1, onClose: i }) {
  v.useEffect(() => {
    const d = setTimeout(i, 5e3);
    return () => clearTimeout(d);
  }, [r, a, i]);
  const c = a ? gg : Py;
  return /* @__PURE__ */ o.jsxs("div", { role: "status", "aria-live": "polite", className: `${yf.toast} ${a ? yf.warning : ""}`, children: [
    /* @__PURE__ */ o.jsx(c, { size: 22, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("span", { children: r }),
    /* @__PURE__ */ o.jsx("button", { type: "button", "aria-label": _("Закрыть уведомление"), onClick: i, children: /* @__PURE__ */ o.jsx(lp, { size: 18 }) })
  ] });
}
const R1 = "_page_z6937_7", P1 = "_header_z6937_19", $1 = "_headerTop_z6937_24", M1 = "_heading_z6937_31", I1 = "_title_z6937_36", L1 = "_description_z6937_45", D1 = "_actions_z6937_52", O1 = "_list_z6937_57", z1 = "_innerTabs_z6937_88", H1 = "_innerTab_z6937_88", F1 = "_activeInnerTab_z6937_121", W1 = "_settingsActions_z6937_131", B1 = "_listSentinel_z6937_141", U1 = "_settingsSections_z6937_145", V1 = "_settingsSection_z6937_145", q1 = "_settingsMobileActions_z6937_171", Q1 = "_connectionFields_z6937_191", K1 = "_collectionHeader_z6937_197", J = {
  page: R1,
  header: P1,
  headerTop: $1,
  heading: M1,
  title: I1,
  description: L1,
  actions: D1,
  list: O1,
  innerTabs: z1,
  innerTab: H1,
  activeInnerTab: F1,
  settingsActions: W1,
  listSentinel: B1,
  settingsSections: U1,
  settingsSection: V1,
  settingsMobileActions: q1,
  connectionFields: Q1,
  collectionHeader: K1
}, Y1 = "_fields_d4bkn_1", J1 = {
  fields: Y1
}, G1 = {
  units: "Числа от 0 до 9",
  teens: "Числа от 10 до 19",
  tens: "Десятки",
  hundreds: "Сотни",
  thousands: "Тысяча: варианты произношения",
  location_stop_words: "Служебные слова в названиях мест",
  months: "Месяцы",
  time_markers: "Время суток",
  time_prefixes: "Предлоги перед временем",
  time_units: "Единицы времени",
  date_keywords: "Относительные даты",
  genitive_day: "Произношение дат",
  special_characters: "Замена символов",
  morning: "Утро",
  evening: "Вечер",
  day: "День",
  night: "Ночь",
  genitive: "Родительный падеж",
  dative: "Дательный падеж",
  plain: "Без склонения",
  minutes: "Минуты",
  seconds: "Секунды",
  hours: "Часы",
  today: "Сегодня",
  tomorrow: "Завтра",
  day_after: "Послезавтра",
  units2: "Порядковые числа от 1 до 9",
  months_map: "Номера месяцев",
  month_markers: "Формы названий месяцев"
}, gf = (r) => typeof r == "object" && !Array.isArray(r), Cl = (r, a) => a.reduce((i, c) => i[c], r);
function X1() {
  const r = ot(), a = Ht(), i = Ge(), [c, d] = v.useState(null), [f, p] = v.useState(null), [h, g] = v.useState([]), [w, y] = v.useState({}), [x, k] = v.useState(!1);
  v.useEffect(() => {
    a.run(async () => d(await r.getData("get_normalization_words")), { retryable: !0 });
  }, [r, a.run]);
  const C = (A, H = f ?? c) => (H == null ? void 0 : H.labels[JSON.stringify(A)]) || _(G1[A.at(-1)] ?? A.at(-1)), b = () => {
    a.busy || (g([]), p(null), a.clearError());
  }, j = (A) => {
    p(structuredClone(c)), y({}), g([A]), k(!1);
  }, N = (A, H) => p((O) => {
    if (!O) return O;
    const G = structuredClone(O), U = Cl(G.words, A.slice(0, -1));
    return U[A.at(-1)] = H, G;
  }), P = () => a.run(async () => {
    const A = await r.saveData({ path: h, value: Cl(f.words, h), title: C(h) }, "save_normalization_words");
    d(A), p(null), g([]), k(!0);
  }, { exclusive: !0 }), F = (A, H) => Array.isArray(H) ? /* @__PURE__ */ o.jsx(
    Bn,
    {
      label: C(A),
      rows: 3,
      disabled: a.busy,
      hint: _("Укажите варианты через ;. Например: ноль; ноля; нолю. Пустые элементы не сохраняются."),
      value: w[JSON.stringify(A)] ?? H.join("; "),
      onChange: (O) => {
        y((G) => ({ ...G, [JSON.stringify(A)]: O.target.value })), N(A, O.target.value.split(";").map((G) => G.trim()).filter(Boolean));
      }
    },
    JSON.stringify(A)
  ) : /* @__PURE__ */ o.jsx(
    Ve,
    {
      label: C(A),
      disabled: a.busy,
      type: typeof H == "number" ? "number" : "text",
      min: typeof H == "number" ? 1 : void 0,
      max: typeof H == "number" ? 12 : void 0,
      value: String(H),
      onChange: (O) => N(A, typeof H == "number" ? Number(O.target.value) : O.target.value)
    },
    JSON.stringify(A)
  ), $ = f && h.length ? Cl(f.words, h) : null;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ht, { title: "Настройки распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !i && /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${J.header} ${J.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: J.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: J.heading, children: !i && /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Настройки распознавания") }) }) }) }),
      !h.length && /* @__PURE__ */ o.jsx(Ke, { ...a }),
      !c && !a.error && /* @__PURE__ */ o.jsx(qs, {}),
      /* @__PURE__ */ o.jsx("div", { className: J.list, children: c && Object.keys(c.words).map((A) => /* @__PURE__ */ o.jsx(Wn, { title: C([A], c), subTitle: A, onClick: () => j(A) }, A)) }),
      x && /* @__PURE__ */ o.jsx(_p, { message: _("Словарь сохранён и применяется без перезапуска."), onClose: () => k(!1) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Ft,
      {
        dialogLabel: h.length ? C(h) : _("Настройки распознавания"),
        open: !!(h.length && f),
        title: h.length ? C(h) : "",
        subtitle: h.join(" / "),
        onClose: b,
        onBack: h.length > 1 ? () => g((A) => A.slice(0, -1)) : void 0,
        feedback: a,
        footer: /* @__PURE__ */ o.jsx(re, { disabled: a.busy, onClick: () => void P(), children: _("Сохранить") }),
        children: f && $ !== null && /* @__PURE__ */ o.jsxs("div", { className: J1.fields, children: [
          /* @__PURE__ */ o.jsx(
            Ve,
            {
              label: _("Название раздела"),
              hint: _("Это название отображается в редакторе. Технический ключ словаря не меняется."),
              disabled: a.busy,
              value: f.labels[JSON.stringify(h)] ?? C(h),
              onChange: (A) => p((H) => H && { ...H, labels: { ...H.labels, [JSON.stringify(h)]: A.target.value } })
            }
          ),
          gf($) ? Object.entries($).map(([A, H]) => gf(H) ? /* @__PURE__ */ o.jsx(Wn, { title: C([...h, A]), subTitle: A, onClick: () => g((O) => [...O, A]) }, A) : F([...h, A], H)) : F(h, $)
        ] })
      }
    )
  ] });
}
const Z1 = "_form_15zw4_1", e0 = "_actions_15zw4_8", _f = {
  form: Z1,
  actions: e0
};
function t0() {
  const r = ot(), a = Ht(), [i, c] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [p, h] = v.useState(""), [g, w] = v.useState(!1), [y, x] = v.useState(null);
  v.useEffect(() => {
    let b = !0;
    return a.run(async () => {
      const j = await r.getData("get_whisper_prompt");
      b && (c({ ...j, initial_prompt: Array.isArray(j.initial_prompt) ? j.initial_prompt.join("; ") : j.initial_prompt }), h(j.url), w(!0));
    }, { retryable: !0 }), () => {
      b = !1;
    };
  }, [r, a.run]);
  const k = (b) => {
    c((j) => ({ ...j, ...b })), x(null);
  }, C = (b) => a.run(async () => {
    const j = await r.saveData({
      url: i.url,
      token: d,
      apply: b,
      initial_prompt: i.initial_prompt
    }, "save_whisper_prompt");
    c((N) => ({ ...N, initial_prompt: Array.isArray(j.initial_prompt) ? j.initial_prompt.join("; ") : j.initial_prompt, has_token: !!(d.trim() || N.has_token && i.url === p) })), x({ message: b ? j.applied ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен." : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно." : "Сохранено в Home Assistant.", warning: b && !j.applied }), h(i.url), f("");
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs("section", { className: _f.form, children: [
    /* @__PURE__ */ o.jsx(Ke, { ...a }),
    !g && !a.error && /* @__PURE__ */ o.jsx(qs, {}),
    g && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        Ve,
        {
          label: _("Адрес API Whisper"),
          hint: _("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен."),
          placeholder: "http://192.168.1.10:10301",
          value: i.url,
          disabled: a.busy,
          onChange: (b) => k({ url: b.target.value })
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ve,
        {
          label: _("Токен API Whisper"),
          hint: _("Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса."),
          type: "password",
          value: d,
          disabled: a.busy,
          autoComplete: "new-password",
          placeholder: i.has_token && i.url === p ? _("Токен сохранён; оставьте пустым, чтобы сохранить его") : "",
          onChange: (b) => {
            f(b.target.value), x(null);
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        Bn,
        {
          label: _("Промпт распознавания"),
          hint: _("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели."),
          rows: 10,
          maxLength: 16e3,
          value: i.initial_prompt,
          disabled: a.busy,
          onChange: (b) => k({ initial_prompt: b.target.value })
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: _f.actions, children: [
        /* @__PURE__ */ o.jsx(re, { variant: "secondary", disabled: a.busy, onClick: () => void C(!1), children: _("Сохранить") }),
        /* @__PURE__ */ o.jsx(re, { disabled: a.busy || !i.url.trim(), onClick: () => void C(!0), children: _("Отправить в Whisper") })
      ] }),
      y && /* @__PURE__ */ o.jsx(_p, { message: _(y.message), warning: y.warning, onClose: () => x(null) })
    ] })
  ] });
}
function n0() {
  const r = Ge();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ht, { title: "Промпт распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !r && /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${J.header} ${J.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: J.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: J.heading, children: !r && /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ o.jsx(t0, {})
    ] })
  ] });
}
const r0 = "_heading_1w2wz_1", s0 = "_note_1w2wz_6", o0 = "_entries_1w2wz_12", i0 = "_entry_1w2wz_19", a0 = "_line_1w2wz_27", l0 = "_error_1w2wz_40", u0 = "_body_1w2wz_49", Fn = {
  heading: r0,
  note: s0,
  entries: o0,
  entry: i0,
  line: a0,
  error: l0,
  body: u0
};
function c0() {
  const r = ot(), a = Ht(), [i, c] = v.useState([]);
  return v.useEffect(() => {
    let d = !0, f;
    const p = async () => {
      await a.run(async () => {
        const h = await r.getData("get_api_logs");
        d && (c(h.logs), f = setTimeout(() => {
          p();
        }, 3e3));
      }, { retryable: !0 });
    };
    return p(), () => {
      d = !1, clearTimeout(f);
    };
  }, [r, a.run]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ht, { title: _("Логи") }),
    /* @__PURE__ */ o.jsxs("main", { className: J.page, children: [
      /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsx("h1", { className: Fn.heading, children: _("Логи") }),
      /* @__PURE__ */ o.jsx("p", { className: Fn.note, children: _("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ o.jsx(Ke, { ...a }),
      !i.length && !a.busy && !a.error && /* @__PURE__ */ o.jsx("p", { children: _("Запросов к API пока нет.") }),
      /* @__PURE__ */ o.jsx("div", { className: Fn.entries, children: i.map((d) => /* @__PURE__ */ o.jsxs("article", { className: Fn.entry, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Fn.line, children: [
          /* @__PURE__ */ o.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ o.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: Fn.line, children: [
          /* @__PURE__ */ o.jsx("span", { children: _({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ o.jsxs("span", { className: d.status >= 400 ? Fn.error : void 0, children: [
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
          ([f, p]) => p != null && /* @__PURE__ */ o.jsxs("details", { className: Fn.body, children: [
            /* @__PURE__ */ o.jsx("summary", { children: _(f) }),
            /* @__PURE__ */ o.jsx("pre", { children: JSON.stringify(p, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Ml = /* @__PURE__ */ new Map(), ii = /* @__PURE__ */ new WeakMap(), xf = 0, d0;
function f0(r) {
  return r ? (ii.has(r) || (xf += 1, ii.set(r, xf.toString())), ii.get(r)) : "0";
}
function p0(r) {
  return Object.keys(r).sort().filter(
    (a) => r[a] !== void 0
  ).map((a) => `${a}_${a === "root" ? f0(r.root) : r[a]}`).toString();
}
function h0(r) {
  const a = p0(r);
  let i = Ml.get(a);
  if (!i) {
    const c = /* @__PURE__ */ new Map();
    let d;
    const f = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var g;
        const w = h.isIntersecting && d.some((y) => h.intersectionRatio >= y);
        r.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = w), [...(g = c.get(h.target)) != null ? g : []].forEach((y) => {
          y(w, h);
        });
      });
    }, r);
    d = f.thresholds || (Array.isArray(r.threshold) ? r.threshold : [r.threshold || 0]), i = {
      id: a,
      observer: f,
      elements: c
    }, Ml.set(a, i);
  }
  return i;
}
function m0(r, a, i = {}, c = d0) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const g = r.getBoundingClientRect();
    return a(c, {
      isIntersecting: c,
      target: r,
      intersectionRatio: typeof i.threshold == "number" ? i.threshold : 0,
      time: 0,
      boundingClientRect: g,
      intersectionRect: g,
      rootBounds: g
    }), () => {
    };
  }
  const { id: d, observer: f, elements: p } = h0(i), h = p.get(r) || [];
  return p.has(r) || p.set(r, h), h.push(a), f.observe(r), function() {
    h.splice(h.indexOf(a), 1), h.length === 0 && (p.delete(r), f.unobserve(r)), p.size === 0 && (f.disconnect(), Ml.delete(d));
  };
}
function v0({
  threshold: r,
  delay: a,
  trackVisibility: i,
  rootMargin: c,
  root: d,
  triggerOnce: f,
  skip: p,
  initialInView: h,
  fallbackInView: g,
  onChange: w
} = {}) {
  var y;
  const [x, k] = v.useState(null), C = v.useRef(w), b = v.useRef(h), [j, N] = v.useState({
    inView: !!h,
    entry: void 0
  });
  C.current = w, v.useEffect(
    () => {
      if (b.current === void 0 && (b.current = h), p || !x) return;
      let A;
      return A = m0(
        x,
        (H, O) => {
          const G = b.current;
          b.current = H, !(G === void 0 && !H) && (N({
            inView: H,
            entry: O
          }), C.current && C.current(H, O), O.isIntersecting && f && A && (A(), A = void 0));
        },
        {
          root: d,
          rootMargin: c,
          threshold: r,
          // @ts-expect-error
          trackVisibility: i,
          delay: a
        },
        g
      ), () => {
        A && A();
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
      i,
      g,
      a
    ]
  );
  const P = (y = j.entry) == null ? void 0 : y.target, F = v.useRef(void 0);
  !x && P && !f && !p && F.current !== P && (F.current = P, N({
    inView: !!h,
    entry: void 0
  }), b.current = h);
  const $ = [k, j.inView, j.entry];
  return $.ref = $[0], $.inView = $[1], $.entry = $[2], $;
}
function Qr(r, a, i, c) {
  const { ref: d, inView: f } = v0({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [p, h] = v.useState(!1);
  return v.useEffect(() => {
    !a && (r == null ? void 0 : r.page) === 1 && h(!0);
  }, [a, r]), v.useEffect(() => {
    p && c && f && !a && r && r.page < r.total_pages && i(r.page + 1, !0);
  }, [p, c, f, a, r, i]), d;
}
const jl = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function xp(r) {
  const a = ot(), [i, c] = v.useState(null), [d, f] = v.useState(""), p = v.useRef(""), h = v.useRef(0), [g, w] = v.useState(!0), [y, x] = v.useState(null), k = v.useRef(), C = v.useRef(1), b = v.useRef(!1), j = v.useRef(), N = v.useCallback(async ($, A = !1) => {
    const H = ++h.current, O = p.current.trim(), G = $ === void 0 && b.current, U = $ ?? C.current;
    x(null), w(!0);
    try {
      let X = jl(await a.getPage(r, U, void 0, O));
      const xe = Math.max(1, X.total_pages);
      if (U > xe && (X = jl(await a.getPage(r, xe, void 0, O))), G && X.page > 1) {
        const fe = await Promise.all(Array.from({ length: X.page - 1 }, (me, ve) => a.getPage(r, ve + 1, void 0, O).then(jl)));
        X = { ...X, data: [...fe.flatMap((me) => me.data), ...X.data] };
      }
      if (H !== h.current) return;
      G || (b.current = A), k.current = void 0, C.current = X.page, c((fe) => A && fe ? { ...X, data: [...fe.data, ...X.data] } : X);
    } catch (X) {
      if (H !== h.current) return;
      k.current = { page: $, append: A }, x(Ct(X, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      H === h.current && w(!1);
    }
  }, [a, r]);
  v.useEffect(() => {
    const $ = j.current !== r;
    if (j.current = r, !$ && p.current === d) return;
    p.current = d, C.current = 1, b.current = !1, h.current += 1, w(!0);
    const A = window.setTimeout(() => {
      N(1);
    }, $ ? 0 : 250);
    return () => window.clearTimeout(A);
  }, [r, N, d]);
  const P = v.useCallback(($) => {
    c((A) => A && { ...A, data: $(A.data) });
  }, []);
  return { query: d, setQuery: f, page: i, loading: g, loadPage: N, updateItems: P, error: y, retry: () => {
    var $, A;
    N(($ = k.current) == null ? void 0 : $.page, ((A = k.current) == null ? void 0 : A.append) ?? !1);
  } };
}
function y0() {
  const r = ot(), { query: a, setQuery: i, page: c, loading: d, loadPage: f, error: p, retry: h } = xp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: a, setQuery: i, error: p, retry: h, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (b) => {
    await r.saveData(b, "save_script_action"), await f();
  }, updateScript: async (b, j) => {
    await r.updateRecord(b, "update_script_action", j), await f();
  }, getScriptAction: async (b) => (await r.getRecord(b, "get_script_action")).data, deleteScriptAction: async (b) => {
    await r.deleteRecord(b, "delete_script_action"), await f();
  } };
}
const g0 = "_pagination_r0e80_1", _0 = "_button_r0e80_10", x0 = "_label_r0e80_34", w0 = "_pages_r0e80_40", k0 = "_active_r0e80_48", ir = {
  pagination: g0,
  button: _0,
  label: x0,
  pages: w0,
  active: k0
}, Kr = ({ page: r, totalPages: a, onChange: i }) => {
  if (a <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, p) => r + p - 2).filter((f) => f >= 1 && f <= a),
    a
  ])).sort((f, p) => f - p), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= a && f !== r && i(f);
  };
  return /* @__PURE__ */ o.jsx("nav", { className: ir.pagination, "aria-label": _("Страницы списка"), children: /* @__PURE__ */ o.jsxs("div", { className: ir.pages, children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: ir.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": _("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, p) => /* @__PURE__ */ o.jsxs(Mf.Fragment, { children: [
      p > 0 && f - c[p - 1] > 1 && /* @__PURE__ */ o.jsx("span", { className: ir.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: `${ir.button} ${f === r ? ir.active : ""}`,
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
        className: ir.button,
        disabled: r >= a,
        onClick: () => d(r + 1),
        "aria-label": _("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, S0 = "_content_eng69_1", C0 = "_title_eng69_7", j0 = "_actions_eng69_14", E0 = "_row_eng69_20", N0 = "_identifier_eng69_31", zs = {
  content: S0,
  title: C0,
  actions: j0,
  row: E0,
  identifier: N0
}, nu = ({ open: r, title: a, uuid: i, onClose: c, actions: d, size: f = "md", layout: p = "column" }) => {
  const h = Ge(), g = i ? /* @__PURE__ */ o.jsx("p", { className: zs.identifier, children: i }) : null, w = /* @__PURE__ */ o.jsxs("div", { className: zs.content, children: [
    h && /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx("h3", { className: zs.title, children: a }),
      g
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `${zs.actions} ${p === "row" && !h ? zs.row : ""}`, children: d.map((y) => /* @__PURE__ */ o.jsx(re, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: _(y.label) }, y.label)) })
  ] });
  return h ? /* @__PURE__ */ o.jsx(eu, { open: r, onClose: c, children: w }) : /* @__PURE__ */ o.jsx(Ft, { open: r, onClose: c, title: a, subtitle: g, size: f, children: w });
}, T0 = ({ uuid: r, title: a, open: i, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(nu, { open: i, title: a, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, b0 = "_accordion_5owbj_1", A0 = "_header_5owbj_7", R0 = "_content_5owbj_20", ai = {
  accordion: b0,
  header: A0,
  content: R0
}, P0 = ({
  title: r,
  defaultOpen: a = !1,
  children: i
}) => {
  const [c, d] = v.useState(a);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: ai.accordion,
      "data-open": c,
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: ai.header,
            onClick: () => d((f) => !f),
            "aria-expanded": c,
            children: [
              /* @__PURE__ */ o.jsx("span", { children: _(r) }),
              /* @__PURE__ */ o.jsx("span", { className: ai.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ o.jsx("div", { className: ai.content, children: i })
      ]
    }
  );
}, $0 = "_wrapper_1fgdg_1", M0 = "_dropdown_1fgdg_10", I0 = "_option_1fgdg_22", L0 = "_title_1fgdg_46", D0 = "_uuid_1fgdg_51", O0 = "_hint_1fgdg_52", ar = {
  wrapper: $0,
  dropdown: M0,
  option: I0,
  title: L0,
  uuid: D0,
  hint: O0
}, z0 = ({
  label: r = "uuid",
  value: a,
  selectedTitle: i,
  searchSource: c = ["search_assistant_commands"],
  minQueryLength: d = 2,
  onChange: f,
  onSelect: p,
  getSelectedValue: h,
  error: g
}) => {
  const w = ot(), y = JSON.stringify(c), x = v.useMemo(() => JSON.parse(y), [y]), [k, C] = v.useState(null), b = h ? "" : i || ((k == null ? void 0 : k.uuid) === a ? k.title : "");
  v.useEffect(() => {
    var K;
    if (!a || i || h || (K = fe.current) != null && K.contains(document.activeElement)) return;
    let M = !1;
    return (async () => {
      var B;
      try {
        for (const E of x) {
          const ie = (B = (await w.searchAssistantCommands(a, E)).data) == null ? void 0 : B.find((oe) => oe.uuid === a);
          if (ie) {
            M || C(ie);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      M = !0;
    };
  }, [w, a, i, h, x]);
  const [j, N] = v.useState(null), [P, F] = v.useState(0), [$, A] = v.useState([]), [H, O] = v.useState(!1), [G, U] = v.useState(!1), [X, xe] = v.useState(!1), fe = v.useRef(null), [me, ve] = v.useState({});
  v.useEffect(() => {
    var K, B;
    if (!H) return;
    const M = () => {
      var xn, Z;
      const E = (Z = (xn = fe.current) == null ? void 0 : xn.querySelector("input")) == null ? void 0 : Z.getBoundingClientRect();
      if (!E) return;
      const z = window.visualViewport, ie = ((z == null ? void 0 : z.offsetTop) ?? 0) + 8, oe = ((z == null ? void 0 : z.offsetTop) ?? 0) + ((z == null ? void 0 : z.height) ?? window.innerHeight) - 8, ge = Math.min(oe, Math.max(ie, E.bottom + 6)), ke = Math.min(oe, Math.max(ie, E.top - 6)), Ne = oe - ge, Ce = ke - ie, Re = Ne < 180 && Ce > Ne, it = Math.min(260, Re ? Ce : Ne), Xt = Math.max(8, E.left);
      ve({
        left: Xt,
        width: Math.max(0, Math.min(E.width, window.innerWidth - Xt - 8)),
        top: Re ? ke : ge,
        transform: Re ? "translateY(-100%)" : void 0,
        maxHeight: it
      });
    };
    return M(), window.addEventListener("scroll", M, !0), window.addEventListener("resize", M), (K = window.visualViewport) == null || K.addEventListener("resize", M), (B = window.visualViewport) == null || B.addEventListener("scroll", M), () => {
      var E, z;
      window.removeEventListener("scroll", M, !0), window.removeEventListener("resize", M), (E = window.visualViewport) == null || E.removeEventListener("resize", M), (z = window.visualViewport) == null || z.removeEventListener("scroll", M);
    };
  }, [H]);
  const we = v.useRef(0), W = v.useRef(""), le = v.useMemo(() => a.trim(), [a]);
  v.useEffect(() => {
    if (!le) {
      we.current += 1, N(null), W.current = "", A([]), O(!1);
      return;
    }
    if (le.length < d) {
      we.current += 1, N(null), A([]), O(!1);
      return;
    }
    if (!X || b) {
      we.current += 1, O(!1), U(!1);
      return;
    }
    if (W.current === le)
      return;
    W.current = le;
    const M = we.current + 1;
    we.current = M;
    const K = window.setTimeout(async () => {
      U(!0), N(null);
      try {
        let B = [];
        for (const E of x) {
          const z = await w.searchAssistantCommands(le, E), ie = Array.isArray(z == null ? void 0 : z.data) ? z.data : [];
          B.push(...ie);
        }
        if (we.current !== M)
          return;
        A(B), O(B.length > 0);
      } catch (B) {
        we.current === M && (N(Ct(B)), A([]), O(!1));
      } finally {
        we.current === M && U(!1);
      }
    }, 250);
    return () => window.clearTimeout(K);
  }, [w, le, x, d, X, P, b]);
  const de = (M) => {
    const K = h ? h(M) : M.uuid;
    we.current += 1, C(M), W.current = "", U(!1), A([]), f(K), p == null || p(M), O(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { ref: fe, className: ar.wrapper, children: [
    /* @__PURE__ */ o.jsx(
      Ve,
      {
        label: r,
        value: b || a,
        autoComplete: "off",
        placeholder: _("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          xe(!1), window.setTimeout(() => O(!1), 150);
        },
        onFocus: () => {
          xe(!0), O(!b && $.length > 0);
        },
        onChange: (M) => {
          C(null), f(M.target.value);
        }
      }
    ),
    H && fe.current && tp.createPortal(
      /* @__PURE__ */ o.jsx("div", { role: "listbox", className: ar.dropdown, style: me, children: $.map((M) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: ar.option,
          onMouseDown: (K) => K.preventDefault(),
          onClick: () => de(M),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: ar.title, children: M.title || "Без названия" }),
            /* @__PURE__ */ o.jsx("span", { className: ar.uuid, children: M.uuid }),
            M.mappingType && /* @__PURE__ */ o.jsxs("span", { className: ar.uuid, children: [
              _("mappingType:"),
              M.mappingType
            ] })
          ]
        },
        M.uuid
      )) }),
      fe.current.closest("[data-theme]") ?? fe.current
    ),
    /* @__PURE__ */ o.jsx(Ke, { error: j, busy: G, retry: () => {
      var M, K;
      W.current = "", (K = (M = fe.current) == null ? void 0 : M.querySelector("input")) == null || K.focus(), F((B) => B + 1);
    } }),
    G && /* @__PURE__ */ o.jsx("span", { className: ar.hint, children: _("Поиск...") })
  ] });
}, H0 = "_field_1esqu_1", F0 = "_row_1esqu_5", W0 = "_inputWrapper_1esqu_11", B0 = "_clearButton_1esqu_22", U0 = "_rowError_1esqu_31", Yt = {
  field: H0,
  row: F0,
  inputWrapper: W0,
  clearButton: B0,
  rowError: U0
}, V0 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function El({ field: r, value: a, error: i, onChange: c }) {
  return Vr() ? /* @__PURE__ */ o.jsx(Ve, { label: _(r), value: a, error: i, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ o.jsx(
    z0,
    {
      label: _(r),
      value: a,
      error: i,
      searchSource: [V0[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const q0 = ({
  condition: r,
  index: a,
  defaultOpen: i,
  onChange: c,
  onDelete: d,
  totalCount: f,
  errors: p
}) => {
  const h = r.children_type !== void 0, g = r.children_direct_type !== void 0, w = () => {
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
    P0,
    {
      title: `${_("Условие")} ${a + 1}`,
      defaultOpen: i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: Yt.field, children: /* @__PURE__ */ o.jsx(
          El,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: p == null ? void 0 : p.parent_type,
            onChange: (x) => c({ ...r, parent_type: x })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Yt.field, children: h ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Yt.row} ${p != null && p.children_type ? Yt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Yt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                El,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: p == null ? void 0 : p.children_type,
                  onChange: (x) => c({ ...r, children_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                re,
                {
                  type: "button",
                  variant: "ghost",
                  className: Yt.clearButton,
                  "aria-label": _("Убрать второстепенную команду"),
                  onClick: w,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          re,
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
        /* @__PURE__ */ o.jsx("div", { className: Yt.field, children: g ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Yt.row} ${p != null && p.children_direct_type ? Yt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Yt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                El,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: p == null ? void 0 : p.children_direct_type,
                  onChange: (x) => c({ ...r, children_direct_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                re,
                {
                  type: "button",
                  variant: "ghost",
                  className: Yt.clearButton,
                  "aria-label": _("Убрать прямую команду"),
                  onClick: y,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          re,
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
          re,
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
}, Q0 = "_dropdown_3mupk_2", K0 = "_label_3mupk_11", Y0 = "_wrapper_3mupk_19", J0 = "_select_3mupk_23", G0 = "_arrow_3mupk_65", X0 = "_error_3mupk_85", Z0 = "_errorText_3mupk_103", lr = {
  dropdown: Q0,
  label: K0,
  wrapper: Y0,
  select: J0,
  arrow: G0,
  error: X0,
  errorText: Z0
};
function Wr({
  label: r,
  options: a,
  value: i = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: f
}) {
  const p = v.useId();
  return /* @__PURE__ */ o.jsxs("div", { className: lr.dropdown, children: [
    r && /* @__PURE__ */ o.jsx(
      "label",
      {
        htmlFor: p,
        className: lr.label,
        children: _(r)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: lr.wrapper, children: [
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: p,
          className: `
            ${lr.select}
            ${d ? lr.error : ""}
          `,
          value: i,
          onChange: (h) => f == null ? void 0 : f(h.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: _(c) }),
            a.map((h) => /* @__PURE__ */ o.jsx(
              "option",
              {
                value: h.value,
                children: h.label
              },
              h.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        sp,
        {
          size: 18,
          className: lr.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsx("span", { className: lr.errorText, children: _(d) })
  ] });
}
const ex = "_form_1ogov_1", tx = "_section_1ogov_7", nx = "_sectionTitle_1ogov_18", rx = "_conditions_1ogov_27", sx = "_addCondition_1ogov_33", Fr = {
  form: ex,
  section: tx,
  sectionTitle: nx,
  conditions: rx,
  addCondition: sx
}, ox = ({
  open: r,
  feedback: a,
  initialData: i,
  availableScripts: c,
  isEdit: d = !1,
  loading: f = !1,
  onSave: p,
  onCancel: h
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
      uuid: (i == null ? void 0 : i.uuid) || "",
      name: (i == null ? void 0 : i.name) || "",
      script_entity_id: (i == null ? void 0 : i.script_entity_id) || "",
      conditions: (i == null ? void 0 : i.conditions) || [
        {
          parent_type: ""
        }
      ]
    }), x({
      conditions: []
    });
  }, [i, r]);
  const k = (P) => {
    w(P);
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
  }, b = (P, F) => {
    const $ = [...g.conditions];
    $[P] = F, k({
      ...g,
      conditions: $
    });
  }, j = (P) => {
    const F = g.conditions.filter(
      ($, A) => A !== P
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
    const P = {
      conditions: []
    };
    return g.name.trim() || (P.name = "Обязательное поле"), g.script_entity_id || (P.script_entity_id = "Обязательное поле"), g.conditions.forEach(
      (F, $) => {
        const A = {};
        F.parent_type.trim() || (A.parent_type = "Обязательное поле"), F.children_type !== void 0 && !F.children_type.trim() && (A.children_type = "Обязательное поле"), F.children_direct_type !== void 0 && !F.children_direct_type.trim() && (A.children_direct_type = "Обязательное поле"), P.conditions[$] = A;
      }
    ), x(P), !P.name && !P.script_entity_id && P.conditions.every(
      (F) => Object.keys(F).length === 0
    );
  };
  return /* @__PURE__ */ o.jsx(
    Ft,
    {
      feedback: a,
      open: r,
      onClose: h,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ o.jsx(
        re,
        {
          disabled: f,
          onClick: () => {
            N() && (p == null || p(g));
          },
          children: _("Сохранить")
        }
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: Fr.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Fr.section, children: [
          /* @__PURE__ */ o.jsx(
            Ve,
            {
              label: _("Название"),
              value: g.name,
              error: y.name,
              onChange: (P) => k({
                ...g,
                name: P.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Wr,
            {
              label: _("Скрипт"),
              error: y.script_entity_id,
              options: c.map(
                (P) => ({
                  label: P.name,
                  value: P.entity_id
                })
              ),
              value: g.script_entity_id,
              onSelect: (P) => k({
                ...g,
                script_entity_id: P
              })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: Fr.section, children: [
          /* @__PURE__ */ o.jsx("h3", { className: Fr.sectionTitle, children: _("Условия") }),
          /* @__PURE__ */ o.jsx("div", { className: Fr.conditions, children: g.conditions.map(
            (P, F, $) => /* @__PURE__ */ o.jsx(
              q0,
              {
                index: F,
                condition: P,
                defaultOpen: !d,
                errors: y.conditions[F],
                onChange: (A) => b(
                  F,
                  A
                ),
                onDelete: () => j(F),
                totalCount: $.length
              },
              F
            )
          ) }),
          /* @__PURE__ */ o.jsx(
            re,
            {
              type: "button",
              className: Fr.addCondition,
              onClick: C,
              children: _("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, ix = "_container_9wouv_1", ax = "_visible_9wouv_20", wf = {
  container: ix,
  visible: ax
}, pr = ({
  children: r,
  offset: a = 10,
  startVisible: i = !1
}) => {
  const c = v.useRef(null), [d, f] = v.useState(i);
  return v.useEffect(() => {
    var x;
    const p = (x = c.current) == null ? void 0 : x.getRootNode(), h = p instanceof ShadowRoot ? p.host : null, g = () => window.scrollY + ((h == null ? void 0 : h.scrollTop) ?? 0);
    let w = g();
    const y = () => {
      const k = g();
      k !== w && (k > w && k > a ? f(!0) : f(!1), w = k);
    };
    return h == null || h.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("scroll", y, {
      passive: !0
    }), () => {
      h == null || h.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
  }, [a]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: c,
      className: `${wf.container} ${d ? wf.visible : ""}`,
      children: r
    }
  );
}, lx = () => {
  const r = Ht(), a = Vr(), i = a ? "Действия удалённых команд" : "Запуск скриптов", c = Ge(), [d, f] = v.useState(), [p, h] = v.useState(!1), [g, w] = v.useState(!1), [y, x] = v.useState({ uuid: "", title: "" }), [k, C] = v.useState(!1), {
    query: b,
    setQuery: j,
    error: N,
    retry: P,
    loading: F,
    scripts: $,
    getAvailableScripts: A,
    loadScripts: H,
    saveScript: O,
    updateScript: G,
    getScriptAction: U,
    deleteScriptAction: X
  } = y0(), xe = Qr($, F || !!N, H, c), fe = { error: r.error ?? N, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), P();
  }) : P }, me = () => {
    r.clearError(), f(void 0), C(!1), h(!0);
  }, ve = (de) => {
    w(!0), x(de);
  }, we = (de) => r.run(async () => {
    C(!0);
    const M = await U(
      de
    );
    f(M), h(!0);
  }, { retryable: !0 }), W = async (de) => {
    await r.run(async () => {
      if (k) {
        if (!de.uuid) return;
        const { uuid: M, ...K } = de;
        await G(de.uuid, K);
      } else
        await O(de);
      h(!1);
    }, { exclusive: !0 });
  }, le = (de) => r.run(async () => {
    de && await X(de);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      ht,
      {
        search: { value: b, onChange: j },
        title: i
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !p && /* @__PURE__ */ o.jsx(Ke, { ...fe }),
      /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _(i) }),
          /* @__PURE__ */ o.jsx("p", { className: J.description, children: _(a ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: c ? /* @__PURE__ */ o.jsx(pr, { children: /* @__PURE__ */ o.jsx(
          re,
          {
            variant: "primary",
            onClick: me,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
          re,
          {
            variant: "primary",
            onClick: me,
            children: _("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ o.jsx(qr, { value: b, onChange: j })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Gt, { loading: F, itemCount: ($ == null ? void 0 : $.script_actions.length) ?? 0, append: c, children: $ == null ? void 0 : $.script_actions.map((de) => /* @__PURE__ */ o.jsx(
          Wn,
          {
            title: de.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => ve(de)
          },
          de.uuid
        )) }),
        !F && !N && b.trim() && !($ != null && $.script_actions.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        c ? /* @__PURE__ */ o.jsx("div", { ref: xe, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Kr,
        {
          page: ($ == null ? void 0 : $.page) || 1,
          totalPages: ($ == null ? void 0 : $.total_pages) || 1,
          onChange: H
        }
      ),
      /* @__PURE__ */ o.jsx(
        T0,
        {
          uuid: y.uuid,
          open: g,
          title: y.title,
          onClose: () => w(!1),
          onEdit: we,
          onDelete: le
        }
      ),
      /* @__PURE__ */ o.jsx(
        ox,
        {
          feedback: fe,
          open: p,
          initialData: d,
          isEdit: k,
          availableScripts: A(),
          loading: F,
          onCancel: () => h(!1),
          onSave: async (de) => {
            await W(de);
          }
        }
      )
    ] })
  ] });
}, wp = (r) => ({
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
function kp(r) {
  const a = ot(), { query: i, setQuery: c, page: d, loading: f, loadPage: p, updateItems: h, error: g, retry: w } = xp(r);
  return { query: i, setQuery: c, error: g, retry: w, loading: f, commands: d, loadCommands: p, saveCommand: (j, N) => a.saveData(N, j), updateCommand: async (j, N) => {
    if (!N.uuid) return;
    const { uuid: P, ...F } = N, $ = await a.updateRecord(P, j, F);
    return await p(), $;
  }, deleteCommand: (j, N) => a.deleteRecord(N, j), setCommandStatus: async (j, N, P) => {
    const F = await a.updateRecordStatus(j, N, P);
    return h(($) => $.map((A) => A.uuid === N ? { ...A, status: P } : A)), F;
  }, getCommandDetails: (j, N) => a.getRecord(N, j) };
}
const ux = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function ki(r, a) {
  const i = ux[r], { query: c, setQuery: d, commands: f, loading: p, loadCommands: h, getCommandDetails: g, saveCommand: w, updateCommand: y, deleteCommand: x, setCommandStatus: k, error: C, retry: b } = kp(i.list), j = Ht(), [N, P] = v.useState(!1), [F, $] = v.useState(!1), [A, H] = v.useState(a), [O, G] = v.useState(null), U = () => {
    j.clearError(), $(!1), H(a()), P(!0);
  }, X = (we) => j.run(async () => {
    const W = await g(i.detail, we);
    $(!0);
    const le = { ...W.data, status: W.data.status ?? !1 };
    for (const de of ["componentDialog", "subComponentDialog"]) {
      const M = le[de];
      M && (M.nextAction = (M.nextAction ?? []).filter(
        (K) => !K.actionTypeComponent || ["children", "custom"].includes(K.actionTypeComponent)
      ));
    }
    H(le), P(!0);
  }, { retryable: !0 }), xe = (we, W) => j.run(async () => {
    i.status && await k(i.status, we, W);
  }, { exclusive: !0 }), fe = (we) => j.run(async () => {
    await x(i.remove, we), await h();
  }, { exclusive: !0 }), me = () => j.run(async () => {
    await w(i.create, A), P(!1), await h();
  }, { exclusive: !0 }), ve = () => j.run(async () => {
    await y(i.update, A), P(!1);
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
    loadCommands: h,
    modalOpen: N,
    setModalOpen: P,
    isEdit: F,
    formData: A,
    setFormData: H,
    actionsCommand: O,
    setActionsCommand: G,
    openCreateModal: U,
    openEditModal: X,
    handleToggleStatus: xe,
    handleDelete: fe,
    handleCreate: me,
    handleUpdate: ve
  };
}
const cx = "_field_1iloj_1", dx = "_label_1iloj_8", fx = "_select_1iloj_14", Nl = {
  field: cx,
  label: dx,
  select: fx
}, _n = ({
  label: r,
  hint: a,
  options: i,
  className: c = "",
  id: d,
  value: f,
  ...p
}) => {
  const h = v.useId(), g = d ?? h, w = f == null ? "" : String(f), y = !w || i.some((x) => x.value === w);
  return /* @__PURE__ */ o.jsxs("div", { className: Nl.field, children: [
    r && /* @__PURE__ */ o.jsx(tu, { label: r, htmlFor: g, className: Nl.label, hint: a }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        id: g,
        ...p,
        value: w,
        className: `${Nl.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ o.jsx("option", { value: w, children: w }),
          i.map((x) => /* @__PURE__ */ o.jsx("option", { value: x.value, disabled: x.disabled, children: _(x.label) }, x.value))
        ]
      }
    )
  ] });
};
function Il({ kind: r, value: a, title: i, onSelect: c }) {
  const d = ot(), [f, p] = v.useState([]), [h, g] = v.useState(!0), [w, y] = v.useState(!1), [x, k] = v.useState(null), [C, b] = v.useState(0), j = v.useRef(null), N = v.useRef(0);
  v.useEffect(() => () => {
    N.current += 1;
  }, []), v.useEffect(() => {
    let A = !1;
    g(!0), k(null);
    const H = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(H.map((O) => d.getAllRecords(O))).then((O) => {
      A || p([...new Map(O.flat().map((G) => [G.uuid, G])).values()]);
    }).catch((O) => {
      A || (k(Ct(O)), j.current = () => b((G) => G + 1));
    }).finally(() => {
      A || g(!1);
    }), () => {
      A = !0;
    };
  }, [d, r, C]), v.useEffect(() => {
    a && i && p((A) => A.map((H) => H.uuid === a ? { ...H, title: i } : H));
  }, [a, i]);
  const P = async (A) => {
    var G;
    if (!A) {
      N.current += 1, k(null), c({ uuid: "", title: "" });
      return;
    }
    const H = f.find((U) => U.uuid === A);
    if (!H) return;
    const O = ++N.current;
    if (k(null), r !== "direct") {
      c(H);
      return;
    }
    y(!0);
    try {
      const U = await d.getRecord(A, "get_assistant_sub_direct_control");
      O === N.current && c({ ...H, mappingType: ((G = U.data.directControl) == null ? void 0 : G.mappingType) ?? "" });
    } catch (U) {
      O === N.current && (k(Ct(U)), j.current = () => {
        P(A);
      });
    } finally {
      O === N.current && y(!1);
    }
  }, F = f.map((A) => ({ value: A.uuid, label: A.title || _("Без названия") }));
  a && !f.some((A) => A.uuid === a) && F.unshift({ value: a, label: i || _("Выбранная команда недоступна") });
  const $ = _(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(
      _n,
      {
        label: $,
        "aria-label": $,
        value: a,
        disabled: h || w,
        options: [{ value: "", label: _(h ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...F],
        onChange: (A) => {
          P(A.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(Ke, { error: x, busy: h || w, retry: () => {
      var A;
      return (A = j.current) == null ? void 0 : A.call(j);
    } })
  ] });
}
const px = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], hx = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], mx = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], vx = "_form_1a1tt_1", yx = "_field_1a1tt_7", gx = "_arrayItem_1a1tt_29", _x = "_logicTabs_1a1tt_46", xx = "_sectionTitle_1a1tt_85", wx = "_footerActions_1a1tt_92", kx = "_phraseMode_1a1tt_106", Sx = "_directTabLabel_1a1tt_122", Cx = "_linkActions_1a1tt_126", tt = {
  form: vx,
  field: yx,
  arrayItem: gx,
  logicTabs: _x,
  sectionTitle: xx,
  footerActions: wx,
  phraseMode: kx,
  directTabLabel: Sx,
  linkActions: Cx
}, kf = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Sp = ({
  open: r,
  feedback: a,
  onClose: i,
  title: c,
  formData: d,
  setFormData: f,
  onSave: p,
  onBack: h
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
  }, x = v.useMemo(() => d.directControl ?? kf(), [d]), k = (C) => {
    f((b) => ({
      ...b,
      directControl: {
        ...b.directControl ?? kf(),
        ...C
      }
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Ft,
    {
      feedback: a,
      open: r,
      onClose: i,
      onBack: h,
      title: c,
      footer: /* @__PURE__ */ o.jsx("div", { className: tt.form, children: /* @__PURE__ */ o.jsx(re, { onClick: y, children: _("Сохранить") }) }),
      children: /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
        /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: _("Название команды"),
            hint: wi(d.uuid),
            required: !0,
            error: g,
            value: d.title,
            onChange: (C) => f((b) => ({
              ...b,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: _("mappingType"),
            value: x.mappingType,
            onChange: (C) => k({
              mappingType: C.target.value
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          _n,
          {
            label: _("valueType"),
            value: x.valueType,
            options: hx,
            onChange: (C) => k({
              valueType: C.target.value
            })
          }
        ),
        x.valueType == "command" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: tt.field, children: /* @__PURE__ */ o.jsx(
            Bn,
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
          /* @__PURE__ */ o.jsx(
            Il,
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
        ] }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] })
    }
  );
};
function jx({ target: r, onBack: a, onSaved: i }) {
  const c = ot(), d = Ht(), [f, p] = v.useState({ title: "" }), [h, g] = v.useState();
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
    if (!h) return;
    const y = h === "direct" ? "update_assistant_sub_direct_control" : h === "main" ? "update_assistant_command" : "update_assistant_sub_command", { uuid: x, ...k } = f;
    await c.updateRecord(r.uuid, y, k), i(f), a();
  }, { exclusive: !0 });
  return h ? h === "direct" ? /* @__PURE__ */ o.jsx(
    Sp,
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
  ) : /* @__PURE__ */ o.jsx(
    ru,
    {
      open: !0,
      isEdit: !0,
      feedback: d,
      formData: f,
      setFormData: p,
      componentKey: h === "main" ? "componentDialog" : "subComponentDialog",
      onClose: a,
      onBack: a,
      onSave: w,
      onUpdate: w
    }
  ) : /* @__PURE__ */ o.jsx(Ft, { open: !0, onClose: a, onBack: a, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка...") }) });
}
const Ex = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function Nx({ response: r, onChange: a }) {
  const i = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(i) ? "default" : i === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      _n,
      {
        label: _("Типы ответов"),
        "aria-label": _("Типы ответов"),
        value: c,
        options: Ex,
        onChange: (d) => a({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ o.jsx(
      Ve,
      {
        label: _("Тип результата скрипта"),
        placeholder: _("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => a({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ o.jsx(
      Bn,
      {
        label: _("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => a({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const Tx = "_switchRow_1hmmz_1", bx = "_input_1hmmz_11", Ax = "_track_1hmmz_22", Rx = "_thumb_1hmmz_33", Px = "_label_1hmmz_62", Hs = {
  switchRow: Tx,
  input: bx,
  track: Ax,
  thumb: Rx,
  label: Px
}, cr = ({ label: r, className: a = "", ...i }) => /* @__PURE__ */ o.jsxs("label", { className: `${Hs.switchRow} ${a}`, children: [
  /* @__PURE__ */ o.jsx("input", { ...i, type: "checkbox", className: Hs.input }),
  /* @__PURE__ */ o.jsx("span", { className: Hs.track, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: Hs.thumb }) }),
  /* @__PURE__ */ o.jsx("span", { className: Hs.label, children: _(r) })
] }), $x = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function Mx({ component: r, onOpenCommand: a, updateComponentArray: i, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [p, h] = v.useState("direct"), g = $x.filter((y) => y.key !== "direct" || !r.forwardText), w = r.forwardText && p === "direct" ? "continuations" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ o.jsx("div", { className: tt.logicTabs, role: "tablist", "aria-label": _("Настройки логики"), children: g.map((y) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: w === y.key ? 0 : -1,
        onKeyDown: (x) => {
          var b, j;
          const k = g.findIndex((N) => N.key === y.key), C = x.key === "ArrowRight" ? (k + 1) % g.length : x.key === "ArrowLeft" ? (k + g.length - 1) % g.length : x.key === "Home" ? 0 : x.key === "End" ? g.length - 1 : -1;
          C < 0 || (x.preventDefault(), h(g[C].key), (j = (b = x.currentTarget.parentElement) == null ? void 0 : b.querySelectorAll('[role="tab"]')[C]) == null || j.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": w === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => h(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ o.jsx("span", { className: tt.directTabLabel, children: _(y.label).replace(" ", `
`) }) : _(y.label)
      },
      y.key
    )) }),
    w === "continuations" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, x) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          _n,
          {
            label: _("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: mx,
            onChange: (k) => i("nextAction", x, {
              actionTypeComponent: k.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: _("Тип результата скрипта"),
            placeholder: _("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (k) => i("nextAction", x, {
              actionType: k.target.value
            })
          }
        ) : /* @__PURE__ */ o.jsx(o.Fragment, {}),
        /* @__PURE__ */ o.jsx(
          Il,
          {
            kind: "continuation",
            value: y.uuid,
            title: y.title,
            onSelect: (k) => i("nextAction", x, {
              uuid: k.uuid,
              title: k.title ?? "",
              actionTypeComponent: y.actionTypeComponent || "children"
            })
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: tt.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(re, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "continuation" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            re,
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
        re,
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
          Il,
          {
            kind: "direct",
            value: y.uuid,
            title: y.title,
            onSelect: (k) => i("nextDirectControl", x, {
              uuid: k.uuid,
              mappingType: k.mappingType ?? "",
              title: k.title ?? ""
            })
          }
        ),
        y.uuid && /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: _("mappingType"),
            hint: _("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: tt.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(re, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "direct" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            re,
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
        re,
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
const Sf = () => ({
  endStatus: !0,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }]
}), ru = ({
  open: r,
  feedback: a,
  isEdit: i,
  formData: c,
  componentKey: d,
  setFormData: f,
  onClose: p,
  onBack: h,
  onSave: g,
  onUpdate: w
}) => {
  const x = ot().getScripts(), k = v.useMemo(() => c[d] ?? Sf(), [c, d]);
  v.useEffect(() => {
    r && f((U) => {
      var xe;
      const X = U[d];
      return (xe = X == null ? void 0 : X.nextAction) != null && xe.some((fe) => !fe.actionTypeComponent) ? { ...U, [d]: {
        ...X,
        nextAction: X.nextAction.map((fe) => ({ ...fe, actionTypeComponent: fe.actionTypeComponent || "children" }))
      } } : U;
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
  const [P, F] = v.useState({}), $ = (U) => {
    f((X) => ({
      ...X,
      [d]: {
        ...X[d] ?? Sf(),
        ...U
      }
    }));
  }, A = (U, X, xe) => {
    const fe = [...k[U] ?? []];
    fe[X] = { ...fe[X], ...xe }, $({
      [U]: fe
    });
  }, H = (U, X) => {
    $({
      [U]: [...k[U] ?? [], X]
    });
  }, O = (U, X) => {
    $({
      [U]: (k[U] ?? []).filter(
        (xe, fe) => fe !== X
      )
    });
  }, G = () => {
    const U = {};
    return c.title.trim() || (U.title = "Обязательное поле"), F(U), Object.keys(U).length === 0;
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Ft,
      {
        suspended: !!C,
        feedback: a,
        open: r,
        onClose: p,
        onBack: h,
        title: j ? "Настроить логику" : i ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ o.jsx("div", { className: tt.form, children: j ? /* @__PURE__ */ o.jsx(re, { variant: "secondary", onClick: () => N(!1), children: _("Назад") }) : /* @__PURE__ */ o.jsxs("div", { className: tt.footerActions, children: [
          /* @__PURE__ */ o.jsx(re, { variant: "secondary", onClick: () => N(!0), children: _("Настроить логику") }),
          /* @__PURE__ */ o.jsx(re, { onClick: () => {
            G() && (i ? w() : g());
          }, children: _(i ? "Обновить" : "Сохранить") })
        ] }) }),
        children: j ? /* @__PURE__ */ o.jsx(
          Mx,
          {
            onOpenCommand: (U, X) => b({ ...U, index: X }),
            component: k,
            updateComponentArray: A,
            addComponentArrayItem: H,
            removeComponentArrayItem: O
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
          /* @__PURE__ */ o.jsx(
            Ve,
            {
              label: _("Название команды"),
              hint: wi(c.uuid),
              value: c.title,
              error: P.title,
              onChange: (U) => f({
                ...c,
                title: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            _n,
            {
              label: _("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(k.answerType) ? "script_response" : k.answerType,
              options: px,
              onChange: (U) => $({
                answerType: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            _n,
            {
              label: _("Скрипт Home Assistant"),
              value: k.script_entity_id ?? "__legacy__",
              options: [
                ...k.script_entity_id === void 0 ? [{ label: _("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: _("Не запускать скрипт"), value: "" },
                ...x.map((U) => ({ label: U.name, value: U.entity_id }))
              ],
              onChange: (U) => $({ script_entity_id: U.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ o.jsxs("div", { className: tt.phraseMode, children: [
            /* @__PURE__ */ o.jsx(
              cr,
              {
                label: _("Отправить команду как есть"),
                checked: !!k.forwardText,
                onChange: (U) => $({ forwardText: U.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(Br, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && k.forwardText) && /* @__PURE__ */ o.jsx("div", { className: tt.field, children: /* @__PURE__ */ o.jsx(
            Bn,
            {
              label: _("Фразы для запуска"),
              value: (k.voiceCommands == null ? [] : typeof k.voiceCommands != "object" ? k == null ? void 0 : k.voiceCommands.split(";") : k == null ? void 0 : k.voiceCommands).join(`
`),
              onChange: (U) => $({
                voiceCommands: U.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("section", { className: tt.form, "aria-label": _("Ответы"), children: [
            /* @__PURE__ */ o.jsx("h3", { className: tt.sectionTitle, children: _("Ответы") }),
            (k.voiceResponseArray ?? []).map((U, X) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
              /* @__PURE__ */ o.jsx(
                Nx,
                {
                  response: U,
                  onChange: (xe) => A("voiceResponseArray", X, xe)
                }
              ),
              /* @__PURE__ */ o.jsx(
                re,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => O("voiceResponseArray", X),
                  children: _("Удалить")
                }
              )
            ] }, X)),
            /* @__PURE__ */ o.jsx(
              re,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
                onClick: () => H("voiceResponseArray", {
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
    C && /* @__PURE__ */ o.jsx(
      jx,
      {
        target: C,
        onBack: () => b(null),
        onSaved: (U) => {
          var X;
          C.kind === "direct" ? A("nextDirectControl", C.index, { title: U.title, mappingType: ((X = U.directControl) == null ? void 0 : X.mappingType) ?? "" }) : A("nextAction", C.index, { title: U.title });
        }
      },
      `${C.kind}-${C.uuid}`
    )
  ] });
}, Si = ({ command: r, open: a, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(nu, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, Ix = () => wp("componentDialog"), Lx = () => {
  const r = Ge(), {
    query: a,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: k,
    actionsCommand: C,
    setActionsCommand: b,
    openCreateModal: j,
    openEditModal: N,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: $,
    handleUpdate: A
  } = ki("main", Ix), H = Qr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      ht,
      {
        search: { value: a, onChange: i },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ke, { ...c }),
      /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Основные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(pr, { children: /* @__PURE__ */ o.jsx(re, { variant: "primary", onClick: j, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(re, { variant: "primary", onClick: j, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(qr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Gt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((O) => /* @__PURE__ */ o.jsx(
          Wn,
          {
            title: O.title,
            subTitle: O.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(O)
          },
          O.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        r ? /* @__PURE__ */ o.jsx("div", { ref: H, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Kr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (O) => h(O)
        }
      ),
      /* @__PURE__ */ o.jsx(
        ru,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: x,
          componentKey: "componentDialog",
          setFormData: k,
          onClose: () => w(!1),
          onSave: $,
          onUpdate: A
        }
      ),
      /* @__PURE__ */ o.jsx(
        Si,
        {
          open: !!C,
          command: C,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (O) => N(O)
        }
      )
    ] })
  ] });
}, Dx = () => wp("subComponentDialog"), Ox = () => {
  const r = Ge(), {
    query: a,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: k,
    actionsCommand: C,
    setActionsCommand: b,
    openCreateModal: j,
    openEditModal: N,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: $,
    handleUpdate: A
  } = ki("sub", Dx), H = Qr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      ht,
      {
        search: { value: a, onChange: i },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ke, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Второстепенные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(pr, { children: /* @__PURE__ */ o.jsx(re, { variant: "primary", onClick: j, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(re, { variant: "primary", onClick: j, children: _("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ o.jsx(qr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Gt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((O) => /* @__PURE__ */ o.jsx(
          Wn,
          {
            title: O.title,
            subTitle: O.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(O)
          },
          O.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: H, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Kr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (O) => h(O)
        }
      ),
      /* @__PURE__ */ o.jsx(
        ru,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: x,
          componentKey: "subComponentDialog",
          setFormData: k,
          onClose: () => w(!1),
          onSave: $,
          onUpdate: A
        }
      ),
      /* @__PURE__ */ o.jsx(
        Si,
        {
          open: !!C,
          command: C,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (O) => N(O)
        }
      )
    ] })
  ] });
}, zx = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], vi = () => {
  const { pathname: r } = jt(), a = Wl();
  return /* @__PURE__ */ o.jsx("div", { className: J.innerTabs, role: "group", "aria-label": _("Раздел прямых команд"), children: zx.map((i) => /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === i.path,
      className: `${J.innerTab} ${r === i.path ? J.activeInnerTab : ""}`,
      onClick: () => a(i.path),
      children: _(i.label)
    },
    i.path
  )) });
}, Hx = () => ({
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
}), Fx = () => {
  const r = Ge(), {
    query: a,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: k,
    actionsCommand: C,
    setActionsCommand: b,
    openCreateModal: j,
    openEditModal: N,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: $,
    handleUpdate: A
  } = ki("direct", Hx), H = Qr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      ht,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(vi, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ke, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Прямые команды") }),
          !r && /* @__PURE__ */ o.jsx(vi, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(pr, { children: /* @__PURE__ */ o.jsx(re, { variant: "primary", onClick: j, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(re, { variant: "primary", onClick: j, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(qr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Gt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((O) => /* @__PURE__ */ o.jsx(
          Wn,
          {
            title: O.title,
            subTitle: O.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(O)
          },
          O.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: H, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Kr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (O) => h(O)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Sp,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: _(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: x,
          setFormData: k,
          onSave: y ? A : $
        }
      ),
      /* @__PURE__ */ o.jsx(
        Si,
        {
          open: !!C,
          command: C,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (O) => N(O)
        }
      )
    ] })
  ] });
}, Wx = "_form_mn1ml_1", Bx = "_arrayItem_mn1ml_8", Ux = "_sectionTitle_mn1ml_25", li = {
  form: Wx,
  arrayItem: Bx,
  sectionTitle: Ux
}, Vx = ({
  open: r,
  feedback: a,
  onClose: i,
  title: c,
  formData: d,
  setFormData: f,
  onSave: p
}) => {
  const [h, g] = v.useState("");
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
    const P = [...y];
    P[j] = {
      ...P[j],
      ...N
    }, x(P);
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
      y.filter((N, P) => P !== j)
    );
  };
  return /* @__PURE__ */ o.jsx(
    Ft,
    {
      feedback: a,
      open: r,
      onClose: i,
      title: c,
      footer: /* @__PURE__ */ o.jsx(re, { onClick: w, children: _("Сохранить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: li.form, children: [
        /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: _("Название команды"),
            hint: wi(d.uuid),
            required: !0,
            error: h,
            value: d.title,
            onChange: (j) => f((N) => ({
              ...N,
              title: j.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsxs("section", { className: li.form, "aria-label": _("Варианты вложенных команд"), children: [
          /* @__PURE__ */ o.jsx("h3", { className: li.sectionTitle, children: _("Варианты вложенных команд") }),
          y.map((j, N) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: li.arrayItem,
              children: [
                /* @__PURE__ */ o.jsx(
                  Ve,
                  {
                    label: _("Код значения"),
                    value: j.subMappingType ?? "",
                    onChange: (P) => k(N, {
                      subMappingType: P.target.value
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  Bn,
                  {
                    label: _("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(j.subVoiceCommands) ? j.subVoiceCommands : []).join(`
`),
                    onChange: (P) => k(N, {
                      subVoiceCommands: P.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  re,
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
            re,
            {
              type: "button",
              variant: "secondary",
              fullWidth: !0,
              leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
              onClick: C,
              children: _("Добавить ещё")
            }
          )
        ] })
      ] })
    }
  );
}, qx = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), Qx = () => {
  const r = Ge(), {
    query: a,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: k,
    actionsCommand: C,
    setActionsCommand: b,
    openCreateModal: j,
    openEditModal: N,
    handleDelete: P,
    handleCreate: F,
    handleUpdate: $
  } = ki("template", qx), A = Qr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      ht,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(vi, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ke, { ...c }),
      !r && /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Вложенные команды") }),
          !r && /* @__PURE__ */ o.jsx(vi, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(pr, { children: /* @__PURE__ */ o.jsx(re, { variant: "primary", onClick: j, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(re, { variant: "primary", onClick: j, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(qr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Gt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((H) => /* @__PURE__ */ o.jsx(
          Wn,
          {
            title: H.title,
            onClick: () => b(H)
          },
          H.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: A,
          className: J.listSentinel
        }
      ) : /* @__PURE__ */ o.jsx(
        Kr,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (H) => h(
            H
          )
        }
      ),
      /* @__PURE__ */ o.jsx(
        Vx,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: y ? "Редактировать" : "Создать",
          formData: x,
          setFormData: k,
          onSave: y ? $ : F
        }
      ),
      /* @__PURE__ */ o.jsx(
        Si,
        {
          open: !!C,
          command: C,
          onClose: () => b(null),
          onDelete: P,
          onEdit: (H) => N(H)
        }
      )
    ] })
  ] });
}, Cf = {
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function Cp(r) {
  return r.actionType && Cf[r.actionType] ? _(Cf[r.actionType]) : r.title;
}
const Kx = "_form_1i0x1_1", Yx = {
  form: Kx
}, Jx = ({
  open: r,
  feedback: a,
  isEdit: i,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: p
}) => {
  var x, k;
  const h = c, g = ot().getScripts(), w = h.actionType === "default_main" && !!h.forwardCommandToServer, y = (C) => {
    d((b) => ({
      ...b,
      ...C
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Ft,
    {
      feedback: a,
      open: r,
      onClose: f,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ o.jsx(re, { onClick: p, children: _("Обновить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Yx.form, children: [
        /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: _("Название команды"),
            hint: wi(c.uuid),
            value: Cp(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ o.jsx(
          cr,
          {
            label: _("Завершать диалог"),
            checked: !!h.endStatus,
            onChange: (C) => y({
              endStatus: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && /* @__PURE__ */ o.jsx(
          cr,
          {
            label: _("Передать команду серверу"),
            checked: !!h.forwardCommandToServer,
            onChange: (C) => y({
              forwardCommandToServer: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && h.forwardCommandToServer && /* @__PURE__ */ o.jsx(
          _n,
          {
            label: _("Скрипт Home Assistant"),
            value: h.script_entity_id ?? "",
            options: [
              { value: "", label: _("Использовать существующие сценарии") },
              ...g.map((C) => ({ value: C.entity_id, label: C.name })),
              ...h.script_entity_id && !g.some((C) => C.entity_id === h.script_entity_id) ? [{ value: h.script_entity_id, label: h.script_entity_id }] : []
            ],
            onChange: (C) => y({ script_entity_id: C.target.value })
          }
        ),
        w ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            Ve,
            {
              label: _("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: _("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ o.jsx(
            Bn,
            {
              rows: 8,
              label: _("Текст озвучки"),
              hint: _("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: _("Например: ${reply}"),
              value: ((k = (x = h.voiceResponseArray) == null ? void 0 : x.find((C) => C.actionType === "success")) == null ? void 0 : k.voiceResponse) ?? "",
              onChange: (C) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: C.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(
          Bn,
          {
            rows: 8,
            "aria-label": _("Ответное сообщение"),
            label: _("Ответное сообщение"),
            value: h.voiceResponse,
            onChange: (C) => y({
              voiceResponse: C.target.value
            })
          }
        )
      ] })
    }
  );
}, Gx = () => {
  const r = Ht(), a = Ge(), [i, c] = v.useState(!1), [d, f] = v.useState(!1), [p, h] = v.useState({ title: "" }), {
    error: g,
    retry: w,
    loading: y,
    loadCommands: x,
    getCommandDetails: k,
    updateCommand: C,
    commands: b
  } = kp("get_assistant_settings_short"), j = Qr(b, y || !!g, x, a), N = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), w();
  }) : w }, P = ($) => r.run(async () => {
    f(!0);
    const A = await k("get_assistant_setting", $.uuid);
    h(A.data), c(!0);
  }, { retryable: !0 }), F = () => r.run(async () => {
    await C("update_assistant_setting", p), c(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      ht,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !i && /* @__PURE__ */ o.jsx(Ke, { ...N }),
      a ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${J.header} ${J.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: J.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: J.heading, children: !a && /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ o.jsx("div", { className: J.list, children: /* @__PURE__ */ o.jsx(Gt, { loading: y, itemCount: (b == null ? void 0 : b.data.length) ?? 0, append: a, children: b == null ? void 0 : b.data.map(($) => /* @__PURE__ */ o.jsx(
        Wn,
        {
          title: Cp($),
          onClick: () => P($)
        },
        $.uuid
      )) }) }),
      a ? /* @__PURE__ */ o.jsx("div", { ref: j, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Kr,
        {
          page: (b == null ? void 0 : b.page) || 1,
          totalPages: (b == null ? void 0 : b.total_pages) || 1,
          onChange: ($) => x($)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Jx,
        {
          feedback: N,
          open: i,
          isEdit: d,
          formData: p,
          setFormData: h,
          onClose: () => c(!1),
          onUpdate: F
        }
      )
    ] })
  ] });
}, Xx = (r, a) => {
  const i = new Blob([JSON.stringify(a, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(i), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class Ot extends Error {
}
const jp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, on = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function Zx(r, a) {
  if (a === "settings") {
    const d = await r.getData("get_settings"), f = on(d) && on(d.result) ? d.result : d;
    if (!on(f)) throw new Ot("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "call_music", "remout", "timer_alarm"].filter((h) => h in f).map((h) => [h, f[h]]));
  }
  if (a === "scenarios") return r.getData("export_command_bundle");
  const i = jp[a], c = await r.getAllRecords(i.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, i.detail);
    return on(f) ? f.data : void 0;
  }));
}
function ew(r, a) {
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw new Ot("Некорректный JSON-файл.");
  }
  if (a === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", call_music: "string", remout: "object", timer_alarm: "object" };
    if (!on(i) || !Object.keys(i).length || Object.keys(i).some((f) => !d[f] || typeof i[f] !== d[f])) throw new Ot("Файл не содержит корректные настройки.");
    if (i.theme !== void 0 && (typeof i.theme != "string" || !["dark", "light"].includes(i.theme))) throw new Ot("Файл не содержит корректные настройки.");
    for (const [f, p] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in i && (!on(i[f]) || Object.entries(i[f]).some(([h, g]) => !p.includes(h) || typeof g != "string"))) throw new Ot("Файл не содержит корректные настройки.");
    return i;
  }
  if (a === "scenarios" && on(i)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (i.format !== "ha-dialog-ui-commands" || i.version !== 1 || Object.keys(i).length !== 7 || d.some((f) => !Array.isArray(i[f]))) throw new Ot("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const p = /* @__PURE__ */ new Set(), h = i[f];
      if (!Array.isArray(h)) throw new Ot("Ожидается массив записей JSON.");
      for (const g of h) {
        if (!on(g) || typeof g.uuid != "string" || !g.uuid.trim() || p.has(g.uuid) || typeof g.title != "string") throw new Ot("Некорректные или повторяющиеся ID записей.");
        p.add(g.uuid);
      }
    }
    return i;
  }
  if (!Array.isArray(i)) throw new Ot("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of i) {
    if (!on(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new Ot("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(a === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && on(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new Ot("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return i;
}
async function tw(r, a, i) {
  const c = ew(i, a);
  return await r.saveData(c, a === "settings" ? "import_settings" : a === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : jp[a].import), c;
}
const nw = "_grid_fc8hl_1", rw = "_card_fc8hl_8", sw = "_actions_fc8hl_23", ow = "_description_fc8hl_29", iw = "_page_fc8hl_36", Fs = {
  grid: nw,
  card: rw,
  actions: sw,
  description: ow,
  page: iw
}, aw = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], lw = () => {
  const r = ot(), a = Vr(), i = Ge(), [c, d] = v.useState(!1), [f, p] = v.useState(""), [h, g] = v.useState(!1), w = v.useRef(null), y = v.useRef(null), x = v.useRef("scripts"), k = async (C, b = !1) => {
    w.current = b ? C : null, d(!0), p(""), g(!1);
    try {
      await C();
    } catch (j) {
      g(!0), p(j instanceof Ot ? j.message : Ct(j));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ht, { title: _("Импорт и экспорт") }),
    /* @__PURE__ */ o.jsxs("div", { className: `${J.page} ${Fs.page}`, children: [
      /* @__PURE__ */ o.jsx(pt, {}),
      !i && /* @__PURE__ */ o.jsx("h1", { children: _("Импорт и экспорт") }),
      /* @__PURE__ */ o.jsx("div", { className: Fs.grid, children: aw.filter((C) => C.kind === "scripts" ? a === !0 : C.kind !== "scenarios" || a === !1).map((C) => /* @__PURE__ */ o.jsxs("section", { className: Fs.card, children: [
        /* @__PURE__ */ o.jsx("h2", { children: _(C.title) }),
        /* @__PURE__ */ o.jsx("p", { className: Fs.description, children: _(C.description) }),
        /* @__PURE__ */ o.jsxs("div", { className: Fs.actions, children: [
          /* @__PURE__ */ o.jsx(re, { disabled: c, onClick: () => k(async () => {
            Xx(`ha-dialog-ui-${C.kind}.json`, await Zx(r, C.kind));
          }, !0), children: _(C.download) }),
          /* @__PURE__ */ o.jsx(re, { variant: "secondary", disabled: c, onClick: () => {
            var b;
            x.current = C.kind, (b = y.current) == null || b.click();
          }, children: _(C.upload) })
        ] })
      ] }, C.kind)) }),
      /* @__PURE__ */ o.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (C) => {
        var N;
        const b = (N = C.target.files) == null ? void 0 : N[0], j = x.current;
        C.target.value = "", b && k(async () => {
          const P = await tw(r, j, await b.text());
          j === "settings" && P !== null && typeof P == "object" && !Array.isArray(P) && (typeof P.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: P.theme })), typeof P.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(hi, { detail: P.active_remout }))), p("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Обработка файла...") }),
      /* @__PURE__ */ o.jsx(Ke, { error: h ? f : null, busy: c, retry: w.current ? () => {
        w.current && k(w.current, !0);
      } : void 0 }),
      !h && f && /* @__PURE__ */ o.jsx("p", { role: "status", children: _(f) })
    ] })
  ] });
};
function uw() {
  const r = ot(), [a, i] = v.useState(null), [c, d] = v.useState([]), f = Ht(), p = Ht(), h = v.useCallback(() => f.run(async () => {
    i(await r.getSettings());
  }, { retryable: !0 }), [r, f.run]), g = v.useCallback(() => p.run(async () => {
    d(await r.getLocalMusicOptions());
  }, { retryable: !0 }), [r, p.run]);
  v.useEffect(() => {
    h();
  }, [h]), v.useEffect(() => {
    g();
  }, [g]);
  const w = async (y) => {
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(Pl, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(hi, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: a, musicOptions: c, saveSettings: w, settingsFeedback: f, musicFeedback: p };
}
const cw = "_form_1ijxr_1", dw = "_field_1ijxr_7", fw = "_input_1ijxr_13", pw = "_label_1ijxr_29", hw = "_help_1ijxr_35", mw = "_toggleHelp_1ijxr_40", ft = {
  form: cw,
  field: dw,
  input: fw,
  label: pw,
  help: hw,
  toggleHelp: mw
}, vw = ({ data: r, onChange: a }) => {
  const i = (c, d) => {
    a({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ft.form, children: [
    /* @__PURE__ */ o.jsx(Ve, { label: _("Base URL"), value: r.base_url ?? "", placeholder: _("http://192.168.31.83:9379"), onChange: (c) => i("base_url", c.target.value) }),
    /* @__PURE__ */ o.jsx(Ve, { label: _("Token"), value: r.token ?? "", placeholder: _("Bearer ..."), onChange: (c) => i("token", c.target.value) })
  ] });
}, yw = ({ data: r, musicOptions: a, musicUnavailable: i, onChange: c, callMusic: d, onCallMusicChange: f }) => {
  const p = (g, w) => {
    c({
      ...r,
      [g]: w
    });
  }, h = (g, w, y = "", x = "Стандартная") => {
    const k = a.some((C) => C.value === y);
    return /* @__PURE__ */ o.jsxs("label", { className: ft.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ft.label, children: _(g) }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: ft.input,
          value: y,
          onChange: (C) => w(C.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: _(x) }),
            y && !k && /* @__PURE__ */ o.jsx("option", { value: y, children: y }),
            a.map((C) => /* @__PURE__ */ o.jsx("option", { value: C.value, children: C.label }, C.value))
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ft.form, children: [
    h(
      "Global music timer",
      (g) => p("global_music_timer", g),
      r.global_music_timer
    ),
    h(
      "Global music alarm",
      (g) => p("global_music_alarm", g),
      r.global_music_alarm
    ),
    f && h("Мелодия звонка", f, d, "Стандартная"),
    a.length === 0 && !i && /* @__PURE__ */ o.jsx("span", { className: ft.help, children: _("Музыка на сервере не найдена.") })
  ] });
}, gw = ({ data: r, onChange: a }) => {
  const i = cp(), c = (d, f) => {
    a({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ft.form, children: [
    /* @__PURE__ */ o.jsxs("label", { className: ft.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ft.label, children: _("Язык интерфейса") }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: ft.input,
          value: i,
          onChange: (d) => Kg(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ o.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      Ve,
      {
        label: _("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => c("client_id", d.target.value),
        placeholder: _("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ o.jsxs("label", { className: ft.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ft.label, children: _("Theme") }),
      /* @__PURE__ */ o.jsxs("select", { className: ft.input, value: r.theme ?? "dark", onChange: (d) => c("theme", d.target.value), children: [
        /* @__PURE__ */ o.jsx("option", { value: "dark", children: _("dark") }),
        /* @__PURE__ */ o.jsx("option", { value: "light", children: _("light") })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(cr, { label: _("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, _w = ({ data: r, onChange: a }) => {
  const i = (c, d) => a({ ...r, [c]: d });
  return /* @__PURE__ */ o.jsxs("div", { className: ft.form, children: [
    /* @__PURE__ */ o.jsxs("div", { className: ft.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(cr, { label: _("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => i("active_remout", c.target.checked) }),
      /* @__PURE__ */ o.jsx(Br, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: ft.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(cr, { label: _("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ o.jsx(Br, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ o.jsx(
      Ve,
      {
        label: _("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => i("api_commands_token", c.target.value),
        placeholder: _("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, yi = {
  base_url: "",
  token: ""
}, xw = {
  global_music_timer: "",
  global_music_alarm: ""
}, jf = {
  remout: yi,
  timer_alarm: xw,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, ww = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), kw = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), Sw = (r) => ({
  call_music: (r == null ? void 0 : r.call_music) ?? "",
  remout: ww(r == null ? void 0 : r.remout),
  timer_alarm: kw(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), Ef = (r, a) => {
  const i = {};
  return Object.keys(r).forEach((c) => {
    const d = c;
    r[d] !== a[d] && (i[d] = r[d]);
  }), i;
}, Nf = (r, a) => {
  const i = {}, c = Ef(r.timer_alarm, a.timer_alarm);
  if (Object.keys(c).length > 0 && (i.timer_alarm = c), r.call_music !== a.call_music && (i.call_music = r.call_music), r.theme !== a.theme && (i.theme = r.theme), r.is_admin !== a.is_admin && (i.is_admin = r.is_admin), r.active_remout !== a.active_remout && (i.active_remout = r.active_remout), r.client_id !== a.client_id && (i.client_id = r.client_id), r.api_commands_enabled !== a.api_commands_enabled && (i.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== a.api_commands_token && (i.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = Ef(r.remout ?? yi, a.remout ?? yi);
    Object.keys(d).length > 0 && (i.remout = d);
  }
  return i;
}, Cw = () => {
  const r = Ge(), [a, i] = v.useState(jf), c = Ht(), [d, f] = v.useState(jf), { settings: p, musicOptions: h, saveSettings: g, settingsFeedback: w, musicFeedback: y } = uw();
  v.useEffect(() => {
    if (!p) return;
    const b = Sw(p);
    i(b), f(b), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme }));
  }, [p]);
  const x = async (b) => {
    i((j) => ({ ...j, ...b })), b.theme && b.theme !== a.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme })), await c.run(async () => {
      await g({ theme: b.theme }), f((j) => ({ ...j, theme: b.theme }));
    }, { exclusive: !0 }));
  }, k = () => c.run(async () => {
    await g(Nf(a, d)), f(a);
  }, { exclusive: !0 }), C = !!p && Object.keys(Nf(a, d)).length > 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      ht,
      {
        title: _("Настройки")
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      /* @__PURE__ */ o.jsx(pt, {}),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { children: _("Настройки") }),
      /* @__PURE__ */ o.jsxs("div", { className: J.settingsSections, children: [
        /* @__PURE__ */ o.jsx(Ke, { ...w }),
        /* @__PURE__ */ o.jsx(Ke, { ...y }),
        /* @__PURE__ */ o.jsx(Ke, { ...c }),
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": _("Общие"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Общие") }),
          /* @__PURE__ */ o.jsx(
            gw,
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
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": _("Подключения"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Подключения") }),
          /* @__PURE__ */ o.jsxs("div", { className: J.connectionFields, children: [
            /* @__PURE__ */ o.jsx(_w, { data: a, onChange: x }),
            a.active_remout && /* @__PURE__ */ o.jsx(
              vw,
              {
                data: a.remout ?? yi,
                onChange: (b) => i((j) => ({ ...j, remout: b }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": _("Timer / Alarm"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Timer / Alarm") }),
          /* @__PURE__ */ o.jsx(
            yw,
            {
              data: a.timer_alarm,
              callMusic: a.call_music,
              onCallMusicChange: (b) => i((j) => ({ ...j, call_music: b })),
              musicOptions: h,
              musicUnavailable: y.busy || !!y.error,
              onChange: (b) => i({ ...a, timer_alarm: b })
            }
          )
        ] })
      ] }),
      C && (r ? /* @__PURE__ */ o.jsx("div", { className: J.settingsMobileActions, children: /* @__PURE__ */ o.jsx(
        re,
        {
          variant: "primary",
          disabled: c.busy || w.busy || !p,
          onClick: k,
          children: _("Сохранить")
        }
      ) }) : /* @__PURE__ */ o.jsx("div", { className: J.settingsActions, children: /* @__PURE__ */ o.jsx(re, { disabled: c.busy || w.busy || !p, onClick: k, children: _("Сохранить") }) }))
    ] })
  ] });
}, Ll = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const a = r.split(":").map(Number);
  return a.some((i) => !Number.isFinite(i) || i < 0) ? 0 : a.length === 3 ? a[0] * 3600 + a[1] * 60 + a[2] : a.length === 2 ? a[0] * 60 + a[1] : a.length === 1 ? a[0] : 0;
}, Ep = (r) => typeof r == "string" || typeof r == "number" ? Ll(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Ll(r.count_timer || "") : 0, jw = (r, a = "on", i = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Ll(r);
  if (!r) return 0;
  if (a !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - i) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : Ep(r);
}, Dl = (r) => r !== null && typeof r == "object", ur = (r) => {
  const a = Dl(r) && "result" in r ? r.result : r;
  return Dl(a) && "data" in a ? a.data : a;
}, Tf = (r) => {
  const a = Math.max(1, Number(r) || 1), i = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, bf = (r) => {
  const a = ur(r);
  return Array.isArray(a) ? a : Dl(a) && Array.isArray(a.data) ? a.data : [];
};
function Np() {
  const r = ot(), a = Ht(), [i, c] = v.useState([]), [d, f] = v.useState([]), [p, h] = v.useState([]), [g, w] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), x = v.useCallback(async () => {
    const H = await r.getPage("get_timer_requests_short", 1, 100), O = await Promise.all(
      bf(H).map(async (G) => {
        var X;
        const U = await r.getRecord(G.uuid, "get_timer_request");
        return ((X = ur(U)) == null ? void 0 : X.data) ?? ur(U);
      })
    );
    c(O.filter((G) => !!G && G.action_type === "create_timer"));
  }, [r]), k = v.useCallback(async () => {
    const H = await r.getPage("get_alarm_requests_short", 1, 100), O = await Promise.all(
      bf(H).map(async (G) => {
        var X;
        const U = await r.getRecord(G.uuid, "get_alarm_request");
        return ((X = ur(U)) == null ? void 0 : X.data) ?? ur(U);
      })
    );
    f(O.filter((G) => !!G && G.action_type !== "delete_alarm"));
  }, [r]), C = v.useCallback(async () => {
    const H = await r.getAllRecords("get_alarm_time_widgets_short"), O = await Promise.all(
      H.map(async (G) => {
        var X;
        const U = await r.getRecord(G.uuid, "get_alarm_time_widget");
        return ((X = ur(U)) == null ? void 0 : X.data) ?? ur(U);
      })
    );
    h(O.filter(Boolean));
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
  const j = async (H, O) => await a.run(async () => {
    await H();
  }, { exclusive: !0 }) ? (await a.run(O, { retryable: !0 }), !0) : !1, N = async (H, O, G = 0.3) => {
    const U = {
      count_timer: Tf(O)
    };
    return j(() => r.saveData({ name: `Таймер ${Tf(O)}`, action_type: "create_timer", device_id: H, timer_time: U, volume_start: G }, "save_timer_request"), x);
  }, P = async (H) => j(() => r.deleteRecord(H.uuid, "delete_timer_request"), x), F = async (H, O, G = 0.3, U = "once", X = []) => j(() => r.saveData({ name: `Будильник ${O}`, action_type: "create_alarm", device_id: H, status: "on", time: O, volume_start: G, repeat_type: U, repeat_days: X }, "save_alarm_request"), async () => {
    await Promise.all([k(), C()]);
  }), $ = async (H, O) => j(() => r.updateRecord(H.uuid, "update_alarm_request", { ...H, action_type: "edit_alarm", ...O }), async () => {
    await Promise.all([k(), C()]);
  }), A = async (H) => j(() => r.deleteRecord(H.uuid, "delete_alarm_request"), k);
  return {
    feedback: { ...a, retry: a.error ? a.retry ?? (() => {
      b();
    }) : void 0 },
    alarmTimeWidgets: p,
    refreshAlarmTimes: () => a.run(C, { retryable: !0 }),
    alarms: d,
    createAlarm: F,
    createTimer: N,
    deleteAlarm: A,
    devices: y,
    loading: g,
    stopTimer: P,
    timers: i,
    toTimerSeconds: jw,
    updateAlarm: $
  };
}
const Ew = "_grid_w5y3x_31", Nw = "_card_w5y3x_38", Tw = "_empty_w5y3x_38", bw = "_cardHeader_w5y3x_47", Aw = "_cardTitle_w5y3x_54", Rw = "_meta_w5y3x_59", Pw = "_form_w5y3x_73", $w = "_field_w5y3x_79", Mw = "_label_w5y3x_85", Iw = "_quickTabs_w5y3x_101", Lw = "_quickTab_w5y3x_101", Dw = "_activeQuickTab_w5y3x_117", Ow = "_cardLead_w5y3x_135", zw = "_cardIcon_w5y3x_143", Hw = "_cardButton_w5y3x_148", Fw = "_wheelPicker_w5y3x_160", Ww = "_wheelColumn_w5y3x_173", Bw = "_wheelSelect_w5y3x_180", Uw = "_footerActions_w5y3x_202", Vw = "_saveButton_w5y3x_208", qw = "_alarmTimeFields_w5y3x_237", _e = {
  grid: Ew,
  card: Nw,
  empty: Tw,
  cardHeader: bw,
  cardTitle: Aw,
  meta: Rw,
  form: Pw,
  field: $w,
  label: Mw,
  quickTabs: Iw,
  quickTab: Lw,
  activeQuickTab: Dw,
  cardLead: Ow,
  cardIcon: zw,
  cardButton: Hw,
  wheelPicker: Fw,
  wheelColumn: Ww,
  wheelSelect: Bw,
  footerActions: Uw,
  saveButton: Vw,
  alarmTimeFields: qw
}, Qw = [5, 10, 15, 30, 45, 60], Af = (r) => {
  const a = Math.max(0, r), i = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return [i, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, Kw = (r, a, i) => Math.max(1, r * 3600 + a * 60 + i), Yw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), Jw = () => {
  const r = Ge(), { feedback: a, createTimer: i, devices: c, loading: d, stopTimer: f, timers: p, toTimerSeconds: h } = Np(), [g, w] = v.useState(!1), [y, x] = v.useState(""), [k, C] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [b, j] = v.useState({});
  v.useEffect(() => {
    j(Object.fromEntries(p.map((A) => [A.uuid, h(A.timer_time, A.status)])));
  }, [p, h]), v.useEffect(() => {
    const A = window.setInterval(() => {
      j((H) => Object.fromEntries(Object.entries(H).map(([O, G]) => {
        var U;
        return [O, ((U = p.find((X) => X.uuid === O)) == null ? void 0 : U.status) === "paused" ? G : Math.max(0, G - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(A);
  }, [p]);
  const N = v.useMemo(() => new Map(c.map((A) => [A.id, A.name])), [c]), P = Kw(k.hours, k.minutes, k.seconds), F = async () => {
    y && await i(y, P, 0.3) && w(!1);
  }, $ = (A) => C(Yw(A * 60));
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ht, { title: _("Таймеры") }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ke, { ...a }),
      /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: J.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Таймеры") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(pr, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          re,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          re,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      /* @__PURE__ */ o.jsx(Gt, { loading: d, itemCount: p.length, placeholderCount: 4, children: /* @__PURE__ */ o.jsx("div", { className: _e.grid, children: p.length ? p.map((A) => {
        const H = h(A.timer_time, A.status), O = Ep(A.timer_time);
        return /* @__PURE__ */ o.jsx("div", { className: _e.card, children: /* @__PURE__ */ o.jsxs("div", { className: _e.cardHeader, children: [
          /* @__PURE__ */ o.jsxs("div", { className: _e.cardLead, children: [
            /* @__PURE__ */ o.jsx(Jl, { className: _e.cardIcon, size: 26 }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("h2", { className: _e.cardTitle, children: Af(b[A.uuid] ?? H) }),
              /* @__PURE__ */ o.jsxs("div", { className: _e.meta, children: [
                _("Заведен на"),
                " ",
                Af(O),
                " • ",
                N.get(A.device_id) || A.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(re, { variant: "remove", onClick: () => f(A), children: _("Удалить") })
        ] }) }, A.uuid);
      }) : !d && !a.error && /* @__PURE__ */ o.jsx("div", { className: _e.empty, children: _("Нет запущенных таймеров.") }) }) }),
      /* @__PURE__ */ o.jsx(Ft, { feedback: a, open: g, onClose: () => w(!1), title: _("Создать таймер"), footer: /* @__PURE__ */ o.jsx("div", { className: _e.footerActions, children: /* @__PURE__ */ o.jsx(re, { className: _e.saveButton, onClick: F, disabled: !y, children: _("Создать") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: _e.form, children: [
        /* @__PURE__ */ o.jsx("div", { className: _e.wheelPicker, "aria-label": _("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((A) => /* @__PURE__ */ o.jsxs("label", { className: _e.wheelColumn, children: [
          /* @__PURE__ */ o.jsx("span", { className: _e.label, children: _(A === "hours" ? "Часы" : A === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              className: _e.wheelSelect,
              type: "number",
              min: 0,
              max: A === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: k[A],
              onChange: (H) => {
                const O = Math.max(0, Math.min(A === "hours" ? 23 : 59, Math.trunc(Number(H.target.value) || 0)));
                C((G) => ({ ...G, [A]: O }));
              }
            }
          )
        ] }, A)) }),
        /* @__PURE__ */ o.jsxs("div", { className: _e.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: _e.label, children: _("Быстрое создание") }),
          /* @__PURE__ */ o.jsx("div", { className: _e.quickTabs, children: Qw.map((A) => /* @__PURE__ */ o.jsxs("button", { type: "button", className: `${_e.quickTab} ${P === A * 60 ? _e.activeQuickTab : ""}`, onClick: () => $(A), children: [
            A,
            " ",
            _("мин")
          ] }, A)) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Wr,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: y,
            options: c.map((A) => ({ value: A.id, label: A.name })),
            onSelect: x
          }
        )
      ] }) })
    ] })
  ] });
};
let Gw = 0;
function Tp() {
  var r;
  if ((r = globalThis.crypto) != null && r.getRandomValues) {
    const a = new Uint8Array(16);
    return globalThis.crypto.getRandomValues(a), `monitor-${Array.from(a, (i) => i.toString(16).padStart(2, "0")).join("")}`;
  }
  return `monitor-${Date.now().toString(36)}-${(++Gw).toString(36)}`;
}
class bp {
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
  async listen(a, i, c) {
    return this.listenWith((d) => a.monitorAudio(i, d), c);
  }
  async listenWith(a, i) {
    const c = await a((d) => {
      const f = this.context;
      if (this.closed || !f) return;
      if (d.type === "status") {
        d.connected || this.clear(), i(!!d.connected);
        return;
      }
      if (d.type !== "audio" || d.rate !== 16e3 || !d.pcm) return;
      const p = Uint8Array.from(atob(d.pcm), (x) => x.charCodeAt(0)), h = new DataView(p.buffer), g = f.createBuffer(1, p.length / 2, d.rate), w = g.getChannelData(0);
      for (let x = 0; x < w.length; x++)
        w[x] = h.getInt16(x * 2, !0) / 32768;
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
function Ap() {
  var r;
  return !!(globalThis.isSecureContext && ((r = navigator.mediaDevices) != null && r.getUserMedia));
}
function Xw(r) {
  const a = r && typeof r == "object" && "name" in r ? String(r.name) : "";
  return a === "NotAllowedError" || a === "SecurityError" ? "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS." : a === "NotSupportedError" ? "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari." : a === "NotFoundError" ? "Микрофон на этом устройстве не найден." : a === "NotReadableError" ? "Микрофон занят другим приложением или недоступен." : "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.";
}
class Zw {
  constructor(a, i, c) {
    be(this, "output", new bp());
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
    this.api = a, this.viewId = i, this.onFailure = c;
  }
  setSending(a) {
    this.sending = a;
  }
  setMicrophoneMuted(a) {
    var i;
    this.muted = a;
    for (const c of ((i = this.stream) == null ? void 0 : i.getAudioTracks()) ?? []) c.enabled = !a;
  }
  getOutputDevices() {
    return [...this.outputs];
  }
  async refreshOutputDevices() {
    if (this.closed || !navigator.mediaDevices.enumerateDevices) return;
    const a = await navigator.mediaDevices.enumerateDevices().catch(() => []);
    this.closed || (this.outputs = a.filter((i) => i.kind === "audiooutput" && i.deviceId).map((i) => ({ id: i.deviceId, label: i.label || i.deviceId })));
  }
  canSelectOutput() {
    var a, i;
    return typeof ((a = this.context) == null ? void 0 : a.setSinkId) == "function" && (typeof ((i = navigator.mediaDevices) == null ? void 0 : i.selectAudioOutput) == "function" || this.outputs.some((c) => c.id !== "default"));
  }
  canPromptOutput() {
    return this.canSelectOutput() && typeof navigator.mediaDevices.selectAudioOutput == "function";
  }
  async selectOutput(a) {
    if (this.closed || !this.context) throw new DOMException("Call closed", "AbortError");
    const i = this.context;
    if (!i.setSinkId) throw new DOMException("Output selection unavailable", "NotSupportedError");
    if (await i.setSinkId(a), this.closed) throw new DOMException("Call closed", "AbortError");
    await i.resume();
  }
  async promptOutput() {
    const a = navigator.mediaDevices;
    if (!this.canPromptOutput() || !a.selectAudioOutput) throw new DOMException("Output chooser unavailable", "NotSupportedError");
    const i = await a.selectAudioOutput();
    return await this.selectOutput(i.deviceId), { id: i.deviceId, label: i.label };
  }
  async prepare() {
    if (!Ap()) throw new DOMException("Secure microphone unavailable", "SecurityError");
    if (this.context = new AudioContext(), !this.context.audioWorklet || !globalThis.AudioWorkletNode) throw new DOMException("AudioWorklet unavailable", "NotSupportedError");
    if (await this.output.prepare(this.context), this.closed) throw new DOMException("Call closed", "AbortError");
    const a = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }, video: !1 });
    if (this.closed)
      throw a.getTracks().forEach((i) => i.stop()), new DOMException("Call closed", "AbortError");
    if (this.stream = a, this.setMicrophoneMuted(this.muted), navigator.mediaDevices.enumerateDevices) {
      const i = await navigator.mediaDevices.enumerateDevices().catch(() => []);
      this.outputs = i.filter((c) => c.kind === "audiooutput" && c.deviceId).map((c) => ({ id: c.deviceId, label: c.label || c.deviceId }));
    }
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    if (await this.context.resume(), this.closed) throw new DOMException("Call closed", "AbortError");
    for (const i of a.getAudioTracks()) i.onended = () => this.fail("Микрофон отключён. Звонок завершён.");
    if (await this.context.audioWorklet.addModule("/ha_dialog_ui_static/call-capture-worklet.js"), this.closed) throw new DOMException("Call closed", "AbortError");
    this.input = this.context.createMediaStreamSource(a), this.worklet = new AudioWorkletNode(this.context, "ha-call-capture", { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1] }), this.worklet.port.onmessage = (i) => {
      var f;
      if ((f = this.worklet) == null || f.port.postMessage("ack"), this.closed || !this.sending || this.inFlight >= 3) return;
      const c = new Uint8Array(i.data);
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
    var a, i, c;
    this.closed = !0, this.sending = !1, this.output.close(), this.worklet && (this.worklet.port.onmessage = null, this.worklet.disconnect()), (a = this.input) == null || a.disconnect();
    for (const d of ((i = this.stream) == null ? void 0 : i.getTracks()) ?? [])
      d.onended = null, d.stop();
    this.stream = void 0, (c = this.context) == null || c.close().catch(() => {
    }), this.context = void 0;
  }
}
const ek = "_page_375kk_1", tk = "_title_375kk_6", nk = "_hint_375kk_13", rk = "_grid_375kk_18", sk = "_device_375kk_24", ok = "_active_375kk_53", ik = "_phoneStage_375kk_104", ak = "_avatar_375kk_115", lk = "_phoneStatus_375kk_132", uk = "_duration_375kk_139", ck = "_phoneFooter_375kk_150", dk = "_callControls_375kk_158", fk = "_control_375kk_164", pk = "_roundControl_375kk_177", hk = "_hangup_375kk_177", mk = "_controlSelected_375kk_187", vk = "_routeHint_375kk_205", yk = "_dial_375kk_228", $e = {
  page: ek,
  title: tk,
  hint: nk,
  grid: rk,
  device: sk,
  active: ok,
  phoneStage: ik,
  avatar: ak,
  phoneStatus: lk,
  duration: uk,
  phoneFooter: ck,
  callControls: dk,
  control: fk,
  roundControl: pk,
  hangup: hk,
  controlSelected: mk,
  routeHint: vk,
  dial: yk
};
function gk() {
  var Xt, xn;
  const r = ot(), a = Ge(), [i, c] = v.useState(), [d, f] = v.useState(""), [p, h] = v.useState(""), [g, w] = v.useState(!1), [y, x] = v.useState(!1), [k, C] = v.useState(!1), [b, j] = v.useState([]), [N, P] = v.useState(!1), [F, $] = v.useState("default"), [A, H] = v.useState(!1), [O, G] = v.useState(!1), [U, X] = v.useState(0), xe = v.useRef(), fe = v.useRef(""), me = v.useRef(), ve = v.useRef(!1), we = Ap();
  v.useEffect(() => {
    let Z = !0;
    ve.current = !0, x(!1);
    const ye = Tp();
    fe.current = ye;
    let Ae;
    return r.callsWatch(ye, (De) => {
      Z && c(De);
    }).then((De) => {
      Z ? (Ae = De, x(!0)) : Promise.resolve(De()).catch(() => {
      });
    }).catch((De) => {
      Z && h(Ct(De));
    }), () => {
      var De;
      Z = !1, ve.current = !1, (De = me.current) == null || De.close(), me.current = void 0, Ae && Promise.resolve(Ae()).catch(() => {
      });
    };
  }, [r]);
  const W = i == null ? void 0 : i.calls.find((Z) => Z.id === i.owned_call_id);
  v.useEffect(() => {
    var Z, ye;
    (Z = me.current) == null || Z.setSending((W == null ? void 0 : W.state) === "connecting" || (W == null ? void 0 : W.state) === "active"), i && !i.owned_call_id && !g && ((ye = me.current) == null || ye.close(), me.current = void 0);
  }, [i, W == null ? void 0 : W.state, g]), v.useEffect(() => {
    var Ae;
    if ((W == null ? void 0 : W.state) !== "active") {
      xe.current = void 0, X(0);
      return;
    }
    ((Ae = xe.current) == null ? void 0 : Ae.id) !== W.id && (xe.current = { id: W.id, time: Date.now() });
    const Z = () => X(Math.max(0, Math.floor((Date.now() - xe.current.time) / 1e3)));
    Z();
    const ye = setInterval(Z, 1e3);
    return () => clearInterval(ye);
  }, [W == null ? void 0 : W.id, W == null ? void 0 : W.state]);
  const le = () => {
    var ye;
    if (!ge) return;
    const Z = !k;
    (ye = me.current) == null || ye.setMicrophoneMuted(Z), C(Z);
  }, de = async (Z) => {
    const ye = me.current;
    if (!(!ye || O || !ge)) {
      G(!0), h("");
      try {
        await ye.selectOutput(Z), ve.current && me.current === ye && ($(Z), H(!1));
      } catch (Ae) {
        ve.current && !(Ae instanceof DOMException && Ae.name === "AbortError") && h(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        ve.current && G(!1);
      }
    }
  }, M = async () => {
    if (!ge) return;
    const Z = me.current;
    await (Z == null ? void 0 : Z.resumePlayback()), await (Z == null ? void 0 : Z.refreshOutputDevices()), !(!ve.current || !Z || me.current !== Z) && (j(Z.getOutputDevices()), P(Z.canSelectOutput()), H((ye) => !ye));
  }, K = async (Z) => {
    const ye = me.current;
    if (Z !== "choose") {
      await de(Z);
      return;
    }
    if (!(!ye || O)) {
      G(!0);
      try {
        const Ae = await ye.promptOutput();
        ve.current && me.current === ye && (j((De) => [...De.filter((Et) => Et.id !== Ae.id), Ae]), $(Ae.id), H(!1));
      } catch (Ae) {
        Ae instanceof DOMException && ["AbortError", "NotAllowedError"].includes(Ae.name) || h(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        ve.current && G(!1);
      }
    }
  }, B = i == null ? void 0 : i.devices.find((Z) => Z.id === d), E = (Z) => {
    var ye;
    return ((ye = i == null ? void 0 : i.incoming) == null ? void 0 : ye.some((Ae) => Ae.source_device_id === Z)) || (i == null ? void 0 : i.calls.some((Ae) => Ae.source_device_id === Z || Ae.target_device_id === Z));
  }, z = (Xt = i == null ? void 0 : i.incoming) == null ? void 0 : Xt.find((Z) => Z.source_device_id === d), ie = i == null ? void 0 : i.calls.find((Z) => Z.source_device_id === d || Z.target_device_id === d), oe = !!(W && W.target_device_id === d), ge = oe && (W == null ? void 0 : W.state) === "active" && !g, ke = (Z) => {
    var ye;
    return ((ye = i == null ? void 0 : i.devices.find((Ae) => Ae.id === Z)) == null ? void 0 : ye.name) ?? _("Колонка");
  }, Ne = _((ie == null ? void 0 : ie.state) === "active" ? "Разговор" : (ie == null ? void 0 : ie.state) === "connecting" ? "Соединяем…" : ie ? "Ожидание ответа" : z ? "Входящий звонок" : "Готово к звонку"), Ce = async () => {
    var Z;
    if (!g) {
      w(!0), h("");
      try {
        await r.browserCallEnd(fe.current), (Z = me.current) == null || Z.close(), me.current = void 0;
      } catch (ye) {
        ve.current && h(Ct(ye));
      } finally {
        ve.current && w(!1);
      }
    }
  }, Re = async () => {
    var Ae;
    if (g || !d) return;
    w(!0), h(""), C(!1), $("default"), H(!1), j([]), P(!1);
    const Z = fe.current, ye = new Zw(r, Z, (De) => {
      ve.current && h(_(De)), r.browserCallEnd(Z).catch(() => {
      });
    });
    (Ae = me.current) == null || Ae.close(), me.current = ye;
    try {
      if (await ye.prepare(), ve.current && (j(ye.getOutputDevices()), P(ye.canSelectOutput())), !ve.current) {
        ye.close();
        return;
      }
      const De = z ? await r.browserCallAccept(Z, z.id) : await r.browserCallStart(Z, d);
      if (!ve.current) {
        ye.close();
        return;
      }
      if (await ye.listen(), !ve.current) {
        ye.close();
        return;
      }
      c((Et) => {
        var Yr;
        return Et && { ...Et, owned_call_id: De.call_id, calls: Et.calls.some((Un) => Un.id === De.call_id) ? Et.calls : [...Et.calls, { id: De.call_id, source_device_id: null, source_type: "browser", target_device_id: d, state: z ? "active" : "ringing" }], incoming: (Yr = Et.incoming) == null ? void 0 : Yr.filter((Un) => Un.id !== (z == null ? void 0 : z.id)) };
      });
    } catch (De) {
      ye.close(), ve.current && h(De instanceof DOMException ? _(Xw(De)) : Ct(De)), await r.browserCallEnd(Z).catch(() => {
      });
    } finally {
      ve.current && w(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    a && /* @__PURE__ */ o.jsx(ht, { title: "Звонки" }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("section", { className: $e.page, children: [
        /* @__PURE__ */ o.jsx("h1", { className: $e.title, children: _("Звонки") }),
        p && !d && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
        !i && !p && /* @__PURE__ */ o.jsx(Gt, { loading: !0, itemCount: 0, placeholderCount: 3, grid: !0 }),
        i && !i.available && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.") }),
        (i == null ? void 0 : i.available) && i.devices.length === 0 && /* @__PURE__ */ o.jsx("p", { children: _("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.") }),
        /* @__PURE__ */ o.jsx("div", { className: $e.grid, children: i == null ? void 0 : i.devices.map((Z) => {
          var ye;
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `${$e.device} ${E(Z.id) ? $e.active : ""}`,
              onClick: () => {
                f(Z.id), h("");
              },
              children: [
                E(Z.id) ? /* @__PURE__ */ o.jsx(ff, { size: 26 }) : /* @__PURE__ */ o.jsx(pi, { size: 26 }),
                /* @__PURE__ */ o.jsx("strong", { children: Z.name }),
                /* @__PURE__ */ o.jsx("span", { children: _(Z.online ? (ye = i == null ? void 0 : i.incoming) != null && ye.some((Ae) => Ae.source_device_id === Z.id) ? "Входящий звонок" : E(Z.id) ? "Участвует в звонке" : "Готова к звонку" : "Нет подключения") })
              ]
            },
            Z.id
          );
        }) }),
        /* @__PURE__ */ o.jsxs(Ft, { open: !!d, onClose: () => f(""), title: _("Звонки"), dialogLabel: ke(d), footer: /* @__PURE__ */ o.jsxs("div", { className: $e.phoneFooter, children: [
          (!z || oe) && /* @__PURE__ */ o.jsxs("div", { className: $e.callControls, children: [
            /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
              /* @__PURE__ */ o.jsx(re, { variant: "secondary", className: `${$e.roundControl} ${oe && k ? $e.controlSelected : ""}`, "aria-label": _(oe && k ? "Включить микрофон" : "Выключить микрофон"), "aria-pressed": oe && k, disabled: !ge, onClick: le, children: oe && k ? /* @__PURE__ */ o.jsx(ng, { size: 25 }) : /* @__PURE__ */ o.jsx(sg, { size: 25 }) }),
              /* @__PURE__ */ o.jsx("span", { children: _(oe && k ? "Микрофон выкл." : "Микрофон") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
              /* @__PURE__ */ o.jsx(re, { variant: "secondary", className: `${$e.roundControl} ${oe && F !== "default" ? $e.controlSelected : ""}`, "aria-label": _("Аудиовыход"), "aria-pressed": oe && F !== "default", disabled: !ge || O, onClick: () => void M(), children: /* @__PURE__ */ o.jsx(xg, { size: 25 }) }),
              /* @__PURE__ */ o.jsx("span", { children: _("Аудиовыход") })
            ] })
          ] }),
          ge && A && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx(_n, { label: "Устройство вывода", value: F, disabled: O || !N, onChange: (Z) => void K(Z.target.value), options: [{ value: "default", label: _("По умолчанию (системный выход)") }, ...b.filter((Z) => Z.id !== "default").map((Z) => ({ value: Z.id, label: Z.label })), ...(xn = me.current) != null && xn.canPromptOutput() ? [{ value: "choose", label: _("Выбрать другое устройство…") }] : []] }),
            !N && /* @__PURE__ */ o.jsx("p", { className: $e.routeHint, children: _("Этот браузер не позволяет выбирать аудиовыход. Переключите динамик или наушники в системном меню телефона.") })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: $e.callControls, children: [
            z && !oe && /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
              /* @__PURE__ */ o.jsx(re, { className: $e.hangup, "aria-label": _("Отклонить"), disabled: g, onClick: () => void r.browserCallDecline(fe.current, z.id).catch((Z) => h(Ct(Z))), children: /* @__PURE__ */ o.jsx(pf, { size: 30 }) }),
              /* @__PURE__ */ o.jsx("span", { children: _("Отклонить") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
              oe ? /* @__PURE__ */ o.jsx(re, { className: $e.hangup, disabled: g, "aria-label": _("Положить трубку"), onClick: () => void Ce(), children: /* @__PURE__ */ o.jsx(pf, { size: 30 }) }) : /* @__PURE__ */ o.jsx(re, { className: $e.dial, "aria-label": _(ie ? "Занято" : z ? "Ответить" : "Позвонить"), disabled: g || !y || !we || !(i != null && i.available) || !(B != null && B.online) || !!W || !!ie, onClick: () => void Re(), children: /* @__PURE__ */ o.jsx(pi, { size: 30 }) }),
              /* @__PURE__ */ o.jsx("span", { children: _(oe ? "Завершить" : ie ? "Занято" : z ? "Ответить" : "Позвонить") })
            ] })
          ] })
        ] }), children: [
          /* @__PURE__ */ o.jsxs("div", { className: $e.phoneStage, children: [
            /* @__PURE__ */ o.jsx("div", { className: $e.avatar, children: /* @__PURE__ */ o.jsx(ff, { size: 46, strokeWidth: 1.4 }) }),
            /* @__PURE__ */ o.jsx("h2", { children: ke(d) }),
            /* @__PURE__ */ o.jsxs("div", { className: $e.phoneStatus, children: [
              /* @__PURE__ */ o.jsx("span", { role: "status", "aria-live": "polite", children: g && !oe ? _("Подключаем микрофон…") : Ne }),
              /* @__PURE__ */ o.jsx(Br, { label: "Звонки", description: "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA." })
            ] }),
            oe && (W == null ? void 0 : W.state) === "active" && /* @__PURE__ */ o.jsxs("time", { className: $e.duration, "aria-label": _("Длительность звонка"), children: [
              String(Math.floor(U / 60)).padStart(2, "0"),
              ":",
              String(U % 60).padStart(2, "0")
            ] }),
            oe && k && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Ваш микрофон выключен") }),
            !we && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.") })
          ] }),
          p && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
          ie && !oe && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Колонка уже участвует в другом звонке.") }),
          W && !oe && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Сначала завершите текущий звонок.") })
        ] })
      ] })
    ] })
  ] });
}
const _k = "_page_10u8g_1", xk = "_heading_10u8g_7", wk = "_grid_10u8g_27", kk = "_device_10u8g_33", Sk = "_deviceLive_10u8g_64", Ck = "_playback_10u8g_72", jk = "_playbackSelect_10u8g_89", Ek = "_statusRow_10u8g_113", Nk = "_status_10u8g_113", Tk = "_live_10u8g_128", bk = "_hint_10u8g_132", Ak = "_footer_10u8g_138", Rk = "_empty_10u8g_149", Pk = "_error_10u8g_156", st = {
  page: _k,
  heading: xk,
  grid: wk,
  device: kk,
  deviceLive: Sk,
  playback: Ck,
  playbackSelect: jk,
  statusRow: Ek,
  status: Nk,
  live: Tk,
  hint: bk,
  footer: Ak,
  empty: Rk,
  error: Pk
};
function $k() {
  const r = ot(), a = Ge(), [i, c] = v.useState(), [d, f] = v.useState(""), [p, h] = v.useState(null), [g, w] = v.useState("browser"), [y, x] = v.useState(!1), [k, C] = v.useState(!1), b = v.useRef(""), j = v.useRef(!1), N = v.useRef(), [P, F] = v.useState(0);
  v.useEffect(() => {
    j.current = !0;
    let M = !0, K;
    const B = Tp();
    return b.current = B, c(void 0), f(""), r.monitorWatch(B, (E) => {
      M && c(E);
    }).then((E) => {
      M ? K = E : Promise.resolve(E()).catch(() => {
      });
    }).catch((E) => {
      M && f(
        Ct(
          E,
          "Не удалось открыть радионяню. Проверьте подключение к HA."
        )
      );
    }), () => {
      var E;
      M = !1, j.current = !1, (E = N.current) == null || E.close(), N.current = void 0, K && Promise.resolve(K()).catch(() => {
      });
    };
  }, [r, P]), v.useEffect(() => {
    var M;
    i && !i.owned_source_id && !y && ((M = N.current) == null || M.close(), N.current = void 0, C(!1));
  }, [i, y]);
  const $ = i == null ? void 0 : i.devices.find((M) => M.id === p), A = (i == null ? void 0 : i.devices.filter((M) => M.source)) ?? [], H = i == null ? void 0 : i.sessions.find(
    (M) => M.source_device_id === p
  ), O = !!($ != null && $.transmitting || ($ == null ? void 0 : $.source_state) === "on" || H), G = k && ($ == null ? void 0 : $.transmitting) && (i == null ? void 0 : i.owned_source_id) === p, U = !!H || G, X = (M) => {
    const K = i == null ? void 0 : i.sessions.find(
      (B) => B.source_device_id === M.id
    );
    w((K == null ? void 0 : K.listener_device_id) ?? "browser"), h(M.id), f("");
  }, xe = () => h(null), fe = async () => {
    var K;
    if (!$ || y) return;
    x(!0), f(""), C(!1), (K = N.current) == null || K.close(), N.current = void 0;
    let M;
    try {
      g === "browser" && (M = new bp(), N.current = M, await M.prepare());
      const B = await r.monitorStart(
        b.current,
        $.id,
        g === "browser" ? void 0 : g
      );
      if (!j.current || !B.started) {
        M == null || M.close();
        return;
      }
      M && await M.listen(r, $.node_id, (E) => {
        j.current && C(E);
      }), j.current && (C(!0), c(
        (E) => E && {
          ...E,
          owned_source_id: $.id,
          devices: E.devices.map(
            (z) => z.id === $.id ? { ...z, transmitting: !0, source_state: "on" } : z
          ),
          sessions: g === "browser" ? E.sessions : [
            ...E.sessions.filter(
              (z) => z.source_device_id !== $.id
            ),
            {
              source_device_id: $.id,
              listener_device_id: g
            }
          ]
        }
      ));
    } catch (B) {
      if (M == null || M.close(), j.current) {
        f(
          Ct(
            B,
            "Не удалось начать прослушивание. Проверьте подключение и разрешение воспроизведения."
          )
        );
        try {
          await r.monitorStop(b.current, $.id);
        } catch {
        }
      }
    } finally {
      j.current && x(!1);
    }
  }, me = async (M) => {
    var K;
    x(!0), f("");
    try {
      await r.monitorStop(b.current, M), (i == null ? void 0 : i.owned_source_id) === M && ((K = N.current) == null || K.close(), N.current = void 0, C(!1)), c(
        (B) => B && {
          ...B,
          owned_source_id: B.owned_source_id === M ? null : B.owned_source_id,
          devices: B.devices.map(
            (E) => E.id === M ? { ...E, transmitting: !1, source_state: "off" } : E
          ),
          sessions: B.sessions.filter(
            (E) => E.source_device_id !== M && E.listener_device_id !== M
          )
        }
      );
    } catch (B) {
      j.current && f(Ct(B));
    } finally {
      j.current && x(!1);
    }
  }, ve = (i == null ? void 0 : i.devices.filter(
    (M) => M.listener && M.id !== p
  )) ?? [], we = _(
    y ? "Подключаемся…" : O ? G || H ? "Прослушивание активно" : "Источник включён" : "Готово к запуску"
  ), W = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: st.statusRow, children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: `${st.status} ${O ? st.live : ""}`,
          children: [
            /* @__PURE__ */ o.jsx(Ly, { size: 12, fill: "currentColor" }),
            we
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(Br, { label: we, description: _(
        O && (i == null ? void 0 : i.owned_source_id) !== p ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже. Пока прослушивание активно, сменить устройство воспроизведения нельзя." : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня». Пока прослушивание активно, сменить устройство воспроизведения нельзя."
      ) })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: st.hint, children: _("Выберите устройство") }),
    /* @__PURE__ */ o.jsxs("div", { className: st.playback, children: [
      g === "browser" ? /* @__PURE__ */ o.jsx(Qy, { size: 22 }) : /* @__PURE__ */ o.jsx(Jl, { size: 22 }),
      /* @__PURE__ */ o.jsx(
        _n,
        {
          "aria-label": _("Выберите устройство"),
          className: st.playbackSelect,
          value: g,
          onChange: (M) => w(M.target.value),
          disabled: y || U,
          options: [
            { value: "browser", label: _("На этом устройстве") },
            ...ve.map((M) => ({
              value: M.id,
              label: M.online ? M.name : `${M.name} — ${_("Нет подключения")}`,
              disabled: !M.online
            }))
          ]
        }
      )
    ] })
  ] }), le = /* @__PURE__ */ o.jsx("div", { className: st.footer, children: /* @__PURE__ */ o.jsx(
    re,
    {
      onClick: O ? () => void me(p) : () => void fe(),
      disabled: y || !O && !($ != null && $.online) || !O && g !== "browser" && !(i != null && i.devices.some(
        (M) => M.id === g && M.online
      )),
      children: _(
        y ? "Подключаемся…" : O ? g === "browser" && !G && !H ? "Начать слушать" : "Остановить" : "Старт"
      )
    }
  ) }), de = O && !U ? /* @__PURE__ */ o.jsxs("div", { className: st.footer, children: [
    /* @__PURE__ */ o.jsx(re, { disabled: y || !($ != null && $.online), onClick: () => void fe(), children: _(g === "browser" ? "Начать слушать" : "Старт") }),
    /* @__PURE__ */ o.jsx(
      re,
      {
        variant: "ghost",
        disabled: y,
        onClick: () => void me(p),
        children: _("Остановить источник")
      }
    )
  ] }) : le;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    a && /* @__PURE__ */ o.jsx(ht, { title: "Радионяня" }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("section", { className: st.page, children: [
        /* @__PURE__ */ o.jsxs("header", { className: st.heading, children: [
          /* @__PURE__ */ o.jsx(Yl, { size: 30 }),
          /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("h1", { children: _("Радионяня") }) })
        ] }),
        d && !p && /* @__PURE__ */ o.jsxs("div", { role: "alert", className: st.error, children: [
          d,
          /* @__PURE__ */ o.jsx(re, { onClick: () => F((M) => M + 1), children: _("Повторить") })
        ] }),
        !i && !d && /* @__PURE__ */ o.jsx(Gt, { loading: !0, itemCount: 0, placeholderCount: 3, grid: !0 }),
        i && !i.available && /* @__PURE__ */ o.jsx("div", { className: st.empty, children: _(
          "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124."
        ) }),
        (i == null ? void 0 : i.available) && A.length === 0 && /* @__PURE__ */ o.jsx("div", { className: st.empty, children: _(
          "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome."
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: st.grid, children: A.map((M) => {
          const K = i == null ? void 0 : i.sessions.find(
            (E) => E.source_device_id === M.id
          ), B = i == null ? void 0 : i.devices.find(
            (E) => E.id === (K == null ? void 0 : K.listener_device_id)
          );
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `${st.device} ${M.transmitting ? st.deviceLive : ""}`,
              onClick: () => X(M),
              children: [
                /* @__PURE__ */ o.jsx(ug, { size: 28 }),
                /* @__PURE__ */ o.jsx("strong", { children: M.name }),
                /* @__PURE__ */ o.jsx("span", { children: _(
                  M.online ? M.transmitting ? "Источник включён" : M.source_state === "on" ? "Переподключение…" : "Готова к прослушиванию" : "Нет подключения"
                ) }),
                B && /* @__PURE__ */ o.jsxs("small", { children: [
                  _("Воспроизведение:"),
                  " ",
                  B.name
                ] })
              ]
            },
            M.id
          );
        }) }),
        /* @__PURE__ */ o.jsxs(
          Ft,
          {
            open: p !== null,
            onClose: xe,
            title: ($ == null ? void 0 : $.name) ?? "Радионяня",
            dialogLabel: ($ == null ? void 0 : $.name) ?? _("Радионяня"),
            footer: de,
            children: [
              d && /* @__PURE__ */ o.jsx("p", { role: "alert", className: st.error, children: d }),
              W
            ]
          }
        )
      ] })
    ] })
  ] });
}
const Mk = ({ command: r, open: a, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const p = r.status === "on";
  return /* @__PURE__ */ o.jsx(nu, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
    { label: p ? "Выключить" : "Включить", onClick: () => c(r, p ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, Ik = (r) => {
  const a = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !a || Number(a[1]) > 23 || Number(a[2]) > 59 ? null : `${a[1].padStart(2, "0")}:${a[2]}`;
}, Ol = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], Lk = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], Dk = (r = "once", a = []) => r === "daily" ? _("ежедневно") : r === "weekdays" ? _("по будням") : r === "weekends" ? _("по выходным") : r === "custom" ? a.length ? a.map((i) => {
  var c;
  return (c = Ol.find((d) => d.key === i)) != null && c.label ? _(Ol.find((d) => d.key === i).label) : i;
}).join(", ") : _("кастом") : _("однократно"), Ok = () => {
  const r = Ge(), { feedback: a, alarmTimeWidgets: i, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: p, devices: h, loading: g, updateAlarm: w } = Np(), [y, x] = v.useState(!1), [k, C] = v.useState(null), [b, j] = v.useState(null), [N, P] = v.useState(""), [F, $] = v.useState("08:00"), [A, H] = v.useState("once"), [O, G] = v.useState([]), U = v.useMemo(() => Array.from(new Set([...i.flatMap((W) => W.time || []), ...d.map((W) => W.time)].map(Ik).filter((W) => W !== null))), [i, d]), X = v.useMemo(() => new Map(h.map((W) => [W.id, W.name])), [h]), xe = d.find((W) => W.uuid === k) || null, fe = async () => {
    if (!N || !F) return;
    const W = d.find((le) => le.uuid === b);
    if (W) {
      if (!await w(W, { device_id: N, time: F, volume_start: 0.3, repeat_type: A, repeat_days: O })) return;
    } else if (!await f(N, F, 0.3, A, O)) return;
    j(null), x(!1);
  }, me = () => {
    j(null), x(!0), c();
  }, ve = (W) => {
    $(W.time), P(W.device_id), H(W.repeat_type ?? "once"), G(W.repeat_days ?? []), c(), j(W.uuid), C(null), x(!0);
  }, we = (W) => G((le) => le.includes(W) ? le.filter((de) => de !== W) : [...le, W]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ht, { title: _("Будильники") }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !y && /* @__PURE__ */ o.jsx(Ke, { ...a }),
      /* @__PURE__ */ o.jsx(pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: J.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: _("Будильники") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(pr, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          re,
          {
            variant: "primary",
            onClick: me,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          re,
          {
            variant: "primary",
            onClick: me,
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      /* @__PURE__ */ o.jsx(Gt, { loading: g, itemCount: d.length, placeholderCount: 4, children: /* @__PURE__ */ o.jsx("div", { className: _e.grid, children: d.length ? d.map((W) => /* @__PURE__ */ o.jsx("button", { className: `${_e.card} ${_e.cardButton}`, type: "button", onClick: () => C(W.uuid), children: /* @__PURE__ */ o.jsxs("div", { className: _e.cardHeader, children: [
        /* @__PURE__ */ o.jsxs("div", { className: _e.cardLead, children: [
          /* @__PURE__ */ o.jsx(Jl, { className: _e.cardIcon, size: 26 }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h2", { className: _e.cardTitle, children: W.time }),
            /* @__PURE__ */ o.jsxs("div", { className: _e.meta, children: [
              Dk(W.repeat_type, W.repeat_days),
              " • ",
              X.get(W.device_id) || W.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            onClick: (le) => le.stopPropagation(),
            onMouseDown: (le) => le.stopPropagation(),
            children: /* @__PURE__ */ o.jsx(cr, { label: _(""), checked: W.status !== "off", onClick: (le) => le.stopPropagation(), onChange: (le) => w(W, { status: le.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, W.uuid)) : !g && !a.error && /* @__PURE__ */ o.jsx("div", { className: _e.empty, children: _("Нет будильников.") }) }) }),
      /* @__PURE__ */ o.jsx(Ft, { feedback: a, open: y, onClose: () => {
        x(!1), j(null);
      }, title: b ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ o.jsx("div", { className: _e.footerActions, children: /* @__PURE__ */ o.jsx(re, { className: _e.saveButton, onClick: fe, disabled: !N || !F, children: _("Сохранить") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: _e.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: _e.alarmTimeFields, role: "group", "aria-label": _("Время будильника"), children: [
          /* @__PURE__ */ o.jsx(
            Wr,
            {
              label: _("Часы"),
              value: F.split(":")[0],
              options: Array.from({ length: 24 }, (W, le) => ({ value: String(le).padStart(2, "0"), label: String(le).padStart(2, "0") })),
              onSelect: (W) => $(`${W}:${F.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ o.jsx(
            Wr,
            {
              label: _("Минуты"),
              value: F.split(":")[1],
              options: Array.from({ length: 60 }, (W, le) => ({ value: String(le).padStart(2, "0"), label: String(le).padStart(2, "0") })),
              onSelect: (W) => $(`${F.split(":")[0]}:${W}`)
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: _e.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: _e.label, children: _("Ранее заданное время") }),
          /* @__PURE__ */ o.jsx("div", { className: _e.quickTabs, children: U.length ? U.map((W) => /* @__PURE__ */ o.jsx("button", { type: "button", className: `${_e.quickTab} ${F === W ? _e.activeQuickTab : ""}`, onClick: () => $(W), children: W }, W)) : /* @__PURE__ */ o.jsx("span", { className: _e.meta, children: _("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Wr,
          {
            label: _("Повторы"),
            value: A,
            options: Lk.map((W) => ({ ...W, label: _(W.label) })),
            onSelect: (W) => H(W)
          }
        ),
        A === "custom" && /* @__PURE__ */ o.jsx("div", { className: _e.quickTabs, role: "group", "aria-label": _("Дни повтора"), children: Ol.map((W) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": O.includes(W.key),
            className: `${_e.quickTab} ${O.includes(W.key) ? _e.activeQuickTab : ""}`,
            onClick: () => we(W.key),
            children: _(W.label)
          },
          W.key
        )) }),
        /* @__PURE__ */ o.jsx(
          Wr,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: N,
            options: h.map((W) => ({ value: W.id, label: W.name })),
            onSelect: P
          }
        )
      ] }) }),
      /* @__PURE__ */ o.jsx(
        Mk,
        {
          open: !!xe,
          onClose: () => C(null),
          command: xe,
          onEdit: (W) => ve(W),
          onToggleStatus: (W, le) => w(W, { status: le }),
          onDelete: (W) => {
            p(W), C(null);
          }
        }
      )
    ] })
  ] });
}, zk = () => {
  const r = Xl(), a = Zl(), i = Vr(), { pathname: c } = jt(), d = i ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && i !== !1 ? i === null ? /* @__PURE__ */ o.jsx(qs, {}) : /* @__PURE__ */ o.jsx(vn, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ o.jsx(mp, { resetKey: c, children: /* @__PURE__ */ o.jsxs(Dv, { children: [
    /* @__PURE__ */ o.jsx(Qe, { path: "/commands/normalization", element: a ? /* @__PURE__ */ o.jsx(X1, {}) : /* @__PURE__ */ o.jsx(vn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Qe, { path: "/commands/whisper", element: a ? /* @__PURE__ */ o.jsx(n0, {}) : /* @__PURE__ */ o.jsx(vn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Qe, { path: "/logs", element: r && a ? /* @__PURE__ */ o.jsx(c0, {}) : /* @__PURE__ */ o.jsx(vn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Qe, { path: "/downloads", element: a ? /* @__PURE__ */ o.jsx(lw, {}) : /* @__PURE__ */ o.jsx(vn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/",
        element: /* @__PURE__ */ o.jsx(
          vn,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/scripts",
        element: /* @__PURE__ */ o.jsx(lx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/commands",
        element: /* @__PURE__ */ o.jsx(
          vn,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ o.jsx(Lx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ o.jsx(Ox, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ o.jsx(
          vn,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ o.jsx(Fx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ o.jsx(Qx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ o.jsx(Gx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(Qe, { path: "/monitor", element: /* @__PURE__ */ o.jsx($k, {}) }),
    /* @__PURE__ */ o.jsx(Qe, { path: "/calls", element: /* @__PURE__ */ o.jsx(gk, {}) }),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/timer",
        element: /* @__PURE__ */ o.jsx(Jw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/alarm",
        element: /* @__PURE__ */ o.jsx(Ok, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "/settings",
        element: /* @__PURE__ */ o.jsx(Cw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Qe,
      {
        path: "*",
        element: /* @__PURE__ */ o.jsx(
          vn,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] }) });
}, Rp = "ha-dialog-ui-theme", Tl = (r) => r === "light" ? "light" : "dark", Hk = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(Rp, r);
}, Fk = () => {
  const r = Ht(), a = cp(), i = ot(), [c, d] = v.useState(!1), [f, p] = v.useState(null), [h, g] = v.useState(() => Tl(localStorage.getItem(Rp)));
  return v.useEffect(() => {
    Hk(h);
  }, [h]), v.useEffect(() => {
    let w = !0, y = !1, x = !1, k = !1;
    r.run(async () => {
      const N = await i.getSettings();
      w && (y || g(Tl(N.theme)), k || d(!!N.api_commands_enabled), x || p(!!N.active_remout));
    }, { retryable: !0 });
    const C = (N) => {
      y = !0, g(Tl(N.detail));
    }, b = (N) => {
      x = !0, p(N.detail);
    }, j = (N) => {
      k = !0, d(!!N.detail);
    };
    return window.addEventListener(Pl, j), window.addEventListener(hi, b), window.addEventListener("ha-dialog-ui-theme-change", C), () => {
      w = !1, window.removeEventListener(Pl, j), window.removeEventListener(hi, b), window.removeEventListener("ha-dialog-ui-theme-change", C);
    };
  }, [i, r.run]), /* @__PURE__ */ o.jsx(dp.Provider, { value: c, children: /* @__PURE__ */ o.jsx(pp.Provider, { value: f, children: /* @__PURE__ */ o.jsxs("div", { className: "appShell", "data-theme": h, lang: a, children: [
    /* @__PURE__ */ o.jsx(Ke, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ o.jsx(qs, {}) : /* @__PURE__ */ o.jsx(zk, {})
  ] }) }) });
};
class Wk {
  constructor(a) {
    be(this, "hass");
    this.hass = a;
  }
  callsWatch(a, i) {
    return this.monitorSubscribe(i, { type: "ha_dialog_ui/calls/watch", view_id: a });
  }
  browserCallStart(a, i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_start", view_id: a, target_device_id: i });
  }
  browserCallAccept(a, i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_accept", view_id: a, invitation_id: i });
  }
  browserCallDecline(a, i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_decline", view_id: a, invitation_id: i });
  }
  browserCallEnd(a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_end", view_id: a });
  }
  browserCallAudio(a, i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_audio", view_id: a, pcm: i });
  }
  browserCallReceive(a, i) {
    return this.monitorSubscribe(i, { type: "ha_dialog_ui/calls/browser_receive", view_id: a });
  }
  callStart(a, i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/start", source_device_id: a, target_device_id: i });
  }
  callAnswer(a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/answer", device_id: a });
  }
  callEnd(a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/end", device_id: a });
  }
  monitorWatch(a, i) {
    return this.monitorSubscribe(i, { type: "ha_dialog_ui/monitor/watch", view_id: a });
  }
  monitorAudio(a, i) {
    return this.monitorSubscribe(i, { type: "ha_dialog_ui/monitor/listen", node_id: a });
  }
  monitorSubscribe(a, i) {
    const c = this.hass.connection;
    return c.subscribeMessage ? c.subscribeMessage(a, i) : Promise.reject(new Error("Подписки Home Assistant недоступны"));
  }
  monitorStart(a, i, c) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/monitor/start", view_id: a, source_device_id: i, ...c ? { listener_device_id: c } : {} });
  }
  monitorStop(a, i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/monitor/stop", view_id: a, device_id: i });
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
  async getPage(a, i, c, d) {
    return await this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      ...i ? { page: i } : {},
      ...c ? { page_size: c } : {},
      ...d ? { query: d } : {}
    });
  }
  async getAllRecords(a, i = 100) {
    const c = await this.getPage(a, 1, i), d = (c == null ? void 0 : c.total_pages) ?? 1, f = Array.isArray(c == null ? void 0 : c.data) ? c.data : Array.isArray(c == null ? void 0 : c.script_actions) ? c.script_actions : [];
    return d <= 1 ? f : (await Promise.all(
      Array.from(
        { length: d - 1 },
        (h, g) => this.getPage(a, g + 2, i)
      )
    )).reduce((h, g) => {
      const w = Array.isArray(g == null ? void 0 : g.data) ? g.data : Array.isArray(g == null ? void 0 : g.script_actions) ? g.script_actions : [];
      return [...h, ...w];
    }, f);
  }
  async getRecord(a, i) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      uuid: a
    });
  }
  async saveData(a, i) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      data: a
    });
  }
  async updateRecord(a, i, c) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      uuid: a,
      data: c
    });
  }
  async updateRecordStatus(a, i, c) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      uuid: i,
      status: c
    });
  }
  async searchAssistantCommands(a, i) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      query: a
    });
  }
  async deleteRecord(a, i) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      uuid: a
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((a) => {
      const i = String(a.entity_id || "");
      return i.startsWith("media_player.") || i.startsWith("speaker.");
    }).map((a) => {
      var i;
      return {
        id: a.entity_id,
        name: ((i = a.attributes) == null ? void 0 : i.friendly_name) ?? a.entity_id
      };
    });
  }
  async getLocalMusicOptions() {
    const a = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i, i = [
      "media-source://media_source/local",
      "media-source://media_source"
    ], c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), f = [];
    let p = !1, h;
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
            const N = "media-source://media_source/local/", P = C.startsWith(N) ? C.slice(N.length) : C;
            d.set(P, {
              value: P,
              label: b
            });
          }
        }
      }));
    };
    for (const w of i)
      try {
        await g(w), p = !0;
      } catch (y) {
        h = y;
      }
    if (d.size === 0) {
      if (f.length > 0) throw f[0];
      if (!p) throw h;
    }
    return Array.from(d.values()).sort(
      (w, y) => w.label.localeCompare(y.label)
    );
  }
  getScripts() {
    return Object.values(this.hass.states).filter((a) => a.entity_id.startsWith("script.")).map((a) => {
      var i;
      return {
        entity_id: a.entity_id,
        name: ((i = a.attributes) == null ? void 0 : i.friendly_name) ?? a.entity_id
      };
    });
  }
}
function Pp(r) {
  var a;
  return (a = r == null ? void 0 : r.connection) != null && a.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function Bk() {
  return Pp(window.hass);
}
function Uk({
  children: r,
  hass: a
}) {
  const [i, c] = v.useState(null), [d, f] = v.useState(0), p = v.useRef(null), [h, g] = v.useState(!1), [w, y] = v.useState(!1);
  return v.useEffect(() => {
    let x = !0;
    c(null);
    async function k() {
      const C = a ? Pp(a) : await Bk();
      if (!x) return;
      p.current ? p.current.setHass(C) : p.current = new Wk(C);
      const b = C.user ?? await C.connection.sendMessagePromise({ type: "auth/current_user" });
      x && (g((b == null ? void 0 : b.is_admin) === !0), y(!0));
    }
    return k().catch((C) => {
      x && c(Ct(C));
    }), () => {
      x = !1;
    };
  }, [a, d]), i ? /* @__PURE__ */ o.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ o.jsx(Ke, { error: i, retry: () => f((x) => x + 1) }) }) : !w || !p.current ? /* @__PURE__ */ o.jsx(qs, { label: _("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ o.jsx(vp.Provider, { value: p.current, children: /* @__PURE__ */ o.jsx(fp.Provider, { value: h, children: r }) });
}
function Vk({ hass: r }) {
  return /* @__PURE__ */ o.jsx(ay, { children: /* @__PURE__ */ o.jsx(Uk, { hass: r, children: /* @__PURE__ */ o.jsx(Fk, {}) }) });
}
const Rf = "ha-dialog-ui-panel", Pf = "ha-dialog-ui-style";
class qk extends HTMLElement {
  constructor() {
    super(...arguments);
    be(this, "root");
    be(this, "container");
    be(this, "layoutObserver");
    be(this, "updateViewport", () => {
      const i = Math.max(0, this.getBoundingClientRect().top + window.scrollY);
      this.style.setProperty("--ha-dialog-ui-available-height", `${Math.max(0, window.innerHeight - i)}px`);
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
  set hass(i) {
    this.hassValue = i, this.renderTimer === void 0 && (this.renderTimer = window.setTimeout(() => {
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
    var i;
    window.removeEventListener("resize", this.updateViewport), (i = this.layoutObserver) == null || i.disconnect(), this.layoutObserver = void 0, document.removeEventListener("visibilitychange", this.resume), window.removeEventListener("pageshow", this.resume), this.renderTimer !== void 0 && (window.clearTimeout(this.renderTimer), this.renderTimer = void 0), queueMicrotask(() => {
      var c;
      this.isConnected || ((c = this.root) == null || c.unmount(), this.root = void 0);
    });
  }
  loadStyles() {
    const i = this.ensureShadowRoot();
    if (i.getElementById(Pf)) return;
    const c = document.createElement("style");
    c.id = Pf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px;min-height:var(--ha-dialog-ui-available-height, 100dvh)}.panelRenderRecovery{display:flex;flex-direction:column;height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;box-sizing:border-box}.panelRecoveryNavigation{flex-shrink:0;min-width:0}.panelRecoveryNavigation>nav{display:inline-flex;flex-wrap:wrap;gap:8px}.panelRecoveryNavigation>nav a{padding:10px 14px;border:1px solid var(--border);border-radius:12px}.panelRecoveryNavigation>nav a:hover,.panelRecoveryNavigation>nav a:focus-visible{background:var(--surface-hover)}.panelRecoveryContent{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px 0}.panelRecoveryMessage{width:100%;max-width:36rem;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center}.panelRecoveryMessage p{margin:0;font-size:clamp(16px,2vw,20px);line-height:1.6;overflow-wrap:anywhere}.panelRecoveryMessage>button{align-self:center;max-width:100%;min-height:46px}@media(max-width:768px){.panelRenderRecovery{padding:16px}.panelRecoveryContent{padding:20px 8px}}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._tabs_1vwxg_1{display:inline-flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_1vwxg_16{position:relative}._tab_1vwxg_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_1vwxg_1:hover{color:var(--text);background:var(--control-background)}._tab_1vwxg_1:active{transform:scale(.98)}._active_1vwxg_49{color:var(--text);background:var(--primary);box-shadow:none}._tab_1vwxg_1>span{margin-left:5px}._menu_1vwxg_59{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_1vwxg_76{margin-left:8px}._tab_1vwxg_1[aria-expanded=true] ._chevron_1vwxg_76{transform:rotate(180deg)}._tab_1vwxg_1:focus-visible,._menuItem_1vwxg_84:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_1vwxg_84{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_1vwxg_84:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_1vwxg_84._active_1vwxg_49{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_1vwxg_1{flex-wrap:wrap;max-width:100%}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._container_x92qn_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_x92qn_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_x92qn_9:empty{display:none}._hidden_x92qn_20{visibility:hidden}._overlay_x92qn_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_x92qn_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_x92qn_24 ._card_x92qn_32{flex:1;min-height:0}._title_x92qn_51,._subtitle_x92qn_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_x92qn_1 1.4s ease-in-out infinite}._title_x92qn_51{width:45%;max-width:320px;height:18px}._subtitle_x92qn_51{width:25%;max-width:180px;height:13px}._srOnly_x92qn_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_x92qn_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_x92qn_51,._subtitle_x92qn_51{animation:none}}._grid_x92qn_89{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px}._grid_x92qn_89 ._card_x92qn_32{min-height:160px}._loader_1tvqb_1{width:100%;min-width:0;box-sizing:border-box}._fullscreen_1tvqb_7{min-height:100vh;padding:28px}@media(max-width:768px){._fullscreen_1tvqb_7{padding:16px}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._toast_1g76h_1{position:fixed;z-index:10001;top:max(16px,env(safe-area-inset-top));left:50%;transform:translate(-50%);width:max-content;max-width:min(560px,100% - 32px);box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;border:1px solid var(--primary);border-radius:16px;background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 32px var(--shadow-floating);line-height:1.5;overflow-wrap:anywhere}._toast_1g76h_1>svg{flex-shrink:0;color:var(--primary)}._toast_1g76h_1 button{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:36px;min-height:36px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}._toast_1g76h_1 button:hover{background:var(--surface-hover)}._warning_1g76h_43{border-color:var(--danger)}._warning_1g76h_43>svg{color:var(--danger)}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._fields_d4bkn_1{display:flex;flex-direction:column;gap:24px;min-width:0}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}._page_375kk_1{color:var(--text);min-width:0}._title_375kk_6{margin:0 0 32px;font-size:40px;line-height:1.2;letter-spacing:-.04em}._hint_375kk_13{color:var(--text-secondary);line-height:1.6}._grid_375kk_18{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px}._device_375kk_24{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border);border-radius:20px;background:var(--surface);color:var(--text);font:inherit;cursor:pointer;min-width:0}._device_375kk_24 strong{overflow-wrap:anywhere;font-size:18px}._device_375kk_24 span{color:var(--text-secondary)}._device_375kk_24:hover,._device_375kk_24:focus-visible{border-color:var(--primary)}._active_375kk_53{border-color:var(--primary)}._active_375kk_53 svg{color:var(--primary)}._status_375kk_61{display:flex;align-items:center;gap:8px;margin-bottom:24px}._actions_375kk_68{display:flex;gap:12px;width:100%}._actions_375kk_68>button{flex:1;min-width:0}._actions_375kk_68 button{display:flex;align-items:center;justify-content:center;gap:8px}@media(max-width:768px){._title_375kk_6{display:none}}._origin_375kk_91{display:flex;align-items:center;flex-wrap:wrap;gap:10px;line-height:1.6}._origin_375kk_91 svg{flex-shrink:0;color:var(--primary)}._phoneStage_375kk_104{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;min-height:240px;padding:24px 0}._avatar_375kk_115{display:grid;place-items:center;width:106px;height:106px;border-radius:50%;color:var(--primary);background:color-mix(in srgb,var(--primary) 12%,var(--surface));border:1px solid color-mix(in srgb,var(--primary) 25%,var(--border))}._phoneStage_375kk_104 h2{margin:10px 0 0;font-size:26px;overflow-wrap:anywhere}._phoneStatus_375kk_132{display:flex;gap:8px;align-items:center;color:var(--text-secondary)}._duration_375kk_139{font-size:20px;font-variant-numeric:tabular-nums;letter-spacing:2px}._phoneStage_375kk_104 p{margin:0;font-size:13px}._phoneFooter_375kk_150{width:100%;display:flex;flex-direction:column;align-items:stretch;gap:18px}._callControls_375kk_158{display:flex;justify-content:center;gap:clamp(16px,5vw,48px)}._control_375kk_164{display:flex;flex-direction:column;align-items:center;gap:9px;min-width:74px}._control_375kk_164>span{font-size:12px;color:var(--text-secondary)}._control_375kk_164 ._roundControl_375kk_177,._control_375kk_164 ._hangup_375kk_177{width:62px;height:62px;min-width:62px;padding:0;display:grid;place-items:center;border-radius:50%}._control_375kk_164 ._controlSelected_375kk_187{color:var(--primary);background:color-mix(in srgb,var(--primary) 18%,var(--surface));border-color:var(--primary)}._control_375kk_164 ._hangup_375kk_177{width:72px;height:72px;background:#cf3549;color:#fff;border-color:#cf3549}._control_375kk_164 ._hangup_375kk_177:hover{background:#b9273a}._routeHint_375kk_205{display:flex;justify-content:center;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary)}._routeName_375kk_214{text-align:center;color:var(--text-secondary);overflow-wrap:anywhere}@media(max-width:768px){._phoneStage_375kk_104{min-height:220px}._phoneFooter_375kk_150{padding-bottom:max(8px,env(safe-area-inset-bottom))}}._control_375kk_164 ._dial_375kk_228{width:72px;height:72px;min-width:72px;padding:0;display:grid;place-items:center;border-radius:50%;background:#23875c;border-color:#23875c;color:#fff}._control_375kk_164 ._dial_375kk_228:hover:not(:disabled){background:#1a714b}._page_10u8g_1{box-sizing:border-box;min-width:0;color:var(--text)}._heading_10u8g_7{display:flex;align-items:center;gap:16px;margin:0 0 32px}._heading_10u8g_7 h1{font-size:40px;line-height:1.2;letter-spacing:-.04em;margin:0}._heading_10u8g_7 p{color:var(--text-secondary);line-height:1.6;margin:8px 0 0}._grid_10u8g_27{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px}._device_10u8g_33{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border, #333);background:var(--surface, #1c1c1c);color:var(--text);border-radius:20px;font:inherit;cursor:pointer;min-width:0}._device_10u8g_33 strong{font-size:18px;overflow-wrap:anywhere}._device_10u8g_33 span,._device_10u8g_33 small{color:var(--text-secondary)}._device_10u8g_33:hover,._device_10u8g_33:focus-visible{border-color:var(--primary, #03a9f4)}._deviceLive_10u8g_64{border-color:#3da98c}._deviceLive_10u8g_64 svg{color:#3da98c}._playback_10u8g_72{position:relative;border:1px solid var(--primary, #03a9f4);background:color-mix(in srgb,var(--primary, #03a9f4) 10%,transparent);border-radius:14px;overflow:hidden}._playback_10u8g_72>svg{position:absolute;left:18px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--primary)}._playback_10u8g_72 ._playbackSelect_10u8g_89{padding:20px 54px;text-align:center;text-align-last:center;border:0;background:transparent;border-radius:14px;min-height:48px;text-overflow:ellipsis}._playback_10u8g_72:has(select:disabled){opacity:.65}._playback_10u8g_72 ._playbackSelect_10u8g_89:focus{box-shadow:none}._playback_10u8g_72:focus-within{outline:2px solid var(--primary, #03a9f4);outline-offset:3px}._statusRow_10u8g_113{display:flex;align-items:center;gap:8px;margin-bottom:20px}._status_10u8g_113{display:flex;gap:10px;align-items:center;padding:16px 0;color:var(--text-secondary)}._live_10u8g_128{color:#32aa87}._hint_10u8g_132{font-size:14px;color:var(--text-secondary);line-height:1.6}._footer_10u8g_138{display:flex;gap:12px;width:100%}._footer_10u8g_138>button{flex:1;min-width:0}._empty_10u8g_149{padding:28px;border:1px dashed var(--border, #333);border-radius:18px;line-height:1.7}._error_10u8g_156{color:var(--danger, #ed8291);line-height:1.5}@media(max-width:768px){._heading_10u8g_7{margin:0}._heading_10u8g_7 h1{display:none}._grid_10u8g_27{grid-template-columns:1fr}._heading_10u8g_7>svg{display:none}}\n", i.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), i.appendChild(this.container)), this.root = zm.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ o.jsx(Mf.StrictMode, { children: /* @__PURE__ */ o.jsx(mp, { children: /* @__PURE__ */ o.jsx(Vk, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(Rf) || customElements.define(Rf, qk);
