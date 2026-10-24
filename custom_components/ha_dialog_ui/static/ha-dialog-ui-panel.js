var wh = Object.defineProperty;
var Sh = (r, i, a) => i in r ? wh(r, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[i] = a;
var Ze = (r, i, a) => Sh(r, typeof i != "symbol" ? i + "" : i, a);
function Rf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var cl = { exports: {} }, bs = {}, dl = { exports: {} }, he = {};
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
function kh() {
  if (Kd) return he;
  Kd = 1;
  var r = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function S(b) {
    return b === null || typeof b != "object" ? null : (b = _ && b[_] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, N = Object.assign, j = {};
  function T(b, L, oe) {
    this.props = b, this.context = L, this.refs = j, this.updater = oe || C;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(b, L) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, L, "setState");
  }, T.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function E() {
  }
  E.prototype = T.prototype;
  function O(b, L, oe) {
    this.props = b, this.context = L, this.refs = j, this.updater = oe || C;
  }
  var A = O.prototype = new E();
  A.constructor = O, N(A, T.prototype), A.isPureReactComponent = !0;
  var H = Array.isArray, B = Object.prototype.hasOwnProperty, M = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(b, L, oe) {
    var fe, ye = {}, ge = null, je = null;
    if (L != null) for (fe in L.ref !== void 0 && (je = L.ref), L.key !== void 0 && (ge = "" + L.key), L) B.call(L, fe) && !X.hasOwnProperty(fe) && (ye[fe] = L[fe]);
    var xe = arguments.length - 2;
    if (xe === 1) ye.children = oe;
    else if (1 < xe) {
      for (var Te = Array(xe), at = 0; at < xe; at++) Te[at] = arguments[at + 2];
      ye.children = Te;
    }
    if (b && b.defaultProps) for (fe in xe = b.defaultProps, xe) ye[fe] === void 0 && (ye[fe] = xe[fe]);
    return { $$typeof: r, type: b, key: ge, ref: je, props: ye, _owner: M.current };
  }
  function G(b, L) {
    return { $$typeof: r, type: b.type, key: L, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function pe(b) {
    return typeof b == "object" && b !== null && b.$$typeof === r;
  }
  function ce(b) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(oe) {
      return L[oe];
    });
  }
  var Ne = /\/+/g;
  function Ce(b, L) {
    return typeof b == "object" && b !== null && b.key != null ? ce("" + b.key) : L.toString(36);
  }
  function me(b, L, oe, fe, ye) {
    var ge = typeof b;
    (ge === "undefined" || ge === "boolean") && (b = null);
    var je = !1;
    if (b === null) je = !0;
    else switch (ge) {
      case "string":
      case "number":
        je = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case r:
          case i:
            je = !0;
        }
    }
    if (je) return je = b, ye = ye(je), b = fe === "" ? "." + Ce(je, 0) : fe, H(ye) ? (oe = "", b != null && (oe = b.replace(Ne, "$&/") + "/"), me(ye, L, oe, "", function(at) {
      return at;
    })) : ye != null && (pe(ye) && (ye = G(ye, oe + (!ye.key || je && je.key === ye.key ? "" : ("" + ye.key).replace(Ne, "$&/") + "/") + b)), L.push(ye)), 1;
    if (je = 0, fe = fe === "" ? "." : fe + ":", H(b)) for (var xe = 0; xe < b.length; xe++) {
      ge = b[xe];
      var Te = fe + Ce(ge, xe);
      je += me(ge, L, oe, Te, ye);
    }
    else if (Te = S(b), typeof Te == "function") for (b = Te.call(b), xe = 0; !(ge = b.next()).done; ) ge = ge.value, Te = fe + Ce(ge, xe++), je += me(ge, L, oe, Te, ye);
    else if (ge === "object") throw L = String(b), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return je;
  }
  function ve(b, L, oe) {
    if (b == null) return b;
    var fe = [], ye = 0;
    return me(b, fe, "", "", function(ge) {
      return L.call(oe, ge, ye++);
    }), fe;
  }
  function ke(b) {
    if (b._status === -1) {
      var L = b._result;
      L = L(), L.then(function(oe) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = oe);
      }, function(oe) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = oe);
      }), b._status === -1 && (b._status = 0, b._result = L);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var W = { current: null }, z = { transition: null }, F = { ReactCurrentDispatcher: W, ReactCurrentBatchConfig: z, ReactCurrentOwner: M };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return he.Children = { map: ve, forEach: function(b, L, oe) {
    ve(b, function() {
      L.apply(this, arguments);
    }, oe);
  }, count: function(b) {
    var L = 0;
    return ve(b, function() {
      L++;
    }), L;
  }, toArray: function(b) {
    return ve(b, function(L) {
      return L;
    }) || [];
  }, only: function(b) {
    if (!pe(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, he.Component = T, he.Fragment = a, he.Profiler = d, he.PureComponent = O, he.StrictMode = c, he.Suspense = g, he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, he.act = Q, he.cloneElement = function(b, L, oe) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var fe = N({}, b.props), ye = b.key, ge = b.ref, je = b._owner;
    if (L != null) {
      if (L.ref !== void 0 && (ge = L.ref, je = M.current), L.key !== void 0 && (ye = "" + L.key), b.type && b.type.defaultProps) var xe = b.type.defaultProps;
      for (Te in L) B.call(L, Te) && !X.hasOwnProperty(Te) && (fe[Te] = L[Te] === void 0 && xe !== void 0 ? xe[Te] : L[Te]);
    }
    var Te = arguments.length - 2;
    if (Te === 1) fe.children = oe;
    else if (1 < Te) {
      xe = Array(Te);
      for (var at = 0; at < Te; at++) xe[at] = arguments[at + 2];
      fe.children = xe;
    }
    return { $$typeof: r, type: b.type, key: ye, ref: ge, props: fe, _owner: je };
  }, he.createContext = function(b) {
    return b = { $$typeof: p, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: f, _context: b }, b.Consumer = b;
  }, he.createElement = U, he.createFactory = function(b) {
    var L = U.bind(null, b);
    return L.type = b, L;
  }, he.createRef = function() {
    return { current: null };
  }, he.forwardRef = function(b) {
    return { $$typeof: h, render: b };
  }, he.isValidElement = pe, he.lazy = function(b) {
    return { $$typeof: y, _payload: { _status: -1, _result: b }, _init: ke };
  }, he.memo = function(b, L) {
    return { $$typeof: w, type: b, compare: L === void 0 ? null : L };
  }, he.startTransition = function(b) {
    var L = z.transition;
    z.transition = {};
    try {
      b();
    } finally {
      z.transition = L;
    }
  }, he.unstable_act = Q, he.useCallback = function(b, L) {
    return W.current.useCallback(b, L);
  }, he.useContext = function(b) {
    return W.current.useContext(b);
  }, he.useDebugValue = function() {
  }, he.useDeferredValue = function(b) {
    return W.current.useDeferredValue(b);
  }, he.useEffect = function(b, L) {
    return W.current.useEffect(b, L);
  }, he.useId = function() {
    return W.current.useId();
  }, he.useImperativeHandle = function(b, L, oe) {
    return W.current.useImperativeHandle(b, L, oe);
  }, he.useInsertionEffect = function(b, L) {
    return W.current.useInsertionEffect(b, L);
  }, he.useLayoutEffect = function(b, L) {
    return W.current.useLayoutEffect(b, L);
  }, he.useMemo = function(b, L) {
    return W.current.useMemo(b, L);
  }, he.useReducer = function(b, L, oe) {
    return W.current.useReducer(b, L, oe);
  }, he.useRef = function(b) {
    return W.current.useRef(b);
  }, he.useState = function(b) {
    return W.current.useState(b);
  }, he.useSyncExternalStore = function(b, L, oe) {
    return W.current.useSyncExternalStore(b, L, oe);
  }, he.useTransition = function() {
    return W.current.useTransition();
  }, he.version = "18.3.1", he;
}
var Yd;
function Il() {
  return Yd || (Yd = 1, dl.exports = kh()), dl.exports;
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
function jh() {
  if (Gd) return bs;
  Gd = 1;
  var r = Il(), i = Symbol.for("react.element"), a = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, g, w) {
    var y, _ = {}, S = null, C = null;
    w !== void 0 && (S = "" + w), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (_[y] = g[y]);
    if (h && h.defaultProps) for (y in g = h.defaultProps, g) _[y] === void 0 && (_[y] = g[y]);
    return { $$typeof: i, type: h, key: S, ref: C, props: _, _owner: d.current };
  }
  return bs.Fragment = a, bs.jsx = p, bs.jsxs = p, bs;
}
var Jd;
function Ch() {
  return Jd || (Jd = 1, cl.exports = jh()), cl.exports;
}
var o = Ch(), v = Il();
const bf = /* @__PURE__ */ Rf(v);
var Go = {}, fl = { exports: {} }, yt = {}, pl = { exports: {} }, ml = {};
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
function Eh() {
  return Xd || (Xd = 1, (function(r) {
    function i(z, F) {
      var Q = z.length;
      z.push(F);
      e: for (; 0 < Q; ) {
        var b = Q - 1 >>> 1, L = z[b];
        if (0 < d(L, F)) z[b] = F, z[Q] = L, Q = b;
        else break e;
      }
    }
    function a(z) {
      return z.length === 0 ? null : z[0];
    }
    function c(z) {
      if (z.length === 0) return null;
      var F = z[0], Q = z.pop();
      if (Q !== F) {
        z[0] = Q;
        e: for (var b = 0, L = z.length, oe = L >>> 1; b < oe; ) {
          var fe = 2 * (b + 1) - 1, ye = z[fe], ge = fe + 1, je = z[ge];
          if (0 > d(ye, Q)) ge < L && 0 > d(je, ye) ? (z[b] = je, z[ge] = Q, b = ge) : (z[b] = ye, z[fe] = Q, b = fe);
          else if (ge < L && 0 > d(je, Q)) z[b] = je, z[ge] = Q, b = ge;
          else break e;
        }
      }
      return F;
    }
    function d(z, F) {
      var Q = z.sortIndex - F.sortIndex;
      return Q !== 0 ? Q : z.id - F.id;
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
    var g = [], w = [], y = 1, _ = null, S = 3, C = !1, N = !1, j = !1, T = typeof setTimeout == "function" ? setTimeout : null, E = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function A(z) {
      for (var F = a(w); F !== null; ) {
        if (F.callback === null) c(w);
        else if (F.startTime <= z) c(w), F.sortIndex = F.expirationTime, i(g, F);
        else break;
        F = a(w);
      }
    }
    function H(z) {
      if (j = !1, A(z), !N) if (a(g) !== null) N = !0, ke(B);
      else {
        var F = a(w);
        F !== null && W(H, F.startTime - z);
      }
    }
    function B(z, F) {
      N = !1, j && (j = !1, E(U), U = -1), C = !0;
      var Q = S;
      try {
        for (A(F), _ = a(g); _ !== null && (!(_.expirationTime > F) || z && !ce()); ) {
          var b = _.callback;
          if (typeof b == "function") {
            _.callback = null, S = _.priorityLevel;
            var L = b(_.expirationTime <= F);
            F = r.unstable_now(), typeof L == "function" ? _.callback = L : _ === a(g) && c(g), A(F);
          } else c(g);
          _ = a(g);
        }
        if (_ !== null) var oe = !0;
        else {
          var fe = a(w);
          fe !== null && W(H, fe.startTime - F), oe = !1;
        }
        return oe;
      } finally {
        _ = null, S = Q, C = !1;
      }
    }
    var M = !1, X = null, U = -1, G = 5, pe = -1;
    function ce() {
      return !(r.unstable_now() - pe < G);
    }
    function Ne() {
      if (X !== null) {
        var z = r.unstable_now();
        pe = z;
        var F = !0;
        try {
          F = X(!0, z);
        } finally {
          F ? Ce() : (M = !1, X = null);
        }
      } else M = !1;
    }
    var Ce;
    if (typeof O == "function") Ce = function() {
      O(Ne);
    };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), ve = me.port2;
      me.port1.onmessage = Ne, Ce = function() {
        ve.postMessage(null);
      };
    } else Ce = function() {
      T(Ne, 0);
    };
    function ke(z) {
      X = z, M || (M = !0, Ce());
    }
    function W(z, F) {
      U = T(function() {
        z(r.unstable_now());
      }, F);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, r.unstable_continueExecution = function() {
      N || C || (N = !0, ke(B));
    }, r.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < z ? Math.floor(1e3 / z) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, r.unstable_getFirstCallbackNode = function() {
      return a(g);
    }, r.unstable_next = function(z) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = S;
      }
      var Q = S;
      S = F;
      try {
        return z();
      } finally {
        S = Q;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(z, F) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var Q = S;
      S = z;
      try {
        return F();
      } finally {
        S = Q;
      }
    }, r.unstable_scheduleCallback = function(z, F, Q) {
      var b = r.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? b + Q : b) : Q = b, z) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = Q + L, z = { id: y++, callback: F, priorityLevel: z, startTime: Q, expirationTime: L, sortIndex: -1 }, Q > b ? (z.sortIndex = Q, i(w, z), a(g) === null && z === a(w) && (j ? (E(U), U = -1) : j = !0, W(H, Q - b))) : (z.sortIndex = L, i(g, z), N || C || (N = !0, ke(B))), z;
    }, r.unstable_shouldYield = ce, r.unstable_wrapCallback = function(z) {
      var F = S;
      return function() {
        var Q = S;
        S = F;
        try {
          return z.apply(this, arguments);
        } finally {
          S = Q;
        }
      };
    };
  })(ml)), ml;
}
var Zd;
function Nh() {
  return Zd || (Zd = 1, pl.exports = Eh()), pl.exports;
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
function Th() {
  if (ef) return yt;
  ef = 1;
  var r = Il(), i = Nh();
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, _ = {};
  function S(e) {
    return g.call(_, e) ? !0 : g.call(y, e) ? !1 : w.test(e) ? _[e] = !0 : (y[e] = !0, !1);
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
  function N(e, t, n, s) {
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
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new j(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new j(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new j(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new j(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new j(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new j(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var E = /[\-:]([a-z])/g;
  function O(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      E,
      O
    );
    T[t] = new j(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(E, O);
    T[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(E, O);
    T[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function A(e, t, n, s) {
    var l = T.hasOwnProperty(t) ? T[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (N(t, n, l, s) && (n = null), s || l === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var H = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), M = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), ce = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), Ce = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Q = Object.assign, b;
  function L(e) {
    if (b === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      b = t && t[1] || "";
    }
    return `
` + b + e;
  }
  var oe = !1;
  function fe(e, t) {
    if (!e || oe) return "";
    oe = !0;
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
`), m = l.length - 1, k = u.length - 1; 1 <= m && 0 <= k && l[m] !== u[k]; ) k--;
        for (; 1 <= m && 0 <= k; m--, k--) if (l[m] !== u[k]) {
          if (m !== 1 || k !== 1)
            do
              if (m--, k--, 0 > k || l[m] !== u[k]) {
                var R = `
` + l[m].replace(" at new ", " at ");
                return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
              }
            while (1 <= m && 0 <= k);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function ye(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = fe(e.type, !1), e;
      case 11:
        return e = fe(e.type.render, !1), e;
      case 1:
        return e = fe(e.type, !0), e;
      default:
        return "";
    }
  }
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case M:
        return "Portal";
      case G:
        return "Profiler";
      case U:
        return "StrictMode";
      case Ce:
        return "Suspense";
      case me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ce:
        return (e.displayName || "Context") + ".Consumer";
      case pe:
        return (e._context.displayName || "Context") + ".Provider";
      case Ne:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ve:
        return t = e.displayName || null, t !== null ? t : ge(e.type) || "Memo";
      case ke:
        t = e._payload, e = e._init;
        try {
          return ge(e(t));
        } catch {
        }
    }
    return null;
  }
  function je(e) {
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
        return ge(t);
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
  function xe(e) {
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
  function Te(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function at(e) {
    var t = Te(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
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
  function Mn(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function Ur(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = Te(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function In(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ya(e, t) {
    var n = t.checked;
    return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function tu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = xe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function nu(e, t) {
    t = t.checked, t != null && A(e, "checked", t, !1);
  }
  function ga(e, t) {
    nu(e, t);
    var n = xe(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? _a(e, t.type, n) : t.hasOwnProperty("defaultValue") && _a(e, t.type, xe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ru(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function _a(e, t, n) {
    (t !== "number" || In(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Vr = Array.isArray;
  function ar(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, s && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function su(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (Vr(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: xe(n) };
  }
  function ou(e, t) {
    var n = xe(t.value), s = xe(t.defaultValue);
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
  function wa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Hs, lu = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Hs = Hs || document.createElement("div"), Hs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function qr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Qr = {
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
  }, Cp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qr).forEach(function(e) {
    Cp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Qr[t] = Qr[e];
    });
  });
  function uu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qr.hasOwnProperty(e) && Qr[e] ? ("" + t).trim() : t + "px";
  }
  function cu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = uu(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ep = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Sa(e, t) {
    if (t) {
      if (Ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function ka(e, t) {
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
  var ja = null;
  function Ca(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ea = null, ir = null, lr = null;
  function du(e) {
    if (e = hs(e)) {
      if (typeof Ea != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = co(t), Ea(e.stateNode, e.type, t));
    }
  }
  function fu(e) {
    ir ? lr ? lr.push(e) : lr = [e] : ir = e;
  }
  function pu() {
    if (ir) {
      var e = ir, t = lr;
      if (lr = ir = null, du(e), t) for (e = 0; e < t.length; e++) du(t[e]);
    }
  }
  function mu(e, t) {
    return e(t);
  }
  function hu() {
  }
  var Na = !1;
  function vu(e, t, n) {
    if (Na) return e(t, n);
    Na = !0;
    try {
      return mu(e, t, n);
    } finally {
      Na = !1, (ir !== null || lr !== null) && (hu(), pu());
    }
  }
  function Kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = co(n);
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
  var Ta = !1;
  if (h) try {
    var Yr = {};
    Object.defineProperty(Yr, "passive", { get: function() {
      Ta = !0;
    } }), window.addEventListener("test", Yr, Yr), window.removeEventListener("test", Yr, Yr);
  } catch {
    Ta = !1;
  }
  function Np(e, t, n, s, l, u, m, k, R) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (q) {
      this.onError(q);
    }
  }
  var Gr = !1, Ws = null, Bs = !1, Ra = null, Tp = { onError: function(e) {
    Gr = !0, Ws = e;
  } };
  function Rp(e, t, n, s, l, u, m, k, R) {
    Gr = !1, Ws = null, Np.apply(Tp, arguments);
  }
  function bp(e, t, n, s, l, u, m, k, R) {
    if (Rp.apply(this, arguments), Gr) {
      if (Gr) {
        var D = Ws;
        Gr = !1, Ws = null;
      } else throw Error(a(198));
      Bs || (Bs = !0, Ra = D);
    }
  }
  function Ln(e) {
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
    if (Ln(e) !== e) throw Error(a(188));
  }
  function Pp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Ln(e), t === null) throw Error(a(188));
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
        for (var m = !1, k = l.child; k; ) {
          if (k === n) {
            m = !0, n = l, s = u;
            break;
          }
          if (k === s) {
            m = !0, s = l, n = u;
            break;
          }
          k = k.sibling;
        }
        if (!m) {
          for (k = u.child; k; ) {
            if (k === n) {
              m = !0, n = u, s = l;
              break;
            }
            if (k === s) {
              m = !0, s = u, n = l;
              break;
            }
            k = k.sibling;
          }
          if (!m) throw Error(a(189));
        }
      }
      if (n.alternate !== s) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function _u(e) {
    return e = Pp(e), e !== null ? xu(e) : null;
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
  var wu = i.unstable_scheduleCallback, Su = i.unstable_cancelCallback, Ap = i.unstable_shouldYield, $p = i.unstable_requestPaint, De = i.unstable_now, Mp = i.unstable_getCurrentPriorityLevel, ba = i.unstable_ImmediatePriority, ku = i.unstable_UserBlockingPriority, Us = i.unstable_NormalPriority, Ip = i.unstable_LowPriority, ju = i.unstable_IdlePriority, Vs = null, Vt = null;
  function Lp(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function") try {
      Vt.onCommitFiberRoot(Vs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mt = Math.clz32 ? Math.clz32 : Op, Dp = Math.log, zp = Math.LN2;
  function Op(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Dp(e) / zp | 0) | 0;
  }
  var qs = 64, Qs = 4194304;
  function Jr(e) {
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
  function Ks(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, m = n & 268435455;
    if (m !== 0) {
      var k = m & ~l;
      k !== 0 ? s = Jr(k) : (u &= m, u !== 0 && (s = Jr(u)));
    } else m = n & ~l, m !== 0 ? s = Jr(m) : u !== 0 && (s = Jr(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Mt(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function Fp(e, t) {
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
  function Hp(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var m = 31 - Mt(u), k = 1 << m, R = l[m];
      R === -1 ? ((k & n) === 0 || (k & s) !== 0) && (l[m] = Fp(k, t)) : R <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Pa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Cu() {
    var e = qs;
    return qs <<= 1, (qs & 4194240) === 0 && (qs = 64), e;
  }
  function Aa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Xr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Mt(t), e[t] = n;
  }
  function Wp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Mt(n), u = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function $a(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Mt(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Ee = 0;
  function Eu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Nu, Ma, Tu, Ru, bu, Ia = !1, Ys = [], fn = null, pn = null, mn = null, Zr = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), hn = [], Bp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Pu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        pn = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Zr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        es.delete(t.pointerId);
    }
  }
  function ts(e, t, n, s, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = hs(t), t !== null && Ma(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Up(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return fn = ts(fn, e, t, n, s, l), !0;
      case "dragenter":
        return pn = ts(pn, e, t, n, s, l), !0;
      case "mouseover":
        return mn = ts(mn, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Zr.set(u, ts(Zr.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, es.set(u, ts(es.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function Au(e) {
    var t = Dn(e.target);
    if (t !== null) {
      var n = Ln(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = yu(n), t !== null) {
            e.blockedOn = t, bu(e.priority, function() {
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
  function Gs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        ja = s, n.target.dispatchEvent(s), ja = null;
      } else return t = hs(n), t !== null && Ma(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $u(e, t, n) {
    Gs(e) && n.delete(t);
  }
  function Vp() {
    Ia = !1, fn !== null && Gs(fn) && (fn = null), pn !== null && Gs(pn) && (pn = null), mn !== null && Gs(mn) && (mn = null), Zr.forEach($u), es.forEach($u);
  }
  function ns(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ia || (Ia = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Vp)));
  }
  function rs(e) {
    function t(l) {
      return ns(l, e);
    }
    if (0 < Ys.length) {
      ns(Ys[0], e);
      for (var n = 1; n < Ys.length; n++) {
        var s = Ys[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (fn !== null && ns(fn, e), pn !== null && ns(pn, e), mn !== null && ns(mn, e), Zr.forEach(t), es.forEach(t), n = 0; n < hn.length; n++) s = hn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Au(n), n.blockedOn === null && hn.shift();
  }
  var ur = H.ReactCurrentBatchConfig, Js = !0;
  function qp(e, t, n, s) {
    var l = Ee, u = ur.transition;
    ur.transition = null;
    try {
      Ee = 1, La(e, t, n, s);
    } finally {
      Ee = l, ur.transition = u;
    }
  }
  function Qp(e, t, n, s) {
    var l = Ee, u = ur.transition;
    ur.transition = null;
    try {
      Ee = 4, La(e, t, n, s);
    } finally {
      Ee = l, ur.transition = u;
    }
  }
  function La(e, t, n, s) {
    if (Js) {
      var l = Da(e, t, n, s);
      if (l === null) ei(e, t, s, Xs, n), Pu(e, s);
      else if (Up(l, e, t, n, s)) s.stopPropagation();
      else if (Pu(e, s), t & 4 && -1 < Bp.indexOf(e)) {
        for (; l !== null; ) {
          var u = hs(l);
          if (u !== null && Nu(u), u = Da(e, t, n, s), u === null && ei(e, t, s, Xs, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else ei(e, t, s, null, n);
    }
  }
  var Xs = null;
  function Da(e, t, n, s) {
    if (Xs = null, e = Ca(s), e = Dn(e), e !== null) if (t = Ln(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = yu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Xs = e, null;
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
        switch (Mp()) {
          case ba:
            return 1;
          case ku:
            return 4;
          case Us:
          case Ip:
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
  var vn = null, za = null, Zs = null;
  function Iu() {
    if (Zs) return Zs;
    var e, t = za, n = t.length, s, l = "value" in vn ? vn.value : vn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var m = n - e;
    for (s = 1; s <= m && t[n - s] === l[u - s]; s++) ;
    return Zs = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function eo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function to() {
    return !0;
  }
  function Lu() {
    return !1;
  }
  function xt(e) {
    function t(n, s, l, u, m) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? to : Lu, this.isPropagationStopped = Lu, this;
    }
    return Q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = to);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = to);
    }, persist: function() {
    }, isPersistent: to }), t;
  }
  var cr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Oa = xt(cr), ss = Q({}, cr, { view: 0, detail: 0 }), Kp = xt(ss), Fa, Ha, os, no = Q({}, ss, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ba, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== os && (os && e.type === "mousemove" ? (Fa = e.screenX - os.screenX, Ha = e.screenY - os.screenY) : Ha = Fa = 0, os = e), Fa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ha;
  } }), Du = xt(no), Yp = Q({}, no, { dataTransfer: 0 }), Gp = xt(Yp), Jp = Q({}, ss, { relatedTarget: 0 }), Wa = xt(Jp), Xp = Q({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zp = xt(Xp), em = Q({}, cr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), tm = xt(em), nm = Q({}, cr, { data: 0 }), zu = xt(nm), rm = {
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
  }, sm = {
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
  }, om = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function am(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = om[e]) ? !!t[e] : !1;
  }
  function Ba() {
    return am;
  }
  var im = Q({}, ss, { key: function(e) {
    if (e.key) {
      var t = rm[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = eo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sm[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ba, charCode: function(e) {
    return e.type === "keypress" ? eo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), lm = xt(im), um = Q({}, no, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ou = xt(um), cm = Q({}, ss, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ba }), dm = xt(cm), fm = Q({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pm = xt(fm), mm = Q({}, no, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hm = xt(mm), vm = [9, 13, 27, 32], Ua = h && "CompositionEvent" in window, as = null;
  h && "documentMode" in document && (as = document.documentMode);
  var ym = h && "TextEvent" in window && !as, Fu = h && (!Ua || as && 8 < as && 11 >= as), Hu = " ", Wu = !1;
  function Bu(e, t) {
    switch (e) {
      case "keyup":
        return vm.indexOf(t.keyCode) !== -1;
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
  var dr = !1;
  function gm(e, t) {
    switch (e) {
      case "compositionend":
        return Uu(t);
      case "keypress":
        return t.which !== 32 ? null : (Wu = !0, Hu);
      case "textInput":
        return e = t.data, e === Hu && Wu ? null : e;
      default:
        return null;
    }
  }
  function _m(e, t) {
    if (dr) return e === "compositionend" || !Ua && Bu(e, t) ? (e = Iu(), Zs = za = vn = null, dr = !1, e) : null;
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
        return Fu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xm[e.type] : t === "textarea";
  }
  function qu(e, t, n, s) {
    fu(s), t = io(t, "onChange"), 0 < t.length && (n = new Oa("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var is = null, ls = null;
  function wm(e) {
    cc(e, 0);
  }
  function ro(e) {
    var t = vr(e);
    if (Ur(t)) return e;
  }
  function Sm(e, t) {
    if (e === "change") return t;
  }
  var Qu = !1;
  if (h) {
    var Va;
    if (h) {
      var qa = "oninput" in document;
      if (!qa) {
        var Ku = document.createElement("div");
        Ku.setAttribute("oninput", "return;"), qa = typeof Ku.oninput == "function";
      }
      Va = qa;
    } else Va = !1;
    Qu = Va && (!document.documentMode || 9 < document.documentMode);
  }
  function Yu() {
    is && (is.detachEvent("onpropertychange", Gu), ls = is = null);
  }
  function Gu(e) {
    if (e.propertyName === "value" && ro(ls)) {
      var t = [];
      qu(t, ls, e, Ca(e)), vu(wm, t);
    }
  }
  function km(e, t, n) {
    e === "focusin" ? (Yu(), is = t, ls = n, is.attachEvent("onpropertychange", Gu)) : e === "focusout" && Yu();
  }
  function jm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ro(ls);
  }
  function Cm(e, t) {
    if (e === "click") return ro(t);
  }
  function Em(e, t) {
    if (e === "input" || e === "change") return ro(t);
  }
  function Nm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var It = typeof Object.is == "function" ? Object.is : Nm;
  function us(e, t) {
    if (It(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!g.call(t, l) || !It(e[l], t[l])) return !1;
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
    for (var e = window, t = In(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = In(e.document);
    }
    return t;
  }
  function Qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Tm(e) {
    var t = ec(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zu(n.ownerDocument.documentElement, n)) {
      if (s !== null && Qa(n)) {
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
  var Rm = h && "documentMode" in document && 11 >= document.documentMode, fr = null, Ka = null, cs = null, Ya = !1;
  function tc(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ya || fr == null || fr !== In(s) || (s = fr, "selectionStart" in s && Qa(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), cs && us(cs, s) || (cs = s, s = io(Ka, "onSelect"), 0 < s.length && (t = new Oa("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = fr)));
  }
  function so(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var pr = { animationend: so("Animation", "AnimationEnd"), animationiteration: so("Animation", "AnimationIteration"), animationstart: so("Animation", "AnimationStart"), transitionend: so("Transition", "TransitionEnd") }, Ga = {}, nc = {};
  h && (nc = document.createElement("div").style, "AnimationEvent" in window || (delete pr.animationend.animation, delete pr.animationiteration.animation, delete pr.animationstart.animation), "TransitionEvent" in window || delete pr.transitionend.transition);
  function oo(e) {
    if (Ga[e]) return Ga[e];
    if (!pr[e]) return e;
    var t = pr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in nc) return Ga[e] = t[n];
    return e;
  }
  var rc = oo("animationend"), sc = oo("animationiteration"), oc = oo("animationstart"), ac = oo("transitionend"), ic = /* @__PURE__ */ new Map(), lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yn(e, t) {
    ic.set(e, t), f(t, [e]);
  }
  for (var Ja = 0; Ja < lc.length; Ja++) {
    var Xa = lc[Ja], bm = Xa.toLowerCase(), Pm = Xa[0].toUpperCase() + Xa.slice(1);
    yn(bm, "on" + Pm);
  }
  yn(rc, "onAnimationEnd"), yn(sc, "onAnimationIteration"), yn(oc, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(ac, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Am = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
  function uc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, bp(s, t, void 0, e), e.currentTarget = null;
  }
  function cc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var m = s.length - 1; 0 <= m; m--) {
          var k = s[m], R = k.instance, D = k.currentTarget;
          if (k = k.listener, R !== u && l.isPropagationStopped()) break e;
          uc(l, k, D), u = R;
        }
        else for (m = 0; m < s.length; m++) {
          if (k = s[m], R = k.instance, D = k.currentTarget, k = k.listener, R !== u && l.isPropagationStopped()) break e;
          uc(l, k, D), u = R;
        }
      }
    }
    if (Bs) throw e = Ra, Bs = !1, Ra = null, e;
  }
  function be(e, t) {
    var n = t[ai];
    n === void 0 && (n = t[ai] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (dc(t, e, 2, !1), n.add(s));
  }
  function Za(e, t, n) {
    var s = 0;
    t && (s |= 4), dc(n, e, s, t);
  }
  var ao = "_reactListening" + Math.random().toString(36).slice(2);
  function fs(e) {
    if (!e[ao]) {
      e[ao] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Am.has(n) || Za(n, !1, e), Za(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ao] || (t[ao] = !0, Za("selectionchange", !1, t));
    }
  }
  function dc(e, t, n, s) {
    switch (Mu(t)) {
      case 1:
        var l = qp;
        break;
      case 4:
        l = Qp;
        break;
      default:
        l = La;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ta || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function ei(e, t, n, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var m = s.tag;
      if (m === 3 || m === 4) {
        var k = s.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (m === 4) for (m = s.return; m !== null; ) {
          var R = m.tag;
          if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === l || R.nodeType === 8 && R.parentNode === l)) return;
          m = m.return;
        }
        for (; k !== null; ) {
          if (m = Dn(k), m === null) return;
          if (R = m.tag, R === 5 || R === 6) {
            s = u = m;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    vu(function() {
      var D = u, q = Ca(n), K = [];
      e: {
        var V = ic.get(e);
        if (V !== void 0) {
          var Z = Oa, te = e;
          switch (e) {
            case "keypress":
              if (eo(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = lm;
              break;
            case "focusin":
              te = "focus", Z = Wa;
              break;
            case "focusout":
              te = "blur", Z = Wa;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Wa;
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
              Z = Du;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Gp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = dm;
              break;
            case rc:
            case sc:
            case oc:
              Z = Zp;
              break;
            case ac:
              Z = pm;
              break;
            case "scroll":
              Z = Kp;
              break;
            case "wheel":
              Z = hm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = tm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Ou;
          }
          var ne = (t & 4) !== 0, ze = !ne && e === "scroll", $ = ne ? V !== null ? V + "Capture" : null : V;
          ne = [];
          for (var P = D, I; P !== null; ) {
            I = P;
            var Y = I.stateNode;
            if (I.tag === 5 && Y !== null && (I = Y, $ !== null && (Y = Kr(P, $), Y != null && ne.push(ps(P, Y, I)))), ze) break;
            P = P.return;
          }
          0 < ne.length && (V = new Z(V, te, null, n, q), K.push({ event: V, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", V && n !== ja && (te = n.relatedTarget || n.fromElement) && (Dn(te) || te[Xt])) break e;
          if ((Z || V) && (V = q.window === q ? q : (V = q.ownerDocument) ? V.defaultView || V.parentWindow : window, Z ? (te = n.relatedTarget || n.toElement, Z = D, te = te ? Dn(te) : null, te !== null && (ze = Ln(te), te !== ze || te.tag !== 5 && te.tag !== 6) && (te = null)) : (Z = null, te = D), Z !== te)) {
            if (ne = Du, Y = "onMouseLeave", $ = "onMouseEnter", P = "mouse", (e === "pointerout" || e === "pointerover") && (ne = Ou, Y = "onPointerLeave", $ = "onPointerEnter", P = "pointer"), ze = Z == null ? V : vr(Z), I = te == null ? V : vr(te), V = new ne(Y, P + "leave", Z, n, q), V.target = ze, V.relatedTarget = I, Y = null, Dn(q) === D && (ne = new ne($, P + "enter", te, n, q), ne.target = I, ne.relatedTarget = ze, Y = ne), ze = Y, Z && te) t: {
              for (ne = Z, $ = te, P = 0, I = ne; I; I = mr(I)) P++;
              for (I = 0, Y = $; Y; Y = mr(Y)) I++;
              for (; 0 < P - I; ) ne = mr(ne), P--;
              for (; 0 < I - P; ) $ = mr($), I--;
              for (; P--; ) {
                if (ne === $ || $ !== null && ne === $.alternate) break t;
                ne = mr(ne), $ = mr($);
              }
              ne = null;
            }
            else ne = null;
            Z !== null && fc(K, V, Z, ne, !1), te !== null && ze !== null && fc(K, ze, te, ne, !0);
          }
        }
        e: {
          if (V = D ? vr(D) : window, Z = V.nodeName && V.nodeName.toLowerCase(), Z === "select" || Z === "input" && V.type === "file") var re = Sm;
          else if (Vu(V)) if (Qu) re = Em;
          else {
            re = jm;
            var ae = km;
          }
          else (Z = V.nodeName) && Z.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (re = Cm);
          if (re && (re = re(e, D))) {
            qu(K, re, n, q);
            break e;
          }
          ae && ae(e, V, D), e === "focusout" && (ae = V._wrapperState) && ae.controlled && V.type === "number" && _a(V, "number", V.value);
        }
        switch (ae = D ? vr(D) : window, e) {
          case "focusin":
            (Vu(ae) || ae.contentEditable === "true") && (fr = ae, Ka = D, cs = null);
            break;
          case "focusout":
            cs = Ka = fr = null;
            break;
          case "mousedown":
            Ya = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ya = !1, tc(K, n, q);
            break;
          case "selectionchange":
            if (Rm) break;
          case "keydown":
          case "keyup":
            tc(K, n, q);
        }
        var ie;
        if (Ua) e: {
          switch (e) {
            case "compositionstart":
              var ue = "onCompositionStart";
              break e;
            case "compositionend":
              ue = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ue = "onCompositionUpdate";
              break e;
          }
          ue = void 0;
        }
        else dr ? Bu(e, n) && (ue = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ue = "onCompositionStart");
        ue && (Fu && n.locale !== "ko" && (dr || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && dr && (ie = Iu()) : (vn = q, za = "value" in vn ? vn.value : vn.textContent, dr = !0)), ae = io(D, ue), 0 < ae.length && (ue = new zu(ue, e, null, n, q), K.push({ event: ue, listeners: ae }), ie ? ue.data = ie : (ie = Uu(n), ie !== null && (ue.data = ie)))), (ie = ym ? gm(e, n) : _m(e, n)) && (D = io(D, "onBeforeInput"), 0 < D.length && (q = new zu("onBeforeInput", "beforeinput", null, n, q), K.push({ event: q, listeners: D }), q.data = ie));
      }
      cc(K, t);
    });
  }
  function ps(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function io(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Kr(e, n), u != null && s.unshift(ps(e, u, l)), u = Kr(e, t), u != null && s.push(ps(e, u, l))), e = e.return;
    }
    return s;
  }
  function mr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function fc(e, t, n, s, l) {
    for (var u = t._reactName, m = []; n !== null && n !== s; ) {
      var k = n, R = k.alternate, D = k.stateNode;
      if (R !== null && R === s) break;
      k.tag === 5 && D !== null && (k = D, l ? (R = Kr(n, u), R != null && m.unshift(ps(n, R, k))) : l || (R = Kr(n, u), R != null && m.push(ps(n, R, k)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var $m = /\r\n?/g, Mm = /\u0000|\uFFFD/g;
  function pc(e) {
    return (typeof e == "string" ? e : "" + e).replace($m, `
`).replace(Mm, "");
  }
  function lo(e, t, n) {
    if (t = pc(t), pc(e) !== t && n) throw Error(a(425));
  }
  function uo() {
  }
  var ti = null, ni = null;
  function ri(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var si = typeof setTimeout == "function" ? setTimeout : void 0, Im = typeof clearTimeout == "function" ? clearTimeout : void 0, mc = typeof Promise == "function" ? Promise : void 0, Lm = typeof queueMicrotask == "function" ? queueMicrotask : typeof mc < "u" ? function(e) {
    return mc.resolve(null).then(e).catch(Dm);
  } : si;
  function Dm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function oi(e, t) {
    var n = t, s = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (s === 0) {
          e.removeChild(l), rs(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = l;
    } while (n);
    rs(t);
  }
  function gn(e) {
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
  var hr = Math.random().toString(36).slice(2), qt = "__reactFiber$" + hr, ms = "__reactProps$" + hr, Xt = "__reactContainer$" + hr, ai = "__reactEvents$" + hr, zm = "__reactListeners$" + hr, Om = "__reactHandles$" + hr;
  function Dn(e) {
    var t = e[qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Xt] || n[qt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = hc(e); e !== null; ) {
          if (n = e[qt]) return n;
          e = hc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function hs(e) {
    return e = e[qt] || e[Xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function vr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function co(e) {
    return e[ms] || null;
  }
  var ii = [], yr = -1;
  function _n(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > yr || (e.current = ii[yr], ii[yr] = null, yr--);
  }
  function Re(e, t) {
    yr++, ii[yr] = e.current, e.current = t;
  }
  var xn = {}, et = _n(xn), ft = _n(!1), zn = xn;
  function gr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return xn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function pt(e) {
    return e = e.childContextTypes, e != null;
  }
  function fo() {
    Pe(ft), Pe(et);
  }
  function vc(e, t, n) {
    if (et.current !== xn) throw Error(a(168));
    Re(et, t), Re(ft, n);
  }
  function yc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(a(108, je(e) || "Unknown", l));
    return Q({}, n, s);
  }
  function po(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, zn = et.current, Re(et, e), Re(ft, ft.current), !0;
  }
  function gc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(a(169));
    n ? (e = yc(e, t, zn), s.__reactInternalMemoizedMergedChildContext = e, Pe(ft), Pe(et), Re(et, e)) : Pe(ft), Re(ft, n);
  }
  var Zt = null, mo = !1, li = !1;
  function _c(e) {
    Zt === null ? Zt = [e] : Zt.push(e);
  }
  function Fm(e) {
    mo = !0, _c(e);
  }
  function wn() {
    if (!li && Zt !== null) {
      li = !0;
      var e = 0, t = Ee;
      try {
        var n = Zt;
        for (Ee = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        Zt = null, mo = !1;
      } catch (l) {
        throw Zt !== null && (Zt = Zt.slice(e + 1)), wu(ba, wn), l;
      } finally {
        Ee = t, li = !1;
      }
    }
    return null;
  }
  var _r = [], xr = 0, ho = null, vo = 0, Ct = [], Et = 0, On = null, en = 1, tn = "";
  function Fn(e, t) {
    _r[xr++] = vo, _r[xr++] = ho, ho = e, vo = t;
  }
  function xc(e, t, n) {
    Ct[Et++] = en, Ct[Et++] = tn, Ct[Et++] = On, On = e;
    var s = en;
    e = tn;
    var l = 32 - Mt(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - Mt(t) + l;
    if (30 < u) {
      var m = l - l % 5;
      u = (s & (1 << m) - 1).toString(32), s >>= m, l -= m, en = 1 << 32 - Mt(t) + l | n << l | s, tn = u + e;
    } else en = 1 << u | n << l | s, tn = e;
  }
  function ui(e) {
    e.return !== null && (Fn(e, 1), xc(e, 1, 0));
  }
  function ci(e) {
    for (; e === ho; ) ho = _r[--xr], _r[xr] = null, vo = _r[--xr], _r[xr] = null;
    for (; e === On; ) On = Ct[--Et], Ct[Et] = null, tn = Ct[--Et], Ct[Et] = null, en = Ct[--Et], Ct[Et] = null;
  }
  var wt = null, St = null, Ae = !1, Lt = null;
  function wc(e, t) {
    var n = bt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Sc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, wt = e, St = gn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, wt = e, St = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = On !== null ? { id: en, overflow: tn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = bt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, wt = e, St = null, !0) : !1;
      default:
        return !1;
    }
  }
  function di(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function fi(e) {
    if (Ae) {
      var t = St;
      if (t) {
        var n = t;
        if (!Sc(e, t)) {
          if (di(e)) throw Error(a(418));
          t = gn(n.nextSibling);
          var s = wt;
          t && Sc(e, t) ? wc(s, n) : (e.flags = e.flags & -4097 | 2, Ae = !1, wt = e);
        }
      } else {
        if (di(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Ae = !1, wt = e;
      }
    }
  }
  function kc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    wt = e;
  }
  function yo(e) {
    if (e !== wt) return !1;
    if (!Ae) return kc(e), Ae = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ri(e.type, e.memoizedProps)), t && (t = St)) {
      if (di(e)) throw jc(), Error(a(418));
      for (; t; ) wc(e, t), t = gn(t.nextSibling);
    }
    if (kc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                St = gn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else St = wt ? gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function jc() {
    for (var e = St; e; ) e = gn(e.nextSibling);
  }
  function wr() {
    St = wt = null, Ae = !1;
  }
  function pi(e) {
    Lt === null ? Lt = [e] : Lt.push(e);
  }
  var Hm = H.ReactCurrentBatchConfig;
  function vs(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(a(147, e));
        var l = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(m) {
          var k = l.refs;
          m === null ? delete k[u] : k[u] = m;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function go(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Cc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ec(e) {
    function t($, P) {
      if (e) {
        var I = $.deletions;
        I === null ? ($.deletions = [P], $.flags |= 16) : I.push(P);
      }
    }
    function n($, P) {
      if (!e) return null;
      for (; P !== null; ) t($, P), P = P.sibling;
      return null;
    }
    function s($, P) {
      for ($ = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? $.set(P.key, P) : $.set(P.index, P), P = P.sibling;
      return $;
    }
    function l($, P) {
      return $ = Rn($, P), $.index = 0, $.sibling = null, $;
    }
    function u($, P, I) {
      return $.index = I, e ? (I = $.alternate, I !== null ? (I = I.index, I < P ? ($.flags |= 2, P) : I) : ($.flags |= 2, P)) : ($.flags |= 1048576, P);
    }
    function m($) {
      return e && $.alternate === null && ($.flags |= 2), $;
    }
    function k($, P, I, Y) {
      return P === null || P.tag !== 6 ? (P = sl(I, $.mode, Y), P.return = $, P) : (P = l(P, I), P.return = $, P);
    }
    function R($, P, I, Y) {
      var re = I.type;
      return re === X ? q($, P, I.props.children, Y, I.key) : P !== null && (P.elementType === re || typeof re == "object" && re !== null && re.$$typeof === ke && Cc(re) === P.type) ? (Y = l(P, I.props), Y.ref = vs($, P, I), Y.return = $, Y) : (Y = Wo(I.type, I.key, I.props, null, $.mode, Y), Y.ref = vs($, P, I), Y.return = $, Y);
    }
    function D($, P, I, Y) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== I.containerInfo || P.stateNode.implementation !== I.implementation ? (P = ol(I, $.mode, Y), P.return = $, P) : (P = l(P, I.children || []), P.return = $, P);
    }
    function q($, P, I, Y, re) {
      return P === null || P.tag !== 7 ? (P = Kn(I, $.mode, Y, re), P.return = $, P) : (P = l(P, I), P.return = $, P);
    }
    function K($, P, I) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = sl("" + P, $.mode, I), P.return = $, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case B:
            return I = Wo(P.type, P.key, P.props, null, $.mode, I), I.ref = vs($, null, P), I.return = $, I;
          case M:
            return P = ol(P, $.mode, I), P.return = $, P;
          case ke:
            var Y = P._init;
            return K($, Y(P._payload), I);
        }
        if (Vr(P) || F(P)) return P = Kn(P, $.mode, I, null), P.return = $, P;
        go($, P);
      }
      return null;
    }
    function V($, P, I, Y) {
      var re = P !== null ? P.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return re !== null ? null : k($, P, "" + I, Y);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case B:
            return I.key === re ? R($, P, I, Y) : null;
          case M:
            return I.key === re ? D($, P, I, Y) : null;
          case ke:
            return re = I._init, V(
              $,
              P,
              re(I._payload),
              Y
            );
        }
        if (Vr(I) || F(I)) return re !== null ? null : q($, P, I, Y, null);
        go($, I);
      }
      return null;
    }
    function Z($, P, I, Y, re) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return $ = $.get(I) || null, k(P, $, "" + Y, re);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case B:
            return $ = $.get(Y.key === null ? I : Y.key) || null, R(P, $, Y, re);
          case M:
            return $ = $.get(Y.key === null ? I : Y.key) || null, D(P, $, Y, re);
          case ke:
            var ae = Y._init;
            return Z($, P, I, ae(Y._payload), re);
        }
        if (Vr(Y) || F(Y)) return $ = $.get(I) || null, q(P, $, Y, re, null);
        go(P, Y);
      }
      return null;
    }
    function te($, P, I, Y) {
      for (var re = null, ae = null, ie = P, ue = P = 0, Ke = null; ie !== null && ue < I.length; ue++) {
        ie.index > ue ? (Ke = ie, ie = null) : Ke = ie.sibling;
        var we = V($, ie, I[ue], Y);
        if (we === null) {
          ie === null && (ie = Ke);
          break;
        }
        e && ie && we.alternate === null && t($, ie), P = u(we, P, ue), ae === null ? re = we : ae.sibling = we, ae = we, ie = Ke;
      }
      if (ue === I.length) return n($, ie), Ae && Fn($, ue), re;
      if (ie === null) {
        for (; ue < I.length; ue++) ie = K($, I[ue], Y), ie !== null && (P = u(ie, P, ue), ae === null ? re = ie : ae.sibling = ie, ae = ie);
        return Ae && Fn($, ue), re;
      }
      for (ie = s($, ie); ue < I.length; ue++) Ke = Z(ie, $, ue, I[ue], Y), Ke !== null && (e && Ke.alternate !== null && ie.delete(Ke.key === null ? ue : Ke.key), P = u(Ke, P, ue), ae === null ? re = Ke : ae.sibling = Ke, ae = Ke);
      return e && ie.forEach(function(bn) {
        return t($, bn);
      }), Ae && Fn($, ue), re;
    }
    function ne($, P, I, Y) {
      var re = F(I);
      if (typeof re != "function") throw Error(a(150));
      if (I = re.call(I), I == null) throw Error(a(151));
      for (var ae = re = null, ie = P, ue = P = 0, Ke = null, we = I.next(); ie !== null && !we.done; ue++, we = I.next()) {
        ie.index > ue ? (Ke = ie, ie = null) : Ke = ie.sibling;
        var bn = V($, ie, we.value, Y);
        if (bn === null) {
          ie === null && (ie = Ke);
          break;
        }
        e && ie && bn.alternate === null && t($, ie), P = u(bn, P, ue), ae === null ? re = bn : ae.sibling = bn, ae = bn, ie = Ke;
      }
      if (we.done) return n(
        $,
        ie
      ), Ae && Fn($, ue), re;
      if (ie === null) {
        for (; !we.done; ue++, we = I.next()) we = K($, we.value, Y), we !== null && (P = u(we, P, ue), ae === null ? re = we : ae.sibling = we, ae = we);
        return Ae && Fn($, ue), re;
      }
      for (ie = s($, ie); !we.done; ue++, we = I.next()) we = Z(ie, $, ue, we.value, Y), we !== null && (e && we.alternate !== null && ie.delete(we.key === null ? ue : we.key), P = u(we, P, ue), ae === null ? re = we : ae.sibling = we, ae = we);
      return e && ie.forEach(function(xh) {
        return t($, xh);
      }), Ae && Fn($, ue), re;
    }
    function ze($, P, I, Y) {
      if (typeof I == "object" && I !== null && I.type === X && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case B:
            e: {
              for (var re = I.key, ae = P; ae !== null; ) {
                if (ae.key === re) {
                  if (re = I.type, re === X) {
                    if (ae.tag === 7) {
                      n($, ae.sibling), P = l(ae, I.props.children), P.return = $, $ = P;
                      break e;
                    }
                  } else if (ae.elementType === re || typeof re == "object" && re !== null && re.$$typeof === ke && Cc(re) === ae.type) {
                    n($, ae.sibling), P = l(ae, I.props), P.ref = vs($, ae, I), P.return = $, $ = P;
                    break e;
                  }
                  n($, ae);
                  break;
                } else t($, ae);
                ae = ae.sibling;
              }
              I.type === X ? (P = Kn(I.props.children, $.mode, Y, I.key), P.return = $, $ = P) : (Y = Wo(I.type, I.key, I.props, null, $.mode, Y), Y.ref = vs($, P, I), Y.return = $, $ = Y);
            }
            return m($);
          case M:
            e: {
              for (ae = I.key; P !== null; ) {
                if (P.key === ae) if (P.tag === 4 && P.stateNode.containerInfo === I.containerInfo && P.stateNode.implementation === I.implementation) {
                  n($, P.sibling), P = l(P, I.children || []), P.return = $, $ = P;
                  break e;
                } else {
                  n($, P);
                  break;
                }
                else t($, P);
                P = P.sibling;
              }
              P = ol(I, $.mode, Y), P.return = $, $ = P;
            }
            return m($);
          case ke:
            return ae = I._init, ze($, P, ae(I._payload), Y);
        }
        if (Vr(I)) return te($, P, I, Y);
        if (F(I)) return ne($, P, I, Y);
        go($, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, P !== null && P.tag === 6 ? (n($, P.sibling), P = l(P, I), P.return = $, $ = P) : (n($, P), P = sl(I, $.mode, Y), P.return = $, $ = P), m($)) : n($, P);
    }
    return ze;
  }
  var Sr = Ec(!0), Nc = Ec(!1), _o = _n(null), xo = null, kr = null, mi = null;
  function hi() {
    mi = kr = xo = null;
  }
  function vi(e) {
    var t = _o.current;
    Pe(_o), e._currentValue = t;
  }
  function yi(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function jr(e, t) {
    xo = e, mi = kr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (mt = !0), e.firstContext = null);
  }
  function Nt(e) {
    var t = e._currentValue;
    if (mi !== e) if (e = { context: e, memoizedValue: t, next: null }, kr === null) {
      if (xo === null) throw Error(a(308));
      kr = e, xo.dependencies = { lanes: 0, firstContext: e };
    } else kr = kr.next = e;
    return t;
  }
  var Hn = null;
  function gi(e) {
    Hn === null ? Hn = [e] : Hn.push(e);
  }
  function Tc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, gi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nn(e, s);
  }
  function nn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Sn = !1;
  function _i(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Rc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function kn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (_e & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, nn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, gi(s)) : (t.next = l.next, l.next = t), s.interleaved = t, nn(e, n);
  }
  function wo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, $a(e, n);
    }
  }
  function bc(e, t) {
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
  function So(e, t, n, s) {
    var l = e.updateQueue;
    Sn = !1;
    var u = l.firstBaseUpdate, m = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var R = k, D = R.next;
      R.next = null, m === null ? u = D : m.next = D, m = R;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, k = q.lastBaseUpdate, k !== m && (k === null ? q.firstBaseUpdate = D : k.next = D, q.lastBaseUpdate = R));
    }
    if (u !== null) {
      var K = l.baseState;
      m = 0, q = D = R = null, k = u;
      do {
        var V = k.lane, Z = k.eventTime;
        if ((s & V) === V) {
          q !== null && (q = q.next = {
            eventTime: Z,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var te = e, ne = k;
            switch (V = t, Z = n, ne.tag) {
              case 1:
                if (te = ne.payload, typeof te == "function") {
                  K = te.call(Z, K, V);
                  break e;
                }
                K = te;
                break e;
              case 3:
                te.flags = te.flags & -65537 | 128;
              case 0:
                if (te = ne.payload, V = typeof te == "function" ? te.call(Z, K, V) : te, V == null) break e;
                K = Q({}, K, V);
                break e;
              case 2:
                Sn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, V = l.effects, V === null ? l.effects = [k] : V.push(k));
        } else Z = { eventTime: Z, lane: V, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, q === null ? (D = q = Z, R = K) : q = q.next = Z, m |= V;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          V = k, k = V.next, V.next = null, l.lastBaseUpdate = V, l.shared.pending = null;
        }
      } while (!0);
      if (q === null && (R = K), l.baseState = R, l.firstBaseUpdate = D, l.lastBaseUpdate = q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          m |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      Un |= m, e.lanes = m, e.memoizedState = K;
    }
  }
  function Pc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], l = s.callback;
      if (l !== null) {
        if (s.callback = null, s = n, typeof l != "function") throw Error(a(191, l));
        l.call(s);
      }
    }
  }
  var ys = {}, Qt = _n(ys), gs = _n(ys), _s = _n(ys);
  function Wn(e) {
    if (e === ys) throw Error(a(174));
    return e;
  }
  function xi(e, t) {
    switch (Re(_s, t), Re(gs, e), Re(Qt, ys), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : wa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wa(t, e);
    }
    Pe(Qt), Re(Qt, t);
  }
  function Cr() {
    Pe(Qt), Pe(gs), Pe(_s);
  }
  function Ac(e) {
    Wn(_s.current);
    var t = Wn(Qt.current), n = wa(t, e.type);
    t !== n && (Re(gs, e), Re(Qt, n));
  }
  function wi(e) {
    gs.current === e && (Pe(Qt), Pe(gs));
  }
  var Me = _n(0);
  function ko(e) {
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
  var Si = [];
  function ki() {
    for (var e = 0; e < Si.length; e++) Si[e]._workInProgressVersionPrimary = null;
    Si.length = 0;
  }
  var jo = H.ReactCurrentDispatcher, ji = H.ReactCurrentBatchConfig, Bn = 0, Ie = null, Fe = null, qe = null, Co = !1, xs = !1, ws = 0, Wm = 0;
  function tt() {
    throw Error(a(321));
  }
  function Ci(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!It(e[n], t[n])) return !1;
    return !0;
  }
  function Ei(e, t, n, s, l, u) {
    if (Bn = u, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jo.current = e === null || e.memoizedState === null ? qm : Qm, e = n(s, l), xs) {
      u = 0;
      do {
        if (xs = !1, ws = 0, 25 <= u) throw Error(a(301));
        u += 1, qe = Fe = null, t.updateQueue = null, jo.current = Km, e = n(s, l);
      } while (xs);
    }
    if (jo.current = To, t = Fe !== null && Fe.next !== null, Bn = 0, qe = Fe = Ie = null, Co = !1, t) throw Error(a(300));
    return e;
  }
  function Ni() {
    var e = ws !== 0;
    return ws = 0, e;
  }
  function Kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return qe === null ? Ie.memoizedState = qe = e : qe = qe.next = e, qe;
  }
  function Tt() {
    if (Fe === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = qe === null ? Ie.memoizedState : qe.next;
    if (t !== null) qe = t, Fe = e;
    else {
      if (e === null) throw Error(a(310));
      Fe = e, e = { memoizedState: Fe.memoizedState, baseState: Fe.baseState, baseQueue: Fe.baseQueue, queue: Fe.queue, next: null }, qe === null ? Ie.memoizedState = qe = e : qe = qe.next = e;
    }
    return qe;
  }
  function Ss(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ti(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var s = Fe, l = s.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var m = l.next;
        l.next = u.next, u.next = m;
      }
      s.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, s = s.baseState;
      var k = m = null, R = null, D = u;
      do {
        var q = D.lane;
        if ((Bn & q) === q) R !== null && (R = R.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), s = D.hasEagerState ? D.eagerState : e(s, D.action);
        else {
          var K = {
            lane: q,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          R === null ? (k = R = K, m = s) : R = R.next = K, Ie.lanes |= q, Un |= q;
        }
        D = D.next;
      } while (D !== null && D !== u);
      R === null ? m = s : R.next = k, It(s, t.memoizedState) || (mt = !0), t.memoizedState = s, t.baseState = m, t.baseQueue = R, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, Ie.lanes |= u, Un |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ri(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var m = l = l.next;
      do
        u = e(u, m.action), m = m.next;
      while (m !== l);
      It(u, t.memoizedState) || (mt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function $c() {
  }
  function Mc(e, t) {
    var n = Ie, s = Tt(), l = t(), u = !It(s.memoizedState, l);
    if (u && (s.memoizedState = l, mt = !0), s = s.queue, bi(Dc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || qe !== null && qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, ks(9, Lc.bind(null, n, s, l, t), void 0, null), Qe === null) throw Error(a(349));
      (Bn & 30) !== 0 || Ic(n, t, l);
    }
    return l;
  }
  function Ic(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Lc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, zc(t) && Oc(e);
  }
  function Dc(e, t, n) {
    return n(function() {
      zc(t) && Oc(e);
    });
  }
  function zc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !It(e, n);
    } catch {
      return !0;
    }
  }
  function Oc(e) {
    var t = nn(e, 1);
    t !== null && Ft(t, e, 1, -1);
  }
  function Fc(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ss, lastRenderedState: e }, t.queue = e, e = e.dispatch = Vm.bind(null, Ie, e), [t.memoizedState, e];
  }
  function ks(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Hc() {
    return Tt().memoizedState;
  }
  function Eo(e, t, n, s) {
    var l = Kt();
    Ie.flags |= e, l.memoizedState = ks(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function No(e, t, n, s) {
    var l = Tt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Fe !== null) {
      var m = Fe.memoizedState;
      if (u = m.destroy, s !== null && Ci(s, m.deps)) {
        l.memoizedState = ks(t, n, u, s);
        return;
      }
    }
    Ie.flags |= e, l.memoizedState = ks(1 | t, n, u, s);
  }
  function Wc(e, t) {
    return Eo(8390656, 8, e, t);
  }
  function bi(e, t) {
    return No(2048, 8, e, t);
  }
  function Bc(e, t) {
    return No(4, 2, e, t);
  }
  function Uc(e, t) {
    return No(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, No(4, 4, Vc.bind(null, t, e), n);
  }
  function Pi() {
  }
  function Qc(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ci(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Kc(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ci(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Yc(e, t, n) {
    return (Bn & 21) === 0 ? (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = n) : (It(n, t) || (n = Cu(), Ie.lanes |= n, Un |= n, e.baseState = !0), t);
  }
  function Bm(e, t) {
    var n = Ee;
    Ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = ji.transition;
    ji.transition = {};
    try {
      e(!1), t();
    } finally {
      Ee = n, ji.transition = s;
    }
  }
  function Gc() {
    return Tt().memoizedState;
  }
  function Um(e, t, n) {
    var s = Nn(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Jc(e)) Xc(t, n);
    else if (n = Tc(e, t, n, s), n !== null) {
      var l = lt();
      Ft(n, e, s, l), Zc(n, t, s);
    }
  }
  function Vm(e, t, n) {
    var s = Nn(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Jc(e)) Xc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var m = t.lastRenderedState, k = u(m, n);
        if (l.hasEagerState = !0, l.eagerState = k, It(k, m)) {
          var R = t.interleaved;
          R === null ? (l.next = l, gi(t)) : (l.next = R.next, R.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Tc(e, t, l, s), n !== null && (l = lt(), Ft(n, e, s, l), Zc(n, t, s));
    }
  }
  function Jc(e) {
    var t = e.alternate;
    return e === Ie || t !== null && t === Ie;
  }
  function Xc(e, t) {
    xs = Co = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Zc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, $a(e, n);
    }
  }
  var To = { readContext: Nt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, qm = { readContext: Nt, useCallback: function(e, t) {
    return Kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Nt, useEffect: Wc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Eo(
      4194308,
      4,
      Vc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Eo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Eo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Kt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = Kt();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Um.bind(null, Ie, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Kt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Fc, useDebugValue: Pi, useDeferredValue: function(e) {
    return Kt().memoizedState = e;
  }, useTransition: function() {
    var e = Fc(!1), t = e[0];
    return e = Bm.bind(null, e[1]), Kt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Ie, l = Kt();
    if (Ae) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), Qe === null) throw Error(a(349));
      (Bn & 30) !== 0 || Ic(s, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Wc(Dc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, ks(9, Lc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Kt(), t = Qe.identifierPrefix;
    if (Ae) {
      var n = tn, s = en;
      n = (s & ~(1 << 32 - Mt(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ws++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Wm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Qm = {
    readContext: Nt,
    useCallback: Qc,
    useContext: Nt,
    useEffect: bi,
    useImperativeHandle: qc,
    useInsertionEffect: Bc,
    useLayoutEffect: Uc,
    useMemo: Kc,
    useReducer: Ti,
    useRef: Hc,
    useState: function() {
      return Ti(Ss);
    },
    useDebugValue: Pi,
    useDeferredValue: function(e) {
      var t = Tt();
      return Yc(t, Fe.memoizedState, e);
    },
    useTransition: function() {
      var e = Ti(Ss)[0], t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: $c,
    useSyncExternalStore: Mc,
    useId: Gc,
    unstable_isNewReconciler: !1
  }, Km = { readContext: Nt, useCallback: Qc, useContext: Nt, useEffect: bi, useImperativeHandle: qc, useInsertionEffect: Bc, useLayoutEffect: Uc, useMemo: Kc, useReducer: Ri, useRef: Hc, useState: function() {
    return Ri(Ss);
  }, useDebugValue: Pi, useDeferredValue: function(e) {
    var t = Tt();
    return Fe === null ? t.memoizedState = e : Yc(t, Fe.memoizedState, e);
  }, useTransition: function() {
    var e = Ri(Ss)[0], t = Tt().memoizedState;
    return [e, t];
  }, useMutableSource: $c, useSyncExternalStore: Mc, useId: Gc, unstable_isNewReconciler: !1 };
  function Dt(e, t) {
    if (e && e.defaultProps) {
      t = Q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ai(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ro = { isMounted: function(e) {
    return (e = e._reactInternals) ? Ln(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = lt(), l = Nn(e), u = rn(s, l);
    u.payload = t, n != null && (u.callback = n), t = kn(e, u, l), t !== null && (Ft(t, e, l, s), wo(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = lt(), l = Nn(e), u = rn(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = kn(e, u, l), t !== null && (Ft(t, e, l, s), wo(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = lt(), s = Nn(e), l = rn(n, s);
    l.tag = 2, t != null && (l.callback = t), t = kn(e, l, s), t !== null && (Ft(t, e, s, n), wo(t, e, s));
  } };
  function ed(e, t, n, s, l, u, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, m) : t.prototype && t.prototype.isPureReactComponent ? !us(n, s) || !us(l, u) : !0;
  }
  function td(e, t, n) {
    var s = !1, l = xn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Nt(u) : (l = pt(t) ? zn : et.current, s = t.contextTypes, u = (s = s != null) ? gr(e, l) : xn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ro, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function nd(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
  }
  function $i(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, _i(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Nt(u) : (u = pt(t) ? zn : et.current, l.context = gr(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ai(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ro.enqueueReplaceState(l, l.state, null), So(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Er(e, t) {
    try {
      var n = "", s = t;
      do
        n += ye(s), s = s.return;
      while (s);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Mi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ii(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Ym = typeof WeakMap == "function" ? WeakMap : Map;
  function rd(e, t, n) {
    n = rn(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      Lo || (Lo = !0, Gi = s), Ii(e, t);
    }, n;
  }
  function sd(e, t, n) {
    n = rn(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        Ii(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Ii(e, t), typeof s != "function" && (Cn === null ? Cn = /* @__PURE__ */ new Set([this]) : Cn.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function od(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Ym();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = uh.bind(null, e, t, n), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rn(-1, 1), t.tag = 2, kn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Gm = H.ReactCurrentOwner, mt = !1;
  function it(e, t, n, s) {
    t.child = e === null ? Nc(t, null, n, s) : Sr(t, e.child, n, s);
  }
  function ld(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return jr(t, l), s = Ei(e, t, n, s, u, l), n = Ni(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, sn(e, t, l)) : (Ae && n && ui(t), t.flags |= 1, it(e, t, s, l), t.child);
  }
  function ud(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !rl(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, cd(e, t, u, s, l)) : (e = Wo(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var m = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : us, n(m, s) && e.ref === t.ref) return sn(e, t, l);
    }
    return t.flags |= 1, e = Rn(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function cd(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (us(u, s) && e.ref === t.ref) if (mt = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (mt = !0);
      else return t.lanes = e.lanes, sn(e, t, l);
    }
    return Li(e, t, n, s, l);
  }
  function dd(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Re(Tr, kt), kt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Re(Tr, kt), kt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Re(Tr, kt), kt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Re(Tr, kt), kt |= s;
    return it(e, t, l, n), t.child;
  }
  function fd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Li(e, t, n, s, l) {
    var u = pt(n) ? zn : et.current;
    return u = gr(t, u), jr(t, l), n = Ei(e, t, n, s, u, l), s = Ni(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, sn(e, t, l)) : (Ae && s && ui(t), t.flags |= 1, it(e, t, n, l), t.child);
  }
  function pd(e, t, n, s, l) {
    if (pt(n)) {
      var u = !0;
      po(t);
    } else u = !1;
    if (jr(t, l), t.stateNode === null) Po(e, t), td(t, n, s), $i(t, n, s, l), s = !0;
    else if (e === null) {
      var m = t.stateNode, k = t.memoizedProps;
      m.props = k;
      var R = m.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = Nt(D) : (D = pt(n) ? zn : et.current, D = gr(t, D));
      var q = n.getDerivedStateFromProps, K = typeof q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      K || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (k !== s || R !== D) && nd(t, m, s, D), Sn = !1;
      var V = t.memoizedState;
      m.state = V, So(t, s, m, l), R = t.memoizedState, k !== s || V !== R || ft.current || Sn ? (typeof q == "function" && (Ai(t, n, q, s), R = t.memoizedState), (k = Sn || ed(t, n, k, s, V, R, D)) ? (K || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = R), m.props = s, m.state = R, m.context = D, s = k) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      m = t.stateNode, Rc(e, t), k = t.memoizedProps, D = t.type === t.elementType ? k : Dt(t.type, k), m.props = D, K = t.pendingProps, V = m.context, R = n.contextType, typeof R == "object" && R !== null ? R = Nt(R) : (R = pt(n) ? zn : et.current, R = gr(t, R));
      var Z = n.getDerivedStateFromProps;
      (q = typeof Z == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (k !== K || V !== R) && nd(t, m, s, R), Sn = !1, V = t.memoizedState, m.state = V, So(t, s, m, l);
      var te = t.memoizedState;
      k !== K || V !== te || ft.current || Sn ? (typeof Z == "function" && (Ai(t, n, Z, s), te = t.memoizedState), (D = Sn || ed(t, n, D, s, V, te, R) || !1) ? (q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(s, te, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(s, te, R)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = te), m.props = s, m.state = te, m.context = R, s = D) : (typeof m.componentDidUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Di(e, t, n, s, u, l);
  }
  function Di(e, t, n, s, l, u) {
    fd(e, t);
    var m = (t.flags & 128) !== 0;
    if (!s && !m) return l && gc(t, n, !1), sn(e, t, u);
    s = t.stateNode, Gm.current = t;
    var k = m && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && m ? (t.child = Sr(t, e.child, null, u), t.child = Sr(t, null, k, u)) : it(e, t, k, u), t.memoizedState = s.state, l && gc(t, n, !0), t.child;
  }
  function md(e) {
    var t = e.stateNode;
    t.pendingContext ? vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vc(e, t.context, !1), xi(e, t.containerInfo);
  }
  function hd(e, t, n, s, l) {
    return wr(), pi(l), t.flags |= 256, it(e, t, n, s), t.child;
  }
  var zi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Oi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function vd(e, t, n) {
    var s = t.pendingProps, l = Me.current, u = !1, m = (t.flags & 128) !== 0, k;
    if ((k = m) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Re(Me, l & 1), e === null)
      return fi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, m = { mode: "hidden", children: m }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = m) : u = Bo(m, s, 0, null), e = Kn(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Oi(n), t.memoizedState = zi, e) : Fi(t, m));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return Jm(e, t, m, s, k, l, n);
    if (u) {
      u = s.fallback, m = t.mode, l = e.child, k = l.sibling;
      var R = { mode: "hidden", children: s.children };
      return (m & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = R, t.deletions = null) : (s = Rn(l, R), s.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = Rn(k, u) : (u = Kn(u, m, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, m = e.child.memoizedState, m = m === null ? Oi(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, u.memoizedState = m, u.childLanes = e.childLanes & ~n, t.memoizedState = zi, s;
    }
    return u = e.child, e = u.sibling, s = Rn(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Fi(e, t) {
    return t = Bo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function bo(e, t, n, s) {
    return s !== null && pi(s), Sr(t, e.child, null, n), e = Fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Jm(e, t, n, s, l, u, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Mi(Error(a(422))), bo(e, t, m, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = Bo({ mode: "visible", children: s.children }, l, 0, null), u = Kn(u, l, m, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Sr(t, e.child, null, m), t.child.memoizedState = Oi(m), t.memoizedState = zi, u);
    if ((t.mode & 1) === 0) return bo(e, t, m, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var k = s.dgst;
      return s = k, u = Error(a(419)), s = Mi(u, s, void 0), bo(e, t, m, s);
    }
    if (k = (m & e.childLanes) !== 0, mt || k) {
      if (s = Qe, s !== null) {
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
        l = (l & (s.suspendedLanes | m)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, nn(e, l), Ft(s, e, l, -1));
      }
      return nl(), s = Mi(Error(a(421))), bo(e, t, m, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ch.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, St = gn(l.nextSibling), wt = t, Ae = !0, Lt = null, e !== null && (Ct[Et++] = en, Ct[Et++] = tn, Ct[Et++] = On, en = e.id, tn = e.overflow, On = t), t = Fi(t, s.children), t.flags |= 4096, t);
  }
  function yd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), yi(e.return, t, n);
  }
  function Hi(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function gd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (it(e, t, s.children, n), s = Me.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
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
    if (Re(Me, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ko(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hi(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ko(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Hi(t, !0, n, null, u);
        break;
      case "together":
        Hi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Po(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Un |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Xm(e, t, n) {
    switch (t.tag) {
      case 3:
        md(t), wr();
        break;
      case 5:
        Ac(t);
        break;
      case 1:
        pt(t.type) && po(t);
        break;
      case 4:
        xi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Re(_o, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Re(Me, Me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? vd(e, t, n) : (Re(Me, Me.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
        Re(Me, Me.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return gd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Re(Me, Me.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, dd(e, t, n);
    }
    return sn(e, t, n);
  }
  var _d, Wi, xd, wd;
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
  }, Wi = function() {
  }, xd = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, Wn(Qt.current);
      var u = null;
      switch (n) {
        case "input":
          l = ya(e, l), s = ya(e, s), u = [];
          break;
        case "select":
          l = Q({}, l, { value: void 0 }), s = Q({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = xa(e, l), s = xa(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = uo);
      }
      Sa(n, s);
      var m;
      n = null;
      for (D in l) if (!s.hasOwnProperty(D) && l.hasOwnProperty(D) && l[D] != null) if (D === "style") {
        var k = l[D];
        for (m in k) k.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (d.hasOwnProperty(D) ? u || (u = []) : (u = u || []).push(D, null));
      for (D in s) {
        var R = s[D];
        if (k = l != null ? l[D] : void 0, s.hasOwnProperty(D) && R !== k && (R != null || k != null)) if (D === "style") if (k) {
          for (m in k) !k.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in R) R.hasOwnProperty(m) && k[m] !== R[m] && (n || (n = {}), n[m] = R[m]);
        } else n || (u || (u = []), u.push(
          D,
          n
        )), n = R;
        else D === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, k = k ? k.__html : void 0, R != null && k !== R && (u = u || []).push(D, R)) : D === "children" ? typeof R != "string" && typeof R != "number" || (u = u || []).push(D, "" + R) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (d.hasOwnProperty(D) ? (R != null && D === "onScroll" && be("scroll", e), u || k === R || (u = [])) : (u = u || []).push(D, R));
      }
      n && (u = u || []).push("style", n);
      var D = u;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, wd = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function js(e, t) {
    if (!Ae) switch (e.tailMode) {
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
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags & 14680064, s |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function Zm(e, t, n) {
    var s = t.pendingProps;
    switch (ci(t), t.tag) {
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
        return nt(t), null;
      case 1:
        return pt(t.type) && fo(), nt(t), null;
      case 3:
        return s = t.stateNode, Cr(), Pe(ft), Pe(et), ki(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (yo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Lt !== null && (Zi(Lt), Lt = null))), Wi(e, t), nt(t), null;
      case 5:
        wi(t);
        var l = Wn(_s.current);
        if (n = t.type, e !== null && t.stateNode != null) xd(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(a(166));
            return nt(t), null;
          }
          if (e = Wn(Qt.current), yo(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[qt] = t, s[ms] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                be("cancel", s), be("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                be("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ds.length; l++) be(ds[l], s);
                break;
              case "source":
                be("error", s);
                break;
              case "img":
              case "image":
              case "link":
                be(
                  "error",
                  s
                ), be("load", s);
                break;
              case "details":
                be("toggle", s);
                break;
              case "input":
                tu(s, u), be("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, be("invalid", s);
                break;
              case "textarea":
                su(s, u), be("invalid", s);
            }
            Sa(n, u), l = null;
            for (var m in u) if (u.hasOwnProperty(m)) {
              var k = u[m];
              m === "children" ? typeof k == "string" ? s.textContent !== k && (u.suppressHydrationWarning !== !0 && lo(s.textContent, k, e), l = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && lo(
                s.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(m) && k != null && m === "onScroll" && be("scroll", s);
            }
            switch (n) {
              case "input":
                Mn(s), ru(s, u, !0);
                break;
              case "textarea":
                Mn(s), au(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = uo);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            m = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = m.createElement(n, { is: s.is }) : (e = m.createElement(n), n === "select" && (m = e, s.multiple ? m.multiple = !0 : s.size && (m.size = s.size))) : e = m.createElementNS(e, n), e[qt] = t, e[ms] = s, _d(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = ka(n, s), n) {
                case "dialog":
                  be("cancel", e), be("close", e), l = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  be("load", e), l = s;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ds.length; l++) be(ds[l], e);
                  l = s;
                  break;
                case "source":
                  be("error", e), l = s;
                  break;
                case "img":
                case "image":
                case "link":
                  be(
                    "error",
                    e
                  ), be("load", e), l = s;
                  break;
                case "details":
                  be("toggle", e), l = s;
                  break;
                case "input":
                  tu(e, s), l = ya(e, s), be("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = Q({}, s, { value: void 0 }), be("invalid", e);
                  break;
                case "textarea":
                  su(e, s), l = xa(e, s), be("invalid", e);
                  break;
                default:
                  l = s;
              }
              Sa(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var R = k[u];
                u === "style" ? cu(e, R) : u === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && lu(e, R)) : u === "children" ? typeof R == "string" ? (n !== "textarea" || R !== "") && qr(e, R) : typeof R == "number" && qr(e, "" + R) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? R != null && u === "onScroll" && be("scroll", e) : R != null && A(e, u, R, m));
              }
              switch (n) {
                case "input":
                  Mn(e), ru(e, s, !1);
                  break;
                case "textarea":
                  Mn(e), au(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + xe(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? ar(e, !!s.multiple, u, !1) : s.defaultValue != null && ar(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = uo);
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
        return nt(t), null;
      case 6:
        if (e && t.stateNode != null) wd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(a(166));
          if (n = Wn(_s.current), Wn(Qt.current), yo(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[qt] = t, (u = s.nodeValue !== n) && (e = wt, e !== null)) switch (e.tag) {
              case 3:
                lo(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && lo(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[qt] = t, t.stateNode = s;
        }
        return nt(t), null;
      case 13:
        if (Pe(Me), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ae && St !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) jc(), wr(), t.flags |= 98560, u = !1;
          else if (u = yo(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(a(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(a(317));
              u[qt] = t;
            } else wr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), u = !1;
          } else Lt !== null && (Zi(Lt), Lt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? He === 0 && (He = 3) : nl())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
      case 4:
        return Cr(), Wi(e, t), e === null && fs(t.stateNode.containerInfo), nt(t), null;
      case 10:
        return vi(t.type._context), nt(t), null;
      case 17:
        return pt(t.type) && fo(), nt(t), null;
      case 19:
        if (Pe(Me), u = t.memoizedState, u === null) return nt(t), null;
        if (s = (t.flags & 128) !== 0, m = u.rendering, m === null) if (s) js(u, !1);
        else {
          if (He !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = ko(e), m !== null) {
              for (t.flags |= 128, js(u, !1), s = m.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, m = u.alternate, m === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = m.childLanes, u.lanes = m.lanes, u.child = m.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = m.memoizedProps, u.memoizedState = m.memoizedState, u.updateQueue = m.updateQueue, u.type = m.type, e = m.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Re(Me, Me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && De() > Rr && (t.flags |= 128, s = !0, js(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = ko(m), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), js(u, !0), u.tail === null && u.tailMode === "hidden" && !m.alternate && !Ae) return nt(t), null;
          } else 2 * De() - u.renderingStartTime > Rr && n !== 1073741824 && (t.flags |= 128, s = !0, js(u, !1), t.lanes = 4194304);
          u.isBackwards ? (m.sibling = t.child, t.child = m) : (n = u.last, n !== null ? n.sibling = m : t.child = m, u.last = m);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = De(), t.sibling = null, n = Me.current, Re(Me, s ? n & 1 | 2 : n & 1), t) : (nt(t), null);
      case 22:
      case 23:
        return tl(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (kt & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function eh(e, t) {
    switch (ci(t), t.tag) {
      case 1:
        return pt(t.type) && fo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Cr(), Pe(ft), Pe(et), ki(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return wi(t), null;
      case 13:
        if (Pe(Me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          wr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Pe(Me), null;
      case 4:
        return Cr(), null;
      case 10:
        return vi(t.type._context), null;
      case 22:
      case 23:
        return tl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ao = !1, rt = !1, th = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
  function Nr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      Le(e, t, s);
    }
    else n.current = null;
  }
  function Bi(e, t, n) {
    try {
      n();
    } catch (s) {
      Le(e, t, s);
    }
  }
  var Sd = !1;
  function nh(e, t) {
    if (ti = Js, e = ec(), Qa(e)) {
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
          var m = 0, k = -1, R = -1, D = 0, q = 0, K = e, V = null;
          t: for (; ; ) {
            for (var Z; K !== n || l !== 0 && K.nodeType !== 3 || (k = m + l), K !== u || s !== 0 && K.nodeType !== 3 || (R = m + s), K.nodeType === 3 && (m += K.nodeValue.length), (Z = K.firstChild) !== null; )
              V = K, K = Z;
            for (; ; ) {
              if (K === e) break t;
              if (V === n && ++D === l && (k = m), V === u && ++q === s && (R = m), (Z = K.nextSibling) !== null) break;
              K = V, V = K.parentNode;
            }
            K = Z;
          }
          n = k === -1 || R === -1 ? null : { start: k, end: R };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ni = { focusedElem: e, selectionRange: n }, Js = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
    else for (; ee !== null; ) {
      t = ee;
      try {
        var te = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (te !== null) {
              var ne = te.memoizedProps, ze = te.memoizedState, $ = t.stateNode, P = $.getSnapshotBeforeUpdate(t.elementType === t.type ? ne : Dt(t.type, ne), ze);
              $.__reactInternalSnapshotBeforeUpdate = P;
            }
            break;
          case 3:
            var I = t.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
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
        Le(t, t.return, Y);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ee = e;
        break;
      }
      ee = t.return;
    }
    return te = Sd, Sd = !1, te;
  }
  function Cs(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Bi(t, n, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function $o(e, t) {
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
  function Ui(e) {
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
    t !== null && (e.alternate = null, kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qt], delete t[ms], delete t[ai], delete t[zm], delete t[Om])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function Vi(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = uo));
    else if (s !== 4 && (e = e.child, e !== null)) for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), e = e.sibling;
  }
  function qi(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), e = e.sibling;
  }
  var Je = null, zt = !1;
  function jn(e, t, n) {
    for (n = n.child; n !== null; ) Ed(e, t, n), n = n.sibling;
  }
  function Ed(e, t, n) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
      Vt.onCommitFiberUnmount(Vs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        rt || Nr(n, t);
      case 6:
        var s = Je, l = zt;
        Je = null, jn(e, t, n), Je = s, zt = l, Je !== null && (zt ? (e = Je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Je.removeChild(n.stateNode));
        break;
      case 18:
        Je !== null && (zt ? (e = Je, n = n.stateNode, e.nodeType === 8 ? oi(e.parentNode, n) : e.nodeType === 1 && oi(e, n), rs(e)) : oi(Je, n.stateNode));
        break;
      case 4:
        s = Je, l = zt, Je = n.stateNode.containerInfo, zt = !0, jn(e, t, n), Je = s, zt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, m = u.destroy;
            u = u.tag, m !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Bi(n, t, m), l = l.next;
          } while (l !== s);
        }
        jn(e, t, n);
        break;
      case 1:
        if (!rt && (Nr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (k) {
          Le(n, t, k);
        }
        jn(e, t, n);
        break;
      case 21:
        jn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (rt = (s = rt) || n.memoizedState !== null, jn(e, t, n), rt = s) : jn(e, t, n);
        break;
      default:
        jn(e, t, n);
    }
  }
  function Nd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new th()), t.forEach(function(s) {
        var l = dh.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var u = e, m = t, k = m;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Je = k.stateNode, zt = !1;
              break e;
            case 3:
              Je = k.stateNode.containerInfo, zt = !0;
              break e;
            case 4:
              Je = k.stateNode.containerInfo, zt = !0;
              break e;
          }
          k = k.return;
        }
        if (Je === null) throw Error(a(160));
        Ed(u, m, l), Je = null, zt = !1;
        var R = l.alternate;
        R !== null && (R.return = null), l.return = null;
      } catch (D) {
        Le(l, t, D);
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
        if (Ot(t, e), Yt(e), s & 4) {
          try {
            Cs(3, e, e.return), $o(3, e);
          } catch (ne) {
            Le(e, e.return, ne);
          }
          try {
            Cs(5, e, e.return);
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 1:
        Ot(t, e), Yt(e), s & 512 && n !== null && Nr(n, n.return);
        break;
      case 5:
        if (Ot(t, e), Yt(e), s & 512 && n !== null && Nr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            qr(l, "");
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, m = n !== null ? n.memoizedProps : u, k = e.type, R = e.updateQueue;
          if (e.updateQueue = null, R !== null) try {
            k === "input" && u.type === "radio" && u.name != null && nu(l, u), ka(k, m);
            var D = ka(k, u);
            for (m = 0; m < R.length; m += 2) {
              var q = R[m], K = R[m + 1];
              q === "style" ? cu(l, K) : q === "dangerouslySetInnerHTML" ? lu(l, K) : q === "children" ? qr(l, K) : A(l, q, K, D);
            }
            switch (k) {
              case "input":
                ga(l, u);
                break;
              case "textarea":
                ou(l, u);
                break;
              case "select":
                var V = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var Z = u.value;
                Z != null ? ar(l, !!u.multiple, Z, !1) : V !== !!u.multiple && (u.defaultValue != null ? ar(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : ar(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[ms] = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 6:
        if (Ot(t, e), Yt(e), s & 4) {
          if (e.stateNode === null) throw Error(a(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (Ot(t, e), Yt(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          rs(t.containerInfo);
        } catch (ne) {
          Le(e, e.return, ne);
        }
        break;
      case 4:
        Ot(t, e), Yt(e);
        break;
      case 13:
        Ot(t, e), Yt(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Yi = De())), s & 4 && Nd(e);
        break;
      case 22:
        if (q = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (D = rt) || q, Ot(t, e), rt = D) : Ot(t, e), Yt(e), s & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !q && (e.mode & 1) !== 0) for (ee = e, q = e.child; q !== null; ) {
            for (K = ee = q; ee !== null; ) {
              switch (V = ee, Z = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cs(4, V, V.return);
                  break;
                case 1:
                  Nr(V, V.return);
                  var te = V.stateNode;
                  if (typeof te.componentWillUnmount == "function") {
                    s = V, n = V.return;
                    try {
                      t = s, te.props = t.memoizedProps, te.state = t.memoizedState, te.componentWillUnmount();
                    } catch (ne) {
                      Le(s, n, ne);
                    }
                  }
                  break;
                case 5:
                  Nr(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Pd(K);
                    continue;
                  }
              }
              Z !== null ? (Z.return = V, ee = Z) : Pd(K);
            }
            q = q.sibling;
          }
          e: for (q = null, K = e; ; ) {
            if (K.tag === 5) {
              if (q === null) {
                q = K;
                try {
                  l = K.stateNode, D ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = K.stateNode, R = K.memoizedProps.style, m = R != null && R.hasOwnProperty("display") ? R.display : null, k.style.display = uu("display", m));
                } catch (ne) {
                  Le(e, e.return, ne);
                }
              }
            } else if (K.tag === 6) {
              if (q === null) try {
                K.stateNode.nodeValue = D ? "" : K.memoizedProps;
              } catch (ne) {
                Le(e, e.return, ne);
              }
            } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === e) && K.child !== null) {
              K.child.return = K, K = K.child;
              continue;
            }
            if (K === e) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === e) break e;
              q === K && (q = null), K = K.return;
            }
            q === K && (q = null), K.sibling.return = K.return, K = K.sibling;
          }
        }
        break;
      case 19:
        Ot(t, e), Yt(e), s & 4 && Nd(e);
        break;
      case 21:
        break;
      default:
        Ot(
          t,
          e
        ), Yt(e);
    }
  }
  function Yt(e) {
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
            s.flags & 32 && (qr(l, ""), s.flags &= -33);
            var u = Cd(e);
            qi(e, u, l);
            break;
          case 3:
          case 4:
            var m = s.stateNode.containerInfo, k = Cd(e);
            Vi(e, k, m);
            break;
          default:
            throw Error(a(161));
        }
      } catch (R) {
        Le(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rh(e, t, n) {
    ee = e, Rd(e);
  }
  function Rd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ee !== null; ) {
      var l = ee, u = l.child;
      if (l.tag === 22 && s) {
        var m = l.memoizedState !== null || Ao;
        if (!m) {
          var k = l.alternate, R = k !== null && k.memoizedState !== null || rt;
          k = Ao;
          var D = rt;
          if (Ao = m, (rt = R) && !D) for (ee = l; ee !== null; ) m = ee, R = m.child, m.tag === 22 && m.memoizedState !== null ? Ad(l) : R !== null ? (R.return = m, ee = R) : Ad(l);
          for (; u !== null; ) ee = u, Rd(u), u = u.sibling;
          ee = l, Ao = k, rt = D;
        }
        bd(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, ee = u) : bd(e);
    }
  }
  function bd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || $o(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !rt) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Dt(t.type, n.memoizedProps);
                s.componentDidUpdate(l, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Pc(t, u, s);
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
                Pc(t, m, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var R = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && n.focus();
                    break;
                  case "img":
                    R.src && (n.src = R.src);
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
                    var K = q.dehydrated;
                    K !== null && rs(K);
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
          rt || t.flags & 512 && Ui(t);
        } catch (V) {
          Le(t, t.return, V);
        }
      }
      if (t === e) {
        ee = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ee = n;
        break;
      }
      ee = t.return;
    }
  }
  function Pd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if (t === e) {
        ee = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ee = n;
        break;
      }
      ee = t.return;
    }
  }
  function Ad(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              $o(4, t);
            } catch (R) {
              Le(t, n, R);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (R) {
                Le(t, l, R);
              }
            }
            var u = t.return;
            try {
              Ui(t);
            } catch (R) {
              Le(t, u, R);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Ui(t);
            } catch (R) {
              Le(t, m, R);
            }
        }
      } catch (R) {
        Le(t, t.return, R);
      }
      if (t === e) {
        ee = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, ee = k;
        break;
      }
      ee = t.return;
    }
  }
  var sh = Math.ceil, Mo = H.ReactCurrentDispatcher, Qi = H.ReactCurrentOwner, Rt = H.ReactCurrentBatchConfig, _e = 0, Qe = null, Oe = null, Xe = 0, kt = 0, Tr = _n(0), He = 0, Es = null, Un = 0, Io = 0, Ki = 0, Ns = null, ht = null, Yi = 0, Rr = 1 / 0, on = null, Lo = !1, Gi = null, Cn = null, Do = !1, En = null, zo = 0, Ts = 0, Ji = null, Oo = -1, Fo = 0;
  function lt() {
    return (_e & 6) !== 0 ? De() : Oo !== -1 ? Oo : Oo = De();
  }
  function Nn(e) {
    return (e.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && Xe !== 0 ? Xe & -Xe : Hm.transition !== null ? (Fo === 0 && (Fo = Cu()), Fo) : (e = Ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mu(e.type)), e);
  }
  function Ft(e, t, n, s) {
    if (50 < Ts) throw Ts = 0, Ji = null, Error(a(185));
    Xr(e, n, s), ((_e & 2) === 0 || e !== Qe) && (e === Qe && ((_e & 2) === 0 && (Io |= n), He === 4 && Tn(e, Xe)), vt(e, s), n === 1 && _e === 0 && (t.mode & 1) === 0 && (Rr = De() + 500, mo && wn()));
  }
  function vt(e, t) {
    var n = e.callbackNode;
    Hp(e, t);
    var s = Ks(e, e === Qe ? Xe : 0);
    if (s === 0) n !== null && Su(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && Su(n), t === 1) e.tag === 0 ? Fm(Md.bind(null, e)) : _c(Md.bind(null, e)), Lm(function() {
        (_e & 6) === 0 && wn();
      }), n = null;
      else {
        switch (Eu(s)) {
          case 1:
            n = ba;
            break;
          case 4:
            n = ku;
            break;
          case 16:
            n = Us;
            break;
          case 536870912:
            n = ju;
            break;
          default:
            n = Us;
        }
        n = Wd(n, $d.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function $d(e, t) {
    if (Oo = -1, Fo = 0, (_e & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n) return null;
    var s = Ks(e, e === Qe ? Xe : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ho(e, s);
    else {
      t = s;
      var l = _e;
      _e |= 2;
      var u = Ld();
      (Qe !== e || Xe !== t) && (on = null, Rr = De() + 500, qn(e, t));
      do
        try {
          ih();
          break;
        } catch (k) {
          Id(e, k);
        }
      while (!0);
      hi(), Mo.current = u, _e = l, Oe !== null ? t = 0 : (Qe = null, Xe = 0, t = He);
    }
    if (t !== 0) {
      if (t === 2 && (l = Pa(e), l !== 0 && (s = l, t = Xi(e, l))), t === 1) throw n = Es, qn(e, 0), Tn(e, s), vt(e, De()), n;
      if (t === 6) Tn(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !oh(l) && (t = Ho(e, s), t === 2 && (u = Pa(e), u !== 0 && (s = u, t = Xi(e, u))), t === 1)) throw n = Es, qn(e, 0), Tn(e, s), vt(e, De()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Qn(e, ht, on);
            break;
          case 3:
            if (Tn(e, s), (s & 130023424) === s && (t = Yi + 500 - De(), 10 < t)) {
              if (Ks(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                lt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = si(Qn.bind(null, e, ht, on), t);
              break;
            }
            Qn(e, ht, on);
            break;
          case 4:
            if (Tn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var m = 31 - Mt(s);
              u = 1 << m, m = t[m], m > l && (l = m), s &= ~u;
            }
            if (s = l, s = De() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * sh(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = si(Qn.bind(null, e, ht, on), s);
              break;
            }
            Qn(e, ht, on);
            break;
          case 5:
            Qn(e, ht, on);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return vt(e, De()), e.callbackNode === n ? $d.bind(null, e) : null;
  }
  function Xi(e, t) {
    var n = Ns;
    return e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256), e = Ho(e, t), e !== 2 && (t = ht, ht = n, t !== null && Zi(t)), e;
  }
  function Zi(e) {
    ht === null ? ht = e : ht.push.apply(ht, e);
  }
  function oh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], u = l.getSnapshot;
          l = l.value;
          try {
            if (!It(u(), l)) return !1;
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
  function Tn(e, t) {
    for (t &= ~Ki, t &= ~Io, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Mt(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Md(e) {
    if ((_e & 6) !== 0) throw Error(a(327));
    br();
    var t = Ks(e, 0);
    if ((t & 1) === 0) return vt(e, De()), null;
    var n = Ho(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Pa(e);
      s !== 0 && (t = s, n = Xi(e, s));
    }
    if (n === 1) throw n = Es, qn(e, 0), Tn(e, t), vt(e, De()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qn(e, ht, on), vt(e, De()), null;
  }
  function el(e, t) {
    var n = _e;
    _e |= 1;
    try {
      return e(t);
    } finally {
      _e = n, _e === 0 && (Rr = De() + 500, mo && wn());
    }
  }
  function Vn(e) {
    En !== null && En.tag === 0 && (_e & 6) === 0 && br();
    var t = _e;
    _e |= 1;
    var n = Rt.transition, s = Ee;
    try {
      if (Rt.transition = null, Ee = 1, e) return e();
    } finally {
      Ee = s, Rt.transition = n, _e = t, (_e & 6) === 0 && wn();
    }
  }
  function tl() {
    kt = Tr.current, Pe(Tr);
  }
  function qn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Im(n)), Oe !== null) for (n = Oe.return; n !== null; ) {
      var s = n;
      switch (ci(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && fo();
          break;
        case 3:
          Cr(), Pe(ft), Pe(et), ki();
          break;
        case 5:
          wi(s);
          break;
        case 4:
          Cr();
          break;
        case 13:
          Pe(Me);
          break;
        case 19:
          Pe(Me);
          break;
        case 10:
          vi(s.type._context);
          break;
        case 22:
        case 23:
          tl();
      }
      n = n.return;
    }
    if (Qe = e, Oe = e = Rn(e.current, null), Xe = kt = t, He = 0, Es = null, Ki = Io = Un = 0, ht = Ns = null, Hn !== null) {
      for (t = 0; t < Hn.length; t++) if (n = Hn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var m = u.next;
          u.next = l, s.next = m;
        }
        n.pending = s;
      }
      Hn = null;
    }
    return e;
  }
  function Id(e, t) {
    do {
      var n = Oe;
      try {
        if (hi(), jo.current = To, Co) {
          for (var s = Ie.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          Co = !1;
        }
        if (Bn = 0, qe = Fe = Ie = null, xs = !1, ws = 0, Qi.current = null, n === null || n.return === null) {
          He = 1, Es = t, Oe = null;
          break;
        }
        e: {
          var u = e, m = n.return, k = n, R = t;
          if (t = Xe, k.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var D = R, q = k, K = q.tag;
            if ((q.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var V = q.alternate;
              V ? (q.updateQueue = V.updateQueue, q.memoizedState = V.memoizedState, q.lanes = V.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var Z = ad(m);
            if (Z !== null) {
              Z.flags &= -257, id(Z, m, k, u, t), Z.mode & 1 && od(u, D, t), t = Z, R = D;
              var te = t.updateQueue;
              if (te === null) {
                var ne = /* @__PURE__ */ new Set();
                ne.add(R), t.updateQueue = ne;
              } else te.add(R);
              break e;
            } else {
              if ((t & 1) === 0) {
                od(u, D, t), nl();
                break e;
              }
              R = Error(a(426));
            }
          } else if (Ae && k.mode & 1) {
            var ze = ad(m);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), id(ze, m, k, u, t), pi(Er(R, k));
              break e;
            }
          }
          u = R = Er(R, k), He !== 4 && (He = 2), Ns === null ? Ns = [u] : Ns.push(u), u = m;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var $ = rd(u, R, t);
                bc(u, $);
                break e;
              case 1:
                k = R;
                var P = u.type, I = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Cn === null || !Cn.has(I)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var Y = sd(u, k, t);
                  bc(u, Y);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        zd(n);
      } catch (re) {
        t = re, Oe === n && n !== null && (Oe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ld() {
    var e = Mo.current;
    return Mo.current = To, e === null ? To : e;
  }
  function nl() {
    (He === 0 || He === 3 || He === 2) && (He = 4), Qe === null || (Un & 268435455) === 0 && (Io & 268435455) === 0 || Tn(Qe, Xe);
  }
  function Ho(e, t) {
    var n = _e;
    _e |= 2;
    var s = Ld();
    (Qe !== e || Xe !== t) && (on = null, qn(e, t));
    do
      try {
        ah();
        break;
      } catch (l) {
        Id(e, l);
      }
    while (!0);
    if (hi(), _e = n, Mo.current = s, Oe !== null) throw Error(a(261));
    return Qe = null, Xe = 0, He;
  }
  function ah() {
    for (; Oe !== null; ) Dd(Oe);
  }
  function ih() {
    for (; Oe !== null && !Ap(); ) Dd(Oe);
  }
  function Dd(e) {
    var t = Hd(e.alternate, e, kt);
    e.memoizedProps = e.pendingProps, t === null ? zd(e) : Oe = t, Qi.current = null;
  }
  function zd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Zm(n, t, kt), n !== null) {
          Oe = n;
          return;
        }
      } else {
        if (n = eh(n, t), n !== null) {
          n.flags &= 32767, Oe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          He = 6, Oe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function Qn(e, t, n) {
    var s = Ee, l = Rt.transition;
    try {
      Rt.transition = null, Ee = 1, lh(e, t, n, s);
    } finally {
      Rt.transition = l, Ee = s;
    }
    return null;
  }
  function lh(e, t, n, s) {
    do
      br();
    while (En !== null);
    if ((_e & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Wp(e, u), e === Qe && (Oe = Qe = null, Xe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Do || (Do = !0, Wd(Us, function() {
      return br(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = Rt.transition, Rt.transition = null;
      var m = Ee;
      Ee = 1;
      var k = _e;
      _e |= 4, Qi.current = null, nh(e, n), Td(n, e), Tm(ni), Js = !!ti, ni = ti = null, e.current = n, rh(n), $p(), _e = k, Ee = m, Rt.transition = u;
    } else e.current = n;
    if (Do && (Do = !1, En = e, zo = l), u = e.pendingLanes, u === 0 && (Cn = null), Lp(n.stateNode), vt(e, De()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Lo) throw Lo = !1, e = Gi, Gi = null, e;
    return (zo & 1) !== 0 && e.tag !== 0 && br(), u = e.pendingLanes, (u & 1) !== 0 ? e === Ji ? Ts++ : (Ts = 0, Ji = e) : Ts = 0, wn(), null;
  }
  function br() {
    if (En !== null) {
      var e = Eu(zo), t = Rt.transition, n = Ee;
      try {
        if (Rt.transition = null, Ee = 16 > e ? 16 : e, En === null) var s = !1;
        else {
          if (e = En, En = null, zo = 0, (_e & 6) !== 0) throw Error(a(331));
          var l = _e;
          for (_e |= 4, ee = e.current; ee !== null; ) {
            var u = ee, m = u.child;
            if ((ee.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var R = 0; R < k.length; R++) {
                  var D = k[R];
                  for (ee = D; ee !== null; ) {
                    var q = ee;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cs(8, q, u);
                    }
                    var K = q.child;
                    if (K !== null) K.return = q, ee = K;
                    else for (; ee !== null; ) {
                      q = ee;
                      var V = q.sibling, Z = q.return;
                      if (kd(q), q === D) {
                        ee = null;
                        break;
                      }
                      if (V !== null) {
                        V.return = Z, ee = V;
                        break;
                      }
                      ee = Z;
                    }
                  }
                }
                var te = u.alternate;
                if (te !== null) {
                  var ne = te.child;
                  if (ne !== null) {
                    te.child = null;
                    do {
                      var ze = ne.sibling;
                      ne.sibling = null, ne = ze;
                    } while (ne !== null);
                  }
                }
                ee = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && m !== null) m.return = u, ee = m;
            else e: for (; ee !== null; ) {
              if (u = ee, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Cs(9, u, u.return);
              }
              var $ = u.sibling;
              if ($ !== null) {
                $.return = u.return, ee = $;
                break e;
              }
              ee = u.return;
            }
          }
          var P = e.current;
          for (ee = P; ee !== null; ) {
            m = ee;
            var I = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && I !== null) I.return = m, ee = I;
            else e: for (m = P; ee !== null; ) {
              if (k = ee, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $o(9, k);
                }
              } catch (re) {
                Le(k, k.return, re);
              }
              if (k === m) {
                ee = null;
                break e;
              }
              var Y = k.sibling;
              if (Y !== null) {
                Y.return = k.return, ee = Y;
                break e;
              }
              ee = k.return;
            }
          }
          if (_e = l, wn(), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
            Vt.onPostCommitFiberRoot(Vs, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Ee = n, Rt.transition = t;
      }
    }
    return !1;
  }
  function Od(e, t, n) {
    t = Er(n, t), t = rd(e, t, 1), e = kn(e, t, 1), t = lt(), e !== null && (Xr(e, 1, t), vt(e, t));
  }
  function Le(e, t, n) {
    if (e.tag === 3) Od(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Od(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Cn === null || !Cn.has(s))) {
          e = Er(n, e), e = sd(t, e, 1), t = kn(t, e, 1), e = lt(), t !== null && (Xr(t, 1, e), vt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function uh(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & n, Qe === e && (Xe & n) === n && (He === 4 || He === 3 && (Xe & 130023424) === Xe && 500 > De() - Yi ? qn(e, 0) : Ki |= n), vt(e, t);
  }
  function Fd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Qs, Qs <<= 1, (Qs & 130023424) === 0 && (Qs = 4194304)));
    var n = lt();
    e = nn(e, t), e !== null && (Xr(e, t, n), vt(e, n));
  }
  function ch(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Fd(e, n);
  }
  function dh(e, t) {
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
    s !== null && s.delete(t), Fd(e, n);
  }
  var Hd;
  Hd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ft.current) mt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return mt = !1, Xm(e, t, n);
      mt = (e.flags & 131072) !== 0;
    }
    else mt = !1, Ae && (t.flags & 1048576) !== 0 && xc(t, vo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Po(e, t), e = t.pendingProps;
        var l = gr(t, et.current);
        jr(t, n), l = Ei(null, t, s, e, l, n);
        var u = Ni();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pt(s) ? (u = !0, po(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _i(t), l.updater = Ro, t.stateNode = l, l._reactInternals = t, $i(t, s, e, n), t = Di(null, t, s, !0, u, n)) : (t.tag = 0, Ae && u && ui(t), it(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (Po(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = ph(s), e = Dt(s, e), l) {
            case 0:
              t = Li(null, t, s, e, n);
              break e;
            case 1:
              t = pd(null, t, s, e, n);
              break e;
            case 11:
              t = ld(null, t, s, e, n);
              break e;
            case 14:
              t = ud(null, t, s, Dt(s.type, e), n);
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
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Dt(s, l), Li(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Dt(s, l), pd(e, t, s, l, n);
      case 3:
        e: {
          if (md(t), e === null) throw Error(a(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, Rc(e, t), So(t, s, null, n);
          var m = t.memoizedState;
          if (s = m.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Er(Error(a(423)), t), t = hd(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = Er(Error(a(424)), t), t = hd(e, t, s, n, l);
            break e;
          } else for (St = gn(t.stateNode.containerInfo.firstChild), wt = t, Ae = !0, Lt = null, n = Nc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (wr(), s === l) {
              t = sn(e, t, n);
              break e;
            }
            it(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ac(t), e === null && fi(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = l.children, ri(s, l) ? m = null : u !== null && ri(s, u) && (t.flags |= 32), fd(e, t), it(e, t, m, n), t.child;
      case 6:
        return e === null && fi(t), null;
      case 13:
        return vd(e, t, n);
      case 4:
        return xi(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Sr(t, null, s, n) : it(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Dt(s, l), ld(e, t, s, l, n);
      case 7:
        return it(e, t, t.pendingProps, n), t.child;
      case 8:
        return it(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return it(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, m = l.value, Re(_o, s._currentValue), s._currentValue = m, u !== null) if (It(u.value, m)) {
            if (u.children === l.children && !ft.current) {
              t = sn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              m = u.child;
              for (var R = k.firstContext; R !== null; ) {
                if (R.context === s) {
                  if (u.tag === 1) {
                    R = rn(-1, n & -n), R.tag = 2;
                    var D = u.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var q = D.pending;
                      q === null ? R.next = R : (R.next = q.next, q.next = R), D.pending = R;
                    }
                  }
                  u.lanes |= n, R = u.alternate, R !== null && (R.lanes |= n), yi(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                R = R.next;
              }
            } else if (u.tag === 10) m = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (m = u.return, m === null) throw Error(a(341));
              m.lanes |= n, k = m.alternate, k !== null && (k.lanes |= n), yi(m, n, t), m = u.sibling;
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
          it(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, s = t.pendingProps.children, jr(t, n), l = Nt(l), s = s(l), t.flags |= 1, it(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = Dt(s, t.pendingProps), l = Dt(s.type, l), ud(e, t, s, l, n);
      case 15:
        return cd(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Dt(s, l), Po(e, t), t.tag = 1, pt(s) ? (e = !0, po(t)) : e = !1, jr(t, n), td(t, s, l), $i(t, s, l, n), Di(null, t, s, !0, e, n);
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
  function fh(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, n, s) {
    return new fh(e, t, n, s);
  }
  function rl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ph(e) {
    if (typeof e == "function") return rl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ne) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function Rn(e, t) {
    var n = e.alternate;
    return n === null ? (n = bt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Wo(e, t, n, s, l, u) {
    var m = 2;
    if (s = e, typeof e == "function") rl(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case X:
        return Kn(n.children, l, u, t);
      case U:
        m = 8, l |= 8;
        break;
      case G:
        return e = bt(12, n, t, l | 2), e.elementType = G, e.lanes = u, e;
      case Ce:
        return e = bt(13, n, t, l), e.elementType = Ce, e.lanes = u, e;
      case me:
        return e = bt(19, n, t, l), e.elementType = me, e.lanes = u, e;
      case W:
        return Bo(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case pe:
            m = 10;
            break e;
          case ce:
            m = 9;
            break e;
          case Ne:
            m = 11;
            break e;
          case ve:
            m = 14;
            break e;
          case ke:
            m = 16, s = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = bt(m, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function Kn(e, t, n, s) {
    return e = bt(7, e, s, t), e.lanes = n, e;
  }
  function Bo(e, t, n, s) {
    return e = bt(22, e, s, t), e.elementType = W, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function sl(e, t, n) {
    return e = bt(6, e, null, t), e.lanes = n, e;
  }
  function ol(e, t, n) {
    return t = bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function mh(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Aa(0), this.expirationTimes = Aa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Aa(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function al(e, t, n, s, l, u, m, k, R) {
    return e = new mh(e, t, n, k, R), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = bt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _i(u), e;
  }
  function hh(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: M, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Bd(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (Ln(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (pt(t.type)) {
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
      if (pt(n)) return yc(e, n, t);
    }
    return t;
  }
  function Ud(e, t, n, s, l, u, m, k, R) {
    return e = al(n, s, !0, e, l, u, m, k, R), e.context = Bd(null), n = e.current, s = lt(), l = Nn(n), u = rn(s, l), u.callback = t ?? null, kn(n, u, l), e.current.lanes = l, Xr(e, l, s), vt(e, s), e;
  }
  function Uo(e, t, n, s) {
    var l = t.current, u = lt(), m = Nn(l);
    return n = Bd(n), t.context === null ? t.context = n : t.pendingContext = n, t = rn(u, m), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = kn(l, t, m), e !== null && (Ft(e, l, m, u), wo(e, l, m)), m;
  }
  function Vo(e) {
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
  function il(e, t) {
    Vd(e, t), (e = e.alternate) && Vd(e, t);
  }
  function vh() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ll(e) {
    this._internalRoot = e;
  }
  qo.prototype.render = ll.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    Uo(e, t, null, null);
  }, qo.prototype.unmount = ll.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Vn(function() {
        Uo(null, e, null, null);
      }), t[Xt] = null;
    }
  };
  function qo(e) {
    this._internalRoot = e;
  }
  qo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ru();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && Au(e);
    }
  };
  function ul(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Qo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Qd() {
  }
  function yh(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var D = Vo(m);
          u.call(D);
        };
      }
      var m = Ud(t, s, e, 0, null, !1, !1, "", Qd);
      return e._reactRootContainer = m, e[Xt] = m.current, fs(e.nodeType === 8 ? e.parentNode : e), Vn(), m;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var D = Vo(R);
        k.call(D);
      };
    }
    var R = al(e, 0, !1, null, null, !1, !1, "", Qd);
    return e._reactRootContainer = R, e[Xt] = R.current, fs(e.nodeType === 8 ? e.parentNode : e), Vn(function() {
      Uo(t, R, n, s);
    }), R;
  }
  function Ko(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var m = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var R = Vo(m);
          k.call(R);
        };
      }
      Uo(t, m, e, l);
    } else m = yh(n, t, e, l, s);
    return Vo(m);
  }
  Nu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jr(t.pendingLanes);
          n !== 0 && ($a(t, n | 1), vt(t, De()), (_e & 6) === 0 && (Rr = De() + 500, wn()));
        }
        break;
      case 13:
        Vn(function() {
          var s = nn(e, 1);
          if (s !== null) {
            var l = lt();
            Ft(s, e, 1, l);
          }
        }), il(e, 1);
    }
  }, Ma = function(e) {
    if (e.tag === 13) {
      var t = nn(e, 134217728);
      if (t !== null) {
        var n = lt();
        Ft(t, e, 134217728, n);
      }
      il(e, 134217728);
    }
  }, Tu = function(e) {
    if (e.tag === 13) {
      var t = Nn(e), n = nn(e, t);
      if (n !== null) {
        var s = lt();
        Ft(n, e, t, s);
      }
      il(e, t);
    }
  }, Ru = function() {
    return Ee;
  }, bu = function(e, t) {
    var n = Ee;
    try {
      return Ee = e, t();
    } finally {
      Ee = n;
    }
  }, Ea = function(e, t, n) {
    switch (t) {
      case "input":
        if (ga(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = co(s);
              if (!l) throw Error(a(90));
              Ur(s), ga(s, l);
            }
          }
        }
        break;
      case "textarea":
        ou(e, n);
        break;
      case "select":
        t = n.value, t != null && ar(e, !!n.multiple, t, !1);
    }
  }, mu = el, hu = Vn;
  var gh = { usingClientEntryPoint: !1, Events: [hs, vr, co, fu, pu, el] }, Rs = { findFiberByHostInstance: Dn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _h = { bundleType: Rs.bundleType, version: Rs.version, rendererPackageName: Rs.rendererPackageName, rendererConfig: Rs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = _u(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Rs.findFiberByHostInstance || vh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yo.isDisabled && Yo.supportsFiber) try {
      Vs = Yo.inject(_h), Vt = Yo;
    } catch {
    }
  }
  return yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gh, yt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ul(t)) throw Error(a(200));
    return hh(e, t, null, n);
  }, yt.createRoot = function(e, t) {
    if (!ul(e)) throw Error(a(299));
    var n = !1, s = "", l = qd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = al(e, 1, !1, null, null, n, !1, s, l), e[Xt] = t.current, fs(e.nodeType === 8 ? e.parentNode : e), new ll(t);
  }, yt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = _u(t), e = e === null ? null : e.stateNode, e;
  }, yt.flushSync = function(e) {
    return Vn(e);
  }, yt.hydrate = function(e, t, n) {
    if (!Qo(t)) throw Error(a(200));
    return Ko(null, e, t, !0, n);
  }, yt.hydrateRoot = function(e, t, n) {
    if (!ul(e)) throw Error(a(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", m = qd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), t = Ud(t, null, e, 1, n ?? null, l, !1, u, m), e[Xt] = t.current, fs(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new qo(t);
  }, yt.render = function(e, t, n) {
    if (!Qo(t)) throw Error(a(200));
    return Ko(null, e, t, !1, n);
  }, yt.unmountComponentAtNode = function(e) {
    if (!Qo(e)) throw Error(a(40));
    return e._reactRootContainer ? (Vn(function() {
      Ko(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Xt] = null;
      });
    }), !0) : !1;
  }, yt.unstable_batchedUpdates = el, yt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Qo(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return Ko(e, t, n, !1, s);
  }, yt.version = "18.3.1-next-f1338f8080-20240426", yt;
}
var tf;
function Pf() {
  if (tf) return fl.exports;
  tf = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), fl.exports = Th(), fl.exports;
}
var nf;
function Rh() {
  if (nf) return Go;
  nf = 1;
  var r = Pf();
  return Go.createRoot = r.createRoot, Go.hydrateRoot = r.hydrateRoot, Go;
}
var bh = Rh();
const Ph = /* @__PURE__ */ Rf(bh);
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
function Ah(r = {}) {
  function i(d, f) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: g = ""
    } = rr(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Cl(
      "",
      { pathname: p, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      f.state && f.state.usr || null,
      f.state && f.state.key || "default"
    );
  }
  function a(d, f) {
    let p = d.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let g = d.location.href, w = g.indexOf("#");
      h = w === -1 ? g : g.slice(0, w);
    }
    return h + "#" + (typeof f == "string" ? f : zs(f));
  }
  function c(d, f) {
    $t(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return Mh(
    i,
    a,
    c,
    r
  );
}
function $e(r, i) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(i);
}
function $t(r, i) {
  if (!r) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {
    }
  }
}
function $h() {
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
function Cl(r, i, a = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof i == "string" ? rr(i) : i,
    state: a,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: i && i.key || c || $h(),
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
function rr(r) {
  let i = {};
  if (r) {
    let a = r.indexOf("#");
    a >= 0 && (i.hash = r.substring(a), r = r.substring(0, a));
    let c = r.indexOf("?");
    c >= 0 && (i.search = r.substring(c), r = r.substring(0, c)), r && (i.pathname = r);
  }
  return i;
}
function Mh(r, i, a, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, p = d.history, h = "POP", g = null, w = y();
  w == null && (w = 0, p.replaceState({ ...p.state, idx: w }, ""));
  function y() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let T = y(), E = T == null ? null : T - w;
    w = T, g && g({ action: h, location: j.location, delta: E });
  }
  function S(T, E) {
    h = "PUSH";
    let O = sf(T) ? T : Cl(j.location, T, E);
    a && a(O, T), w = y() + 1;
    let A = of(O, w), H = j.createHref(O.mask || O);
    try {
      p.pushState(A, "", H);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError")
        throw B;
      d.location.assign(H);
    }
    f && g && g({ action: h, location: j.location, delta: 1 });
  }
  function C(T, E) {
    h = "REPLACE";
    let O = sf(T) ? T : Cl(j.location, T, E);
    a && a(O, T), w = y();
    let A = of(O, w), H = j.createHref(O.mask || O);
    p.replaceState(A, "", H), f && g && g({ action: h, location: j.location, delta: 0 });
  }
  function N(T) {
    return Ih(d, T);
  }
  let j = {
    get action() {
      return h;
    },
    get location() {
      return r(d, p);
    },
    listen(T) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(rf, _), g = T, () => {
        d.removeEventListener(rf, _), g = null;
      };
    },
    createHref(T) {
      return i(d, T);
    },
    createURL: N,
    encodeLocation(T) {
      let E = N(T);
      return {
        pathname: E.pathname,
        search: E.search,
        hash: E.hash
      };
    },
    push: S,
    replace: C,
    go(T) {
      return p.go(T);
    }
  };
  return j;
}
function Ih(r, i, a = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), $e(c, "No window.location.(origin|href) available to create URL");
  let d = typeof i == "string" ? i : zs(i);
  return d = d.replace(/ $/, "%20"), !a && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Af(r, i, a = "/") {
  return Lh(r, i, a, !1);
}
function Lh(r, i, a, c, d) {
  let f = typeof i == "string" ? rr(i) : i, p = cn(f.pathname || "/", a);
  if (p == null)
    return null;
  let h = Dh(r), g = null, w = Yh(p);
  for (let y = 0; g == null && y < h.length; ++y)
    g = Qh(
      h[y],
      w,
      c
    );
  return g;
}
function Dh(r) {
  let i = $f(r);
  return zh(i), i;
}
function $f(r, i = [], a = [], c = "", d = !1) {
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
      $e(
        y.relativePath.startsWith(c),
        `Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), y.relativePath = y.relativePath.slice(c.length);
    }
    let _ = Wt([c, y.relativePath]), S = a.concat(y);
    p.children && p.children.length > 0 && ($e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), $f(
      p.children,
      i,
      S,
      _,
      g
    )), !(p.path == null && !p.index) && i.push({
      path: _,
      score: Vh(_, p.index),
      routesMeta: S
    });
  };
  return r.forEach((p, h) => {
    var g;
    if (p.path === "" || !((g = p.path) != null && g.includes("?")))
      f(p, h);
    else
      for (let w of Mf(p.path))
        f(p, h, !0, w);
  }), i;
}
function Mf(r) {
  let i = r.split("/");
  if (i.length === 0) return [];
  let [a, ...c] = i, d = a.endsWith("?"), f = a.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let p = Mf(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && h.push(...p), h.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function zh(r) {
  r.sort(
    (i, a) => i.score !== a.score ? a.score - i.score : qh(
      i.routesMeta.map((c) => c.childrenIndex),
      a.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Oh = /^:[\w-]+$/, Fh = 3, Hh = 2, Wh = 1, Bh = 10, Uh = -2, af = (r) => r === "*";
function Vh(r, i) {
  let a = r.split("/"), c = a.length;
  return a.some(af) && (c += Uh), i && (c += Hh), a.filter((d) => !af(d)).reduce(
    (d, f) => d + (Oh.test(f) ? Fh : f === "" ? Wh : Bh),
    c
  );
}
function qh(r, i) {
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
function Qh(r, i, a = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let g = c[h], w = h === c.length - 1, y = f === "/" ? i : i.slice(f.length) || "/", _ = oa(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: w },
      y
    ), S = g.route;
    if (!_ && w && a && !c[c.length - 1].route.index && (_ = oa(
      {
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: !1
      },
      y
    )), !_)
      return null;
    Object.assign(d, _.params), p.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: Wt([f, _.pathname]),
      pathnameBase: Zh(
        Wt([f, _.pathnameBase])
      ),
      route: S
    }), _.pathnameBase !== "/" && (f = Wt([f, _.pathnameBase]));
  }
  return p;
}
function oa(r, i) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [a, c] = Kh(
    r.path,
    r.caseSensitive,
    r.end
  ), d = i.match(a);
  if (!d) return null;
  let f = d[0], p = f.replace(/(.)\/+$/, "$1"), h = d.slice(1);
  return {
    params: c.reduce(
      (w, { paramName: y, isOptional: _ }, S) => {
        if (y === "*") {
          let N = h[S] || "";
          p = f.slice(0, f.length - N.length).replace(/(.)\/+$/, "$1");
        }
        const C = h[S];
        return _ && !C ? w[y] = void 0 : w[y] = (C || "").replace(/%2F/g, "/"), w;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: r
  };
}
function Kh(r, i = !1, a = !0) {
  $t(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  );
  let c = [], d = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, g, w, y) => {
      if (c.push({ paramName: h, isOptional: g != null }), g) {
        let _ = y.charAt(w + p.length);
        return _ && _ !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return r.endsWith("*") ? (c.push({ paramName: "*" }), d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? d += "\\/*$" : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, i ? void 0 : "i"), c];
}
function Yh(r) {
  try {
    return r.split("/").map((i) => decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
  } catch (i) {
    return $t(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
    ), r;
  }
}
function cn(r, i) {
  if (i === "/") return r;
  if (!r.toLowerCase().startsWith(i.toLowerCase()))
    return null;
  let a = i.endsWith("/") ? i.length - 1 : i.length, c = r.charAt(a);
  return c && c !== "/" ? null : r.slice(a) || "/";
}
var Gh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Jh(r, i = "/") {
  let {
    pathname: a,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? rr(r) : r, f;
  return a ? (a = If(a), a.startsWith("/") ? f = lf(a.substring(1), "/") : f = lf(a, i)) : f = i, {
    pathname: f,
    search: ev(c),
    hash: tv(d)
  };
}
function lf(r, i) {
  let a = aa(i).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? a.length > 1 && a.pop() : d !== "." && a.push(d);
  }), a.length > 1 ? a.join("/") : "/";
}
function hl(r, i, a, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Xh(r) {
  return r.filter(
    (i, a) => a === 0 || i.route.path && i.route.path.length > 0
  );
}
function Ll(r) {
  let i = Xh(r);
  return i.map(
    (a, c) => c === i.length - 1 ? a.pathname : a.pathnameBase
  );
}
function da(r, i, a, c = !1) {
  let d;
  typeof r == "string" ? d = rr(r) : (d = { ...r }, $e(
    !d.pathname || !d.pathname.includes("?"),
    hl("?", "pathname", "search", d)
  ), $e(
    !d.pathname || !d.pathname.includes("#"),
    hl("#", "pathname", "hash", d)
  ), $e(
    !d.search || !d.search.includes("#"),
    hl("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", p = f ? "/" : d.pathname, h;
  if (p == null)
    h = a;
  else {
    let _ = i.length - 1;
    if (!c && p.startsWith("..")) {
      let S = p.split("/");
      for (; S[0] === ".."; )
        S.shift(), _ -= 1;
      d.pathname = S.join("/");
    }
    h = _ >= 0 ? i[_] : "/";
  }
  let g = Jh(d, h), w = p && p !== "/" && p.endsWith("/"), y = (f || p === ".") && a.endsWith("/");
  return !g.pathname.endsWith("/") && (w || y) && (g.pathname += "/"), g;
}
var If = (r) => r.replace(/\/\/+/g, "/"), Wt = (r) => If(r.join("/")), aa = (r) => r.replace(/\/+$/, ""), Zh = (r) => aa(r).replace(/^\/*/, "/"), ev = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, tv = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, nv = class {
  constructor(r, i, a, c = !1) {
    this.status = r, this.statusText = i || "", this.internal = c, a instanceof Error ? (this.data = a.toString(), this.error = a) : this.data = a;
  }
};
function rv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function sv(r) {
  let i = r.map((a) => a.route.path).filter(Boolean);
  return Wt(i) || "/";
}
var Lf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Df(r, i) {
  let a = r;
  if (typeof a != "string" || !Gh.test(a))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: a
    };
  let c = a, d = !1;
  if (Lf)
    try {
      let f = new URL(window.location.href), p = a.startsWith("//") ? new URL(f.protocol + a) : new URL(a), h = cn(p.pathname, i);
      p.origin === f.origin && h != null ? a = h + p.search + p.hash : d = !0;
    } catch {
      $t(
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
var ov = [
  "GET",
  ...zf
];
new Set(ov);
var Lr = v.createContext(null);
Lr.displayName = "DataRouter";
var fa = v.createContext(null);
fa.displayName = "DataRouterState";
var Of = v.createContext(!1);
function av() {
  return v.useContext(Of);
}
var Ff = v.createContext({
  isTransitioning: !1
});
Ff.displayName = "ViewTransition";
var iv = v.createContext(
  /* @__PURE__ */ new Map()
);
iv.displayName = "Fetchers";
var lv = v.createContext(null);
lv.displayName = "Await";
var jt = v.createContext(
  null
);
jt.displayName = "Navigation";
var Os = v.createContext(
  null
);
Os.displayName = "Location";
var Jt = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Jt.displayName = "Route";
var Dl = v.createContext(null);
Dl.displayName = "RouteError";
var Hf = "REACT_ROUTER_ERROR", uv = "REDIRECT", cv = "ROUTE_ERROR_RESPONSE";
function dv(r) {
  if (r.startsWith(`${Hf}:${uv}:{`))
    try {
      let i = JSON.parse(r.slice(28));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean")
        return i;
    } catch {
    }
}
function fv(r) {
  if (r.startsWith(
    `${Hf}:${cv}:{`
  ))
    try {
      let i = JSON.parse(r.slice(40));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string")
        return new nv(
          i.status,
          i.statusText,
          i.data
        );
    } catch {
    }
}
function pv(r, { relative: i } = {}) {
  $e(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: c } = v.useContext(jt), { hash: d, pathname: f, search: p } = Fs(r, { relative: i }), h = f;
  return a !== "/" && (h = f === "/" ? a : Wt([a, f])), c.createHref({ pathname: h, search: p, hash: d });
}
function sr() {
  return v.useContext(Os) != null;
}
function _t() {
  return $e(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(Os).location;
}
var Wf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Bf(r) {
  v.useContext(jt).static || v.useLayoutEffect(r);
}
function zl() {
  let { isDataRoute: r } = v.useContext(Jt);
  return r ? Ev() : mv();
}
function mv() {
  $e(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext(Lr), { basename: i, navigator: a } = v.useContext(jt), { matches: c } = v.useContext(Jt), { pathname: d } = _t(), f = JSON.stringify(Ll(c)), p = v.useRef(!1);
  return Bf(() => {
    p.current = !0;
  }), v.useCallback(
    (g, w = {}) => {
      if ($t(p.current, Wf), !p.current) return;
      if (typeof g == "number") {
        a.go(g);
        return;
      }
      let y = da(
        g,
        JSON.parse(f),
        d,
        w.relative === "path"
      );
      r == null && i !== "/" && (y.pathname = y.pathname === "/" ? i : Wt([i, y.pathname])), (w.replace ? a.replace : a.push)(
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
v.createContext(null);
function Fs(r, { relative: i } = {}) {
  let { matches: a } = v.useContext(Jt), { pathname: c } = _t(), d = JSON.stringify(Ll(a));
  return v.useMemo(
    () => da(
      r,
      JSON.parse(d),
      c,
      i === "path"
    ),
    [r, d, c, i]
  );
}
function hv(r, i) {
  return Uf(r, i);
}
function Uf(r, i, a) {
  var T;
  $e(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(jt), { matches: d } = v.useContext(Jt), f = d[d.length - 1], p = f ? f.params : {}, h = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", w = f && f.route;
  {
    let E = w && w.path || "";
    qf(
      h,
      !w || E.endsWith("*") || E.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E === "/" ? "*" : `${E}/*`}">.`
    );
  }
  let y = _t(), _;
  if (i) {
    let E = typeof i == "string" ? rr(i) : i;
    $e(
      g === "/" || ((T = E.pathname) == null ? void 0 : T.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${E.pathname}" was given in the \`location\` prop.`
    ), _ = E;
  } else
    _ = y;
  let S = _.pathname || "/", C = S;
  if (g !== "/") {
    let E = g.replace(/^\//, "").split("/");
    C = "/" + S.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let N = a && a.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    a.state.matches.map(
      (E) => Object.assign(E, {
        route: a.manifest[E.route.id] || E.route
      })
    )
  ) : Af(r, { pathname: C });
  $t(
    w || N != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), $t(
    N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let j = xv(
    N && N.map(
      (E) => Object.assign({}, E, {
        params: Object.assign({}, p, E.params),
        pathname: Wt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            E.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : E.pathname
        ]),
        pathnameBase: E.pathnameBase === "/" ? g : Wt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            E.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : E.pathnameBase
        ])
      })
    ),
    d,
    a
  );
  return i && j ? /* @__PURE__ */ v.createElement(
    Os.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ..._
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    j
  ) : j;
}
function vv() {
  let r = Cv(), i = rv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), a = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, i), a ? /* @__PURE__ */ v.createElement("pre", { style: d }, a) : null, p);
}
var yv = /* @__PURE__ */ v.createElement(vv, null), Vf = class extends v.Component {
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
      const a = fv(r.digest);
      a && (r = a);
    }
    let i = r !== void 0 ? /* @__PURE__ */ v.createElement(Jt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Dl.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(gv, { error: r }, i) : i;
  }
};
Vf.contextType = Of;
var vl = /* @__PURE__ */ new WeakMap();
function gv({
  children: r,
  error: i
}) {
  let { basename: a } = v.useContext(jt);
  if (typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
    let c = dv(i.digest);
    if (c) {
      let d = vl.get(i);
      if (d) throw d;
      let f = Df(c.location, a);
      if (Lf && !vl.get(i))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw vl.set(i, p), p;
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
function _v({ routeContext: r, match: i, children: a }) {
  let c = v.useContext(Lr);
  return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id), /* @__PURE__ */ v.createElement(Jt.Provider, { value: r }, a);
}
function xv(r, i = [], a) {
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
      (_) => _.route.id && (f == null ? void 0 : f[_.route.id]) !== void 0
    );
    $e(
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
  if (a && c) {
    p = c.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let _ = d[y];
      if ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (h = y), _.route.id) {
        let { loaderData: S, errors: C } = c, N = _.route.loader && !S.hasOwnProperty(_.route.id) && (!C || C[_.route.id] === void 0);
        if (_.route.lazy || N) {
          a.isStatic && (p = !0), h >= 0 ? d = d.slice(0, h + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let g = a == null ? void 0 : a.onError, w = c && g ? (y, _) => {
    var S, C;
    g(y, {
      location: c.location,
      params: ((C = (S = c.matches) == null ? void 0 : S[0]) == null ? void 0 : C.params) ?? {},
      pattern: sv(c.matches),
      errorInfo: _
    });
  } : void 0;
  return d.reduceRight(
    (y, _, S) => {
      let C, N = !1, j = null, T = null;
      c && (C = f && _.route.id ? f[_.route.id] : void 0, j = _.route.errorElement || yv, p && (h < 0 && S === 0 ? (qf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), N = !0, T = null) : h === S && (N = !0, T = _.route.hydrateFallbackElement || null)));
      let E = i.concat(d.slice(0, S + 1)), O = () => {
        let A;
        return C ? A = j : N ? A = T : _.route.Component ? A = /* @__PURE__ */ v.createElement(_.route.Component, null) : _.route.element ? A = _.route.element : A = y, /* @__PURE__ */ v.createElement(
          _v,
          {
            match: _,
            routeContext: {
              outlet: y,
              matches: E,
              isDataRoute: c != null
            },
            children: A
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || S === 0) ? /* @__PURE__ */ v.createElement(
        Vf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: j,
          error: C,
          children: O(),
          routeContext: { outlet: null, matches: E, isDataRoute: !0 },
          onError: w
        }
      ) : O();
    },
    null
  );
}
function Ol(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wv(r) {
  let i = v.useContext(Lr);
  return $e(i, Ol(r)), i;
}
function Sv(r) {
  let i = v.useContext(fa);
  return $e(i, Ol(r)), i;
}
function kv(r) {
  let i = v.useContext(Jt);
  return $e(i, Ol(r)), i;
}
function Fl(r) {
  let i = kv(r), a = i.matches[i.matches.length - 1];
  return $e(
    a.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), a.route.id;
}
function jv() {
  return Fl(
    "useRouteId"
    /* UseRouteId */
  );
}
function Cv() {
  var c;
  let r = v.useContext(Dl), i = Sv(
    "useRouteError"
    /* UseRouteError */
  ), a = Fl(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = i.errors) == null ? void 0 : c[a];
}
function Ev() {
  let { router: r } = wv(
    "useNavigate"
    /* UseNavigateStable */
  ), i = Fl(
    "useNavigate"
    /* UseNavigateStable */
  ), a = v.useRef(!1);
  return Bf(() => {
    a.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      $t(a.current, Wf), a.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: i, ...f }));
    },
    [r, i]
  );
}
var uf = {};
function qf(r, i, a) {
  !i && !uf[r] && (uf[r] = !0, $t(!1, a));
}
v.memo(Nv);
function Nv({
  routes: r,
  manifest: i,
  future: a,
  state: c,
  isStatic: d,
  onError: f
}) {
  return Uf(r, void 0, {
    manifest: i,
    state: c,
    isStatic: d,
    onError: f
  });
}
function Pn({
  to: r,
  replace: i,
  state: a,
  relative: c
}) {
  $e(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(jt);
  $t(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(Jt), { pathname: p } = _t(), h = zl(), g = da(
    r,
    Ll(f),
    p,
    c === "path"
  ), w = JSON.stringify(g);
  return v.useEffect(() => {
    h(JSON.parse(w), { replace: i, state: a, relative: c });
  }, [h, w, c, i, a]), null;
}
function Be(r) {
  $e(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Tv({
  basename: r = "/",
  children: i = null,
  location: a,
  navigationType: c = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: p
}) {
  $e(
    !sr(),
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
  typeof a == "string" && (a = rr(a));
  let {
    pathname: w = "/",
    search: y = "",
    hash: _ = "",
    state: S = null,
    key: C = "default",
    mask: N
  } = a, j = v.useMemo(() => {
    let T = cn(w, h);
    return T == null ? null : {
      location: {
        pathname: T,
        search: y,
        hash: _,
        state: S,
        key: C,
        mask: N
      },
      navigationType: c
    };
  }, [h, w, y, _, S, C, c, N]);
  return $t(
    j != null,
    `<Router basename="${h}"> is not able to match the URL "${w}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), j == null ? null : /* @__PURE__ */ v.createElement(jt.Provider, { value: g }, /* @__PURE__ */ v.createElement(Os.Provider, { children: i, value: j }));
}
function Rv({
  children: r,
  location: i
}) {
  return hv(El(r), i);
}
function El(r, i = []) {
  let a = [];
  return v.Children.forEach(r, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let f = [...i, d];
    if (c.type === v.Fragment) {
      a.push.apply(
        a,
        El(c.props.children, f)
      );
      return;
    }
    $e(
      c.type === Be,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), $e(
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
    c.props.children && (p.children = El(
      c.props.children,
      f
    )), a.push(p);
  }), a;
}
var ra = "get", sa = "application/x-www-form-urlencoded";
function pa(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function bv(r) {
  return pa(r) && r.tagName.toLowerCase() === "button";
}
function Pv(r) {
  return pa(r) && r.tagName.toLowerCase() === "form";
}
function Av(r) {
  return pa(r) && r.tagName.toLowerCase() === "input";
}
function $v(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Mv(r, i) {
  return r.button === 0 && // Ignore everything but left clicks
  (!i || i === "_self") && // Let browser handle "target=_blank" etc.
  !$v(r);
}
var Jo = null;
function Iv() {
  if (Jo === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Jo = !1;
    } catch {
      Jo = !0;
    }
  return Jo;
}
var Lv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function yl(r) {
  return r != null && !Lv.has(r) ? ($t(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sa}"`
  ), null) : r;
}
function Dv(r, i) {
  let a, c, d, f, p;
  if (Pv(r)) {
    let h = r.getAttribute("action");
    c = h ? cn(h, i) : null, a = r.getAttribute("method") || ra, d = yl(r.getAttribute("enctype")) || sa, f = new FormData(r);
  } else if (bv(r) || Av(r) && (r.type === "submit" || r.type === "image")) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || h.getAttribute("action");
    if (c = g ? cn(g, i) : null, a = r.getAttribute("formmethod") || h.getAttribute("method") || ra, d = yl(r.getAttribute("formenctype")) || yl(h.getAttribute("enctype")) || sa, f = new FormData(h, r), !Iv()) {
      let { name: w, type: y, value: _ } = r;
      if (y === "image") {
        let S = w ? `${w}.` : "";
        f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
      } else w && f.append(w, _);
    }
  } else {
    if (pa(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    a = ra, c = null, d = sa, p = r;
  }
  return f && d === "text/plain" && (p = f, f = void 0), { action: c, method: a.toLowerCase(), encType: d, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Hl(r, i) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(i);
}
function Qf(r, i, a, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return a ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : i && cn(d.pathname, i) === "/" ? d.pathname = `${aa(i)}/_root.${c}` : d.pathname = `${aa(d.pathname)}.${c}`, d;
}
async function zv(r, i) {
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
function Ov(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function Fv(r, i, a) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = i.routes[d.route.id];
      if (f) {
        let p = await zv(f, a);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Uv(
    c.flat(1).filter(Ov).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function cf(r, i, a, c, d, f) {
  let p = (g, w) => a[w] ? g.route.id !== a[w].route.id : !0, h = (g, w) => {
    var y;
    return (
      // param change, /users/123 -> /users/456
      a[w].pathname !== g.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((y = a[w].route.path) == null ? void 0 : y.endsWith("*")) && a[w].params["*"] !== g.params["*"]
    );
  };
  return f === "assets" ? i.filter(
    (g, w) => p(g, w) || h(g, w)
  ) : f === "data" ? i.filter((g, w) => {
    var _;
    let y = c.routes[g.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (p(g, w) || h(g, w))
      return !0;
    if (g.route.shouldRevalidate) {
      let S = g.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((_ = a[0]) == null ? void 0 : _.params) || {},
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
function Hv(r, i, { includeHydrateFallback: a } = {}) {
  return Wv(
    r.map((c) => {
      let d = i.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), a && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function Wv(r) {
  return [...new Set(r)];
}
function Bv(r) {
  let i = {}, a = Object.keys(r).sort();
  for (let c of a)
    i[c] = r[c];
  return i;
}
function Uv(r, i) {
  let a = /* @__PURE__ */ new Set();
  return new Set(i), r.reduce((c, d) => {
    let f = JSON.stringify(Bv(d));
    return a.has(f) || (a.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function Wl() {
  let r = v.useContext(Lr);
  return Hl(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function Vv() {
  let r = v.useContext(fa);
  return Hl(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Bl = v.createContext(void 0);
Bl.displayName = "FrameworkContext";
function Ul() {
  let r = v.useContext(Bl);
  return Hl(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function qv(r, i) {
  let a = v.useContext(Bl), [c, d] = v.useState(!1), [f, p] = v.useState(!1), { onFocus: h, onBlur: g, onMouseEnter: w, onMouseLeave: y, onTouchStart: _ } = i, S = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && p(!0), r === "viewport") {
      let j = (E) => {
        E.forEach((O) => {
          p(O.isIntersecting);
        });
      }, T = new IntersectionObserver(j, { threshold: 0.5 });
      return S.current && T.observe(S.current), () => {
        T.disconnect();
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
  }, N = () => {
    d(!1), p(!1);
  };
  return a ? r !== "intent" ? [f, S, {}] : [
    f,
    S,
    {
      onFocus: Ps(h, C),
      onBlur: Ps(g, N),
      onMouseEnter: Ps(w, C),
      onMouseLeave: Ps(y, N),
      onTouchStart: Ps(_, C)
    }
  ] : [!1, S, {}];
}
function Ps(r, i) {
  return (a) => {
    r && r(a), a.defaultPrevented || i(a);
  };
}
function Qv({ page: r, ...i }) {
  let a = av(), { router: c } = Wl(), d = v.useMemo(
    () => Af(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? a ? /* @__PURE__ */ v.createElement(Yv, { page: r, matches: d, ...i }) : /* @__PURE__ */ v.createElement(Gv, { page: r, matches: d, ...i }) : null;
}
function Kv(r) {
  let { manifest: i, routeModules: a } = Ul(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return Fv(r, i, a).then(
      (p) => {
        f || d(p);
      }
    ), () => {
      f = !0;
    };
  }, [r, i, a]), c;
}
function Yv({
  page: r,
  matches: i,
  ...a
}) {
  let c = _t(), { future: d } = Ul(), { basename: f } = Wl(), p = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let h = Qf(
      r,
      f,
      d.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), g = !1, w = [];
    for (let y of i)
      typeof y.route.shouldRevalidate == "function" ? g = !0 : w.push(y.route.id);
    return g && w.length > 0 && h.searchParams.set("_routes", w.join(",")), [h.pathname + h.search];
  }, [
    f,
    d.v8_trailingSlashAwareDataRequests,
    r,
    c,
    i
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...a })));
}
function Gv({
  page: r,
  matches: i,
  ...a
}) {
  let c = _t(), { future: d, manifest: f, routeModules: p } = Ul(), { basename: h } = Wl(), { loaderData: g, matches: w } = Vv(), y = v.useMemo(
    () => cf(
      r,
      i,
      w,
      f,
      c,
      "data"
    ),
    [r, i, w, f, c]
  ), _ = v.useMemo(
    () => cf(
      r,
      i,
      w,
      f,
      c,
      "assets"
    ),
    [r, i, w, f, c]
  ), S = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let j = /* @__PURE__ */ new Set(), T = !1;
    if (i.forEach((O) => {
      var H;
      let A = f.routes[O.route.id];
      !A || !A.hasLoader || (!y.some((B) => B.route.id === O.route.id) && O.route.id in g && ((H = p[O.route.id]) != null && H.shouldRevalidate) || A.hasClientLoader ? T = !0 : j.add(O.route.id));
    }), j.size === 0)
      return [];
    let E = Qf(
      r,
      h,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return T && j.size > 0 && E.searchParams.set(
      "_routes",
      i.filter((O) => j.has(O.route.id)).map((O) => O.route.id).join(",")
    ), [E.pathname + E.search];
  }, [
    h,
    d.v8_trailingSlashAwareDataRequests,
    g,
    c,
    f,
    y,
    i,
    r,
    p
  ]), C = v.useMemo(
    () => Hv(_, f),
    [_, f]
  ), N = Kv(_);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, S.map((j) => /* @__PURE__ */ v.createElement("link", { key: j, rel: "prefetch", as: "fetch", href: j, ...a })), C.map((j) => /* @__PURE__ */ v.createElement("link", { key: j, rel: "modulepreload", href: j, ...a })), N.map(({ key: j, link: T }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: j,
        nonce: a.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? a.crossOrigin
      }
    )
  )));
}
function Jv(...r) {
  return (i) => {
    r.forEach((a) => {
      typeof a == "function" ? a(i) : a != null && (a.current = i);
    });
  };
}
var Xv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Xv && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Zv({
  basename: r,
  children: i,
  useTransitions: a,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = Ah({ window: c, v5Compat: !0 }));
  let f = d.current, [p, h] = v.useState({
    action: f.action,
    location: f.location
  }), g = v.useCallback(
    (w) => {
      a === !1 ? h(w) : v.startTransition(() => h(w));
    },
    [a]
  );
  return v.useLayoutEffect(() => f.listen(g), [f, g]), /* @__PURE__ */ v.createElement(
    Tv,
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
var Kf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Yf = v.forwardRef(
  function({
    onClick: i,
    discover: a = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: f,
    replace: p,
    mask: h,
    state: g,
    target: w,
    to: y,
    preventScrollReset: _,
    viewTransition: S,
    defaultShouldRevalidate: C,
    ...N
  }, j) {
    let { basename: T, navigator: E, useTransitions: O } = v.useContext(jt), A = typeof y == "string" && Kf.test(y), H = Df(y, T);
    y = H.to;
    let B = pv(y, { relative: d }), M = _t(), X = null;
    if (h) {
      let ve = da(
        h,
        [],
        M.mask ? M.mask.pathname : "/",
        !0
      );
      T !== "/" && (ve.pathname = ve.pathname === "/" ? T : Wt([T, ve.pathname])), X = E.createHref(ve);
    }
    let [U, G, pe] = qv(
      c,
      N
    ), ce = ny(y, {
      replace: p,
      mask: h,
      state: g,
      target: w,
      preventScrollReset: _,
      relative: d,
      viewTransition: S,
      defaultShouldRevalidate: C,
      useTransitions: O
    });
    function Ne(ve) {
      i && i(ve), ve.defaultPrevented || ce(ve);
    }
    let Ce = !(H.isExternal || f), me = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...N,
          ...pe,
          href: (Ce ? X : void 0) || H.absoluteURL || B,
          onClick: Ce ? Ne : i,
          ref: Jv(j, G),
          target: w,
          "data-discover": !A && a === "render" ? "true" : void 0
        }
      )
    );
    return U && !A ? /* @__PURE__ */ v.createElement(v.Fragment, null, me, /* @__PURE__ */ v.createElement(Qv, { page: B })) : me;
  }
);
Yf.displayName = "Link";
var ut = v.forwardRef(
  function({
    "aria-current": i = "page",
    caseSensitive: a = !1,
    className: c = "",
    end: d = !1,
    style: f,
    to: p,
    viewTransition: h,
    children: g,
    ...w
  }, y) {
    let _ = Fs(p, { relative: w.relative }), S = _t(), C = v.useContext(fa), { navigator: N, basename: j } = v.useContext(jt), T = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    iy(_) && h === !0, E = N.encodeLocation ? N.encodeLocation(_).pathname : _.pathname, O = S.pathname, A = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    a || (O = O.toLowerCase(), A = A ? A.toLowerCase() : null, E = E.toLowerCase()), A && j && (A = cn(A, j) || A);
    const H = E !== "/" && E.endsWith("/") ? E.length - 1 : E.length;
    let B = O === E || !d && O.startsWith(E) && O.charAt(H) === "/", M = A != null && (A === E || !d && A.startsWith(E) && A.charAt(E.length) === "/"), X = {
      isActive: B,
      isPending: M,
      isTransitioning: T
    }, U = B ? i : void 0, G;
    typeof c == "function" ? G = c(X) : G = [
      c,
      B ? "active" : null,
      M ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let pe = typeof f == "function" ? f(X) : f;
    return /* @__PURE__ */ v.createElement(
      Yf,
      {
        ...w,
        "aria-current": U,
        className: G,
        ref: y,
        style: pe,
        to: p,
        viewTransition: h
      },
      typeof g == "function" ? g(X) : g
    );
  }
);
ut.displayName = "NavLink";
var ey = v.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: i,
    navigate: a,
    reloadDocument: c,
    replace: d,
    state: f,
    method: p = ra,
    action: h,
    onSubmit: g,
    relative: w,
    preventScrollReset: y,
    viewTransition: _,
    defaultShouldRevalidate: S,
    ...C
  }, N) => {
    let { useTransitions: j } = v.useContext(jt), T = oy(), E = ay(h, { relative: w }), O = p.toLowerCase() === "get" ? "get" : "post", A = typeof h == "string" && Kf.test(h), H = (B) => {
      if (g && g(B), B.defaultPrevented) return;
      B.preventDefault();
      let M = B.nativeEvent.submitter, X = (M == null ? void 0 : M.getAttribute("formmethod")) || p, U = () => T(M || B.currentTarget, {
        fetcherKey: i,
        method: X,
        navigate: a,
        replace: d,
        state: f,
        relative: w,
        preventScrollReset: y,
        viewTransition: _,
        defaultShouldRevalidate: S
      });
      j && a !== !1 ? v.startTransition(() => U()) : U();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: N,
        method: O,
        action: E,
        onSubmit: c ? g : H,
        ...C,
        "data-discover": !A && r === "render" ? "true" : void 0
      }
    );
  }
);
ey.displayName = "Form";
function ty(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gf(r) {
  let i = v.useContext(Lr);
  return $e(i, ty(r)), i;
}
function ny(r, {
  target: i,
  replace: a,
  mask: c,
  state: d,
  preventScrollReset: f,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: g,
  useTransitions: w
} = {}) {
  let y = zl(), _ = _t(), S = Fs(r, { relative: p });
  return v.useCallback(
    (C) => {
      if (Mv(C, i)) {
        C.preventDefault();
        let N = a !== void 0 ? a : zs(_) === zs(S), j = () => y(r, {
          replace: N,
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
      _,
      y,
      S,
      a,
      c,
      d,
      i,
      r,
      f,
      p,
      h,
      g,
      w
    ]
  );
}
var ry = 0, sy = () => `__${String(++ry)}__`;
function oy() {
  let { router: r } = Gf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: i } = v.useContext(jt), a = jv(), c = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, p = {}) => {
      let { action: h, method: g, encType: w, formData: y, body: _ } = Dv(
        f,
        i
      );
      if (p.navigate === !1) {
        let S = p.fetcherKey || sy();
        await c(S, a, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: y,
          body: _,
          formMethod: p.method || g,
          formEncType: p.encType || w,
          flushSync: p.flushSync
        });
      } else
        await d(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: y,
          body: _,
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
function ay(r, { relative: i } = {}) {
  let { basename: a } = v.useContext(jt), c = v.useContext(Jt);
  $e(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Fs(r || ".", { relative: i }) }, p = _t();
  if (r == null) {
    f.search = p.search;
    let h = new URLSearchParams(f.search), g = h.getAll("index");
    if (g.some((y) => y === "")) {
      h.delete("index"), g.filter((_) => _).forEach((_) => h.append("index", _));
      let y = h.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (f.pathname = f.pathname === "/" ? a : Wt([a, f.pathname])), zs(f);
}
function iy(r, { relative: i } = {}) {
  let a = v.useContext(Ff);
  $e(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Gf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Fs(r, { relative: i });
  if (!a.isTransitioning)
    return !1;
  let f = cn(a.currentLocation.pathname, c) || a.currentLocation.pathname, p = cn(a.nextLocation.pathname, c) || a.nextLocation.pathname;
  return oa(d.pathname, p) != null || oa(d.pathname, f) != null;
}
var Jf = Pf();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = (...r) => r.filter((i, a, c) => !!i && i.trim() !== "" && c.indexOf(i) === a).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = (r) => r.replace(
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
  const i = uy(r);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var gl = {
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
const cy = (r) => {
  for (const i in r)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, dy = v.createContext({}), fy = () => v.useContext(dy), py = v.forwardRef(
  ({ color: r, size: i, strokeWidth: a, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: p, ...h }, g) => {
    const {
      size: w = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: _ = !1,
      color: S = "currentColor",
      className: C = ""
    } = fy() ?? {}, N = c ?? _ ? Number(a ?? y) * 24 / Number(i ?? w) : a ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...gl,
        width: i ?? w ?? gl.width,
        height: i ?? w ?? gl.height,
        stroke: r ?? S,
        strokeWidth: N,
        className: Xf("lucide", C, d),
        ...!f && !cy(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([j, T]) => v.createElement(j, T)),
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
const Se = (r, i) => {
  const a = v.forwardRef(
    ({ className: c, ...d }, f) => v.createElement(py, {
      ref: f,
      iconNode: i,
      className: Xf(
        `lucide-${ly(df(r))}`,
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
const my = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], Zf = Se("alarm-clock", my);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], vy = Se("arrow-left", hy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], gy = Se("arrow-right", yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = [
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
], Vl = Se("baby", _y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], wy = Se("check", xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ep = Se("chevron-down", Sy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], jy = Se("circle-check", ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ey = Se("circle-question-mark", Cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ty = Se("circle", Ny);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], by = Se("clock-3", Ry);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Ay = Se("command", Py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], tp = Se("download", $y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [
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
], Iy = Se("file-code-corner", My);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], Dy = Se("git-branch", Ly);
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
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
], Oy = Se("headphones", zy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = [
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
], Hy = Se("layers", Fy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], By = Se("layout-grid", Wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uy = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], np = Se("menu", Uy);
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
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], qy = Se("message-circle", Vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], Ky = Se("phone-call", Qy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = [
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
], Gy = Se("phone-off", Yy);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ql = Se("phone", Jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Zy = Se("radio", Xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], tg = Se("search", eg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], rp = Se("settings", ng);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], _l = Se("sliders-horizontal", rg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], Ql = Se("speaker", sg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], ag = Se("timer", og);
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], lg = Se("triangle-alert", ig);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], ff = Se("workflow", ug);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], sp = Se("x", cg), dg = { ru: "Тема", en: "Theme" }, fg = { ru: "Тёмная", en: "Dark" }, pg = { ru: "Светлая", en: "Light" }, mg = { ru: "Токен", en: "Token" }, hg = { ru: "Тип действия", en: "Action type" }, vg = { ru: "Ветка диалога", en: "Conversation branch" }, yg = { ru: "Текст ответа", en: "Response text" }, gg = { ru: "Команда", en: "Command" }, _g = { ru: "Название переменной", en: "Variable name" }, xg = { ru: "Основная команда", en: "Main command" }, wg = { ru: "Второстепенная команда", en: "Secondary command" }, Sg = { ru: "Прямая команда", en: "Direct command" }, kg = { ru: "Дополнительные фразы", en: "Additional phrases" }, jg = { ru: "Удалённый сервер", en: "Remote server" }, Cg = { ru: "Вложенные команды", en: "Nested commands" }, Eg = { ru: "Тип вложенного значения", en: "Nested value type" }, Ng = { ru: "Тип данных", en: "Data type" }, Tg = { ru: "Вручную", en: "Manual" }, Rg = { ru: "Любой", en: "Any" }, bg = { ru: "Любой", en: "Any" }, Pg = { ru: "Текст", en: "Text" }, Ag = { ru: "Число", en: "Number" }, $g = { ru: "Дата", en: "Date" }, Mg = { ru: "Время", en: "Time" }, Ig = {
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
  Theme: dg,
  dark: fg,
  light: pg,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: mg,
  actionType: hg,
  actionTypeComponent: vg,
  voiceResponse: yg,
  uuid: gg,
  mappingType: _g,
  parent_type: xg,
  children_type: wg,
  children_direct_type: Sg,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: kg,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: jg,
  subDirectControl: Cg,
  subMappingType: Eg,
  valueType: Ng,
  manual: Tg,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Rg,
  All: bg,
  string: Pg,
  int: Ag,
  date: $g,
  time: Mg,
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
  "Закрытие окна или вкладки не завершает звонок. Чтобы закончить разговор, нажмите «Положить трубку» или верхнюю кнопку любой колонки. Голосовой ассистент остаётся доступен.": { ru: "Закрытие окна или вкладки не завершает звонок. Чтобы закончить разговор, нажмите «Положить трубку» или верхнюю кнопку любой колонки. Голосовой ассистент остаётся доступен.", en: "Closing the window or tab does not end the call. Hang up with the button below or the top button on either speaker. The voice assistant remains available." }
}, op = "ha-dialog-ui-language";
let Kl = localStorage.getItem(op) === "en" ? "en" : "ru";
const Nl = /* @__PURE__ */ new Set();
function Lg(r) {
  Kl = r, localStorage.setItem(op, r), Nl.forEach((i) => i());
}
function ap() {
  return v.useSyncExternalStore((r) => (Nl.add(r), () => {
    Nl.delete(r);
  }), () => Kl);
}
function x(r) {
  if (typeof r != "string") return r;
  const i = Ig[r];
  return (i == null ? void 0 : i[Kl]) ?? r;
}
const Dg = "_button_180pj_1", zg = "_full_180pj_32", Og = "_primary_180pj_37", Fg = "_secondary_180pj_49", Hg = "_ghost_180pj_61", Wg = "_remove_180pj_83", xl = {
  button: Dg,
  full: zg,
  primary: Og,
  secondary: Fg,
  ghost: Hg,
  remove: Wg
}, se = ({
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
        ${xl.button}
        ${xl[i]}
        ${a ? xl.full : ""}
        ${f}
      `,
    children: [
      c,
      r,
      d
    ]
  }
), Tl = "ha-dialog-ui-api-enabled-change", ip = v.createContext(!1), Yl = () => v.useContext(ip), lp = v.createContext(!1), Gl = () => v.useContext(lp), ia = "ha-dialog-ui-remote-server-change", up = v.createContext(null), Dr = () => v.useContext(up), Ge = (r = 768) => {
  const [i, a] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      a(f.matches);
    };
    return a(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), i;
}, Bg = "_tabs_1vwxg_1", Ug = "_dropdown_1vwxg_16", Vg = "_tab_1vwxg_1", qg = "_active_1vwxg_49", Qg = "_menu_1vwxg_59", Kg = "_chevron_1vwxg_76", Yg = "_menuItem_1vwxg_84", de = {
  tabs: Bg,
  dropdown: Ug,
  tab: Vg,
  active: qg,
  menu: Qg,
  chevron: Kg,
  menuItem: Yg
}, ct = () => {
  const r = Ge(), i = Yl(), a = Gl(), c = Dr(), d = _t(), [f, p] = v.useState(!1), h = v.useRef(null), g = v.useRef(null), w = v.useId();
  if (v.useEffect(() => {
    p(!1);
  }, [d.pathname, r, c]), v.useEffect(() => {
    if (!f) return;
    const y = (_) => {
      h.current && !_.composedPath().includes(h.current) && p(!1);
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("focusin", y), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("focusin", y);
    };
  }, [f]), !r)
    return /* @__PURE__ */ o.jsxs("div", { className: de.tabs, children: [
      c === !0 && /* @__PURE__ */ o.jsxs(
        ut,
        {
          to: "/scripts",
          className: ({ isActive: y }) => y ? `${de.tab} ${de.active}` : de.tab,
          children: [
            /* @__PURE__ */ o.jsx(Iy, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: x(c ? "Действия удалённых команд" : "Запуск скриптов") })
          ]
        }
      ),
      c === !1 && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: de.dropdown,
          ref: h,
          onKeyDown: (y) => {
            var _;
            y.key === "Escape" && f && (y.stopPropagation(), p(!1), (_ = g.current) == null || _.focus());
          },
          children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                ref: g,
                className: `${de.tab} ${d.pathname.startsWith("/commands") ? de.active : ""}`,
                "aria-expanded": f,
                "aria-controls": w,
                onClick: () => p((y) => !y),
                onKeyDown: (y) => {
                  y.key === "ArrowDown" && (y.preventDefault(), p(!0), requestAnimationFrame(() => {
                    var _, S;
                    return (S = (_ = h.current) == null ? void 0 : _.querySelector("a")) == null ? void 0 : S.focus();
                  }));
                },
                children: [
                  /* @__PURE__ */ o.jsx(Ay, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ o.jsx("span", { children: x("Команды") }),
                  /* @__PURE__ */ o.jsx(ep, { size: 14, className: de.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ o.jsxs(
              "nav",
              {
                id: w,
                className: de.menu,
                "aria-label": x("Разделы команд"),
                onClick: () => p(!1),
                children: [
                  /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: x("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: x("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: x("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: x("Ответы по умолчанию")
                    }
                  ),
                  a && /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/whisper",
                      className: ({ isActive: y }) => y ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: x("Промпт распознавания")
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        ut,
        {
          to: "/timer",
          className: ({ isActive: y }) => y ? `${de.tab} ${de.active}` : de.tab,
          children: [
            /* @__PURE__ */ o.jsx(ag, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: x("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        ut,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${de.tab} ${de.active}` : de.tab,
          children: [
            /* @__PURE__ */ o.jsx(Zf, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: x("Будильники") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(ut, { to: "/monitor", className: ({ isActive: y }) => y ? `${de.tab} ${de.active}` : de.tab, children: [
        /* @__PURE__ */ o.jsx(Vl, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: x("Радионяня") })
      ] }),
      /* @__PURE__ */ o.jsxs(ut, { to: "/calls", className: ({ isActive: y }) => y ? `${de.tab} ${de.active}` : de.tab, children: [
        /* @__PURE__ */ o.jsx(ql, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: x("Звонки") })
      ] }),
      a && /* @__PURE__ */ o.jsxs(ut, { to: "/downloads", className: ({ isActive: y }) => y ? `${de.tab} ${de.active}` : de.tab, children: [
        /* @__PURE__ */ o.jsx(tp, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: x("Импорт и экспорт") })
      ] }),
      i && a && /* @__PURE__ */ o.jsx(ut, { to: "/logs", className: ({ isActive: y }) => y ? `${de.tab} ${de.active}` : de.tab, children: x("Логи") }),
      /* @__PURE__ */ o.jsxs(
        ut,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${de.tab} ${de.active}` : de.tab,
          children: [
            /* @__PURE__ */ o.jsx(rp, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: x("Настройки") })
          ]
        }
      )
    ] });
}, As = "dialogCustomUiOverlay", Xo = [], la = /* @__PURE__ */ new Set();
let Gg = 0, Pr = null, Rl = !1;
function Jg() {
  Rl = !0, window.addEventListener("popstate", () => {
    Rl = !1;
    const r = [...la];
    la.clear(), queueMicrotask(() => r.forEach((i) => i()));
  }, { once: !0 }), history.back();
}
function cp(r, i) {
  const a = Ge(), c = v.useRef(i);
  c.current = i, v.useEffect(() => {
    if (!r || !a) return;
    const d = `overlay-${++Gg}`;
    let f = !1, p = !1, h = !1;
    const g = () => {
      var y;
      Xo.at(-1) !== d || ((y = history.state) == null ? void 0 : y[As]) === d || (f = !0, c.current());
    }, w = () => {
      var _;
      if (h) return;
      p = !0, Xo.push(d);
      const y = { ...history.state, [As]: d };
      Pr && ((_ = history.state) == null ? void 0 : _[As]) === Pr ? (history.replaceState(y, ""), Pr = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return Rl ? la.add(w) : w(), () => {
      var y;
      h = !0, la.delete(w), window.removeEventListener("popstate", g), p && (Xo.splice(Xo.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[As]) === d && (Pr = d, queueMicrotask(() => {
        var _;
        Pr === d && (Pr = null, ((_ = history.state) == null ? void 0 : _[As]) === d && Jg());
      })));
    };
  }, [r, a]);
}
const Xg = "_overlay_tb5vv_1", Zg = "_sheet_tb5vv_11", e_ = "_handle_tb5vv_21", Yn = {
  overlay: Xg,
  sheet: Zg,
  handle: e_
}, Jl = ({
  open: r,
  className: i = "",
  labelledBy: a,
  onClose: c,
  children: d
}) => {
  cp(r, c);
  const [f, p] = v.useState(r), [h, g] = v.useState(r), w = v.useRef(0), y = v.useRef(0), [_, S] = v.useState(0);
  v.useEffect(() => {
    const T = document.body.style.overflow;
    if (r)
      p(!0), requestAnimationFrame(() => {
        g(!0);
      }), document.body.style.overflow = "hidden";
    else {
      g(!1);
      const E = setTimeout(() => {
        p(!1);
      }, 300);
      return () => clearTimeout(E);
    }
    return () => {
      document.body.style.overflow = T;
    };
  }, [r]);
  const C = (T) => {
    w.current = T.touches[0].clientY;
  }, N = (T) => {
    y.current = T.touches[0].clientY;
    const E = y.current - w.current;
    E > 0 && S(E);
  }, j = () => {
    _ > 120 && c(), S(0);
  };
  return v.useEffect(() => {
    const T = (E) => {
      E.key === "Escape" && c();
    };
    return r && window.addEventListener(
      "keydown",
      T
    ), () => {
      window.removeEventListener(
        "keydown",
        T
      );
    };
  }, [r, c]), f ? /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `${Yn.overlay} ${h ? Yn.visible : ""} ${i}`,
      onClick: c,
      children: /* @__PURE__ */ o.jsxs(
        "section",
        {
          className: `${Yn.sheet} ${h ? Yn.open : ""}`,
          style: {
            transform: `translateY(${_}px)`,
            transition: _ === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
          },
          onClick: (T) => T.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": a,
          children: [
            /* @__PURE__ */ o.jsx(
              "div",
              {
                className: Yn.handleArea,
                onTouchStart: C,
                onTouchMove: N,
                onTouchEnd: j,
                children: /* @__PURE__ */ o.jsx("div", { className: Yn.handle })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: Yn.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, t_ = "_overlay_avpnk_1", n_ = "_heading_avpnk_16", r_ = "_close_avpnk_32", s_ = "_nav_avpnk_45", o_ = "_item_avpnk_51", a_ = "_icon_avpnk_70", i_ = "_label_avpnk_78", l_ = "_arrow_avpnk_86", u_ = "_active_avpnk_91", an = {
  overlay: t_,
  heading: n_,
  close: r_,
  nav: s_,
  item: o_,
  icon: a_,
  label: i_,
  arrow: l_,
  active: u_
};
function c_({ open: r, onClose: i }) {
  const a = Yl(), c = Gl(), d = Dr(), { pathname: f } = _t(), p = v.useId(), h = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: qy },
      { to: "/commands/sub", label: "Второстепенные команды", icon: Dy },
      { to: "/commands/direct/main", label: "Прямые команды", icon: ff },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: Hy },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: _l },
      ...c ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: _l }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: ff }] : [],
    { to: "/timer", label: "Таймеры", icon: by },
    { to: "/alarm", label: "Будильники", icon: Zf },
    { to: "/monitor", label: "Радионяня", icon: Vl },
    { to: "/calls", label: "Звонки", icon: ql },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: tp }] : [],
    ...a && c ? [{ to: "/logs", label: "Логи", icon: _l }] : [],
    { to: "/settings", label: "Настройки", icon: rp }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const w = requestAnimationFrame(() => {
      var y, _, S;
      return (S = ((y = h.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((_ = h.current) == null ? void 0 : _.querySelector("a"))) == null ? void 0 : S.focus();
    });
    return () => cancelAnimationFrame(w);
  }, [r]), /* @__PURE__ */ o.jsx(Jl, { open: r, onClose: i, labelledBy: p, className: an.overlay, children: /* @__PURE__ */ o.jsxs("div", { ref: h, onKeyDown: (w) => {
    if (w.key !== "Tab") return;
    const y = [...h.current.querySelectorAll("button, a")], _ = y[0], S = y[y.length - 1];
    w.shiftKey && w.target === _ ? (w.preventDefault(), S.focus()) : !w.shiftKey && w.target === S && (w.preventDefault(), _.focus());
  }, children: [
    /* @__PURE__ */ o.jsxs("div", { className: an.heading, children: [
      /* @__PURE__ */ o.jsx("h2", { id: p, children: x("Разделы") }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: an.close, "aria-label": x("Закрыть меню разделов"), onClick: i, children: /* @__PURE__ */ o.jsx(sp, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsx("nav", { className: an.nav, "aria-label": x("Навигация интеграции"), children: g.map(({ to: w, label: y, icon: _ }) => /* @__PURE__ */ o.jsxs(
      ut,
      {
        to: w,
        end: !0,
        className: ({ isActive: S }) => `${an.item} ${S ? an.active : ""}`,
        onClick: (S) => {
          f === w && S.preventDefault(), i();
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: an.icon, children: /* @__PURE__ */ o.jsx(_, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ o.jsx("span", { className: an.label, children: x(y) }),
          f === w ? /* @__PURE__ */ o.jsx(wy, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(gy, { size: 16, className: an.arrow, "aria-hidden": "true" })
        ]
      },
      w
    )) })
  ] }) });
}
const d_ = "_search_1h7xe_1", f_ = {
  search: d_
};
function zr({ value: r, onChange: i }) {
  return /* @__PURE__ */ o.jsxs("div", { className: f_.search, children: [
    /* @__PURE__ */ o.jsx(tg, { size: 18, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "search",
        "aria-label": x("Поиск по названию"),
        placeholder: x("Поиск по названию"),
        value: r,
        onChange: (a) => i(a.target.value)
      }
    )
  ] });
}
const p_ = "_header_1pxju_1", m_ = "_bar_1pxju_9", h_ = "_tools_1pxju_18", v_ = "_title_1pxju_31", y_ = "_menuButton_1pxju_38", g_ = "_active_1pxju_76", Gn = {
  header: p_,
  bar: m_,
  tools: h_,
  title: v_,
  menuButton: y_,
  active: g_
}, dt = ({ title: r = "", search: i, beforeSearch: a }) => {
  const c = Ge(), [d, f] = v.useState(!1), p = v.useRef(null), h = () => {
    var g;
    f(!1), (g = p.current) == null || g.focus();
  };
  return v.useEffect(() => {
    c || f(!1);
  }, [c]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { className: Gn.header, children: [
      /* @__PURE__ */ o.jsxs("div", { className: Gn.bar, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-label": x("Открыть меню Home Assistant"),
            className: Gn.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ o.jsx(np, { size: 20 })
          }
        ),
        /* @__PURE__ */ o.jsx("h1", { className: Gn.title, children: x(r) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            ref: p,
            "aria-label": x("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${Gn.menuButton} ${d ? Gn.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ o.jsx(By, { size: 20 })
          }
        )
      ] }),
      c && (a || i) && /* @__PURE__ */ o.jsxs("div", { className: Gn.tools, children: [
        a,
        i && /* @__PURE__ */ o.jsx(zr, { ...i })
      ] })
    ] }),
    c && /* @__PURE__ */ o.jsx(c_, { open: d, onClose: h })
  ] });
};
function __({ retry: r }) {
  const i = sr();
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
          /* @__PURE__ */ o.jsx(ct, {}),
          /* @__PURE__ */ o.jsx(dt, { title: x("Панель диалога") })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            se,
            {
              variant: "ghost",
              "aria-label": x("Открыть меню Home Assistant"),
              onClick: (c) => c.currentTarget.dispatchEvent(
                new CustomEvent("hass-toggle-menu", {
                  bubbles: !0,
                  composed: !0
                })
              ),
              children: /* @__PURE__ */ o.jsx(np, { size: 22 })
            }
          ),
          /* @__PURE__ */ o.jsx("nav", { "aria-label": x("Разделы панели"), children: [
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
              children: x(d)
            },
            c
          )) })
        ] }) }),
        /* @__PURE__ */ o.jsx("main", { className: "panelRecoveryContent", children: /* @__PURE__ */ o.jsxs("div", { role: "alert", className: "panelRecoveryMessage", children: [
          /* @__PURE__ */ o.jsx("p", { children: x("Не удалось открыть панель. Попробуйте ещё раз.") }),
          /* @__PURE__ */ o.jsx(se, { onClick: r, children: x("Открыть повторно") })
        ] }) })
      ]
    }
  );
}
class dp extends v.Component {
  constructor() {
    super(...arguments);
    Ze(this, "state", { failed: !1 });
    Ze(this, "retry", () => this.setState({ failed: !1 }));
    Ze(this, "routeChanged", () => {
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
    return this.state.failed ? /* @__PURE__ */ o.jsx(__, { retry: this.retry }) : this.props.children;
  }
}
const x_ = "_loader_m2244_1", w_ = "_fullscreen_m2244_11", S_ = "_spinner_m2244_15", k_ = "_label_m2244_24", Zo = {
  loader: x_,
  fullscreen: w_,
  spinner: S_,
  label: k_
}, Or = ({ label: r = "Загрузка...", fullscreen: i = !1 }) => /* @__PURE__ */ o.jsxs("div", { className: `${Zo.loader} ${i ? Zo.fullscreen : ""}`, role: "status", "aria-live": "polite", children: [
  /* @__PURE__ */ o.jsx("span", { className: Zo.spinner, "aria-hidden": "true" }),
  r && /* @__PURE__ */ o.jsx("span", { className: Zo.label, children: x(r) })
] }), j_ = "_error_fi1f1_1", C_ = {
  error: j_
}, Ue = ({ error: r, retry: i, busy: a = !1 }) => r ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: C_.error, children: [
  /* @__PURE__ */ o.jsx("p", { children: x(r) }),
  i && /* @__PURE__ */ o.jsx(se, { variant: "secondary", disabled: a, onClick: i, children: x("Повторить загрузку") })
] }) : null, pf = {
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
function At(r, i = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.") {
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? (r.code === "call_error" || r.code === "monitor_error" || r.code === "whisper_prompt_error") && "message" in r && typeof r.message == "string" ? r.message : pf[r.code] ?? i : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? pf.connection_lost : i;
}
function Bt() {
  const [r, i] = v.useState(null), [a, c] = v.useState(!1), [d, f] = v.useState(!1), p = v.useRef(0), h = v.useRef(null), g = v.useCallback(async (_, S = {}) => {
    if (S.exclusive && p.current > 0) return !1;
    p.current += 1, c(!0), i(null), f(!1);
    try {
      return await _(), h.current = null, !0;
    } catch (C) {
      return i(At(C, S.fallback)), h.current = S.retryable ? _ : null, f(!!S.retryable), !1;
    } finally {
      p.current -= 1, c(p.current > 0);
    }
  }, []), w = v.useCallback(() => {
    h.current && g(h.current, { retryable: !0 });
  }, [g]), y = v.useCallback(() => {
    i(null), f(!1), h.current = null;
  }, []);
  return { error: r, busy: a, retry: d ? w : void 0, run: g, clearError: y };
}
const fp = v.createContext(null);
function ot() {
  const r = v.useContext(fp);
  if (!r)
    throw new Error(
      "DialogContext not initialized"
    );
  return r;
}
const E_ = "_toast_1g76h_1", N_ = "_warning_1g76h_43", mf = {
  toast: E_,
  warning: N_
};
function T_({ message: r, warning: i = !1, onClose: a }) {
  v.useEffect(() => {
    const d = setTimeout(a, 5e3);
    return () => clearTimeout(d);
  }, [r, i, a]);
  const c = i ? lg : jy;
  return /* @__PURE__ */ o.jsxs("div", { role: "status", "aria-live": "polite", className: `${mf.toast} ${i ? mf.warning : ""}`, children: [
    /* @__PURE__ */ o.jsx(c, { size: 22, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("span", { children: r }),
    /* @__PURE__ */ o.jsx("button", { type: "button", "aria-label": x("Закрыть уведомление"), onClick: a, children: /* @__PURE__ */ o.jsx(sp, { size: 18 }) })
  ] });
}
const pp = {
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
  return (i = Object.entries(pp).find(([a]) => r === a || r === x(a))) == null ? void 0 : i[1];
}
function ma(r) {
  const i = x(pp["Название команды"]);
  return r ? `${i}
UUID: ${r}` : i;
}
const R_ = "_labelRow_1w41x_1", b_ = "_helpButton_1w41x_12", P_ = "_tooltip_1w41x_37", A_ = "_helpOverlay_1w41x_56", $_ = "_sheetContent_1w41x_60", Ds = {
  labelRow: R_,
  helpButton: b_,
  tooltip: P_,
  helpOverlay: A_,
  sheetContent: $_
};
function Xl({ label: r, htmlFor: i, className: a, hint: c }) {
  const d = c ?? mp(r);
  return /* @__PURE__ */ o.jsxs("div", { className: Ds.labelRow, children: [
    /* @__PURE__ */ o.jsx("label", { htmlFor: i, className: a, children: x(r) }),
    d && /* @__PURE__ */ o.jsx(Ir, { label: r, description: d })
  ] });
}
function Ir({ label: r, description: i = mp(r) ?? "" }) {
  var j, T;
  const a = Ge(), [c, d] = v.useState(!1), [f, p] = v.useState({ left: 12, top: 12 }), h = v.useRef(null), g = v.useRef(null), w = v.useRef(), y = v.useId(), _ = () => {
    var E;
    d(!1), a && ((E = h.current) == null || E.focus());
  }, S = () => {
    clearTimeout(w.current), d(!0);
  }, C = () => {
    w.current = setTimeout(() => d(!1), 150);
  };
  v.useEffect(() => () => clearTimeout(w.current), []), v.useEffect(() => {
    d(!1);
  }, [a]), v.useLayoutEffect(() => {
    if (!c || a || !h.current || !g.current) return;
    const E = h.current.getBoundingClientRect(), O = g.current.getBoundingClientRect();
    p({
      left: Math.max(12, Math.min(E.left, window.innerWidth - O.width - 12)),
      top: Math.max(12, E.bottom + 8 + O.height <= window.innerHeight - 12 ? E.bottom + 8 : E.top - O.height - 8)
    });
  }, [c, a]), v.useEffect(() => {
    if (!c) return;
    const E = (A) => {
      A.key === "Escape" ? (A.preventDefault(), A.stopImmediatePropagation(), _()) : a && A.key === "Tab" && A.preventDefault();
    };
    window.addEventListener("keydown", E, !0);
    const O = (A) => {
      var H;
      !a && !(A.target instanceof Node && ((H = g.current) != null && H.contains(A.target))) && d(!1);
    };
    return window.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      window.removeEventListener("keydown", E, !0), window.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O);
    };
  }, [c, a]);
  const N = ((j = h.current) == null ? void 0 : j.closest("[data-theme]")) ?? ((T = h.current) == null ? void 0 : T.getRootNode());
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        ref: h,
        type: "button",
        className: Ds.helpButton,
        "aria-label": `${x("Подсказка")}: ${x(r)}`,
        "aria-describedby": c && !a ? y : void 0,
        "aria-haspopup": a ? "dialog" : void 0,
        "aria-expanded": a ? c : void 0,
        onMouseEnter: () => {
          a || S();
        },
        onMouseLeave: () => {
          a || C();
        },
        onFocus: () => {
          a || S();
        },
        onBlur: () => {
          a || C();
        },
        onClick: S,
        children: /* @__PURE__ */ o.jsx(Ey, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && N && Jf.createPortal(a ? /* @__PURE__ */ o.jsx(Jl, { open: !0, onClose: _, className: Ds.helpOverlay, labelledBy: y, children: /* @__PURE__ */ o.jsxs("div", { className: Ds.sheetContent, children: [
      /* @__PURE__ */ o.jsx("h3", { id: y, children: x(r) }),
      /* @__PURE__ */ o.jsx("p", { children: x(i) }),
      /* @__PURE__ */ o.jsx(se, { autoFocus: !0, variant: "secondary", onClick: _, children: x("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: g,
        id: y,
        role: "tooltip",
        className: Ds.tooltip,
        style: f,
        onMouseEnter: S,
        onMouseLeave: C,
        children: x(i)
      }
    ), N)
  ] });
}
const M_ = "_field_1vuim_1", I_ = "_label_1vuim_10", L_ = "_inputWrapper_1vuim_18", D_ = "_input_1vuim_18", z_ = "_passwordInput_1vuim_40", O_ = "_passwordToggle_1vuim_66", F_ = "_error_1vuim_95", H_ = "_errorText_1vuim_108", An = {
  field: M_,
  label: I_,
  inputWrapper: L_,
  input: D_,
  passwordInput: z_,
  passwordToggle: O_,
  error: F_,
  errorText: H_
}, Ve = ({
  label: r,
  hint: i,
  error: a,
  disabled: c,
  className: d = "",
  id: f,
  type: p,
  ...h
}) => {
  const g = v.useId(), [w, y] = v.useState(!1), _ = f ?? g, S = p === "password" && w ? "text" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: An.field, children: [
    r && /* @__PURE__ */ o.jsx(Xl, { label: r, htmlFor: _, className: An.label, hint: i }),
    /* @__PURE__ */ o.jsxs("div", { className: An.inputWrapper, children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: _,
          disabled: c,
          type: S,
          ...h,
          "aria-invalid": a ? !0 : h["aria-invalid"],
          "aria-describedby": [h["aria-describedby"], a ? `${_}-error` : void 0].filter(Boolean).join(" ") || void 0,
          className: `
            ${An.input}
            ${p === "password" ? An.passwordInput : ""}
            ${a ? An.error : ""}
            ${d}
          `
        }
      ),
      p === "password" && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: An.passwordToggle,
          onClick: () => y((C) => !C),
          disabled: c,
          "aria-label": w ? "Hide password" : "Show password",
          children: w ? "🙈" : "👁"
        }
      )
    ] }),
    a && /* @__PURE__ */ o.jsx("span", { id: `${_}-error`, className: An.errorText, children: x(a) })
  ] });
}, W_ = "_field_1aipr_1", B_ = "_label_1aipr_8", U_ = "_textarea_1aipr_14", V_ = "_error_1aipr_46", q_ = "_errorText_1aipr_55", $s = {
  field: W_,
  label: B_,
  textarea: U_,
  error: V_,
  errorText: q_
}, tr = ({
  label: r,
  hint: i,
  error: a,
  className: c = "",
  id: d,
  ...f
}) => {
  const p = v.useId(), h = d ?? p;
  return /* @__PURE__ */ o.jsxs("div", { className: $s.field, children: [
    r && /* @__PURE__ */ o.jsx(Xl, { label: r, htmlFor: h, className: $s.label, hint: i }),
    /* @__PURE__ */ o.jsx(
      "textarea",
      {
        id: h,
        ...f,
        className: `
          ${$s.textarea}
          ${a ? $s.error : ""}
          ${c}
        `
      }
    ),
    a && /* @__PURE__ */ o.jsx("span", { className: $s.errorText, children: x(a) })
  ] });
}, Q_ = "_form_15zw4_1", K_ = "_actions_15zw4_8", hf = {
  form: Q_,
  actions: K_
};
function Y_() {
  const r = ot(), i = Bt(), [a, c] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [p, h] = v.useState(""), [g, w] = v.useState(!1), [y, _] = v.useState(null);
  v.useEffect(() => {
    let N = !0;
    return i.run(async () => {
      const j = await r.getData("get_whisper_prompt");
      N && (c({ ...j, initial_prompt: Array.isArray(j.initial_prompt) ? j.initial_prompt.join("; ") : j.initial_prompt }), h(j.url), w(!0));
    }, { retryable: !0 }), () => {
      N = !1;
    };
  }, [r, i.run]);
  const S = (N) => {
    c((j) => ({ ...j, ...N })), _(null);
  }, C = (N) => i.run(async () => {
    const j = await r.saveData({
      url: a.url,
      token: d,
      apply: N,
      initial_prompt: a.initial_prompt
    }, "save_whisper_prompt");
    c((T) => ({ ...T, initial_prompt: Array.isArray(j.initial_prompt) ? j.initial_prompt.join("; ") : j.initial_prompt, has_token: !!(d.trim() || T.has_token && a.url === p) })), _({ message: N ? j.applied ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен." : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно." : "Сохранено в Home Assistant.", warning: N && !j.applied }), h(a.url), f("");
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs("section", { className: hf.form, children: [
    /* @__PURE__ */ o.jsx(Ue, { ...i }),
    !g && !i.error && /* @__PURE__ */ o.jsx(Or, {}),
    g && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        Ve,
        {
          label: x("Адрес API Whisper"),
          hint: x("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен."),
          placeholder: "http://192.168.1.10:10301",
          value: a.url,
          disabled: i.busy,
          onChange: (N) => S({ url: N.target.value })
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ve,
        {
          label: x("Токен API Whisper"),
          hint: x("Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса."),
          type: "password",
          value: d,
          disabled: i.busy,
          autoComplete: "new-password",
          placeholder: a.has_token && a.url === p ? x("Токен сохранён; оставьте пустым, чтобы сохранить его") : "",
          onChange: (N) => {
            f(N.target.value), _(null);
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        tr,
        {
          label: x("Промпт распознавания"),
          hint: x("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели."),
          rows: 10,
          maxLength: 16e3,
          value: a.initial_prompt,
          disabled: i.busy,
          onChange: (N) => S({ initial_prompt: N.target.value })
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: hf.actions, children: [
        /* @__PURE__ */ o.jsx(se, { variant: "secondary", disabled: i.busy, onClick: () => void C(!1), children: x("Сохранить") }),
        /* @__PURE__ */ o.jsx(se, { disabled: i.busy || !a.url.trim(), onClick: () => void C(!0), children: x("Отправить в Whisper") })
      ] }),
      y && /* @__PURE__ */ o.jsx(T_, { message: x(y.message), warning: y.warning, onClose: () => _(null) })
    ] })
  ] });
}
const G_ = "_page_z6937_7", J_ = "_header_z6937_19", X_ = "_headerTop_z6937_24", Z_ = "_heading_z6937_31", e1 = "_title_z6937_36", t1 = "_description_z6937_45", n1 = "_actions_z6937_52", r1 = "_list_z6937_57", s1 = "_innerTabs_z6937_88", o1 = "_innerTab_z6937_88", a1 = "_activeInnerTab_z6937_121", i1 = "_settingsActions_z6937_131", l1 = "_listSentinel_z6937_141", u1 = "_settingsSections_z6937_145", c1 = "_settingsSection_z6937_145", d1 = "_settingsMobileActions_z6937_171", f1 = "_connectionFields_z6937_191", p1 = "_collectionHeader_z6937_197", J = {
  page: G_,
  header: J_,
  headerTop: X_,
  heading: Z_,
  title: e1,
  description: t1,
  actions: n1,
  list: r1,
  innerTabs: s1,
  innerTab: o1,
  activeInnerTab: a1,
  settingsActions: i1,
  listSentinel: l1,
  settingsSections: u1,
  settingsSection: c1,
  settingsMobileActions: d1,
  connectionFields: f1,
  collectionHeader: p1
};
function m1() {
  const r = Ge();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: "Промпт распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !r && /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${J.header} ${J.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: J.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: J.heading, children: !r && /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ o.jsx(Y_, {})
    ] })
  ] });
}
const h1 = "_heading_1w2wz_1", v1 = "_note_1w2wz_6", y1 = "_entries_1w2wz_12", g1 = "_entry_1w2wz_19", _1 = "_line_1w2wz_27", x1 = "_error_1w2wz_40", w1 = "_body_1w2wz_49", $n = {
  heading: h1,
  note: v1,
  entries: y1,
  entry: g1,
  line: _1,
  error: x1,
  body: w1
};
function S1() {
  const r = ot(), i = Bt(), [a, c] = v.useState([]);
  return v.useEffect(() => {
    let d = !0, f;
    const p = async () => {
      await i.run(async () => {
        const h = await r.getData("get_api_logs");
        d && (c(h.logs), f = setTimeout(() => {
          p();
        }, 3e3));
      }, { retryable: !0 });
    };
    return p(), () => {
      d = !1, clearTimeout(f);
    };
  }, [r, i.run]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: x("Логи") }),
    /* @__PURE__ */ o.jsxs("main", { className: J.page, children: [
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsx("h1", { className: $n.heading, children: x("Логи") }),
      /* @__PURE__ */ o.jsx("p", { className: $n.note, children: x("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ o.jsx(Ue, { ...i }),
      !a.length && !i.busy && !i.error && /* @__PURE__ */ o.jsx("p", { children: x("Запросов к API пока нет.") }),
      /* @__PURE__ */ o.jsx("div", { className: $n.entries, children: a.map((d) => /* @__PURE__ */ o.jsxs("article", { className: $n.entry, children: [
        /* @__PURE__ */ o.jsxs("div", { className: $n.line, children: [
          /* @__PURE__ */ o.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ o.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: $n.line, children: [
          /* @__PURE__ */ o.jsx("span", { children: x({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ o.jsxs("span", { className: d.status >= 400 ? $n.error : void 0, children: [
            "HTTP ",
            d.status
          ] }),
          d.duration_ms !== null && /* @__PURE__ */ o.jsxs("span", { children: [
            d.duration_ms,
            " ",
            x("мс")
          ] }),
          d.event && /* @__PURE__ */ o.jsx("code", { children: d.event })
        ] }),
        [["Тело запроса", d.request_body], ["Тело ответа", d.response_body]].map(
          ([f, p]) => p != null && /* @__PURE__ */ o.jsxs("details", { className: $n.body, children: [
            /* @__PURE__ */ o.jsx("summary", { children: x(f) }),
            /* @__PURE__ */ o.jsx("pre", { children: JSON.stringify(p, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var bl = /* @__PURE__ */ new Map(), ea = /* @__PURE__ */ new WeakMap(), vf = 0, k1;
function j1(r) {
  return r ? (ea.has(r) || (vf += 1, ea.set(r, vf.toString())), ea.get(r)) : "0";
}
function C1(r) {
  return Object.keys(r).sort().filter(
    (i) => r[i] !== void 0
  ).map((i) => `${i}_${i === "root" ? j1(r.root) : r[i]}`).toString();
}
function E1(r) {
  const i = C1(r);
  let a = bl.get(i);
  if (!a) {
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
    d = f.thresholds || (Array.isArray(r.threshold) ? r.threshold : [r.threshold || 0]), a = {
      id: i,
      observer: f,
      elements: c
    }, bl.set(i, a);
  }
  return a;
}
function N1(r, i, a = {}, c = k1) {
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
  const { id: d, observer: f, elements: p } = E1(a), h = p.get(r) || [];
  return p.has(r) || p.set(r, h), h.push(i), f.observe(r), function() {
    h.splice(h.indexOf(i), 1), h.length === 0 && (p.delete(r), f.unobserve(r)), p.size === 0 && (f.disconnect(), bl.delete(d));
  };
}
function T1({
  threshold: r,
  delay: i,
  trackVisibility: a,
  rootMargin: c,
  root: d,
  triggerOnce: f,
  skip: p,
  initialInView: h,
  fallbackInView: g,
  onChange: w
} = {}) {
  var y;
  const [_, S] = v.useState(null), C = v.useRef(w), N = v.useRef(h), [j, T] = v.useState({
    inView: !!h,
    entry: void 0
  });
  C.current = w, v.useEffect(
    () => {
      if (N.current === void 0 && (N.current = h), p || !_) return;
      let H;
      return H = N1(
        _,
        (B, M) => {
          const X = N.current;
          N.current = B, !(X === void 0 && !B) && (T({
            inView: B,
            entry: M
          }), C.current && C.current(B, M), M.isIntersecting && f && H && (H(), H = void 0));
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
      _,
      d,
      c,
      f,
      p,
      a,
      g,
      i
    ]
  );
  const E = (y = j.entry) == null ? void 0 : y.target, O = v.useRef(void 0);
  !_ && E && !f && !p && O.current !== E && (O.current = E, T({
    inView: !!h,
    entry: void 0
  }), N.current = h);
  const A = [S, j.inView, j.entry];
  return A.ref = A[0], A.inView = A[1], A.entry = A[2], A;
}
function Fr(r, i, a, c) {
  const { ref: d, inView: f } = T1({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [p, h] = v.useState(!1);
  return v.useEffect(() => {
    !i && (r == null ? void 0 : r.page) === 1 && h(!0);
  }, [i, r]), v.useEffect(() => {
    p && c && f && !i && r && r.page < r.total_pages && a(r.page + 1, !0);
  }, [p, c, f, i, r, a]), d;
}
const wl = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function hp(r) {
  const i = ot(), [a, c] = v.useState(null), [d, f] = v.useState(""), p = v.useRef(""), h = v.useRef(0), [g, w] = v.useState(!0), [y, _] = v.useState(null), S = v.useRef(), C = v.useRef(1), N = v.useRef(!1), j = v.useRef(), T = v.useCallback(async (A, H = !1) => {
    const B = ++h.current, M = p.current.trim(), X = A === void 0 && N.current, U = A ?? C.current;
    _(null), w(!0);
    try {
      let G = wl(await i.getPage(r, U, void 0, M));
      const pe = Math.max(1, G.total_pages);
      if (U > pe && (G = wl(await i.getPage(r, pe, void 0, M))), X && G.page > 1) {
        const ce = await Promise.all(Array.from({ length: G.page - 1 }, (Ne, Ce) => i.getPage(r, Ce + 1, void 0, M).then(wl)));
        G = { ...G, data: [...ce.flatMap((Ne) => Ne.data), ...G.data] };
      }
      if (B !== h.current) return;
      X || (N.current = H), S.current = void 0, C.current = G.page, c((ce) => H && ce ? { ...G, data: [...ce.data, ...G.data] } : G);
    } catch (G) {
      if (B !== h.current) return;
      S.current = { page: A, append: H }, _(At(G, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      B === h.current && w(!1);
    }
  }, [i, r]);
  v.useEffect(() => {
    const A = j.current !== r;
    if (j.current = r, !A && p.current === d) return;
    p.current = d, C.current = 1, N.current = !1, h.current += 1, w(!0);
    const H = window.setTimeout(() => {
      T(1);
    }, A ? 0 : 250);
    return () => window.clearTimeout(H);
  }, [r, T, d]);
  const E = v.useCallback((A) => {
    c((H) => H && { ...H, data: A(H.data) });
  }, []);
  return { query: d, setQuery: f, page: a, loading: g, loadPage: T, updateItems: E, error: y, retry: () => {
    var A, H;
    T((A = S.current) == null ? void 0 : A.page, ((H = S.current) == null ? void 0 : H.append) ?? !1);
  } };
}
function R1() {
  const r = ot(), { query: i, setQuery: a, page: c, loading: d, loadPage: f, error: p, retry: h } = hp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: i, setQuery: a, error: p, retry: h, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (N) => {
    await r.saveData(N, "save_script_action"), await f();
  }, updateScript: async (N, j) => {
    await r.updateRecord(N, "update_script_action", j), await f();
  }, getScriptAction: async (N) => (await r.getRecord(N, "get_script_action")).data, deleteScriptAction: async (N) => {
    await r.deleteRecord(N, "delete_script_action"), await f();
  } };
}
const b1 = "_subtitle_c1esh_1", P1 = "_card_c1esh_6", A1 = "_content_c1esh_32", $1 = "_title_c1esh_40", M1 = "_arrow_c1esh_46", I1 = "_titleOnly_c1esh_57", Ar = {
  subtitle: b1,
  card: P1,
  content: A1,
  title: $1,
  arrow: M1,
  titleOnly: I1
}, Hr = ({
  title: r,
  subTitle: i,
  onClick: a
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    type: "button",
    className: `${Ar.card} ${i ? "" : Ar.titleOnly}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: Ar.content, children: [
        /* @__PURE__ */ o.jsx("div", { className: Ar.title, children: r }),
        i && /* @__PURE__ */ o.jsx("div", { className: Ar.subtitle, children: x(i) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: Ar.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), L1 = "_pagination_r0e80_1", D1 = "_button_r0e80_10", z1 = "_label_r0e80_34", O1 = "_pages_r0e80_40", F1 = "_active_r0e80_48", Jn = {
  pagination: L1,
  button: D1,
  label: z1,
  pages: O1,
  active: F1
}, Wr = ({ page: r, totalPages: i, onChange: a }) => {
  if (i <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, p) => r + p - 2).filter((f) => f >= 1 && f <= i),
    i
  ])).sort((f, p) => f - p), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= i && f !== r && a(f);
  };
  return /* @__PURE__ */ o.jsx("nav", { className: Jn.pagination, "aria-label": x("Страницы списка"), children: /* @__PURE__ */ o.jsxs("div", { className: Jn.pages, children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: Jn.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": x("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, p) => /* @__PURE__ */ o.jsxs(bf.Fragment, { children: [
      p > 0 && f - c[p - 1] > 1 && /* @__PURE__ */ o.jsx("span", { className: Jn.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: `${Jn.button} ${f === r ? Jn.active : ""}`,
          "aria-label": `${x("Страница")} ${f}`,
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
        className: Jn.button,
        disabled: r >= i,
        onClick: () => d(r + 1),
        "aria-label": x("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, H1 = "_overlay_1m3e5_1", W1 = "_modal_1m3e5_1", B1 = "_header_1m3e5_1", U1 = "_body_1m3e5_1", V1 = "_footer_1m3e5_1", q1 = "_sm_1m3e5_32", Q1 = "_md_1m3e5_36", K1 = "_lg_1m3e5_40", Y1 = "_xl_1m3e5_44", G1 = "_title_1m3e5_59", J1 = "_close_1m3e5_86", X1 = "_fields_1m3e5_116", Z1 = "_suspended_1m3e5_124", e0 = "_heading_1m3e5_128", gt = {
  overlay: H1,
  modal: W1,
  header: B1,
  body: U1,
  footer: V1,
  sm: q1,
  md: Q1,
  lg: K1,
  xl: Y1,
  title: G1,
  close: J1,
  fields: X1,
  suspended: Z1,
  heading: e0
}, Ut = ({
  open: r,
  suspended: i = !1,
  feedback: a,
  onClose: c,
  onBack: d,
  title: f,
  dialogLabel: p,
  subtitle: h,
  footer: g,
  children: w,
  size: y = "md"
}) => (cp(r, c), v.useEffect(() => {
  if (!r || i) return;
  document.body.style.overflow = "hidden";
  const _ = (S) => {
    S.key === "Escape" && c();
  };
  return window.addEventListener(
    "keydown",
    _
  ), () => {
    document.body.style.overflow = "", window.removeEventListener(
      "keydown",
      _
    );
  };
}, [r, c, i]), r ? /* @__PURE__ */ o.jsx(
  "div",
  {
    className: `${gt.overlay} ${i ? gt.suspended : ""}`,
    "aria-hidden": i || void 0,
    onClick: c,
    children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `${gt.modal} ${gt[y]}`,
        role: p ? "dialog" : void 0,
        "aria-modal": p ? !0 : void 0,
        "aria-label": p,
        onClick: (_) => _.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: gt.header, children: [
            d && /* @__PURE__ */ o.jsx(
              se,
              {
                variant: "ghost",
                className: gt.close,
                "aria-label": x("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ o.jsx(vy, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (h ? /* @__PURE__ */ o.jsxs("div", { className: gt.heading, children: [
              /* @__PURE__ */ o.jsx("h2", { className: gt.title, children: x(f) }),
              h
            ] }) : /* @__PURE__ */ o.jsx("h2", { className: gt.title, children: x(f) })),
            /* @__PURE__ */ o.jsx(
              se,
              {
                variant: "ghost",
                className: gt.close,
                "aria-label": p ? x("Закрыть") : void 0,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: gt.body, children: [
            /* @__PURE__ */ o.jsx(Ue, { ...a }),
            /* @__PURE__ */ o.jsx("fieldset", { className: gt.fields, disabled: a == null ? void 0 : a.busy, children: w })
          ] }),
          g && /* @__PURE__ */ o.jsx("div", { className: gt.footer, children: /* @__PURE__ */ o.jsx("fieldset", { className: gt.fields, disabled: a == null ? void 0 : a.busy, children: g }) })
        ]
      }
    )
  }
) : null), t0 = "_content_eng69_1", n0 = "_title_eng69_7", r0 = "_actions_eng69_14", s0 = "_row_eng69_20", o0 = "_identifier_eng69_31", Ms = {
  content: t0,
  title: n0,
  actions: r0,
  row: s0,
  identifier: o0
}, Zl = ({ open: r, title: i, uuid: a, onClose: c, actions: d, size: f = "md", layout: p = "column" }) => {
  const h = Ge(), g = a ? /* @__PURE__ */ o.jsx("p", { className: Ms.identifier, children: a }) : null, w = /* @__PURE__ */ o.jsxs("div", { className: Ms.content, children: [
    h && /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx("h3", { className: Ms.title, children: i }),
      g
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `${Ms.actions} ${p === "row" && !h ? Ms.row : ""}`, children: d.map((y) => /* @__PURE__ */ o.jsx(se, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: x(y.label) }, y.label)) })
  ] });
  return h ? /* @__PURE__ */ o.jsx(Jl, { open: r, onClose: c, children: w }) : /* @__PURE__ */ o.jsx(Ut, { open: r, onClose: c, title: i, subtitle: g, size: f, children: w });
}, a0 = ({ uuid: r, title: i, open: a, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Zl, { open: a, title: i, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, i0 = "_accordion_5owbj_1", l0 = "_header_5owbj_7", u0 = "_content_5owbj_20", ta = {
  accordion: i0,
  header: l0,
  content: u0
}, c0 = ({
  title: r,
  defaultOpen: i = !1,
  children: a
}) => {
  const [c, d] = v.useState(i);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: ta.accordion,
      "data-open": c,
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: ta.header,
            onClick: () => d((f) => !f),
            "aria-expanded": c,
            children: [
              /* @__PURE__ */ o.jsx("span", { children: x(r) }),
              /* @__PURE__ */ o.jsx("span", { className: ta.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ o.jsx("div", { className: ta.content, children: a })
      ]
    }
  );
}, d0 = "_wrapper_1fgdg_1", f0 = "_dropdown_1fgdg_10", p0 = "_option_1fgdg_22", m0 = "_title_1fgdg_46", h0 = "_uuid_1fgdg_51", v0 = "_hint_1fgdg_52", Xn = {
  wrapper: d0,
  dropdown: f0,
  option: p0,
  title: m0,
  uuid: h0,
  hint: v0
}, y0 = ({
  label: r = "uuid",
  value: i,
  selectedTitle: a,
  searchSource: c = ["search_assistant_commands"],
  minQueryLength: d = 2,
  onChange: f,
  onSelect: p,
  getSelectedValue: h,
  error: g
}) => {
  const w = ot(), y = JSON.stringify(c), _ = v.useMemo(() => JSON.parse(y), [y]), [S, C] = v.useState(null), N = h ? "" : a || ((S == null ? void 0 : S.uuid) === i ? S.title : "");
  v.useEffect(() => {
    var F;
    if (!i || a || h || (F = ce.current) != null && F.contains(document.activeElement)) return;
    let z = !1;
    return (async () => {
      var Q;
      try {
        for (const b of _) {
          const oe = (Q = (await w.searchAssistantCommands(i, b)).data) == null ? void 0 : Q.find((fe) => fe.uuid === i);
          if (oe) {
            z || C(oe);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      z = !0;
    };
  }, [w, i, a, h, _]);
  const [j, T] = v.useState(null), [E, O] = v.useState(0), [A, H] = v.useState([]), [B, M] = v.useState(!1), [X, U] = v.useState(!1), [G, pe] = v.useState(!1), ce = v.useRef(null), [Ne, Ce] = v.useState({});
  v.useEffect(() => {
    var F, Q;
    if (!B) return;
    const z = () => {
      var Ur, In;
      const b = (In = (Ur = ce.current) == null ? void 0 : Ur.querySelector("input")) == null ? void 0 : In.getBoundingClientRect();
      if (!b) return;
      const L = window.visualViewport, oe = ((L == null ? void 0 : L.offsetTop) ?? 0) + 8, fe = ((L == null ? void 0 : L.offsetTop) ?? 0) + ((L == null ? void 0 : L.height) ?? window.innerHeight) - 8, ye = Math.min(fe, Math.max(oe, b.bottom + 6)), ge = Math.min(fe, Math.max(oe, b.top - 6)), je = fe - ye, xe = ge - oe, Te = je < 180 && xe > je, at = Math.min(260, Te ? xe : je), Mn = Math.max(8, b.left);
      Ce({
        left: Mn,
        width: Math.max(0, Math.min(b.width, window.innerWidth - Mn - 8)),
        top: Te ? ge : ye,
        transform: Te ? "translateY(-100%)" : void 0,
        maxHeight: at
      });
    };
    return z(), window.addEventListener("scroll", z, !0), window.addEventListener("resize", z), (F = window.visualViewport) == null || F.addEventListener("resize", z), (Q = window.visualViewport) == null || Q.addEventListener("scroll", z), () => {
      var b, L;
      window.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z), (b = window.visualViewport) == null || b.removeEventListener("resize", z), (L = window.visualViewport) == null || L.removeEventListener("scroll", z);
    };
  }, [B]);
  const me = v.useRef(0), ve = v.useRef(""), ke = v.useMemo(() => i.trim(), [i]);
  v.useEffect(() => {
    if (!ke) {
      me.current += 1, T(null), ve.current = "", H([]), M(!1);
      return;
    }
    if (ke.length < d) {
      me.current += 1, T(null), H([]), M(!1);
      return;
    }
    if (!G || N) {
      me.current += 1, M(!1), U(!1);
      return;
    }
    if (ve.current === ke)
      return;
    ve.current = ke;
    const z = me.current + 1;
    me.current = z;
    const F = window.setTimeout(async () => {
      U(!0), T(null);
      try {
        let Q = [];
        for (const b of _) {
          const L = await w.searchAssistantCommands(ke, b), oe = Array.isArray(L == null ? void 0 : L.data) ? L.data : [];
          Q.push(...oe);
        }
        if (me.current !== z)
          return;
        H(Q), M(Q.length > 0);
      } catch (Q) {
        me.current === z && (T(At(Q)), H([]), M(!1));
      } finally {
        me.current === z && U(!1);
      }
    }, 250);
    return () => window.clearTimeout(F);
  }, [w, ke, _, d, G, E, N]);
  const W = (z) => {
    const F = h ? h(z) : z.uuid;
    me.current += 1, C(z), ve.current = "", U(!1), H([]), f(F), p == null || p(z), M(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { ref: ce, className: Xn.wrapper, children: [
    /* @__PURE__ */ o.jsx(
      Ve,
      {
        label: r,
        value: N || i,
        autoComplete: "off",
        placeholder: x("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          pe(!1), window.setTimeout(() => M(!1), 150);
        },
        onFocus: () => {
          pe(!0), M(!N && A.length > 0);
        },
        onChange: (z) => {
          C(null), f(z.target.value);
        }
      }
    ),
    B && ce.current && Jf.createPortal(
      /* @__PURE__ */ o.jsx("div", { role: "listbox", className: Xn.dropdown, style: Ne, children: A.map((z) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: Xn.option,
          onMouseDown: (F) => F.preventDefault(),
          onClick: () => W(z),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: Xn.title, children: z.title || "Без названия" }),
            /* @__PURE__ */ o.jsx("span", { className: Xn.uuid, children: z.uuid }),
            z.mappingType && /* @__PURE__ */ o.jsxs("span", { className: Xn.uuid, children: [
              x("mappingType:"),
              z.mappingType
            ] })
          ]
        },
        z.uuid
      )) }),
      ce.current.closest("[data-theme]") ?? ce.current
    ),
    /* @__PURE__ */ o.jsx(Ue, { error: j, busy: X, retry: () => {
      var z, F;
      ve.current = "", (F = (z = ce.current) == null ? void 0 : z.querySelector("input")) == null || F.focus(), O((Q) => Q + 1);
    } }),
    X && /* @__PURE__ */ o.jsx("span", { className: Xn.hint, children: x("Поиск...") })
  ] });
}, g0 = "_field_1esqu_1", _0 = "_row_1esqu_5", x0 = "_inputWrapper_1esqu_11", w0 = "_clearButton_1esqu_22", S0 = "_rowError_1esqu_31", Ht = {
  field: g0,
  row: _0,
  inputWrapper: x0,
  clearButton: w0,
  rowError: S0
}, k0 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function Sl({ field: r, value: i, error: a, onChange: c }) {
  return Dr() ? /* @__PURE__ */ o.jsx(Ve, { label: x(r), value: i, error: a, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ o.jsx(
    y0,
    {
      label: x(r),
      value: i,
      error: a,
      searchSource: [k0[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const j0 = ({
  condition: r,
  index: i,
  defaultOpen: a,
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
    c0,
    {
      title: `${x("Условие")} ${i + 1}`,
      defaultOpen: a,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: Ht.field, children: /* @__PURE__ */ o.jsx(
          Sl,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: p == null ? void 0 : p.parent_type,
            onChange: (_) => c({ ...r, parent_type: _ })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Ht.field, children: h ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Ht.row} ${p != null && p.children_type ? Ht.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Ht.inputWrapper, children: /* @__PURE__ */ o.jsx(
                Sl,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: p == null ? void 0 : p.children_type,
                  onChange: (_) => c({ ...r, children_type: _ })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                se,
                {
                  type: "button",
                  variant: "ghost",
                  className: Ht.clearButton,
                  "aria-label": x("Убрать второстепенную команду"),
                  onClick: w,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          se,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => c({
              ...r,
              children_type: ""
            }),
            children: x("🞢 Добавить второстепенную команду")
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Ht.field, children: g ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Ht.row} ${p != null && p.children_direct_type ? Ht.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Ht.inputWrapper, children: /* @__PURE__ */ o.jsx(
                Sl,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: p == null ? void 0 : p.children_direct_type,
                  onChange: (_) => c({ ...r, children_direct_type: _ })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                se,
                {
                  type: "button",
                  variant: "ghost",
                  className: Ht.clearButton,
                  "aria-label": x("Убрать прямую команду"),
                  onClick: y,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          se,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => c({
              ...r,
              children_direct_type: ""
            }),
            children: x("🞢 Добавить прямую команду")
          }
        ) }),
        f > 1 && /* @__PURE__ */ o.jsx(
          se,
          {
            type: "button",
            variant: "remove",
            onClick: d,
            children: x("Удалить")
          }
        )
      ]
    }
  );
}, C0 = "_dropdown_3mupk_2", E0 = "_label_3mupk_11", N0 = "_wrapper_3mupk_19", T0 = "_select_3mupk_23", R0 = "_arrow_3mupk_65", b0 = "_error_3mupk_85", P0 = "_errorText_3mupk_103", Zn = {
  dropdown: C0,
  label: E0,
  wrapper: N0,
  select: T0,
  arrow: R0,
  error: b0,
  errorText: P0
};
function Mr({
  label: r,
  options: i,
  value: a = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: f
}) {
  const p = v.useId();
  return /* @__PURE__ */ o.jsxs("div", { className: Zn.dropdown, children: [
    r && /* @__PURE__ */ o.jsx(
      "label",
      {
        htmlFor: p,
        className: Zn.label,
        children: x(r)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: Zn.wrapper, children: [
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: p,
          className: `
            ${Zn.select}
            ${d ? Zn.error : ""}
          `,
          value: a,
          onChange: (h) => f == null ? void 0 : f(h.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: x(c) }),
            i.map((h) => /* @__PURE__ */ o.jsx(
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
        ep,
        {
          size: 18,
          className: Zn.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsx("span", { className: Zn.errorText, children: x(d) })
  ] });
}
const A0 = "_form_1ogov_1", $0 = "_section_1ogov_7", M0 = "_sectionTitle_1ogov_18", I0 = "_conditions_1ogov_27", L0 = "_addCondition_1ogov_33", $r = {
  form: A0,
  section: $0,
  sectionTitle: M0,
  conditions: I0,
  addCondition: L0
}, D0 = ({
  open: r,
  feedback: i,
  initialData: a,
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
  }), [y, _] = v.useState({
    conditions: []
  });
  v.useEffect(() => {
    w({
      uuid: (a == null ? void 0 : a.uuid) || "",
      name: (a == null ? void 0 : a.name) || "",
      script_entity_id: (a == null ? void 0 : a.script_entity_id) || "",
      conditions: (a == null ? void 0 : a.conditions) || [
        {
          parent_type: ""
        }
      ]
    }), _({
      conditions: []
    });
  }, [a, r]);
  const S = (E) => {
    w(E);
  }, C = () => {
    S({
      ...g,
      conditions: [
        ...g.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, N = (E, O) => {
    const A = [...g.conditions];
    A[E] = O, S({
      ...g,
      conditions: A
    });
  }, j = (E) => {
    const O = g.conditions.filter(
      (A, H) => H !== E
    );
    S({
      ...g,
      conditions: O.length > 0 ? O : [
        {
          parent_type: ""
        }
      ]
    });
  }, T = () => {
    const E = {
      conditions: []
    };
    return g.name.trim() || (E.name = "Обязательное поле"), g.script_entity_id || (E.script_entity_id = "Обязательное поле"), g.conditions.forEach(
      (O, A) => {
        const H = {};
        O.parent_type.trim() || (H.parent_type = "Обязательное поле"), O.children_type !== void 0 && !O.children_type.trim() && (H.children_type = "Обязательное поле"), O.children_direct_type !== void 0 && !O.children_direct_type.trim() && (H.children_direct_type = "Обязательное поле"), E.conditions[A] = H;
      }
    ), _(E), !E.name && !E.script_entity_id && E.conditions.every(
      (O) => Object.keys(O).length === 0
    );
  };
  return /* @__PURE__ */ o.jsx(
    Ut,
    {
      feedback: i,
      open: r,
      onClose: h,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ o.jsx(
        se,
        {
          disabled: f,
          onClick: () => {
            T() && (p == null || p(g));
          },
          children: x("Сохранить")
        }
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: $r.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: $r.section, children: [
          /* @__PURE__ */ o.jsx(
            Ve,
            {
              label: x("Название"),
              value: g.name,
              error: y.name,
              onChange: (E) => S({
                ...g,
                name: E.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Mr,
            {
              label: x("Скрипт"),
              error: y.script_entity_id,
              options: c.map(
                (E) => ({
                  label: E.name,
                  value: E.entity_id
                })
              ),
              value: g.script_entity_id,
              onSelect: (E) => S({
                ...g,
                script_entity_id: E
              })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: $r.section, children: [
          /* @__PURE__ */ o.jsx("h3", { className: $r.sectionTitle, children: x("Условия") }),
          /* @__PURE__ */ o.jsx("div", { className: $r.conditions, children: g.conditions.map(
            (E, O, A) => /* @__PURE__ */ o.jsx(
              j0,
              {
                index: O,
                condition: E,
                defaultOpen: !d,
                errors: y.conditions[O],
                onChange: (H) => N(
                  O,
                  H
                ),
                onDelete: () => j(O),
                totalCount: A.length
              },
              O
            )
          ) }),
          /* @__PURE__ */ o.jsx(
            se,
            {
              type: "button",
              className: $r.addCondition,
              onClick: C,
              children: x("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, z0 = "_container_rqdjx_1", O0 = "_rows_rqdjx_9", F0 = "_hidden_rqdjx_20", H0 = "_overlay_rqdjx_24", W0 = "_card_rqdjx_32", B0 = "_title_rqdjx_51", U0 = "_subtitle_rqdjx_51", V0 = "_srOnly_rqdjx_70", ln = {
  container: z0,
  rows: O0,
  hidden: F0,
  overlay: H0,
  card: W0,
  title: B0,
  subtitle: U0,
  srOnly: V0
};
function Br({ loading: r, itemCount: i, append: a = !1, children: c }) {
  const d = r && i > 0 && !a, f = r && /* @__PURE__ */ o.jsxs("div", { className: d ? ln.overlay : ln.rows, role: "status", children: [
    /* @__PURE__ */ o.jsx("span", { className: ln.srOnly, children: x("Загрузка...") }),
    Array.from({ length: d ? i : a && i > 0 ? 3 : 10 }, (p, h) => /* @__PURE__ */ o.jsxs("div", { className: ln.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: ln.title }),
      /* @__PURE__ */ o.jsx("span", { className: ln.subtitle })
    ] }, h))
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: ln.container, "aria-busy": r, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${ln.rows} ${d ? ln.hidden : ""}`, "aria-hidden": d || void 0, children: c }),
    f
  ] });
}
const q0 = "_container_9wouv_1", Q0 = "_visible_9wouv_20", yf = {
  container: q0,
  visible: Q0
}, or = ({
  children: r,
  offset: i = 10,
  startVisible: a = !1
}) => {
  const c = v.useRef(null), [d, f] = v.useState(a);
  return v.useEffect(() => {
    var _;
    const p = (_ = c.current) == null ? void 0 : _.getRootNode(), h = p instanceof ShadowRoot ? p.host : null, g = () => window.scrollY + ((h == null ? void 0 : h.scrollTop) ?? 0);
    let w = g();
    const y = () => {
      const S = g();
      S !== w && (S > w && S > i ? f(!0) : f(!1), w = S);
    };
    return h == null || h.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("scroll", y, {
      passive: !0
    }), () => {
      h == null || h.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
  }, [i]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: c,
      className: `${yf.container} ${d ? yf.visible : ""}`,
      children: r
    }
  );
}, K0 = () => {
  const r = Bt(), i = Dr(), a = i ? "Действия удалённых команд" : "Запуск скриптов", c = Ge(), [d, f] = v.useState(), [p, h] = v.useState(!1), [g, w] = v.useState(!1), [y, _] = v.useState({ uuid: "", title: "" }), [S, C] = v.useState(!1), {
    query: N,
    setQuery: j,
    error: T,
    retry: E,
    loading: O,
    scripts: A,
    getAvailableScripts: H,
    loadScripts: B,
    saveScript: M,
    updateScript: X,
    getScriptAction: U,
    deleteScriptAction: G
  } = R1(), pe = Fr(A, O || !!T, B, c), ce = { error: r.error ?? T, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), E();
  }) : E }, Ne = () => {
    r.clearError(), f(void 0), C(!1), h(!0);
  }, Ce = (W) => {
    w(!0), _(W);
  }, me = (W) => r.run(async () => {
    C(!0);
    const z = await U(
      W
    );
    f(z), h(!0);
  }, { retryable: !0 }), ve = async (W) => {
    await r.run(async () => {
      if (S) {
        if (!W.uuid) return;
        const { uuid: z, ...F } = W;
        await X(W.uuid, F);
      } else
        await M(W);
      h(!1);
    }, { exclusive: !0 });
  }, ke = (W) => r.run(async () => {
    W && await G(W);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: N, onChange: j },
        title: a
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !p && /* @__PURE__ */ o.jsx(Ue, { ...ce }),
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x(a) }),
          /* @__PURE__ */ o.jsx("p", { className: J.description, children: x(i ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: c ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(
          se,
          {
            variant: "primary",
            onClick: Ne,
            children: x("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
          se,
          {
            variant: "primary",
            onClick: Ne,
            children: x("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ o.jsx(zr, { value: N, onChange: j })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: O, itemCount: (A == null ? void 0 : A.script_actions.length) ?? 0, append: c, children: A == null ? void 0 : A.script_actions.map((W) => /* @__PURE__ */ o.jsx(
          Hr,
          {
            title: W.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => Ce(W)
          },
          W.uuid
        )) }),
        !O && !T && N.trim() && !(A != null && A.script_actions.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") }),
        c ? /* @__PURE__ */ o.jsx("div", { ref: pe, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (A == null ? void 0 : A.page) || 1,
          totalPages: (A == null ? void 0 : A.total_pages) || 1,
          onChange: B
        }
      ),
      /* @__PURE__ */ o.jsx(
        a0,
        {
          uuid: y.uuid,
          open: g,
          title: y.title,
          onClose: () => w(!1),
          onEdit: me,
          onDelete: ke
        }
      ),
      /* @__PURE__ */ o.jsx(
        D0,
        {
          feedback: ce,
          open: p,
          initialData: d,
          isEdit: S,
          availableScripts: H(),
          loading: O,
          onCancel: () => h(!1),
          onSave: async (W) => {
            await ve(W);
          }
        }
      )
    ] })
  ] });
}, vp = (r) => ({
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
function yp(r) {
  const i = ot(), { query: a, setQuery: c, page: d, loading: f, loadPage: p, updateItems: h, error: g, retry: w } = hp(r);
  return { query: a, setQuery: c, error: g, retry: w, loading: f, commands: d, loadCommands: p, saveCommand: (j, T) => i.saveData(T, j), updateCommand: async (j, T) => {
    if (!T.uuid) return;
    const { uuid: E, ...O } = T, A = await i.updateRecord(E, j, O);
    return await p(), A;
  }, deleteCommand: (j, T) => i.deleteRecord(T, j), setCommandStatus: async (j, T, E) => {
    const O = await i.updateRecordStatus(j, T, E);
    return h((A) => A.map((H) => H.uuid === T ? { ...H, status: E } : H)), O;
  }, getCommandDetails: (j, T) => i.getRecord(T, j) };
}
const Y0 = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function ha(r, i) {
  const a = Y0[r], { query: c, setQuery: d, commands: f, loading: p, loadCommands: h, getCommandDetails: g, saveCommand: w, updateCommand: y, deleteCommand: _, setCommandStatus: S, error: C, retry: N } = yp(a.list), j = Bt(), [T, E] = v.useState(!1), [O, A] = v.useState(!1), [H, B] = v.useState(i), [M, X] = v.useState(null), U = () => {
    j.clearError(), A(!1), B(i()), E(!0);
  }, G = (me) => j.run(async () => {
    const ve = await g(a.detail, me);
    A(!0);
    const ke = { ...ve.data, status: ve.data.status ?? !1 };
    for (const W of ["componentDialog", "subComponentDialog"]) {
      const z = ke[W];
      z && (z.nextAction = (z.nextAction ?? []).filter(
        (F) => !F.actionTypeComponent || ["children", "custom"].includes(F.actionTypeComponent)
      ));
    }
    B(ke), E(!0);
  }, { retryable: !0 }), pe = (me, ve) => j.run(async () => {
    a.status && await S(a.status, me, ve);
  }, { exclusive: !0 }), ce = (me) => j.run(async () => {
    await _(a.remove, me), await h();
  }, { exclusive: !0 }), Ne = () => j.run(async () => {
    await w(a.create, H), E(!1), await h();
  }, { exclusive: !0 }), Ce = () => j.run(async () => {
    await y(a.update, H), E(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: j.error ?? C, busy: j.busy, retry: j.error ? j.retry ?? (() => {
      j.clearError(), N();
    }) : N },
    listError: C,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: T,
    setModalOpen: E,
    isEdit: O,
    formData: H,
    setFormData: B,
    actionsCommand: M,
    setActionsCommand: X,
    openCreateModal: U,
    openEditModal: G,
    handleToggleStatus: pe,
    handleDelete: ce,
    handleCreate: Ne,
    handleUpdate: Ce
  };
}
const G0 = "_field_1iloj_1", J0 = "_label_1iloj_8", X0 = "_select_1iloj_14", kl = {
  field: G0,
  label: J0,
  select: X0
}, dn = ({
  label: r,
  hint: i,
  options: a,
  className: c = "",
  id: d,
  value: f,
  ...p
}) => {
  const h = v.useId(), g = d ?? h, w = f == null ? "" : String(f), y = !w || a.some((_) => _.value === w);
  return /* @__PURE__ */ o.jsxs("div", { className: kl.field, children: [
    r && /* @__PURE__ */ o.jsx(Xl, { label: r, htmlFor: g, className: kl.label, hint: i }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        id: g,
        ...p,
        value: w,
        className: `${kl.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ o.jsx("option", { value: w, children: w }),
          a.map((_) => /* @__PURE__ */ o.jsx("option", { value: _.value, disabled: _.disabled, children: x(_.label) }, _.value))
        ]
      }
    )
  ] });
};
function Pl({ kind: r, value: i, title: a, onSelect: c }) {
  const d = ot(), [f, p] = v.useState([]), [h, g] = v.useState(!0), [w, y] = v.useState(!1), [_, S] = v.useState(null), [C, N] = v.useState(0), j = v.useRef(null), T = v.useRef(0);
  v.useEffect(() => () => {
    T.current += 1;
  }, []), v.useEffect(() => {
    let H = !1;
    g(!0), S(null);
    const B = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(B.map((M) => d.getAllRecords(M))).then((M) => {
      H || p([...new Map(M.flat().map((X) => [X.uuid, X])).values()]);
    }).catch((M) => {
      H || (S(At(M)), j.current = () => N((X) => X + 1));
    }).finally(() => {
      H || g(!1);
    }), () => {
      H = !0;
    };
  }, [d, r, C]), v.useEffect(() => {
    i && a && p((H) => H.map((B) => B.uuid === i ? { ...B, title: a } : B));
  }, [i, a]);
  const E = async (H) => {
    var X;
    if (!H) {
      T.current += 1, S(null), c({ uuid: "", title: "" });
      return;
    }
    const B = f.find((U) => U.uuid === H);
    if (!B) return;
    const M = ++T.current;
    if (S(null), r !== "direct") {
      c(B);
      return;
    }
    y(!0);
    try {
      const U = await d.getRecord(H, "get_assistant_sub_direct_control");
      M === T.current && c({ ...B, mappingType: ((X = U.data.directControl) == null ? void 0 : X.mappingType) ?? "" });
    } catch (U) {
      M === T.current && (S(At(U)), j.current = () => {
        E(H);
      });
    } finally {
      M === T.current && y(!1);
    }
  }, O = f.map((H) => ({ value: H.uuid, label: H.title || x("Без названия") }));
  i && !f.some((H) => H.uuid === i) && O.unshift({ value: i, label: a || x("Выбранная команда недоступна") });
  const A = x(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(
      dn,
      {
        label: A,
        "aria-label": A,
        value: i,
        disabled: h || w,
        options: [{ value: "", label: x(h ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...O],
        onChange: (H) => {
          E(H.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(Ue, { error: _, busy: h || w, retry: () => {
      var H;
      return (H = j.current) == null ? void 0 : H.call(j);
    } })
  ] });
}
const Z0 = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], ex = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], tx = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], nx = "_form_1a1tt_1", rx = "_field_1a1tt_7", sx = "_arrayItem_1a1tt_29", ox = "_logicTabs_1a1tt_46", ax = "_sectionTitle_1a1tt_85", ix = "_footerActions_1a1tt_92", lx = "_phraseMode_1a1tt_106", ux = "_directTabLabel_1a1tt_122", cx = "_linkActions_1a1tt_126", Ye = {
  form: nx,
  field: rx,
  arrayItem: sx,
  logicTabs: ox,
  sectionTitle: ax,
  footerActions: ix,
  phraseMode: lx,
  directTabLabel: ux,
  linkActions: cx
}, gf = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), gp = ({
  open: r,
  feedback: i,
  onClose: a,
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
  }, _ = v.useMemo(() => d.directControl ?? gf(), [d]), S = (C) => {
    f((N) => ({
      ...N,
      directControl: {
        ...N.directControl ?? gf(),
        ...C
      }
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Ut,
    {
      feedback: i,
      open: r,
      onClose: a,
      onBack: h,
      title: c,
      footer: /* @__PURE__ */ o.jsx("div", { className: Ye.form, children: /* @__PURE__ */ o.jsx(se, { onClick: y, children: x("Сохранить") }) }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Ye.form, children: [
        /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: x("Название команды"),
            hint: ma(d.uuid),
            required: !0,
            error: g,
            value: d.title,
            onChange: (C) => f((N) => ({
              ...N,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: x("mappingType"),
            value: _.mappingType,
            onChange: (C) => S({
              mappingType: C.target.value
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          dn,
          {
            label: x("valueType"),
            value: _.valueType,
            options: ex,
            onChange: (C) => S({
              valueType: C.target.value
            })
          }
        ),
        _.valueType == "command" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: Ye.field, children: /* @__PURE__ */ o.jsx(
            tr,
            {
              label: x("Фразы для запуска"),
              hint: x("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам."),
              rows: 6,
              value: (_.voiceCommands ?? []).join(`
`),
              onChange: (C) => S({
                voiceCommands: C.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsx(
            Pl,
            {
              kind: "nested",
              value: Array.isArray(_.subDirectControl) ? _.subDirectControl.length ? "__inline__" : "" : _.subDirectControl,
              title: Array.isArray(_.subDirectControl) ? x("Сохранённые вложенные команды") : _.subDirectControlTitle,
              onSelect: (C) => S({
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
function dx({ target: r, onBack: i, onSaved: a }) {
  const c = ot(), d = Bt(), [f, p] = v.useState({ title: "" }), [h, g] = v.useState();
  v.useEffect(() => {
    let y = !1;
    return d.run(async () => {
      let _ = r.kind === "direct" ? "direct" : "main", S;
      if (r.kind === "direct") S = await c.getRecord(r.uuid, "get_assistant_sub_direct_control");
      else
        try {
          S = await c.getRecord(r.uuid, "get_assistant_command");
        } catch (C) {
          if (!(C && typeof C == "object" && "code" in C && C.code === "not_found")) throw C;
          _ = "sub", S = await c.getRecord(r.uuid, "get_assistant_sub_command");
        }
      y || (p({ ...S.data, status: S.data.status ?? !1 }), g(_));
    }, { retryable: !0 }), () => {
      y = !0;
    };
  }, [c, r.uuid, r.kind, d.run]);
  const w = () => d.run(async () => {
    if (!h) return;
    const y = h === "direct" ? "update_assistant_sub_direct_control" : h === "main" ? "update_assistant_command" : "update_assistant_sub_command", { uuid: _, ...S } = f;
    await c.updateRecord(r.uuid, y, S), a(f), i();
  }, { exclusive: !0 });
  return h ? h === "direct" ? /* @__PURE__ */ o.jsx(
    gp,
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
    eu,
    {
      open: !0,
      isEdit: !0,
      feedback: d,
      formData: f,
      setFormData: p,
      componentKey: h === "main" ? "componentDialog" : "subComponentDialog",
      onClose: i,
      onBack: i,
      onSave: w,
      onUpdate: w
    }
  ) : /* @__PURE__ */ o.jsx(Ut, { open: !0, onClose: i, onBack: i, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Загрузка...") }) });
}
const fx = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function px({ response: r, onChange: i }) {
  const a = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(a) ? "default" : a === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dn,
      {
        label: x("Типы ответов"),
        "aria-label": x("Типы ответов"),
        value: c,
        options: fx,
        onChange: (d) => i({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ o.jsx(
      Ve,
      {
        label: x("Тип результата скрипта"),
        placeholder: x("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => i({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ o.jsx(
      tr,
      {
        label: x("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => i({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const mx = "_switchRow_1hmmz_1", hx = "_input_1hmmz_11", vx = "_track_1hmmz_22", yx = "_thumb_1hmmz_33", gx = "_label_1hmmz_62", Is = {
  switchRow: mx,
  input: hx,
  track: vx,
  thumb: yx,
  label: gx
}, nr = ({ label: r, className: i = "", ...a }) => /* @__PURE__ */ o.jsxs("label", { className: `${Is.switchRow} ${i}`, children: [
  /* @__PURE__ */ o.jsx("input", { ...a, type: "checkbox", className: Is.input }),
  /* @__PURE__ */ o.jsx("span", { className: Is.track, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: Is.thumb }) }),
  /* @__PURE__ */ o.jsx("span", { className: Is.label, children: x(r) })
] }), _x = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function xx({ component: r, onOpenCommand: i, updateComponentArray: a, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [p, h] = v.useState("direct"), g = _x.filter((y) => y.key !== "direct" || !r.forwardText), w = r.forwardText && p === "direct" ? "continuations" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: Ye.form, children: [
    /* @__PURE__ */ o.jsx("div", { className: Ye.logicTabs, role: "tablist", "aria-label": x("Настройки логики"), children: g.map((y) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: w === y.key ? 0 : -1,
        onKeyDown: (_) => {
          var N, j;
          const S = g.findIndex((T) => T.key === y.key), C = _.key === "ArrowRight" ? (S + 1) % g.length : _.key === "ArrowLeft" ? (S + g.length - 1) % g.length : _.key === "Home" ? 0 : _.key === "End" ? g.length - 1 : -1;
          C < 0 || (_.preventDefault(), h(g[C].key), (j = (N = _.currentTarget.parentElement) == null ? void 0 : N.querySelectorAll('[role="tab"]')[C]) == null || j.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": w === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => h(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ o.jsx("span", { className: Ye.directTabLabel, children: x(y.label).replace(" ", `
`) }) : x(y.label)
      },
      y.key
    )) }),
    w === "continuations" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, _) => /* @__PURE__ */ o.jsxs("div", { className: Ye.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          dn,
          {
            label: x("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: tx,
            onChange: (S) => a("nextAction", _, {
              actionTypeComponent: S.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: x("Тип результата скрипта"),
            placeholder: x("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (S) => a("nextAction", _, {
              actionType: S.target.value
            })
          }
        ) : /* @__PURE__ */ o.jsx(o.Fragment, {}),
        /* @__PURE__ */ o.jsx(
          Pl,
          {
            kind: "continuation",
            value: y.uuid,
            title: y.title,
            onSelect: (S) => a("nextAction", _, {
              uuid: S.uuid,
              title: S.title ?? "",
              actionTypeComponent: y.actionTypeComponent || "children"
            })
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: Ye.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(se, { variant: "secondary", onClick: () => i({ uuid: y.uuid, kind: "continuation" }, _), children: x("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            se,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextAction", _),
              children: x("Удалить")
            }
          )
        ] })
      ] }, _)),
      /* @__PURE__ */ o.jsx(
        se,
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
          children: x("Добавить ещё")
        }
      )
    ] }),
    w === "direct" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-direct`, "aria-labelledby": `${f}-command-logic-tab-direct`, children: [
      (r.nextDirectControl ?? []).map((y, _) => /* @__PURE__ */ o.jsxs("div", { className: Ye.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          Pl,
          {
            kind: "direct",
            value: y.uuid,
            title: y.title,
            onSelect: (S) => a("nextDirectControl", _, {
              uuid: S.uuid,
              mappingType: S.mappingType ?? "",
              title: S.title ?? ""
            })
          }
        ),
        y.uuid && /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: x("mappingType"),
            hint: x("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: Ye.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(se, { variant: "secondary", onClick: () => i({ uuid: y.uuid, kind: "direct" }, _), children: x("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            se,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextDirectControl", _),
              children: x("Удалить")
            }
          )
        ] })
      ] }, _)),
      /* @__PURE__ */ o.jsx(
        se,
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
          children: x("Добавить ещё")
        }
      )
    ] })
  ] });
}
const _f = () => ({
  endStatus: !0,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }]
}), eu = ({
  open: r,
  feedback: i,
  isEdit: a,
  formData: c,
  componentKey: d,
  setFormData: f,
  onClose: p,
  onBack: h,
  onSave: g,
  onUpdate: w
}) => {
  const _ = ot().getScripts(), S = v.useMemo(() => c[d] ?? _f(), [c, d]);
  v.useEffect(() => {
    r && f((U) => {
      var pe;
      const G = U[d];
      return (pe = G == null ? void 0 : G.nextAction) != null && pe.some((ce) => !ce.actionTypeComponent) ? { ...U, [d]: {
        ...G,
        nextAction: G.nextAction.map((ce) => ({ ...ce, actionTypeComponent: ce.actionTypeComponent || "children" }))
      } } : U;
    });
  }, [r, c.uuid, d, f]);
  const [C, N] = v.useState(null);
  v.useEffect(() => {
    r || N(null);
  }, [r]);
  const [j, T] = v.useState(!1);
  v.useEffect(() => {
    T(!1), O({});
  }, [r, c.uuid, d]);
  const [E, O] = v.useState({}), A = (U) => {
    f((G) => ({
      ...G,
      [d]: {
        ...G[d] ?? _f(),
        ...U
      }
    }));
  }, H = (U, G, pe) => {
    const ce = [...S[U] ?? []];
    ce[G] = { ...ce[G], ...pe }, A({
      [U]: ce
    });
  }, B = (U, G) => {
    A({
      [U]: [...S[U] ?? [], G]
    });
  }, M = (U, G) => {
    A({
      [U]: (S[U] ?? []).filter(
        (pe, ce) => ce !== G
      )
    });
  }, X = () => {
    const U = {};
    return c.title.trim() || (U.title = "Обязательное поле"), O(U), Object.keys(U).length === 0;
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Ut,
      {
        suspended: !!C,
        feedback: i,
        open: r,
        onClose: p,
        onBack: h,
        title: j ? "Настроить логику" : a ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ o.jsx("div", { className: Ye.form, children: j ? /* @__PURE__ */ o.jsx(se, { variant: "secondary", onClick: () => T(!1), children: x("Назад") }) : /* @__PURE__ */ o.jsxs("div", { className: Ye.footerActions, children: [
          /* @__PURE__ */ o.jsx(se, { variant: "secondary", onClick: () => T(!0), children: x("Настроить логику") }),
          /* @__PURE__ */ o.jsx(se, { onClick: () => {
            X() && (a ? w() : g());
          }, children: x(a ? "Обновить" : "Сохранить") })
        ] }) }),
        children: j ? /* @__PURE__ */ o.jsx(
          xx,
          {
            onOpenCommand: (U, G) => N({ ...U, index: G }),
            component: S,
            updateComponentArray: H,
            addComponentArrayItem: B,
            removeComponentArrayItem: M
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: Ye.form, children: [
          /* @__PURE__ */ o.jsx(
            Ve,
            {
              label: x("Название команды"),
              hint: ma(c.uuid),
              value: c.title,
              error: E.title,
              onChange: (U) => f({
                ...c,
                title: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            dn,
            {
              label: x("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(S.answerType) ? "script_response" : S.answerType,
              options: Z0,
              onChange: (U) => A({
                answerType: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            dn,
            {
              label: x("Скрипт Home Assistant"),
              value: S.script_entity_id ?? "__legacy__",
              options: [
                ...S.script_entity_id === void 0 ? [{ label: x("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: x("Не запускать скрипт"), value: "" },
                ..._.map((U) => ({ label: U.name, value: U.entity_id }))
              ],
              onChange: (U) => A({ script_entity_id: U.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ o.jsxs("div", { className: Ye.phraseMode, children: [
            /* @__PURE__ */ o.jsx(
              nr,
              {
                label: x("Отправить команду как есть"),
                checked: !!S.forwardText,
                onChange: (U) => A({ forwardText: U.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(Ir, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && S.forwardText) && /* @__PURE__ */ o.jsx("div", { className: Ye.field, children: /* @__PURE__ */ o.jsx(
            tr,
            {
              label: x("Фразы для запуска"),
              value: (S.voiceCommands == null ? [] : typeof S.voiceCommands != "object" ? S == null ? void 0 : S.voiceCommands.split(";") : S == null ? void 0 : S.voiceCommands).join(`
`),
              onChange: (U) => A({
                voiceCommands: U.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("section", { className: Ye.form, "aria-label": x("Ответы"), children: [
            /* @__PURE__ */ o.jsx("h3", { className: Ye.sectionTitle, children: x("Ответы") }),
            (S.voiceResponseArray ?? []).map((U, G) => /* @__PURE__ */ o.jsxs("div", { className: Ye.arrayItem, children: [
              /* @__PURE__ */ o.jsx(
                px,
                {
                  response: U,
                  onChange: (pe) => H("voiceResponseArray", G, pe)
                }
              ),
              /* @__PURE__ */ o.jsx(
                se,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => M("voiceResponseArray", G),
                  children: x("Удалить")
                }
              )
            ] }, G)),
            /* @__PURE__ */ o.jsx(
              se,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
                onClick: () => B("voiceResponseArray", {
                  actionType: "default",
                  voiceResponse: ""
                }),
                children: x("Добавить ещё")
              }
            )
          ] })
        ] })
      }
    ),
    C && /* @__PURE__ */ o.jsx(
      dx,
      {
        target: C,
        onBack: () => N(null),
        onSaved: (U) => {
          var G;
          C.kind === "direct" ? H("nextDirectControl", C.index, { title: U.title, mappingType: ((G = U.directControl) == null ? void 0 : G.mappingType) ?? "" }) : H("nextAction", C.index, { title: U.title });
        }
      },
      `${C.kind}-${C.uuid}`
    )
  ] });
}, va = ({ command: r, open: i, onClose: a, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Zl, { open: i, title: r.title, uuid: r.uuid, onClose: a, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, wx = () => vp("componentDialog"), Sx = () => {
  const r = Ge(), {
    query: i,
    setQuery: a,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: _,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: N,
    openCreateModal: j,
    openEditModal: T,
    handleToggleStatus: E,
    handleDelete: O,
    handleCreate: A,
    handleUpdate: H
  } = ha("main", wx), B = Fr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: i, onChange: a },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ue, { ...c }),
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Основные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: j, children: x("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: j, children: x("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(zr, { value: i, onChange: a })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Hr,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => N(M)
          },
          M.uuid
        )) }),
        !p && !d && i.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") }),
        r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => h(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        eu,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: _,
          componentKey: "componentDialog",
          setFormData: S,
          onClose: () => w(!1),
          onSave: A,
          onUpdate: H
        }
      ),
      /* @__PURE__ */ o.jsx(
        va,
        {
          open: !!C,
          command: C,
          onClose: () => N(null),
          onToggleStatus: E,
          onDelete: O,
          onEdit: (M) => T(M)
        }
      )
    ] })
  ] });
}, kx = () => vp("subComponentDialog"), jx = () => {
  const r = Ge(), {
    query: i,
    setQuery: a,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: _,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: N,
    openCreateModal: j,
    openEditModal: T,
    handleToggleStatus: E,
    handleDelete: O,
    handleCreate: A,
    handleUpdate: H
  } = ha("sub", kx), B = Fr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: i, onChange: a },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ue, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Второстепенные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: j, children: x("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: j, children: x("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ o.jsx(zr, { value: i, onChange: a })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Hr,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => N(M)
          },
          M.uuid
        )) }),
        !p && !d && i.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => h(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        eu,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: _,
          componentKey: "subComponentDialog",
          setFormData: S,
          onClose: () => w(!1),
          onSave: A,
          onUpdate: H
        }
      ),
      /* @__PURE__ */ o.jsx(
        va,
        {
          open: !!C,
          command: C,
          onClose: () => N(null),
          onToggleStatus: E,
          onDelete: O,
          onEdit: (M) => T(M)
        }
      )
    ] })
  ] });
}, Cx = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], ua = () => {
  const { pathname: r } = _t(), i = zl();
  return /* @__PURE__ */ o.jsx("div", { className: J.innerTabs, role: "group", "aria-label": x("Раздел прямых команд"), children: Cx.map((a) => /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === a.path,
      className: `${J.innerTab} ${r === a.path ? J.activeInnerTab : ""}`,
      onClick: () => i(a.path),
      children: x(a.label)
    },
    a.path
  )) });
}, Ex = () => ({
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
}), Nx = () => {
  const r = Ge(), {
    query: i,
    setQuery: a,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: _,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: N,
    openCreateModal: j,
    openEditModal: T,
    handleToggleStatus: E,
    handleDelete: O,
    handleCreate: A,
    handleUpdate: H
  } = ha("direct", Ex), B = Fr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: i, onChange: a },
        beforeSearch: /* @__PURE__ */ o.jsx(ua, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ue, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Прямые команды") }),
          !r && /* @__PURE__ */ o.jsx(ua, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: j, children: x("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: j, children: x("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(zr, { value: i, onChange: a })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Hr,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => N(M)
          },
          M.uuid
        )) }),
        !p && !d && i.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => h(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        gp,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: x(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: _,
          setFormData: S,
          onSave: y ? H : A
        }
      ),
      /* @__PURE__ */ o.jsx(
        va,
        {
          open: !!C,
          command: C,
          onClose: () => N(null),
          onToggleStatus: E,
          onDelete: O,
          onEdit: (M) => T(M)
        }
      )
    ] })
  ] });
}, Tx = "_form_mn1ml_1", Rx = "_arrayItem_mn1ml_8", bx = "_sectionTitle_mn1ml_25", na = {
  form: Tx,
  arrayItem: Rx,
  sectionTitle: bx
}, Px = ({
  open: r,
  feedback: i,
  onClose: a,
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
  ), _ = (j) => {
    f((T) => ({
      ...T,
      subDirectControl: j
    }));
  }, S = (j, T) => {
    const E = [...y];
    E[j] = {
      ...E[j],
      ...T
    }, _(E);
  }, C = () => {
    _([
      ...y,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, N = (j) => {
    _(
      y.filter((T, E) => E !== j)
    );
  };
  return /* @__PURE__ */ o.jsx(
    Ut,
    {
      feedback: i,
      open: r,
      onClose: a,
      title: c,
      footer: /* @__PURE__ */ o.jsx(se, { onClick: w, children: x("Сохранить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: na.form, children: [
        /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: x("Название команды"),
            hint: ma(d.uuid),
            required: !0,
            error: h,
            value: d.title,
            onChange: (j) => f((T) => ({
              ...T,
              title: j.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsxs("section", { className: na.form, "aria-label": x("Варианты вложенных команд"), children: [
          /* @__PURE__ */ o.jsx("h3", { className: na.sectionTitle, children: x("Варианты вложенных команд") }),
          y.map((j, T) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: na.arrayItem,
              children: [
                /* @__PURE__ */ o.jsx(
                  Ve,
                  {
                    label: x("Код значения"),
                    value: j.subMappingType ?? "",
                    onChange: (E) => S(T, {
                      subMappingType: E.target.value
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  tr,
                  {
                    label: x("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(j.subVoiceCommands) ? j.subVoiceCommands : []).join(`
`),
                    onChange: (E) => S(T, {
                      subVoiceCommands: E.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  se,
                  {
                    type: "button",
                    variant: "remove",
                    onClick: () => N(T),
                    children: x("Удалить")
                  }
                )
              ]
            },
            T
          )),
          /* @__PURE__ */ o.jsx(
            se,
            {
              type: "button",
              variant: "secondary",
              fullWidth: !0,
              leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
              onClick: C,
              children: x("Добавить ещё")
            }
          )
        ] })
      ] })
    }
  );
}, Ax = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), $x = () => {
  const r = Ge(), {
    query: i,
    setQuery: a,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: _,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: N,
    openCreateModal: j,
    openEditModal: T,
    handleDelete: E,
    handleCreate: O,
    handleUpdate: A
  } = ha("template", Ax), H = Fr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: i, onChange: a },
        beforeSearch: /* @__PURE__ */ o.jsx(ua, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ue, { ...c }),
      !r && /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Вложенные команды") }),
          !r && /* @__PURE__ */ o.jsx(ua, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: j, children: x("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: j, children: x("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(zr, { value: i, onChange: a })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((B) => /* @__PURE__ */ o.jsx(
          Hr,
          {
            title: B.title,
            onClick: () => N(B)
          },
          B.uuid
        )) }),
        !p && !d && i.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: H,
          className: J.listSentinel
        }
      ) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (B) => h(
            B
          )
        }
      ),
      /* @__PURE__ */ o.jsx(
        Px,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: y ? "Редактировать" : "Создать",
          formData: _,
          setFormData: S,
          onSave: y ? A : O
        }
      ),
      /* @__PURE__ */ o.jsx(
        va,
        {
          open: !!C,
          command: C,
          onClose: () => N(null),
          onDelete: E,
          onEdit: (B) => T(B)
        }
      )
    ] })
  ] });
}, xf = {
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function _p(r) {
  return r.actionType && xf[r.actionType] ? x(xf[r.actionType]) : r.title;
}
const Mx = "_form_1i0x1_1", Ix = {
  form: Mx
}, Lx = ({
  open: r,
  feedback: i,
  isEdit: a,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: p
}) => {
  var _, S;
  const h = c, g = ot().getScripts(), w = h.actionType === "default_main" && !!h.forwardCommandToServer, y = (C) => {
    d((N) => ({
      ...N,
      ...C
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Ut,
    {
      feedback: i,
      open: r,
      onClose: f,
      title: a ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ o.jsx(se, { onClick: p, children: x("Обновить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Ix.form, children: [
        /* @__PURE__ */ o.jsx(
          Ve,
          {
            label: x("Название команды"),
            hint: ma(c.uuid),
            value: _p(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ o.jsx(
          nr,
          {
            label: x("Завершать диалог"),
            checked: !!h.endStatus,
            onChange: (C) => y({
              endStatus: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && /* @__PURE__ */ o.jsx(
          nr,
          {
            label: x("Передать команду серверу"),
            checked: !!h.forwardCommandToServer,
            onChange: (C) => y({
              forwardCommandToServer: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && h.forwardCommandToServer && /* @__PURE__ */ o.jsx(
          dn,
          {
            label: x("Скрипт Home Assistant"),
            value: h.script_entity_id ?? "",
            options: [
              { value: "", label: x("Использовать существующие сценарии") },
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
              label: x("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: x("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ o.jsx(
            tr,
            {
              rows: 8,
              label: x("Текст озвучки"),
              hint: x("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: x("Например: ${reply}"),
              value: ((S = (_ = h.voiceResponseArray) == null ? void 0 : _.find((C) => C.actionType === "success")) == null ? void 0 : S.voiceResponse) ?? "",
              onChange: (C) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: C.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(
          tr,
          {
            rows: 8,
            "aria-label": x("Ответное сообщение"),
            label: x("Ответное сообщение"),
            value: h.voiceResponse,
            onChange: (C) => y({
              voiceResponse: C.target.value
            })
          }
        )
      ] })
    }
  );
}, Dx = () => {
  const r = Bt(), i = Ge(), [a, c] = v.useState(!1), [d, f] = v.useState(!1), [p, h] = v.useState({ title: "" }), {
    error: g,
    retry: w,
    loading: y,
    loadCommands: _,
    getCommandDetails: S,
    updateCommand: C,
    commands: N
  } = yp("get_assistant_settings_short"), j = Fr(N, y || !!g, _, i), T = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), w();
  }) : w }, E = (A) => r.run(async () => {
    f(!0);
    const H = await S("get_assistant_setting", A.uuid);
    h(H.data), c(!0);
  }, { retryable: !0 }), O = () => r.run(async () => {
    await C("update_assistant_setting", p), c(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !a && /* @__PURE__ */ o.jsx(Ue, { ...T }),
      i ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${J.header} ${J.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: J.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: J.heading, children: !i && /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ o.jsx("div", { className: J.list, children: /* @__PURE__ */ o.jsx(Br, { loading: y, itemCount: (N == null ? void 0 : N.data.length) ?? 0, append: i, children: N == null ? void 0 : N.data.map((A) => /* @__PURE__ */ o.jsx(
        Hr,
        {
          title: _p(A),
          onClick: () => E(A)
        },
        A.uuid
      )) }) }),
      i ? /* @__PURE__ */ o.jsx("div", { ref: j, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (N == null ? void 0 : N.page) || 1,
          totalPages: (N == null ? void 0 : N.total_pages) || 1,
          onChange: (A) => _(A)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Lx,
        {
          feedback: T,
          open: a,
          isEdit: d,
          formData: p,
          setFormData: h,
          onClose: () => c(!1),
          onUpdate: O
        }
      )
    ] })
  ] });
}, zx = (r, i) => {
  const a = new Blob([JSON.stringify(i, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(a), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class Pt extends Error {
}
const xp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, Gt = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function Ox(r, i) {
  if (i === "settings") {
    const d = await r.getData("get_settings"), f = Gt(d) && Gt(d.result) ? d.result : d;
    if (!Gt(f)) throw new Pt("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "remout", "timer_alarm"].filter((h) => h in f).map((h) => [h, f[h]]));
  }
  if (i === "scenarios") return r.getData("export_command_bundle");
  const a = xp[i], c = await r.getAllRecords(a.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, a.detail);
    return Gt(f) ? f.data : void 0;
  }));
}
function Fx(r, i) {
  let a;
  try {
    a = JSON.parse(r);
  } catch {
    throw new Pt("Некорректный JSON-файл.");
  }
  if (i === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", remout: "object", timer_alarm: "object" };
    if (!Gt(a) || !Object.keys(a).length || Object.keys(a).some((f) => !d[f] || typeof a[f] !== d[f])) throw new Pt("Файл не содержит корректные настройки.");
    if (a.theme !== void 0 && (typeof a.theme != "string" || !["dark", "light"].includes(a.theme))) throw new Pt("Файл не содержит корректные настройки.");
    for (const [f, p] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in a && (!Gt(a[f]) || Object.entries(a[f]).some(([h, g]) => !p.includes(h) || typeof g != "string"))) throw new Pt("Файл не содержит корректные настройки.");
    return a;
  }
  if (i === "scenarios" && Gt(a)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (a.format !== "ha-dialog-ui-commands" || a.version !== 1 || Object.keys(a).length !== 7 || d.some((f) => !Array.isArray(a[f]))) throw new Pt("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const p = /* @__PURE__ */ new Set(), h = a[f];
      if (!Array.isArray(h)) throw new Pt("Ожидается массив записей JSON.");
      for (const g of h) {
        if (!Gt(g) || typeof g.uuid != "string" || !g.uuid.trim() || p.has(g.uuid) || typeof g.title != "string") throw new Pt("Некорректные или повторяющиеся ID записей.");
        p.add(g.uuid);
      }
    }
    return a;
  }
  if (!Array.isArray(a)) throw new Pt("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of a) {
    if (!Gt(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new Pt("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(i === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && Gt(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new Pt("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return a;
}
async function Hx(r, i, a) {
  const c = Fx(a, i);
  return await r.saveData(c, i === "settings" ? "import_settings" : i === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : xp[i].import), c;
}
const Wx = "_grid_fc8hl_1", Bx = "_card_fc8hl_8", Ux = "_actions_fc8hl_23", Vx = "_description_fc8hl_29", qx = "_page_fc8hl_36", Ls = {
  grid: Wx,
  card: Bx,
  actions: Ux,
  description: Vx,
  page: qx
}, Qx = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], Kx = () => {
  const r = ot(), i = Dr(), a = Ge(), [c, d] = v.useState(!1), [f, p] = v.useState(""), [h, g] = v.useState(!1), w = v.useRef(null), y = v.useRef(null), _ = v.useRef("scripts"), S = async (C, N = !1) => {
    w.current = N ? C : null, d(!0), p(""), g(!1);
    try {
      await C();
    } catch (j) {
      g(!0), p(j instanceof Pt ? j.message : At(j));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: x("Импорт и экспорт") }),
    /* @__PURE__ */ o.jsxs("div", { className: `${J.page} ${Ls.page}`, children: [
      /* @__PURE__ */ o.jsx(ct, {}),
      !a && /* @__PURE__ */ o.jsx("h1", { children: x("Импорт и экспорт") }),
      /* @__PURE__ */ o.jsx("div", { className: Ls.grid, children: Qx.filter((C) => C.kind === "scripts" ? i === !0 : C.kind !== "scenarios" || i === !1).map((C) => /* @__PURE__ */ o.jsxs("section", { className: Ls.card, children: [
        /* @__PURE__ */ o.jsx("h2", { children: x(C.title) }),
        /* @__PURE__ */ o.jsx("p", { className: Ls.description, children: x(C.description) }),
        /* @__PURE__ */ o.jsxs("div", { className: Ls.actions, children: [
          /* @__PURE__ */ o.jsx(se, { disabled: c, onClick: () => S(async () => {
            zx(`ha-dialog-ui-${C.kind}.json`, await Ox(r, C.kind));
          }, !0), children: x(C.download) }),
          /* @__PURE__ */ o.jsx(se, { variant: "secondary", disabled: c, onClick: () => {
            var N;
            _.current = C.kind, (N = y.current) == null || N.click();
          }, children: x(C.upload) })
        ] })
      ] }, C.kind)) }),
      /* @__PURE__ */ o.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (C) => {
        var T;
        const N = (T = C.target.files) == null ? void 0 : T[0], j = _.current;
        C.target.value = "", N && S(async () => {
          const E = await Hx(r, j, await N.text());
          j === "settings" && E !== null && typeof E == "object" && !Array.isArray(E) && (typeof E.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: E.theme })), typeof E.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(ia, { detail: E.active_remout }))), p("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Обработка файла...") }),
      /* @__PURE__ */ o.jsx(Ue, { error: h ? f : null, busy: c, retry: w.current ? () => {
        w.current && S(w.current, !0);
      } : void 0 }),
      !h && f && /* @__PURE__ */ o.jsx("p", { role: "status", children: x(f) })
    ] })
  ] });
};
function Yx() {
  const r = ot(), [i, a] = v.useState(null), [c, d] = v.useState([]), f = Bt(), p = Bt(), h = v.useCallback(() => f.run(async () => {
    a(await r.getSettings());
  }, { retryable: !0 }), [r, f.run]), g = v.useCallback(() => p.run(async () => {
    d(await r.getLocalMusicOptions());
  }, { retryable: !0 }), [r, p.run]);
  v.useEffect(() => {
    h();
  }, [h]), v.useEffect(() => {
    g();
  }, [g]);
  const w = async (y) => {
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(Tl, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(ia, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: i, musicOptions: c, saveSettings: w, settingsFeedback: f, musicFeedback: p };
}
const Gx = "_form_1ijxr_1", Jx = "_field_1ijxr_7", Xx = "_input_1ijxr_13", Zx = "_label_1ijxr_29", ew = "_help_1ijxr_35", tw = "_toggleHelp_1ijxr_40", st = {
  form: Gx,
  field: Jx,
  input: Xx,
  label: Zx,
  help: ew,
  toggleHelp: tw
}, nw = ({ data: r, onChange: i }) => {
  const a = (c, d) => {
    i({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
    /* @__PURE__ */ o.jsx(Ve, { label: x("Base URL"), value: r.base_url ?? "", placeholder: x("http://192.168.31.83:9379"), onChange: (c) => a("base_url", c.target.value) }),
    /* @__PURE__ */ o.jsx(Ve, { label: x("Token"), value: r.token ?? "", placeholder: x("Bearer ..."), onChange: (c) => a("token", c.target.value) })
  ] });
}, rw = ({ data: r, musicOptions: i, musicUnavailable: a, onChange: c }) => {
  const d = (p, h) => {
    c({
      ...r,
      [p]: h
    });
  }, f = (p, h, g = "") => {
    const w = i.some((y) => y.value === g);
    return /* @__PURE__ */ o.jsxs("label", { className: st.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: st.label, children: x(p) }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: st.input,
          value: g,
          onChange: (y) => d(h, y.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: x("Не выбрано") }),
            g && !w && /* @__PURE__ */ o.jsx("option", { value: g, children: g }),
            i.map((y) => /* @__PURE__ */ o.jsx("option", { value: y.value, children: y.label }, y.value))
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
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
    i.length === 0 && !a && /* @__PURE__ */ o.jsx("span", { className: st.help, children: x("Музыка на сервере не найдена.") })
  ] });
}, sw = ({ data: r, onChange: i }) => {
  const a = ap(), c = (d, f) => {
    i({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
    /* @__PURE__ */ o.jsxs("label", { className: st.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: st.label, children: x("Язык интерфейса") }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: st.input,
          value: a,
          onChange: (d) => Lg(d.target.value === "en" ? "en" : "ru"),
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
        label: x("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => c("client_id", d.target.value),
        placeholder: x("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ o.jsxs("label", { className: st.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: st.label, children: x("Theme") }),
      /* @__PURE__ */ o.jsxs("select", { className: st.input, value: r.theme ?? "dark", onChange: (d) => c("theme", d.target.value), children: [
        /* @__PURE__ */ o.jsx("option", { value: "dark", children: x("dark") }),
        /* @__PURE__ */ o.jsx("option", { value: "light", children: x("light") })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(nr, { label: x("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, ow = ({ data: r, onChange: i }) => {
  const a = (c, d) => i({ ...r, [c]: d });
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
    /* @__PURE__ */ o.jsxs("div", { className: st.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(nr, { label: x("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => a("active_remout", c.target.checked) }),
      /* @__PURE__ */ o.jsx(Ir, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: st.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(nr, { label: x("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => a("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ o.jsx(Ir, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ o.jsx(
      Ve,
      {
        label: x("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => a("api_commands_token", c.target.value),
        placeholder: x("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, ca = {
  base_url: "",
  token: ""
}, aw = {
  global_music_timer: "",
  global_music_alarm: ""
}, wf = {
  remout: ca,
  timer_alarm: aw,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, iw = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), lw = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), uw = (r) => ({
  remout: iw(r == null ? void 0 : r.remout),
  timer_alarm: lw(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), Sf = (r, i) => {
  const a = {};
  return Object.keys(r).forEach((c) => {
    const d = c;
    r[d] !== i[d] && (a[d] = r[d]);
  }), a;
}, kf = (r, i) => {
  const a = {}, c = Sf(r.timer_alarm, i.timer_alarm);
  if (Object.keys(c).length > 0 && (a.timer_alarm = c), r.theme !== i.theme && (a.theme = r.theme), r.is_admin !== i.is_admin && (a.is_admin = r.is_admin), r.active_remout !== i.active_remout && (a.active_remout = r.active_remout), r.client_id !== i.client_id && (a.client_id = r.client_id), r.api_commands_enabled !== i.api_commands_enabled && (a.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== i.api_commands_token && (a.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = Sf(r.remout ?? ca, i.remout ?? ca);
    Object.keys(d).length > 0 && (a.remout = d);
  }
  return a;
}, cw = () => {
  const r = Ge(), [i, a] = v.useState(wf), c = Bt(), [d, f] = v.useState(wf), { settings: p, musicOptions: h, saveSettings: g, settingsFeedback: w, musicFeedback: y } = Yx();
  v.useEffect(() => {
    if (!p) return;
    const N = uw(p);
    a(N), f(N), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: N.theme }));
  }, [p]);
  const _ = async (N) => {
    a((j) => ({ ...j, ...N })), N.theme && N.theme !== i.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: N.theme })), await c.run(async () => {
      await g({ theme: N.theme }), f((j) => ({ ...j, theme: N.theme }));
    }, { exclusive: !0 }));
  }, S = () => c.run(async () => {
    await g(kf(i, d)), f(i);
  }, { exclusive: !0 }), C = !!p && Object.keys(kf(i, d)).length > 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        title: x("Настройки")
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      /* @__PURE__ */ o.jsx(ct, {}),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { children: x("Настройки") }),
      /* @__PURE__ */ o.jsxs("div", { className: J.settingsSections, children: [
        /* @__PURE__ */ o.jsx(Ue, { ...w }),
        /* @__PURE__ */ o.jsx(Ue, { ...y }),
        /* @__PURE__ */ o.jsx(Ue, { ...c }),
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": x("Общие"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: x("Общие") }),
          /* @__PURE__ */ o.jsx(
            sw,
            {
              data: {
                is_admin: i.is_admin,
                theme: i.theme,
                client_id: i.client_id
              },
              onChange: _
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": x("Подключения"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: x("Подключения") }),
          /* @__PURE__ */ o.jsxs("div", { className: J.connectionFields, children: [
            /* @__PURE__ */ o.jsx(ow, { data: i, onChange: _ }),
            i.active_remout && /* @__PURE__ */ o.jsx(
              nw,
              {
                data: i.remout ?? ca,
                onChange: (N) => a((j) => ({ ...j, remout: N }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": x("Timer / Alarm"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: x("Timer / Alarm") }),
          /* @__PURE__ */ o.jsx(
            rw,
            {
              data: i.timer_alarm,
              musicOptions: h,
              musicUnavailable: y.busy || !!y.error,
              onChange: (N) => a({ ...i, timer_alarm: N })
            }
          )
        ] })
      ] }),
      C && (r ? /* @__PURE__ */ o.jsx("div", { className: J.settingsMobileActions, children: /* @__PURE__ */ o.jsx(
        se,
        {
          variant: "primary",
          disabled: c.busy || w.busy || !p,
          onClick: S,
          children: x("Сохранить")
        }
      ) }) : /* @__PURE__ */ o.jsx("div", { className: J.settingsActions, children: /* @__PURE__ */ o.jsx(se, { disabled: c.busy || w.busy || !p, onClick: S, children: x("Сохранить") }) }))
    ] })
  ] });
}, Al = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const i = r.split(":").map(Number);
  return i.some((a) => !Number.isFinite(a) || a < 0) ? 0 : i.length === 3 ? i[0] * 3600 + i[1] * 60 + i[2] : i.length === 2 ? i[0] * 60 + i[1] : i.length === 1 ? i[0] : 0;
}, wp = (r) => typeof r == "string" || typeof r == "number" ? Al(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Al(r.count_timer || "") : 0, dw = (r, i = "on", a = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Al(r);
  if (!r) return 0;
  if (i !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - a) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : wp(r);
}, $l = (r) => r !== null && typeof r == "object", er = (r) => {
  const i = $l(r) && "result" in r ? r.result : r;
  return $l(i) && "data" in i ? i.data : i;
}, fw = (r) => {
  const i = Math.max(1, Number(r) || 1);
  return new Date(Date.now() + i * 1e3).toISOString();
}, jf = (r) => {
  const i = Math.max(1, Number(r) || 1), a = Math.floor(i / 3600), c = Math.floor(i % 3600 / 60), d = i % 60;
  return `${String(a).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, Cf = (r) => {
  const i = er(r);
  return Array.isArray(i) ? i : $l(i) && Array.isArray(i.data) ? i.data : [];
};
function Sp() {
  const r = ot(), i = Bt(), [a, c] = v.useState([]), [d, f] = v.useState([]), [p, h] = v.useState([]), [g, w] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), _ = v.useCallback(async () => {
    const B = await r.getPage("get_timer_requests_short", 1, 100), M = await Promise.all(
      Cf(B).map(async (X) => {
        var G;
        const U = await r.getRecord(X.uuid, "get_timer_request");
        return ((G = er(U)) == null ? void 0 : G.data) ?? er(U);
      })
    );
    c(M.filter((X) => !!X && X.action_type === "create_timer"));
  }, [r]), S = v.useCallback(async () => {
    const B = await r.getPage("get_alarm_requests_short", 1, 100), M = await Promise.all(
      Cf(B).map(async (X) => {
        var G;
        const U = await r.getRecord(X.uuid, "get_alarm_request");
        return ((G = er(U)) == null ? void 0 : G.data) ?? er(U);
      })
    );
    f(M.filter((X) => !!X && X.action_type !== "delete_alarm"));
  }, [r]), C = v.useCallback(async () => {
    const B = await r.getAllRecords("get_alarm_time_widgets_short"), M = await Promise.all(
      B.map(async (X) => {
        var G;
        const U = await r.getRecord(X.uuid, "get_alarm_time_widget");
        return ((G = er(U)) == null ? void 0 : G.data) ?? er(U);
      })
    );
    h(M.filter(Boolean));
  }, [r]), N = v.useCallback(async () => {
    w(!0);
    try {
      await i.run(async () => {
        await Promise.all([_(), S(), C()]);
      }, { retryable: !0 });
    } finally {
      w(!1);
    }
  }, [S, C, _, i.run]);
  v.useEffect(() => {
    N();
  }, []);
  const j = async (B, M) => await i.run(async () => {
    await B();
  }, { exclusive: !0 }) ? (await i.run(M, { retryable: !0 }), !0) : !1, T = async (B, M, X = 0.3) => {
    const U = {
      count_timer: jf(M),
      date_end: fw(M)
    };
    return j(() => r.saveData({ name: `Таймер ${jf(M)}`, action_type: "create_timer", device_id: B, timer_time: U, volume_start: X }, "save_timer_request"), _);
  }, E = async (B) => j(() => r.deleteRecord(B.uuid, "delete_timer_request"), _), O = async (B, M, X = 0.3, U = "once", G = []) => j(() => r.saveData({ name: `Будильник ${M}`, action_type: "create_alarm", device_id: B, status: "on", time: M, volume_start: X, repeat_type: U, repeat_days: G }, "save_alarm_request"), async () => {
    await Promise.all([S(), C()]);
  }), A = async (B, M) => j(() => r.updateRecord(B.uuid, "update_alarm_request", { ...B, action_type: "edit_alarm", ...M }), async () => {
    await Promise.all([S(), C()]);
  }), H = async (B) => j(() => r.deleteRecord(B.uuid, "delete_alarm_request"), S);
  return {
    feedback: { ...i, retry: i.error ? i.retry ?? (() => {
      N();
    }) : void 0 },
    alarmTimeWidgets: p,
    refreshAlarmTimes: () => i.run(C, { retryable: !0 }),
    alarms: d,
    createAlarm: O,
    createTimer: T,
    deleteAlarm: H,
    devices: y,
    loading: g,
    stopTimer: E,
    timers: a,
    toTimerSeconds: dw,
    updateAlarm: A
  };
}
const pw = "_grid_w5y3x_31", mw = "_card_w5y3x_38", hw = "_empty_w5y3x_38", vw = "_cardHeader_w5y3x_47", yw = "_cardTitle_w5y3x_54", gw = "_meta_w5y3x_59", _w = "_form_w5y3x_73", xw = "_field_w5y3x_79", ww = "_label_w5y3x_85", Sw = "_input_w5y3x_91", kw = "_quickTabs_w5y3x_101", jw = "_quickTab_w5y3x_101", Cw = "_activeQuickTab_w5y3x_117", Ew = "_cardLead_w5y3x_135", Nw = "_cardIcon_w5y3x_143", Tw = "_cardButton_w5y3x_148", Rw = "_wheelPicker_w5y3x_160", bw = "_wheelColumn_w5y3x_173", Pw = "_wheelSelect_w5y3x_180", Aw = "_footerActions_w5y3x_202", $w = "_saveButton_w5y3x_208", Mw = "_volumeLabel_w5y3x_226", Iw = "_volumeValue_w5y3x_232", Lw = "_alarmTimeFields_w5y3x_237", le = {
  grid: pw,
  card: mw,
  empty: hw,
  cardHeader: vw,
  cardTitle: yw,
  meta: gw,
  form: _w,
  field: xw,
  label: ww,
  input: Sw,
  quickTabs: kw,
  quickTab: jw,
  activeQuickTab: Cw,
  cardLead: Ew,
  cardIcon: Nw,
  cardButton: Tw,
  wheelPicker: Rw,
  wheelColumn: bw,
  wheelSelect: Pw,
  footerActions: Aw,
  saveButton: $w,
  volumeLabel: Mw,
  volumeValue: Iw,
  alarmTimeFields: Lw
}, Dw = [5, 10, 15, 30, 45, 60], Ef = (r) => {
  const i = Math.max(0, r), a = Math.floor(i / 3600), c = Math.floor(i % 3600 / 60), d = i % 60;
  return [a, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, zw = (r, i, a) => Math.max(1, r * 3600 + i * 60 + a), Ow = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), Fw = () => {
  const r = Ge(), { feedback: i, createTimer: a, devices: c, loading: d, stopTimer: f, timers: p, toTimerSeconds: h } = Sp(), [g, w] = v.useState(!1), [y, _] = v.useState(""), [S, C] = v.useState(0.3), [N, j] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [T, E] = v.useState({});
  v.useEffect(() => {
    E(Object.fromEntries(p.map((M) => [M.uuid, h(M.timer_time, M.status)])));
  }, [p, h]), v.useEffect(() => {
    const M = window.setInterval(() => {
      E((X) => Object.fromEntries(Object.entries(X).map(([U, G]) => {
        var pe;
        return [U, ((pe = p.find((ce) => ce.uuid === U)) == null ? void 0 : pe.status) === "paused" ? G : Math.max(0, G - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(M);
  }, [p]);
  const O = v.useMemo(() => new Map(c.map((M) => [M.id, M.name])), [c]), A = zw(N.hours, N.minutes, N.seconds), H = async () => {
    y && await a(y, A, S) && w(!1);
  }, B = (M) => j(Ow(M * 60));
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: x("Таймеры") }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ue, { ...i }),
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: J.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Таймеры") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(or, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          se,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: x("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          se,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: x("🞢 Создать")
          }
        ) })
      ] }),
      d && /* @__PURE__ */ o.jsx(Or, {}),
      /* @__PURE__ */ o.jsx("div", { className: le.grid, children: p.length ? p.map((M) => {
        const X = h(M.timer_time, M.status), U = wp(M.timer_time);
        return /* @__PURE__ */ o.jsx("div", { className: le.card, children: /* @__PURE__ */ o.jsxs("div", { className: le.cardHeader, children: [
          /* @__PURE__ */ o.jsxs("div", { className: le.cardLead, children: [
            /* @__PURE__ */ o.jsx(Ql, { className: le.cardIcon, size: 26 }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("h2", { className: le.cardTitle, children: Ef(T[M.uuid] ?? X) }),
              /* @__PURE__ */ o.jsxs("div", { className: le.meta, children: [
                x("Заведен на"),
                " ",
                Ef(U),
                " • ",
                O.get(M.device_id) || M.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(se, { variant: "remove", onClick: () => f(M), children: x("Удалить") })
        ] }) }, M.uuid);
      }) : !d && !i.error && /* @__PURE__ */ o.jsx("div", { className: le.empty, children: x("Нет запущенных таймеров.") }) }),
      /* @__PURE__ */ o.jsx(Ut, { feedback: i, open: g, onClose: () => w(!1), title: x("Создать таймер"), footer: /* @__PURE__ */ o.jsx("div", { className: le.footerActions, children: /* @__PURE__ */ o.jsx(se, { className: le.saveButton, onClick: H, disabled: !y, children: x("Создать") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: le.form, children: [
        /* @__PURE__ */ o.jsx("div", { className: le.wheelPicker, "aria-label": x("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((M) => /* @__PURE__ */ o.jsxs("label", { className: le.wheelColumn, children: [
          /* @__PURE__ */ o.jsx("span", { className: le.label, children: x(M === "hours" ? "Часы" : M === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              className: le.wheelSelect,
              type: "number",
              min: 0,
              max: M === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: N[M],
              onChange: (X) => {
                const U = Math.max(0, Math.min(M === "hours" ? 23 : 59, Math.trunc(Number(X.target.value) || 0)));
                j((G) => ({ ...G, [M]: U }));
              }
            }
          )
        ] }, M)) }),
        /* @__PURE__ */ o.jsxs("div", { className: le.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: le.label, children: x("Быстрое создание") }),
          /* @__PURE__ */ o.jsx("div", { className: le.quickTabs, children: Dw.map((M) => /* @__PURE__ */ o.jsxs("button", { type: "button", className: `${le.quickTab} ${A === M * 60 ? le.activeQuickTab : ""}`, onClick: () => B(M), children: [
            M,
            " ",
            x("мин")
          ] }, M)) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Mr,
          {
            label: x("Устройство воспроизведения"),
            placeholder: x("Выберите устройство"),
            value: y,
            options: c.map((M) => ({ value: M.id, label: M.name })),
            onSelect: _
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: le.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${le.label} ${le.volumeLabel}`, children: [
            x("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: le.volumeValue, children: [
              Math.round(S * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: le.input, type: "range", min: "0", max: "1", step: "0.05", value: S, onChange: (M) => C(Number(M.target.value)) })
        ] })
      ] }) })
    ] })
  ] });
}, Hw = "_navigation_fb6jk_1", Ww = "_page_fb6jk_5", Bw = "_title_fb6jk_11", Uw = "_hint_fb6jk_15", Vw = "_grid_fb6jk_20", qw = "_device_fb6jk_27", Qw = "_active_fb6jk_56", Kw = "_status_fb6jk_64", Yw = "_actions_fb6jk_71", un = {
  navigation: Hw,
  page: Ww,
  title: Bw,
  hint: Uw,
  grid: Vw,
  device: qw,
  active: Qw,
  status: Kw,
  actions: Yw
};
function Gw() {
  const r = ot(), i = Ge(), [a, c] = v.useState(), [d, f] = v.useState(""), [p, h] = v.useState(""), [g, w] = v.useState(""), [y, _] = v.useState(!1);
  v.useEffect(() => {
    let E = !0, O;
    return r.callsWatch((A) => {
      E && c(A);
    }).then((A) => {
      E ? O = A : Promise.resolve(A()).catch(() => {
      });
    }).catch((A) => {
      E && w(At(A));
    }), () => {
      E = !1, O && Promise.resolve(O()).catch(() => {
      });
    };
  }, [r]);
  const S = async (E) => {
    if (!y) {
      _(!0), w("");
      try {
        await E();
      } catch (O) {
        w(At(O));
      } finally {
        _(!1);
      }
    }
  }, C = (E) => {
    var O;
    return ((O = a == null ? void 0 : a.devices.find((A) => A.id === E)) == null ? void 0 : O.name) ?? x("Колонка");
  }, N = a == null ? void 0 : a.calls.find((E) => E.source_device_id === d || E.target_device_id === d), j = (E) => a == null ? void 0 : a.calls.some((O) => O.source_device_id === E || O.target_device_id === E), T = x((N == null ? void 0 : N.state) === "active" ? "Разговор" : (N == null ? void 0 : N.state) === "connecting" ? "Соединяем колонки…" : N ? "Ожидание ответа" : "Готово к звонку");
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: un.navigation, children: /* @__PURE__ */ o.jsx(ct, {}) }),
    i && /* @__PURE__ */ o.jsx(dt, { title: "Звонки" }),
    /* @__PURE__ */ o.jsxs("section", { className: un.page, children: [
      /* @__PURE__ */ o.jsx("h1", { className: un.title, children: x("Звонки") }),
      /* @__PURE__ */ o.jsx("p", { className: un.hint, children: x("Выберите колонку, с которой хотите позвонить.") }),
      g && !d && /* @__PURE__ */ o.jsx("p", { role: "alert", children: g }),
      !a && !g && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Загрузка…") }),
      a && !a.available && /* @__PURE__ */ o.jsx("p", { role: "alert", children: x("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.") }),
      (a == null ? void 0 : a.available) && a.devices.length === 0 && /* @__PURE__ */ o.jsx("p", { children: x("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.") }),
      /* @__PURE__ */ o.jsx("div", { className: un.grid, children: a == null ? void 0 : a.devices.map((E) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `${un.device} ${j(E.id) ? un.active : ""}`,
          onClick: () => {
            f(E.id), h(""), w("");
          },
          children: [
            j(E.id) ? /* @__PURE__ */ o.jsx(Ky, { size: 26 }) : /* @__PURE__ */ o.jsx(ql, { size: 26 }),
            /* @__PURE__ */ o.jsx("strong", { children: E.name }),
            /* @__PURE__ */ o.jsx("span", { children: x(E.online ? j(E.id) ? "Участвует в звонке" : "Готова к звонку" : "Нет подключения") })
          ]
        },
        E.id
      )) }),
      /* @__PURE__ */ o.jsxs(Ut, { open: !!d, onClose: () => f(""), title: C(d), dialogLabel: C(d), footer: /* @__PURE__ */ o.jsx("div", { className: un.actions, children: N ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        N.state === "ringing" && N.target_device_id === d && /* @__PURE__ */ o.jsx(se, { disabled: y, onClick: () => void S(() => r.callAnswer(d)), children: x("Ответить") }),
        /* @__PURE__ */ o.jsxs(se, { variant: "secondary", disabled: y, onClick: () => void S(() => r.callEnd(d)), children: [
          /* @__PURE__ */ o.jsx(Gy, { size: 18 }),
          x("Положить трубку")
        ] })
      ] }) : /* @__PURE__ */ o.jsx(se, { disabled: y || !(a != null && a.available) || !p || !(a != null && a.devices.some((E) => E.id === d && E.online)) || !(a != null && a.devices.some((E) => E.id === p && E.online && !j(E.id))), onClick: () => void S(() => r.callStart(d, p)), children: x("Позвонить") }) }), children: [
        /* @__PURE__ */ o.jsxs("div", { className: un.status, children: [
          /* @__PURE__ */ o.jsx("span", { role: "status", "aria-live": "polite", children: y ? x("Выполняем…") : T }),
          /* @__PURE__ */ o.jsx(Ir, { label: "Звонки", description: "Закрытие окна или вкладки не завершает звонок. Чтобы закончить разговор, нажмите «Положить трубку» или верхнюю кнопку любой колонки. Голосовой ассистент остаётся доступен." })
        ] }),
        g && /* @__PURE__ */ o.jsx("p", { role: "alert", children: g }),
        N ? /* @__PURE__ */ o.jsxs("p", { children: [
          C(N.source_device_id),
          " ↔ ",
          C(N.target_device_id)
        ] }) : /* @__PURE__ */ o.jsx(dn, { label: "Кому позвонить", value: p, onChange: (E) => h(E.target.value), disabled: y, options: [
          { value: "", label: x("Выберите колонку") },
          ...(a == null ? void 0 : a.devices.filter((E) => E.id !== d).map((E) => ({ value: E.id, label: `${E.name}${E.online ? j(E.id) ? ` — ${x("Занято")}` : "" : ` — ${x("Нет подключения")}`}`, disabled: !E.online || j(E.id) }))) ?? []
        ] })
      ] })
    ] })
  ] });
}
class Jw {
  constructor() {
    Ze(this, "context");
    Ze(this, "unsubscribe");
    Ze(this, "closed", !1);
    Ze(this, "nextTime", 0);
    Ze(this, "sources", /* @__PURE__ */ new Set());
  }
  async prepare() {
    this.context = new AudioContext(), await this.context.resume();
  }
  async listen(i, a, c) {
    const d = await i.monitorAudio(a, (f) => {
      const p = this.context;
      if (this.closed || !p) return;
      if (f.type === "status") {
        f.connected || this.clear(), c(!!f.connected);
        return;
      }
      if (f.type !== "audio" || f.rate !== 16e3 || !f.pcm) return;
      const h = Uint8Array.from(atob(f.pcm), (S) => S.charCodeAt(0)), g = new DataView(h.buffer), w = p.createBuffer(1, h.length / 2, f.rate), y = w.getChannelData(0);
      for (let S = 0; S < y.length; S++)
        y[S] = g.getInt16(S * 2, !0) / 32768;
      this.nextTime > p.currentTime + 0.3 && this.clear(), this.nextTime = Math.max(this.nextTime, p.currentTime + 0.06);
      const _ = p.createBufferSource();
      _.buffer = w, _.connect(p.destination), this.sources.add(_), _.onended = () => this.sources.delete(_), _.start(this.nextTime), this.nextTime += w.duration;
    });
    this.closed ? Promise.resolve(d()).catch(() => {
    }) : this.unsubscribe = d;
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
    }), this.unsubscribe = void 0, (i = this.context) == null || i.close().catch(() => {
    }), this.context = void 0;
  }
}
let Xw = 0;
function Zw() {
  var r;
  if ((r = globalThis.crypto) != null && r.getRandomValues) {
    const i = new Uint8Array(16);
    return globalThis.crypto.getRandomValues(i), `monitor-${Array.from(i, (a) => a.toString(16).padStart(2, "0")).join("")}`;
  }
  return `monitor-${Date.now().toString(36)}-${(++Xw).toString(36)}`;
}
const eS = "_page_12ruw_1", tS = "_heading_12ruw_8", nS = "_grid_12ruw_26", rS = "_device_12ruw_33", sS = "_deviceLive_12ruw_64", oS = "_navigation_12ruw_72", aS = "_playback_12ruw_76", iS = "_playbackSelect_12ruw_92", lS = "_statusRow_12ruw_112", uS = "_status_12ruw_112", cS = "_live_12ruw_127", dS = "_hint_12ruw_131", fS = "_footer_12ruw_137", pS = "_empty_12ruw_148", mS = "_error_12ruw_155", We = {
  page: eS,
  heading: tS,
  grid: nS,
  device: rS,
  deviceLive: sS,
  navigation: oS,
  playback: aS,
  playbackSelect: iS,
  statusRow: lS,
  status: uS,
  live: cS,
  hint: dS,
  footer: fS,
  empty: pS,
  error: mS
};
function hS() {
  const r = ot(), i = Ge(), [a, c] = v.useState(), [d, f] = v.useState(""), [p, h] = v.useState(null), [g, w] = v.useState("browser"), [y, _] = v.useState(!1), [S, C] = v.useState(!1), N = v.useRef(""), j = v.useRef(!1), T = v.useRef(), [E, O] = v.useState(0);
  v.useEffect(() => {
    j.current = !0;
    let F = !0, Q;
    const b = Zw();
    return N.current = b, c(void 0), f(""), r.monitorWatch(b, (L) => {
      F && c(L);
    }).then((L) => {
      F ? Q = L : Promise.resolve(L()).catch(() => {
      });
    }).catch((L) => {
      F && f(
        At(
          L,
          "Не удалось открыть радионяню. Проверьте подключение к HA."
        )
      );
    }), () => {
      var L;
      F = !1, j.current = !1, (L = T.current) == null || L.close(), T.current = void 0, Q && Promise.resolve(Q()).catch(() => {
      });
    };
  }, [r, E]), v.useEffect(() => {
    var F;
    a && !a.owned_source_id && !y && ((F = T.current) == null || F.close(), T.current = void 0, C(!1));
  }, [a, y]);
  const A = a == null ? void 0 : a.devices.find((F) => F.id === p), H = (a == null ? void 0 : a.devices.filter((F) => F.source)) ?? [], B = a == null ? void 0 : a.sessions.find(
    (F) => F.source_device_id === p
  ), M = !!(A != null && A.transmitting || (A == null ? void 0 : A.source_state) === "on" || B), X = S && (A == null ? void 0 : A.transmitting) && (a == null ? void 0 : a.owned_source_id) === p, U = !!B || X, G = (F) => {
    const Q = a == null ? void 0 : a.sessions.find(
      (b) => b.source_device_id === F.id
    );
    w((Q == null ? void 0 : Q.listener_device_id) ?? "browser"), h(F.id), f("");
  }, pe = () => h(null), ce = async () => {
    var Q;
    if (!A || y) return;
    _(!0), f(""), C(!1), (Q = T.current) == null || Q.close(), T.current = void 0;
    let F;
    try {
      g === "browser" && (F = new Jw(), T.current = F, await F.prepare());
      const b = await r.monitorStart(
        N.current,
        A.id,
        g === "browser" ? void 0 : g
      );
      if (!j.current || !b.started) {
        F == null || F.close();
        return;
      }
      F && await F.listen(r, A.node_id, (L) => {
        j.current && C(L);
      }), j.current && (C(!0), c(
        (L) => L && {
          ...L,
          owned_source_id: A.id,
          devices: L.devices.map(
            (oe) => oe.id === A.id ? { ...oe, transmitting: !0, source_state: "on" } : oe
          ),
          sessions: g === "browser" ? L.sessions : [
            ...L.sessions.filter(
              (oe) => oe.source_device_id !== A.id
            ),
            {
              source_device_id: A.id,
              listener_device_id: g
            }
          ]
        }
      ));
    } catch (b) {
      if (F == null || F.close(), j.current) {
        f(
          At(
            b,
            "Не удалось начать прослушивание. Проверьте подключение и разрешение воспроизведения."
          )
        );
        try {
          await r.monitorStop(N.current, A.id);
        } catch {
        }
      }
    } finally {
      j.current && _(!1);
    }
  }, Ne = async (F) => {
    var Q;
    _(!0), f("");
    try {
      await r.monitorStop(N.current, F), (a == null ? void 0 : a.owned_source_id) === F && ((Q = T.current) == null || Q.close(), T.current = void 0, C(!1)), c(
        (b) => b && {
          ...b,
          owned_source_id: b.owned_source_id === F ? null : b.owned_source_id,
          devices: b.devices.map(
            (L) => L.id === F ? { ...L, transmitting: !1, source_state: "off" } : L
          ),
          sessions: b.sessions.filter(
            (L) => L.source_device_id !== F && L.listener_device_id !== F
          )
        }
      );
    } catch (b) {
      j.current && f(At(b));
    } finally {
      j.current && _(!1);
    }
  }, Ce = (a == null ? void 0 : a.devices.filter(
    (F) => F.listener && F.id !== p
  )) ?? [], me = Ce.find((F) => F.id === g), ve = x(
    y ? "Подключаемся…" : M ? X || B ? "Прослушивание активно" : "Источник включён" : "Готово к запуску"
  ), ke = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: We.statusRow, children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: `${We.status} ${M ? We.live : ""}`,
          children: [
            /* @__PURE__ */ o.jsx(Ty, { size: 12, fill: "currentColor" }),
            ve
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(Ir, { label: ve, description: x(
        M && (a == null ? void 0 : a.owned_source_id) !== p ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже." : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня»."
      ) })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: We.hint, children: x("Где воспроизводить звук?") }),
    /* @__PURE__ */ o.jsxs("div", { className: We.playback, children: [
      g === "browser" ? /* @__PURE__ */ o.jsx(Oy, { size: 22 }) : /* @__PURE__ */ o.jsx(Ql, { size: 22 }),
      /* @__PURE__ */ o.jsx(
        dn,
        {
          "aria-label": x("Где воспроизводить звук?"),
          className: We.playbackSelect,
          value: g,
          onChange: (F) => w(F.target.value),
          disabled: y || U,
          options: [
            { value: "browser", label: x("На этом устройстве") },
            ...Ce.map((F) => ({
              value: F.id,
              label: F.online ? F.name : `${F.name} — ${x("Нет подключения")}`,
              disabled: !F.online
            }))
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("small", { children: x(g === "browser" ? "Телефон или компьютер" : me != null && me.online ? "Колонка" : "Нет подключения") })
    ] }),
    U && /* @__PURE__ */ o.jsx("p", { className: We.hint, children: x("Чтобы сменить устройство воспроизведения, сначала остановите сеанс.") })
  ] }), W = /* @__PURE__ */ o.jsx("div", { className: We.footer, children: /* @__PURE__ */ o.jsx(
    se,
    {
      onClick: M ? () => void Ne(p) : () => void ce(),
      disabled: y || !M && !(A != null && A.online) || !M && g !== "browser" && !(a != null && a.devices.some(
        (F) => F.id === g && F.online
      )),
      children: x(
        y ? "Подключаемся…" : M ? g === "browser" && !X && !B ? "Начать слушать" : "Остановить" : "Старт"
      )
    }
  ) }), z = M && !U ? /* @__PURE__ */ o.jsxs("div", { className: We.footer, children: [
    /* @__PURE__ */ o.jsx(se, { disabled: y || !(A != null && A.online), onClick: () => void ce(), children: x(g === "browser" ? "Начать слушать" : "Старт") }),
    /* @__PURE__ */ o.jsx(
      se,
      {
        variant: "ghost",
        disabled: y,
        onClick: () => void Ne(p),
        children: x("Остановить источник")
      }
    )
  ] }) : W;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: We.navigation, children: /* @__PURE__ */ o.jsx(ct, {}) }),
    i && /* @__PURE__ */ o.jsx(dt, { title: "Радионяня" }),
    /* @__PURE__ */ o.jsxs("section", { className: We.page, children: [
      /* @__PURE__ */ o.jsxs("header", { className: We.heading, children: [
        /* @__PURE__ */ o.jsx(Vl, { size: 30 }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("h1", { children: x("Радионяня") }),
          /* @__PURE__ */ o.jsx("p", { children: x("Выберите колонку, чтобы слышать, что происходит рядом с ней.") })
        ] })
      ] }),
      d && !p && /* @__PURE__ */ o.jsxs("div", { role: "alert", className: We.error, children: [
        d,
        /* @__PURE__ */ o.jsx(se, { onClick: () => O((F) => F + 1), children: x("Повторить") })
      ] }),
      !a && !d && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Загрузка…") }),
      a && !a.available && /* @__PURE__ */ o.jsx("div", { className: We.empty, children: x(
        "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124."
      ) }),
      (a == null ? void 0 : a.available) && H.length === 0 && /* @__PURE__ */ o.jsx("div", { className: We.empty, children: x(
        "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome."
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: We.grid, children: H.map((F) => {
        const Q = a == null ? void 0 : a.sessions.find(
          (L) => L.source_device_id === F.id
        ), b = a == null ? void 0 : a.devices.find(
          (L) => L.id === (Q == null ? void 0 : Q.listener_device_id)
        );
        return /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `${We.device} ${F.transmitting ? We.deviceLive : ""}`,
            onClick: () => G(F),
            children: [
              /* @__PURE__ */ o.jsx(Zy, { size: 28 }),
              /* @__PURE__ */ o.jsx("strong", { children: F.name }),
              /* @__PURE__ */ o.jsx("span", { children: x(
                F.online ? F.transmitting ? "Источник включён" : F.source_state === "on" ? "Переподключение…" : "Готова к прослушиванию" : "Нет подключения"
              ) }),
              b && /* @__PURE__ */ o.jsxs("small", { children: [
                x("Воспроизведение:"),
                " ",
                b.name
              ] })
            ]
          },
          F.id
        );
      }) }),
      /* @__PURE__ */ o.jsxs(
        Ut,
        {
          open: p !== null,
          onClose: pe,
          title: (A == null ? void 0 : A.name) ?? "Радионяня",
          dialogLabel: (A == null ? void 0 : A.name) ?? x("Радионяня"),
          footer: z,
          children: [
            d && /* @__PURE__ */ o.jsx("p", { role: "alert", className: We.error, children: d }),
            ke
          ]
        }
      )
    ] })
  ] });
}
const vS = ({ command: r, open: i, onClose: a, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const p = r.status === "on";
  return /* @__PURE__ */ o.jsx(Zl, { open: i, title: r.title, uuid: r.uuid, onClose: a, actions: [
    { label: p ? "Выключить" : "Включить", onClick: () => c(r, p ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, yS = (r) => {
  const i = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !i || Number(i[1]) > 23 || Number(i[2]) > 59 ? null : `${i[1].padStart(2, "0")}:${i[2]}`;
}, Ml = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], gS = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], _S = (r = "once", i = []) => r === "daily" ? x("ежедневно") : r === "weekdays" ? x("по будням") : r === "weekends" ? x("по выходным") : r === "custom" ? i.length ? i.map((a) => {
  var c;
  return (c = Ml.find((d) => d.key === a)) != null && c.label ? x(Ml.find((d) => d.key === a).label) : a;
}).join(", ") : x("кастом") : x("однократно"), xS = () => {
  const r = Ge(), { feedback: i, alarmTimeWidgets: a, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: p, devices: h, loading: g, updateAlarm: w } = Sp(), [y, _] = v.useState(!1), [S, C] = v.useState(null), [N, j] = v.useState(null), [T, E] = v.useState(""), [O, A] = v.useState("08:00"), [H, B] = v.useState(0.3), [M, X] = v.useState("once"), [U, G] = v.useState([]), pe = v.useMemo(() => Array.from(new Set([...a.flatMap((W) => W.time || []), ...d.map((W) => W.time)].map(yS).filter((W) => W !== null))), [a, d]), ce = v.useMemo(() => new Map(h.map((W) => [W.id, W.name])), [h]), Ne = d.find((W) => W.uuid === S) || null, Ce = async () => {
    if (!T || !O) return;
    const W = d.find((z) => z.uuid === N);
    if (W) {
      if (!await w(W, { device_id: T, time: O, volume_start: H, repeat_type: M, repeat_days: U })) return;
    } else if (!await f(T, O, H, M, U)) return;
    j(null), _(!1);
  }, me = () => {
    j(null), _(!0), c();
  }, ve = (W) => {
    A(W.time), E(W.device_id), B(W.volume_start ?? 0.3), X(W.repeat_type ?? "once"), G(W.repeat_days ?? []), c(), j(W.uuid), C(null), _(!0);
  }, ke = (W) => G((z) => z.includes(W) ? z.filter((F) => F !== W) : [...z, W]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: x("Будильники") }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !y && /* @__PURE__ */ o.jsx(Ue, { ...i }),
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: J.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Будильники") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(or, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          se,
          {
            variant: "primary",
            onClick: me,
            children: x("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          se,
          {
            variant: "primary",
            onClick: me,
            children: x("🞢 Создать")
          }
        ) })
      ] }),
      g && /* @__PURE__ */ o.jsx(Or, {}),
      /* @__PURE__ */ o.jsx("div", { className: le.grid, children: d.length ? d.map((W) => /* @__PURE__ */ o.jsx("button", { className: `${le.card} ${le.cardButton}`, type: "button", onClick: () => C(W.uuid), children: /* @__PURE__ */ o.jsxs("div", { className: le.cardHeader, children: [
        /* @__PURE__ */ o.jsxs("div", { className: le.cardLead, children: [
          /* @__PURE__ */ o.jsx(Ql, { className: le.cardIcon, size: 26 }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h2", { className: le.cardTitle, children: W.time }),
            /* @__PURE__ */ o.jsxs("div", { className: le.meta, children: [
              _S(W.repeat_type, W.repeat_days),
              " • ",
              ce.get(W.device_id) || W.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            onClick: (z) => z.stopPropagation(),
            onMouseDown: (z) => z.stopPropagation(),
            children: /* @__PURE__ */ o.jsx(nr, { label: x(""), checked: W.status !== "off", onClick: (z) => z.stopPropagation(), onChange: (z) => w(W, { status: z.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, W.uuid)) : !g && !i.error && /* @__PURE__ */ o.jsx("div", { className: le.empty, children: x("Нет будильников.") }) }),
      /* @__PURE__ */ o.jsx(Ut, { feedback: i, open: y, onClose: () => {
        _(!1), j(null);
      }, title: N ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ o.jsx("div", { className: le.footerActions, children: /* @__PURE__ */ o.jsx(se, { className: le.saveButton, onClick: Ce, disabled: !T || !O, children: x("Сохранить") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: le.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: le.alarmTimeFields, role: "group", "aria-label": x("Время будильника"), children: [
          /* @__PURE__ */ o.jsx(
            Mr,
            {
              label: x("Часы"),
              value: O.split(":")[0],
              options: Array.from({ length: 24 }, (W, z) => ({ value: String(z).padStart(2, "0"), label: String(z).padStart(2, "0") })),
              onSelect: (W) => A(`${W}:${O.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ o.jsx(
            Mr,
            {
              label: x("Минуты"),
              value: O.split(":")[1],
              options: Array.from({ length: 60 }, (W, z) => ({ value: String(z).padStart(2, "0"), label: String(z).padStart(2, "0") })),
              onSelect: (W) => A(`${O.split(":")[0]}:${W}`)
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: le.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: le.label, children: x("Ранее заданное время") }),
          /* @__PURE__ */ o.jsx("div", { className: le.quickTabs, children: pe.length ? pe.map((W) => /* @__PURE__ */ o.jsx("button", { type: "button", className: `${le.quickTab} ${O === W ? le.activeQuickTab : ""}`, onClick: () => A(W), children: W }, W)) : /* @__PURE__ */ o.jsx("span", { className: le.meta, children: x("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Mr,
          {
            label: x("Повторы"),
            value: M,
            options: gS.map((W) => ({ ...W, label: x(W.label) })),
            onSelect: (W) => X(W)
          }
        ),
        M === "custom" && /* @__PURE__ */ o.jsx("div", { className: le.quickTabs, role: "group", "aria-label": x("Дни повтора"), children: Ml.map((W) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": U.includes(W.key),
            className: `${le.quickTab} ${U.includes(W.key) ? le.activeQuickTab : ""}`,
            onClick: () => ke(W.key),
            children: x(W.label)
          },
          W.key
        )) }),
        /* @__PURE__ */ o.jsx(
          Mr,
          {
            label: x("Устройство воспроизведения"),
            placeholder: x("Выберите устройство"),
            value: T,
            options: h.map((W) => ({ value: W.id, label: W.name })),
            onSelect: E
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: le.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${le.label} ${le.volumeLabel}`, children: [
            x("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: le.volumeValue, children: [
              Math.round(H * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: le.input, type: "range", min: "0", max: "1", step: "0.05", value: H, onChange: (W) => B(Number(W.target.value)) })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(
        vS,
        {
          open: !!Ne,
          onClose: () => C(null),
          command: Ne,
          onEdit: (W) => ve(W),
          onToggleStatus: (W, z) => w(W, { status: z }),
          onDelete: (W) => {
            p(W), C(null);
          }
        }
      )
    ] })
  ] });
}, wS = () => {
  const r = Yl(), i = Gl(), a = Dr(), { pathname: c } = _t(), d = a ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && a !== !1 ? a === null ? /* @__PURE__ */ o.jsx(Or, {}) : /* @__PURE__ */ o.jsx(Pn, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ o.jsx(dp, { resetKey: c, children: /* @__PURE__ */ o.jsxs(Rv, { children: [
    /* @__PURE__ */ o.jsx(Be, { path: "/commands/whisper", element: i ? /* @__PURE__ */ o.jsx(m1, {}) : /* @__PURE__ */ o.jsx(Pn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Be, { path: "/logs", element: r && i ? /* @__PURE__ */ o.jsx(S1, {}) : /* @__PURE__ */ o.jsx(Pn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Be, { path: "/downloads", element: i ? /* @__PURE__ */ o.jsx(Kx, {}) : /* @__PURE__ */ o.jsx(Pn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/",
        element: /* @__PURE__ */ o.jsx(
          Pn,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/scripts",
        element: /* @__PURE__ */ o.jsx(K0, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/commands",
        element: /* @__PURE__ */ o.jsx(
          Pn,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ o.jsx(Sx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ o.jsx(jx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ o.jsx(
          Pn,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ o.jsx(Nx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ o.jsx($x, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ o.jsx(Dx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(Be, { path: "/monitor", element: /* @__PURE__ */ o.jsx(hS, {}) }),
    /* @__PURE__ */ o.jsx(Be, { path: "/calls", element: /* @__PURE__ */ o.jsx(Gw, {}) }),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/timer",
        element: /* @__PURE__ */ o.jsx(Fw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/alarm",
        element: /* @__PURE__ */ o.jsx(xS, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "/settings",
        element: /* @__PURE__ */ o.jsx(cw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        path: "*",
        element: /* @__PURE__ */ o.jsx(
          Pn,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] }) });
}, kp = "ha-dialog-ui-theme", jl = (r) => r === "light" ? "light" : "dark", SS = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(kp, r);
}, kS = () => {
  const r = Bt(), i = ap(), a = ot(), [c, d] = v.useState(!1), [f, p] = v.useState(null), [h, g] = v.useState(() => jl(localStorage.getItem(kp)));
  return v.useEffect(() => {
    SS(h);
  }, [h]), v.useEffect(() => {
    let w = !0, y = !1, _ = !1, S = !1;
    r.run(async () => {
      const T = await a.getSettings();
      w && (y || g(jl(T.theme)), S || d(!!T.api_commands_enabled), _ || p(!!T.active_remout));
    }, { retryable: !0 });
    const C = (T) => {
      y = !0, g(jl(T.detail));
    }, N = (T) => {
      _ = !0, p(T.detail);
    }, j = (T) => {
      S = !0, d(!!T.detail);
    };
    return window.addEventListener(Tl, j), window.addEventListener(ia, N), window.addEventListener("ha-dialog-ui-theme-change", C), () => {
      w = !1, window.removeEventListener(Tl, j), window.removeEventListener(ia, N), window.removeEventListener("ha-dialog-ui-theme-change", C);
    };
  }, [a, r.run]), /* @__PURE__ */ o.jsx(ip.Provider, { value: c, children: /* @__PURE__ */ o.jsx(up.Provider, { value: f, children: /* @__PURE__ */ o.jsxs("div", { className: "appShell", "data-theme": h, lang: i, children: [
    /* @__PURE__ */ o.jsx(Ue, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ o.jsx(Or, {}) : /* @__PURE__ */ o.jsx(wS, {})
  ] }) }) });
};
class jS {
  constructor(i) {
    Ze(this, "hass");
    this.hass = i;
  }
  callsWatch(i) {
    return this.monitorSubscribe(i, { type: "ha_dialog_ui/calls/watch" });
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
        (h, g) => this.getPage(i, g + 2, a)
      )
    )).reduce((h, g) => {
      const w = Array.isArray(g == null ? void 0 : g.data) ? g.data : Array.isArray(g == null ? void 0 : g.script_actions) ? g.script_actions : [];
      return [...h, ...w];
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
    let p = !1, h;
    const g = async (w) => {
      if (c.has(w)) return;
      c.add(w);
      const y = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: w
      }), _ = Array.isArray(y == null ? void 0 : y.children) ? y.children : [];
      await Promise.all(_.map(async (S) => {
        var j;
        const C = String((S == null ? void 0 : S.media_content_id) || ""), N = String((S == null ? void 0 : S.title) || C);
        if (C) {
          if (S != null && S.can_expand) {
            try {
              await g(C);
            } catch (T) {
              f.push(T);
            }
            return;
          }
          if (i.test(N) || i.test(C) || (S == null ? void 0 : S.media_content_type) === "music" || (j = S == null ? void 0 : S.media_content_type) != null && j.startsWith("audio/")) {
            const T = "media-source://media_source/local/", E = C.startsWith(T) ? C.slice(T.length) : C;
            d.set(E, {
              value: E,
              label: N
            });
          }
        }
      }));
    };
    for (const w of a)
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
    return Object.values(this.hass.states).filter((i) => i.entity_id.startsWith("script.")).map((i) => {
      var a;
      return {
        entity_id: i.entity_id,
        name: ((a = i.attributes) == null ? void 0 : a.friendly_name) ?? i.entity_id
      };
    });
  }
}
function jp(r) {
  var i;
  return (i = r == null ? void 0 : r.connection) != null && i.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function CS() {
  return jp(window.hass);
}
function ES({
  children: r,
  hass: i
}) {
  const [a, c] = v.useState(null), [d, f] = v.useState(0), p = v.useRef(null), [h, g] = v.useState(!1), [w, y] = v.useState(!1);
  return v.useEffect(() => {
    let _ = !0;
    c(null);
    async function S() {
      const C = i ? jp(i) : await CS();
      if (!_) return;
      p.current ? p.current.setHass(C) : p.current = new jS(C);
      const N = C.user ?? await C.connection.sendMessagePromise({ type: "auth/current_user" });
      _ && (g((N == null ? void 0 : N.is_admin) === !0), y(!0));
    }
    return S().catch((C) => {
      _ && c(At(C));
    }), () => {
      _ = !1;
    };
  }, [i, d]), a ? /* @__PURE__ */ o.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ o.jsx(Ue, { error: a, retry: () => f((_) => _ + 1) }) }) : !w || !p.current ? /* @__PURE__ */ o.jsx(Or, { label: x("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ o.jsx(fp.Provider, { value: p.current, children: /* @__PURE__ */ o.jsx(lp.Provider, { value: h, children: r }) });
}
function NS({ hass: r }) {
  return /* @__PURE__ */ o.jsx(Zv, { children: /* @__PURE__ */ o.jsx(ES, { hass: r, children: /* @__PURE__ */ o.jsx(kS, {}) }) });
}
const Nf = "ha-dialog-ui-panel", Tf = "ha-dialog-ui-style";
class TS extends HTMLElement {
  constructor() {
    super(...arguments);
    Ze(this, "root");
    Ze(this, "container");
    Ze(this, "layoutObserver");
    Ze(this, "updateViewport", () => {
      const a = Math.max(0, this.getBoundingClientRect().top + window.scrollY);
      this.style.setProperty("--ha-dialog-ui-available-height", `${Math.max(0, window.innerHeight - a)}px`);
    });
    Ze(this, "resume", () => {
      document.visibilityState !== "hidden" && this.isConnected && (this.updateViewport(), this.loadStyles(), this.render());
    });
    Ze(this, "hassValue");
    Ze(this, "renderTimer");
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
    if (a.getElementById(Tf)) return;
    const c = document.createElement("style");
    c.id = Tf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px;min-height:var(--ha-dialog-ui-available-height, 100dvh)}.panelRenderRecovery{display:flex;flex-direction:column;height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;box-sizing:border-box}.panelRecoveryNavigation{flex-shrink:0;min-width:0}.panelRecoveryNavigation>nav{display:inline-flex;flex-wrap:wrap;gap:8px}.panelRecoveryNavigation>nav a{padding:10px 14px;border:1px solid var(--border);border-radius:12px}.panelRecoveryNavigation>nav a:hover,.panelRecoveryNavigation>nav a:focus-visible{background:var(--surface-hover)}.panelRecoveryContent{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px 0}.panelRecoveryMessage{width:100%;max-width:36rem;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center}.panelRecoveryMessage p{margin:0;font-size:clamp(16px,2vw,20px);line-height:1.6;overflow-wrap:anywhere}.panelRecoveryMessage>button{align-self:center;max-width:100%;min-height:46px}@media(max-width:768px){.panelRenderRecovery{padding:16px}.panelRecoveryContent{padding:20px 8px}}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._tabs_1vwxg_1{display:inline-flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_1vwxg_16{position:relative}._tab_1vwxg_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_1vwxg_1:hover{color:var(--text);background:var(--control-background)}._tab_1vwxg_1:active{transform:scale(.98)}._active_1vwxg_49{color:var(--text);background:var(--primary);box-shadow:none}._tab_1vwxg_1>span{margin-left:5px}._menu_1vwxg_59{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_1vwxg_76{margin-left:8px}._tab_1vwxg_1[aria-expanded=true] ._chevron_1vwxg_76{transform:rotate(180deg)}._tab_1vwxg_1:focus-visible,._menuItem_1vwxg_84:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_1vwxg_84{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_1vwxg_84:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_1vwxg_84._active_1vwxg_49{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_1vwxg_1{flex-wrap:wrap;max-width:100%}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._loader_m2244_1{width:100%;min-height:220px;display:flex;align-items:center;justify-content:center;gap:14px;color:var(--text-secondary)}._fullscreen_m2244_11{min-height:100vh}._spinner_m2244_15{width:42px;height:42px;border-radius:50%;border:4px solid var(--loader-track);border-top-color:var(--primary);animation:_spin_m2244_15 .85s linear infinite}._label_m2244_24{font-size:15px;font-weight:600}@keyframes _spin_m2244_15{to{transform:rotate(360deg)}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._toast_1g76h_1{position:fixed;z-index:10001;top:max(16px,env(safe-area-inset-top));left:50%;transform:translate(-50%);width:max-content;max-width:min(560px,100% - 32px);box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;border:1px solid var(--primary);border-radius:16px;background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 32px var(--shadow-floating);line-height:1.5;overflow-wrap:anywhere}._toast_1g76h_1>svg{flex-shrink:0;color:var(--primary)}._toast_1g76h_1 button{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:36px;min-height:36px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}._toast_1g76h_1 button:hover{background:var(--surface-hover)}._warning_1g76h_43{border-color:var(--danger)}._warning_1g76h_43>svg{color:var(--danger)}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_rqdjx_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_rqdjx_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_rqdjx_9:empty{display:none}._hidden_rqdjx_20{visibility:hidden}._overlay_rqdjx_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_rqdjx_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_rqdjx_24 ._card_rqdjx_32{flex:1;min-height:0}._title_rqdjx_51,._subtitle_rqdjx_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_rqdjx_1 1.4s ease-in-out infinite}._title_rqdjx_51{width:45%;max-width:320px;height:18px}._subtitle_rqdjx_51{width:25%;max-width:180px;height:13px}._srOnly_rqdjx_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_rqdjx_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_rqdjx_51,._subtitle_rqdjx_51{animation:none}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}._navigation_fb6jk_1{padding:24px 32px 0}._page_fb6jk_5{padding:0 32px 24px;color:var(--text);min-width:0}._title_fb6jk_11{margin-top:28px}._hint_fb6jk_15{color:var(--text-secondary);line-height:1.6}._grid_fb6jk_20{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_fb6jk_27{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border);border-radius:20px;background:var(--surface);color:var(--text);font:inherit;cursor:pointer;min-width:0}._device_fb6jk_27 strong{overflow-wrap:anywhere;font-size:18px}._device_fb6jk_27 span{color:var(--text-secondary)}._device_fb6jk_27:hover,._device_fb6jk_27:focus-visible{border-color:var(--primary)}._active_fb6jk_56{border-color:var(--primary)}._active_fb6jk_56 svg{color:var(--primary)}._status_fb6jk_64{display:flex;align-items:center;gap:8px;margin-bottom:24px}._actions_fb6jk_71{display:flex;gap:12px;width:100%}._actions_fb6jk_71>button{flex:1;min-width:0}._actions_fb6jk_71 button{display:flex;align-items:center;justify-content:center;gap:8px}@media(max-width:768px){._navigation_fb6jk_1{padding:0}._page_fb6jk_5{padding:16px}._title_fb6jk_11{display:none}}._page_12ruw_1{padding:0 32px 24px;box-sizing:border-box;min-width:0;color:var(--text)}._heading_12ruw_8{display:flex;align-items:center;gap:16px;margin:28px 0}._heading_12ruw_8 h1{font-size:30px;margin:0}._heading_12ruw_8 p{color:var(--text-secondary);line-height:1.6;margin:8px 0 0}._grid_12ruw_26{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_12ruw_33{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border, #333);background:var(--surface, #1c1c1c);color:var(--text);border-radius:20px;font:inherit;cursor:pointer;min-width:0}._device_12ruw_33 strong{font-size:18px;overflow-wrap:anywhere}._device_12ruw_33 span,._device_12ruw_33 small{color:var(--text-secondary)}._device_12ruw_33:hover,._device_12ruw_33:focus-visible{border-color:var(--primary, #03a9f4)}._deviceLive_12ruw_64{border-color:#3da98c}._deviceLive_12ruw_64 svg{color:#3da98c}._navigation_12ruw_72{padding:24px 32px 0}._playback_12ruw_76{position:relative;border:1px solid var(--primary, #03a9f4);background:color-mix(in srgb,var(--primary, #03a9f4) 10%,transparent);border-radius:14px;overflow:hidden}._playback_12ruw_76>svg{position:absolute;left:18px;top:23px;pointer-events:none;color:var(--primary)}._playbackSelect_12ruw_92{padding:18px 40px 6px 54px;border:0;background:transparent;border-radius:14px 14px 0 0;min-height:48px;text-overflow:ellipsis}._playback_12ruw_76:has(select:disabled){opacity:.65}._playback_12ruw_76 small{display:block;padding:0 18px 18px 54px;color:var(--text-secondary);pointer-events:none}._statusRow_12ruw_112{display:flex;align-items:center;gap:8px;margin-bottom:20px}._status_12ruw_112{display:flex;gap:10px;align-items:center;padding:16px 0;color:var(--text-secondary)}._live_12ruw_127{color:#32aa87}._hint_12ruw_131{font-size:14px;color:var(--text-secondary);line-height:1.6}._footer_12ruw_137{display:flex;gap:12px;width:100%}._footer_12ruw_137>button{flex:1;min-width:0}._empty_12ruw_148{padding:28px;border:1px dashed var(--border, #333);border-radius:18px;line-height:1.7}._error_12ruw_155{color:var(--danger, #ed8291);line-height:1.5}@media(max-width:768px){._navigation_12ruw_72{padding:0}._page_12ruw_1{padding:16px}._heading_12ruw_8{margin:20px 0}._heading_12ruw_8 h1{display:none}._grid_12ruw_26{grid-template-columns:1fr}._heading_12ruw_8>svg{display:none}}\n", a.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const a = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), a.appendChild(this.container)), this.root = Ph.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ o.jsx(bf.StrictMode, { children: /* @__PURE__ */ o.jsx(dp, { children: /* @__PURE__ */ o.jsx(NS, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(Nf) || customElements.define(Nf, TS);
