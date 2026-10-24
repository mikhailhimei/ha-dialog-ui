var ph = Object.defineProperty;
var mh = (r, l, i) => l in r ? ph(r, l, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[l] = i;
var qt = (r, l, i) => mh(r, typeof l != "symbol" ? l + "" : l, i);
function kf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ui = { exports: {} }, Ns = {}, ci = { exports: {} }, pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function hh() {
  if (Wd) return pe;
  Wd = 1;
  var r = Symbol.for("react.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function S(P) {
    return P === null || typeof P != "object" ? null : (P = _ && P[_] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, R = Object.assign, E = {};
  function N(P, F, ie) {
    this.props = P, this.context = F, this.refs = E, this.updater = ie || C;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(P, F) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, F, "setState");
  }, N.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function A() {
  }
  A.prototype = N.prototype;
  function O(P, F, ie) {
    this.props = P, this.context = F, this.refs = E, this.updater = ie || C;
  }
  var D = O.prototype = new A();
  D.constructor = O, R(D, N.prototype), D.isPureReactComponent = !0;
  var M = Array.isArray, B = Object.prototype.hasOwnProperty, I = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(P, F, ie) {
    var ce, ve = {}, ye = null, Se = null;
    if (F != null) for (ce in F.ref !== void 0 && (Se = F.ref), F.key !== void 0 && (ye = "" + F.key), F) B.call(F, ce) && !J.hasOwnProperty(ce) && (ve[ce] = F[ce]);
    var xe = arguments.length - 2;
    if (xe === 1) ve.children = ie;
    else if (1 < xe) {
      for (var je = Array(xe), nt = 0; nt < xe; nt++) je[nt] = arguments[nt + 2];
      ve.children = je;
    }
    if (P && P.defaultProps) for (ce in xe = P.defaultProps, xe) ve[ce] === void 0 && (ve[ce] = xe[ce]);
    return { $$typeof: r, type: P, key: ye, ref: Se, props: ve, _owner: I.current };
  }
  function Q(P, F) {
    return { $$typeof: r, type: P.type, key: F, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function fe(P) {
    return typeof P == "object" && P !== null && P.$$typeof === r;
  }
  function de(P) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(ie) {
      return F[ie];
    });
  }
  var Te = /\/+/g;
  function Ee(P, F) {
    return typeof P == "object" && P !== null && P.key != null ? de("" + P.key) : F.toString(36);
  }
  function he(P, F, ie, ce, ve) {
    var ye = typeof P;
    (ye === "undefined" || ye === "boolean") && (P = null);
    var Se = !1;
    if (P === null) Se = !0;
    else switch (ye) {
      case "string":
      case "number":
        Se = !0;
        break;
      case "object":
        switch (P.$$typeof) {
          case r:
          case l:
            Se = !0;
        }
    }
    if (Se) return Se = P, ve = ve(Se), P = ce === "" ? "." + Ee(Se, 0) : ce, M(ve) ? (ie = "", P != null && (ie = P.replace(Te, "$&/") + "/"), he(ve, F, ie, "", function(nt) {
      return nt;
    })) : ve != null && (fe(ve) && (ve = Q(ve, ie + (!ve.key || Se && Se.key === ve.key ? "" : ("" + ve.key).replace(Te, "$&/") + "/") + P)), F.push(ve)), 1;
    if (Se = 0, ce = ce === "" ? "." : ce + ":", M(P)) for (var xe = 0; xe < P.length; xe++) {
      ye = P[xe];
      var je = ce + Ee(ye, xe);
      Se += he(ye, F, ie, je, ve);
    }
    else if (je = S(P), typeof je == "function") for (P = je.call(P), xe = 0; !(ye = P.next()).done; ) ye = ye.value, je = ce + Ee(ye, xe++), Se += he(ye, F, ie, je, ve);
    else if (ye === "object") throw F = String(P), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return Se;
  }
  function ge(P, F, ie) {
    if (P == null) return P;
    var ce = [], ve = 0;
    return he(P, ce, "", "", function(ye) {
      return F.call(ie, ye, ve++);
    }), ce;
  }
  function Ce(P) {
    if (P._status === -1) {
      var F = P._result;
      F = F(), F.then(function(ie) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = ie);
      }, function(ie) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = ie);
      }), P._status === -1 && (P._status = 0, P._result = F);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var H = { current: null }, z = { transition: null }, X = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: z, ReactCurrentOwner: I };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return pe.Children = { map: ge, forEach: function(P, F, ie) {
    ge(P, function() {
      F.apply(this, arguments);
    }, ie);
  }, count: function(P) {
    var F = 0;
    return ge(P, function() {
      F++;
    }), F;
  }, toArray: function(P) {
    return ge(P, function(F) {
      return F;
    }) || [];
  }, only: function(P) {
    if (!fe(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, pe.Component = N, pe.Fragment = i, pe.Profiler = d, pe.PureComponent = O, pe.StrictMode = c, pe.Suspense = g, pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, pe.act = Y, pe.cloneElement = function(P, F, ie) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var ce = R({}, P.props), ve = P.key, ye = P.ref, Se = P._owner;
    if (F != null) {
      if (F.ref !== void 0 && (ye = F.ref, Se = I.current), F.key !== void 0 && (ve = "" + F.key), P.type && P.type.defaultProps) var xe = P.type.defaultProps;
      for (je in F) B.call(F, je) && !J.hasOwnProperty(je) && (ce[je] = F[je] === void 0 && xe !== void 0 ? xe[je] : F[je]);
    }
    var je = arguments.length - 2;
    if (je === 1) ce.children = ie;
    else if (1 < je) {
      xe = Array(je);
      for (var nt = 0; nt < je; nt++) xe[nt] = arguments[nt + 2];
      ce.children = xe;
    }
    return { $$typeof: r, type: P.type, key: ve, ref: ye, props: ce, _owner: Se };
  }, pe.createContext = function(P) {
    return P = { $$typeof: m, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: f, _context: P }, P.Consumer = P;
  }, pe.createElement = W, pe.createFactory = function(P) {
    var F = W.bind(null, P);
    return F.type = P, F;
  }, pe.createRef = function() {
    return { current: null };
  }, pe.forwardRef = function(P) {
    return { $$typeof: h, render: P };
  }, pe.isValidElement = fe, pe.lazy = function(P) {
    return { $$typeof: y, _payload: { _status: -1, _result: P }, _init: Ce };
  }, pe.memo = function(P, F) {
    return { $$typeof: x, type: P, compare: F === void 0 ? null : F };
  }, pe.startTransition = function(P) {
    var F = z.transition;
    z.transition = {};
    try {
      P();
    } finally {
      z.transition = F;
    }
  }, pe.unstable_act = Y, pe.useCallback = function(P, F) {
    return H.current.useCallback(P, F);
  }, pe.useContext = function(P) {
    return H.current.useContext(P);
  }, pe.useDebugValue = function() {
  }, pe.useDeferredValue = function(P) {
    return H.current.useDeferredValue(P);
  }, pe.useEffect = function(P, F) {
    return H.current.useEffect(P, F);
  }, pe.useId = function() {
    return H.current.useId();
  }, pe.useImperativeHandle = function(P, F, ie) {
    return H.current.useImperativeHandle(P, F, ie);
  }, pe.useInsertionEffect = function(P, F) {
    return H.current.useInsertionEffect(P, F);
  }, pe.useLayoutEffect = function(P, F) {
    return H.current.useLayoutEffect(P, F);
  }, pe.useMemo = function(P, F) {
    return H.current.useMemo(P, F);
  }, pe.useReducer = function(P, F, ie) {
    return H.current.useReducer(P, F, ie);
  }, pe.useRef = function(P) {
    return H.current.useRef(P);
  }, pe.useState = function(P) {
    return H.current.useState(P);
  }, pe.useSyncExternalStore = function(P, F, ie) {
    return H.current.useSyncExternalStore(P, F, ie);
  }, pe.useTransition = function() {
    return H.current.useTransition();
  }, pe.version = "18.3.1", pe;
}
var Bd;
function bi() {
  return Bd || (Bd = 1, ci.exports = hh()), ci.exports;
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
var Ud;
function vh() {
  if (Ud) return Ns;
  Ud = 1;
  var r = bi(), l = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(h, g, x) {
    var y, _ = {}, S = null, C = null;
    x !== void 0 && (S = "" + x), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (_[y] = g[y]);
    if (h && h.defaultProps) for (y in g = h.defaultProps, g) _[y] === void 0 && (_[y] = g[y]);
    return { $$typeof: l, type: h, key: S, ref: C, props: _, _owner: d.current };
  }
  return Ns.Fragment = i, Ns.jsx = m, Ns.jsxs = m, Ns;
}
var Vd;
function yh() {
  return Vd || (Vd = 1, ui.exports = vh()), ui.exports;
}
var a = yh(), v = bi();
const Cf = /* @__PURE__ */ kf(v);
var Qo = {}, di = { exports: {} }, dt = {}, fi = { exports: {} }, pi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd;
function gh() {
  return qd || (qd = 1, (function(r) {
    function l(z, X) {
      var Y = z.length;
      z.push(X);
      e: for (; 0 < Y; ) {
        var P = Y - 1 >>> 1, F = z[P];
        if (0 < d(F, X)) z[P] = X, z[Y] = F, Y = P;
        else break e;
      }
    }
    function i(z) {
      return z.length === 0 ? null : z[0];
    }
    function c(z) {
      if (z.length === 0) return null;
      var X = z[0], Y = z.pop();
      if (Y !== X) {
        z[0] = Y;
        e: for (var P = 0, F = z.length, ie = F >>> 1; P < ie; ) {
          var ce = 2 * (P + 1) - 1, ve = z[ce], ye = ce + 1, Se = z[ye];
          if (0 > d(ve, Y)) ye < F && 0 > d(Se, ve) ? (z[P] = Se, z[ye] = Y, P = ye) : (z[P] = ve, z[ce] = Y, P = ce);
          else if (ye < F && 0 > d(Se, Y)) z[P] = Se, z[ye] = Y, P = ye;
          else break e;
        }
      }
      return X;
    }
    function d(z, X) {
      var Y = z.sortIndex - X.sortIndex;
      return Y !== 0 ? Y : z.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var m = Date, h = m.now();
      r.unstable_now = function() {
        return m.now() - h;
      };
    }
    var g = [], x = [], y = 1, _ = null, S = 3, C = !1, R = !1, E = !1, N = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function D(z) {
      for (var X = i(x); X !== null; ) {
        if (X.callback === null) c(x);
        else if (X.startTime <= z) c(x), X.sortIndex = X.expirationTime, l(g, X);
        else break;
        X = i(x);
      }
    }
    function M(z) {
      if (E = !1, D(z), !R) if (i(g) !== null) R = !0, Ce(B);
      else {
        var X = i(x);
        X !== null && H(M, X.startTime - z);
      }
    }
    function B(z, X) {
      R = !1, E && (E = !1, A(W), W = -1), C = !0;
      var Y = S;
      try {
        for (D(X), _ = i(g); _ !== null && (!(_.expirationTime > X) || z && !de()); ) {
          var P = _.callback;
          if (typeof P == "function") {
            _.callback = null, S = _.priorityLevel;
            var F = P(_.expirationTime <= X);
            X = r.unstable_now(), typeof F == "function" ? _.callback = F : _ === i(g) && c(g), D(X);
          } else c(g);
          _ = i(g);
        }
        if (_ !== null) var ie = !0;
        else {
          var ce = i(x);
          ce !== null && H(M, ce.startTime - X), ie = !1;
        }
        return ie;
      } finally {
        _ = null, S = Y, C = !1;
      }
    }
    var I = !1, J = null, W = -1, Q = 5, fe = -1;
    function de() {
      return !(r.unstable_now() - fe < Q);
    }
    function Te() {
      if (J !== null) {
        var z = r.unstable_now();
        fe = z;
        var X = !0;
        try {
          X = J(!0, z);
        } finally {
          X ? Ee() : (I = !1, J = null);
        }
      } else I = !1;
    }
    var Ee;
    if (typeof O == "function") Ee = function() {
      O(Te);
    };
    else if (typeof MessageChannel < "u") {
      var he = new MessageChannel(), ge = he.port2;
      he.port1.onmessage = Te, Ee = function() {
        ge.postMessage(null);
      };
    } else Ee = function() {
      N(Te, 0);
    };
    function Ce(z) {
      J = z, I || (I = !0, Ee());
    }
    function H(z, X) {
      W = N(function() {
        z(r.unstable_now());
      }, X);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, r.unstable_continueExecution = function() {
      R || C || (R = !0, Ce(B));
    }, r.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < z ? Math.floor(1e3 / z) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, r.unstable_next = function(z) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = S;
      }
      var Y = S;
      S = X;
      try {
        return z();
      } finally {
        S = Y;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(z, X) {
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
      var Y = S;
      S = z;
      try {
        return X();
      } finally {
        S = Y;
      }
    }, r.unstable_scheduleCallback = function(z, X, Y) {
      var P = r.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? P + Y : P) : Y = P, z) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = Y + F, z = { id: y++, callback: X, priorityLevel: z, startTime: Y, expirationTime: F, sortIndex: -1 }, Y > P ? (z.sortIndex = Y, l(x, z), i(g) === null && z === i(x) && (E ? (A(W), W = -1) : E = !0, H(M, Y - P))) : (z.sortIndex = F, l(g, z), R || C || (R = !0, Ce(B))), z;
    }, r.unstable_shouldYield = de, r.unstable_wrapCallback = function(z) {
      var X = S;
      return function() {
        var Y = S;
        S = X;
        try {
          return z.apply(this, arguments);
        } finally {
          S = Y;
        }
      };
    };
  })(pi)), pi;
}
var Qd;
function _h() {
  return Qd || (Qd = 1, fi.exports = gh()), fi.exports;
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
var Kd;
function xh() {
  if (Kd) return dt;
  Kd = 1;
  var r = bi(), l = _h();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, _ = {};
  function S(e) {
    return g.call(_, e) ? !0 : g.call(y, e) ? !1 : x.test(e) ? _[e] = !0 : (y[e] = !0, !1);
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
  function R(e, t, n, s) {
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
  function E(e, t, n, s, o, u, p) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = p;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new E(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new E(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new E(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new E(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new E(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new E(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function O(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      A,
      O
    );
    N[t] = new E(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(A, O);
    N[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(A, O);
    N[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function D(e, t, n, s) {
    var o = N.hasOwnProperty(t) ? N[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (R(t, n, o, s) && (n = null), s || o === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, s = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), I = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), fe = Symbol.for("react.provider"), de = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ge = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, P;
  function F(e) {
    if (P === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      P = t && t[1] || "";
    }
    return `
` + P + e;
  }
  var ie = !1;
  function ce(e, t) {
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
        } catch (L) {
          var s = L;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (L) {
          s = L;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (L) {
          s = L;
        }
        e();
      }
    } catch (L) {
      if (L && s && typeof L.stack == "string") {
        for (var o = L.stack.split(`
`), u = s.stack.split(`
`), p = o.length - 1, k = u.length - 1; 1 <= p && 0 <= k && o[p] !== u[k]; ) k--;
        for (; 1 <= p && 0 <= k; p--, k--) if (o[p] !== u[k]) {
          if (p !== 1 || k !== 1)
            do
              if (p--, k--, 0 > k || o[p] !== u[k]) {
                var j = `
` + o[p].replace(" at new ", " at ");
                return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
              }
            while (1 <= p && 0 <= k);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case J:
        return "Fragment";
      case I:
        return "Portal";
      case Q:
        return "Profiler";
      case W:
        return "StrictMode";
      case Ee:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case de:
        return (e.displayName || "Context") + ".Consumer";
      case fe:
        return (e._context.displayName || "Context") + ".Provider";
      case Te:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ge:
        return t = e.displayName || null, t !== null ? t : ye(e.type) || "Memo";
      case Ce:
        t = e._payload, e = e._init;
        try {
          return ye(e(t));
        } catch {
        }
    }
    return null;
  }
  function Se(e) {
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
        return ye(t);
      case 8:
        return t === W ? "StrictMode" : "Mode";
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
  function je(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function nt(e) {
    var t = je(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(p) {
        s = "" + p, u.call(this, p);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(p) {
        s = "" + p;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Rn(e) {
    e._valueTracker || (e._valueTracker = nt(e));
  }
  function Hr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = je(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Pn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function va(e, t) {
    var n = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Yi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = xe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Gi(e, t) {
    t = t.checked, t != null && D(e, "checked", t, !1);
  }
  function ya(e, t) {
    Gi(e, t);
    var n = xe(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ga(e, t.type, n) : t.hasOwnProperty("defaultValue") && ga(e, t.type, xe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ji(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ga(e, t, n) {
    (t !== "number" || Pn(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Wr = Array.isArray;
  function rr(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xe(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, s && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _a(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Xi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Wr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: xe(n) };
  }
  function Zi(e, t) {
    var n = xe(t.value), s = xe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function eu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function tu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function xa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? tu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var zs, nu = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (zs = zs || document.createElement("div"), zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Br(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ur = {
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
  }, yp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ur).forEach(function(e) {
    yp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Ur[t] = Ur[e];
    });
  });
  function ru(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ur.hasOwnProperty(e) && Ur[e] ? ("" + t).trim() : t + "px";
  }
  function su(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, o = ru(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var gp = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function wa(e, t) {
    if (t) {
      if (gp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Sa(e, t) {
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
  var ka = null;
  function Ca(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ja = null, sr = null, or = null;
  function ou(e) {
    if (e = fs(e)) {
      if (typeof ja != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = lo(t), ja(e.stateNode, e.type, t));
    }
  }
  function au(e) {
    sr ? or ? or.push(e) : or = [e] : sr = e;
  }
  function lu() {
    if (sr) {
      var e = sr, t = or;
      if (or = sr = null, ou(e), t) for (e = 0; e < t.length; e++) ou(t[e]);
    }
  }
  function iu(e, t) {
    return e(t);
  }
  function uu() {
  }
  var Ea = !1;
  function cu(e, t, n) {
    if (Ea) return e(t, n);
    Ea = !0;
    try {
      return iu(e, t, n);
    } finally {
      Ea = !1, (sr !== null || or !== null) && (uu(), lu());
    }
  }
  function Vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = lo(n);
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
  var Na = !1;
  if (h) try {
    var qr = {};
    Object.defineProperty(qr, "passive", { get: function() {
      Na = !0;
    } }), window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
  } catch {
    Na = !1;
  }
  function _p(e, t, n, s, o, u, p, k, j) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (V) {
      this.onError(V);
    }
  }
  var Qr = !1, Os = null, Fs = !1, Ta = null, xp = { onError: function(e) {
    Qr = !0, Os = e;
  } };
  function wp(e, t, n, s, o, u, p, k, j) {
    Qr = !1, Os = null, _p.apply(xp, arguments);
  }
  function Sp(e, t, n, s, o, u, p, k, j) {
    if (wp.apply(this, arguments), Qr) {
      if (Qr) {
        var L = Os;
        Qr = !1, Os = null;
      } else throw Error(i(198));
      Fs || (Fs = !0, Ta = L);
    }
  }
  function An(e) {
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
  function du(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function fu(e) {
    if (An(e) !== e) throw Error(i(188));
  }
  function kp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = An(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (s = o.return, s !== null) {
          n = s;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return fu(o), e;
          if (u === s) return fu(o), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== s.return) n = o, s = u;
      else {
        for (var p = !1, k = o.child; k; ) {
          if (k === n) {
            p = !0, n = o, s = u;
            break;
          }
          if (k === s) {
            p = !0, s = o, n = u;
            break;
          }
          k = k.sibling;
        }
        if (!p) {
          for (k = u.child; k; ) {
            if (k === n) {
              p = !0, n = u, s = o;
              break;
            }
            if (k === s) {
              p = !0, s = u, n = o;
              break;
            }
            k = k.sibling;
          }
          if (!p) throw Error(i(189));
        }
      }
      if (n.alternate !== s) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function pu(e) {
    return e = kp(e), e !== null ? mu(e) : null;
  }
  function mu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = mu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var hu = l.unstable_scheduleCallback, vu = l.unstable_cancelCallback, Cp = l.unstable_shouldYield, jp = l.unstable_requestPaint, De = l.unstable_now, Ep = l.unstable_getCurrentPriorityLevel, Ra = l.unstable_ImmediatePriority, yu = l.unstable_UserBlockingPriority, Hs = l.unstable_NormalPriority, Np = l.unstable_LowPriority, gu = l.unstable_IdlePriority, Ws = null, Ht = null;
  function Tp(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == "function") try {
      Ht.onCommitFiberRoot(Ws, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Rt = Math.clz32 ? Math.clz32 : Ap, Rp = Math.log, Pp = Math.LN2;
  function Ap(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Rp(e) / Pp | 0) | 0;
  }
  var Bs = 64, Us = 4194304;
  function Kr(e) {
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
  function Vs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, o = e.suspendedLanes, u = e.pingedLanes, p = n & 268435455;
    if (p !== 0) {
      var k = p & ~o;
      k !== 0 ? s = Kr(k) : (u &= p, u !== 0 && (s = Kr(u)));
    } else p = n & ~o, p !== 0 ? s = Kr(p) : u !== 0 && (s = Kr(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & o) === 0 && (o = s & -s, u = t & -t, o >= u || o === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Rt(t), o = 1 << n, s |= e[n], t &= ~o;
    return s;
  }
  function $p(e, t) {
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
  function bp(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var p = 31 - Rt(u), k = 1 << p, j = o[p];
      j === -1 ? ((k & n) === 0 || (k & s) !== 0) && (o[p] = $p(k, t)) : j <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Pa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function _u() {
    var e = Bs;
    return Bs <<= 1, (Bs & 4194240) === 0 && (Bs = 64), e;
  }
  function Aa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Yr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Rt(t), e[t] = n;
  }
  function Ip(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Rt(n), u = 1 << o;
      t[o] = 0, s[o] = -1, e[o] = -1, n &= ~u;
    }
  }
  function $a(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Rt(n), o = 1 << s;
      o & t | e[s] & t && (e[s] |= t), n &= ~o;
    }
  }
  var ke = 0;
  function xu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var wu, ba, Su, ku, Cu, Ia = !1, qs = [], ln = null, un = null, cn = null, Gr = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), dn = [], Lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ju(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ln = null;
        break;
      case "dragenter":
      case "dragleave":
        un = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        Gr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jr.delete(t.pointerId);
    }
  }
  function Xr(e, t, n, s, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [o] }, t !== null && (t = fs(t), t !== null && ba(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Mp(e, t, n, s, o) {
    switch (t) {
      case "focusin":
        return ln = Xr(ln, e, t, n, s, o), !0;
      case "dragenter":
        return un = Xr(un, e, t, n, s, o), !0;
      case "mouseover":
        return cn = Xr(cn, e, t, n, s, o), !0;
      case "pointerover":
        var u = o.pointerId;
        return Gr.set(u, Xr(Gr.get(u) || null, e, t, n, s, o)), !0;
      case "gotpointercapture":
        return u = o.pointerId, Jr.set(u, Xr(Jr.get(u) || null, e, t, n, s, o)), !0;
    }
    return !1;
  }
  function Eu(e) {
    var t = $n(e.target);
    if (t !== null) {
      var n = An(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = du(n), t !== null) {
            e.blockedOn = t, Cu(e.priority, function() {
              Su(n);
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
  function Qs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        ka = s, n.target.dispatchEvent(s), ka = null;
      } else return t = fs(n), t !== null && ba(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Nu(e, t, n) {
    Qs(e) && n.delete(t);
  }
  function Dp() {
    Ia = !1, ln !== null && Qs(ln) && (ln = null), un !== null && Qs(un) && (un = null), cn !== null && Qs(cn) && (cn = null), Gr.forEach(Nu), Jr.forEach(Nu);
  }
  function Zr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ia || (Ia = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Dp)));
  }
  function es(e) {
    function t(o) {
      return Zr(o, e);
    }
    if (0 < qs.length) {
      Zr(qs[0], e);
      for (var n = 1; n < qs.length; n++) {
        var s = qs[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (ln !== null && Zr(ln, e), un !== null && Zr(un, e), cn !== null && Zr(cn, e), Gr.forEach(t), Jr.forEach(t), n = 0; n < dn.length; n++) s = dn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < dn.length && (n = dn[0], n.blockedOn === null); ) Eu(n), n.blockedOn === null && dn.shift();
  }
  var ar = M.ReactCurrentBatchConfig, Ks = !0;
  function zp(e, t, n, s) {
    var o = ke, u = ar.transition;
    ar.transition = null;
    try {
      ke = 1, La(e, t, n, s);
    } finally {
      ke = o, ar.transition = u;
    }
  }
  function Op(e, t, n, s) {
    var o = ke, u = ar.transition;
    ar.transition = null;
    try {
      ke = 4, La(e, t, n, s);
    } finally {
      ke = o, ar.transition = u;
    }
  }
  function La(e, t, n, s) {
    if (Ks) {
      var o = Ma(e, t, n, s);
      if (o === null) Za(e, t, s, Ys, n), ju(e, s);
      else if (Mp(o, e, t, n, s)) s.stopPropagation();
      else if (ju(e, s), t & 4 && -1 < Lp.indexOf(e)) {
        for (; o !== null; ) {
          var u = fs(o);
          if (u !== null && wu(u), u = Ma(e, t, n, s), u === null && Za(e, t, s, Ys, n), u === o) break;
          o = u;
        }
        o !== null && s.stopPropagation();
      } else Za(e, t, s, null, n);
    }
  }
  var Ys = null;
  function Ma(e, t, n, s) {
    if (Ys = null, e = Ca(s), e = $n(e), e !== null) if (t = An(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = du(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ys = e, null;
  }
  function Tu(e) {
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
        switch (Ep()) {
          case Ra:
            return 1;
          case yu:
            return 4;
          case Hs:
          case Np:
            return 16;
          case gu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fn = null, Da = null, Gs = null;
  function Ru() {
    if (Gs) return Gs;
    var e, t = Da, n = t.length, s, o = "value" in fn ? fn.value : fn.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (s = 1; s <= p && t[n - s] === o[u - s]; s++) ;
    return Gs = o.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Js(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Xs() {
    return !0;
  }
  function Pu() {
    return !1;
  }
  function ht(e) {
    function t(n, s, o, u, p) {
      this._reactName = n, this._targetInst = o, this.type = s, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xs : Pu, this.isPropagationStopped = Pu, this;
    }
    return Y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xs);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xs);
    }, persist: function() {
    }, isPersistent: Xs }), t;
  }
  var lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, za = ht(lr), ts = Y({}, lr, { view: 0, detail: 0 }), Fp = ht(ts), Oa, Fa, ns, Zs = Y({}, ts, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ns && (ns && e.type === "mousemove" ? (Oa = e.screenX - ns.screenX, Fa = e.screenY - ns.screenY) : Fa = Oa = 0, ns = e), Oa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Fa;
  } }), Au = ht(Zs), Hp = Y({}, Zs, { dataTransfer: 0 }), Wp = ht(Hp), Bp = Y({}, ts, { relatedTarget: 0 }), Ha = ht(Bp), Up = Y({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = ht(Up), qp = Y({}, lr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Qp = ht(qp), Kp = Y({}, lr, { data: 0 }), $u = ht(Kp), Yp = {
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
  }, Gp = {
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
  }, Jp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jp[e]) ? !!t[e] : !1;
  }
  function Wa() {
    return Xp;
  }
  var Zp = Y({}, ts, { key: function(e) {
    if (e.key) {
      var t = Yp[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wa, charCode: function(e) {
    return e.type === "keypress" ? Js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), em = ht(Zp), tm = Y({}, Zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bu = ht(tm), nm = Y({}, ts, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wa }), rm = ht(nm), sm = Y({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), om = ht(sm), am = Y({}, Zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), lm = ht(am), im = [9, 13, 27, 32], Ba = h && "CompositionEvent" in window, rs = null;
  h && "documentMode" in document && (rs = document.documentMode);
  var um = h && "TextEvent" in window && !rs, Iu = h && (!Ba || rs && 8 < rs && 11 >= rs), Lu = " ", Mu = !1;
  function Du(e, t) {
    switch (e) {
      case "keyup":
        return im.indexOf(t.keyCode) !== -1;
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
  function zu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ir = !1;
  function cm(e, t) {
    switch (e) {
      case "compositionend":
        return zu(t);
      case "keypress":
        return t.which !== 32 ? null : (Mu = !0, Lu);
      case "textInput":
        return e = t.data, e === Lu && Mu ? null : e;
      default:
        return null;
    }
  }
  function dm(e, t) {
    if (ir) return e === "compositionend" || !Ba && Du(e, t) ? (e = Ru(), Gs = Da = fn = null, ir = !1, e) : null;
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
        return Iu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fm[e.type] : t === "textarea";
  }
  function Fu(e, t, n, s) {
    au(s), t = so(t, "onChange"), 0 < t.length && (n = new za("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var ss = null, os = null;
  function pm(e) {
    sc(e, 0);
  }
  function eo(e) {
    var t = pr(e);
    if (Hr(t)) return e;
  }
  function mm(e, t) {
    if (e === "change") return t;
  }
  var Hu = !1;
  if (h) {
    var Ua;
    if (h) {
      var Va = "oninput" in document;
      if (!Va) {
        var Wu = document.createElement("div");
        Wu.setAttribute("oninput", "return;"), Va = typeof Wu.oninput == "function";
      }
      Ua = Va;
    } else Ua = !1;
    Hu = Ua && (!document.documentMode || 9 < document.documentMode);
  }
  function Bu() {
    ss && (ss.detachEvent("onpropertychange", Uu), os = ss = null);
  }
  function Uu(e) {
    if (e.propertyName === "value" && eo(os)) {
      var t = [];
      Fu(t, os, e, Ca(e)), cu(pm, t);
    }
  }
  function hm(e, t, n) {
    e === "focusin" ? (Bu(), ss = t, os = n, ss.attachEvent("onpropertychange", Uu)) : e === "focusout" && Bu();
  }
  function vm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return eo(os);
  }
  function ym(e, t) {
    if (e === "click") return eo(t);
  }
  function gm(e, t) {
    if (e === "input" || e === "change") return eo(t);
  }
  function _m(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Pt = typeof Object.is == "function" ? Object.is : _m;
  function as(e, t) {
    if (Pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var o = n[s];
      if (!g.call(t, o) || !Pt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Vu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qu(e, t) {
    var n = Vu(e);
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
      n = Vu(n);
    }
  }
  function Qu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ku() {
    for (var e = window, t = Pn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Pn(e.document);
    }
    return t;
  }
  function qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function xm(e) {
    var t = Ku(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qu(n.ownerDocument.documentElement, n)) {
      if (s !== null && qa(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, u = Math.min(s.start, o);
          s = s.end === void 0 ? u : Math.min(s.end, o), !e.extend && u > s && (o = s, s = u, u = o), o = qu(n, u);
          var p = qu(
            n,
            s
          );
          o && p && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== p.node || e.focusOffset !== p.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), u > s ? (e.addRange(t), e.extend(p.node, p.offset)) : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var wm = h && "documentMode" in document && 11 >= document.documentMode, ur = null, Qa = null, ls = null, Ka = !1;
  function Yu(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ka || ur == null || ur !== Pn(s) || (s = ur, "selectionStart" in s && qa(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ls && as(ls, s) || (ls = s, s = so(Qa, "onSelect"), 0 < s.length && (t = new za("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = ur)));
  }
  function to(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var cr = { animationend: to("Animation", "AnimationEnd"), animationiteration: to("Animation", "AnimationIteration"), animationstart: to("Animation", "AnimationStart"), transitionend: to("Transition", "TransitionEnd") }, Ya = {}, Gu = {};
  h && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
  function no(e) {
    if (Ya[e]) return Ya[e];
    if (!cr[e]) return e;
    var t = cr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Gu) return Ya[e] = t[n];
    return e;
  }
  var Ju = no("animationend"), Xu = no("animationiteration"), Zu = no("animationstart"), ec = no("transitionend"), tc = /* @__PURE__ */ new Map(), nc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function pn(e, t) {
    tc.set(e, t), f(t, [e]);
  }
  for (var Ga = 0; Ga < nc.length; Ga++) {
    var Ja = nc[Ga], Sm = Ja.toLowerCase(), km = Ja[0].toUpperCase() + Ja.slice(1);
    pn(Sm, "on" + km);
  }
  pn(Ju, "onAnimationEnd"), pn(Xu, "onAnimationIteration"), pn(Zu, "onAnimationStart"), pn("dblclick", "onDoubleClick"), pn("focusin", "onFocus"), pn("focusout", "onBlur"), pn(ec, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function rc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, Sp(s, t, void 0, e), e.currentTarget = null;
  }
  function sc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], o = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var p = s.length - 1; 0 <= p; p--) {
          var k = s[p], j = k.instance, L = k.currentTarget;
          if (k = k.listener, j !== u && o.isPropagationStopped()) break e;
          rc(o, k, L), u = j;
        }
        else for (p = 0; p < s.length; p++) {
          if (k = s[p], j = k.instance, L = k.currentTarget, k = k.listener, j !== u && o.isPropagationStopped()) break e;
          rc(o, k, L), u = j;
        }
      }
    }
    if (Fs) throw e = Ta, Fs = !1, Ta = null, e;
  }
  function Re(e, t) {
    var n = t[ol];
    n === void 0 && (n = t[ol] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (oc(t, e, 2, !1), n.add(s));
  }
  function Xa(e, t, n) {
    var s = 0;
    t && (s |= 4), oc(n, e, s, t);
  }
  var ro = "_reactListening" + Math.random().toString(36).slice(2);
  function us(e) {
    if (!e[ro]) {
      e[ro] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Cm.has(n) || Xa(n, !1, e), Xa(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ro] || (t[ro] = !0, Xa("selectionchange", !1, t));
    }
  }
  function oc(e, t, n, s) {
    switch (Tu(t)) {
      case 1:
        var o = zp;
        break;
      case 4:
        o = Op;
        break;
      default:
        o = La;
    }
    n = o.bind(null, t, n, e), o = void 0, !Na || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), s ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function Za(e, t, n, s, o) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var p = s.tag;
      if (p === 3 || p === 4) {
        var k = s.stateNode.containerInfo;
        if (k === o || k.nodeType === 8 && k.parentNode === o) break;
        if (p === 4) for (p = s.return; p !== null; ) {
          var j = p.tag;
          if ((j === 3 || j === 4) && (j = p.stateNode.containerInfo, j === o || j.nodeType === 8 && j.parentNode === o)) return;
          p = p.return;
        }
        for (; k !== null; ) {
          if (p = $n(k), p === null) return;
          if (j = p.tag, j === 5 || j === 6) {
            s = u = p;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    cu(function() {
      var L = u, V = Ca(n), q = [];
      e: {
        var U = tc.get(e);
        if (U !== void 0) {
          var Z = za, te = e;
          switch (e) {
            case "keypress":
              if (Js(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = em;
              break;
            case "focusin":
              te = "focus", Z = Ha;
              break;
            case "focusout":
              te = "blur", Z = Ha;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Ha;
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
              Z = Au;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Wp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = rm;
              break;
            case Ju:
            case Xu:
            case Zu:
              Z = Vp;
              break;
            case ec:
              Z = om;
              break;
            case "scroll":
              Z = Fp;
              break;
            case "wheel":
              Z = lm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = Qp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = bu;
          }
          var ne = (t & 4) !== 0, ze = !ne && e === "scroll", $ = ne ? U !== null ? U + "Capture" : null : U;
          ne = [];
          for (var T = L, b; T !== null; ) {
            b = T;
            var K = b.stateNode;
            if (b.tag === 5 && K !== null && (b = K, $ !== null && (K = Vr(T, $), K != null && ne.push(cs(T, K, b)))), ze) break;
            T = T.return;
          }
          0 < ne.length && (U = new Z(U, te, null, n, V), q.push({ event: U, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", U && n !== ka && (te = n.relatedTarget || n.fromElement) && ($n(te) || te[Yt])) break e;
          if ((Z || U) && (U = V.window === V ? V : (U = V.ownerDocument) ? U.defaultView || U.parentWindow : window, Z ? (te = n.relatedTarget || n.toElement, Z = L, te = te ? $n(te) : null, te !== null && (ze = An(te), te !== ze || te.tag !== 5 && te.tag !== 6) && (te = null)) : (Z = null, te = L), Z !== te)) {
            if (ne = Au, K = "onMouseLeave", $ = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ne = bu, K = "onPointerLeave", $ = "onPointerEnter", T = "pointer"), ze = Z == null ? U : pr(Z), b = te == null ? U : pr(te), U = new ne(K, T + "leave", Z, n, V), U.target = ze, U.relatedTarget = b, K = null, $n(V) === L && (ne = new ne($, T + "enter", te, n, V), ne.target = b, ne.relatedTarget = ze, K = ne), ze = K, Z && te) t: {
              for (ne = Z, $ = te, T = 0, b = ne; b; b = dr(b)) T++;
              for (b = 0, K = $; K; K = dr(K)) b++;
              for (; 0 < T - b; ) ne = dr(ne), T--;
              for (; 0 < b - T; ) $ = dr($), b--;
              for (; T--; ) {
                if (ne === $ || $ !== null && ne === $.alternate) break t;
                ne = dr(ne), $ = dr($);
              }
              ne = null;
            }
            else ne = null;
            Z !== null && ac(q, U, Z, ne, !1), te !== null && ze !== null && ac(q, ze, te, ne, !0);
          }
        }
        e: {
          if (U = L ? pr(L) : window, Z = U.nodeName && U.nodeName.toLowerCase(), Z === "select" || Z === "input" && U.type === "file") var re = mm;
          else if (Ou(U)) if (Hu) re = gm;
          else {
            re = vm;
            var se = hm;
          }
          else (Z = U.nodeName) && Z.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (re = ym);
          if (re && (re = re(e, L))) {
            Fu(q, re, n, V);
            break e;
          }
          se && se(e, U, L), e === "focusout" && (se = U._wrapperState) && se.controlled && U.type === "number" && ga(U, "number", U.value);
        }
        switch (se = L ? pr(L) : window, e) {
          case "focusin":
            (Ou(se) || se.contentEditable === "true") && (ur = se, Qa = L, ls = null);
            break;
          case "focusout":
            ls = Qa = ur = null;
            break;
          case "mousedown":
            Ka = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ka = !1, Yu(q, n, V);
            break;
          case "selectionchange":
            if (wm) break;
          case "keydown":
          case "keyup":
            Yu(q, n, V);
        }
        var oe;
        if (Ba) e: {
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
        else ir ? Du(e, n) && (ue = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ue = "onCompositionStart");
        ue && (Iu && n.locale !== "ko" && (ir || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && ir && (oe = Ru()) : (fn = V, Da = "value" in fn ? fn.value : fn.textContent, ir = !0)), se = so(L, ue), 0 < se.length && (ue = new $u(ue, e, null, n, V), q.push({ event: ue, listeners: se }), oe ? ue.data = oe : (oe = zu(n), oe !== null && (ue.data = oe)))), (oe = um ? cm(e, n) : dm(e, n)) && (L = so(L, "onBeforeInput"), 0 < L.length && (V = new $u("onBeforeInput", "beforeinput", null, n, V), q.push({ event: V, listeners: L }), V.data = oe));
      }
      sc(q, t);
    });
  }
  function cs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function so(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var o = e, u = o.stateNode;
      o.tag === 5 && u !== null && (o = u, u = Vr(e, n), u != null && s.unshift(cs(e, u, o)), u = Vr(e, t), u != null && s.push(cs(e, u, o))), e = e.return;
    }
    return s;
  }
  function dr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ac(e, t, n, s, o) {
    for (var u = t._reactName, p = []; n !== null && n !== s; ) {
      var k = n, j = k.alternate, L = k.stateNode;
      if (j !== null && j === s) break;
      k.tag === 5 && L !== null && (k = L, o ? (j = Vr(n, u), j != null && p.unshift(cs(n, j, k))) : o || (j = Vr(n, u), j != null && p.push(cs(n, j, k)))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var jm = /\r\n?/g, Em = /\u0000|\uFFFD/g;
  function lc(e) {
    return (typeof e == "string" ? e : "" + e).replace(jm, `
`).replace(Em, "");
  }
  function oo(e, t, n) {
    if (t = lc(t), lc(e) !== t && n) throw Error(i(425));
  }
  function ao() {
  }
  var el = null, tl = null;
  function nl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var rl = typeof setTimeout == "function" ? setTimeout : void 0, Nm = typeof clearTimeout == "function" ? clearTimeout : void 0, ic = typeof Promise == "function" ? Promise : void 0, Tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ic < "u" ? function(e) {
    return ic.resolve(null).then(e).catch(Rm);
  } : rl;
  function Rm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function sl(e, t) {
    var n = t, s = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (s === 0) {
          e.removeChild(o), es(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = o;
    } while (n);
    es(t);
  }
  function mn(e) {
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
  function uc(e) {
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
  var fr = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + fr, ds = "__reactProps$" + fr, Yt = "__reactContainer$" + fr, ol = "__reactEvents$" + fr, Pm = "__reactListeners$" + fr, Am = "__reactHandles$" + fr;
  function $n(e) {
    var t = e[Wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Yt] || n[Wt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = uc(e); e !== null; ) {
          if (n = e[Wt]) return n;
          e = uc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function fs(e) {
    return e = e[Wt] || e[Yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function pr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function lo(e) {
    return e[ds] || null;
  }
  var al = [], mr = -1;
  function hn(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > mr || (e.current = al[mr], al[mr] = null, mr--);
  }
  function Ne(e, t) {
    mr++, al[mr] = e.current, e.current = t;
  }
  var vn = {}, Ge = hn(vn), at = hn(!1), bn = vn;
  function hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return vn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, u;
    for (u in n) o[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function lt(e) {
    return e = e.childContextTypes, e != null;
  }
  function io() {
    Pe(at), Pe(Ge);
  }
  function cc(e, t, n) {
    if (Ge.current !== vn) throw Error(i(168));
    Ne(Ge, t), Ne(at, n);
  }
  function dc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(i(108, Se(e) || "Unknown", o));
    return Y({}, n, s);
  }
  function uo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn, bn = Ge.current, Ne(Ge, e), Ne(at, at.current), !0;
  }
  function fc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    n ? (e = dc(e, t, bn), s.__reactInternalMemoizedMergedChildContext = e, Pe(at), Pe(Ge), Ne(Ge, e)) : Pe(at), Ne(at, n);
  }
  var Gt = null, co = !1, ll = !1;
  function pc(e) {
    Gt === null ? Gt = [e] : Gt.push(e);
  }
  function $m(e) {
    co = !0, pc(e);
  }
  function yn() {
    if (!ll && Gt !== null) {
      ll = !0;
      var e = 0, t = ke;
      try {
        var n = Gt;
        for (ke = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        Gt = null, co = !1;
      } catch (o) {
        throw Gt !== null && (Gt = Gt.slice(e + 1)), hu(Ra, yn), o;
      } finally {
        ke = t, ll = !1;
      }
    }
    return null;
  }
  var vr = [], yr = 0, fo = null, po = 0, xt = [], wt = 0, In = null, Jt = 1, Xt = "";
  function Ln(e, t) {
    vr[yr++] = po, vr[yr++] = fo, fo = e, po = t;
  }
  function mc(e, t, n) {
    xt[wt++] = Jt, xt[wt++] = Xt, xt[wt++] = In, In = e;
    var s = Jt;
    e = Xt;
    var o = 32 - Rt(s) - 1;
    s &= ~(1 << o), n += 1;
    var u = 32 - Rt(t) + o;
    if (30 < u) {
      var p = o - o % 5;
      u = (s & (1 << p) - 1).toString(32), s >>= p, o -= p, Jt = 1 << 32 - Rt(t) + o | n << o | s, Xt = u + e;
    } else Jt = 1 << u | n << o | s, Xt = e;
  }
  function il(e) {
    e.return !== null && (Ln(e, 1), mc(e, 1, 0));
  }
  function ul(e) {
    for (; e === fo; ) fo = vr[--yr], vr[yr] = null, po = vr[--yr], vr[yr] = null;
    for (; e === In; ) In = xt[--wt], xt[wt] = null, Xt = xt[--wt], xt[wt] = null, Jt = xt[--wt], xt[wt] = null;
  }
  var vt = null, yt = null, Ae = !1, At = null;
  function hc(e, t) {
    var n = jt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function vc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, vt = e, yt = mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, vt = e, yt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? { id: Jt, overflow: Xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = jt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, vt = e, yt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function cl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function dl(e) {
    if (Ae) {
      var t = yt;
      if (t) {
        var n = t;
        if (!vc(e, t)) {
          if (cl(e)) throw Error(i(418));
          t = mn(n.nextSibling);
          var s = vt;
          t && vc(e, t) ? hc(s, n) : (e.flags = e.flags & -4097 | 2, Ae = !1, vt = e);
        }
      } else {
        if (cl(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Ae = !1, vt = e;
      }
    }
  }
  function yc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    vt = e;
  }
  function mo(e) {
    if (e !== vt) return !1;
    if (!Ae) return yc(e), Ae = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !nl(e.type, e.memoizedProps)), t && (t = yt)) {
      if (cl(e)) throw gc(), Error(i(418));
      for (; t; ) hc(e, t), t = mn(t.nextSibling);
    }
    if (yc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                yt = mn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        yt = null;
      }
    } else yt = vt ? mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gc() {
    for (var e = yt; e; ) e = mn(e.nextSibling);
  }
  function gr() {
    yt = vt = null, Ae = !1;
  }
  function fl(e) {
    At === null ? At = [e] : At.push(e);
  }
  var bm = M.ReactCurrentBatchConfig;
  function ps(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var o = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(p) {
          var k = o.refs;
          p === null ? delete k[u] : k[u] = p;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function ho(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function _c(e) {
    var t = e._init;
    return t(e._payload);
  }
  function xc(e) {
    function t($, T) {
      if (e) {
        var b = $.deletions;
        b === null ? ($.deletions = [T], $.flags |= 16) : b.push(T);
      }
    }
    function n($, T) {
      if (!e) return null;
      for (; T !== null; ) t($, T), T = T.sibling;
      return null;
    }
    function s($, T) {
      for ($ = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? $.set(T.key, T) : $.set(T.index, T), T = T.sibling;
      return $;
    }
    function o($, T) {
      return $ = jn($, T), $.index = 0, $.sibling = null, $;
    }
    function u($, T, b) {
      return $.index = b, e ? (b = $.alternate, b !== null ? (b = b.index, b < T ? ($.flags |= 2, T) : b) : ($.flags |= 2, T)) : ($.flags |= 1048576, T);
    }
    function p($) {
      return e && $.alternate === null && ($.flags |= 2), $;
    }
    function k($, T, b, K) {
      return T === null || T.tag !== 6 ? (T = ri(b, $.mode, K), T.return = $, T) : (T = o(T, b), T.return = $, T);
    }
    function j($, T, b, K) {
      var re = b.type;
      return re === J ? V($, T, b.props.children, K, b.key) : T !== null && (T.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Ce && _c(re) === T.type) ? (K = o(T, b.props), K.ref = ps($, T, b), K.return = $, K) : (K = Oo(b.type, b.key, b.props, null, $.mode, K), K.ref = ps($, T, b), K.return = $, K);
    }
    function L($, T, b, K) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== b.containerInfo || T.stateNode.implementation !== b.implementation ? (T = si(b, $.mode, K), T.return = $, T) : (T = o(T, b.children || []), T.return = $, T);
    }
    function V($, T, b, K, re) {
      return T === null || T.tag !== 7 ? (T = Bn(b, $.mode, K, re), T.return = $, T) : (T = o(T, b), T.return = $, T);
    }
    function q($, T, b) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = ri("" + T, $.mode, b), T.return = $, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case B:
            return b = Oo(T.type, T.key, T.props, null, $.mode, b), b.ref = ps($, null, T), b.return = $, b;
          case I:
            return T = si(T, $.mode, b), T.return = $, T;
          case Ce:
            var K = T._init;
            return q($, K(T._payload), b);
        }
        if (Wr(T) || X(T)) return T = Bn(T, $.mode, b, null), T.return = $, T;
        ho($, T);
      }
      return null;
    }
    function U($, T, b, K) {
      var re = T !== null ? T.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number") return re !== null ? null : k($, T, "" + b, K);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case B:
            return b.key === re ? j($, T, b, K) : null;
          case I:
            return b.key === re ? L($, T, b, K) : null;
          case Ce:
            return re = b._init, U(
              $,
              T,
              re(b._payload),
              K
            );
        }
        if (Wr(b) || X(b)) return re !== null ? null : V($, T, b, K, null);
        ho($, b);
      }
      return null;
    }
    function Z($, T, b, K, re) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return $ = $.get(b) || null, k(T, $, "" + K, re);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case B:
            return $ = $.get(K.key === null ? b : K.key) || null, j(T, $, K, re);
          case I:
            return $ = $.get(K.key === null ? b : K.key) || null, L(T, $, K, re);
          case Ce:
            var se = K._init;
            return Z($, T, b, se(K._payload), re);
        }
        if (Wr(K) || X(K)) return $ = $.get(b) || null, V(T, $, K, re, null);
        ho(T, K);
      }
      return null;
    }
    function te($, T, b, K) {
      for (var re = null, se = null, oe = T, ue = T = 0, qe = null; oe !== null && ue < b.length; ue++) {
        oe.index > ue ? (qe = oe, oe = null) : qe = oe.sibling;
        var we = U($, oe, b[ue], K);
        if (we === null) {
          oe === null && (oe = qe);
          break;
        }
        e && oe && we.alternate === null && t($, oe), T = u(we, T, ue), se === null ? re = we : se.sibling = we, se = we, oe = qe;
      }
      if (ue === b.length) return n($, oe), Ae && Ln($, ue), re;
      if (oe === null) {
        for (; ue < b.length; ue++) oe = q($, b[ue], K), oe !== null && (T = u(oe, T, ue), se === null ? re = oe : se.sibling = oe, se = oe);
        return Ae && Ln($, ue), re;
      }
      for (oe = s($, oe); ue < b.length; ue++) qe = Z(oe, $, ue, b[ue], K), qe !== null && (e && qe.alternate !== null && oe.delete(qe.key === null ? ue : qe.key), T = u(qe, T, ue), se === null ? re = qe : se.sibling = qe, se = qe);
      return e && oe.forEach(function(En) {
        return t($, En);
      }), Ae && Ln($, ue), re;
    }
    function ne($, T, b, K) {
      var re = X(b);
      if (typeof re != "function") throw Error(i(150));
      if (b = re.call(b), b == null) throw Error(i(151));
      for (var se = re = null, oe = T, ue = T = 0, qe = null, we = b.next(); oe !== null && !we.done; ue++, we = b.next()) {
        oe.index > ue ? (qe = oe, oe = null) : qe = oe.sibling;
        var En = U($, oe, we.value, K);
        if (En === null) {
          oe === null && (oe = qe);
          break;
        }
        e && oe && En.alternate === null && t($, oe), T = u(En, T, ue), se === null ? re = En : se.sibling = En, se = En, oe = qe;
      }
      if (we.done) return n(
        $,
        oe
      ), Ae && Ln($, ue), re;
      if (oe === null) {
        for (; !we.done; ue++, we = b.next()) we = q($, we.value, K), we !== null && (T = u(we, T, ue), se === null ? re = we : se.sibling = we, se = we);
        return Ae && Ln($, ue), re;
      }
      for (oe = s($, oe); !we.done; ue++, we = b.next()) we = Z(oe, $, ue, we.value, K), we !== null && (e && we.alternate !== null && oe.delete(we.key === null ? ue : we.key), T = u(we, T, ue), se === null ? re = we : se.sibling = we, se = we);
      return e && oe.forEach(function(fh) {
        return t($, fh);
      }), Ae && Ln($, ue), re;
    }
    function ze($, T, b, K) {
      if (typeof b == "object" && b !== null && b.type === J && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case B:
            e: {
              for (var re = b.key, se = T; se !== null; ) {
                if (se.key === re) {
                  if (re = b.type, re === J) {
                    if (se.tag === 7) {
                      n($, se.sibling), T = o(se, b.props.children), T.return = $, $ = T;
                      break e;
                    }
                  } else if (se.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Ce && _c(re) === se.type) {
                    n($, se.sibling), T = o(se, b.props), T.ref = ps($, se, b), T.return = $, $ = T;
                    break e;
                  }
                  n($, se);
                  break;
                } else t($, se);
                se = se.sibling;
              }
              b.type === J ? (T = Bn(b.props.children, $.mode, K, b.key), T.return = $, $ = T) : (K = Oo(b.type, b.key, b.props, null, $.mode, K), K.ref = ps($, T, b), K.return = $, $ = K);
            }
            return p($);
          case I:
            e: {
              for (se = b.key; T !== null; ) {
                if (T.key === se) if (T.tag === 4 && T.stateNode.containerInfo === b.containerInfo && T.stateNode.implementation === b.implementation) {
                  n($, T.sibling), T = o(T, b.children || []), T.return = $, $ = T;
                  break e;
                } else {
                  n($, T);
                  break;
                }
                else t($, T);
                T = T.sibling;
              }
              T = si(b, $.mode, K), T.return = $, $ = T;
            }
            return p($);
          case Ce:
            return se = b._init, ze($, T, se(b._payload), K);
        }
        if (Wr(b)) return te($, T, b, K);
        if (X(b)) return ne($, T, b, K);
        ho($, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, T !== null && T.tag === 6 ? (n($, T.sibling), T = o(T, b), T.return = $, $ = T) : (n($, T), T = ri(b, $.mode, K), T.return = $, $ = T), p($)) : n($, T);
    }
    return ze;
  }
  var _r = xc(!0), wc = xc(!1), vo = hn(null), yo = null, xr = null, pl = null;
  function ml() {
    pl = xr = yo = null;
  }
  function hl(e) {
    var t = vo.current;
    Pe(vo), e._currentValue = t;
  }
  function vl(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function wr(e, t) {
    yo = e, pl = xr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (it = !0), e.firstContext = null);
  }
  function St(e) {
    var t = e._currentValue;
    if (pl !== e) if (e = { context: e, memoizedValue: t, next: null }, xr === null) {
      if (yo === null) throw Error(i(308));
      xr = e, yo.dependencies = { lanes: 0, firstContext: e };
    } else xr = xr.next = e;
    return t;
  }
  var Mn = null;
  function yl(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function Sc(e, t, n, s) {
    var o = t.interleaved;
    return o === null ? (n.next = n, yl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Zt(e, s);
  }
  function Zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var gn = !1;
  function gl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function kc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function en(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function _n(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (_e & 2) !== 0) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, Zt(e, n);
    }
    return o = s.interleaved, o === null ? (t.next = t, yl(s)) : (t.next = o.next, o.next = t), s.interleaved = t, Zt(e, n);
  }
  function go(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, $a(e, n);
    }
  }
  function Cc(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? o = u = p : u = u.next = p, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = { baseState: s.baseState, firstBaseUpdate: o, lastBaseUpdate: u, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function _o(e, t, n, s) {
    var o = e.updateQueue;
    gn = !1;
    var u = o.firstBaseUpdate, p = o.lastBaseUpdate, k = o.shared.pending;
    if (k !== null) {
      o.shared.pending = null;
      var j = k, L = j.next;
      j.next = null, p === null ? u = L : p.next = L, p = j;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, k = V.lastBaseUpdate, k !== p && (k === null ? V.firstBaseUpdate = L : k.next = L, V.lastBaseUpdate = j));
    }
    if (u !== null) {
      var q = o.baseState;
      p = 0, V = L = j = null, k = u;
      do {
        var U = k.lane, Z = k.eventTime;
        if ((s & U) === U) {
          V !== null && (V = V.next = {
            eventTime: Z,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var te = e, ne = k;
            switch (U = t, Z = n, ne.tag) {
              case 1:
                if (te = ne.payload, typeof te == "function") {
                  q = te.call(Z, q, U);
                  break e;
                }
                q = te;
                break e;
              case 3:
                te.flags = te.flags & -65537 | 128;
              case 0:
                if (te = ne.payload, U = typeof te == "function" ? te.call(Z, q, U) : te, U == null) break e;
                q = Y({}, q, U);
                break e;
              case 2:
                gn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, U = o.effects, U === null ? o.effects = [k] : U.push(k));
        } else Z = { eventTime: Z, lane: U, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, V === null ? (L = V = Z, j = q) : V = V.next = Z, p |= U;
        if (k = k.next, k === null) {
          if (k = o.shared.pending, k === null) break;
          U = k, k = U.next, U.next = null, o.lastBaseUpdate = U, o.shared.pending = null;
        }
      } while (!0);
      if (V === null && (j = q), o.baseState = j, o.firstBaseUpdate = L, o.lastBaseUpdate = V, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          p |= o.lane, o = o.next;
        while (o !== t);
      } else u === null && (o.shared.lanes = 0);
      On |= p, e.lanes = p, e.memoizedState = q;
    }
  }
  function jc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], o = s.callback;
      if (o !== null) {
        if (s.callback = null, s = n, typeof o != "function") throw Error(i(191, o));
        o.call(s);
      }
    }
  }
  var ms = {}, Bt = hn(ms), hs = hn(ms), vs = hn(ms);
  function Dn(e) {
    if (e === ms) throw Error(i(174));
    return e;
  }
  function _l(e, t) {
    switch (Ne(vs, t), Ne(hs, e), Ne(Bt, ms), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : xa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xa(t, e);
    }
    Pe(Bt), Ne(Bt, t);
  }
  function Sr() {
    Pe(Bt), Pe(hs), Pe(vs);
  }
  function Ec(e) {
    Dn(vs.current);
    var t = Dn(Bt.current), n = xa(t, e.type);
    t !== n && (Ne(hs, e), Ne(Bt, n));
  }
  function xl(e) {
    hs.current === e && (Pe(Bt), Pe(hs));
  }
  var be = hn(0);
  function xo(e) {
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
  var wl = [];
  function Sl() {
    for (var e = 0; e < wl.length; e++) wl[e]._workInProgressVersionPrimary = null;
    wl.length = 0;
  }
  var wo = M.ReactCurrentDispatcher, kl = M.ReactCurrentBatchConfig, zn = 0, Ie = null, Fe = null, Ue = null, So = !1, ys = !1, gs = 0, Im = 0;
  function Je() {
    throw Error(i(321));
  }
  function Cl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Pt(e[n], t[n])) return !1;
    return !0;
  }
  function jl(e, t, n, s, o, u) {
    if (zn = u, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wo.current = e === null || e.memoizedState === null ? zm : Om, e = n(s, o), ys) {
      u = 0;
      do {
        if (ys = !1, gs = 0, 25 <= u) throw Error(i(301));
        u += 1, Ue = Fe = null, t.updateQueue = null, wo.current = Fm, e = n(s, o);
      } while (ys);
    }
    if (wo.current = jo, t = Fe !== null && Fe.next !== null, zn = 0, Ue = Fe = Ie = null, So = !1, t) throw Error(i(300));
    return e;
  }
  function El() {
    var e = gs !== 0;
    return gs = 0, e;
  }
  function Ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Ie.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function kt() {
    if (Fe === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = Ue === null ? Ie.memoizedState : Ue.next;
    if (t !== null) Ue = t, Fe = e;
    else {
      if (e === null) throw Error(i(310));
      Fe = e, e = { memoizedState: Fe.memoizedState, baseState: Fe.baseState, baseQueue: Fe.baseQueue, queue: Fe.queue, next: null }, Ue === null ? Ie.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function _s(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Nl(e) {
    var t = kt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = Fe, o = s.baseQueue, u = n.pending;
    if (u !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = u.next, u.next = p;
      }
      s.baseQueue = o = u, n.pending = null;
    }
    if (o !== null) {
      u = o.next, s = s.baseState;
      var k = p = null, j = null, L = u;
      do {
        var V = L.lane;
        if ((zn & V) === V) j !== null && (j = j.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), s = L.hasEagerState ? L.eagerState : e(s, L.action);
        else {
          var q = {
            lane: V,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          j === null ? (k = j = q, p = s) : j = j.next = q, Ie.lanes |= V, On |= V;
        }
        L = L.next;
      } while (L !== null && L !== u);
      j === null ? p = s : j.next = k, Pt(s, t.memoizedState) || (it = !0), t.memoizedState = s, t.baseState = p, t.baseQueue = j, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        u = o.lane, Ie.lanes |= u, On |= u, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Tl(e) {
    var t = kt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        u = e(u, p.action), p = p.next;
      while (p !== o);
      Pt(u, t.memoizedState) || (it = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function Nc() {
  }
  function Tc(e, t) {
    var n = Ie, s = kt(), o = t(), u = !Pt(s.memoizedState, o);
    if (u && (s.memoizedState = o, it = !0), s = s.queue, Rl(Ac.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, xs(9, Pc.bind(null, n, s, o, t), void 0, null), Ve === null) throw Error(i(349));
      (zn & 30) !== 0 || Rc(n, t, o);
    }
    return o;
  }
  function Rc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Pc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, $c(t) && bc(e);
  }
  function Ac(e, t, n) {
    return n(function() {
      $c(t) && bc(e);
    });
  }
  function $c(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Pt(e, n);
    } catch {
      return !0;
    }
  }
  function bc(e) {
    var t = Zt(e, 1);
    t !== null && Lt(t, e, 1, -1);
  }
  function Ic(e) {
    var t = Ut();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _s, lastRenderedState: e }, t.queue = e, e = e.dispatch = Dm.bind(null, Ie, e), [t.memoizedState, e];
  }
  function xs(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Lc() {
    return kt().memoizedState;
  }
  function ko(e, t, n, s) {
    var o = Ut();
    Ie.flags |= e, o.memoizedState = xs(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function Co(e, t, n, s) {
    var o = kt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Fe !== null) {
      var p = Fe.memoizedState;
      if (u = p.destroy, s !== null && Cl(s, p.deps)) {
        o.memoizedState = xs(t, n, u, s);
        return;
      }
    }
    Ie.flags |= e, o.memoizedState = xs(1 | t, n, u, s);
  }
  function Mc(e, t) {
    return ko(8390656, 8, e, t);
  }
  function Rl(e, t) {
    return Co(2048, 8, e, t);
  }
  function Dc(e, t) {
    return Co(4, 2, e, t);
  }
  function zc(e, t) {
    return Co(4, 4, e, t);
  }
  function Oc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Fc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Co(4, 4, Oc.bind(null, t, e), n);
  }
  function Pl() {
  }
  function Hc(e, t) {
    var n = kt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Cl(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Wc(e, t) {
    var n = kt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Cl(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Bc(e, t, n) {
    return (zn & 21) === 0 ? (e.baseState && (e.baseState = !1, it = !0), e.memoizedState = n) : (Pt(n, t) || (n = _u(), Ie.lanes |= n, On |= n, e.baseState = !0), t);
  }
  function Lm(e, t) {
    var n = ke;
    ke = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = kl.transition;
    kl.transition = {};
    try {
      e(!1), t();
    } finally {
      ke = n, kl.transition = s;
    }
  }
  function Uc() {
    return kt().memoizedState;
  }
  function Mm(e, t, n) {
    var s = kn(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Vc(e)) qc(t, n);
    else if (n = Sc(e, t, n, s), n !== null) {
      var o = st();
      Lt(n, e, s, o), Qc(n, t, s);
    }
  }
  function Dm(e, t, n) {
    var s = kn(e), o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Vc(e)) qc(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var p = t.lastRenderedState, k = u(p, n);
        if (o.hasEagerState = !0, o.eagerState = k, Pt(k, p)) {
          var j = t.interleaved;
          j === null ? (o.next = o, yl(t)) : (o.next = j.next, j.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = Sc(e, t, o, s), n !== null && (o = st(), Lt(n, e, s, o), Qc(n, t, s));
    }
  }
  function Vc(e) {
    var t = e.alternate;
    return e === Ie || t !== null && t === Ie;
  }
  function qc(e, t) {
    ys = So = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Qc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, $a(e, n);
    }
  }
  var jo = { readContext: St, useCallback: Je, useContext: Je, useEffect: Je, useImperativeHandle: Je, useInsertionEffect: Je, useLayoutEffect: Je, useMemo: Je, useReducer: Je, useRef: Je, useState: Je, useDebugValue: Je, useDeferredValue: Je, useTransition: Je, useMutableSource: Je, useSyncExternalStore: Je, useId: Je, unstable_isNewReconciler: !1 }, zm = { readContext: St, useCallback: function(e, t) {
    return Ut().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: St, useEffect: Mc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ko(
      4194308,
      4,
      Oc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ko(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ko(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Ut();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = Ut();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Mm.bind(null, Ie, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Ut();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ic, useDebugValue: Pl, useDeferredValue: function(e) {
    return Ut().memoizedState = e;
  }, useTransition: function() {
    var e = Ic(!1), t = e[0];
    return e = Lm.bind(null, e[1]), Ut().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Ie, o = Ut();
    if (Ae) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Ve === null) throw Error(i(349));
      (zn & 30) !== 0 || Rc(s, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, Mc(Ac.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, xs(9, Pc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Ut(), t = Ve.identifierPrefix;
    if (Ae) {
      var n = Xt, s = Jt;
      n = (s & ~(1 << 32 - Rt(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Im++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Om = {
    readContext: St,
    useCallback: Hc,
    useContext: St,
    useEffect: Rl,
    useImperativeHandle: Fc,
    useInsertionEffect: Dc,
    useLayoutEffect: zc,
    useMemo: Wc,
    useReducer: Nl,
    useRef: Lc,
    useState: function() {
      return Nl(_s);
    },
    useDebugValue: Pl,
    useDeferredValue: function(e) {
      var t = kt();
      return Bc(t, Fe.memoizedState, e);
    },
    useTransition: function() {
      var e = Nl(_s)[0], t = kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nc,
    useSyncExternalStore: Tc,
    useId: Uc,
    unstable_isNewReconciler: !1
  }, Fm = { readContext: St, useCallback: Hc, useContext: St, useEffect: Rl, useImperativeHandle: Fc, useInsertionEffect: Dc, useLayoutEffect: zc, useMemo: Wc, useReducer: Tl, useRef: Lc, useState: function() {
    return Tl(_s);
  }, useDebugValue: Pl, useDeferredValue: function(e) {
    var t = kt();
    return Fe === null ? t.memoizedState = e : Bc(t, Fe.memoizedState, e);
  }, useTransition: function() {
    var e = Tl(_s)[0], t = kt().memoizedState;
    return [e, t];
  }, useMutableSource: Nc, useSyncExternalStore: Tc, useId: Uc, unstable_isNewReconciler: !1 };
  function $t(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Al(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Eo = { isMounted: function(e) {
    return (e = e._reactInternals) ? An(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = st(), o = kn(e), u = en(s, o);
    u.payload = t, n != null && (u.callback = n), t = _n(e, u, o), t !== null && (Lt(t, e, o, s), go(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = st(), o = kn(e), u = en(s, o);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = _n(e, u, o), t !== null && (Lt(t, e, o, s), go(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = st(), s = kn(e), o = en(n, s);
    o.tag = 2, t != null && (o.callback = t), t = _n(e, o, s), t !== null && (Lt(t, e, s, n), go(t, e, s));
  } };
  function Kc(e, t, n, s, o, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, p) : t.prototype && t.prototype.isPureReactComponent ? !as(n, s) || !as(o, u) : !0;
  }
  function Yc(e, t, n) {
    var s = !1, o = vn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = St(u) : (o = lt(t) ? bn : Ge.current, s = t.contextTypes, u = (s = s != null) ? hr(e, o) : vn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Eo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Gc(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Eo.enqueueReplaceState(t, t.state, null);
  }
  function $l(e, t, n, s) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, gl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? o.context = St(u) : (u = lt(t) ? bn : Ge.current, o.context = hr(e, u)), o.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Al(e, t, u, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Eo.enqueueReplaceState(o, o.state, null), _o(e, n, o, s), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function kr(e, t) {
    try {
      var n = "", s = t;
      do
        n += ve(s), s = s.return;
      while (s);
      var o = n;
    } catch (u) {
      o = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function bl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Il(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Hm = typeof WeakMap == "function" ? WeakMap : Map;
  function Jc(e, t, n) {
    n = en(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      bo || (bo = !0, Yl = s), Il(e, t);
    }, n;
  }
  function Xc(e, t, n) {
    n = en(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      n.payload = function() {
        return s(o);
      }, n.callback = function() {
        Il(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Il(e, t), typeof s != "function" && (wn === null ? wn = /* @__PURE__ */ new Set([this]) : wn.add(this));
      var p = t.stack;
      this.componentDidCatch(t.value, { componentStack: p !== null ? p : "" });
    }), n;
  }
  function Zc(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Hm();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(n) || (o.add(n), e = th.bind(null, e, t, n), t.then(e, e));
  }
  function ed(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function td(e, t, n, s, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = en(-1, 1), t.tag = 2, _n(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Wm = M.ReactCurrentOwner, it = !1;
  function rt(e, t, n, s) {
    t.child = e === null ? wc(t, null, n, s) : _r(t, e.child, n, s);
  }
  function nd(e, t, n, s, o) {
    n = n.render;
    var u = t.ref;
    return wr(t, o), s = jl(e, t, n, s, u, o), n = El(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, tn(e, t, o)) : (Ae && n && il(t), t.flags |= 1, rt(e, t, s, o), t.child);
  }
  function rd(e, t, n, s, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ni(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, sd(e, t, u, s, o)) : (e = Oo(n.type, null, s, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & o) === 0) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : as, n(p, s) && e.ref === t.ref) return tn(e, t, o);
    }
    return t.flags |= 1, e = jn(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function sd(e, t, n, s, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (as(u, s) && e.ref === t.ref) if (it = !1, t.pendingProps = s = u, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (it = !0);
      else return t.lanes = e.lanes, tn(e, t, o);
    }
    return Ll(e, t, n, s, o);
  }
  function od(e, t, n) {
    var s = t.pendingProps, o = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(jr, gt), gt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(jr, gt), gt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Ne(jr, gt), gt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Ne(jr, gt), gt |= s;
    return rt(e, t, o, n), t.child;
  }
  function ad(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ll(e, t, n, s, o) {
    var u = lt(n) ? bn : Ge.current;
    return u = hr(t, u), wr(t, o), n = jl(e, t, n, s, u, o), s = El(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, tn(e, t, o)) : (Ae && s && il(t), t.flags |= 1, rt(e, t, n, o), t.child);
  }
  function ld(e, t, n, s, o) {
    if (lt(n)) {
      var u = !0;
      uo(t);
    } else u = !1;
    if (wr(t, o), t.stateNode === null) To(e, t), Yc(t, n, s), $l(t, n, s, o), s = !0;
    else if (e === null) {
      var p = t.stateNode, k = t.memoizedProps;
      p.props = k;
      var j = p.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = St(L) : (L = lt(n) ? bn : Ge.current, L = hr(t, L));
      var V = n.getDerivedStateFromProps, q = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      q || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (k !== s || j !== L) && Gc(t, p, s, L), gn = !1;
      var U = t.memoizedState;
      p.state = U, _o(t, s, p, o), j = t.memoizedState, k !== s || U !== j || at.current || gn ? (typeof V == "function" && (Al(t, n, V, s), j = t.memoizedState), (k = gn || Kc(t, n, k, s, U, j, L)) ? (q || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = j), p.props = s, p.state = j, p.context = L, s = k) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      p = t.stateNode, kc(e, t), k = t.memoizedProps, L = t.type === t.elementType ? k : $t(t.type, k), p.props = L, q = t.pendingProps, U = p.context, j = n.contextType, typeof j == "object" && j !== null ? j = St(j) : (j = lt(n) ? bn : Ge.current, j = hr(t, j));
      var Z = n.getDerivedStateFromProps;
      (V = typeof Z == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (k !== q || U !== j) && Gc(t, p, s, j), gn = !1, U = t.memoizedState, p.state = U, _o(t, s, p, o);
      var te = t.memoizedState;
      k !== q || U !== te || at.current || gn ? (typeof Z == "function" && (Al(t, n, Z, s), te = t.memoizedState), (L = gn || Kc(t, n, L, s, U, te, j) || !1) ? (V || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, te, j), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, te, j)), typeof p.componentDidUpdate == "function" && (t.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || k === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = te), p.props = s, p.state = te, p.context = j, s = L) : (typeof p.componentDidUpdate != "function" || k === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Ml(e, t, n, s, u, o);
  }
  function Ml(e, t, n, s, o, u) {
    ad(e, t);
    var p = (t.flags & 128) !== 0;
    if (!s && !p) return o && fc(t, n, !1), tn(e, t, u);
    s = t.stateNode, Wm.current = t;
    var k = p && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && p ? (t.child = _r(t, e.child, null, u), t.child = _r(t, null, k, u)) : rt(e, t, k, u), t.memoizedState = s.state, o && fc(t, n, !0), t.child;
  }
  function id(e) {
    var t = e.stateNode;
    t.pendingContext ? cc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cc(e, t.context, !1), _l(e, t.containerInfo);
  }
  function ud(e, t, n, s, o) {
    return gr(), fl(o), t.flags |= 256, rt(e, t, n, s), t.child;
  }
  var Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function cd(e, t, n) {
    var s = t.pendingProps, o = be.current, u = !1, p = (t.flags & 128) !== 0, k;
    if ((k = p) || (k = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ne(be, o & 1), e === null)
      return dl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (p = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, p = { mode: "hidden", children: p }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = p) : u = Fo(p, s, 0, null), e = Bn(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = zl(n), t.memoizedState = Dl, e) : Ol(t, p));
    if (o = e.memoizedState, o !== null && (k = o.dehydrated, k !== null)) return Bm(e, t, p, s, k, o, n);
    if (u) {
      u = s.fallback, p = t.mode, o = e.child, k = o.sibling;
      var j = { mode: "hidden", children: s.children };
      return (p & 1) === 0 && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = j, t.deletions = null) : (s = jn(o, j), s.subtreeFlags = o.subtreeFlags & 14680064), k !== null ? u = jn(k, u) : (u = Bn(u, p, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, p = e.child.memoizedState, p = p === null ? zl(n) : { baseLanes: p.baseLanes | n, cachePool: null, transitions: p.transitions }, u.memoizedState = p, u.childLanes = e.childLanes & ~n, t.memoizedState = Dl, s;
    }
    return u = e.child, e = u.sibling, s = jn(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Ol(e, t) {
    return t = Fo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function No(e, t, n, s) {
    return s !== null && fl(s), _r(t, e.child, null, n), e = Ol(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bm(e, t, n, s, o, u, p) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = bl(Error(i(422))), No(e, t, p, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, o = t.mode, s = Fo({ mode: "visible", children: s.children }, o, 0, null), u = Bn(u, o, p, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && _r(t, e.child, null, p), t.child.memoizedState = zl(p), t.memoizedState = Dl, u);
    if ((t.mode & 1) === 0) return No(e, t, p, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var k = s.dgst;
      return s = k, u = Error(i(419)), s = bl(u, s, void 0), No(e, t, p, s);
    }
    if (k = (p & e.childLanes) !== 0, it || k) {
      if (s = Ve, s !== null) {
        switch (p & -p) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (s.suspendedLanes | p)) !== 0 ? 0 : o, o !== 0 && o !== u.retryLane && (u.retryLane = o, Zt(e, o), Lt(s, e, o, -1));
      }
      return ti(), s = bl(Error(i(421))), No(e, t, p, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = nh.bind(null, e), o._reactRetry = t, null) : (e = u.treeContext, yt = mn(o.nextSibling), vt = t, Ae = !0, At = null, e !== null && (xt[wt++] = Jt, xt[wt++] = Xt, xt[wt++] = In, Jt = e.id, Xt = e.overflow, In = t), t = Ol(t, s.children), t.flags |= 4096, t);
  }
  function dd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), vl(e.return, t, n);
  }
  function Fl(e, t, n, s, o) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: o } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = o);
  }
  function fd(e, t, n) {
    var s = t.pendingProps, o = s.revealOrder, u = s.tail;
    if (rt(e, t, s.children, n), s = be.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dd(e, n, t);
        else if (e.tag === 19) dd(e, n, t);
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
    if (Ne(be, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && xo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Fl(t, !1, o, n, u);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && xo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Fl(t, !0, n, null, u);
        break;
      case "together":
        Fl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function To(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function tn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = jn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Um(e, t, n) {
    switch (t.tag) {
      case 3:
        id(t), gr();
        break;
      case 5:
        Ec(t);
        break;
      case 1:
        lt(t.type) && uo(t);
        break;
      case 4:
        _l(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        Ne(vo, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Ne(be, be.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? cd(e, t, n) : (Ne(be, be.current & 1), e = tn(e, t, n), e !== null ? e.sibling : null);
        Ne(be, be.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return fd(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ne(be, be.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, od(e, t, n);
    }
    return tn(e, t, n);
  }
  var pd, Hl, md, hd;
  pd = function(e, t) {
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
  }, Hl = function() {
  }, md = function(e, t, n, s) {
    var o = e.memoizedProps;
    if (o !== s) {
      e = t.stateNode, Dn(Bt.current);
      var u = null;
      switch (n) {
        case "input":
          o = va(e, o), s = va(e, s), u = [];
          break;
        case "select":
          o = Y({}, o, { value: void 0 }), s = Y({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          o = _a(e, o), s = _a(e, s), u = [];
          break;
        default:
          typeof o.onClick != "function" && typeof s.onClick == "function" && (e.onclick = ao);
      }
      wa(n, s);
      var p;
      n = null;
      for (L in o) if (!s.hasOwnProperty(L) && o.hasOwnProperty(L) && o[L] != null) if (L === "style") {
        var k = o[L];
        for (p in k) k.hasOwnProperty(p) && (n || (n = {}), n[p] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (d.hasOwnProperty(L) ? u || (u = []) : (u = u || []).push(L, null));
      for (L in s) {
        var j = s[L];
        if (k = o != null ? o[L] : void 0, s.hasOwnProperty(L) && j !== k && (j != null || k != null)) if (L === "style") if (k) {
          for (p in k) !k.hasOwnProperty(p) || j && j.hasOwnProperty(p) || (n || (n = {}), n[p] = "");
          for (p in j) j.hasOwnProperty(p) && k[p] !== j[p] && (n || (n = {}), n[p] = j[p]);
        } else n || (u || (u = []), u.push(
          L,
          n
        )), n = j;
        else L === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, k = k ? k.__html : void 0, j != null && k !== j && (u = u || []).push(L, j)) : L === "children" ? typeof j != "string" && typeof j != "number" || (u = u || []).push(L, "" + j) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (d.hasOwnProperty(L) ? (j != null && L === "onScroll" && Re("scroll", e), u || k === j || (u = [])) : (u = u || []).push(L, j));
      }
      n && (u = u || []).push("style", n);
      var L = u;
      (t.updateQueue = L) && (t.flags |= 4);
    }
  }, hd = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function ws(e, t) {
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
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, s |= o.subtreeFlags & 14680064, s |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function Vm(e, t, n) {
    var s = t.pendingProps;
    switch (ul(t), t.tag) {
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
        return Xe(t), null;
      case 1:
        return lt(t.type) && io(), Xe(t), null;
      case 3:
        return s = t.stateNode, Sr(), Pe(at), Pe(Ge), Sl(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (mo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, At !== null && (Xl(At), At = null))), Hl(e, t), Xe(t), null;
      case 5:
        xl(t);
        var o = Dn(vs.current);
        if (n = t.type, e !== null && t.stateNode != null) md(e, t, n, s, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return Xe(t), null;
          }
          if (e = Dn(Bt.current), mo(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[Wt] = t, s[ds] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Re("cancel", s), Re("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Re("load", s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < is.length; o++) Re(is[o], s);
                break;
              case "source":
                Re("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Re(
                  "error",
                  s
                ), Re("load", s);
                break;
              case "details":
                Re("toggle", s);
                break;
              case "input":
                Yi(s, u), Re("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, Re("invalid", s);
                break;
              case "textarea":
                Xi(s, u), Re("invalid", s);
            }
            wa(n, u), o = null;
            for (var p in u) if (u.hasOwnProperty(p)) {
              var k = u[p];
              p === "children" ? typeof k == "string" ? s.textContent !== k && (u.suppressHydrationWarning !== !0 && oo(s.textContent, k, e), o = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && oo(
                s.textContent,
                k,
                e
              ), o = ["children", "" + k]) : d.hasOwnProperty(p) && k != null && p === "onScroll" && Re("scroll", s);
            }
            switch (n) {
              case "input":
                Rn(s), Ji(s, u, !0);
                break;
              case "textarea":
                Rn(s), eu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = ao);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            p = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = tu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = p.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = p.createElement(n, { is: s.is }) : (e = p.createElement(n), n === "select" && (p = e, s.multiple ? p.multiple = !0 : s.size && (p.size = s.size))) : e = p.createElementNS(e, n), e[Wt] = t, e[ds] = s, pd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (p = Sa(n, s), n) {
                case "dialog":
                  Re("cancel", e), Re("close", e), o = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", e), o = s;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < is.length; o++) Re(is[o], e);
                  o = s;
                  break;
                case "source":
                  Re("error", e), o = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Re(
                    "error",
                    e
                  ), Re("load", e), o = s;
                  break;
                case "details":
                  Re("toggle", e), o = s;
                  break;
                case "input":
                  Yi(e, s), o = va(e, s), Re("invalid", e);
                  break;
                case "option":
                  o = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, o = Y({}, s, { value: void 0 }), Re("invalid", e);
                  break;
                case "textarea":
                  Xi(e, s), o = _a(e, s), Re("invalid", e);
                  break;
                default:
                  o = s;
              }
              wa(n, o), k = o;
              for (u in k) if (k.hasOwnProperty(u)) {
                var j = k[u];
                u === "style" ? su(e, j) : u === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && nu(e, j)) : u === "children" ? typeof j == "string" ? (n !== "textarea" || j !== "") && Br(e, j) : typeof j == "number" && Br(e, "" + j) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? j != null && u === "onScroll" && Re("scroll", e) : j != null && D(e, u, j, p));
              }
              switch (n) {
                case "input":
                  Rn(e), Ji(e, s, !1);
                  break;
                case "textarea":
                  Rn(e), eu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + xe(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? rr(e, !!s.multiple, u, !1) : s.defaultValue != null && rr(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = ao);
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
        return Xe(t), null;
      case 6:
        if (e && t.stateNode != null) hd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Dn(vs.current), Dn(Bt.current), mo(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[Wt] = t, (u = s.nodeValue !== n) && (e = vt, e !== null)) switch (e.tag) {
              case 3:
                oo(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && oo(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[Wt] = t, t.stateNode = s;
        }
        return Xe(t), null;
      case 13:
        if (Pe(be), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ae && yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) gc(), gr(), t.flags |= 98560, u = !1;
          else if (u = mo(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Wt] = t;
            } else gr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), u = !1;
          } else At !== null && (Xl(At), At = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (be.current & 1) !== 0 ? He === 0 && (He = 3) : ti())), t.updateQueue !== null && (t.flags |= 4), Xe(t), null);
      case 4:
        return Sr(), Hl(e, t), e === null && us(t.stateNode.containerInfo), Xe(t), null;
      case 10:
        return hl(t.type._context), Xe(t), null;
      case 17:
        return lt(t.type) && io(), Xe(t), null;
      case 19:
        if (Pe(be), u = t.memoizedState, u === null) return Xe(t), null;
        if (s = (t.flags & 128) !== 0, p = u.rendering, p === null) if (s) ws(u, !1);
        else {
          if (He !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (p = xo(e), p !== null) {
              for (t.flags |= 128, ws(u, !1), s = p.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, p = u.alternate, p === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = p.childLanes, u.lanes = p.lanes, u.child = p.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = p.memoizedProps, u.memoizedState = p.memoizedState, u.updateQueue = p.updateQueue, u.type = p.type, e = p.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ne(be, be.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && De() > Er && (t.flags |= 128, s = !0, ws(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = xo(p), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ws(u, !0), u.tail === null && u.tailMode === "hidden" && !p.alternate && !Ae) return Xe(t), null;
          } else 2 * De() - u.renderingStartTime > Er && n !== 1073741824 && (t.flags |= 128, s = !0, ws(u, !1), t.lanes = 4194304);
          u.isBackwards ? (p.sibling = t.child, t.child = p) : (n = u.last, n !== null ? n.sibling = p : t.child = p, u.last = p);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = De(), t.sibling = null, n = be.current, Ne(be, s ? n & 1 | 2 : n & 1), t) : (Xe(t), null);
      case 22:
      case 23:
        return ei(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (gt & 1073741824) !== 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function qm(e, t) {
    switch (ul(t), t.tag) {
      case 1:
        return lt(t.type) && io(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Sr(), Pe(at), Pe(Ge), Sl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return xl(t), null;
      case 13:
        if (Pe(be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          gr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Pe(be), null;
      case 4:
        return Sr(), null;
      case 10:
        return hl(t.type._context), null;
      case 22:
      case 23:
        return ei(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ro = !1, Ze = !1, Qm = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
  function Cr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      Le(e, t, s);
    }
    else n.current = null;
  }
  function Wl(e, t, n) {
    try {
      n();
    } catch (s) {
      Le(e, t, s);
    }
  }
  var vd = !1;
  function Km(e, t) {
    if (el = Ks, e = Ku(), qa(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var o = s.anchorOffset, u = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var p = 0, k = -1, j = -1, L = 0, V = 0, q = e, U = null;
          t: for (; ; ) {
            for (var Z; q !== n || o !== 0 && q.nodeType !== 3 || (k = p + o), q !== u || s !== 0 && q.nodeType !== 3 || (j = p + s), q.nodeType === 3 && (p += q.nodeValue.length), (Z = q.firstChild) !== null; )
              U = q, q = Z;
            for (; ; ) {
              if (q === e) break t;
              if (U === n && ++L === o && (k = p), U === u && ++V === s && (j = p), (Z = q.nextSibling) !== null) break;
              q = U, U = q.parentNode;
            }
            q = Z;
          }
          n = k === -1 || j === -1 ? null : { start: k, end: j };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (tl = { focusedElem: e, selectionRange: n }, Ks = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
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
              var ne = te.memoizedProps, ze = te.memoizedState, $ = t.stateNode, T = $.getSnapshotBeforeUpdate(t.elementType === t.type ? ne : $t(t.type, ne), ze);
              $.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          case 3:
            var b = t.stateNode.containerInfo;
            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (K) {
        Le(t, t.return, K);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ee = e;
        break;
      }
      ee = t.return;
    }
    return te = vd, vd = !1, te;
  }
  function Ss(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & e) === e) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && Wl(t, n, u);
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function Po(e, t) {
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
  function Bl(e) {
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
  function yd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Wt], delete t[ds], delete t[ol], delete t[Pm], delete t[Am])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function gd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function _d(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || gd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ul(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ao));
    else if (s !== 4 && (e = e.child, e !== null)) for (Ul(e, t, n), e = e.sibling; e !== null; ) Ul(e, t, n), e = e.sibling;
  }
  function Vl(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), e = e.sibling;
  }
  var Ke = null, bt = !1;
  function xn(e, t, n) {
    for (n = n.child; n !== null; ) xd(e, t, n), n = n.sibling;
  }
  function xd(e, t, n) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function") try {
      Ht.onCommitFiberUnmount(Ws, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ze || Cr(n, t);
      case 6:
        var s = Ke, o = bt;
        Ke = null, xn(e, t, n), Ke = s, bt = o, Ke !== null && (bt ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ke.removeChild(n.stateNode));
        break;
      case 18:
        Ke !== null && (bt ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? sl(e.parentNode, n) : e.nodeType === 1 && sl(e, n), es(e)) : sl(Ke, n.stateNode));
        break;
      case 4:
        s = Ke, o = bt, Ke = n.stateNode.containerInfo, bt = !0, xn(e, t, n), Ke = s, bt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ze && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var u = o, p = u.destroy;
            u = u.tag, p !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Wl(n, t, p), o = o.next;
          } while (o !== s);
        }
        xn(e, t, n);
        break;
      case 1:
        if (!Ze && (Cr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (k) {
          Le(n, t, k);
        }
        xn(e, t, n);
        break;
      case 21:
        xn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ze = (s = Ze) || n.memoizedState !== null, xn(e, t, n), Ze = s) : xn(e, t, n);
        break;
      default:
        xn(e, t, n);
    }
  }
  function wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Qm()), t.forEach(function(s) {
        var o = rh.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
    }
  }
  function It(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var o = n[s];
      try {
        var u = e, p = t, k = p;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Ke = k.stateNode, bt = !1;
              break e;
            case 3:
              Ke = k.stateNode.containerInfo, bt = !0;
              break e;
            case 4:
              Ke = k.stateNode.containerInfo, bt = !0;
              break e;
          }
          k = k.return;
        }
        if (Ke === null) throw Error(i(160));
        xd(u, p, o), Ke = null, bt = !1;
        var j = o.alternate;
        j !== null && (j.return = null), o.return = null;
      } catch (L) {
        Le(o, t, L);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Sd(t, e), t = t.sibling;
  }
  function Sd(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (It(t, e), Vt(e), s & 4) {
          try {
            Ss(3, e, e.return), Po(3, e);
          } catch (ne) {
            Le(e, e.return, ne);
          }
          try {
            Ss(5, e, e.return);
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 1:
        It(t, e), Vt(e), s & 512 && n !== null && Cr(n, n.return);
        break;
      case 5:
        if (It(t, e), Vt(e), s & 512 && n !== null && Cr(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            Br(o, "");
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        if (s & 4 && (o = e.stateNode, o != null)) {
          var u = e.memoizedProps, p = n !== null ? n.memoizedProps : u, k = e.type, j = e.updateQueue;
          if (e.updateQueue = null, j !== null) try {
            k === "input" && u.type === "radio" && u.name != null && Gi(o, u), Sa(k, p);
            var L = Sa(k, u);
            for (p = 0; p < j.length; p += 2) {
              var V = j[p], q = j[p + 1];
              V === "style" ? su(o, q) : V === "dangerouslySetInnerHTML" ? nu(o, q) : V === "children" ? Br(o, q) : D(o, V, q, L);
            }
            switch (k) {
              case "input":
                ya(o, u);
                break;
              case "textarea":
                Zi(o, u);
                break;
              case "select":
                var U = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!u.multiple;
                var Z = u.value;
                Z != null ? rr(o, !!u.multiple, Z, !1) : U !== !!u.multiple && (u.defaultValue != null ? rr(
                  o,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : rr(o, !!u.multiple, u.multiple ? [] : "", !1));
            }
            o[ds] = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 6:
        if (It(t, e), Vt(e), s & 4) {
          if (e.stateNode === null) throw Error(i(162));
          o = e.stateNode, u = e.memoizedProps;
          try {
            o.nodeValue = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (It(t, e), Vt(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          es(t.containerInfo);
        } catch (ne) {
          Le(e, e.return, ne);
        }
        break;
      case 4:
        It(t, e), Vt(e);
        break;
      case 13:
        It(t, e), Vt(e), o = e.child, o.flags & 8192 && (u = o.memoizedState !== null, o.stateNode.isHidden = u, !u || o.alternate !== null && o.alternate.memoizedState !== null || (Kl = De())), s & 4 && wd(e);
        break;
      case 22:
        if (V = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ze = (L = Ze) || V, It(t, e), Ze = L) : It(t, e), Vt(e), s & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !V && (e.mode & 1) !== 0) for (ee = e, V = e.child; V !== null; ) {
            for (q = ee = V; ee !== null; ) {
              switch (U = ee, Z = U.child, U.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ss(4, U, U.return);
                  break;
                case 1:
                  Cr(U, U.return);
                  var te = U.stateNode;
                  if (typeof te.componentWillUnmount == "function") {
                    s = U, n = U.return;
                    try {
                      t = s, te.props = t.memoizedProps, te.state = t.memoizedState, te.componentWillUnmount();
                    } catch (ne) {
                      Le(s, n, ne);
                    }
                  }
                  break;
                case 5:
                  Cr(U, U.return);
                  break;
                case 22:
                  if (U.memoizedState !== null) {
                    jd(q);
                    continue;
                  }
              }
              Z !== null ? (Z.return = U, ee = Z) : jd(q);
            }
            V = V.sibling;
          }
          e: for (V = null, q = e; ; ) {
            if (q.tag === 5) {
              if (V === null) {
                V = q;
                try {
                  o = q.stateNode, L ? (u = o.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = q.stateNode, j = q.memoizedProps.style, p = j != null && j.hasOwnProperty("display") ? j.display : null, k.style.display = ru("display", p));
                } catch (ne) {
                  Le(e, e.return, ne);
                }
              }
            } else if (q.tag === 6) {
              if (V === null) try {
                q.stateNode.nodeValue = L ? "" : q.memoizedProps;
              } catch (ne) {
                Le(e, e.return, ne);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              V === q && (V = null), q = q.return;
            }
            V === q && (V = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        It(t, e), Vt(e), s & 4 && wd(e);
        break;
      case 21:
        break;
      default:
        It(
          t,
          e
        ), Vt(e);
    }
  }
  function Vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (gd(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var o = s.stateNode;
            s.flags & 32 && (Br(o, ""), s.flags &= -33);
            var u = _d(e);
            Vl(e, u, o);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo, k = _d(e);
            Ul(e, k, p);
            break;
          default:
            throw Error(i(161));
        }
      } catch (j) {
        Le(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ym(e, t, n) {
    ee = e, kd(e);
  }
  function kd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ee !== null; ) {
      var o = ee, u = o.child;
      if (o.tag === 22 && s) {
        var p = o.memoizedState !== null || Ro;
        if (!p) {
          var k = o.alternate, j = k !== null && k.memoizedState !== null || Ze;
          k = Ro;
          var L = Ze;
          if (Ro = p, (Ze = j) && !L) for (ee = o; ee !== null; ) p = ee, j = p.child, p.tag === 22 && p.memoizedState !== null ? Ed(o) : j !== null ? (j.return = p, ee = j) : Ed(o);
          for (; u !== null; ) ee = u, kd(u), u = u.sibling;
          ee = o, Ro = k, Ze = L;
        }
        Cd(e);
      } else (o.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = o, ee = u) : Cd(e);
    }
  }
  function Cd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ze || Po(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Ze) if (n === null) s.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : $t(t.type, n.memoizedProps);
                s.componentDidUpdate(o, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && jc(t, u, s);
              break;
            case 3:
              var p = t.updateQueue;
              if (p !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                jc(t, p, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var j = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && n.focus();
                    break;
                  case "img":
                    j.src && (n.src = j.src);
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
                var L = t.alternate;
                if (L !== null) {
                  var V = L.memoizedState;
                  if (V !== null) {
                    var q = V.dehydrated;
                    q !== null && es(q);
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
          Ze || t.flags & 512 && Bl(t);
        } catch (U) {
          Le(t, t.return, U);
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
  function jd(e) {
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
  function Ed(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Po(4, t);
            } catch (j) {
              Le(t, n, j);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (j) {
                Le(t, o, j);
              }
            }
            var u = t.return;
            try {
              Bl(t);
            } catch (j) {
              Le(t, u, j);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Bl(t);
            } catch (j) {
              Le(t, p, j);
            }
        }
      } catch (j) {
        Le(t, t.return, j);
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
  var Gm = Math.ceil, Ao = M.ReactCurrentDispatcher, ql = M.ReactCurrentOwner, Ct = M.ReactCurrentBatchConfig, _e = 0, Ve = null, Oe = null, Ye = 0, gt = 0, jr = hn(0), He = 0, ks = null, On = 0, $o = 0, Ql = 0, Cs = null, ut = null, Kl = 0, Er = 1 / 0, nn = null, bo = !1, Yl = null, wn = null, Io = !1, Sn = null, Lo = 0, js = 0, Gl = null, Mo = -1, Do = 0;
  function st() {
    return (_e & 6) !== 0 ? De() : Mo !== -1 ? Mo : Mo = De();
  }
  function kn(e) {
    return (e.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && Ye !== 0 ? Ye & -Ye : bm.transition !== null ? (Do === 0 && (Do = _u()), Do) : (e = ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Tu(e.type)), e);
  }
  function Lt(e, t, n, s) {
    if (50 < js) throw js = 0, Gl = null, Error(i(185));
    Yr(e, n, s), ((_e & 2) === 0 || e !== Ve) && (e === Ve && ((_e & 2) === 0 && ($o |= n), He === 4 && Cn(e, Ye)), ct(e, s), n === 1 && _e === 0 && (t.mode & 1) === 0 && (Er = De() + 500, co && yn()));
  }
  function ct(e, t) {
    var n = e.callbackNode;
    bp(e, t);
    var s = Vs(e, e === Ve ? Ye : 0);
    if (s === 0) n !== null && vu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && vu(n), t === 1) e.tag === 0 ? $m(Td.bind(null, e)) : pc(Td.bind(null, e)), Tm(function() {
        (_e & 6) === 0 && yn();
      }), n = null;
      else {
        switch (xu(s)) {
          case 1:
            n = Ra;
            break;
          case 4:
            n = yu;
            break;
          case 16:
            n = Hs;
            break;
          case 536870912:
            n = gu;
            break;
          default:
            n = Hs;
        }
        n = Md(n, Nd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Nd(e, t) {
    if (Mo = -1, Do = 0, (_e & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (Nr() && e.callbackNode !== n) return null;
    var s = Vs(e, e === Ve ? Ye : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = zo(e, s);
    else {
      t = s;
      var o = _e;
      _e |= 2;
      var u = Pd();
      (Ve !== e || Ye !== t) && (nn = null, Er = De() + 500, Hn(e, t));
      do
        try {
          Zm();
          break;
        } catch (k) {
          Rd(e, k);
        }
      while (!0);
      ml(), Ao.current = u, _e = o, Oe !== null ? t = 0 : (Ve = null, Ye = 0, t = He);
    }
    if (t !== 0) {
      if (t === 2 && (o = Pa(e), o !== 0 && (s = o, t = Jl(e, o))), t === 1) throw n = ks, Hn(e, 0), Cn(e, s), ct(e, De()), n;
      if (t === 6) Cn(e, s);
      else {
        if (o = e.current.alternate, (s & 30) === 0 && !Jm(o) && (t = zo(e, s), t === 2 && (u = Pa(e), u !== 0 && (s = u, t = Jl(e, u))), t === 1)) throw n = ks, Hn(e, 0), Cn(e, s), ct(e, De()), n;
        switch (e.finishedWork = o, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Wn(e, ut, nn);
            break;
          case 3:
            if (Cn(e, s), (s & 130023424) === s && (t = Kl + 500 - De(), 10 < t)) {
              if (Vs(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & s) !== s) {
                st(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = rl(Wn.bind(null, e, ut, nn), t);
              break;
            }
            Wn(e, ut, nn);
            break;
          case 4:
            if (Cn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, o = -1; 0 < s; ) {
              var p = 31 - Rt(s);
              u = 1 << p, p = t[p], p > o && (o = p), s &= ~u;
            }
            if (s = o, s = De() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Gm(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = rl(Wn.bind(null, e, ut, nn), s);
              break;
            }
            Wn(e, ut, nn);
            break;
          case 5:
            Wn(e, ut, nn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return ct(e, De()), e.callbackNode === n ? Nd.bind(null, e) : null;
  }
  function Jl(e, t) {
    var n = Cs;
    return e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256), e = zo(e, t), e !== 2 && (t = ut, ut = n, t !== null && Xl(t)), e;
  }
  function Xl(e) {
    ut === null ? ut = e : ut.push.apply(ut, e);
  }
  function Jm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var o = n[s], u = o.getSnapshot;
          o = o.value;
          try {
            if (!Pt(u(), o)) return !1;
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
  function Cn(e, t) {
    for (t &= ~Ql, t &= ~$o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Rt(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Td(e) {
    if ((_e & 6) !== 0) throw Error(i(327));
    Nr();
    var t = Vs(e, 0);
    if ((t & 1) === 0) return ct(e, De()), null;
    var n = zo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Pa(e);
      s !== 0 && (t = s, n = Jl(e, s));
    }
    if (n === 1) throw n = ks, Hn(e, 0), Cn(e, t), ct(e, De()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wn(e, ut, nn), ct(e, De()), null;
  }
  function Zl(e, t) {
    var n = _e;
    _e |= 1;
    try {
      return e(t);
    } finally {
      _e = n, _e === 0 && (Er = De() + 500, co && yn());
    }
  }
  function Fn(e) {
    Sn !== null && Sn.tag === 0 && (_e & 6) === 0 && Nr();
    var t = _e;
    _e |= 1;
    var n = Ct.transition, s = ke;
    try {
      if (Ct.transition = null, ke = 1, e) return e();
    } finally {
      ke = s, Ct.transition = n, _e = t, (_e & 6) === 0 && yn();
    }
  }
  function ei() {
    gt = jr.current, Pe(jr);
  }
  function Hn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Nm(n)), Oe !== null) for (n = Oe.return; n !== null; ) {
      var s = n;
      switch (ul(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && io();
          break;
        case 3:
          Sr(), Pe(at), Pe(Ge), Sl();
          break;
        case 5:
          xl(s);
          break;
        case 4:
          Sr();
          break;
        case 13:
          Pe(be);
          break;
        case 19:
          Pe(be);
          break;
        case 10:
          hl(s.type._context);
          break;
        case 22:
        case 23:
          ei();
      }
      n = n.return;
    }
    if (Ve = e, Oe = e = jn(e.current, null), Ye = gt = t, He = 0, ks = null, Ql = $o = On = 0, ut = Cs = null, Mn !== null) {
      for (t = 0; t < Mn.length; t++) if (n = Mn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var o = s.next, u = n.pending;
        if (u !== null) {
          var p = u.next;
          u.next = o, s.next = p;
        }
        n.pending = s;
      }
      Mn = null;
    }
    return e;
  }
  function Rd(e, t) {
    do {
      var n = Oe;
      try {
        if (ml(), wo.current = jo, So) {
          for (var s = Ie.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          So = !1;
        }
        if (zn = 0, Ue = Fe = Ie = null, ys = !1, gs = 0, ql.current = null, n === null || n.return === null) {
          He = 1, ks = t, Oe = null;
          break;
        }
        e: {
          var u = e, p = n.return, k = n, j = t;
          if (t = Ye, k.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var L = j, V = k, q = V.tag;
            if ((V.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var U = V.alternate;
              U ? (V.updateQueue = U.updateQueue, V.memoizedState = U.memoizedState, V.lanes = U.lanes) : (V.updateQueue = null, V.memoizedState = null);
            }
            var Z = ed(p);
            if (Z !== null) {
              Z.flags &= -257, td(Z, p, k, u, t), Z.mode & 1 && Zc(u, L, t), t = Z, j = L;
              var te = t.updateQueue;
              if (te === null) {
                var ne = /* @__PURE__ */ new Set();
                ne.add(j), t.updateQueue = ne;
              } else te.add(j);
              break e;
            } else {
              if ((t & 1) === 0) {
                Zc(u, L, t), ti();
                break e;
              }
              j = Error(i(426));
            }
          } else if (Ae && k.mode & 1) {
            var ze = ed(p);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), td(ze, p, k, u, t), fl(kr(j, k));
              break e;
            }
          }
          u = j = kr(j, k), He !== 4 && (He = 2), Cs === null ? Cs = [u] : Cs.push(u), u = p;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var $ = Jc(u, j, t);
                Cc(u, $);
                break e;
              case 1:
                k = j;
                var T = u.type, b = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (wn === null || !wn.has(b)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var K = Xc(u, k, t);
                  Cc(u, K);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        $d(n);
      } catch (re) {
        t = re, Oe === n && n !== null && (Oe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Pd() {
    var e = Ao.current;
    return Ao.current = jo, e === null ? jo : e;
  }
  function ti() {
    (He === 0 || He === 3 || He === 2) && (He = 4), Ve === null || (On & 268435455) === 0 && ($o & 268435455) === 0 || Cn(Ve, Ye);
  }
  function zo(e, t) {
    var n = _e;
    _e |= 2;
    var s = Pd();
    (Ve !== e || Ye !== t) && (nn = null, Hn(e, t));
    do
      try {
        Xm();
        break;
      } catch (o) {
        Rd(e, o);
      }
    while (!0);
    if (ml(), _e = n, Ao.current = s, Oe !== null) throw Error(i(261));
    return Ve = null, Ye = 0, He;
  }
  function Xm() {
    for (; Oe !== null; ) Ad(Oe);
  }
  function Zm() {
    for (; Oe !== null && !Cp(); ) Ad(Oe);
  }
  function Ad(e) {
    var t = Ld(e.alternate, e, gt);
    e.memoizedProps = e.pendingProps, t === null ? $d(e) : Oe = t, ql.current = null;
  }
  function $d(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Vm(n, t, gt), n !== null) {
          Oe = n;
          return;
        }
      } else {
        if (n = qm(n, t), n !== null) {
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
  function Wn(e, t, n) {
    var s = ke, o = Ct.transition;
    try {
      Ct.transition = null, ke = 1, eh(e, t, n, s);
    } finally {
      Ct.transition = o, ke = s;
    }
    return null;
  }
  function eh(e, t, n, s) {
    do
      Nr();
    while (Sn !== null);
    if ((_e & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Ip(e, u), e === Ve && (Oe = Ve = null, Ye = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Io || (Io = !0, Md(Hs, function() {
      return Nr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = Ct.transition, Ct.transition = null;
      var p = ke;
      ke = 1;
      var k = _e;
      _e |= 4, ql.current = null, Km(e, n), Sd(n, e), xm(tl), Ks = !!el, tl = el = null, e.current = n, Ym(n), jp(), _e = k, ke = p, Ct.transition = u;
    } else e.current = n;
    if (Io && (Io = !1, Sn = e, Lo = o), u = e.pendingLanes, u === 0 && (wn = null), Tp(n.stateNode), ct(e, De()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], s(o.value, { componentStack: o.stack, digest: o.digest });
    if (bo) throw bo = !1, e = Yl, Yl = null, e;
    return (Lo & 1) !== 0 && e.tag !== 0 && Nr(), u = e.pendingLanes, (u & 1) !== 0 ? e === Gl ? js++ : (js = 0, Gl = e) : js = 0, yn(), null;
  }
  function Nr() {
    if (Sn !== null) {
      var e = xu(Lo), t = Ct.transition, n = ke;
      try {
        if (Ct.transition = null, ke = 16 > e ? 16 : e, Sn === null) var s = !1;
        else {
          if (e = Sn, Sn = null, Lo = 0, (_e & 6) !== 0) throw Error(i(331));
          var o = _e;
          for (_e |= 4, ee = e.current; ee !== null; ) {
            var u = ee, p = u.child;
            if ((ee.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var j = 0; j < k.length; j++) {
                  var L = k[j];
                  for (ee = L; ee !== null; ) {
                    var V = ee;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ss(8, V, u);
                    }
                    var q = V.child;
                    if (q !== null) q.return = V, ee = q;
                    else for (; ee !== null; ) {
                      V = ee;
                      var U = V.sibling, Z = V.return;
                      if (yd(V), V === L) {
                        ee = null;
                        break;
                      }
                      if (U !== null) {
                        U.return = Z, ee = U;
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
            if ((u.subtreeFlags & 2064) !== 0 && p !== null) p.return = u, ee = p;
            else e: for (; ee !== null; ) {
              if (u = ee, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ss(9, u, u.return);
              }
              var $ = u.sibling;
              if ($ !== null) {
                $.return = u.return, ee = $;
                break e;
              }
              ee = u.return;
            }
          }
          var T = e.current;
          for (ee = T; ee !== null; ) {
            p = ee;
            var b = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && b !== null) b.return = p, ee = b;
            else e: for (p = T; ee !== null; ) {
              if (k = ee, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Po(9, k);
                }
              } catch (re) {
                Le(k, k.return, re);
              }
              if (k === p) {
                ee = null;
                break e;
              }
              var K = k.sibling;
              if (K !== null) {
                K.return = k.return, ee = K;
                break e;
              }
              ee = k.return;
            }
          }
          if (_e = o, yn(), Ht && typeof Ht.onPostCommitFiberRoot == "function") try {
            Ht.onPostCommitFiberRoot(Ws, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        ke = n, Ct.transition = t;
      }
    }
    return !1;
  }
  function bd(e, t, n) {
    t = kr(n, t), t = Jc(e, t, 1), e = _n(e, t, 1), t = st(), e !== null && (Yr(e, 1, t), ct(e, t));
  }
  function Le(e, t, n) {
    if (e.tag === 3) bd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        bd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (wn === null || !wn.has(s))) {
          e = kr(n, e), e = Xc(t, e, 1), t = _n(t, e, 1), e = st(), t !== null && (Yr(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function th(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = st(), e.pingedLanes |= e.suspendedLanes & n, Ve === e && (Ye & n) === n && (He === 4 || He === 3 && (Ye & 130023424) === Ye && 500 > De() - Kl ? Hn(e, 0) : Ql |= n), ct(e, t);
  }
  function Id(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Us, Us <<= 1, (Us & 130023424) === 0 && (Us = 4194304)));
    var n = st();
    e = Zt(e, t), e !== null && (Yr(e, t, n), ct(e, n));
  }
  function nh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Id(e, n);
  }
  function rh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    s !== null && s.delete(t), Id(e, n);
  }
  var Ld;
  Ld = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || at.current) it = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return it = !1, Um(e, t, n);
      it = (e.flags & 131072) !== 0;
    }
    else it = !1, Ae && (t.flags & 1048576) !== 0 && mc(t, po, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        To(e, t), e = t.pendingProps;
        var o = hr(t, Ge.current);
        wr(t, n), o = jl(null, t, s, e, o, n);
        var u = El();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, lt(s) ? (u = !0, uo(t)) : u = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, gl(t), o.updater = Eo, t.stateNode = o, o._reactInternals = t, $l(t, s, e, n), t = Ml(null, t, s, !0, u, n)) : (t.tag = 0, Ae && u && il(t), rt(null, t, o, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (To(e, t), e = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = oh(s), e = $t(s, e), o) {
            case 0:
              t = Ll(null, t, s, e, n);
              break e;
            case 1:
              t = ld(null, t, s, e, n);
              break e;
            case 11:
              t = nd(null, t, s, e, n);
              break e;
            case 14:
              t = rd(null, t, s, $t(s.type, e), n);
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
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : $t(s, o), Ll(e, t, s, o, n);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : $t(s, o), ld(e, t, s, o, n);
      case 3:
        e: {
          if (id(t), e === null) throw Error(i(387));
          s = t.pendingProps, u = t.memoizedState, o = u.element, kc(e, t), _o(t, s, null, n);
          var p = t.memoizedState;
          if (s = p.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: p.cache, pendingSuspenseBoundaries: p.pendingSuspenseBoundaries, transitions: p.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            o = kr(Error(i(423)), t), t = ud(e, t, s, n, o);
            break e;
          } else if (s !== o) {
            o = kr(Error(i(424)), t), t = ud(e, t, s, n, o);
            break e;
          } else for (yt = mn(t.stateNode.containerInfo.firstChild), vt = t, Ae = !0, At = null, n = wc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (gr(), s === o) {
              t = tn(e, t, n);
              break e;
            }
            rt(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ec(t), e === null && dl(t), s = t.type, o = t.pendingProps, u = e !== null ? e.memoizedProps : null, p = o.children, nl(s, o) ? p = null : u !== null && nl(s, u) && (t.flags |= 32), ad(e, t), rt(e, t, p, n), t.child;
      case 6:
        return e === null && dl(t), null;
      case 13:
        return cd(e, t, n);
      case 4:
        return _l(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = _r(t, null, s, n) : rt(e, t, s, n), t.child;
      case 11:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : $t(s, o), nd(e, t, s, o, n);
      case 7:
        return rt(e, t, t.pendingProps, n), t.child;
      case 8:
        return rt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return rt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, o = t.pendingProps, u = t.memoizedProps, p = o.value, Ne(vo, s._currentValue), s._currentValue = p, u !== null) if (Pt(u.value, p)) {
            if (u.children === o.children && !at.current) {
              t = tn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              p = u.child;
              for (var j = k.firstContext; j !== null; ) {
                if (j.context === s) {
                  if (u.tag === 1) {
                    j = en(-1, n & -n), j.tag = 2;
                    var L = u.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var V = L.pending;
                      V === null ? j.next = j : (j.next = V.next, V.next = j), L.pending = j;
                    }
                  }
                  u.lanes |= n, j = u.alternate, j !== null && (j.lanes |= n), vl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                j = j.next;
              }
            } else if (u.tag === 10) p = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (p = u.return, p === null) throw Error(i(341));
              p.lanes |= n, k = p.alternate, k !== null && (k.lanes |= n), vl(p, n, t), p = u.sibling;
            } else p = u.child;
            if (p !== null) p.return = u;
            else for (p = u; p !== null; ) {
              if (p === t) {
                p = null;
                break;
              }
              if (u = p.sibling, u !== null) {
                u.return = p.return, p = u;
                break;
              }
              p = p.return;
            }
            u = p;
          }
          rt(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, s = t.pendingProps.children, wr(t, n), o = St(o), s = s(o), t.flags |= 1, rt(e, t, s, n), t.child;
      case 14:
        return s = t.type, o = $t(s, t.pendingProps), o = $t(s.type, o), rd(e, t, s, o, n);
      case 15:
        return sd(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : $t(s, o), To(e, t), t.tag = 1, lt(s) ? (e = !0, uo(t)) : e = !1, wr(t, n), Yc(t, s, o), $l(t, s, o, n), Ml(null, t, s, !0, e, n);
      case 19:
        return fd(e, t, n);
      case 22:
        return od(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Md(e, t) {
    return hu(e, t);
  }
  function sh(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(e, t, n, s) {
    return new sh(e, t, n, s);
  }
  function ni(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function oh(e) {
    if (typeof e == "function") return ni(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Te) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = jt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Oo(e, t, n, s, o, u) {
    var p = 2;
    if (s = e, typeof e == "function") ni(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else e: switch (e) {
      case J:
        return Bn(n.children, o, u, t);
      case W:
        p = 8, o |= 8;
        break;
      case Q:
        return e = jt(12, n, t, o | 2), e.elementType = Q, e.lanes = u, e;
      case Ee:
        return e = jt(13, n, t, o), e.elementType = Ee, e.lanes = u, e;
      case he:
        return e = jt(19, n, t, o), e.elementType = he, e.lanes = u, e;
      case H:
        return Fo(n, o, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case fe:
            p = 10;
            break e;
          case de:
            p = 9;
            break e;
          case Te:
            p = 11;
            break e;
          case ge:
            p = 14;
            break e;
          case Ce:
            p = 16, s = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = jt(p, n, t, o), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function Bn(e, t, n, s) {
    return e = jt(7, e, s, t), e.lanes = n, e;
  }
  function Fo(e, t, n, s) {
    return e = jt(22, e, s, t), e.elementType = H, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ri(e, t, n) {
    return e = jt(6, e, null, t), e.lanes = n, e;
  }
  function si(e, t, n) {
    return t = jt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function ah(e, t, n, s, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Aa(0), this.expirationTimes = Aa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Aa(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function oi(e, t, n, s, o, u, p, k, j) {
    return e = new ah(e, t, n, k, j), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = jt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gl(u), e;
  }
  function lh(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: I, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Dd(e) {
    if (!e) return vn;
    e = e._reactInternals;
    e: {
      if (An(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (lt(t.type)) {
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
      if (lt(n)) return dc(e, n, t);
    }
    return t;
  }
  function zd(e, t, n, s, o, u, p, k, j) {
    return e = oi(n, s, !0, e, o, u, p, k, j), e.context = Dd(null), n = e.current, s = st(), o = kn(n), u = en(s, o), u.callback = t ?? null, _n(n, u, o), e.current.lanes = o, Yr(e, o, s), ct(e, s), e;
  }
  function Ho(e, t, n, s) {
    var o = t.current, u = st(), p = kn(o);
    return n = Dd(n), t.context === null ? t.context = n : t.pendingContext = n, t = en(u, p), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = _n(o, t, p), e !== null && (Lt(e, o, p, u), go(e, o, p)), p;
  }
  function Wo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Od(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ai(e, t) {
    Od(e, t), (e = e.alternate) && Od(e, t);
  }
  function ih() {
    return null;
  }
  var Fd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function li(e) {
    this._internalRoot = e;
  }
  Bo.prototype.render = li.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Ho(e, t, null, null);
  }, Bo.prototype.unmount = li.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fn(function() {
        Ho(null, e, null, null);
      }), t[Yt] = null;
    }
  };
  function Bo(e) {
    this._internalRoot = e;
  }
  Bo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ku();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++) ;
      dn.splice(n, 0, e), n === 0 && Eu(e);
    }
  };
  function ii(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Uo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Hd() {
  }
  function uh(e, t, n, s, o) {
    if (o) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var L = Wo(p);
          u.call(L);
        };
      }
      var p = zd(t, s, e, 0, null, !1, !1, "", Hd);
      return e._reactRootContainer = p, e[Yt] = p.current, us(e.nodeType === 8 ? e.parentNode : e), Fn(), p;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var L = Wo(j);
        k.call(L);
      };
    }
    var j = oi(e, 0, !1, null, null, !1, !1, "", Hd);
    return e._reactRootContainer = j, e[Yt] = j.current, us(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
      Ho(t, j, n, s);
    }), j;
  }
  function Vo(e, t, n, s, o) {
    var u = n._reactRootContainer;
    if (u) {
      var p = u;
      if (typeof o == "function") {
        var k = o;
        o = function() {
          var j = Wo(p);
          k.call(j);
        };
      }
      Ho(t, p, e, o);
    } else p = uh(n, t, e, o, s);
    return Wo(p);
  }
  wu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Kr(t.pendingLanes);
          n !== 0 && ($a(t, n | 1), ct(t, De()), (_e & 6) === 0 && (Er = De() + 500, yn()));
        }
        break;
      case 13:
        Fn(function() {
          var s = Zt(e, 1);
          if (s !== null) {
            var o = st();
            Lt(s, e, 1, o);
          }
        }), ai(e, 1);
    }
  }, ba = function(e) {
    if (e.tag === 13) {
      var t = Zt(e, 134217728);
      if (t !== null) {
        var n = st();
        Lt(t, e, 134217728, n);
      }
      ai(e, 134217728);
    }
  }, Su = function(e) {
    if (e.tag === 13) {
      var t = kn(e), n = Zt(e, t);
      if (n !== null) {
        var s = st();
        Lt(n, e, t, s);
      }
      ai(e, t);
    }
  }, ku = function() {
    return ke;
  }, Cu = function(e, t) {
    var n = ke;
    try {
      return ke = e, t();
    } finally {
      ke = n;
    }
  }, ja = function(e, t, n) {
    switch (t) {
      case "input":
        if (ya(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var o = lo(s);
              if (!o) throw Error(i(90));
              Hr(s), ya(s, o);
            }
          }
        }
        break;
      case "textarea":
        Zi(e, n);
        break;
      case "select":
        t = n.value, t != null && rr(e, !!n.multiple, t, !1);
    }
  }, iu = Zl, uu = Fn;
  var ch = { usingClientEntryPoint: !1, Events: [fs, pr, lo, au, lu, Zl] }, Es = { findFiberByHostInstance: $n, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dh = { bundleType: Es.bundleType, version: Es.version, rendererPackageName: Es.rendererPackageName, rendererConfig: Es.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: M.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = pu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Es.findFiberByHostInstance || ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qo.isDisabled && qo.supportsFiber) try {
      Ws = qo.inject(dh), Ht = qo;
    } catch {
    }
  }
  return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ch, dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ii(t)) throw Error(i(200));
    return lh(e, t, null, n);
  }, dt.createRoot = function(e, t) {
    if (!ii(e)) throw Error(i(299));
    var n = !1, s = "", o = Fd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = oi(e, 1, !1, null, null, n, !1, s, o), e[Yt] = t.current, us(e.nodeType === 8 ? e.parentNode : e), new li(t);
  }, dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = pu(t), e = e === null ? null : e.stateNode, e;
  }, dt.flushSync = function(e) {
    return Fn(e);
  }, dt.hydrate = function(e, t, n) {
    if (!Uo(t)) throw Error(i(200));
    return Vo(null, e, t, !0, n);
  }, dt.hydrateRoot = function(e, t, n) {
    if (!ii(e)) throw Error(i(405));
    var s = n != null && n.hydratedSources || null, o = !1, u = "", p = Fd;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (p = n.onRecoverableError)), t = zd(t, null, e, 1, n ?? null, o, !1, u, p), e[Yt] = t.current, us(e), s) for (e = 0; e < s.length; e++) n = s[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new Bo(t);
  }, dt.render = function(e, t, n) {
    if (!Uo(t)) throw Error(i(200));
    return Vo(null, e, t, !1, n);
  }, dt.unmountComponentAtNode = function(e) {
    if (!Uo(e)) throw Error(i(40));
    return e._reactRootContainer ? (Fn(function() {
      Vo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Yt] = null;
      });
    }), !0) : !1;
  }, dt.unstable_batchedUpdates = Zl, dt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Uo(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Vo(e, t, n, !1, s);
  }, dt.version = "18.3.1-next-f1338f8080-20240426", dt;
}
var Yd;
function jf() {
  if (Yd) return di.exports;
  Yd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (l) {
        console.error(l);
      }
  }
  return r(), di.exports = xh(), di.exports;
}
var Gd;
function wh() {
  if (Gd) return Qo;
  Gd = 1;
  var r = jf();
  return Qo.createRoot = r.createRoot, Qo.hydrateRoot = r.hydrateRoot, Qo;
}
var Sh = wh();
const kh = /* @__PURE__ */ kf(Sh), Ch = { ru: "Тема", en: "Theme" }, jh = { ru: "Тёмная", en: "Dark" }, Eh = { ru: "Светлая", en: "Light" }, Nh = { ru: "Токен", en: "Token" }, Th = { ru: "Тип действия", en: "Action type" }, Rh = { ru: "Ветка диалога", en: "Conversation branch" }, Ph = { ru: "Текст ответа", en: "Response text" }, Ah = { ru: "Команда", en: "Command" }, $h = { ru: "Название переменной", en: "Variable name" }, bh = { ru: "Основная команда", en: "Main command" }, Ih = { ru: "Второстепенная команда", en: "Secondary command" }, Lh = { ru: "Прямая команда", en: "Direct command" }, Mh = { ru: "Дополнительные фразы", en: "Additional phrases" }, Dh = { ru: "Удалённый сервер", en: "Remote server" }, zh = { ru: "Вложенные команды", en: "Nested commands" }, Oh = { ru: "Тип вложенного значения", en: "Nested value type" }, Fh = { ru: "Тип данных", en: "Data type" }, Hh = { ru: "Вручную", en: "Manual" }, Wh = { ru: "Любой", en: "Any" }, Bh = { ru: "Любой", en: "Any" }, Uh = { ru: "Текст", en: "Text" }, Vh = { ru: "Число", en: "Number" }, qh = { ru: "Дата", en: "Date" }, Qh = { ru: "Время", en: "Time" }, Kh = {
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
  Theme: Ch,
  dark: jh,
  light: Eh,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: Nh,
  actionType: Th,
  actionTypeComponent: Rh,
  voiceResponse: Ph,
  uuid: Ah,
  mappingType: $h,
  parent_type: bh,
  children_type: Ih,
  children_direct_type: Lh,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: Mh,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: Dh,
  subDirectControl: zh,
  subMappingType: Oh,
  valueType: Fh,
  manual: Hh,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Wh,
  All: Bh,
  string: Uh,
  int: Vh,
  date: qh,
  time: Qh,
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
  "Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300.": { ru: "Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300.", en: "Address of the Whisper container prompt API, for example http://192.168.1.10:10301. This is a separate HTTP port, not the Wyoming port 10300." },
  "Значение WHISPER_PROMPT_TOKEN из .env контейнера, без префикса Bearer. Сохранённый токен не показывается. При смене адреса укажите токен заново.": { ru: "Значение WHISPER_PROMPT_TOKEN из .env контейнера, без префикса Bearer. Сохранённый токен не показывается. При смене адреса укажите токен заново.", en: "WHISPER_PROMPT_TOKEN from the container .env file, without the Bearer prefix. The saved token is not displayed. Enter the token again when changing the server address." },
  "Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Например: «Насыпь еды. Запусти пылесос. Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После сохранения применяется со следующего распознавания, без перезапуска модели.": { ru: "Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Например: «Насыпь еды. Запусти пылесос. Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После сохранения применяется со следующего распознавания, без перезапуска модели.", en: "Whisper initial_prompt hint: vocabulary, names and example phrases, such as “Feed the cats. Start the vacuum. Turn on the hallway light.” It guides speech recognition, not the dialog. Empty text disables the hint. Saved changes apply to the next transcription without reloading the model." },
  "Укажите адрес API Whisper, например http://192.168.1.10:10301": { ru: "Укажите адрес API Whisper, например http://192.168.1.10:10301", en: "Enter the Whisper API URL, for example http://192.168.1.10:10301" },
  "Укажите токен API Whisper": { ru: "Укажите токен API Whisper", en: "Enter the Whisper API token" },
  "Whisper отклонил токен доступа": { ru: "Whisper отклонил токен доступа", en: "Whisper rejected the access token" },
  "API Whisper вернул некорректный ответ": { ru: "API Whisper вернул некорректный ответ", en: "Whisper API returned an invalid response" },
  "Промпт Whisper слишком длинный": { ru: "Промпт Whisper слишком длинный", en: "The Whisper prompt is too long" },
  "Ответ API Whisper слишком большой": { ru: "Ответ API Whisper слишком большой", en: "The Whisper API response is too large" },
  "Whisper не подтвердил применение промпта": { ru: "Whisper не подтвердил применение промпта", en: "Whisper did not confirm the prompt update" },
  "Не удалось подключиться к API Whisper. Проверьте адрес, порт и доступность контейнера.": { ru: "Не удалось подключиться к API Whisper. Проверьте адрес, порт и доступность контейнера.", en: "Could not connect to the Whisper API. Check the address, port and container availability." },
  "Промпт применён в Whisper, но не удалось сохранить настройки Home Assistant. Повторите сохранение.": { ru: "Промпт применён в Whisper, но не удалось сохранить настройки Home Assistant. Повторите сохранение.", en: "The prompt was applied in Whisper, but Home Assistant could not save the settings. Save again." }
}, Ef = "ha-dialog-ui-language";
let Ii = localStorage.getItem(Ef) === "en" ? "en" : "ru";
const ki = /* @__PURE__ */ new Set();
function Yh(r) {
  Ii = r, localStorage.setItem(Ef, r), ki.forEach((l) => l());
}
function Nf() {
  return v.useSyncExternalStore((r) => (ki.add(r), () => {
    ki.delete(r);
  }), () => Ii);
}
function w(r) {
  if (typeof r != "string") return r;
  const l = Kh[r];
  return (l == null ? void 0 : l[Ii]) ?? r;
}
const Gh = "_button_180pj_1", Jh = "_full_180pj_32", Xh = "_primary_180pj_37", Zh = "_secondary_180pj_49", ev = "_ghost_180pj_61", tv = "_remove_180pj_83", mi = {
  button: Gh,
  full: Jh,
  primary: Xh,
  secondary: Zh,
  ghost: ev,
  remove: tv
}, le = ({
  children: r,
  variant: l = "primary",
  fullWidth: i = !1,
  leftIcon: c,
  rightIcon: d,
  className: f = "",
  ...m
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    ...m,
    className: `
        ${mi.button}
        ${mi[l]}
        ${i ? mi.full : ""}
        ${f}
      `,
    children: [
      c,
      r,
      d
    ]
  }
);
class nv extends v.Component {
  constructor() {
    super(...arguments);
    qt(this, "state", { failed: !1 });
  }
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidCatch(i, c) {
    console.error("[ha_dialog_ui] Panel render failed", i, c.componentStack);
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ a.jsxs("div", { role: "alert", className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: [
      /* @__PURE__ */ a.jsx("p", { children: w("Не удалось открыть панель. Попробуйте ещё раз.") }),
      /* @__PURE__ */ a.jsx(le, { onClick: () => this.setState({ failed: !1 }), children: w("Открыть повторно") })
    ] }) : this.props.children;
  }
}
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
var Jd = "popstate";
function Xd(r) {
  return typeof r == "object" && r != null && "pathname" in r && "search" in r && "hash" in r && "state" in r && "key" in r;
}
function rv(r = {}) {
  function l(d, f) {
    let {
      pathname: m = "/",
      search: h = "",
      hash: g = ""
    } = tr(d.location.hash.substring(1));
    return !m.startsWith("/") && !m.startsWith(".") && (m = "/" + m), Ci(
      "",
      { pathname: m, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      f.state && f.state.usr || null,
      f.state && f.state.key || "default"
    );
  }
  function i(d, f) {
    let m = d.document.querySelector("base"), h = "";
    if (m && m.getAttribute("href")) {
      let g = d.location.href, x = g.indexOf("#");
      h = x === -1 ? g : g.slice(0, x);
    }
    return h + "#" + (typeof f == "string" ? f : Ls(f));
  }
  function c(d, f) {
    Tt(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return ov(
    l,
    i,
    c,
    r
  );
}
function $e(r, l) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(l);
}
function Tt(r, l) {
  if (!r) {
    typeof console < "u" && console.warn(l);
    try {
      throw new Error(l);
    } catch {
    }
  }
}
function sv() {
  return Math.random().toString(36).substring(2, 10);
}
function Zd(r, l) {
  return {
    usr: r.state,
    key: r.key,
    idx: l,
    masked: r.mask ? {
      pathname: r.pathname,
      search: r.search,
      hash: r.hash
    } : void 0
  };
}
function Ci(r, l, i = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof l == "string" ? tr(l) : l,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: l && l.key || c || sv(),
    mask: d
  };
}
function Ls({
  pathname: r = "/",
  search: l = "",
  hash: i = ""
}) {
  return l && l !== "?" && (r += l.charAt(0) === "?" ? l : "?" + l), i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i), r;
}
function tr(r) {
  let l = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && (l.hash = r.substring(i), r = r.substring(0, i));
    let c = r.indexOf("?");
    c >= 0 && (l.search = r.substring(c), r = r.substring(0, c)), r && (l.pathname = r);
  }
  return l;
}
function ov(r, l, i, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, m = d.history, h = "POP", g = null, x = y();
  x == null && (x = 0, m.replaceState({ ...m.state, idx: x }, ""));
  function y() {
    return (m.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let N = y(), A = N == null ? null : N - x;
    x = N, g && g({ action: h, location: E.location, delta: A });
  }
  function S(N, A) {
    h = "PUSH";
    let O = Xd(N) ? N : Ci(E.location, N, A);
    i && i(O, N), x = y() + 1;
    let D = Zd(O, x), M = E.createHref(O.mask || O);
    try {
      m.pushState(D, "", M);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError")
        throw B;
      d.location.assign(M);
    }
    f && g && g({ action: h, location: E.location, delta: 1 });
  }
  function C(N, A) {
    h = "REPLACE";
    let O = Xd(N) ? N : Ci(E.location, N, A);
    i && i(O, N), x = y();
    let D = Zd(O, x), M = E.createHref(O.mask || O);
    m.replaceState(D, "", M), f && g && g({ action: h, location: E.location, delta: 0 });
  }
  function R(N) {
    return av(d, N);
  }
  let E = {
    get action() {
      return h;
    },
    get location() {
      return r(d, m);
    },
    listen(N) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(Jd, _), g = N, () => {
        d.removeEventListener(Jd, _), g = null;
      };
    },
    createHref(N) {
      return l(d, N);
    },
    createURL: R,
    encodeLocation(N) {
      let A = R(N);
      return {
        pathname: A.pathname,
        search: A.search,
        hash: A.hash
      };
    },
    push: S,
    replace: C,
    go(N) {
      return m.go(N);
    }
  };
  return E;
}
function av(r, l, i = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), $e(c, "No window.location.(origin|href) available to create URL");
  let d = typeof l == "string" ? l : Ls(l);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Tf(r, l, i = "/") {
  return lv(r, l, i, !1);
}
function lv(r, l, i, c, d) {
  let f = typeof l == "string" ? tr(l) : l, m = on(f.pathname || "/", i);
  if (m == null)
    return null;
  let h = iv(r), g = null, x = xv(m);
  for (let y = 0; g == null && y < h.length; ++y)
    g = gv(
      h[y],
      x,
      c
    );
  return g;
}
function iv(r) {
  let l = Rf(r);
  return uv(l), l;
}
function Rf(r, l = [], i = [], c = "", d = !1) {
  let f = (m, h, g = d, x) => {
    let y = {
      relativePath: x === void 0 ? m.path || "" : x,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: h,
      route: m
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(c) && g)
        return;
      $e(
        y.relativePath.startsWith(c),
        `Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), y.relativePath = y.relativePath.slice(c.length);
    }
    let _ = Dt([c, y.relativePath]), S = i.concat(y);
    m.children && m.children.length > 0 && ($e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), Rf(
      m.children,
      l,
      S,
      _,
      g
    )), !(m.path == null && !m.index) && l.push({
      path: _,
      score: vv(_, m.index),
      routesMeta: S
    });
  };
  return r.forEach((m, h) => {
    var g;
    if (m.path === "" || !((g = m.path) != null && g.includes("?")))
      f(m, h);
    else
      for (let x of Pf(m.path))
        f(m, h, !0, x);
  }), l;
}
function Pf(r) {
  let l = r.split("/");
  if (l.length === 0) return [];
  let [i, ...c] = l, d = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let m = Pf(c.join("/")), h = [];
  return h.push(
    ...m.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && h.push(...m), h.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function uv(r) {
  r.sort(
    (l, i) => l.score !== i.score ? i.score - l.score : yv(
      l.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var cv = /^:[\w-]+$/, dv = 3, fv = 2, pv = 1, mv = 10, hv = -2, ef = (r) => r === "*";
function vv(r, l) {
  let i = r.split("/"), c = i.length;
  return i.some(ef) && (c += hv), l && (c += fv), i.filter((d) => !ef(d)).reduce(
    (d, f) => d + (cv.test(f) ? dv : f === "" ? pv : mv),
    c
  );
}
function yv(r, l) {
  return r.length === l.length && r.slice(0, -1).every((c, d) => c === l[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    r[r.length - 1] - l[l.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function gv(r, l, i = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", m = [];
  for (let h = 0; h < c.length; ++h) {
    let g = c[h], x = h === c.length - 1, y = f === "/" ? l : l.slice(f.length) || "/", _ = na(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: x },
      y
    ), S = g.route;
    if (!_ && x && i && !c[c.length - 1].route.index && (_ = na(
      {
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: !1
      },
      y
    )), !_)
      return null;
    Object.assign(d, _.params), m.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: Dt([f, _.pathname]),
      pathnameBase: Cv(
        Dt([f, _.pathnameBase])
      ),
      route: S
    }), _.pathnameBase !== "/" && (f = Dt([f, _.pathnameBase]));
  }
  return m;
}
function na(r, l) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, c] = _v(
    r.path,
    r.caseSensitive,
    r.end
  ), d = l.match(i);
  if (!d) return null;
  let f = d[0], m = f.replace(/(.)\/+$/, "$1"), h = d.slice(1);
  return {
    params: c.reduce(
      (x, { paramName: y, isOptional: _ }, S) => {
        if (y === "*") {
          let R = h[S] || "";
          m = f.slice(0, f.length - R.length).replace(/(.)\/+$/, "$1");
        }
        const C = h[S];
        return _ && !C ? x[y] = void 0 : x[y] = (C || "").replace(/%2F/g, "/"), x;
      },
      {}
    ),
    pathname: f,
    pathnameBase: m,
    pattern: r
  };
}
function _v(r, l = !1, i = !0) {
  Tt(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  );
  let c = [], d = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, h, g, x, y) => {
      if (c.push({ paramName: h, isOptional: g != null }), g) {
        let _ = y.charAt(x + m.length);
        return _ && _ !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return r.endsWith("*") ? (c.push({ paramName: "*" }), d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? d += "\\/*$" : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, l ? void 0 : "i"), c];
}
function xv(r) {
  try {
    return r.split("/").map((l) => decodeURIComponent(l).replace(/\//g, "%2F")).join("/");
  } catch (l) {
    return Tt(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`
    ), r;
  }
}
function on(r, l) {
  if (l === "/") return r;
  if (!r.toLowerCase().startsWith(l.toLowerCase()))
    return null;
  let i = l.endsWith("/") ? l.length - 1 : l.length, c = r.charAt(i);
  return c && c !== "/" ? null : r.slice(i) || "/";
}
var wv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Sv(r, l = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? tr(r) : r, f;
  return i ? (i = Af(i), i.startsWith("/") ? f = tf(i.substring(1), "/") : f = tf(i, l)) : f = l, {
    pathname: f,
    search: jv(c),
    hash: Ev(d)
  };
}
function tf(r, l) {
  let i = ra(l).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function hi(r, l, i, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${l}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function kv(r) {
  return r.filter(
    (l, i) => i === 0 || l.route.path && l.route.path.length > 0
  );
}
function Li(r) {
  let l = kv(r);
  return l.map(
    (i, c) => c === l.length - 1 ? i.pathname : i.pathnameBase
  );
}
function ua(r, l, i, c = !1) {
  let d;
  typeof r == "string" ? d = tr(r) : (d = { ...r }, $e(
    !d.pathname || !d.pathname.includes("?"),
    hi("?", "pathname", "search", d)
  ), $e(
    !d.pathname || !d.pathname.includes("#"),
    hi("#", "pathname", "hash", d)
  ), $e(
    !d.search || !d.search.includes("#"),
    hi("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", m = f ? "/" : d.pathname, h;
  if (m == null)
    h = i;
  else {
    let _ = l.length - 1;
    if (!c && m.startsWith("..")) {
      let S = m.split("/");
      for (; S[0] === ".."; )
        S.shift(), _ -= 1;
      d.pathname = S.join("/");
    }
    h = _ >= 0 ? l[_] : "/";
  }
  let g = Sv(d, h), x = m && m !== "/" && m.endsWith("/"), y = (f || m === ".") && i.endsWith("/");
  return !g.pathname.endsWith("/") && (x || y) && (g.pathname += "/"), g;
}
var Af = (r) => r.replace(/\/\/+/g, "/"), Dt = (r) => Af(r.join("/")), ra = (r) => r.replace(/\/+$/, ""), Cv = (r) => ra(r).replace(/^\/*/, "/"), jv = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, Ev = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, Nv = class {
  constructor(r, l, i, c = !1) {
    this.status = r, this.statusText = l || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function Tv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function Rv(r) {
  let l = r.map((i) => i.route.path).filter(Boolean);
  return Dt(l) || "/";
}
var $f = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function bf(r, l) {
  let i = r;
  if (typeof i != "string" || !wv.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, d = !1;
  if ($f)
    try {
      let f = new URL(window.location.href), m = i.startsWith("//") ? new URL(f.protocol + i) : new URL(i), h = on(m.pathname, l);
      m.origin === f.origin && h != null ? i = h + m.search + m.hash : d = !0;
    } catch {
      Tt(
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
var If = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  If
);
var Pv = [
  "GET",
  ...If
];
new Set(Pv);
var $r = v.createContext(null);
$r.displayName = "DataRouter";
var ca = v.createContext(null);
ca.displayName = "DataRouterState";
var Lf = v.createContext(!1);
function Av() {
  return v.useContext(Lf);
}
var Mf = v.createContext({
  isTransitioning: !1
});
Mf.displayName = "ViewTransition";
var $v = v.createContext(
  /* @__PURE__ */ new Map()
);
$v.displayName = "Fetchers";
var bv = v.createContext(null);
bv.displayName = "Await";
var _t = v.createContext(
  null
);
_t.displayName = "Navigation";
var Ms = v.createContext(
  null
);
Ms.displayName = "Location";
var Kt = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Kt.displayName = "Route";
var Mi = v.createContext(null);
Mi.displayName = "RouteError";
var Df = "REACT_ROUTER_ERROR", Iv = "REDIRECT", Lv = "ROUTE_ERROR_RESPONSE";
function Mv(r) {
  if (r.startsWith(`${Df}:${Iv}:{`))
    try {
      let l = JSON.parse(r.slice(28));
      if (typeof l == "object" && l && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.location == "string" && typeof l.reloadDocument == "boolean" && typeof l.replace == "boolean")
        return l;
    } catch {
    }
}
function Dv(r) {
  if (r.startsWith(
    `${Df}:${Lv}:{`
  ))
    try {
      let l = JSON.parse(r.slice(40));
      if (typeof l == "object" && l && typeof l.status == "number" && typeof l.statusText == "string")
        return new Nv(
          l.status,
          l.statusText,
          l.data
        );
    } catch {
    }
}
function zv(r, { relative: l } = {}) {
  $e(
    br(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(_t), { hash: d, pathname: f, search: m } = Ds(r, { relative: l }), h = f;
  return i !== "/" && (h = f === "/" ? i : Dt([i, f])), c.createHref({ pathname: h, search: m, hash: d });
}
function br() {
  return v.useContext(Ms) != null;
}
function pt() {
  return $e(
    br(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(Ms).location;
}
var zf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Of(r) {
  v.useContext(_t).static || v.useLayoutEffect(r);
}
function Di() {
  let { isDataRoute: r } = v.useContext(Kt);
  return r ? Jv() : Ov();
}
function Ov() {
  $e(
    br(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext($r), { basename: l, navigator: i } = v.useContext(_t), { matches: c } = v.useContext(Kt), { pathname: d } = pt(), f = JSON.stringify(Li(c)), m = v.useRef(!1);
  return Of(() => {
    m.current = !0;
  }), v.useCallback(
    (g, x = {}) => {
      if (Tt(m.current, zf), !m.current) return;
      if (typeof g == "number") {
        i.go(g);
        return;
      }
      let y = ua(
        g,
        JSON.parse(f),
        d,
        x.relative === "path"
      );
      r == null && l !== "/" && (y.pathname = y.pathname === "/" ? l : Dt([l, y.pathname])), (x.replace ? i.replace : i.push)(
        y,
        x.state,
        x
      );
    },
    [
      l,
      i,
      f,
      d,
      r
    ]
  );
}
v.createContext(null);
function Ds(r, { relative: l } = {}) {
  let { matches: i } = v.useContext(Kt), { pathname: c } = pt(), d = JSON.stringify(Li(i));
  return v.useMemo(
    () => ua(
      r,
      JSON.parse(d),
      c,
      l === "path"
    ),
    [r, d, c, l]
  );
}
function Fv(r, l) {
  return Ff(r, l);
}
function Ff(r, l, i) {
  var N;
  $e(
    br(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(_t), { matches: d } = v.useContext(Kt), f = d[d.length - 1], m = f ? f.params : {}, h = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", x = f && f.route;
  {
    let A = x && x.path || "";
    Wf(
      h,
      !x || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`
    );
  }
  let y = pt(), _;
  if (l) {
    let A = typeof l == "string" ? tr(l) : l;
    $e(
      g === "/" || ((N = A.pathname) == null ? void 0 : N.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ), _ = A;
  } else
    _ = y;
  let S = _.pathname || "/", C = S;
  if (g !== "/") {
    let A = g.replace(/^\//, "").split("/");
    C = "/" + S.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let R = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (A) => Object.assign(A, {
        route: i.manifest[A.route.id] || A.route
      })
    )
  ) : Tf(r, { pathname: C });
  Tt(
    x || R != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), Tt(
    R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let E = Vv(
    R && R.map(
      (A) => Object.assign({}, A, {
        params: Object.assign({}, m, A.params),
        pathname: Dt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            A.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : A.pathname
        ]),
        pathnameBase: A.pathnameBase === "/" ? g : Dt([
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
    i
  );
  return l && E ? /* @__PURE__ */ v.createElement(
    Ms.Provider,
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
    E
  ) : E;
}
function Hv() {
  let r = Gv(), l = Tv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), i = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), m = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, l), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, m);
}
var Wv = /* @__PURE__ */ v.createElement(Hv, null), Hf = class extends v.Component {
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
  static getDerivedStateFromProps(r, l) {
    return l.location !== r.location || l.revalidation !== "idle" && r.revalidation === "idle" ? {
      error: r.error,
      location: r.location,
      revalidation: r.revalidation
    } : {
      error: r.error !== void 0 ? r.error : l.error,
      location: l.location,
      revalidation: r.revalidation || l.revalidation
    };
  }
  componentDidCatch(r, l) {
    this.props.onError ? this.props.onError(r, l) : console.error(
      "React Router caught the following error during render",
      r
    );
  }
  render() {
    let r = this.state.error;
    if (this.context && typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
      const i = Dv(r.digest);
      i && (r = i);
    }
    let l = r !== void 0 ? /* @__PURE__ */ v.createElement(Kt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Mi.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(Bv, { error: r }, l) : l;
  }
};
Hf.contextType = Lf;
var vi = /* @__PURE__ */ new WeakMap();
function Bv({
  children: r,
  error: l
}) {
  let { basename: i } = v.useContext(_t);
  if (typeof l == "object" && l && "digest" in l && typeof l.digest == "string") {
    let c = Mv(l.digest);
    if (c) {
      let d = vi.get(l);
      if (d) throw d;
      let f = bf(c.location, i);
      if ($f && !vi.get(l))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw vi.set(l, m), m;
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
function Uv({ routeContext: r, match: l, children: i }) {
  let c = v.useContext($r);
  return c && c.static && c.staticContext && (l.route.errorElement || l.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = l.route.id), /* @__PURE__ */ v.createElement(Kt.Provider, { value: r }, i);
}
function Vv(r, l = [], i) {
  let c = i == null ? void 0 : i.state;
  if (r == null) {
    if (!c)
      return null;
    if (c.errors)
      r = c.matches;
    else if (l.length === 0 && !c.initialized && c.matches.length > 0)
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
  let m = !1, h = -1;
  if (i && c) {
    m = c.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let _ = d[y];
      if ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (h = y), _.route.id) {
        let { loaderData: S, errors: C } = c, R = _.route.loader && !S.hasOwnProperty(_.route.id) && (!C || C[_.route.id] === void 0);
        if (_.route.lazy || R) {
          i.isStatic && (m = !0), h >= 0 ? d = d.slice(0, h + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let g = i == null ? void 0 : i.onError, x = c && g ? (y, _) => {
    var S, C;
    g(y, {
      location: c.location,
      params: ((C = (S = c.matches) == null ? void 0 : S[0]) == null ? void 0 : C.params) ?? {},
      pattern: Rv(c.matches),
      errorInfo: _
    });
  } : void 0;
  return d.reduceRight(
    (y, _, S) => {
      let C, R = !1, E = null, N = null;
      c && (C = f && _.route.id ? f[_.route.id] : void 0, E = _.route.errorElement || Wv, m && (h < 0 && S === 0 ? (Wf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), R = !0, N = null) : h === S && (R = !0, N = _.route.hydrateFallbackElement || null)));
      let A = l.concat(d.slice(0, S + 1)), O = () => {
        let D;
        return C ? D = E : R ? D = N : _.route.Component ? D = /* @__PURE__ */ v.createElement(_.route.Component, null) : _.route.element ? D = _.route.element : D = y, /* @__PURE__ */ v.createElement(
          Uv,
          {
            match: _,
            routeContext: {
              outlet: y,
              matches: A,
              isDataRoute: c != null
            },
            children: D
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || S === 0) ? /* @__PURE__ */ v.createElement(
        Hf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: E,
          error: C,
          children: O(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: x
        }
      ) : O();
    },
    null
  );
}
function zi(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qv(r) {
  let l = v.useContext($r);
  return $e(l, zi(r)), l;
}
function Qv(r) {
  let l = v.useContext(ca);
  return $e(l, zi(r)), l;
}
function Kv(r) {
  let l = v.useContext(Kt);
  return $e(l, zi(r)), l;
}
function Oi(r) {
  let l = Kv(r), i = l.matches[l.matches.length - 1];
  return $e(
    i.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Yv() {
  return Oi(
    "useRouteId"
    /* UseRouteId */
  );
}
function Gv() {
  var c;
  let r = v.useContext(Mi), l = Qv(
    "useRouteError"
    /* UseRouteError */
  ), i = Oi(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = l.errors) == null ? void 0 : c[i];
}
function Jv() {
  let { router: r } = qv(
    "useNavigate"
    /* UseNavigateStable */
  ), l = Oi(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return Of(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      Tt(i.current, zf), i.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: l, ...f }));
    },
    [r, l]
  );
}
var nf = {};
function Wf(r, l, i) {
  !l && !nf[r] && (nf[r] = !0, Tt(!1, i));
}
v.memo(Xv);
function Xv({
  routes: r,
  manifest: l,
  future: i,
  state: c,
  isStatic: d,
  onError: f
}) {
  return Ff(r, void 0, {
    manifest: l,
    state: c,
    isStatic: d,
    onError: f
  });
}
function Un({
  to: r,
  replace: l,
  state: i,
  relative: c
}) {
  $e(
    br(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(_t);
  Tt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(Kt), { pathname: m } = pt(), h = Di(), g = ua(
    r,
    Li(f),
    m,
    c === "path"
  ), x = JSON.stringify(g);
  return v.useEffect(() => {
    h(JSON.parse(x), { replace: l, state: i, relative: c });
  }, [h, x, c, l, i]), null;
}
function et(r) {
  $e(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Zv({
  basename: r = "/",
  children: l = null,
  location: i,
  navigationType: c = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: m
}) {
  $e(
    !br(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = r.replace(/^\/*/, "/"), g = v.useMemo(
    () => ({
      basename: h,
      navigator: d,
      static: f,
      useTransitions: m,
      future: {}
    }),
    [h, d, f, m]
  );
  typeof i == "string" && (i = tr(i));
  let {
    pathname: x = "/",
    search: y = "",
    hash: _ = "",
    state: S = null,
    key: C = "default",
    mask: R
  } = i, E = v.useMemo(() => {
    let N = on(x, h);
    return N == null ? null : {
      location: {
        pathname: N,
        search: y,
        hash: _,
        state: S,
        key: C,
        mask: R
      },
      navigationType: c
    };
  }, [h, x, y, _, S, C, c, R]);
  return Tt(
    E != null,
    `<Router basename="${h}"> is not able to match the URL "${x}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ v.createElement(_t.Provider, { value: g }, /* @__PURE__ */ v.createElement(Ms.Provider, { children: l, value: E }));
}
function ey({
  children: r,
  location: l
}) {
  return Fv(ji(r), l);
}
function ji(r, l = []) {
  let i = [];
  return v.Children.forEach(r, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let f = [...l, d];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
        ji(c.props.children, f)
      );
      return;
    }
    $e(
      c.type === et,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), $e(
      !c.props.index || !c.props.children,
      "An index route cannot have child routes."
    );
    let m = {
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
    c.props.children && (m.children = ji(
      c.props.children,
      f
    )), i.push(m);
  }), i;
}
var ea = "get", ta = "application/x-www-form-urlencoded";
function da(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function ty(r) {
  return da(r) && r.tagName.toLowerCase() === "button";
}
function ny(r) {
  return da(r) && r.tagName.toLowerCase() === "form";
}
function ry(r) {
  return da(r) && r.tagName.toLowerCase() === "input";
}
function sy(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function oy(r, l) {
  return r.button === 0 && // Ignore everything but left clicks
  (!l || l === "_self") && // Let browser handle "target=_blank" etc.
  !sy(r);
}
var Ko = null;
function ay() {
  if (Ko === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ko = !1;
    } catch {
      Ko = !0;
    }
  return Ko;
}
var ly = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function yi(r) {
  return r != null && !ly.has(r) ? (Tt(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ta}"`
  ), null) : r;
}
function iy(r, l) {
  let i, c, d, f, m;
  if (ny(r)) {
    let h = r.getAttribute("action");
    c = h ? on(h, l) : null, i = r.getAttribute("method") || ea, d = yi(r.getAttribute("enctype")) || ta, f = new FormData(r);
  } else if (ty(r) || ry(r) && (r.type === "submit" || r.type === "image")) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || h.getAttribute("action");
    if (c = g ? on(g, l) : null, i = r.getAttribute("formmethod") || h.getAttribute("method") || ea, d = yi(r.getAttribute("formenctype")) || yi(h.getAttribute("enctype")) || ta, f = new FormData(h, r), !ay()) {
      let { name: x, type: y, value: _ } = r;
      if (y === "image") {
        let S = x ? `${x}.` : "";
        f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
      } else x && f.append(x, _);
    }
  } else {
    if (da(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = ea, c = null, d = ta, m = r;
  }
  return f && d === "text/plain" && (m = f, f = void 0), { action: c, method: i.toLowerCase(), encType: d, formData: f, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Fi(r, l) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(l);
}
function Bf(r, l, i, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : l && on(d.pathname, l) === "/" ? d.pathname = `${ra(l)}/_root.${c}` : d.pathname = `${ra(d.pathname)}.${c}`, d;
}
async function uy(r, l) {
  if (r.id in l)
    return l[r.id];
  try {
    let i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      r.module
    );
    return l[r.id] = i, i;
  } catch (i) {
    return console.error(
      `Error loading route module \`${r.module}\`, reloading page...`
    ), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function cy(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function dy(r, l, i) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = l.routes[d.route.id];
      if (f) {
        let m = await uy(f, i);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return hy(
    c.flat(1).filter(cy).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function rf(r, l, i, c, d, f) {
  let m = (g, x) => i[x] ? g.route.id !== i[x].route.id : !0, h = (g, x) => {
    var y;
    return (
      // param change, /users/123 -> /users/456
      i[x].pathname !== g.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((y = i[x].route.path) == null ? void 0 : y.endsWith("*")) && i[x].params["*"] !== g.params["*"]
    );
  };
  return f === "assets" ? l.filter(
    (g, x) => m(g, x) || h(g, x)
  ) : f === "data" ? l.filter((g, x) => {
    var _;
    let y = c.routes[g.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (m(g, x) || h(g, x))
      return !0;
    if (g.route.shouldRevalidate) {
      let S = g.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((_ = i[0]) == null ? void 0 : _.params) || {},
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
function fy(r, l, { includeHydrateFallback: i } = {}) {
  return py(
    r.map((c) => {
      let d = l.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function py(r) {
  return [...new Set(r)];
}
function my(r) {
  let l = {}, i = Object.keys(r).sort();
  for (let c of i)
    l[c] = r[c];
  return l;
}
function hy(r, l) {
  let i = /* @__PURE__ */ new Set();
  return new Set(l), r.reduce((c, d) => {
    let f = JSON.stringify(my(d));
    return i.has(f) || (i.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function Hi() {
  let r = v.useContext($r);
  return Fi(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function vy() {
  let r = v.useContext(ca);
  return Fi(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Wi = v.createContext(void 0);
Wi.displayName = "FrameworkContext";
function Bi() {
  let r = v.useContext(Wi);
  return Fi(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function yy(r, l) {
  let i = v.useContext(Wi), [c, d] = v.useState(!1), [f, m] = v.useState(!1), { onFocus: h, onBlur: g, onMouseEnter: x, onMouseLeave: y, onTouchStart: _ } = l, S = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && m(!0), r === "viewport") {
      let E = (A) => {
        A.forEach((O) => {
          m(O.isIntersecting);
        });
      }, N = new IntersectionObserver(E, { threshold: 0.5 });
      return S.current && N.observe(S.current), () => {
        N.disconnect();
      };
    }
  }, [r]), v.useEffect(() => {
    if (c) {
      let E = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(E);
      };
    }
  }, [c]);
  let C = () => {
    d(!0);
  }, R = () => {
    d(!1), m(!1);
  };
  return i ? r !== "intent" ? [f, S, {}] : [
    f,
    S,
    {
      onFocus: Ts(h, C),
      onBlur: Ts(g, R),
      onMouseEnter: Ts(x, C),
      onMouseLeave: Ts(y, R),
      onTouchStart: Ts(_, C)
    }
  ] : [!1, S, {}];
}
function Ts(r, l) {
  return (i) => {
    r && r(i), i.defaultPrevented || l(i);
  };
}
function gy({ page: r, ...l }) {
  let i = Av(), { router: c } = Hi(), d = v.useMemo(
    () => Tf(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(xy, { page: r, matches: d, ...l }) : /* @__PURE__ */ v.createElement(wy, { page: r, matches: d, ...l }) : null;
}
function _y(r) {
  let { manifest: l, routeModules: i } = Bi(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return dy(r, l, i).then(
      (m) => {
        f || d(m);
      }
    ), () => {
      f = !0;
    };
  }, [r, l, i]), c;
}
function xy({
  page: r,
  matches: l,
  ...i
}) {
  let c = pt(), { future: d } = Bi(), { basename: f } = Hi(), m = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let h = Bf(
      r,
      f,
      d.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), g = !1, x = [];
    for (let y of l)
      typeof y.route.shouldRevalidate == "function" ? g = !0 : x.push(y.route.id);
    return g && x.length > 0 && h.searchParams.set("_routes", x.join(",")), [h.pathname + h.search];
  }, [
    f,
    d.v8_trailingSlashAwareDataRequests,
    r,
    c,
    l
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, m.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...i })));
}
function wy({
  page: r,
  matches: l,
  ...i
}) {
  let c = pt(), { future: d, manifest: f, routeModules: m } = Bi(), { basename: h } = Hi(), { loaderData: g, matches: x } = vy(), y = v.useMemo(
    () => rf(
      r,
      l,
      x,
      f,
      c,
      "data"
    ),
    [r, l, x, f, c]
  ), _ = v.useMemo(
    () => rf(
      r,
      l,
      x,
      f,
      c,
      "assets"
    ),
    [r, l, x, f, c]
  ), S = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let E = /* @__PURE__ */ new Set(), N = !1;
    if (l.forEach((O) => {
      var M;
      let D = f.routes[O.route.id];
      !D || !D.hasLoader || (!y.some((B) => B.route.id === O.route.id) && O.route.id in g && ((M = m[O.route.id]) != null && M.shouldRevalidate) || D.hasClientLoader ? N = !0 : E.add(O.route.id));
    }), E.size === 0)
      return [];
    let A = Bf(
      r,
      h,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return N && E.size > 0 && A.searchParams.set(
      "_routes",
      l.filter((O) => E.has(O.route.id)).map((O) => O.route.id).join(",")
    ), [A.pathname + A.search];
  }, [
    h,
    d.v8_trailingSlashAwareDataRequests,
    g,
    c,
    f,
    y,
    l,
    r,
    m
  ]), C = v.useMemo(
    () => fy(_, f),
    [_, f]
  ), R = _y(_);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, S.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "prefetch", as: "fetch", href: E, ...i })), C.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "modulepreload", href: E, ...i })), R.map(({ key: E, link: N }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: E,
        nonce: i.nonce,
        ...N,
        crossOrigin: N.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function Sy(...r) {
  return (l) => {
    r.forEach((i) => {
      typeof i == "function" ? i(l) : i != null && (i.current = l);
    });
  };
}
var ky = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ky && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Cy({
  basename: r,
  children: l,
  useTransitions: i,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = rv({ window: c, v5Compat: !0 }));
  let f = d.current, [m, h] = v.useState({
    action: f.action,
    location: f.location
  }), g = v.useCallback(
    (x) => {
      i === !1 ? h(x) : v.startTransition(() => h(x));
    },
    [i]
  );
  return v.useLayoutEffect(() => f.listen(g), [f, g]), /* @__PURE__ */ v.createElement(
    Zv,
    {
      basename: r,
      children: l,
      location: m.location,
      navigationType: m.action,
      navigator: f,
      useTransitions: i
    }
  );
}
var Uf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Vf = v.forwardRef(
  function({
    onClick: l,
    discover: i = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: f,
    replace: m,
    mask: h,
    state: g,
    target: x,
    to: y,
    preventScrollReset: _,
    viewTransition: S,
    defaultShouldRevalidate: C,
    ...R
  }, E) {
    let { basename: N, navigator: A, useTransitions: O } = v.useContext(_t), D = typeof y == "string" && Uf.test(y), M = bf(y, N);
    y = M.to;
    let B = zv(y, { relative: d }), I = pt(), J = null;
    if (h) {
      let ge = ua(
        h,
        [],
        I.mask ? I.mask.pathname : "/",
        !0
      );
      N !== "/" && (ge.pathname = ge.pathname === "/" ? N : Dt([N, ge.pathname])), J = A.createHref(ge);
    }
    let [W, Q, fe] = yy(
      c,
      R
    ), de = Ny(y, {
      replace: m,
      mask: h,
      state: g,
      target: x,
      preventScrollReset: _,
      relative: d,
      viewTransition: S,
      defaultShouldRevalidate: C,
      useTransitions: O
    });
    function Te(ge) {
      l && l(ge), ge.defaultPrevented || de(ge);
    }
    let Ee = !(M.isExternal || f), he = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...R,
          ...fe,
          href: (Ee ? J : void 0) || M.absoluteURL || B,
          onClick: Ee ? Te : l,
          ref: Sy(E, Q),
          target: x,
          "data-discover": !D && i === "render" ? "true" : void 0
        }
      )
    );
    return W && !D ? /* @__PURE__ */ v.createElement(v.Fragment, null, he, /* @__PURE__ */ v.createElement(gy, { page: B })) : he;
  }
);
Vf.displayName = "Link";
var Et = v.forwardRef(
  function({
    "aria-current": l = "page",
    caseSensitive: i = !1,
    className: c = "",
    end: d = !1,
    style: f,
    to: m,
    viewTransition: h,
    children: g,
    ...x
  }, y) {
    let _ = Ds(m, { relative: x.relative }), S = pt(), C = v.useContext(ca), { navigator: R, basename: E } = v.useContext(_t), N = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $y(_) && h === !0, A = R.encodeLocation ? R.encodeLocation(_).pathname : _.pathname, O = S.pathname, D = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    i || (O = O.toLowerCase(), D = D ? D.toLowerCase() : null, A = A.toLowerCase()), D && E && (D = on(D, E) || D);
    const M = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let B = O === A || !d && O.startsWith(A) && O.charAt(M) === "/", I = D != null && (D === A || !d && D.startsWith(A) && D.charAt(A.length) === "/"), J = {
      isActive: B,
      isPending: I,
      isTransitioning: N
    }, W = B ? l : void 0, Q;
    typeof c == "function" ? Q = c(J) : Q = [
      c,
      B ? "active" : null,
      I ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let fe = typeof f == "function" ? f(J) : f;
    return /* @__PURE__ */ v.createElement(
      Vf,
      {
        ...x,
        "aria-current": W,
        className: Q,
        ref: y,
        style: fe,
        to: m,
        viewTransition: h
      },
      typeof g == "function" ? g(J) : g
    );
  }
);
Et.displayName = "NavLink";
var jy = v.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: l,
    navigate: i,
    reloadDocument: c,
    replace: d,
    state: f,
    method: m = ea,
    action: h,
    onSubmit: g,
    relative: x,
    preventScrollReset: y,
    viewTransition: _,
    defaultShouldRevalidate: S,
    ...C
  }, R) => {
    let { useTransitions: E } = v.useContext(_t), N = Py(), A = Ay(h, { relative: x }), O = m.toLowerCase() === "get" ? "get" : "post", D = typeof h == "string" && Uf.test(h), M = (B) => {
      if (g && g(B), B.defaultPrevented) return;
      B.preventDefault();
      let I = B.nativeEvent.submitter, J = (I == null ? void 0 : I.getAttribute("formmethod")) || m, W = () => N(I || B.currentTarget, {
        fetcherKey: l,
        method: J,
        navigate: i,
        replace: d,
        state: f,
        relative: x,
        preventScrollReset: y,
        viewTransition: _,
        defaultShouldRevalidate: S
      });
      E && i !== !1 ? v.startTransition(() => W()) : W();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: R,
        method: O,
        action: A,
        onSubmit: c ? g : M,
        ...C,
        "data-discover": !D && r === "render" ? "true" : void 0
      }
    );
  }
);
jy.displayName = "Form";
function Ey(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qf(r) {
  let l = v.useContext($r);
  return $e(l, Ey(r)), l;
}
function Ny(r, {
  target: l,
  replace: i,
  mask: c,
  state: d,
  preventScrollReset: f,
  relative: m,
  viewTransition: h,
  defaultShouldRevalidate: g,
  useTransitions: x
} = {}) {
  let y = Di(), _ = pt(), S = Ds(r, { relative: m });
  return v.useCallback(
    (C) => {
      if (oy(C, l)) {
        C.preventDefault();
        let R = i !== void 0 ? i : Ls(_) === Ls(S), E = () => y(r, {
          replace: R,
          mask: c,
          state: d,
          preventScrollReset: f,
          relative: m,
          viewTransition: h,
          defaultShouldRevalidate: g
        });
        x ? v.startTransition(() => E()) : E();
      }
    },
    [
      _,
      y,
      S,
      i,
      c,
      d,
      l,
      r,
      f,
      m,
      h,
      g,
      x
    ]
  );
}
var Ty = 0, Ry = () => `__${String(++Ty)}__`;
function Py() {
  let { router: r } = qf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: l } = v.useContext(_t), i = Yv(), c = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, m = {}) => {
      let { action: h, method: g, encType: x, formData: y, body: _ } = iy(
        f,
        l
      );
      if (m.navigate === !1) {
        let S = m.fetcherKey || Ry();
        await c(S, i, m.action || h, {
          defaultShouldRevalidate: m.defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: y,
          body: _,
          formMethod: m.method || g,
          formEncType: m.encType || x,
          flushSync: m.flushSync
        });
      } else
        await d(m.action || h, {
          defaultShouldRevalidate: m.defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: y,
          body: _,
          formMethod: m.method || g,
          formEncType: m.encType || x,
          replace: m.replace,
          state: m.state,
          fromRouteId: i,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [c, d, l, i]
  );
}
function Ay(r, { relative: l } = {}) {
  let { basename: i } = v.useContext(_t), c = v.useContext(Kt);
  $e(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Ds(r || ".", { relative: l }) }, m = pt();
  if (r == null) {
    f.search = m.search;
    let h = new URLSearchParams(f.search), g = h.getAll("index");
    if (g.some((y) => y === "")) {
      h.delete("index"), g.filter((_) => _).forEach((_) => h.append("index", _));
      let y = h.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Dt([i, f.pathname])), Ls(f);
}
function $y(r, { relative: l } = {}) {
  let i = v.useContext(Mf);
  $e(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = qf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Ds(r, { relative: l });
  if (!i.isTransitioning)
    return !1;
  let f = on(i.currentLocation.pathname, c) || i.currentLocation.pathname, m = on(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return na(d.pathname, m) != null || na(d.pathname, f) != null;
}
var Qf = jf();
const Ei = "ha-dialog-ui-api-enabled-change", Kf = v.createContext(!1), Ui = () => v.useContext(Kf), by = "_loader_m2244_1", Iy = "_fullscreen_m2244_11", Ly = "_spinner_m2244_15", My = "_label_m2244_24", Yo = {
  loader: by,
  fullscreen: Iy,
  spinner: Ly,
  label: My
}, Ir = ({ label: r = "Загрузка...", fullscreen: l = !1 }) => /* @__PURE__ */ a.jsxs("div", { className: `${Yo.loader} ${l ? Yo.fullscreen : ""}`, role: "status", "aria-live": "polite", children: [
  /* @__PURE__ */ a.jsx("span", { className: Yo.spinner, "aria-hidden": "true" }),
  r && /* @__PURE__ */ a.jsx("span", { className: Yo.label, children: w(r) })
] }), Dy = "_error_fi1f1_1", zy = {
  error: Dy
}, We = ({ error: r, retry: l, busy: i = !1 }) => r ? /* @__PURE__ */ a.jsxs("div", { role: "alert", className: zy.error, children: [
  /* @__PURE__ */ a.jsx("p", { children: w(r) }),
  l && /* @__PURE__ */ a.jsx(le, { variant: "secondary", disabled: i, onClick: l, children: w("Повторить загрузку") })
] }) : null, sf = {
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
function Jn(r, l = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.") {
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? r.code === "whisper_prompt_error" && "message" in r && typeof r.message == "string" ? r.message : sf[r.code] ?? l : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? sf.connection_lost : l;
}
function zt() {
  const [r, l] = v.useState(null), [i, c] = v.useState(!1), [d, f] = v.useState(!1), m = v.useRef(0), h = v.useRef(null), g = v.useCallback(async (_, S = {}) => {
    if (S.exclusive && m.current > 0) return !1;
    m.current += 1, c(!0), l(null), f(!1);
    try {
      return await _(), h.current = null, !0;
    } catch (C) {
      return l(Jn(C, S.fallback)), h.current = S.retryable ? _ : null, f(!!S.retryable), !1;
    } finally {
      m.current -= 1, c(m.current > 0);
    }
  }, []), x = v.useCallback(() => {
    h.current && g(h.current, { retryable: !0 });
  }, [g]), y = v.useCallback(() => {
    l(null), f(!1), h.current = null;
  }, []);
  return { error: r, busy: i, retry: d ? x : void 0, run: g, clearError: y };
}
const Yf = v.createContext(null);
function mt() {
  const r = v.useContext(Yf);
  if (!r)
    throw new Error(
      "DialogContext not initialized"
    );
  return r;
}
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = (...r) => r.filter((l, i, c) => !!l && l.trim() !== "" && c.indexOf(l) === i).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (l, i, c) => c ? c.toUpperCase() : i.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = (r) => {
  const l = Fy(r);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var gi = {
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
const Hy = (r) => {
  for (const l in r)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
}, Wy = v.createContext({}), By = () => v.useContext(Wy), Uy = v.forwardRef(
  ({ color: r, size: l, strokeWidth: i, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: m, ...h }, g) => {
    const {
      size: x = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: _ = !1,
      color: S = "currentColor",
      className: C = ""
    } = By() ?? {}, R = c ?? _ ? Number(i ?? y) * 24 / Number(l ?? x) : i ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...gi,
        width: l ?? x ?? gi.width,
        height: l ?? x ?? gi.height,
        stroke: r ?? S,
        strokeWidth: R,
        className: Gf("lucide", C, d),
        ...!f && !Hy(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...m.map(([E, N]) => v.createElement(E, N)),
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
const Me = (r, l) => {
  const i = v.forwardRef(
    ({ className: c, ...d }, f) => v.createElement(Uy, {
      ref: f,
      iconNode: l,
      className: Gf(
        `lucide-${Oy(of(r))}`,
        `lucide-${r}`,
        c
      ),
      ...d
    })
  );
  return i.displayName = of(r), i;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], Jf = Me("alarm-clock", Vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Qy = Me("arrow-left", qy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Yy = Me("arrow-right", Ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Jy = Me("check", Gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Xf = Me("chevron-down", Xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], eg = Me("circle-question-mark", Zy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tg = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], ng = Me("clock-3", tg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], sg = Me("command", rg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Zf = Me("download", og);
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
      d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
      key: "1wthlu"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
  ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
], lg = Me("file-code-corner", ag);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], ug = Me("git-branch", ig);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = [
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
], dg = Me("layers", cg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fg = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], pg = Me("layout-grid", fg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mg = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], hg = Me("menu", mg);
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
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], yg = Me("message-circle", vg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], _g = Me("search", gg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ep = Me("settings", xg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], af = Me("sliders-horizontal", wg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], tp = Me("speaker", Sg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], Cg = Me("timer", kg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], lf = Me("workflow", jg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ng = Me("x", Eg), ot = (r = 768) => {
  const [l, i] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      i(f.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), l;
}, np = v.createContext(!1), fa = () => v.useContext(np), sa = "ha-dialog-ui-remote-server-change", rp = v.createContext(null), Lr = () => v.useContext(rp), Rs = "dialogCustomUiOverlay", Go = [], oa = /* @__PURE__ */ new Set();
let Tg = 0, Tr = null, Ni = !1;
function Rg() {
  Ni = !0, window.addEventListener("popstate", () => {
    Ni = !1;
    const r = [...oa];
    oa.clear(), queueMicrotask(() => r.forEach((l) => l()));
  }, { once: !0 }), history.back();
}
function sp(r, l) {
  const i = ot(), c = v.useRef(l);
  c.current = l, v.useEffect(() => {
    if (!r || !i) return;
    const d = `overlay-${++Tg}`;
    let f = !1, m = !1, h = !1;
    const g = () => {
      var y;
      Go.at(-1) !== d || ((y = history.state) == null ? void 0 : y[Rs]) === d || (f = !0, c.current());
    }, x = () => {
      var _;
      if (h) return;
      m = !0, Go.push(d);
      const y = { ...history.state, [Rs]: d };
      Tr && ((_ = history.state) == null ? void 0 : _[Rs]) === Tr ? (history.replaceState(y, ""), Tr = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return Ni ? oa.add(x) : x(), () => {
      var y;
      h = !0, oa.delete(x), window.removeEventListener("popstate", g), m && (Go.splice(Go.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[Rs]) === d && (Tr = d, queueMicrotask(() => {
        var _;
        Tr === d && (Tr = null, ((_ = history.state) == null ? void 0 : _[Rs]) === d && Rg());
      })));
    };
  }, [r, i]);
}
const Pg = "_overlay_tb5vv_1", Ag = "_sheet_tb5vv_11", $g = "_handle_tb5vv_21", Vn = {
  overlay: Pg,
  sheet: Ag,
  handle: $g
}, Vi = ({
  open: r,
  className: l = "",
  labelledBy: i,
  onClose: c,
  children: d
}) => {
  sp(r, c);
  const [f, m] = v.useState(r), [h, g] = v.useState(r), x = v.useRef(0), y = v.useRef(0), [_, S] = v.useState(0);
  v.useEffect(() => {
    const N = document.body.style.overflow;
    if (r)
      m(!0), requestAnimationFrame(() => {
        g(!0);
      }), document.body.style.overflow = "hidden";
    else {
      g(!1);
      const A = setTimeout(() => {
        m(!1);
      }, 300);
      return () => clearTimeout(A);
    }
    return () => {
      document.body.style.overflow = N;
    };
  }, [r]);
  const C = (N) => {
    x.current = N.touches[0].clientY;
  }, R = (N) => {
    y.current = N.touches[0].clientY;
    const A = y.current - x.current;
    A > 0 && S(A);
  }, E = () => {
    _ > 120 && c(), S(0);
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
  }, [r, c]), f ? /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `${Vn.overlay} ${h ? Vn.visible : ""} ${l}`,
      onClick: c,
      children: /* @__PURE__ */ a.jsxs(
        "section",
        {
          className: `${Vn.sheet} ${h ? Vn.open : ""}`,
          style: {
            transform: `translateY(${_}px)`,
            transition: _ === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
          },
          onClick: (N) => N.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": i,
          children: [
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: Vn.handleArea,
                onTouchStart: C,
                onTouchMove: R,
                onTouchEnd: E,
                children: /* @__PURE__ */ a.jsx("div", { className: Vn.handle })
              }
            ),
            /* @__PURE__ */ a.jsx("div", { className: Vn.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, bg = "_overlay_avpnk_1", Ig = "_heading_avpnk_16", Lg = "_close_avpnk_32", Mg = "_nav_avpnk_45", Dg = "_item_avpnk_51", zg = "_icon_avpnk_70", Og = "_label_avpnk_78", Fg = "_arrow_avpnk_86", Hg = "_active_avpnk_91", rn = {
  overlay: bg,
  heading: Ig,
  close: Lg,
  nav: Mg,
  item: Dg,
  icon: zg,
  label: Og,
  arrow: Fg,
  active: Hg
};
function Wg({ open: r, onClose: l }) {
  const i = Ui(), c = fa(), d = Lr(), { pathname: f } = pt(), m = v.useId(), h = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: yg },
      { to: "/commands/sub", label: "Второстепенные команды", icon: ug },
      { to: "/commands/direct/main", label: "Прямые команды", icon: lf },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: dg },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: af }
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: lf }] : [],
    { to: "/timer", label: "Таймеры", icon: ng },
    { to: "/alarm", label: "Будильники", icon: Jf },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: Zf }] : [],
    ...i && c ? [{ to: "/logs", label: "Логи", icon: af }] : [],
    { to: "/settings", label: "Настройки", icon: ep }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const x = requestAnimationFrame(() => {
      var y, _, S;
      return (S = ((y = h.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((_ = h.current) == null ? void 0 : _.querySelector("a"))) == null ? void 0 : S.focus();
    });
    return () => cancelAnimationFrame(x);
  }, [r]), /* @__PURE__ */ a.jsx(Vi, { open: r, onClose: l, labelledBy: m, className: rn.overlay, children: /* @__PURE__ */ a.jsxs("div", { ref: h, onKeyDown: (x) => {
    if (x.key !== "Tab") return;
    const y = [...h.current.querySelectorAll("button, a")], _ = y[0], S = y[y.length - 1];
    x.shiftKey && x.target === _ ? (x.preventDefault(), S.focus()) : !x.shiftKey && x.target === S && (x.preventDefault(), _.focus());
  }, children: [
    /* @__PURE__ */ a.jsxs("div", { className: rn.heading, children: [
      /* @__PURE__ */ a.jsx("h2", { id: m, children: w("Разделы") }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: rn.close, "aria-label": w("Закрыть меню разделов"), onClick: l, children: /* @__PURE__ */ a.jsx(Ng, { size: 20 }) })
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: rn.nav, "aria-label": w("Навигация интеграции"), children: g.map(({ to: x, label: y, icon: _ }) => /* @__PURE__ */ a.jsxs(
      Et,
      {
        to: x,
        end: !0,
        className: ({ isActive: S }) => `${rn.item} ${S ? rn.active : ""}`,
        onClick: (S) => {
          f === x && S.preventDefault(), l();
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: rn.icon, children: /* @__PURE__ */ a.jsx(_, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ a.jsx("span", { className: rn.label, children: w(y) }),
          f === x ? /* @__PURE__ */ a.jsx(Jy, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ a.jsx(Yy, { size: 16, className: rn.arrow, "aria-hidden": "true" })
        ]
      },
      x
    )) })
  ] }) });
}
const Bg = "_search_1h7xe_1", Ug = {
  search: Bg
};
function Mr({ value: r, onChange: l }) {
  return /* @__PURE__ */ a.jsxs("div", { className: Ug.search, children: [
    /* @__PURE__ */ a.jsx(_g, { size: 18, "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "search",
        "aria-label": w("Поиск по названию"),
        placeholder: w("Поиск по названию"),
        value: r,
        onChange: (i) => l(i.target.value)
      }
    )
  ] });
}
const Vg = "_header_1pxju_1", qg = "_bar_1pxju_9", Qg = "_tools_1pxju_18", Kg = "_title_1pxju_31", Yg = "_menuButton_1pxju_38", Gg = "_active_1pxju_76", qn = {
  header: Vg,
  bar: qg,
  tools: Qg,
  title: Kg,
  menuButton: Yg,
  active: Gg
}, Ot = ({ title: r = "", search: l, beforeSearch: i }) => {
  const c = ot(), [d, f] = v.useState(!1), m = v.useRef(null), h = () => {
    var g;
    f(!1), (g = m.current) == null || g.focus();
  };
  return v.useEffect(() => {
    c || f(!1);
  }, [c]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("header", { className: qn.header, children: [
      /* @__PURE__ */ a.jsxs("div", { className: qn.bar, children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-label": w("Открыть меню Home Assistant"),
            className: qn.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ a.jsx(hg, { size: 20 })
          }
        ),
        /* @__PURE__ */ a.jsx("h1", { className: qn.title, children: w(r) }),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            ref: m,
            "aria-label": w("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${qn.menuButton} ${d ? qn.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ a.jsx(pg, { size: 20 })
          }
        )
      ] }),
      c && (i || l) && /* @__PURE__ */ a.jsxs("div", { className: qn.tools, children: [
        i,
        l && /* @__PURE__ */ a.jsx(Mr, { ...l })
      ] })
    ] }),
    c && /* @__PURE__ */ a.jsx(Wg, { open: d, onClose: h })
  ] });
}, Jg = "_tabs_14hon_1", Xg = "_dropdown_14hon_14", Zg = "_tab_14hon_1", e_ = "_active_14hon_47", t_ = "_menu_14hon_57", n_ = "_chevron_14hon_74", r_ = "_menuItem_14hon_82", me = {
  tabs: Jg,
  dropdown: Xg,
  tab: Zg,
  active: e_,
  menu: t_,
  chevron: n_,
  menuItem: r_
}, Ft = () => {
  const r = ot(), l = Ui(), i = fa(), c = Lr(), d = pt(), [f, m] = v.useState(!1), h = v.useRef(null), g = v.useRef(null), x = v.useId();
  if (v.useEffect(() => {
    m(!1);
  }, [d.pathname, r, c]), v.useEffect(() => {
    if (!f) return;
    const y = (_) => {
      h.current && !_.composedPath().includes(h.current) && m(!1);
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("focusin", y), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("focusin", y);
    };
  }, [f]), !r)
    return /* @__PURE__ */ a.jsxs("div", { className: me.tabs, children: [
      c === !0 && /* @__PURE__ */ a.jsxs(
        Et,
        {
          to: "/scripts",
          className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab,
          children: [
            /* @__PURE__ */ a.jsx(lg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ a.jsx("span", { children: w(c ? "Действия удалённых команд" : "Запуск скриптов") })
          ]
        }
      ),
      c === !1 && /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: me.dropdown,
          ref: h,
          onKeyDown: (y) => {
            var _;
            y.key === "Escape" && f && (y.stopPropagation(), m(!1), (_ = g.current) == null || _.focus());
          },
          children: [
            /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                ref: g,
                className: `${me.tab} ${d.pathname.startsWith("/commands") ? me.active : ""}`,
                "aria-expanded": f,
                "aria-controls": x,
                onClick: () => m((y) => !y),
                onKeyDown: (y) => {
                  y.key === "ArrowDown" && (y.preventDefault(), m(!0), requestAnimationFrame(() => {
                    var _, S;
                    return (S = (_ = h.current) == null ? void 0 : _.querySelector("a")) == null ? void 0 : S.focus();
                  }));
                },
                children: [
                  /* @__PURE__ */ a.jsx(sg, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ a.jsx("span", { children: w("Команды") }),
                  /* @__PURE__ */ a.jsx(Xf, { size: 14, className: me.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ a.jsxs(
              "nav",
              {
                id: x,
                className: me.menu,
                "aria-label": w("Разделы команд"),
                onClick: () => m(!1),
                children: [
                  /* @__PURE__ */ a.jsx(
                    Et,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${me.menuItem} ${me.active}` : me.menuItem,
                      children: w("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    Et,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${me.menuItem} ${me.active}` : me.menuItem,
                      children: w("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    Et,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${me.menuItem} ${me.active}` : me.menuItem,
                      children: w("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    Et,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${me.menuItem} ${me.active}` : me.menuItem,
                      children: w("Ответы по умолчанию")
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        Et,
        {
          to: "/timer",
          className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab,
          children: [
            /* @__PURE__ */ a.jsx(Cg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ a.jsx("span", { children: w("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        Et,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab,
          children: [
            /* @__PURE__ */ a.jsx(Jf, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ a.jsx("span", { children: w("Будильники") })
          ]
        }
      ),
      i && /* @__PURE__ */ a.jsxs(Et, { to: "/downloads", className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab, children: [
        /* @__PURE__ */ a.jsx(Zf, { size: 16 }),
        /* @__PURE__ */ a.jsx("span", { children: w("Импорт и экспорт") })
      ] }),
      l && i && /* @__PURE__ */ a.jsx(Et, { to: "/logs", className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab, children: w("Логи") }),
      /* @__PURE__ */ a.jsxs(
        Et,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab,
          children: [
            /* @__PURE__ */ a.jsx(ep, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ a.jsx("span", { children: w("Настройки") })
          ]
        }
      )
    ] });
}, s_ = "_heading_1w2wz_1", o_ = "_note_1w2wz_6", a_ = "_entries_1w2wz_12", l_ = "_entry_1w2wz_19", i_ = "_line_1w2wz_27", u_ = "_error_1w2wz_40", c_ = "_body_1w2wz_49", Nn = {
  heading: s_,
  note: o_,
  entries: a_,
  entry: l_,
  line: i_,
  error: u_,
  body: c_
}, d_ = "_page_z6937_7", f_ = "_header_z6937_19", p_ = "_headerTop_z6937_24", m_ = "_heading_z6937_31", h_ = "_title_z6937_36", v_ = "_description_z6937_45", y_ = "_actions_z6937_52", g_ = "_list_z6937_57", __ = "_innerTabs_z6937_88", x_ = "_innerTab_z6937_88", w_ = "_activeInnerTab_z6937_121", S_ = "_settingsActions_z6937_131", k_ = "_listSentinel_z6937_141", C_ = "_settingsSections_z6937_145", j_ = "_settingsSection_z6937_145", E_ = "_settingsMobileActions_z6937_171", N_ = "_connectionFields_z6937_191", T_ = "_collectionHeader_z6937_197", G = {
  page: d_,
  header: f_,
  headerTop: p_,
  heading: m_,
  title: h_,
  description: v_,
  actions: y_,
  list: g_,
  innerTabs: __,
  innerTab: x_,
  activeInnerTab: w_,
  settingsActions: S_,
  listSentinel: k_,
  settingsSections: C_,
  settingsSection: j_,
  settingsMobileActions: E_,
  connectionFields: N_,
  collectionHeader: T_
};
function R_() {
  const r = mt(), l = zt(), [i, c] = v.useState([]);
  return v.useEffect(() => {
    let d = !0, f;
    const m = async () => {
      await l.run(async () => {
        const h = await r.getData("get_api_logs");
        d && (c(h.logs), f = setTimeout(() => {
          m();
        }, 3e3));
      }, { retryable: !0 });
    };
    return m(), () => {
      d = !1, clearTimeout(f);
    };
  }, [r, l.run]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Ot, { title: w("Логи") }),
    /* @__PURE__ */ a.jsxs("main", { className: G.page, children: [
      /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsx("h1", { className: Nn.heading, children: w("Логи") }),
      /* @__PURE__ */ a.jsx("p", { className: Nn.note, children: w("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ a.jsx(We, { ...l }),
      !i.length && !l.busy && !l.error && /* @__PURE__ */ a.jsx("p", { children: w("Запросов к API пока нет.") }),
      /* @__PURE__ */ a.jsx("div", { className: Nn.entries, children: i.map((d) => /* @__PURE__ */ a.jsxs("article", { className: Nn.entry, children: [
        /* @__PURE__ */ a.jsxs("div", { className: Nn.line, children: [
          /* @__PURE__ */ a.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ a.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: Nn.line, children: [
          /* @__PURE__ */ a.jsx("span", { children: w({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ a.jsxs("span", { className: d.status >= 400 ? Nn.error : void 0, children: [
            "HTTP ",
            d.status
          ] }),
          d.duration_ms !== null && /* @__PURE__ */ a.jsxs("span", { children: [
            d.duration_ms,
            " ",
            w("мс")
          ] }),
          d.event && /* @__PURE__ */ a.jsx("code", { children: d.event })
        ] }),
        [["Тело запроса", d.request_body], ["Тело ответа", d.response_body]].map(
          ([f, m]) => m != null && /* @__PURE__ */ a.jsxs("details", { className: Nn.body, children: [
            /* @__PURE__ */ a.jsx("summary", { children: w(f) }),
            /* @__PURE__ */ a.jsx("pre", { children: JSON.stringify(m, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Ti = /* @__PURE__ */ new Map(), Jo = /* @__PURE__ */ new WeakMap(), uf = 0, P_;
function A_(r) {
  return r ? (Jo.has(r) || (uf += 1, Jo.set(r, uf.toString())), Jo.get(r)) : "0";
}
function $_(r) {
  return Object.keys(r).sort().filter(
    (l) => r[l] !== void 0
  ).map((l) => `${l}_${l === "root" ? A_(r.root) : r[l]}`).toString();
}
function b_(r) {
  const l = $_(r);
  let i = Ti.get(l);
  if (!i) {
    const c = /* @__PURE__ */ new Map();
    let d;
    const f = new IntersectionObserver((m) => {
      m.forEach((h) => {
        var g;
        const x = h.isIntersecting && d.some((y) => h.intersectionRatio >= y);
        r.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = x), [...(g = c.get(h.target)) != null ? g : []].forEach((y) => {
          y(x, h);
        });
      });
    }, r);
    d = f.thresholds || (Array.isArray(r.threshold) ? r.threshold : [r.threshold || 0]), i = {
      id: l,
      observer: f,
      elements: c
    }, Ti.set(l, i);
  }
  return i;
}
function I_(r, l, i = {}, c = P_) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const g = r.getBoundingClientRect();
    return l(c, {
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
  const { id: d, observer: f, elements: m } = b_(i), h = m.get(r) || [];
  return m.has(r) || m.set(r, h), h.push(l), f.observe(r), function() {
    h.splice(h.indexOf(l), 1), h.length === 0 && (m.delete(r), f.unobserve(r)), m.size === 0 && (f.disconnect(), Ti.delete(d));
  };
}
function L_({
  threshold: r,
  delay: l,
  trackVisibility: i,
  rootMargin: c,
  root: d,
  triggerOnce: f,
  skip: m,
  initialInView: h,
  fallbackInView: g,
  onChange: x
} = {}) {
  var y;
  const [_, S] = v.useState(null), C = v.useRef(x), R = v.useRef(h), [E, N] = v.useState({
    inView: !!h,
    entry: void 0
  });
  C.current = x, v.useEffect(
    () => {
      if (R.current === void 0 && (R.current = h), m || !_) return;
      let M;
      return M = I_(
        _,
        (B, I) => {
          const J = R.current;
          R.current = B, !(J === void 0 && !B) && (N({
            inView: B,
            entry: I
          }), C.current && C.current(B, I), I.isIntersecting && f && M && (M(), M = void 0));
        },
        {
          root: d,
          rootMargin: c,
          threshold: r,
          // @ts-expect-error
          trackVisibility: i,
          delay: l
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
      _,
      d,
      c,
      f,
      m,
      i,
      g,
      l
    ]
  );
  const A = (y = E.entry) == null ? void 0 : y.target, O = v.useRef(void 0);
  !_ && A && !f && !m && O.current !== A && (O.current = A, N({
    inView: !!h,
    entry: void 0
  }), R.current = h);
  const D = [S, E.inView, E.entry];
  return D.ref = D[0], D.inView = D[1], D.entry = D[2], D;
}
function Dr(r, l, i, c) {
  const { ref: d, inView: f } = L_({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [m, h] = v.useState(!1);
  return v.useEffect(() => {
    !l && (r == null ? void 0 : r.page) === 1 && h(!0);
  }, [l, r]), v.useEffect(() => {
    m && c && f && !l && r && r.page < r.total_pages && i(r.page + 1, !0);
  }, [m, c, f, l, r, i]), d;
}
const _i = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function op(r) {
  const l = mt(), [i, c] = v.useState(null), [d, f] = v.useState(""), m = v.useRef(""), h = v.useRef(0), [g, x] = v.useState(!0), [y, _] = v.useState(null), S = v.useRef(), C = v.useRef(1), R = v.useRef(!1), E = v.useRef(), N = v.useCallback(async (D, M = !1) => {
    const B = ++h.current, I = m.current.trim(), J = D === void 0 && R.current, W = D ?? C.current;
    _(null), x(!0);
    try {
      let Q = _i(await l.getPage(r, W, void 0, I));
      const fe = Math.max(1, Q.total_pages);
      if (W > fe && (Q = _i(await l.getPage(r, fe, void 0, I))), J && Q.page > 1) {
        const de = await Promise.all(Array.from({ length: Q.page - 1 }, (Te, Ee) => l.getPage(r, Ee + 1, void 0, I).then(_i)));
        Q = { ...Q, data: [...de.flatMap((Te) => Te.data), ...Q.data] };
      }
      if (B !== h.current) return;
      J || (R.current = M), S.current = void 0, C.current = Q.page, c((de) => M && de ? { ...Q, data: [...de.data, ...Q.data] } : Q);
    } catch (Q) {
      if (B !== h.current) return;
      S.current = { page: D, append: M }, _(Jn(Q, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      B === h.current && x(!1);
    }
  }, [l, r]);
  v.useEffect(() => {
    const D = E.current !== r;
    if (E.current = r, !D && m.current === d) return;
    m.current = d, C.current = 1, R.current = !1, h.current += 1, x(!0);
    const M = window.setTimeout(() => {
      N(1);
    }, D ? 0 : 250);
    return () => window.clearTimeout(M);
  }, [r, N, d]);
  const A = v.useCallback((D) => {
    c((M) => M && { ...M, data: D(M.data) });
  }, []);
  return { query: d, setQuery: f, page: i, loading: g, loadPage: N, updateItems: A, error: y, retry: () => {
    var D, M;
    N((D = S.current) == null ? void 0 : D.page, ((M = S.current) == null ? void 0 : M.append) ?? !1);
  } };
}
function M_() {
  const r = mt(), { query: l, setQuery: i, page: c, loading: d, loadPage: f, error: m, retry: h } = op("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: l, setQuery: i, error: m, retry: h, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (R) => {
    await r.saveData(R, "save_script_action"), await f();
  }, updateScript: async (R, E) => {
    await r.updateRecord(R, "update_script_action", E), await f();
  }, getScriptAction: async (R) => (await r.getRecord(R, "get_script_action")).data, deleteScriptAction: async (R) => {
    await r.deleteRecord(R, "delete_script_action"), await f();
  } };
}
const D_ = "_subtitle_c1esh_1", z_ = "_card_c1esh_6", O_ = "_content_c1esh_32", F_ = "_title_c1esh_40", H_ = "_arrow_c1esh_46", W_ = "_titleOnly_c1esh_57", Rr = {
  subtitle: D_,
  card: z_,
  content: O_,
  title: F_,
  arrow: H_,
  titleOnly: W_
}, zr = ({
  title: r,
  subTitle: l,
  onClick: i
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    type: "button",
    className: `${Rr.card} ${l ? "" : Rr.titleOnly}`,
    onClick: i,
    children: [
      /* @__PURE__ */ a.jsxs("div", { className: Rr.content, children: [
        /* @__PURE__ */ a.jsx("div", { className: Rr.title, children: r }),
        l && /* @__PURE__ */ a.jsx("div", { className: Rr.subtitle, children: w(l) })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: Rr.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), B_ = "_pagination_r0e80_1", U_ = "_button_r0e80_10", V_ = "_label_r0e80_34", q_ = "_pages_r0e80_40", Q_ = "_active_r0e80_48", Qn = {
  pagination: B_,
  button: U_,
  label: V_,
  pages: q_,
  active: Q_
}, Or = ({ page: r, totalPages: l, onChange: i }) => {
  if (l <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, m) => r + m - 2).filter((f) => f >= 1 && f <= l),
    l
  ])).sort((f, m) => f - m), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= l && f !== r && i(f);
  };
  return /* @__PURE__ */ a.jsx("nav", { className: Qn.pagination, "aria-label": w("Страницы списка"), children: /* @__PURE__ */ a.jsxs("div", { className: Qn.pages, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: Qn.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": w("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, m) => /* @__PURE__ */ a.jsxs(Cf.Fragment, { children: [
      m > 0 && f - c[m - 1] > 1 && /* @__PURE__ */ a.jsx("span", { className: Qn.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `${Qn.button} ${f === r ? Qn.active : ""}`,
          "aria-label": `${w("Страница")} ${f}`,
          "aria-current": f === r ? "page" : void 0,
          onClick: () => d(f),
          children: f
        }
      )
    ] }, f)),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: Qn.button,
        disabled: r >= l,
        onClick: () => d(r + 1),
        "aria-label": w("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, K_ = "_overlay_1m3e5_1", Y_ = "_modal_1m3e5_1", G_ = "_header_1m3e5_1", J_ = "_body_1m3e5_1", X_ = "_footer_1m3e5_1", Z_ = "_sm_1m3e5_32", e1 = "_md_1m3e5_36", t1 = "_lg_1m3e5_40", n1 = "_xl_1m3e5_44", r1 = "_title_1m3e5_59", s1 = "_close_1m3e5_86", o1 = "_fields_1m3e5_116", a1 = "_suspended_1m3e5_124", l1 = "_heading_1m3e5_128", ft = {
  overlay: K_,
  modal: Y_,
  header: G_,
  body: J_,
  footer: X_,
  sm: Z_,
  md: e1,
  lg: t1,
  xl: n1,
  title: r1,
  close: s1,
  fields: o1,
  suspended: a1,
  heading: l1
}, an = ({
  open: r,
  suspended: l = !1,
  feedback: i,
  onClose: c,
  onBack: d,
  title: f,
  subtitle: m,
  footer: h,
  children: g,
  size: x = "md"
}) => (sp(r, c), v.useEffect(() => {
  if (!r || l) return;
  document.body.style.overflow = "hidden";
  const y = (_) => {
    _.key === "Escape" && c();
  };
  return window.addEventListener(
    "keydown",
    y
  ), () => {
    document.body.style.overflow = "", window.removeEventListener(
      "keydown",
      y
    );
  };
}, [r, c, l]), r ? /* @__PURE__ */ a.jsx(
  "div",
  {
    className: `${ft.overlay} ${l ? ft.suspended : ""}`,
    "aria-hidden": l || void 0,
    onClick: c,
    children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `${ft.modal} ${ft[x]}`,
        onClick: (y) => y.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: ft.header, children: [
            d && /* @__PURE__ */ a.jsx(
              le,
              {
                variant: "ghost",
                className: ft.close,
                "aria-label": w("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ a.jsx(Qy, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (m ? /* @__PURE__ */ a.jsxs("div", { className: ft.heading, children: [
              /* @__PURE__ */ a.jsx("h2", { className: ft.title, children: w(f) }),
              m
            ] }) : /* @__PURE__ */ a.jsx("h2", { className: ft.title, children: w(f) })),
            /* @__PURE__ */ a.jsx(
              le,
              {
                variant: "ghost",
                className: ft.close,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: ft.body, children: [
            /* @__PURE__ */ a.jsx(We, { ...i }),
            /* @__PURE__ */ a.jsx("fieldset", { className: ft.fields, disabled: i == null ? void 0 : i.busy, children: g })
          ] }),
          h && /* @__PURE__ */ a.jsx("div", { className: ft.footer, children: /* @__PURE__ */ a.jsx("fieldset", { className: ft.fields, disabled: i == null ? void 0 : i.busy, children: h }) })
        ]
      }
    )
  }
) : null), i1 = "_content_eng69_1", u1 = "_title_eng69_7", c1 = "_actions_eng69_14", d1 = "_row_eng69_20", f1 = "_identifier_eng69_31", Ps = {
  content: i1,
  title: u1,
  actions: c1,
  row: d1,
  identifier: f1
}, qi = ({ open: r, title: l, uuid: i, onClose: c, actions: d, size: f = "md", layout: m = "column" }) => {
  const h = ot(), g = i ? /* @__PURE__ */ a.jsx("p", { className: Ps.identifier, children: i }) : null, x = /* @__PURE__ */ a.jsxs("div", { className: Ps.content, children: [
    h && /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("h3", { className: Ps.title, children: l }),
      g
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: `${Ps.actions} ${m === "row" && !h ? Ps.row : ""}`, children: d.map((y) => /* @__PURE__ */ a.jsx(le, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: w(y.label) }, y.label)) })
  ] });
  return h ? /* @__PURE__ */ a.jsx(Vi, { open: r, onClose: c, children: x }) : /* @__PURE__ */ a.jsx(an, { open: r, onClose: c, title: l, subtitle: g, size: f, children: x });
}, p1 = ({ uuid: r, title: l, open: i, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ a.jsx(qi, { open: i, title: l, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, ap = {
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
function lp(r) {
  var l;
  return (l = Object.entries(ap).find(([i]) => r === i || r === w(i))) == null ? void 0 : l[1];
}
function pa(r) {
  const l = w(ap["Название команды"]);
  return r ? `${l}
UUID: ${r}` : l;
}
const m1 = "_labelRow_1w41x_1", h1 = "_helpButton_1w41x_12", v1 = "_tooltip_1w41x_37", y1 = "_helpOverlay_1w41x_56", g1 = "_sheetContent_1w41x_60", Is = {
  labelRow: m1,
  helpButton: h1,
  tooltip: v1,
  helpOverlay: y1,
  sheetContent: g1
};
function Qi({ label: r, htmlFor: l, className: i, hint: c }) {
  const d = c ?? lp(r);
  return /* @__PURE__ */ a.jsxs("div", { className: Is.labelRow, children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: l, className: i, children: w(r) }),
    d && /* @__PURE__ */ a.jsx(aa, { label: r, description: d })
  ] });
}
function aa({ label: r, description: l = lp(r) ?? "" }) {
  var E, N;
  const i = ot(), [c, d] = v.useState(!1), [f, m] = v.useState({ left: 12, top: 12 }), h = v.useRef(null), g = v.useRef(null), x = v.useRef(), y = v.useId(), _ = () => {
    var A;
    d(!1), i && ((A = h.current) == null || A.focus());
  }, S = () => {
    clearTimeout(x.current), d(!0);
  }, C = () => {
    x.current = setTimeout(() => d(!1), 150);
  };
  v.useEffect(() => () => clearTimeout(x.current), []), v.useEffect(() => {
    d(!1);
  }, [i]), v.useLayoutEffect(() => {
    if (!c || i || !h.current || !g.current) return;
    const A = h.current.getBoundingClientRect(), O = g.current.getBoundingClientRect();
    m({
      left: Math.max(12, Math.min(A.left, window.innerWidth - O.width - 12)),
      top: Math.max(12, A.bottom + 8 + O.height <= window.innerHeight - 12 ? A.bottom + 8 : A.top - O.height - 8)
    });
  }, [c, i]), v.useEffect(() => {
    if (!c) return;
    const A = (D) => {
      D.key === "Escape" ? (D.preventDefault(), D.stopImmediatePropagation(), _()) : i && D.key === "Tab" && D.preventDefault();
    };
    window.addEventListener("keydown", A, !0);
    const O = (D) => {
      var M;
      !i && !(D.target instanceof Node && ((M = g.current) != null && M.contains(D.target))) && d(!1);
    };
    return window.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      window.removeEventListener("keydown", A, !0), window.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O);
    };
  }, [c, i]);
  const R = ((E = h.current) == null ? void 0 : E.closest("[data-theme]")) ?? ((N = h.current) == null ? void 0 : N.getRootNode());
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        ref: h,
        type: "button",
        className: Is.helpButton,
        "aria-label": `${w("Подсказка")}: ${w(r)}`,
        "aria-describedby": c && !i ? y : void 0,
        "aria-haspopup": i ? "dialog" : void 0,
        "aria-expanded": i ? c : void 0,
        onMouseEnter: () => {
          i || S();
        },
        onMouseLeave: () => {
          i || C();
        },
        onFocus: () => {
          i || S();
        },
        onBlur: () => {
          i || C();
        },
        onClick: S,
        children: /* @__PURE__ */ a.jsx(eg, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && R && Qf.createPortal(i ? /* @__PURE__ */ a.jsx(Vi, { open: !0, onClose: _, className: Is.helpOverlay, labelledBy: y, children: /* @__PURE__ */ a.jsxs("div", { className: Is.sheetContent, children: [
      /* @__PURE__ */ a.jsx("h3", { id: y, children: w(r) }),
      /* @__PURE__ */ a.jsx("p", { children: w(l) }),
      /* @__PURE__ */ a.jsx(le, { autoFocus: !0, variant: "secondary", onClick: _, children: w("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: g,
        id: y,
        role: "tooltip",
        className: Is.tooltip,
        style: f,
        onMouseEnter: S,
        onMouseLeave: C,
        children: w(l)
      }
    ), R)
  ] });
}
const _1 = "_field_1vuim_1", x1 = "_label_1vuim_10", w1 = "_inputWrapper_1vuim_18", S1 = "_input_1vuim_18", k1 = "_passwordInput_1vuim_40", C1 = "_passwordToggle_1vuim_66", j1 = "_error_1vuim_95", E1 = "_errorText_1vuim_108", Tn = {
  field: _1,
  label: x1,
  inputWrapper: w1,
  input: S1,
  passwordInput: k1,
  passwordToggle: C1,
  error: j1,
  errorText: E1
}, Be = ({
  label: r,
  hint: l,
  error: i,
  disabled: c,
  className: d = "",
  id: f,
  type: m,
  ...h
}) => {
  const g = v.useId(), [x, y] = v.useState(!1), _ = f ?? g, S = m === "password" && x ? "text" : m;
  return /* @__PURE__ */ a.jsxs("div", { className: Tn.field, children: [
    r && /* @__PURE__ */ a.jsx(Qi, { label: r, htmlFor: _, className: Tn.label, hint: l }),
    /* @__PURE__ */ a.jsxs("div", { className: Tn.inputWrapper, children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          id: _,
          disabled: c,
          type: S,
          ...h,
          "aria-invalid": i ? !0 : h["aria-invalid"],
          "aria-describedby": [h["aria-describedby"], i ? `${_}-error` : void 0].filter(Boolean).join(" ") || void 0,
          className: `
            ${Tn.input}
            ${m === "password" ? Tn.passwordInput : ""}
            ${i ? Tn.error : ""}
            ${d}
          `
        }
      ),
      m === "password" && /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: Tn.passwordToggle,
          onClick: () => y((C) => !C),
          disabled: c,
          "aria-label": x ? "Hide password" : "Show password",
          children: x ? "🙈" : "👁"
        }
      )
    ] }),
    i && /* @__PURE__ */ a.jsx("span", { id: `${_}-error`, className: Tn.errorText, children: w(i) })
  ] });
}, N1 = "_accordion_5owbj_1", T1 = "_header_5owbj_7", R1 = "_content_5owbj_20", Xo = {
  accordion: N1,
  header: T1,
  content: R1
}, P1 = ({
  title: r,
  defaultOpen: l = !1,
  children: i
}) => {
  const [c, d] = v.useState(l);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: Xo.accordion,
      "data-open": c,
      children: [
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: Xo.header,
            onClick: () => d((f) => !f),
            "aria-expanded": c,
            children: [
              /* @__PURE__ */ a.jsx("span", { children: w(r) }),
              /* @__PURE__ */ a.jsx("span", { className: Xo.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ a.jsx("div", { className: Xo.content, children: i })
      ]
    }
  );
}, A1 = "_wrapper_1fgdg_1", $1 = "_dropdown_1fgdg_10", b1 = "_option_1fgdg_22", I1 = "_title_1fgdg_46", L1 = "_uuid_1fgdg_51", M1 = "_hint_1fgdg_52", Kn = {
  wrapper: A1,
  dropdown: $1,
  option: b1,
  title: I1,
  uuid: L1,
  hint: M1
}, D1 = ({
  label: r = "uuid",
  value: l,
  selectedTitle: i,
  searchSource: c = ["search_assistant_commands"],
  minQueryLength: d = 2,
  onChange: f,
  onSelect: m,
  getSelectedValue: h,
  error: g
}) => {
  const x = mt(), y = JSON.stringify(c), _ = v.useMemo(() => JSON.parse(y), [y]), [S, C] = v.useState(null), R = h ? "" : i || ((S == null ? void 0 : S.uuid) === l ? S.title : "");
  v.useEffect(() => {
    var X;
    if (!l || i || h || (X = de.current) != null && X.contains(document.activeElement)) return;
    let z = !1;
    return (async () => {
      var Y;
      try {
        for (const P of _) {
          const ie = (Y = (await x.searchAssistantCommands(l, P)).data) == null ? void 0 : Y.find((ce) => ce.uuid === l);
          if (ie) {
            z || C(ie);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      z = !0;
    };
  }, [x, l, i, h, _]);
  const [E, N] = v.useState(null), [A, O] = v.useState(0), [D, M] = v.useState([]), [B, I] = v.useState(!1), [J, W] = v.useState(!1), [Q, fe] = v.useState(!1), de = v.useRef(null), [Te, Ee] = v.useState({});
  v.useEffect(() => {
    var X, Y;
    if (!B) return;
    const z = () => {
      var Hr, Pn;
      const P = (Pn = (Hr = de.current) == null ? void 0 : Hr.querySelector("input")) == null ? void 0 : Pn.getBoundingClientRect();
      if (!P) return;
      const F = window.visualViewport, ie = ((F == null ? void 0 : F.offsetTop) ?? 0) + 8, ce = ((F == null ? void 0 : F.offsetTop) ?? 0) + ((F == null ? void 0 : F.height) ?? window.innerHeight) - 8, ve = Math.min(ce, Math.max(ie, P.bottom + 6)), ye = Math.min(ce, Math.max(ie, P.top - 6)), Se = ce - ve, xe = ye - ie, je = Se < 180 && xe > Se, nt = Math.min(260, je ? xe : Se), Rn = Math.max(8, P.left);
      Ee({
        left: Rn,
        width: Math.max(0, Math.min(P.width, window.innerWidth - Rn - 8)),
        top: je ? ye : ve,
        transform: je ? "translateY(-100%)" : void 0,
        maxHeight: nt
      });
    };
    return z(), window.addEventListener("scroll", z, !0), window.addEventListener("resize", z), (X = window.visualViewport) == null || X.addEventListener("resize", z), (Y = window.visualViewport) == null || Y.addEventListener("scroll", z), () => {
      var P, F;
      window.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z), (P = window.visualViewport) == null || P.removeEventListener("resize", z), (F = window.visualViewport) == null || F.removeEventListener("scroll", z);
    };
  }, [B]);
  const he = v.useRef(0), ge = v.useRef(""), Ce = v.useMemo(() => l.trim(), [l]);
  v.useEffect(() => {
    if (!Ce) {
      he.current += 1, N(null), ge.current = "", M([]), I(!1);
      return;
    }
    if (Ce.length < d) {
      he.current += 1, N(null), M([]), I(!1);
      return;
    }
    if (!Q || R) {
      he.current += 1, I(!1), W(!1);
      return;
    }
    if (ge.current === Ce)
      return;
    ge.current = Ce;
    const z = he.current + 1;
    he.current = z;
    const X = window.setTimeout(async () => {
      W(!0), N(null);
      try {
        let Y = [];
        for (const P of _) {
          const F = await x.searchAssistantCommands(Ce, P), ie = Array.isArray(F == null ? void 0 : F.data) ? F.data : [];
          Y.push(...ie);
        }
        if (he.current !== z)
          return;
        M(Y), I(Y.length > 0);
      } catch (Y) {
        he.current === z && (N(Jn(Y)), M([]), I(!1));
      } finally {
        he.current === z && W(!1);
      }
    }, 250);
    return () => window.clearTimeout(X);
  }, [x, Ce, _, d, Q, A, R]);
  const H = (z) => {
    const X = h ? h(z) : z.uuid;
    he.current += 1, C(z), ge.current = "", W(!1), M([]), f(X), m == null || m(z), I(!1);
  };
  return /* @__PURE__ */ a.jsxs("div", { ref: de, className: Kn.wrapper, children: [
    /* @__PURE__ */ a.jsx(
      Be,
      {
        label: r,
        value: R || l,
        autoComplete: "off",
        placeholder: w("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          fe(!1), window.setTimeout(() => I(!1), 150);
        },
        onFocus: () => {
          fe(!0), I(!R && D.length > 0);
        },
        onChange: (z) => {
          C(null), f(z.target.value);
        }
      }
    ),
    B && de.current && Qf.createPortal(
      /* @__PURE__ */ a.jsx("div", { role: "listbox", className: Kn.dropdown, style: Te, children: D.map((z) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: Kn.option,
          onMouseDown: (X) => X.preventDefault(),
          onClick: () => H(z),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: Kn.title, children: z.title || "Без названия" }),
            /* @__PURE__ */ a.jsx("span", { className: Kn.uuid, children: z.uuid }),
            z.mappingType && /* @__PURE__ */ a.jsxs("span", { className: Kn.uuid, children: [
              w("mappingType:"),
              z.mappingType
            ] })
          ]
        },
        z.uuid
      )) }),
      de.current.closest("[data-theme]") ?? de.current
    ),
    /* @__PURE__ */ a.jsx(We, { error: E, busy: J, retry: () => {
      var z, X;
      ge.current = "", (X = (z = de.current) == null ? void 0 : z.querySelector("input")) == null || X.focus(), O((Y) => Y + 1);
    } }),
    J && /* @__PURE__ */ a.jsx("span", { className: Kn.hint, children: w("Поиск...") })
  ] });
}, z1 = "_field_1esqu_1", O1 = "_row_1esqu_5", F1 = "_inputWrapper_1esqu_11", H1 = "_clearButton_1esqu_22", W1 = "_rowError_1esqu_31", Mt = {
  field: z1,
  row: O1,
  inputWrapper: F1,
  clearButton: H1,
  rowError: W1
}, B1 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function xi({ field: r, value: l, error: i, onChange: c }) {
  return Lr() ? /* @__PURE__ */ a.jsx(Be, { label: w(r), value: l, error: i, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ a.jsx(
    D1,
    {
      label: w(r),
      value: l,
      error: i,
      searchSource: [B1[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const U1 = ({
  condition: r,
  index: l,
  defaultOpen: i,
  onChange: c,
  onDelete: d,
  totalCount: f,
  errors: m
}) => {
  const h = r.children_type !== void 0, g = r.children_direct_type !== void 0, x = () => {
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
  return /* @__PURE__ */ a.jsxs(
    P1,
    {
      title: `${w("Условие")} ${l + 1}`,
      defaultOpen: i,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: Mt.field, children: /* @__PURE__ */ a.jsx(
          xi,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: m == null ? void 0 : m.parent_type,
            onChange: (_) => c({ ...r, parent_type: _ })
          }
        ) }),
        /* @__PURE__ */ a.jsx("div", { className: Mt.field, children: h ? /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${Mt.row} ${m != null && m.children_type ? Mt.rowError : ""}`,
            children: [
              /* @__PURE__ */ a.jsx("div", { className: Mt.inputWrapper, children: /* @__PURE__ */ a.jsx(
                xi,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: m == null ? void 0 : m.children_type,
                  onChange: (_) => c({ ...r, children_type: _ })
                }
              ) }),
              /* @__PURE__ */ a.jsx(
                le,
                {
                  type: "button",
                  variant: "ghost",
                  className: Mt.clearButton,
                  "aria-label": w("Убрать второстепенную команду"),
                  onClick: x,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ a.jsx(
          le,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => c({
              ...r,
              children_type: ""
            }),
            children: w("🞢 Добавить второстепенную команду")
          }
        ) }),
        /* @__PURE__ */ a.jsx("div", { className: Mt.field, children: g ? /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${Mt.row} ${m != null && m.children_direct_type ? Mt.rowError : ""}`,
            children: [
              /* @__PURE__ */ a.jsx("div", { className: Mt.inputWrapper, children: /* @__PURE__ */ a.jsx(
                xi,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: m == null ? void 0 : m.children_direct_type,
                  onChange: (_) => c({ ...r, children_direct_type: _ })
                }
              ) }),
              /* @__PURE__ */ a.jsx(
                le,
                {
                  type: "button",
                  variant: "ghost",
                  className: Mt.clearButton,
                  "aria-label": w("Убрать прямую команду"),
                  onClick: y,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ a.jsx(
          le,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => c({
              ...r,
              children_direct_type: ""
            }),
            children: w("🞢 Добавить прямую команду")
          }
        ) }),
        f > 1 && /* @__PURE__ */ a.jsx(
          le,
          {
            type: "button",
            variant: "remove",
            onClick: d,
            children: w("Удалить")
          }
        )
      ]
    }
  );
}, V1 = "_dropdown_3mupk_2", q1 = "_label_3mupk_11", Q1 = "_wrapper_3mupk_19", K1 = "_select_3mupk_23", Y1 = "_arrow_3mupk_65", G1 = "_error_3mupk_85", J1 = "_errorText_3mupk_103", Yn = {
  dropdown: V1,
  label: q1,
  wrapper: Q1,
  select: K1,
  arrow: Y1,
  error: G1,
  errorText: J1
};
function Ar({
  label: r,
  options: l,
  value: i = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: f
}) {
  const m = v.useId();
  return /* @__PURE__ */ a.jsxs("div", { className: Yn.dropdown, children: [
    r && /* @__PURE__ */ a.jsx(
      "label",
      {
        htmlFor: m,
        className: Yn.label,
        children: w(r)
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: Yn.wrapper, children: [
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          id: m,
          className: `
            ${Yn.select}
            ${d ? Yn.error : ""}
          `,
          value: i,
          onChange: (h) => f == null ? void 0 : f(h.target.value),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: w(c) }),
            l.map((h) => /* @__PURE__ */ a.jsx(
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
      /* @__PURE__ */ a.jsx(
        Xf,
        {
          size: 18,
          className: Yn.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ a.jsx("span", { className: Yn.errorText, children: w(d) })
  ] });
}
const X1 = "_form_1ogov_1", Z1 = "_section_1ogov_7", e0 = "_sectionTitle_1ogov_18", t0 = "_conditions_1ogov_27", n0 = "_addCondition_1ogov_33", Pr = {
  form: X1,
  section: Z1,
  sectionTitle: e0,
  conditions: t0,
  addCondition: n0
}, r0 = ({
  open: r,
  feedback: l,
  initialData: i,
  availableScripts: c,
  isEdit: d = !1,
  loading: f = !1,
  onSave: m,
  onCancel: h
}) => {
  const [g, x] = v.useState({
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
    x({
      uuid: (i == null ? void 0 : i.uuid) || "",
      name: (i == null ? void 0 : i.name) || "",
      script_entity_id: (i == null ? void 0 : i.script_entity_id) || "",
      conditions: (i == null ? void 0 : i.conditions) || [
        {
          parent_type: ""
        }
      ]
    }), _({
      conditions: []
    });
  }, [i, r]);
  const S = (A) => {
    x(A);
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
  }, R = (A, O) => {
    const D = [...g.conditions];
    D[A] = O, S({
      ...g,
      conditions: D
    });
  }, E = (A) => {
    const O = g.conditions.filter(
      (D, M) => M !== A
    );
    S({
      ...g,
      conditions: O.length > 0 ? O : [
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
      (O, D) => {
        const M = {};
        O.parent_type.trim() || (M.parent_type = "Обязательное поле"), O.children_type !== void 0 && !O.children_type.trim() && (M.children_type = "Обязательное поле"), O.children_direct_type !== void 0 && !O.children_direct_type.trim() && (M.children_direct_type = "Обязательное поле"), A.conditions[D] = M;
      }
    ), _(A), !A.name && !A.script_entity_id && A.conditions.every(
      (O) => Object.keys(O).length === 0
    );
  };
  return /* @__PURE__ */ a.jsx(
    an,
    {
      feedback: l,
      open: r,
      onClose: h,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ a.jsx(
        le,
        {
          disabled: f,
          onClick: () => {
            N() && (m == null || m(g));
          },
          children: w("Сохранить")
        }
      ),
      children: /* @__PURE__ */ a.jsxs("div", { className: Pr.form, children: [
        /* @__PURE__ */ a.jsxs("div", { className: Pr.section, children: [
          /* @__PURE__ */ a.jsx(
            Be,
            {
              label: w("Название"),
              value: g.name,
              error: y.name,
              onChange: (A) => S({
                ...g,
                name: A.target.value
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Ar,
            {
              label: w("Скрипт"),
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
        /* @__PURE__ */ a.jsxs("div", { className: Pr.section, children: [
          /* @__PURE__ */ a.jsx("h3", { className: Pr.sectionTitle, children: w("Условия") }),
          /* @__PURE__ */ a.jsx("div", { className: Pr.conditions, children: g.conditions.map(
            (A, O, D) => /* @__PURE__ */ a.jsx(
              U1,
              {
                index: O,
                condition: A,
                defaultOpen: !d,
                errors: y.conditions[O],
                onChange: (M) => R(
                  O,
                  M
                ),
                onDelete: () => E(O),
                totalCount: D.length
              },
              O
            )
          ) }),
          /* @__PURE__ */ a.jsx(
            le,
            {
              type: "button",
              className: Pr.addCondition,
              onClick: C,
              children: w("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, s0 = "_container_rqdjx_1", o0 = "_rows_rqdjx_9", a0 = "_hidden_rqdjx_20", l0 = "_overlay_rqdjx_24", i0 = "_card_rqdjx_32", u0 = "_title_rqdjx_51", c0 = "_subtitle_rqdjx_51", d0 = "_srOnly_rqdjx_70", sn = {
  container: s0,
  rows: o0,
  hidden: a0,
  overlay: l0,
  card: i0,
  title: u0,
  subtitle: c0,
  srOnly: d0
};
function Fr({ loading: r, itemCount: l, append: i = !1, children: c }) {
  const d = r && l > 0 && !i, f = r && /* @__PURE__ */ a.jsxs("div", { className: d ? sn.overlay : sn.rows, role: "status", children: [
    /* @__PURE__ */ a.jsx("span", { className: sn.srOnly, children: w("Загрузка...") }),
    Array.from({ length: d ? l : i && l > 0 ? 3 : 10 }, (m, h) => /* @__PURE__ */ a.jsxs("div", { className: sn.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ a.jsx("span", { className: sn.title }),
      /* @__PURE__ */ a.jsx("span", { className: sn.subtitle })
    ] }, h))
  ] });
  return /* @__PURE__ */ a.jsxs("div", { className: sn.container, "aria-busy": r, children: [
    /* @__PURE__ */ a.jsx("div", { className: `${sn.rows} ${d ? sn.hidden : ""}`, "aria-hidden": d || void 0, children: c }),
    f
  ] });
}
const f0 = "_container_9wouv_1", p0 = "_visible_9wouv_20", cf = {
  container: f0,
  visible: p0
}, nr = ({
  children: r,
  offset: l = 10,
  startVisible: i = !1
}) => {
  const c = v.useRef(null), [d, f] = v.useState(i);
  return v.useEffect(() => {
    var _;
    const m = (_ = c.current) == null ? void 0 : _.getRootNode(), h = m instanceof ShadowRoot ? m.host : null, g = () => window.scrollY + ((h == null ? void 0 : h.scrollTop) ?? 0);
    let x = g();
    const y = () => {
      const S = g();
      S !== x && (S > x && S > l ? f(!0) : f(!1), x = S);
    };
    return h == null || h.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("scroll", y, {
      passive: !0
    }), () => {
      h == null || h.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
  }, [l]), /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: c,
      className: `${cf.container} ${d ? cf.visible : ""}`,
      children: r
    }
  );
}, m0 = () => {
  const r = zt(), l = Lr(), i = l ? "Действия удалённых команд" : "Запуск скриптов", c = ot(), [d, f] = v.useState(), [m, h] = v.useState(!1), [g, x] = v.useState(!1), [y, _] = v.useState({ uuid: "", title: "" }), [S, C] = v.useState(!1), {
    query: R,
    setQuery: E,
    error: N,
    retry: A,
    loading: O,
    scripts: D,
    getAvailableScripts: M,
    loadScripts: B,
    saveScript: I,
    updateScript: J,
    getScriptAction: W,
    deleteScriptAction: Q
  } = M_(), fe = Dr(D, O || !!N, B, c), de = { error: r.error ?? N, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), A();
  }) : A }, Te = () => {
    r.clearError(), f(void 0), C(!1), h(!0);
  }, Ee = (H) => {
    x(!0), _(H);
  }, he = (H) => r.run(async () => {
    C(!0);
    const z = await W(
      H
    );
    f(z), h(!0);
  }, { retryable: !0 }), ge = async (H) => {
    await r.run(async () => {
      if (S) {
        if (!H.uuid) return;
        const { uuid: z, ...X } = H;
        await J(H.uuid, X);
      } else
        await I(H);
      h(!1);
    }, { exclusive: !0 });
  }, Ce = (H) => r.run(async () => {
    H && await Q(H);
  }, { exclusive: !0 });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ot,
      {
        search: { value: R, onChange: E },
        title: i
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !m && /* @__PURE__ */ a.jsx(We, { ...de }),
      /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsxs("div", { className: G.heading, children: [
          c ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: w(i) }),
          /* @__PURE__ */ a.jsx("p", { className: G.description, children: w(l ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: c ? /* @__PURE__ */ a.jsx(nr, { children: /* @__PURE__ */ a.jsx(
          le,
          {
            variant: "primary",
            onClick: Te,
            children: w("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(
          le,
          {
            variant: "primary",
            onClick: Te,
            children: w("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ a.jsx(Mr, { value: R, onChange: E })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Fr, { loading: O, itemCount: (D == null ? void 0 : D.script_actions.length) ?? 0, append: c, children: D == null ? void 0 : D.script_actions.map((H) => /* @__PURE__ */ a.jsx(
          zr,
          {
            title: H.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => Ee(H)
          },
          H.uuid
        )) }),
        !O && !N && R.trim() && !(D != null && D.script_actions.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: w("Ничего не найдено") }),
        c ? /* @__PURE__ */ a.jsx("div", { ref: fe, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(a.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(
        Or,
        {
          page: (D == null ? void 0 : D.page) || 1,
          totalPages: (D == null ? void 0 : D.total_pages) || 1,
          onChange: B
        }
      ),
      /* @__PURE__ */ a.jsx(
        p1,
        {
          uuid: y.uuid,
          open: g,
          title: y.title,
          onClose: () => x(!1),
          onEdit: he,
          onDelete: Ce
        }
      ),
      /* @__PURE__ */ a.jsx(
        r0,
        {
          feedback: de,
          open: m,
          initialData: d,
          isEdit: S,
          availableScripts: M(),
          loading: O,
          onCancel: () => h(!1),
          onSave: async (H) => {
            await ge(H);
          }
        }
      )
    ] })
  ] });
}, ip = (r) => ({
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
function up(r) {
  const l = mt(), { query: i, setQuery: c, page: d, loading: f, loadPage: m, updateItems: h, error: g, retry: x } = op(r);
  return { query: i, setQuery: c, error: g, retry: x, loading: f, commands: d, loadCommands: m, saveCommand: (E, N) => l.saveData(N, E), updateCommand: async (E, N) => {
    if (!N.uuid) return;
    const { uuid: A, ...O } = N, D = await l.updateRecord(A, E, O);
    return await m(), D;
  }, deleteCommand: (E, N) => l.deleteRecord(N, E), setCommandStatus: async (E, N, A) => {
    const O = await l.updateRecordStatus(E, N, A);
    return h((D) => D.map((M) => M.uuid === N ? { ...M, status: A } : M)), O;
  }, getCommandDetails: (E, N) => l.getRecord(N, E) };
}
const h0 = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function ma(r, l) {
  const i = h0[r], { query: c, setQuery: d, commands: f, loading: m, loadCommands: h, getCommandDetails: g, saveCommand: x, updateCommand: y, deleteCommand: _, setCommandStatus: S, error: C, retry: R } = up(i.list), E = zt(), [N, A] = v.useState(!1), [O, D] = v.useState(!1), [M, B] = v.useState(l), [I, J] = v.useState(null), W = () => {
    E.clearError(), D(!1), B(l()), A(!0);
  }, Q = (he) => E.run(async () => {
    const ge = await g(i.detail, he);
    D(!0);
    const Ce = { ...ge.data, status: ge.data.status ?? !1 };
    for (const H of ["componentDialog", "subComponentDialog"]) {
      const z = Ce[H];
      z && (z.nextAction = (z.nextAction ?? []).filter(
        (X) => !X.actionTypeComponent || ["children", "custom"].includes(X.actionTypeComponent)
      ));
    }
    B(Ce), A(!0);
  }, { retryable: !0 }), fe = (he, ge) => E.run(async () => {
    i.status && await S(i.status, he, ge);
  }, { exclusive: !0 }), de = (he) => E.run(async () => {
    await _(i.remove, he), await h();
  }, { exclusive: !0 }), Te = () => E.run(async () => {
    await x(i.create, M), A(!1), await h();
  }, { exclusive: !0 }), Ee = () => E.run(async () => {
    await y(i.update, M), A(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: E.error ?? C, busy: E.busy, retry: E.error ? E.retry ?? (() => {
      E.clearError(), R();
    }) : R },
    listError: C,
    commands: f,
    loading: m,
    loadCommands: h,
    modalOpen: N,
    setModalOpen: A,
    isEdit: O,
    formData: M,
    setFormData: B,
    actionsCommand: I,
    setActionsCommand: J,
    openCreateModal: W,
    openEditModal: Q,
    handleToggleStatus: fe,
    handleDelete: de,
    handleCreate: Te,
    handleUpdate: Ee
  };
}
const v0 = "_field_1iloj_1", y0 = "_label_1iloj_8", g0 = "_select_1iloj_14", wi = {
  field: v0,
  label: y0,
  select: g0
}, Xn = ({
  label: r,
  hint: l,
  options: i,
  className: c = "",
  id: d,
  value: f,
  ...m
}) => {
  const h = v.useId(), g = d ?? h, x = f == null ? "" : String(f), y = !x || i.some((_) => _.value === x);
  return /* @__PURE__ */ a.jsxs("div", { className: wi.field, children: [
    r && /* @__PURE__ */ a.jsx(Qi, { label: r, htmlFor: g, className: wi.label, hint: l }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        id: g,
        ...m,
        value: x,
        className: `${wi.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ a.jsx("option", { value: x, children: x }),
          i.map((_) => /* @__PURE__ */ a.jsx("option", { value: _.value, children: w(_.label) }, _.value))
        ]
      }
    )
  ] });
}, _0 = "_field_1aipr_1", x0 = "_label_1aipr_8", w0 = "_textarea_1aipr_14", S0 = "_error_1aipr_46", k0 = "_errorText_1aipr_55", As = {
  field: _0,
  label: x0,
  textarea: w0,
  error: S0,
  errorText: k0
}, Zn = ({
  label: r,
  hint: l,
  error: i,
  className: c = "",
  id: d,
  ...f
}) => {
  const m = v.useId(), h = d ?? m;
  return /* @__PURE__ */ a.jsxs("div", { className: As.field, children: [
    r && /* @__PURE__ */ a.jsx(Qi, { label: r, htmlFor: h, className: As.label, hint: l }),
    /* @__PURE__ */ a.jsx(
      "textarea",
      {
        id: h,
        ...f,
        className: `
          ${As.textarea}
          ${i ? As.error : ""}
          ${c}
        `
      }
    ),
    i && /* @__PURE__ */ a.jsx("span", { className: As.errorText, children: w(i) })
  ] });
};
function Ri({ kind: r, value: l, title: i, onSelect: c }) {
  const d = mt(), [f, m] = v.useState([]), [h, g] = v.useState(!0), [x, y] = v.useState(!1), [_, S] = v.useState(null), [C, R] = v.useState(0), E = v.useRef(null), N = v.useRef(0);
  v.useEffect(() => () => {
    N.current += 1;
  }, []), v.useEffect(() => {
    let M = !1;
    g(!0), S(null);
    const B = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(B.map((I) => d.getAllRecords(I))).then((I) => {
      M || m([...new Map(I.flat().map((J) => [J.uuid, J])).values()]);
    }).catch((I) => {
      M || (S(Jn(I)), E.current = () => R((J) => J + 1));
    }).finally(() => {
      M || g(!1);
    }), () => {
      M = !0;
    };
  }, [d, r, C]), v.useEffect(() => {
    l && i && m((M) => M.map((B) => B.uuid === l ? { ...B, title: i } : B));
  }, [l, i]);
  const A = async (M) => {
    var J;
    if (!M) {
      N.current += 1, S(null), c({ uuid: "", title: "" });
      return;
    }
    const B = f.find((W) => W.uuid === M);
    if (!B) return;
    const I = ++N.current;
    if (S(null), r !== "direct") {
      c(B);
      return;
    }
    y(!0);
    try {
      const W = await d.getRecord(M, "get_assistant_sub_direct_control");
      I === N.current && c({ ...B, mappingType: ((J = W.data.directControl) == null ? void 0 : J.mappingType) ?? "" });
    } catch (W) {
      I === N.current && (S(Jn(W)), E.current = () => {
        A(M);
      });
    } finally {
      I === N.current && y(!1);
    }
  }, O = f.map((M) => ({ value: M.uuid, label: M.title || w("Без названия") }));
  l && !f.some((M) => M.uuid === l) && O.unshift({ value: l, label: i || w("Выбранная команда недоступна") });
  const D = w(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsx(
      Xn,
      {
        label: D,
        "aria-label": D,
        value: l,
        disabled: h || x,
        options: [{ value: "", label: w(h ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...O],
        onChange: (M) => {
          A(M.target.value);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(We, { error: _, busy: h || x, retry: () => {
      var M;
      return (M = E.current) == null ? void 0 : M.call(E);
    } })
  ] });
}
const C0 = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], j0 = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], E0 = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], N0 = "_form_1a1tt_1", T0 = "_field_1a1tt_7", R0 = "_arrayItem_1a1tt_29", P0 = "_logicTabs_1a1tt_46", A0 = "_sectionTitle_1a1tt_85", $0 = "_footerActions_1a1tt_92", b0 = "_phraseMode_1a1tt_106", I0 = "_directTabLabel_1a1tt_122", L0 = "_linkActions_1a1tt_126", Qe = {
  form: N0,
  field: T0,
  arrayItem: R0,
  logicTabs: P0,
  sectionTitle: A0,
  footerActions: $0,
  phraseMode: b0,
  directTabLabel: I0,
  linkActions: L0
}, df = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), cp = ({
  open: r,
  feedback: l,
  onClose: i,
  title: c,
  formData: d,
  setFormData: f,
  onSave: m,
  onBack: h
}) => {
  const [g, x] = v.useState("");
  v.useEffect(() => {
    x("");
  }, [r, d.uuid]);
  const y = () => {
    var C;
    if (!((C = d.title) != null && C.trim())) {
      x("Обязательное поле");
      return;
    }
    x(""), m();
  }, _ = v.useMemo(() => d.directControl ?? df(), [d]), S = (C) => {
    f((R) => ({
      ...R,
      directControl: {
        ...R.directControl ?? df(),
        ...C
      }
    }));
  };
  return /* @__PURE__ */ a.jsx(
    an,
    {
      feedback: l,
      open: r,
      onClose: i,
      onBack: h,
      title: c,
      footer: /* @__PURE__ */ a.jsx("div", { className: Qe.form, children: /* @__PURE__ */ a.jsx(le, { onClick: y, children: w("Сохранить") }) }),
      children: /* @__PURE__ */ a.jsxs("div", { className: Qe.form, children: [
        /* @__PURE__ */ a.jsx(
          Be,
          {
            label: w("Название команды"),
            hint: pa(d.uuid),
            required: !0,
            error: g,
            value: d.title,
            onChange: (C) => f((R) => ({
              ...R,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ a.jsx(
          Be,
          {
            label: w("mappingType"),
            value: _.mappingType,
            onChange: (C) => S({
              mappingType: C.target.value
            })
          }
        ),
        /* @__PURE__ */ a.jsx(
          Xn,
          {
            label: w("valueType"),
            value: _.valueType,
            options: j0,
            onChange: (C) => S({
              valueType: C.target.value
            })
          }
        ),
        _.valueType == "command" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: Qe.field, children: /* @__PURE__ */ a.jsx(
            Zn,
            {
              label: w("Фразы для запуска"),
              hint: w("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам."),
              rows: 6,
              value: (_.voiceCommands ?? []).join(`
`),
              onChange: (C) => S({
                voiceCommands: C.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ a.jsx(
            Ri,
            {
              kind: "nested",
              value: Array.isArray(_.subDirectControl) ? _.subDirectControl.length ? "__inline__" : "" : _.subDirectControl,
              title: Array.isArray(_.subDirectControl) ? w("Сохранённые вложенные команды") : _.subDirectControlTitle,
              onSelect: (C) => S({
                manual: !1,
                subDirectControl: C.uuid,
                subDirectControlTitle: C.title
              })
            }
          )
        ] }) : /* @__PURE__ */ a.jsx(a.Fragment, {})
      ] })
    }
  );
};
function M0({ target: r, onBack: l, onSaved: i }) {
  const c = mt(), d = zt(), [f, m] = v.useState({ title: "" }), [h, g] = v.useState();
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
      y || (m({ ...S.data, status: S.data.status ?? !1 }), g(_));
    }, { retryable: !0 }), () => {
      y = !0;
    };
  }, [c, r.uuid, r.kind, d.run]);
  const x = () => d.run(async () => {
    if (!h) return;
    const y = h === "direct" ? "update_assistant_sub_direct_control" : h === "main" ? "update_assistant_command" : "update_assistant_sub_command", { uuid: _, ...S } = f;
    await c.updateRecord(r.uuid, y, S), i(f), l();
  }, { exclusive: !0 });
  return h ? h === "direct" ? /* @__PURE__ */ a.jsx(
    cp,
    {
      open: !0,
      title: "Редактировать",
      feedback: d,
      formData: f,
      setFormData: m,
      onClose: l,
      onBack: l,
      onSave: x
    }
  ) : /* @__PURE__ */ a.jsx(
    Ki,
    {
      open: !0,
      isEdit: !0,
      feedback: d,
      formData: f,
      setFormData: m,
      componentKey: h === "main" ? "componentDialog" : "subComponentDialog",
      onClose: l,
      onBack: l,
      onSave: x,
      onUpdate: x
    }
  ) : /* @__PURE__ */ a.jsx(an, { open: !0, onClose: l, onBack: l, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ a.jsx("p", { role: "status", children: w("Загрузка...") }) });
}
const D0 = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function z0({ response: r, onChange: l }) {
  const i = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(i) ? "default" : i === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Xn,
      {
        label: w("Типы ответов"),
        "aria-label": w("Типы ответов"),
        value: c,
        options: D0,
        onChange: (d) => l({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ a.jsx(
      Be,
      {
        label: w("Тип результата скрипта"),
        placeholder: w("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => l({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ a.jsx(
      Zn,
      {
        label: w("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => l({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const O0 = "_switchRow_1hmmz_1", F0 = "_input_1hmmz_11", H0 = "_track_1hmmz_22", W0 = "_thumb_1hmmz_33", B0 = "_label_1hmmz_62", $s = {
  switchRow: O0,
  input: F0,
  track: H0,
  thumb: W0,
  label: B0
}, er = ({ label: r, className: l = "", ...i }) => /* @__PURE__ */ a.jsxs("label", { className: `${$s.switchRow} ${l}`, children: [
  /* @__PURE__ */ a.jsx("input", { ...i, type: "checkbox", className: $s.input }),
  /* @__PURE__ */ a.jsx("span", { className: $s.track, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { className: $s.thumb }) }),
  /* @__PURE__ */ a.jsx("span", { className: $s.label, children: w(r) })
] }), U0 = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function V0({ component: r, onOpenCommand: l, updateComponentArray: i, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [m, h] = v.useState("direct"), g = U0.filter((y) => y.key !== "direct" || !r.forwardText), x = r.forwardText && m === "direct" ? "continuations" : m;
  return /* @__PURE__ */ a.jsxs("div", { className: Qe.form, children: [
    /* @__PURE__ */ a.jsx("div", { className: Qe.logicTabs, role: "tablist", "aria-label": w("Настройки логики"), children: g.map((y) => /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: x === y.key ? 0 : -1,
        onKeyDown: (_) => {
          var R, E;
          const S = g.findIndex((N) => N.key === y.key), C = _.key === "ArrowRight" ? (S + 1) % g.length : _.key === "ArrowLeft" ? (S + g.length - 1) % g.length : _.key === "Home" ? 0 : _.key === "End" ? g.length - 1 : -1;
          C < 0 || (_.preventDefault(), h(g[C].key), (E = (R = _.currentTarget.parentElement) == null ? void 0 : R.querySelectorAll('[role="tab"]')[C]) == null || E.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": x === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => h(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ a.jsx("span", { className: Qe.directTabLabel, children: w(y.label).replace(" ", `
`) }) : w(y.label)
      },
      y.key
    )) }),
    x === "continuations" && /* @__PURE__ */ a.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, _) => /* @__PURE__ */ a.jsxs("div", { className: Qe.arrayItem, children: [
        /* @__PURE__ */ a.jsx(
          Xn,
          {
            label: w("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: E0,
            onChange: (S) => i("nextAction", _, {
              actionTypeComponent: S.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ a.jsx(
          Be,
          {
            label: w("Тип результата скрипта"),
            placeholder: w("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (S) => i("nextAction", _, {
              actionType: S.target.value
            })
          }
        ) : /* @__PURE__ */ a.jsx(a.Fragment, {}),
        /* @__PURE__ */ a.jsx(
          Ri,
          {
            kind: "continuation",
            value: y.uuid,
            title: y.title,
            onSelect: (S) => i("nextAction", _, {
              uuid: S.uuid,
              title: S.title ?? "",
              actionTypeComponent: y.actionTypeComponent || "children"
            })
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: Qe.linkActions, children: [
          y.uuid && /* @__PURE__ */ a.jsx(le, { variant: "secondary", onClick: () => l({ uuid: y.uuid, kind: "continuation" }, _), children: w("Перейти к команде") }),
          /* @__PURE__ */ a.jsx(
            le,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextAction", _),
              children: w("Удалить")
            }
          )
        ] })
      ] }, _)),
      /* @__PURE__ */ a.jsx(
        le,
        {
          type: "button",
          variant: "secondary",
          fullWidth: !0,
          leftIcon: /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "+" }),
          onClick: () => c("nextAction", {
            actionTypeComponent: "children",
            actionType: "",
            uuid: "",
            title: ""
          }),
          children: w("Добавить ещё")
        }
      )
    ] }),
    x === "direct" && /* @__PURE__ */ a.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-direct`, "aria-labelledby": `${f}-command-logic-tab-direct`, children: [
      (r.nextDirectControl ?? []).map((y, _) => /* @__PURE__ */ a.jsxs("div", { className: Qe.arrayItem, children: [
        /* @__PURE__ */ a.jsx(
          Ri,
          {
            kind: "direct",
            value: y.uuid,
            title: y.title,
            onSelect: (S) => i("nextDirectControl", _, {
              uuid: S.uuid,
              mappingType: S.mappingType ?? "",
              title: S.title ?? ""
            })
          }
        ),
        y.uuid && /* @__PURE__ */ a.jsx(
          Be,
          {
            label: w("mappingType"),
            hint: w("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: Qe.linkActions, children: [
          y.uuid && /* @__PURE__ */ a.jsx(le, { variant: "secondary", onClick: () => l({ uuid: y.uuid, kind: "direct" }, _), children: w("Перейти к команде") }),
          /* @__PURE__ */ a.jsx(
            le,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextDirectControl", _),
              children: w("Удалить")
            }
          )
        ] })
      ] }, _)),
      /* @__PURE__ */ a.jsx(
        le,
        {
          type: "button",
          variant: "secondary",
          fullWidth: !0,
          leftIcon: /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "+" }),
          onClick: () => c("nextDirectControl", {
            uuid: "",
            actionType: "",
            title: ""
          }),
          children: w("Добавить ещё")
        }
      )
    ] })
  ] });
}
const ff = () => ({
  endStatus: !0,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }]
}), Ki = ({
  open: r,
  feedback: l,
  isEdit: i,
  formData: c,
  componentKey: d,
  setFormData: f,
  onClose: m,
  onBack: h,
  onSave: g,
  onUpdate: x
}) => {
  const _ = mt().getScripts(), S = v.useMemo(() => c[d] ?? ff(), [c, d]);
  v.useEffect(() => {
    r && f((W) => {
      var fe;
      const Q = W[d];
      return (fe = Q == null ? void 0 : Q.nextAction) != null && fe.some((de) => !de.actionTypeComponent) ? { ...W, [d]: {
        ...Q,
        nextAction: Q.nextAction.map((de) => ({ ...de, actionTypeComponent: de.actionTypeComponent || "children" }))
      } } : W;
    });
  }, [r, c.uuid, d, f]);
  const [C, R] = v.useState(null);
  v.useEffect(() => {
    r || R(null);
  }, [r]);
  const [E, N] = v.useState(!1);
  v.useEffect(() => {
    N(!1), O({});
  }, [r, c.uuid, d]);
  const [A, O] = v.useState({}), D = (W) => {
    f((Q) => ({
      ...Q,
      [d]: {
        ...Q[d] ?? ff(),
        ...W
      }
    }));
  }, M = (W, Q, fe) => {
    const de = [...S[W] ?? []];
    de[Q] = { ...de[Q], ...fe }, D({
      [W]: de
    });
  }, B = (W, Q) => {
    D({
      [W]: [...S[W] ?? [], Q]
    });
  }, I = (W, Q) => {
    D({
      [W]: (S[W] ?? []).filter(
        (fe, de) => de !== Q
      )
    });
  }, J = () => {
    const W = {};
    return c.title.trim() || (W.title = "Обязательное поле"), O(W), Object.keys(W).length === 0;
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      an,
      {
        suspended: !!C,
        feedback: l,
        open: r,
        onClose: m,
        onBack: h,
        title: E ? "Настроить логику" : i ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ a.jsx("div", { className: Qe.form, children: E ? /* @__PURE__ */ a.jsx(le, { variant: "secondary", onClick: () => N(!1), children: w("Назад") }) : /* @__PURE__ */ a.jsxs("div", { className: Qe.footerActions, children: [
          /* @__PURE__ */ a.jsx(le, { variant: "secondary", onClick: () => N(!0), children: w("Настроить логику") }),
          /* @__PURE__ */ a.jsx(le, { onClick: () => {
            J() && (i ? x() : g());
          }, children: w(i ? "Обновить" : "Сохранить") })
        ] }) }),
        children: E ? /* @__PURE__ */ a.jsx(
          V0,
          {
            onOpenCommand: (W, Q) => R({ ...W, index: Q }),
            component: S,
            updateComponentArray: M,
            addComponentArrayItem: B,
            removeComponentArrayItem: I
          }
        ) : /* @__PURE__ */ a.jsxs("div", { className: Qe.form, children: [
          /* @__PURE__ */ a.jsx(
            Be,
            {
              label: w("Название команды"),
              hint: pa(c.uuid),
              value: c.title,
              error: A.title,
              onChange: (W) => f({
                ...c,
                title: W.target.value
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Xn,
            {
              label: w("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(S.answerType) ? "script_response" : S.answerType,
              options: C0,
              onChange: (W) => D({
                answerType: W.target.value
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Xn,
            {
              label: w("Скрипт Home Assistant"),
              value: S.script_entity_id ?? "__legacy__",
              options: [
                ...S.script_entity_id === void 0 ? [{ label: w("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: w("Не запускать скрипт"), value: "" },
                ..._.map((W) => ({ label: W.name, value: W.entity_id }))
              ],
              onChange: (W) => D({ script_entity_id: W.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ a.jsxs("div", { className: Qe.phraseMode, children: [
            /* @__PURE__ */ a.jsx(
              er,
              {
                label: w("Отправить команду как есть"),
                checked: !!S.forwardText,
                onChange: (W) => D({ forwardText: W.target.checked })
              }
            ),
            /* @__PURE__ */ a.jsx(aa, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && S.forwardText) && /* @__PURE__ */ a.jsx("div", { className: Qe.field, children: /* @__PURE__ */ a.jsx(
            Zn,
            {
              label: w("Фразы для запуска"),
              value: (S.voiceCommands == null ? [] : typeof S.voiceCommands != "object" ? S == null ? void 0 : S.voiceCommands.split(";") : S == null ? void 0 : S.voiceCommands).join(`
`),
              onChange: (W) => D({
                voiceCommands: W.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ a.jsxs("section", { className: Qe.form, "aria-label": w("Ответы"), children: [
            /* @__PURE__ */ a.jsx("h3", { className: Qe.sectionTitle, children: w("Ответы") }),
            (S.voiceResponseArray ?? []).map((W, Q) => /* @__PURE__ */ a.jsxs("div", { className: Qe.arrayItem, children: [
              /* @__PURE__ */ a.jsx(
                z0,
                {
                  response: W,
                  onChange: (fe) => M("voiceResponseArray", Q, fe)
                }
              ),
              /* @__PURE__ */ a.jsx(
                le,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => I("voiceResponseArray", Q),
                  children: w("Удалить")
                }
              )
            ] }, Q)),
            /* @__PURE__ */ a.jsx(
              le,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "+" }),
                onClick: () => B("voiceResponseArray", {
                  actionType: "default",
                  voiceResponse: ""
                }),
                children: w("Добавить ещё")
              }
            )
          ] })
        ] })
      }
    ),
    C && /* @__PURE__ */ a.jsx(
      M0,
      {
        target: C,
        onBack: () => R(null),
        onSaved: (W) => {
          var Q;
          C.kind === "direct" ? M("nextDirectControl", C.index, { title: W.title, mappingType: ((Q = W.directControl) == null ? void 0 : Q.mappingType) ?? "" }) : M("nextAction", C.index, { title: W.title });
        }
      },
      `${C.kind}-${C.uuid}`
    )
  ] });
}, ha = ({ command: r, open: l, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ a.jsx(qi, { open: l, title: r.title, uuid: r.uuid, onClose: i, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, q0 = () => ip("componentDialog"), Q0 = () => {
  const r = ot(), {
    query: l,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: m,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: x,
    isEdit: y,
    formData: _,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: R,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: D,
    handleUpdate: M
  } = ma("main", q0), B = Dr(f, m || !!d, h, r);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ot,
      {
        search: { value: l, onChange: i },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(We, { ...c }),
      /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: w("Основные команды") }) }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(nr, { children: /* @__PURE__ */ a.jsx(le, { variant: "primary", onClick: E, children: w("Добавить сценарий") }) }) : /* @__PURE__ */ a.jsx(le, { variant: "primary", onClick: E, children: w("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ a.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Fr, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ a.jsx(
          zr,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => R(I)
          },
          I.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: w("Ничего не найдено") }),
        r ? /* @__PURE__ */ a.jsx("div", { ref: B, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(a.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(
        Or,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => h(I)
        }
      ),
      /* @__PURE__ */ a.jsx(
        Ki,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: _,
          componentKey: "componentDialog",
          setFormData: S,
          onClose: () => x(!1),
          onSave: D,
          onUpdate: M
        }
      ),
      /* @__PURE__ */ a.jsx(
        ha,
        {
          open: !!C,
          command: C,
          onClose: () => R(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, K0 = () => ip("subComponentDialog"), Y0 = () => {
  const r = ot(), {
    query: l,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: m,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: x,
    isEdit: y,
    formData: _,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: R,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: D,
    handleUpdate: M
  } = ma("sub", K0), B = Dr(f, m || !!d, h, r);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ot,
      {
        search: { value: l, onChange: i },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(We, { ...c }),
      r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: w("Второстепенные команды") }) }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(nr, { children: /* @__PURE__ */ a.jsx(le, { variant: "primary", onClick: E, children: w("Добавить сценарий") }) }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(le, { variant: "primary", onClick: E, children: w("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ a.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Fr, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ a.jsx(
          zr,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => R(I)
          },
          I.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: w("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ a.jsx("div", { ref: B, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(
        Or,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => h(I)
        }
      ),
      /* @__PURE__ */ a.jsx(
        Ki,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: _,
          componentKey: "subComponentDialog",
          setFormData: S,
          onClose: () => x(!1),
          onSave: D,
          onUpdate: M
        }
      ),
      /* @__PURE__ */ a.jsx(
        ha,
        {
          open: !!C,
          command: C,
          onClose: () => R(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, G0 = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], la = () => {
  const { pathname: r } = pt(), l = Di();
  return /* @__PURE__ */ a.jsx("div", { className: G.innerTabs, role: "group", "aria-label": w("Раздел прямых команд"), children: G0.map((i) => /* @__PURE__ */ a.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === i.path,
      className: `${G.innerTab} ${r === i.path ? G.activeInnerTab : ""}`,
      onClick: () => l(i.path),
      children: w(i.label)
    },
    i.path
  )) });
}, J0 = () => ({
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
}), X0 = () => {
  const r = ot(), {
    query: l,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: m,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: x,
    isEdit: y,
    formData: _,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: R,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: D,
    handleUpdate: M
  } = ma("direct", J0), B = Dr(f, m || !!d, h, r);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ot,
      {
        search: { value: l, onChange: i },
        beforeSearch: /* @__PURE__ */ a.jsx(la, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(We, { ...c }),
      r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsxs("div", { className: G.heading, children: [
          r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: w("Прямые команды") }),
          !r && /* @__PURE__ */ a.jsx(la, {})
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(nr, { children: /* @__PURE__ */ a.jsx(le, { variant: "primary", onClick: E, children: w("Добавить сценарий") }) }) : /* @__PURE__ */ a.jsx(le, { variant: "primary", onClick: E, children: w("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ a.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Fr, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ a.jsx(
          zr,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => R(I)
          },
          I.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: w("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ a.jsx("div", { ref: B, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(
        Or,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => h(I)
        }
      ),
      /* @__PURE__ */ a.jsx(
        cp,
        {
          feedback: c,
          open: g,
          onClose: () => x(!1),
          title: w(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: _,
          setFormData: S,
          onSave: y ? M : D
        }
      ),
      /* @__PURE__ */ a.jsx(
        ha,
        {
          open: !!C,
          command: C,
          onClose: () => R(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, Z0 = "_form_mn1ml_1", ex = "_arrayItem_mn1ml_8", tx = "_sectionTitle_mn1ml_25", Zo = {
  form: Z0,
  arrayItem: ex,
  sectionTitle: tx
}, nx = ({
  open: r,
  feedback: l,
  onClose: i,
  title: c,
  formData: d,
  setFormData: f,
  onSave: m
}) => {
  const [h, g] = v.useState("");
  v.useEffect(() => {
    g("");
  }, [r, d.uuid]);
  const x = () => {
    var E;
    if (!((E = d.title) != null && E.trim())) {
      g("Обязательное поле");
      return;
    }
    g(""), m();
  }, y = v.useMemo(
    () => d.subDirectControl ?? [],
    [d]
  ), _ = (E) => {
    f((N) => ({
      ...N,
      subDirectControl: E
    }));
  }, S = (E, N) => {
    const A = [...y];
    A[E] = {
      ...A[E],
      ...N
    }, _(A);
  }, C = () => {
    _([
      ...y,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, R = (E) => {
    _(
      y.filter((N, A) => A !== E)
    );
  };
  return /* @__PURE__ */ a.jsx(
    an,
    {
      feedback: l,
      open: r,
      onClose: i,
      title: c,
      footer: /* @__PURE__ */ a.jsx(le, { onClick: x, children: w("Сохранить") }),
      children: /* @__PURE__ */ a.jsxs("div", { className: Zo.form, children: [
        /* @__PURE__ */ a.jsx(
          Be,
          {
            label: w("Название команды"),
            hint: pa(d.uuid),
            required: !0,
            error: h,
            value: d.title,
            onChange: (E) => f((N) => ({
              ...N,
              title: E.target.value
            }))
          }
        ),
        /* @__PURE__ */ a.jsxs("section", { className: Zo.form, "aria-label": w("Варианты вложенных команд"), children: [
          /* @__PURE__ */ a.jsx("h3", { className: Zo.sectionTitle, children: w("Варианты вложенных команд") }),
          y.map((E, N) => /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: Zo.arrayItem,
              children: [
                /* @__PURE__ */ a.jsx(
                  Be,
                  {
                    label: w("Код значения"),
                    value: E.subMappingType ?? "",
                    onChange: (A) => S(N, {
                      subMappingType: A.target.value
                    })
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  Zn,
                  {
                    label: w("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(E.subVoiceCommands) ? E.subVoiceCommands : []).join(`
`),
                    onChange: (A) => S(N, {
                      subVoiceCommands: A.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  le,
                  {
                    type: "button",
                    variant: "remove",
                    onClick: () => R(N),
                    children: w("Удалить")
                  }
                )
              ]
            },
            N
          )),
          /* @__PURE__ */ a.jsx(
            le,
            {
              type: "button",
              variant: "secondary",
              fullWidth: !0,
              leftIcon: /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "+" }),
              onClick: C,
              children: w("Добавить ещё")
            }
          )
        ] })
      ] })
    }
  );
}, rx = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), sx = () => {
  const r = ot(), {
    query: l,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: m,
    loadCommands: h,
    modalOpen: g,
    setModalOpen: x,
    isEdit: y,
    formData: _,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: R,
    openCreateModal: E,
    openEditModal: N,
    handleDelete: A,
    handleCreate: O,
    handleUpdate: D
  } = ma("template", rx), M = Dr(f, m || !!d, h, r);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ot,
      {
        search: { value: l, onChange: i },
        beforeSearch: /* @__PURE__ */ a.jsx(la, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(We, { ...c }),
      !r && /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsxs("div", { className: G.heading, children: [
          r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: w("Вложенные команды") }),
          !r && /* @__PURE__ */ a.jsx(la, {})
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(nr, { children: /* @__PURE__ */ a.jsx(le, { variant: "primary", onClick: E, children: w("Добавить сценарий") }) }) : /* @__PURE__ */ a.jsx(le, { variant: "primary", onClick: E, children: w("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ a.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Fr, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((B) => /* @__PURE__ */ a.jsx(
          zr,
          {
            title: B.title,
            onClick: () => R(B)
          },
          B.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: w("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: M,
          className: G.listSentinel
        }
      ) : /* @__PURE__ */ a.jsx(
        Or,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (B) => h(
            B
          )
        }
      ),
      /* @__PURE__ */ a.jsx(
        nx,
        {
          feedback: c,
          open: g,
          onClose: () => x(!1),
          title: y ? "Редактировать" : "Создать",
          formData: _,
          setFormData: S,
          onSave: y ? D : O
        }
      ),
      /* @__PURE__ */ a.jsx(
        ha,
        {
          open: !!C,
          command: C,
          onClose: () => R(null),
          onDelete: A,
          onEdit: (B) => N(B)
        }
      )
    ] })
  ] });
}, ox = "_form_15zw4_1", ax = "_actions_15zw4_8", pf = {
  form: ox,
  actions: ax
};
function lx() {
  const r = mt(), l = zt(), [i, c] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [m, h] = v.useState(""), [g, x] = v.useState(!1), [y, _] = v.useState(!1);
  v.useEffect(() => {
    let R = !0;
    return l.run(async () => {
      const E = await r.getData("get_whisper_prompt");
      R && (c(E), h(E.url), x(!0));
    }, { retryable: !0 }), () => {
      R = !1;
    };
  }, [r, l.run]);
  const S = (R) => {
    c((E) => ({ ...E, ...R })), _(!1);
  }, C = (R) => l.run(async () => {
    const E = await r.saveData({
      url: i.url,
      token: d,
      ...R ? { initial_prompt: i.initial_prompt } : {}
    }, R ? "save_whisper_prompt" : "read_whisper_prompt");
    c((N) => ({ ...N, initial_prompt: E.initial_prompt, has_token: R ? !0 : N.has_token })), _(R), R && (h(i.url), f(""));
  }, { exclusive: !0 });
  return /* @__PURE__ */ a.jsxs("section", { className: pf.form, children: [
    /* @__PURE__ */ a.jsx(We, { ...l }),
    !g && !l.error && /* @__PURE__ */ a.jsx(Ir, {}),
    g && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        Be,
        {
          label: w("Адрес API Whisper"),
          hint: w("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300."),
          placeholder: "http://192.168.1.10:10301",
          value: i.url,
          disabled: l.busy,
          onChange: (R) => S({ url: R.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        Be,
        {
          label: w("Токен API Whisper"),
          hint: w("Значение WHISPER_PROMPT_TOKEN из .env контейнера, без префикса Bearer. Сохранённый токен не показывается. При смене адреса укажите токен заново."),
          type: "password",
          value: d,
          disabled: l.busy,
          autoComplete: "new-password",
          placeholder: i.has_token && i.url === m ? w("Токен сохранён; оставьте пустым, чтобы сохранить его") : "",
          onChange: (R) => {
            f(R.target.value), _(!1);
          }
        }
      ),
      /* @__PURE__ */ a.jsx(
        Zn,
        {
          label: w("Промпт распознавания"),
          hint: w("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Например: «Насыпь еды. Запусти пылесос. Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После сохранения применяется со следующего распознавания, без перезапуска модели."),
          rows: 10,
          maxLength: 16e3,
          value: i.initial_prompt,
          disabled: l.busy,
          onChange: (R) => S({ initial_prompt: R.target.value })
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: pf.actions, children: [
        /* @__PURE__ */ a.jsx(le, { variant: "secondary", disabled: l.busy || !i.url.trim(), onClick: () => void C(!1), children: w("Прочитать из Whisper") }),
        /* @__PURE__ */ a.jsx(le, { disabled: l.busy || !i.url.trim(), onClick: () => void C(!0), children: w("Сохранить и применить") })
      ] }),
      y && /* @__PURE__ */ a.jsx("p", { role: "status", children: w("Сохранено и применено в Whisper. Перезапуск контейнера не нужен.") })
    ] })
  ] });
}
const mf = {
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function dp(r) {
  return r.actionType && mf[r.actionType] ? w(mf[r.actionType]) : r.title;
}
const ix = "_form_1i0x1_1", ux = {
  form: ix
}, cx = ({
  open: r,
  feedback: l,
  isEdit: i,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: m
}) => {
  var _, S;
  const h = c, g = mt().getScripts(), x = h.actionType === "default_main" && !!h.forwardCommandToServer, y = (C) => {
    d((R) => ({
      ...R,
      ...C
    }));
  };
  return /* @__PURE__ */ a.jsx(
    an,
    {
      feedback: l,
      open: r,
      onClose: f,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ a.jsx(le, { onClick: m, children: w("Обновить") }),
      children: /* @__PURE__ */ a.jsxs("div", { className: ux.form, children: [
        /* @__PURE__ */ a.jsx(
          Be,
          {
            label: w("Название команды"),
            hint: pa(c.uuid),
            value: dp(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ a.jsx(
          er,
          {
            label: w("Завершать диалог"),
            checked: !!h.endStatus,
            onChange: (C) => y({
              endStatus: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && /* @__PURE__ */ a.jsx(
          er,
          {
            label: w("Передать команду серверу"),
            checked: !!h.forwardCommandToServer,
            onChange: (C) => y({
              forwardCommandToServer: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && h.forwardCommandToServer && /* @__PURE__ */ a.jsx(
          Xn,
          {
            label: w("Скрипт Home Assistant"),
            value: h.script_entity_id ?? "",
            options: [
              { value: "", label: w("Использовать существующие сценарии") },
              ...g.map((C) => ({ value: C.entity_id, label: C.name })),
              ...h.script_entity_id && !g.some((C) => C.entity_id === h.script_entity_id) ? [{ value: h.script_entity_id, label: h.script_entity_id }] : []
            ],
            onChange: (C) => y({ script_entity_id: C.target.value })
          }
        ),
        x ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            Be,
            {
              label: w("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: w("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ a.jsx(
            Zn,
            {
              rows: 8,
              label: w("Текст озвучки"),
              hint: w("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: w("Например: ${reply}"),
              value: ((S = (_ = h.voiceResponseArray) == null ? void 0 : _.find((C) => C.actionType === "success")) == null ? void 0 : S.voiceResponse) ?? "",
              onChange: (C) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: C.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ a.jsx(
          Zn,
          {
            rows: 8,
            "aria-label": w("Ответное сообщение"),
            label: w("Ответное сообщение"),
            value: h.voiceResponse,
            onChange: (C) => y({
              voiceResponse: C.target.value
            })
          }
        )
      ] })
    }
  );
}, dx = () => {
  const r = fa(), [l, i] = v.useState("responses"), c = r && l === "whisper", d = c ? "Промпт распознавания" : "Ответы по умолчанию", f = r ? /* @__PURE__ */ a.jsx("div", { className: G.innerTabs, role: "group", "aria-label": w("Настройки команд"), children: [["responses", "Ответы по умолчанию"], ["whisper", "Промпт распознавания"]].map(
    ([Q, fe]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        "aria-pressed": l === Q,
        className: `${G.innerTab} ${l === Q ? G.activeInnerTab : ""}`,
        onClick: () => i(Q),
        children: w(fe)
      },
      Q
    )
  ) }) : null, m = zt(), h = ot(), [g, x] = v.useState(!1), [y, _] = v.useState(!1), [S, C] = v.useState({ title: "" }), {
    error: R,
    retry: E,
    loading: N,
    loadCommands: A,
    getCommandDetails: O,
    updateCommand: D,
    commands: M
  } = up("get_assistant_settings_short"), B = Dr(M, N || !!R, A, h), I = { error: m.error ?? R, busy: m.busy, retry: m.error ? m.retry ?? (() => {
    m.clearError(), E();
  }) : E }, J = (Q) => m.run(async () => {
    _(!0);
    const fe = await O("get_assistant_setting", Q.uuid);
    C(fe.data), x(!0);
  }, { retryable: !0 }), W = () => m.run(async () => {
    await D("update_assistant_setting", S), x(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ot,
      {
        title: d,
        beforeSearch: f
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(We, { ...I }),
      h ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsx("div", { className: `${G.header} ${G.collectionHeader}`, children: /* @__PURE__ */ a.jsx("div", { className: G.headerTop, children: /* @__PURE__ */ a.jsx("div", { className: G.heading, children: !h && /* @__PURE__ */ a.jsx("h1", { className: G.title, children: w(d) }) }) }) }),
      !h && f,
      c ? /* @__PURE__ */ a.jsx(lx, {}) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { className: G.list, children: /* @__PURE__ */ a.jsx(Fr, { loading: N, itemCount: (M == null ? void 0 : M.data.length) ?? 0, append: h, children: M == null ? void 0 : M.data.map((Q) => /* @__PURE__ */ a.jsx(
          zr,
          {
            title: dp(Q),
            onClick: () => J(Q)
          },
          Q.uuid
        )) }) }),
        h ? /* @__PURE__ */ a.jsx("div", { ref: B, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(
          Or,
          {
            page: (M == null ? void 0 : M.page) || 1,
            totalPages: (M == null ? void 0 : M.total_pages) || 1,
            onChange: (Q) => A(Q)
          }
        ),
        /* @__PURE__ */ a.jsx(
          cx,
          {
            feedback: I,
            open: g,
            isEdit: y,
            formData: S,
            setFormData: C,
            onClose: () => x(!1),
            onUpdate: W
          }
        )
      ] })
    ] })
  ] });
}, fx = (r, l) => {
  const i = new Blob([JSON.stringify(l, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(i), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class Nt extends Error {
}
const fp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, Qt = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function px(r, l) {
  if (l === "settings") {
    const d = await r.getData("get_settings"), f = Qt(d) && Qt(d.result) ? d.result : d;
    if (!Qt(f)) throw new Nt("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "remout", "timer_alarm"].filter((h) => h in f).map((h) => [h, f[h]]));
  }
  if (l === "scenarios") return r.getData("export_command_bundle");
  const i = fp[l], c = await r.getAllRecords(i.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, i.detail);
    return Qt(f) ? f.data : void 0;
  }));
}
function mx(r, l) {
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw new Nt("Некорректный JSON-файл.");
  }
  if (l === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", remout: "object", timer_alarm: "object" };
    if (!Qt(i) || !Object.keys(i).length || Object.keys(i).some((f) => !d[f] || typeof i[f] !== d[f])) throw new Nt("Файл не содержит корректные настройки.");
    if (i.theme !== void 0 && (typeof i.theme != "string" || !["dark", "light"].includes(i.theme))) throw new Nt("Файл не содержит корректные настройки.");
    for (const [f, m] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in i && (!Qt(i[f]) || Object.entries(i[f]).some(([h, g]) => !m.includes(h) || typeof g != "string"))) throw new Nt("Файл не содержит корректные настройки.");
    return i;
  }
  if (l === "scenarios" && Qt(i)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (i.format !== "ha-dialog-ui-commands" || i.version !== 1 || Object.keys(i).length !== 7 || d.some((f) => !Array.isArray(i[f]))) throw new Nt("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const m = /* @__PURE__ */ new Set(), h = i[f];
      if (!Array.isArray(h)) throw new Nt("Ожидается массив записей JSON.");
      for (const g of h) {
        if (!Qt(g) || typeof g.uuid != "string" || !g.uuid.trim() || m.has(g.uuid) || typeof g.title != "string") throw new Nt("Некорректные или повторяющиеся ID записей.");
        m.add(g.uuid);
      }
    }
    return i;
  }
  if (!Array.isArray(i)) throw new Nt("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of i) {
    if (!Qt(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new Nt("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(l === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && Qt(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new Nt("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return i;
}
async function hx(r, l, i) {
  const c = mx(i, l);
  return await r.saveData(c, l === "settings" ? "import_settings" : l === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : fp[l].import), c;
}
const vx = "_grid_fc8hl_1", yx = "_card_fc8hl_8", gx = "_actions_fc8hl_23", _x = "_description_fc8hl_29", xx = "_page_fc8hl_36", bs = {
  grid: vx,
  card: yx,
  actions: gx,
  description: _x,
  page: xx
}, wx = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], Sx = () => {
  const r = mt(), l = Lr(), i = ot(), [c, d] = v.useState(!1), [f, m] = v.useState(""), [h, g] = v.useState(!1), x = v.useRef(null), y = v.useRef(null), _ = v.useRef("scripts"), S = async (C, R = !1) => {
    x.current = R ? C : null, d(!0), m(""), g(!1);
    try {
      await C();
    } catch (E) {
      g(!0), m(E instanceof Nt ? E.message : Jn(E));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Ot, { title: w("Импорт и экспорт") }),
    /* @__PURE__ */ a.jsxs("div", { className: `${G.page} ${bs.page}`, children: [
      /* @__PURE__ */ a.jsx(Ft, {}),
      !i && /* @__PURE__ */ a.jsx("h1", { children: w("Импорт и экспорт") }),
      /* @__PURE__ */ a.jsx("div", { className: bs.grid, children: wx.filter((C) => C.kind === "scripts" ? l === !0 : C.kind !== "scenarios" || l === !1).map((C) => /* @__PURE__ */ a.jsxs("section", { className: bs.card, children: [
        /* @__PURE__ */ a.jsx("h2", { children: w(C.title) }),
        /* @__PURE__ */ a.jsx("p", { className: bs.description, children: w(C.description) }),
        /* @__PURE__ */ a.jsxs("div", { className: bs.actions, children: [
          /* @__PURE__ */ a.jsx(le, { disabled: c, onClick: () => S(async () => {
            fx(`ha-dialog-ui-${C.kind}.json`, await px(r, C.kind));
          }, !0), children: w(C.download) }),
          /* @__PURE__ */ a.jsx(le, { variant: "secondary", disabled: c, onClick: () => {
            var R;
            _.current = C.kind, (R = y.current) == null || R.click();
          }, children: w(C.upload) })
        ] })
      ] }, C.kind)) }),
      /* @__PURE__ */ a.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (C) => {
        var N;
        const R = (N = C.target.files) == null ? void 0 : N[0], E = _.current;
        C.target.value = "", R && S(async () => {
          const A = await hx(r, E, await R.text());
          E === "settings" && A !== null && typeof A == "object" && !Array.isArray(A) && (typeof A.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: A.theme })), typeof A.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(sa, { detail: A.active_remout }))), m("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ a.jsx("p", { role: "status", children: w("Обработка файла...") }),
      /* @__PURE__ */ a.jsx(We, { error: h ? f : null, busy: c, retry: x.current ? () => {
        x.current && S(x.current, !0);
      } : void 0 }),
      !h && f && /* @__PURE__ */ a.jsx("p", { role: "status", children: w(f) })
    ] })
  ] });
};
function kx() {
  const r = mt(), [l, i] = v.useState(null), [c, d] = v.useState([]), f = zt(), m = zt(), h = v.useCallback(() => f.run(async () => {
    i(await r.getSettings());
  }, { retryable: !0 }), [r, f.run]), g = v.useCallback(() => m.run(async () => {
    d(await r.getLocalMusicOptions());
  }, { retryable: !0 }), [r, m.run]);
  v.useEffect(() => {
    h();
  }, [h]), v.useEffect(() => {
    g();
  }, [g]);
  const x = async (y) => {
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(Ei, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(sa, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: l, musicOptions: c, saveSettings: x, settingsFeedback: f, musicFeedback: m };
}
const Cx = "_form_1ijxr_1", jx = "_field_1ijxr_7", Ex = "_input_1ijxr_13", Nx = "_label_1ijxr_29", Tx = "_help_1ijxr_35", Rx = "_toggleHelp_1ijxr_40", tt = {
  form: Cx,
  field: jx,
  input: Ex,
  label: Nx,
  help: Tx,
  toggleHelp: Rx
}, Px = ({ data: r, onChange: l }) => {
  const i = (c, d) => {
    l({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ a.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ a.jsx(Be, { label: w("Base URL"), value: r.base_url ?? "", placeholder: w("http://192.168.31.83:9379"), onChange: (c) => i("base_url", c.target.value) }),
    /* @__PURE__ */ a.jsx(Be, { label: w("Token"), value: r.token ?? "", placeholder: w("Bearer ..."), onChange: (c) => i("token", c.target.value) })
  ] });
}, Ax = ({ data: r, musicOptions: l, musicUnavailable: i, onChange: c }) => {
  const d = (m, h) => {
    c({
      ...r,
      [m]: h
    });
  }, f = (m, h, g = "") => {
    const x = l.some((y) => y.value === g);
    return /* @__PURE__ */ a.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ a.jsx("span", { className: tt.label, children: w(m) }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          className: tt.input,
          value: g,
          onChange: (y) => d(h, y.target.value),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: w("Не выбрано") }),
            g && !x && /* @__PURE__ */ a.jsx("option", { value: g, children: g }),
            l.map((y) => /* @__PURE__ */ a.jsx("option", { value: y.value, children: y.label }, y.value))
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ a.jsxs("div", { className: tt.form, children: [
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
    l.length === 0 && !i && /* @__PURE__ */ a.jsx("span", { className: tt.help, children: w("Музыка на сервере не найдена.") })
  ] });
}, $x = ({ data: r, onChange: l }) => {
  const i = Nf(), c = (d, f) => {
    l({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ a.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ a.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ a.jsx("span", { className: tt.label, children: w("Язык интерфейса") }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          className: tt.input,
          value: i,
          onChange: (d) => Yh(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ a.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      Be,
      {
        label: w("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => c("client_id", d.target.value),
        placeholder: w("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ a.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ a.jsx("span", { className: tt.label, children: w("Theme") }),
      /* @__PURE__ */ a.jsxs("select", { className: tt.input, value: r.theme ?? "dark", onChange: (d) => c("theme", d.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "dark", children: w("dark") }),
        /* @__PURE__ */ a.jsx("option", { value: "light", children: w("light") })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(er, { label: w("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, bx = ({ data: r, onChange: l }) => {
  const i = (c, d) => l({ ...r, [c]: d });
  return /* @__PURE__ */ a.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ a.jsxs("div", { className: tt.toggleHelp, children: [
      /* @__PURE__ */ a.jsx(er, { label: w("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => i("active_remout", c.target.checked) }),
      /* @__PURE__ */ a.jsx(aa, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: tt.toggleHelp, children: [
      /* @__PURE__ */ a.jsx(er, { label: w("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ a.jsx(aa, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ a.jsx(
      Be,
      {
        label: w("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => i("api_commands_token", c.target.value),
        placeholder: w("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, ia = {
  base_url: "",
  token: ""
}, Ix = {
  global_music_timer: "",
  global_music_alarm: ""
}, hf = {
  remout: ia,
  timer_alarm: Ix,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, Lx = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), Mx = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), Dx = (r) => ({
  remout: Lx(r == null ? void 0 : r.remout),
  timer_alarm: Mx(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), vf = (r, l) => {
  const i = {};
  return Object.keys(r).forEach((c) => {
    const d = c;
    r[d] !== l[d] && (i[d] = r[d]);
  }), i;
}, yf = (r, l) => {
  const i = {}, c = vf(r.timer_alarm, l.timer_alarm);
  if (Object.keys(c).length > 0 && (i.timer_alarm = c), r.theme !== l.theme && (i.theme = r.theme), r.is_admin !== l.is_admin && (i.is_admin = r.is_admin), r.active_remout !== l.active_remout && (i.active_remout = r.active_remout), r.client_id !== l.client_id && (i.client_id = r.client_id), r.api_commands_enabled !== l.api_commands_enabled && (i.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== l.api_commands_token && (i.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = vf(r.remout ?? ia, l.remout ?? ia);
    Object.keys(d).length > 0 && (i.remout = d);
  }
  return i;
}, zx = () => {
  const r = ot(), [l, i] = v.useState(hf), c = zt(), [d, f] = v.useState(hf), { settings: m, musicOptions: h, saveSettings: g, settingsFeedback: x, musicFeedback: y } = kx();
  v.useEffect(() => {
    if (!m) return;
    const R = Dx(m);
    i(R), f(R), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: R.theme }));
  }, [m]);
  const _ = async (R) => {
    i((E) => ({ ...E, ...R })), R.theme && R.theme !== l.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: R.theme })), await c.run(async () => {
      await g({ theme: R.theme }), f((E) => ({ ...E, theme: R.theme }));
    }, { exclusive: !0 }));
  }, S = () => c.run(async () => {
    await g(yf(l, d)), f(l);
  }, { exclusive: !0 }), C = !!m && Object.keys(yf(l, d)).length > 0;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ot,
      {
        title: w("Настройки")
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      /* @__PURE__ */ a.jsx(Ft, {}),
      r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { children: w("Настройки") }),
      /* @__PURE__ */ a.jsxs("div", { className: G.settingsSections, children: [
        /* @__PURE__ */ a.jsx(We, { ...x }),
        /* @__PURE__ */ a.jsx(We, { ...y }),
        /* @__PURE__ */ a.jsx(We, { ...c }),
        /* @__PURE__ */ a.jsxs("section", { className: G.settingsSection, "aria-label": w("Общие"), children: [
          /* @__PURE__ */ a.jsx("h2", { children: w("Общие") }),
          /* @__PURE__ */ a.jsx(
            $x,
            {
              data: {
                is_admin: l.is_admin,
                theme: l.theme,
                client_id: l.client_id
              },
              onChange: _
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("section", { className: G.settingsSection, "aria-label": w("Подключения"), children: [
          /* @__PURE__ */ a.jsx("h2", { children: w("Подключения") }),
          /* @__PURE__ */ a.jsxs("div", { className: G.connectionFields, children: [
            /* @__PURE__ */ a.jsx(bx, { data: l, onChange: _ }),
            l.active_remout && /* @__PURE__ */ a.jsx(
              Px,
              {
                data: l.remout ?? ia,
                onChange: (R) => i((E) => ({ ...E, remout: R }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("section", { className: G.settingsSection, "aria-label": w("Timer / Alarm"), children: [
          /* @__PURE__ */ a.jsx("h2", { children: w("Timer / Alarm") }),
          /* @__PURE__ */ a.jsx(
            Ax,
            {
              data: l.timer_alarm,
              musicOptions: h,
              musicUnavailable: y.busy || !!y.error,
              onChange: (R) => i({ ...l, timer_alarm: R })
            }
          )
        ] })
      ] }),
      C && (r ? /* @__PURE__ */ a.jsx("div", { className: G.settingsMobileActions, children: /* @__PURE__ */ a.jsx(
        le,
        {
          variant: "primary",
          disabled: c.busy || x.busy || !m,
          onClick: S,
          children: w("Сохранить")
        }
      ) }) : /* @__PURE__ */ a.jsx("div", { className: G.settingsActions, children: /* @__PURE__ */ a.jsx(le, { disabled: c.busy || x.busy || !m, onClick: S, children: w("Сохранить") }) }))
    ] })
  ] });
}, Pi = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const l = r.split(":").map(Number);
  return l.some((i) => !Number.isFinite(i) || i < 0) ? 0 : l.length === 3 ? l[0] * 3600 + l[1] * 60 + l[2] : l.length === 2 ? l[0] * 60 + l[1] : l.length === 1 ? l[0] : 0;
}, pp = (r) => typeof r == "string" || typeof r == "number" ? Pi(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Pi(r.count_timer || "") : 0, Ox = (r, l = "on", i = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Pi(r);
  if (!r) return 0;
  if (l !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - i) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : pp(r);
}, Ai = (r) => r !== null && typeof r == "object", Gn = (r) => {
  const l = Ai(r) && "result" in r ? r.result : r;
  return Ai(l) && "data" in l ? l.data : l;
}, Fx = (r) => {
  const l = Math.max(1, Number(r) || 1);
  return new Date(Date.now() + l * 1e3).toISOString();
}, gf = (r) => {
  const l = Math.max(1, Number(r) || 1), i = Math.floor(l / 3600), c = Math.floor(l % 3600 / 60), d = l % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, _f = (r) => {
  const l = Gn(r);
  return Array.isArray(l) ? l : Ai(l) && Array.isArray(l.data) ? l.data : [];
};
function mp() {
  const r = mt(), l = zt(), [i, c] = v.useState([]), [d, f] = v.useState([]), [m, h] = v.useState([]), [g, x] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), _ = v.useCallback(async () => {
    const B = await r.getPage("get_timer_requests_short", 1, 100), I = await Promise.all(
      _f(B).map(async (J) => {
        var Q;
        const W = await r.getRecord(J.uuid, "get_timer_request");
        return ((Q = Gn(W)) == null ? void 0 : Q.data) ?? Gn(W);
      })
    );
    c(I.filter((J) => !!J && J.action_type === "create_timer"));
  }, [r]), S = v.useCallback(async () => {
    const B = await r.getPage("get_alarm_requests_short", 1, 100), I = await Promise.all(
      _f(B).map(async (J) => {
        var Q;
        const W = await r.getRecord(J.uuid, "get_alarm_request");
        return ((Q = Gn(W)) == null ? void 0 : Q.data) ?? Gn(W);
      })
    );
    f(I.filter((J) => !!J && J.action_type !== "delete_alarm"));
  }, [r]), C = v.useCallback(async () => {
    const B = await r.getAllRecords("get_alarm_time_widgets_short"), I = await Promise.all(
      B.map(async (J) => {
        var Q;
        const W = await r.getRecord(J.uuid, "get_alarm_time_widget");
        return ((Q = Gn(W)) == null ? void 0 : Q.data) ?? Gn(W);
      })
    );
    h(I.filter(Boolean));
  }, [r]), R = v.useCallback(async () => {
    x(!0);
    try {
      await l.run(async () => {
        await Promise.all([_(), S(), C()]);
      }, { retryable: !0 });
    } finally {
      x(!1);
    }
  }, [S, C, _, l.run]);
  v.useEffect(() => {
    R();
  }, []);
  const E = async (B, I) => await l.run(async () => {
    await B();
  }, { exclusive: !0 }) ? (await l.run(I, { retryable: !0 }), !0) : !1, N = async (B, I, J = 0.3) => {
    const W = {
      count_timer: gf(I),
      date_end: Fx(I)
    };
    return E(() => r.saveData({ name: `Таймер ${gf(I)}`, action_type: "create_timer", device_id: B, timer_time: W, volume_start: J }, "save_timer_request"), _);
  }, A = async (B) => E(() => r.deleteRecord(B.uuid, "delete_timer_request"), _), O = async (B, I, J = 0.3, W = "once", Q = []) => E(() => r.saveData({ name: `Будильник ${I}`, action_type: "create_alarm", device_id: B, status: "on", time: I, volume_start: J, repeat_type: W, repeat_days: Q }, "save_alarm_request"), async () => {
    await Promise.all([S(), C()]);
  }), D = async (B, I) => E(() => r.updateRecord(B.uuid, "update_alarm_request", { ...B, action_type: "edit_alarm", ...I }), async () => {
    await Promise.all([S(), C()]);
  }), M = async (B) => E(() => r.deleteRecord(B.uuid, "delete_alarm_request"), S);
  return {
    feedback: { ...l, retry: l.error ? l.retry ?? (() => {
      R();
    }) : void 0 },
    alarmTimeWidgets: m,
    refreshAlarmTimes: () => l.run(C, { retryable: !0 }),
    alarms: d,
    createAlarm: O,
    createTimer: N,
    deleteAlarm: M,
    devices: y,
    loading: g,
    stopTimer: A,
    timers: i,
    toTimerSeconds: Ox,
    updateAlarm: D
  };
}
const Hx = "_grid_w5y3x_31", Wx = "_card_w5y3x_38", Bx = "_empty_w5y3x_38", Ux = "_cardHeader_w5y3x_47", Vx = "_cardTitle_w5y3x_54", qx = "_meta_w5y3x_59", Qx = "_form_w5y3x_73", Kx = "_field_w5y3x_79", Yx = "_label_w5y3x_85", Gx = "_input_w5y3x_91", Jx = "_quickTabs_w5y3x_101", Xx = "_quickTab_w5y3x_101", Zx = "_activeQuickTab_w5y3x_117", ew = "_cardLead_w5y3x_135", tw = "_cardIcon_w5y3x_143", nw = "_cardButton_w5y3x_148", rw = "_wheelPicker_w5y3x_160", sw = "_wheelColumn_w5y3x_173", ow = "_wheelSelect_w5y3x_180", aw = "_footerActions_w5y3x_202", lw = "_saveButton_w5y3x_208", iw = "_volumeLabel_w5y3x_226", uw = "_volumeValue_w5y3x_232", cw = "_alarmTimeFields_w5y3x_237", ae = {
  grid: Hx,
  card: Wx,
  empty: Bx,
  cardHeader: Ux,
  cardTitle: Vx,
  meta: qx,
  form: Qx,
  field: Kx,
  label: Yx,
  input: Gx,
  quickTabs: Jx,
  quickTab: Xx,
  activeQuickTab: Zx,
  cardLead: ew,
  cardIcon: tw,
  cardButton: nw,
  wheelPicker: rw,
  wheelColumn: sw,
  wheelSelect: ow,
  footerActions: aw,
  saveButton: lw,
  volumeLabel: iw,
  volumeValue: uw,
  alarmTimeFields: cw
}, dw = [5, 10, 15, 30, 45, 60], xf = (r) => {
  const l = Math.max(0, r), i = Math.floor(l / 3600), c = Math.floor(l % 3600 / 60), d = l % 60;
  return [i, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, fw = (r, l, i) => Math.max(1, r * 3600 + l * 60 + i), pw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), mw = () => {
  const r = ot(), { feedback: l, createTimer: i, devices: c, loading: d, stopTimer: f, timers: m, toTimerSeconds: h } = mp(), [g, x] = v.useState(!1), [y, _] = v.useState(""), [S, C] = v.useState(0.3), [R, E] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [N, A] = v.useState({});
  v.useEffect(() => {
    A(Object.fromEntries(m.map((I) => [I.uuid, h(I.timer_time, I.status)])));
  }, [m, h]), v.useEffect(() => {
    const I = window.setInterval(() => {
      A((J) => Object.fromEntries(Object.entries(J).map(([W, Q]) => {
        var fe;
        return [W, ((fe = m.find((de) => de.uuid === W)) == null ? void 0 : fe.status) === "paused" ? Q : Math.max(0, Q - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(I);
  }, [m]);
  const O = v.useMemo(() => new Map(c.map((I) => [I.id, I.name])), [c]), D = fw(R.hours, R.minutes, R.seconds), M = async () => {
    y && await i(y, D, S) && x(!1);
  }, B = (I) => E(pw(I * 60));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Ot, { title: w("Таймеры") }),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(We, { ...l }),
      /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsxs("div", { className: G.header, children: [
        /* @__PURE__ */ a.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: w("Таймеры") }) }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(nr, { startVisible: !0, children: /* @__PURE__ */ a.jsx(
          le,
          {
            variant: "primary",
            onClick: () => x(!0),
            children: w("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ a.jsx(
          le,
          {
            variant: "primary",
            onClick: () => x(!0),
            children: w("🞢 Создать")
          }
        ) })
      ] }),
      d && /* @__PURE__ */ a.jsx(Ir, {}),
      /* @__PURE__ */ a.jsx("div", { className: ae.grid, children: m.length ? m.map((I) => {
        const J = h(I.timer_time, I.status), W = pp(I.timer_time);
        return /* @__PURE__ */ a.jsx("div", { className: ae.card, children: /* @__PURE__ */ a.jsxs("div", { className: ae.cardHeader, children: [
          /* @__PURE__ */ a.jsxs("div", { className: ae.cardLead, children: [
            /* @__PURE__ */ a.jsx(tp, { className: ae.cardIcon, size: 26 }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("h2", { className: ae.cardTitle, children: xf(N[I.uuid] ?? J) }),
              /* @__PURE__ */ a.jsxs("div", { className: ae.meta, children: [
                w("Заведен на"),
                " ",
                xf(W),
                " • ",
                O.get(I.device_id) || I.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx(le, { variant: "remove", onClick: () => f(I), children: w("Удалить") })
        ] }) }, I.uuid);
      }) : !d && !l.error && /* @__PURE__ */ a.jsx("div", { className: ae.empty, children: w("Нет запущенных таймеров.") }) }),
      /* @__PURE__ */ a.jsx(an, { feedback: l, open: g, onClose: () => x(!1), title: w("Создать таймер"), footer: /* @__PURE__ */ a.jsx("div", { className: ae.footerActions, children: /* @__PURE__ */ a.jsx(le, { className: ae.saveButton, onClick: M, disabled: !y, children: w("Создать") }) }), children: /* @__PURE__ */ a.jsxs("div", { className: ae.form, children: [
        /* @__PURE__ */ a.jsx("div", { className: ae.wheelPicker, "aria-label": w("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((I) => /* @__PURE__ */ a.jsxs("label", { className: ae.wheelColumn, children: [
          /* @__PURE__ */ a.jsx("span", { className: ae.label, children: w(I === "hours" ? "Часы" : I === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              className: ae.wheelSelect,
              type: "number",
              min: 0,
              max: I === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: R[I],
              onChange: (J) => {
                const W = Math.max(0, Math.min(I === "hours" ? 23 : 59, Math.trunc(Number(J.target.value) || 0)));
                E((Q) => ({ ...Q, [I]: W }));
              }
            }
          )
        ] }, I)) }),
        /* @__PURE__ */ a.jsxs("div", { className: ae.field, children: [
          /* @__PURE__ */ a.jsx("span", { className: ae.label, children: w("Быстрое создание") }),
          /* @__PURE__ */ a.jsx("div", { className: ae.quickTabs, children: dw.map((I) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: `${ae.quickTab} ${D === I * 60 ? ae.activeQuickTab : ""}`, onClick: () => B(I), children: [
            I,
            " ",
            w("мин")
          ] }, I)) })
        ] }),
        /* @__PURE__ */ a.jsx(
          Ar,
          {
            label: w("Устройство воспроизведения"),
            placeholder: w("Выберите устройство"),
            value: y,
            options: c.map((I) => ({ value: I.id, label: I.name })),
            onSelect: _
          }
        ),
        /* @__PURE__ */ a.jsxs("label", { className: ae.field, children: [
          /* @__PURE__ */ a.jsxs("span", { className: `${ae.label} ${ae.volumeLabel}`, children: [
            w("Стартовая громкость"),
            " ",
            /* @__PURE__ */ a.jsxs("span", { className: ae.volumeValue, children: [
              Math.round(S * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("input", { className: ae.input, type: "range", min: "0", max: "1", step: "0.05", value: S, onChange: (I) => C(Number(I.target.value)) })
        ] })
      ] }) })
    ] })
  ] });
}, hw = ({ command: r, open: l, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const m = r.status === "on";
  return /* @__PURE__ */ a.jsx(qi, { open: l, title: r.title, uuid: r.uuid, onClose: i, actions: [
    { label: m ? "Выключить" : "Включить", onClick: () => c(r, m ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, vw = (r) => {
  const l = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !l || Number(l[1]) > 23 || Number(l[2]) > 59 ? null : `${l[1].padStart(2, "0")}:${l[2]}`;
}, $i = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], yw = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], gw = (r = "once", l = []) => r === "daily" ? w("ежедневно") : r === "weekdays" ? w("по будням") : r === "weekends" ? w("по выходным") : r === "custom" ? l.length ? l.map((i) => {
  var c;
  return (c = $i.find((d) => d.key === i)) != null && c.label ? w($i.find((d) => d.key === i).label) : i;
}).join(", ") : w("кастом") : w("однократно"), _w = () => {
  const r = ot(), { feedback: l, alarmTimeWidgets: i, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: m, devices: h, loading: g, updateAlarm: x } = mp(), [y, _] = v.useState(!1), [S, C] = v.useState(null), [R, E] = v.useState(null), [N, A] = v.useState(""), [O, D] = v.useState("08:00"), [M, B] = v.useState(0.3), [I, J] = v.useState("once"), [W, Q] = v.useState([]), fe = v.useMemo(() => Array.from(new Set([...i.flatMap((H) => H.time || []), ...d.map((H) => H.time)].map(vw).filter((H) => H !== null))), [i, d]), de = v.useMemo(() => new Map(h.map((H) => [H.id, H.name])), [h]), Te = d.find((H) => H.uuid === S) || null, Ee = async () => {
    if (!N || !O) return;
    const H = d.find((z) => z.uuid === R);
    if (H) {
      if (!await x(H, { device_id: N, time: O, volume_start: M, repeat_type: I, repeat_days: W })) return;
    } else if (!await f(N, O, M, I, W)) return;
    E(null), _(!1);
  }, he = () => {
    E(null), _(!0), c();
  }, ge = (H) => {
    D(H.time), A(H.device_id), B(H.volume_start ?? 0.3), J(H.repeat_type ?? "once"), Q(H.repeat_days ?? []), c(), E(H.uuid), C(null), _(!0);
  }, Ce = (H) => Q((z) => z.includes(H) ? z.filter((X) => X !== H) : [...z, H]);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Ot, { title: w("Будильники") }),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !y && /* @__PURE__ */ a.jsx(We, { ...l }),
      /* @__PURE__ */ a.jsx(Ft, {}),
      /* @__PURE__ */ a.jsxs("div", { className: G.header, children: [
        /* @__PURE__ */ a.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: w("Будильники") }) }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(nr, { startVisible: !0, children: /* @__PURE__ */ a.jsx(
          le,
          {
            variant: "primary",
            onClick: he,
            children: w("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ a.jsx(
          le,
          {
            variant: "primary",
            onClick: he,
            children: w("🞢 Создать")
          }
        ) })
      ] }),
      g && /* @__PURE__ */ a.jsx(Ir, {}),
      /* @__PURE__ */ a.jsx("div", { className: ae.grid, children: d.length ? d.map((H) => /* @__PURE__ */ a.jsx("button", { className: `${ae.card} ${ae.cardButton}`, type: "button", onClick: () => C(H.uuid), children: /* @__PURE__ */ a.jsxs("div", { className: ae.cardHeader, children: [
        /* @__PURE__ */ a.jsxs("div", { className: ae.cardLead, children: [
          /* @__PURE__ */ a.jsx(tp, { className: ae.cardIcon, size: 26 }),
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h2", { className: ae.cardTitle, children: H.time }),
            /* @__PURE__ */ a.jsxs("div", { className: ae.meta, children: [
              gw(H.repeat_type, H.repeat_days),
              " • ",
              de.get(H.device_id) || H.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            onClick: (z) => z.stopPropagation(),
            onMouseDown: (z) => z.stopPropagation(),
            children: /* @__PURE__ */ a.jsx(er, { label: w(""), checked: H.status !== "off", onClick: (z) => z.stopPropagation(), onChange: (z) => x(H, { status: z.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, H.uuid)) : !g && !l.error && /* @__PURE__ */ a.jsx("div", { className: ae.empty, children: w("Нет будильников.") }) }),
      /* @__PURE__ */ a.jsx(an, { feedback: l, open: y, onClose: () => {
        _(!1), E(null);
      }, title: R ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ a.jsx("div", { className: ae.footerActions, children: /* @__PURE__ */ a.jsx(le, { className: ae.saveButton, onClick: Ee, disabled: !N || !O, children: w("Сохранить") }) }), children: /* @__PURE__ */ a.jsxs("div", { className: ae.form, children: [
        /* @__PURE__ */ a.jsxs("div", { className: ae.alarmTimeFields, role: "group", "aria-label": w("Время будильника"), children: [
          /* @__PURE__ */ a.jsx(
            Ar,
            {
              label: w("Часы"),
              value: O.split(":")[0],
              options: Array.from({ length: 24 }, (H, z) => ({ value: String(z).padStart(2, "0"), label: String(z).padStart(2, "0") })),
              onSelect: (H) => D(`${H}:${O.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ a.jsx(
            Ar,
            {
              label: w("Минуты"),
              value: O.split(":")[1],
              options: Array.from({ length: 60 }, (H, z) => ({ value: String(z).padStart(2, "0"), label: String(z).padStart(2, "0") })),
              onSelect: (H) => D(`${O.split(":")[0]}:${H}`)
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: ae.field, children: [
          /* @__PURE__ */ a.jsx("span", { className: ae.label, children: w("Ранее заданное время") }),
          /* @__PURE__ */ a.jsx("div", { className: ae.quickTabs, children: fe.length ? fe.map((H) => /* @__PURE__ */ a.jsx("button", { type: "button", className: `${ae.quickTab} ${O === H ? ae.activeQuickTab : ""}`, onClick: () => D(H), children: H }, H)) : /* @__PURE__ */ a.jsx("span", { className: ae.meta, children: w("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ a.jsx(
          Ar,
          {
            label: w("Повторы"),
            value: I,
            options: yw.map((H) => ({ ...H, label: w(H.label) })),
            onSelect: (H) => J(H)
          }
        ),
        I === "custom" && /* @__PURE__ */ a.jsx("div", { className: ae.quickTabs, role: "group", "aria-label": w("Дни повтора"), children: $i.map((H) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": W.includes(H.key),
            className: `${ae.quickTab} ${W.includes(H.key) ? ae.activeQuickTab : ""}`,
            onClick: () => Ce(H.key),
            children: w(H.label)
          },
          H.key
        )) }),
        /* @__PURE__ */ a.jsx(
          Ar,
          {
            label: w("Устройство воспроизведения"),
            placeholder: w("Выберите устройство"),
            value: N,
            options: h.map((H) => ({ value: H.id, label: H.name })),
            onSelect: A
          }
        ),
        /* @__PURE__ */ a.jsxs("label", { className: ae.field, children: [
          /* @__PURE__ */ a.jsxs("span", { className: `${ae.label} ${ae.volumeLabel}`, children: [
            w("Стартовая громкость"),
            " ",
            /* @__PURE__ */ a.jsxs("span", { className: ae.volumeValue, children: [
              Math.round(M * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("input", { className: ae.input, type: "range", min: "0", max: "1", step: "0.05", value: M, onChange: (H) => B(Number(H.target.value)) })
        ] })
      ] }) }),
      /* @__PURE__ */ a.jsx(
        hw,
        {
          open: !!Te,
          onClose: () => C(null),
          command: Te,
          onEdit: (H) => ge(H),
          onToggleStatus: (H, z) => x(H, { status: z }),
          onDelete: (H) => {
            m(H), C(null);
          }
        }
      )
    ] })
  ] });
}, xw = () => {
  const r = Ui(), l = fa(), i = Lr(), { pathname: c } = pt(), d = i ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && i !== !1 ? i === null ? /* @__PURE__ */ a.jsx(Ir, {}) : /* @__PURE__ */ a.jsx(Un, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ a.jsxs(ey, { children: [
    /* @__PURE__ */ a.jsx(et, { path: "/logs", element: r && l ? /* @__PURE__ */ a.jsx(R_, {}) : /* @__PURE__ */ a.jsx(Un, { to: d, replace: !0 }) }),
    /* @__PURE__ */ a.jsx(et, { path: "/downloads", element: l ? /* @__PURE__ */ a.jsx(Sx, {}) : /* @__PURE__ */ a.jsx(Un, { to: d, replace: !0 }) }),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/",
        element: /* @__PURE__ */ a.jsx(
          Un,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/scripts",
        element: /* @__PURE__ */ a.jsx(m0, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands",
        element: /* @__PURE__ */ a.jsx(
          Un,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ a.jsx(Q0, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ a.jsx(Y0, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ a.jsx(
          Un,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ a.jsx(X0, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ a.jsx(sx, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ a.jsx(dx, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/timer",
        element: /* @__PURE__ */ a.jsx(mw, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/alarm",
        element: /* @__PURE__ */ a.jsx(_w, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/settings",
        element: /* @__PURE__ */ a.jsx(zx, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "*",
        element: /* @__PURE__ */ a.jsx(
          Un,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] });
}, hp = "ha-dialog-ui-theme", Si = (r) => r === "light" ? "light" : "dark", ww = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(hp, r);
}, Sw = () => {
  const r = zt(), l = Nf(), i = mt(), [c, d] = v.useState(!1), [f, m] = v.useState(null), [h, g] = v.useState(() => Si(localStorage.getItem(hp)));
  return v.useEffect(() => {
    ww(h);
  }, [h]), v.useEffect(() => {
    let x = !0, y = !1, _ = !1, S = !1;
    r.run(async () => {
      const N = await i.getSettings();
      x && (y || g(Si(N.theme)), S || d(!!N.api_commands_enabled), _ || m(!!N.active_remout));
    }, { retryable: !0 });
    const C = (N) => {
      y = !0, g(Si(N.detail));
    }, R = (N) => {
      _ = !0, m(N.detail);
    }, E = (N) => {
      S = !0, d(!!N.detail);
    };
    return window.addEventListener(Ei, E), window.addEventListener(sa, R), window.addEventListener("ha-dialog-ui-theme-change", C), () => {
      x = !1, window.removeEventListener(Ei, E), window.removeEventListener(sa, R), window.removeEventListener("ha-dialog-ui-theme-change", C);
    };
  }, [i, r.run]), /* @__PURE__ */ a.jsx(Kf.Provider, { value: c, children: /* @__PURE__ */ a.jsx(rp.Provider, { value: f, children: /* @__PURE__ */ a.jsxs("div", { className: "appShell", "data-theme": h, lang: l, children: [
    /* @__PURE__ */ a.jsx(We, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ a.jsx(Ir, {}) : /* @__PURE__ */ a.jsx(xw, {})
  ] }) }) });
};
class kw {
  constructor(l) {
    qt(this, "hass");
    this.hass = l;
  }
  setHass(l) {
    this.hass = l;
  }
  getData(l) {
    return this.hass.connection.sendMessagePromise({ type: `ha_dialog_ui/${l}` });
  }
  async getSettings() {
    const l = await this.getData("get_settings");
    return "result" in l ? l.result : l;
  }
  async getPage(l, i, c, d) {
    return await this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${l}`,
      ...i ? { page: i } : {},
      ...c ? { page_size: c } : {},
      ...d ? { query: d } : {}
    });
  }
  async getAllRecords(l, i = 100) {
    const c = await this.getPage(l, 1, i), d = (c == null ? void 0 : c.total_pages) ?? 1, f = Array.isArray(c == null ? void 0 : c.data) ? c.data : Array.isArray(c == null ? void 0 : c.script_actions) ? c.script_actions : [];
    return d <= 1 ? f : (await Promise.all(
      Array.from(
        { length: d - 1 },
        (h, g) => this.getPage(l, g + 2, i)
      )
    )).reduce((h, g) => {
      const x = Array.isArray(g == null ? void 0 : g.data) ? g.data : Array.isArray(g == null ? void 0 : g.script_actions) ? g.script_actions : [];
      return [...h, ...x];
    }, f);
  }
  async getRecord(l, i) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      uuid: l
    });
  }
  async saveData(l, i) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      data: l
    });
  }
  async updateRecord(l, i, c) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      uuid: l,
      data: c
    });
  }
  async updateRecordStatus(l, i, c) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${l}`,
      uuid: i,
      status: c
    });
  }
  async searchAssistantCommands(l, i) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      query: l
    });
  }
  async deleteRecord(l, i) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      uuid: l
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((l) => {
      const i = String(l.entity_id || "");
      return i.startsWith("media_player.") || i.startsWith("speaker.");
    }).map((l) => {
      var i;
      return {
        id: l.entity_id,
        name: ((i = l.attributes) == null ? void 0 : i.friendly_name) ?? l.entity_id
      };
    });
  }
  async getLocalMusicOptions() {
    const l = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i, i = [
      "media-source://media_source/local",
      "media-source://media_source"
    ], c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), f = [];
    let m = !1, h;
    const g = async (x) => {
      if (c.has(x)) return;
      c.add(x);
      const y = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: x
      }), _ = Array.isArray(y == null ? void 0 : y.children) ? y.children : [];
      await Promise.all(_.map(async (S) => {
        var E;
        const C = String((S == null ? void 0 : S.media_content_id) || ""), R = String((S == null ? void 0 : S.title) || C);
        if (C) {
          if (S != null && S.can_expand) {
            try {
              await g(C);
            } catch (N) {
              f.push(N);
            }
            return;
          }
          if (l.test(R) || l.test(C) || (S == null ? void 0 : S.media_content_type) === "music" || (E = S == null ? void 0 : S.media_content_type) != null && E.startsWith("audio/")) {
            const N = "media-source://media_source/local/", A = C.startsWith(N) ? C.slice(N.length) : C;
            d.set(A, {
              value: A,
              label: R
            });
          }
        }
      }));
    };
    for (const x of i)
      try {
        await g(x), m = !0;
      } catch (y) {
        h = y;
      }
    if (d.size === 0) {
      if (f.length > 0) throw f[0];
      if (!m) throw h;
    }
    return Array.from(d.values()).sort(
      (x, y) => x.label.localeCompare(y.label)
    );
  }
  getScripts() {
    return Object.values(this.hass.states).filter((l) => l.entity_id.startsWith("script.")).map((l) => {
      var i;
      return {
        entity_id: l.entity_id,
        name: ((i = l.attributes) == null ? void 0 : i.friendly_name) ?? l.entity_id
      };
    });
  }
}
function vp(r) {
  var l;
  return (l = r == null ? void 0 : r.connection) != null && l.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function Cw() {
  return vp(window.hass);
}
function jw({
  children: r,
  hass: l
}) {
  const [i, c] = v.useState(null), [d, f] = v.useState(0), m = v.useRef(null), [h, g] = v.useState(!1), [x, y] = v.useState(!1);
  return v.useEffect(() => {
    let _ = !0;
    c(null);
    async function S() {
      const C = l ? vp(l) : await Cw();
      if (!_) return;
      m.current ? m.current.setHass(C) : m.current = new kw(C);
      const R = C.user ?? await C.connection.sendMessagePromise({ type: "auth/current_user" });
      _ && (g((R == null ? void 0 : R.is_admin) === !0), y(!0));
    }
    return S().catch((C) => {
      _ && c(Jn(C));
    }), () => {
      _ = !1;
    };
  }, [l, d]), i ? /* @__PURE__ */ a.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ a.jsx(We, { error: i, retry: () => f((_) => _ + 1) }) }) : !x || !m.current ? /* @__PURE__ */ a.jsx(Ir, { label: w("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ a.jsx(Yf.Provider, { value: m.current, children: /* @__PURE__ */ a.jsx(np.Provider, { value: h, children: r }) });
}
function Ew({ hass: r }) {
  return /* @__PURE__ */ a.jsx(Cy, { children: /* @__PURE__ */ a.jsx(jw, { hass: r, children: /* @__PURE__ */ a.jsx(Sw, {}) }) });
}
const wf = "ha-dialog-ui-panel", Sf = "ha-dialog-ui-style";
class Nw extends HTMLElement {
  constructor() {
    super(...arguments);
    qt(this, "root");
    qt(this, "container");
    qt(this, "layoutObserver");
    qt(this, "updateViewport", () => {
      const i = Math.max(0, this.getBoundingClientRect().top + window.scrollY);
      this.style.setProperty("--ha-dialog-ui-available-height", `${Math.max(0, window.innerHeight - i)}px`);
    });
    qt(this, "resume", () => {
      document.visibilityState !== "hidden" && this.isConnected && (this.updateViewport(), this.loadStyles(), this.render());
    });
    qt(this, "hassValue");
    qt(this, "renderTimer");
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
    if (i.getElementById(Sf)) return;
    const c = document.createElement("style");
    c.id = Sf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._loader_m2244_1{width:100%;min-height:220px;display:flex;align-items:center;justify-content:center;gap:14px;color:var(--text-secondary)}._fullscreen_m2244_11{min-height:100vh}._spinner_m2244_15{width:42px;height:42px;border-radius:50%;border:4px solid var(--loader-track);border-top-color:var(--primary);animation:_spin_m2244_15 .85s linear infinite}._label_m2244_24{font-size:15px;font-weight:600}@keyframes _spin_m2244_15{to{transform:rotate(360deg)}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._tabs_14hon_1{display:inline-flex;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_14hon_14{position:relative}._tab_14hon_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_14hon_1:hover{color:var(--text);background:var(--control-background)}._tab_14hon_1:active{transform:scale(.98)}._active_14hon_47{color:var(--text);background:var(--primary);box-shadow:none}._tab_14hon_1>span{margin-left:5px}._menu_14hon_57{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_14hon_74{margin-left:8px}._tab_14hon_1[aria-expanded=true] ._chevron_14hon_74{transform:rotate(180deg)}._tab_14hon_1:focus-visible,._menuItem_14hon_82:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_14hon_82{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_14hon_82:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_14hon_82._active_14hon_47{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_14hon_1{flex-wrap:wrap;max-width:100%}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_rqdjx_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_rqdjx_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_rqdjx_9:empty{display:none}._hidden_rqdjx_20{visibility:hidden}._overlay_rqdjx_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_rqdjx_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_rqdjx_24 ._card_rqdjx_32{flex:1;min-height:0}._title_rqdjx_51,._subtitle_rqdjx_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_rqdjx_1 1.4s ease-in-out infinite}._title_rqdjx_51{width:45%;max-width:320px;height:18px}._subtitle_rqdjx_51{width:25%;max-width:180px;height:13px}._srOnly_rqdjx_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_rqdjx_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_rqdjx_51,._subtitle_rqdjx_51{animation:none}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}\n", i.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), i.appendChild(this.container)), this.root = kh.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ a.jsx(Cf.StrictMode, { children: /* @__PURE__ */ a.jsx(nv, { children: /* @__PURE__ */ a.jsx(Ew, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(wf) || customElements.define(wf, Nw);
