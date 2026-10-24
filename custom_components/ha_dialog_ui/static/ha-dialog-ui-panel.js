var ph = Object.defineProperty;
var mh = (r, l, i) => l in r ? ph(r, l, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[l] = i;
var qt = (r, l, i) => mh(r, typeof l != "symbol" ? l + "" : l, i);
function kf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ii = { exports: {} }, Ns = {}, ui = { exports: {} }, pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bd;
function hh() {
  if (Bd) return pe;
  Bd = 1;
  var r = Symbol.for("react.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function S(P) {
    return P === null || typeof P != "object" ? null : (P = _ && P[_] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, E = {};
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
  var M = O.prototype = new A();
  M.constructor = O, T(M, N.prototype), M.isPureReactComponent = !0;
  var z = Array.isArray, U = Object.prototype.hasOwnProperty, I = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(P, F, ie) {
    var ce, ve = {}, ye = null, Se = null;
    if (F != null) for (ce in F.ref !== void 0 && (Se = F.ref), F.key !== void 0 && (ye = "" + F.key), F) U.call(F, ce) && !J.hasOwnProperty(ce) && (ve[ce] = F[ce]);
    var xe = arguments.length - 2;
    if (xe === 1) ve.children = ie;
    else if (1 < xe) {
      for (var je = Array(xe), rt = 0; rt < xe; rt++) je[rt] = arguments[rt + 2];
      ve.children = je;
    }
    if (P && P.defaultProps) for (ce in xe = P.defaultProps, xe) ve[ce] === void 0 && (ve[ce] = xe[ce]);
    return { $$typeof: r, type: P, key: ye, ref: Se, props: ve, _owner: I.current };
  }
  function K(P, F) {
    return { $$typeof: r, type: P.type, key: F, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function me(P) {
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
    if (Se) return Se = P, ve = ve(Se), P = ce === "" ? "." + Ee(Se, 0) : ce, z(ve) ? (ie = "", P != null && (ie = P.replace(Te, "$&/") + "/"), he(ve, F, ie, "", function(rt) {
      return rt;
    })) : ve != null && (me(ve) && (ve = K(ve, ie + (!ve.key || Se && Se.key === ve.key ? "" : ("" + ve.key).replace(Te, "$&/") + "/") + P)), F.push(ve)), 1;
    if (Se = 0, ce = ce === "" ? "." : ce + ":", z(P)) for (var xe = 0; xe < P.length; xe++) {
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
  var H = { current: null }, D = { transition: null }, X = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: D, ReactCurrentOwner: I };
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
    if (!me(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, pe.Component = N, pe.Fragment = i, pe.Profiler = d, pe.PureComponent = O, pe.StrictMode = c, pe.Suspense = g, pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, pe.act = Y, pe.cloneElement = function(P, F, ie) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var ce = T({}, P.props), ve = P.key, ye = P.ref, Se = P._owner;
    if (F != null) {
      if (F.ref !== void 0 && (ye = F.ref, Se = I.current), F.key !== void 0 && (ve = "" + F.key), P.type && P.type.defaultProps) var xe = P.type.defaultProps;
      for (je in F) U.call(F, je) && !J.hasOwnProperty(je) && (ce[je] = F[je] === void 0 && xe !== void 0 ? xe[je] : F[je]);
    }
    var je = arguments.length - 2;
    if (je === 1) ce.children = ie;
    else if (1 < je) {
      xe = Array(je);
      for (var rt = 0; rt < je; rt++) xe[rt] = arguments[rt + 2];
      ce.children = xe;
    }
    return { $$typeof: r, type: P.type, key: ve, ref: ye, props: ce, _owner: Se };
  }, pe.createContext = function(P) {
    return P = { $$typeof: m, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: f, _context: P }, P.Consumer = P;
  }, pe.createElement = B, pe.createFactory = function(P) {
    var F = B.bind(null, P);
    return F.type = P, F;
  }, pe.createRef = function() {
    return { current: null };
  }, pe.forwardRef = function(P) {
    return { $$typeof: h, render: P };
  }, pe.isValidElement = me, pe.lazy = function(P) {
    return { $$typeof: y, _payload: { _status: -1, _result: P }, _init: Ce };
  }, pe.memo = function(P, F) {
    return { $$typeof: x, type: P, compare: F === void 0 ? null : F };
  }, pe.startTransition = function(P) {
    var F = D.transition;
    D.transition = {};
    try {
      P();
    } finally {
      D.transition = F;
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
var Ud;
function bi() {
  return Ud || (Ud = 1, ui.exports = hh()), ui.exports;
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
var Vd;
function vh() {
  if (Vd) return Ns;
  Vd = 1;
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
var qd;
function yh() {
  return qd || (qd = 1, ii.exports = vh()), ii.exports;
}
var o = yh(), v = bi();
const Cf = /* @__PURE__ */ kf(v);
var Qo = {}, ci = { exports: {} }, dt = {}, di = { exports: {} }, fi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd;
function gh() {
  return Qd || (Qd = 1, (function(r) {
    function l(D, X) {
      var Y = D.length;
      D.push(X);
      e: for (; 0 < Y; ) {
        var P = Y - 1 >>> 1, F = D[P];
        if (0 < d(F, X)) D[P] = X, D[Y] = F, Y = P;
        else break e;
      }
    }
    function i(D) {
      return D.length === 0 ? null : D[0];
    }
    function c(D) {
      if (D.length === 0) return null;
      var X = D[0], Y = D.pop();
      if (Y !== X) {
        D[0] = Y;
        e: for (var P = 0, F = D.length, ie = F >>> 1; P < ie; ) {
          var ce = 2 * (P + 1) - 1, ve = D[ce], ye = ce + 1, Se = D[ye];
          if (0 > d(ve, Y)) ye < F && 0 > d(Se, ve) ? (D[P] = Se, D[ye] = Y, P = ye) : (D[P] = ve, D[ce] = Y, P = ce);
          else if (ye < F && 0 > d(Se, Y)) D[P] = Se, D[ye] = Y, P = ye;
          else break e;
        }
      }
      return X;
    }
    function d(D, X) {
      var Y = D.sortIndex - X.sortIndex;
      return Y !== 0 ? Y : D.id - X.id;
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
    var g = [], x = [], y = 1, _ = null, S = 3, C = !1, T = !1, E = !1, N = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function M(D) {
      for (var X = i(x); X !== null; ) {
        if (X.callback === null) c(x);
        else if (X.startTime <= D) c(x), X.sortIndex = X.expirationTime, l(g, X);
        else break;
        X = i(x);
      }
    }
    function z(D) {
      if (E = !1, M(D), !T) if (i(g) !== null) T = !0, Ce(U);
      else {
        var X = i(x);
        X !== null && H(z, X.startTime - D);
      }
    }
    function U(D, X) {
      T = !1, E && (E = !1, A(B), B = -1), C = !0;
      var Y = S;
      try {
        for (M(X), _ = i(g); _ !== null && (!(_.expirationTime > X) || D && !de()); ) {
          var P = _.callback;
          if (typeof P == "function") {
            _.callback = null, S = _.priorityLevel;
            var F = P(_.expirationTime <= X);
            X = r.unstable_now(), typeof F == "function" ? _.callback = F : _ === i(g) && c(g), M(X);
          } else c(g);
          _ = i(g);
        }
        if (_ !== null) var ie = !0;
        else {
          var ce = i(x);
          ce !== null && H(z, ce.startTime - X), ie = !1;
        }
        return ie;
      } finally {
        _ = null, S = Y, C = !1;
      }
    }
    var I = !1, J = null, B = -1, K = 5, me = -1;
    function de() {
      return !(r.unstable_now() - me < K);
    }
    function Te() {
      if (J !== null) {
        var D = r.unstable_now();
        me = D;
        var X = !0;
        try {
          X = J(!0, D);
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
    function Ce(D) {
      J = D, I || (I = !0, Ee());
    }
    function H(D, X) {
      B = N(function() {
        D(r.unstable_now());
      }, X);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, r.unstable_continueExecution = function() {
      T || C || (T = !0, Ce(U));
    }, r.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < D ? Math.floor(1e3 / D) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, r.unstable_next = function(D) {
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
        return D();
      } finally {
        S = Y;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(D, X) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var Y = S;
      S = D;
      try {
        return X();
      } finally {
        S = Y;
      }
    }, r.unstable_scheduleCallback = function(D, X, Y) {
      var P = r.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? P + Y : P) : Y = P, D) {
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
      return F = Y + F, D = { id: y++, callback: X, priorityLevel: D, startTime: Y, expirationTime: F, sortIndex: -1 }, Y > P ? (D.sortIndex = Y, l(x, D), i(g) === null && D === i(x) && (E ? (A(B), B = -1) : E = !0, H(z, Y - P))) : (D.sortIndex = F, l(g, D), T || C || (T = !0, Ce(U))), D;
    }, r.unstable_shouldYield = de, r.unstable_wrapCallback = function(D) {
      var X = S;
      return function() {
        var Y = S;
        S = X;
        try {
          return D.apply(this, arguments);
        } finally {
          S = Y;
        }
      };
    };
  })(fi)), fi;
}
var Kd;
function _h() {
  return Kd || (Kd = 1, di.exports = gh()), di.exports;
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
var Yd;
function xh() {
  if (Yd) return dt;
  Yd = 1;
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
  function T(e, t, n, s) {
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
  function E(e, t, n, s, a, u, p) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = p;
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
  function M(e, t, n, s) {
    var a = N.hasOwnProperty(t) ? N[t] : null;
    (a !== null ? a.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (T(t, n, a, s) && (n = null), s || a === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, s = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, U = Symbol.for("react.element"), I = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), de = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ge = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), D = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
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
        for (var a = L.stack.split(`
`), u = s.stack.split(`
`), p = a.length - 1, k = u.length - 1; 1 <= p && 0 <= k && a[p] !== u[k]; ) k--;
        for (; 1 <= p && 0 <= k; p--, k--) if (a[p] !== u[k]) {
          if (p !== 1 || k !== 1)
            do
              if (p--, k--, 0 > k || a[p] !== u[k]) {
                var j = `
` + a[p].replace(" at new ", " at ");
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
      case K:
        return "Profiler";
      case B:
        return "StrictMode";
      case Ee:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case de:
        return (e.displayName || "Context") + ".Consumer";
      case me:
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
        return t === B ? "StrictMode" : "Mode";
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
  function rt(e) {
    var t = je(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
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
  function Pn(e) {
    e._valueTracker || (e._valueTracker = rt(e));
  }
  function Hr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = je(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function An(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ha(e, t) {
    var n = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Gi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = xe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ji(e, t) {
    t = t.checked, t != null && M(e, "checked", t, !1);
  }
  function va(e, t) {
    Ji(e, t);
    var n = xe(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ya(e, t.type, n) : t.hasOwnProperty("defaultValue") && ya(e, t.type, xe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Xi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ya(e, t, n) {
    (t !== "number" || An(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Wr = Array.isArray;
  function rr(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xe(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, s && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ga(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Zi(e, t) {
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
  function eu(e, t) {
    var n = xe(t.value), s = xe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function tu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function nu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _a(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? nu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var zs, ru = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, a);
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
  function su(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ur.hasOwnProperty(e) && Ur[e] ? ("" + t).trim() : t + "px";
  }
  function ou(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, a = su(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var gp = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xa(e, t) {
    if (t) {
      if (gp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function wa(e, t) {
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
  var Sa = null;
  function ka(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ca = null, sr = null, or = null;
  function au(e) {
    if (e = fs(e)) {
      if (typeof Ca != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = lo(t), Ca(e.stateNode, e.type, t));
    }
  }
  function lu(e) {
    sr ? or ? or.push(e) : or = [e] : sr = e;
  }
  function iu() {
    if (sr) {
      var e = sr, t = or;
      if (or = sr = null, au(e), t) for (e = 0; e < t.length; e++) au(t[e]);
    }
  }
  function uu(e, t) {
    return e(t);
  }
  function cu() {
  }
  var ja = !1;
  function du(e, t, n) {
    if (ja) return e(t, n);
    ja = !0;
    try {
      return uu(e, t, n);
    } finally {
      ja = !1, (sr !== null || or !== null) && (cu(), iu());
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
  var Ea = !1;
  if (h) try {
    var qr = {};
    Object.defineProperty(qr, "passive", { get: function() {
      Ea = !0;
    } }), window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
  } catch {
    Ea = !1;
  }
  function _p(e, t, n, s, a, u, p, k, j) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (V) {
      this.onError(V);
    }
  }
  var Qr = !1, Os = null, Fs = !1, Na = null, xp = { onError: function(e) {
    Qr = !0, Os = e;
  } };
  function wp(e, t, n, s, a, u, p, k, j) {
    Qr = !1, Os = null, _p.apply(xp, arguments);
  }
  function Sp(e, t, n, s, a, u, p, k, j) {
    if (wp.apply(this, arguments), Qr) {
      if (Qr) {
        var L = Os;
        Qr = !1, Os = null;
      } else throw Error(i(198));
      Fs || (Fs = !0, Na = L);
    }
  }
  function $n(e) {
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
  function fu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function pu(e) {
    if ($n(e) !== e) throw Error(i(188));
  }
  function kp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = $n(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (s = a.return, s !== null) {
          n = s;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === n) return pu(a), e;
          if (u === s) return pu(a), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== s.return) n = a, s = u;
      else {
        for (var p = !1, k = a.child; k; ) {
          if (k === n) {
            p = !0, n = a, s = u;
            break;
          }
          if (k === s) {
            p = !0, s = a, n = u;
            break;
          }
          k = k.sibling;
        }
        if (!p) {
          for (k = u.child; k; ) {
            if (k === n) {
              p = !0, n = u, s = a;
              break;
            }
            if (k === s) {
              p = !0, s = u, n = a;
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
  function mu(e) {
    return e = kp(e), e !== null ? hu(e) : null;
  }
  function hu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = hu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var vu = l.unstable_scheduleCallback, yu = l.unstable_cancelCallback, Cp = l.unstable_shouldYield, jp = l.unstable_requestPaint, De = l.unstable_now, Ep = l.unstable_getCurrentPriorityLevel, Ta = l.unstable_ImmediatePriority, gu = l.unstable_UserBlockingPriority, Hs = l.unstable_NormalPriority, Np = l.unstable_LowPriority, _u = l.unstable_IdlePriority, Ws = null, Ht = null;
  function Tp(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == "function") try {
      Ht.onCommitFiberRoot(Ws, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : Ap, Rp = Math.log, Pp = Math.LN2;
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
    var s = 0, a = e.suspendedLanes, u = e.pingedLanes, p = n & 268435455;
    if (p !== 0) {
      var k = p & ~a;
      k !== 0 ? s = Kr(k) : (u &= p, u !== 0 && (s = Kr(u)));
    } else p = n & ~a, p !== 0 ? s = Kr(p) : u !== 0 && (s = Kr(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & a) === 0 && (a = s & -s, u = t & -t, a >= u || a === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - At(t), a = 1 << n, s |= e[n], t &= ~a;
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
    for (var n = e.suspendedLanes, s = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var p = 31 - At(u), k = 1 << p, j = a[p];
      j === -1 ? ((k & n) === 0 || (k & s) !== 0) && (a[p] = $p(k, t)) : j <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Ra(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function xu() {
    var e = Bs;
    return Bs <<= 1, (Bs & 4194240) === 0 && (Bs = 64), e;
  }
  function Pa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Yr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - At(t), e[t] = n;
  }
  function Ip(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - At(n), u = 1 << a;
      t[a] = 0, s[a] = -1, e[a] = -1, n &= ~u;
    }
  }
  function Aa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - At(n), a = 1 << s;
      a & t | e[s] & t && (e[s] |= t), n &= ~a;
    }
  }
  var ke = 0;
  function wu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Su, $a, ku, Cu, ju, ba = !1, qs = [], ln = null, un = null, cn = null, Gr = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), dn = [], Lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Eu(e, t) {
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
  function Xr(e, t, n, s, a, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [a] }, t !== null && (t = fs(t), t !== null && $a(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Mp(e, t, n, s, a) {
    switch (t) {
      case "focusin":
        return ln = Xr(ln, e, t, n, s, a), !0;
      case "dragenter":
        return un = Xr(un, e, t, n, s, a), !0;
      case "mouseover":
        return cn = Xr(cn, e, t, n, s, a), !0;
      case "pointerover":
        var u = a.pointerId;
        return Gr.set(u, Xr(Gr.get(u) || null, e, t, n, s, a)), !0;
      case "gotpointercapture":
        return u = a.pointerId, Jr.set(u, Xr(Jr.get(u) || null, e, t, n, s, a)), !0;
    }
    return !1;
  }
  function Nu(e) {
    var t = bn(e.target);
    if (t !== null) {
      var n = $n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = fu(n), t !== null) {
            e.blockedOn = t, ju(e.priority, function() {
              ku(n);
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
      var n = La(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Sa = s, n.target.dispatchEvent(s), Sa = null;
      } else return t = fs(n), t !== null && $a(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Tu(e, t, n) {
    Qs(e) && n.delete(t);
  }
  function Dp() {
    ba = !1, ln !== null && Qs(ln) && (ln = null), un !== null && Qs(un) && (un = null), cn !== null && Qs(cn) && (cn = null), Gr.forEach(Tu), Jr.forEach(Tu);
  }
  function Zr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ba || (ba = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Dp)));
  }
  function es(e) {
    function t(a) {
      return Zr(a, e);
    }
    if (0 < qs.length) {
      Zr(qs[0], e);
      for (var n = 1; n < qs.length; n++) {
        var s = qs[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (ln !== null && Zr(ln, e), un !== null && Zr(un, e), cn !== null && Zr(cn, e), Gr.forEach(t), Jr.forEach(t), n = 0; n < dn.length; n++) s = dn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < dn.length && (n = dn[0], n.blockedOn === null); ) Nu(n), n.blockedOn === null && dn.shift();
  }
  var ar = z.ReactCurrentBatchConfig, Ks = !0;
  function zp(e, t, n, s) {
    var a = ke, u = ar.transition;
    ar.transition = null;
    try {
      ke = 1, Ia(e, t, n, s);
    } finally {
      ke = a, ar.transition = u;
    }
  }
  function Op(e, t, n, s) {
    var a = ke, u = ar.transition;
    ar.transition = null;
    try {
      ke = 4, Ia(e, t, n, s);
    } finally {
      ke = a, ar.transition = u;
    }
  }
  function Ia(e, t, n, s) {
    if (Ks) {
      var a = La(e, t, n, s);
      if (a === null) Xa(e, t, s, Ys, n), Eu(e, s);
      else if (Mp(a, e, t, n, s)) s.stopPropagation();
      else if (Eu(e, s), t & 4 && -1 < Lp.indexOf(e)) {
        for (; a !== null; ) {
          var u = fs(a);
          if (u !== null && Su(u), u = La(e, t, n, s), u === null && Xa(e, t, s, Ys, n), u === a) break;
          a = u;
        }
        a !== null && s.stopPropagation();
      } else Xa(e, t, s, null, n);
    }
  }
  var Ys = null;
  function La(e, t, n, s) {
    if (Ys = null, e = ka(s), e = bn(e), e !== null) if (t = $n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = fu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ys = e, null;
  }
  function Ru(e) {
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
          case Ta:
            return 1;
          case gu:
            return 4;
          case Hs:
          case Np:
            return 16;
          case _u:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fn = null, Ma = null, Gs = null;
  function Pu() {
    if (Gs) return Gs;
    var e, t = Ma, n = t.length, s, a = "value" in fn ? fn.value : fn.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var p = n - e;
    for (s = 1; s <= p && t[n - s] === a[u - s]; s++) ;
    return Gs = a.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Js(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Xs() {
    return !0;
  }
  function Au() {
    return !1;
  }
  function ht(e) {
    function t(n, s, a, u, p) {
      this._reactName = n, this._targetInst = a, this.type = s, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xs : Au, this.isPropagationStopped = Au, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, Da = ht(lr), ts = Y({}, lr, { view: 0, detail: 0 }), Fp = ht(ts), za, Oa, ns, Zs = Y({}, ts, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ha, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ns && (ns && e.type === "mousemove" ? (za = e.screenX - ns.screenX, Oa = e.screenY - ns.screenY) : Oa = za = 0, ns = e), za);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Oa;
  } }), $u = ht(Zs), Hp = Y({}, Zs, { dataTransfer: 0 }), Wp = ht(Hp), Bp = Y({}, ts, { relatedTarget: 0 }), Fa = ht(Bp), Up = Y({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = ht(Up), qp = Y({}, lr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Qp = ht(qp), Kp = Y({}, lr, { data: 0 }), bu = ht(Kp), Yp = {
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
  function Ha() {
    return Xp;
  }
  var Zp = Y({}, ts, { key: function(e) {
    if (e.key) {
      var t = Yp[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ha, charCode: function(e) {
    return e.type === "keypress" ? Js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), em = ht(Zp), tm = Y({}, Zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Iu = ht(tm), nm = Y({}, ts, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ha }), rm = ht(nm), sm = Y({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), om = ht(sm), am = Y({}, Zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), lm = ht(am), im = [9, 13, 27, 32], Wa = h && "CompositionEvent" in window, rs = null;
  h && "documentMode" in document && (rs = document.documentMode);
  var um = h && "TextEvent" in window && !rs, Lu = h && (!Wa || rs && 8 < rs && 11 >= rs), Mu = " ", Du = !1;
  function zu(e, t) {
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
  function Ou(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ir = !1;
  function cm(e, t) {
    switch (e) {
      case "compositionend":
        return Ou(t);
      case "keypress":
        return t.which !== 32 ? null : (Du = !0, Mu);
      case "textInput":
        return e = t.data, e === Mu && Du ? null : e;
      default:
        return null;
    }
  }
  function dm(e, t) {
    if (ir) return e === "compositionend" || !Wa && zu(e, t) ? (e = Pu(), Gs = Ma = fn = null, ir = !1, e) : null;
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
        return Lu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fm[e.type] : t === "textarea";
  }
  function Hu(e, t, n, s) {
    lu(s), t = so(t, "onChange"), 0 < t.length && (n = new Da("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var ss = null, os = null;
  function pm(e) {
    oc(e, 0);
  }
  function eo(e) {
    var t = pr(e);
    if (Hr(t)) return e;
  }
  function mm(e, t) {
    if (e === "change") return t;
  }
  var Wu = !1;
  if (h) {
    var Ba;
    if (h) {
      var Ua = "oninput" in document;
      if (!Ua) {
        var Bu = document.createElement("div");
        Bu.setAttribute("oninput", "return;"), Ua = typeof Bu.oninput == "function";
      }
      Ba = Ua;
    } else Ba = !1;
    Wu = Ba && (!document.documentMode || 9 < document.documentMode);
  }
  function Uu() {
    ss && (ss.detachEvent("onpropertychange", Vu), os = ss = null);
  }
  function Vu(e) {
    if (e.propertyName === "value" && eo(os)) {
      var t = [];
      Hu(t, os, e, ka(e)), du(pm, t);
    }
  }
  function hm(e, t, n) {
    e === "focusin" ? (Uu(), ss = t, os = n, ss.attachEvent("onpropertychange", Vu)) : e === "focusout" && Uu();
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
  var $t = typeof Object.is == "function" ? Object.is : _m;
  function as(e, t) {
    if ($t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var a = n[s];
      if (!g.call(t, a) || !$t(e[a], t[a])) return !1;
    }
    return !0;
  }
  function qu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Qu(e, t) {
    var n = qu(e);
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
      n = qu(n);
    }
  }
  function Ku(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ku(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Yu() {
    for (var e = window, t = An(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = An(e.document);
    }
    return t;
  }
  function Va(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function xm(e) {
    var t = Yu(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ku(n.ownerDocument.documentElement, n)) {
      if (s !== null && Va(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, u = Math.min(s.start, a);
          s = s.end === void 0 ? u : Math.min(s.end, a), !e.extend && u > s && (a = s, s = u, u = a), a = Qu(n, u);
          var p = Qu(
            n,
            s
          );
          a && p && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== p.node || e.focusOffset !== p.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), u > s ? (e.addRange(t), e.extend(p.node, p.offset)) : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var wm = h && "documentMode" in document && 11 >= document.documentMode, ur = null, qa = null, ls = null, Qa = !1;
  function Gu(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qa || ur == null || ur !== An(s) || (s = ur, "selectionStart" in s && Va(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ls && as(ls, s) || (ls = s, s = so(qa, "onSelect"), 0 < s.length && (t = new Da("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = ur)));
  }
  function to(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var cr = { animationend: to("Animation", "AnimationEnd"), animationiteration: to("Animation", "AnimationIteration"), animationstart: to("Animation", "AnimationStart"), transitionend: to("Transition", "TransitionEnd") }, Ka = {}, Ju = {};
  h && (Ju = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
  function no(e) {
    if (Ka[e]) return Ka[e];
    if (!cr[e]) return e;
    var t = cr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ju) return Ka[e] = t[n];
    return e;
  }
  var Xu = no("animationend"), Zu = no("animationiteration"), ec = no("animationstart"), tc = no("transitionend"), nc = /* @__PURE__ */ new Map(), rc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function pn(e, t) {
    nc.set(e, t), f(t, [e]);
  }
  for (var Ya = 0; Ya < rc.length; Ya++) {
    var Ga = rc[Ya], Sm = Ga.toLowerCase(), km = Ga[0].toUpperCase() + Ga.slice(1);
    pn(Sm, "on" + km);
  }
  pn(Xu, "onAnimationEnd"), pn(Zu, "onAnimationIteration"), pn(ec, "onAnimationStart"), pn("dblclick", "onDoubleClick"), pn("focusin", "onFocus"), pn("focusout", "onBlur"), pn(tc, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function sc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, Sp(s, t, void 0, e), e.currentTarget = null;
  }
  function oc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], a = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var p = s.length - 1; 0 <= p; p--) {
          var k = s[p], j = k.instance, L = k.currentTarget;
          if (k = k.listener, j !== u && a.isPropagationStopped()) break e;
          sc(a, k, L), u = j;
        }
        else for (p = 0; p < s.length; p++) {
          if (k = s[p], j = k.instance, L = k.currentTarget, k = k.listener, j !== u && a.isPropagationStopped()) break e;
          sc(a, k, L), u = j;
        }
      }
    }
    if (Fs) throw e = Na, Fs = !1, Na = null, e;
  }
  function Re(e, t) {
    var n = t[sl];
    n === void 0 && (n = t[sl] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (ac(t, e, 2, !1), n.add(s));
  }
  function Ja(e, t, n) {
    var s = 0;
    t && (s |= 4), ac(n, e, s, t);
  }
  var ro = "_reactListening" + Math.random().toString(36).slice(2);
  function us(e) {
    if (!e[ro]) {
      e[ro] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Cm.has(n) || Ja(n, !1, e), Ja(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ro] || (t[ro] = !0, Ja("selectionchange", !1, t));
    }
  }
  function ac(e, t, n, s) {
    switch (Ru(t)) {
      case 1:
        var a = zp;
        break;
      case 4:
        a = Op;
        break;
      default:
        a = Ia;
    }
    n = a.bind(null, t, n, e), a = void 0, !Ea || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), s ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function Xa(e, t, n, s, a) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var p = s.tag;
      if (p === 3 || p === 4) {
        var k = s.stateNode.containerInfo;
        if (k === a || k.nodeType === 8 && k.parentNode === a) break;
        if (p === 4) for (p = s.return; p !== null; ) {
          var j = p.tag;
          if ((j === 3 || j === 4) && (j = p.stateNode.containerInfo, j === a || j.nodeType === 8 && j.parentNode === a)) return;
          p = p.return;
        }
        for (; k !== null; ) {
          if (p = bn(k), p === null) return;
          if (j = p.tag, j === 5 || j === 6) {
            s = u = p;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    du(function() {
      var L = u, V = ka(n), q = [];
      e: {
        var W = nc.get(e);
        if (W !== void 0) {
          var Z = Da, te = e;
          switch (e) {
            case "keypress":
              if (Js(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = em;
              break;
            case "focusin":
              te = "focus", Z = Fa;
              break;
            case "focusout":
              te = "blur", Z = Fa;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Fa;
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
              Z = $u;
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
            case Xu:
            case Zu:
            case ec:
              Z = Vp;
              break;
            case tc:
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
              Z = Iu;
          }
          var ne = (t & 4) !== 0, ze = !ne && e === "scroll", $ = ne ? W !== null ? W + "Capture" : null : W;
          ne = [];
          for (var R = L, b; R !== null; ) {
            b = R;
            var Q = b.stateNode;
            if (b.tag === 5 && Q !== null && (b = Q, $ !== null && (Q = Vr(R, $), Q != null && ne.push(cs(R, Q, b)))), ze) break;
            R = R.return;
          }
          0 < ne.length && (W = new Z(W, te, null, n, V), q.push({ event: W, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (W = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", W && n !== Sa && (te = n.relatedTarget || n.fromElement) && (bn(te) || te[Yt])) break e;
          if ((Z || W) && (W = V.window === V ? V : (W = V.ownerDocument) ? W.defaultView || W.parentWindow : window, Z ? (te = n.relatedTarget || n.toElement, Z = L, te = te ? bn(te) : null, te !== null && (ze = $n(te), te !== ze || te.tag !== 5 && te.tag !== 6) && (te = null)) : (Z = null, te = L), Z !== te)) {
            if (ne = $u, Q = "onMouseLeave", $ = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ne = Iu, Q = "onPointerLeave", $ = "onPointerEnter", R = "pointer"), ze = Z == null ? W : pr(Z), b = te == null ? W : pr(te), W = new ne(Q, R + "leave", Z, n, V), W.target = ze, W.relatedTarget = b, Q = null, bn(V) === L && (ne = new ne($, R + "enter", te, n, V), ne.target = b, ne.relatedTarget = ze, Q = ne), ze = Q, Z && te) t: {
              for (ne = Z, $ = te, R = 0, b = ne; b; b = dr(b)) R++;
              for (b = 0, Q = $; Q; Q = dr(Q)) b++;
              for (; 0 < R - b; ) ne = dr(ne), R--;
              for (; 0 < b - R; ) $ = dr($), b--;
              for (; R--; ) {
                if (ne === $ || $ !== null && ne === $.alternate) break t;
                ne = dr(ne), $ = dr($);
              }
              ne = null;
            }
            else ne = null;
            Z !== null && lc(q, W, Z, ne, !1), te !== null && ze !== null && lc(q, ze, te, ne, !0);
          }
        }
        e: {
          if (W = L ? pr(L) : window, Z = W.nodeName && W.nodeName.toLowerCase(), Z === "select" || Z === "input" && W.type === "file") var re = mm;
          else if (Fu(W)) if (Wu) re = gm;
          else {
            re = vm;
            var se = hm;
          }
          else (Z = W.nodeName) && Z.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (re = ym);
          if (re && (re = re(e, L))) {
            Hu(q, re, n, V);
            break e;
          }
          se && se(e, W, L), e === "focusout" && (se = W._wrapperState) && se.controlled && W.type === "number" && ya(W, "number", W.value);
        }
        switch (se = L ? pr(L) : window, e) {
          case "focusin":
            (Fu(se) || se.contentEditable === "true") && (ur = se, qa = L, ls = null);
            break;
          case "focusout":
            ls = qa = ur = null;
            break;
          case "mousedown":
            Qa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qa = !1, Gu(q, n, V);
            break;
          case "selectionchange":
            if (wm) break;
          case "keydown":
          case "keyup":
            Gu(q, n, V);
        }
        var oe;
        if (Wa) e: {
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
        else ir ? zu(e, n) && (ue = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ue = "onCompositionStart");
        ue && (Lu && n.locale !== "ko" && (ir || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && ir && (oe = Pu()) : (fn = V, Ma = "value" in fn ? fn.value : fn.textContent, ir = !0)), se = so(L, ue), 0 < se.length && (ue = new bu(ue, e, null, n, V), q.push({ event: ue, listeners: se }), oe ? ue.data = oe : (oe = Ou(n), oe !== null && (ue.data = oe)))), (oe = um ? cm(e, n) : dm(e, n)) && (L = so(L, "onBeforeInput"), 0 < L.length && (V = new bu("onBeforeInput", "beforeinput", null, n, V), q.push({ event: V, listeners: L }), V.data = oe));
      }
      oc(q, t);
    });
  }
  function cs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function so(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var a = e, u = a.stateNode;
      a.tag === 5 && u !== null && (a = u, u = Vr(e, n), u != null && s.unshift(cs(e, u, a)), u = Vr(e, t), u != null && s.push(cs(e, u, a))), e = e.return;
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
  function lc(e, t, n, s, a) {
    for (var u = t._reactName, p = []; n !== null && n !== s; ) {
      var k = n, j = k.alternate, L = k.stateNode;
      if (j !== null && j === s) break;
      k.tag === 5 && L !== null && (k = L, a ? (j = Vr(n, u), j != null && p.unshift(cs(n, j, k))) : a || (j = Vr(n, u), j != null && p.push(cs(n, j, k)))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var jm = /\r\n?/g, Em = /\u0000|\uFFFD/g;
  function ic(e) {
    return (typeof e == "string" ? e : "" + e).replace(jm, `
`).replace(Em, "");
  }
  function oo(e, t, n) {
    if (t = ic(t), ic(e) !== t && n) throw Error(i(425));
  }
  function ao() {
  }
  var Za = null, el = null;
  function tl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var nl = typeof setTimeout == "function" ? setTimeout : void 0, Nm = typeof clearTimeout == "function" ? clearTimeout : void 0, uc = typeof Promise == "function" ? Promise : void 0, Tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof uc < "u" ? function(e) {
    return uc.resolve(null).then(e).catch(Rm);
  } : nl;
  function Rm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function rl(e, t) {
    var n = t, s = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (s === 0) {
          e.removeChild(a), es(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = a;
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
  function cc(e) {
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
  var fr = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + fr, ds = "__reactProps$" + fr, Yt = "__reactContainer$" + fr, sl = "__reactEvents$" + fr, Pm = "__reactListeners$" + fr, Am = "__reactHandles$" + fr;
  function bn(e) {
    var t = e[Wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Yt] || n[Wt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = cc(e); e !== null; ) {
          if (n = e[Wt]) return n;
          e = cc(e);
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
  var ol = [], mr = -1;
  function hn(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > mr || (e.current = ol[mr], ol[mr] = null, mr--);
  }
  function Ne(e, t) {
    mr++, ol[mr] = e.current, e.current = t;
  }
  var vn = {}, Je = hn(vn), at = hn(!1), In = vn;
  function hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return vn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var a = {}, u;
    for (u in n) a[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function lt(e) {
    return e = e.childContextTypes, e != null;
  }
  function io() {
    Pe(at), Pe(Je);
  }
  function dc(e, t, n) {
    if (Je.current !== vn) throw Error(i(168));
    Ne(Je, t), Ne(at, n);
  }
  function fc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var a in s) if (!(a in t)) throw Error(i(108, Se(e) || "Unknown", a));
    return Y({}, n, s);
  }
  function uo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn, In = Je.current, Ne(Je, e), Ne(at, at.current), !0;
  }
  function pc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    n ? (e = fc(e, t, In), s.__reactInternalMemoizedMergedChildContext = e, Pe(at), Pe(Je), Ne(Je, e)) : Pe(at), Ne(at, n);
  }
  var Gt = null, co = !1, al = !1;
  function mc(e) {
    Gt === null ? Gt = [e] : Gt.push(e);
  }
  function $m(e) {
    co = !0, mc(e);
  }
  function yn() {
    if (!al && Gt !== null) {
      al = !0;
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
      } catch (a) {
        throw Gt !== null && (Gt = Gt.slice(e + 1)), vu(Ta, yn), a;
      } finally {
        ke = t, al = !1;
      }
    }
    return null;
  }
  var vr = [], yr = 0, fo = null, po = 0, wt = [], St = 0, Ln = null, Jt = 1, Xt = "";
  function Mn(e, t) {
    vr[yr++] = po, vr[yr++] = fo, fo = e, po = t;
  }
  function hc(e, t, n) {
    wt[St++] = Jt, wt[St++] = Xt, wt[St++] = Ln, Ln = e;
    var s = Jt;
    e = Xt;
    var a = 32 - At(s) - 1;
    s &= ~(1 << a), n += 1;
    var u = 32 - At(t) + a;
    if (30 < u) {
      var p = a - a % 5;
      u = (s & (1 << p) - 1).toString(32), s >>= p, a -= p, Jt = 1 << 32 - At(t) + a | n << a | s, Xt = u + e;
    } else Jt = 1 << u | n << a | s, Xt = e;
  }
  function ll(e) {
    e.return !== null && (Mn(e, 1), hc(e, 1, 0));
  }
  function il(e) {
    for (; e === fo; ) fo = vr[--yr], vr[yr] = null, po = vr[--yr], vr[yr] = null;
    for (; e === Ln; ) Ln = wt[--St], wt[St] = null, Xt = wt[--St], wt[St] = null, Jt = wt[--St], wt[St] = null;
  }
  var vt = null, yt = null, Ae = !1, bt = null;
  function vc(e, t) {
    var n = Et(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function yc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, vt = e, yt = mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, vt = e, yt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: Jt, overflow: Xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, vt = e, yt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ul(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function cl(e) {
    if (Ae) {
      var t = yt;
      if (t) {
        var n = t;
        if (!yc(e, t)) {
          if (ul(e)) throw Error(i(418));
          t = mn(n.nextSibling);
          var s = vt;
          t && yc(e, t) ? vc(s, n) : (e.flags = e.flags & -4097 | 2, Ae = !1, vt = e);
        }
      } else {
        if (ul(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Ae = !1, vt = e;
      }
    }
  }
  function gc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    vt = e;
  }
  function mo(e) {
    if (e !== vt) return !1;
    if (!Ae) return gc(e), Ae = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !tl(e.type, e.memoizedProps)), t && (t = yt)) {
      if (ul(e)) throw _c(), Error(i(418));
      for (; t; ) vc(e, t), t = mn(t.nextSibling);
    }
    if (gc(e), e.tag === 13) {
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
  function _c() {
    for (var e = yt; e; ) e = mn(e.nextSibling);
  }
  function gr() {
    yt = vt = null, Ae = !1;
  }
  function dl(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  var bm = z.ReactCurrentBatchConfig;
  function ps(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var a = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(p) {
          var k = a.refs;
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
  function xc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function wc(e) {
    function t($, R) {
      if (e) {
        var b = $.deletions;
        b === null ? ($.deletions = [R], $.flags |= 16) : b.push(R);
      }
    }
    function n($, R) {
      if (!e) return null;
      for (; R !== null; ) t($, R), R = R.sibling;
      return null;
    }
    function s($, R) {
      for ($ = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? $.set(R.key, R) : $.set(R.index, R), R = R.sibling;
      return $;
    }
    function a($, R) {
      return $ = jn($, R), $.index = 0, $.sibling = null, $;
    }
    function u($, R, b) {
      return $.index = b, e ? (b = $.alternate, b !== null ? (b = b.index, b < R ? ($.flags |= 2, R) : b) : ($.flags |= 2, R)) : ($.flags |= 1048576, R);
    }
    function p($) {
      return e && $.alternate === null && ($.flags |= 2), $;
    }
    function k($, R, b, Q) {
      return R === null || R.tag !== 6 ? (R = ni(b, $.mode, Q), R.return = $, R) : (R = a(R, b), R.return = $, R);
    }
    function j($, R, b, Q) {
      var re = b.type;
      return re === J ? V($, R, b.props.children, Q, b.key) : R !== null && (R.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Ce && xc(re) === R.type) ? (Q = a(R, b.props), Q.ref = ps($, R, b), Q.return = $, Q) : (Q = Oo(b.type, b.key, b.props, null, $.mode, Q), Q.ref = ps($, R, b), Q.return = $, Q);
    }
    function L($, R, b, Q) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== b.containerInfo || R.stateNode.implementation !== b.implementation ? (R = ri(b, $.mode, Q), R.return = $, R) : (R = a(R, b.children || []), R.return = $, R);
    }
    function V($, R, b, Q, re) {
      return R === null || R.tag !== 7 ? (R = Un(b, $.mode, Q, re), R.return = $, R) : (R = a(R, b), R.return = $, R);
    }
    function q($, R, b) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = ni("" + R, $.mode, b), R.return = $, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case U:
            return b = Oo(R.type, R.key, R.props, null, $.mode, b), b.ref = ps($, null, R), b.return = $, b;
          case I:
            return R = ri(R, $.mode, b), R.return = $, R;
          case Ce:
            var Q = R._init;
            return q($, Q(R._payload), b);
        }
        if (Wr(R) || X(R)) return R = Un(R, $.mode, b, null), R.return = $, R;
        ho($, R);
      }
      return null;
    }
    function W($, R, b, Q) {
      var re = R !== null ? R.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number") return re !== null ? null : k($, R, "" + b, Q);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case U:
            return b.key === re ? j($, R, b, Q) : null;
          case I:
            return b.key === re ? L($, R, b, Q) : null;
          case Ce:
            return re = b._init, W(
              $,
              R,
              re(b._payload),
              Q
            );
        }
        if (Wr(b) || X(b)) return re !== null ? null : V($, R, b, Q, null);
        ho($, b);
      }
      return null;
    }
    function Z($, R, b, Q, re) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return $ = $.get(b) || null, k(R, $, "" + Q, re);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case U:
            return $ = $.get(Q.key === null ? b : Q.key) || null, j(R, $, Q, re);
          case I:
            return $ = $.get(Q.key === null ? b : Q.key) || null, L(R, $, Q, re);
          case Ce:
            var se = Q._init;
            return Z($, R, b, se(Q._payload), re);
        }
        if (Wr(Q) || X(Q)) return $ = $.get(b) || null, V(R, $, Q, re, null);
        ho(R, Q);
      }
      return null;
    }
    function te($, R, b, Q) {
      for (var re = null, se = null, oe = R, ue = R = 0, qe = null; oe !== null && ue < b.length; ue++) {
        oe.index > ue ? (qe = oe, oe = null) : qe = oe.sibling;
        var we = W($, oe, b[ue], Q);
        if (we === null) {
          oe === null && (oe = qe);
          break;
        }
        e && oe && we.alternate === null && t($, oe), R = u(we, R, ue), se === null ? re = we : se.sibling = we, se = we, oe = qe;
      }
      if (ue === b.length) return n($, oe), Ae && Mn($, ue), re;
      if (oe === null) {
        for (; ue < b.length; ue++) oe = q($, b[ue], Q), oe !== null && (R = u(oe, R, ue), se === null ? re = oe : se.sibling = oe, se = oe);
        return Ae && Mn($, ue), re;
      }
      for (oe = s($, oe); ue < b.length; ue++) qe = Z(oe, $, ue, b[ue], Q), qe !== null && (e && qe.alternate !== null && oe.delete(qe.key === null ? ue : qe.key), R = u(qe, R, ue), se === null ? re = qe : se.sibling = qe, se = qe);
      return e && oe.forEach(function(En) {
        return t($, En);
      }), Ae && Mn($, ue), re;
    }
    function ne($, R, b, Q) {
      var re = X(b);
      if (typeof re != "function") throw Error(i(150));
      if (b = re.call(b), b == null) throw Error(i(151));
      for (var se = re = null, oe = R, ue = R = 0, qe = null, we = b.next(); oe !== null && !we.done; ue++, we = b.next()) {
        oe.index > ue ? (qe = oe, oe = null) : qe = oe.sibling;
        var En = W($, oe, we.value, Q);
        if (En === null) {
          oe === null && (oe = qe);
          break;
        }
        e && oe && En.alternate === null && t($, oe), R = u(En, R, ue), se === null ? re = En : se.sibling = En, se = En, oe = qe;
      }
      if (we.done) return n(
        $,
        oe
      ), Ae && Mn($, ue), re;
      if (oe === null) {
        for (; !we.done; ue++, we = b.next()) we = q($, we.value, Q), we !== null && (R = u(we, R, ue), se === null ? re = we : se.sibling = we, se = we);
        return Ae && Mn($, ue), re;
      }
      for (oe = s($, oe); !we.done; ue++, we = b.next()) we = Z(oe, $, ue, we.value, Q), we !== null && (e && we.alternate !== null && oe.delete(we.key === null ? ue : we.key), R = u(we, R, ue), se === null ? re = we : se.sibling = we, se = we);
      return e && oe.forEach(function(fh) {
        return t($, fh);
      }), Ae && Mn($, ue), re;
    }
    function ze($, R, b, Q) {
      if (typeof b == "object" && b !== null && b.type === J && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case U:
            e: {
              for (var re = b.key, se = R; se !== null; ) {
                if (se.key === re) {
                  if (re = b.type, re === J) {
                    if (se.tag === 7) {
                      n($, se.sibling), R = a(se, b.props.children), R.return = $, $ = R;
                      break e;
                    }
                  } else if (se.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Ce && xc(re) === se.type) {
                    n($, se.sibling), R = a(se, b.props), R.ref = ps($, se, b), R.return = $, $ = R;
                    break e;
                  }
                  n($, se);
                  break;
                } else t($, se);
                se = se.sibling;
              }
              b.type === J ? (R = Un(b.props.children, $.mode, Q, b.key), R.return = $, $ = R) : (Q = Oo(b.type, b.key, b.props, null, $.mode, Q), Q.ref = ps($, R, b), Q.return = $, $ = Q);
            }
            return p($);
          case I:
            e: {
              for (se = b.key; R !== null; ) {
                if (R.key === se) if (R.tag === 4 && R.stateNode.containerInfo === b.containerInfo && R.stateNode.implementation === b.implementation) {
                  n($, R.sibling), R = a(R, b.children || []), R.return = $, $ = R;
                  break e;
                } else {
                  n($, R);
                  break;
                }
                else t($, R);
                R = R.sibling;
              }
              R = ri(b, $.mode, Q), R.return = $, $ = R;
            }
            return p($);
          case Ce:
            return se = b._init, ze($, R, se(b._payload), Q);
        }
        if (Wr(b)) return te($, R, b, Q);
        if (X(b)) return ne($, R, b, Q);
        ho($, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, R !== null && R.tag === 6 ? (n($, R.sibling), R = a(R, b), R.return = $, $ = R) : (n($, R), R = ni(b, $.mode, Q), R.return = $, $ = R), p($)) : n($, R);
    }
    return ze;
  }
  var _r = wc(!0), Sc = wc(!1), vo = hn(null), yo = null, xr = null, fl = null;
  function pl() {
    fl = xr = yo = null;
  }
  function ml(e) {
    var t = vo.current;
    Pe(vo), e._currentValue = t;
  }
  function hl(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function wr(e, t) {
    yo = e, fl = xr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (it = !0), e.firstContext = null);
  }
  function kt(e) {
    var t = e._currentValue;
    if (fl !== e) if (e = { context: e, memoizedValue: t, next: null }, xr === null) {
      if (yo === null) throw Error(i(308));
      xr = e, yo.dependencies = { lanes: 0, firstContext: e };
    } else xr = xr.next = e;
    return t;
  }
  var Dn = null;
  function vl(e) {
    Dn === null ? Dn = [e] : Dn.push(e);
  }
  function kc(e, t, n, s) {
    var a = t.interleaved;
    return a === null ? (n.next = n, vl(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Zt(e, s);
  }
  function Zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var gn = !1;
  function yl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function en(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function _n(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (_e & 2) !== 0) {
      var a = s.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), s.pending = t, Zt(e, n);
    }
    return a = s.interleaved, a === null ? (t.next = t, vl(s)) : (t.next = a.next, a.next = t), s.interleaved = t, Zt(e, n);
  }
  function go(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Aa(e, n);
    }
  }
  function jc(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var a = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? a = u = p : u = u.next = p, n = n.next;
        } while (n !== null);
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      n = { baseState: s.baseState, firstBaseUpdate: a, lastBaseUpdate: u, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function _o(e, t, n, s) {
    var a = e.updateQueue;
    gn = !1;
    var u = a.firstBaseUpdate, p = a.lastBaseUpdate, k = a.shared.pending;
    if (k !== null) {
      a.shared.pending = null;
      var j = k, L = j.next;
      j.next = null, p === null ? u = L : p.next = L, p = j;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, k = V.lastBaseUpdate, k !== p && (k === null ? V.firstBaseUpdate = L : k.next = L, V.lastBaseUpdate = j));
    }
    if (u !== null) {
      var q = a.baseState;
      p = 0, V = L = j = null, k = u;
      do {
        var W = k.lane, Z = k.eventTime;
        if ((s & W) === W) {
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
            switch (W = t, Z = n, ne.tag) {
              case 1:
                if (te = ne.payload, typeof te == "function") {
                  q = te.call(Z, q, W);
                  break e;
                }
                q = te;
                break e;
              case 3:
                te.flags = te.flags & -65537 | 128;
              case 0:
                if (te = ne.payload, W = typeof te == "function" ? te.call(Z, q, W) : te, W == null) break e;
                q = Y({}, q, W);
                break e;
              case 2:
                gn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, W = a.effects, W === null ? a.effects = [k] : W.push(k));
        } else Z = { eventTime: Z, lane: W, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, V === null ? (L = V = Z, j = q) : V = V.next = Z, p |= W;
        if (k = k.next, k === null) {
          if (k = a.shared.pending, k === null) break;
          W = k, k = W.next, W.next = null, a.lastBaseUpdate = W, a.shared.pending = null;
        }
      } while (!0);
      if (V === null && (j = q), a.baseState = j, a.firstBaseUpdate = L, a.lastBaseUpdate = V, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          p |= a.lane, a = a.next;
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      Fn |= p, e.lanes = p, e.memoizedState = q;
    }
  }
  function Ec(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], a = s.callback;
      if (a !== null) {
        if (s.callback = null, s = n, typeof a != "function") throw Error(i(191, a));
        a.call(s);
      }
    }
  }
  var ms = {}, Bt = hn(ms), hs = hn(ms), vs = hn(ms);
  function zn(e) {
    if (e === ms) throw Error(i(174));
    return e;
  }
  function gl(e, t) {
    switch (Ne(vs, t), Ne(hs, e), Ne(Bt, ms), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : _a(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _a(t, e);
    }
    Pe(Bt), Ne(Bt, t);
  }
  function Sr() {
    Pe(Bt), Pe(hs), Pe(vs);
  }
  function Nc(e) {
    zn(vs.current);
    var t = zn(Bt.current), n = _a(t, e.type);
    t !== n && (Ne(hs, e), Ne(Bt, n));
  }
  function _l(e) {
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
  var xl = [];
  function wl() {
    for (var e = 0; e < xl.length; e++) xl[e]._workInProgressVersionPrimary = null;
    xl.length = 0;
  }
  var wo = z.ReactCurrentDispatcher, Sl = z.ReactCurrentBatchConfig, On = 0, Ie = null, Fe = null, Ue = null, So = !1, ys = !1, gs = 0, Im = 0;
  function Xe() {
    throw Error(i(321));
  }
  function kl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!$t(e[n], t[n])) return !1;
    return !0;
  }
  function Cl(e, t, n, s, a, u) {
    if (On = u, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wo.current = e === null || e.memoizedState === null ? zm : Om, e = n(s, a), ys) {
      u = 0;
      do {
        if (ys = !1, gs = 0, 25 <= u) throw Error(i(301));
        u += 1, Ue = Fe = null, t.updateQueue = null, wo.current = Fm, e = n(s, a);
      } while (ys);
    }
    if (wo.current = jo, t = Fe !== null && Fe.next !== null, On = 0, Ue = Fe = Ie = null, So = !1, t) throw Error(i(300));
    return e;
  }
  function jl() {
    var e = gs !== 0;
    return gs = 0, e;
  }
  function Ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Ie.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function Ct() {
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
  function El(e) {
    var t = Ct(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = Fe, a = s.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var p = a.next;
        a.next = u.next, u.next = p;
      }
      s.baseQueue = a = u, n.pending = null;
    }
    if (a !== null) {
      u = a.next, s = s.baseState;
      var k = p = null, j = null, L = u;
      do {
        var V = L.lane;
        if ((On & V) === V) j !== null && (j = j.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), s = L.hasEagerState ? L.eagerState : e(s, L.action);
        else {
          var q = {
            lane: V,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          j === null ? (k = j = q, p = s) : j = j.next = q, Ie.lanes |= V, Fn |= V;
        }
        L = L.next;
      } while (L !== null && L !== u);
      j === null ? p = s : j.next = k, $t(s, t.memoizedState) || (it = !0), t.memoizedState = s, t.baseState = p, t.baseQueue = j, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        u = a.lane, Ie.lanes |= u, Fn |= u, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Nl(e) {
    var t = Ct(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var p = a = a.next;
      do
        u = e(u, p.action), p = p.next;
      while (p !== a);
      $t(u, t.memoizedState) || (it = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function Tc() {
  }
  function Rc(e, t) {
    var n = Ie, s = Ct(), a = t(), u = !$t(s.memoizedState, a);
    if (u && (s.memoizedState = a, it = !0), s = s.queue, Tl($c.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, xs(9, Ac.bind(null, n, s, a, t), void 0, null), Ve === null) throw Error(i(349));
      (On & 30) !== 0 || Pc(n, t, a);
    }
    return a;
  }
  function Pc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ac(e, t, n, s) {
    t.value = n, t.getSnapshot = s, bc(t) && Ic(e);
  }
  function $c(e, t, n) {
    return n(function() {
      bc(t) && Ic(e);
    });
  }
  function bc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !$t(e, n);
    } catch {
      return !0;
    }
  }
  function Ic(e) {
    var t = Zt(e, 1);
    t !== null && Dt(t, e, 1, -1);
  }
  function Lc(e) {
    var t = Ut();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _s, lastRenderedState: e }, t.queue = e, e = e.dispatch = Dm.bind(null, Ie, e), [t.memoizedState, e];
  }
  function xs(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Mc() {
    return Ct().memoizedState;
  }
  function ko(e, t, n, s) {
    var a = Ut();
    Ie.flags |= e, a.memoizedState = xs(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function Co(e, t, n, s) {
    var a = Ct();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Fe !== null) {
      var p = Fe.memoizedState;
      if (u = p.destroy, s !== null && kl(s, p.deps)) {
        a.memoizedState = xs(t, n, u, s);
        return;
      }
    }
    Ie.flags |= e, a.memoizedState = xs(1 | t, n, u, s);
  }
  function Dc(e, t) {
    return ko(8390656, 8, e, t);
  }
  function Tl(e, t) {
    return Co(2048, 8, e, t);
  }
  function zc(e, t) {
    return Co(4, 2, e, t);
  }
  function Oc(e, t) {
    return Co(4, 4, e, t);
  }
  function Fc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Hc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Co(4, 4, Fc.bind(null, t, e), n);
  }
  function Rl() {
  }
  function Wc(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && kl(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Bc(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && kl(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Uc(e, t, n) {
    return (On & 21) === 0 ? (e.baseState && (e.baseState = !1, it = !0), e.memoizedState = n) : ($t(n, t) || (n = xu(), Ie.lanes |= n, Fn |= n, e.baseState = !0), t);
  }
  function Lm(e, t) {
    var n = ke;
    ke = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Sl.transition;
    Sl.transition = {};
    try {
      e(!1), t();
    } finally {
      ke = n, Sl.transition = s;
    }
  }
  function Vc() {
    return Ct().memoizedState;
  }
  function Mm(e, t, n) {
    var s = kn(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, qc(e)) Qc(t, n);
    else if (n = kc(e, t, n, s), n !== null) {
      var a = ot();
      Dt(n, e, s, a), Kc(n, t, s);
    }
  }
  function Dm(e, t, n) {
    var s = kn(e), a = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (qc(e)) Qc(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var p = t.lastRenderedState, k = u(p, n);
        if (a.hasEagerState = !0, a.eagerState = k, $t(k, p)) {
          var j = t.interleaved;
          j === null ? (a.next = a, vl(t)) : (a.next = j.next, j.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = kc(e, t, a, s), n !== null && (a = ot(), Dt(n, e, s, a), Kc(n, t, s));
    }
  }
  function qc(e) {
    var t = e.alternate;
    return e === Ie || t !== null && t === Ie;
  }
  function Qc(e, t) {
    ys = So = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Kc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Aa(e, n);
    }
  }
  var jo = { readContext: kt, useCallback: Xe, useContext: Xe, useEffect: Xe, useImperativeHandle: Xe, useInsertionEffect: Xe, useLayoutEffect: Xe, useMemo: Xe, useReducer: Xe, useRef: Xe, useState: Xe, useDebugValue: Xe, useDeferredValue: Xe, useTransition: Xe, useMutableSource: Xe, useSyncExternalStore: Xe, useId: Xe, unstable_isNewReconciler: !1 }, zm = { readContext: kt, useCallback: function(e, t) {
    return Ut().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: kt, useEffect: Dc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ko(
      4194308,
      4,
      Fc.bind(null, t, e),
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
  }, useState: Lc, useDebugValue: Rl, useDeferredValue: function(e) {
    return Ut().memoizedState = e;
  }, useTransition: function() {
    var e = Lc(!1), t = e[0];
    return e = Lm.bind(null, e[1]), Ut().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Ie, a = Ut();
    if (Ae) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Ve === null) throw Error(i(349));
      (On & 30) !== 0 || Pc(s, t, n);
    }
    a.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return a.queue = u, Dc($c.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, xs(9, Ac.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Ut(), t = Ve.identifierPrefix;
    if (Ae) {
      var n = Xt, s = Jt;
      n = (s & ~(1 << 32 - At(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Im++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Om = {
    readContext: kt,
    useCallback: Wc,
    useContext: kt,
    useEffect: Tl,
    useImperativeHandle: Hc,
    useInsertionEffect: zc,
    useLayoutEffect: Oc,
    useMemo: Bc,
    useReducer: El,
    useRef: Mc,
    useState: function() {
      return El(_s);
    },
    useDebugValue: Rl,
    useDeferredValue: function(e) {
      var t = Ct();
      return Uc(t, Fe.memoizedState, e);
    },
    useTransition: function() {
      var e = El(_s)[0], t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Tc,
    useSyncExternalStore: Rc,
    useId: Vc,
    unstable_isNewReconciler: !1
  }, Fm = { readContext: kt, useCallback: Wc, useContext: kt, useEffect: Tl, useImperativeHandle: Hc, useInsertionEffect: zc, useLayoutEffect: Oc, useMemo: Bc, useReducer: Nl, useRef: Mc, useState: function() {
    return Nl(_s);
  }, useDebugValue: Rl, useDeferredValue: function(e) {
    var t = Ct();
    return Fe === null ? t.memoizedState = e : Uc(t, Fe.memoizedState, e);
  }, useTransition: function() {
    var e = Nl(_s)[0], t = Ct().memoizedState;
    return [e, t];
  }, useMutableSource: Tc, useSyncExternalStore: Rc, useId: Vc, unstable_isNewReconciler: !1 };
  function It(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Pl(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Eo = { isMounted: function(e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = ot(), a = kn(e), u = en(s, a);
    u.payload = t, n != null && (u.callback = n), t = _n(e, u, a), t !== null && (Dt(t, e, a, s), go(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = ot(), a = kn(e), u = en(s, a);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = _n(e, u, a), t !== null && (Dt(t, e, a, s), go(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ot(), s = kn(e), a = en(n, s);
    a.tag = 2, t != null && (a.callback = t), t = _n(e, a, s), t !== null && (Dt(t, e, s, n), go(t, e, s));
  } };
  function Yc(e, t, n, s, a, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, p) : t.prototype && t.prototype.isPureReactComponent ? !as(n, s) || !as(a, u) : !0;
  }
  function Gc(e, t, n) {
    var s = !1, a = vn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = kt(u) : (a = lt(t) ? In : Je.current, s = t.contextTypes, u = (s = s != null) ? hr(e, a) : vn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Eo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Jc(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Eo.enqueueReplaceState(t, t.state, null);
  }
  function Al(e, t, n, s) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, yl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? a.context = kt(u) : (u = lt(t) ? In : Je.current, a.context = hr(e, u)), a.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Pl(e, t, u, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Eo.enqueueReplaceState(a, a.state, null), _o(e, n, a, s), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function kr(e, t) {
    try {
      var n = "", s = t;
      do
        n += ve(s), s = s.return;
      while (s);
      var a = n;
    } catch (u) {
      a = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function $l(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Hm = typeof WeakMap == "function" ? WeakMap : Map;
  function Xc(e, t, n) {
    n = en(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      bo || (bo = !0, Kl = s), bl(e, t);
    }, n;
  }
  function Zc(e, t, n) {
    n = en(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var a = t.value;
      n.payload = function() {
        return s(a);
      }, n.callback = function() {
        bl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      bl(e, t), typeof s != "function" && (wn === null ? wn = /* @__PURE__ */ new Set([this]) : wn.add(this));
      var p = t.stack;
      this.componentDidCatch(t.value, { componentStack: p !== null ? p : "" });
    }), n;
  }
  function ed(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Hm();
      var a = /* @__PURE__ */ new Set();
      s.set(t, a);
    } else a = s.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), s.set(t, a));
    a.has(n) || (a.add(n), e = th.bind(null, e, t, n), t.then(e, e));
  }
  function td(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function nd(e, t, n, s, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = en(-1, 1), t.tag = 2, _n(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Wm = z.ReactCurrentOwner, it = !1;
  function st(e, t, n, s) {
    t.child = e === null ? Sc(t, null, n, s) : _r(t, e.child, n, s);
  }
  function rd(e, t, n, s, a) {
    n = n.render;
    var u = t.ref;
    return wr(t, a), s = Cl(e, t, n, s, u, a), n = jl(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, tn(e, t, a)) : (Ae && n && ll(t), t.flags |= 1, st(e, t, s, a), t.child);
  }
  function sd(e, t, n, s, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ti(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, od(e, t, u, s, a)) : (e = Oo(n.type, null, s, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & a) === 0) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : as, n(p, s) && e.ref === t.ref) return tn(e, t, a);
    }
    return t.flags |= 1, e = jn(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function od(e, t, n, s, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (as(u, s) && e.ref === t.ref) if (it = !1, t.pendingProps = s = u, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (it = !0);
      else return t.lanes = e.lanes, tn(e, t, a);
    }
    return Il(e, t, n, s, a);
  }
  function ad(e, t, n) {
    var s = t.pendingProps, a = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(jr, gt), gt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(jr, gt), gt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Ne(jr, gt), gt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Ne(jr, gt), gt |= s;
    return st(e, t, a, n), t.child;
  }
  function ld(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Il(e, t, n, s, a) {
    var u = lt(n) ? In : Je.current;
    return u = hr(t, u), wr(t, a), n = Cl(e, t, n, s, u, a), s = jl(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, tn(e, t, a)) : (Ae && s && ll(t), t.flags |= 1, st(e, t, n, a), t.child);
  }
  function id(e, t, n, s, a) {
    if (lt(n)) {
      var u = !0;
      uo(t);
    } else u = !1;
    if (wr(t, a), t.stateNode === null) To(e, t), Gc(t, n, s), Al(t, n, s, a), s = !0;
    else if (e === null) {
      var p = t.stateNode, k = t.memoizedProps;
      p.props = k;
      var j = p.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = kt(L) : (L = lt(n) ? In : Je.current, L = hr(t, L));
      var V = n.getDerivedStateFromProps, q = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      q || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (k !== s || j !== L) && Jc(t, p, s, L), gn = !1;
      var W = t.memoizedState;
      p.state = W, _o(t, s, p, a), j = t.memoizedState, k !== s || W !== j || at.current || gn ? (typeof V == "function" && (Pl(t, n, V, s), j = t.memoizedState), (k = gn || Yc(t, n, k, s, W, j, L)) ? (q || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = j), p.props = s, p.state = j, p.context = L, s = k) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      p = t.stateNode, Cc(e, t), k = t.memoizedProps, L = t.type === t.elementType ? k : It(t.type, k), p.props = L, q = t.pendingProps, W = p.context, j = n.contextType, typeof j == "object" && j !== null ? j = kt(j) : (j = lt(n) ? In : Je.current, j = hr(t, j));
      var Z = n.getDerivedStateFromProps;
      (V = typeof Z == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (k !== q || W !== j) && Jc(t, p, s, j), gn = !1, W = t.memoizedState, p.state = W, _o(t, s, p, a);
      var te = t.memoizedState;
      k !== q || W !== te || at.current || gn ? (typeof Z == "function" && (Pl(t, n, Z, s), te = t.memoizedState), (L = gn || Yc(t, n, L, s, W, te, j) || !1) ? (V || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, te, j), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, te, j)), typeof p.componentDidUpdate == "function" && (t.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || k === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = te), p.props = s, p.state = te, p.context = j, s = L) : (typeof p.componentDidUpdate != "function" || k === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Ll(e, t, n, s, u, a);
  }
  function Ll(e, t, n, s, a, u) {
    ld(e, t);
    var p = (t.flags & 128) !== 0;
    if (!s && !p) return a && pc(t, n, !1), tn(e, t, u);
    s = t.stateNode, Wm.current = t;
    var k = p && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && p ? (t.child = _r(t, e.child, null, u), t.child = _r(t, null, k, u)) : st(e, t, k, u), t.memoizedState = s.state, a && pc(t, n, !0), t.child;
  }
  function ud(e) {
    var t = e.stateNode;
    t.pendingContext ? dc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && dc(e, t.context, !1), gl(e, t.containerInfo);
  }
  function cd(e, t, n, s, a) {
    return gr(), dl(a), t.flags |= 256, st(e, t, n, s), t.child;
  }
  var Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function dd(e, t, n) {
    var s = t.pendingProps, a = be.current, u = !1, p = (t.flags & 128) !== 0, k;
    if ((k = p) || (k = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Ne(be, a & 1), e === null)
      return cl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (p = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, p = { mode: "hidden", children: p }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = p) : u = Fo(p, s, 0, null), e = Un(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Dl(n), t.memoizedState = Ml, e) : zl(t, p));
    if (a = e.memoizedState, a !== null && (k = a.dehydrated, k !== null)) return Bm(e, t, p, s, k, a, n);
    if (u) {
      u = s.fallback, p = t.mode, a = e.child, k = a.sibling;
      var j = { mode: "hidden", children: s.children };
      return (p & 1) === 0 && t.child !== a ? (s = t.child, s.childLanes = 0, s.pendingProps = j, t.deletions = null) : (s = jn(a, j), s.subtreeFlags = a.subtreeFlags & 14680064), k !== null ? u = jn(k, u) : (u = Un(u, p, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, p = e.child.memoizedState, p = p === null ? Dl(n) : { baseLanes: p.baseLanes | n, cachePool: null, transitions: p.transitions }, u.memoizedState = p, u.childLanes = e.childLanes & ~n, t.memoizedState = Ml, s;
    }
    return u = e.child, e = u.sibling, s = jn(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function zl(e, t) {
    return t = Fo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function No(e, t, n, s) {
    return s !== null && dl(s), _r(t, e.child, null, n), e = zl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bm(e, t, n, s, a, u, p) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = $l(Error(i(422))), No(e, t, p, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, a = t.mode, s = Fo({ mode: "visible", children: s.children }, a, 0, null), u = Un(u, a, p, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && _r(t, e.child, null, p), t.child.memoizedState = Dl(p), t.memoizedState = Ml, u);
    if ((t.mode & 1) === 0) return No(e, t, p, null);
    if (a.data === "$!") {
      if (s = a.nextSibling && a.nextSibling.dataset, s) var k = s.dgst;
      return s = k, u = Error(i(419)), s = $l(u, s, void 0), No(e, t, p, s);
    }
    if (k = (p & e.childLanes) !== 0, it || k) {
      if (s = Ve, s !== null) {
        switch (p & -p) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (s.suspendedLanes | p)) !== 0 ? 0 : a, a !== 0 && a !== u.retryLane && (u.retryLane = a, Zt(e, a), Dt(s, e, a, -1));
      }
      return ei(), s = $l(Error(i(421))), No(e, t, p, s);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = nh.bind(null, e), a._reactRetry = t, null) : (e = u.treeContext, yt = mn(a.nextSibling), vt = t, Ae = !0, bt = null, e !== null && (wt[St++] = Jt, wt[St++] = Xt, wt[St++] = Ln, Jt = e.id, Xt = e.overflow, Ln = t), t = zl(t, s.children), t.flags |= 4096, t);
  }
  function fd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), hl(e.return, t, n);
  }
  function Ol(e, t, n, s, a) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: a } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = a);
  }
  function pd(e, t, n) {
    var s = t.pendingProps, a = s.revealOrder, u = s.tail;
    if (st(e, t, s.children, n), s = be.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fd(e, n, t);
        else if (e.tag === 19) fd(e, n, t);
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
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && xo(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Ol(t, !1, a, n, u);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && xo(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Ol(t, !0, n, null, u);
        break;
      case "together":
        Ol(t, !1, null, null, void 0);
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
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, (n & t.childLanes) === 0) return null;
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
        ud(t), gr();
        break;
      case 5:
        Nc(t);
        break;
      case 1:
        lt(t.type) && uo(t);
        break;
      case 4:
        gl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, a = t.memoizedProps.value;
        Ne(vo, s._currentValue), s._currentValue = a;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Ne(be, be.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? dd(e, t, n) : (Ne(be, be.current & 1), e = tn(e, t, n), e !== null ? e.sibling : null);
        Ne(be, be.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return pd(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ne(be, be.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ad(e, t, n);
    }
    return tn(e, t, n);
  }
  var md, Fl, hd, vd;
  md = function(e, t) {
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
  }, Fl = function() {
  }, hd = function(e, t, n, s) {
    var a = e.memoizedProps;
    if (a !== s) {
      e = t.stateNode, zn(Bt.current);
      var u = null;
      switch (n) {
        case "input":
          a = ha(e, a), s = ha(e, s), u = [];
          break;
        case "select":
          a = Y({}, a, { value: void 0 }), s = Y({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          a = ga(e, a), s = ga(e, s), u = [];
          break;
        default:
          typeof a.onClick != "function" && typeof s.onClick == "function" && (e.onclick = ao);
      }
      xa(n, s);
      var p;
      n = null;
      for (L in a) if (!s.hasOwnProperty(L) && a.hasOwnProperty(L) && a[L] != null) if (L === "style") {
        var k = a[L];
        for (p in k) k.hasOwnProperty(p) && (n || (n = {}), n[p] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (d.hasOwnProperty(L) ? u || (u = []) : (u = u || []).push(L, null));
      for (L in s) {
        var j = s[L];
        if (k = a != null ? a[L] : void 0, s.hasOwnProperty(L) && j !== k && (j != null || k != null)) if (L === "style") if (k) {
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
  }, vd = function(e, t, n, s) {
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
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, s |= a.subtreeFlags & 14680064, s |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, s |= a.subtreeFlags, s |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function Vm(e, t, n) {
    var s = t.pendingProps;
    switch (il(t), t.tag) {
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
        return Ze(t), null;
      case 1:
        return lt(t.type) && io(), Ze(t), null;
      case 3:
        return s = t.stateNode, Sr(), Pe(at), Pe(Je), wl(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (mo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bt !== null && (Jl(bt), bt = null))), Fl(e, t), Ze(t), null;
      case 5:
        _l(t);
        var a = zn(vs.current);
        if (n = t.type, e !== null && t.stateNode != null) hd(e, t, n, s, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return Ze(t), null;
          }
          if (e = zn(Bt.current), mo(t)) {
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
                for (a = 0; a < is.length; a++) Re(is[a], s);
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
                Gi(s, u), Re("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, Re("invalid", s);
                break;
              case "textarea":
                Zi(s, u), Re("invalid", s);
            }
            xa(n, u), a = null;
            for (var p in u) if (u.hasOwnProperty(p)) {
              var k = u[p];
              p === "children" ? typeof k == "string" ? s.textContent !== k && (u.suppressHydrationWarning !== !0 && oo(s.textContent, k, e), a = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && oo(
                s.textContent,
                k,
                e
              ), a = ["children", "" + k]) : d.hasOwnProperty(p) && k != null && p === "onScroll" && Re("scroll", s);
            }
            switch (n) {
              case "input":
                Pn(s), Xi(s, u, !0);
                break;
              case "textarea":
                Pn(s), tu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = ao);
            }
            s = a, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            p = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = nu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = p.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = p.createElement(n, { is: s.is }) : (e = p.createElement(n), n === "select" && (p = e, s.multiple ? p.multiple = !0 : s.size && (p.size = s.size))) : e = p.createElementNS(e, n), e[Wt] = t, e[ds] = s, md(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (p = wa(n, s), n) {
                case "dialog":
                  Re("cancel", e), Re("close", e), a = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", e), a = s;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < is.length; a++) Re(is[a], e);
                  a = s;
                  break;
                case "source":
                  Re("error", e), a = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Re(
                    "error",
                    e
                  ), Re("load", e), a = s;
                  break;
                case "details":
                  Re("toggle", e), a = s;
                  break;
                case "input":
                  Gi(e, s), a = ha(e, s), Re("invalid", e);
                  break;
                case "option":
                  a = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, a = Y({}, s, { value: void 0 }), Re("invalid", e);
                  break;
                case "textarea":
                  Zi(e, s), a = ga(e, s), Re("invalid", e);
                  break;
                default:
                  a = s;
              }
              xa(n, a), k = a;
              for (u in k) if (k.hasOwnProperty(u)) {
                var j = k[u];
                u === "style" ? ou(e, j) : u === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && ru(e, j)) : u === "children" ? typeof j == "string" ? (n !== "textarea" || j !== "") && Br(e, j) : typeof j == "number" && Br(e, "" + j) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? j != null && u === "onScroll" && Re("scroll", e) : j != null && M(e, u, j, p));
              }
              switch (n) {
                case "input":
                  Pn(e), Xi(e, s, !1);
                  break;
                case "textarea":
                  Pn(e), tu(e);
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
                  typeof a.onClick == "function" && (e.onclick = ao);
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
        return Ze(t), null;
      case 6:
        if (e && t.stateNode != null) vd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (n = zn(vs.current), zn(Bt.current), mo(t)) {
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
        return Ze(t), null;
      case 13:
        if (Pe(be), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ae && yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) _c(), gr(), t.flags |= 98560, u = !1;
          else if (u = mo(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Wt] = t;
            } else gr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ze(t), u = !1;
          } else bt !== null && (Jl(bt), bt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (be.current & 1) !== 0 ? He === 0 && (He = 3) : ei())), t.updateQueue !== null && (t.flags |= 4), Ze(t), null);
      case 4:
        return Sr(), Fl(e, t), e === null && us(t.stateNode.containerInfo), Ze(t), null;
      case 10:
        return ml(t.type._context), Ze(t), null;
      case 17:
        return lt(t.type) && io(), Ze(t), null;
      case 19:
        if (Pe(be), u = t.memoizedState, u === null) return Ze(t), null;
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
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ws(u, !0), u.tail === null && u.tailMode === "hidden" && !p.alternate && !Ae) return Ze(t), null;
          } else 2 * De() - u.renderingStartTime > Er && n !== 1073741824 && (t.flags |= 128, s = !0, ws(u, !1), t.lanes = 4194304);
          u.isBackwards ? (p.sibling = t.child, t.child = p) : (n = u.last, n !== null ? n.sibling = p : t.child = p, u.last = p);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = De(), t.sibling = null, n = be.current, Ne(be, s ? n & 1 | 2 : n & 1), t) : (Ze(t), null);
      case 22:
      case 23:
        return Zl(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (gt & 1073741824) !== 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function qm(e, t) {
    switch (il(t), t.tag) {
      case 1:
        return lt(t.type) && io(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Sr(), Pe(at), Pe(Je), wl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return _l(t), null;
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
        return ml(t.type._context), null;
      case 22:
      case 23:
        return Zl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ro = !1, et = !1, Qm = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
  function Cr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      Le(e, t, s);
    }
    else n.current = null;
  }
  function Hl(e, t, n) {
    try {
      n();
    } catch (s) {
      Le(e, t, s);
    }
  }
  var yd = !1;
  function Km(e, t) {
    if (Za = Ks, e = Yu(), Va(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var a = s.anchorOffset, u = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var p = 0, k = -1, j = -1, L = 0, V = 0, q = e, W = null;
          t: for (; ; ) {
            for (var Z; q !== n || a !== 0 && q.nodeType !== 3 || (k = p + a), q !== u || s !== 0 && q.nodeType !== 3 || (j = p + s), q.nodeType === 3 && (p += q.nodeValue.length), (Z = q.firstChild) !== null; )
              W = q, q = Z;
            for (; ; ) {
              if (q === e) break t;
              if (W === n && ++L === a && (k = p), W === u && ++V === s && (j = p), (Z = q.nextSibling) !== null) break;
              q = W, W = q.parentNode;
            }
            q = Z;
          }
          n = k === -1 || j === -1 ? null : { start: k, end: j };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (el = { focusedElem: e, selectionRange: n }, Ks = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
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
              var ne = te.memoizedProps, ze = te.memoizedState, $ = t.stateNode, R = $.getSnapshotBeforeUpdate(t.elementType === t.type ? ne : It(t.type, ne), ze);
              $.__reactInternalSnapshotBeforeUpdate = R;
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
      } catch (Q) {
        Le(t, t.return, Q);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ee = e;
        break;
      }
      ee = t.return;
    }
    return te = yd, yd = !1, te;
  }
  function Ss(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var a = s = s.next;
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          a.destroy = void 0, u !== void 0 && Hl(t, n, u);
        }
        a = a.next;
      } while (a !== s);
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
  function Wl(e) {
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
  function gd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Wt], delete t[ds], delete t[sl], delete t[Pm], delete t[Am])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function _d(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function xd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || _d(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Bl(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ao));
    else if (s !== 4 && (e = e.child, e !== null)) for (Bl(e, t, n), e = e.sibling; e !== null; ) Bl(e, t, n), e = e.sibling;
  }
  function Ul(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Ul(e, t, n), e = e.sibling; e !== null; ) Ul(e, t, n), e = e.sibling;
  }
  var Ke = null, Lt = !1;
  function xn(e, t, n) {
    for (n = n.child; n !== null; ) wd(e, t, n), n = n.sibling;
  }
  function wd(e, t, n) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function") try {
      Ht.onCommitFiberUnmount(Ws, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        et || Cr(n, t);
      case 6:
        var s = Ke, a = Lt;
        Ke = null, xn(e, t, n), Ke = s, Lt = a, Ke !== null && (Lt ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ke.removeChild(n.stateNode));
        break;
      case 18:
        Ke !== null && (Lt ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? rl(e.parentNode, n) : e.nodeType === 1 && rl(e, n), es(e)) : rl(Ke, n.stateNode));
        break;
      case 4:
        s = Ke, a = Lt, Ke = n.stateNode.containerInfo, Lt = !0, xn(e, t, n), Ke = s, Lt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!et && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          a = s = s.next;
          do {
            var u = a, p = u.destroy;
            u = u.tag, p !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Hl(n, t, p), a = a.next;
          } while (a !== s);
        }
        xn(e, t, n);
        break;
      case 1:
        if (!et && (Cr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
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
        n.mode & 1 ? (et = (s = et) || n.memoizedState !== null, xn(e, t, n), et = s) : xn(e, t, n);
        break;
      default:
        xn(e, t, n);
    }
  }
  function Sd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Qm()), t.forEach(function(s) {
        var a = rh.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(a, a));
      });
    }
  }
  function Mt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var a = n[s];
      try {
        var u = e, p = t, k = p;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Ke = k.stateNode, Lt = !1;
              break e;
            case 3:
              Ke = k.stateNode.containerInfo, Lt = !0;
              break e;
            case 4:
              Ke = k.stateNode.containerInfo, Lt = !0;
              break e;
          }
          k = k.return;
        }
        if (Ke === null) throw Error(i(160));
        wd(u, p, a), Ke = null, Lt = !1;
        var j = a.alternate;
        j !== null && (j.return = null), a.return = null;
      } catch (L) {
        Le(a, t, L);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) kd(t, e), t = t.sibling;
  }
  function kd(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Mt(t, e), Vt(e), s & 4) {
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
        Mt(t, e), Vt(e), s & 512 && n !== null && Cr(n, n.return);
        break;
      case 5:
        if (Mt(t, e), Vt(e), s & 512 && n !== null && Cr(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            Br(a, "");
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        if (s & 4 && (a = e.stateNode, a != null)) {
          var u = e.memoizedProps, p = n !== null ? n.memoizedProps : u, k = e.type, j = e.updateQueue;
          if (e.updateQueue = null, j !== null) try {
            k === "input" && u.type === "radio" && u.name != null && Ji(a, u), wa(k, p);
            var L = wa(k, u);
            for (p = 0; p < j.length; p += 2) {
              var V = j[p], q = j[p + 1];
              V === "style" ? ou(a, q) : V === "dangerouslySetInnerHTML" ? ru(a, q) : V === "children" ? Br(a, q) : M(a, V, q, L);
            }
            switch (k) {
              case "input":
                va(a, u);
                break;
              case "textarea":
                eu(a, u);
                break;
              case "select":
                var W = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!u.multiple;
                var Z = u.value;
                Z != null ? rr(a, !!u.multiple, Z, !1) : W !== !!u.multiple && (u.defaultValue != null ? rr(
                  a,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : rr(a, !!u.multiple, u.multiple ? [] : "", !1));
            }
            a[ds] = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 6:
        if (Mt(t, e), Vt(e), s & 4) {
          if (e.stateNode === null) throw Error(i(162));
          a = e.stateNode, u = e.memoizedProps;
          try {
            a.nodeValue = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (Mt(t, e), Vt(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          es(t.containerInfo);
        } catch (ne) {
          Le(e, e.return, ne);
        }
        break;
      case 4:
        Mt(t, e), Vt(e);
        break;
      case 13:
        Mt(t, e), Vt(e), a = e.child, a.flags & 8192 && (u = a.memoizedState !== null, a.stateNode.isHidden = u, !u || a.alternate !== null && a.alternate.memoizedState !== null || (Ql = De())), s & 4 && Sd(e);
        break;
      case 22:
        if (V = n !== null && n.memoizedState !== null, e.mode & 1 ? (et = (L = et) || V, Mt(t, e), et = L) : Mt(t, e), Vt(e), s & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !V && (e.mode & 1) !== 0) for (ee = e, V = e.child; V !== null; ) {
            for (q = ee = V; ee !== null; ) {
              switch (W = ee, Z = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ss(4, W, W.return);
                  break;
                case 1:
                  Cr(W, W.return);
                  var te = W.stateNode;
                  if (typeof te.componentWillUnmount == "function") {
                    s = W, n = W.return;
                    try {
                      t = s, te.props = t.memoizedProps, te.state = t.memoizedState, te.componentWillUnmount();
                    } catch (ne) {
                      Le(s, n, ne);
                    }
                  }
                  break;
                case 5:
                  Cr(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Ed(q);
                    continue;
                  }
              }
              Z !== null ? (Z.return = W, ee = Z) : Ed(q);
            }
            V = V.sibling;
          }
          e: for (V = null, q = e; ; ) {
            if (q.tag === 5) {
              if (V === null) {
                V = q;
                try {
                  a = q.stateNode, L ? (u = a.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = q.stateNode, j = q.memoizedProps.style, p = j != null && j.hasOwnProperty("display") ? j.display : null, k.style.display = su("display", p));
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
        Mt(t, e), Vt(e), s & 4 && Sd(e);
        break;
      case 21:
        break;
      default:
        Mt(
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
            if (_d(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var a = s.stateNode;
            s.flags & 32 && (Br(a, ""), s.flags &= -33);
            var u = xd(e);
            Ul(e, u, a);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo, k = xd(e);
            Bl(e, k, p);
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
    ee = e, Cd(e);
  }
  function Cd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ee !== null; ) {
      var a = ee, u = a.child;
      if (a.tag === 22 && s) {
        var p = a.memoizedState !== null || Ro;
        if (!p) {
          var k = a.alternate, j = k !== null && k.memoizedState !== null || et;
          k = Ro;
          var L = et;
          if (Ro = p, (et = j) && !L) for (ee = a; ee !== null; ) p = ee, j = p.child, p.tag === 22 && p.memoizedState !== null ? Nd(a) : j !== null ? (j.return = p, ee = j) : Nd(a);
          for (; u !== null; ) ee = u, Cd(u), u = u.sibling;
          ee = a, Ro = k, et = L;
        }
        jd(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = a, ee = u) : jd(e);
    }
  }
  function jd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              et || Po(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !et) if (n === null) s.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : It(t.type, n.memoizedProps);
                s.componentDidUpdate(a, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Ec(t, u, s);
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
                Ec(t, p, n);
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
          et || t.flags & 512 && Wl(t);
        } catch (W) {
          Le(t, t.return, W);
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
  function Ed(e) {
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
  function Nd(e) {
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
              var a = t.return;
              try {
                s.componentDidMount();
              } catch (j) {
                Le(t, a, j);
              }
            }
            var u = t.return;
            try {
              Wl(t);
            } catch (j) {
              Le(t, u, j);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Wl(t);
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
  var Gm = Math.ceil, Ao = z.ReactCurrentDispatcher, Vl = z.ReactCurrentOwner, jt = z.ReactCurrentBatchConfig, _e = 0, Ve = null, Oe = null, Ye = 0, gt = 0, jr = hn(0), He = 0, ks = null, Fn = 0, $o = 0, ql = 0, Cs = null, ut = null, Ql = 0, Er = 1 / 0, nn = null, bo = !1, Kl = null, wn = null, Io = !1, Sn = null, Lo = 0, js = 0, Yl = null, Mo = -1, Do = 0;
  function ot() {
    return (_e & 6) !== 0 ? De() : Mo !== -1 ? Mo : Mo = De();
  }
  function kn(e) {
    return (e.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && Ye !== 0 ? Ye & -Ye : bm.transition !== null ? (Do === 0 && (Do = xu()), Do) : (e = ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ru(e.type)), e);
  }
  function Dt(e, t, n, s) {
    if (50 < js) throw js = 0, Yl = null, Error(i(185));
    Yr(e, n, s), ((_e & 2) === 0 || e !== Ve) && (e === Ve && ((_e & 2) === 0 && ($o |= n), He === 4 && Cn(e, Ye)), ct(e, s), n === 1 && _e === 0 && (t.mode & 1) === 0 && (Er = De() + 500, co && yn()));
  }
  function ct(e, t) {
    var n = e.callbackNode;
    bp(e, t);
    var s = Vs(e, e === Ve ? Ye : 0);
    if (s === 0) n !== null && yu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && yu(n), t === 1) e.tag === 0 ? $m(Rd.bind(null, e)) : mc(Rd.bind(null, e)), Tm(function() {
        (_e & 6) === 0 && yn();
      }), n = null;
      else {
        switch (wu(s)) {
          case 1:
            n = Ta;
            break;
          case 4:
            n = gu;
            break;
          case 16:
            n = Hs;
            break;
          case 536870912:
            n = _u;
            break;
          default:
            n = Hs;
        }
        n = Dd(n, Td.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Td(e, t) {
    if (Mo = -1, Do = 0, (_e & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (Nr() && e.callbackNode !== n) return null;
    var s = Vs(e, e === Ve ? Ye : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = zo(e, s);
    else {
      t = s;
      var a = _e;
      _e |= 2;
      var u = Ad();
      (Ve !== e || Ye !== t) && (nn = null, Er = De() + 500, Wn(e, t));
      do
        try {
          Zm();
          break;
        } catch (k) {
          Pd(e, k);
        }
      while (!0);
      pl(), Ao.current = u, _e = a, Oe !== null ? t = 0 : (Ve = null, Ye = 0, t = He);
    }
    if (t !== 0) {
      if (t === 2 && (a = Ra(e), a !== 0 && (s = a, t = Gl(e, a))), t === 1) throw n = ks, Wn(e, 0), Cn(e, s), ct(e, De()), n;
      if (t === 6) Cn(e, s);
      else {
        if (a = e.current.alternate, (s & 30) === 0 && !Jm(a) && (t = zo(e, s), t === 2 && (u = Ra(e), u !== 0 && (s = u, t = Gl(e, u))), t === 1)) throw n = ks, Wn(e, 0), Cn(e, s), ct(e, De()), n;
        switch (e.finishedWork = a, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Bn(e, ut, nn);
            break;
          case 3:
            if (Cn(e, s), (s & 130023424) === s && (t = Ql + 500 - De(), 10 < t)) {
              if (Vs(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & s) !== s) {
                ot(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = nl(Bn.bind(null, e, ut, nn), t);
              break;
            }
            Bn(e, ut, nn);
            break;
          case 4:
            if (Cn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, a = -1; 0 < s; ) {
              var p = 31 - At(s);
              u = 1 << p, p = t[p], p > a && (a = p), s &= ~u;
            }
            if (s = a, s = De() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Gm(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = nl(Bn.bind(null, e, ut, nn), s);
              break;
            }
            Bn(e, ut, nn);
            break;
          case 5:
            Bn(e, ut, nn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return ct(e, De()), e.callbackNode === n ? Td.bind(null, e) : null;
  }
  function Gl(e, t) {
    var n = Cs;
    return e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256), e = zo(e, t), e !== 2 && (t = ut, ut = n, t !== null && Jl(t)), e;
  }
  function Jl(e) {
    ut === null ? ut = e : ut.push.apply(ut, e);
  }
  function Jm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var a = n[s], u = a.getSnapshot;
          a = a.value;
          try {
            if (!$t(u(), a)) return !1;
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
    for (t &= ~ql, t &= ~$o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - At(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Rd(e) {
    if ((_e & 6) !== 0) throw Error(i(327));
    Nr();
    var t = Vs(e, 0);
    if ((t & 1) === 0) return ct(e, De()), null;
    var n = zo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Ra(e);
      s !== 0 && (t = s, n = Gl(e, s));
    }
    if (n === 1) throw n = ks, Wn(e, 0), Cn(e, t), ct(e, De()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, ut, nn), ct(e, De()), null;
  }
  function Xl(e, t) {
    var n = _e;
    _e |= 1;
    try {
      return e(t);
    } finally {
      _e = n, _e === 0 && (Er = De() + 500, co && yn());
    }
  }
  function Hn(e) {
    Sn !== null && Sn.tag === 0 && (_e & 6) === 0 && Nr();
    var t = _e;
    _e |= 1;
    var n = jt.transition, s = ke;
    try {
      if (jt.transition = null, ke = 1, e) return e();
    } finally {
      ke = s, jt.transition = n, _e = t, (_e & 6) === 0 && yn();
    }
  }
  function Zl() {
    gt = jr.current, Pe(jr);
  }
  function Wn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Nm(n)), Oe !== null) for (n = Oe.return; n !== null; ) {
      var s = n;
      switch (il(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && io();
          break;
        case 3:
          Sr(), Pe(at), Pe(Je), wl();
          break;
        case 5:
          _l(s);
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
          ml(s.type._context);
          break;
        case 22:
        case 23:
          Zl();
      }
      n = n.return;
    }
    if (Ve = e, Oe = e = jn(e.current, null), Ye = gt = t, He = 0, ks = null, ql = $o = Fn = 0, ut = Cs = null, Dn !== null) {
      for (t = 0; t < Dn.length; t++) if (n = Dn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var a = s.next, u = n.pending;
        if (u !== null) {
          var p = u.next;
          u.next = a, s.next = p;
        }
        n.pending = s;
      }
      Dn = null;
    }
    return e;
  }
  function Pd(e, t) {
    do {
      var n = Oe;
      try {
        if (pl(), wo.current = jo, So) {
          for (var s = Ie.memoizedState; s !== null; ) {
            var a = s.queue;
            a !== null && (a.pending = null), s = s.next;
          }
          So = !1;
        }
        if (On = 0, Ue = Fe = Ie = null, ys = !1, gs = 0, Vl.current = null, n === null || n.return === null) {
          He = 1, ks = t, Oe = null;
          break;
        }
        e: {
          var u = e, p = n.return, k = n, j = t;
          if (t = Ye, k.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var L = j, V = k, q = V.tag;
            if ((V.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var W = V.alternate;
              W ? (V.updateQueue = W.updateQueue, V.memoizedState = W.memoizedState, V.lanes = W.lanes) : (V.updateQueue = null, V.memoizedState = null);
            }
            var Z = td(p);
            if (Z !== null) {
              Z.flags &= -257, nd(Z, p, k, u, t), Z.mode & 1 && ed(u, L, t), t = Z, j = L;
              var te = t.updateQueue;
              if (te === null) {
                var ne = /* @__PURE__ */ new Set();
                ne.add(j), t.updateQueue = ne;
              } else te.add(j);
              break e;
            } else {
              if ((t & 1) === 0) {
                ed(u, L, t), ei();
                break e;
              }
              j = Error(i(426));
            }
          } else if (Ae && k.mode & 1) {
            var ze = td(p);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), nd(ze, p, k, u, t), dl(kr(j, k));
              break e;
            }
          }
          u = j = kr(j, k), He !== 4 && (He = 2), Cs === null ? Cs = [u] : Cs.push(u), u = p;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var $ = Xc(u, j, t);
                jc(u, $);
                break e;
              case 1:
                k = j;
                var R = u.type, b = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (wn === null || !wn.has(b)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var Q = Zc(u, k, t);
                  jc(u, Q);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        bd(n);
      } catch (re) {
        t = re, Oe === n && n !== null && (Oe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ad() {
    var e = Ao.current;
    return Ao.current = jo, e === null ? jo : e;
  }
  function ei() {
    (He === 0 || He === 3 || He === 2) && (He = 4), Ve === null || (Fn & 268435455) === 0 && ($o & 268435455) === 0 || Cn(Ve, Ye);
  }
  function zo(e, t) {
    var n = _e;
    _e |= 2;
    var s = Ad();
    (Ve !== e || Ye !== t) && (nn = null, Wn(e, t));
    do
      try {
        Xm();
        break;
      } catch (a) {
        Pd(e, a);
      }
    while (!0);
    if (pl(), _e = n, Ao.current = s, Oe !== null) throw Error(i(261));
    return Ve = null, Ye = 0, He;
  }
  function Xm() {
    for (; Oe !== null; ) $d(Oe);
  }
  function Zm() {
    for (; Oe !== null && !Cp(); ) $d(Oe);
  }
  function $d(e) {
    var t = Md(e.alternate, e, gt);
    e.memoizedProps = e.pendingProps, t === null ? bd(e) : Oe = t, Vl.current = null;
  }
  function bd(e) {
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
  function Bn(e, t, n) {
    var s = ke, a = jt.transition;
    try {
      jt.transition = null, ke = 1, eh(e, t, n, s);
    } finally {
      jt.transition = a, ke = s;
    }
    return null;
  }
  function eh(e, t, n, s) {
    do
      Nr();
    while (Sn !== null);
    if ((_e & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Ip(e, u), e === Ve && (Oe = Ve = null, Ye = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Io || (Io = !0, Dd(Hs, function() {
      return Nr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = jt.transition, jt.transition = null;
      var p = ke;
      ke = 1;
      var k = _e;
      _e |= 4, Vl.current = null, Km(e, n), kd(n, e), xm(el), Ks = !!Za, el = Za = null, e.current = n, Ym(n), jp(), _e = k, ke = p, jt.transition = u;
    } else e.current = n;
    if (Io && (Io = !1, Sn = e, Lo = a), u = e.pendingLanes, u === 0 && (wn = null), Tp(n.stateNode), ct(e, De()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], s(a.value, { componentStack: a.stack, digest: a.digest });
    if (bo) throw bo = !1, e = Kl, Kl = null, e;
    return (Lo & 1) !== 0 && e.tag !== 0 && Nr(), u = e.pendingLanes, (u & 1) !== 0 ? e === Yl ? js++ : (js = 0, Yl = e) : js = 0, yn(), null;
  }
  function Nr() {
    if (Sn !== null) {
      var e = wu(Lo), t = jt.transition, n = ke;
      try {
        if (jt.transition = null, ke = 16 > e ? 16 : e, Sn === null) var s = !1;
        else {
          if (e = Sn, Sn = null, Lo = 0, (_e & 6) !== 0) throw Error(i(331));
          var a = _e;
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
                      var W = V.sibling, Z = V.return;
                      if (gd(V), V === L) {
                        ee = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = Z, ee = W;
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
          var R = e.current;
          for (ee = R; ee !== null; ) {
            p = ee;
            var b = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && b !== null) b.return = p, ee = b;
            else e: for (p = R; ee !== null; ) {
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
              var Q = k.sibling;
              if (Q !== null) {
                Q.return = k.return, ee = Q;
                break e;
              }
              ee = k.return;
            }
          }
          if (_e = a, yn(), Ht && typeof Ht.onPostCommitFiberRoot == "function") try {
            Ht.onPostCommitFiberRoot(Ws, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        ke = n, jt.transition = t;
      }
    }
    return !1;
  }
  function Id(e, t, n) {
    t = kr(n, t), t = Xc(e, t, 1), e = _n(e, t, 1), t = ot(), e !== null && (Yr(e, 1, t), ct(e, t));
  }
  function Le(e, t, n) {
    if (e.tag === 3) Id(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Id(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (wn === null || !wn.has(s))) {
          e = kr(n, e), e = Zc(t, e, 1), t = _n(t, e, 1), e = ot(), t !== null && (Yr(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function th(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = ot(), e.pingedLanes |= e.suspendedLanes & n, Ve === e && (Ye & n) === n && (He === 4 || He === 3 && (Ye & 130023424) === Ye && 500 > De() - Ql ? Wn(e, 0) : ql |= n), ct(e, t);
  }
  function Ld(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Us, Us <<= 1, (Us & 130023424) === 0 && (Us = 4194304)));
    var n = ot();
    e = Zt(e, t), e !== null && (Yr(e, t, n), ct(e, n));
  }
  function nh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ld(e, n);
  }
  function rh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    s !== null && s.delete(t), Ld(e, n);
  }
  var Md;
  Md = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || at.current) it = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return it = !1, Um(e, t, n);
      it = (e.flags & 131072) !== 0;
    }
    else it = !1, Ae && (t.flags & 1048576) !== 0 && hc(t, po, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        To(e, t), e = t.pendingProps;
        var a = hr(t, Je.current);
        wr(t, n), a = Cl(null, t, s, e, a, n);
        var u = jl();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, lt(s) ? (u = !0, uo(t)) : u = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, yl(t), a.updater = Eo, t.stateNode = a, a._reactInternals = t, Al(t, s, e, n), t = Ll(null, t, s, !0, u, n)) : (t.tag = 0, Ae && u && ll(t), st(null, t, a, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (To(e, t), e = t.pendingProps, a = s._init, s = a(s._payload), t.type = s, a = t.tag = oh(s), e = It(s, e), a) {
            case 0:
              t = Il(null, t, s, e, n);
              break e;
            case 1:
              t = id(null, t, s, e, n);
              break e;
            case 11:
              t = rd(null, t, s, e, n);
              break e;
            case 14:
              t = sd(null, t, s, It(s.type, e), n);
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
        return s = t.type, a = t.pendingProps, a = t.elementType === s ? a : It(s, a), Il(e, t, s, a, n);
      case 1:
        return s = t.type, a = t.pendingProps, a = t.elementType === s ? a : It(s, a), id(e, t, s, a, n);
      case 3:
        e: {
          if (ud(t), e === null) throw Error(i(387));
          s = t.pendingProps, u = t.memoizedState, a = u.element, Cc(e, t), _o(t, s, null, n);
          var p = t.memoizedState;
          if (s = p.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: p.cache, pendingSuspenseBoundaries: p.pendingSuspenseBoundaries, transitions: p.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            a = kr(Error(i(423)), t), t = cd(e, t, s, n, a);
            break e;
          } else if (s !== a) {
            a = kr(Error(i(424)), t), t = cd(e, t, s, n, a);
            break e;
          } else for (yt = mn(t.stateNode.containerInfo.firstChild), vt = t, Ae = !0, bt = null, n = Sc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (gr(), s === a) {
              t = tn(e, t, n);
              break e;
            }
            st(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Nc(t), e === null && cl(t), s = t.type, a = t.pendingProps, u = e !== null ? e.memoizedProps : null, p = a.children, tl(s, a) ? p = null : u !== null && tl(s, u) && (t.flags |= 32), ld(e, t), st(e, t, p, n), t.child;
      case 6:
        return e === null && cl(t), null;
      case 13:
        return dd(e, t, n);
      case 4:
        return gl(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = _r(t, null, s, n) : st(e, t, s, n), t.child;
      case 11:
        return s = t.type, a = t.pendingProps, a = t.elementType === s ? a : It(s, a), rd(e, t, s, a, n);
      case 7:
        return st(e, t, t.pendingProps, n), t.child;
      case 8:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, a = t.pendingProps, u = t.memoizedProps, p = a.value, Ne(vo, s._currentValue), s._currentValue = p, u !== null) if ($t(u.value, p)) {
            if (u.children === a.children && !at.current) {
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
                  u.lanes |= n, j = u.alternate, j !== null && (j.lanes |= n), hl(
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
              p.lanes |= n, k = p.alternate, k !== null && (k.lanes |= n), hl(p, n, t), p = u.sibling;
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
          st(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, s = t.pendingProps.children, wr(t, n), a = kt(a), s = s(a), t.flags |= 1, st(e, t, s, n), t.child;
      case 14:
        return s = t.type, a = It(s, t.pendingProps), a = It(s.type, a), sd(e, t, s, a, n);
      case 15:
        return od(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, a = t.pendingProps, a = t.elementType === s ? a : It(s, a), To(e, t), t.tag = 1, lt(s) ? (e = !0, uo(t)) : e = !1, wr(t, n), Gc(t, s, a), Al(t, s, a, n), Ll(null, t, s, !0, e, n);
      case 19:
        return pd(e, t, n);
      case 22:
        return ad(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Dd(e, t) {
    return vu(e, t);
  }
  function sh(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Et(e, t, n, s) {
    return new sh(e, t, n, s);
  }
  function ti(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function oh(e) {
    if (typeof e == "function") return ti(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Te) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Oo(e, t, n, s, a, u) {
    var p = 2;
    if (s = e, typeof e == "function") ti(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else e: switch (e) {
      case J:
        return Un(n.children, a, u, t);
      case B:
        p = 8, a |= 8;
        break;
      case K:
        return e = Et(12, n, t, a | 2), e.elementType = K, e.lanes = u, e;
      case Ee:
        return e = Et(13, n, t, a), e.elementType = Ee, e.lanes = u, e;
      case he:
        return e = Et(19, n, t, a), e.elementType = he, e.lanes = u, e;
      case H:
        return Fo(n, a, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case me:
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
    return t = Et(p, n, t, a), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function Un(e, t, n, s) {
    return e = Et(7, e, s, t), e.lanes = n, e;
  }
  function Fo(e, t, n, s) {
    return e = Et(22, e, s, t), e.elementType = H, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ni(e, t, n) {
    return e = Et(6, e, null, t), e.lanes = n, e;
  }
  function ri(e, t, n) {
    return t = Et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function ah(e, t, n, s, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pa(0), this.expirationTimes = Pa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pa(0), this.identifierPrefix = s, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function si(e, t, n, s, a, u, p, k, j) {
    return e = new ah(e, t, n, k, j), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Et(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yl(u), e;
  }
  function lh(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: I, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function zd(e) {
    if (!e) return vn;
    e = e._reactInternals;
    e: {
      if ($n(e) !== e || e.tag !== 1) throw Error(i(170));
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
      if (lt(n)) return fc(e, n, t);
    }
    return t;
  }
  function Od(e, t, n, s, a, u, p, k, j) {
    return e = si(n, s, !0, e, a, u, p, k, j), e.context = zd(null), n = e.current, s = ot(), a = kn(n), u = en(s, a), u.callback = t ?? null, _n(n, u, a), e.current.lanes = a, Yr(e, a, s), ct(e, s), e;
  }
  function Ho(e, t, n, s) {
    var a = t.current, u = ot(), p = kn(a);
    return n = zd(n), t.context === null ? t.context = n : t.pendingContext = n, t = en(u, p), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = _n(a, t, p), e !== null && (Dt(e, a, p, u), go(e, a, p)), p;
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
  function Fd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function oi(e, t) {
    Fd(e, t), (e = e.alternate) && Fd(e, t);
  }
  function ih() {
    return null;
  }
  var Hd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ai(e) {
    this._internalRoot = e;
  }
  Bo.prototype.render = ai.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Ho(e, t, null, null);
  }, Bo.prototype.unmount = ai.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Hn(function() {
        Ho(null, e, null, null);
      }), t[Yt] = null;
    }
  };
  function Bo(e) {
    this._internalRoot = e;
  }
  Bo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Cu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++) ;
      dn.splice(n, 0, e), n === 0 && Nu(e);
    }
  };
  function li(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Uo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Wd() {
  }
  function uh(e, t, n, s, a) {
    if (a) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var L = Wo(p);
          u.call(L);
        };
      }
      var p = Od(t, s, e, 0, null, !1, !1, "", Wd);
      return e._reactRootContainer = p, e[Yt] = p.current, us(e.nodeType === 8 ? e.parentNode : e), Hn(), p;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var L = Wo(j);
        k.call(L);
      };
    }
    var j = si(e, 0, !1, null, null, !1, !1, "", Wd);
    return e._reactRootContainer = j, e[Yt] = j.current, us(e.nodeType === 8 ? e.parentNode : e), Hn(function() {
      Ho(t, j, n, s);
    }), j;
  }
  function Vo(e, t, n, s, a) {
    var u = n._reactRootContainer;
    if (u) {
      var p = u;
      if (typeof a == "function") {
        var k = a;
        a = function() {
          var j = Wo(p);
          k.call(j);
        };
      }
      Ho(t, p, e, a);
    } else p = uh(n, t, e, a, s);
    return Wo(p);
  }
  Su = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Kr(t.pendingLanes);
          n !== 0 && (Aa(t, n | 1), ct(t, De()), (_e & 6) === 0 && (Er = De() + 500, yn()));
        }
        break;
      case 13:
        Hn(function() {
          var s = Zt(e, 1);
          if (s !== null) {
            var a = ot();
            Dt(s, e, 1, a);
          }
        }), oi(e, 1);
    }
  }, $a = function(e) {
    if (e.tag === 13) {
      var t = Zt(e, 134217728);
      if (t !== null) {
        var n = ot();
        Dt(t, e, 134217728, n);
      }
      oi(e, 134217728);
    }
  }, ku = function(e) {
    if (e.tag === 13) {
      var t = kn(e), n = Zt(e, t);
      if (n !== null) {
        var s = ot();
        Dt(n, e, t, s);
      }
      oi(e, t);
    }
  }, Cu = function() {
    return ke;
  }, ju = function(e, t) {
    var n = ke;
    try {
      return ke = e, t();
    } finally {
      ke = n;
    }
  }, Ca = function(e, t, n) {
    switch (t) {
      case "input":
        if (va(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var a = lo(s);
              if (!a) throw Error(i(90));
              Hr(s), va(s, a);
            }
          }
        }
        break;
      case "textarea":
        eu(e, n);
        break;
      case "select":
        t = n.value, t != null && rr(e, !!n.multiple, t, !1);
    }
  }, uu = Xl, cu = Hn;
  var ch = { usingClientEntryPoint: !1, Events: [fs, pr, lo, lu, iu, Xl] }, Es = { findFiberByHostInstance: bn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dh = { bundleType: Es.bundleType, version: Es.version, rendererPackageName: Es.rendererPackageName, rendererConfig: Es.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = mu(e), e === null ? null : e.stateNode;
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
    if (!li(t)) throw Error(i(200));
    return lh(e, t, null, n);
  }, dt.createRoot = function(e, t) {
    if (!li(e)) throw Error(i(299));
    var n = !1, s = "", a = Hd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = si(e, 1, !1, null, null, n, !1, s, a), e[Yt] = t.current, us(e.nodeType === 8 ? e.parentNode : e), new ai(t);
  }, dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = mu(t), e = e === null ? null : e.stateNode, e;
  }, dt.flushSync = function(e) {
    return Hn(e);
  }, dt.hydrate = function(e, t, n) {
    if (!Uo(t)) throw Error(i(200));
    return Vo(null, e, t, !0, n);
  }, dt.hydrateRoot = function(e, t, n) {
    if (!li(e)) throw Error(i(405));
    var s = n != null && n.hydratedSources || null, a = !1, u = "", p = Hd;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (p = n.onRecoverableError)), t = Od(t, null, e, 1, n ?? null, a, !1, u, p), e[Yt] = t.current, us(e), s) for (e = 0; e < s.length; e++) n = s[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new Bo(t);
  }, dt.render = function(e, t, n) {
    if (!Uo(t)) throw Error(i(200));
    return Vo(null, e, t, !1, n);
  }, dt.unmountComponentAtNode = function(e) {
    if (!Uo(e)) throw Error(i(40));
    return e._reactRootContainer ? (Hn(function() {
      Vo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Yt] = null;
      });
    }), !0) : !1;
  }, dt.unstable_batchedUpdates = Xl, dt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Uo(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Vo(e, t, n, !1, s);
  }, dt.version = "18.3.1-next-f1338f8080-20240426", dt;
}
var Gd;
function jf() {
  if (Gd) return ci.exports;
  Gd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (l) {
        console.error(l);
      }
  }
  return r(), ci.exports = xh(), ci.exports;
}
var Jd;
function wh() {
  if (Jd) return Qo;
  Jd = 1;
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
  "Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса.": { ru: "Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса.", en: "Optional. Leave empty if WHISPER_PROMPT_TOKEN is not set in the container. Otherwise enter it without the Bearer prefix. The saved token is hidden and reused for the same address." },
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
const Gh = "_button_180pj_1", Jh = "_full_180pj_32", Xh = "_primary_180pj_37", Zh = "_secondary_180pj_49", ev = "_ghost_180pj_61", tv = "_remove_180pj_83", pi = {
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
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    ...m,
    className: `
        ${pi.button}
        ${pi[l]}
        ${i ? pi.full : ""}
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
    return this.state.failed ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: [
      /* @__PURE__ */ o.jsx("p", { children: w("Не удалось открыть панель. Попробуйте ещё раз.") }),
      /* @__PURE__ */ o.jsx(le, { onClick: () => this.setState({ failed: !1 }), children: w("Открыть повторно") })
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
var Xd = "popstate";
function Zd(r) {
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
function ef(r, l) {
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
    let O = Zd(N) ? N : Ci(E.location, N, A);
    i && i(O, N), x = y() + 1;
    let M = ef(O, x), z = E.createHref(O.mask || O);
    try {
      m.pushState(M, "", z);
    } catch (U) {
      if (U instanceof DOMException && U.name === "DataCloneError")
        throw U;
      d.location.assign(z);
    }
    f && g && g({ action: h, location: E.location, delta: 1 });
  }
  function C(N, A) {
    h = "REPLACE";
    let O = Zd(N) ? N : Ci(E.location, N, A);
    i && i(O, N), x = y();
    let M = ef(O, x), z = E.createHref(O.mask || O);
    m.replaceState(M, "", z), f && g && g({ action: h, location: E.location, delta: 0 });
  }
  function T(N) {
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
      return d.addEventListener(Xd, _), g = N, () => {
        d.removeEventListener(Xd, _), g = null;
      };
    },
    createHref(N) {
      return l(d, N);
    },
    createURL: T,
    encodeLocation(N) {
      let A = T(N);
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
    let _ = Ot([c, y.relativePath]), S = i.concat(y);
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
var cv = /^:[\w-]+$/, dv = 3, fv = 2, pv = 1, mv = 10, hv = -2, tf = (r) => r === "*";
function vv(r, l) {
  let i = r.split("/"), c = i.length;
  return i.some(tf) && (c += hv), l && (c += fv), i.filter((d) => !tf(d)).reduce(
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
      pathname: Ot([f, _.pathname]),
      pathnameBase: Cv(
        Ot([f, _.pathnameBase])
      ),
      route: S
    }), _.pathnameBase !== "/" && (f = Ot([f, _.pathnameBase]));
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
          let T = h[S] || "";
          m = f.slice(0, f.length - T.length).replace(/(.)\/+$/, "$1");
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
  return i ? (i = Af(i), i.startsWith("/") ? f = nf(i.substring(1), "/") : f = nf(i, l)) : f = l, {
    pathname: f,
    search: jv(c),
    hash: Ev(d)
  };
}
function nf(r, l) {
  let i = ra(l).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function mi(r, l, i, c) {
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
    mi("?", "pathname", "search", d)
  ), $e(
    !d.pathname || !d.pathname.includes("#"),
    mi("#", "pathname", "hash", d)
  ), $e(
    !d.search || !d.search.includes("#"),
    mi("#", "search", "hash", d)
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
var Af = (r) => r.replace(/\/\/+/g, "/"), Ot = (r) => Af(r.join("/")), ra = (r) => r.replace(/\/+$/, ""), Cv = (r) => ra(r).replace(/^\/*/, "/"), jv = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, Ev = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, Nv = class {
  constructor(r, l, i, c = !1) {
    this.status = r, this.statusText = l || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function Tv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function Rv(r) {
  let l = r.map((i) => i.route.path).filter(Boolean);
  return Ot(l) || "/";
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
var xt = v.createContext(
  null
);
xt.displayName = "Navigation";
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
  let { basename: i, navigator: c } = v.useContext(xt), { hash: d, pathname: f, search: m } = Ds(r, { relative: l }), h = f;
  return i !== "/" && (h = f === "/" ? i : Ot([i, f])), c.createHref({ pathname: h, search: m, hash: d });
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
  v.useContext(xt).static || v.useLayoutEffect(r);
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
  let r = v.useContext($r), { basename: l, navigator: i } = v.useContext(xt), { matches: c } = v.useContext(Kt), { pathname: d } = pt(), f = JSON.stringify(Li(c)), m = v.useRef(!1);
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
      r == null && l !== "/" && (y.pathname = y.pathname === "/" ? l : Ot([l, y.pathname])), (x.replace ? i.replace : i.push)(
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
  let { navigator: c } = v.useContext(xt), { matches: d } = v.useContext(Kt), f = d[d.length - 1], m = f ? f.params : {}, h = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", x = f && f.route;
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
  let T = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (A) => Object.assign(A, {
        route: i.manifest[A.route.id] || A.route
      })
    )
  ) : Tf(r, { pathname: C });
  Tt(
    x || T != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), Tt(
    T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let E = Vv(
    T && T.map(
      (A) => Object.assign({}, A, {
        params: Object.assign({}, m, A.params),
        pathname: Ot([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            A.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : A.pathname
        ]),
        pathnameBase: A.pathnameBase === "/" ? g : Ot([
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
var hi = /* @__PURE__ */ new WeakMap();
function Bv({
  children: r,
  error: l
}) {
  let { basename: i } = v.useContext(xt);
  if (typeof l == "object" && l && "digest" in l && typeof l.digest == "string") {
    let c = Mv(l.digest);
    if (c) {
      let d = hi.get(l);
      if (d) throw d;
      let f = bf(c.location, i);
      if ($f && !hi.get(l))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw hi.set(l, m), m;
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
        let { loaderData: S, errors: C } = c, T = _.route.loader && !S.hasOwnProperty(_.route.id) && (!C || C[_.route.id] === void 0);
        if (_.route.lazy || T) {
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
      let C, T = !1, E = null, N = null;
      c && (C = f && _.route.id ? f[_.route.id] : void 0, E = _.route.errorElement || Wv, m && (h < 0 && S === 0 ? (Wf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), T = !0, N = null) : h === S && (T = !0, N = _.route.hydrateFallbackElement || null)));
      let A = l.concat(d.slice(0, S + 1)), O = () => {
        let M;
        return C ? M = E : T ? M = N : _.route.Component ? M = /* @__PURE__ */ v.createElement(_.route.Component, null) : _.route.element ? M = _.route.element : M = y, /* @__PURE__ */ v.createElement(
          Uv,
          {
            match: _,
            routeContext: {
              outlet: y,
              matches: A,
              isDataRoute: c != null
            },
            children: M
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
var rf = {};
function Wf(r, l, i) {
  !l && !rf[r] && (rf[r] = !0, Tt(!1, i));
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
function Nn({
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
  let { static: d } = v.useContext(xt);
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
function Ge(r) {
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
    mask: T
  } = i, E = v.useMemo(() => {
    let N = on(x, h);
    return N == null ? null : {
      location: {
        pathname: N,
        search: y,
        hash: _,
        state: S,
        key: C,
        mask: T
      },
      navigationType: c
    };
  }, [h, x, y, _, S, C, c, T]);
  return Tt(
    E != null,
    `<Router basename="${h}"> is not able to match the URL "${x}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ v.createElement(xt.Provider, { value: g }, /* @__PURE__ */ v.createElement(Ms.Provider, { children: l, value: E }));
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
      c.type === Ge,
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
function vi(r) {
  return r != null && !ly.has(r) ? (Tt(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ta}"`
  ), null) : r;
}
function iy(r, l) {
  let i, c, d, f, m;
  if (ny(r)) {
    let h = r.getAttribute("action");
    c = h ? on(h, l) : null, i = r.getAttribute("method") || ea, d = vi(r.getAttribute("enctype")) || ta, f = new FormData(r);
  } else if (ty(r) || ry(r) && (r.type === "submit" || r.type === "image")) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || h.getAttribute("action");
    if (c = g ? on(g, l) : null, i = r.getAttribute("formmethod") || h.getAttribute("method") || ea, d = vi(r.getAttribute("formenctype")) || vi(h.getAttribute("enctype")) || ta, f = new FormData(h, r), !ay()) {
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
function sf(r, l, i, c, d, f) {
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
  }, T = () => {
    d(!1), m(!1);
  };
  return i ? r !== "intent" ? [f, S, {}] : [
    f,
    S,
    {
      onFocus: Ts(h, C),
      onBlur: Ts(g, T),
      onMouseEnter: Ts(x, C),
      onMouseLeave: Ts(y, T),
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
    () => sf(
      r,
      l,
      x,
      f,
      c,
      "data"
    ),
    [r, l, x, f, c]
  ), _ = v.useMemo(
    () => sf(
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
      var z;
      let M = f.routes[O.route.id];
      !M || !M.hasLoader || (!y.some((U) => U.route.id === O.route.id) && O.route.id in g && ((z = m[O.route.id]) != null && z.shouldRevalidate) || M.hasClientLoader ? N = !0 : E.add(O.route.id));
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
  ), T = _y(_);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, S.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "prefetch", as: "fetch", href: E, ...i })), C.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "modulepreload", href: E, ...i })), T.map(({ key: E, link: N }) => (
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
    ...T
  }, E) {
    let { basename: N, navigator: A, useTransitions: O } = v.useContext(xt), M = typeof y == "string" && Uf.test(y), z = bf(y, N);
    y = z.to;
    let U = zv(y, { relative: d }), I = pt(), J = null;
    if (h) {
      let ge = ua(
        h,
        [],
        I.mask ? I.mask.pathname : "/",
        !0
      );
      N !== "/" && (ge.pathname = ge.pathname === "/" ? N : Ot([N, ge.pathname])), J = A.createHref(ge);
    }
    let [B, K, me] = yy(
      c,
      T
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
    let Ee = !(z.isExternal || f), he = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...T,
          ...me,
          href: (Ee ? J : void 0) || z.absoluteURL || U,
          onClick: Ee ? Te : l,
          ref: Sy(E, K),
          target: x,
          "data-discover": !M && i === "render" ? "true" : void 0
        }
      )
    );
    return B && !M ? /* @__PURE__ */ v.createElement(v.Fragment, null, he, /* @__PURE__ */ v.createElement(gy, { page: U })) : he;
  }
);
Vf.displayName = "Link";
var _t = v.forwardRef(
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
    let _ = Ds(m, { relative: x.relative }), S = pt(), C = v.useContext(ca), { navigator: T, basename: E } = v.useContext(xt), N = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $y(_) && h === !0, A = T.encodeLocation ? T.encodeLocation(_).pathname : _.pathname, O = S.pathname, M = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    i || (O = O.toLowerCase(), M = M ? M.toLowerCase() : null, A = A.toLowerCase()), M && E && (M = on(M, E) || M);
    const z = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let U = O === A || !d && O.startsWith(A) && O.charAt(z) === "/", I = M != null && (M === A || !d && M.startsWith(A) && M.charAt(A.length) === "/"), J = {
      isActive: U,
      isPending: I,
      isTransitioning: N
    }, B = U ? l : void 0, K;
    typeof c == "function" ? K = c(J) : K = [
      c,
      U ? "active" : null,
      I ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let me = typeof f == "function" ? f(J) : f;
    return /* @__PURE__ */ v.createElement(
      Vf,
      {
        ...x,
        "aria-current": B,
        className: K,
        ref: y,
        style: me,
        to: m,
        viewTransition: h
      },
      typeof g == "function" ? g(J) : g
    );
  }
);
_t.displayName = "NavLink";
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
  }, T) => {
    let { useTransitions: E } = v.useContext(xt), N = Py(), A = Ay(h, { relative: x }), O = m.toLowerCase() === "get" ? "get" : "post", M = typeof h == "string" && Uf.test(h), z = (U) => {
      if (g && g(U), U.defaultPrevented) return;
      U.preventDefault();
      let I = U.nativeEvent.submitter, J = (I == null ? void 0 : I.getAttribute("formmethod")) || m, B = () => N(I || U.currentTarget, {
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
      E && i !== !1 ? v.startTransition(() => B()) : B();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: T,
        method: O,
        action: A,
        onSubmit: c ? g : z,
        ...C,
        "data-discover": !M && r === "render" ? "true" : void 0
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
        let T = i !== void 0 ? i : Ls(_) === Ls(S), E = () => y(r, {
          replace: T,
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
  ), { basename: l } = v.useContext(xt), i = Yv(), c = r.fetch, d = r.navigate;
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
  let { basename: i } = v.useContext(xt), c = v.useContext(Kt);
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
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Ot([i, f.pathname])), Ls(f);
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
}, Ir = ({ label: r = "Загрузка...", fullscreen: l = !1 }) => /* @__PURE__ */ o.jsxs("div", { className: `${Yo.loader} ${l ? Yo.fullscreen : ""}`, role: "status", "aria-live": "polite", children: [
  /* @__PURE__ */ o.jsx("span", { className: Yo.spinner, "aria-hidden": "true" }),
  r && /* @__PURE__ */ o.jsx("span", { className: Yo.label, children: w(r) })
] }), Dy = "_error_fi1f1_1", zy = {
  error: Dy
}, We = ({ error: r, retry: l, busy: i = !1 }) => r ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: zy.error, children: [
  /* @__PURE__ */ o.jsx("p", { children: w(r) }),
  l && /* @__PURE__ */ o.jsx(le, { variant: "secondary", disabled: i, onClick: l, children: w("Повторить загрузку") })
] }) : null, of = {
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
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? r.code === "whisper_prompt_error" && "message" in r && typeof r.message == "string" ? r.message : of[r.code] ?? l : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? of.connection_lost : l;
}
function Ft() {
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
const af = (r) => {
  const l = Fy(r);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yi = {
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
    } = By() ?? {}, T = c ?? _ ? Number(i ?? y) * 24 / Number(l ?? x) : i ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...yi,
        width: l ?? x ?? yi.width,
        height: l ?? x ?? yi.height,
        stroke: r ?? S,
        strokeWidth: T,
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
        `lucide-${Oy(af(r))}`,
        `lucide-${r}`,
        c
      ),
      ...d
    })
  );
  return i.displayName = af(r), i;
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
], gi = Me("sliders-horizontal", wg);
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
], Ng = Me("x", Eg), nt = (r = 768) => {
  const [l, i] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      i(f.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), l;
}, Rs = "dialogCustomUiOverlay", Go = [], sa = /* @__PURE__ */ new Set();
let Tg = 0, Tr = null, Ni = !1;
function Rg() {
  Ni = !0, window.addEventListener("popstate", () => {
    Ni = !1;
    const r = [...sa];
    sa.clear(), queueMicrotask(() => r.forEach((l) => l()));
  }, { once: !0 }), history.back();
}
function np(r, l) {
  const i = nt(), c = v.useRef(l);
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
    return Ni ? sa.add(x) : x(), () => {
      var y;
      h = !0, sa.delete(x), window.removeEventListener("popstate", g), m && (Go.splice(Go.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[Rs]) === d && (Tr = d, queueMicrotask(() => {
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
  np(r, c);
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
  }, T = (N) => {
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
  }, [r, c]), f ? /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `${Vn.overlay} ${h ? Vn.visible : ""} ${l}`,
      onClick: c,
      children: /* @__PURE__ */ o.jsxs(
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
            /* @__PURE__ */ o.jsx(
              "div",
              {
                className: Vn.handleArea,
                onTouchStart: C,
                onTouchMove: T,
                onTouchEnd: E,
                children: /* @__PURE__ */ o.jsx("div", { className: Vn.handle })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: Vn.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, rp = {
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
function sp(r) {
  var l;
  return (l = Object.entries(rp).find(([i]) => r === i || r === w(i))) == null ? void 0 : l[1];
}
function fa(r) {
  const l = w(rp["Название команды"]);
  return r ? `${l}
UUID: ${r}` : l;
}
const bg = "_labelRow_1w41x_1", Ig = "_helpButton_1w41x_12", Lg = "_tooltip_1w41x_37", Mg = "_helpOverlay_1w41x_56", Dg = "_sheetContent_1w41x_60", Is = {
  labelRow: bg,
  helpButton: Ig,
  tooltip: Lg,
  helpOverlay: Mg,
  sheetContent: Dg
};
function qi({ label: r, htmlFor: l, className: i, hint: c }) {
  const d = c ?? sp(r);
  return /* @__PURE__ */ o.jsxs("div", { className: Is.labelRow, children: [
    /* @__PURE__ */ o.jsx("label", { htmlFor: l, className: i, children: w(r) }),
    d && /* @__PURE__ */ o.jsx(oa, { label: r, description: d })
  ] });
}
function oa({ label: r, description: l = sp(r) ?? "" }) {
  var E, N;
  const i = nt(), [c, d] = v.useState(!1), [f, m] = v.useState({ left: 12, top: 12 }), h = v.useRef(null), g = v.useRef(null), x = v.useRef(), y = v.useId(), _ = () => {
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
    const A = (M) => {
      M.key === "Escape" ? (M.preventDefault(), M.stopImmediatePropagation(), _()) : i && M.key === "Tab" && M.preventDefault();
    };
    window.addEventListener("keydown", A, !0);
    const O = (M) => {
      var z;
      !i && !(M.target instanceof Node && ((z = g.current) != null && z.contains(M.target))) && d(!1);
    };
    return window.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      window.removeEventListener("keydown", A, !0), window.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O);
    };
  }, [c, i]);
  const T = ((E = h.current) == null ? void 0 : E.closest("[data-theme]")) ?? ((N = h.current) == null ? void 0 : N.getRootNode());
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
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
        children: /* @__PURE__ */ o.jsx(eg, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && T && Qf.createPortal(i ? /* @__PURE__ */ o.jsx(Vi, { open: !0, onClose: _, className: Is.helpOverlay, labelledBy: y, children: /* @__PURE__ */ o.jsxs("div", { className: Is.sheetContent, children: [
      /* @__PURE__ */ o.jsx("h3", { id: y, children: w(r) }),
      /* @__PURE__ */ o.jsx("p", { children: w(l) }),
      /* @__PURE__ */ o.jsx(le, { autoFocus: !0, variant: "secondary", onClick: _, children: w("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ o.jsx(
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
    ), T)
  ] });
}
const zg = "_field_1vuim_1", Og = "_label_1vuim_10", Fg = "_inputWrapper_1vuim_18", Hg = "_input_1vuim_18", Wg = "_passwordInput_1vuim_40", Bg = "_passwordToggle_1vuim_66", Ug = "_error_1vuim_95", Vg = "_errorText_1vuim_108", Tn = {
  field: zg,
  label: Og,
  inputWrapper: Fg,
  input: Hg,
  passwordInput: Wg,
  passwordToggle: Bg,
  error: Ug,
  errorText: Vg
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
  return /* @__PURE__ */ o.jsxs("div", { className: Tn.field, children: [
    r && /* @__PURE__ */ o.jsx(qi, { label: r, htmlFor: _, className: Tn.label, hint: l }),
    /* @__PURE__ */ o.jsxs("div", { className: Tn.inputWrapper, children: [
      /* @__PURE__ */ o.jsx(
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
      m === "password" && /* @__PURE__ */ o.jsx(
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
    i && /* @__PURE__ */ o.jsx("span", { id: `${_}-error`, className: Tn.errorText, children: w(i) })
  ] });
}, qg = "_field_1aipr_1", Qg = "_label_1aipr_8", Kg = "_textarea_1aipr_14", Yg = "_error_1aipr_46", Gg = "_errorText_1aipr_55", Ps = {
  field: qg,
  label: Qg,
  textarea: Kg,
  error: Yg,
  errorText: Gg
}, Xn = ({
  label: r,
  hint: l,
  error: i,
  className: c = "",
  id: d,
  ...f
}) => {
  const m = v.useId(), h = d ?? m;
  return /* @__PURE__ */ o.jsxs("div", { className: Ps.field, children: [
    r && /* @__PURE__ */ o.jsx(qi, { label: r, htmlFor: h, className: Ps.label, hint: l }),
    /* @__PURE__ */ o.jsx(
      "textarea",
      {
        id: h,
        ...f,
        className: `
          ${Ps.textarea}
          ${i ? Ps.error : ""}
          ${c}
        `
      }
    ),
    i && /* @__PURE__ */ o.jsx("span", { className: Ps.errorText, children: w(i) })
  ] });
}, Jg = "_form_15zw4_1", Xg = "_actions_15zw4_8", uf = {
  form: Jg,
  actions: Xg
};
function Zg() {
  const r = mt(), l = Ft(), [i, c] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [m, h] = v.useState(""), [g, x] = v.useState(!1), [y, _] = v.useState(!1);
  v.useEffect(() => {
    let T = !0;
    return l.run(async () => {
      const E = await r.getData("get_whisper_prompt");
      T && (c(E), h(E.url), x(!0));
    }, { retryable: !0 }), () => {
      T = !1;
    };
  }, [r, l.run]);
  const S = (T) => {
    c((E) => ({ ...E, ...T })), _(!1);
  }, C = (T) => l.run(async () => {
    const E = await r.saveData({
      url: i.url,
      token: d,
      ...T ? { initial_prompt: i.initial_prompt } : {}
    }, T ? "save_whisper_prompt" : "read_whisper_prompt");
    c((N) => ({ ...N, initial_prompt: E.initial_prompt, has_token: T ? !!(d.trim() || N.has_token && i.url === m) : N.has_token })), _(T), T && (h(i.url), f(""));
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs("section", { className: uf.form, children: [
    /* @__PURE__ */ o.jsx(We, { ...l }),
    !g && !l.error && /* @__PURE__ */ o.jsx(Ir, {}),
    g && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        Be,
        {
          label: w("Адрес API Whisper"),
          hint: w("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300."),
          placeholder: "http://192.168.1.10:10301",
          value: i.url,
          disabled: l.busy,
          onChange: (T) => S({ url: T.target.value })
        }
      ),
      /* @__PURE__ */ o.jsx(
        Be,
        {
          label: w("Токен API Whisper"),
          hint: w("Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса."),
          type: "password",
          value: d,
          disabled: l.busy,
          autoComplete: "new-password",
          placeholder: i.has_token && i.url === m ? w("Токен сохранён; оставьте пустым, чтобы сохранить его") : "",
          onChange: (T) => {
            f(T.target.value), _(!1);
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        Xn,
        {
          label: w("Промпт распознавания"),
          hint: w("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Например: «Насыпь еды. Запусти пылесос. Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После сохранения применяется со следующего распознавания, без перезапуска модели."),
          rows: 10,
          maxLength: 16e3,
          value: i.initial_prompt,
          disabled: l.busy,
          onChange: (T) => S({ initial_prompt: T.target.value })
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: uf.actions, children: [
        /* @__PURE__ */ o.jsx(le, { variant: "secondary", disabled: l.busy || !i.url.trim(), onClick: () => void C(!1), children: w("Прочитать из Whisper") }),
        /* @__PURE__ */ o.jsx(le, { disabled: l.busy || !i.url.trim(), onClick: () => void C(!0), children: w("Сохранить и применить") })
      ] }),
      y && /* @__PURE__ */ o.jsx("p", { role: "status", children: w("Сохранено и применено в Whisper. Перезапуск контейнера не нужен.") })
    ] })
  ] });
}
const op = v.createContext(!1), Qi = () => v.useContext(op), aa = "ha-dialog-ui-remote-server-change", ap = v.createContext(null), Lr = () => v.useContext(ap), e_ = "_overlay_avpnk_1", t_ = "_heading_avpnk_16", n_ = "_close_avpnk_32", r_ = "_nav_avpnk_45", s_ = "_item_avpnk_51", o_ = "_icon_avpnk_70", a_ = "_label_avpnk_78", l_ = "_arrow_avpnk_86", i_ = "_active_avpnk_91", rn = {
  overlay: e_,
  heading: t_,
  close: n_,
  nav: r_,
  item: s_,
  icon: o_,
  label: a_,
  arrow: l_,
  active: i_
};
function u_({ open: r, onClose: l }) {
  const i = Ui(), c = Qi(), d = Lr(), { pathname: f } = pt(), m = v.useId(), h = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: yg },
      { to: "/commands/sub", label: "Второстепенные команды", icon: ug },
      { to: "/commands/direct/main", label: "Прямые команды", icon: lf },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: dg },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: gi },
      ...c ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: gi }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: lf }] : [],
    { to: "/timer", label: "Таймеры", icon: ng },
    { to: "/alarm", label: "Будильники", icon: Jf },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: Zf }] : [],
    ...i && c ? [{ to: "/logs", label: "Логи", icon: gi }] : [],
    { to: "/settings", label: "Настройки", icon: ep }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const x = requestAnimationFrame(() => {
      var y, _, S;
      return (S = ((y = h.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((_ = h.current) == null ? void 0 : _.querySelector("a"))) == null ? void 0 : S.focus();
    });
    return () => cancelAnimationFrame(x);
  }, [r]), /* @__PURE__ */ o.jsx(Vi, { open: r, onClose: l, labelledBy: m, className: rn.overlay, children: /* @__PURE__ */ o.jsxs("div", { ref: h, onKeyDown: (x) => {
    if (x.key !== "Tab") return;
    const y = [...h.current.querySelectorAll("button, a")], _ = y[0], S = y[y.length - 1];
    x.shiftKey && x.target === _ ? (x.preventDefault(), S.focus()) : !x.shiftKey && x.target === S && (x.preventDefault(), _.focus());
  }, children: [
    /* @__PURE__ */ o.jsxs("div", { className: rn.heading, children: [
      /* @__PURE__ */ o.jsx("h2", { id: m, children: w("Разделы") }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: rn.close, "aria-label": w("Закрыть меню разделов"), onClick: l, children: /* @__PURE__ */ o.jsx(Ng, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsx("nav", { className: rn.nav, "aria-label": w("Навигация интеграции"), children: g.map(({ to: x, label: y, icon: _ }) => /* @__PURE__ */ o.jsxs(
      _t,
      {
        to: x,
        end: !0,
        className: ({ isActive: S }) => `${rn.item} ${S ? rn.active : ""}`,
        onClick: (S) => {
          f === x && S.preventDefault(), l();
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: rn.icon, children: /* @__PURE__ */ o.jsx(_, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ o.jsx("span", { className: rn.label, children: w(y) }),
          f === x ? /* @__PURE__ */ o.jsx(Jy, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(Yy, { size: 16, className: rn.arrow, "aria-hidden": "true" })
        ]
      },
      x
    )) })
  ] }) });
}
const c_ = "_search_1h7xe_1", d_ = {
  search: c_
};
function Mr({ value: r, onChange: l }) {
  return /* @__PURE__ */ o.jsxs("div", { className: d_.search, children: [
    /* @__PURE__ */ o.jsx(_g, { size: 18, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx(
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
const f_ = "_header_1pxju_1", p_ = "_bar_1pxju_9", m_ = "_tools_1pxju_18", h_ = "_title_1pxju_31", v_ = "_menuButton_1pxju_38", y_ = "_active_1pxju_76", qn = {
  header: f_,
  bar: p_,
  tools: m_,
  title: h_,
  menuButton: v_,
  active: y_
}, Rt = ({ title: r = "", search: l, beforeSearch: i }) => {
  const c = nt(), [d, f] = v.useState(!1), m = v.useRef(null), h = () => {
    var g;
    f(!1), (g = m.current) == null || g.focus();
  };
  return v.useEffect(() => {
    c || f(!1);
  }, [c]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { className: qn.header, children: [
      /* @__PURE__ */ o.jsxs("div", { className: qn.bar, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-label": w("Открыть меню Home Assistant"),
            className: qn.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ o.jsx(hg, { size: 20 })
          }
        ),
        /* @__PURE__ */ o.jsx("h1", { className: qn.title, children: w(r) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            ref: m,
            "aria-label": w("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${qn.menuButton} ${d ? qn.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ o.jsx(pg, { size: 20 })
          }
        )
      ] }),
      c && (i || l) && /* @__PURE__ */ o.jsxs("div", { className: qn.tools, children: [
        i,
        l && /* @__PURE__ */ o.jsx(Mr, { ...l })
      ] })
    ] }),
    c && /* @__PURE__ */ o.jsx(u_, { open: d, onClose: h })
  ] });
}, g_ = "_tabs_14hon_1", __ = "_dropdown_14hon_14", x_ = "_tab_14hon_1", w_ = "_active_14hon_47", S_ = "_menu_14hon_57", k_ = "_chevron_14hon_74", C_ = "_menuItem_14hon_82", fe = {
  tabs: g_,
  dropdown: __,
  tab: x_,
  active: w_,
  menu: S_,
  chevron: k_,
  menuItem: C_
}, Pt = () => {
  const r = nt(), l = Ui(), i = Qi(), c = Lr(), d = pt(), [f, m] = v.useState(!1), h = v.useRef(null), g = v.useRef(null), x = v.useId();
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
    return /* @__PURE__ */ o.jsxs("div", { className: fe.tabs, children: [
      c === !0 && /* @__PURE__ */ o.jsxs(
        _t,
        {
          to: "/scripts",
          className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab,
          children: [
            /* @__PURE__ */ o.jsx(lg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: w(c ? "Действия удалённых команд" : "Запуск скриптов") })
          ]
        }
      ),
      c === !1 && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: fe.dropdown,
          ref: h,
          onKeyDown: (y) => {
            var _;
            y.key === "Escape" && f && (y.stopPropagation(), m(!1), (_ = g.current) == null || _.focus());
          },
          children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                ref: g,
                className: `${fe.tab} ${d.pathname.startsWith("/commands") ? fe.active : ""}`,
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
                  /* @__PURE__ */ o.jsx(sg, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ o.jsx("span", { children: w("Команды") }),
                  /* @__PURE__ */ o.jsx(Xf, { size: 14, className: fe.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ o.jsxs(
              "nav",
              {
                id: x,
                className: fe.menu,
                "aria-label": w("Разделы команд"),
                onClick: () => m(!1),
                children: [
                  /* @__PURE__ */ o.jsx(
                    _t,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: w("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    _t,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: w("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    _t,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: w("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    _t,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: w("Ответы по умолчанию")
                    }
                  ),
                  i && /* @__PURE__ */ o.jsx(
                    _t,
                    {
                      to: "/commands/whisper",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: w("Промпт распознавания")
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        _t,
        {
          to: "/timer",
          className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab,
          children: [
            /* @__PURE__ */ o.jsx(Cg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: w("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        _t,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab,
          children: [
            /* @__PURE__ */ o.jsx(Jf, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: w("Будильники") })
          ]
        }
      ),
      i && /* @__PURE__ */ o.jsxs(_t, { to: "/downloads", className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab, children: [
        /* @__PURE__ */ o.jsx(Zf, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: w("Импорт и экспорт") })
      ] }),
      l && i && /* @__PURE__ */ o.jsx(_t, { to: "/logs", className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab, children: w("Логи") }),
      /* @__PURE__ */ o.jsxs(
        _t,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab,
          children: [
            /* @__PURE__ */ o.jsx(ep, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: w("Настройки") })
          ]
        }
      )
    ] });
}, j_ = "_page_z6937_7", E_ = "_header_z6937_19", N_ = "_headerTop_z6937_24", T_ = "_heading_z6937_31", R_ = "_title_z6937_36", P_ = "_description_z6937_45", A_ = "_actions_z6937_52", $_ = "_list_z6937_57", b_ = "_innerTabs_z6937_88", I_ = "_innerTab_z6937_88", L_ = "_activeInnerTab_z6937_121", M_ = "_settingsActions_z6937_131", D_ = "_listSentinel_z6937_141", z_ = "_settingsSections_z6937_145", O_ = "_settingsSection_z6937_145", F_ = "_settingsMobileActions_z6937_171", H_ = "_connectionFields_z6937_191", W_ = "_collectionHeader_z6937_197", G = {
  page: j_,
  header: E_,
  headerTop: N_,
  heading: T_,
  title: R_,
  description: P_,
  actions: A_,
  list: $_,
  innerTabs: b_,
  innerTab: I_,
  activeInnerTab: L_,
  settingsActions: M_,
  listSentinel: D_,
  settingsSections: z_,
  settingsSection: O_,
  settingsMobileActions: F_,
  connectionFields: H_,
  collectionHeader: W_
};
function B_() {
  const r = nt();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(Rt, { title: "Промпт распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !r && /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${G.header} ${G.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: G.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: G.heading, children: !r && /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ o.jsx(Zg, {})
    ] })
  ] });
}
const U_ = "_heading_1w2wz_1", V_ = "_note_1w2wz_6", q_ = "_entries_1w2wz_12", Q_ = "_entry_1w2wz_19", K_ = "_line_1w2wz_27", Y_ = "_error_1w2wz_40", G_ = "_body_1w2wz_49", Rn = {
  heading: U_,
  note: V_,
  entries: q_,
  entry: Q_,
  line: K_,
  error: Y_,
  body: G_
};
function J_() {
  const r = mt(), l = Ft(), [i, c] = v.useState([]);
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
  }, [r, l.run]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(Rt, { title: w("Логи") }),
    /* @__PURE__ */ o.jsxs("main", { className: G.page, children: [
      /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsx("h1", { className: Rn.heading, children: w("Логи") }),
      /* @__PURE__ */ o.jsx("p", { className: Rn.note, children: w("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ o.jsx(We, { ...l }),
      !i.length && !l.busy && !l.error && /* @__PURE__ */ o.jsx("p", { children: w("Запросов к API пока нет.") }),
      /* @__PURE__ */ o.jsx("div", { className: Rn.entries, children: i.map((d) => /* @__PURE__ */ o.jsxs("article", { className: Rn.entry, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Rn.line, children: [
          /* @__PURE__ */ o.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ o.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: Rn.line, children: [
          /* @__PURE__ */ o.jsx("span", { children: w({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ o.jsxs("span", { className: d.status >= 400 ? Rn.error : void 0, children: [
            "HTTP ",
            d.status
          ] }),
          d.duration_ms !== null && /* @__PURE__ */ o.jsxs("span", { children: [
            d.duration_ms,
            " ",
            w("мс")
          ] }),
          d.event && /* @__PURE__ */ o.jsx("code", { children: d.event })
        ] }),
        [["Тело запроса", d.request_body], ["Тело ответа", d.response_body]].map(
          ([f, m]) => m != null && /* @__PURE__ */ o.jsxs("details", { className: Rn.body, children: [
            /* @__PURE__ */ o.jsx("summary", { children: w(f) }),
            /* @__PURE__ */ o.jsx("pre", { children: JSON.stringify(m, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Ti = /* @__PURE__ */ new Map(), Jo = /* @__PURE__ */ new WeakMap(), cf = 0, X_;
function Z_(r) {
  return r ? (Jo.has(r) || (cf += 1, Jo.set(r, cf.toString())), Jo.get(r)) : "0";
}
function e1(r) {
  return Object.keys(r).sort().filter(
    (l) => r[l] !== void 0
  ).map((l) => `${l}_${l === "root" ? Z_(r.root) : r[l]}`).toString();
}
function t1(r) {
  const l = e1(r);
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
function n1(r, l, i = {}, c = X_) {
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
  const { id: d, observer: f, elements: m } = t1(i), h = m.get(r) || [];
  return m.has(r) || m.set(r, h), h.push(l), f.observe(r), function() {
    h.splice(h.indexOf(l), 1), h.length === 0 && (m.delete(r), f.unobserve(r)), m.size === 0 && (f.disconnect(), Ti.delete(d));
  };
}
function r1({
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
  const [_, S] = v.useState(null), C = v.useRef(x), T = v.useRef(h), [E, N] = v.useState({
    inView: !!h,
    entry: void 0
  });
  C.current = x, v.useEffect(
    () => {
      if (T.current === void 0 && (T.current = h), m || !_) return;
      let z;
      return z = n1(
        _,
        (U, I) => {
          const J = T.current;
          T.current = U, !(J === void 0 && !U) && (N({
            inView: U,
            entry: I
          }), C.current && C.current(U, I), I.isIntersecting && f && z && (z(), z = void 0));
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
        z && z();
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
  }), T.current = h);
  const M = [S, E.inView, E.entry];
  return M.ref = M[0], M.inView = M[1], M.entry = M[2], M;
}
function Dr(r, l, i, c) {
  const { ref: d, inView: f } = r1({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [m, h] = v.useState(!1);
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
function lp(r) {
  const l = mt(), [i, c] = v.useState(null), [d, f] = v.useState(""), m = v.useRef(""), h = v.useRef(0), [g, x] = v.useState(!0), [y, _] = v.useState(null), S = v.useRef(), C = v.useRef(1), T = v.useRef(!1), E = v.useRef(), N = v.useCallback(async (M, z = !1) => {
    const U = ++h.current, I = m.current.trim(), J = M === void 0 && T.current, B = M ?? C.current;
    _(null), x(!0);
    try {
      let K = _i(await l.getPage(r, B, void 0, I));
      const me = Math.max(1, K.total_pages);
      if (B > me && (K = _i(await l.getPage(r, me, void 0, I))), J && K.page > 1) {
        const de = await Promise.all(Array.from({ length: K.page - 1 }, (Te, Ee) => l.getPage(r, Ee + 1, void 0, I).then(_i)));
        K = { ...K, data: [...de.flatMap((Te) => Te.data), ...K.data] };
      }
      if (U !== h.current) return;
      J || (T.current = z), S.current = void 0, C.current = K.page, c((de) => z && de ? { ...K, data: [...de.data, ...K.data] } : K);
    } catch (K) {
      if (U !== h.current) return;
      S.current = { page: M, append: z }, _(Jn(K, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      U === h.current && x(!1);
    }
  }, [l, r]);
  v.useEffect(() => {
    const M = E.current !== r;
    if (E.current = r, !M && m.current === d) return;
    m.current = d, C.current = 1, T.current = !1, h.current += 1, x(!0);
    const z = window.setTimeout(() => {
      N(1);
    }, M ? 0 : 250);
    return () => window.clearTimeout(z);
  }, [r, N, d]);
  const A = v.useCallback((M) => {
    c((z) => z && { ...z, data: M(z.data) });
  }, []);
  return { query: d, setQuery: f, page: i, loading: g, loadPage: N, updateItems: A, error: y, retry: () => {
    var M, z;
    N((M = S.current) == null ? void 0 : M.page, ((z = S.current) == null ? void 0 : z.append) ?? !1);
  } };
}
function s1() {
  const r = mt(), { query: l, setQuery: i, page: c, loading: d, loadPage: f, error: m, retry: h } = lp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: l, setQuery: i, error: m, retry: h, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (T) => {
    await r.saveData(T, "save_script_action"), await f();
  }, updateScript: async (T, E) => {
    await r.updateRecord(T, "update_script_action", E), await f();
  }, getScriptAction: async (T) => (await r.getRecord(T, "get_script_action")).data, deleteScriptAction: async (T) => {
    await r.deleteRecord(T, "delete_script_action"), await f();
  } };
}
const o1 = "_subtitle_c1esh_1", a1 = "_card_c1esh_6", l1 = "_content_c1esh_32", i1 = "_title_c1esh_40", u1 = "_arrow_c1esh_46", c1 = "_titleOnly_c1esh_57", Rr = {
  subtitle: o1,
  card: a1,
  content: l1,
  title: i1,
  arrow: u1,
  titleOnly: c1
}, zr = ({
  title: r,
  subTitle: l,
  onClick: i
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    type: "button",
    className: `${Rr.card} ${l ? "" : Rr.titleOnly}`,
    onClick: i,
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: Rr.content, children: [
        /* @__PURE__ */ o.jsx("div", { className: Rr.title, children: r }),
        l && /* @__PURE__ */ o.jsx("div", { className: Rr.subtitle, children: w(l) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: Rr.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), d1 = "_pagination_r0e80_1", f1 = "_button_r0e80_10", p1 = "_label_r0e80_34", m1 = "_pages_r0e80_40", h1 = "_active_r0e80_48", Qn = {
  pagination: d1,
  button: f1,
  label: p1,
  pages: m1,
  active: h1
}, Or = ({ page: r, totalPages: l, onChange: i }) => {
  if (l <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, m) => r + m - 2).filter((f) => f >= 1 && f <= l),
    l
  ])).sort((f, m) => f - m), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= l && f !== r && i(f);
  };
  return /* @__PURE__ */ o.jsx("nav", { className: Qn.pagination, "aria-label": w("Страницы списка"), children: /* @__PURE__ */ o.jsxs("div", { className: Qn.pages, children: [
    /* @__PURE__ */ o.jsx(
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
    c.map((f, m) => /* @__PURE__ */ o.jsxs(Cf.Fragment, { children: [
      m > 0 && f - c[m - 1] > 1 && /* @__PURE__ */ o.jsx("span", { className: Qn.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ o.jsx(
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
    /* @__PURE__ */ o.jsx(
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
}, v1 = "_overlay_1m3e5_1", y1 = "_modal_1m3e5_1", g1 = "_header_1m3e5_1", _1 = "_body_1m3e5_1", x1 = "_footer_1m3e5_1", w1 = "_sm_1m3e5_32", S1 = "_md_1m3e5_36", k1 = "_lg_1m3e5_40", C1 = "_xl_1m3e5_44", j1 = "_title_1m3e5_59", E1 = "_close_1m3e5_86", N1 = "_fields_1m3e5_116", T1 = "_suspended_1m3e5_124", R1 = "_heading_1m3e5_128", ft = {
  overlay: v1,
  modal: y1,
  header: g1,
  body: _1,
  footer: x1,
  sm: w1,
  md: S1,
  lg: k1,
  xl: C1,
  title: j1,
  close: E1,
  fields: N1,
  suspended: T1,
  heading: R1
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
}) => (np(r, c), v.useEffect(() => {
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
}, [r, c, l]), r ? /* @__PURE__ */ o.jsx(
  "div",
  {
    className: `${ft.overlay} ${l ? ft.suspended : ""}`,
    "aria-hidden": l || void 0,
    onClick: c,
    children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `${ft.modal} ${ft[x]}`,
        onClick: (y) => y.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: ft.header, children: [
            d && /* @__PURE__ */ o.jsx(
              le,
              {
                variant: "ghost",
                className: ft.close,
                "aria-label": w("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ o.jsx(Qy, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (m ? /* @__PURE__ */ o.jsxs("div", { className: ft.heading, children: [
              /* @__PURE__ */ o.jsx("h2", { className: ft.title, children: w(f) }),
              m
            ] }) : /* @__PURE__ */ o.jsx("h2", { className: ft.title, children: w(f) })),
            /* @__PURE__ */ o.jsx(
              le,
              {
                variant: "ghost",
                className: ft.close,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: ft.body, children: [
            /* @__PURE__ */ o.jsx(We, { ...i }),
            /* @__PURE__ */ o.jsx("fieldset", { className: ft.fields, disabled: i == null ? void 0 : i.busy, children: g })
          ] }),
          h && /* @__PURE__ */ o.jsx("div", { className: ft.footer, children: /* @__PURE__ */ o.jsx("fieldset", { className: ft.fields, disabled: i == null ? void 0 : i.busy, children: h }) })
        ]
      }
    )
  }
) : null), P1 = "_content_eng69_1", A1 = "_title_eng69_7", $1 = "_actions_eng69_14", b1 = "_row_eng69_20", I1 = "_identifier_eng69_31", As = {
  content: P1,
  title: A1,
  actions: $1,
  row: b1,
  identifier: I1
}, Ki = ({ open: r, title: l, uuid: i, onClose: c, actions: d, size: f = "md", layout: m = "column" }) => {
  const h = nt(), g = i ? /* @__PURE__ */ o.jsx("p", { className: As.identifier, children: i }) : null, x = /* @__PURE__ */ o.jsxs("div", { className: As.content, children: [
    h && /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx("h3", { className: As.title, children: l }),
      g
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `${As.actions} ${m === "row" && !h ? As.row : ""}`, children: d.map((y) => /* @__PURE__ */ o.jsx(le, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: w(y.label) }, y.label)) })
  ] });
  return h ? /* @__PURE__ */ o.jsx(Vi, { open: r, onClose: c, children: x }) : /* @__PURE__ */ o.jsx(an, { open: r, onClose: c, title: l, subtitle: g, size: f, children: x });
}, L1 = ({ uuid: r, title: l, open: i, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Ki, { open: i, title: l, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, M1 = "_accordion_5owbj_1", D1 = "_header_5owbj_7", z1 = "_content_5owbj_20", Xo = {
  accordion: M1,
  header: D1,
  content: z1
}, O1 = ({
  title: r,
  defaultOpen: l = !1,
  children: i
}) => {
  const [c, d] = v.useState(l);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: Xo.accordion,
      "data-open": c,
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: Xo.header,
            onClick: () => d((f) => !f),
            "aria-expanded": c,
            children: [
              /* @__PURE__ */ o.jsx("span", { children: w(r) }),
              /* @__PURE__ */ o.jsx("span", { className: Xo.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ o.jsx("div", { className: Xo.content, children: i })
      ]
    }
  );
}, F1 = "_wrapper_1fgdg_1", H1 = "_dropdown_1fgdg_10", W1 = "_option_1fgdg_22", B1 = "_title_1fgdg_46", U1 = "_uuid_1fgdg_51", V1 = "_hint_1fgdg_52", Kn = {
  wrapper: F1,
  dropdown: H1,
  option: W1,
  title: B1,
  uuid: U1,
  hint: V1
}, q1 = ({
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
  const x = mt(), y = JSON.stringify(c), _ = v.useMemo(() => JSON.parse(y), [y]), [S, C] = v.useState(null), T = h ? "" : i || ((S == null ? void 0 : S.uuid) === l ? S.title : "");
  v.useEffect(() => {
    var X;
    if (!l || i || h || (X = de.current) != null && X.contains(document.activeElement)) return;
    let D = !1;
    return (async () => {
      var Y;
      try {
        for (const P of _) {
          const ie = (Y = (await x.searchAssistantCommands(l, P)).data) == null ? void 0 : Y.find((ce) => ce.uuid === l);
          if (ie) {
            D || C(ie);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      D = !0;
    };
  }, [x, l, i, h, _]);
  const [E, N] = v.useState(null), [A, O] = v.useState(0), [M, z] = v.useState([]), [U, I] = v.useState(!1), [J, B] = v.useState(!1), [K, me] = v.useState(!1), de = v.useRef(null), [Te, Ee] = v.useState({});
  v.useEffect(() => {
    var X, Y;
    if (!U) return;
    const D = () => {
      var Hr, An;
      const P = (An = (Hr = de.current) == null ? void 0 : Hr.querySelector("input")) == null ? void 0 : An.getBoundingClientRect();
      if (!P) return;
      const F = window.visualViewport, ie = ((F == null ? void 0 : F.offsetTop) ?? 0) + 8, ce = ((F == null ? void 0 : F.offsetTop) ?? 0) + ((F == null ? void 0 : F.height) ?? window.innerHeight) - 8, ve = Math.min(ce, Math.max(ie, P.bottom + 6)), ye = Math.min(ce, Math.max(ie, P.top - 6)), Se = ce - ve, xe = ye - ie, je = Se < 180 && xe > Se, rt = Math.min(260, je ? xe : Se), Pn = Math.max(8, P.left);
      Ee({
        left: Pn,
        width: Math.max(0, Math.min(P.width, window.innerWidth - Pn - 8)),
        top: je ? ye : ve,
        transform: je ? "translateY(-100%)" : void 0,
        maxHeight: rt
      });
    };
    return D(), window.addEventListener("scroll", D, !0), window.addEventListener("resize", D), (X = window.visualViewport) == null || X.addEventListener("resize", D), (Y = window.visualViewport) == null || Y.addEventListener("scroll", D), () => {
      var P, F;
      window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", D), (P = window.visualViewport) == null || P.removeEventListener("resize", D), (F = window.visualViewport) == null || F.removeEventListener("scroll", D);
    };
  }, [U]);
  const he = v.useRef(0), ge = v.useRef(""), Ce = v.useMemo(() => l.trim(), [l]);
  v.useEffect(() => {
    if (!Ce) {
      he.current += 1, N(null), ge.current = "", z([]), I(!1);
      return;
    }
    if (Ce.length < d) {
      he.current += 1, N(null), z([]), I(!1);
      return;
    }
    if (!K || T) {
      he.current += 1, I(!1), B(!1);
      return;
    }
    if (ge.current === Ce)
      return;
    ge.current = Ce;
    const D = he.current + 1;
    he.current = D;
    const X = window.setTimeout(async () => {
      B(!0), N(null);
      try {
        let Y = [];
        for (const P of _) {
          const F = await x.searchAssistantCommands(Ce, P), ie = Array.isArray(F == null ? void 0 : F.data) ? F.data : [];
          Y.push(...ie);
        }
        if (he.current !== D)
          return;
        z(Y), I(Y.length > 0);
      } catch (Y) {
        he.current === D && (N(Jn(Y)), z([]), I(!1));
      } finally {
        he.current === D && B(!1);
      }
    }, 250);
    return () => window.clearTimeout(X);
  }, [x, Ce, _, d, K, A, T]);
  const H = (D) => {
    const X = h ? h(D) : D.uuid;
    he.current += 1, C(D), ge.current = "", B(!1), z([]), f(X), m == null || m(D), I(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { ref: de, className: Kn.wrapper, children: [
    /* @__PURE__ */ o.jsx(
      Be,
      {
        label: r,
        value: T || l,
        autoComplete: "off",
        placeholder: w("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          me(!1), window.setTimeout(() => I(!1), 150);
        },
        onFocus: () => {
          me(!0), I(!T && M.length > 0);
        },
        onChange: (D) => {
          C(null), f(D.target.value);
        }
      }
    ),
    U && de.current && Qf.createPortal(
      /* @__PURE__ */ o.jsx("div", { role: "listbox", className: Kn.dropdown, style: Te, children: M.map((D) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: Kn.option,
          onMouseDown: (X) => X.preventDefault(),
          onClick: () => H(D),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: Kn.title, children: D.title || "Без названия" }),
            /* @__PURE__ */ o.jsx("span", { className: Kn.uuid, children: D.uuid }),
            D.mappingType && /* @__PURE__ */ o.jsxs("span", { className: Kn.uuid, children: [
              w("mappingType:"),
              D.mappingType
            ] })
          ]
        },
        D.uuid
      )) }),
      de.current.closest("[data-theme]") ?? de.current
    ),
    /* @__PURE__ */ o.jsx(We, { error: E, busy: J, retry: () => {
      var D, X;
      ge.current = "", (X = (D = de.current) == null ? void 0 : D.querySelector("input")) == null || X.focus(), O((Y) => Y + 1);
    } }),
    J && /* @__PURE__ */ o.jsx("span", { className: Kn.hint, children: w("Поиск...") })
  ] });
}, Q1 = "_field_1esqu_1", K1 = "_row_1esqu_5", Y1 = "_inputWrapper_1esqu_11", G1 = "_clearButton_1esqu_22", J1 = "_rowError_1esqu_31", zt = {
  field: Q1,
  row: K1,
  inputWrapper: Y1,
  clearButton: G1,
  rowError: J1
}, X1 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function xi({ field: r, value: l, error: i, onChange: c }) {
  return Lr() ? /* @__PURE__ */ o.jsx(Be, { label: w(r), value: l, error: i, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ o.jsx(
    q1,
    {
      label: w(r),
      value: l,
      error: i,
      searchSource: [X1[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const Z1 = ({
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
  return /* @__PURE__ */ o.jsxs(
    O1,
    {
      title: `${w("Условие")} ${l + 1}`,
      defaultOpen: i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: zt.field, children: /* @__PURE__ */ o.jsx(
          xi,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: m == null ? void 0 : m.parent_type,
            onChange: (_) => c({ ...r, parent_type: _ })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: zt.field, children: h ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${zt.row} ${m != null && m.children_type ? zt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: zt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                xi,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: m == null ? void 0 : m.children_type,
                  onChange: (_) => c({ ...r, children_type: _ })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                le,
                {
                  type: "button",
                  variant: "ghost",
                  className: zt.clearButton,
                  "aria-label": w("Убрать второстепенную команду"),
                  onClick: x,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsx("div", { className: zt.field, children: g ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${zt.row} ${m != null && m.children_direct_type ? zt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: zt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                xi,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: m == null ? void 0 : m.children_direct_type,
                  onChange: (_) => c({ ...r, children_direct_type: _ })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                le,
                {
                  type: "button",
                  variant: "ghost",
                  className: zt.clearButton,
                  "aria-label": w("Убрать прямую команду"),
                  onClick: y,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
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
        f > 1 && /* @__PURE__ */ o.jsx(
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
}, e0 = "_dropdown_3mupk_2", t0 = "_label_3mupk_11", n0 = "_wrapper_3mupk_19", r0 = "_select_3mupk_23", s0 = "_arrow_3mupk_65", o0 = "_error_3mupk_85", a0 = "_errorText_3mupk_103", Yn = {
  dropdown: e0,
  label: t0,
  wrapper: n0,
  select: r0,
  arrow: s0,
  error: o0,
  errorText: a0
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
  return /* @__PURE__ */ o.jsxs("div", { className: Yn.dropdown, children: [
    r && /* @__PURE__ */ o.jsx(
      "label",
      {
        htmlFor: m,
        className: Yn.label,
        children: w(r)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: Yn.wrapper, children: [
      /* @__PURE__ */ o.jsxs(
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
            /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: w(c) }),
            l.map((h) => /* @__PURE__ */ o.jsx(
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
        Xf,
        {
          size: 18,
          className: Yn.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsx("span", { className: Yn.errorText, children: w(d) })
  ] });
}
const l0 = "_form_1ogov_1", i0 = "_section_1ogov_7", u0 = "_sectionTitle_1ogov_18", c0 = "_conditions_1ogov_27", d0 = "_addCondition_1ogov_33", Pr = {
  form: l0,
  section: i0,
  sectionTitle: u0,
  conditions: c0,
  addCondition: d0
}, f0 = ({
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
  }, T = (A, O) => {
    const M = [...g.conditions];
    M[A] = O, S({
      ...g,
      conditions: M
    });
  }, E = (A) => {
    const O = g.conditions.filter(
      (M, z) => z !== A
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
      (O, M) => {
        const z = {};
        O.parent_type.trim() || (z.parent_type = "Обязательное поле"), O.children_type !== void 0 && !O.children_type.trim() && (z.children_type = "Обязательное поле"), O.children_direct_type !== void 0 && !O.children_direct_type.trim() && (z.children_direct_type = "Обязательное поле"), A.conditions[M] = z;
      }
    ), _(A), !A.name && !A.script_entity_id && A.conditions.every(
      (O) => Object.keys(O).length === 0
    );
  };
  return /* @__PURE__ */ o.jsx(
    an,
    {
      feedback: l,
      open: r,
      onClose: h,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ o.jsx(
        le,
        {
          disabled: f,
          onClick: () => {
            N() && (m == null || m(g));
          },
          children: w("Сохранить")
        }
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: Pr.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Pr.section, children: [
          /* @__PURE__ */ o.jsx(
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
          /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsxs("div", { className: Pr.section, children: [
          /* @__PURE__ */ o.jsx("h3", { className: Pr.sectionTitle, children: w("Условия") }),
          /* @__PURE__ */ o.jsx("div", { className: Pr.conditions, children: g.conditions.map(
            (A, O, M) => /* @__PURE__ */ o.jsx(
              Z1,
              {
                index: O,
                condition: A,
                defaultOpen: !d,
                errors: y.conditions[O],
                onChange: (z) => T(
                  O,
                  z
                ),
                onDelete: () => E(O),
                totalCount: M.length
              },
              O
            )
          ) }),
          /* @__PURE__ */ o.jsx(
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
}, p0 = "_container_rqdjx_1", m0 = "_rows_rqdjx_9", h0 = "_hidden_rqdjx_20", v0 = "_overlay_rqdjx_24", y0 = "_card_rqdjx_32", g0 = "_title_rqdjx_51", _0 = "_subtitle_rqdjx_51", x0 = "_srOnly_rqdjx_70", sn = {
  container: p0,
  rows: m0,
  hidden: h0,
  overlay: v0,
  card: y0,
  title: g0,
  subtitle: _0,
  srOnly: x0
};
function Fr({ loading: r, itemCount: l, append: i = !1, children: c }) {
  const d = r && l > 0 && !i, f = r && /* @__PURE__ */ o.jsxs("div", { className: d ? sn.overlay : sn.rows, role: "status", children: [
    /* @__PURE__ */ o.jsx("span", { className: sn.srOnly, children: w("Загрузка...") }),
    Array.from({ length: d ? l : i && l > 0 ? 3 : 10 }, (m, h) => /* @__PURE__ */ o.jsxs("div", { className: sn.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: sn.title }),
      /* @__PURE__ */ o.jsx("span", { className: sn.subtitle })
    ] }, h))
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: sn.container, "aria-busy": r, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${sn.rows} ${d ? sn.hidden : ""}`, "aria-hidden": d || void 0, children: c }),
    f
  ] });
}
const w0 = "_container_9wouv_1", S0 = "_visible_9wouv_20", df = {
  container: w0,
  visible: S0
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
  }, [l]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: c,
      className: `${df.container} ${d ? df.visible : ""}`,
      children: r
    }
  );
}, k0 = () => {
  const r = Ft(), l = Lr(), i = l ? "Действия удалённых команд" : "Запуск скриптов", c = nt(), [d, f] = v.useState(), [m, h] = v.useState(!1), [g, x] = v.useState(!1), [y, _] = v.useState({ uuid: "", title: "" }), [S, C] = v.useState(!1), {
    query: T,
    setQuery: E,
    error: N,
    retry: A,
    loading: O,
    scripts: M,
    getAvailableScripts: z,
    loadScripts: U,
    saveScript: I,
    updateScript: J,
    getScriptAction: B,
    deleteScriptAction: K
  } = s1(), me = Dr(M, O || !!N, U, c), de = { error: r.error ?? N, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), A();
  }) : A }, Te = () => {
    r.clearError(), f(void 0), C(!1), h(!0);
  }, Ee = (H) => {
    x(!0), _(H);
  }, he = (H) => r.run(async () => {
    C(!0);
    const D = await B(
      H
    );
    f(D), h(!0);
  }, { retryable: !0 }), ge = async (H) => {
    await r.run(async () => {
      if (S) {
        if (!H.uuid) return;
        const { uuid: D, ...X } = H;
        await J(H.uuid, X);
      } else
        await I(H);
      h(!1);
    }, { exclusive: !0 });
  }, Ce = (H) => r.run(async () => {
    H && await K(H);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Rt,
      {
        search: { value: T, onChange: E },
        title: i
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !m && /* @__PURE__ */ o.jsx(We, { ...de }),
      /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: G.heading, children: [
          c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w(i) }),
          /* @__PURE__ */ o.jsx("p", { className: G.description, children: w(l ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: G.actions, children: c ? /* @__PURE__ */ o.jsx(nr, { children: /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "primary",
            onClick: Te,
            children: w("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "primary",
            onClick: Te,
            children: w("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ o.jsx(Mr, { value: T, onChange: E })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ o.jsx(Fr, { loading: O, itemCount: (M == null ? void 0 : M.script_actions.length) ?? 0, append: c, children: M == null ? void 0 : M.script_actions.map((H) => /* @__PURE__ */ o.jsx(
          zr,
          {
            title: H.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => Ee(H)
          },
          H.uuid
        )) }),
        !O && !N && T.trim() && !(M != null && M.script_actions.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: w("Ничего не найдено") }),
        c ? /* @__PURE__ */ o.jsx("div", { ref: me, className: G.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Or,
        {
          page: (M == null ? void 0 : M.page) || 1,
          totalPages: (M == null ? void 0 : M.total_pages) || 1,
          onChange: U
        }
      ),
      /* @__PURE__ */ o.jsx(
        L1,
        {
          uuid: y.uuid,
          open: g,
          title: y.title,
          onClose: () => x(!1),
          onEdit: he,
          onDelete: Ce
        }
      ),
      /* @__PURE__ */ o.jsx(
        f0,
        {
          feedback: de,
          open: m,
          initialData: d,
          isEdit: S,
          availableScripts: z(),
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
  const l = mt(), { query: i, setQuery: c, page: d, loading: f, loadPage: m, updateItems: h, error: g, retry: x } = lp(r);
  return { query: i, setQuery: c, error: g, retry: x, loading: f, commands: d, loadCommands: m, saveCommand: (E, N) => l.saveData(N, E), updateCommand: async (E, N) => {
    if (!N.uuid) return;
    const { uuid: A, ...O } = N, M = await l.updateRecord(A, E, O);
    return await m(), M;
  }, deleteCommand: (E, N) => l.deleteRecord(N, E), setCommandStatus: async (E, N, A) => {
    const O = await l.updateRecordStatus(E, N, A);
    return h((M) => M.map((z) => z.uuid === N ? { ...z, status: A } : z)), O;
  }, getCommandDetails: (E, N) => l.getRecord(N, E) };
}
const C0 = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function pa(r, l) {
  const i = C0[r], { query: c, setQuery: d, commands: f, loading: m, loadCommands: h, getCommandDetails: g, saveCommand: x, updateCommand: y, deleteCommand: _, setCommandStatus: S, error: C, retry: T } = up(i.list), E = Ft(), [N, A] = v.useState(!1), [O, M] = v.useState(!1), [z, U] = v.useState(l), [I, J] = v.useState(null), B = () => {
    E.clearError(), M(!1), U(l()), A(!0);
  }, K = (he) => E.run(async () => {
    const ge = await g(i.detail, he);
    M(!0);
    const Ce = { ...ge.data, status: ge.data.status ?? !1 };
    for (const H of ["componentDialog", "subComponentDialog"]) {
      const D = Ce[H];
      D && (D.nextAction = (D.nextAction ?? []).filter(
        (X) => !X.actionTypeComponent || ["children", "custom"].includes(X.actionTypeComponent)
      ));
    }
    U(Ce), A(!0);
  }, { retryable: !0 }), me = (he, ge) => E.run(async () => {
    i.status && await S(i.status, he, ge);
  }, { exclusive: !0 }), de = (he) => E.run(async () => {
    await _(i.remove, he), await h();
  }, { exclusive: !0 }), Te = () => E.run(async () => {
    await x(i.create, z), A(!1), await h();
  }, { exclusive: !0 }), Ee = () => E.run(async () => {
    await y(i.update, z), A(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: E.error ?? C, busy: E.busy, retry: E.error ? E.retry ?? (() => {
      E.clearError(), T();
    }) : T },
    listError: C,
    commands: f,
    loading: m,
    loadCommands: h,
    modalOpen: N,
    setModalOpen: A,
    isEdit: O,
    formData: z,
    setFormData: U,
    actionsCommand: I,
    setActionsCommand: J,
    openCreateModal: B,
    openEditModal: K,
    handleToggleStatus: me,
    handleDelete: de,
    handleCreate: Te,
    handleUpdate: Ee
  };
}
const j0 = "_field_1iloj_1", E0 = "_label_1iloj_8", N0 = "_select_1iloj_14", wi = {
  field: j0,
  label: E0,
  select: N0
}, Zn = ({
  label: r,
  hint: l,
  options: i,
  className: c = "",
  id: d,
  value: f,
  ...m
}) => {
  const h = v.useId(), g = d ?? h, x = f == null ? "" : String(f), y = !x || i.some((_) => _.value === x);
  return /* @__PURE__ */ o.jsxs("div", { className: wi.field, children: [
    r && /* @__PURE__ */ o.jsx(qi, { label: r, htmlFor: g, className: wi.label, hint: l }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        id: g,
        ...m,
        value: x,
        className: `${wi.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ o.jsx("option", { value: x, children: x }),
          i.map((_) => /* @__PURE__ */ o.jsx("option", { value: _.value, children: w(_.label) }, _.value))
        ]
      }
    )
  ] });
};
function Ri({ kind: r, value: l, title: i, onSelect: c }) {
  const d = mt(), [f, m] = v.useState([]), [h, g] = v.useState(!0), [x, y] = v.useState(!1), [_, S] = v.useState(null), [C, T] = v.useState(0), E = v.useRef(null), N = v.useRef(0);
  v.useEffect(() => () => {
    N.current += 1;
  }, []), v.useEffect(() => {
    let z = !1;
    g(!0), S(null);
    const U = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(U.map((I) => d.getAllRecords(I))).then((I) => {
      z || m([...new Map(I.flat().map((J) => [J.uuid, J])).values()]);
    }).catch((I) => {
      z || (S(Jn(I)), E.current = () => T((J) => J + 1));
    }).finally(() => {
      z || g(!1);
    }), () => {
      z = !0;
    };
  }, [d, r, C]), v.useEffect(() => {
    l && i && m((z) => z.map((U) => U.uuid === l ? { ...U, title: i } : U));
  }, [l, i]);
  const A = async (z) => {
    var J;
    if (!z) {
      N.current += 1, S(null), c({ uuid: "", title: "" });
      return;
    }
    const U = f.find((B) => B.uuid === z);
    if (!U) return;
    const I = ++N.current;
    if (S(null), r !== "direct") {
      c(U);
      return;
    }
    y(!0);
    try {
      const B = await d.getRecord(z, "get_assistant_sub_direct_control");
      I === N.current && c({ ...U, mappingType: ((J = B.data.directControl) == null ? void 0 : J.mappingType) ?? "" });
    } catch (B) {
      I === N.current && (S(Jn(B)), E.current = () => {
        A(z);
      });
    } finally {
      I === N.current && y(!1);
    }
  }, O = f.map((z) => ({ value: z.uuid, label: z.title || w("Без названия") }));
  l && !f.some((z) => z.uuid === l) && O.unshift({ value: l, label: i || w("Выбранная команда недоступна") });
  const M = w(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(
      Zn,
      {
        label: M,
        "aria-label": M,
        value: l,
        disabled: h || x,
        options: [{ value: "", label: w(h ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...O],
        onChange: (z) => {
          A(z.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(We, { error: _, busy: h || x, retry: () => {
      var z;
      return (z = E.current) == null ? void 0 : z.call(E);
    } })
  ] });
}
const T0 = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], R0 = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], P0 = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], A0 = "_form_1a1tt_1", $0 = "_field_1a1tt_7", b0 = "_arrayItem_1a1tt_29", I0 = "_logicTabs_1a1tt_46", L0 = "_sectionTitle_1a1tt_85", M0 = "_footerActions_1a1tt_92", D0 = "_phraseMode_1a1tt_106", z0 = "_directTabLabel_1a1tt_122", O0 = "_linkActions_1a1tt_126", Qe = {
  form: A0,
  field: $0,
  arrayItem: b0,
  logicTabs: I0,
  sectionTitle: L0,
  footerActions: M0,
  phraseMode: D0,
  directTabLabel: z0,
  linkActions: O0
}, ff = () => ({
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
  }, _ = v.useMemo(() => d.directControl ?? ff(), [d]), S = (C) => {
    f((T) => ({
      ...T,
      directControl: {
        ...T.directControl ?? ff(),
        ...C
      }
    }));
  };
  return /* @__PURE__ */ o.jsx(
    an,
    {
      feedback: l,
      open: r,
      onClose: i,
      onBack: h,
      title: c,
      footer: /* @__PURE__ */ o.jsx("div", { className: Qe.form, children: /* @__PURE__ */ o.jsx(le, { onClick: y, children: w("Сохранить") }) }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Qe.form, children: [
        /* @__PURE__ */ o.jsx(
          Be,
          {
            label: w("Название команды"),
            hint: fa(d.uuid),
            required: !0,
            error: g,
            value: d.title,
            onChange: (C) => f((T) => ({
              ...T,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsx(
          Be,
          {
            label: w("mappingType"),
            value: _.mappingType,
            onChange: (C) => S({
              mappingType: C.target.value
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          Zn,
          {
            label: w("valueType"),
            value: _.valueType,
            options: R0,
            onChange: (C) => S({
              valueType: C.target.value
            })
          }
        ),
        _.valueType == "command" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: Qe.field, children: /* @__PURE__ */ o.jsx(
            Xn,
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
          /* @__PURE__ */ o.jsx(
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
        ] }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] })
    }
  );
};
function F0({ target: r, onBack: l, onSaved: i }) {
  const c = mt(), d = Ft(), [f, m] = v.useState({ title: "" }), [h, g] = v.useState();
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
  return h ? h === "direct" ? /* @__PURE__ */ o.jsx(
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
  ) : /* @__PURE__ */ o.jsx(
    Yi,
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
  ) : /* @__PURE__ */ o.jsx(an, { open: !0, onClose: l, onBack: l, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ o.jsx("p", { role: "status", children: w("Загрузка...") }) });
}
const H0 = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function W0({ response: r, onChange: l }) {
  const i = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(i) ? "default" : i === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Zn,
      {
        label: w("Типы ответов"),
        "aria-label": w("Типы ответов"),
        value: c,
        options: H0,
        onChange: (d) => l({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ o.jsx(
      Be,
      {
        label: w("Тип результата скрипта"),
        placeholder: w("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => l({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ o.jsx(
      Xn,
      {
        label: w("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => l({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const B0 = "_switchRow_1hmmz_1", U0 = "_input_1hmmz_11", V0 = "_track_1hmmz_22", q0 = "_thumb_1hmmz_33", Q0 = "_label_1hmmz_62", $s = {
  switchRow: B0,
  input: U0,
  track: V0,
  thumb: q0,
  label: Q0
}, er = ({ label: r, className: l = "", ...i }) => /* @__PURE__ */ o.jsxs("label", { className: `${$s.switchRow} ${l}`, children: [
  /* @__PURE__ */ o.jsx("input", { ...i, type: "checkbox", className: $s.input }),
  /* @__PURE__ */ o.jsx("span", { className: $s.track, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: $s.thumb }) }),
  /* @__PURE__ */ o.jsx("span", { className: $s.label, children: w(r) })
] }), K0 = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function Y0({ component: r, onOpenCommand: l, updateComponentArray: i, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [m, h] = v.useState("direct"), g = K0.filter((y) => y.key !== "direct" || !r.forwardText), x = r.forwardText && m === "direct" ? "continuations" : m;
  return /* @__PURE__ */ o.jsxs("div", { className: Qe.form, children: [
    /* @__PURE__ */ o.jsx("div", { className: Qe.logicTabs, role: "tablist", "aria-label": w("Настройки логики"), children: g.map((y) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: x === y.key ? 0 : -1,
        onKeyDown: (_) => {
          var T, E;
          const S = g.findIndex((N) => N.key === y.key), C = _.key === "ArrowRight" ? (S + 1) % g.length : _.key === "ArrowLeft" ? (S + g.length - 1) % g.length : _.key === "Home" ? 0 : _.key === "End" ? g.length - 1 : -1;
          C < 0 || (_.preventDefault(), h(g[C].key), (E = (T = _.currentTarget.parentElement) == null ? void 0 : T.querySelectorAll('[role="tab"]')[C]) == null || E.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": x === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => h(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ o.jsx("span", { className: Qe.directTabLabel, children: w(y.label).replace(" ", `
`) }) : w(y.label)
      },
      y.key
    )) }),
    x === "continuations" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, _) => /* @__PURE__ */ o.jsxs("div", { className: Qe.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          Zn,
          {
            label: w("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: P0,
            onChange: (S) => i("nextAction", _, {
              actionTypeComponent: S.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ o.jsx(
          Be,
          {
            label: w("Тип результата скрипта"),
            placeholder: w("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (S) => i("nextAction", _, {
              actionType: S.target.value
            })
          }
        ) : /* @__PURE__ */ o.jsx(o.Fragment, {}),
        /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsxs("div", { className: Qe.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(le, { variant: "secondary", onClick: () => l({ uuid: y.uuid, kind: "continuation" }, _), children: w("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
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
      /* @__PURE__ */ o.jsx(
        le,
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
          children: w("Добавить ещё")
        }
      )
    ] }),
    x === "direct" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-direct`, "aria-labelledby": `${f}-command-logic-tab-direct`, children: [
      (r.nextDirectControl ?? []).map((y, _) => /* @__PURE__ */ o.jsxs("div", { className: Qe.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
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
        y.uuid && /* @__PURE__ */ o.jsx(
          Be,
          {
            label: w("mappingType"),
            hint: w("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: Qe.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(le, { variant: "secondary", onClick: () => l({ uuid: y.uuid, kind: "direct" }, _), children: w("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
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
      /* @__PURE__ */ o.jsx(
        le,
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
          children: w("Добавить ещё")
        }
      )
    ] })
  ] });
}
const pf = () => ({
  endStatus: !0,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }]
}), Yi = ({
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
  const _ = mt().getScripts(), S = v.useMemo(() => c[d] ?? pf(), [c, d]);
  v.useEffect(() => {
    r && f((B) => {
      var me;
      const K = B[d];
      return (me = K == null ? void 0 : K.nextAction) != null && me.some((de) => !de.actionTypeComponent) ? { ...B, [d]: {
        ...K,
        nextAction: K.nextAction.map((de) => ({ ...de, actionTypeComponent: de.actionTypeComponent || "children" }))
      } } : B;
    });
  }, [r, c.uuid, d, f]);
  const [C, T] = v.useState(null);
  v.useEffect(() => {
    r || T(null);
  }, [r]);
  const [E, N] = v.useState(!1);
  v.useEffect(() => {
    N(!1), O({});
  }, [r, c.uuid, d]);
  const [A, O] = v.useState({}), M = (B) => {
    f((K) => ({
      ...K,
      [d]: {
        ...K[d] ?? pf(),
        ...B
      }
    }));
  }, z = (B, K, me) => {
    const de = [...S[B] ?? []];
    de[K] = { ...de[K], ...me }, M({
      [B]: de
    });
  }, U = (B, K) => {
    M({
      [B]: [...S[B] ?? [], K]
    });
  }, I = (B, K) => {
    M({
      [B]: (S[B] ?? []).filter(
        (me, de) => de !== K
      )
    });
  }, J = () => {
    const B = {};
    return c.title.trim() || (B.title = "Обязательное поле"), O(B), Object.keys(B).length === 0;
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      an,
      {
        suspended: !!C,
        feedback: l,
        open: r,
        onClose: m,
        onBack: h,
        title: E ? "Настроить логику" : i ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ o.jsx("div", { className: Qe.form, children: E ? /* @__PURE__ */ o.jsx(le, { variant: "secondary", onClick: () => N(!1), children: w("Назад") }) : /* @__PURE__ */ o.jsxs("div", { className: Qe.footerActions, children: [
          /* @__PURE__ */ o.jsx(le, { variant: "secondary", onClick: () => N(!0), children: w("Настроить логику") }),
          /* @__PURE__ */ o.jsx(le, { onClick: () => {
            J() && (i ? x() : g());
          }, children: w(i ? "Обновить" : "Сохранить") })
        ] }) }),
        children: E ? /* @__PURE__ */ o.jsx(
          Y0,
          {
            onOpenCommand: (B, K) => T({ ...B, index: K }),
            component: S,
            updateComponentArray: z,
            addComponentArrayItem: U,
            removeComponentArrayItem: I
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: Qe.form, children: [
          /* @__PURE__ */ o.jsx(
            Be,
            {
              label: w("Название команды"),
              hint: fa(c.uuid),
              value: c.title,
              error: A.title,
              onChange: (B) => f({
                ...c,
                title: B.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Zn,
            {
              label: w("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(S.answerType) ? "script_response" : S.answerType,
              options: T0,
              onChange: (B) => M({
                answerType: B.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Zn,
            {
              label: w("Скрипт Home Assistant"),
              value: S.script_entity_id ?? "__legacy__",
              options: [
                ...S.script_entity_id === void 0 ? [{ label: w("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: w("Не запускать скрипт"), value: "" },
                ..._.map((B) => ({ label: B.name, value: B.entity_id }))
              ],
              onChange: (B) => M({ script_entity_id: B.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ o.jsxs("div", { className: Qe.phraseMode, children: [
            /* @__PURE__ */ o.jsx(
              er,
              {
                label: w("Отправить команду как есть"),
                checked: !!S.forwardText,
                onChange: (B) => M({ forwardText: B.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(oa, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && S.forwardText) && /* @__PURE__ */ o.jsx("div", { className: Qe.field, children: /* @__PURE__ */ o.jsx(
            Xn,
            {
              label: w("Фразы для запуска"),
              value: (S.voiceCommands == null ? [] : typeof S.voiceCommands != "object" ? S == null ? void 0 : S.voiceCommands.split(";") : S == null ? void 0 : S.voiceCommands).join(`
`),
              onChange: (B) => M({
                voiceCommands: B.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("section", { className: Qe.form, "aria-label": w("Ответы"), children: [
            /* @__PURE__ */ o.jsx("h3", { className: Qe.sectionTitle, children: w("Ответы") }),
            (S.voiceResponseArray ?? []).map((B, K) => /* @__PURE__ */ o.jsxs("div", { className: Qe.arrayItem, children: [
              /* @__PURE__ */ o.jsx(
                W0,
                {
                  response: B,
                  onChange: (me) => z("voiceResponseArray", K, me)
                }
              ),
              /* @__PURE__ */ o.jsx(
                le,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => I("voiceResponseArray", K),
                  children: w("Удалить")
                }
              )
            ] }, K)),
            /* @__PURE__ */ o.jsx(
              le,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
                onClick: () => U("voiceResponseArray", {
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
    C && /* @__PURE__ */ o.jsx(
      F0,
      {
        target: C,
        onBack: () => T(null),
        onSaved: (B) => {
          var K;
          C.kind === "direct" ? z("nextDirectControl", C.index, { title: B.title, mappingType: ((K = B.directControl) == null ? void 0 : K.mappingType) ?? "" }) : z("nextAction", C.index, { title: B.title });
        }
      },
      `${C.kind}-${C.uuid}`
    )
  ] });
}, ma = ({ command: r, open: l, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Ki, { open: l, title: r.title, uuid: r.uuid, onClose: i, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, G0 = () => ip("componentDialog"), J0 = () => {
  const r = nt(), {
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
    setActionsCommand: T,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: M,
    handleUpdate: z
  } = pa("main", G0), U = Dr(f, m || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Rt,
      {
        search: { value: l, onChange: i },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ o.jsx(We, { ...c }),
      /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w("Основные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ o.jsx(nr, { children: /* @__PURE__ */ o.jsx(le, { variant: "primary", onClick: E, children: w("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(le, { variant: "primary", onClick: E, children: w("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ o.jsx(Fr, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          zr,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => T(I)
          },
          I.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: w("Ничего не найдено") }),
        r ? /* @__PURE__ */ o.jsx("div", { ref: U, className: G.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Or,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => h(I)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Yi,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: _,
          componentKey: "componentDialog",
          setFormData: S,
          onClose: () => x(!1),
          onSave: M,
          onUpdate: z
        }
      ),
      /* @__PURE__ */ o.jsx(
        ma,
        {
          open: !!C,
          command: C,
          onClose: () => T(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, X0 = () => ip("subComponentDialog"), Z0 = () => {
  const r = nt(), {
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
    setActionsCommand: T,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: M,
    handleUpdate: z
  } = pa("sub", X0), U = Dr(f, m || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Rt,
      {
        search: { value: l, onChange: i },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ o.jsx(We, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w("Второстепенные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ o.jsx(nr, { children: /* @__PURE__ */ o.jsx(le, { variant: "primary", onClick: E, children: w("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(le, { variant: "primary", onClick: E, children: w("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ o.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ o.jsx(Fr, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          zr,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => T(I)
          },
          I.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: w("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: U, className: G.listSentinel }) : /* @__PURE__ */ o.jsx(
        Or,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => h(I)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Yi,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: _,
          componentKey: "subComponentDialog",
          setFormData: S,
          onClose: () => x(!1),
          onSave: M,
          onUpdate: z
        }
      ),
      /* @__PURE__ */ o.jsx(
        ma,
        {
          open: !!C,
          command: C,
          onClose: () => T(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, ex = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], la = () => {
  const { pathname: r } = pt(), l = Di();
  return /* @__PURE__ */ o.jsx("div", { className: G.innerTabs, role: "group", "aria-label": w("Раздел прямых команд"), children: ex.map((i) => /* @__PURE__ */ o.jsx(
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
}, tx = () => ({
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
}), nx = () => {
  const r = nt(), {
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
    setActionsCommand: T,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: M,
    handleUpdate: z
  } = pa("direct", tx), U = Dr(f, m || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Rt,
      {
        search: { value: l, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(la, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ o.jsx(We, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: G.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w("Прямые команды") }),
          !r && /* @__PURE__ */ o.jsx(la, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ o.jsx(nr, { children: /* @__PURE__ */ o.jsx(le, { variant: "primary", onClick: E, children: w("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(le, { variant: "primary", onClick: E, children: w("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ o.jsx(Fr, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          zr,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => T(I)
          },
          I.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: w("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: U, className: G.listSentinel }) : /* @__PURE__ */ o.jsx(
        Or,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => h(I)
        }
      ),
      /* @__PURE__ */ o.jsx(
        cp,
        {
          feedback: c,
          open: g,
          onClose: () => x(!1),
          title: w(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: _,
          setFormData: S,
          onSave: y ? z : M
        }
      ),
      /* @__PURE__ */ o.jsx(
        ma,
        {
          open: !!C,
          command: C,
          onClose: () => T(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, rx = "_form_mn1ml_1", sx = "_arrayItem_mn1ml_8", ox = "_sectionTitle_mn1ml_25", Zo = {
  form: rx,
  arrayItem: sx,
  sectionTitle: ox
}, ax = ({
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
  }, T = (E) => {
    _(
      y.filter((N, A) => A !== E)
    );
  };
  return /* @__PURE__ */ o.jsx(
    an,
    {
      feedback: l,
      open: r,
      onClose: i,
      title: c,
      footer: /* @__PURE__ */ o.jsx(le, { onClick: x, children: w("Сохранить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Zo.form, children: [
        /* @__PURE__ */ o.jsx(
          Be,
          {
            label: w("Название команды"),
            hint: fa(d.uuid),
            required: !0,
            error: h,
            value: d.title,
            onChange: (E) => f((N) => ({
              ...N,
              title: E.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsxs("section", { className: Zo.form, "aria-label": w("Варианты вложенных команд"), children: [
          /* @__PURE__ */ o.jsx("h3", { className: Zo.sectionTitle, children: w("Варианты вложенных команд") }),
          y.map((E, N) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: Zo.arrayItem,
              children: [
                /* @__PURE__ */ o.jsx(
                  Be,
                  {
                    label: w("Код значения"),
                    value: E.subMappingType ?? "",
                    onChange: (A) => S(N, {
                      subMappingType: A.target.value
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  Xn,
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
                /* @__PURE__ */ o.jsx(
                  le,
                  {
                    type: "button",
                    variant: "remove",
                    onClick: () => T(N),
                    children: w("Удалить")
                  }
                )
              ]
            },
            N
          )),
          /* @__PURE__ */ o.jsx(
            le,
            {
              type: "button",
              variant: "secondary",
              fullWidth: !0,
              leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
              onClick: C,
              children: w("Добавить ещё")
            }
          )
        ] })
      ] })
    }
  );
}, lx = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), ix = () => {
  const r = nt(), {
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
    setActionsCommand: T,
    openCreateModal: E,
    openEditModal: N,
    handleDelete: A,
    handleCreate: O,
    handleUpdate: M
  } = pa("template", lx), z = Dr(f, m || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Rt,
      {
        search: { value: l, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(la, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ o.jsx(We, { ...c }),
      !r && /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: G.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w("Вложенные команды") }),
          !r && /* @__PURE__ */ o.jsx(la, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ o.jsx(nr, { children: /* @__PURE__ */ o.jsx(le, { variant: "primary", onClick: E, children: w("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(le, { variant: "primary", onClick: E, children: w("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ o.jsx(Fr, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((U) => /* @__PURE__ */ o.jsx(
          zr,
          {
            title: U.title,
            onClick: () => T(U)
          },
          U.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: w("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: z,
          className: G.listSentinel
        }
      ) : /* @__PURE__ */ o.jsx(
        Or,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (U) => h(
            U
          )
        }
      ),
      /* @__PURE__ */ o.jsx(
        ax,
        {
          feedback: c,
          open: g,
          onClose: () => x(!1),
          title: y ? "Редактировать" : "Создать",
          formData: _,
          setFormData: S,
          onSave: y ? M : O
        }
      ),
      /* @__PURE__ */ o.jsx(
        ma,
        {
          open: !!C,
          command: C,
          onClose: () => T(null),
          onDelete: A,
          onEdit: (U) => N(U)
        }
      )
    ] })
  ] });
}, mf = {
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function dp(r) {
  return r.actionType && mf[r.actionType] ? w(mf[r.actionType]) : r.title;
}
const ux = "_form_1i0x1_1", cx = {
  form: ux
}, dx = ({
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
    d((T) => ({
      ...T,
      ...C
    }));
  };
  return /* @__PURE__ */ o.jsx(
    an,
    {
      feedback: l,
      open: r,
      onClose: f,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ o.jsx(le, { onClick: m, children: w("Обновить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: cx.form, children: [
        /* @__PURE__ */ o.jsx(
          Be,
          {
            label: w("Название команды"),
            hint: fa(c.uuid),
            value: dp(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ o.jsx(
          er,
          {
            label: w("Завершать диалог"),
            checked: !!h.endStatus,
            onChange: (C) => y({
              endStatus: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && /* @__PURE__ */ o.jsx(
          er,
          {
            label: w("Передать команду серверу"),
            checked: !!h.forwardCommandToServer,
            onChange: (C) => y({
              forwardCommandToServer: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && h.forwardCommandToServer && /* @__PURE__ */ o.jsx(
          Zn,
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
        x ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            Be,
            {
              label: w("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: w("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ o.jsx(
            Xn,
            {
              rows: 8,
              label: w("Текст озвучки"),
              hint: w("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: w("Например: ${reply}"),
              value: ((S = (_ = h.voiceResponseArray) == null ? void 0 : _.find((C) => C.actionType === "success")) == null ? void 0 : S.voiceResponse) ?? "",
              onChange: (C) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: C.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(
          Xn,
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
}, fx = () => {
  const r = Ft(), l = nt(), [i, c] = v.useState(!1), [d, f] = v.useState(!1), [m, h] = v.useState({ title: "" }), {
    error: g,
    retry: x,
    loading: y,
    loadCommands: _,
    getCommandDetails: S,
    updateCommand: C,
    commands: T
  } = up("get_assistant_settings_short"), E = Dr(T, y || !!g, _, l), N = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), x();
  }) : x }, A = (M) => r.run(async () => {
    f(!0);
    const z = await S("get_assistant_setting", M.uuid);
    h(z.data), c(!0);
  }, { retryable: !0 }), O = () => r.run(async () => {
    await C("update_assistant_setting", m), c(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Rt,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !i && /* @__PURE__ */ o.jsx(We, { ...N }),
      l ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${G.header} ${G.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: G.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: G.heading, children: !l && /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ o.jsx("div", { className: G.list, children: /* @__PURE__ */ o.jsx(Fr, { loading: y, itemCount: (T == null ? void 0 : T.data.length) ?? 0, append: l, children: T == null ? void 0 : T.data.map((M) => /* @__PURE__ */ o.jsx(
        zr,
        {
          title: dp(M),
          onClick: () => A(M)
        },
        M.uuid
      )) }) }),
      l ? /* @__PURE__ */ o.jsx("div", { ref: E, className: G.listSentinel }) : /* @__PURE__ */ o.jsx(
        Or,
        {
          page: (T == null ? void 0 : T.page) || 1,
          totalPages: (T == null ? void 0 : T.total_pages) || 1,
          onChange: (M) => _(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        dx,
        {
          feedback: N,
          open: i,
          isEdit: d,
          formData: m,
          setFormData: h,
          onClose: () => c(!1),
          onUpdate: O
        }
      )
    ] })
  ] });
}, px = (r, l) => {
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
async function mx(r, l) {
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
function hx(r, l) {
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
async function vx(r, l, i) {
  const c = hx(i, l);
  return await r.saveData(c, l === "settings" ? "import_settings" : l === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : fp[l].import), c;
}
const yx = "_grid_fc8hl_1", gx = "_card_fc8hl_8", _x = "_actions_fc8hl_23", xx = "_description_fc8hl_29", wx = "_page_fc8hl_36", bs = {
  grid: yx,
  card: gx,
  actions: _x,
  description: xx,
  page: wx
}, Sx = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], kx = () => {
  const r = mt(), l = Lr(), i = nt(), [c, d] = v.useState(!1), [f, m] = v.useState(""), [h, g] = v.useState(!1), x = v.useRef(null), y = v.useRef(null), _ = v.useRef("scripts"), S = async (C, T = !1) => {
    x.current = T ? C : null, d(!0), m(""), g(!1);
    try {
      await C();
    } catch (E) {
      g(!0), m(E instanceof Nt ? E.message : Jn(E));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(Rt, { title: w("Импорт и экспорт") }),
    /* @__PURE__ */ o.jsxs("div", { className: `${G.page} ${bs.page}`, children: [
      /* @__PURE__ */ o.jsx(Pt, {}),
      !i && /* @__PURE__ */ o.jsx("h1", { children: w("Импорт и экспорт") }),
      /* @__PURE__ */ o.jsx("div", { className: bs.grid, children: Sx.filter((C) => C.kind === "scripts" ? l === !0 : C.kind !== "scenarios" || l === !1).map((C) => /* @__PURE__ */ o.jsxs("section", { className: bs.card, children: [
        /* @__PURE__ */ o.jsx("h2", { children: w(C.title) }),
        /* @__PURE__ */ o.jsx("p", { className: bs.description, children: w(C.description) }),
        /* @__PURE__ */ o.jsxs("div", { className: bs.actions, children: [
          /* @__PURE__ */ o.jsx(le, { disabled: c, onClick: () => S(async () => {
            px(`ha-dialog-ui-${C.kind}.json`, await mx(r, C.kind));
          }, !0), children: w(C.download) }),
          /* @__PURE__ */ o.jsx(le, { variant: "secondary", disabled: c, onClick: () => {
            var T;
            _.current = C.kind, (T = y.current) == null || T.click();
          }, children: w(C.upload) })
        ] })
      ] }, C.kind)) }),
      /* @__PURE__ */ o.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (C) => {
        var N;
        const T = (N = C.target.files) == null ? void 0 : N[0], E = _.current;
        C.target.value = "", T && S(async () => {
          const A = await vx(r, E, await T.text());
          E === "settings" && A !== null && typeof A == "object" && !Array.isArray(A) && (typeof A.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: A.theme })), typeof A.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(aa, { detail: A.active_remout }))), m("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ o.jsx("p", { role: "status", children: w("Обработка файла...") }),
      /* @__PURE__ */ o.jsx(We, { error: h ? f : null, busy: c, retry: x.current ? () => {
        x.current && S(x.current, !0);
      } : void 0 }),
      !h && f && /* @__PURE__ */ o.jsx("p", { role: "status", children: w(f) })
    ] })
  ] });
};
function Cx() {
  const r = mt(), [l, i] = v.useState(null), [c, d] = v.useState([]), f = Ft(), m = Ft(), h = v.useCallback(() => f.run(async () => {
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
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(Ei, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(aa, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: l, musicOptions: c, saveSettings: x, settingsFeedback: f, musicFeedback: m };
}
const jx = "_form_1ijxr_1", Ex = "_field_1ijxr_7", Nx = "_input_1ijxr_13", Tx = "_label_1ijxr_29", Rx = "_help_1ijxr_35", Px = "_toggleHelp_1ijxr_40", tt = {
  form: jx,
  field: Ex,
  input: Nx,
  label: Tx,
  help: Rx,
  toggleHelp: Px
}, Ax = ({ data: r, onChange: l }) => {
  const i = (c, d) => {
    l({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ o.jsx(Be, { label: w("Base URL"), value: r.base_url ?? "", placeholder: w("http://192.168.31.83:9379"), onChange: (c) => i("base_url", c.target.value) }),
    /* @__PURE__ */ o.jsx(Be, { label: w("Token"), value: r.token ?? "", placeholder: w("Bearer ..."), onChange: (c) => i("token", c.target.value) })
  ] });
}, $x = ({ data: r, musicOptions: l, musicUnavailable: i, onChange: c }) => {
  const d = (m, h) => {
    c({
      ...r,
      [m]: h
    });
  }, f = (m, h, g = "") => {
    const x = l.some((y) => y.value === g);
    return /* @__PURE__ */ o.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: tt.label, children: w(m) }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: tt.input,
          value: g,
          onChange: (y) => d(h, y.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: w("Не выбрано") }),
            g && !x && /* @__PURE__ */ o.jsx("option", { value: g, children: g }),
            l.map((y) => /* @__PURE__ */ o.jsx("option", { value: y.value, children: y.label }, y.value))
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
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
    l.length === 0 && !i && /* @__PURE__ */ o.jsx("span", { className: tt.help, children: w("Музыка на сервере не найдена.") })
  ] });
}, bx = ({ data: r, onChange: l }) => {
  const i = Nf(), c = (d, f) => {
    l({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ o.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: tt.label, children: w("Язык интерфейса") }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: tt.input,
          value: i,
          onChange: (d) => Yh(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ o.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      Be,
      {
        label: w("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => c("client_id", d.target.value),
        placeholder: w("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ o.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: tt.label, children: w("Theme") }),
      /* @__PURE__ */ o.jsxs("select", { className: tt.input, value: r.theme ?? "dark", onChange: (d) => c("theme", d.target.value), children: [
        /* @__PURE__ */ o.jsx("option", { value: "dark", children: w("dark") }),
        /* @__PURE__ */ o.jsx("option", { value: "light", children: w("light") })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(er, { label: w("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, Ix = ({ data: r, onChange: l }) => {
  const i = (c, d) => l({ ...r, [c]: d });
  return /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ o.jsxs("div", { className: tt.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(er, { label: w("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => i("active_remout", c.target.checked) }),
      /* @__PURE__ */ o.jsx(oa, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: tt.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(er, { label: w("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ o.jsx(oa, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ o.jsx(
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
}, Lx = {
  global_music_timer: "",
  global_music_alarm: ""
}, hf = {
  remout: ia,
  timer_alarm: Lx,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, Mx = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), Dx = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), zx = (r) => ({
  remout: Mx(r == null ? void 0 : r.remout),
  timer_alarm: Dx(r == null ? void 0 : r.timer_alarm),
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
}, Ox = () => {
  const r = nt(), [l, i] = v.useState(hf), c = Ft(), [d, f] = v.useState(hf), { settings: m, musicOptions: h, saveSettings: g, settingsFeedback: x, musicFeedback: y } = Cx();
  v.useEffect(() => {
    if (!m) return;
    const T = zx(m);
    i(T), f(T), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: T.theme }));
  }, [m]);
  const _ = async (T) => {
    i((E) => ({ ...E, ...T })), T.theme && T.theme !== l.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: T.theme })), await c.run(async () => {
      await g({ theme: T.theme }), f((E) => ({ ...E, theme: T.theme }));
    }, { exclusive: !0 }));
  }, S = () => c.run(async () => {
    await g(yf(l, d)), f(l);
  }, { exclusive: !0 }), C = !!m && Object.keys(yf(l, d)).length > 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Rt,
      {
        title: w("Настройки")
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      /* @__PURE__ */ o.jsx(Pt, {}),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { children: w("Настройки") }),
      /* @__PURE__ */ o.jsxs("div", { className: G.settingsSections, children: [
        /* @__PURE__ */ o.jsx(We, { ...x }),
        /* @__PURE__ */ o.jsx(We, { ...y }),
        /* @__PURE__ */ o.jsx(We, { ...c }),
        /* @__PURE__ */ o.jsxs("section", { className: G.settingsSection, "aria-label": w("Общие"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: w("Общие") }),
          /* @__PURE__ */ o.jsx(
            bx,
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
        /* @__PURE__ */ o.jsxs("section", { className: G.settingsSection, "aria-label": w("Подключения"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: w("Подключения") }),
          /* @__PURE__ */ o.jsxs("div", { className: G.connectionFields, children: [
            /* @__PURE__ */ o.jsx(Ix, { data: l, onChange: _ }),
            l.active_remout && /* @__PURE__ */ o.jsx(
              Ax,
              {
                data: l.remout ?? ia,
                onChange: (T) => i((E) => ({ ...E, remout: T }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: G.settingsSection, "aria-label": w("Timer / Alarm"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: w("Timer / Alarm") }),
          /* @__PURE__ */ o.jsx(
            $x,
            {
              data: l.timer_alarm,
              musicOptions: h,
              musicUnavailable: y.busy || !!y.error,
              onChange: (T) => i({ ...l, timer_alarm: T })
            }
          )
        ] })
      ] }),
      C && (r ? /* @__PURE__ */ o.jsx("div", { className: G.settingsMobileActions, children: /* @__PURE__ */ o.jsx(
        le,
        {
          variant: "primary",
          disabled: c.busy || x.busy || !m,
          onClick: S,
          children: w("Сохранить")
        }
      ) }) : /* @__PURE__ */ o.jsx("div", { className: G.settingsActions, children: /* @__PURE__ */ o.jsx(le, { disabled: c.busy || x.busy || !m, onClick: S, children: w("Сохранить") }) }))
    ] })
  ] });
}, Pi = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const l = r.split(":").map(Number);
  return l.some((i) => !Number.isFinite(i) || i < 0) ? 0 : l.length === 3 ? l[0] * 3600 + l[1] * 60 + l[2] : l.length === 2 ? l[0] * 60 + l[1] : l.length === 1 ? l[0] : 0;
}, pp = (r) => typeof r == "string" || typeof r == "number" ? Pi(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Pi(r.count_timer || "") : 0, Fx = (r, l = "on", i = Date.now()) => {
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
}, Hx = (r) => {
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
  const r = mt(), l = Ft(), [i, c] = v.useState([]), [d, f] = v.useState([]), [m, h] = v.useState([]), [g, x] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), _ = v.useCallback(async () => {
    const U = await r.getPage("get_timer_requests_short", 1, 100), I = await Promise.all(
      _f(U).map(async (J) => {
        var K;
        const B = await r.getRecord(J.uuid, "get_timer_request");
        return ((K = Gn(B)) == null ? void 0 : K.data) ?? Gn(B);
      })
    );
    c(I.filter((J) => !!J && J.action_type === "create_timer"));
  }, [r]), S = v.useCallback(async () => {
    const U = await r.getPage("get_alarm_requests_short", 1, 100), I = await Promise.all(
      _f(U).map(async (J) => {
        var K;
        const B = await r.getRecord(J.uuid, "get_alarm_request");
        return ((K = Gn(B)) == null ? void 0 : K.data) ?? Gn(B);
      })
    );
    f(I.filter((J) => !!J && J.action_type !== "delete_alarm"));
  }, [r]), C = v.useCallback(async () => {
    const U = await r.getAllRecords("get_alarm_time_widgets_short"), I = await Promise.all(
      U.map(async (J) => {
        var K;
        const B = await r.getRecord(J.uuid, "get_alarm_time_widget");
        return ((K = Gn(B)) == null ? void 0 : K.data) ?? Gn(B);
      })
    );
    h(I.filter(Boolean));
  }, [r]), T = v.useCallback(async () => {
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
    T();
  }, []);
  const E = async (U, I) => await l.run(async () => {
    await U();
  }, { exclusive: !0 }) ? (await l.run(I, { retryable: !0 }), !0) : !1, N = async (U, I, J = 0.3) => {
    const B = {
      count_timer: gf(I),
      date_end: Hx(I)
    };
    return E(() => r.saveData({ name: `Таймер ${gf(I)}`, action_type: "create_timer", device_id: U, timer_time: B, volume_start: J }, "save_timer_request"), _);
  }, A = async (U) => E(() => r.deleteRecord(U.uuid, "delete_timer_request"), _), O = async (U, I, J = 0.3, B = "once", K = []) => E(() => r.saveData({ name: `Будильник ${I}`, action_type: "create_alarm", device_id: U, status: "on", time: I, volume_start: J, repeat_type: B, repeat_days: K }, "save_alarm_request"), async () => {
    await Promise.all([S(), C()]);
  }), M = async (U, I) => E(() => r.updateRecord(U.uuid, "update_alarm_request", { ...U, action_type: "edit_alarm", ...I }), async () => {
    await Promise.all([S(), C()]);
  }), z = async (U) => E(() => r.deleteRecord(U.uuid, "delete_alarm_request"), S);
  return {
    feedback: { ...l, retry: l.error ? l.retry ?? (() => {
      T();
    }) : void 0 },
    alarmTimeWidgets: m,
    refreshAlarmTimes: () => l.run(C, { retryable: !0 }),
    alarms: d,
    createAlarm: O,
    createTimer: N,
    deleteAlarm: z,
    devices: y,
    loading: g,
    stopTimer: A,
    timers: i,
    toTimerSeconds: Fx,
    updateAlarm: M
  };
}
const Wx = "_grid_w5y3x_31", Bx = "_card_w5y3x_38", Ux = "_empty_w5y3x_38", Vx = "_cardHeader_w5y3x_47", qx = "_cardTitle_w5y3x_54", Qx = "_meta_w5y3x_59", Kx = "_form_w5y3x_73", Yx = "_field_w5y3x_79", Gx = "_label_w5y3x_85", Jx = "_input_w5y3x_91", Xx = "_quickTabs_w5y3x_101", Zx = "_quickTab_w5y3x_101", ew = "_activeQuickTab_w5y3x_117", tw = "_cardLead_w5y3x_135", nw = "_cardIcon_w5y3x_143", rw = "_cardButton_w5y3x_148", sw = "_wheelPicker_w5y3x_160", ow = "_wheelColumn_w5y3x_173", aw = "_wheelSelect_w5y3x_180", lw = "_footerActions_w5y3x_202", iw = "_saveButton_w5y3x_208", uw = "_volumeLabel_w5y3x_226", cw = "_volumeValue_w5y3x_232", dw = "_alarmTimeFields_w5y3x_237", ae = {
  grid: Wx,
  card: Bx,
  empty: Ux,
  cardHeader: Vx,
  cardTitle: qx,
  meta: Qx,
  form: Kx,
  field: Yx,
  label: Gx,
  input: Jx,
  quickTabs: Xx,
  quickTab: Zx,
  activeQuickTab: ew,
  cardLead: tw,
  cardIcon: nw,
  cardButton: rw,
  wheelPicker: sw,
  wheelColumn: ow,
  wheelSelect: aw,
  footerActions: lw,
  saveButton: iw,
  volumeLabel: uw,
  volumeValue: cw,
  alarmTimeFields: dw
}, fw = [5, 10, 15, 30, 45, 60], xf = (r) => {
  const l = Math.max(0, r), i = Math.floor(l / 3600), c = Math.floor(l % 3600 / 60), d = l % 60;
  return [i, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, pw = (r, l, i) => Math.max(1, r * 3600 + l * 60 + i), mw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), hw = () => {
  const r = nt(), { feedback: l, createTimer: i, devices: c, loading: d, stopTimer: f, timers: m, toTimerSeconds: h } = mp(), [g, x] = v.useState(!1), [y, _] = v.useState(""), [S, C] = v.useState(0.3), [T, E] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [N, A] = v.useState({});
  v.useEffect(() => {
    A(Object.fromEntries(m.map((I) => [I.uuid, h(I.timer_time, I.status)])));
  }, [m, h]), v.useEffect(() => {
    const I = window.setInterval(() => {
      A((J) => Object.fromEntries(Object.entries(J).map(([B, K]) => {
        var me;
        return [B, ((me = m.find((de) => de.uuid === B)) == null ? void 0 : me.status) === "paused" ? K : Math.max(0, K - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(I);
  }, [m]);
  const O = v.useMemo(() => new Map(c.map((I) => [I.id, I.name])), [c]), M = pw(T.hours, T.minutes, T.seconds), z = async () => {
    y && await i(y, M, S) && x(!1);
  }, U = (I) => E(mw(I * 60));
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(Rt, { title: w("Таймеры") }),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ o.jsx(We, { ...l }),
      /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: G.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w("Таймеры") }) }),
        /* @__PURE__ */ o.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ o.jsx(nr, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "primary",
            onClick: () => x(!0),
            children: w("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "primary",
            onClick: () => x(!0),
            children: w("🞢 Создать")
          }
        ) })
      ] }),
      d && /* @__PURE__ */ o.jsx(Ir, {}),
      /* @__PURE__ */ o.jsx("div", { className: ae.grid, children: m.length ? m.map((I) => {
        const J = h(I.timer_time, I.status), B = pp(I.timer_time);
        return /* @__PURE__ */ o.jsx("div", { className: ae.card, children: /* @__PURE__ */ o.jsxs("div", { className: ae.cardHeader, children: [
          /* @__PURE__ */ o.jsxs("div", { className: ae.cardLead, children: [
            /* @__PURE__ */ o.jsx(tp, { className: ae.cardIcon, size: 26 }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("h2", { className: ae.cardTitle, children: xf(N[I.uuid] ?? J) }),
              /* @__PURE__ */ o.jsxs("div", { className: ae.meta, children: [
                w("Заведен на"),
                " ",
                xf(B),
                " • ",
                O.get(I.device_id) || I.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(le, { variant: "remove", onClick: () => f(I), children: w("Удалить") })
        ] }) }, I.uuid);
      }) : !d && !l.error && /* @__PURE__ */ o.jsx("div", { className: ae.empty, children: w("Нет запущенных таймеров.") }) }),
      /* @__PURE__ */ o.jsx(an, { feedback: l, open: g, onClose: () => x(!1), title: w("Создать таймер"), footer: /* @__PURE__ */ o.jsx("div", { className: ae.footerActions, children: /* @__PURE__ */ o.jsx(le, { className: ae.saveButton, onClick: z, disabled: !y, children: w("Создать") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: ae.form, children: [
        /* @__PURE__ */ o.jsx("div", { className: ae.wheelPicker, "aria-label": w("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((I) => /* @__PURE__ */ o.jsxs("label", { className: ae.wheelColumn, children: [
          /* @__PURE__ */ o.jsx("span", { className: ae.label, children: w(I === "hours" ? "Часы" : I === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              className: ae.wheelSelect,
              type: "number",
              min: 0,
              max: I === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: T[I],
              onChange: (J) => {
                const B = Math.max(0, Math.min(I === "hours" ? 23 : 59, Math.trunc(Number(J.target.value) || 0)));
                E((K) => ({ ...K, [I]: B }));
              }
            }
          )
        ] }, I)) }),
        /* @__PURE__ */ o.jsxs("div", { className: ae.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: ae.label, children: w("Быстрое создание") }),
          /* @__PURE__ */ o.jsx("div", { className: ae.quickTabs, children: fw.map((I) => /* @__PURE__ */ o.jsxs("button", { type: "button", className: `${ae.quickTab} ${M === I * 60 ? ae.activeQuickTab : ""}`, onClick: () => U(I), children: [
            I,
            " ",
            w("мин")
          ] }, I)) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Ar,
          {
            label: w("Устройство воспроизведения"),
            placeholder: w("Выберите устройство"),
            value: y,
            options: c.map((I) => ({ value: I.id, label: I.name })),
            onSelect: _
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: ae.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${ae.label} ${ae.volumeLabel}`, children: [
            w("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: ae.volumeValue, children: [
              Math.round(S * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: ae.input, type: "range", min: "0", max: "1", step: "0.05", value: S, onChange: (I) => C(Number(I.target.value)) })
        ] })
      ] }) })
    ] })
  ] });
}, vw = ({ command: r, open: l, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const m = r.status === "on";
  return /* @__PURE__ */ o.jsx(Ki, { open: l, title: r.title, uuid: r.uuid, onClose: i, actions: [
    { label: m ? "Выключить" : "Включить", onClick: () => c(r, m ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, yw = (r) => {
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
], gw = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], _w = (r = "once", l = []) => r === "daily" ? w("ежедневно") : r === "weekdays" ? w("по будням") : r === "weekends" ? w("по выходным") : r === "custom" ? l.length ? l.map((i) => {
  var c;
  return (c = $i.find((d) => d.key === i)) != null && c.label ? w($i.find((d) => d.key === i).label) : i;
}).join(", ") : w("кастом") : w("однократно"), xw = () => {
  const r = nt(), { feedback: l, alarmTimeWidgets: i, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: m, devices: h, loading: g, updateAlarm: x } = mp(), [y, _] = v.useState(!1), [S, C] = v.useState(null), [T, E] = v.useState(null), [N, A] = v.useState(""), [O, M] = v.useState("08:00"), [z, U] = v.useState(0.3), [I, J] = v.useState("once"), [B, K] = v.useState([]), me = v.useMemo(() => Array.from(new Set([...i.flatMap((H) => H.time || []), ...d.map((H) => H.time)].map(yw).filter((H) => H !== null))), [i, d]), de = v.useMemo(() => new Map(h.map((H) => [H.id, H.name])), [h]), Te = d.find((H) => H.uuid === S) || null, Ee = async () => {
    if (!N || !O) return;
    const H = d.find((D) => D.uuid === T);
    if (H) {
      if (!await x(H, { device_id: N, time: O, volume_start: z, repeat_type: I, repeat_days: B })) return;
    } else if (!await f(N, O, z, I, B)) return;
    E(null), _(!1);
  }, he = () => {
    E(null), _(!0), c();
  }, ge = (H) => {
    M(H.time), A(H.device_id), U(H.volume_start ?? 0.3), J(H.repeat_type ?? "once"), K(H.repeat_days ?? []), c(), E(H.uuid), C(null), _(!0);
  }, Ce = (H) => K((D) => D.includes(H) ? D.filter((X) => X !== H) : [...D, H]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(Rt, { title: w("Будильники") }),
    /* @__PURE__ */ o.jsxs("div", { className: G.page, children: [
      !y && /* @__PURE__ */ o.jsx(We, { ...l }),
      /* @__PURE__ */ o.jsx(Pt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: G.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: G.title, children: w("Будильники") }) }),
        /* @__PURE__ */ o.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ o.jsx(nr, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "primary",
            onClick: he,
            children: w("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "primary",
            onClick: he,
            children: w("🞢 Создать")
          }
        ) })
      ] }),
      g && /* @__PURE__ */ o.jsx(Ir, {}),
      /* @__PURE__ */ o.jsx("div", { className: ae.grid, children: d.length ? d.map((H) => /* @__PURE__ */ o.jsx("button", { className: `${ae.card} ${ae.cardButton}`, type: "button", onClick: () => C(H.uuid), children: /* @__PURE__ */ o.jsxs("div", { className: ae.cardHeader, children: [
        /* @__PURE__ */ o.jsxs("div", { className: ae.cardLead, children: [
          /* @__PURE__ */ o.jsx(tp, { className: ae.cardIcon, size: 26 }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h2", { className: ae.cardTitle, children: H.time }),
            /* @__PURE__ */ o.jsxs("div", { className: ae.meta, children: [
              _w(H.repeat_type, H.repeat_days),
              " • ",
              de.get(H.device_id) || H.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            onClick: (D) => D.stopPropagation(),
            onMouseDown: (D) => D.stopPropagation(),
            children: /* @__PURE__ */ o.jsx(er, { label: w(""), checked: H.status !== "off", onClick: (D) => D.stopPropagation(), onChange: (D) => x(H, { status: D.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, H.uuid)) : !g && !l.error && /* @__PURE__ */ o.jsx("div", { className: ae.empty, children: w("Нет будильников.") }) }),
      /* @__PURE__ */ o.jsx(an, { feedback: l, open: y, onClose: () => {
        _(!1), E(null);
      }, title: T ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ o.jsx("div", { className: ae.footerActions, children: /* @__PURE__ */ o.jsx(le, { className: ae.saveButton, onClick: Ee, disabled: !N || !O, children: w("Сохранить") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: ae.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: ae.alarmTimeFields, role: "group", "aria-label": w("Время будильника"), children: [
          /* @__PURE__ */ o.jsx(
            Ar,
            {
              label: w("Часы"),
              value: O.split(":")[0],
              options: Array.from({ length: 24 }, (H, D) => ({ value: String(D).padStart(2, "0"), label: String(D).padStart(2, "0") })),
              onSelect: (H) => M(`${H}:${O.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ar,
            {
              label: w("Минуты"),
              value: O.split(":")[1],
              options: Array.from({ length: 60 }, (H, D) => ({ value: String(D).padStart(2, "0"), label: String(D).padStart(2, "0") })),
              onSelect: (H) => M(`${O.split(":")[0]}:${H}`)
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: ae.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: ae.label, children: w("Ранее заданное время") }),
          /* @__PURE__ */ o.jsx("div", { className: ae.quickTabs, children: me.length ? me.map((H) => /* @__PURE__ */ o.jsx("button", { type: "button", className: `${ae.quickTab} ${O === H ? ae.activeQuickTab : ""}`, onClick: () => M(H), children: H }, H)) : /* @__PURE__ */ o.jsx("span", { className: ae.meta, children: w("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Ar,
          {
            label: w("Повторы"),
            value: I,
            options: gw.map((H) => ({ ...H, label: w(H.label) })),
            onSelect: (H) => J(H)
          }
        ),
        I === "custom" && /* @__PURE__ */ o.jsx("div", { className: ae.quickTabs, role: "group", "aria-label": w("Дни повтора"), children: $i.map((H) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": B.includes(H.key),
            className: `${ae.quickTab} ${B.includes(H.key) ? ae.activeQuickTab : ""}`,
            onClick: () => Ce(H.key),
            children: w(H.label)
          },
          H.key
        )) }),
        /* @__PURE__ */ o.jsx(
          Ar,
          {
            label: w("Устройство воспроизведения"),
            placeholder: w("Выберите устройство"),
            value: N,
            options: h.map((H) => ({ value: H.id, label: H.name })),
            onSelect: A
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: ae.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${ae.label} ${ae.volumeLabel}`, children: [
            w("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: ae.volumeValue, children: [
              Math.round(z * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: ae.input, type: "range", min: "0", max: "1", step: "0.05", value: z, onChange: (H) => U(Number(H.target.value)) })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(
        vw,
        {
          open: !!Te,
          onClose: () => C(null),
          command: Te,
          onEdit: (H) => ge(H),
          onToggleStatus: (H, D) => x(H, { status: D }),
          onDelete: (H) => {
            m(H), C(null);
          }
        }
      )
    ] })
  ] });
}, ww = () => {
  const r = Ui(), l = Qi(), i = Lr(), { pathname: c } = pt(), d = i ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && i !== !1 ? i === null ? /* @__PURE__ */ o.jsx(Ir, {}) : /* @__PURE__ */ o.jsx(Nn, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ o.jsxs(ey, { children: [
    /* @__PURE__ */ o.jsx(Ge, { path: "/commands/whisper", element: l ? /* @__PURE__ */ o.jsx(B_, {}) : /* @__PURE__ */ o.jsx(Nn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ge, { path: "/logs", element: r && l ? /* @__PURE__ */ o.jsx(J_, {}) : /* @__PURE__ */ o.jsx(Nn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ge, { path: "/downloads", element: l ? /* @__PURE__ */ o.jsx(kx, {}) : /* @__PURE__ */ o.jsx(Nn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/",
        element: /* @__PURE__ */ o.jsx(
          Nn,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/scripts",
        element: /* @__PURE__ */ o.jsx(k0, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/commands",
        element: /* @__PURE__ */ o.jsx(
          Nn,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ o.jsx(J0, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ o.jsx(Z0, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ o.jsx(
          Nn,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ o.jsx(nx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ o.jsx(ix, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ o.jsx(fx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/timer",
        element: /* @__PURE__ */ o.jsx(hw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/alarm",
        element: /* @__PURE__ */ o.jsx(xw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "/settings",
        element: /* @__PURE__ */ o.jsx(Ox, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge,
      {
        path: "*",
        element: /* @__PURE__ */ o.jsx(
          Nn,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] });
}, hp = "ha-dialog-ui-theme", Si = (r) => r === "light" ? "light" : "dark", Sw = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(hp, r);
}, kw = () => {
  const r = Ft(), l = Nf(), i = mt(), [c, d] = v.useState(!1), [f, m] = v.useState(null), [h, g] = v.useState(() => Si(localStorage.getItem(hp)));
  return v.useEffect(() => {
    Sw(h);
  }, [h]), v.useEffect(() => {
    let x = !0, y = !1, _ = !1, S = !1;
    r.run(async () => {
      const N = await i.getSettings();
      x && (y || g(Si(N.theme)), S || d(!!N.api_commands_enabled), _ || m(!!N.active_remout));
    }, { retryable: !0 });
    const C = (N) => {
      y = !0, g(Si(N.detail));
    }, T = (N) => {
      _ = !0, m(N.detail);
    }, E = (N) => {
      S = !0, d(!!N.detail);
    };
    return window.addEventListener(Ei, E), window.addEventListener(aa, T), window.addEventListener("ha-dialog-ui-theme-change", C), () => {
      x = !1, window.removeEventListener(Ei, E), window.removeEventListener(aa, T), window.removeEventListener("ha-dialog-ui-theme-change", C);
    };
  }, [i, r.run]), /* @__PURE__ */ o.jsx(Kf.Provider, { value: c, children: /* @__PURE__ */ o.jsx(ap.Provider, { value: f, children: /* @__PURE__ */ o.jsxs("div", { className: "appShell", "data-theme": h, lang: l, children: [
    /* @__PURE__ */ o.jsx(We, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ o.jsx(Ir, {}) : /* @__PURE__ */ o.jsx(ww, {})
  ] }) }) });
};
class Cw {
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
        const C = String((S == null ? void 0 : S.media_content_id) || ""), T = String((S == null ? void 0 : S.title) || C);
        if (C) {
          if (S != null && S.can_expand) {
            try {
              await g(C);
            } catch (N) {
              f.push(N);
            }
            return;
          }
          if (l.test(T) || l.test(C) || (S == null ? void 0 : S.media_content_type) === "music" || (E = S == null ? void 0 : S.media_content_type) != null && E.startsWith("audio/")) {
            const N = "media-source://media_source/local/", A = C.startsWith(N) ? C.slice(N.length) : C;
            d.set(A, {
              value: A,
              label: T
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
async function jw() {
  return vp(window.hass);
}
function Ew({
  children: r,
  hass: l
}) {
  const [i, c] = v.useState(null), [d, f] = v.useState(0), m = v.useRef(null), [h, g] = v.useState(!1), [x, y] = v.useState(!1);
  return v.useEffect(() => {
    let _ = !0;
    c(null);
    async function S() {
      const C = l ? vp(l) : await jw();
      if (!_) return;
      m.current ? m.current.setHass(C) : m.current = new Cw(C);
      const T = C.user ?? await C.connection.sendMessagePromise({ type: "auth/current_user" });
      _ && (g((T == null ? void 0 : T.is_admin) === !0), y(!0));
    }
    return S().catch((C) => {
      _ && c(Jn(C));
    }), () => {
      _ = !1;
    };
  }, [l, d]), i ? /* @__PURE__ */ o.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ o.jsx(We, { error: i, retry: () => f((_) => _ + 1) }) }) : !x || !m.current ? /* @__PURE__ */ o.jsx(Ir, { label: w("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ o.jsx(Yf.Provider, { value: m.current, children: /* @__PURE__ */ o.jsx(op.Provider, { value: h, children: r }) });
}
function Nw({ hass: r }) {
  return /* @__PURE__ */ o.jsx(Cy, { children: /* @__PURE__ */ o.jsx(Ew, { hass: r, children: /* @__PURE__ */ o.jsx(kw, {}) }) });
}
const wf = "ha-dialog-ui-panel", Sf = "ha-dialog-ui-style";
class Tw extends HTMLElement {
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
    c.id = Sf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._loader_m2244_1{width:100%;min-height:220px;display:flex;align-items:center;justify-content:center;gap:14px;color:var(--text-secondary)}._fullscreen_m2244_11{min-height:100vh}._spinner_m2244_15{width:42px;height:42px;border-radius:50%;border:4px solid var(--loader-track);border-top-color:var(--primary);animation:_spin_m2244_15 .85s linear infinite}._label_m2244_24{font-size:15px;font-weight:600}@keyframes _spin_m2244_15{to{transform:rotate(360deg)}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._tabs_14hon_1{display:inline-flex;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_14hon_14{position:relative}._tab_14hon_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_14hon_1:hover{color:var(--text);background:var(--control-background)}._tab_14hon_1:active{transform:scale(.98)}._active_14hon_47{color:var(--text);background:var(--primary);box-shadow:none}._tab_14hon_1>span{margin-left:5px}._menu_14hon_57{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_14hon_74{margin-left:8px}._tab_14hon_1[aria-expanded=true] ._chevron_14hon_74{transform:rotate(180deg)}._tab_14hon_1:focus-visible,._menuItem_14hon_82:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_14hon_82{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_14hon_82:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_14hon_82._active_14hon_47{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_14hon_1{flex-wrap:wrap;max-width:100%}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_rqdjx_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_rqdjx_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_rqdjx_9:empty{display:none}._hidden_rqdjx_20{visibility:hidden}._overlay_rqdjx_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_rqdjx_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_rqdjx_24 ._card_rqdjx_32{flex:1;min-height:0}._title_rqdjx_51,._subtitle_rqdjx_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_rqdjx_1 1.4s ease-in-out infinite}._title_rqdjx_51{width:45%;max-width:320px;height:18px}._subtitle_rqdjx_51{width:25%;max-width:180px;height:13px}._srOnly_rqdjx_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_rqdjx_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_rqdjx_51,._subtitle_rqdjx_51{animation:none}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}\n", i.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), i.appendChild(this.container)), this.root = kh.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ o.jsx(Cf.StrictMode, { children: /* @__PURE__ */ o.jsx(nv, { children: /* @__PURE__ */ o.jsx(Nw, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(wf) || customElements.define(wf, Tw);
